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
// FILTER QUESTIONS — IMAGE-SPECIFIC FIX
// ===============================
let filtered;

if (image) {
  // First: try exact match on both topic AND image
  filtered = safeQuestionBank.filter(q => q.topic === topic && q.image === image);

  // If nothing found, match by image ONLY (image names are unique)
  if (filtered.length === 0) {
    filtered = safeQuestionBank.filter(q => q.image === image);
  }
} else {
  // No image specified — get all questions from topic
  filtered = safeQuestionBank.filter(q => q.topic === topic);
}

// ===============================
// UPDATE TITLE WITH IMAGE NAME
// ===============================
const titleEl = document.getElementById("title");
if (titleEl && image) {
  const prettyName = image.replace(/^\d+-/, '').replace(/-/g, ' ');
  titleEl.textContent = "🧠 " + prettyName.charAt(0).toUpperCase() + prettyName.slice(1);
}

// ===============================
// SHUFFLE FUNCTION
// ===============================
function shuffle(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

// ===============================
// PREPARE QUESTIONS (up to 10, or however many exist for this image)
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
  if (questions.length === 0) {
    document.getElementById("quiz-area").innerHTML =
      '<div style="text-align:center;padding:30px;color:#cbd5f5;">No questions available for this infographic yet.</div>';
    return;
  }
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

  const pct = Math.round(score / questions.length * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👏" : pct >= 40 ? "💪" : "📖";

  let html = `<h2>${emoji} Quiz Completed</h2>`;
  html += `<h3 style="text-align:center;margin-bottom:20px;">Score: ${score} / ${questions.length} (${pct}%)</h3>`;

  // Progress bar
  html += `<div style="background:#1e293b;border-radius:8px;height:12px;margin-bottom:20px;overflow:hidden;">
    <div style="background:${pct>=70?'#22c55e':pct>=40?'#f59e0b':'#ef4444'};height:100%;width:${pct}%;border-radius:8px;transition:width 0.6s;"></div>
  </div>`;

  // Criterion breakdown
  const critScore = {A:0,B:0,C:0,D:0};
  const critTotal = {A:0,B:0,C:0,D:0};
  userAnswers.forEach(item => {
    const c = item.question.criterion || "A";
    critTotal[c]++;
    if (item.question.options[item.selected] === item.question.answer) critScore[c]++;
  });
  html += `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:20px;">`;
  ["A","B","C","D"].forEach(c => {
    const cp = critTotal[c] > 0 ? Math.round(critScore[c]/critTotal[c]*100) : 0;
    html += `<div style="background:#1e293b;border-radius:8px;padding:10px;text-align:center;">
      <div style="font-size:18px;font-weight:bold;color:#ef4444;">Crit ${c}</div>
      <div style="font-size:14px;color:#cbd5f5;">${critScore[c]}/${critTotal[c]}</div>
      <div style="font-size:12px;color:#94a3b8;">${cp}%</div>
    </div>`;
  });
  html += `</div><hr style="border-color:#334155;margin:16px 0;">`;

  userAnswers.forEach((item, i) => {
    const q = item.question;
    const correct = q.answer;
    const selectedAns = q.options[item.selected];
    const isCorrect = selectedAns === correct;

    html += `
    <div style="margin-bottom:15px;padding:14px;border-radius:8px;
      background:${isCorrect ? '#14532d' : '#7f1d1d'};
      border-left:3px solid ${isCorrect ? '#22c55e' : '#ef4444'};">
      <b>Q${i + 1}: ${q.question}</b><br>
      <span style="color:${isCorrect ? '#86efac' : '#fca5a5'};">Your Answer: ${selectedAns}</span><br>
      ${!isCorrect ? `<span style="color:#86efac;">Correct: ${correct}</span><br>` : ''}
      ${q.explanation ? `<i style="color:#94a3b8;font-size:13px;">${q.explanation}</i>` : ''}
    </div>`;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry This Quiz</button>`;
  html += `<button class="next-btn" onclick="history.back()" style="background:#334155;margin-top:10px;">← Back to Infographics</button>`;

  box.innerHTML = html;
  window.scrollTo(0, 0);
}

// ===============================
// START QUIZ
// ===============================
loadQuestion();
