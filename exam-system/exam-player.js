const papers = loadFromDB();

const select = document.getElementById("paperSelect");

papers.forEach((p,i)=>{
  select.innerHTML += `<option value="${i}">${p.title}</option>`;
});

function loadPaper(){

  const p = papers[select.value];

  let html = `<div class="card">
  <h2>${p.title}</h2>
  <p>${p.scenario}</p>`;

  p.content.forEach(c=>{
    html += `<img src="${c}" class="media">`;
  });

  p.questions.forEach((q,i)=>{
    html += `<p><b>Q${i+1}</b> ${q.text}</p>`;

    if(q.type==="text"){
      html += `<textarea></textarea>`;
    }
  });

  html += `</div>`;

  document.getElementById("examArea").innerHTML = html;
}
