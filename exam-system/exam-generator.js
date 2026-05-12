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
  const el = document.getElementById('gen-total-marks');
  if (el) el.value = total;
}

/* ── Build Prompt (IB MYP Sciences Guide, April 2023) ── */
function buildGeneratorPrompt(config) {
  const yearData = {
    "1": { label: "Year 1 (Grade 6-7, ages 11-12)", A: { strands: [{id:"i",text:"Outline scientific knowledge",verbs:["Outline","State","Recall","Select"]},{id:"ii",text:"Apply scientific knowledge to solve problems in familiar situations and suggest solutions in unfamiliar situations",verbs:["Apply","Calculate","Determine","Suggest"]},{id:"iii",text:"Interpret information to make scientifically supported judgments",verbs:["Interpret","Comment","Identify"]}] }, B: { strands: [{id:"i",text:"Outline an appropriate problem or research question",verbs:["Outline","State"]},{id:"ii",text:"Outline a testable prediction using scientific reasoning",verbs:["Outline","State","Predict"]},{id:"iii",text:"Outline how to manipulate variables and collect data",verbs:["Outline","State","Identify"]},{id:"iv",text:"Design scientific investigations",verbs:["Design"]}] }, C: { strands: [{id:"i",text:"Present collected and transformed data",verbs:["Present","Collect","Organize"]},{id:"ii",text:"Interpret data and outline results using scientific reasoning",verbs:["Interpret","Outline"]},{id:"iii",text:"Discuss the validity of a prediction",verbs:["Discuss","Outline"]},{id:"iv",text:"Discuss the validity of the method",verbs:["Discuss","Outline"]},{id:"v",text:"Describe improvements or extensions to the method",verbs:["Describe","Outline"]}] }, D: { strands: [{id:"i",text:"Summarize the ways in which science is applied to address a specific problem",verbs:["Summarize","Outline"]},{id:"ii",text:"Describe and summarize implications of using science",verbs:["Describe","Summarize"]},{id:"iii",text:"Apply scientific language effectively",verbs:["Apply","Use"]},{id:"iv",text:"Document the work of others and sources",verbs:["Document"]}] } },
    "3": { label: "Year 3 (Grade 8-9, ages 13-14)", A: { strands: [{id:"i",text:"Describe scientific knowledge",verbs:["Describe","Outline","State"]},{id:"ii",text:"Apply scientific knowledge to solve problems in familiar and unfamiliar situations",verbs:["Apply","Calculate","Determine","Solve"]},{id:"iii",text:"Analyse information to make scientifically supported judgments",verbs:["Analyse","Interpret","Comment"]}] }, B: { strands: [{id:"i",text:"Describe a problem or question to be tested",verbs:["Describe","Outline"]},{id:"ii",text:"Outline a testable hypothesis and explain it using scientific reasoning",verbs:["Outline","Explain","Formulate"]},{id:"iii",text:"Describe how to manipulate variables and collect data",verbs:["Describe","Outline"]},{id:"iv",text:"Design scientific investigations",verbs:["Design"]}] }, C: { strands: [{id:"i",text:"Present collected and transformed data",verbs:["Present","Collect","Organize"]},{id:"ii",text:"Interpret data and describe results using scientific reasoning",verbs:["Interpret","Describe"]},{id:"iii",text:"Discuss the validity of a hypothesis",verbs:["Discuss","Outline"]},{id:"iv",text:"Discuss the validity of the method",verbs:["Discuss","Outline"]},{id:"v",text:"Describe improvements or extensions to the method",verbs:["Describe","Outline"]}] }, D: { strands: [{id:"i",text:"Describe the ways in which science is applied",verbs:["Describe","Summarize"]},{id:"ii",text:"Discuss and analyse implications of using science",verbs:["Discuss","Analyse","Describe"]},{id:"iii",text:"Apply scientific language effectively",verbs:["Apply","Use"]},{id:"iv",text:"Document the work of others and sources",verbs:["Document"]}] } },
    "5": { label: "Year 5 (Grade 9-10, ages 14-16)", A: { strands: [{id:"i",text:"Explain scientific knowledge",verbs:["Explain","Describe","Define","Outline"]},{id:"ii",text:"Apply scientific knowledge to solve problems in familiar and unfamiliar situations",verbs:["Apply","Calculate","Determine","Solve","Show","Derive"]},{id:"iii",text:"Analyse and evaluate information to make scientifically supported judgments",verbs:["Analyse","Evaluate","Discuss","Compare","Justify"]}] }, B: { strands: [{id:"i",text:"Explain a problem or question to be tested",verbs:["Explain","Describe"]},{id:"ii",text:"Formulate a testable hypothesis and explain it using scientific reasoning",verbs:["Formulate","Explain","Predict","Justify"]},{id:"iii",text:"Explain how to manipulate variables and collect data",verbs:["Explain","Describe"]},{id:"iv",text:"Design scientific investigations",verbs:["Design"]}] }, C: { strands: [{id:"i",text:"Present collected and transformed data",verbs:["Present","Construct","Plot","Draw"]},{id:"ii",text:"Interpret data and explain results using scientific reasoning",verbs:["Interpret","Explain"]},{id:"iii",text:"Evaluate the validity of a hypothesis",verbs:["Evaluate","Discuss"]},{id:"iv",text:"Evaluate the validity of the method",verbs:["Evaluate","Discuss"]},{id:"v",text:"Explain improvements or extensions to the method",verbs:["Explain","Describe","Suggest"]}] }, D: { strands: [{id:"i",text:"Explain the ways in which science is applied",verbs:["Explain","Describe"]},{id:"ii",text:"Discuss and evaluate implications of using science",verbs:["Discuss","Evaluate","Analyse"]},{id:"iii",text:"Apply scientific language effectively",verbs:["Apply","Use","Explain"]},{id:"iv",text:"Document the work of others and sources",verbs:["Document"]}] } }
  };
  const yl = yearData[config.yearLevel || "5"];
  const crit = (config.criteria && config.criteria[0]) ? config.criteria[0].charAt(0) : "A";
  const critData = yl[crit];
  const critNames = {A:"Knowing and Understanding",B:"Inquiring and Designing",C:"Processing and Evaluating",D:"Reflecting on the Impacts of Science"};
  const strandDetails = critData.strands.map(s => `  Strand ${s.id}: "${s.text}" — Command terms: ${s.verbs.join(', ')}`).join('\n');

  const dFactor = crit === 'D' ? `\nCRITERION D REFLECTION FACTOR: ${config.dFactor || 'Environmental'}\nEvery Criterion D question must explicitly require students to interact with the "${config.dFactor || 'Environmental'}" factor (moral, ethical, social, economic, political, cultural, or environmental implications).` : '';

  const formulas = `OFFICIAL MYP PHYSICS FORMULAS: ρ=m/V, F=ma, v=u+at, s=ut+½at², v²=u²+2as, p=mv, p=F/A, W=Fs, Eₖ=½mv², g=F/m, ΔEₚ=mgΔh, efficiency=(useful out/total in)×100, P=W/t, I=ΔQ/t, P=IV, V=IR, Vₚ/Vₛ=Nₚ/Nₛ, v=fλ, T=1/f`;

  return `You are an expert IB MYP Physics teacher using the official IB MYP Sciences Guide (April 2023).

═══ ASSESSMENT CONTEXT ═══
Subject: IB MYP Physics | Year Level: ${yl.label}
Chapter: ${config.chapter} | Topic: ${config.topic}
Criterion: ${crit} — ${critNames[crit]}
Global Context: ${config.globalContext || 'Scientific and Technical Innovation'}
Difficulty: ${config.difficulty || 'Mixed'}
${config.context ? '\nTEACHER-PROVIDED CONTEXT:\n' + config.context : ''}
${config.mediaUrls && config.mediaUrls.length > 0 ? '\nMEDIA URLS (embed as <img> tags in content blocks):\n' + config.mediaUrls.map(u => '- ' + u).join('\n') : ''}

═══ CRITERION ${crit} STRANDS FOR ${yl.label.toUpperCase()} ═══
${strandDetails}
${dFactor}

═══ COMMAND TERM RULES ═══
Every question MUST start with an official IB command term appropriate for the strand and year level.
Mark allocation guide: 1 mark: State/List/Identify/Select | 2 marks: Outline/Describe/Apply/Calculate | 3 marks: Explain/Interpret/Analyse | 4+ marks: Evaluate/Justify/Discuss/Formulate/Design
${formulas}

═══ MANDATORY RULES ═══
1. STIMULUS-THEN-QUESTIONS: Every section must have a content block (real-world scenario, 3-6 sentences with specific data) BEFORE its questions. Questions must reference the stimulus.
2. STRAND PROGRESSION: Questions progress strand i→ii→iii within each section.
3. MARK SCHEMES: Every question must have detailed mark allocation ("Award 1 mark for..."). For MCQ: explain why each distractor is wrong.
4. PHYSICS ACCURACY: Use correct SI units, realistic numerical values, Unicode symbols (× ² ³ Δ λ ρ θ π μ Ω).
5. YEAR-LEVEL APPROPRIATE: ${config.yearLevel === '1' ? 'Year 1: simpler terms (outline, state, recall). Familiar situations. Predictions not hypotheses.' : config.yearLevel === '3' ? 'Year 3: intermediate terms (describe, analyse). Familiar and unfamiliar situations. Hypotheses used.' : 'Year 5: advanced terms (explain, evaluate, formulate). Both familiar and unfamiliar. Sophisticated reasoning expected.'}
${crit === 'D' ? '6. CRITERION D: Do NOT use MCQ/TF for strand ii. Use extended written responses requiring students to weigh benefits and limitations.' : ''}

═══ GENERATE ═══
${config.questions.map(q => `- ${q.count}× ${q.type} (${q.marks} marks each)`).join('\n')}
Total marks: ${config.totalMarks}

═══ OUTPUT JSON FORMAT ═══
Return ONLY valid JSON (no markdown, no code fences):
{
  "heading": "descriptive title",
  "sections": [{"id":1,"name":"Section 1"}],
  "blocks": [
    {"mode":"content","type":"Text","sectionId":1,"data":{"text":"HTML stimulus text (3-6 sentences, specific data, real-world context)"}},
    {"mode":"question","type":"MCQ","sectionId":1,"data":{"question":"Command term + question","correct":0,"explanation":"why correct + why distractors wrong"},"ui":{"mcqOptions":["A","B","C","D"]},"meta":{"marks":1,"criterion":"${crit}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"Award 1 mark for A. B wrong because... C wrong because... D wrong because..."}},
    {"mode":"question","type":"True / False","sectionId":1,"data":{"question":"statement","explanation":"why true/false"},"ui":{"tfAnswer":"True"},"meta":{"marks":1,"criterion":"${crit}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"Award 1 mark. True because..."}},
    {"mode":"question","type":"Long Answer","sectionId":1,"data":{"question":"Command term + extended question","explanation":"model answer"},"meta":{"marks":4,"criterion":"${crit}","strand":"iii","commandTerm":"Evaluate","difficulty":"hard","markScheme":"Award 1 mark for... Award 1 mark for..."}},
    {"mode":"question","type":"Fill in the Blank","sectionId":1,"data":{"fillText":"Sentence with [blank]","answers":"answer1, answer2","explanation":"why"},"meta":{"marks":1,"criterion":"${crit}","strand":"i","commandTerm":"State","difficulty":"easy","markScheme":"Accept: answer"}},
    {"mode":"question","type":"Match the Following","sectionId":1,"data":{"question":"Match prompt"},"ui":{"matchPairs":[{"a":"Left","b":"Right"}]},"meta":{"marks":2,"criterion":"${crit}","strand":"i","commandTerm":"Identify","difficulty":"easy","markScheme":"0.5 marks per match"}},
    {"mode":"question","type":"Table","sectionId":1,"data":{"question":"Complete the table","tableHeaders":["Col1","Col2"],"tableRows":3,"tableCols":2,"tablePrefill":[["val",""],["","val"]],"explanation":"solutions"},"meta":{"marks":2,"criterion":"${crit}","strand":"ii","commandTerm":"Calculate","difficulty":"medium","markScheme":"1 mark per correct value"}}
  ]
}

CRITICAL: criterion="${crit}" for ALL questions. Strand must be one of: ${critData.strands.map(s => '"' + s.id + '"').join(', ')}. Total marks = ${config.totalMarks}. Every question text starts with its command term.`;
}

/* ── AI API Call (Groq primary, Gemini fallback) ── */
async function callGemini(prompt) {
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
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
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
      if (statusEl) statusEl.textContent = '⏳ Rate limited — retrying in 10 seconds...';
      await new Promise(r => setTimeout(r, 10000));
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
function collectGenConfig() {
  const chapter = document.getElementById('gen-chapter').value;
  const topic = document.getElementById('gen-topic').value.trim();
  const gc = document.getElementById('gen-gc').value;
  const atl = document.getElementById('gen-atl').value;
  const difficulty = document.getElementById('gen-difficulty').value;
  const yearLevel = document.getElementById('gen-year-level')?.value || '5';
  const dFactor = document.getElementById('gen-dfactor')?.value || 'Environmental';

  // Multi-criteria
  const criteria = [];
  document.querySelectorAll('.gen-crit-cb:checked').forEach(cb => criteria.push(cb.value));
  const criterion = criteria.join(', ');

  const heading = document.getElementById('gen-heading').value.trim() || (topic + ' — Criterion ' + criteria.map(c => c.charAt(0)).join(','));

  if (!chapter) { alert('Please select a Chapter.'); return null; }
  if (!topic) { alert('Please enter a Topic.'); return null; }
  if (criteria.length === 0) { alert('Please select at least one Criterion.'); return null; }

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

  const totalMarks = Number(document.getElementById('gen-total-marks').value || 0);

  return {
    chapter, topic, criterion, criteria, globalContext: gc, atl, difficulty, yearLevel, dFactor, heading, questions, totalMarks,
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
    const result = await callGemini(prompt);

    if (!result || !result.blocks || !Array.isArray(result.blocks)) {
      throw new Error('Invalid response format — missing blocks array');
    }

    status.textContent = '✅ Generated! Saving to library...';
    status.style.color = 'var(--green)';

    // Build set object matching existing schema
    const setId = 'set_' + Date.now();
    const now = Date.now();
    let blockId = 0;

    const processedBlocks = result.blocks.map(block => ({
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
        ...(block.meta || {})
      },
      ui: block.ui || {}
    }));

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
      sections: result.sections || [{ id: 1, name: 'Section 1' }],
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
