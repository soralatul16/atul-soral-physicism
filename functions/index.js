/* ═══════════════════════════════════════════════════════════
   PHYSICISM — Firebase Cloud Functions
   Phase 3: Soft Regeneration, Self-Solving, Analytics,
   Command-Term Enforcement, Style Anchoring
   ═══════════════════════════════════════════════════════════ */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { buildBlueprintPrompt } = require("./prompts/blueprint");
const { buildQuestionPrompt } = require("./prompts/question");
const { buildMarkschemePrompt } = require("./prompts/markscheme");
const { validateAndRepair, safeParseJSON, getThreshold } = require("./prompts/validator");
const { buildSelfSolvePrompt, compareSolutions } = require("./prompts/selfsolver");
const { buildOrchestratorPrompt } = require("./prompts/orchestrator");
const { getTargetedPatterns } = require("./prompts/retrieval");
const memoryModule = require("./memory");
const analytics = require("./analytics");

admin.initializeApp();
const db = admin.firestore();

// ── Secure API Key Access ──
const GROQ_API_KEY = functions.config().api?.groq || process.env.GROQ_API_KEY || "";
const GEMINI_API_KEY = functions.config().api?.gemini || process.env.GEMINI_API_KEY || "";

// ── Environment ──
const ENV = functions.config().app?.env || process.env.NODE_ENV || "production";

// ── Structured Logging ──
function logGeneration(entry) {
  const safe = { ...entry };
  if (safe.apiKey) safe.apiKey = "***REDACTED***";
  if (safe.key) safe.key = "***REDACTED***";
  if (safe.prompt && safe.prompt.length > 200) safe.prompt = safe.prompt.substring(0, 200) + "...[truncated]";
  console.log(JSON.stringify(safe));
}

function makeGenerationId() {
  return "gen_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
}

// ── Core AI caller with timeout, retries, logging, analytics ──
async function callModel(systemPrompt, userPrompt, opts = {}) {
  const {
    generationId = makeGenerationId(),
    phase = "unknown",
    preferredModel = "gemini",
    temperature = 0.7,
    maxTokens = 4096,
    timeoutMs = 60000,
    session = null  // analytics session
  } = opts;

  const key = preferredModel === "groq" ? GROQ_API_KEY : GEMINI_API_KEY;
  if (!key) {
    throw new functions.https.HttpsError("failed-precondition", "No API key for " + preferredModel);
  }

  const models = preferredModel === "groq"
    ? ["llama-3.3-70b-versatile", "llama-3.1-8b-instant"]
    : ["gemini-1.5-flash"];

  let lastError = null;
  for (let attempt = 0; attempt < models.length; attempt++) {
    const model = models[attempt];
    const startTime = Date.now();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      let response;
      if (preferredModel === "groq") {
        response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
          body: JSON.stringify({
            model,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            temperature,
            max_tokens: maxTokens,
            response_format: { type: "json_object" }
          }),
          signal: controller.signal
        });
      } else {
        response = await fetch(
          "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent?key=" + key,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: userPrompt }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] },
              generationConfig: { temperature, maxOutputTokens: maxTokens, responseMimeType: "application/json" }
            }),
            signal: controller.signal
          }
        );
      }

      clearTimeout(timeout);
      const duration = Date.now() - startTime;

      if (response.status === 429 && attempt < models.length - 1) {
        logGeneration({ generationId, phase, model, status: "rate_limited", attempt, duration });
        await new Promise(r => setTimeout(r, preferredModel === "groq" ? 2000 : 10000));
        continue;
      }

      if (!response.ok) {
        const errText = await response.text();
        const safeErr = errText.substring(0, 200).replace(key, "***REDACTED***");
        lastError = "API error " + response.status + ": " + safeErr;
        logGeneration({ generationId, phase, model, status: "error", httpStatus: response.status, attempt, duration });
        continue;
      }

      const data = await response.json();
      let text, tokenUsage;

      if (preferredModel === "groq") {
        text = data.choices?.[0]?.message?.content;
        tokenUsage = data.usage || {};
      } else {
        text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        tokenUsage = {
          prompt_tokens: data.usageMetadata?.promptTokenCount || 0,
          completion_tokens: data.usageMetadata?.candidatesTokenCount || 0
        };
      }

      if (!text) {
        lastError = "Empty response from " + model;
        logGeneration({ generationId, phase, model, status: "empty_response", attempt, duration });
        continue;
      }

      // Record analytics
      if (session) {
        analytics.recordPhase(session, { phase, model, durationMs: duration, tokenUsage, status: "success", attempt });
      }

      logGeneration({ generationId, phase, model, status: "success", attempt, duration, tokenUsage });

      const parsed = safeParseJSON(text);
      if (!parsed) {
        lastError = "JSON parse failed for " + model;
        logGeneration({ generationId, phase, model, status: "json_parse_error", attempt, duration });
        continue;
      }

      return parsed;

    } catch (err) {
      clearTimeout(timeout);
      const duration = Date.now() - startTime;

      if (err.name === "AbortError") {
        lastError = "Request timed out after " + timeoutMs + "ms";
        logGeneration({ generationId, phase, model, status: "timeout", attempt, duration });
      } else {
        lastError = err.message;
        logGeneration({ generationId, phase, model, status: "exception", error: err.message, attempt, duration });
      }

      if (session) {
        analytics.recordPhase(session, { phase, model, durationMs: duration, status: "error", attempt });
      }
      continue;
    }
  }

  throw new functions.https.HttpsError("internal", "All model attempts failed: " + lastError);
}

/* ═══════════════════════════════════════════════════════════
   Merge markschemes from msResult into qBlocks
   ═══════════════════════════════════════════════════════════ */
function mergeMarkschemes(qBlocks, msResult) {
  if (!msResult || !msResult.blocks || !Array.isArray(msResult.blocks)) return;
  for (let j = 0; j < qBlocks.length; j++) {
    if (qBlocks[j].mode !== "question") continue;
    const mb = msResult.blocks.find(x => x.data && x.data.question === qBlocks[j].data?.question) || msResult.blocks[j];
    if (mb) {
      if (mb.meta && mb.meta.markScheme) {
        qBlocks[j].meta = qBlocks[j].meta || {};
        qBlocks[j].meta.markScheme = mb.meta.markScheme;
      }
      if (mb.data) {
        if (mb.data.correct !== undefined) qBlocks[j].data.correct = mb.data.correct;
        if (mb.data.explanation !== undefined) qBlocks[j].data.explanation = mb.data.explanation;
      }
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   Soft regeneration: regenerate ONLY failed components
   ═══════════════════════════════════════════════════════════ */
async function softRegenerate(result, failedNodes, config, opts) {
  const { generationId, preferredModel, session } = opts;

  // Group failures by type
  const msFailures = failedNodes.filter(f => f.fixType === "markscheme");
  const ctFailures = failedNodes.filter(f => f.fixType === "command_term_mismatch");
  const structFailures = failedNodes.filter(f => f.fixType === "malformed_section");

  let regenerated = false;

  // ── Fix markscheme-only failures ──
  if (msFailures.length > 0 && msFailures.length <= 5) {
    logGeneration({ generationId, phase: "soft_regen_markscheme", failedCount: msFailures.length });

    const failedBlocks = msFailures.map(f => result.blocks[f.blockIndex]).filter(Boolean);
    if (failedBlocks.length > 0) {
      const partialResult = { blocks: failedBlocks };
      const { buildMarkschemePrompt } = require("./prompts/markscheme");
      const mp = buildMarkschemePrompt(partialResult);

      try {
        const msResult = await callModel(mp.systemPrompt, mp.userPrompt, {
          generationId, phase: "soft_regen_ms", preferredModel,
          temperature: 0.2, maxTokens: 2048, session
        });
        mergeMarkschemes(result.blocks, msResult);
        regenerated = true;
      } catch (err) {
        logGeneration({ generationId, phase: "soft_regen_ms_failed", error: err.message });
      }
    }
  }

  // ── Fix command-term mismatches by auto-correcting metadata ──
  if (ctFailures.length > 0) {
    for (const f of ctFailures) {
      const block = result.blocks[f.blockIndex];
      if (!block || block.mode !== "question") continue;

      // Deterministic fix: align command term to strand
      const strand = block.meta?.strand || "i";
      if (strand === "i" && ["Analyse", "Evaluate", "Discuss", "Justify"].includes(block.meta.commandTerm)) {
        block.meta.commandTerm = "State";
        regenerated = true;
      }
      if (strand === "iii" && ["State", "Define", "Name"].includes(block.meta.commandTerm)) {
        block.meta.commandTerm = "Explain";
        regenerated = true;
      }
    }
  }

  return regenerated;
}

/* ═══════════════════════════════════════════════════════════
   PHASE 3: Full Pipeline with Soft Regeneration,
   Self-Solving, Analytics, Command-Term Enforcement
   ═══════════════════════════════════════════════════════════ */

exports.generateModular = functions
  .runWith({ timeoutSeconds: 540, memory: "512MB" })
  .https.onCall(async (data, context) => {
    const { config, preferredModel } = data;
    const generationId = makeGenerationId();
    const session = analytics.createSession(generationId);
    const threshold = getThreshold(ENV);

    logGeneration({ generationId, phase: "start", env: ENV, threshold, config: { topic: config.topic, criterion: config.criterion, totalMarks: config.totalMarks, grade: config.grade } });

    // ── CALL 0: ORCHESTRATOR ──
    // Fetch localized recent memory for the requested topic and grade
    const topicMemory = await memoryModule.getMemory(db, config.topic, config.grade);
    
    // Retrieve static structural IB patterns for the requested criterion
    const patterns = getTargetedPatterns([config.criterion || "A"]);

    let orchestratorPlan = null;
    const op = buildOrchestratorPrompt(config, topicMemory, patterns);
    try {
      const orchestratorResult = await callModel(op.systemPrompt, op.userPrompt, {
        generationId, phase: "orchestrator", preferredModel,
        temperature: 0.2, maxTokens: 800, session
      });
      orchestratorPlan = orchestratorResult.orchestratorPlan || orchestratorResult;
      logGeneration({ generationId, phase: "orchestrator_done", forbiddenScenarios: orchestratorPlan.forbiddenScenarios?.length || 0 });
    } catch (e) {
      logGeneration({ generationId, phase: "orchestrator_error", error: e.message });
      // Non-fatal, continue without orchestrator constraints
    }

    // ── CALL 1: BLUEPRINT ──
    const bp = buildBlueprintPrompt(config, orchestratorPlan);
    const blueprintResult = await callModel(bp.systemPrompt, bp.userPrompt, {
      generationId, phase: "blueprint", preferredModel,
      temperature: 0.6, maxTokens: 2048, session
    });

    const blueprint = blueprintResult.blueprint || blueprintResult;
    const sections = blueprintResult.sections || [{ id: 1, name: "Section 1" }];
    logGeneration({ generationId, phase: "blueprint_done", slotCount: Array.isArray(blueprint) ? blueprint.length : 0 });

    // ── CALL 2: QUESTIONS ──
    const qp = buildQuestionPrompt(
      Array.isArray(blueprint) ? blueprint : [blueprint],
      sections, config
    );
    const questionResult = await callModel(qp.systemPrompt, qp.userPrompt, {
      generationId, phase: "questions", preferredModel,
      temperature: 0.7, maxTokens: 4096, session
    });

    // Validate questions (pre-markscheme)
    const qValidation = validateAndRepair(questionResult, config, { env: ENV, checkMarkSchemes: false });
    logGeneration({ generationId, phase: "questions_validated", score: qValidation.score, issues: qValidation.issues.length, failedNodes: qValidation.failedNodes.length, subscores: qValidation.subscores });

    if (qValidation.score < 3 || !qValidation.result) {
      const finalSession = analytics.finalizeSession(session, { finalScore: qValidation.score, softRegenerations: 0 });
      analytics.saveSession(db, finalSession).catch(() => {});
      throw new functions.https.HttpsError("internal", "Question quality too low (score: " + qValidation.score + ")");
    }

    // ── CALL 3: MARKSCHEMES ──
    const mp = buildMarkschemePrompt(qValidation.result);
    const msResult = await callModel(mp.systemPrompt, mp.userPrompt, {
      generationId, phase: "markscheme", preferredModel,
      temperature: 0.2, maxTokens: 4096, session
    });
    mergeMarkschemes(qValidation.result.blocks, msResult);

    // ── CALL 4: SELF-SOLVING RELIABILITY CHECK ──
    let selfSolveContradictions = 0;
    const selfSolvePromptData = buildSelfSolvePrompt(qValidation.result.blocks);
    if (selfSolvePromptData) {
      try {
        const solveResult = await callModel(selfSolvePromptData.systemPrompt, selfSolvePromptData.userPrompt, {
          generationId, phase: "self_solve", preferredModel,
          temperature: 0.1, maxTokens: 2048, session
        });

        const comparison = compareSolutions(
          qValidation.result.blocks.filter(b => b.mode === "question"),
          solveResult
        );

        selfSolveContradictions = comparison.contradictions.length;

        logGeneration({
          generationId, phase: "self_solve_done",
          contradictions: comparison.contradictions.length,
          physicsFlags: comparison.physicsFlags.length,
          mcqMismatches: comparison.mcqMismatches.length
        });

        // Auto-fix MCQ mismatches (already done in compareSolutions)
        // Log contradictions as warnings
        if (comparison.contradictions.length > 0) {
          logGeneration({ generationId, phase: "contradictions_detected", details: comparison.contradictions });
        }
        if (comparison.physicsFlags.length > 0) {
          logGeneration({ generationId, phase: "physics_flags", details: comparison.physicsFlags });
        }
      } catch (err) {
        logGeneration({ generationId, phase: "self_solve_error", error: err.message });
        // Non-fatal — continue without self-solve
      }
    }

    // ── POST-MARKSCHEME VALIDATION ──
    const postMsValidation = validateAndRepair(qValidation.result, config, { env: ENV, checkMarkSchemes: true });
    logGeneration({ generationId, phase: "post_ms_validation", score: postMsValidation.score, failedNodes: postMsValidation.failedNodes.length, subscores: postMsValidation.subscores });

    // ── SOFT REGENERATION (if score below threshold but above hard floor) ──
    let softRegenCount = 0;
    if (postMsValidation.score < threshold && postMsValidation.score >= 3 && postMsValidation.failedNodes.length > 0) {
      logGeneration({ generationId, phase: "soft_regen_start", score: postMsValidation.score, threshold, failedCount: postMsValidation.failedNodes.length });

      const didRegen = await softRegenerate(postMsValidation.result, postMsValidation.failedNodes, config, {
        generationId, preferredModel, session
      });

      if (didRegen) {
        softRegenCount++;
        session.softRegenerations = softRegenCount;
      }
    }

    // ── FINAL VALIDATION ──
    const finalValidation = validateAndRepair(postMsValidation.result || qValidation.result, config, { env: ENV, checkMarkSchemes: true });

    // ── ANALYTICS ──
    const finalSession = analytics.finalizeSession(session, {
      finalScore: finalValidation.score,
      finalSubscores: finalValidation.subscores,
      selfSolveContradictions,
      softRegenerations: softRegenCount
    });
    const summary = analytics.summarize(finalSession);
    logGeneration({ generationId, phase: "complete", ...summary });

    // Save analytics (non-blocking)
    analytics.saveSession(db, finalSession).catch(() => {});

    // Save memory (non-blocking)
    if (finalValidation.score >= 3) {
      memoryModule.updateMemory(db, config.topic, config.grade, finalValidation.result, summary).catch(() => {});
    }

    // ── RETURN ──
    if (finalValidation.score < 3) {
      throw new functions.https.HttpsError("internal", "Final quality too low (score: " + finalValidation.score + ")");
    }

    // Attach analytics summary to response for client visibility
    const response = finalValidation.result;
    response._analytics = {
      generationId,
      score: finalValidation.score,
      subscores: finalValidation.subscores,
      wallClockSec: summary.wallClockSec,
      estimatedCost: summary.estimatedCostUSD,
      contradictions: selfSolveContradictions,
      softRegenerations: softRegenCount
    };

    return response;
  });

/* ═══════════════════════════════════════════════════════════
   LEGACY: Phase 1 single-call endpoint (kept for fallback)
   ═══════════════════════════════════════════════════════════ */

const LEGACY_SYSTEM_PROMPT = `You are a strict IB MYP Physics examiner (Grades 7-10).
Generate an exam section in VALID JSON matching this schema:
{
  "blocks": [
    {
      "mode": "question",
      "meta": { "marks": 2, "difficulty": 3, "criterion": "A", "strand": "i", "commandTerm": "State" },
      "data": { "question": "...", "markScheme": [], "explanation": "" }
    }
  ]
}
IMPORTANT: Never output markdown. Only pure JSON.`;

const LEGACY_MS_PROMPT = `You are an IB MYP Physics chief examiner. Your ONLY job is to write accurate mark schemes and explanations. Given the JSON array of questions, calculate answers step-by-step and fill in the 'markScheme' array and 'explanation' string. Preserve the exact JSON structure. Return ONLY valid JSON.`;

exports.generateExamPipeline = functions.https.onCall(async (data, context) => {
  const { prompt, isMarkSchemePhase, preferredModel } = data;
  const generationId = makeGenerationId();
  const sysPrompt = isMarkSchemePhase ? LEGACY_MS_PROMPT : LEGACY_SYSTEM_PROMPT;
  const temp = isMarkSchemePhase ? 0.2 : 0.7;

  return await callModel(sysPrompt, prompt, {
    generationId, phase: isMarkSchemePhase ? "legacy_markscheme" : "legacy_questions",
    preferredModel, temperature: temp, maxTokens: 4096
  });
});
