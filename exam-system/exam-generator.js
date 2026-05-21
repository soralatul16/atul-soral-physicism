Replace the entire contents of exam-system/exam-generator.js with the following code:

```javascript
/* ═══════════════════════════════════════════════════════════
   PHYSICISM — AI Question Set Generator (Groq + Gemini)
   Supports Groq (default, free 30RPM) and Gemini as fallback.
   API key stored client-side in localStorage.
   This is acceptable since the tool is behind Google Auth
   and only accessible to the authenticated teacher.
   ═══════════════════════════════════════════════════════════ */

let _genCooldown = false;

/* ── Open Generator Screen ── */
function openGenerator() {
  showPage('generator');
  const screen = document.getElementById('generatorScreen');
  if (!screen) return;
  screen.style.display = 'flex';
  
  // Move shared meta form
  const metaForm = document.getElementById('shared-meta-form');
  const placeholder = document.getElementById('gen-meta-placeholder');
  if(metaForm && placeholder) {
    placeholder.appendChild(metaForm);
    metaForm.style.display = 'block';
  }
  
  renderTemplates();
  
  // Check for API key (Groq or Gemini)
  const key = localStorage.getItem('groq_api_key') || localStorage.getItem('gemini_api_key');
  document.getElementById('gen-key-setup').style.display = key ? 'none' : 'block';
  document.getElementById('gen-main-form').style.display = key ? 'block' : 'none';
  updateGenTotalMarks();
}

/* ── API Key Management ── */
function saveGeminiKey() {
  const input = document.getElementById('gen-api-key-input');
  const key = (input.value || '').trim();
  if (!key) { alert('Please enter an API key.'); return; }
  
  // Detect key type: Groq keys start with 'gsk_'
  if (key.startsWith('gsk_')) {
    localStorage.setItem('groq_api_key', key);
    localStorage.removeItem('gemini_api_key');
  } else {
    localStorage.setItem('gemini_api_key', key);
    localStorage.removeItem('groq_api_key');
  }
  
  document.getElementById('gen-key-setup').style.display = 'none';
  document.getElementById('gen-main-form').style.display = 'block';
  alert('✅ API key saved! Provider: ' + (key.startsWith('gsk_') ? 'Groq' : 'Gemini'));
}

function resetGeminiKey() {
  if (!confirm('Remove saved API key?')) return;
  localStorage.removeItem('gemini_api_key');
  localStorage.removeItem('groq_api_key');
  document.getElementById('gen-key-setup').style.display = 'block';
  document.getElementById('gen-main-form').style.display = 'none';
}

/* ── Total Marks Calculator ── */
function updateGenTotalMarks() {
  var total = 0;
  document.querySelectorAll('.gen-type-row').forEach(function(row) {
    var cb = row.querySelector('.gen-type-cb');
    var countEl = row.querySelector('.gen-type-count');
    var marksEl = row.querySelector('.gen-type-marks');
    if (cb && cb.checked && marksEl) {
      var marksVal = marksEl.value || '0';
      if (marksVal.indexOf(',') !== -1) {
        var parts = marksVal.split(',');
        parts.forEach(function(p) { total += Number(p.trim()) || 0; });
      } else {
        total += Number(countEl.value || 0) * Number(marksVal || 0);
      }
    }
  });
  var el = document.getElementById('shared-total-marks');
  if (el) el.value = total;
  var genTotal = document.getElementById('gen-total-marks');
  if (genTotal) genTotal.value = total;
}

/* ── Templates Logic (Updated to match Official IB Blueprint) ── */
const PRESET_TEMPLATES = [
  {
    name: "Task 1 — Criterion A (25 marks)",
    criteria: ["A"],
    mix: [ {t:"MCQ", c:5, m:1}, {t:"Fill Text", c:3, m:1}, {t:"Long Answer", c:2, m:3}, {t:"Long Answer", c:2, m:4}, {t:"Table", c:1, m:4} ],
    marks: 25
  },
  {
    name: "Task 2 — Criteria B+C (50 marks)",
    criteria: ["B", "C"],
    mix: [ {t:"Long Answer", c:1, m:25}, {t:"Table", c:1, m:4}, {t:"Graph Plot", c:1, m:4}, {t:"Long Answer", c:3, m:4}, {t:"Fill Text", c:3, m:1} ],
    marks: 50
  },
  {
    name: "Task 3 — Criterion D (25 marks)",
    criteria: ["D"],
    mix: [ {t:"MCQ", c:3, m:1}, {t:"Fill Text", c:2, m:1}, {t:"Long Answer", c:1, m:6}, {t:"Long Answer", c:1, m:8}, {t:"True / False", c:2, m:1} ],
    marks: 25
  },
  {
    name: "Full Mock eAssessment (100 marks)",
    criteria: ["A", "B", "C", "D"],
    mix: [ {t:"MCQ", c:8, m:1}, {t:"Fill Text", c:5, m:1}, {t:"Long Answer", c:8, m:4}, {t:"Table", c:2, m:4}, {t:"Graph Plot", c:1, m:4}, {t:"Long Answer", c:2, m:8} ],
    marks: 100
  },
  {
    name: "Quick Quiz — Criterion A (15 marks)",
    criteria: ["A"],
    mix: [ {t:"MCQ", c:5, m:1}, {t:"Long Answer", c:2, m:3}, {t:"Fill Text", c:2, m:1} ],
    marks: 15
  }
];

function renderTemplates() {
  const container = document.getElementById('template-cards-container');
  if(!container) return;
  container.innerHTML = PRESET_TEMPLATES.map((tpl, i) => `
    <div style="background:var(--white);border:1.5px solid var(--border);border-radius:12px;padding:12px;min-width:160px;cursor:pointer;" onclick="applyTemplate(${i})">
      <div style="font-weight:600;font-size:13px;color:var(--text);margin-bottom:6px;">${tpl.name}</div>
      <div style="font-size:11px;color:var(--text3);">${tpl.marks} marks · Crit ${tpl.criteria.join('+')}</div>
    </div>
  `).join('');
}

function applyTemplate(idx) {
  const tpl = PRESET_TEMPLATES[idx];
  
  // Set Criteria (requires clicking checkboxes in DOM)
  const cPanel = document.getElementById('shared-criteria-panel');
  if(cPanel) {
    cPanel.querySelectorAll('input').forEach(cb => {
      cb.checked = tpl.criteria.includes(cb.value);
    });
    updateMultiSelect('shared-criteria');
    checkDFactor();
  }
  
  // Reset and apply mix
  document.querySelectorAll('.gen-type-row').forEach(row => {
    row.querySelector('.gen-type-cb').checked = false;
  });
  
  tpl.mix.forEach(m => {
    const row = document.querySelector(`.gen-type-row[data-type="${m.t}"]`);
    if(row) {
      row.querySelector('.gen-type-cb').checked = true;
      row.querySelector('.gen-type-count').value = m.c;
      row.querySelector('.gen-type-marks').value = m.m;
    }
  });
  
  updateGenTotalMarks();
}

/* ── Official IB MYP Sciences Constants ── */
const DIAGRAM_BANK = {
  forces: ['free-body-diagram.png','spring-extension.png','friction-surface.png','projectile-motion.png'],
  waves: ['transverse-wave.png','longitudinal-wave.png','refraction-prism.png','em-spectrum.png','reflection-diagram.png'],
  electricity: ['series-circuit.png','parallel-circuit.png','ohms-law-graph.png','VI-characteristic.png','circuit-symbols.png'],
  energy: ['sankey-diagram.png','energy-transfer-chain.png','GPE-KE-conversion.png','efficiency-diagram.png'],
  atomic: ['atom-structure.png','radioactive-decay.png','half-life-graph.png','alpha-beta-gamma.png'],
  thermal: ['particle-model-solid.png','particle-model-liquid.png','particle-model-gas.png','heating-curve.png'],
  motion: ['distance-time-graph.png','velocity-time-graph.png','acceleration-diagram.png','terminal-velocity.png'],
  astrophysics: ['solar-system.png','telescope-reflecting.png','big-bang-timeline.png'],
  experiments: ['measuring-cylinder.png','stopwatch-ruler.png','spring-mass-setup.png','pendulum-setup.png','beaker-thermometer.png']
};

const IB_OFFICIAL_FORMULA_SHEET = `
OFFICIAL IB MYP PHYSICS FORMULA SHEET (provided to students on-screen):
ρ = m/V (density)
s = d/t (speed)
v = Δd/Δt (velocity, where d = displacement)
a = Δv/Δt (acceleration)
v = u + at
d = ut + ½at²
v² = u² + 2ad
F = ma (force)
p = mv (momentum)
P = F/A (pressure)
W = Fd (work done)
KE = ½mv² (kinetic energy)
g = F_g/m (gravitational field strength)
GPE = mgh (gravitational potential energy)
efficiency = useful energy output / total energy input × 100%
P = W/t (power, from work)
P = IV (power, electrical)
I = Q/t (current)
V = IR (voltage)
R_total = R₁ + R₂ + ... (series)
1/R_total = 1/R₁ + 1/R₂ + ... (parallel)
V₁/V₂ = n₁/n₂ (transformer equation)
v = fλ (wave speed)
T = 1/f (time period)

RULE: These are the ONLY formulas students have access to. If a question requires any formula NOT on this list, you MUST provide it within the question text. Never assume students know formulas beyond this list.`;

const IB_ASSESSMENT_CONVENTIONS = `
OFFICIAL IB ASSESSMENT CONVENTIONS (ISO 80000):
- Final answers: 3 significant figures (unless stated otherwise)
- Scientific notation: a × 10^k where 1 ≤ a < 10
- SI units required. Accepted exceptions: mass in g (lab), volume in cm³ or dm³, temperature in °C, pressure in kPa
- Derived units: ms⁻¹, ms⁻², kg m⁻³, J g⁻¹ °C⁻¹
- Subscripts/superscripts must be formatted correctly — wrong formatting = no marks
- Mark schemes must specify: "Award [N] mark(s) for answer to 3 s.f. with correct unit"
- Accept ECF (error carried forward) from previous parts
- "Seen or implied" means the working doesn't need to be explicitly shown if the answer is correct`;

const IB_EXAM_TOOLS = `
TOOLS AVAILABLE TO STUDENTS (on-screen eAssessment):
- Scientific calculator (on-screen, always available)
- Measuring tool (for measuring distances/angles on diagrams)
- Drawing canvas (for sketching diagrams, free-body diagrams, circuits)
- Graph plotter (for plotting data points and drawing lines of best fit)
- Table drawing tool (for organizing data)
- IUPAC periodic table (interactive, on-screen)

When creating questions, assume students have access to ALL these tools. Design questions that USE these tools:
- "Use the graph plotter to plot..." instead of "Draw a graph..."
- "Complete the table below..." using the table tool
- "On the drawing canvas, sketch..." for diagram questions
- Calculator questions should require multi-step calculations`;

const IB_TASK_BLUEPRINT = `
OFFICIAL IB MYP SCIENCES eASSESSMENT BLUEPRINT:
┌─────────┬─────────────────────────────┬───────┬──────────────┐
│ Task    │ Focus                       │ Marks │ Criteria     │
├─────────┼─────────────────────────────┼───────┼──────────────┤
│ Task 1  │ Knowing & Understanding     │  25   │ A (may +C)   │
│ Task 2  │ Investigation (simulation)  │  50   │ B + C        │
│ Task 3  │ Real-world reflection       │  25   │ D            │
├─────────┼─────────────────────────────┼───────┼──────────────┤
│ TOTAL   │                             │ 100   │ A+B+C+D      │
└─────────┴─────────────────────────────┴───────┴──────────────┘

Task 1 (Criterion A, ~25 marks):
- Tests knowledge and understanding of physics concepts
- May ALSO award marks against Criterion C when data interpretation is involved
- Uses 2-3 stimulus contexts with progressive sub-parts (i → ii → iii)
- Stimulus = real-world scenario (3-8 sentences) with specific data

Task 2 (Criteria B+C, ~50 marks):
- Based on a SIMULATION — students interact with a virtual lab
- Criterion B (~25 marks): Design an investigation using the simulation
  - Formulate research question, hypothesis, identify variables
  - Design method with equipment from the simulation
  - Plan data collection (5 increments, 3 trials, calculate average)
  - ONE holistic marking grid (V, H, E, M, D, S)
- Criterion C (~25 marks): Process and evaluate data FROM the simulation
  - Present data in tables with correct headers and units
  - Plot graphs using the graph plotter tool
  - Interpret trends, calculate values, evaluate hypothesis
  - Identify errors and suggest improvements

Task 3 (Criterion D, ~25 marks):
- Extended response about a REAL-WORLD science issue
- Stimulus = detailed scenario (6-10 sentences) with specific data, names, locations
- Students discuss implications (environmental, economic, ethical, social, political)
- Must include BOTH benefits AND limitations
- Holistic marking grid for extended response
- Concluding appraisal with justified opinion

MARK FLEXIBILITY: Blueprint allows ±3 marks variation per task.`;

/* ── Updated System Prompt ── */
const GROQ_SYSTEM_PROMPT = 'You are an expert IB MYP Physics teacher and examiner who has written and marked every MYP Sciences eAssessment paper from M23 to M25. You follow the IB MYP Sciences Guide (April 2023), the official assessment blueprint (Task 1=25mk Crit A, Task 2=50mk Crit B+C, Task 3=25mk Crit D, Total=100mk), ISO 80000 conventions (3 s.f., SI units, scientific notation), and the official formula sheet. Your questions are INDISTINGUISHABLE from real IB papers. You MUST respond with valid JSON only. No markdown, no code fences, no extra text.';

/* ── Build Prompt (IB MYP Sciences Guide April 2023 + Official Blueprint + Real Papers M23-M25) ── */
function buildGeneratorPrompt(config) {
  const gradeToYear = {"6":"1","7":"1","8":"3","9":"3","10":"5"};
  const crit = config.criterion?.charAt(0) || "A";
  const yl = gradeToYear[config.grade] || "5";
  const critFullNames = {A:"Knowing and Understanding",B:"Inquiring and Designing",C:"Processing and Evaluating",D:"Reflecting on the Impacts of Science"};

  const diagramInstr = config.includeDiagrams ? `
DIAGRAMS: When a visual is needed, generate a Text content block with a styled HTML placeholder box. Do NOT use Image blocks — they break. Use this format:

{"mode":"content","type":"Text","sectionId":1,"data":{"text":"<div style='padding:16px;background:#f9f6f1;border:2px dashed rgba(192,57,43,0.15);border-radius:10px;text-align:center;margin:10px 0;'><p style='font-size:13px;color:#c0392b;font-weight:600;'>[DIAGRAM: Description of what diagram shows]</p><p style='font-size:12px;color:#555;margin-top:6px;'>Detailed description with labels, arrows, and measurements</p></div>"}}

For Criterion D, describe the real-world scenario with specific details in the stimulus text instead of requiring an image.

RULES:
- NEVER generate blocks with "type":"Image" — they will break and show nothing
- Use the placeholder div format above for all diagram references
- Include detailed descriptions so the teacher can add their own image later
- Make descriptions specific: mention exact labels, values, directions, and components
` : '';

  const dataTableInstr = config.includeDataTables ? `
DATA TABLES: For Criterion C and calculation questions, include HTML data tables in Text content blocks. Headers MUST include units (e.g. "Mass / kg"). Include 5-7 rows with realistic values. Leave some cells as "—" for students to calculate. Values must be internally consistent with the physics.` : '';

  const ye = {
    "1": {
      label:"Year 1 (Grade 6-7, ages 11-12)",
      A_verbs:{i:["Outline","State","Recall"],ii:["Apply","Calculate","Suggest"],iii:["Interpret"]},
      B_verbs:{i:["Outline","State"],ii:["Outline","Predict"],iii:["Outline","State"],iv:["Design"]},
      C_verbs:{i:["Present","Collect"],ii:["Interpret","Outline"],iii:["Discuss","State"],iv:["Discuss","State"],v:["Describe","Outline"]},
      D_verbs:{i:["Summarize","State"],ii:["Describe","Summarize"],iii:["Apply"],iv:["Document"]},
      B_note:"Use 'prediction' not 'hypothesis' for Year 1",
      complexity:"Simple language, familiar contexts (sports, cooking, playground), whole numbers, single-step calculations, 2-3 sentence stimulus texts"
    },
    "3": {
      label:"Year 3 (Grade 8-9, ages 13-14)",
      A_verbs:{i:["Describe","State","Outline"],ii:["Apply","Calculate","Solve"],iii:["Analyse","Interpret"]},
      B_verbs:{i:["Describe","Outline"],ii:["Outline","Explain","Formulate"],iii:["Describe","Outline"],iv:["Design"]},
      C_verbs:{i:["Present","Organize"],ii:["Interpret","Describe"],iii:["Discuss","Outline"],iv:["Discuss","Outline"],v:["Describe","Outline"]},
      D_verbs:{i:["Describe","Outline"],ii:["Discuss","Analyse"],iii:["Apply"],iv:["Document"]},
      B_note:"Use 'hypothesis' — students should outline and explain using scientific reasoning",
      complexity:"Formal terminology, mix of familiar/unfamiliar contexts, two-step calculations, formula rearrangement, 3-5 sentence stimulus texts"
    },
    "5": {
      label:"Year 5 (Grade 9-10, ages 14-16)",
      A_verbs:{i:["Explain","Describe","Define"],ii:["Apply","Calculate","Determine","Solve","Show","Derive"],iii:["Analyse","Evaluate","Discuss","Compare","Justify"]},
      B_verbs:{i:["Explain","Describe"],ii:["Formulate","Explain","Predict","Justify"],iii:["Explain","Describe"],iv:["Design"]},
      C_verbs:{i:["Present","Construct","Plot","Organize"],ii:["Interpret","Explain"],iii:["Evaluate","Discuss"],iv:["Evaluate","Discuss"],v:["Explain","Describe","Suggest"]},
      D_verbs:{i:["Explain","Describe"],ii:["Discuss","Evaluate","Analyse"],iii:["Apply","Explain"],iv:["Document"]},
      B_note:"Students must formulate and explain hypotheses using correct scientific reasoning",
      complexity:"Sophisticated scientific language, unfamiliar real-world contexts, multi-step calculations, significant figures, unit conversions, 5-8 sentence stimulus texts with quantitative data"
    }
  }[yl];

  const criteriaStr = config.criterion || "A";
  const hasA = criteriaStr.includes('A') || criteriaStr.includes('Full Exam');
  const hasB = criteriaStr.includes('B') || criteriaStr.includes('B+C') || criteriaStr.includes('Full Exam');
  const hasC = criteriaStr.includes('C') || criteriaStr.includes('B+C') || criteriaStr.includes('Full Exam');
  const hasD = criteriaStr.includes('D') || criteriaStr.includes('Full Exam');
  let taskStructure = '';

  if (hasA) {
    taskStructure += `
TASK 1 — CRITERION A: KNOWING AND UNDERSTANDING (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
Structure: 2-3 real-world stimulus contexts, each with progressive sub-parts.
(a) 1mk strand i: "${ye.A_verbs.i[0]}" — recall a fact or definition.
(b) 1-2mk strand i: short answer recalling key concept.
(c) 2mk strand ii: "${ye.A_verbs.ii[0]}" — substitute into formula, show working, answer with unit.
(d) 2-3mk strand ii: multi-step calculation with formula rearrangement.
(e) 2-3mk strand iii: "${ye.A_verbs.iii[0]}" — analyse data or evaluate a claim with reasoning.

NOTE: Task 1 questions MAY also award marks against Criterion C when they involve interpreting data from a table or graph. If a sub-part asks students to read/interpret data, tag it as criterion "A" but note in markScheme that C marks may also be awarded.

MARK SCHEME FORMAT:
- "Award [N] mark(s) for..."
- "Seen or implied" (working doesn't need to be explicit if answer is correct)
- "Accept [alternative] / Do not accept [wrong answer]"
- "WTTE" (words to that effect — accept equivalent phrasing)
- "ECF" (error carried forward from previous part)
- "Answer must be to 3 significant figures with correct SI unit"
- For calculations: "Award 1 mark for correct substitution, 1 mark for correct answer with unit"`;
  }

  if (hasB) {
    taskStructure += `
TASK 2a — CRITERION B: INQUIRING AND DESIGNING (${config.criterion === 'Full Exam' ? '~25 marks' : '~14-16 marks'})
Context: Based on a SIMULATION. Describe a virtual lab setup that students interact with.
The stimulus MUST describe: what the simulation shows, what variables can be changed, what can be measured.

(a) 1mk: "${ye.B_verbs.i[0]} a research question" — must link IV and DV.
(b) 2-3mk: "${ye.B_verbs.ii[0]} a testable ${yl==='1'?'prediction':'hypothesis'}" — must explain WHY using physics.
(c) MAIN DESIGN (14-16mk): Holistic grid in meta.gradingGrid:
{"V":{"label":"Variables","levels":{"1":"IV or DV","2":"IV and DV","3":"IV,DV,CV","4":"IV,DV,CV justified"}},"H":{"label":"${yl==='1'?'Prediction':'Hypothesis'}","levels":{"1":"Links one var","2":"Links IV+DV","3":"IV+DV+explanation"}},"E":{"label":"Equipment","levels":{"1":"Measures IV or DV","2":"Measures IV and DV"}},"M":{"label":"Method","levels":{"1":"Attempt","2":"Links IV+DV","3":"Complete","4":"Complete+CV control"}},"D":{"label":"Data","levels":{"1":"IV values","2":"5 increments or 3 trials","3":"5+3","4":"5+3+average"}},"S":{"label":"Safety","levels":{"1":"Precaution+hazard"}}}

SIMULATION CONTEXT EXAMPLE:
"You have access to a simulation that models [phenomenon]. In the simulation, you can change [IV] using a slider/dropdown. The simulation measures [DV] and displays it on a [meter/graph/table]. Equipment available includes: [list from simulation]."

Do NOT split into multiple questions. ONE stimulus, ONE design task, ONE grid.`;
  }

  if (hasC) {
    taskStructure += `
TASK 2b — CRITERION C: PROCESSING AND EVALUATING (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
Context: Students have collected data FROM the simulation described in Task 2a.
Provide a complete DATA TABLE with 5-7 rows of realistic numerical data. Headers MUST include units (e.g. "Force / N").

(a) 1-2mk strand i: Read a value from the data or calculate a simple value.
(b) 2-3mk strand ii: Calculate using a formula (show substitution + answer + unit + 3 s.f.).
(c) 4mk strand i: "Use the graph plotter to plot [DV] against [IV]. Draw a line of best fit."
(d) 2-3mk strand ii: "${ye.C_verbs.ii[0]} the trend shown by the graph. Describe the relationship between [IV] and [DV]."
(e) 3mk strand iii: "${ye.C_verbs.iii[0]} whether the data supports the ${yl==='1'?'prediction':'hypothesis'} from Task 2. Use specific data values."
(f) 2mk strand iv: "Identify ONE source of error in this investigation. Explain how it would affect the results."
(g) 2-3mk strand v: "${ye.C_verbs.v[0]} ONE improvement to increase the reliability or accuracy of this investigation."

GRAPH PLOTTER: When asking students to plot, use type "Graph Plot" with data.graphAxes and data.dataPoints. The graph plotter tool allows students to plot points and draw lines of best fit on-screen.`;
  }

  if (hasD) {
    taskStructure += `
TASK 3 — CRITERION D: REFLECTING ON THE IMPACTS OF SCIENCE (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
D-Factor: ${config.dFactor || 'Environmental, Economic'}

The stimulus MUST be a detailed real-world scenario (6-10 sentences) about a specific technology, application, or issue related to "${config.topic}". Include:
- Specific names (people, companies, organizations, locations)
- Specific data (statistics, costs, dates, measurements)
- Both positive and negative aspects hinted at in the stimulus

Generate Criterion D questions using the EXACT question types specified in the QUESTION MIX section below.

QUESTION ADAPTATION FOR CRITERION D:
- MCQ / True False: Test factual understanding of the real-world context (strand D-i)
- Match the Following: Match technologies to their implications (strand D-i/ii)
- Drag and Drop: Classify items as benefits/limitations (strand D-i/ii)
- Long Answer: Discuss implications, evaluate impact, write concluding appraisal (strand D-ii/iii)
- Fill Text: "One environmental benefit of solar panels is _______" (strand D-i)
- Table: Compare benefits vs limitations across different factors (strand D-ii)

For the HIGHEST-MARK Long Answer question (if included), use a holistic marking grid in meta.gradingGrid:
${JSON.stringify({
  "theme1": {"label": "[Based on D-factor, e.g. Environmental implications]", "levels": {"1": "A statement", "2": "A statement with support OR two statements", "3": "Two statements with support for one", "4": "Two statements with support for both"}},
  "theme2": {"label": "[Second theme from D-factor]", "levels": {"1": "A positive or negative implication", "2": "A positive AND negative", "3": "Positive and negative with support for one", "4": "Positive and negative with support for both"}},
  "conclusion": {"label": "Concluding appraisal", "levels": {"1": "A concluding opinion", "2": "A concluding appraisal with justification"}}
}, null, 2)}

EXTENDED RESPONSE REQUIREMENTS:
- Students must discuss BOTH benefits AND limitations
- Students must reference specific data from the stimulus
- Concluding appraisal must be a justified personal opinion
- Mark scheme uses holistic grid, NOT analytical marking`;
  }

  var critOnlyInstruction = 'CRITICAL: This generation is for Criterion ' + crit + ' ONLY. Every question MUST be Criterion ' + crit + '. Do NOT generate questions for any other criterion.\n\n';

  if (crit === 'A') {
    critOnlyInstruction += 'STRAND DISTRIBUTION for Criterion A:\n'
      + '- 40% of marks on strand i (recall): Use command terms State, Define, Outline, Describe\n'
      + '- 35% of marks on strand ii (application): Use command terms Apply, Calculate, Determine, Solve\n'
      + '- 25% of marks on strand iii (analysis): Use command terms Analyse, Evaluate, Discuss, Compare, Justify\n'
      + 'Mix strands WITHIN each section. Do NOT put all strand i questions together.\n'
      + 'NOTE: Criterion A questions may ALSO test data interpretation (Criterion C skills). If a question involves reading a table/graph, note this in the markScheme.\n\n';
  } else if (crit === 'B') {
    critOnlyInstruction += 'Criterion B is ONE extended design question based on a SIMULATION.\n'
      + 'The stimulus MUST describe a virtual lab/simulation that students can interact with.\n'
      + 'Include: what the simulation models, what variables can be changed, what is measured.\n'
      + 'Generate ONE stimulus + ONE design task. The holistic grid has rows: V (variables 1-4), H (hypothesis 1-3), E (equipment 1-2), M (method 1-4), D (data 1-4), S (safety 1).\n'
      + 'Do NOT split into multiple small questions. ONE question, ONE grid.\n\n';
  } else if (crit === 'C') {
    critOnlyInstruction += 'STRAND DISTRIBUTION for Criterion C:\n'
      + '- Strand i: Present/organize data (tables, graphs) — use the graph plotter and table tools\n'
      + '- Strand ii: Interpret data (trends, patterns, calculations)\n'
      + '- Strand iii: Evaluate (does data support hypothesis?)\n'
      + '- Strand iv: Evaluate (sources of error and their effects)\n'
      + '- Strand v: Suggest improvements to the investigation\n'
      + 'Provide a DATA TABLE with 5-7 rows of realistic numerical values. Headers must include units.\n'
      + 'Data must be internally consistent with physics formulas.\n'
      + 'Graph questions should use the "Graph Plot" question type.\n\n';
  } else if (crit === 'D') {
    critOnlyInstruction += 'STRAND DISTRIBUTION for Criterion D:\n'
      + '- Strand i: Explain the science/application (describe how physics is used)\n'
      + '- Strand ii: Discuss implications (advantages AND disadvantages, positive AND negative)\n'
      + '- Strand iii: Apply scientific knowledge to real-world context\n'
      + '- Strand iv: Document sources (only if extended response)\n'
      + 'The main question MUST be an EXTENDED RESPONSE with a holistic marking grid.\n'
      + 'Grid rows: theme1 (e.g. environmental), theme2 (e.g. ethical/economic), concluding appraisal.\n'
      + 'Do NOT generate MCQs as the primary Criterion D question. Use extended writing.\n'
      + 'The stimulus MUST be a real-world scenario (6-10 sentences) about a specific technology or application.\n\n'
      + 'CRITICAL FOR CRITERION D:\n'
      + '- The extended response question MUST include meta.gradingGrid with the holistic grid\n'
      + '- Do NOT use a flat markScheme for extended D questions — use the grid\n'
      + '- Short context questions (Part 1) can use flat markSchemes\n'
      + '- Theme labels must match the D-factor selected by the teacher\n\n';
  }

  return critOnlyInstruction + `You are an expert IB MYP Physics teacher creating an eAssessment-style question set. Your questions must be INDISTINGUISHABLE from real IB MYP Sciences eAssessment papers (M23-M25).

${IB_TASK_BLUEPRINT}

${IB_OFFICIAL_FORMULA_SHEET}

${IB_ASSESSMENT_CONVENTIONS}

${IB_EXAM_TOOLS}

═══ ASSESSMENT CONFIGURATION ═══
Grade: ${config.grade} | ${ye.label} | Chapter: ${config.chapter} | Topic: ${config.topic}
Criterion: ${config.criterion} (${critFullNames[crit] || 'Combined'})
Global Context: ${config.globalContext || 'Scientific and Technical Innovation'} | Difficulty: ${config.difficulty || 'Mixed'}
Total Marks: ${config.totalMarks}
${config.dFactor && hasD ? 'D-Factor: '+config.dFactor : ''}
${config.context ? 'TEACHER CONTEXT:\n'+config.context : ''}
${config.mediaUrls&&config.mediaUrls.length>0 ? 'MEDIA: '+config.mediaUrls.join(', ') : ''}

═══ YEAR ${yl} EXPECTATIONS ═══
${ye.complexity}
${ye.B_note}
A verbs: i:${ye.A_verbs.i.join('/')}, ii:${ye.A_verbs.ii.join('/')}, iii:${ye.A_verbs.iii.join('/')}
B verbs: i:${ye.B_verbs.i.join('/')}, ii:${ye.B_verbs.ii.join('/')}, iii:${ye.B_verbs.iii.join('/')}, iv:${ye.B_verbs.iv.join('/')}
C verbs: i:${ye.C_verbs.i.join('/')}, ii:${ye.C_verbs.ii.join('/')}, iii:${ye.C_verbs.iii.join('/')}, iv:${ye.C_verbs.iv.join('/')}, v:${ye.C_verbs.v.join('/')}
D verbs: i:${ye.D_verbs.i.join('/')}, ii:${ye.D_verbs.ii.join('/')}, iii:${ye.D_verbs.iii.join('/')}, iv:${ye.D_verbs.iv.join('/')}

COMMAND TERMS: State(1 mark, MCQ/Fill), Define(1 mark, MCQ/Fill), Describe(2-3 marks, Long Answer), Explain(2-4 marks, Long Answer), Calculate(2-3 marks, Long Answer), Apply(2-3 marks, Long Answer), Analyse(3-4 marks, Long Answer), Evaluate(3-4 marks, Long Answer), Discuss(3-4 marks, Long Answer), Justify(3-4 marks, Long Answer)
${diagramInstr}
${dataTableInstr}

${taskStructure}

═══ QUESTION MIX — MANDATORY (follow EXACTLY, do NOT change types or counts) ═══
The teacher has explicitly selected these question types, counts, and marks. You MUST generate EXACTLY these types and quantities. Do NOT substitute, skip, or replace any type with another.

${config.questions.map(function(q) {
  if (q.marksList && q.marksList.length > 0) {
    return q.marksList.map(function(m) {
      return '- 1× ' + q.type + ' (' + m + ' marks)';
    }).join('\n');
  }
  return '- ' + q.count + '× ' + q.type + ' (' + q.marks + ' marks each)';
}).join('\n')}

QUESTION TYPE DATA FORMATS — follow these for each type:
- MCQ: ui.mcqOptions (4 strings), data.correct (index 0-3), data.explanation
- True / False: ui.tfAnswer ("True" or "False"), data.explanation
- Long Answer: data.question (text), data.explanation (model answer), meta.markScheme
- Fill Text: data.question (with _______ blank), data.labels (correct answer), data.correct (answer)
- Match the Following: data.question, ui.matchPairs (array of {a:"left item", b:"right item"}, minimum 4 pairs). Marks = number of pairs.
- Table: data.question, data.tableHeaders (array with units), data.tableRows (int), data.tableCols (int), data.tablePrefill (2D array, use "" for blanks students fill)
- Drawing: data.question, data.drawingInstructions (what to draw). NO image URLs.
- Drag and Drop: data.question, data.dragItems (array of strings to drag), data.dropZones (array of {label:"zone name", accepts:["item1","item2"]}). 1 mark per correct placement.
- Graph Plot: data.question, data.graphAxes ({x:"label / unit",y:"label / unit",xRange:[min,max],yRange:[min,max]}), data.dataPoints ([[x,y],...])
- Multi-Dropdown: data.question (with [DROPDOWN] placeholders), data.dropdownOptions (array of arrays), data.correct (array of correct indices)

═══ OUTPUT: VALID JSON ONLY ═══
{
  "heading":"string","sections":[{"id":1,"name":"Section 1"},{"id":2,"name":"Section 2"},{"id":3,"name":"Section 3"}],
  "blocks":[
    {"mode":"content","type":"Text","sectionId":1,"data":{"text":"HTML stimulus"}},
    {"mode":"question","type":"MCQ|Long Answer|True / False|Fill Text|Match the Following|Table|Multi-Dropdown|Drawing|Graph Plot|Drag and Drop","sectionId":1,
      "data":{"question":"Command term + question","correct":0,"explanation":"model answer",
        "tableHeaders": ["Column 1 / unit", "Column 2 / unit", "Column 3 / unit"],
        "tableRows": 5, "tableCols": 3,
        "tablePrefill": [["value","value",""], ["value","","value"]]},
      "ui":{"mcqOptions":["A","B","C","D"],"tfAnswer":"True","matchPairs":[{"a":"","b":""}]},
      "meta":{"marks":1,"criterion":"${criteriaStr.charAt(0)}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"Award 1 mark for...","gradingGrid":null}}
  ]
}

═══ RULES (MUST FOLLOW ALL) ═══
0) HIGHEST PRIORITY: Generate EXACTLY the question types and counts listed in the QUESTION MIX.
1) ONLY valid JSON — no markdown, no code fences, no commentary.
2) Every question meta: marks, criterion, strand, commandTerm, difficulty, markScheme.
3) Questions start with the command term (bold/underlined in the student view).
4) Stimulus (Text content block) before questions in each section.
5) Strands progress i → ii → iii within each section.
6) Total marks MUST equal EXACTLY ${config.totalMarks}.
7) Realistic physics values with correct units and 3 significant figures.
8) Mark schemes use IB conventions: "Award X marks", "Accept", "Do not accept", "WTTE", "ECF", "Seen or implied", "3 s.f. with correct unit".
9) Holistic grids in meta.gradingGrid for Criteria B and D extended responses.
10) Specific stimuli with real names, places, numbers — never generic.
11) At LEAST ${Math.max(5, Math.ceil(config.totalMarks / 3))} questions.
12) Table questions MUST have tableHeaders (with units), tableRows, tableCols, tablePrefill.
13) Count marks as you generate — must reach exactly ${config.totalMarks}.
14) Verify total before outputting.
15) Generate at LEAST 2 different stimulus blocks using different real-world scenarios. Assign questions to different sectionIds (1, 2, or 3).
16) FORMULAS: Only use formulas from the official formula sheet. If a question needs a formula NOT on the sheet, provide it in the question text.
17) VARIETY: Each section MUST have at least 2 different question types. Never a section of all MCQs or all True/False.
18) STRAND MIX: Within each section, progress through strands. Start with strand i, then ii, then iii. Each section should cover at least 2 strands.
19) QUESTION INDEPENDENCE: Each question must be standalone. Do not make one question's answer depend on another.
20) COMMAND TERM TO QUESTION TYPE MATCHING — follow strictly:
- "State" or "Define" → MCQ or Fill Text (1 mark, strand i)
- "Describe" or "Outline" → Long Answer (2-3 marks, strand i-ii)
- "Calculate" or "Determine" or "Solve" → Long Answer with working shown (2-3 marks, strand ii)
- "Apply" → Long Answer or Table (2-3 marks, strand ii)
- "Explain" → Long Answer (2-4 marks, strand ii-iii)
- "Analyse" or "Evaluate" or "Discuss" or "Compare" or "Justify" → Long Answer ONLY (3-4 marks, strand iii)
NEVER use "Evaluate", "Analyse", "Discuss", "Compare", or "Justify" for MCQ or Fill Text.
NEVER use "State" or "Define" for Long Answer questions worth more than 2 marks.
21) MCQ QUALITY RULES:
- Every MCQ: ONE clearly correct answer + THREE plausible distractors
- Distractors = common misconceptions, not obviously silly answers
- BAD: "Newton's laws are not important" — GOOD: "heavier objects fall faster"
- All four options similar in length and structure
- No "All of the above" or "None of the above"
22) FILL TEXT RULES:
- Fill Text is for single-word or short-phrase answers ONLY
- CORRECT: "The unit of force is _______" (answer: newton)
- WRONG for Fill Text: "Justify why an object remains at rest..." → use Long Answer
23) STRAND TO COMMAND TERM MATCHING:
- Strand i: State, Define, Outline, List, Identify, Name, Label
- Strand ii: Describe, Apply, Calculate, Determine, Solve, Show, Construct, Plot
- Strand iii: Explain, Analyse, Evaluate, Discuss, Compare, Justify, Suggest, Predict
24) SIGNIFICANT FIGURES: All numerical answers must be given to 3 s.f. Mark schemes must state "Accept answer to 3 s.f."
25) SI UNITS: All answers must include correct SI units. Mark schemes: "Award mark for correct unit."
26) CALCULATOR AWARENESS: For calculation questions, assume students have an on-screen scientific calculator. Design multi-step problems that require it.
27) SIMULATION CONTEXT (Criterion B/C): When generating Task 2 questions, describe a virtual simulation students interact with. Specify what can be changed and what is measured.

DRAWING QUESTIONS: Use type "Drawing" when students need to draw (free body diagram, circuit, ray diagram). Include: data.question (instruction), data.drawingInstructions (what to draw). Do NOT include data.drawingImage.

DRAG AND DROP QUESTIONS: Use type "Drag and Drop" for classify/sort tasks. Include: data.question, data.dragItems (array), data.dropZones (array of {label, accepts:[items]}).

GRAPH PLOT QUESTIONS: Use type "Graph Plot" when students plot data. Include: data.question, data.graphAxes ({x:"label / unit",y:"label / unit",xRange,yRange}), data.dataPoints ([[x,y],...]).
Graph axes MUST include units (e.g. "Time / s", "Force / N").

Use HTML tables for data, <sub>/<sup> for equations.`;
}

/* ── AI API Call (Groq primary, Gemini fallback) ── */
async function callAI(prompt) {
  const groqKey = localStorage.getItem('groq_api_key');
  const geminiKey = localStorage.getItem('gemini_api_key');
  const statusEl = document.getElementById('gen-status');
  
  if (!groqKey && !geminiKey) { alert('No API key found. Please enter one.'); return null; }

  // Use Groq if available
  if (groqKey) {
    return await callGroq(prompt, groqKey, statusEl);
  } else {
    return await callGeminiAPI(prompt, geminiKey, statusEl);
  }
}

async function callGroq(prompt, key, statusEl) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const model = attempt === 0 ? 'llama-3.3-70b-versatile' : 'llama-3.1-8b-instant';
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: GROQ_SYSTEM_PROMPT },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 8000,
        response_format: { type: 'json_object' }
      })
    });

    if (response.status === 429 && attempt === 0) {
      if (statusEl) statusEl.textContent = '⏳ Rate limited — retrying with faster model...';
      await new Promise(r => setTimeout(r, 2000));
      continue;
    }

    if (!response.ok) {
      const err = await response.text();
      throw new Error('Groq API error: ' + response.status + ' — ' + err.substring(0, 100));
    }

    const data = await response.json();
    let text = data.choices?.[0]?.message?.content;
    if (!text) throw new Error('Empty response from Groq');

    text = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
    return JSON.parse(text);
  }
}

async function callGeminiAPI(prompt, key, statusEl) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + key,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: {
            parts: [{ text: GROQ_SYSTEM_PROMPT }]
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
            responseMimeType: "application/json"
          }
        })
      }
    );

    if (response.status === 429 && attempt === 0) {
      if (statusEl) statusEl.textContent = '⏳ Rate limited — retrying in 10 seconds...';
      await new Promise(r => setTimeout(r, 10000));
      continue;
    }

    if (!response.ok) throw new Error('Gemini API error: ' + response.status);

    const data = await response.json();
    let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Empty response from Gemini');

    text = text.replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
    return JSON.parse(text);
  }
}

/* ── Collect Config from Form ── */
function gradeToYearLevel(grade) {
  grade = parseInt(grade);
  if (grade <= 7) return "1";
  if (grade <= 9) return "3";
  return "5";
}

function validateGeneratedSet(result, config) {
  const issues = [];
  
  // Check total marks
  const totalMarks = result.blocks
    .filter(b => b.mode === 'question')
    .reduce((sum, b) => sum + Number(b.meta?.marks || 0), 0);
  if (totalMarks !== config.totalMarks) {
    issues.push('Total marks: ' + totalMarks + ' (expected ' + config.totalMarks + ')');
  }
  
  // Check every question has required meta fields
  result.blocks.filter(b => b.mode === 'question').forEach((b, i) => {
    if (!b.meta?.criterion) issues.push('Q' + (i+1) + ': missing criterion');
    if (!b.meta?.strand) issues.push('Q' + (i+1) + ': missing strand');
    if (!b.meta?.commandTerm) issues.push('Q' + (i+1) + ': missing command term');
    if (!b.meta?.markScheme) issues.push('Q' + (i+1) + ': missing mark scheme');
    if (!b.meta?.marks) issues.push('Q' + (i+1) + ': missing marks');
  });
  
  // Check stimulus exists before questions
  let hasContentBeforeFirstQ = false;
  for (const b of result.blocks) {
    if (b.mode === 'content') { hasContentBeforeFirstQ = true; break; }
    if (b.mode === 'question') break;
  }
  if (!hasContentBeforeFirstQ) issues.push('No stimulus/content block before first question');
  
  // Check MCQ options
  result.blocks.filter(b => b.type === 'MCQ').forEach((b, i) => {
    const opts = (b.ui?.mcqOptions || []).filter(o => o.trim());
    if (opts.length < 4) issues.push('MCQ ' + (i+1) + ': needs exactly 4 options, has ' + opts.length);
    if (b.data?.correct === null || b.data?.correct === undefined) issues.push('MCQ ' + (i+1) + ': no correct answer set');
  });
  
  if (issues.length > 0) {
    console.warn('Generated set validation issues:', issues);
    const status = document.getElementById('gen-status');
    if(status) {
        status.textContent = '⚠️ Generated with ' + issues.length + ' minor issue(s) — review in builder. ' + issues[0];
        status.style.color = 'var(--yellow)';
    }
  }
  
  return result;
}

function collectGenConfig() {
  const chapter = document.getElementById('shared-assessment-type')?.value || '';
  const topic = document.getElementById('shared-topics')?.value.trim() || '';
  const grade = document.getElementById('shared-grade')?.value || '9';
  const criterion = getMultiSelectValues('shared-criteria').join(', ') || 'A';
  const dFactor = getMultiSelectValues('shared-dfactor').join(', ') || 'Environmental';
  const gc = document.getElementById('shared-gc')?.value || '';
  const difficulty = 'Mixed';
  const includeDiagrams = true;
  const includeDataTables = true;
  const atl = '';
  const yearLevel = gradeToYearLevel(grade);
  const heading = document.getElementById('shared-heading')?.value.trim() || (topic + ' — Criterion ' + criterion);

  if (!chapter) { alert('Please select an Assessment Type.'); return null; }
  if (!topic) { alert('Please enter a Topic.'); return null; }

  // Context & media
  const context = (document.getElementById('gen-context')?.value || '').trim();
  const mediaUrls = (document.getElementById('gen-media-urls')?.value || '').trim().split('\n').filter(u => u.trim());

  const questions = [];
  document.querySelectorAll('.gen-type-row').forEach(row => {
    const cb = row.querySelector('.gen-type-cb');
    const type = row.dataset.type;
    const marksInput = row.querySelector('.gen-type-marks').value || '1';

    if (cb && cb.checked) {
      if (marksInput.indexOf(',') !== -1) {
        var marksList = marksInput.split(',').map(function(m) { return Number(m.trim()) || 1; });
        questions.push({ type: type, count: marksList.length, marks: marksList[0], marksList: marksList });
      } else {
        const count = Number(row.querySelector('.gen-type-count').value || 0);
        const marks = Number(marksInput) || 1;
        if (count > 0) {
          questions.push({ type, count, marks });
        }
      }
    }
  });

  if (questions.length === 0) { alert('Please select at least one question type.'); return null; }

  const totalMarks = Number(document.getElementById('shared-total-marks').value || 0);

  return {
    chapter, topic, criterion, globalContext: gc, atl, difficulty, grade, yearLevel, dFactor, includeDiagrams, includeDataTables, heading, questions, totalMarks,
    context, mediaUrls,
    includeContent: document.getElementById('gen-opt-content').checked,
    includeMarkSchemes: document.getElementById('gen-opt-markscheme').checked,
    includeExplanations: document.getElementById('gen-opt-explanations').checked,
    includeHints: document.getElementById('gen-opt-hints').checked
  };
}

/* ── Blueprint-Aware Mark Distribution ── */
function calculateBlueprintMarks(criteria, totalMarks) {
  var marksPerCrit = {};

  // If generating a full 100-mark exam, use official blueprint
  if (criteria.length === 4 && totalMarks === 100) {
    marksPerCrit = { A: 25, B: 25, C: 25, D: 25 };
  } else if (criteria.length === 2 && criteria.includes('B') && criteria.includes('C') && totalMarks === 50) {
    // Task 2: B+C split
    marksPerCrit = { B: 25, C: 25 };
  } else {
    // Custom split — divide evenly
    var baseMarks = Math.floor(totalMarks / criteria.length);
    var remainder = totalMarks % criteria.length;
    criteria.forEach(function(c, i) {
      marksPerCrit[c] = baseMarks + (i < remainder ? 1 : 0);
    });
  }

  return marksPerCrit;
}

/* ── Generate & Save ── */
function getAutoQuestionMix(criterion, totalMarks) {
  var mix = [];
  
  if (criterion === 'A') {
    var s1marks = Math.round(totalMarks * 0.4);
    var s2marks = Math.round(totalMarks * 0.35);
    var s3marks = totalMarks - s1marks - s2marks;
    
    mix = [
      {type: 'MCQ', count: Math.max(2, Math.floor(s1marks / 1)), marks: 1},
      {type: 'Fill in the Blank', count: Math.max(1, Math.floor(s1marks * 0.3)), marks: 1},
      {type: 'Long Answer', count: Math.max(1, Math.ceil(s2marks / 3)), marks: 3},
      {type: 'Table', count: 1, marks: Math.min(4, s2marks)},
      {type: 'Long Answer', count: Math.max(1, Math.ceil(s3marks / 4)), marks: 4}
    ];
  } else if (criterion === 'B') {
    mix = [{type: 'Long Answer', count: 1, marks: totalMarks}];
  } else if (criterion === 'C') {
    mix = [
      {type: 'Fill in the Blank', count: 2, marks: 1},
      {type: 'Table', count: 1, marks: Math.min(4, Math.floor(totalMarks * 0.2))},
      {type: 'Long Answer', count: 2, marks: Math.floor(totalMarks * 0.2)},
      {type: 'Graph Plot', count: 1, marks: Math.min(4, Math.floor(totalMarks * 0.2))}
    ];
  } else if (criterion === 'D') {
    if (totalMarks >= 15) {
      var extendedMarks = Math.max(10, Math.floor(totalMarks * 0.6));
      var shortMarks = totalMarks - extendedMarks;
      mix = [
        {type: 'Long Answer', count: 1, marks: extendedMarks},
        {type: 'MCQ', count: Math.min(2, shortMarks), marks: 1},
        {type: 'Fill in the Blank', count: Math.max(1, shortMarks - 2), marks: 1}
      ];
    } else {
      mix = [
        {type: 'Long Answer', count: 1, marks: Math.max(6, totalMarks - 4)},
        {type: 'MCQ', count: 2, marks: 1},
        {type: 'Fill in the Blank', count: 2, marks: 1}
      ];
    }
  }
  
  return mix;
}

async function runGeneration() {
  if (_genCooldown) { alert('Please wait before generating again.'); return; }

  var config = collectGenConfig();
  if (!config) return;

  var btn = document.getElementById('gen-run-btn');
  var status = document.getElementById('gen-status');

  btn.disabled = true;
  btn.textContent = '⏳ Generating...';
  status.textContent = 'Preparing...';
  status.style.color = 'var(--text2)';

  _genCooldown = true;
  setTimeout(function() { _genCooldown = false; }, 3000);

  try {
    // Parse criteria
    var criteriaRaw = config.criterion || 'A';
    var criteria = criteriaRaw.split(/[,+]/).map(function(c) { return c.trim().charAt(0); }).filter(function(c) { return 'ABCD'.indexOf(c) !== -1; });
    
    // Remove duplicates
    criteria = criteria.filter(function(c, i) { return criteria.indexOf(c) === i; });
    
    if (criteria.length === 0) criteria = ['A'];
    
    // Use blueprint-aware mark distribution
    var marksPerCrit = calculateBlueprintMarks(criteria, config.totalMarks);
    
    var allBlocks = [];
    var allSections = [];
    var sectionOffset = 0;
    
    // Generate each criterion separately
    for (var ci = 0; ci < criteria.length; ci++) {
      var crit = criteria[ci];
      var critMarks = marksPerCrit[crit];
      
      status.textContent = '⏳ Generating Criterion ' + crit + ' (' + (ci + 1) + '/' + criteria.length + ')... ' + critMarks + ' marks';
      
      var singleConfig = JSON.parse(JSON.stringify(config));
      singleConfig.criterion = crit;
      singleConfig.totalMarks = critMarks;
      
      if (criteria.length > 1) {
        singleConfig.questions = getAutoQuestionMix(crit, critMarks);
      }
      
      var prompt = buildGeneratorPrompt(singleConfig);
      var result = await callAI(prompt);
      
      if (result && result.blocks && Array.isArray(result.blocks)) {
        var critSections = result.sections || [{id: 1, name: 'Section 1'}];
        critSections.forEach(function(sec) {
          sec.id = sec.id + sectionOffset;
          sec.name = 'Criterion ' + crit + ' — ' + sec.name;
        });
        
        result.blocks.forEach(function(block) {
          block.sectionId = (block.sectionId || 1) + sectionOffset;
          if (block.meta) block.meta.criterion = crit;
        });
        
        sectionOffset += critSections.length;
        allSections = allSections.concat(critSections);
        allBlocks = allBlocks.concat(result.blocks);
      }
      
      if (ci < criteria.length - 1) {
        status.textContent = '⏳ Waiting for rate limit... next: Criterion ' + criteria[ci + 1];
        await new Promise(function(r) { setTimeout(r, 3000); });
      }
    }
    
    var combinedResult = {
      heading: config.heading || config.topic,
      sections: allSections.length > 0 ? allSections : [{id: 1, name: 'Section 1'}],
      blocks: allBlocks
    };
    
    if (!combinedResult.blocks || combinedResult.blocks.length === 0) {
      throw new Error('No questions generated. Try again.');
    }
    
    var validatedResult = validateGeneratedSet(combinedResult, config);

    // ═══ SMART MARK PADDING — topic-aware ═══
    var currentTotal = validatedResult.blocks
      .filter(function(b) { return b.mode === 'question'; })
      .reduce(function(sum, b) { return sum + Number(b.meta?.marks || 0); }, 0);

    var deficit = config.totalMarks - currentTotal;

    if (deficit > 0 && deficit <= 15) {
      var padPrompt = 'Generate exactly ' + deficit + ' simple fill-in-the-blank physics questions about "' + config.topic + '". Each question is 1 mark, strand i (recall). Return ONLY a JSON array of objects with "q" (question with one blank shown as _______) and "a" (correct answer). No other text. Example: [{"q":"The SI unit of energy is _______.","a":"joule (J)"}]';
      
      try {
        await new Promise(function(r) { setTimeout(r, 2000); });
        var padResult = await callAI(padPrompt);
        
        var padArray = Array.isArray(padResult) ? padResult : (padResult && Array.isArray(padResult.questions) ? padResult.questions : null);
        
        if (padArray && padArray.length > 0) {
          padArray.forEach(function(pq) {
            if (pq.q && pq.a) {
              validatedResult.blocks.push({
                mode: 'question', type: 'Fill Text', sectionId: 1,
                data: { question: pq.q, labels: pq.a, correct: pq.a, explanation: 'The correct answer is: ' + pq.a },
                ui: {},
                meta: { marks: 1, criterion: config.criterion?.charAt(0) || 'A', strand: 'i', commandTerm: 'State', difficulty: 'easy', markScheme: 'Award 1 mark for: ' + pq.a + '. Accept equivalent answers.', gradingGrid: null }
              });
            }
          });
        } else {
          throw new Error('AI returned no usable padding questions');
        }
      } catch(padErr) {
        console.warn('AI padding failed, using generic questions:', padErr);
        var genericPad = [
          {q: 'The SI unit of energy is _______.', a: 'joule (J)'},
          {q: 'Energy cannot be created or _______.', a: 'destroyed'},
          {q: 'The formula for kinetic energy is KE = _______.', a: '½mv²'},
          {q: 'Potential energy depends on height, mass, and _______.', a: 'gravity (g)'},
          {q: 'Power is the rate of doing _______.', a: 'work'},
          {q: 'Work done is calculated as force multiplied by _______.', a: 'distance'},
          {q: 'Efficiency is always less than or equal to _______ percent.', a: '100'},
          {q: 'The unit of power is the _______.', a: 'watt (W)'}
        ];
        for (var gp = 0; gp < deficit && gp < genericPad.length; gp++) {
          validatedResult.blocks.push({
            mode: 'question', type: 'Fill Text', sectionId: 1,
            data: { question: genericPad[gp].q, labels: genericPad[gp].a, correct: genericPad[gp].a, explanation: 'The correct answer is: ' + genericPad[gp].a },
            ui: {},
            meta: { marks: 1, criterion: config.criterion?.charAt(0) || 'A', strand: 'i', commandTerm: 'State', difficulty: 'easy', markScheme: 'Award 1 mark for: ' + genericPad[gp].a, gradingGrid: null }
          });
        }
      }
      
      status.textContent = '⚠️ AI generated ' + currentTotal + '/' + config.totalMarks + ' marks. Added ' + deficit + ' supplementary questions.';
      status.style.color = 'var(--yellow)';
    }

    status.textContent = status.textContent.startsWith('⚠️') ? status.textContent : '✅ Generated! Saving to library...';
    status.style.color = status.style.color === 'var(--yellow)' ? 'var(--yellow)' : 'var(--green)';

    const setId = 'set_' + Date.now();
    const now = Date.now();
    const validBlocks = window.normalizeGeneratedBlocks(validatedResult.blocks, config);

    const totalMarks = validBlocks
      .filter(b => b.mode === 'question')
      .reduce((sum, b) => sum + Number(b.meta?.marks || 0), 0);

    const newSet = {
      id: setId,
      heading: config.heading || combinedResult.heading || config.topic,
      chapter: config.chapter,
      topic: config.topic,
      gc: config.globalContext || '',
      atl: config.atl || '',
      status: 'Draft',
      version: 1,
      createdAt: now,
      updatedAt: now,
      totalMarks: totalMarks,
      blocks: validBlocks,
      sections: validatedResult.sections || [{ id: 1, name: 'Section 1' }],
      grade: config.grade,
      yearLevel: config.yearLevel,
      generatedBy: 'gemini-ai',
      generatedAt: now
    };

    const lib = getLibrary();
    lib.push(newSet);
    saveLibrary(lib);

    if (typeof saveQuestionSetToFirestore === 'function') {
      saveQuestionSetToFirestore(newSet).catch(err =>
        console.error('Firestore sync error:', err)
      );
    }

    status.textContent = '✅ Done! Opening in builder for review...';

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = '⚡ Generate Question Set';
      status.textContent = '';
      openSetInBuilder(setId);
    }, 800);

  } catch (err) {
    console.error('Generation error:', err);
    status.textContent = '❌ ' + err.message;
    status.style.color = 'var(--accent)';
    btn.disabled = false;
    btn.textContent = '⚡ Generate Question Set';
  }
}

window.normalizeGeneratedBlocks = function(blocksArray, config) {
  let blockId = 0;
  var critStr = config.criterion || (config.criteria && config.criteria[0]) || 'A';
  var critChar = critStr.charAt(0);
  var diffStr = config.difficulty || 'Medium';

  const processedBlocks = blocksArray.map(block => {
    let type = block.type;
    if (type === 'Multiple Choice' || type === 'Multiple Choice Question') type = 'MCQ';
    if (type === 'Short Answer' || type === 'Fill in the Blank' || type === 'Fill in the blanks' || type === 'Fill-in-the-blank' || type === 'Fill in the Blank') type = 'Fill Text';
    if (type === 'Dropdown' || type === 'Select') type = 'Fill Drop Down';
    if (type === 'Multiple Select') type = 'Multiple Select MCQ';
    if (type === 'Matching' || type === 'Match' || type === 'Match The Following') type = 'Match the Following';
    if (type === 'DnD' || type === 'Drag-and-Drop' || type === 'DragAndDrop' || type === 'Drag & Drop') type = 'Drag and Drop';
    if (type === 'Graph' || type === 'GraphPlot' || type === 'Graph plot') type = 'Graph Plot';
    if (type === 'Draw' || type === 'Diagram') type = 'Drawing';
    if (type === 'TrueFalse' || type === 'True/False' || type === 'True or False') type = 'True / False';

    return {
      ...block,
      id: blockId++,
      type: type,
      saved: true,
      sectionId: block.sectionId || 1,
      media: block.media || [],
      data: block.data || {},
      meta: {
        marks: block.meta?.marks || block.marks || 1,
        criterion: block.meta?.criterion || block.criterion || critChar,
        markScheme: block.meta?.markScheme || block.markScheme || '',
        hint: block.meta?.hint || block.hint || '',
        difficulty: block.meta?.difficulty || block.difficulty || diffStr,
        commandTerm: block.meta?.commandTerm || block.commandTerm || 'Explain',
        gradingGrid: block.meta?.gradingGrid || null,
        ...(block.meta || {})
      },
      ui: block.ui || {}
    };
  });

  // Fix empty Multi-Dropdown questions
  processedBlocks.forEach(block => {
    if (block.type === 'Multi-Dropdown' && block.mode === 'question') {
      if (!block.data.mdRows || !block.data.mdRows.length) {
        block.data.mdRows = [{label: 'Item 1', correct: ''}, {label: 'Item 2', correct: ''}];
      }
      if (!block.data.mdOptions || !block.data.mdOptions.trim()) {
        block.data.mdOptions = 'Option A, Option B, Option C';
      }
      block.data.mdRows = block.data.mdRows.map(row => ({
        label: row.label || row.a || row.item || 'Unnamed',
        correct: row.correct || row.answer || ''
      }));
    }
  });

  // Fix Match the Following
  processedBlocks.forEach(block => {
    if (block.type === 'Match the Following' && block.mode === 'question') {
      if (!block.ui) block.ui = {};
      if (!block.ui.matchPairs || !block.ui.matchPairs.length) {
        if (block.data.pairs && block.data.pairs.length) {
          block.ui.matchPairs = block.data.pairs.map(p => ({a: p.left || p.a || '', b: p.right || p.b || ''}));
        } else if (block.data.matchPairs && block.data.matchPairs.length) {
          block.ui.matchPairs = block.data.matchPairs;
        } else {
          block.ui.matchPairs = [{a: 'Item A', b: 'Match A'}, {a: 'Item B', b: 'Match B'}];
        }
      }
    }
  });

  // Fix MCQ options location
  processedBlocks.forEach(block => {
    if ((block.type === 'MCQ' || block.type === 'Multiple Select MCQ') && block.mode === 'question') {
      if (!block.ui) block.ui = {};
      if (!block.ui.mcqOptions || !block.ui.mcqOptions.length || !block.ui.mcqOptions.some(o => o.trim())) {
        if (block.data.options && Array.isArray(block.data.options)) {
          block.ui.mcqOptions = block.data.options;
        }
      }
    }
  });

  // Fix True/False answer location
  processedBlocks.forEach(block => {
    if (block.type === 'True / False' && block.mode === 'question') {
      if (!block.ui) block.ui = {};
      if (!block.ui.tfAnswer) {
        if (block.data.correct === true || block.data.correct === 'True') block.ui.tfAnswer = 'True';
        else if (block.data.correct === false || block.data.correct === 'False') block.ui.tfAnswer = 'False';
        else if (block.data.answer) block.ui.tfAnswer = block.data.answer;
      }
    }
  });

  // Fix Table questions
  processedBlocks.forEach(function(block) {
    if (block.type === 'Table' && block.mode === 'question') {
      if (!block.data.tableHeaders || !block.data.tableHeaders.length || !block.data.tableHeaders.some(function(h) { return h && h.trim(); })) {
        var qText = block.data.question || '';
        if (qText.toLowerCase().includes('angle of incidence') && qText.toLowerCase().includes('angle of reflection')) {
          block.data.tableHeaders = ['Angle of Incidence / °', 'Angle of Reflection / °'];
          block.data.tableCols = 2; block.data.tableRows = 5;
          block.data.tablePrefill = [['10',''],['20',''],['30',''],['45',''],['60','']];
        } else if (qText.toLowerCase().includes('force') && qText.toLowerCase().includes('acceleration')) {
          block.data.tableHeaders = ['Force / N', 'Mass / kg', 'Acceleration / m/s²'];
          block.data.tableCols = 3; block.data.tableRows = 5;
          block.data.tablePrefill = [['5','2',''],['10','2',''],['15','2',''],['20','2',''],['25','2','']];
        } else if (qText.toLowerCase().includes('voltage') && qText.toLowerCase().includes('current')) {
          block.data.tableHeaders = ['Voltage / V', 'Current / A', 'Resistance / Ω'];
          block.data.tableCols = 3; block.data.tableRows = 5;
          block.data.tablePrefill = [['2','0.1',''],['4','0.2',''],['6','0.3',''],['8','0.4',''],['10','0.5','']];
        } else if (qText.toLowerCase().includes('wavelength') || qText.toLowerCase().includes('frequency')) {
          block.data.tableHeaders = ['Wavelength / m', 'Frequency / Hz', 'Wave Speed / m/s'];
          block.data.tableCols = 3; block.data.tableRows = 4;
          block.data.tablePrefill = [['0.5','','340'],['1.0','','340'],['1.5','','340'],['2.0','','340']];
        } else if (qText.toLowerCase().includes('distance') && qText.toLowerCase().includes('time')) {
          block.data.tableHeaders = ['Time / s', 'Distance / m', 'Speed / m/s'];
          block.data.tableCols = 3; block.data.tableRows = 5;
          block.data.tablePrefill = [['0','0',''],['2','8',''],['4','20',''],['6','36',''],['8','56','']];
        } else {
          block.data.tableHeaders = ['Variable 1', 'Variable 2', 'Calculated Value'];
          block.data.tableCols = 3; block.data.tableRows = 5;
          block.data.tablePrefill = [['','',''],['','',''],['','',''],['','',''],['','','']];
        }
      }
      if (block.data.tableHeaders && block.data.tableHeaders.length) block.data.tableCols = block.data.tableHeaders.length;
      if (!block.data.tableRows || block.data.tableRows < 2) block.data.tableRows = 5;
      if (!block.data.tablePrefill || !block.data.tablePrefill.length) {
        block.data.tablePrefill = [];
        for (var r2 = 0; r2 < block.data.tableRows; r2++) {
          block.data.tablePrefill[r2] = [];
          for (var c = 0; c < block.data.tableCols; c++) block.data.tablePrefill[r2][c] = '';
        }
      }
    }
  });

  processedBlocks.forEach((b, i) => {
    if (b.type === 'MCQ' && (!b.ui.mcqOptions || b.ui.mcqOptions.length < 2)) {
      b._invalid = true;
    }
  });
  const validBlocks = processedBlocks.filter(b => !b._invalid);

  var commandTermsList = ['State','Define','Outline','Describe','Explain','Calculate','Apply','Determine','Solve','Show','Derive','Analyse','Analyze','Evaluate','Discuss','Compare','Justify','Formulate','Suggest','Design','Plot','Interpret','Predict','Identify','List','Name','Label','Construct'];

  validBlocks.forEach(function(block) {
    if (block.mode === 'question' && block.data && block.data.question) {
      var q = block.data.question;
      commandTermsList.forEach(function(term) {
        var regex = new RegExp('(^|\\. |\\n|<br>)(' + term + ')(\\s)', 'g');
        q = q.replace(regex, '$1<span style="color:#c0392b;font-weight:700;text-decoration:underline;text-underline-offset:3px;">' + term + '</span>$3');
        if (q.indexOf(term) === 0) {
          q = '<span style="color:#c0392b;font-weight:700;text-decoration:underline;text-underline-offset:3px;">' + term + '</span>' + q.substring(term.length);
        }
      });
      block.data.question = q;
    }
  });

  validBlocks.forEach(function(block) {
    if (block.mode === 'question' && block.meta) {
      var ct = block.meta.commandTerm || '';
      var strand = block.meta.strand || '';
      var criterion = block.meta.criterion || '';
      var existingScheme = block.meta.markScheme || '';
      if (existingScheme && existingScheme.indexOf('Command term:') === -1) {
        var label = '<div style="margin-bottom:6px;padding:4px 8px;background:rgba(192,57,43,0.04);border-radius:4px;font-size:11px;">'
          + '<strong style="color:#c0392b;">Command term: <span style="text-decoration:underline;">' + ct + '</span></strong>'
          + ' &nbsp;|&nbsp; '
          + '<strong>Strand: ' + criterion + '.' + strand + '</strong>'
          + '</div>';
        block.meta.markScheme = label + existingScheme;
      }
    }
  });

  return validBlocks;
};
```
