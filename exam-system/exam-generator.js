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
  let total = 0;
  document.querySelectorAll('.gen-type-row').forEach(row => {
    const cb = row.querySelector('.gen-type-cb');
    const count = row.querySelector('.gen-type-count');
    const marks = row.querySelector('.gen-type-marks');
    if (cb && cb.checked && count && marks) {
      total += Number(count.value || 0) * Number(marks.value || 0);
    }
  });
  const el = document.getElementById('shared-total-marks');
  if (el) el.value = total;
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
  const yl = gradeToYear[config.grade] || "5";
  const critFullNames = {A:"Knowing and Understanding",B:"Inquiring and Designing",C:"Processing and Evaluating",D:"Reflecting on the Impacts of Science"};

  const chapterDiagMap = {
    'Forces & Motion':['forces','motion','experiments'],'Work, Power & Gravity':['forces','energy','experiments'],
    'Energy & Environment':['energy','thermal','experiments'],'The Nature of Waves':['waves','experiments'],
    'Atomic Physics':['atomic','experiments'],'Electromagnetism':['electricity','experiments'],
    'Thermal Physics':['thermal','experiments'],'Astrophysics':['astrophysics','experiments'],
    'Exploring Matter':['thermal','atomic','experiments']
  };
  const relevantDiags = (chapterDiagMap[config.chapter]||['experiments']).flatMap(cat=>(DIAGRAM_BANK[cat]||[]).map(f=>'./Images/'+f));

  const diagramInstr = config.includeDiagrams ? `
IMAGE BLOCKS: Where appropriate include {"mode":"content","type":"Image","sectionId":1,"data":{"url":"./Images/FILE.png","caption":"Figure N: description"}}.
Available: ${relevantDiags.join(', ')}.
If none match, use Text block with "[DIAGRAM NEEDED: description]". Do NOT fabricate URLs.` : '';

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

  const crit = config.criterion?.charAt(0) || "A";
  let taskStructure = '';

  if (crit === 'A' || config.criterion === 'Full Exam') {
    taskStructure += `
TASK: CRITERION A — KNOWING AND UNDERSTANDING (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
Generate 2-3 main questions with sub-parts. Each opens with a STIMULUS (real-world scenario, 3-6 sentences, specific data).
Sub-part pattern:
(a) 1 mark, strand i: "${ye.A_verbs.i[0]} [fact]" — MCQ or short answer
(b) 1-2 marks, strand i: "${ye.A_verbs.i[0]} [concept]" — short answer or table
(c) 2 marks, strand ii: "${ye.A_verbs.ii[0]} [formula to solve problem]" — calculation with formula→substitution→answer+units
(d) 2-3 marks, strand ii: Multi-step calculation — "Use of [formula] seen or implied (1), correct intermediate value (1), correct answer to 2+ sig figs with units (1)"
(e) 2-3 marks, strand iii: "${ye.A_verbs.iii[0]} [data/claim to judge]" — requires scientific reasoning
Mark scheme format: "Award N marks", "Seen or implied", "Accept...", "Do not accept...", "WTTE", "ECF"`;
  }

  if (crit === 'B' || config.criterion === 'B+C' || config.criterion === 'Full Exam') {
    taskStructure += `
TASK: CRITERION B — INQUIRING AND DESIGNING (${config.criterion === 'Full Exam' ? '~16-18 marks' : '~14-16 marks'})
Stimulus: Describe a phenomenon to investigate with equipment available.
(a) 1 mark, strand i: "${ye.B_verbs.i[0]} a research question"
(b) 2-3 marks, strand ii: "${ye.B_verbs.ii[0]} a testable ${yl==='1'?'prediction':'hypothesis'} using scientific reasoning"
(c) MAIN DESIGN (14-16 marks, strand iv): "${ye.B_verbs.iv[0]} a complete scientific investigation"
Grade with HOLISTIC GRID stored in meta.gradingGrid:
{"V":{"label":"Variables","levels":{"1":"IV or DV identified","2":"IV and DV stated","3":"IV, DV and one CV stated","4":"IV, DV and one CV stated and justified"}},
"H":{"label":"${yl==='1'?'Prediction':'Hypothesis'}","levels":{"1":"Attempt linked to one variable","2":"Testable, links IV and DV","3":"Links IV and DV with attempted explanation","4":"Links IV and DV with scientific reasoning"}},
"E":{"label":"Equipment","levels":{"1":"Equipment to measure IV or DV","2":"Equipment to measure IV and DV"}},
"M":{"label":"Method","levels":{"1":"Attempt at method","2":"Method linked to IV and DV","3":"Complete method","4":"Complete method with CV control"}},
"D":{"label":"Data collection","levels":{"1":"Reference to IV values","2":"5 increments or 3 trials","3":"5 increments and 3 trials","4":"5 increments, 3 trials, calculates average"}},
"S":{"label":"Safety","levels":{"1":"Relevant precaution linked to hazard"}}}`;
  }

  if (crit === 'C' || config.criterion === 'B+C' || config.criterion === 'Full Exam') {
    taskStructure += `
TASK: CRITERION C — PROCESSING AND EVALUATING (${config.criterion === 'Full Exam' ? '~20-25 marks' : config.totalMarks + ' marks'})
Stimulus: Provide ACTUAL experimental data table (5-7 rows, units in headers, realistic values).
(a) 1-2 marks, strand i: Read/calculate a value from data
(b) 2-3 marks, strand i: Calculate missing value using formula
(c) 4 marks, strand i: Present data in table or plot graph — "Headers with units(1), ascending order(1), consistent decimals(1), correct values(1)"
(d) 2-3 marks, strand ii: "${ye.C_verbs.ii[0]} the data — trend(1), relationship type(1), scientific reasoning(1)"
(e) 3 marks, strand iii: "${ye.C_verbs.iii[0]} whether data supports ${yl==='1'?'prediction':'hypothesis'} — specific data ref(1), correct conclusion(1), reasoning(1)"
(f) 2 marks, strand iv: "${ye.C_verbs.iv[0]} a source of error and its effect"
(g) 2-3 marks, strand v: "${ye.C_verbs.v[0]} an improvement or extension"`;
  }

  if (crit === 'D' || config.criterion === 'Full Exam') {
    taskStructure += `
TASK: CRITERION D — REFLECTING ON IMPACTS (${config.criterion === 'Full Exam' ? '~25 marks' : config.totalMarks + ' marks'})
Factor: ${config.dFactor || 'Environmental'}
Stimulus: 6-10 sentences describing a REAL physics application (e.g. James Webb Telescope, SODIS, defibrillators, passive houses).
(a) 1 mark: Factual recall related to application
(b) 1-2 marks, strand i: "${ye.D_verbs.i[0]} how the physics is used to address the problem"
(c) MAIN REFLECTION (9-15 marks, strands i-iv): Holistic grid in meta.gradingGrid:
{"theme1":{"label":"${config.dFactor||'Environmental'} implications","levels":{"1":"A statement","2":"Two statements or one with support","3":"Two with support for one","4":"Two with support for both"}},
"theme2":{"label":"Second factor implications","levels":{"1":"A statement","2":"Two statements or one with support","3":"Two with support for one","4":"Two with support for both"}},
"conclusion":{"label":"Concluding appraisal","levels":{"1":"A concluding opinion","2":"Justified appraisal linking to arguments"}}}
Do NOT use MCQ/TF for this — requires extended writing. Both benefits AND limitations required.`;
  }

  const formulas = `FORMULAS: ρ=m/V, F=ma, v=u+at, s=ut+½at², v²=u²+2as, p=mv, p=F/A, W=Fs, Eₖ=½mv², g=F/m, ΔEₚ=mgΔh, efficiency=(useful/total)×100, P=W/t, I=ΔQ/t, P=IV, V=IR, Vₚ/Vₛ=Nₚ/Nₛ, v=fλ, T=1/f`;

  return `You are an expert IB MYP Physics teacher creating an eAssessment-style question set based on the IB MYP Sciences Guide (April 2023) and real papers (M23-M25).

═══ ASSESSMENT ═══
Grade: ${config.grade} | ${ye.label} | Chapter: ${config.chapter} | Topic: ${config.topic}
Criterion: ${config.criterion} (${critFullNames[crit] || 'Combined'})
Global Context: ${config.globalContext || 'Scientific and Technical Innovation'} | Difficulty: ${config.difficulty || 'Mixed'}
Total Marks: ${config.totalMarks}
${config.dFactor && (crit==='D'||config.criterion==='Full Exam') ? 'D-Factor: '+config.dFactor : ''}
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
COMMAND TERMS: Define(precise meaning), State(brief, no explanation), Outline(brief account), Describe(detailed account), Explain(with reasons/causes), Calculate(numerical+working), Determine(only possible answer), Analyse(break down), Evaluate(weigh strengths/limitations), Discuss(balanced review+evidence), Justify(valid reasons), Formulate(express precisely), Suggest(propose), Compare(similarities/differences), Design(produce plan), Plot(mark points), Interpret(trends+conclusions)
${diagramInstr}
${dataTableInstr}

${taskStructure}

═══ QUESTION MIX ═══
${config.questions.map(q => '- '+q.count+'× '+q.type+' ('+q.marks+' marks each)').join('\n')}

═══ OUTPUT: VALID JSON ONLY ═══
{
  "heading":"string","sections":[{"id":1,"name":"Section 1"}],
  "blocks":[
    {"mode":"content","type":"Text","sectionId":1,"data":{"text":"HTML stimulus"}},
    {"mode":"content","type":"Image","sectionId":1,"data":{"url":"./Images/file.png","caption":"Figure 1: desc"}},
    {"mode":"question","type":"MCQ|Long Answer|True / False|Fill in the Blank|Match the Following|Table","sectionId":1,
      "data":{"question":"Command term + question","correct":0,"explanation":"model answer"},
      "ui":{"mcqOptions":["A","B","C","D"],"tfAnswer":"True","matchPairs":[{"a":"","b":""}]},
      "meta":{"marks":1,"criterion":"${crit}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"Award 1 mark for...","gradingGrid":null}}
  ]
}

RULES: 1)ONLY valid JSON 2)Every question meta: marks,criterion,strand,commandTerm,difficulty,markScheme 3)Questions start with command term 4)Stimulus before questions 5)Strands progress i→ii→iii 6)Total marks=${config.totalMarks} 7)Realistic numerical values 8)Mark schemes use IB format: "Award X marks","Accept","Do not accept","WTTE","ECF","Seen or implied" 9)For holistic grids store in meta.gradingGrid 10)Stimulus must be SPECIFIC with named locations, technologies, numerical values`;
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
    const model = attempt === 0 ? 'llama-3.3-70b-versatile' : 'llama-3.3-8b-instant';
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: 'system', content: 'You are an expert IB MYP Physics teacher. You MUST respond with valid JSON only. No markdown, no code fences, no extra text.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 8192,
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
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
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
  const dFactor = document.getElementById('shared-dfactor')?.value || 'Environmental';
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
    const count = Number(row.querySelector('.gen-type-count').value || 0);
    const marks = Number(row.querySelector('.gen-type-marks').value || 1);
    const type = row.dataset.type;
    if (cb.checked && count > 0) {
      questions.push({ type, count, marks });
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
async function runGeneration() {
  if (_genCooldown) { alert('Please wait a few seconds before generating again.'); return; }

  const config = collectGenConfig();
  if (!config) return;

  const btn = document.getElementById('gen-run-btn');
  const status = document.getElementById('gen-status');

  btn.disabled = true;
  btn.textContent = '⏳ Generating...';
  status.textContent = 'Sending to Gemini AI... this takes 10-20 seconds';
  status.style.color = 'var(--text2)';

  _genCooldown = true;
  setTimeout(() => { _genCooldown = false; }, 3000);

  try {
    const prompt = buildGeneratorPrompt(config);
    const result = await callAI(prompt);

    if (!result || !result.blocks || !Array.isArray(result.blocks)) {
      throw new Error('Invalid response format — missing blocks array');
    }
    
    let validatedResult = validateGeneratedSet(result, config);

    status.textContent = '✅ Generated! Saving to library...';
    status.style.color = 'var(--green)';

    // Build set object matching existing schema
    const setId = 'set_' + Date.now();
    const now = Date.now();
    let blockId = 0;

    const processedBlocks = validatedResult.blocks.map(block => ({
      ...block,
      id: blockId++,
      saved: true,
      sectionId: block.sectionId || 1,
      media: block.media || [],
      data: block.data || {},
      meta: {
        marks: block.meta?.marks || 1,
        criterion: block.meta?.criterion || config.criterion,
        markScheme: block.meta?.markScheme || '',
        hint: block.meta?.hint || '',
        difficulty: block.meta?.difficulty || config.difficulty,
        gradingGrid: block.meta?.gradingGrid || null,
        ...(block.meta || {})
      },
      ui: block.ui || {}
    }));

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

    // Validate MCQ blocks
    processedBlocks.forEach((b, i) => {
      if (b.type === 'MCQ' && (!b.ui.mcqOptions || b.ui.mcqOptions.length < 2)) {
        console.warn('Skipping invalid MCQ block at index ' + i);
        b._invalid = true;
      }
    });
    const validBlocks = processedBlocks.filter(b => !b._invalid);

    const totalMarks = validBlocks
      .filter(b => b.mode === 'question')
      .reduce((sum, b) => sum + Number(b.meta?.marks || 0), 0);

    const newSet = {
      id: setId,
      heading: config.heading || result.heading || config.topic,
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
