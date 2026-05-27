(function() {
  'use strict';

  let currentView = 'ref'; // 'ref' = Topic Reference, 'unit' = Unit Plans
  let currentTopic = null;

  // -- VIEW SWITCHING (Topic Reference vs Unit Plans) --
  window.switchView = function(view) {
    currentView = view;
    document.getElementById('tabRef').style.background = view === 'ref' ? 'var(--accent)' : '#fff';
    document.getElementById('tabRef').style.color = view === 'ref' ? '#fff' : 'var(--text2)';
    document.getElementById('tabRef').style.borderColor = view === 'ref' ? 'var(--accent)' : 'var(--border)';
    document.getElementById('tabUnit').style.background = view === 'unit' ? 'var(--accent)' : '#fff';
    document.getElementById('tabUnit').style.color = view === 'unit' ? '#fff' : 'var(--text2)';
    document.getElementById('tabUnit').style.borderColor = view === 'unit' ? 'var(--accent)' : 'var(--border)';
    if (currentTopic) renderTopic(currentTopic);
  };

  // -- SIDEBAR --
  window.buildSidebar = function() {
    const el = document.getElementById('sidebarContent');
    if (!el || typeof MYP_PLANNER_DATA === 'undefined') return;
    let html = '';
    MYP_PLANNER_DATA.strands.forEach(strand => {
      html += '<div class="strand-hdr" onclick="this.classList.toggle(\'collapsed\');this.nextElementSibling.style.maxHeight=this.classList.contains(\'collapsed\')?\'0\':\'999px\'" style="border-left-color:' + strand.color + '">' +
        '<span>' + strand.name + '</span><span class="sc">▼</span>' +
      '</div>' +
      '<div class="strand-body" style="max-height:999px">';
      strand.topics.forEach(t => {
        html += '<div class="t-link" data-code="' + t.code + '" onclick="window.selectTopic(\'' + t.code + '\')">' +
          '<span class="code">' + t.code + '</span><span class="nm">' + t.title + '</span>' +
        '</div>';
      });
      html += '</div>';
    });
    el.innerHTML = html;
  };

  // -- WELCOME STATS --
  window.buildStats = function() {
    const el = document.getElementById('welcomeStats');
    if (!el || typeof MYP_PLANNER_DATA === 'undefined') return;
    let topicCount = 0;
    MYP_PLANNER_DATA.strands.forEach(s => topicCount += s.topics.length);
    el.innerHTML =
      '<div class="stat"><div class="v">' + MYP_PLANNER_DATA.strands.length + '</div><div class="l">Strands</div></div>' +
      '<div class="stat"><div class="v">' + topicCount + '</div><div class="l">Topics</div></div>' +
      '<div class="stat"><div class="v">5</div><div class="l">MYP Years</div></div>';
  };

  // -- SELECT TOPIC --
  window.selectTopic = function(code) {
    let topic = null;
    MYP_PLANNER_DATA.strands.forEach(s => {
      s.topics.forEach(t => { if (t.code === code) topic = t; });
    });
    if (!topic) return;
    currentTopic = topic;
    document.querySelectorAll('.t-link').forEach(el => {
      el.classList.toggle('active', el.dataset.code === code);
    });
    document.getElementById('welcomePane').style.display = 'none';
    document.getElementById('topicView').style.display = 'flex';
    renderTopic(topic);
  };

  // -- RENDER TOPIC --
  function renderTopic(topic) {
    const el = document.getElementById('topicView');
    if (currentView === 'ref') {
      el.innerHTML = renderTopicRef(topic);
    } else {
      el.innerHTML = renderUnitPlan(topic);
    }
  }

  // -- TOPIC REFERENCE VIEW --
  function renderTopicRef(topic) {
    let html = '<div class="tv-hdr">' +
      '<div class="code">' + topic.code + '</div>' +
      '<h2>' + topic.title + '</h2>' +
      '<span class="strand-tag" style="background:' + topic.strandColor + '">' + topic.strand + '</span>' +
    '</div>';

    topic.phases.forEach(function(phase, pi) {
      html += '<div class="phase">' +
        '<div class="phase-hdr" onclick="this.classList.toggle(\'collapsed\')">' +
          '<div class="ph-title">' +
            '<span class="ph-num" style="background:' + phase.color + '">' + (pi + 1) + '</span>' +
            phase.title +
          '</div>' +
          '<span class="chv">▼</span>' +
        '</div>' +
        '<div class="phase-body" style="max-height:9999px">';

      phase.sections.forEach(function(sec) {
        html += renderSection(sec);
      });

      html += '</div></div>';
    });

    return html;
  }

  // -- RENDER SECTION --
  function renderSection(sec) {
    var iconPart = sec.title.split(' ')[0];
    var textPart = sec.title.substring(sec.title.indexOf(' ') + 1);
    var html = '<div class="sub-sec"><div class="sub-title"><span class="ico">' + iconPart + '</span>' + textPart + '</div>';

    switch (sec.type) {
      case 'pills':
        html += sec.items.map(function(p) { return '<span class="pill ' + p.style + '">' + p.text + '</span>'; }).join('');
        break;

      case 'table':
        html += '<table class="f-table"><thead><tr>' + sec.headers.map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>';
        sec.rows.forEach(function(row) {
          html += '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
        });
        html += '</tbody></table>';
        break;

      case 'why':
        html += '<div class="why-box"><strong>Why This Matters</strong><br>' + sec.content + '</div>';
        break;

      case 'soi':
        html += '<div class="soi-box">' + sec.content + '</div>';
        break;

      case 'inquiry':
        sec.groups.forEach(function(g) {
          html += '<div class="iq-group">' +
            '<div class="iq-label"><span class="dot" style="background:' + g.color + '"></span>' + g.label + '</div>' +
            '<ul class="iq-list">' + g.questions.map(function(q) { return '<li>' + q + '</li>'; }).join('') + '</ul>' +
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
            '<textarea class="refl-textarea" placeholder="Your notes..."></textarea>' +
          '</div>';
        });
        break;
    }
    
    html += '</div>';
    return html;
  }

  // -- RENDER UNIT PLAN --
  function renderUnitPlan(topic) {
    if (!MYP_UNITS_DATA || !MYP_UNITS_DATA[topic.code]) {
      return '<div class="tv-hdr"><h2>No Unit Plan Available</h2><p>Data for this topic is not yet added.</p></div>';
    }
    
    let unitData = MYP_UNITS_DATA[topic.code];
    let html = '<div class="tv-hdr">' +
      '<div class="code">' + topic.code + '</div>' +
      '<h2>' + unitData.title + ' — Unit Plan</h2>' +
    '</div>';

    // Loop through years (e.g. 'MYP 1', 'MYP 2')
    const years = Object.keys(unitData.years);
    if (years.length === 0) return html + '<p>No year-level breakdown found.</p>';

    // Year Tabs
    html += '<div class="yr-tabs">';
    years.forEach((yr, i) => {
      let actClass = i === 0 ? ' active' : '';
      html += '<div class="yr-tab' + actClass + '" onclick="document.querySelectorAll(\'.yr-tab\').forEach(t=>t.classList.remove(\'active\')); this.classList.add(\'active\'); document.querySelectorAll(\'.yr-panel\').forEach(p=>p.style.display=\'none\'); document.getElementById(\'yp-' + yr.replace(/\s+/g, '') + '\').style.display=\'block\';">' + yr + '</div>';
    });
    html += '</div>';

    years.forEach((yr, i) => {
      let yrData = unitData.years[yr];
      let display = i === 0 ? 'block' : 'none';
      html += '<div class="yr-panel" id="yp-' + yr.replace(/\s+/g, '') + '" style="display:' + display + '">';
      
      html += '<div class="yr-obj">' + yrData.objective + '</div>';
      html += '<div class="yr-content"><strong>Time allocation:</strong> ' + yrData.hours + ' hours</div>';

      yrData.lessons.forEach(lesson => {
        html += '<div class="lesson-card collapsed">' +
          '<div class="lesson-head" onclick="this.parentElement.classList.toggle(\'collapsed\')">' +
            '<div class="lesson-num">' + lesson.num + '</div>' +
            '<div class="lesson-head-info">' +
              '<div class="lesson-head-title">' + lesson.title + '</div>' +
              '<div class="lesson-head-sub">' + lesson.duration + ' &middot; ' + lesson.phase + '</div>' +
            '</div>' +
            '<div class="phase-badge" style="background:' + lesson.phaseColor + '">' + lesson.phase + '</div>' +
            '<div class="lesson-chv">▼</div>' +
          '</div>' +
          '<div class="lesson-body">' +
            '<div class="lesson-field">' +
              '<div class="lf-label">Objective</div>' +
              '<div class="lf-content">' + lesson.objective + '</div>' +
            '</div>' +
            '<div class="lesson-field">' +
              '<div class="lf-label">Activities</div>' +
              '<div class="lf-content"><ul>' + lesson.activities.map(a => '<li>' + a + '</li>').join('') + '</ul></div>' +
            '</div>' +
            '<div class="lesson-field">' +
              '<div class="lf-label">Resources</div>' +
              '<div class="lf-content">' + lesson.resources + '</div>' +
            '</div>';

        if (lesson.experiment) {
          html += '<div class="exp-box">' +
            '<h4>🧪 ' + lesson.experiment.title + '</h4>' +
            '<ol>' + lesson.experiment.steps.map(s => '<li>' + s + '</li>').join('') + '</ol>' +
          '</div>';
        }

        if (lesson.simulation) {
          html += '<div class="sim-box">' +
            '<h4>💻 ' + lesson.simulation.title + '</h4>' +
            '<p>' + lesson.simulation.description + '</p>' +
          '</div>';
        }

        if (lesson.differentiation) {
          html += '<div class="diff-grid">' +
            '<div class="diff-box support">' +
              '<div class="diff-label">Support</div>' +
              lesson.differentiation.support +
            '</div>' +
            '<div class="diff-box extend">' +
              '<div class="diff-label">Extend</div>' +
              lesson.differentiation.extend +
            '</div>' +
          '</div>';
        }

        html += '</div></div>';
      });

      html += '</div>';
    });

    return html;
  }

  // Initialization
  if (typeof MYP_PLANNER_DATA !== 'undefined') {
    window.buildSidebar();
    window.buildStats();
  }

})();
