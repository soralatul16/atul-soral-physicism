/* ═══════════════════════════════════════════════════════════
   JSON SCHEMA VALIDATOR — Phase 3 Upgrade
   
   Granular scoring, command-term enforcement, failedNodes
   identification for soft regeneration, and configurable
   environment thresholds.
   ═══════════════════════════════════════════════════════════ */

const VALID_TYPES = [
  "MCQ", "True / False", "Long Answer", "Fill Text",
  "Match the Following", "Table", "Drawing", "Drag and Drop",
  "Graph Plot", "Multi-Dropdown"
];

const VALID_CRITERIA = ["A", "B", "C", "D"];
const VALID_STRANDS = ["i", "ii", "iii", "iv", "v"];

// ── Configurable Thresholds ──
const THRESHOLDS = {
  production: 7,
  development: 3
};

function getThreshold(env) {
  return THRESHOLDS[env] || THRESHOLDS.production;
}

// ── Command-Term Enforcement Rules ──
// Deterministic checks that do NOT require AI
const COMMAND_TERM_RULES = {
  "State": {
    maxMarks: 2,
    allowedStrands: ["i"],
    allowedTypes: ["MCQ", "Fill Text", "True / False", "Long Answer"],
    responseCheck: (q) => {
      // State answers should be concise — question should not demand extended reasoning
      const text = (q.data?.question || "").toLowerCase();
      if (text.includes("explain why") || text.includes("justify") || text.includes("evaluate")) {
        return { pass: false, reason: "State question contains explain/justify/evaluate language" };
      }
      return { pass: true };
    }
  },
  "Define": {
    maxMarks: 2,
    allowedStrands: ["i"],
    allowedTypes: ["MCQ", "Fill Text", "Long Answer"],
    responseCheck: (q) => {
      const text = (q.data?.question || "").toLowerCase();
      if (!text.includes("define") && !text.startsWith("what is")) {
        return { pass: false, reason: "Define question doesn't ask for a definition" };
      }
      return { pass: true };
    }
  },
  "Describe": {
    maxMarks: 3,
    allowedStrands: ["i", "ii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      if (q.meta?.marks < 2) {
        return { pass: false, reason: "Describe questions should be at least 2 marks" };
      }
      return { pass: true };
    }
  },
  "Explain": {
    maxMarks: 4,
    allowedStrands: ["ii", "iii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      // Explain requires causal reasoning — check mark scheme mentions cause/because/therefore
      const ms = (q.meta?.markScheme || "").toLowerCase();
      const text = (q.data?.question || "").toLowerCase();
      if (q.meta?.marks >= 2 && !text.includes("explain")) {
        return { pass: false, reason: "Explain question missing 'explain' command word" };
      }
      return { pass: true };
    }
  },
  "Calculate": {
    maxMarks: 4,
    allowedStrands: ["ii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      const ms = (q.meta?.markScheme || "").toLowerCase();
      // Mark scheme for calculations MUST contain a numerical answer
      if (q.meta?.markScheme && !/\d/.test(q.meta.markScheme)) {
        return { pass: false, reason: "Calculate mark scheme contains no numerical value" };
      }
      return { pass: true };
    }
  },
  "Determine": {
    maxMarks: 4,
    allowedStrands: ["ii"],
    allowedTypes: ["Long Answer"],
    responseCheck: () => ({ pass: true })
  },
  "Analyse": {
    maxMarks: 4,
    allowedStrands: ["iii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      if (q.type === "MCQ" || q.type === "Fill Text" || q.type === "True / False") {
        return { pass: false, reason: "Analyse must NOT be MCQ/Fill/True-False" };
      }
      if (q.meta?.marks < 3) {
        return { pass: false, reason: "Analyse questions should be at least 3 marks" };
      }
      return { pass: true };
    }
  },
  "Evaluate": {
    maxMarks: 4,
    allowedStrands: ["iii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      if (q.type === "MCQ" || q.type === "Fill Text" || q.type === "True / False") {
        return { pass: false, reason: "Evaluate must NOT be MCQ/Fill/True-False" };
      }
      if (q.meta?.marks < 3) {
        return { pass: false, reason: "Evaluate questions should be at least 3 marks" };
      }
      return { pass: true };
    }
  },
  "Discuss": {
    maxMarks: 6,
    allowedStrands: ["iii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      if (q.type === "MCQ" || q.type === "Fill Text") {
        return { pass: false, reason: "Discuss must NOT be MCQ/Fill" };
      }
      return { pass: true };
    }
  },
  "Suggest": {
    maxMarks: 3,
    allowedStrands: ["iii", "v"],
    allowedTypes: ["Long Answer"],
    responseCheck: () => ({ pass: true })
  },
  "Apply": {
    maxMarks: 3,
    allowedStrands: ["ii", "iii"],
    allowedTypes: ["Long Answer", "Table"],
    responseCheck: () => ({ pass: true })
  },
  "Justify": {
    maxMarks: 4,
    allowedStrands: ["iii"],
    allowedTypes: ["Long Answer"],
    responseCheck: (q) => {
      if (q.type === "MCQ" || q.type === "Fill Text") {
        return { pass: false, reason: "Justify must NOT be MCQ/Fill" };
      }
      return { pass: true };
    }
  }
};

/**
 * Run command-term enforcement on a single question block.
 * @returns {{ pass: boolean, issues: string[] }}
 */
function enforceCommandTerm(block, index) {
  const issues = [];
  const ct = block.meta?.commandTerm;
  if (!ct) return { pass: true, issues: [] };

  const rule = COMMAND_TERM_RULES[ct];
  if (!rule) return { pass: true, issues: [] }; // Unknown term — skip

  const label = "Q" + (index + 1) + " (" + ct + ")";

  // Check marks limit
  if (block.meta.marks > rule.maxMarks) {
    issues.push(label + ": " + block.meta.marks + " marks exceeds max " + rule.maxMarks + " for '" + ct + "'");
  }

  // Check strand alignment
  if (rule.allowedStrands && !rule.allowedStrands.includes(block.meta.strand)) {
    issues.push(label + ": strand '" + block.meta.strand + "' not valid for '" + ct + "' (expected: " + rule.allowedStrands.join("/") + ")");
  }

  // Check type alignment
  if (rule.allowedTypes && !rule.allowedTypes.includes(block.type)) {
    issues.push(label + ": type '" + block.type + "' not valid for '" + ct + "' (expected: " + rule.allowedTypes.join("/") + ")");
  }

  // Run content-level check
  const contentCheck = rule.responseCheck(block);
  if (!contentCheck.pass) {
    issues.push(label + ": " + contentCheck.reason);
  }

  return { pass: issues.length === 0, issues };
}

/**
 * Validate and auto-repair a generated exam JSON object.
 * Returns granular scoring, failedNodes for soft regeneration,
 * and command-term enforcement results.
 *
 * @param {Object} result - The raw parsed JSON from the AI
 * @param {Object} config - The original teacher config
 * @param {Object} opts - { env: "production"|"development", checkMarkSchemes: true }
 * @returns {{ result, issues, failedNodes, repaired, score, subscores, commandTermIssues }}
 */
function validateAndRepair(result, config, opts = {}) {
  const { env = "production", checkMarkSchemes = false } = opts;
  const issues = [];
  const failedNodes = []; // { blockIndex, reason, fixType }
  let repaired = false;

  // ── TOP-LEVEL STRUCTURE ──
  if (!result || typeof result !== "object") {
    return { result: null, issues: ["Root is not an object"], failedNodes: [], repaired: false, score: 0, subscores: {}, commandTermIssues: [] };
  }

  // Ensure heading
  if (!result.heading) {
    result.heading = config.topic || "Generated Exam";
    repaired = true;
    issues.push("AUTO-REPAIR: Added missing heading");
  }

  // Ensure sections array
  if (!Array.isArray(result.sections) || result.sections.length === 0) {
    result.sections = [{ id: 1, name: "Section 1" }];
    repaired = true;
    issues.push("AUTO-REPAIR: Added default sections array");
  }

  // Ensure blocks array
  if (!Array.isArray(result.blocks)) {
    if (Array.isArray(result.questions)) {
      result.blocks = result.questions;
      delete result.questions;
      repaired = true;
      issues.push("AUTO-REPAIR: Renamed 'questions' to 'blocks'");
    } else {
      return { result: null, issues: ["No blocks or questions array found"], failedNodes: [], repaired: false, score: 0, subscores: {}, commandTermIssues: [] };
    }
  }

  // ── BLOCK-LEVEL VALIDATION ──
  const questionBlocks = [];
  const commandTermIssues = [];

  for (let i = 0; i < result.blocks.length; i++) {
    const b = result.blocks[i];

    if (!b.mode) {
      b.mode = b.type === "Text" ? "content" : "question";
      repaired = true;
    }
    if (b.mode === "content") continue;
    questionBlocks.push({ block: b, index: i });

    // Ensure meta/data objects
    if (!b.meta) { b.meta = {}; repaired = true; issues.push("AUTO-REPAIR: Q" + (i+1) + " — added meta"); }
    if (!b.data) { b.data = {}; repaired = true; issues.push("AUTO-REPAIR: Q" + (i+1) + " — added data"); }

    // Criterion
    if (!b.meta.criterion || !VALID_CRITERIA.includes(b.meta.criterion)) {
      const crit = config.criterion?.charAt(0) || "A";
      b.meta.criterion = crit;
      repaired = true;
      failedNodes.push({ blockIndex: i, reason: "invalid criterion", fixType: "criterion_alignment" });
    }

    // Strand
    if (!b.meta.strand || !VALID_STRANDS.includes(b.meta.strand)) {
      b.meta.strand = "i";
      repaired = true;
      failedNodes.push({ blockIndex: i, reason: "invalid strand", fixType: "criterion_alignment" });
    }

    // Marks
    if (!b.meta.marks || isNaN(Number(b.meta.marks)) || Number(b.meta.marks) < 1) {
      b.meta.marks = 1;
      repaired = true;
      failedNodes.push({ blockIndex: i, reason: "invalid marks", fixType: "malformed_section" });
    }

    // Command term
    if (!b.meta.commandTerm || typeof b.meta.commandTerm !== "string") {
      b.meta.commandTerm = "State";
      repaired = true;
      failedNodes.push({ blockIndex: i, reason: "missing command term", fixType: "command_term_mismatch" });
    }

    // Question type
    if (!b.type || !VALID_TYPES.includes(b.type)) {
      const aliases = {
        "Fill in the Blank": "Fill Text", "FillText": "Fill Text", "fill_text": "Fill Text",
        "Multiple Choice": "MCQ", "TrueFalse": "True / False", "True/False": "True / False",
        "DragDrop": "Drag and Drop", "GraphPlot": "Graph Plot", "MultiDropdown": "Multi-Dropdown"
      };
      if (b.type && aliases[b.type]) { b.type = aliases[b.type]; repaired = true; }
      else { issues.push("Q" + (i+1) + ": invalid type '" + b.type + "'"); failedNodes.push({ blockIndex: i, reason: "invalid type", fixType: "malformed_section" }); }
    }

    if (!b.sectionId) { b.sectionId = 1; repaired = true; }

    // MCQ validation
    if (b.type === "MCQ") {
      if (!b.ui) b.ui = {};
      if (!Array.isArray(b.ui.mcqOptions) || b.ui.mcqOptions.length < 4) {
        issues.push("Q" + (i+1) + ": MCQ needs 4 options");
        failedNodes.push({ blockIndex: i, reason: "MCQ missing options", fixType: "malformed_section" });
      }
    }

    // True/False
    if (b.type === "True / False") {
      if (!b.ui) b.ui = {};
      if (!b.ui.tfAnswer) { b.ui.tfAnswer = "True"; repaired = true; }
    }

    // Grading grid for extended B/D
    if ((b.meta.criterion === "B" || b.meta.criterion === "D") && b.meta.marks >= 6) {
      if (!b.meta.gradingGrid) {
        issues.push("Q" + (i+1) + ": extended Crit " + b.meta.criterion + " missing gradingGrid");
        failedNodes.push({ blockIndex: i, reason: "missing gradingGrid", fixType: "malformed_section" });
      }
    }

    // Missing question text
    if (!b.data.question || b.data.question.trim().length < 5) {
      failedNodes.push({ blockIndex: i, reason: "missing or empty question text", fixType: "malformed_section" });
    }

    // Mark scheme check (only post-markscheme phase)
    if (checkMarkSchemes) {
      if (!b.meta.markScheme || (typeof b.meta.markScheme === "string" && b.meta.markScheme.trim().length < 3)) {
        failedNodes.push({ blockIndex: i, reason: "missing markScheme", fixType: "markscheme" });
      }
    }

    // ── COMMAND-TERM ENFORCEMENT ──
    const ctResult = enforceCommandTerm(b, i);
    if (!ctResult.pass) {
      commandTermIssues.push(...ctResult.issues);
      failedNodes.push({ blockIndex: i, reason: ctResult.issues[0], fixType: "command_term_mismatch" });
    }
  }

  // ── MARK TOTAL CHECK ──
  const totalMarks = questionBlocks.reduce((sum, q) => sum + Number(q.block.meta.marks || 0), 0);
  if (totalMarks !== config.totalMarks) {
    issues.push("Total marks: " + totalMarks + " (expected " + config.totalMarks + ")");
  }

  // ── STIMULUS CHECK ──
  let hasContentBeforeFirstQ = false;
  for (const b of result.blocks) {
    if (b.mode === "content") { hasContentBeforeFirstQ = true; break; }
    if (b.mode === "question") break;
  }
  if (!hasContentBeforeFirstQ) issues.push("No stimulus before first question");

  // ── STYLE CONSISTENCY ──
  const styleIssues = checkStyleConsistency(result.blocks.filter(b => b.mode === "question"));

  // ── GRANULAR SUBSCORES (each 0-10) ──
  const subscores = {};

  // Mark accuracy
  subscores.markAccuracy = totalMarks === config.totalMarks ? 10 : Math.max(0, 10 - Math.abs(totalMarks - config.totalMarks));

  // Structural integrity
  const structuralProblems = failedNodes.filter(f => f.fixType === "malformed_section").length;
  subscores.structuralIntegrity = Math.max(0, 10 - structuralProblems * 2);

  // Criterion alignment
  const criterionProblems = failedNodes.filter(f => f.fixType === "criterion_alignment").length;
  subscores.criterionAlignment = Math.max(0, 10 - criterionProblems * 3);

  // Command-term correctness
  subscores.commandTermCorrectness = Math.max(0, 10 - commandTermIssues.length * 2);

  // Stimulus/context
  subscores.contextualRealism = hasContentBeforeFirstQ ? 10 : 5;

  // Style consistency
  subscores.styleConsistency = Math.max(0, 10 - styleIssues.length * 2);

  // ── COMPOSITE SCORE ──
  const weights = { markAccuracy: 0.25, structuralIntegrity: 0.20, criterionAlignment: 0.20, commandTermCorrectness: 0.15, contextualRealism: 0.10, styleConsistency: 0.10 };
  let score = 0;
  for (const [key, weight] of Object.entries(weights)) {
    score += (subscores[key] || 0) * weight;
  }
  score = Math.round(score * 10) / 10;

  return {
    result,
    issues: [...issues, ...commandTermIssues, ...styleIssues],
    failedNodes,
    repaired,
    score,
    subscores,
    commandTermIssues,
    threshold: getThreshold(env)
  };
}

/**
 * Check style consistency across questions.
 */
function checkStyleConsistency(questionBlocks) {
  const issues = [];
  if (questionBlocks.length < 2) return issues;

  // Check for generic lab-context patterns
  for (let i = 0; i < questionBlocks.length; i++) {
    const text = (questionBlocks[i].data?.question || "").toLowerCase();
    if (text.includes("a student in a lab") || text.includes("a student investigates") || text.includes("consider a block on")) {
      issues.push("Q" + (i+1) + ": uses generic lab context instead of real-world scenario");
    }
  }

  // Check for duplicate question starts
  const starts = questionBlocks.map(q => (q.data?.question || "").substring(0, 40).toLowerCase());
  for (let i = 0; i < starts.length; i++) {
    for (let j = i + 1; j < starts.length; j++) {
      if (starts[i].length > 10 && starts[i] === starts[j]) {
        issues.push("Q" + (i+1) + " and Q" + (j+1) + ": duplicate question openings");
      }
    }
  }

  return issues;
}

/**
 * Attempt to parse JSON from AI response text, with auto-repair.
 */
function safeParseJSON(text) {
  if (!text || typeof text !== "string") return null;

  let cleaned = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

  try { return JSON.parse(cleaned); } catch (e) { /* continue */ }

  cleaned = cleaned.replace(/,\s*([}\]])/g, "$1");
  cleaned = cleaned.replace(/[\x00-\x1F\x7F]/g, (c) => c === "\n" || c === "\t" ? c : "");

  const objMatch = cleaned.match(/\{[\s\S]*\}/);
  if (objMatch) { try { return JSON.parse(objMatch[0]); } catch (e) { /* continue */ } }

  const arrMatch = cleaned.match(/\[[\s\S]*\]/);
  if (arrMatch) { try { return JSON.parse(arrMatch[0]); } catch (e) { /* continue */ } }

  return null;
}

module.exports = { validateAndRepair, safeParseJSON, enforceCommandTerm, COMMAND_TERM_RULES, THRESHOLDS, getThreshold };
