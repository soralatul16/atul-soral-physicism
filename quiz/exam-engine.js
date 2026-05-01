let currentExam = [];
let answers = [];

function startExam(){

  console.log("Start clicked");

  const topic = document.getElementById("chapter").value;

  currentExam = examData.filter(q => 
    !topic || q.topic === topic
  );

  if(currentExam.length === 0){
    document.getElementById("quiz").innerHTML =
      "<h3>🚧 Coming Soon</h3>";
    return;
  }

  renderExam();
}

function renderExam(){

  let html = "";

  currentExam.forEach((q,i)=>{

    html += `<div style="margin-bottom:20px;">
      <b>Q${i+1}. ${q.question}</b><br>`;

    q.options.forEach(opt=>{
      html += `
      <label>
        <input type="radio" name="q${i}" value="${opt}">
        ${opt}
      </label><br>`;
    });

    html += `</div>`;
  });

  html += `<button onclick="submitExam()">Submit</button>`;

  document.getElementById("quiz").innerHTML = html;
}

function submitExam(){

  let score = 0;

  currentExam.forEach((q,i)=>{
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    if(selected && selected.value === q.answer){
      score += q.marks;
    }
  });

  document.getElementById("quiz").innerHTML =
    `<h2>Score: ${score} / ${currentExam.length}</h2>`;
}
