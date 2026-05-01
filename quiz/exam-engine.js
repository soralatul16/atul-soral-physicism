let filtered = [];
let startTime;

function startExam(){

startTime = new Date();

const topic = document.getElementById("topic").value;
const section = document.getElementById("section").value;
const difficulty = document.getElementById("difficulty").value;

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

if(q.type==="image"){
html+=`<img src="${q.image}" width="200"><br>
<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

if(q.type==="video"){
html+=`<iframe width="300" src="${q.video}"></iframe><br>
<textarea id="q${i}" rows="4" style="width:100%"></textarea>`;
}

html+="</div>";
});

document.getElementById("quiz").innerHTML = html;
}

function submitExam(){

let score=0;

filtered.forEach((q,i)=>{
if(q.type==="mcq"){
const selected=document.querySelector(`input[name="q${i}"]:checked`);
if(selected && selected.value===q.answer){
score+=q.marks;
}
}
});

const endTime = new Date();
const timeTaken = Math.floor((endTime - startTime)/1000);

alert(`Score: ${score} \nTime: ${timeTaken} sec`);
}

function downloadPDF(){

window.print(); // simple PDF for now
}
