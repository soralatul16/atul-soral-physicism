let papers = JSON.parse(localStorage.getItem("papers") || "[]");

/* LOAD SIDEBAR */
function loadUnits(){

let units = [...new Set(papers.map(p=>p.unit))];

let html="";

units.forEach(u=>{
html+=`<div onclick="loadTopics('${u}')">${u}</div>`;
});

document.getElementById("sidebar").innerHTML=html;
}

/* TOPICS */
function loadTopics(unit){

let topics = papers.filter(p=>p.unit===unit);

let html="";

topics.forEach(p=>{
html+=`<div onclick="openPaper('${p.id}')">${p.title}</div>`;
});

document.getElementById("main").innerHTML=html;
}

/* OPEN PAPER */
function openPaper(id){

let p = papers.find(x=>x.id===id);

let html=`<h2>${p.title}</h2><p>${p.scenario}</p>`;

/* CONTENT */
p.content.forEach(c=>{
if(c.type==="image"){
html+=`<img src="${c.src}" width="300">`;
}
if(c.type==="video"){
html+=`<iframe src="${c.src}" width="400"></iframe>`;
}
});

/* QUESTIONS */
p.questions.forEach((q,i)=>{

html+=`<div class="question-box">
<b>Q${i+1}</b> ${q.question}`;

if(q.type==="mcq"){
q.options.forEach(opt=>{
html+=`<br><input type="radio">${opt}`;
});
}

if(q.type==="text"){
html+=`<textarea></textarea>`;
}

html+=`</div>`;
});

document.getElementById("main").innerHTML=html;
}

/* INIT */
loadUnits();
