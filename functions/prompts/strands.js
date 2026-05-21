/* ═══════════════════════════════════════════════════════════
   STRAND INTELLIGENCE MODULES
   Each module defines cognitive expectations, command terms,
   reasoning style, expected depth, and IB-style patterns
   for a specific Criterion + Strand combination.
   ═══════════════════════════════════════════════════════════ */

const STRAND_MODULES = {
  /* ── CRITERION A: Knowing and Understanding ── */
  A_i: {
    label: "Recall & Reproduce",
    cognitiveExpectation: "Retrieve factual knowledge: definitions, units, terminology, standard values.",
    commandTerms: ["State", "Define", "Outline", "List", "Identify", "Name", "Label"],
    reasoningStyle: "direct-recall",
    expectedDepth: "single-sentence or single-value",
    questionTypes: ["MCQ", "Fill Text", "True / False"],
    marksRange: [1, 2],
    IBStylePatterns: [
      "State the SI unit of [quantity].",
      "Define [physics term].",
      "Name the instrument used to measure [quantity].",
      "Identify the variable that [relationship]."
    ]
  },
  A_ii: {
    label: "Apply & Calculate",
    cognitiveExpectation: "Apply physics formulas and concepts to novel situations. Substitute values, rearrange equations, show working.",
    commandTerms: ["Apply", "Calculate", "Determine", "Solve", "Show", "Construct", "Plot"],
    reasoningStyle: "procedural-calculation",
    expectedDepth: "multi-step working with formula, substitution, answer with unit to 3 s.f.",
    questionTypes: ["Long Answer", "Table"],
    marksRange: [2, 4],
    IBStylePatterns: [
      "Calculate the [quantity] using the data provided. Show your working.",
      "Determine the value of [variable] from the equation.",
      "Apply the formula for [concept] to find [quantity]."
    ]
  },
  A_iii: {
    label: "Analyse & Evaluate",
    cognitiveExpectation: "Analyse relationships between variables, evaluate claims using scientific reasoning, compare and contrast.",
    commandTerms: ["Analyse", "Evaluate", "Discuss", "Compare", "Justify", "Explain", "Suggest", "Predict"],
    reasoningStyle: "causal-chain",
    expectedDepth: "multi-sentence reasoning with concept → mechanism → consequence chain",
    questionTypes: ["Long Answer"],
    marksRange: [3, 4],
    IBStylePatterns: [
      "Explain why [phenomenon] occurs. Use scientific reasoning.",
      "Analyse the relationship between [variable A] and [variable B] shown in the data.",
      "Evaluate whether [claim] is supported by the evidence."
    ]
  },

  /* ── CRITERION B: Inquiring and Designing ── */
  B_i: {
    label: "Research Question",
    cognitiveExpectation: "Formulate a clear, focused, testable research question linking IV and DV.",
    commandTerms: ["Outline", "State", "Describe", "Explain"],
    reasoningStyle: "investigative-framing",
    expectedDepth: "one focused question linking independent and dependent variables",
    questionTypes: ["Long Answer"],
    marksRange: [1, 2],
    IBStylePatterns: [
      "Outline a research question for this investigation.",
      "State a research question linking [IV] and [DV]."
    ]
  },
  B_ii: {
    label: "Hypothesis & Prediction",
    cognitiveExpectation: "Formulate a testable hypothesis (Year 3+) or prediction (Year 1) linking IV to DV with scientific explanation.",
    commandTerms: ["Outline", "Explain", "Formulate", "Predict", "Justify"],
    reasoningStyle: "predictive-reasoning",
    expectedDepth: "hypothesis statement WITH scientific justification (because…)",
    questionTypes: ["Long Answer"],
    marksRange: [2, 3],
    IBStylePatterns: [
      "Formulate a testable hypothesis for this investigation. Explain your reasoning.",
      "Predict the outcome and justify using physics concepts."
    ]
  },
  B_iii: {
    label: "Variables",
    cognitiveExpectation: "Identify and justify IV, DV, and controlled variables for the investigation.",
    commandTerms: ["Outline", "Describe", "Explain"],
    reasoningStyle: "systematic-identification",
    expectedDepth: "name + justification for each variable type",
    questionTypes: ["Long Answer", "Table"],
    marksRange: [2, 4],
    IBStylePatterns: [
      "Identify the independent, dependent, and two controlled variables.",
      "Explain why each controlled variable must be kept constant."
    ]
  },
  B_iv: {
    label: "Method Design",
    cognitiveExpectation: "Design a complete, reproducible experimental method using simulation tools.",
    commandTerms: ["Design", "Outline", "Describe"],
    reasoningStyle: "procedural-design",
    expectedDepth: "step-by-step method with equipment, 5 increments, 3 trials, safety",
    questionTypes: ["Long Answer"],
    marksRange: [8, 16],
    IBStylePatterns: [
      "Design a method to investigate [research question]. Include equipment, procedure, and data collection plan."
    ]
  },

  /* ── CRITERION C: Processing and Evaluating ── */
  C_i: {
    label: "Present & Organise Data",
    cognitiveExpectation: "Present raw data in tables with correct headers and units. Plot graphs with appropriate scales.",
    commandTerms: ["Present", "Collect", "Organize", "Construct", "Plot"],
    reasoningStyle: "data-presentation",
    expectedDepth: "correctly formatted table or graph with units in headers",
    questionTypes: ["Table", "Graph Plot"],
    marksRange: [2, 4],
    IBStylePatterns: [
      "Use the graph plotter to plot [DV] against [IV]. Draw a line of best fit.",
      "Complete the table below by calculating the missing values."
    ]
  },
  C_ii: {
    label: "Interpret Data",
    cognitiveExpectation: "Interpret trends, patterns, and relationships from data tables and graphs. Calculate values from data.",
    commandTerms: ["Interpret", "Describe", "Explain", "Calculate"],
    reasoningStyle: "pattern-recognition",
    expectedDepth: "trend identification (1mk) + qualified description with data reference (1mk)",
    questionTypes: ["Long Answer", "Table"],
    marksRange: [2, 3],
    IBStylePatterns: [
      "Describe the relationship between [IV] and [DV] shown by the graph.",
      "Interpret the trend shown in the data. Use specific values to support your answer."
    ]
  },
  C_iii: {
    label: "Evaluate Hypothesis",
    cognitiveExpectation: "Evaluate whether data supports or refutes the hypothesis. Use specific data values as evidence.",
    commandTerms: ["Evaluate", "Discuss", "State"],
    reasoningStyle: "evidence-based-evaluation",
    expectedDepth: "conclusion + specific data reference + comparison to hypothesis",
    questionTypes: ["Long Answer"],
    marksRange: [2, 3],
    IBStylePatterns: [
      "Evaluate whether the data supports the hypothesis. Use specific data values.",
      "Discuss the extent to which the results confirm the prediction."
    ]
  },
  C_iv: {
    label: "Sources of Error",
    cognitiveExpectation: "Identify specific sources of error (never 'human error') and explain their effect on results.",
    commandTerms: ["Evaluate", "Discuss", "Identify"],
    reasoningStyle: "critical-analysis",
    expectedDepth: "specific error (1mk) + directional effect on results (1mk)",
    questionTypes: ["Long Answer"],
    marksRange: [2, 3],
    IBStylePatterns: [
      "Identify ONE source of error in this investigation. Explain how it would affect the results.",
      "Evaluate the reliability of the data. Identify a limitation."
    ]
  },
  C_v: {
    label: "Improvements",
    cognitiveExpectation: "Suggest specific improvements to increase reliability, accuracy, or validity of the investigation.",
    commandTerms: ["Describe", "Outline", "Suggest", "Explain"],
    reasoningStyle: "constructive-critique",
    expectedDepth: "improvement (1mk) + justification of how it improves reliability/accuracy (1-2mk)",
    questionTypes: ["Long Answer"],
    marksRange: [2, 3],
    IBStylePatterns: [
      "Suggest ONE improvement to increase the reliability of this investigation. Explain how it would help.",
      "Describe a modification that would improve the accuracy of the results."
    ]
  },

  /* ── CRITERION D: Reflecting on Impacts of Science ── */
  D_i: {
    label: "Explain the Science",
    cognitiveExpectation: "Explain how physics concepts are applied in the real-world context. Describe the technology or application.",
    commandTerms: ["Explain", "Describe", "Summarize", "State"],
    reasoningStyle: "science-in-context",
    expectedDepth: "physics concept linked to real-world application with specific detail",
    questionTypes: ["MCQ", "Fill Text", "Long Answer"],
    marksRange: [1, 3],
    IBStylePatterns: [
      "Explain how [physics concept] is used in [technology/application].",
      "Describe the scientific principle behind [real-world example]."
    ]
  },
  D_ii: {
    label: "Discuss Implications",
    cognitiveExpectation: "Discuss BOTH benefits AND limitations across multiple dimensions (environmental, economic, social, ethical, political).",
    commandTerms: ["Discuss", "Evaluate", "Analyse"],
    reasoningStyle: "balanced-argumentation",
    expectedDepth: "extended response with multiple perspectives, specific data, and holistic grid",
    questionTypes: ["Long Answer"],
    marksRange: [6, 14],
    IBStylePatterns: [
      "Discuss the environmental AND economic implications of [technology].",
      "Evaluate the benefits and limitations of using [application] in [context]."
    ]
  },
  D_iii: {
    label: "Apply & Connect",
    cognitiveExpectation: "Apply scientific knowledge to solve real-world problems or make informed decisions.",
    commandTerms: ["Apply", "Explain", "Justify"],
    reasoningStyle: "applied-reasoning",
    expectedDepth: "reasoned application of physics to a practical situation",
    questionTypes: ["Long Answer"],
    marksRange: [2, 4],
    IBStylePatterns: [
      "Apply your knowledge of [concept] to suggest a solution to [problem].",
      "Justify whether [technology] should be adopted in [context]."
    ]
  },
  D_iv: {
    label: "Document Sources",
    cognitiveExpectation: "Cite sources used in the extended response. Reference data from the stimulus.",
    commandTerms: ["Document"],
    reasoningStyle: "referencing",
    expectedDepth: "citation of stimulus data in the response body",
    questionTypes: ["Long Answer"],
    marksRange: [1, 2],
    IBStylePatterns: [
      "Include references to specific data from the passage in your response."
    ]
  }
};

module.exports = { STRAND_MODULES };
