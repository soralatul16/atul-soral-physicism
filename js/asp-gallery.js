/* ==========================================================================
   asp-gallery.js · simulator gallery for igcse-, myp- and dp-simulations.html
   Reads DP_SIMS from js/dp-sims.js (unchanged). Each page sets:
     <main id="gallery" data-levels="IGCSE">         (or "MYP", or "DP A-Level")
   A sim's level = its `level` field, else "A-Level" if its topic mentions
   Cambridge A Level, else "DP"  (same rule as before).
   ========================================================================== */
(function () {
  'use strict';
  var root = document.getElementById('gallery');
  if (!root || typeof DP_SIMS === 'undefined') return;
  var LEVELS = (root.getAttribute('data-levels') || 'DP').split(' ');

  function level(s) {
    if (s.level) return s.level;
    return /Cambridge A Level/i.test((s.topicName || '') + ' ' + (s.topic || '')) ? 'A-Level' : 'DP';
  }
  var DP_THEMES = { A: 'Space, Time and Motion', B: 'The Particulate Nature of Matter', C: 'Wave Behaviour', D: 'Fields', E: 'Nuclear and Quantum Physics' };
  var IG_TOPICS = { 1: 'Motion, Forces and Energy', 2: 'Thermal Physics', 3: 'Waves', 4: 'Electricity and Magnetism', 5: 'Nuclear Physics', 6: 'Space Physics' };
  var IG_WORDS = [[1, /motion|force|energy|measure|mass|weight|momentum|pressure|density/i], [2, /thermal|heat|temperature|particle/i], [3, /wave|light|sound|spectrum/i], [4, /electric|magnet|circuit/i], [5, /nuclear|radioactiv|atom/i], [6, /space|earth|star|solar|universe/i]];
  var MYP_EXAM = {
    'myp-waves': [['Light exam prep', 'sims/myp-light-exam.html'], ['Sound exam prep', 'sims/myp-sound-exam.html']],
    'myp-astrophysics': [['Exam prep', 'sims/myp-astrophysics-exam.html']],
    'myp-atomic-physics': [['Exam prep', 'sims/myp-atomic-exam.html']],
    'myp-pressure-fluids': [['Exam prep', 'sims/myp-pressure-exam.html']]
  };
  var TINT = ['bg-teal', 'bg-blue', 'bg-purple', 'bg-coral', 'bg-green', 'bg-amber', 'bg-pink', 'bg-violet'];

  function group(s) {
    var lv = level(s), t = String(s.topic || ''), m;
    if (lv === 'A-Level') return { key: 'Z', order: 99, title: 'Cambridge A Level', sub: 'Extra depth beyond the IB course' };
    if (lv === 'DP') {
      m = t.match(/^([A-E])\./);
      var L = m ? m[1] : 'A';
      return { key: L, order: L.charCodeAt(0), title: 'Theme ' + L + ' · ' + DP_THEMES[L], letter: L };
    }
    if (lv === 'IGCSE') {
      m = t.match(/^(\d)/);
      var n = m ? +m[1] : 0;
      if (!n) { var hay = t + ' ' + (s.topicName || ''); for (var i = 0; i < IG_WORDS.length; i++) if (IG_WORDS[i][1].test(hay)) { n = IG_WORDS[i][0]; break; } }
      n = n || 1;
      return { key: 'T' + n, order: n, title: 'Topic ' + n + ' · ' + IG_TOPICS[n], letter: String(n) };
    }
    return { key: 'U', order: 0, title: 'Study units', sub: 'Each unit is a complete study book: notes, animations, virtual experiments and questions.' };
  }
  function esc(s) { var d = document.createElement('div'); d.innerHTML = String(s == null ? '' : s); return d.textContent; }
  function attr(s) { return esc(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function html(s) { return esc(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function codeSort(a, b) { return String(a.topic).localeCompare(String(b.topic), undefined, { numeric: true }) || String(a.title).localeCompare(String(b.title)); }

  var sims = DP_SIMS.filter(function (s) { return LEVELS.indexOf(level(s)) > -1; });
  var seen = {}; sims = sims.filter(function (s) { if (seen[s.file + '|' + level(s)]) return false; return (seen[s.file + '|' + level(s)] = true); });

  var groups = {}, order = [];
  sims.forEach(function (s) {
    var g = group(s);
    if (!groups[g.key]) { groups[g.key] = { info: g, list: [] }; order.push(g.key); }
    groups[g.key].list.push(s);
  });
  order.sort(function (a, b) { return groups[a].info.order - groups[b].info.order || a.localeCompare(b); });

  function card(s, i) {
    var full = String(s.description || '').length > 380 || /^(dp-[a-e]\d|myp-)/.test(s.id || '');
    var desc = esc(s.description);
    var short = desc.length > 190 ? desc.slice(0, 185).replace(/\s+\S*$/, '') + '…' : desc;
    var exam = (MYP_EXAM[s.id] || []).map(function (x) { return '<a class="gb gb--sm" href="' + x[1] + '">' + x[0] + '</a>'; }).join('');
    var kw = [s.title, s.topic, s.topicName, s.description, s.id].map(esc).join(' ');
    return '<article class="card sim ' + TINT[i % TINT.length] + ' reveal" data-find-item="' + attr(kw) + '">' +
      '<div class="card__top"><span class="card__icon" aria-hidden="true">' + html(s.icon || '⚡') + '</span>' +
        '<span class="sim__tags">' + (full ? '<span class="tag">Full unit</span>' : '') + '<span class="pill">' + html(s.topic) + '</span></span></div>' +
      '<h3>' + html(s.title) + '</h3>' +
      '<p class="sim__topic">' + html(s.topicName) + '</p>' +
      '<p title="' + attr(desc) + '">' + html(short) + '</p>' +
      '<div class="card__foot"><a class="gb gb--tint" href="' + attr(s.file) + '">Open &rarr;</a>' + exam + '</div>' +
    '</article>';
  }

  var out = '', idx = 0, chips = '';
  order.forEach(function (k) {
    var g = groups[k]; g.list.sort(codeSort);
    var id = 'g-' + k.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    var label = k === 'Z' ? 'A Level' : /^[A-E]$/.test(k) ? 'Theme ' + k : k.charAt(0) === 'T' ? 'Topic ' + k.slice(1) : g.info.title;
    chips += '<a href="#' + id + '">' + html(label) + '</a>';
    out += '<section class="sim-group" id="' + id + '" data-find-group>' +
      '<div class="sec-hdr"><span class="sec-hdr__dot" aria-hidden="true"></span><h2>' + html(g.info.title) + '</h2><span class="sec-hdr__line" aria-hidden="true"></span>' +
      '<span class="sec-hdr__eq">' + g.list.length + (g.list.length === 1 ? ' simulation' : ' simulations') + '</span></div>' +
      (g.info.sub ? '<p class="sec-sub">' + html(g.info.sub) + '</p>' : '') +
      '<div class="grid g3">' + g.list.map(function (s) { return card(s, idx++); }).join('') + '</div></section>';
  });
  if (!sims.length) out = '<p class="empty is-on">No simulators here yet. <a class="gb gb--sm" href="dp-simulations.html">Browse the DP library &rarr;</a></p>';

  document.getElementById('simGroups').innerHTML = out;
  var jump = document.getElementById('simJump'); if (jump) jump.innerHTML = chips;
  var count = document.getElementById('simCount'); if (count) count.textContent = sims.length;
})();
