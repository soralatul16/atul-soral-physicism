let blocks = [];
let idCounter = 0;

/* ================= BLOCK ================= */

function newBlock(){
  return {
    id: ++idCounter,
    mode:null,
    type:null,
    meta:{
      difficulty:"Easy",
      marks:"",
      criterion:"",
      command:"",
      tags:"",
      notes:""
    },
    data:{},
    ui:{state:"select"}
  }
}

function addBlock(){
  blocks.push(newBlock());
  render();
}

/* ================= RENDER ================= */

function render(){
  let html = "";

  blocks.forEach((b,i)=>{
    html += `
    <div class="block">

      <div style="display:flex;justify-content:space-between">
        <b>Block ${i+1}</b>
        <button onclick="deleteBlock(${i})">✕</button>
      </div>

      ${modeBar(i,b)}
      <div id="inner-${i}"></div>

    </div>
    `;
  });

  document.getElementById("builder").innerHTML = html;

  blocks.forEach((b,i)=>renderInner(i));
}

function deleteBlock(i){
  if(confirm("Delete this block?")){
    blocks.splice(i,1);
    render();
  }
}

/* ================= MODE ================= */

function modeBar(i,b){
  return `
  <div class="mode-bar">
    <button class="mode-btn ${b.mode==='content'?'active':''}" onclick="setMode(${i},'content')">Content</button>
    <button class="mode-btn ${b.mode==='question'?'active':''}" onclick="setMode(${i},'question')">Question</button>
  </div>
  `;
}

function setMode(i,mode){
  blocks[i].mode = mode;
  blocks[i].ui.state = "select";
  render();
}

/* ================= INNER ================= */

function renderInner(i){
  let b = blocks[i];
  let el = document.getElementById(`inner-${i}`);

  if(!b.mode){
    el.innerHTML = "<p>Select Content or Question</p>";
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
    ${card(i,'Audio')}
  </div>
  `;
}

function contentEditor(i){
  let type = blocks[i].type;

  return `
  <h3>${type} Content</h3>

  ${type==="Text" ? `
    <textarea placeholder="Enter text"></textarea>
  ` : `
    <div style="background:#111;padding:15px;border-radius:10px">

      <b>Upload Options</b>

      <input type="file" id="file-${i}">
      <input placeholder="Paste URL (Drive / YouTube / Image)" id="url-${i}">
      <textarea placeholder="Paste image link or base64" id="paste-${i}"></textarea>

      <button onclick="handleUpload(${i})">Upload</button>

      <div id="preview-${i}" style="margin-top:10px"></div>
    </div>
  `}
  `;
}

function handleUpload(i){
  let file = document.getElementById(`file-${i}`).files[0];
  let url = document.getElementById(`url-${i}`).value;
  let paste = document.getElementById(`paste-${i}`).value;
  let preview = document.getElementById(`preview-${i}`);

  preview.innerHTML = "";

  if(file){
    let reader = new FileReader();
    reader.onload = e=>{
      preview.innerHTML = `<img src="${e.target.result}" style="max-width:200px">`;
    };
    reader.readAsDataURL(file);
  }

  if(url){
    if(url.includes("youtube")){
      preview.innerHTML = `<iframe width="250" src="${url}"></iframe>`;
    } else {
      preview.innerHTML = `<img src="${url}" style="max-width:200px">`;
    }
  }

  if(paste){
    preview.innerHTML = `<img src="${paste}" style="max-width:200px">`;
  }
}

/* ================= QUESTIONS ================= */

function questionGrid(i){
  return `
  <div class="grid">
    ${qcard(i,'Long Answer')}
    ${qcard(i,'MCQ')}
    ${qcard(i,'True/False')}
    ${qcard(i,'Fill Text')}
    ${qcard(i,'Match')}
    ${qcard(i,'Sort')}
    ${qcard(i,'Classify')}
    ${qcard(i,'Table')}
    ${qcard(i,'Drawing')}
    ${qcard(i,'Graph')}
  </div>
  `;
}

function questionEditor(i){
  let type = blocks[i].type;

  if(type==="MCQ"){
    return `
      <textarea placeholder="Question"></textarea>

      <input placeholder="Option A">
      <input placeholder="Option B">
      <input placeholder="Option C">
      <input placeholder="Option D">
      <input placeholder="Correct Answer">

      <textarea placeholder="Markscheme"></textarea>
    `;
  }

  if(type==="True/False"){
    return `
      <textarea placeholder="Statement"></textarea>
      <select><option>True</option><option>False</option></select>
    `;
  }

  if(type==="Match"){
    return `<input placeholder="Match pairs">`;
  }

  if(type==="Sort"){
    return `<input placeholder="Items">`;
  }

  if(type==="Classify"){
    return `<input placeholder="Categories">`;
  }

  if(type==="Table"){
    return `<textarea placeholder="Table data"></textarea>`;
  }

  if(type==="Drawing"){
    return `<canvas style="background:white;height:300px;width:100%"></canvas>`;
  }

  if(type==="Graph"){
    return `<div id="graph-${i}" style="height:300px"></div>
            <button onclick="initGraph(${i})">Load Graph</button>`;
  }

  return `<textarea placeholder="Answer"></textarea>`;
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

  return `
    ${metaPanel(i)}

    ${b.mode==="content" ? contentEditor(i) : questionEditor(i)}

    <button onclick="saveBlock(${i})">Save</button>
    <button onclick="cancelEdit(${i})">Cancel</button>
  `;
}

function metaPanel(i){
  return `
  <select>
    <option>Easy</option>
    <option>Medium</option>
    <option>Hard</option>
  </select>

  <input placeholder="Marks">
  <input placeholder="Criterion (A.i)">
  <input placeholder="Command Term">
  <input placeholder="Tags">
  <textarea placeholder="Internal notes"></textarea>
  `;
}

function cancelEdit(i){
  blocks[i].ui.state="select";
  render();
}

function saveBlock(i){
  alert("Saved");
  blocks[i].ui.state="select";
  render();
}

/* INIT */
addBlock();
