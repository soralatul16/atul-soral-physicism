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

/* ── Templates Logic ── */
const PRESET_TEMPLATES = [
  {
    name: "Criterion A Test (25 marks)",
    criteria: ["A"],
    mix: [ {t:"MCQ", c:5, m:1}, {t:"Long Answer", c:3, m:4}, {t:"Table", c:1, m:4}, {t:"Fill Text", c:4, m:1} ],
    marks: 25
  },
  {
    name: "Criterion B+C Investigation",
    criteria: ["B", "C"],
    mix: [ {t:"Long Answer", c:5, m:4}, {t:"Table", c:1, m:5}, {t:"Graph Plot", c:1, m:4} ],
    marks: 50
  },
  {
    name: "Criterion D Reflection",
    criteria: ["D"],
    mix: [ {t:"Long Answer", c:2, m:6}, {t:"Table", c:1, m:3}, {t:"True / False", c:5, m:1} ],
    marks: 25
  },
  {
    name: "Full Mock Exam",
    criteria: ["A", "B", "C", "D"],
    mix: [ {t:"MCQ", c:10, m:1}, {t:"Long Answer", c:10, m:5}, {t:"Table", c:3, m:4}, {t:"Graph Plot", c:1, m:4} ],
    marks: 100
  },
  {
    name: "Quick Quiz",
    criteria: ["A"],
    mix: [ {t:"MCQ", c:5, m:1}, {t:"Long Answer", c:2, m:2}, {t:"Fill Text", c:2, m:1}, {t:"Table", c:1, m:4} ],
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

/* ── Build Prompt (IB MYP Sciences Guide April 2023 + Real Papers M23-M25) ── */
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

function buildGeneratorPrompt(config) {
  const gradeToYear = {"6":"1","7":"1","8":"3","9":"3","10":"5"};
  const crit = config.criterion?.charAt(0) || "A";
  const yl = gradeToYear[config.grade] || "5";
  const critFullNames = {A:"Knowing and Understanding",B:"Inquiring and Designing",C:"Processing and Evaluating",D:"Reflecting on the Impacts of Science"};


  const diagramInstr = config.includeDiagrams ? `
DIAGRAMS: When a visual is needed, generate a Text content block with a styled HTML placeholder box. Do NOT use Image blocks — they break. Use this format:

{"mode":"content","type":"Text","sectionId":1,"data":{"text":"<div style='padding:16px;background:#f9f6f1;border:2px dashed rgba(192,57,43,0.15);border-radius:10px;text-align:center;margin:10px 0;'><p style='font-size:13px;color:#c0392b;font-weight:600;'>[DIAGRAM: Description of what diagram shows]</p><p style='font-size:12px;color:#555;margin-top:6px;'>Detailed description with labels, arrows, and measurements</p></div>"}}

For Criterion D, describe the real-world scenario with specific details in the stimulus text instead of requiring an image. The text description IS the visual — no image needed.

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
CRITERION A (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'}): 2-3 stimuli with sub-parts.
(a) 1mk strand i: "${ye.A_verbs.i[0]}" — recall. (b) 1-2mk strand i: short answer. (c) 2mk strand ii: "${ye.A_verbs.ii[0]}" — formula→sub→answer+units. (d) 2-3mk strand ii: multi-step calc. (e) 2-3mk strand iii: "${ye.A_verbs.iii[0]}" — reasoning.
Mark scheme: "Award N marks", "Seen or implied", "Accept/Do not accept", "WTTE", "ECF", "2+ sig figs".`;
  }

  if (hasB) {
    taskStructure += `
CRITERION B (${config.criterion === 'Full Exam' ? '~16-18 marks' : '~14-16 marks'}): ONE design question. Stimulus describes phenomenon+equipment.
(a) 1mk: "${ye.B_verbs.i[0]} a research question". (b) 2-3mk: "${ye.B_verbs.ii[0]} a testable ${yl==='1'?'prediction':'hypothesis'}".
(c) MAIN DESIGN (14-16mk): Holistic grid in meta.gradingGrid:
{"V":{"label":"Variables","levels":{"1":"IV or DV","2":"IV and DV","3":"IV,DV,CV","4":"IV,DV,CV justified"}},"H":{"label":"${yl==='1'?'Prediction':'Hypothesis'}","levels":{"1":"Links one var","2":"Links IV+DV","3":"IV+DV+explanation"}},"E":{"label":"Equipment","levels":{"1":"Measures IV or DV","2":"Measures IV and DV"}},"M":{"label":"Method","levels":{"1":"Attempt","2":"Links IV+DV","3":"Complete","4":"Complete+CV control"}},"D":{"label":"Data","levels":{"1":"IV values","2":"5 increments or 3 trials","3":"5+3","4":"5+3+average"}},"S":{"label":"Safety","levels":{"1":"Precaution+hazard"}}}
Do NOT split into multiple questions. ONE stimulus, ONE design task, ONE grid.`;
  }

  if (hasC) {
    taskStructure += `
CRITERION C (${config.criterion === 'Full Exam' ? '~20-25 marks' : config.totalMarks + ' marks'}): Provide data table (5-7 rows, units in headers).
(a) 1-2mk: Read/calculate from data. (b) 2-3mk: Calculate using formula. (c) 4mk: Present/plot data. (d) 2-3mk: "${ye.C_verbs.ii[0]}" trend+relationship. (e) 3mk: "${ye.C_verbs.iii[0]}" whether data supports ${yl==='1'?'prediction':'hypothesis'}. (f) 2mk: Error+effect. (g) 2-3mk: Improvement.`;
  }

  if (hasD) {
    taskStructure += `
TASK: CRITERION D — REFLECTING ON THE IMPACTS (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
D-Factor: ${config.dFactor || 'Environmental, Economic'}

Generate the Criterion D section as follows:

PART 1 — CONTEXT QUESTIONS (${Math.min(5, Math.floor(config.totalMarks * 0.3))} marks):
Generate 2-3 short questions (MCQ, Fill Text, or 1-2 mark Long Answer) that test factual understanding of the real-world context.
- Strand D.i: "State one use of..." or "Identify the technology..."
- These are warm-up questions before the extended response.

PART 2 — EXTENDED RESPONSE (${Math.max(8, Math.floor(config.totalMarks * 0.7))} marks):
Generate ONE extended writing question with a holistic marking grid.

The question MUST:
- Have a 6-10 sentence stimulus describing a REAL technology or application with specific data (names, numbers, locations)
- Ask students to discuss implications across 2-3 themes based on the D-factor
- End with "Write a concluding appraisal giving your opinion..."

The holistic grid MUST be stored in meta.gradingGrid with this EXACT structure:

"gradingGrid": {
  "theme1": {
    "label": "[First theme, e.g. Environmental implications]",
    "levels": {
      "1": "A statement",
      "2": "A statement with further support OR two statements",
      "3": "Two statements with further support for one",
      "4": "Two statements with further support for both"
    }
  },
  "theme2": {
    "label": "[Second theme, e.g. Economic implications]",
    "levels": {
      "1": "A positive or negative implication",
      "2": "A positive AND a negative implication",
      "3": "A positive and negative with support for one",
      "4": "A positive and negative with support for both"
    }
  },
  "conclusion": {
    "label": "Concluding appraisal",
    "levels": {
      "1": "A concluding opinion",
      "2": "A concluding appraisal with justification linked to points made earlier"
    }
  }
}

The total marks for the extended response = sum of max levels across all rows.
Example: theme1(4) + theme2(4) + conclusion(2) = 10 marks

The mark scheme for this question should say: "Assess holistically using the grid. Award marks per row independently."
Both benefits AND limitations required.`;
  }

  const formulas = `Use relevant physics formulas for the topic. Show formulas in questions where calculations are needed.`;

  var critOnlyInstruction = 'CRITICAL: This generation is for Criterion ' + crit + ' ONLY. Every question MUST be Criterion ' + crit + '. Do NOT generate questions for any other criterion.\n\n';

  if (crit === 'A') {
    critOnlyInstruction += 'STRAND DISTRIBUTION for Criterion A:\n'
      + '- 40% of marks on strand i (recall): Use command terms State, Define, Outline, Describe\n'
      + '- 35% of marks on strand ii (application): Use command terms Apply, Calculate, Determine, Solve\n'
      + '- 25% of marks on strand iii (analysis): Use command terms Analyse, Evaluate, Discuss, Compare, Justify\n'
      + 'Mix strands WITHIN each section. Do NOT put all strand i questions together.\n\n';
  } else if (crit === 'B') {
    critOnlyInstruction += 'Criterion B is ONE extended design question with a holistic marking grid.\n'
      + 'Generate ONE stimulus + ONE design task. The holistic grid has rows: V (variables 1-4), H (hypothesis 1-3), E (equipment 1-2), M (method 1-4), D (data 1-4), S (safety 1).\n'
      + 'Do NOT split into multiple small questions. ONE question, ONE grid.\n\n';
  } else if (crit === 'C') {
    critOnlyInstruction += 'STRAND DISTRIBUTION for Criterion C:\n'
      + '- Strand i: Present/organize data (tables, graphs)\n'
      + '- Strand ii: Interpret data (trends, patterns)\n'
      + '- Strand iii: Evaluate (does data support hypothesis?)\n'
      + '- Strand iv: Evaluate (sources of error)\n'
      + '- Strand v: Suggest improvements\n'
      + 'Provide a DATA TABLE with real numbers in the stimulus. Questions should process that data.\n\n';
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

  return critOnlyInstruction + `You are an expert IB MYP Physics teacher creating an eAssessment-style question set based on the IB MYP Sciences Guide (April 2023) and real papers (M23-M25).

═══ ASSESSMENT ═══
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

${formulas}
COMMAND TERMS: State(1 mark, MCQ/Fill), Define(1 mark, MCQ/Fill), Describe(2-3 marks, Long Answer), Explain(2-4 marks, Long Answer), Calculate(2-3 marks, Long Answer), Apply(2-3 marks, Long Answer), Analyse(3-4 marks, Long Answer), Evaluate(3-4 marks, Long Answer), Discuss(3-4 marks, Long Answer), Justify(3-4 marks, Long Answer)
${diagramInstr}
${dataTableInstr}

eASSESSMENT STYLE GUIDE:
- Criterion A: Stimulus (3-6 sentences) → sub-parts i→ii→iii. "Award N marks", "Seen or implied", "Accept/Do not accept".
- Criterion B: ONE design question with holistic grid V(1-4), H(1-3), E(1-2), M(1-4), D(1-4), S(1).
- Criterion C: Data table → read→calculate→graph→interpret→evaluate.
- Criterion D: ONE reflection with holistic grid + concluding appraisal.

${taskStructure}

═══ QUESTION MIX ═══
${config.questions.map(function(q) {
  if (q.marksList && q.marksList.length > 0) {
    return q.marksList.map(function(m) {
      return '- 1× ' + q.type + ' (' + m + ' marks)';
    }).join('\n');
  }
  return '- ' + q.count + '× ' + q.type + ' (' + q.marks + ' marks each)';
}).join('\n')}

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

RULES: 1)ONLY valid JSON 2)Every question meta: marks,criterion,strand,commandTerm,difficulty,markScheme 3)Questions start with command term 4)Stimulus before questions 5)Strands i→ii→iii 6)Total marks MUST equal EXACTLY ${config.totalMarks} 7)Realistic values 8)Mark schemes: "Award X marks","Accept","Do not accept","WTTE","ECF" 9)Holistic grids in meta.gradingGrid 10)Specific stimuli with names,places,numbers 11)At LEAST ${Math.max(5, Math.ceil(config.totalMarks / 3))} questions 12)Table questions MUST have tableHeaders,tableRows,tableCols,tablePrefill 13)Count marks as you generate — must reach exactly ${config.totalMarks} 14)Verify total before outputting 15)Generate at LEAST 2 different stimulus blocks using different real-world scenarios. Assign questions to different sectionIds (1, 2, or 3). 17)VARIETY: Each section MUST have at least 2 different question types. Never a section of all MCQs or all True/False. 18)STRAND MIX: Within each section, progress through strands. Start with strand i, then ii, then iii. Each section should cover at least 2 strands. 19)QUESTION INDEPENDENCE: Each question must be standalone. Do not make one question's answer depend on another question's answer.
20)COMMAND TERM TO QUESTION TYPE MATCHING — follow these strictly:
- "State" or "Define" → MCQ or Fill Text (1 mark, strand i)
- "Describe" or "Outline" → Long Answer (2-3 marks, strand i-ii)
- "Calculate" or "Determine" or "Solve" → Long Answer with working shown (2-3 marks, strand ii)
- "Apply" → Long Answer or Table (2-3 marks, strand ii)
- "Explain" → Long Answer (2-4 marks, strand ii-iii)
- "Analyse" or "Evaluate" or "Discuss" or "Compare" or "Justify" → Long Answer ONLY (3-4 marks, strand iii)
NEVER use "Evaluate", "Analyse", "Discuss", "Compare", or "Justify" for MCQ or Fill Text questions. These command terms require extended writing.
NEVER use "State" or "Define" for Long Answer questions worth more than 2 marks.
21)MCQ QUALITY RULES:
- Every MCQ must have ONE clearly correct answer and THREE plausible distractors
- Distractors must be scientifically plausible wrong answers, not obviously silly
- BAD distractors: "Newton's laws are not important" / "Force has no effect" — too obviously wrong
- GOOD distractors: Common misconceptions like "heavier objects fall faster" or "action-reaction forces act on the same object"
- All four options should be similar in length and structure
- Do NOT use "All of the above" or "None of the above"
- MCQs should test KNOWLEDGE (strand i), not OPINION
22)FILL TEXT RULES:
- Fill Text is for single-word or short-phrase answers ONLY
- "The unit of force is ______" → correct (single word: newton)
- "Justify why an object remains at rest..." → WRONG for Fill Text, use Long Answer
- Fill Text questions must have a clear, unambiguous single correct answer
23)STRAND TO COMMAND TERM MATCHING:
- Strand i: State, Define, Outline, List, Identify, Name, Label
- Strand ii: Describe, Apply, Calculate, Determine, Solve, Show, Construct, Plot
- Strand iii: Explain, Analyse, Evaluate, Discuss, Compare, Justify, Suggest, Predict
- Do NOT assign strand i to questions using "Evaluate" or "Analyse"
- Do NOT assign strand iii to questions using "State" or "Define"

DRAWING QUESTIONS: Use type "Drawing" when students need to draw (free body diagram, circuit, ray diagram). Include: data.question (instruction), data.drawingInstructions (what to draw). Do NOT include data.drawingImage — image URLs break. Mark scheme should list each element.

DRAG AND DROP QUESTIONS: Use type "Drag and Drop" for classify/sort tasks. Include: data.question, data.dragItems (array of items), data.dropZones (array of {label, accepts:[items]}). Award 1 mark per correct placement.

GRAPH PLOT QUESTIONS: Use type "Graph Plot" when students plot data. Include: data.question, data.graphAxes ({x,y,xRange,yRange}), data.dataPoints ([[x,y],...]).

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
          { role: 'system', content: 'You are an expert IB MYP Physics teacher who has studied every MYP eAssessment paper from M23 to M25. You generate questions that are indistinguishable from real IB papers. You MUST respond with valid JSON only. No markdown, no code fences, no extra text.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 8000,
        response_format: { type: 'json_object' }
      })
    });

    if (response.status === 429 && attempt === 0) {
      if (statusEl) statusEl.textContent = '⏳ Rate limited — retrying with faster model...';
      await new Promise(r => setTimeout(r, 2000)); // Shorter wait for faster model
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
            parts: [{ text: 'You are an expert IB MYP Physics teacher who has studied every MYP eAssessment paper from M23 to M25. You generate questions that are indistinguishable from real IB papers. You MUST respond with valid JSON only. No markdown, no code fences, no extra text.' }]
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
    // Show a warning but still save — teacher can fix in builder
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
      // Check if marks is comma-separated (individual marks per question)
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

/* ── Generate & Save ── */
function getAutoQuestionMix(criterion, totalMarks) {
  var mix = [];
  
  if (criterion === 'A') {
    // Criterion A: mixed types, strands i→ii→iii
    // 40% strand i (recall), 35% strand ii (apply), 25% strand iii (analyse)
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
    // Criterion B: ONE design question with holistic grid
    mix = [{type: 'Long Answer', count: 1, marks: totalMarks}];
  } else if (criterion === 'C') {
    // Criterion C: data processing, graphs, calculations
    mix = [
      {type: 'Fill in the Blank', count: 2, marks: 1},
      {type: 'Table', count: 1, marks: Math.min(4, Math.floor(totalMarks * 0.2))},
      {type: 'Long Answer', count: 2, marks: Math.floor(totalMarks * 0.2)},
      {type: 'Graph Plot', count: 1, marks: Math.min(4, Math.floor(totalMarks * 0.2))}
    ];
  } else if (criterion === 'D') {
    // Criterion D: extended reflection + shorter context questions
    if (totalMarks >= 15) {
      // One big extended response + some shorter ones
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
    // Parse criteria — could be "A", "A, D", "A, B, C", etc.
    var criteriaRaw = config.criterion || 'A';
    var criteria = criteriaRaw.split(/[,+]/).map(function(c) { return c.trim().charAt(0); }).filter(function(c) { return 'ABCD'.indexOf(c) !== -1; });
    
    // Remove duplicates
    criteria = criteria.filter(function(c, i) { return criteria.indexOf(c) === i; });
    
    if (criteria.length === 0) criteria = ['A'];
    
    // Calculate marks per criterion
    var marksPerCrit = {};
    var baseMarks = Math.floor(config.totalMarks / criteria.length);
    var remainder = config.totalMarks % criteria.length;
    criteria.forEach(function(c, i) {
      marksPerCrit[c] = baseMarks + (i < remainder ? 1 : 0);
    });
    
    var allBlocks = [];
    var allSections = [];
    var sectionOffset = 0;
    
    // Generate each criterion separately
    for (var ci = 0; ci < criteria.length; ci++) {
      var crit = criteria[ci];
      var critMarks = marksPerCrit[crit];
      
      status.textContent = '⏳ Generating Criterion ' + crit + ' (' + (ci + 1) + '/' + criteria.length + ')... ' + critMarks + ' marks';
      
      // Build config for this single criterion
      var singleConfig = JSON.parse(JSON.stringify(config));
      singleConfig.criterion = crit;
      singleConfig.totalMarks = critMarks;
      
      // Auto-select appropriate question types per criterion
      if (criteria.length > 1) {
        singleConfig.questions = getAutoQuestionMix(crit, critMarks);
      }
      
      // Build and send prompt
      var prompt = buildGeneratorPrompt(singleConfig);
      var result = await callAI(prompt);
      
      if (result && result.blocks && Array.isArray(result.blocks)) {
        // Assign unique section IDs
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
      
      // Rate limit delay between calls
      if (ci < criteria.length - 1) {
        status.textContent = '⏳ Waiting for rate limit... next: Criterion ' + criteria[ci + 1];
        await new Promise(function(r) { setTimeout(r, 3000); });
      }
    }
    
    // Combine results
    var combinedResult = {
      heading: config.heading || config.topic,
      sections: allSections.length > 0 ? allSections : [{id: 1, name: 'Section 1'}],
      blocks: allBlocks
    };
    
    if (!combinedResult.blocks || combinedResult.blocks.length === 0) {
      throw new Error('No questions generated. Try again.');
    }
    
    var validatedResult = validateGeneratedSet(combinedResult, config);

    // ═══ SMART MARK PADDING ═══
    var currentTotal = validatedResult.blocks
      .filter(function(b) { return b.mode === 'question'; })
      .reduce(function(sum, b) { return sum + Number(b.meta?.marks || 0); }, 0);

    var deficit = config.totalMarks - currentTotal;

    if (deficit > 0 && deficit <= 15) {
      // Generate simple fill-in-the-blank questions to pad marks
      var padQuestions = [
        {q: 'The SI unit of force is _______.', a: 'newton (N)'},
        {q: 'According to Newton\'s First Law, an object at rest will _______ at rest unless acted upon by an unbalanced force.', a: 'remain'},
        {q: 'The formula F = ma relates force, _______ and acceleration.', a: 'mass'},
        {q: 'Newton\'s Third Law states that every action has an equal and opposite _______.', a: 'reaction'},
        {q: 'The unit of acceleration is _______.', a: 'm/s²'},
        {q: 'Friction is a force that _______ motion.', a: 'opposes'},
        {q: 'Weight is calculated using the formula W = _______.', a: 'mg'},
        {q: 'The rate of change of velocity is called _______.', a: 'acceleration'},
        {q: 'Momentum is the product of mass and _______.', a: 'velocity'},
        {q: 'Pressure is defined as force per unit _______.', a: 'area'}
      ];
      
      for (var pad = 0; pad < deficit && pad < padQuestions.length; pad++) {
        var pq = padQuestions[pad];
        validatedResult.blocks.push({
          mode: 'question', type: 'Fill Text', sectionId: 1,
          data: { question: pq.q, labels: pq.a, correct: pq.a, explanation: 'The correct answer is: ' + pq.a },
          ui: {},
          meta: { marks: 1, criterion: config.criterion?.charAt(0) || 'A', strand: 'i', commandTerm: 'State', difficulty: 'easy', markScheme: 'Award 1 mark for correct answer: ' + pq.a + '. Accept equivalent answers.', gradingGrid: null }
        });
      }
      
      if (deficit > padQuestions.length) {
        // Still short — add generic placeholders for remaining
        for (var xp = 0; xp < deficit - padQuestions.length; xp++) {
          validatedResult.blocks.push({
            mode: 'question', type: 'MCQ', sectionId: 1,
            data: { question: '[EDIT: Add question about ' + config.topic + ']', correct: 0 },
            ui: { mcqOptions: ['Option A', 'Option B', 'Option C', 'Option D'] },
            meta: { marks: 1, criterion: config.criterion?.charAt(0) || 'A', strand: 'i', commandTerm: 'State', difficulty: 'easy', markScheme: 'Award 1 mark.', gradingGrid: null }
          });
        }
      }
      
      status.textContent = '⚠️ AI generated ' + currentTotal + '/' + config.totalMarks + ' marks. Added ' + deficit + ' supplementary questions.';
      status.style.color = 'var(--yellow)';
    }

    status.textContent = status.textContent.startsWith('⚠️') ? status.textContent : '✅ Generated! Saving to library...';
    status.style.color = status.style.color === 'var(--yellow)' ? 'var(--yellow)' : 'var(--green)';

    // Build set object matching existing schema
    const setId = 'set_' + Date.now();
    const now = Date.now();
    let blockId = 0;

    const processedBlocks = validatedResult.blocks.map(block => {
      // Robust type mapping
      let type = block.type;
      if (type === 'Multiple Choice' || type === 'Multiple Choice Question') type = 'MCQ';
      if (type === 'Short Answer' || type === 'Fill in the Blank' || type === 'Fill in the blanks' || type === 'Fill-in-the-blank') type = 'Fill Text';
      if (type === 'Dropdown' || type === 'Select') type = 'Fill Drop Down';
      if (type === 'Multiple Select') type = 'Multiple Select MCQ';

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
          criterion: block.meta?.criterion || block.criterion || config.criterion?.charAt(0) || 'A',
          markScheme: block.meta?.markScheme || block.markScheme || '',
          hint: block.meta?.hint || block.hint || '',
          difficulty: block.meta?.difficulty || block.difficulty || config.difficulty || 'Medium',
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
          console.warn('Multi-Dropdown Q missing mdRows — placeholder added, needs manual edit');
        }
        if (!block.data.mdOptions || !block.data.mdOptions.trim()) {
          block.data.mdOptions = 'Option A, Option B, Option C';
          console.warn('Multi-Dropdown Q missing mdOptions — placeholder added, needs manual edit');
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
            console.warn('Match the Following Q missing pairs — placeholder added');
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
          } else {
            console.warn('MCQ Q missing options');
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

    // ═══ FIX: Populate empty Table questions ═══
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
        console.log('Table question fixed:', block.data.tableHeaders, block.data.tableRows + 'x' + block.data.tableCols);
      }
    });

    // Validate MCQ blocks
    processedBlocks.forEach((b, i) => {
      if (b.type === 'MCQ' && (!b.ui.mcqOptions || b.ui.mcqOptions.length < 2)) {
        console.warn('Skipping invalid MCQ block at index ' + i);
        b._invalid = true;
      }
    });
    const validBlocks = processedBlocks.filter(b => !b._invalid);

    // ═══ HIGHLIGHT COMMAND TERMS IN QUESTIONS ═══
    var commandTermsList = ['State','Define','Outline','Describe','Explain','Calculate','Apply','Determine','Solve','Show','Derive','Analyse','Analyze','Evaluate','Discuss','Compare','Justify','Formulate','Suggest','Design','Plot','Interpret','Predict','Identify','List','Name','Label','Construct'];

    validBlocks.forEach(function(block) {
      if (block.mode === 'question' && block.data && block.data.question) {
        var q = block.data.question;
        commandTermsList.forEach(function(term) {
          // Match at start of question or after period/newline — case sensitive
          var regex = new RegExp('(^|\\. |\\n|<br>)(' + term + ')(\\s)', 'g');
          q = q.replace(regex, '$1<span style="color:#c0392b;font-weight:700;text-decoration:underline;text-underline-offset:3px;">' + term + '</span>$3');
          
          // Also match if it's the very first word
          if (q.indexOf(term) === 0) {
            q = '<span style="color:#c0392b;font-weight:700;text-decoration:underline;text-underline-offset:3px;">' + term + '</span>' + q.substring(term.length);
          }
        });
        block.data.question = q;
      }
    });

    // ═══ ADD COMMAND TERM + STRAND LABELS TO MARK SCHEMES ═══
    validBlocks.forEach(function(block) {
      if (block.mode === 'question' && block.meta) {
        var ct = block.meta.commandTerm || '';
        var strand = block.meta.strand || '';
        var criterion = block.meta.criterion || '';
        var existingScheme = block.meta.markScheme || '';
        
        // Only add if not already present
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

    // Save to library
    const lib = getLibrary();
    lib.push(newSet);
    saveLibrary(lib);

    // Sync to Firestore
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
