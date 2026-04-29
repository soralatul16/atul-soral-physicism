let questions = [];
let current = 0;
let score = 0;
let timer;
let timeLeft = 15;
let currentTopic = "";

// ================= START QUIZ =================
function startQuiz(topic) {
  currentTopic = topic;

  let allQ = topic === "mixed"
    ? Object.values(QUESTION_BANK).flat()
    : QUESTION_BANK[topic];

  questions = shuffleQuestionsBalanced(allQ).slice(0, 10);

  current = 0;
  score = 0;

  document.getElementById("topicSelect").style.display = "none";

  loadQuestion();
  trackEvent("quiz_start", topic);
}

// ================= LOAD QUESTION =================
function loadQuestion() {
  if (current >= questions.length) {
    endQuiz();
    return;
  }

  clearInterval(timer);
  timeLeft = 15;

  const q = questions[current];

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
