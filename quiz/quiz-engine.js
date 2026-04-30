const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "";

/* =========================
   FILTER QUESTIONS
========================= */
let filtered = questionBank.filter(q =>
  q.topic === topic && q.image === image
);

if(filtered.length < 10){
  const extra = questionBank.filter(q => q.topic === topic);
  filtered = [...filtered, ...extra];
}

/* =========================
   SHUFFLE
========================= */
function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

/* =========================
   BUILD 10 QUESTIONS
========================= */
function get10(qs){
  let arr = shuffle([...qs]);
  while(arr.length < 10){
    arr.push(qs[Math.floor(Math.random()*qs.length)]);
  }
  return arr.slice(0,10);
}

/* =========================
   SHUFFLE OPTIONS
========================= */
function prepare(q){
  let opts = shuffle([...q.options]);
  return {
    ...q,
    options: opts,
    correctIndex: opts.indexOf(q.answer)
  };
}

let questions = get10(filtered).map(prepare);

/* =========================
   VARIABLES
========================= */
let index = 0;
let score = 0;
let selected = null;
let userAnswers = [];

/* =========================
   LOAD QUESTION
========================= */
function loadQuestion(){
  selected = null;

  const q = questions[index];
  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt, i)=>{
    html += `<div class="option" onclick="selectOption(this, ${i})">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;
  document.getElementById("progress").innerText =
    `Question ${index+1} of ${questions.length}`;
}

/* =========================
   SELECT OPTION
========================= */
function selectOption(element, i){

  // Remove selection from all
  document.querySelectorAll(".option").forEach(opt=>{
    opt.classList.remove("selected");
  });

  // Add selection to clicked one
  element.classList.add("selected");

  selected = i;
}

/* =========================
   NEXT QUESTION
========================= */
function nextQuestion(){

  if(selected === null){
    alert("Please select an answer!");
    return;
  }

  const q = questions[index];

  if(selected === q.correctIndex){
    score++;
  }

  userAnswers.push({
    question: q,
    selected: selected
  });

  index++;

  if(index >= questions.length){
    showSummary();
  } else {
    loadQuestion();
  }
}

/* =========================
   SUMMARY
========================= */
function showSummary(){

  document.getElementById("quiz-area").style.display = "none";
  const box = document.getElementById("summary-area");
  box.style.display = "block";

  let total = questions.length;
  let percentage = Math.round((score / total) * 100);

  let html = `
    <h2>🎉 Quiz Completed</h2>
    <h3>Total Score: ${score} / ${total}</h3>
    <h4>Percentage: ${percentage}%</h4>
    <hr>
  `;

  userAnswers.forEach((item, i)=>{
    const q = item.question;
    const correct = q.options[q.correctIndex];
    const chosen = q.options[item.selected];

    const isCorrect = item.selected === q.correctIndex;

    html += `
      <div style="
        margin-bottom:15px;
        padding:12px;
        border-radius:10px;
        background:${isCorrect ? '#14532d' : '#7f1d1d'};
      ">

        <b>Q${i+1}: ${q.question}</b><br><br>

        Your Answer: 
        <span style="color:${isCorrect ? '#4ade80' : '#f87171'};">
          ${chosen}
        </span><br>

        Correct Answer: 
        <span style="color:#4ade80;">
          ${correct}
        </span><br><br>

        <i>${q.explanation || ""}</i>

      </div>
    `;
  });

  html += `
    <button onclick="location.reload()">🔄 Retry</button>
    <button onclick="window.location.href='../waves.html'">📡 Back to Waves</button>
  `;

  box.innerHTML = html;
}
/* =========================
   START
========================= */
loadQuestion();
