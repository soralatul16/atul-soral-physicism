const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "";

function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

/* FILTER QUESTIONS */
let filtered = questionBank.filter(q =>
  q.topic === topic && q.image === image
);

if(filtered.length === 0){
  filtered = questionBank.filter(q => q.topic === topic);
}

/* MIX DIFFICULTY */
function mixQuestions(qs, total=10){
  const easy = qs.filter(q=>q.level==="easy");
  const medium = qs.filter(q=>q.level==="medium");
  const hard = qs.filter(q=>q.level==="hard");

  return shuffle([
    ...easy.slice(0, Math.floor(total*0.25)),
    ...medium.slice(0, Math.floor(total*0.30)),
    ...hard.slice(0, Math.floor(total*0.45))
  ]);
}

/* SHUFFLE OPTIONS */
function shuffleOptions(q){
  let opts = shuffle([...q.options]);
  return {...q, options:opts, answer:opts.indexOf(q.answer)};
}

let questions = mixQuestions(filtered,10).map(q=>shuffleOptions(q));

let i=0, score=0;

/* LOAD QUESTION */
function load(){
  if(i>=questions.length){
    showSummary();
    return;
  }

  let q = questions[i];

  document.getElementById("q").innerText = q.question;

  let html="";
  q.options.forEach((o,idx)=>{
    html += `<button class="option" onclick="check(${idx})">${o}</button>`;
  });

  document.getElementById("opts").innerHTML = html;
  document.getElementById("progress").innerText = `Q ${i+1}/${questions.length}`;
}

/* CHECK ANSWER */
function check(ans){
  if(ans===questions[i].answer) score++;
  i++;
  load();
}

/* SUMMARY */
function showSummary(){
  let html = `<h2>🎉 Completed</h2>`;
  html += `<p>Score: ${score}/${questions.length}</p><hr>`;

  questions.forEach((q, idx)=>{
    html += `
      <div style="text-align:left;margin:10px">
      <b>Q${idx+1}: ${q.question}</b><br>
      Correct Answer: ${q.options[q.answer]}
      </div>
    `;
  });

  html += `<br><button onclick="location.reload()">🔄 Retry</button>`;

  document.body.innerHTML = html;
}

load();
