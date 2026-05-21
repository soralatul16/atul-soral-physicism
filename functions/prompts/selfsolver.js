/* ═══════════════════════════════════════════════════════════
   SELF-SOLVING RELIABILITY LAYER — Phase 3
   
   AI solves the generated question independently, then
   compares against the generated markscheme to detect
   contradictions, impossible calculations, and physically
   invalid outputs.
   ═══════════════════════════════════════════════════════════ */

/**
 * Build a micro-prompt that asks the AI to solve questions blindly.
 * @param {Array} questionBlocks - Array of question blocks to solve
 * @returns {Object} { systemPrompt, userPrompt }
 */
function buildSelfSolvePrompt(questionBlocks) {
  // Only self-solve calculation and analytical questions (2+ marks)
  const solvable = questionBlocks
    .filter(b => b.mode === "question" && b.meta?.marks >= 2)
    .map((b, i) => ({
      solveId: i,
      type: b.type,
      question: b.data?.question || "",
      marks: b.meta?.marks || 1,
      commandTerm: b.meta?.commandTerm || "",
      options: b.type === "MCQ" ? b.ui?.mcqOptions : undefined
    }));

  if (solvable.length === 0) return null;

  const systemPrompt = `You are a physics exam solver. You are given exam questions. Solve each one independently.
For calculations: show formula, substitution, and final answer to 3 s.f. with SI unit.
For MCQ: identify the correct option index (0-3).
For conceptual questions: provide a concise answer.
Output ONLY valid JSON. No markdown.`;

  const userPrompt = `Solve these physics questions. Return your solutions as a JSON array.

${JSON.stringify(solvable, null, 2)}

OUTPUT FORMAT:
{
  "solutions": [
    {
      "solveId": 0,
      "answer": "6250 N",
      "working": "F = ma = 1500 × 4.17 = 6250 N",
      "correctIndex": null,
      "confidence": "high",
      "physicsValid": true,
      "issues": []
    }
  ]
}

RULES:
- For calculations: show full working. Flag if values seem physically impossible (negative mass, speed > c, etc.)
- For MCQ: set correctIndex to the index of the correct option (0-3)
- Set physicsValid=false if the question contains a physical impossibility
- Set confidence to "high", "medium", or "low"
- Add specific issues to the issues array (e.g., "mass cannot be negative", "speed exceeds speed of light")`;

  return { systemPrompt, userPrompt };
}

/**
 * Compare self-solved answers against generated markschemes.
 * Returns contradictions and flags for each question.
 *
 * @param {Array} questionBlocks - Original question blocks (with markschemes)
 * @param {Object} selfSolveResult - Parsed JSON from the self-solve AI call
 * @returns {{ contradictions: Array, physicsFlags: Array, mcqMismatches: Array }}
 */
function compareSolutions(questionBlocks, selfSolveResult) {
  const contradictions = [];
  const physicsFlags = [];
  const mcqMismatches = [];

  const solutions = selfSolveResult?.solutions || [];
  const solvableBlocks = questionBlocks.filter(b => b.mode === "question" && b.meta?.marks >= 2);

  for (const sol of solutions) {
    const block = solvableBlocks[sol.solveId];
    if (!block) continue;

    // Flag physically invalid questions
    if (sol.physicsValid === false) {
      physicsFlags.push({
        blockIndex: sol.solveId,
        question: (block.data?.question || "").substring(0, 80),
        issues: sol.issues || ["Physically invalid"]
      });
    }

    // MCQ correctIndex mismatch
    if (block.type === "MCQ" && sol.correctIndex !== null && sol.correctIndex !== undefined) {
      if (block.data?.correct !== undefined && block.data.correct !== sol.correctIndex) {
        mcqMismatches.push({
          blockIndex: sol.solveId,
          generatedCorrect: block.data.correct,
          solvedCorrect: sol.correctIndex,
          question: (block.data?.question || "").substring(0, 80)
        });
        // Auto-fix: trust the self-solver for MCQ
        block.data.correct = sol.correctIndex;
      }
    }

    // Check if self-solve answer contradicts markscheme
    if (sol.answer && block.meta?.markScheme) {
      const msText = typeof block.meta.markScheme === "string" ? block.meta.markScheme : JSON.stringify(block.meta.markScheme);
      const solAnswer = sol.answer.toString().toLowerCase();

      // Extract numbers from both
      const msNumbers = msText.match(/[\d.]+/g) || [];
      const solNumbers = solAnswer.match(/[\d.]+/g) || [];

      if (msNumbers.length > 0 && solNumbers.length > 0) {
        // Check if at least one significant number matches (within 5% tolerance)
        const msVals = msNumbers.map(Number).filter(n => n > 0);
        const solVals = solNumbers.map(Number).filter(n => n > 0);

        let anyMatch = false;
        for (const sv of solVals) {
          for (const mv of msVals) {
            if (Math.abs(sv - mv) / Math.max(mv, 1) < 0.05) {
              anyMatch = true;
              break;
            }
          }
          if (anyMatch) break;
        }

        if (!anyMatch && solVals.length > 0 && msVals.length > 0) {
          contradictions.push({
            blockIndex: sol.solveId,
            solvedAnswer: sol.answer,
            markSchemeAnswer: msText.substring(0, 120),
            question: (block.data?.question || "").substring(0, 80)
          });
        }
      }
    }
  }

  return { contradictions, physicsFlags, mcqMismatches };
}

module.exports = { buildSelfSolvePrompt, compareSolutions };
