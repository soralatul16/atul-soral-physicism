function loadUnits(){

let units = [...new Set(papers.map(p=>p.unit))];

let html="";

units.forEach(u=>{
html+=`<div onclick="loadPapers('${u}')">${u}</div>`;
});

document.getElementById("sidebar").innerHTML=html;
}

function loadPapers(unit){

let filtered = papers.filter(p=>p.unit===unit);

let html="";

filtered.forEach(p=>{
html+=`<div onclick="openPaper(${p.id})">${p.title}</div>`;
});

document.getElementById("sidebar").innerHTML=html;
}

function openPaper(id){

let p = papers.find(x=>x.id===id);

let html = `<div class="paper">
<h2>${p.title}</h2>
<p>${p.scenario}</p>`;

/* CONTENT */
p.content.forEach(c=>{
if(c.type==="image") html+=`<img src="${c.url}">`;
if(c.type==="video") html+=`<iframe src="${c.url}"></iframe>`;
});

/* QUESTIONS */
p.questions.forEach((q,i)=>{
html+=`<p><b>Q${i+1}</b> ${q.question}</p>`;

if(q.type==="text"){
html+=`<textarea></textarea>`;
}

});

html+="</div>";

document.getElementById("paperArea").innerHTML=html;
}

loadUnits();
