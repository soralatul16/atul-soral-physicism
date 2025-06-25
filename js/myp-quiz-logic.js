const mainTopicSelect = document.getElementById("mainTopicSelect");
const subTopicSelect = document.getElementById("subTopicSelect");
const emailInput = document.getElementById("studentEmail");
const quizBox = document.getElementById("quizBox");
const questionText = document.getElementById("questionText");
const choiceList = document.getElementById("choiceList");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

let currentQuiz = [];
let currentQ = 0;
let score = 0;

for (let main in mypQuizzes) {
  const opt = document.createElement("option");
  opt.value = main;
  opt.textContent = main;
  mainTopicSelect.appendChild(opt);
}

mainTopicSelect.addEventListener("change", () => {
  subTopicSelect.innerHTML = `<option value="">-- Select Subtopic --</option>`;
  subTopicSelect.disabled = false;
  const subs = mypQuizzes[mainTopicSelect.value];
  for (let sub in subs) {
    const opt = document.createElement("option");
    opt.value = sub;
    opt.textContent = sub;
    subTopicSelect.appendChild(opt);
  }
});

function startQuiz() {
  const email = emailInput.value.trim();
  if (!email || !email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }
  const main = mainTopicSelect.value;
  const sub = subTopicSelect.value;
  if (!main || !sub) {
    alert("Please select a topic and subtopic.");
    return;
  }
  currentQuiz = mypQuizzes[main][sub];
  currentQ = 0;
  score = 0;
  quizBox.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuiz[currentQ];
  questionText.textContent = q.q;
  choiceList.innerHTML = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";

  q.choices.forEach(c => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary w-100";
    btn.textContent = c;
    btn.onclick = () => handleAnswer(c);
    li.appendChild(btn);
    choiceList.appendChild(li);
  });

  updateScore();
}

function handleAnswer(choice) {
  const correct = currentQuiz[currentQ].answer;
  if (choice === correct) {
    feedback.textContent = "✅ Correct!";
    score++;
  } else {
    feedback.textContent = `❌ Incorrect. Correct: ${correct}`;
  }
  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQ++;
  if (currentQ < currentQuiz.length) {
    loadQuestion();
  } else {
    questionText.textContent = "🎉 Quiz Complete!";
    choiceList.innerHTML = "";
    feedback.textContent = `Final score: ${score} / ${currentQuiz.length}`;
    nextBtn.style.display = "none";
    submitResult();
  }
  updateScore();
}

function updateScore() {
  scoreBox.textContent = `Score: ${score} / ${currentQuiz.length}`;
}

function submitResult() {
  const payload = {
    email: emailInput.value.trim(),
    main: mainTopicSelect.value,
    sub: subTopicSelect.value,
    score: score,
    total: currentQuiz.length
  };
  console.log("Submitting result", payload);
  // integrate with Google Sheets later
}
