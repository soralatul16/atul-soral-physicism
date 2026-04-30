const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "default";

/* ===== FILTER (image first) ===== */
let filtered = questionBank.filter(q =>
  q.topic === topic && q.image === image
);

/* ===== TOP-UP FROM SAME TOPIC ===== */
let pool = [...filtered];

if (pool.length < 10) {
  const topicPool = questionBank.filter(q => q.topic === topic);
  const extra = topicPool.filter(q => !pool.includes(q));
  pool = [...pool, ...extra];
}

/* ===== SHUFFLE ===== */
function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

/* ===== ENSURE EXACTLY 10 QUESTIONS ===== */
function buildTen(qs){
  let selected = shuffle([...qs]);

  // If still less than 10, allow safe repeats
  while (selected.length < 10 && qs.length > 0){
    selected.push(qs[Math.floor(Math.random()*qs.length)]);
  }

  return selected.slice(0,10);
}

/* ===== SHUFFLE OPTIONS ===== */
function shuffleOptions(q){
  let opts = shuffle([...q.options]);
  return {
    ...q,
    options:opts,
    answerIndex:opts.indexOf(q.answer)
  };
}

/* ===== FINAL QUESTIONS ===== */
let questions = buildTen(pool).map(q => shuffleOptions(q));

let index = 0;
let score = 0;
let userAnswers = [];
let selected = null;

/* ===== LOAD QUESTION ===== */
function loadQuestion(){
  const q = questions[index];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt,i)=>{
    html += `<div class="option" onclick="select(${i})">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;
  document.getElementById("progress").innerText =
    `Question ${index+1} of ${questions.length}`;
}

/* ===== SELECT ===== */
function select(i){
  selected = i;
}

/* ===== NEXT ===== */
function nextQuestion(){
  if(selected === null) return;

  if(selected === questions[index].answerIndex){
    score++;
  }

  userAnswers.push({
    question:questions[index],
    selected:selected
  });

  selected = null;
  index++;

  if(index >= questions.length){
    showSummary();
  }else{
    loadQuestion();
  }
}

/* ===== SUMMARY ===== */
function showSummary(){
  document.getElementById("quiz-area").style.display="none";
  const box = document.getElementById("summary-area");
  box.style.display="block";

  let html = `<h2>🎉 Quiz Completed</h2>`;
  html += `<p><b>Score: ${score} / ${questions.length}</b></p><hr>`;

  userAnswers.forEach((item,i)=>{
    const q = item.question;
    const correct = q.options[q.answerIndex];
    const selectedAns = q.options[item.selected];

    html += `
    <div style="margin-bottom:15px;">
      <b>Q${i+1}: ${q.question}</b><br>
      Your Answer: ${selectedAns}<br>
      Correct Answer: ${correct}<br>
      <i>${q.explanation || ""}</i>
    </div>
    `;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry</button>`;
  html += `<button class="next-btn" onclick="history.back()">⬅ Back to Images</button>`;

  box.innerHTML = html;
}

/* ===== START ===== */
loadQuestion();
