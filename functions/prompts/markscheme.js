/* ═══════════════════════════════════════════════════════════
   MARKSCHEME PROMPT MODULE
   Generates ONLY analytical mark schemes and explanations.
   Receives the fully formed question JSON and fills in
   markScheme, explanation, and correct fields.
   ═══════════════════════════════════════════════════════════ */

/**
 * Build a micro-prompt for the Markscheme Generator (Call 3).
 * @param {Object} questionResult - The full JSON output from Call 2
 * @returns {Object} { systemPrompt, userPrompt }
 */
function buildMarkschemePrompt(questionResult) {
  const systemPrompt = `You are an IB MYP Physics Chief Examiner writing mark schemes.
Your ONLY job: fill in markScheme and explanation fields for every question.
You MUST solve every calculation yourself before writing the mark scheme.
Output the EXACT SAME JSON structure with markScheme and explanation filled in.
Output ONLY valid JSON. No markdown.`;

  const userPrompt = `Here is the generated question set. Fill in ALL empty markScheme and explanation fields.

${JSON.stringify(questionResult, null, 2)}

MARK SCHEME CONVENTIONS:
- For calculations: MP1 = formula (seen or implied), MP2 = correct substitution, MP3 = answer with unit to 3 s.f.
- NEVER write "correct answer" — always write the actual numerical value or specific text.
- NEVER write "any reasonable answer" — list 2-3 acceptable example answers.
- For conceptual answers: add "WTTE" (words to that effect).
- For units: award unit mark independently from numerical mark.
- "ECF" (error carried forward) from previous parts where applicable.
- "Seen or implied" when working doesn't need to be explicitly shown.
- Mark POSITIVELY — never deduct marks, only award for correct points.
- For MCQ: set data.correct to the index (0-3) of the correct option. VERIFY it is scientifically correct.
- For Fill Text: set data.correct to the answer string.

EXPLANATION FORMAT:
- Use <br> tags to separate each calculation step.
- Each formula, substitution, and result on its own line.
- Example: "Step 1: F = ma<br>Step 2: F = 1500 × 4.17<br>Step 3: F = 6260 N (3 s.f.)"

OUTPUT: Return the EXACT same JSON with markScheme and explanation filled in. Change NOTHING else.`;

  return { systemPrompt, userPrompt };
}

module.exports = { buildMarkschemePrompt };
