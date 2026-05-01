function loadAssessment(){

  let html = `<h2>${assessment.title}</h2>`;
  html += `<p><b>${assessment.criterion}</b></p><hr>`;

  html += `
    <img src="../Images/${assessment.image}.png" 
         style="max-width:100%; margin-bottom:20px;">
  `;

  assessment.questions.forEach((q,i)=>{
    html += `
      <div class="question">
        <b>Q${i+1} (${q.marks} marks)</b><br><br>
        ${q.text}
        <textarea rows="4"></textarea>
      </div>
    `;
  });

  document.getElementById("assessmentBox").innerHTML = html;
}
