const MYP_PLANNER_DATA = {
  strands: [
    {
      id: 'forces',
      name: 'Forces & Motion',
      color: '#1565C0',
      topics: [
        {
          code: 'FM.1',
          title: 'Speed, Distance & Time',
          strand: 'Forces & Motion',
          strandColor: '#1565C0',
          phases: [
            {
              title: 'Core Concepts',
              color: '#1565C0',
              sections: [
                {
                  title: '🎯 Key Concepts',
                  type: 'pills',
                  items: [
                    { text: 'Speed', style: 'pill-blue' },
                    { text: 'Distance', style: 'pill-blue' },
                    { text: 'Time', style: 'pill-green' },
                    { text: 'Average Speed', style: 'pill-purple' },
                    { text: 'Instantaneous Speed', style: 'pill-purple' }
                  ]
                },
                {
                  title: '📐 Formulae',
                  type: 'table',
                  headers: ['Formula', 'Meaning', 'Units'],
                  rows: [
                    ['s = d / t', 'Speed = Distance ÷ Time', 'm/s'],
                    ['d = s × t', 'Distance = Speed × Time', 'm'],
                    ['t = d / s', 'Time = Distance ÷ Speed', 's']
                  ]
                },
                {
                  title: '💡 Why This Matters',
                  type: 'why',
                  content: 'Speed connects to every branch of physics — from kinematics in DP to understanding wave propagation. Students who deeply understand s = d/t find velocity, acceleration, and graphical analysis far easier.'
                },
                {
                  title: '📝 Statement of Inquiry',
                  type: 'soi',
                  content: 'Relationships between measurable quantities allow us to model and predict the motion of objects in our everyday world.'
                
<truncated 42925 bytes>
(q) { return '<li>' + q + '</li>'; }).join('') + '</ul>' +
          '</div>';
        });
        break;

      case 'assess':
        html += '<div class="assess-grid">';
        sec.items.forEach(function(a) {
          var cls = 'c' + a.criterion;
          html += '<div class="assess-card ' + cls + '">' +
            '<div class="a-label ' + cls + '">Criterion ' + a.criterion + ': ' + a.label + '</div>' +
            '<p>' + a.desc + '</p>' +
          '</div>';
        });
        html += '</div>';
        break;

      case 'misconceptions':
        sec.items.forEach(function(m) {
          html += '<div class="misc-card">' +
            '<div class="misc-w">' + m.wrong + '</div>' +
            '<div class="misc-r">' + m.right + '</div>' +
          '</div>';
        });
        break;

      case 'resources':
        html += '<div class="foot-grid">';
        sec.groups.forEach(function(g) {
          html += '<div class="foot-box">' +
            '<div class="fb-label">' + g.label + '</div>' +
            '<ul>' + g.items.map(function(i) { return '<li>' + i + '</li>'; }).join('') + '</ul>' +
          '</div>';
        });
        html += '</div>';
        break;

      case 'reflection':
        sec.prompts.forEach(function(p) {
          html += '<div class="refl-prompt">' +
            '<div class="rp-q">' + p.question + '</div>' +
            '<div class="rp-hint">' + p.hint + '</div>' +
            '<textarea class="refl-textarea" placeholder="Your notes...">



</USER_REQUEST>
<ADDITIONAL_METADATA>
The current local time is: 2026-05-27T12:36:00+05:30.

The user's current state is as follows:
Active Document: /Users/atulsoral/Desktop/ATUL SORAL/ATUL SORAL PHYSICS/atul-soral-physicism/js/dp-sims.js (LANGUAGE_JAVASCRIPT)
Cursor is on line: 16
Other open documents:
- /Users/atulsoral/Desktop/ATUL SORAL/ATUL SORAL PHYSICS/atul-soral-physicism/index.html (LANGUAGE_HTML)
- /Users/atulsoral/Desktop/ATUL SORAL/ATUL SORAL PHYSICS/atul-soral-physicism/js/dp-sims.js (LANGUAGE_JAVASCRIPT)
</ADDITIONAL_METADATA>
<USER_REQUEST>
'; }); break; } html += ''; return html; } // -- UNIT PLAN VIEW -- function renderUnitPlan(topic) { var unitData = (typeof MYP_UNITS_DATA !== 'undefined') ? MYP_UNITS_DATA[topic.code] : null; if (!unitData) { return '
' + '
' + topic.code + '
' + '
' + topic.title + ' — Unit Plans
' + '' + topic.strand + '' + '
' + '
' + '
📝
' + '
Unit plan data not yet added for this topic.

' + '
Add it in myp-units-data.js under key \'' + topic.code + '\'

' + '
'; } var html = '
' + '
' + topic.code + '
' + '
' + unitData.title + ' — Unit Plans
' + '' + topic.strand + '' + '
'; var years = Object.keys(unitData.years); html += '
'; years.forEach(function(yr, i) { html += '' + yr + ''; }); html += '
'; html += '
' + renderYear(unitData.years[years[0]], years[0]) + '
'; return html; } // -- SWITCH YEAR TAB -- window.switchYear = function(btn, code, year) { document.querySelectorAll('.yr-tab').forEach(function(b) { b.classList.remove('active'); }); btn.classList.add('active'); var unitData = MYP_UNITS_DATA[code]; if (unitData && unitData.years[year]) { document.getElementById('yearContent').innerHTML = renderYear(unitData.years[year], year); } };
