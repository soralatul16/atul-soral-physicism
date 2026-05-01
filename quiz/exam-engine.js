let filtered = [];
let startTime;
let studentName = "";
let currentTopic = "";
let msVisible = false;

/* ================= START EXAM ================= */
function startExam(){

studentName = document.getElementById("studentName").value;

if(!studentName){
alert("Enter your name first");
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

if(filtered.length === 0){
document.getElementById("quiz").innerHTML =
"<h2>🚧 Coming Soon</h2>";
return;
}

render();
}

/* ================= RENDER ================= */
function render(){

let html="";

filtered.forEach((q,i)=>{

html+=`<div class="question-box">
<b>Q${i+1} (${q.marks} marks)</b><br>
${q.question}<br><br>`;

/* ===== MCQ ===== */
if(q.type==="mcq"){
q.options.forEach(opt=>{
html+=`<label>
<input type="radio" name="q${i}" value="${opt}">
${opt}
</label><br>`;
});
}

/* ===== TEXT ===== */
if(q.type==="text"){
html+=`<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

/* ===== IMAGE ===== */
if(q.type==="image"){
html+=`<img src="${q.image}" width="250"><br>
<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

/* ===== VIDEO ===== */
if(q.type==="video"){
html+=`<iframe width="350" src="${q.video}"></iframe><br>
<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

/* ===== DRAG ===== */
if(q.type==="drag"){

html+=`<div id="drag-${i}">`;

q.pairs.forEach((p,index)=>{
html+=`
<div style="display:flex;justify-content:space-between;margin:10px 0;">
<span>${p.left}</span>

<select id="drag-${i}-${index}">
<option value="">Select</option>
<option>+1</option>
<option>-1</option>
<option>0</option>
</select>

</div>`;
});

html+=`</div>`;
}

/* ===== MARKSCHEME ===== */
html+=`
<div class="markscheme" style="display:none;color:#38bdf8;">
<b>Markscheme:</b> ${q.markscheme || "Not available"}
</div>
</div>`;
});

document.getElementById("quiz").innerHTML = html;
}

/* ================= SUBMIT ================= */
function submitExam(){

let score = 0;

filtered.forEach((q,i)=>{

/* MCQ */
if(q.type==="mcq"){
const selected = document.querySelector(`input[name="q${i}"]:checked`);
if(selected && selected.value === q.answer){
score += q.marks;
}
}

/* DRAG */
if(q.type==="drag"){
let correct = 0;

q.pairs.forEach((p,index)=>{
const val = document.getElementById(`drag-${i}-${index}`).value;
if(val === p.right) correct++;
});

score += (correct / q.pairs.length) * q.marks;
}

});

const endTime = new Date();
const timeTaken = Math.floor((endTime - startTime)/1000);

const level = getIBLevel(score);

alert(`Score: ${score}
IB Level: ${level}
Time: ${timeTaken} sec`);

saveProgress();
}

/* ================= IB LEVEL ================= */
function getIBLevel(score){

if(score<20) return 1;
if(score<30) return 2;
if(score<40) return 3;
if(score<50) return 4;
if(score<60) return 5;
if(score<70) return 6;
if(score<80) return 7;
return 8;

}

/* ================= MARKSCHEME ================= */
function toggleMarkscheme(){

msVisible = !msVisible;

document.querySelectorAll(".markscheme").forEach(el=>{
el.style.display = msVisible ? "block" : "none";
});

}

/* ================= SAVE ================= */
function saveProgress(){

const data = [];

filtered.forEach((q,i)=>{

if(q.type==="mcq"){
const selected = document.querySelector(`input[name="q${i}"]:checked`);
data[i] = selected ? selected.value : null;
}

else{
const el = document.getElementById(`q${i}`);
if(el) data[i] = el.value;
}

});

localStorage.setItem("exam-progress", JSON.stringify(data));
}

/* ================= PDF ================= */
function downloadPDF(){
window.print();
}
