const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "default";

/* FILTER QUESTIONS */
let filtered = questionBank.filter(q =>
  q.topic === topic && q.image === image
);

/* fallback */
if(filtered.length === 0){
  filtered = questionBank.filter(q => q.topic === topic);
}

/* SHUFFLE */
function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

/* CRITERIA MIX */
function pickQuestions(qs, total=10){

  const A = qs.filter(q=>q.criterion==="A");
  const B = qs.filter(q=>q.criterion==="B");
  const C = qs.filter(q=>q.criterion==="C");
  const D = qs.filter(q=>q.criterion==="D");

  function pick(arr,n){
    return shuffle(arr).slice(0,n);
  }

  let selected = [
    ...pick(A,4),
    ...pick(B,2),
    ...pick(C,2),
    ...pick(D,2)
  ];

  // 🔥 FILL REMAINING QUESTIONS
  if(selected.length < total){
    const remaining = qs.filter(q => !selected.includes(q));
    selected = [...selected, ...shuffle(remaining).slice(0, total - selected.length)];
  }

  // 🔥 FINAL SAFETY
  return shuffle(selected).slice(0,total);
}
  const A = qs.filter(q=>q.criterion==="A");
  const B = qs.filter(q=>q.criterion==="B");
  const C = qs.filter(q=>q.criterion==="C");
  const D = qs.filter(q=>q.criterion==="D");

  function pick(arr,n){
    return shuffle(arr).slice(0,n);
  }

  return shuffle([
    ...pick(A,4),
    ...pick(B,2),
    ...pick(C,2),
    ...pick(D,2)
  ]);
}

/* SHUFFLE OPTIONS */
function shuffleOptions(q){
  let opts = shuffle([...q.options]);
  return {
    ...q,
    options:opts,
    answerIndex:opts.indexOf(q.answer)
  };
}

/* FINAL QUESTIONS */
let questions = pickQuestions(filtered,10).map(q=>shuffleOptions(q));

let index = 0;
let score = 0;
let userAnswers = [];

/* LOAD QUESTION */
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

let selected = null;

function select(i){
  selected = i;
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
  }else{
    loadQuestion();
  }
}

/* SUMMARY */
function showSummary(){

  document.getElementById("quiz-area").style.display="none";
  const box = document.getElementById("summary-area");
  box.style.display="block";

  let html = `<h2>🎉 Quiz Completed</h2>`;
  html += `<p><b>Score: ${score} / ${questions.length}</b></p><hr>`;

  userAnswers.forEach((item,i)=>{
    const q = item.question;
    const correct = q.options[q.answerIndex];
    const selected = q.options[item.selected];

    html += `
    <div style="margin-bottom:15px;">
      <b>Q${i+1}: ${q.question}</b><br>
      Your Answer: ${selected}<br>
      Correct Answer: ${correct}<br>
      <i>${q.explanation}</i>
    </div>
    `;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry</button>`;

  box.innerHTML = html;
}

/* START */
loadQuestion();
