/* ═══════════════════════════════════════════════════
   MYP EXAM BUILDER — v4 with All Question Types + Drawing
   ═══════════════════════════════════════════════════ */

let DB = JSON.parse(localStorage.getItem("MYP_DB")) || [];
let blocks = [];
let sections = [{ id: 1, name: 'Section 1' }];
let idCounter = 0;
let sectionCounter = 1;
let history = [];
let pendingDeleteIdx = null;
let pendingDeleteSectionId = null;

/* ─── Rich text toolbar ─── */
function richTextToolbar(id) {
  return `
  <div class="rich-toolbar">
    <button type="button" onclick="fmt('bold')" title="Bold"><b>B</b></button>
    <button type="button" onclick="fmt('italic')" title="Italic"><i>I</i></button>
    <button type="button" onclick="fmt('underline')" title="Underline"><u>U</u></button>
    <button type="button" onclick="fmtSup()" title="Superscript">x²</button>
    <button type="button" onclick="fmtSub()" title="Subscript">x₂</button>
    <span class="rtb-sep"></span>
    <button type="button" onclick="insertSymbol('√')" title="Square root">√</button>
    <button type="button" onclick="insertSymbol('π')" title="Pi">π</button>
    <button type="button" onclick="insertSymbol('Δ')" title="Delta">Δ</button>
    <button type="button" onclick="insertSymbol('°')" title="Degree">°</button>
    <button type="button" onclick="insertSymbol('×')" title="Times">×</button>
    <button type="button" onclick="insertSymbol('÷')" title="Divide">÷</button>
    <button type="button" onclick="insertSymbol('≈')" title="Approx">≈</button>
    <button type="button" onclick="insertSymbol('≠')" title="Not equal">≠</button>
    <button type="button" onclick="insertSymbol('≤')" title="Less or equal">≤</button>
    <button type="button" onclick="insertSymbol('≥')" title="Greater or equal">≥</button>
    <span class="rtb-sep"></span>
    <button type="button" onclick="insertSymbol('α')" title="Alpha">α</button>
    <button type="button" onclick="insertSymbol('β')" title="Beta">β</button>
    <button type="button" onclick="insertSymbol('γ')" title="Gamma">γ</button>
    <button type="button" onclick="insertSymbol('λ')" title="Lambda">λ</button>
    <button type="button" onclick="insertSymbol('μ')" title="Mu">μ</button>
    <button type="button" onclick="insertSymbol('Ω')" title="Omega">Ω</button>
        <button type="button" onclick="insertSymbol('θ')" title="Theta">θ</button>
    <span class="rtb-sep"></span>
    <button type="button" onclick="insertImageInEditor()" title="Insert Image URL">🖼️</button>
    <button type="button" onclick="insertImageFileInEditor()" title="Upload Image">📁</button>
    <button type="button" onclick="insertTableInEditor()" title="Insert Table">📊</button>
  </div>
  <div class="rich-editor" id="${id}" contenteditable="true" data-placeholder="Write here…"></div>`;
    <button type="button" onclick="insertImageFileInEditor()" title="Upload Image">📁</button>
  </div>
  <div class="rich-editor" id="${id}" contenteditable="true" data-placeholder="Write here…"></div>`;
}
let _lastFocusedEditor = null;
document.addEventListener('focusin', e => {
  if (e.target.classList.contains('rich-editor')) _lastFocusedEditor = e.target;
});

function fmt(cmd) {
  if (_lastFocusedEditor) { _lastFocusedEditor.focus(); document.execCommand(cmd, false, null); }
}
function fmtSup() { if (_lastFocusedEditor) { _lastFocusedEditor.focus(); document.execCommand('superscript', false, null); } }
function fmtSub() { if (_lastFocusedEditor) { _lastFocusedEditor.focus(); document.execCommand('subscript', false, null); } }
function insertSymbol(sym) {
  if (_lastFocusedEditor) {
    _lastFocusedEditor.focus();
    document.execCommand('insertText', false, sym);
  }
}

function getRichContent(id) {
  const el = document.getElementById(id);
  return el ? el.innerHTML : '';
}
function setRichContent(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = val || '';
}

/* ─── Per-question criteria strip ─── */
function criteriaMarksStrip(i) {
  const b = blocks[i];
  return `
  <div class="q-criteria-strip">
    <div class="crit-strip-item">
      <label>Criterion</label>
      <select id="qcrit-${i}" class="crit-sel">
        <option value="">—</option>
        <option ${b.meta.criterion==='A'?'selected':''}>A</option>
        <option ${b.meta.criterion==='B'?'selected':''}>B</option>
        <option ${b.meta.criterion==='C'?'selected':''}>C</option>
        <option ${b.meta.criterion==='D'?'selected':''}>D</option>
      </select>
    </div>
    <div class="crit-strip-item">
      <label>Strand</label>
      <select id="qstrand-${i}" class="crit-sel">
        <option value="">—</option>
        <option ${b.meta.strand==='i'?'selected':''}>i</option>
        <option ${b.meta.strand==='ii'?'selected':''}>ii</option>
        <option ${b.meta.strand==='iii'?'selected':''}>iii</option>
        <option ${b.meta.strand==='iv'?'selected':''}>iv</option>
      </select>
    </div>
    <div class="crit-strip-item">
      <label>Marks</label>
      <input type="number" id="qmarks-${i}" class="crit-marks" value="${b.meta.marks||''}" placeholder="pts" min="1">
    </div>
  </div>`;
}

/* ─── Block factory ─── */
function newBlock(sectionId) {
  return {
    id: ++idCounter,
    sectionId: sectionId || sections[0].id,
    mode: null, type: null, data: {},
    meta: {
      marks: '', difficulty: '', commandTerm: '', criterion: '', strand: '',
      answerType: 'Long answer', keywords: '', notes: '',
      hint: '', hintOn: false, markScheme: '', timeMin: ''
    },
    saved: false,
    ui: {
      state: 'select', uploadMode: 'url', tfAnswer: null,
      mcqOptions: ['','','',''], mcqMulti: [],
      matchPairs: [{a:'',b:''},{a:'',b:''}],
      sortItems: ['','',''],
      classifyCategories: ['',''], classifyItems: ['','',''], fillBlanks: ''
    }
  };
}

function pushHistory() {
  history.push({ blocks: JSON.parse(JSON.stringify(blocks)), sections: JSON.parse(JSON.stringify(sections)) });
  if (history.length > 30) history.shift();
}

function undoAction() {
  if (history.length === 0) return;
  const h = history.pop();
  blocks = h.blocks;
  sections = h.sections;
  render();
}

/* ─── Section management ─── */
function addSection() {
  pushHistory();
  sectionCounter++;
  const newId = sectionCounter;
  sections.push({ id: newId, name: 'Section ' + (sections.length + 1) });
  addBlock(newId);
}

function renameSection(sectionId) {
  const sec = sections.find(s => s.id === sectionId);
  if (!sec) return;
  const name = prompt('Enter section name:', sec.name);
  if (name && name.trim()) {
    pushHistory();
    sec.name = name.trim();
    render();
  }
}

function deleteSectionConfirm(sectionId) {
  const sec = sections.find(s => s.id === sectionId);
  const bCount = blocks.filter(b => b.sectionId === sectionId).length;
  if (!confirm(`Delete "${sec?.name}" and its ${bCount} block(s)?`)) return;
  pushHistory();
  blocks = blocks.filter(b => b.sectionId !== sectionId);
  sections = sections.filter(s => s.id !== sectionId);
  if (sections.length === 0) sections = [{ id: ++sectionCounter, name: 'Section 1' }];
  render();
}

/* ─── Block management ─── */
function addBlock(sectionId) {
  pushHistory();
  const sid = sectionId || (sections.length ? sections[sections.length - 1].id : 1);
  blocks.push(newBlock(sid));
  render();
  setTimeout(() => {
    const all = document.querySelectorAll('.block');
    if (all.length) all[all.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 60);
}

function deleteBlock(i) {
  pendingDeleteIdx = i;
  document.getElementById('confirmMsg').textContent = `Delete this block? This cannot be undone.`;
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

/* ─── Question numbering helper ─── */
function getQuestionLabel(blockIndex) {
  const b = blocks[blockIndex];
  if (b.mode !== 'question') return null;
  const sec = sections.find(s => s.id === b.sectionId);
  const secIdx = sections.indexOf(sec) + 1;
  const qInSection = blocks.filter((blk, j) => blk.mode === 'question' && blk.sectionId === b.sectionId && j <= blockIndex).length;
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l'];
  return `${secIdx}(${letters[qInSection - 1] || qInSection})`;
}

/* ─── Main render ─── */
function render() {
  let html = '';
  sections.forEach(sec => {
    const secBlocks = blocks.filter(b => b.sectionId === sec.id);
    html += `
    <div class="section-wrapper" id="section-${sec.id}">
      <div class="section-header">
        <span class="section-name" onclick="renameSection(${sec.id})">✏️ ${sec.name}</span>
        <div style="display:flex;gap:6px;">
          <button class="sm-btn" onclick="addBlock(${sec.id})" style="font-size:11px;">+ Add Block</button>
          ${sections.length > 1 ? `<button class="sm-btn danger" onclick="deleteSectionConfirm(${sec.id})" style="font-size:11px;">✕ Section</button>` : ''}
        </div>
      </div>
      <div class="section-blocks" id="section-blocks-${sec.id}">`;

    secBlocks.forEach((b) => {
      const i = blocks.indexOf(b);
      const qLabel = getQuestionLabel(i);
      const label = b.saved
        ? (b.mode === 'content'
            ? `📄 Content: ${b.type}`
            : `❓ Q${qLabel} · ${b.type}`)
        : (qLabel ? `Q${qLabel}` : `Block`);

      html += `
      <div class="block" id="block-${i}">
        <div class="block-header">
          <span class="block-label">${label}</span>
          <div class="block-actions">
            ${b.saved ? `<button class="sm-btn primary" onclick="editBlock(${i})">✏️ Edit</button>` : ''}
            <button class="sm-btn danger" onclick="deleteBlock(${i})">✕</button>
          </div>
        </div>
        ${!b.saved ? `
        <div class="mode-tabs">
          <button class="tab ${b.mode==='content'?'active':''}" onclick="setMode(${i},'content')">📄 Content</button>
          <button class="tab ${b.mode==='question'?'active':''}" onclick="setMode(${i},'question')">❓ Question</button>
        </div>` : ''}
        <div id="inner-${i}"></div>
      </div>`;
    });

    html += `</div></div>`;
  });

  document.getElementById('builder').innerHTML = html;
  blocks.forEach((b, i) => renderInner(i));
  updateStructureView();

  try {
    sections.forEach(sec => {
      const el = document.getElementById('section-blocks-' + sec.id);
      if (el) Sortable.create(el, { animation: 150, handle: '.block-header', ghostClass: 'sortable-ghost',
        onEnd: () => {}
      });
    });
  } catch(e) {}
}

function editBlock(i) {
  pushHistory();
  blocks[i]._savedBackup = JSON.parse(JSON.stringify(blocks[i]));
  blocks[i].saved = false;
  blocks[i].ui.state = 'select';
  render();
}


/* ─── Inner render ─── */
function renderInner(i) {
  const b = blocks[i];
  const el = document.getElementById(`inner-${i}`);
  if (!el) return;

  if (b.saved) { el.innerHTML = renderSavedPreview(i); return; }
  if (!b.mode) { el.innerHTML = `<p style="color:var(--text2);font-size:13px;">Select Content or Question above.</p>`; return; }
  if (b.ui.state === 'select') { el.innerHTML = b.mode === 'content' ? contentGrid(i) : questionGrid(i); return; }
  if (b.ui.state === 'edit')   { el.innerHTML = b.mode === 'content' ? contentEditorHTML(i) : questionEditorHTML(i); }

  if (b.ui.state === 'edit' && b.mode === 'question') {
    setTimeout(() => { setRichContent(`qprompt-${i}`, b.data.question || ''); }, 10);
  }
}

/* ─── Saved preview ─── */
function renderSavedPreview(i) {
  const b = blocks[i];
  const d = b.data;
  let preview = '';

  if (b.mode === 'content') {
    if (b.type === 'Text') preview = `<div style="font-size:13px;line-height:1.6;">${d.text || '(No text)'}</div>`;
    else if (b.type === 'Image') preview = d.url ? `<img src="${d.url}" style="max-width:100%;max-height:200px;border-radius:8px;" onerror="this.style.display='none'">` : `<div style="color:var(--text2);font-size:13px;">Image uploaded</div>`;
    else preview = `<div style="color:var(--text2);font-size:13px;">${b.type} content saved.</div>`;
  } else {
    const qLabel = getQuestionLabel(i);
    const qText = d.question ? d.question.replace(/<[^>]+>/g,'') : '(No question)';
    preview = `<div style="font-size:13px;margin-bottom:8px;"><strong>Q${qLabel}:</strong> ${qText.substring(0,120)}${qText.length>120?'…':''}</div>`;
    if (b.type === 'MCQ' || b.type === 'Multiple Select MCQ') {
      const opts = b.ui.mcqOptions.filter(o => o.trim());
      preview += opts.map((o, oi) => `<div style="padding:4px 10px;background:var(--surface2);border-radius:5px;margin-bottom:3px;font-size:12px;">${String.fromCharCode(65+oi)}. ${o}</div>`).join('');
    } else if (b.type === 'True / False') {
      preview += `<div style="font-size:12px;color:var(--text2);">Answer: <strong style="color:var(--text);">${b.ui.tfAnswer || 'Not set'}</strong></div>`;
    } else if (b.type === 'Drawing') {
      if (d.drawingImage) preview += `<div style="margin-top:6px;"><img src="${d.drawingImage}" style="max-width:100%;max-height:150px;border-radius:6px;border:1px solid var(--border);"></div>`;
      if (d.drawingInstructions) preview += `<div style="font-size:12px;color:var(--text2);margin-top:4px;">${d.drawingInstructions}</div>`;
    }
    preview += `<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;">`;
    if (b.meta.criterion) preview += `<span class="badge red">Crit ${b.meta.criterion}${b.meta.strand?'-'+b.meta.strand:''}</span>`;
    if (b.meta.marks)     preview += `<span class="badge">${b.meta.marks} marks</span>`;
    if (b.meta.difficulty)preview += `<span class="badge">${b.meta.difficulty}</span>`;
    preview += `</div>`;
  }

  return `<div class="saved-preview"><strong>${b.mode === 'content' ? '📄' : '❓'} ${b.type}</strong>${preview}</div>`;
}

/* ─── Structure View ─── */
function updateStructureView() {
  const el = document.getElementById('structureView');
  if (!el) return;
  if (blocks.length === 0) { el.innerHTML = '<div style="color:var(--text2);font-size:12px;">No blocks yet.</div>'; return; }

  let html = '';
  sections.forEach(sec => {
    const secBlocks = blocks.filter(b => b.sectionId === sec.id);
    if (secBlocks.length === 0) return;
    html += `<div class="structure-section-label" onclick="renameSection(${sec.id})">📋 ${sec.name}</div>`;
    secBlocks.forEach(b => {
      const i = blocks.indexOf(b);
      const qLabel = getQuestionLabel(i);
      html += `<div class="structure-item ${b.mode==='content'?'content-type':'question-type'}"
        onclick="document.getElementById('block-${i}').scrollIntoView({behavior:'smooth'})">
        ${b.mode==='content' ? '📄' : `❓ Q${qLabel||''}`} ${b.type || (b.mode || 'New')}
      </div>`;
    });
  });
  el.innerHTML = html;
}

/* ── Content & Question grids ── */
function contentGrid(i) {
  const types = [
    {icon:'📝',label:'Text'},{icon:'🖼️',label:'Image'},{icon:'🎬',label:'Video'},
    {icon:'📄',label:'PDF'},{icon:'🎵',label:'Audio'},{icon:'🔬',label:'Simulation'},
    {icon:'📊',label:'Docs'},{icon:'📑',label:'PPT'},{icon:'🗂️',label:'Accordion'}
  ];
  return `<div class="type-grid">${types.map(t =>
    `<div class="type-card" onclick="selectType(${i},'${t.label}','content')"><div class="tc-icon">${t.icon}</div>${t.label}</div>`
  ).join('')}</div>`;
}

function questionGrid(i) {
  const types = [
    {icon:'✍️',label:'Long Answer'},{icon:'🔘',label:'MCQ'},
    {icon:'☑️',label:'Multiple Select MCQ'},{icon:'✔️',label:'True / False'},
    {icon:'📝',label:'Fill Text'},{icon:'🔽',label:'Fill Drop Down'},
    {icon:'🔗',label:'Match the Following'},{icon:'🔄',label:'Sort'},
    {icon:'🗂️',label:'Classify'},{icon:'📊',label:'Table'},
    {icon:'✏️',label:'Drawing'},{icon:'🏷️',label:'Label Drag'},
    {icon:'🏷️',label:'Label Fill'},{icon:'📈',label:'Desmos Graph'},
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
  if (mode === 'question') {
    setTimeout(() => { setRichContent(`qprompt-${i}`, blocks[i].data.question || ''); }, 20);
  }
}

/* ── Content Editor ── */
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
    ${um==='drive'?`<input type="url" id="cu-drive-${i}" placeholder="Paste Google Drive share link…" value="${b.data.driveUrl||''}">`:''} `;

  let inner = '';
  if (t === 'Text') {
    inner = `<textarea id="ct-${i}" placeholder="Enter text content…" style="min-height:120px;">${b.data.text||''}</textarea>`;
  } else if (t === 'Accordion') {
    inner = `<input type="text" id="ca-title-${i}" placeholder="Accordion title…" value="${b.data.title||''}">
      <textarea id="ca-body-${i}" placeholder="Accordion body…">${b.data.body||''}</textarea>`;
  } else {
    inner = uploadChooser;
  }

  return `<div class="editor-area">
    <span class="section-label">📄 ${t} Content</span>
    ${inner}
    <div class="action-bar">
      <button class="btn-save" onclick="saveBlock(${i})">💾 Save</button>
      <button class="btn-cancel" onclick="cancelEdit(${i})">Cancel</button>
    </div>
  </div>`;
}

function setUploadMode(i, mode) { blocks[i].ui.uploadMode = mode; renderInner(i); }

/* ── Question Editor ── */
function questionEditorHTML(i) {
  const b = blocks[i];
  const t = b.type;
  const qLabel = getQuestionLabel(i) || '?';

  const qPrompt = `
    <div style="margin-bottom:4px;font-size:11px;color:var(--text2);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Question Q${qLabel}</div>
    ${richTextToolbar(`qprompt-${i}`)}
    <div class="toggle-row" style="margin-top:8px;">
      <div class="toggle ${b.ui.hintOn?'on':''}" onclick="toggleHint(${i})"></div>
      <span>Add Hint (optional)</span>
    </div>
    ${b.ui.hintOn?`<div class="hint-box"><textarea id="hint-${i}" placeholder="Hint for students…">${b.meta.hint||''}</textarea></div>`:''}`;

  const critStrip = criteriaMarksStrip(i);

  const metaStrip = `
    <div class="meta-strip">
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
          ${['Define','State','Describe','Explain','Justify','Analyse','Evaluate','Discuss','Compare','Calculate','Derive','Show','Sketch','Draw'].map(d=>`<option ${b.meta.commandTerm===d?'selected':''}>${d}</option>`).join('')}
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

  const markScheme = `
    <div class="mark-scheme">
      <label>📗 Mark Scheme <span style="font-weight:normal;color:var(--text2)">(optional)</span></label>
      <textarea id="ms-${i}" placeholder="Expected answer, rubric, model solution…">${b.meta.markScheme||''}</textarea>
    </div>`;

  let body = '';

  if (t === 'Long Answer') {
    body = `${qPrompt}
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
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'MCQ') {
    body = `${qPrompt}
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
      </div>
      <textarea id="mcq-exp-${i}" placeholder="Explanation shown after submission…">${b.data.explanation||''}</textarea>
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Multiple Select MCQ') {
    body = `${qPrompt}
      <div class="mcq-options" id="mmcq-opts-${i}">
        ${b.ui.mcqOptions.map((o, oi) => `
          <div class="mcq-option-row">
            <input type="checkbox" name="mmcq-correct-${i}" value="${oi}" ${(b.data.correct||[]).includes(oi)?'checked':''}>
            <input type="text" id="mmcq-o-${i}-${oi}" placeholder="Option ${String.fromCharCode(65+oi)}" value="${o}">
            <button class="remove-btn" onclick="removeOption(${i},${oi})">✕</button>
          </div>`).join('')}
      </div>
      <button class="sm-btn" onclick="addOption(${i})" style="margin-top:4px;">+ Add Option</button>
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'True / False') {
    const ans = b.ui.tfAnswer;
    body = `${qPrompt}
      <div class="tf-options">
        <div class="tf-opt true-opt ${ans==='True'?'selected':''}" onclick="setTF(${i},'True')">✅ True</div>
        <div class="tf-opt false-opt ${ans==='False'?'selected':''}" onclick="setTF(${i},'False')">❌ False</div>
      </div>
      <textarea id="tf-exp-${i}" placeholder="Explanation…">${b.data.explanation||''}</textarea>
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Fill Text') {
    body = `
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Use [blank] to mark blank positions.</div>
      <textarea id="ft-text-${i}" placeholder="e.g. The [blank] of a triangle is 180°." style="min-height:80px;">${b.data.fillText||''}</textarea>
      <input type="text" id="ft-ans-${i}" placeholder="Correct answers (comma separated)" value="${b.data.answers||''}">
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Fill Drop Down') {
    body = `
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Use [blank] in text. Provide comma-separated options.</div>
      <textarea id="fdd-text-${i}" placeholder="e.g. Water boils at [blank] degrees." style="min-height:80px;">${b.data.fillText||''}</textarea>
      <input type="text" id="fdd-opts-${i}" placeholder="Options (e.g. 50, 75, 100, 150)" value="${b.data.options||''}">
      <input type="text" id="fdd-ans-${i}" placeholder="Correct answer(s)" value="${b.data.answers||''}">
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Match the Following') {
    body = `${qPrompt}
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
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Sort') {
    body = `${qPrompt}
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
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Classify') {
    body = `${qPrompt}
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
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Table') {
    const rows = b.data.tableRows || 3;
    const cols = b.data.tableCols || 3;
    body = `${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Set up the table. Leave cells blank for students to fill in.</div>
      <div style="display:flex;gap:10px;margin-bottom:10px;">
        <div class="grade-field"><label>Rows</label>
          <input type="number" class="grade-input" id="tbl-rows-${i}" value="${rows}" min="1" max="20" onchange="updateTablePreview(${i})">
        </div>
        <div class="grade-field"><label>Columns</label>
          <input type="number" class="grade-input" id="tbl-cols-${i}" value="${cols}" min="1" max="10" onchange="updateTablePreview(${i})">
        </div>
      </div>
      <div id="tbl-preview-${i}" style="overflow-x:auto;"></div>
      ${critStrip}${metaStrip}${markScheme}`;
    setTimeout(() => updateTablePreview(i), 20);

  } else if (t === 'Drawing') {
    body = `${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Upload a reference/diagram image for students to draw on:</div>
      <div style="display:flex;gap:8px;margin-bottom:10px;">
        <input type="url" id="draw-img-${i}" placeholder="Image URL (diagram, prism, circuit…)" value="${b.data.drawingImage||''}" style="flex:1;">
        <input type="file" id="draw-file-${i}" accept="image/*" onchange="handleDrawingUpload(${i},this)" style="width:200px;background:var(--surface2);border:1px solid var(--border);padding:6px;border-radius:7px;color:var(--text);font-size:12px;">
      </div>
      ${b.data.drawingImage ? `<div style="margin-bottom:10px;"><img src="${b.data.drawingImage}" style="max-width:100%;max-height:300px;border-radius:8px;border:1px solid var(--border);"></div>` : ''}
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Drawing instructions for students:</div>
      <textarea id="draw-instr-${i}" placeholder="e.g. Draw the path of the ray through the prism. Include normals and label angles (i, r).">${b.data.drawingInstructions||''}</textarea>
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Label Drag' || t === 'Label Fill') {
    body = `${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:6px;">Upload or link a diagram image:</div>
      <input type="url" id="ld-img-${i}" placeholder="Image URL for diagram…" value="${b.data.imageUrl||''}">
      <input type="text" id="ld-labels-${i}" placeholder="Labels (comma separated): e.g. Nucleus, Cell Wall" value="${b.data.labels||''}">
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'Desmos Graph') {
    body = `${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Students will see a live Desmos calculator. Optionally pre-load an expression:</div>
      <input type="text" id="graph-prefill-${i}" placeholder="Default expression e.g. y=x^2 (optional)" value="${b.data.prefill||''}">
      <input type="text" id="graph-instructions-${i}" placeholder="Instructions e.g. 'Graph the function f(x)=2x+3'" value="${b.data.graphInstructions||''}">
      <div style="margin-top:10px;border:1px solid var(--border);border-radius:8px;overflow:hidden;height:300px;">
        <iframe src="https://www.desmos.com/calculator" style="width:100%;height:100%;border:none;"></iframe>
      </div>
      ${critStrip}${metaStrip}${markScheme}`;

  } else if (t === 'GeoGebra Graph') {
    body = `${qPrompt}
      <div style="font-size:12px;color:var(--text2);margin-bottom:8px;">Students will see a live GeoGebra applet. Optionally provide a material ID:</div>
      <input type="text" id="graph-prefill-${i}" placeholder="GeoGebra Material ID (optional, e.g. abc123)" value="${b.data.prefill||''}">
      <input type="text" id="graph-instructions-${i}" placeholder="Instructions for the student" value="${b.data.graphInstructions||''}">
      <div style="margin-top:10px;border:1px solid var(--border);border-radius:8px;overflow:hidden;height:300px;">
        <iframe src="https://www.geogebra.org/graphing" style="width:100%;height:100%;border:none;"></iframe>
      </div>
      ${critStrip}${metaStrip}${markScheme}`;

  } else {
    body = `${qPrompt}${critStrip}${metaStrip}${markScheme}`;
  }

  return `<div class="editor-area">
    <span class="section-label">❓ ${t}</span>
    ${body}
    <div class="action-bar">
      <button class="btn-save" onclick="saveBlock(${i})">💾 Save Question</button>
      <button class="btn-cancel" onclick="cancelEdit(${i})">Cancel</button>
    </div>
  </div>`;
}

/* ─── Helpers ─── */
function addOption(i) { if (blocks[i].ui.mcqOptions.length >= 8) return; blocks[i].ui.mcqOptions.push(''); renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10); }
function removeOption(i, oi) { blocks[i].ui.mcqOptions.splice(oi, 1); renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10); }
function setTF(i, val) { blocks[i].ui.tfAnswer = val; renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10); }
function addMatchPair(i) {
  blocks[i].ui.matchPairs = blocks[i].ui.matchPairs.map((_, pi) => ({
    a: document.getElementById(`ma-a-${i}-${pi}`)?.value || '',
    b: document.getElementById(`ma-b-${i}-${pi}`)?.value || ''
  }));
  blocks[i].data.question = getRichContent(`qprompt-${i}`);
  blocks[i].ui.matchPairs.push({a:'',b:''});
  renderInner(i);
  setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10);
}

function addSortItem(i) { blocks[i].ui.sortItems.push(''); renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10); }
function removeSortItem(i, si) { blocks[i].ui.sortItems.splice(si, 1); renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,blocks[i].data.question||''),10); }
function addCat(i) { blocks[i].ui.classifyCategories.push(''); renderInner(i); }
function removeCat(i, ci) { blocks[i].ui.classifyCategories.splice(ci, 1); renderInner(i); }
function addClassifyItem(i) { blocks[i].ui.classifyItems.push(''); renderInner(i); }
function removeClassifyItem(i, ii2) { blocks[i].ui.classifyItems.splice(ii2, 1); renderInner(i); }
function toggleHint(i) { blocks[i].ui.hintOn = !blocks[i].ui.hintOn; const q = getRichContent(`qprompt-${i}`); renderInner(i); setTimeout(()=>setRichContent(`qprompt-${i}`,q),10); }

/* ─── Drawing upload helper ─── */
function handleDrawingUpload(i, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    blocks[i].data.drawingImage = e.target.result;
    renderInner(i);
    setTimeout(() => setRichContent(`qprompt-${i}`, blocks[i].data.question || ''), 10);
  };
  reader.readAsDataURL(file);
}

/* ─── Table helper ─── */
function updateTablePreview(i) {
  const rows = Number(document.getElementById('tbl-rows-' + i)?.value || 3);
  const cols = Number(document.getElementById('tbl-cols-' + i)?.value || 3);
  const b = blocks[i];
  const headers = b.data.tableHeaders || [];
  const prefill = b.data.tablePrefill || [];
  let html = '<table style="width:100%;border-collapse:collapse;">';
  html += '<tr>';
  for (let c = 0; c < cols; c++) {
    html += `<th style="border:1px solid var(--border);padding:6px 8px;background:rgba(224,48,48,0.08);">
      <input type="text" id="th-${i}-${c}" value="${headers[c]||''}" placeholder="Header ${c+1}"
        style="background:transparent;border:none;color:var(--text);width:100%;font-size:12px;font-weight:600;outline:none;text-align:center;">
    </th>`;
  }
  html += '</tr>';
  for (let r = 0; r < rows; r++) {
    html += '<tr>';
    for (let c = 0; c < cols; c++) {
      const val = (prefill[r] && prefill[r][c]) || '';
      html += `<td style="border:1px solid var(--border);padding:4px;">
        <input type="text" id="td-${i}-${r}-${c}" value="${val}" placeholder="—"
          style="background:transparent;border:none;color:var(--text);width:100%;font-size:12px;outline:none;text-align:center;">
      </td>`;
    }
    html += '</tr>';
  }
  html += '</table>';
  const el = document.getElementById('tbl-preview-' + i);
  if (el) el.innerHTML = html;
}

/* ─── Save block ─── */
function saveBlock(i) {
  const b = blocks[i];
  pushHistory();

  const pick = (id) => { const el = document.getElementById(id); return el ? el.value : ''; };

  // Criteria + marks
  b.meta.criterion  = pick(`qcrit-${i}`);
  b.meta.strand     = pick(`qstrand-${i}`);
  b.meta.marks      = pick(`qmarks-${i}`);

  // Secondary meta
  b.meta.difficulty  = pick(`meta-diff-${i}`);
  b.meta.commandTerm = pick(`meta-cmd-${i}`);
  b.meta.timeMin     = pick(`meta-time-${i}`);
  b.meta.keywords    = pick(`meta-kw-${i}`);
  b.meta.notes       = pick(`meta-notes-${i}`);
  b.meta.markScheme  = pick(`ms-${i}`);
  b.meta.hint        = pick(`hint-${i}`);

  const t = b.type;
  if (b.mode === 'content') {
    if (t === 'Text') b.data.text = pick(`ct-${i}`);
    else if (t === 'Accordion') { b.data.title = pick(`ca-title-${i}`); b.data.body = pick(`ca-body-${i}`); }
    else { b.data.url = pick(`cu-url-${i}`) || pick(`cu-drive-${i}`); }
  } else {
    b.data.question = getRichContent(`qprompt-${i}`);

    if (t === 'MCQ') {
      b.ui.mcqOptions = b.ui.mcqOptions.map((_, oi) => pick(`mcq-o-${i}-${oi}`));
      const radio = document.querySelector(`input[name="mcq-correct-${i}"]:checked`);
      b.data.correct = radio ? parseInt(radio.value) : null;
      b.data.explanation = pick(`mcq-exp-${i}`);
    } else if (t === 'Multiple Select MCQ') {
      b.ui.mcqOptions = b.ui.mcqOptions.map((_, oi) => pick(`mmcq-o-${i}-${oi}`));
      b.data.correct = Array.from(document.querySelectorAll(`input[name="mmcq-correct-${i}"]:checked`)).map(c=>parseInt(c.value));
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
    } else if (t === 'Drawing') {
      b.data.drawingImage = pick(`draw-img-${i}`) || b.data.drawingImage || '';
      b.data.drawingInstructions = pick(`draw-instr-${i}`);
    } else if (t === 'Desmos Graph' || t === 'GeoGebra Graph') {
      b.data.prefill = pick(`graph-prefill-${i}`);
      b.data.graphInstructions = pick(`graph-instructions-${i}`);
    } else if (t === 'Label Drag' || t === 'Label Fill') {
      b.data.imageUrl = pick(`ld-img-${i}`);
      b.data.labels = pick(`ld-labels-${i}`);
    } else if (t === 'Sort') {
      b.ui.sortItems = b.ui.sortItems.map((_, si) => pick(`sort-${i}-${si}`));
    } else if (t === 'True / False') {
      b.data.explanation = pick(`tf-exp-${i}`);
    } else if (t === 'Table') {
      const rows = Number(pick(`tbl-rows-${i}`) || 3);
      const cols = Number(pick(`tbl-cols-${i}`) || 3);
      b.data.tableRows = rows;
      b.data.tableCols = cols;
      b.data.tableHeaders = [];
      b.data.tablePrefill = [];
      for (let c = 0; c < cols; c++) {
        b.data.tableHeaders.push(pick(`th-${i}-${c}`));
      }
      for (let r = 0; r < rows; r++) {
        b.data.tablePrefill[r] = [];
        for (let c = 0; c < cols; c++) {
          b.data.tablePrefill[r].push(pick(`td-${i}-${r}-${c}`));
        }
      }
    }
  }

  b.saved = true;
  b.ui.state = 'saved';
  render();
}

function cancelEdit(i) {
  if (blocks[i]._savedBackup) {
    // Restore the saved state
    const backup = blocks[i]._savedBackup;
    blocks[i] = backup;
    blocks[i].saved = true;
    blocks[i].ui.state = 'saved';
    delete blocks[i]._savedBackup;
  } else {
    blocks[i].ui.state = 'select';
    blocks[i].type = null;
    blocks[i].saved = false;
  }
  render();
}


/* ─── Save all ─── */
function saveAll() {
  const unsaved = blocks.filter(b => !b.saved);
  if (unsaved.length > 0) {
    if (!confirm(`${unsaved.length} block(s) have unsaved edits. Save the set anyway?`)) return;
  }

  const LIBRARY_KEY = "MYP_LIBRARY";
  let library = JSON.parse(localStorage.getItem(LIBRARY_KEY) || "[]");

  const pick = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  const heading    = pick('ms-heading')  || 'Untitled';
  const chapter    = pick('ms-chapter')  || '';
  const topic      = pick('ms-topic')    || '';
  const gc         = pick('ms-gc')       || '';
  const atl        = pick('ms-atl')      || '';
  const timeLimit  = Number(pick('ms-timelimit')) || 0;
  const autoSubmit = pick('ms-autosubmit') || 'yes';

  const savedBlocks = JSON.parse(JSON.stringify(blocks));
  const savedSections = JSON.parse(JSON.stringify(sections));
  const totalMarks = savedBlocks
    .filter(b => b.saved && b.mode === 'question')
    .reduce((sum, b) => sum + Number(b.meta.marks || 0), 0);

  const editingId = window._editingSetId || null;
  let existingIdx = editingId ? library.findIndex(s => s.id === editingId) : -1;

  if (existingIdx !== -1) {
    const old = library[existingIdx];
    library[existingIdx] = {
      ...old,
      heading, chapter, topic, gc, atl, timeLimit, autoSubmit,
      blocks: savedBlocks,
      sections: savedSections,
      totalMarks,
      version: (old.version || 1) + 1,
      updatedAt: Date.now(),
      status: old.status || 'Draft'
    };
    showSaveSuccess(`Question set updated in Library! (Version ${library[existingIdx].version})\n\nSet: "${heading}"\nStatus: ${library[existingIdx].status}`, library[existingIdx].status);
  } else {
    const newSet = {
      id: 'qs_' + Date.now(),
      version: 1, status: 'Draft',
      heading, chapter, topic, gc, atl, timeLimit, autoSubmit,
      blocks: savedBlocks,
      sections: savedSections,
      totalMarks,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    library.push(newSet);
    window._editingSetId = newSet.id;
    showSaveSuccess(`Question set saved to Library as Draft!\n\nSet: "${heading}"\nChapter: ${chapter} → ${topic}\n\nGo to Library → click Publish to make it visible to students.`, 'Draft');
  }

  localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
  DB = library;
  localStorage.setItem('MYP_DB', JSON.stringify(DB));
}

function showSaveSuccess(msg, status) {
  const existing = document.getElementById('save-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'save-toast';
  toast.style.cssText = `
    position:fixed;top:70px;left:50%;transform:translateX(-50%);
    background:rgba(10,4,4,0.97);border:1px solid #27ae60;
    border-radius:14px;padding:20px 28px;max-width:480px;width:90%;
    z-index:9999;box-shadow:0 8px 40px rgba(0,0,0,0.6);
    font-family:'DM Sans',sans-serif;color:#f0e6e6;animation:toastIn 0.3s ease;
    text-align:center;`;
  toast.innerHTML = `
    <div style="font-size:28px;margin-bottom:10px;">📚</div>
    <div style="font-size:16px;font-weight:700;color:#27ae60;margin-bottom:8px;">Saved to Library!</div>
    <div style="font-size:13px;color:#b08888;line-height:1.7;white-space:pre-line;">${msg}</div>
    <div style="margin-top:14px;display:flex;gap:10px;justify-content:center;">
      <button onclick="this.closest('#save-toast').remove()" style="background:#27ae60;border:none;color:white;padding:8px 20px;border-radius:7px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;">✓ Got it</button>
      <button onclick="openLibrary();this.closest('#save-toast').remove();" style="background:transparent;border:1px solid rgba(200,60,60,0.4);color:#e03030;padding:8px 20px;border-radius:7px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;">View in Library</button>
    </div>`;
  document.body.appendChild(toast);
  setTimeout(() => { if (toast.parentNode) toast.remove(); }, 8000);
}

/* ─── Preview ─── */
function previewStudent() {
  const win = window.open('', '_blank');
  let html = `<html><head><title>Student Preview</title>
  <style>body{font-family:'Segoe UI',sans-serif;padding:30px;background:#f6f8fb;max-width:800px;margin:auto;}
  .section{margin-bottom:30px;} .section-title{font-size:18px;font-weight:700;border-bottom:2px solid #e03030;padding-bottom:6px;margin-bottom:16px;}
  .block{background:white;border-radius:10px;padding:20px;margin-bottom:14px;box-shadow:0 2px 8px rgba(0,0,0,0.08);}
  .q-label{font-size:11px;color:#888;font-weight:600;text-transform:uppercase;margin-bottom:6px;}
  .marks-badge{display:inline-block;background:#fee;border:1px solid #e03030;padding:1px 8px;border-radius:10px;font-size:11px;color:#c00;font-weight:bold;margin-left:8px;}
  .crit-badge{display:inline-block;background:#e8f4e8;border:1px solid #27ae60;padding:1px 8px;border-radius:10px;font-size:11px;color:#155724;}
  .opt{padding:8px 12px;background:#f8f9fa;border-radius:6px;margin-bottom:4px;font-size:13px;}
  </style></head><body>`;
  html += `<h1 style="font-size:22px;margin-bottom:4px;">${document.getElementById('setHeadingDisplay').textContent}</h1>`;
  html += `<p style="font-size:13px;color:#666;margin-bottom:24px;">${document.getElementById('setMetaDisplay').textContent}</p>`;

  sections.forEach(sec => {
    const secBlocks = blocks.filter(b => b.sectionId === sec.id && b.saved);
    if (!secBlocks.length) return;
    html += `<div class="section"><div class="section-title">${sec.name}</div>`;
    secBlocks.forEach(b => {
      const i = blocks.indexOf(b);
      const qLabel = getQuestionLabel(i);
      if (b.mode === 'content') {
  if (b.type === 'Image' && b.data.url) {
    html += `<div class="block"><img src="${b.data.url}" style="max-width:100%;border-radius:8px;" onerror="this.outerHTML='<p>Image failed to load: ${b.data.url}</p>'"></div>`;
  } else if (b.type === 'Video' && b.data.url) {
    const ytMatch = b.data.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    if (ytMatch) {
      html += `<div class="block"><iframe width="100%" height="400" src="https://www.youtube.com/embed/${ytMatch[1]}" frameborder="0" allowfullscreen></iframe></div>`;
    } else {
      html += `<div class="block"><video src="${b.data.url}" controls style="max-width:100%;"></video></div>`;
    }
  } else if (b.type === 'Video' && b.data.url) {
  const ytMatch = b.data.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (ytMatch) {
    html += `<div class="block"><iframe width="100%" height="400" src="https://www.youtube.com/embed/${ytMatch[1]}" frameborder="0" allowfullscreen style="border-radius:8px;"></iframe></div>`;
  } else {
    html += `<div class="block"><video src="${b.data.url}" controls style="max-width:100%;border-radius:8px;"></video></div>`;
  }
} else if (b.type === 'Image' && b.data.url) {
  html += `<div class="block"><img src="${b.data.url}" style="max-width:100%;border-radius:8px;"></div>`;
} else {
  html += `<div class="block">${b.data.text || b.data.url || '(Content block)'}</div>`;
}

      } else {
        html += `<div class="block">
          <div class="q-label">Q${qLabel} · ${b.type}
            ${b.meta.marks?`<span class="marks-badge">${b.meta.marks} marks</span>`:''}
            ${b.meta.criterion?`<span class="crit-badge">Crit ${b.meta.criterion}${b.meta.strand?'-'+b.meta.strand:''}</span>`:''}
          </div>
          <div style="font-size:14px;line-height:1.6;margin-bottom:12px;">${b.data.question||'(No question)'}</div>`;
        if (b.type === 'MCQ' || b.type === 'Multiple Select MCQ') {
          (b.ui.mcqOptions||[]).filter(o=>o.trim()).forEach((o,oi) => {
            html += `<div class="opt">${String.fromCharCode(65+oi)}. ${o}</div>`;
          });
        } else if (b.type === 'True / False') {
          html += `<div class="opt">A. True</div><div class="opt">B. False</div>`;
        } else if (b.type === 'Drawing' && b.data.drawingImage) {
          html += `<img src="${b.data.drawingImage}" style="max-width:100%;border-radius:8px;margin-bottom:8px;">`;
          if (b.data.drawingInstructions) html += `<p style="font-size:13px;color:#666;">${b.data.drawingInstructions}</p>`;
          html += `<div style="border:2px dashed #ccc;border-radius:8px;height:300px;display:flex;align-items:center;justify-content:center;color:#999;font-size:13px;">Student drawing area</div>`;
        } else {
          html += `<div style="border:1px dashed #ccc;border-radius:6px;padding:40px 16px;text-align:center;color:#999;font-size:12px;">Student answer area</div>`;
        }
        html += `</div>`;
      }
    });
    html += `</div>`;
  });

  html += `</body></html>`;
  win.document.write(html);
  win.document.close();
}

function exportPDF() { previewStudent(); }

/* ─── Init ─── */
// Called from HTML after proceedToBuilder()
/* ─── Insert image in rich text editor ─── */
function insertImageInEditor() {
  var url = prompt('Paste image URL:');
  if (url && url.trim() && _lastFocusedEditor) {
    _lastFocusedEditor.focus();
    document.execCommand('insertHTML', false, '<img src="' + url.trim() + '" style="max-width:100%;border-radius:6px;margin:8px 0;display:block;">');
  }
}

function insertImageFileInEditor() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      if (_lastFocusedEditor) {
        _lastFocusedEditor.focus();
        document.execCommand('insertHTML', false, '<img src="' + ev.target.result + '" style="max-width:100%;border-radius:6px;margin:8px 0;display:block;">');
      }
    };
    reader.readAsDataURL(file);
  };
  input.click();
}
/* ─── Insert image via URL ─── */
function insertImageInEditor() {
  var url = prompt('Paste image URL:');
  if (url && url.trim() && _lastFocusedEditor) {
    _lastFocusedEditor.focus();
    document.execCommand('insertHTML', false, '<img src="' + url.trim() + '" style="max-width:100%;border-radius:6px;margin:8px 0;display:block;">');
  }
}

/* ─── Upload image from computer ─── */
function insertImageFileInEditor() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      if (_lastFocusedEditor) {
        _lastFocusedEditor.focus();
        document.execCommand('insertHTML', false, '<img src="' + ev.target.result + '" style="max-width:100%;border-radius:6px;margin:8px 0;display:block;">');
      }
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

/* ─── Insert table in editor ─── */
function insertTableInEditor() {
  var rows = prompt('Number of rows:', '3');
  var cols = prompt('Number of columns:', '3');
  if (!rows || !cols) return;
  rows = parseInt(rows) || 3;
  cols = parseInt(cols) || 3;
  if (rows < 1 || rows > 20 || cols < 1 || cols > 10) { alert('Rows: 1-20, Columns: 1-10'); return; }
  var html = '<table style="width:100%;border-collapse:collapse;margin:10px 0;">';
  // Header row
  html += '<tr>';
  for (var c = 0; c < cols; c++) {
    html += '<th style="border:1px solid #666;padding:8px;background:rgba(224,48,48,0.1);color:#f0e6e6;font-size:13px;text-align:center;" contenteditable="true">Header ' + (c + 1) + '</th>';
  }
  html += '</tr>';
  // Data rows
  for (var r = 0; r < rows; r++) {
    html += '<tr>';
    for (var c2 = 0; c2 < cols; c2++) {
      html += '<td style="border:1px solid #666;padding:8px;color:#f0e6e6;font-size:13px;text-align:center;" contenteditable="true"></td>';
    }
    html += '</tr>';
  }
  html += '</table><p></p>';
  if (_lastFocusedEditor) {
    _lastFocusedEditor.focus();
    document.execCommand('insertHTML', false, html);
  }
}

