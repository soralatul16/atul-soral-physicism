/* ═══════════════════════════════════════════════════════════
   ANALYTICS MODULE — Phase 3
   
   Tracks latency, token usage, costs, retries, fallback
   frequency, and validation failures across the pipeline.
   All data stored in Firestore for dashboarding.
   ═══════════════════════════════════════════════════════════ */

// Approximate cost per 1K tokens (USD)
const COST_PER_1K = {
  "gemini-1.5-flash": { input: 0.000075, output: 0.0003 },
  "llama-3.3-70b-versatile": { input: 0.00059, output: 0.00079 },
  "llama-3.1-8b-instant": { input: 0.00005, output: 0.00008 }
};

/**
 * Create a new analytics session for a generation run.
 */
function createSession(generationId) {
  return {
    generationId,
    startTime: Date.now(),
    phases: [],
    totalTokens: { input: 0, output: 0 },
    totalDurationMs: 0,
    totalCostUSD: 0,
    retryCount: 0,
    fallbackUsed: false,
    validationFailures: 0,
    softRegenerations: 0,
    selfSolveContradictions: 0,
    finalScore: null,
    finalSubscores: null
  };
}

/**
 * Record a completed phase in the analytics session.
 */
function recordPhase(session, phaseData) {
  const {
    phase, model, durationMs, tokenUsage = {},
    status, attempt = 0, validationScore = null
  } = phaseData;

  const inputTokens = tokenUsage.prompt_tokens || tokenUsage.input_tokens || 0;
  const outputTokens = tokenUsage.completion_tokens || tokenUsage.output_tokens || 0;

  // Calculate cost
  const costRates = COST_PER_1K[model] || { input: 0.0001, output: 0.0003 };
  const cost = (inputTokens / 1000 * costRates.input) + (outputTokens / 1000 * costRates.output);

  const entry = {
    phase,
    model,
    durationMs,
    inputTokens,
    outputTokens,
    cost: Math.round(cost * 1000000) / 1000000, // 6 decimal places
    status,
    attempt,
    validationScore
  };

  session.phases.push(entry);
  session.totalTokens.input += inputTokens;
  session.totalTokens.output += outputTokens;
  session.totalDurationMs += durationMs;
  session.totalCostUSD += cost;

  if (attempt > 0) session.retryCount += attempt;

  return entry;
}

/**
 * Finalize the session with summary data.
 */
function finalizeSession(session, opts = {}) {
  session.endTime = Date.now();
  session.wallClockMs = session.endTime - session.startTime;
  session.totalCostUSD = Math.round(session.totalCostUSD * 1000000) / 1000000;

  if (opts.finalScore !== undefined) session.finalScore = opts.finalScore;
  if (opts.finalSubscores) session.finalSubscores = opts.finalSubscores;
  if (opts.selfSolveContradictions !== undefined) session.selfSolveContradictions = opts.selfSolveContradictions;
  if (opts.softRegenerations !== undefined) session.softRegenerations = opts.softRegenerations;
  if (opts.fallbackUsed) session.fallbackUsed = true;

  return session;
}

/**
 * Save session to Firestore (async, non-blocking).
 */
async function saveSession(db, session) {
  try {
    await db.collection("generation_analytics").doc(session.generationId).set({
      ...session,
      savedAt: new Date().toISOString()
    });
  } catch (err) {
    console.error("Failed to save analytics:", err.message);
  }
}

/**
 * Build a human-readable summary for logging.
 */
function summarize(session) {
  return {
    generationId: session.generationId,
    wallClockSec: (session.wallClockMs / 1000).toFixed(1),
    totalInputTokens: session.totalTokens.input,
    totalOutputTokens: session.totalTokens.output,
    estimatedCostUSD: "$" + session.totalCostUSD.toFixed(6),
    phases: session.phases.length,
    retries: session.retryCount,
    softRegens: session.softRegenerations,
    contradictions: session.selfSolveContradictions,
    finalScore: session.finalScore
  };
}

module.exports = { createSession, recordPhase, finalizeSession, saveSession, summarize, COST_PER_1K };
