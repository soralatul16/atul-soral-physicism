/* ═══════════════════════════════════════════════════════════
   ORCHESTRATOR PROMPT MODULE — Phase 4
   
   Call 0: The "Chief Examiner" mapping out the paper.
   Reads recent memory and outputs constraints to prevent
   repetition and enforce pacing/thematic coherence.
   ═══════════════════════════════════════════════════════════ */

/**
 * Build a micro-prompt for the Orchestrator Generator (Call 0).
 * @param {Object} config - { criterion, totalMarks, topic, grade, yearLevel, subject, profileMode }
 * @param {Object} memory - Fetched from Firestore (recent scenarios, openings, numbers, scores)
 * @param {string} patterns - Retrieved IB structural patterns
 * @param {Object} subjectAdapter - The subject-specific adapter module (e.g. physics.js)
 * @returns {Object} { systemPrompt, userPrompt }
 */
function buildOrchestratorPrompt(config, memory, patterns, subjectAdapter) {
  const subjectName = subjectAdapter ? subjectAdapter.subjectName : (config.subject || "Physics");
  
  const systemPrompt = `You are the IB MYP ${subjectName} Chief Examiner (Orchestrator).
Your ONLY job is to map out the blueprint constraints for a new exam generation.
You DO NOT write the exam itself.
Output ONLY valid JSON matching the exact schema. No markdown, no prose.`;

  // Format memory strings
  const forbiddenScenarios = (memory.scenarios || [])
    .filter(s => s.repetitionWeight > 1.5 || s.usageCount > 2)
    .map(s => s.text)
    .join("; ");
    
  const overusedNumbers = (memory.numbers || [])
    .filter(n => n.usageCount > 2)
    .map(n => n.text)
    .join(", ");

  const difficultyContext = (memory.averageValidationScore < 6) 
    ? "WARNING: Recent generations for this topic had low validation scores. Prioritize standard, highly-structured IB patterns over complex/novel scenarios."
    : "Recent generations were high quality. You may use moderate to complex realistic scenarios.";

  // Profile Modes (Soft biases)
  let profileBias = "Maintain a standard IB MYP distribution.";
  if (config.profileMode === "Scaffolded") {
    profileBias = "SCAFFOLDED MODE: Softly bias towards more single-step reasoning and explicitly clear command terms. Slightly reduce cognitive burden on lower strands.";
  } else if (config.profileMode === "High-Rigor") {
    profileBias = "HIGH-RIGOR MODE: Softly bias towards multi-step calculations, unfamiliar contexts, and synthesis-level command terms where appropriate.";
  } else if (config.profileMode === "Revision") {
    profileBias = "REVISION MODE: Softly bias towards covering a wide breadth of fundamental concepts rather than deep, single-context dives.";
  }

  const userPrompt = `Map out the exam constraints for Criterion ${config.criterion || "A"} (${config.totalMarks} marks).
Topic: ${config.topic} | Grade: ${config.grade}
Teacher Profile Bias: ${profileBias}

RECENT MEMORY CONSTRAINTS (DO NOT REPEAT THESE):
- Overused/Generic Scenarios to AVOID: ${forbiddenScenarios || "None yet."}
- Overused Numerical Values to AVOID: ${overusedNumbers || "None yet."}
- Difficulty Signal: ${difficultyContext}

${patterns}

OUTPUT FORMAT:
{
  "orchestratorPlan": {
    "overallTheme": "Broad 3-word theme (e.g., Renewable energy systems)",
    "forbiddenScenarios": ["List of 2-3 specific contexts to explicitly avoid"],
    "sectionThemes": ["Specific theme for Section 1", "Specific theme for Section 2"],
    "difficultyProgression": "1-sentence description of how difficulty should escalate",
    "commandTermConstraints": ["Ensure at least one 'Evaluate' in Section 2", "Limit 'State' to 2 max"],
    "cognitiveDistribution": {
      "recall": 20,
      "application": 40,
      "analysis": 25,
      "evaluation": 15
    },
    "pacingProfile": "1-sentence description (e.g., Fast multiple choice followed by deep extended response)",
    "realismPriority": "High (use specific named technologies/locations)",
    "contextualVarietyTargets": ["Include one microscopic/atomic context", "Include one macroscopic/engineering context"]
  }
}

RULES:
1. "sectionThemes" MUST NOT exceed 3 thematic branches (keep it coherent).
2. "forbiddenScenarios" MUST include the generic phrases: "student in a lab", "student investigates".
3. "cognitiveDistribution" values MUST sum to 100.
4. If Criterion is A: emphasis on recall/application/analysis.
5. If Criterion is B/C: emphasis on application/analysis/evaluation.
6. If Criterion is D: emphasis on evaluation/application.`;

  return { systemPrompt, userPrompt };
}

module.exports = { buildOrchestratorPrompt };
