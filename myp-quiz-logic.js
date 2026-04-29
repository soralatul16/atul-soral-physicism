let questions = [];
let current = 0;
let score = 0;

function startQuiz(topic) {
  questions = shuffleQuestionsBalanced(QUESTION_BANK[topic]);
  current = 0;
  score = 0;
  loadQuestion();

  trackEvent("quiz_start", topic);
}

function loadQuestion() {
  if (current >= questions.length) {
    endQuiz();
    return;
  }

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
    `Question ${current + 1} / ${questions.length}`;
}

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
