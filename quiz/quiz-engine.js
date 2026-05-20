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
// PREPARE QUESTIONS (up to 10, progressive difficulty)
// ===============================
const difficultyOrder = { easy: 0, medium: 1, hard: 2 };
let sortedQuestions = filtered.sort((a, b) => {
  return (difficultyOrder[a.level] || 1) - (difficultyOrder[b.level] || 1);
});

const easy = sortedQuestions.filter(q => q.level === 'easy');
const medium = sortedQuestions.filter(q => q.level === 'medium');
const hard = sortedQuestions.filter(q => q.level === 'hard');

let questions = [
  ...shuffle(easy).slice(0, 3),
  ...shuffle(medium).slice(0, 4),
  ...shuffle(hard).slice(0, 3)
].slice(0, 10);

questions = questions.map(q => {
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
let selectedOption = null;
let timerInterval = null;
let timeLeft = 20;
const TIME_PER_QUESTION = 20;

function startTimer() {
  timeLeft = TIME_PER_QUESTION;
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft -= 0.1;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (selectedOption === null) {
        userAnswers.push({ question: questions[index], selected: -1 });
        index++;
        selectedOption = null;
        if (index >= questions.length) showSummary();
        else loadQuestion();
      }
    }
  }, 100);
}

function updateTimerDisplay() {
  const fill = document.getElementById('timer-fill');
  const text = document.getElementById('timer-text');
  if (fill) fill.style.width = Math.max(0, (timeLeft / TIME_PER_QUESTION) * 100) + '%';
  if (text) text.textContent = Math.ceil(Math.max(0, timeLeft)) + 's';
  if (fill && timeLeft <= 5) fill.style.background = '#e74c3c';
  else if (fill) fill.style.background = '#c0392b';
}

// ===============================
// LOAD QUESTION
// ===============================
function loadQuestion() {
  if (questions.length === 0) {
    document.getElementById("quiz-area").innerHTML =
      '<div style="text-align:center;padding:30px;color:#888;">No questions available for this infographic yet.</div>';
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
  
  startTimer();
}

// ===============================
// SELECT OPTION
// ===============================
function selectOption(i, element) {
  if (element.style.pointerEvents === 'none') return;
  selectedOption = i;
  document.querySelectorAll(".option").forEach(opt => {
    opt.classList.remove("selected");
  });
  element.classList.add("selected");
}

// ===============================
// NEXT QUESTION
// ===============================
function nextQuestion() {
  if (selectedOption === null) return;
  clearInterval(timerInterval);

  const q = questions[index];
  const isCorrect = selectedOption === q.answerIndex;
  
  const optionEls = document.querySelectorAll('.option');
  optionEls.forEach((el, i) => {
    el.style.pointerEvents = 'none';
    if (i === q.answerIndex) {
      el.style.background = '#e8f5e9';
      el.style.borderColor = 'rgba(46,125,50,0.4)';
      el.style.color = '#2e7d32';
    }
    if (i === selectedOption && !isCorrect) {
      el.style.background = '#fde8e6';
      el.style.borderColor = 'rgba(192,57,43,0.3)';
      el.style.color = '#c0392b';
      el.style.textDecoration = 'line-through';
    }
  });

  if (isCorrect) score++;
  userAnswers.push({ question: q, selected: selectedOption });

  setTimeout(() => {
    selectedOption = null;
    index++;
    if (index >= questions.length) showSummary();
    else loadQuestion();
  }, 800);
}

// ===============================
// SHOW SUMMARY
// ===============================
function showSummary() {
  clearInterval(timerInterval);
  document.getElementById("quiz-area").style.display = "none";

  const box = document.getElementById("summary-area");
  box.style.display = "block";

  const pct = Math.round(score / questions.length * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👏" : pct >= 40 ? "💪" : "📖";

  const history = JSON.parse(localStorage.getItem('PHYS_QUIZ_HISTORY') || '[]');
  const prevAttempts = history.filter(h => h.image === image || (!image && h.topic === topic));
  const prevBest = prevAttempts.length ? Math.max(...prevAttempts.map(h => h.pct)) : null;

  let histText = "";
  if (prevBest !== null && prevBest < pct) histText = `<div style="font-size:14px;color:#2e7d32;font-weight:600;margin-top:6px;">🎉 New personal best! Previous: ${prevBest}%</div>`;
  else if (prevBest !== null && prevBest >= pct) histText = `<div style="font-size:14px;color:#888;margin-top:6px;">Personal best: ${prevBest}%</div>`;
  else histText = `<div style="font-size:14px;color:#c0392b;font-weight:600;margin-top:6px;">First attempt!</div>`;

  let html = `<h2>${emoji} Quiz Completed</h2>`;
  html += `<h3 style="text-align:center;margin-bottom:8px;color:#1a1a2e;">Score: ${score} / ${questions.length} (${pct}%)</h3>`;
  html += `<div style="text-align:center;margin-bottom:20px;font-family:-apple-system,system-ui,sans-serif;">
    <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Attempt #${prevAttempts.length + 1}</div>
    ${histText}
  </div>`;

  // Progress bar
  html += `<div style="background:#f0ede6;border-radius:8px;height:12px;margin-bottom:20px;overflow:hidden;border:1px solid rgba(0,0,0,0.06);">
    <div style="background:${pct>=70?'#2e7d32':pct>=40?'#f59e0b':'#c0392b'};height:100%;width:${pct}%;border-radius:8px;transition:width 0.6s;"></div>
  </div>`;

  // Strand breakdown
  const strandScore = {i:0, ii:0, iii:0};
  const strandTotal = {i:0, ii:0, iii:0};
  const strandNames = {i:'Recall', ii:'Application', iii:'Analysis'};

  userAnswers.forEach(item => {
    const s = item.question.strand || 'i';
    strandTotal[s]++;
    if (item.selected >= 0 && item.question.options[item.selected] === item.question.answer) strandScore[s]++;
  });

  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px;">';
  ['i','ii','iii'].forEach(s => {
    const sp = strandTotal[s] > 0 ? Math.round(strandScore[s]/strandTotal[s]*100) : 0;
    html += '<div style="background:#f0ede6;border-radius:12px;padding:14px;text-align:center;border:1px solid rgba(0,0,0,0.06);">' +
      '<div style="font-size:16px;font-weight:600;color:#c0392b;">Strand ' + s + '</div>' +
      '<div style="font-size:11px;color:#888;margin:2px 0;">' + strandNames[s] + '</div>' +
      '<div style="font-size:14px;color:#1a1a2e;">' + strandScore[s] + '/' + strandTotal[s] + '</div>' +
      '<div style="font-size:11px;color:#888;">' + sp + '%</div></div>';
  });
  html += '</div><hr style="border-color:rgba(0,0,0,0.08);margin:16px 0;">';

  userAnswers.forEach((item, i) => {
    const q = item.question;
    const correct = q.answer;
    let selectedAns = "⏱ Timed out";
    let isCorrect = false;
    
    if (item.selected !== -1) {
      selectedAns = q.options[item.selected];
      isCorrect = selectedAns === correct;
    }

    html += `
    <div style="margin-bottom:15px;padding:14px;border-radius:12px;
      background:${isCorrect ? 'rgba(46,125,50,0.06)' : 'rgba(192,57,43,0.06)'};
      border:1.5px solid ${isCorrect ? '#2e7d32' : '#c0392b'};">
      <b style="color:#1a1a2e;">Q${i + 1}: ${q.question}</b><br>
      <span style="color:${isCorrect ? '#2e7d32' : '#c0392b'};display:inline-block;margin-top:6px;font-size:14px;">Your Answer: ${selectedAns}</span><br>
      ${!isCorrect ? `<span style="color:#2e7d32;display:inline-block;margin-top:2px;font-size:14px;">Correct: ${correct}</span><br>` : ''}
      ${q.explanation ? `<div style="color:#555;font-size:13px;margin-top:8px;padding-top:8px;border-top:1px dashed rgba(0,0,0,0.1);"><i>${q.explanation}</i></div>` : ''}
    </div>`;
  });

  html += `<button class="next-btn" onclick="location.reload()">🔄 Retry This Quiz</button>`;
  html += `<button class="next-btn" onclick="history.back()" style="background:#f0ede6;color:#1a1a2e;margin-top:10px;border:1px solid rgba(0,0,0,0.1);">← Back to Infographics</button>`;

  box.innerHTML = html;
  window.scrollTo(0, 0);

  saveQuizAttempt(topic, image, score, questions.length, pct);
}

// ===============================
// FIREBASE AUTH & SYNCHRONIZATION
// ===============================
let currentUser = null;
if (typeof firebase !== 'undefined' && firebase.auth) {
  firebase.auth().onAuthStateChanged(user => {
    currentUser = user;
  });
}

function saveQuizAttempt(topic, image, score, total, pct) {
  const key = 'PHYS_QUIZ_HISTORY';
  let history = JSON.parse(localStorage.getItem(key) || '[]');
  history.push({
    topic: topic,
    image: image,
    score: score,
    total: total,
    pct: pct,
    date: Date.now()
  });
  if (history.length > 50) history = history.slice(-50);
  localStorage.setItem(key, JSON.stringify(history));

  // Save quiz completion to localStorage
  saveQuizProgress(topic, image);

  // Sync to Firebase if logged in
  if (currentUser && typeof firebase !== 'undefined' && firebase.firestore) {
    const strandScore = {i: 0, ii: 0, iii: 0};
    const strandTotal = {i: 0, ii: 0, iii: 0};
    
    userAnswers.forEach(item => {
      const s = item.question.strand || 'i';
      strandTotal[s]++;
      if (item.selected >= 0 && item.question.options[item.selected] === item.question.answer) {
        strandScore[s]++;
      }
    });

    const attemptId = firebase.firestore().collection('students').doc(currentUser.uid).collection('quizAttempts').doc().id;
    const attemptData = {
      topic: topic,
      imageName: image,
      score: score,
      total: total,
      percentage: pct,
      strandBreakdown: {
        i: { score: strandScore['i'], total: strandTotal['i'] },
        ii: { score: strandScore['ii'], total: strandTotal['ii'] },
        iii: { score: strandScore['iii'], total: strandTotal['iii'] }
      },
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    firebase.firestore().collection('students').doc(currentUser.uid).collection('quizAttempts').doc(attemptId).set(attemptData)
      .then(() => {
        console.log("Quiz attempt synced to Firebase successfully");
      })
      .catch(err => {
        console.error("Error syncing attempt to Firebase: ", err);
      });
  }
}

function saveQuizProgress(topic, imageName) {
  if (!imageName) return;
  const key = 'quiz_completed_' + topic;
  let data = JSON.parse(localStorage.getItem(key) || '{"total":0,"completed":0,"quizzes":{}}');
  
  if (!data.quizzes[imageName]) {
    data.quizzes[imageName] = true;
    data.completed = (data.completed || 0) + 1;
  }
  
  // Count total possible quizzes for this topic from question bank
  const uniqueImages = {};
  if (typeof questionBank !== 'undefined') {
    questionBank.forEach(q => {
      if (q.topic === topic && q.image) {
        uniqueImages[q.image] = true;
      }
    });
  }
  data.total = Object.keys(uniqueImages).length;
  
  localStorage.setItem(key, JSON.stringify(data));
}

// ===============================
// START QUIZ
// ===============================
loadQuestion();
