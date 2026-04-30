// ===============================
// PARAMETERS
// ===============================
const params = new URLSearchParams(window.location.search);
const topic = params.get("topic") || "waves";
const image = params.get("image") || "";

// ===============================
// SAFE COPY (DO NOT MODIFY ORIGINAL)
// ===============================
const safeQuestionBank = questionBank.map(q => ({
  topic: q.topic || "general",
  image: q.image || "default",
  question: q.question,
  options: q.options,
  answer: q.answer,
  explanation: q.explanation || "",
  criterion: q.criterion || "A",
  level: q.level || "medium"
}));

// ===============================
// FILTER QUESTIONS
// ===============================
let filtered = safeQuestionBank.filter(q =>
  q.topic === topic && q.image === image
);

// ===============================
// FALLBACK (IF LESS QUESTIONS)
// ===============================
if (filtered.length < 10) {
  filtered = [
    ...filtered,
    ...safeQuestionBank.filter(q => q.topic === topic)
  ];
}

// ===============================
// SHUFFLE FUNCTION
// ===============================
function shuffle(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

// ===============================
// PREPARE QUESTIONS
// ===============================
let questions = shuffle(filtered).slice(0, 10).map(q => {
  const shuffledOptions = shuffle(q.options);
  return {
    ...q,
    options: shuffledOptions,
    answerIndex: shuffledOptions.indexOf(q.answer)
  };
});

// ===============================
// STATE
// ===============================
let index = 0;
let score = 0;
let userAnswers = [];
let selected = null;

// ===============================
// LOAD QUESTION
// ===============================
function loadQuestion() {
  const q = questions[index];

  document.getElementById("question").innerText = q.question;

  let html = "";
  q.options.forEach((opt, i) => {
    html += `<div class="option" onclick="selectOption(${i}, this)">${opt}</div>`;
  });

  document.getElementById("options").innerHTML = html;

  document.getElementById("progress").innerText =
    `Question ${index + 1} of ${questions.length}`;
}

// ===============================
// SELECT OPTION
// ===============================
function selectOption(i, element) {
  selected = i;

  document.querySelectorAll(".option").forEach(opt => {
    opt.classList.remove("selected");
  });

  element.classList.add("selected");
}

// ===============================
// NEXT QUESTION
// ===============================
function nextQuestion() {
  if (selected === null) return;

  if (selected === questions[index].answerIndex) {
    score++;
  }

  userAnswers.push({
    question: questions[index],
    selected: selected
  });

  selected = null;
  index++;

  if (index >= questions.length) {
    showSummary();
  } else {
    loadQuestion();
  }
}

// ===============================
// SHOW SUMMARY
// ===============================
function showSummary() {
  document.getElementById("quiz-area").style.display = "none";

  const box = document.getElementById("summary-area");
  box.style.display = "block";

  let html = `<h2>🎉 Quiz Completed</h2>`;
  html += `<h3>Total Score: ${score} / ${questions.length}</h3><hr>`;

  userAnswers.forEach((item, i) => {
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
      <b>Q${i + 1}: ${q.question}</b><br>
      Your Answer: ${selectedAns}<br>
      Correct Answer: ${correct}<br>
      <i>${q.explanation}</i>
    </div>
    `;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry</button>`;

  box.innerHTML = html;

  window.scrollTo(0, 0);
}

// ===============================
// START QUIZ
// ===============================
loadQuestion();
