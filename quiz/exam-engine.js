let filtered = [];
let startTime;
let timerInterval;
let studentName = "";
let currentTopic = "";
let msVisible = false;

/* ================= START ================= */
function startExam(){

studentName = document.getElementById("studentName").value;

if(!studentName){
alert("Enter your name");
return;
}

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
document.getElementById("quiz").innerHTML="<h2>🚧 Coming Soon</h2>";
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

/* ================= RENDER ================= */
function render(){

let html = "";

/* GROUP BY SECTION */
const sections = {A:[],B:[],C:[],D:[]};

filtered.forEach((q,i)=>{
q._index = i;
sections[q.section].push(q);
});

/* LOOP SECTIONS */
Object.keys(sections).forEach(sec=>{

if(sections[sec].length===0) return;

html += `<div class="section-title">Part ${sec}</div>`;

sections[sec].forEach(q=>{

const i = q._index;

html += `<div class="question-box">
<div class="q-header">
<span>Q${i+1}</span>
<span>${q.marks} marks</span>
</div>

<div class="q-text">${highlightCommand(q.question)}</div>`;

/* IMAGE */
if(q.type==="image" && q.image){
html += `<img src="${q.image}" class="q-image">`;
}

/* VIDEO */
if(q.type==="video" && q.video){
html += `<iframe class="q-video" src="${q.video}" allowfullscreen></iframe>`;
}

/* MCQ */
if(q.type==="mcq"){
q.options.forEach(opt=>{
html += `<label class="option">
<input type="radio" name="q${i}" value="${opt}">
${opt}
</label>`;
});
}

/* TEXT */
if(q.type==="text"){
html += `<textarea id="q${i}" placeholder="Write your answer..."></textarea>`;
}

/* DRAG */
if(q.type==="drag"){
q.pairs.forEach((p,j)=>{
html += `<div class="drag-row">
<span>${p.left}</span>
<select id="drag-${i}-${j}">
<option value="">Select</option>
<option>+1</option>
<option>-1</option>
<option>0</option>
</select>
</div>`;
});
}

/* MARKSCHEME */
html += `<div class="markscheme" id="ms-${i}">
<b>Markscheme:</b><br>
${q.markscheme || "❌ No markscheme available for this question"}
</div>`;

html += `</div>`;

});

});

document.getElementById("quiz").innerHTML = html;
}

/* ================= COMMAND TERMS ================= */
function highlightCommand(text){

const commands = [
"Define","Explain","Describe","Evaluate","State","Calculate","Suggest"
];

commands.forEach(cmd=>{
const regex = new RegExp(`\\b${cmd}\\b`, "g");
text = text.replace(regex, `<span class="command">${cmd}</span>`);
});

return text;
}

/* ================= SUBMIT ================= */
function submitExam(){

clearInterval(timerInterval);

let score = 0;

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

}

/* ================= MARKSCHEME ================= */
function toggleMarkscheme(){

msVisible = !msVisible;

filtered.forEach((q,i)=>{
const el = document.getElementById(`ms-${i}`);
if(el){
el.style.display = msVisible ? "block" : "none";
}
});

}

/* ================= PDF ================= */
function downloadPDF(){

const endTime = new Date();
const timeTaken = Math.floor((endTime - startTime)/1000);

let html = `
<h1>${studentName}</h1>
<h3>Topic: ${currentTopic}</h3>
<p>Time: ${timeTaken} seconds</p>
<hr>
`;

filtered.forEach((q,i)=>{

html += `<p><b>Q${i+1}</b>: ${q.question}</p>`;

const text = document.getElementById(`q${i}`);
if(text){
html += `<p><b>Answer:</b> ${text.value}</p>`;
}

html += `<hr>`;
});

const win = window.open("");
win.document.write(html);
win.print();

}
