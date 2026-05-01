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

/* RENDER */
function render(){

let html="";

filtered.forEach((q,i)=>{

html+=`<div class="question-box">
<b>Q${i+1} (${q.marks} marks)</b><br>
${q.question}<br><br>`;

if(q.type==="mcq"){
q.options.forEach(opt=>{
html+=`<label>
<input type="radio" name="q${i}" value="${opt}">
${opt}
</label><br>`;
});
}

if(q.type==="text"){
html+=`<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

if(q.type==="drag"){
q.pairs.forEach((p,index)=>{
html+=`${p.left}
<select id="drag-${i}-${index}">
<option value="">Select</option>
<option>+1</option>
<option>-1</option>
<option>0</option>
</select><br>`;
});
}

html+=`
<div class="markscheme" style="display:none;color:#38bdf8;">
${q.markscheme || ""}
</div></div>`;
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
q.pairs.forEach((p,index)=>{
if(document.getElementById(`drag-${i}-${index}`).value===p.right) c++;
});
score+=(c/q.pairs.length)*q.marks;
}

});

const timeTaken=Math.floor((new Date()-startTime)/1000);

alert(`Score: ${score}\nTime: ${timeTaken}s`);

saveProgress();

}

/* MARKSCHEME */
function toggleMarkscheme(){

msVisible=!msVisible;

document.querySelectorAll(".markscheme").forEach(el=>{
el.style.display = msVisible ? "block":"none";
});

}

/* SAVE */
function saveProgress(){
localStorage.setItem("progress","saved");
}

/* PDF */
function downloadPDF(){

let content = `<h2>${studentName}</h2><hr>`;

filtered.forEach((q,i)=>{
content+=`<p>${q.question}</p><hr>`;
});

const win=window.open("");
win.document.write(content);
win.print();

}
