// patch-hw-choice.js — adds online/offline modal to dp-student-dashboard.html
// Run: node patch-hw-choice.js

const fs = require('fs');
let html = fs.readFileSync('dp-student-dashboard.html', 'utf8');

// 1. Add modal HTML before OFFLINE OVERLAY
const modalHtml = `
<!-- HW ONLINE/OFFLINE CHOICE MODAL -->
<div class="confirm-overlay" id="hwChoiceOverlay">
  <div class="confirm-modal" style="max-width:420px">
    <h3 style="margin-bottom:4px">How would you like to attempt this?</h3>
    <p id="hwChoiceTitle" style="font-size:.82rem;color:var(--text2);margin-bottom:18px"></p>
    <div style="display:flex;flex-direction:column;gap:10px">
      <button class="btn btn-primary" id="hwOnlineBtn" style="padding:14px 20px;font-size:.88rem;border-radius:10px">
        <span style="font-size:1.1rem">&#x1F4BB;</span> Attempt Online<br><span style="font-size:.72rem;font-weight:400;opacity:.85">AI-graded within 24 hours. You will be notified with detailed feedback.</span>
      </button>
      <button class="btn btn-outline" id="hwOfflineBtn" style="padding:14px 20px;font-size:.88rem;border-radius:10px;border:2px solid var(--border)">
        <span style="font-size:1.1rem">&#x1F4C4;</span> Attempt Offline<br><span style="font-size:.72rem;font-weight:400;opacity:.7">Complete on paper. Will NOT be graded online.</span>
      </button>
    </div>
    <button class="btn btn-outline" onclick="closeHwChoice()" style="margin-top:14px;font-size:.78rem">Cancel</button>
  </div>
</div>
`;

if (html.includes('hwChoiceOverlay')) {
  console.log('Modal already exists, skipping HTML insert.');
} else {
  html = html.replace('<!-- OFFLINE OVERLAY -->', modalHtml + '\n<!-- OFFLINE OVERLAY -->');
  console.log('1. Modal HTML added.');
}

// 2. Replace hw direct start with modal call
const oldCode = `if (a.type === 'hw') {\n    proceedToStartTask(a, attemptNumber);\n  }`;
const newCode = `if (a.type === 'hw') {\n    showHwChoiceModal(a, attemptNumber);\n    return;\n  }`;

if (html.includes("showHwChoiceModal(a, attemptNumber)")) {
  console.log('startTask already patched, skipping.');
} else if (html.includes(oldCode)) {
  html = html.replace(oldCode, newCode);
  console.log('2. startTask patched to show choice modal.');
} else {
  // Try alternate spacing
  const alt = html.match(/if\s*\(a\.type\s*===\s*'hw'\)\s*\{\s*\n\s*proceedToStartTask\(a,\s*attemptNumber\);\s*\n\s*\}/);
  if (alt) {
    html = html.replace(alt[0], newCode);
    console.log('2. startTask patched (alt match).');
  } else {
    console.log('WARNING: Could not find hw startTask block. Manual edit needed.');
  }
}

// 3. Add the JS functions before the last </script>
const jsFunctions = `

function showHwChoiceModal(a, attemptNumber) {
  var qCount = (a.questionIds || []).length;
  var marks = a.totalMarks || 0;
  document.getElementById('hwChoiceTitle').textContent = a.title + ' | ' + qCount + ' questions | ' + marks + ' marks';
  var overlay = document.getElementById('hwChoiceOverlay');
  overlay.classList.add('open');

  document.getElementById('hwOnlineBtn').onclick = function() {
    overlay.classList.remove('open');
    proceedToStartTask(a, attemptNumber);
  };

  document.getElementById('hwOfflineBtn').onclick = function() {
    overlay.classList.remove('open');
    markOfflineAttempt(a);
  };
}

function closeHwChoice() {
  document.getElementById('hwChoiceOverlay').classList.remove('open');
}

function markOfflineAttempt(a) {
  db.collection(col('dpSubmissions')).add({
    assignmentId: a.id,
    studentId: studentId,
    studentDocId: studentDocId,
    status: 'offline',
    attemptNumber: 1,
    startedAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function() {
    safeAlert('Marked as offline attempt. Complete this on paper and discuss with your teacher. This will NOT be graded online.');
    loadAssignments();
  });
}
`;

if (html.includes('function showHwChoiceModal')) {
  console.log('JS functions already exist, skipping.');
} else {
  var lastScript = html.lastIndexOf('</script>');
  html = html.slice(0, lastScript) + jsFunctions + '\n' + html.slice(lastScript);
  console.log('3. JS functions added.');
}

fs.writeFileSync('dp-student-dashboard.html', html);
console.log('\nDone. Online/offline choice modal is ready.');
