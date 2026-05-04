let tempPaper = {
  content: [],
  questions: []
};

function switchMode(mode){
  document.getElementById("teacherPanel").style.display =
    mode==="teacher" ? "block" : "none";
}

/* CONTENT */
function addContent(type){

if(type==="text"){
tempPaper.content.push({type:"text", value:""});
}

if(type==="image"){
const url = prompt("Paste Image URL");
tempPaper.content.push({type:"image", src:url});
}

if(type==="video"){
const url = prompt("Paste YouTube Embed URL");
tempPaper.content.push({type:"video", src:url});
}

renderContent();
}

function renderContent(){
let html="";
tempPaper.content.forEach(c=>{
if(c.type==="image"){
html+=`<img src="${c.src}" width="200">`;
}
if(c.type==="video"){
html+=`<iframe src="${c.src}" width="300"></iframe>`;
}
if(c.type==="text"){
html+=`<textarea placeholder="Text"></textarea>`;
}
});
document.getElementById("contentBox").innerHTML=html;
}

/* QUESTIONS */
function addQ(type){

const q = {
type:type,
question:"",
marks:1,
criteria:"A"
};

if(type==="mcq"){
q.options=["","","",""];
q.answer="";
}

tempPaper.questions.push(q);
renderQ();
}

function renderQ(){

let html="";

tempPaper.questions.forEach((q,i)=>{

html+=`<div class="question-box">

<input placeholder="Question"
oninput="tempPaper.questions[${i}].question=this.value">

<select onchange="tempPaper.questions[${i}].criteria=this.value">
<option>A</option><option>B</option><option>C</option><option>D</option>
</select>

<input type="number" value="1"
oninput="tempPaper.questions[${i}].marks=this.value">
`;

if(q.type==="mcq"){
q.options.forEach((o,j)=>{
html+=`
<input placeholder="Option"
oninput="tempPaper.questions[${i}].options[${j}]=this.value">`;
});

html+=`
<input placeholder="Answer"
oninput="tempPaper.questions[${i}].answer=this.value">`;
}

html+=`</div>`;
});

document.getElementById("questionBox").innerHTML=html;
}

/* SAVE */
function savePaper(){

const paper = {
id: Date.now().toString(),
unit: document.getElementById("unit").value,
topic: document.getElementById("topic").value,
title: document.getElementById("paperTitle").value,
scenario: document.getElementById("scenario").value,
content: tempPaper.content,
questions: tempPaper.questions
};

let db = JSON.parse(localStorage.getItem("papers") || "[]");
db.push(paper);
localStorage.setItem("papers", JSON.stringify(db));

alert("Saved!");
}
