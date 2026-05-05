let blocks = [];
let idCounter = 0;

function newBlock(){
  return {
    id: ++idCounter,
    mode:null,
    type:null,
    data:{},
    ui:{state:"select"}
  }
}

function addBlock(){
  blocks.push(newBlock());
  render();
}

function render(){
  let html = "";

  blocks.forEach((b,i)=>{
    html += `
    <div class="block">

      <div style="display:flex;justify-content:space-between">
        <b>Block ${i+1}</b>
        <button onclick="deleteBlock(${i})">✕</button>
      </div>

      <div class="mode-tabs">
        <div class="tab ${b.mode==='content'?'active':''}" onclick="setMode(${i},'content')">Content</div>
        <div class="tab ${b.mode==='question'?'active':''}" onclick="setMode(${i},'question')">Question</div>
      </div>

      <div id="inner-${i}"></div>

    </div>
    `;
  });

  document.getElementById("builder").innerHTML = html;

  blocks.forEach((b,i)=>renderInner(i));
}

function setMode(i,mode){
  blocks[i].mode = mode;
  blocks[i].ui.state="select";
  render();
}

function renderInner(i){
  let b = blocks[i];
  let el = document.getElementById(`inner-${i}`);

  if(!b.mode){
    el.innerHTML = "Select mode";
    return;
  }

  if(b.ui.state==="select"){
    el.innerHTML = b.mode==="content" ? contentGrid(i) : questionGrid(i);
  }

  if(b.ui.state==="edit"){
    el.innerHTML = editorUI(i);
  }
}

/* ================= CONTENT ================= */

function contentGrid(i){
  return `
  <div class="grid">
    ${card(i,'Text')}
    ${card(i,'Image')}
    ${card(i,'Video')}
    ${card(i,'PDF')}
  </div>
  `;
}

function contentEditor(i){
  return `
    <textarea placeholder="Enter content"></textarea>

    <input type="file">
    <input placeholder="Paste URL">
    <textarea placeholder="Paste image"></textarea>

    <button onclick="saveBlock(${i})">Save</button>
  `;
}

/* ================= QUESTIONS ================= */

function questionGrid(i){
  return `
  <div class="grid">
    ${qcard(i,'Long Answer')}
    ${qcard(i,'MCQ')}
    ${qcard(i,'True/False')}
  </div>
  `;
}

function questionEditor(i){
  let type = blocks[i].type;

  if(type==="MCQ"){
    return `
      <textarea placeholder="Question"></textarea>
      <input placeholder="A">
      <input placeholder="B">
      <input placeholder="C">
      <input placeholder="D">
      <input placeholder="Correct">
      <button onclick="saveBlock(${i})">Save</button>
    `;
  }

  return `
    <textarea placeholder="Question"></textarea>
    <button onclick="saveBlock(${i})">Save</button>
  `;
}

/* ================= COMMON ================= */

function card(i,type){
  return `<div class="card" onclick="selectContent(${i},'${type}')">${type}</div>`;
}

function qcard(i,type){
  return `<div class="card" onclick="selectQuestion(${i},'${type}')">${type}</div>`;
}

function selectContent(i,type){
  blocks[i].type = type;
  blocks[i].ui.state = "edit";
  render();
}

function selectQuestion(i,type){
  blocks[i].type = type;
  blocks[i].ui.state = "edit";
  render();
}

function editorUI(i){
  let b = blocks[i];
  return b.mode==="content" ? contentEditor(i) : questionEditor(i);
}

function saveBlock(i){
  blocks[i].ui.state="select";
  render();
}

/* ================= SAVE ================= */

function saveSet(){
  alert("Saved");
}

/* ================= STUDENT VIEW ================= */

function previewStudent(){
  document.getElementById("studentView").innerHTML = "Preview coming soon...";
}

/* ================= PDF ================= */

function exportPDF(){
  alert("PDF Export Ready");
}

/* INIT */
addBlock();
