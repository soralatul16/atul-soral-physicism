const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "";

/* DEBUG LOG */
console.log("Topic:", topic);
console.log("Image:", image);
console.log("Total Questions:", questionBank.length);

/* FILTER */
let filtered = questionBank.filter(q =>
  q.topic === topic && q.image === image
);

/* FALLBACK */
if(filtered.length < 10){
  const topicQuestions = questionBank.filter(q => q.topic === topic);
  filtered = [...filtered, ...topicQuestions];
}

/* SHUFFLE */
function shuffle(arr){
  return arr.sort(()=>0.5 - Math.random());
}

/* PICK 10 */
function pickQuestions(qs){
  return shuffle(qs).slice(0,10);
}

/* SHUFFLE OPTIONS */
function shuffleOptions(q){
  let opts = shuffle([...q.options]);

  return {
    ...q,
    options: opts,
    answerIndex: opts.indexOf(q.answer)
  };
}

/* FINAL */
let questions = pickQuestions(filtered).map(q=>shuffleOptions(q));

if(questions.length === 0){
  document.body.innerHTML = "<h2 style='color:white;text-align:center;'>❌ No questions found</h2>";
}

let index = 0;
let score = 0;
let userAnswers = [];
let selected = null;

/* LOAD */
function loadQuestion(){
  const q = questions[index];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt,i)=>{
    html += `<div class="option" onclick="select(${i}, this)">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;

  document.getElementById("progress").innerText =
    `Question ${index+1} of ${questions.length}`;
}

/* SELECT */
function select(i, el){
  selected = i;

  document.querySelectorAll(".option").forEach(o=>{
    o.classList.remove("selected");
  });

  el.classList.add("selected");
}

/* NEXT */
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
  } else {
    loadQuestion();
  }
}

/* SUMMARY */
function showSummary(){

  document.getElementById("quiz-area").style.display="none";
  const box = document.getElementById("summary-area");
  box.style.display="block";

  let html = `<h2>🎉 Quiz Completed</h2>`;
  html += `<h3>Total Score: ${score} / ${questions.length}</h3><hr>`;

  userAnswers.forEach((item,i)=>{
    const q = item.question;
    const correct = q.options[q.answerIndex];
    const selectedAns = q.options[item.selected];

    const isCorrect = selectedAns === correct;

    html += `
    <div style="
      margin-bottom:15px;
      padding:10px;
      border-radius:8px;
      background:${isCorrect ? '#14532d' : '#7f1d1d'};
    ">
      <b>Q${i+1}: ${q.question}</b><br>
      Your Answer: ${selectedAns}<br>
      Correct Answer: ${correct}<br>
      <i>${q.explanation}</i>
    </div>
    `;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry</button>`;

  box.innerHTML = html;
  window.scrollTo(0,0);
}

/* START */
loadQuestion();/* FINAL QUESTIONS */
let questions = pickQuestions(filtered, 10).map(q => shuffleOptions(q));

let index = 0;
let score = 0;
let userAnswers = [];

/* LOAD QUESTION */
function loadQuestion(){
  const q = questions[index];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt,i)=>{
    html += `<div class="option" onclick="select(${i}, this)">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;

  document.getElementById("progress").innerText =
    `Question ${index+1} of ${questions.length}`;
}

let selected = null;

/* SELECT OPTION */
function select(i, element){
  selected = i;

  document.querySelectorAll(".option").forEach(opt=>{
    opt.classList.remove("selected");
  });

  element.classList.add("selected");
}

/* NEXT */
function nextQuestion(){
  if(selected === null) return;

  if(selected === questions[index].answerIndex){
    score++;
  }

  userAnswers.push({
    question: questions[index],
    selected: selected
  });

  selected = null;
  index++;

  if(index >= questions.length){
    showSummary();
  } else {
    loadQuestion();
  }
}

/* SUMMARY */
function showSummary(){

  document.getElementById("quiz-area").style.display="none";
  const box = document.getElementById("summary-area");
  box.style.display="block";

  let html = `<h2>🎉 Quiz Completed</h2>`;
  html += `<p><b>Total Score: ${score} / ${questions.length}</b></p><hr>`;

  userAnswers.forEach((item,i)=>{
    const q = item.question;
    const correct = q.options[q.answerIndex];
    const selectedAns = q.options[item.selected];

    const isCorrect = selectedAns === correct;

    html += `
    <div style="
      margin-bottom:15px;
      padding:10px;
      border-radius:8px;
      background:${isCorrect ? '#14532d' : '#7f1d1d'};
    ">
      <b>Q${i+1}: ${q.question}</b><br>
      Your Answer: ${selectedAns}<br>
      Correct Answer: ${correct}<br>
      <i>${q.explanation}</i>
    </div>
    `;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry</button>`;

  box.innerHTML = html;

  window.scrollTo(0,0);
}

/* START */
loadQuestion();
