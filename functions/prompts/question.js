/* ═══════════════════════════════════════════════════════════
   QUESTION PROMPT MODULE
   Generates ONLY question content and stimuli from a blueprint.
   No markschemes. No giant rule blocks.
   Dynamic injection: only loads relevant modules.
   ═══════════════════════════════════════════════════════════ */

const { STRAND_MODULES } = require("./strands");

// Conditional micro-modules — injected ONLY when needed
const FORMULA_SHEET_MICRO = `FORMULA SHEET (provided to students):
ρ=m/V, s=d/t, v=Δd/Δt, a=Δv/Δt, v=u+at, d=ut+½at², v²=u²+2ad,
F=ma, p=mv, P=F/A, W=Fd, KE=½mv², GPE=mgh, g=F_g/m,
efficiency=useful/total×100%, P=W/t, P=IV, I=Q/t, V=IR,
R_total=R₁+R₂+... (series), 1/R_total=1/R₁+1/R₂+... (parallel),
V₁/V₂=n₁/n₂, v=fλ, T=1/f.
RULE: Only use formulas from this list. If a question needs one NOT listed, provide it in the question text.`;

const GRAPH_RULES_MICRO = `GRAPH PLOT: Use type "Graph Plot". Include data.graphAxes ({x:"label / unit", y:"label / unit", xRange:[min,max], yRange:[min,max]}), data.dataPoints ([[x,y],...]).
Axes MUST include units (e.g. "Time / s", "Force / N").`;

const TABLE_RULES_MICRO = `TABLE: Include data.tableHeaders (array with units), data.tableRows (int), data.tableCols (int), data.tablePrefill (2D array, "" for blanks). Headers MUST include units.`;

const DRAG_DROP_MICRO = `DRAG AND DROP: Include data.dragItems (array), data.dropZones (array of {label, accepts:[items]}). 1 mark per correct placement.`;

const DRAWING_MICRO = `DRAWING: Include data.drawingInstructions (what to draw). Do NOT include data.drawingImage.`;

const MCQ_RULES_MICRO = `MCQ RULES:
- 4 options, exactly 1 correct, 3 plausible distractors (common misconceptions).
- All options similar in length and structure.
- No "All of the above" or "None of the above".
- VERIFY: data.correct index points to the actually correct option.`;

const SIMULATION_MICRO = `SIMULATION CONTEXT: Describe a virtual lab/simulation. Specify: what it models, what variables can be changed (sliders/dropdowns), what is measured (meters/graphs/tables).`;

const CRITERION_D_EXTENDED_MICRO = `EXTENDED RESPONSE (Criterion D):
- Stimulus: 6-10 sentences with specific names, data, locations.
- Students discuss BOTH benefits AND limitations.
- Reference specific data from the stimulus.
- Concluding appraisal with justified opinion.
- Use holistic gradingGrid (theme1, theme2, conclusion).`;

/**
 * Build a micro-prompt for the Question Generator (Call 2).
 * @param {Array} blueprint - Array of slot objects from Call 1
 * @param {Object} sections - Section metadata from Call 1
 * @param {Object} config - Original teacher config
 * @returns {Object} { systemPrompt, userPrompt }
 */
function buildQuestionPrompt(blueprint, sections, config) {
  const crit = config.criterion || "A";

  // Determine which micro-modules to inject
  const neededTypes = new Set(blueprint.map(s => s.questionType));
  const hasCalc = blueprint.some(s => s.calculationRequired);
  const hasGraph = neededTypes.has("Graph Plot");
  const hasTable = neededTypes.has("Table");
  const hasDragDrop = neededTypes.has("Drag and Drop");
  const hasDrawing = neededTypes.has("Drawing");
  const hasMCQ = neededTypes.has("MCQ");
  const hasSimulation = crit === "B" || crit === "C";
  const hasDExtended = crit === "D" && blueprint.some(s => s.marks >= 6);

  // Build dynamic injection block — ONLY relevant modules
  let dynamicRules = "";
  if (hasCalc || crit === "A" || crit === "C") dynamicRules += "\n" + FORMULA_SHEET_MICRO;
  if (hasGraph) dynamicRules += "\n" + GRAPH_RULES_MICRO;
  if (hasTable) dynamicRules += "\n" + TABLE_RULES_MICRO;
  if (hasDragDrop) dynamicRules += "\n" + DRAG_DROP_MICRO;
  if (hasDrawing) dynamicRules += "\n" + DRAWING_MICRO;
  if (hasMCQ) dynamicRules += "\n" + MCQ_RULES_MICRO;
  if (hasSimulation) dynamicRules += "\n" + SIMULATION_MICRO;
  if (hasDExtended) dynamicRules += "\n" + CRITERION_D_EXTENDED_MICRO;

  // Fetch relevant strand cognitive guidance
  const relevantStrands = [...new Set(blueprint.map(s => crit + "_" + s.strand))];
  const strandGuidance = relevantStrands.map(k => {
    const mod = STRAND_MODULES[k];
    if (!mod) return "";
    return `${k}: ${mod.cognitiveExpectation} Reasoning: ${mod.reasoningStyle}. Depth: ${mod.expectedDepth}.`;
  }).filter(Boolean).join("\n");

  const systemPrompt = `You are an expert IB MYP Physics question writer.
Generate ONLY question content and stimuli. Do NOT generate mark schemes or explanations — leave those EMPTY.
Output ONLY valid JSON matching the exact schema below. No markdown.`;

  const userPrompt = `Generate questions for Criterion ${crit} using this BLUEPRINT:

${JSON.stringify(blueprint, null, 2)}

SECTIONS:
${JSON.stringify(sections, null, 2)}

Topic: ${config.topic} | Grade: ${config.grade}
${config.context ? "Teacher Context: " + config.context : ""}

STRAND GUIDANCE:
${strandGuidance}
${dynamicRules}

OUTPUT FORMAT:
{
  "heading": "${config.heading || config.topic}",
  "sections": ${JSON.stringify(sections)},
  "blocks": [
    {"mode":"content","type":"Text","sectionId":1,"data":{"text":"<p>Real-world stimulus HTML (3-8 sentences with specific names, data, locations)</p>"}},
    {"mode":"question","type":"MCQ","sectionId":1,
      "data":{"question":"Command term + question text","correct":0,"explanation":""},
      "ui":{"mcqOptions":["A","B","C","D"]},
      "meta":{"marks":1,"criterion":"${crit}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"","gradingGrid":null}
    }
  ]
}

RULES:
1) Start each question with the command term (bold in student view).
2) Stimulus (Text content block) BEFORE questions in each section.
3) Questions start with the command term.
4) Total marks = EXACTLY ${config.totalMarks}.
5) Realistic physics values with correct units and 3 s.f.
6) Leave meta.markScheme and data.explanation as EMPTY STRINGS.
7) Every stimulus MUST use a specific real-world context with names, places, numbers.
8) NEVER use: "A student in a lab", "Consider a block on a surface".
9) At least 2 different question types per section.
10) For ${crit === "B" ? "Criterion B: ONE stimulus, ONE holistic design question with meta.gradingGrid." : crit === "D" ? "Criterion D: extended response with holistic gradingGrid for the main question." : "each section, progress through strands i → ii → iii."}`;

  return { systemPrompt, userPrompt };
}

module.exports = { buildQuestionPrompt };
