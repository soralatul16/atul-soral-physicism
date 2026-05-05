/* ═══════════════════════════════════════════════════
   MYP EXAM BUILDER — STABLE VERSION (FIXED)
   ═══════════════════════════════════════════════════ */

let DB = JSON.parse(localStorage.getItem("MYP_DB")) || [];
let blocks = [];
let history = [];
let pendingDeleteIdx = null;

/* ─── UTIL ─── */
function uid(prefix = "id") {
  return prefix + "_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
}

/* ─── Block factory ─── */
function newBlock() {
  return {
    id: uid("blk"),
    mode: null,
    type: null,
    data: {},
    meta: {
      marks: '', difficulty: '', commandTerm: '', strand: '',
      keywords: '', notes: '', hint: '', markScheme: '', timeMin: ''
    },
    saved: false,
    ui: {
      state: 'select',
      uploadMode: 'url',
      tfAnswer: null,
      mcqOptions: ['','','',''],
      matchPairs: [{a:'',b:''},{a:'',b:''}],
      sortItems: ['','',''],
      classifyCategories: [''],
      classifyItems: ['','',''],
      hintOn: false
    }
  };
}

/* ─── HISTORY ─── */
function pushHistory() {
  history.push(JSON.parse(JSON.stringify(blocks)));
  if (history.length > 30) history.shift();
}

function undoAction() {
  if (!history.length) return;
  blocks = history.pop();
  render();
}

/* ─── BLOCK MANAGEMENT ─── */
function addBlock() {
  pushHistory();
  blocks.push(newBlock());
  render();
}

function deleteBlock(i) {
  pendingDeleteIdx = i;
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
}

/* ─── MODE ─── */
function setMode(i, mode) {
  blocks[i].mode = mode;
  blocks[i].type = null;
  blocks[i].saved = false;
  blocks[i].ui.state = 'select';
  render();
}

/* ─── RENDER ─── */
function render() {
  const container = document.getElementById("builder");
  if (!container) return;

  container.innerHTML = blocks.map((b, i) => `
    <div class="block">
      <div>
        ${b.saved ? `<b>${b.type}</b>` : `Block ${i+1}`}
        <button onclick="deleteBlock(${i})">Delete</button>
        ${b.saved ? `<button onclick="editBlock(${i})">Edit</button>` : ''}
      </div>

      ${!b.saved ? `
      <button onclick="setMode(${i},'content')">Content</button>
      <button onclick="setMode(${i},'question')">Question</button>
      ` : ''}

      <div id="inner-${i}"></div>
    </div>
  `).join('');

  blocks.forEach((_, i) => renderInner(i));
}

/* ─── INNER RENDER ─── */
function renderInner(i) {
  const b = blocks[i];
  const el = document.getElementById(`inner-${i}`);
  if (!el) return;

  if (b.saved) {
    el.innerHTML = `<p>${b.data.question || b.data.text || 'Saved'}</p>`;
    return;
  }

  if (!b.mode) {
    el.innerHTML = "Select Content or Question";
    return;
  }

  if (b.mode === "content") {
    el.innerHTML = `
      <button onclick="selectType(${i},'Text')">Text</button>
      <button onclick="selectType(${i},'Image')">Image</button>
    `;
  }

  if (b.mode === "question") {
    el.innerHTML = `
      <button onclick="selectType(${i},'MCQ')">MCQ</button>
      <button onclick="selectType(${i},'Long Answer')">Long Answer</button>
    `;
  }

  if (b.ui.state === "edit") {
    renderEditor(i);
  }
}

/* ─── SELECT TYPE ─── */
function selectType(i, type) {
  blocks[i].type = type;
  blocks[i].ui.state = "edit";
  render();
}

/* ─── EDITOR ─── */
function renderEditor(i) {
  const b = blocks[i];
  const el = document.getElementById(`inner-${i}`);

  if (b.mode === "content") {
    el.innerHTML = `
      <textarea id="text-${i}" placeholder="Enter content">${b.data.text || ''}</textarea>
      <button onclick="saveBlock(${i})">Save</button>
    `;
  }

  if (b.mode === "question") {
    el.innerHTML = `
      <textarea id="q-${i}" placeholder="Enter question">${b.data.question || ''}</textarea>
      <button onclick="saveBlock(${i})">Save</button>
    `;
  }
}

/* ─── SAVE BLOCK ─── */
function saveBlock(i) {
  const b = blocks[i];

  if (b.mode === "content") {
    const val = document.getElementById(`text-${i}`);
    b.data.text = val ? val.value : "";
  }

  if (b.mode === "question") {
    const val = document.getElementById(`q-${i}`);
    b.data.question = val ? val.value : "";
  }

  b.saved = true;
  render();
}

/* ─── EDIT ─── */
function editBlock(i) {
  blocks[i].saved = false;
  blocks[i].ui.state = "edit";
  render();
}

/* ─── SAVE ALL (FIXED) ─── */
function saveAll() {

  if (!blocks.length) {
    alert("No content to save");
    return;
  }

  const set = {
    id: uid("qs"),
    version: 1,
    status: "published",
    heading: document.getElementById("ms-heading")?.value || "Untitled",
    chapter: document.getElementById("ms-chapter")?.value || "",
    topic: document.getElementById("ms-topic")?.value || "",
    criterion: document.getElementById("ms-criterion")?.value || "",
    createdAt: new Date().toISOString(),
    blocks: JSON.parse(JSON.stringify(blocks))
  };

  DB.push(set);
  localStorage.setItem("MYP_DB", JSON.stringify(DB));

  alert("✅ Saved to Library");
}

/* ─── GET LIBRARY ─── */
function getPublishedSets() {
  return JSON.parse(localStorage.getItem("MYP_DB") || "[]")
    .filter(s => s.status === "published");
}

/* ─── AUTO SAVE ─── */
setInterval(() => {
  localStorage.setItem("MYP_TEMP", JSON.stringify(blocks));
}, 3000);

/* ─── LOAD TEMP ─── */
window.onload = () => {
  const temp = localStorage.getItem("MYP_TEMP");
  if (temp) {
    try {
      blocks = JSON.parse(temp);
    } catch {}
  }
  render();
};
