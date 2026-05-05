/* ═══════════════════════════════════════════════════
   MYP EXAM BUILDER — Full Featured
   ═══════════════════════════════════════════════════ */

let blocks = [];
let idCounter = 0;
let history = [];
let pendingDeleteIdx = null;

/* ─── Block factory ─── */
function newBlock() {
  return {
    id: ++idCounter,
    mode: null,
    type: null,
    data: {},
    meta: {
      marks: '', difficulty: '', commandTerm: '', strand: '', keywords: '', notes: '',
      hint: '', hintOn: false, markScheme: '', timeMin: ''
    },
    saved: false,
    ui: { state: 'select', uploadMode: 'url', tfAnswer: null, mcqOptions: ['','','',''], mcqMulti: [],
          matchPairs: [{a:'',b:''},{a:'',b:''}], sortItems: ['','',''],
          classifyCategories: ['',''], classifyItems: ['','',''], fillBlanks: ''
    }
  };
}

function pushHistory() {
  history.push(JSON.parse(JSON.stringify(blocks)));
  if (history.length > 30) history.shift();
}

function undoAction() {
  if (history.length === 0) return;
  blocks = history.pop();
  render();
}

/* ─── Block management ─── */
function addBlock() {
  pushHistory();
  blocks.push(newBlock());
  render();
  setTimeout(() => {
    const all = document.querySelectorAll('.block');
    if (all.length) all[all.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

function deleteBlock(i) {
  pendingDeleteIdx = i;
  document.getElementById('confirmMsg').textContent = `Delete Block ${i + 1}? This cannot be undone.`;
  document.getElementById('confirmModal').style.display = 'flex';
}

function confirmDelete() {
  if (pendingDeleteIdx !== null) {
    pushHistory();
    blocks.splice(pendingDeleteIdx, 1);
    pendingDeleteIdx = null;
    render();
  }
  closeModal();
}

function closeModal() {
  document.getElementById('confirmModal').style.display = 'none';
  pendingDeleteIdx = null;
}

function setMode(i, mode) {
  blocks[i].mode = mode;
  blocks[i].type = null;
  blocks[i].saved = false;
  blocks[i].ui.state = 'select';
  render();
}

/* ─── Main render ─── */
function render() {
  let html = '';
  blocks.forEach((b, i) => {
    const modeLabel = b.saved
      ? `<span class="badge ${b.mode === 'content' ? 'blue' : ''}" style="margin-right:6px;">${b.mode === 'content' ? '📄 Content' : '❓ Question'}: ${b.type || ''}</span>`
      : `Block ${i + 1}`;
    html += `
    <div class="block" id="block-${i}">
      <div class="block-header">
        <span class="block-label">${modeLabel}</span>
        <div class="block-actions">
          ${b.saved ? `<button class="sm-btn primary" onclick="editBlock(${i})">✏️ Edit</button>` : ''}
          <button class="sm-btn danger" onclick="deleteBlock(${i})">✕ Delete</button>
        </div>
      </div>
      ${!b.saved ? `
      <div class="mode-tabs">
        <button class="tab ${b.mode === 'content' ? 'active' : ''}" onclick="setMode(${i},'content')">📄 Content</button>
        <button class="tab ${b.mode === 'question' ? 'active' : ''}" onclick="setMode(${i},'question')">❓ Question</button>
      </div>` : ''}
      <div id="inner-${i}"></div>
    </div>`;
  });

  document.getElementById('builder').innerHTML = html;
  blocks.forEach((b, i) => renderInner(i));
  updateStructureView();

  // Re-init sortable
  try {
    Sortable.create(document.getElementById('builder'), { animation: 150, handle: '.block-header', ghostClass: 'sortable-ghost' });
  } catch(e) {}
}

function editBlock(i) {
  pushHistory();
  blocks[i].saved = false;
  blocks[i].ui.state = 'select';
  render();
}

/* ─── Inner render ─── */
function renderInner(i) {
  const b = blocks[i];
  const el = document.getElementById(`inner-${i}`);
  if (!el) return;

  if (b.saved) {
    el.innerHTML = renderSavedPreview(i);
    return;
  }

  if (!b.mode) {
    el.innerHTML = `<p style="color:var(--text2);font-size:13px;">Select Content or Question above.</p>`;
    return;
  }

  if (b.ui.state === 'select') {
    el.innerHTML = b.mode === 'content' ? contentGrid(i) : questionGrid(i);
    return;
  }

  if (b.ui.state === 'edit') {
    el.innerHTML = b.mode === 'content' ? contentEditorHTML(i) : questionEditorHTML(i);
  }
}

/* ─── Saved preview ─── */
function renderSavedPreview(i) {
  const b = blocks[i];
  const d = b.data;
  let preview = '';

  if (b.mode === 'content') {
    if (b.type === 'Text') preview = `<div style="font-size:13px;">${d.text || '(No text entered)'}</div>`;
    else if (b.type === 'Image') preview = d.url ? `<img src="${d.url}" style="max-width:100%;max-height:200px;border-radius:8px;" onerror="this.style.display='none'">` : `<div style="color:var(--text2);font-size:13px;">Image uploaded</div>`;
    else preview = `<div style="color:var(--text2);font-size:13px;">${b.type} content saved.</div>`;
  } else {
    if (b.type === 'MCQ' || b.type === 'Multiple Select MCQ') {
      const opts = b.ui.mcqOptions.filter(o => o.trim());
      preview = `<div style="font-size:13px;margin-bottom:8px;">${d.question || '(No question)'}</div>` +
        opts.map((o, oi) => `<div style="padding:6px 10px;background:var(--surface2);border-radius:5px;margin-bottom:4px;font-size:12px;">${String.fromCharCode(65+oi)}. ${o}</div>`).join('');
    } else if (b.type === 'True / False') {
      preview = `<div style="font-size:13px;margin-bottom:8px;">${d.question || '(No question)'}</div>
        <div style="font-size:12px;color:var(--text2);">Answer: <strong style="color:var(--text);">${b.ui.tfAnswer || 'Not set'}</strong></div>`;
    } else {
      preview = `<div style="font-size:13px;">${d.question || d.text || '(Saved)'}</div>`;
    }
    if (b.meta.marks) preview += `<div style="margin-top:6px;"><span class="badge">${b.meta.marks} marks</span> <span class="badge">${b.meta.difficulty || 'Difficulty not set'}</span></div>`;
  }

  return `<div class="saved-preview"><strong>${b.mode === 'content' ? '📄' : '❓'} ${b.type}</strong>${preview}</div>`;
}

/* ─── Structure View ─── */
function updateStructureView() {
  const el = document.getElementById('structureView');
  if (!el) return;
  if (blocks.length === 0) { el.innerHTML = '<div style="color:var(--text2);font-size:12px;">No blocks yet.</div>'; return; }
  el.innerHTML = blocks.map((b, i) =>
    `<div class="structure-item ${b.mode === 'content' ? 'content-type' : 'question-type'}" onclick="document.getElementById('block-${i}').scrollIntoView({behavior:'smooth'})">
      ${b.mode === 'content' ? '📄' : '❓'} ${b.type || (b.mode || 'New Block')}
    </div>`
  ).join('');
}

/* ══════════════════════════════════
   CONTENT GRID
══════════════════════════════════ */
function contentGrid(i) {
  const types = [
    {icon:'📝',label:'Text'},    {icon:'🖼️',label:'Image'},   {icon:'🎬',label:'Video'},
    {icon:'📄',label:'PDF'},     {icon:'🎵',label:'Audio'},    {icon:'🔬',label:'Simulation'},
    {icon:'📊',label:'Docs'},    {icon:'📑',label:'PPT'},      {icon:'🗂️',label:'Accordion'}
  ];
  return `<div class="type-grid">${types.map(t =>
    `<div class="type-card" onclick="selectType(${i},'${t.label}','content')"><div class="tc-icon">${t.icon}</div>${t.label}</div>`
  ).join('')}</div>`;
}

/* ══════════════════════════════════
   QUESTION GRID
══════════════════════════════════ */
function questionGrid(i) {
  const types = [
    {icon:'✍️',label:'Long Answer'},   {icon:'🔘',label:'MCQ'},
    {icon:'☑️',label:'Multiple Select MCQ'}, {icon:'✔️',label:'True / False'},
    {icon:'📝',label:'Fill Text'},      {icon:'🔽',label:'Fill Drop Down'},
    {icon:'🔗',label:'Match the Following'},{icon:'🔄',label:'Sort'},
    {icon:'🗂️',label:'Classify'},       {icon:'📊',label:'Table'},
    {icon:'✏️',label:'Drawing'},         {icon:'🏷️',label:'Label Drag'},
    {icon:'🏷️',label:'Label Fill'},      {icon:'📈',label:'Desmos Graph'},
    {icon:'📐',label:'GeoGebra Graph'}
  ];
  return `<div class="type-grid">${types.map(t =>
    `<div class="type-card" onclick="selectType(${i},'${t.label}','question')"><div class="tc-icon">${t.icon}</div>${t.label}</div>`
  ).join('')}</div>`;
}

function selectType(i, type, mode) {
  pushHistory();
  blocks[i].type = type;
  blocks[i].mode = mode;
  blocks[i].ui.state = 'edit';
  render();
}

/* ══════════════════════════════════
   CONTENT EDITOR
══════════════════════════════════ */
function contentEditorHTML(i) {
  const b = blocks[i];
  const t = b.type;
  const um = b.ui.uploadMode;

  let uploadChooser = `
    <div class="upload-chooser">
      <div class="upload-opt ${um==='url'?'active':''}" onclick="setUploadMode(${i},'url')">🔗 URL</div>
      <div class="upload-opt ${um==='file'?'active':''}" onclick="setUploadMode(${i},'file')">💻 Upload</div>
      <div class="upload-opt ${um==='drive'?'active':''}" onclick="setUploadMode(${i},'drive')">☁️ Drive</div>
    </div>
    ${um==='url'?`<input type="url" id="cu-url-${i}" placeholder="Paste ${t} URL here…" value="${b.data.url||''}">`:''}
    ${um==='file'?`<input type="file" id="cu-file-${i}" style="background:var(--surface2);border:1px solid var(--border);padding:8px;border-radius:7px;width:100%;color:var(--text);">`:''}
    ${um==='drive'?`<input type="url" id="cu-drive-${i}" placeholder="Paste Google Drive share link…" value="${b.data.driveUrl||''}">`:''}
  `;

  let inner = '';
  if (t === 'Text') {
    inner = `<textarea id="ct-${i}" placeholder="Enter text content… (supports rich text)" style="min-height:120px;">${b.data.text||''}</textarea>`;
  } else if (t === 'Accordion') {
    inner = `
      <input type="text" id="ca-title-${i}" placeholder="Accordion title…" value="${b.data.title||''}">
      <textarea id="ca-body-${i}" placeholder="Accordion body content…">${b.data.body||''}</textarea>
    `;
  } else {
    inner = uploadChooser;
    if (t === 'Video' || t === 'Simulation') {
      inner += `<div style="color:var(--text2);font-size:12px;margin-top:4px;">💡 Supports YouTube, Vimeo, or direct embed links</div>`;
    }
  }

  return `
    <div class="editor-area">
      <span class="section-label">📄 ${t} Content</span>
      ${inner}
      <div class="action-bar">
        <button class="btn-save" onclick="saveBlock(${i})">💾 Save</button>
        <button class="btn-cancel" onclick="cancelEdit(${i})">Cancel</button>
      </div>
    </div>`;
}

function setUploadMode(i, mode) {
  blocks[i].ui.uploadMode = mode;
  renderInner(i);
}

/* ══════════════════════════════════
   QUESTION EDITOR
══════════════════════════════════ */
function questionEditorHTML(i) {
  const b = blocks[i];
  const t = b.type;
  let body = '';

  /* ── Shared question prompt ── */
  const qPrompt = `
    <textarea id="qprompt-${i}" placeholder="Enter your question here. You can include text, equations (LaTeX), or describe the context…" style="min-height:100px;">${b.data.question||''}</textarea>
    <div class="toggle-row">
      <div class="toggle ${b.ui.hintOn?'on':''}" onclick="toggleHint(${i})"></div>
      <span>Add Hint (optional)</span>
    </div>
    ${b.ui.hintOn?`<div class="hint-box"><textarea id="hint-${i}" placeholder="Hint for students…">${b.meta.hint||''}</textarea></div>`:''}
  `;

  /* ── Metadata strip ── */
  const metaStrip = `
    <div class="meta-strip">
      <div>
        <label>Marks</label>
        <input type="number" id="meta-marks-${i}" value="${b.meta.marks}" placeholder="e.g. 4" min="1">
      </div>
      <div>
        <label>Difficulty</label>
        <select id="meta-diff-${i}">
          <option value="" ${!b.meta.difficulty?'selected':''}>Select</option>
          ${['Easy','Medium','Hard'].map(d=>`<option ${b.meta.difficulty===d?'selected':''}>${d}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>Command Term</label>
        <select id="meta-cmd-${i}">
          <option value="">Select</option>
          ${['Define','State','Describe','Explain','Justify','Analyse','Evaluate','Discuss','Compare','Calculate','Derive','Show','Sketch'].map(d=>`<option ${b.meta.commandTerm===d?'selected':''}>${d}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>Criterion Strand</label>
        <select id="meta-strand-${i}">
          <option value="">Select</option>
          ${['i','ii','iii','iv'].map(s=>`<option ${b.meta.strand===s?'selected':''}>${s}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>Time (min)</label>
        <input type="number" id="meta-time-${i}" value="${b.meta.timeMin}" placeholder="e.g. 5">
      </div>
      <div>
        <label>Keywords / Tags</label>
        <input type="text" id="meta-kw-${i}" value="${b.meta.keywords}" placeholder="comma separated">
      </div>
      <div style="grid-column:1/-1;">
        <label>Internal Notes (teacher only)</label>
        <input type="text" id="meta-notes-${i}" value="${b.meta.notes}" placeholder="Not shown to students">
      </div>
    </div>`;

  /* ── Mark Scheme ── */
  const markScheme = `
    <div class="mark-scheme">
      <label>📗 Mark Scheme <span style="font-weight:normal;color:var(--text2)">(optional)</span></label>
      <textarea id="ms-${i}" placeholder="Expected answer points, rubric, model solution…">${b.meta.markScheme||''}</textarea>
    </div>`;

  /* ── Question type bodies ── */
  if (t === 'Long Answer') {
    body = `
      ${qPrompt}
      <div class="row">
        <div class="form-group" style="flex:1">
          <label style="font-size:11px;color:var(--text2)">Word Limit (optional)</label>
          <input type="number" id="la-wl-${i}" placeholder="e.g. 200" value="${b.data.wordLimit||''}">
        </div>
        <div class="form-group" style="flex:1">
          <label style="font-size:11px;color:var(--text2)">Response Format</label>
          <select id="la-fmt-${i}">
            ${['Free Text','Paragraph','Bullet Points','Step-wise'].map(f=>`<option ${b.data.format===f?'selected':''}>${f}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="toggle-row">
        <input type="checkbox" id="la-rubric-${i}" ${b.data.hasRubric?'checked':''} style="accent-color:var(--accent)">
        <span>Attach Rubric</span>
      </div>
      ${metaStrip}${markScheme}
    `;
  } else if (t === 'MCQ') {
    body = `
      ${qPrompt}
      <div class="mcq-options" id="mcq-opts-${i}">
        ${b.ui.mcqOptions.map((o, oi) => `
          <div class="mcq-option-row">
            <input type="radio" name="mcq-correct-${i}" value="${oi}" ${b.data.correct==oi?'checked':''}>
            <input type="text" id="mcq-o-${i}-${oi}" placeholder="Option ${String.fromCharCode(65+oi)}" value="${o}">
            <button class="remove-btn" onclick="removeOption(${i},${oi})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addOption(${i})" style="margin-top:4px;">+ Add Option</button>
      <div class="toggle-row" style="margin-top:8px;">
        <input type="checkbox" id="mcq-rand-${i}" ${b.data.randomize?'checked':''} style="accent-color:var(--accent)">
        <span>Randomise options</span>
        <input type="checkbox" id="mcq-neg-${i}" ${b.data.negMark?'checked':''} style="accent-color:var(--red);margin-left:16px;">
        <span>Negative marking</span>
      </div>
      <textarea id="mcq-exp-${i}" placeholder="Explanation / answer rationale (shown after submission)…">${b.data.explanation||''}</textarea>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Multiple Select MCQ') {
    body = `
      ${qPrompt}
      <div class="mcq-options" id="mmcq-opts-${i}">
        ${b.ui.mcqOptions.map((o, oi) => `
          <div class="mcq-option-row">
            <input type="checkbox" name="mmcq-correct-${i}" value="${oi}" ${(b.data.correct||[]).includes(oi)?'checked':''}>
            <input type="text" id="mmcq-o-${i}-${oi}" placeholder="Option ${String.fromCharCode(65+oi)}" value="${o}">
            <button class="remove-btn" onclick="removeOption(${i},${oi})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addOption(${i})" style="margin-top:4px;">+ Add Option</button>
      <div class="row" style="margin-top:8px;">
        <div>
          <label style="font-size:11px;color:var(--text2)">Partial Marking</label>
          <select id="mmcq-pm-${i}">
            ${['All-or-nothing','Partial credit','Negative marking'].map(p=>`<option>${p}</option>`).join('')}
          </select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text2)">Min. selections required</label>
          <input type="number" id="mmcq-min-${i}" placeholder="e.g. 2" value="${b.data.minSelect||''}">
        </div>
      </div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'True / False') {
    const ans = b.ui.tfAnswer;
    body = `
      ${qPrompt}
      <div class="tf-options">
        <div class="tf-opt true-opt ${ans==='True'?'selected':''}" onclick="setTF(${i},'True')">✅ True</div>
        <div class="tf-opt false-opt ${ans==='False'?'selected':''}" onclick="setTF(${i},'False')">❌ False</div>
      </div>
      <div class="toggle-row" style="margin-top:8px;">
        <input type="checkbox" id="tf-justify-${i}" ${b.data.justify?'checked':''} style="accent-color:var(--accent)">
        <span>Require justification (hybrid question)</span>
      </div>
      <textarea id="tf-exp-${i}" placeholder="Explanation…">${b.data.explanation||''}</textarea>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Fill Text') {
    body = `
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Use [blank] to mark blank positions in your text.</div>
      <textarea id="ft-text-${i}" placeholder="e.g. The [blank] of a triangle is 180°." style="min-height:80px;">${b.data.fillText||''}</textarea>
      <input type="text" id="ft-ans-${i}" placeholder="Correct answers (comma separated, e.g. sum, total)" value="${b.data.answers||''}">
      <div class="toggle-row">
        <input type="checkbox" id="ft-case-${i}" ${b.data.caseSensitive?'checked':''} style="accent-color:var(--accent)">
        <span>Case sensitive</span>
        <input type="checkbox" id="ft-syn-${i}" ${b.data.synonyms?'checked':''} style="accent-color:var(--accent);margin-left:16px;">
        <span>Accept synonyms</span>
        <input type="checkbox" id="ft-manual-${i}" ${b.data.manualGrade?'checked':''} style="accent-color:var(--yellow);margin-left:16px;">
        <span>Manual grading</span>
      </div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Fill Drop Down') {
    body = `
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Use [blank] in the text. Provide options as comma-separated values.</div>
      <textarea id="fdd-text-${i}" placeholder="e.g. Water boils at [blank] degrees." style="min-height:80px;">${b.data.fillText||''}</textarea>
      <input type="text" id="fdd-opts-${i}" placeholder="Dropdown options (e.g. 50, 75, 100, 150)" value="${b.data.options||''}">
      <input type="text" id="fdd-ans-${i}" placeholder="Correct answer(s)" value="${b.data.answers||''}">
      <div class="toggle-row">
        <input type="checkbox" id="fdd-shuffle-${i}" ${b.data.shuffle?'checked':''} style="accent-color:var(--accent)">
        <span>Shuffle options</span>
      </div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Match the Following') {
    body = `
      ${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Enter matching pairs:</div>
      <div class="match-pairs" id="match-pairs-${i}">
        ${b.ui.matchPairs.map((p, pi) => `
          <div class="match-pair">
            <input type="text" id="ma-a-${i}-${pi}" placeholder="Column A" value="${p.a}">
            <div class="arrow">→</div>
            <input type="text" id="ma-b-${i}-${pi}" placeholder="Column B" value="${p.b}">
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addMatchPair(${i})" style="margin-top:4px;">+ Add Pair</button>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Sort') {
    body = `
      ${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Enter items in correct order:</div>
      <div id="sort-items-${i}">
        ${b.ui.sortItems.map((item, si) => `
          <div style="display:flex;gap:8px;margin-bottom:6px;align-items:center;">
            <span style="color:var(--text2);font-size:12px;width:16px;">${si+1}.</span>
            <input type="text" id="sort-${i}-${si}" placeholder="Item ${si+1}" value="${item}" style="flex:1;">
            <button class="remove-btn" onclick="removeSortItem(${i},${si})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addSortItem(${i})" style="margin-top:4px;">+ Add Item</button>
      <div class="toggle-row" style="margin-top:8px;">
        <input type="checkbox" id="sort-sb-${i}" ${b.data.stepBased?'checked':''} style="accent-color:var(--accent)">
        <span>Step-based marking</span>
      </div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Classify') {
    body = `
      ${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Categories:</div>
      <div id="classify-cats-${i}">
        ${b.ui.classifyCategories.map((c, ci) => `
          <div style="display:flex;gap:8px;margin-bottom:6px;">
            <input type="text" id="cc-${i}-${ci}" placeholder="Category ${ci+1}" value="${c}" style="flex:1;">
            <button class="remove-btn" onclick="removeCat(${i},${ci})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addCat(${i})">+ Add Category</button>
      <div style="font-size:12px;color:var(--text2);margin:10px 0 6px;">Items to classify:</div>
      <div id="classify-items-${i}">
        ${b.ui.classifyItems.map((item, ii2) => `
          <div style="display:flex;gap:8px;margin-bottom:6px;">
            <input type="text" id="ci-${i}-${ii2}" placeholder="Item ${ii2+1}" value="${item}" style="flex:1;">
            <button class="remove-btn" onclick="removeClassifyItem(${i},${ii2})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addClassifyItem(${i})">+ Add Item</button>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Table') {
    body = `
      ${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Table (editable by student):</div>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          ${['Header 1','Header 2','Header 3'].map(h=>`<th style="border:1px solid var(--border);padding:6px;background:var(--surface2);">${h}</th>`).join('')}
        </tr>
        ${[0,1,2].map(r=>`<tr>${[0,1,2].map(c=>`<td style="border:1px solid var(--border);padding:4px;"><input type="text" placeholder="" style="background:transparent;border:none;width:100%;color:var(--text);padding:2px;font-size:12px;"></td>`).join('')}</tr>`).join('')}
      </table>
      <div style="font-size:11px;color:var(--text2);margin-top:4px;">💡 Full table builder with dynamic rows/columns coming soon.</div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Drawing') {
    body = `
      ${qPrompt}
      <div style="border:1px dashed var(--border);border-radius:8px;height:200px;display:flex;align-items:center;justify-content:center;color:var(--text2);font-size:13px;background:var(--surface2);">
        🖊️ Drawing canvas will appear here (canvas tool with free draw, ruler, vectors)
      </div>
      <div class="toggle-row" style="margin-top:8px;">
        <input type="checkbox" id="draw-upload-${i}" style="accent-color:var(--accent)">
        <span>Allow upload + annotate</span>
        <input type="checkbox" id="draw-physics-${i}" style="accent-color:var(--accent);margin-left:16px;">
        <span>Physics mode (vectors, rays)</span>
      </div>
      ${metaStrip}${markScheme}`;
  } else if (t === 'Label Drag' || t === 'Label Fill') {
    const isDrag = t === 'Label Drag';
    body = `
      ${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Upload or link a diagram image:</div>
      <input type="url" id="ld-img-${i}" placeholder="Image URL for diagram…" value="${b.data.imageUrl||''}">
      <input type="text" id="ld-labels-${i}" placeholder="Labels (comma separated): e.g. Nucleus, Cell Wall, Vacuole" value="${b.data.labels||''}">
      ${isDrag ? `<div style="font-size:11px;color:var(--text2);margin-top:4px;">💡 Drag-and-drop zones will be mapped visually in the full editor.</div>` :
        `<div class="toggle-row" style="margin-top:6px;"><input type="checkbox" id="lf-suggest-${i}" style="accent-color:var(--accent)"><span>Auto-suggestion for students</span></div>`}
      ${metaStrip}${markScheme}`;
  } else if (t === 'Desmos Graph' || t === 'GeoGebra Graph') {
    const isDes = t === 'Desmos Graph';
    body = `
      ${qPrompt}
      <div style="border:1px solid var(--border);border-radius:8px;height:300px;display:flex;align-items:center;justify-content:center;color:var(--text2);font-size:13px;background:var(--surface2);">
        📈 ${isDes ? 'Desmos' : 'GeoGebra'} graph will be embedded here
      </div>
      <input type="text" id="graph-prefill-${i}" placeholder="Pre-loaded expression / file URL (optional)" value="${b.data.prefill||''}">
      <div class="toggle-row" style="margin-top:6px;">
        <input type="checkbox" id="graph-plot-${i}" ${b.data.studentPlot?'checked':''} style="accent-color:var(--accent)">
        <span>Allow student plotting</span>
        <input type="checkbox" id="graph-auto-${i}" ${b.data.autoCheck?'checked':''} style="accent-color:var(--green);margin-left:16px;">
        <span>Auto-check graph accuracy</span>
        ${!isDes?`<input type="checkbox" id="graph-phys-${i}" ${b.data.physMode?'checked':''} style="accent-color:var(--yellow);margin-left:16px;"><span>Physics mode</span>`:''}
      </div>
      ${metaStrip}${markScheme}`;
  } else {
    body = `
      ${qPrompt}
      ${metaStrip}${markScheme}`;
  }

  return `
    <div class="editor-area" onclick="editorClickAway(event,${i})">
      <span class="section-label">❓ ${t}</span>
      ${body}
      <div class="action-bar">
        <button class="btn-save" onclick="saveBlock(${i})">💾 Save Question</button>
        <button class="btn-cancel" onclick="cancelEdit(${i})">Cancel</button>
      </div>
    </div>`;
}

/* ─── MCQ helpers ─── */
function addOption(i) {
  if (blocks[i].ui.mcqOptions.length >= 8) return;
  blocks[i].ui.mcqOptions.push('');
  renderInner(i);
}
function removeOption(i, oi) {
  blocks[i].ui.mcqOptions.splice(oi, 1);
  renderInner(i);
}

/* ─── TF helper ─── */
function setTF(i, val) {
  blocks[i].ui.tfAnswer = val;
  renderInner(i);
}

/* ─── Match helper ─── */
function addMatchPair(i) {
  blocks[i].ui.matchPairs.push({ a: '', b: '' });
  renderInner(i);
}

/* ─── Sort helpers ─── */
function addSortItem(i) { blocks[i].ui.sortItems.push(''); renderInner(i); }
function removeSortItem(i, si) { blocks[i].ui.sortItems.splice(si, 1); renderInner(i); }

/* ─── Classify helpers ─── */
function addCat(i) { blocks[i].ui.classifyCategories.push(''); renderInner(i); }
function removeCat(i, ci) { blocks[i].ui.classifyCategories.splice(ci, 1); renderInner(i); }
function addClassifyItem(i) { blocks[i].ui.classifyItems.push(''); renderInner(i); }
function removeClassifyItem(i, ii2) { blocks[i].ui.classifyItems.splice(ii2, 1); renderInner(i); }

/* ─── Hint toggle ─── */
function toggleHint(i) {
  blocks[i].ui.hintOn = !blocks[i].ui.hintOn;
  renderInner(i);
}

/* ─── Save block ─── */
function saveBlock(i) {
  const b = blocks[i];
  pushHistory();

  // Collect meta
  const pick = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };
  b.meta.marks = pick(`meta-marks-${i}`);
  b.meta.difficulty = pick(`meta-diff-${i}`);
  b.meta.commandTerm = pick(`meta-cmd-${i}`);
  b.meta.strand = pick(`meta-strand-${i}`);
  b.meta.timeMin = pick(`meta-time-${i}`);
  b.meta.keywords = pick(`meta-kw-${i}`);
  b.meta.notes = pick(`meta-notes-${i}`);
  b.meta.markScheme = pick(`ms-${i}`);
  b.meta.hint = pick(`hint-${i}`);

  // Collect data by type
  const t = b.type;
  if (b.mode === 'content') {
    if (t === 'Text') b.data.text = pick(`ct-${i}`);
    else if (t === 'Accordion') { b.data.title = pick(`ca-title-${i}`); b.data.body = pick(`ca-body-${i}`); }
    else {
      b.data.url = pick(`cu-url-${i}`) || pick(`cu-drive-${i}`);
    }
  } else {
    b.data.question = pick(`qprompt-${i}`);
    if (t === 'MCQ') {
      b.ui.mcqOptions = b.ui.mcqOptions.map((_, oi) => pick(`mcq-o-${i}-${oi}`));
      const radio = document.querySelector(`input[name="mcq-correct-${i}"]:checked`);
      b.data.correct = radio ? parseInt(radio.value) : null;
      b.data.explanation = pick(`mcq-exp-${i}`);
    } else if (t === 'Multiple Select MCQ') {
      b.ui.mcqOptions = b.ui.mcqOptions.map((_, oi) => pick(`mmcq-o-${i}-${oi}`));
      b.data.correct = Array.from(document.querySelectorAll(`input[name="mmcq-correct-${i}"]:checked`)).map(c => parseInt(c.value));
    } else if (t === 'Fill Text') {
      b.data.fillText = pick(`ft-text-${i}`);
      b.data.answers = pick(`ft-ans-${i}`);
    } else if (t === 'Fill Drop Down') {
      b.data.fillText = pick(`fdd-text-${i}`);
      b.data.options = pick(`fdd-opts-${i}`);
      b.data.answers = pick(`fdd-ans-${i}`);
    } else if (t === 'Match the Following') {
      b.ui.matchPairs = b.ui.matchPairs.map((_, pi) => ({
        a: pick(`ma-a-${i}-${pi}`), b: pick(`ma-b-${i}-${pi}`)
      }));
    } else if (t === 'Long Answer') {
      b.data.wordLimit = pick(`la-wl-${i}`);
      b.data.format = pick(`la-fmt-${i}`);
    } else if (t === 'Desmos Graph' || t === 'GeoGebra Graph') {
      b.data.prefill = pick(`graph-prefill-${i}`);
    } else if (t === 'Label Drag' || t === 'Label Fill') {
      b.data.imageUrl = pick(`ld-img-${i}`);
      b.data.labels = pick(`ld-labels-${i}`);
    } else if (t === 'Sort') {
      b.ui.sortItems = b.ui.sortItems.map((_, si) => pick(`sort-${i}-${si}`));
    }
  }

  b.saved = true;
  b.ui.state = 'saved';
  render();
}

function cancelEdit(i) {
  blocks[i].ui.state = 'select';
  blocks[i].type = null;
  blocks[i].saved = false;
  render();
}

function editorClickAway(e, i) {
  // Only go back if clicking the overlay itself, not child inputs
  // (prevented intentionally — keeping full editor open)
}

/* ─── Save all ─── */
function saveAll(){

  let set = {
    id: Date.now(),
    heading: document.getElementById("heading")?.value || "Untitled",
    chapter: document.getElementById("chapter")?.value || "",
    topic: document.getElementById("topic")?.value || "",
    criterion: document.getElementById("criterion")?.value || "",
    blocks: blocks
  };

  console.log("SAVING SET:", set);   // 👈 ADD THIS

  DB.push(set);

  localStorage.setItem("MYP_DB", JSON.stringify(DB));

  console.log("LOCAL STORAGE:", localStorage.getItem("MYP_DB")); // 👈 ADD THIS

  alert("Saved!");
}

/* ─── Preview ─── */
function previewStudent() {
  const win = window.open('', '_blank');
  win.document.write(`<html><head><title>Student Preview</title><style>body{font-family:sans-serif;padding:30px;background:#f6f8fb;} .block{background:white;border-radius:10px;padding:20px;margin-bottom:16px;}</style></head><body><h2>Student Preview</h2>`);
  blocks.filter(b => b.saved).forEach((b, i) => {
    win.document.write(`<div class="block"><b>${b.type}</b><p>${b.data.question || b.data.text || b.data.title || ''}</p></div>`);
  });
  win.document.write(`</body></html>`);
  win.document.close();
}

/* ─── Export ─── */
function exportPDF() { alert('PDF export: integration with print/PDF library coming soon.'); }

/* ─── Init ─── */
// addBlock() is called from HTML after proceedToBuilder()
