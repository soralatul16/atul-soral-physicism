const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "";
let allQ = questionBank.filter(q => q.topic === topic);

if(allQ.length === 0){
  allQ = questionBank;
}

function shuffle(arr){
  return arr.sort(()=>0.5-Math.random());
}

function pickMixed(qs,total=10){
  const easy = qs.filter(q=>q.level==="easy");
  const med = qs.filter(q=>q.level==="medium");
  const hard = qs.filter(q=>q.level==="hard");

  return shuffle([
    ...easy.slice(0, Math.floor(total*0.25)),
    ...med.slice(0, Math.floor(total*0.30)),
    ...hard.slice(0, Math.floor(total*0.45))
  ]);
}

function shuffleOptions(q){
  let opts = [...q.options];
  opts = shuffle(opts);
  return {...q, options:opts, answer:opts.indexOf(q.answer)};
}

let questions = pickMixed(allQ,10).map(q=>shuffleOptions(q));

let i=0, score=0;

function load(){
  if(i>=questions.length){
    document.body.innerHTML = `<h2>Score: ${score}/${questions.length}</h2>`;
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

function check(ans){
  if(ans===questions[i].answer) score++;
  i++;
  load();
}

load();  const q = questions[current];

  document.getElementById("questionBox").innerText = q.q;

  const optionsDiv = document.getElementById("optionsBox");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, index) => {
    optionsDiv.innerHTML += `
      <button class="option" onclick="checkAnswer(${index})">
        ${String.fromCharCode(65 + index)}. ${opt}
      </button>
    `;
  });

  document.getElementById("progress").innerText =
    `Q ${current + 1} / ${questions.length}`;

  startTimer();
}

// ================= TIMER =================
function startTimer() {
  document.getElementById("timer").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      current++;
      loadQuestion();
    }
  }, 1000);
}

// ================= CHECK ANSWER =================
function checkAnswer(selected) {
  clearInterval(timer);

  if (selected === questions[current].answer) {
    score++;
  }

  current++;
  loadQuestion();
}

// ================= END QUIZ =================
function endQuiz() {
  saveScore();

  document.getElementById("quizBox").innerHTML = `
    <h2>🎉 Quiz Completed</h2>
    <p>Score: ${score} / ${questions.length}</p>
    <button onclick="location.reload()">🔄 Restart</button>
    <button onclick="showLeaderboard()">🏆 Leaderboard</button>
  `;

  trackEvent("quiz_complete", score);
}

// ================= LEADERBOARD =================
function saveScore() {
  let data = JSON.parse(localStorage.getItem("leaderboard") || "[]");

  data.push({
    topic: currentTopic,
    score: score,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("leaderboard", JSON.stringify(data));
}

function showLeaderboard() {
  let data = JSON.parse(localStorage.getItem("leaderboard") || "[]");

  let html = "<h2>🏆 Leaderboard</h2>";

  data.slice(-10).reverse().forEach(d => {
    html += `<p>${d.topic} - ${d.score} (${d.date})</p>`;
  });

  html += `<button onclick="location.reload()">⬅ Back</button>`;

  document.getElementById("quizBox").innerHTML = html;
}

// ================= ANALYTICS =================
function trackEvent(name, value) {
  if (typeof gtag !== "undefined") {
    gtag("event", name, {
      event_category: "quiz",
      event_label: value
    });
  }
}}

function checkAnswer(selected) {
  const correct = questions[current].answer;

  if (selected === correct) {
    score++;
  }

  current++;
  loadQuestion();
}

function endQuiz() {
  document.getElementById("quizBox").innerHTML = `
    <h2>🎉 Quiz Completed</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <button onclick="location.reload()">🔄 Restart</button>
  `;

  trackEvent("quiz_complete", score);
}


// ================================
// GOOGLE ANALYTICS EVENTS
// ================================

function trackEvent(name, value) {
  if (typeof gtag !== "undefined") {
    gtag("event", name, {
      event_category: "quiz",
      event_label: value
    });
  }
}
