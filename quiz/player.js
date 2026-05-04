let papers = JSON.parse(localStorage.getItem("papers")) || [];

/* LOAD UNITS */
function loadUnits(){

let units = [...new Set(papers.map(p=>p.unit))];

let html="";

units.forEach(u=>{
html+=`<div onclick="loadPapers('${u}')">📘 ${u}</div>`;
});

document.getElementById("sidebarList").innerHTML=html;
}

/* LOAD PAPERS */
function loadPapers(unit){

let filtered = papers.filter(p=>p.unit===unit);

let html="";

filtered.forEach(p=>{
html+=`<div onclick="openPaper(${p.id})">📄 ${p.title}</div>`;
});

document.getElementById("sidebarList").innerHTML=html;
}

/* OPEN PAPER */
function openPaper(id){

let p = papers.find(x=>x.id===id);

let html = `<div class="paper">
<h2>${p.title}</h2>
<p>${p.scenario}</p>`;

/* CONTENT */
p.content.forEach(c=>{
if(c.type==="image"){
html+=`<img src="${c.url}">`;
}
if(c.type==="video"){
html+=`<iframe src="${c.url}" allowfullscreen></iframe>`;
}
});

/* QUESTIONS */
p.questions.forEach((q,i)=>{
html+=`<div class="question">
<b>Q${i+1}</b> ${q.question}`;

if(q.type==="text"){
html+=`<textarea></textarea>`;
}

html+=`</div>`;
});

html+="</div>";

document.getElementById("paperArea").innerHTML=html;
}

/* SEARCH */
function search(text){

text=text.toLowerCase();

let html="";

papers
.filter(p=>p.title.toLowerCase().includes(text))
.forEach(p=>{
html+=`<div onclick="openPaper(${p.id})">${p.title}</div>`;
});

document.getElementById("sidebarList").innerHTML=html;
}

/* INIT */
loadUnits();
