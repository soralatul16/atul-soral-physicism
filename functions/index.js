/* ═══════════════════════════════════════════════════════════
   PHYSICISM — Firebase Cloud Functions
   Phase 2: Modular Blueprint → Question → Markscheme Pipeline
   With Phase 1 protections: AbortController, generationId,
   structured logging, API key redaction.
   ═══════════════════════════════════════════════════════════ */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { buildBlueprintPrompt } = require("./prompts/blueprint");
const { buildQuestionPrompt } = require("./prompts/question");
const { buildMarkschemePrompt } = require("./prompts/markscheme");
const { validateAndRepair, safeParseJSON } = require("./prompts/validator");

admin.initializeApp();

// ── Secure API Key Access ──
const GROQ_API_KEY = functions.config().api?.groq || process.env.GROQ_API_KEY || "";
const GEMINI_API_KEY = functions.config().api?.gemini || process.env.GEMINI_API_KEY || "";

// ── Structured Logging ──
function logGeneration(entry) {
  // NEVER log API keys — redact if accidentally present
  const safe = { ...entry };
  if (safe.apiKey) safe.apiKey = "***REDACTED***";
  if (safe.key) safe.key = "***REDACTED***";
  if (safe.prompt && safe.prompt.length > 200) safe.prompt = safe.prompt.substring(0, 200) + "...[truncated]";
  console.log(JSON.stringify(safe));
}

// ── generationId generator ──
function makeGenerationId() {
  return "gen_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
}

// ── Core AI caller with timeout, retries, logging ──
async function callModel(systemPrompt, userPrompt, opts = {}) {
  const {
    generationId = makeGenerationId(),
    phase = "unknown",
    preferredModel = "gemini",
    temperature = 0.7,
    maxTokens = 4096,
    timeoutMs = 60000
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

    // AbortController for timeout
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
        // Redact any key that might leak in error text
        const safeErr = errText.substring(0, 200).replace(key, "***REDACTED***");
        lastError = "API error " + response.status + ": " + safeErr;
        logGeneration({ generationId, phase, model, status: "error", httpStatus: response.status, attempt, duration });
        continue;
      }

      const data = await response.json();
      let text;
      if (preferredModel === "groq") {
        text = data.choices?.[0]?.message?.content;
      } else {
        text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      }

      if (!text) {
        lastError = "Empty response from " + model;
        logGeneration({ generationId, phase, model, status: "empty_response", attempt, duration });
        continue;
      }

      // Extract token usage
      const tokenUsage = preferredModel === "groq"
        ? data.usage || {}
        : { prompt_tokens: data.usageMetadata?.promptTokenCount, completion_tokens: data.usageMetadata?.candidatesTokenCount };

      logGeneration({
        generationId, phase, model, status: "success", attempt, duration,
        tokenUsage, retryCount: attempt
      });

      // Parse JSON with auto-repair
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
      continue;
    }
  }

  throw new functions.https.HttpsError("internal", "All model attempts failed: " + lastError);
}

/* ═══════════════════════════════════════════════════════════
   PHASE 2: Modular Pipeline Endpoint
   Call 1: Blueprint → Call 2: Questions → Call 3: Markschemes
   ═══════════════════════════════════════════════════════════ */

exports.generateModular = functions
  .runWith({ timeoutSeconds: 300, memory: "512MB" })
  .https.onCall(async (data, context) => {
    const { config, preferredModel } = data;
    const generationId = makeGenerationId();

    logGeneration({ generationId, phase: "start", config: { topic: config.topic, criterion: config.criterion, totalMarks: config.totalMarks, grade: config.grade } });

    // ── CALL 1: BLUEPRINT ──
    const bp = buildBlueprintPrompt(config);
    const blueprintResult = await callModel(bp.systemPrompt, bp.userPrompt, {
      generationId, phase: "blueprint", preferredModel,
      temperature: 0.6, maxTokens: 2048
    });

    const blueprint = blueprintResult.blueprint || blueprintResult;
    const sections = blueprintResult.sections || [{ id: 1, name: "Section 1" }];

    logGeneration({ generationId, phase: "blueprint_done", slotCount: Array.isArray(blueprint) ? blueprint.length : 0 });

    // ── CALL 2: QUESTIONS ──
    const qp = buildQuestionPrompt(
      Array.isArray(blueprint) ? blueprint : [blueprint],
      sections,
      config
    );
    const questionResult = await callModel(qp.systemPrompt, qp.userPrompt, {
      generationId, phase: "questions", preferredModel,
      temperature: 0.7, maxTokens: 4096
    });

    // Validate questions
    const qValidation = validateAndRepair(questionResult, config);
    logGeneration({ generationId, phase: "questions_validated", score: qValidation.score, issues: qValidation.issues.length, repaired: qValidation.repaired });

    if (qValidation.score < 3 || !qValidation.result) {
      throw new functions.https.HttpsError("internal", "Question generation quality too low (score: " + qValidation.score + "). Issues: " + qValidation.issues.join("; "));
    }

    // ── CALL 3: MARKSCHEMES ──
    const mp = buildMarkschemePrompt(qValidation.result);
    const msResult = await callModel(mp.systemPrompt, mp.userPrompt, {
      generationId, phase: "markscheme", preferredModel,
      temperature: 0.2, maxTokens: 4096
    });

    // Merge markschemes into the question result
    if (msResult && msResult.blocks && Array.isArray(msResult.blocks)) {
      const qBlocks = qValidation.result.blocks;
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

    // Final validation
    const finalValidation = validateAndRepair(qValidation.result, config);
    logGeneration({
      generationId, phase: "complete",
      finalScore: finalValidation.score,
      issues: finalValidation.issues,
      blockCount: finalValidation.result ? finalValidation.result.blocks.length : 0
    });

    return finalValidation.result;
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
