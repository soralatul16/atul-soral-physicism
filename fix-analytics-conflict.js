// fix-analytics-conflict.js
const fs = require('fs');
let html = fs.readFileSync('dp-teacher-assignments.html', 'utf8');

// Rename the analytics renderStudentTable to avoid conflict with existing one
html = html.replace(
  'function renderStudentTable(assignments, submissions, students)',
  'function renderAnalyticsTable(assignments, submissions, students)'
);

html = html.replace(
  'renderStudentTable(assignments, submissions, filteredStudents)',
  'renderAnalyticsTable(assignments, submissions, filteredStudents)'
);

// Also fix the table body ID reference to avoid conflict
html = html.replace(
  'id="student-analytics-body"',
  'id="analytics-tbody"'
);

html = html.replace(
  "document.getElementById('student-analytics-body')",
  "document.getElementById('analytics-tbody')"
);

console.log('Fixed: renamed renderStudentTable -> renderAnalyticsTable');
console.log('Fixed: renamed student-analytics-body -> analytics-tbody');

fs.writeFileSync('dp-teacher-assignments.html', html);
console.log('Done');
