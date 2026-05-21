/* ═══════════════════════════════════════════════════════════
   BLUEPRINT PROMPT MODULE
   Generates ONLY the structural metadata for an exam section.
   No question text. No markschemes. Criterion-first logic.
   ═══════════════════════════════════════════════════════════ */

const { STRAND_MODULES } = require("./strands");

/**
 * Build a micro-prompt for the Blueprint Generator (Call 1).
 * @param {Object} config - { criterion, totalMarks, topic, grade, yearLevel, questions, dFactor, globalContext }
 * @returns {Object} { systemPrompt, userPrompt }
 */
function buildBlueprintPrompt(config, orchestratorPlan) {
  const crit = config.criterion || "A";
  const strands = Object.keys(STRAND_MODULES)
    .filter(k => k.startsWith(crit + "_"))
    .map(k => ({ key: k, ...STRAND_MODULES[k] }));

  const strandBlock = strands.map(s =>
    `${s.key}: ${s.label}\n  Cognitive: ${s.cognitiveExpectation}\n  Commands: ${s.commandTerms.join(", ")}\n  Types: ${s.questionTypes.join(", ")}\n  Marks: ${s.marksRange[0]}-${s.marksRange[1]}`
  ).join("\n\n");

  const systemPrompt = `You are an IB MYP Sciences eAssessment blueprint architect.
Your ONLY job: output a JSON blueprint with metadata for each question slot.
You do NOT write questions, stimuli, or mark schemes.
Output ONLY valid JSON. No markdown, no prose.`;

  const orchestratorBlock = orchestratorPlan 
    ? `\nCHIEF EXAMINER ORCHESTRATOR PLAN (STRICT CONSTRAINTS):\n${JSON.stringify(orchestratorPlan, null, 2)}\n\nYou MUST align the blueprint pacing, cognitive distribution, and thematic branches precisely with these constraints.\n` 
    : "";

  const userPrompt = `Design a blueprint for Criterion ${crit} with EXACTLY ${config.totalMarks} total marks.
Topic: ${config.topic} | Grade: ${config.grade} | Year Level: ${config.yearLevel || "5"}
Global Context: ${config.globalContext || "Scientific and Technical Innovation"}
${config.dFactor ? "D-Factor: " + config.dFactor : ""}${orchestratorBlock}

STRAND DEFINITIONS FOR CRITERION ${crit}:
${strandBlock}

QUESTION MIX REQUESTED:
${config.questions.map(q => {
  if (q.marksList && q.marksList.length > 0) {
    return q.marksList.map(m => "- 1× " + q.type + " (" + m + " marks)").join("\n");
  }
  return "- " + q.count + "× " + q.type + " (" + q.marks + " marks each)";
}).join("\n")}

OUTPUT FORMAT — array of question slots:
{
  "blueprint": [
    {
      "slotId": 1,
      "sectionId": 1,
      "criterion": "${crit}",
      "strand": "i",
      "commandTerm": "State",
      "questionType": "MCQ",
      "marks": 1,
      "difficulty": "easy",
      "scenario": "Brief 1-sentence real-world context idea",
      "physicsConcepts": ["Newton's Second Law"],
      "cognitiveLevel": "recall",
      "reasoningDepth": "single-step",
      "calculationRequired": false,
      "mediaIntent": {
        "recommendedType": "graph",
        "description": "Brief description of visual",
        "axisLabels": ["x-axis", "y-axis"]
      }
    }
  ],
  "sections": [
    { "id": 1, "name": "Section 1", "scenarioTheme": "Medical physics — defibrillators" }
  ],
  "totalMarks": ${config.totalMarks}
}

RULES:
1) Total marks across all slots MUST equal EXACTLY ${config.totalMarks}.
2) Distribute strands based on the cognitiveDistribution in the Orchestrator Plan.
3) Each section MUST use a DIFFERENT real-world scenario (never generic lab), strictly following sectionThemes.
4) Generate at LEAST 2 sections. Do NOT exceed the thematic branches in the Orchestrator Plan.
5) Progress strands within each section: i → ii → iii.
6) Match commandTerm to strand strictly (strand i=recall terms, strand ii=application terms, strand iii=analysis terms).
7) Every scenario must be a genuine real-world context: medical devices, space missions, sports technology, transport, environment, renewable energy, consumer electronics.
8) NEVER use: "A student in a lab", "Consider a block", "A physics experiment involves".`;

  return { systemPrompt, userPrompt };
}

module.exports = { buildBlueprintPrompt };
