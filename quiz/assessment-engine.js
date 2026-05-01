function loadAssessment(){

  const selected = assessments[0];

  let html = `<h2>${selected.title}</h2>`;
  html += `<p><b>Criterion:</b> ${selected.criterion}</p><hr>`;

  html += `
    <img src="../Images/${selected.image}.png" 
         style="max-width:100%; margin-bottom:20px;">
  `;

  selected.parts.forEach((p,i)=>{
    html += `
      <div class="question">
        <b>Q${i+1} (${p.marks} marks)</b><br><br>
        ${p.question}
        <textarea rows="4"></textarea>
      </div>
    `;
  });

  document.getElementById("assessmentBox").innerHTML = html;
}
