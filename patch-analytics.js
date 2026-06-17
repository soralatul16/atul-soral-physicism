// patch-analytics.js — Adds Analytics/Dashboard tab to dp-teacher-assignments.html
const fs = require('fs');
let html = fs.readFileSync('dp-teacher-assignments.html', 'utf8');

// 1. Add Dashboard tab button after Grading tab
html = html.replace(
  `<button class="tab" onclick="switchTab('grading')">✅ Grading</button>`,
  `<button class="tab" onclick="switchTab('grading')">✅ Grading</button>\n  <button class="tab" onclick="switchTab('dashboard')">📊 Dashboard</button>`
);
console.log('1. Dashboard tab button added');

// 2. Find where to insert the panel (after panel-grading closing </div>)
// We'll add it before the closing of the main content area
const gradingPanelEnd = html.indexOf('</div>', html.indexOf('id="panel-grading"') + 100);
// Find the correct closing div for panel-grading
let depth = 0, searchIdx = html.indexOf('id="panel-grading"');
for (let i = searchIdx; i < html.length; i++) {
  if (html.substring(i, i+5) === '<div ') depth++;
  if (html.substring(i, i+6) === '</div>') {
    if (depth === 0) {
      // Insert after this </div>
      const insertAt = i + 6;
      const dashboardPanel = `

  <!-- DASHBOARD / ANALYTICS PANEL -->
  <div class="tab-panel" id="panel-dashboard">
    <div class="card">
      <h3>📊 Assignment Analytics</h3>
      <div id="analytics-overview" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:20px">
        <div style="background:var(--accent-light);padding:16px;border-radius:10px;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:var(--accent)" id="stat-total">-</div>
          <div style="font-size:.75rem;color:var(--text2);font-weight:600">Total Assignments</div>
        </div>
        <div style="background:#DCFCE7;padding:16px;border-radius:10px;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:#059669" id="stat-completed">-</div>
          <div style="font-size:.75rem;color:var(--text2);font-weight:600">Completed</div>
        </div>
        <div style="background:#FEF3C7;padding:16px;border-radius:10px;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:#D97706" id="stat-pending">-</div>
          <div style="font-size:.75rem;color:var(--text2);font-weight:600">Pending</div>
        </div>
        <div style="background:#FEE2E2;padding:16px;border-radius:10px;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:#DC2626" id="stat-overdue">-</div>
          <div style="font-size:.75rem;color:var(--text2);font-weight:600">Overdue</div>
        </div>
        <div style="background:#EDE9FE;padding:16px;border-radius:10px;text-align:center">
          <div style="font-size:2rem;font-weight:800;color:#7C3AED" id="stat-avg">-</div>
          <div style="font-size:.75rem;color:var(--text2);font-weight:600">Avg Score %</div>
        </div>
      </div>
    </div>

    <div class="card">
      <h3>👥 Student Progress</h3>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:.85rem" id="student-analytics-table">
          <thead>
            <tr style="border-bottom:2px solid var(--border);text-align:left">
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Student</th>
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Done / Total</th>
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Progress</th>
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Avg Score</th>
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Last Active</th>
              <th style="padding:10px 12px;font-size:.72rem;text-transform:uppercase;color:var(--text3)">Actions</th>
            </tr>
          </thead>
          <tbody id="student-analytics-body">
            <tr><td colspan="6" style="padding:20px;text-align:center;color:var(--text3)">Loading analytics...</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Individual Student Detail Modal -->
    <div id="student-detail-modal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:500;display:none;align-items:center;justify-content:center">
      <div style="background:var(--card);border-radius:16px;padding:28px;max-width:700px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.2)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h3 id="detail-student-name" style="font-family:Georgia,serif;color:var(--accent)">Student Name</h3>
          <button onclick="closeStudentDetail()" class="btn btn-outline" style="font-size:.75rem">✕ Close</button>
        </div>
        <div id="detail-student-stats" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:16px"></div>
        <h4 style="font-size:.82rem;color:var(--text3);text-transform:uppercase;margin-bottom:8px">Assignment History</h4>
        <div id="detail-student-assignments"></div>
      </div>
    </div>
  </div>`;

      html = html.slice(0, insertAt) + dashboardPanel + html.slice(insertAt);
      console.log('2. Dashboard panel HTML added');
      break;
    }
    if (html.substring(i, i+6) === '</div>') depth--;
  }
}

// 3. Add the switchTab handler for 'dashboard' — it should already work since switchTab removes all active and adds to the selected one
// Just need to make sure the switchTab function handles it. Let's check if it uses getElementById
if (html.includes("document.getElementById('panel-'+id)")) {
  console.log('3. switchTab already uses dynamic panel ID — dashboard will work automatically');
} else {
  // Patch switchTab to be generic
  html = html.replace(
    "document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active')})",
    "document.querySelectorAll('.tab-panel').forEach(function(p){p.classList.remove('active')});\n  document.querySelectorAll('.tab').forEach(function(t){t.classList.remove('active')});"
  );
}

// 4. Add analytics JavaScript before closing </script>
const analyticsJS = `

// ════════ DASHBOARD ANALYTICS ════════
function loadAnalytics() {
  var students = [];
  var assignments = [];
  var submissions = [];

  Promise.all([
    db.collection(col('dpAssignments')).get(),
    db.collection(col('dpSubmissions')).get(),
    db.collection('students').get()
  ]).then(function(results) {
    results[0].forEach(function(d) { assignments.push(Object.assign({id: d.id}, d.data())); });
    results[1].forEach(function(d) { submissions.push(Object.assign({id: d.id}, d.data())); });
    results[2].forEach(function(d) { students.push(Object.assign({id: d.id}, d.data())); });

    // Filter students by current programme
    var prog = currentProgramme || 'DP';
    var levelFilter = prog === 'DP' ? 'DP' : 'MYP';
    var filteredStudents = students.filter(function(s) {
      return s.level && s.level.toUpperCase().indexOf(levelFilter) !== -1;
    });

    renderOverviewStats(assignments, submissions, filteredStudents);
    renderStudentTable(assignments, submissions, filteredStudents);
  }).catch(function(err) {
    console.error('Analytics load error:', err);
  });
}

function renderOverviewStats(assignments, submissions, students) {
  var total = assignments.length;
  var now = new Date();

  // Count per-student assignments (each student should do each assignment)
  var totalExpected = total * students.length;
  var completedSubs = submissions.filter(function(s) { return s.status === 'submitted' || s.status === 'graded' || s.status === 'released'; });
  var completed = completedSubs.length;
  var pending = totalExpected - completed;

  var overdue = 0;
  assignments.forEach(function(a) {
    if (a.dueDate) {
      var due = new Date(a.dueDate);
      if (due < now) {
        students.forEach(function(st) {
          var hasSub = submissions.find(function(s) { return s.assignmentId === a.id && s.studentId === st.id && s.status !== 'draft'; });
          if (!hasSub) overdue++;
        });
      }
    }
  });

  var avgScore = 0;
  var gradedSubs = submissions.filter(function(s) { return s.totalScore !== undefined && s.totalScore !== null; });
  if (gradedSubs.length > 0) {
    var totalPct = 0;
    gradedSubs.forEach(function(s) {
      var a = assignments.find(function(a2) { return a2.id === s.assignmentId; });
      if (a && a.totalMarks > 0) totalPct += (s.totalScore / a.totalMarks) * 100;
    });
    avgScore = Math.round(totalPct / gradedSubs.length);
  }

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-completed').textContent = completed;
  document.getElementById('stat-pending').textContent = Math.max(0, pending);
  document.getElementById('stat-overdue').textContent = overdue;
  document.getElementById('stat-avg').textContent = avgScore > 0 ? avgScore + '%' : '-';
}

function renderStudentTable(assignments, submissions, students) {
  var tbody = document.getElementById('student-analytics-body');
  if (students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="padding:20px;text-align:center;color:var(--text3)">No students found for this programme.</td></tr>';
    return;
  }

  var rows = '';
  students.forEach(function(st) {
    var studentSubs = submissions.filter(function(s) { return s.studentId === st.id || s.studentDocId === st.id; });
    var doneSubs = studentSubs.filter(function(s) { return s.status !== 'draft' && s.status !== 'offline'; });
    var done = doneSubs.length;
    var total = assignments.length;
    var pct = total > 0 ? Math.round(done / total * 100) : 0;

    var avgScore = '-';
    var scored = studentSubs.filter(function(s) { return s.totalScore !== undefined; });
    if (scored.length > 0) {
      var sum = 0;
      scored.forEach(function(s) {
        var a = assignments.find(function(a2) { return a2.id === s.assignmentId; });
        if (a && a.totalMarks > 0) sum += (s.totalScore / a.totalMarks) * 100;
      });
      avgScore = Math.round(sum / scored.length) + '%';
    }

    var lastActive = '-';
    if (studentSubs.length > 0) {
      var latest = studentSubs.sort(function(a, b) {
        var ta = a.startedAt ? (a.startedAt.toDate ? a.startedAt.toDate() : new Date(a.startedAt)) : new Date(0);
        var tb = b.startedAt ? (b.startedAt.toDate ? b.startedAt.toDate() : new Date(b.startedAt)) : new Date(0);
        return tb - ta;
      })[0];
      if (latest.startedAt) {
        var d = latest.startedAt.toDate ? latest.startedAt.toDate() : new Date(latest.startedAt);
        lastActive = d.toLocaleDateString('en-IN', {day:'numeric', month:'short'});
      }
    }

    var name = st.name || st.email || st.id;
    var email = st.email || '';
    var phone = st.phone || st.whatsapp || '';

    var progressColor = pct >= 80 ? '#059669' : pct >= 40 ? '#D97706' : '#DC2626';

    var actions = '';
    actions += '<button class="btn btn-outline" style="font-size:.7rem;padding:4px 8px" onclick="showStudentDetail(\\''+st.id+'\\')">📊</button> ';
    if (phone) {
      actions += '<a href="https://wa.me/' + phone.replace(/[^0-9]/g,'') + '?text=Hi%20' + encodeURIComponent(name.split(' ')[0]) + ',%20this%20is%20regarding%20your%20physics%20assignment." target="_blank" class="btn btn-outline" style="font-size:.7rem;padding:4px 8px;text-decoration:none">📱</a> ';
    }
    if (email) {
      actions += '<a href="mailto:' + email + '?subject=Physics%20Assignment%20Update&body=Hi%20' + encodeURIComponent(name.split(' ')[0]) + '," target="_blank" class="btn btn-outline" style="font-size:.7rem;padding:4px 8px;text-decoration:none">📧</a>';
    }

    rows += '<tr style="border-bottom:1px solid var(--border)">' +
      '<td style="padding:10px 12px;font-weight:600">' + name + '</td>' +
      '<td style="padding:10px 12px">' + done + ' / ' + total + '</td>' +
      '<td style="padding:10px 12px"><div style="background:var(--bg);border-radius:6px;height:8px;width:100px;overflow:hidden"><div style="height:100%;width:'+pct+'%;background:'+progressColor+';border-radius:6px"></div></div><span style="font-size:.7rem;color:var(--text3)">'+pct+'%</span></td>' +
      '<td style="padding:10px 12px;font-weight:700;color:var(--accent)">' + avgScore + '</td>' +
      '<td style="padding:10px 12px;font-size:.8rem;color:var(--text2)">' + lastActive + '</td>' +
      '<td style="padding:10px 12px">' + actions + '</td>' +
    '</tr>';
  });

  tbody.innerHTML = rows;
}

function showStudentDetail(studentId) {
  var modal = document.getElementById('student-detail-modal');
  modal.style.display = 'flex';

  db.collection('students').doc(studentId).get().then(function(doc) {
    var st = doc.data();
    document.getElementById('detail-student-name').textContent = (st.name || st.email || studentId) + ' — Assignment Details';

    return Promise.all([
      db.collection(col('dpAssignments')).get(),
      db.collection(col('dpSubmissions')).where('studentId', '==', studentId).get()
    ]);
  }).then(function(results) {
    var assignments = [];
    var submissions = [];
    results[0].forEach(function(d) { assignments.push(Object.assign({id:d.id}, d.data())); });
    results[1].forEach(function(d) { submissions.push(Object.assign({id:d.id}, d.data())); });

    // Stats
    var done = submissions.filter(function(s){return s.status!=='draft';}).length;
    var graded = submissions.filter(function(s){return s.totalScore!==undefined;});
    var avgPct = 0;
    if(graded.length>0){
      var sum=0;graded.forEach(function(s){var a=assignments.find(function(x){return x.id===s.assignmentId;});if(a&&a.totalMarks>0)sum+=(s.totalScore/a.totalMarks)*100;});
      avgPct=Math.round(sum/graded.length);
    }

    document.getElementById('detail-student-stats').innerHTML =
      '<div style="background:var(--accent-light);padding:12px;border-radius:8px;text-align:center"><div style="font-size:1.5rem;font-weight:800;color:var(--accent)">'+done+'/'+assignments.length+'</div><div style="font-size:.7rem;color:var(--text2)">Completed</div></div>' +
      '<div style="background:#DCFCE7;padding:12px;border-radius:8px;text-align:center"><div style="font-size:1.5rem;font-weight:800;color:#059669">'+avgPct+'%</div><div style="font-size:.7rem;color:var(--text2)">Avg Score</div></div>' +
      '<div style="background:#EDE9FE;padding:12px;border-radius:8px;text-align:center"><div style="font-size:1.5rem;font-weight:800;color:#7C3AED">'+graded.length+'</div><div style="font-size:.7rem;color:var(--text2)">Graded</div></div>';

    // Assignment list
    var listHtml = '';
    assignments.forEach(function(a) {
      var sub = submissions.find(function(s){return s.assignmentId===a.id && s.status!=='draft';});
      var status = 'Not Started';
      var statusColor = '#DC2626';
      var score = '-';
      if(sub) {
        if(sub.status==='submitted'){status='Submitted';statusColor='#D97706';}
        else if(sub.status==='graded'){status='Graded';statusColor='#059669';}
        else if(sub.status==='released'){status='Released';statusColor='#059669';}
        else if(sub.status==='offline'){status='Offline';statusColor='#6B7280';}
        else {status=sub.status;statusColor='#6B7280';}
        if(sub.totalScore!==undefined) score=sub.totalScore+'/'+a.totalMarks;
      }
      listHtml += '<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid var(--border)">' +
        '<div><strong style="font-size:.88rem">'+a.title+'</strong><br><span style="font-size:.72rem;color:var(--text3)">'+(a.topic||'')+'</span></div>' +
        '<div style="text-align:right"><span style="font-size:.75rem;font-weight:700;color:'+statusColor+'">'+status+'</span><br><span style="font-size:.82rem;font-weight:700">'+score+'</span></div>' +
      '</div>';
    });
    document.getElementById('detail-student-assignments').innerHTML = listHtml || '<p style="color:var(--text3);font-size:.85rem">No assignments found.</p>';
  });
}

function closeStudentDetail() {
  document.getElementById('student-detail-modal').style.display = 'none';
}

// Load analytics when dashboard tab is opened
var origSwitchTab = window.switchTab || function(){};
var _switchTabOrig;
`;

// Insert the analytics JS before the last </script>
const lastScript = html.lastIndexOf('</script>');
html = html.slice(0, lastScript) + analyticsJS + '\n' + html.slice(lastScript);
console.log('4. Analytics JavaScript added');

// 5. Hook into switchTab to load analytics when dashboard is selected
// Find the switchTab function and add analytics loading
html = html.replace(
  "document.getElementById('panel-'+id).classList.add('active')",
  "document.getElementById('panel-'+id).classList.add('active');\n    if(id==='dashboard') loadAnalytics();"
);
console.log('5. Hooked loadAnalytics into switchTab');

fs.writeFileSync('dp-teacher-assignments.html', html);
console.log('\nDone! Analytics dashboard added with:');
console.log('  - Overview stats (total, completed, pending, overdue, avg score)');
console.log('  - Per-student progress table with progress bars');
console.log('  - Individual student detail modal');
console.log('  - WhatsApp & Email buttons per student');
