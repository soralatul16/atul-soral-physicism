let tempPaper = {
  title:"",
  scenario:"",
  content:[],
  questions:[]
};

let blocks = [];
let idCounter = 0;

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

function modeBar(i,b){
  return `
  <div class="mode-bar">
    <button class="mode-btn ${b.mode==='content'?'active':''}" onclick="setMode(${i},'content')">Content</button>
    <button class="mode-btn ${b.mode==='question'?'active':''}" onclick="setMode(${i},'question')">Question</button>
    <button class="mode-btn">Library</button>
    <button class="mode-btn">AI</button>
  </div>
  `;
}

function setMode(i,mode){
  blocks[i].mode = mode;
  blocks[i].ui.state = "select";
  render();
}

function renderInner(i){
  let b = blocks[i];

  let el = document.getElementById(`inner-${i}`);

  if(!b.mode){
    el.innerHTML = `<p>Select Content or Question</p>`;
    return;
  }

  if(b.ui.state==="select"){
    el.innerHTML = b.mode==="content" ? contentGrid(i) : questionGrid(i);
  }

  if(b.ui.state==="edit"){
    el.innerHTML = editorUI(i);
  }
}

function contentGrid(i){
  return `
  <div class="grid">
    ${card(i,'Text')}
    ${card(i,'Image')}
    ${card(i,'PDF')}
    ${card(i,'Video')}
    ${card(i,'Audio')}
    ${card(i,'Simulation')}
    ${card(i,'Document')}
    ${card(i,'PPT')}
  </div>
  `;
}

function questionGrid(i){
  return `
  <div class="grid">
    ${qcard(i,'Long')}
    ${qcard(i,'MCQ')}
    ${qcard(i,'Multi')}
    ${qcard(i,'TrueFalse')}
    ${qcard(i,'Fill')}
    ${qcard(i,'Match')}
    ${qcard(i,'Sort')}
    ${qcard(i,'Classify')}
    ${qcard(i,'Table')}
    ${qcard(i,'Drawing')}
    ${qcard(i,'Graph')}
  </div>
  `;
}

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
  <h3>${b.mode.toUpperCase()} : ${b.type}</h3>

  ${metaPanel(i)}

  ${b.mode==="content" ? contentEditor(i) : questionEditor(i)}

  ${markschemePanel(i)}

  <button onclick="saveBlock(${i})">Save</button>
  <button onclick="cancelEdit(${i})">Cancel</button>
  `;
}

function metaPanel(i){
  return `
  <div>
    <select id="diff-${i}">
      <option>Easy</option>
      <option>Medium</option>
      <option>Hard</option>
    </select>

    <input placeholder="Marks">
    <input placeholder="Criterion (A.i)">
    <input placeholder="Command term">
    <input placeholder="Tags">
    <textarea placeholder="Internal notes"></textarea>
  </div>
  `;
}

function questionEditor(i){
  let type = blocks[i].type;

  if(type==="MCQ"){
    return `
    <textarea placeholder="Question"></textarea>

    <div id="options-${i}">
      ${mcqOption(i,0)}
      ${mcqOption(i,1)}
    </div>

    <button onclick="addOption(${i})">+ Add Option</button>
    `;
  }

  if(type==="TrueFalse"){
    return `
    <textarea placeholder="Question"></textarea>
    <textarea placeholder="Statement 1"></textarea>
    <select><option>True</option><option>False</option></select>
    `;
  }

  if(type==="Match"){
    return `
    <input placeholder="Left">
    <input placeholder="Right">
    `;
  }

  if(type==="Sort"){
    return `<input placeholder="Items (comma separated)">`;
  }

  if(type==="Classify"){
    return `
    <input placeholder="Category">
    <input placeholder="Items">
    `;
  }

  if(type==="Table"){
    return `<textarea placeholder="Table data"></textarea>`;
  }

  if(type==="Drawing"){
    return `<canvas style="background:white;height:300px;width:100%"></canvas>`;
  }

  if(type==="Graph"){
    return `<div class="graph" id="graph-${i}"></div>
            <button onclick="initGraph(${i})">Load Graph</button>`;
  }

  return `<textarea placeholder="Answer"></textarea>`;
}

function mcqOption(i,n){
  return `
  <div>
    <input placeholder="Option">
    <input type="radio" name="correct-${i}">
  </div>
  `;
}

function addOption(i){
  let div = document.getElementById(`options-${i}`);
  div.innerHTML += mcqOption(i,Date.now());
}

function markschemePanel(i){
  return `
  <textarea placeholder="Markscheme"></textarea>
  <textarea placeholder="Teacher Explanation"></textarea>
  `;
}

function markschemePanel(i){
  return `
  <textarea placeholder="Markscheme"></textarea>
  <textarea placeholder="Teacher Explanation"></textarea>
  `;
}



function addContent(){

  const file = document.getElementById("fileInput").files[0];
  const url = document.getElementById("urlInput").value;

  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      tempPaper.content.push(e.target.result);
      renderContent();
    }
    reader.readAsDataURL(file);
  }

  if(url){
    tempPaper.content.push(url);
    renderContent();
  }
}

function renderContent(){
  const div = document.getElementById("contentArea");
  div.innerHTML="";

  tempPaper.content.forEach(c=>{
    div.innerHTML += `<img src="${c}" class="media">`;
  });
}

function addQuestion(){

  const type = document.getElementById("qType").value;

  tempPaper.questions.push({
    type:type,
    text:document.getElementById("qText").value,
    marks:document.getElementById("marks").value
  });

  renderQuestions();
}

function renderQuestions(){
  const div = document.getElementById("questionArea");
  div.innerHTML="";

  tempPaper.questions.forEach(q=>{
    div.innerHTML += `<p>${q.text} (${q.marks})</p>`;
  });
}

function savePaper(){

  tempPaper.title = document.getElementById("paperTitle").value;
  tempPaper.scenario = document.getElementById("scenario").value;

  let db = loadFromDB();
  db.push(tempPaper);

  saveToDB(db);

  alert("Saved Successfully!");
}
