/* ═══════════════════════════════════════════════════════════
   LIGHTWEIGHT RETRIEVAL LAYER — Phase 4
   
   Deterministic retrieval of IB-specific structural patterns,
   phrasing, and language constraints based on criterion.
   Avoids the need for a heavy vector database.
   ═══════════════════════════════════════════════════════════ */

const RETRIEVAL_PATTERNS = {
  // Scientific communication phrasing
  scientificCommunication: [
    "Use active voice for methods (e.g., 'Measure the length' not 'The length was measured').",
    "Avoid ambiguous terms like 'amount' (use mass, volume, concentration).",
    "Do not use 'human error' — specify the exact source of systematic or random uncertainty.",
    "Always state units explicitly in table headers using the slash format (e.g., Force / N)."
  ],

  // Causal explanation structures (useful for A_iii, B_ii, C_ii)
  causalExplanation: [
    "Structure explanations as: Statement of principle → Application to context → Logical consequence.",
    "Use linking words: 'therefore', 'because', 'as a result of', 'which leads to'.",
    "Ensure the dependent variable change is explicitly linked to the independent variable mechanism."
  ],

  // Graph interpretation phrasing (useful for C)
  graphInterpretation: [
    "Identify the mathematical relationship (e.g., directly proportional, linear, inversely proportional).",
    "Do not say 'as X goes up, Y goes up'. Use 'X increases as Y increases'.",
    "Reference specific data points (coordinates) to support trend identification.",
    "Discuss the significance of the y-intercept if it does not pass through the origin."
  ],

  // Criterion D balanced-argument structures
  criterionD_Argument: [
    "Use a clear paragraph structure: Introduction of application → Scientific explanation → Benefits → Limitations → Evaluative conclusion.",
    "Discuss at least two dimensions of impact (e.g., environmental and economic).",
    "Ensure limitations are specific to the technology, not generic (e.g., 'high cost' must be contextualized).",
    "The evaluative conclusion must weigh the benefits against the limitations to form a justified final stance."
  ],
  
  // Criterion B Method structures
  criterionB_Method: [
    "V-H-E-M-D-S structure: Variables, Hypothesis, Equipment, Method, Data Collection, Safety.",
    "Method must explicitly state how to vary the independent variable (at least 5 increments).",
    "Method must state how to measure the dependent variable (including equipment precision).",
    "Include repeats for reliability (minimum 3 trials)."
  ]
};

/**
 * Retrieve targeted phrasing and structural patterns based on requested criteria.
 * @param {string[]} criteria - Array of requested criteria (e.g., ["A", "D"])
 * @returns {string} - Combined string of relevant guidelines
 */
function getTargetedPatterns(criteria) {
  const selected = new Set([...RETRIEVAL_PATTERNS.scientificCommunication]);

  if (criteria.includes("A")) {
    RETRIEVAL_PATTERNS.causalExplanation.forEach(p => selected.add(p));
  }
  
  if (criteria.includes("B")) {
    RETRIEVAL_PATTERNS.criterionB_Method.forEach(p => selected.add(p));
    RETRIEVAL_PATTERNS.causalExplanation.forEach(p => selected.add(p));
  }
  
  if (criteria.includes("C")) {
    RETRIEVAL_PATTERNS.graphInterpretation.forEach(p => selected.add(p));
  }
  
  if (criteria.includes("D")) {
    RETRIEVAL_PATTERNS.criterionD_Argument.forEach(p => selected.add(p));
    RETRIEVAL_PATTERNS.causalExplanation.forEach(p => selected.add(p));
  }

  let output = "IB PHRASING & STRUCTURAL PATTERNS:\n";
  Array.from(selected).forEach(rule => {
    output += `- ${rule}\n`;
  });

  return output;
}

module.exports = { getTargetedPatterns, RETRIEVAL_PATTERNS };
