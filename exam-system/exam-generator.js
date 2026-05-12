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

/* ── Build Prompt ── */
function buildGeneratorPrompt(config) {
  return `You are an expert IB MYP Physics teacher creating an assessment question set.

CONTEXT:
- Subject: IB MYP Physics
- Chapter: ${config.chapter}
- Topic: ${config.topic}
- Criteria: ${config.criterion}
- Global Context: ${config.globalContext || 'Not specified'}
- Difficulty: ${config.difficulty}
- Target audience: Grade 9-10 students (ages 14-16)
${config.context ? `\nTEACHER-PROVIDED CONTEXT (use this as stimulus material in questions):\n${config.context}` : ''}
${config.mediaUrls && config.mediaUrls.length > 0 ? `\nMEDIA URLS (embed these as <img> tags in content blocks or questions):\n${config.mediaUrls.map(u => '- ' + u).join('\n')}\nFor each media URL, create a content block with: "text": "<img src=\\"URL\\" style=\\"max-width:100%;border-radius:8px;\\" /><br>Description of what the image shows"` : ''}

TASK:
Generate a complete question set with the following structure:

${config.questions.map(q => `- ${q.count}x ${q.type} questions (${q.marks} marks each)`).join('\n')}

Total marks target: ${config.totalMarks}

REQUIREMENTS:
${config.includeContent ? '- Include 1-2 stimulus/content text blocks before questions where appropriate (e.g., a scenario, experiment description, or data)' : '- Do NOT include content blocks'}
${config.includeMarkSchemes ? '- Include a mark scheme for every question' : ''}
${config.includeExplanations ? '- Include an explanation for every question' : ''}
${config.includeHints ? '- Include a hint for every question' : ''}

IB MYP CRITERIA ALIGNMENT:
- Criterion A (Knowing & Understanding): factual recall, concept application, formula use
- Criterion B (Inquiring & Designing): experimental design, hypothesis, variables
- Criterion C (Processing & Evaluating): data analysis, graph interpretation, conclusions
- Criterion D (Reflecting on Impacts): real-world applications, ethics, sustainability

QUESTION TYPE SPECIFICATIONS:
- MCQ: Exactly 4 options. Specify correct answer index (0-3). Distractors must be plausible.
- True / False: Clear statement. Specify correct answer as "True" or "False".
- Long Answer: Multi-paragraph response. Structured mark scheme with point allocation.
- Fill Text: Use [blank] marker in the sentence. Provide correct fill text in "answers" field.
- Match the Following: 4-6 pairs. Column A and Column B items.
- Table: Specify headers array, number of rows, cols.
- Multi-Dropdown: 3-5 rows with labels and shared dropdown options. Specify correct per row.

OUTPUT FORMAT — Return a JSON object with this EXACT structure:
{
  "heading": "string — the question set title",
  "sections": [{"id": 1, "name": "Section 1"}],
  "blocks": [
    {
      "mode": "content",
      "type": "Text",
      "sectionId": 1,
      "data": {"text": "HTML string — stimulus text"}
    },
    {
      "mode": "question",
      "type": "MCQ",
      "sectionId": 1,
      "data": {"question": "HTML question text", "correct": 0, "explanation": "string"},
      "ui": {"mcqOptions": ["Option A", "Option B", "Option C", "Option D"]},
      "meta": {"marks": 1, "criterion": "A – Knowing & Understanding", "markScheme": "Award 1 mark for correct answer.", "hint": "", "difficulty": "medium"}
    },
    {
      "mode": "question",
      "type": "True / False",
      "sectionId": 1,
      "data": {"question": "Statement text", "explanation": "string"},
      "ui": {"tfAnswer": "True"},
      "meta": {"marks": 1, "criterion": "A – Knowing & Understanding", "markScheme": "Award 1 mark.", "difficulty": "easy"}
    },
    {
      "mode": "question",
      "type": "Long Answer",
      "sectionId": 1,
      "data": {"question": "Question text", "explanation": "string"},
      "meta": {"marks": 4, "criterion": "A – Knowing & Understanding", "markScheme": "1 mark for X, 1 mark for Y...", "difficulty": "hard"}
    },
    {
      "mode": "question",
      "type": "Fill Text",
      "sectionId": 1,
      "data": {"fillText": "Sentence with [blank] marker.", "answers": "correct answer", "explanation": "string"},
      "meta": {"marks": 1, "criterion": "A – Knowing & Understanding", "markScheme": "Accept answer.", "difficulty": "easy"}
    },
    {
      "mode": "question",
      "type": "Match the Following",
      "sectionId": 1,
      "data": {"question": "Match prompt"},
      "ui": {"matchPairs": [{"a": "Left item", "b": "Right item"}]},
      "meta": {"marks": 2, "criterion": "A – Knowing & Understanding", "markScheme": "0.5 marks per match", "difficulty": "medium"}
    },
    {
      "mode": "question",
      "type": "Multi-Dropdown",
      "sectionId": 1,
      "data": {"question": "Question text", "explanation": "string"},
      "ui": {"mdOptions": "Option1, Option2, Option3", "mdRows": [{"label": "Row label", "correct": "Option1"}]},
      "meta": {"marks": 2, "criterion": "A – Knowing & Understanding", "markScheme": "1 mark per correct", "difficulty": "medium"}
    }
  ]
}

IMPORTANT:
- Generate ONLY valid JSON, no markdown, no code fences
- Every block must have mode, type, sectionId, data, and meta (for questions)
- Question text can use basic HTML: <b>, <i>, <br>, <sub>, <sup>
- For formulas use Unicode: × ÷ ² ³ Δ λ ρ θ π
- Make questions curriculum-appropriate for IB MYP Grade 9-10
- Ensure mark schemes are detailed enough for consistent grading
- Total marks across all questions should equal ${config.totalMarks}`;
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
    chapter, topic, criterion, criteria, globalContext: gc, atl, difficulty, heading, questions, totalMarks,
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
