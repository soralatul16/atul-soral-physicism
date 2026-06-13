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

// Subject Adapters (Phase 6)
const physicsAdapter = require("./subjects/physics");
// Biology and Chemistry adapters can be added here in the future
const getSubjectAdapter = (subject) => {
  if (subject === "Physics") return physicsAdapter;
  return physicsAdapter; // Default to physics for now
};

admin.initializeApp();

// Simple in-memory cache for Orchestrator plans (Phase 6 Performance Optimization)
const orchestratorCache = new Map();
const db = admin.firestore();

// ── Secure Environment Access (Lazy Loaded for Gen2 Safety) ──
function getEnv() {
  let fbConfig = {};
  try { fbConfig = functions.config(); } catch (e) { /* ignored in v2 */ }
  
  return {
    GROQ_API_KEY: fbConfig.api?.groq || process.env.GROQ_API_KEY || "",
    GNEWS_API_KEY: process.env.GNEWS_API_KEY || "",
    GEMINI_API_KEY: fbConfig.api?.gemini || process.env.GEMINI_API_KEY || "",
    ENV: fbConfig.app?.env || process.env.NODE_ENV || "production"
  };
}

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
  const { envVars = getEnv() } = opts;
  const { 
    generationId = makeGenerationId(),
    phase = "unknown",
    preferredModel = "gemini",
    temperature = 0.7,
    maxTokens = 4096,
    timeoutMs = 60000,
    session = null  // analytics session
  } = opts;

  const key = preferredModel === "groq" ? envVars.GROQ_API_KEY : envVars.GEMINI_API_KEY;
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

const { onCall, HttpsError } = require("firebase-functions/v2/https");

exports.generateModular = onCall(
  { cors: ["https://soralatul16.github.io"] },
  async (request) => {
    console.log("[TEST] generateModular hit");
    return { success: true, message: "Cloud Run working" };
  }
);

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

exports.generateExamPipeline = onCall({ region: "us-central1" }, async (request) => {
  const data = request.data;
  const context = { auth: request.auth };
  const { prompt, isMarkSchemePhase, preferredModel } = data;
  const generationId = makeGenerationId();
  const sysPrompt = isMarkSchemePhase ? LEGACY_MS_PROMPT : LEGACY_SYSTEM_PROMPT;
  const temp = isMarkSchemePhase ? 0.2 : 0.7;

  return await callModel(sysPrompt, prompt, {
    generationId, phase: isMarkSchemePhase ? "legacy_markscheme" : "legacy_questions",
    preferredModel, temperature: temp, maxTokens: 4096
  });
});

/* ═══════════════════════════════════════════════════════════
   PHASE 5: Teacher Feedback & Intelligence Layer
   ═══════════════════════════════════════════════════════════ */
const teacherFeedback = require("./teacher-feedback");
exports.submitTeacherFeedback = teacherFeedback.submitTeacherFeedback;
exports.saveTrustedTemplate = teacherFeedback.saveTrustedTemplate;

/* ═══════════════════════════════════════════════════════════
   AI CHAT PROXY — Keeps Groq API key server-side
   Called by client-side AI tutor widgets across the site.
   ═══════════════════════════════════════════════════════════ */
exports.aiChat = onCall(
  { cors: [/soralatul16\.github\.io$/, /localhost/], secrets: ["GROQ_API_KEY"] },
  async (request) => {
    // Auth guard — only logged-in users can call AI
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Must be logged in to use AI tutor.");
    }

    const { messages, temperature = 0.7, maxTokens = 300, model, responseFormat } = request.data || {};

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new HttpsError("invalid-argument", "messages array is required.");
    }

    // Safety cap: max 4096 tokens for any request
    const safeMaxTokens = Math.min(maxTokens || 300, 4096);

    const envVars = getEnv();
    const key = envVars.GROQ_API_KEY;
    if (!key) {
      throw new HttpsError("failed-precondition", "AI service not configured. Contact administrator.");
    }

    // Use requested model or default
    const useModel = model || "llama-3.3-70b-versatile";
    const fallbackModel = "llama-3.1-8b-instant";
    
    // Prepare Groq payload
    const payload = {
      model: useModel,
      messages,
      temperature,
      max_tokens: safeMaxTokens
    };
    if (responseFormat === "json" || responseFormat === "json_object") {
      payload.response_format = { type: "json_object" };
    }

    let lastError = null;
    for (const m of [useModel, fallbackModel]) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 60000); // 60s for JSON generation

        payload.model = m;
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        clearTimeout(timeout);

        if (response.status === 429 && m === useModel) {
          // Rate limited on primary model, try fallback
          await new Promise(r => setTimeout(r, 2000));
          continue;
        }

        if (!response.ok) {
          lastError = "API error " + response.status;
          continue;
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;

        if (!reply) {
          lastError = "Empty response from " + m;
          continue;
        }

        return { reply, model: m };

      } catch (err) {
        lastError = err.name === "AbortError" ? "Request timed out" : err.message;
        continue;
      }
    }

    throw new HttpsError("internal", "AI request failed: " + lastError);
  }
);

// ─── Real Physics News ───────────────────────────────────────────────
exports.fetchPhysicsNews = onCall(
  { cors: [/soralatul16\.github\.io$/, /localhost/], secrets: ["GROQ_API_KEY", "GNEWS_API_KEY"] },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Must be logged in.");
    }

    const envVars = getEnv();
    const gnewsKey = envVars.GNEWS_API_KEY;
    const groqKey = envVars.GROQ_API_KEY;

    if (!gnewsKey || !groqKey) {
      throw new HttpsError("failed-precondition", "News service not configured.");
    }

    // Fetch real science/physics news
    const newsUrl = `https://gnews.io/api/v4/search?q=physics OR quantum OR particle OR space OR astronomy&lang=en&max=10&category=science&apikey=${gnewsKey}`;
    const newsResponse = await fetch(newsUrl);
    if (!newsResponse.ok) {
      throw new HttpsError("internal", "Failed to fetch news.");
    }
    const newsData = await newsResponse.json();
    const articles = newsData.articles || [];

    if (articles.length === 0) {
      throw new HttpsError("not-found", "No physics news found today.");
    }

    // Send real articles to Groq for IB Physics categorization
    const articleList = articles.map((a, i) =>
      `${i+1}. "${a.title}" - ${a.description || ''} (Source: ${a.source?.name}, URL: ${a.url}, Date: ${a.publishedAt})`
    ).join('\n');

    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + groqKey },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "You are an IB DP Physics (2025 syllabus) expert. Given real news articles, select the 5 most relevant to IB Physics and categorize them. Return ONLY a valid JSON object with a \"stories\" array." },
          { role: "user", content: `Categorize these real news articles by IB Physics theme:\n\n${articleList}\n\nReturn JSON with "stories" array. Each object needs: title (real headline), desc (2-3 sentences connecting to IB Physics), theme (A/B/C/D/E), subtopic (e.g. "A.2 Forces and Momentum"), source (real source name), url (real article URL), date (publication date).` }
        ],
        temperature: 0.3,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      })
    });

    if (!groqResponse.ok) {
      throw new HttpsError("internal", "AI categorization failed.");
    }

    const groqData = await groqResponse.json();
    const reply = groqData.choices?.[0]?.message?.content;
    if (!reply) throw new HttpsError("internal", "Empty AI response.");

    let stories;
    try {
      const parsed = JSON.parse(reply);
      stories = parsed.stories || parsed.articles || parsed.news || parsed;
      if (!Array.isArray(stories)) stories = [stories];
    } catch (e) {
      throw new HttpsError("internal", "Failed to parse AI response.");
    }

    return { stories };
  }
);
