/* ═══════════════════════════════════════════════════════════
   JSON SCHEMA VALIDATOR
   Deterministic validation with auto-repair for the
   generated exam JSON. Checks structure, required fields,
   and IB-specific constraints.
   ═══════════════════════════════════════════════════════════ */

const VALID_TYPES = [
  "MCQ", "True / False", "Long Answer", "Fill Text",
  "Match the Following", "Table", "Drawing", "Drag and Drop",
  "Graph Plot", "Multi-Dropdown"
];

const VALID_CRITERIA = ["A", "B", "C", "D"];
const VALID_STRANDS = ["i", "ii", "iii", "iv", "v"];

/**
 * Validate and auto-repair a generated exam JSON object.
 * @param {Object} result - The raw parsed JSON from the AI
 * @param {Object} config - The original teacher config
 * @returns {{ result: Object, issues: string[], repaired: boolean, score: number }}
 */
function validateAndRepair(result, config) {
  const issues = [];
  let repaired = false;

  // ── TOP-LEVEL STRUCTURE ──
  if (!result || typeof result !== "object") {
    return { result: null, issues: ["Root is not an object"], repaired: false, score: 0 };
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
      return { result: null, issues: ["No blocks or questions array found"], repaired: false, score: 0 };
    }
  }

  // ── BLOCK-LEVEL VALIDATION ──
  const questionBlocks = [];
  for (let i = 0; i < result.blocks.length; i++) {
    const b = result.blocks[i];

    // Ensure mode
    if (!b.mode) {
      b.mode = b.type === "Text" ? "content" : "question";
      repaired = true;
    }

    if (b.mode === "content") continue;
    questionBlocks.push({ block: b, index: i });

    // Ensure meta object
    if (!b.meta) {
      b.meta = {};
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — added missing meta object");
    }

    // Ensure data object
    if (!b.data) {
      b.data = {};
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — added missing data object");
    }

    // Validate criterion
    if (!b.meta.criterion || !VALID_CRITERIA.includes(b.meta.criterion)) {
      const crit = config.criterion?.charAt(0) || "A";
      b.meta.criterion = crit;
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — set criterion to " + crit);
    }

    // Validate strand
    if (!b.meta.strand || !VALID_STRANDS.includes(b.meta.strand)) {
      b.meta.strand = "i";
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — set strand to i");
    }

    // Validate marks
    if (!b.meta.marks || isNaN(Number(b.meta.marks)) || Number(b.meta.marks) < 1) {
      b.meta.marks = 1;
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — set marks to 1");
    }

    // Validate commandTerm
    if (!b.meta.commandTerm || typeof b.meta.commandTerm !== "string") {
      b.meta.commandTerm = "State";
      repaired = true;
      issues.push("AUTO-REPAIR: Q" + (i + 1) + " — set commandTerm to State");
    }

    // Validate question type
    if (!b.type || !VALID_TYPES.includes(b.type)) {
      // Try common aliases
      const aliases = {
        "Fill in the Blank": "Fill Text",
        "FillText": "Fill Text",
        "fill_text": "Fill Text",
        "Multiple Choice": "MCQ",
        "TrueFalse": "True / False",
        "True/False": "True / False",
        "DragDrop": "Drag and Drop",
        "GraphPlot": "Graph Plot",
        "MultiDropdown": "Multi-Dropdown"
      };
      if (b.type && aliases[b.type]) {
        b.type = aliases[b.type];
        repaired = true;
      } else {
        issues.push("Q" + (i + 1) + ": invalid type '" + b.type + "'");
      }
    }

    // Ensure sectionId
    if (!b.sectionId) {
      b.sectionId = 1;
      repaired = true;
    }

    // Ensure ui object for MCQ
    if (b.type === "MCQ") {
      if (!b.ui) b.ui = {};
      if (!Array.isArray(b.ui.mcqOptions) || b.ui.mcqOptions.length < 4) {
        issues.push("Q" + (i + 1) + ": MCQ needs exactly 4 options");
      }
    }

    // Ensure ui object for True/False
    if (b.type === "True / False") {
      if (!b.ui) b.ui = {};
      if (!b.ui.tfAnswer) {
        b.ui.tfAnswer = "True";
        repaired = true;
      }
    }

    // Ensure gradingGrid for Criterion B/D extended responses
    if ((b.meta.criterion === "B" || b.meta.criterion === "D") && b.meta.marks >= 6) {
      if (!b.meta.gradingGrid) {
        issues.push("Q" + (i + 1) + ": extended Criterion " + b.meta.criterion + " question missing gradingGrid");
      }
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
  if (!hasContentBeforeFirstQ) {
    issues.push("No stimulus/content block before first question");
  }

  // ── QUALITY SCORE (0-10) ──
  let score = 10;
  if (totalMarks !== config.totalMarks) score -= 2;
  if (!hasContentBeforeFirstQ) score -= 1;
  const missingMarkSchemes = questionBlocks.filter(q => !q.block.meta.markScheme).length;
  // Don't penalize missing markschemes if this is pre-markscheme phase
  const missingQuestions = questionBlocks.filter(q => !q.block.data.question).length;
  if (missingQuestions > 0) score -= Math.min(3, missingQuestions);
  if (issues.length > 5) score -= 2;
  score = Math.max(0, score);

  return { result, issues, repaired, score };
}

/**
 * Attempt to parse JSON from AI response text, with auto-repair for common issues.
 * @param {string} text - Raw text from AI
 * @returns {Object|null} Parsed JSON or null
 */
function safeParseJSON(text) {
  if (!text || typeof text !== "string") return null;

  // Strip markdown code fences
  let cleaned = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

  // Try direct parse first
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    // Attempt auto-repairs
  }

  // Fix 1: Remove trailing commas before } or ]
  cleaned = cleaned.replace(/,\s*([}\]])/g, "$1");

  // Fix 2: Remove control characters
  cleaned = cleaned.replace(/[\x00-\x1F\x7F]/g, (c) => c === "\n" || c === "\t" ? c : "");

  // Fix 3: Try to extract JSON object from surrounding text
  const objMatch = cleaned.match(/\{[\s\S]*\}/);
  if (objMatch) {
    try { return JSON.parse(objMatch[0]); } catch (e) { /* continue */ }
  }

  // Fix 4: Try array extraction
  const arrMatch = cleaned.match(/\[[\s\S]*\]/);
  if (arrMatch) {
    try { return JSON.parse(arrMatch[0]); } catch (e) { /* continue */ }
  }

  return null;
}

module.exports = { validateAndRepair, safeParseJSON };
