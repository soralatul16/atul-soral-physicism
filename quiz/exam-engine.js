let filtered = [];
let startTime;
let timerInterval;
let studentName = "";
let currentTopic = "";
let msVisible = false;

/* START */
function startExam(){

studentName = document.getElementById("studentName").value;

if(!studentName){
alert("Enter your name");
return;
}

localStorage.setItem("studentName", studentName);

startTime = new Date();

const topic = document.getElementById("topic").value;
const section = document.getElementById("section").value;
const difficulty = document.getElementById("difficulty").value;

currentTopic = topic;

filtered = examData.filter(q =>
(!topic || q.topic === topic) &&
(!section || q.section === section) &&
(!difficulty || q.difficulty === difficulty)
);

if(filtered.length===0){
document.getElementById("quiz").innerHTML="<h2 style='text-align:center;'>🚧 Coming Soon</h2>";
return;
}

render();

/* TIMER */
clearInterval(timerInterval);
timerInterval = setInterval(()=>{
const sec = Math.floor((new Date()-startTime)/1000);
document.getElementById("timer").innerText = `⏱ ${sec}s`;
},1000);

}

/* RENDER (IB SECTIONS) */
function render(){

let sections = {A:[],B:[],C:[],D:[]};

filtered.forEach(q=>{
if(!sections[q.section]) sections[q.section]=[];
sections[q.section].push(q);
});

let html="";

Object.keys(sections).forEach(sec=>{

if(sections[sec].length===0) return;

html+=`<div class="section-title">Part ${sec}</div>`;

sections[sec].forEach((q,i)=>{

const index = filtered.indexOf(q);

html+=`<div class="question-box">
<b>Q${index+1} (${q.marks} marks)</b><br>
${q.question}<br>`;

/* IMAGE */
if(q.type==="image"){
html+=`<img src="${q.image}" class="q-image">`;
}

/* VIDEO */
if(q.type==="video"){
html+=`<iframe class="q-video" src="${q.video}"></iframe>`;
}

/* MCQ */
if(q.type==="mcq"){
q.options.forEach(opt=>{
html+=`<label class="option">
<input type="radio" name="q${index}" value="${opt}"> ${opt}
</label>`;
});
}

/* TEXT */
if(q.type==="text"){
html+=`<textarea id="q${index}"></textarea>`;
}

/* DRAG */
if(q.type==="drag"){
q.pairs.forEach((p,j)=>{
html+=`<div class="drag-row">
<span>${p.left}</span>
<select id="drag-${index}-${j}">
<option value="">Select</option>
<option>+1</option>
<option>-1</option>
<option>0</option>
</select>
</div>`;
});
}

html+=`<div class="markscheme">${q.markscheme || ""}</div></div>`;

});

});

document.getElementById("quiz").innerHTML = html;
}

/* SUBMIT */
function submitExam(){

clearInterval(timerInterval);

let score=0;

filtered.forEach((q,i)=>{

if(q.type==="mcq"){
const sel=document.querySelector(`input[name="q${i}"]:checked`);
if(sel && sel.value===q.answer) score+=q.marks;
}

if(q.type==="drag"){
let c=0;
q.pairs.forEach((p,j)=>{
if(document.getElementById(`drag-${i}-${j}`).value===p.right) c++;
});
score+=(c/q.pairs.length)*q.marks;
}

});

const timeTaken=Math.floor((new Date()-startTime)/1000);

alert(`Score: ${score}\nTime: ${timeTaken}s`);

sendToSheet(score,timeTaken);

}

/* MARKSCHEME */
function toggleMarkscheme(){
msVisible=!msVisible;
document.querySelectorAll(".markscheme").forEach(el=>{
el.style.display = msVisible ? "block":"none";
});
}

/* GOOGLE SHEETS */
function sendToSheet(score,time){

fetch("YOUR_SCRIPT_URL",{
method:"POST",
body: JSON.stringify({
name: studentName,
topic: currentTopic,
score: score,
time: time
})
});

}

/* PDF */
function downloadPDF(){

let content = `<h2>${studentName}</h2><p>${currentTopic}</p><hr>`;

filtered.forEach((q,i)=>{
content+=`<p><b>Q${i+1}</b>: ${q.question}</p><hr>`;
});

const win=window.open("");
win.document.write(content);
win.print();

}
