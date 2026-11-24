/* MYP puzzles: runs the four puzzle types for each unit in js/myp-puzzles-data.js.
   Stars are saved on this device only (localStorage 'myp-puzzles-stars'). */
(function () {
  'use strict';
  var UNITS = window.MYP_PUZZLES || [];
  var TYPES = ['match', 'order', 'tf', 'odd'];
  var TYPE_NAME = { match: 'Match the pairs', order: 'Put them in order', tf: 'True or false', odd: 'Odd one out' };
  var KEY = 'myp-puzzles-stars';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var unitsBox = $('#units'), play = $('#play'), stage = $('#stage'), prog = $('#prog');
  var cur = { unit: null, type: null };
  var stars = load();

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(stars)); } catch (e) {} }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function btn(text, cls) { var b = el('button', 'pz-btn' + (cls ? ' ' + cls : ''), text); b.type = 'button'; return b; }
  function gbtn(text, dark) { var b = el('button', 'gb' + (dark ? ' gb--dark' : ''), text); b.type = 'button'; return b; }
  function unitById(id) { for (var i = 0; i < UNITS.length; i++) if (UNITS[i].id === id) return UNITS[i]; return null; }
  function unitStars(u) { var s = 0; TYPES.forEach(function (t) { s += stars[u.id + ':' + t] || 0; }); return s; }
  function shake(b) { b.classList.remove('is-shake'); void b.offsetWidth; b.classList.add('is-shake'); }

  /* ---------- unit cards ---------- */
  function drawUnits() {
    unitsBox.innerHTML = '';
    var total = 0;
    UNITS.forEach(function (u) {
      var s = unitStars(u); total += s;
      var b = el('button', 'card pz-unit ' + (u.bg || ''));
      b.type = 'button';
      b.setAttribute('aria-pressed', cur.unit === u ? 'true' : 'false');
      var ic = el('span', 'card__icon'); ic.setAttribute('aria-hidden', 'true'); ic.innerHTML = u.icon;
      var h = el('h3', null, u.name);
      var p = el('span', 'pz-stars'); p.appendChild(el('b', null, '★')); p.appendChild(document.createTextNode(' ' + s + ' / 12 stars' + (s === 12 ? ' · all done!' : '')));
      b.appendChild(ic); b.appendChild(h); b.appendChild(p);
      b.addEventListener('click', function () { open(u, firstUnplayed(u)); });
      unitsBox.appendChild(b);
    });
    $('#nUnits').textContent = UNITS.length;
    $('#nPuzzles').textContent = UNITS.length * TYPES.length;
    $('#nStars').textContent = total + ' / ' + UNITS.length * 12;
  }
  function firstUnplayed(u) { for (var i = 0; i < TYPES.length; i++) if (!stars[u.id + ':' + TYPES[i]]) return TYPES[i]; return 'match'; }

  /* ---------- open a puzzle ---------- */
  function open(u, type, noScroll) {
    cur.unit = u; cur.type = type;
    play.hidden = false;
    $('#playTitle').innerHTML = '';
    var ic = el('span', null); ic.innerHTML = u.icon + ' ';
    $('#playTitle').appendChild(ic); $('#playTitle').appendChild(document.createTextNode(u.name));
    document.querySelectorAll('#types button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.type === type ? 'true' : 'false'); });
    try { history.replaceState(null, '', '#' + u.id + '/' + type); } catch (e) {}
    drawUnits();
    ({ match: runMatch, order: runOrder, tf: runTF, odd: runOdd })[type](u);
    if (!noScroll) play.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelectorAll('#types button').forEach(function (b) {
    b.addEventListener('click', function () { if (cur.unit) open(cur.unit, b.dataset.type, true); });
  });

  function finish(got, line) {
    var k = cur.unit.id + ':' + cur.type, best = stars[k] || 0, isBest = got > best;
    if (isBest) { stars[k] = got; save(); }
    stage.innerHTML = '';
    prog.textContent = '';
    var d = el('div', 'pz-done');
    var st = el('div', 'pz-done__stars'); st.setAttribute('aria-label', got + ' of 3 stars');
    for (var i = 0; i < 3; i++) { if (i < got) st.appendChild(document.createTextNode('★')); else st.appendChild(el('i', null, '★')); }
    d.appendChild(st);
    d.appendChild(el('h3', null, got === 3 ? 'Brilliant!' : got === 2 ? 'Well done!' : 'Good try!'));
    d.appendChild(el('p', null, line + (isBest && best ? ' New best!' : (!isBest && best ? ' Your best: ' + best + ' of 3.' : ''))));
    var a = el('div', 'pz-acts');
    var again = gbtn('↻ Play again'); again.addEventListener('click', function () { open(cur.unit, cur.type, true); });
    var nx = nextPuzzle();
    var next = gbtn('Next: ' + (nx.u === cur.unit ? TYPE_NAME[nx.t] : nx.u.name) + ' →', true);
    next.addEventListener('click', function () { open(nx.u, nx.t, true); });
    a.appendChild(again); a.appendChild(next); d.appendChild(a);
    stage.appendChild(d);
    drawUnits();
    next.focus({ preventScroll: true });
  }
  function nextPuzzle() {
    var i = TYPES.indexOf(cur.type);
    if (i < TYPES.length - 1) return { u: cur.unit, t: TYPES[i + 1] };
    var j = UNITS.indexOf(cur.unit);
    return { u: UNITS[(j + 1) % UNITS.length], t: TYPES[0] };
  }
  function question(text) { stage.appendChild(el('p', 'pz-q', text)); }

  /* ---------- 1. match the pairs ---------- */
  function runMatch(u) {
    stage.innerHTML = '';
    var pairs = shuffle(u.match).slice(0, 5), left = shuffle(pairs), right = shuffle(pairs);
    var misses = 0, done = 0, pick = null;
    question('Tap one on the left, then the one it matches on the right.');
    var grid = el('div', 'pz-match'), L = el('div', 'pz-col pz-col--l'), R = el('div', 'pz-col');
    function count() { prog.textContent = done + ' of ' + pairs.length + ' matched' + (misses ? ' · ' + misses + ' miss' + (misses > 1 ? 'es' : '') : ''); }
    function make(p, side, col) {
      var b = btn(side === 'l' ? p[0] : p[1]); b._p = p; b._side = side;
      b.addEventListener('click', function () {
        if (!pick || pick._side === side) {
          if (pick) pick.classList.remove('is-sel');
          pick = pick === b ? null : b; if (pick) b.classList.add('is-sel'); return;
        }
        var a = pick; pick = null; a.classList.remove('is-sel');
        if (a._p === b._p) {
          [a, b].forEach(function (x) { x.classList.add('is-ok'); x.disabled = true; });
          done++; count();
          if (done === pairs.length) setTimeout(function () {
            finish(misses <= 1 ? 3 : misses <= 3 ? 2 : 1, 'All ' + pairs.length + ' matched with ' + (misses ? misses + ' miss' + (misses > 1 ? 'es' : '') : 'no misses') + '.');
          }, 500);
        } else {
          misses++; count();
          [a, b].forEach(function (x) { x.classList.add('is-bad'); shake(x); setTimeout(function () { x.classList.remove('is-bad'); }, 600); });
        }
      });
      col.appendChild(b);
    }
    left.forEach(function (p) { make(p, 'l', L); });
    right.forEach(function (p) { make(p, 'r', R); });
    grid.appendChild(L); grid.appendChild(R); stage.appendChild(grid);
    count();
  }

  /* ---------- 2. put them in order ---------- */
  function runOrder(u) {
    stage.innerHTML = '';
    var seq = u.order[Math.floor(Math.random() * u.order.length)], n = seq.steps.length;
    var pool = shuffle(seq.steps), tries = 0;
    while (pool.join() === seq.steps.join()) pool = shuffle(seq.steps);
    var placed = []; for (var i = 0; i < n; i++) placed.push(null);
    var locked = [];
    question(seq.title);
    var wrap = el('div', 'pz-order');
    var left = el('div'), right = el('div');
    left.appendChild(el('p', 'pz-lbl', 'Tap the steps in order'));
    var poolBox = el('div', 'pz-pool'); left.appendChild(poolBox);
    right.appendChild(el('p', 'pz-lbl', 'Your order (tap a step to send it back)'));
    var slots = el('div', 'pz-slots'); right.appendChild(slots);
    wrap.appendChild(left); wrap.appendChild(right); stage.appendChild(wrap);
    var acts = el('div', 'pz-acts'), check = gbtn('Check my order', true), msg = el('span', 'pz-msg');
    acts.appendChild(check); acts.appendChild(msg); stage.appendChild(acts);
    function draw() {
      poolBox.innerHTML = ''; slots.innerHTML = '';
      pool.forEach(function (s, i) {
        var b = btn(s); b.addEventListener('click', function () {
          var at = placed.indexOf(null); if (at < 0) return;
          placed[at] = s; pool.splice(i, 1); msg.textContent = ''; draw();
        }); poolBox.appendChild(b);
      });
      if (!pool.length) poolBox.appendChild(el('p', 'pz-msg', 'All placed. Press Check.'));
      placed.forEach(function (s, i) {
        var slot = el('div', 'pz-slot');
        if (s) {
          var b = btn(s, locked[i] ? 'is-ok' : '');
          if (locked[i]) b.disabled = true;
          else b.addEventListener('click', function () { pool.push(s); placed[i] = null; draw(); });
          slot.appendChild(b);
        }
        slots.appendChild(slot);
      });
      check.disabled = placed.indexOf(null) >= 0;
      prog.textContent = (n - pool.length) + ' of ' + n + ' placed';
    }
    check.addEventListener('click', function () {
      tries++;
      var right = 0;
      placed.forEach(function (s, i) { if (s === seq.steps[i]) { locked[i] = true; right++; } });
      if (right === n) { finish(tries === 1 ? 3 : tries === 2 ? 2 : 1, 'Correct order ' + (tries === 1 ? 'first time.' : 'after ' + tries + ' checks.')); return; }
      placed.forEach(function (s, i) { if (!locked[i]) { pool.push(s); placed[i] = null; } });
      draw();
      msg.textContent = right + ' of ' + n + ' are in the right place and are now locked. The others went back: try again.';
    });
    draw();
  }

  /* ---------- 3. true or false, 4. odd one out ---------- */
  function rounds(list, ask, total, line) {
    var i = 0, score = 0;
    function show() {
      stage.innerHTML = '';
      prog.textContent = 'Question ' + (i + 1) + ' of ' + list.length + ' · ' + score + ' correct';
      var why = el('p', 'pz-why'); why.hidden = true;
      var acts = el('div', 'pz-acts'), next = gbtn(i < list.length - 1 ? 'Next question →' : 'See my stars →', true);
      next.hidden = true;
      ask(list[i], function (ok, reason) {
        if (ok) score++;
        prog.textContent = 'Question ' + (i + 1) + ' of ' + list.length + ' · ' + score + ' correct';
        why.innerHTML = ''; why.appendChild(el('b', null, ok ? '✔ Correct. ' : '✘ Not quite. ')); why.appendChild(document.createTextNode(reason));
        why.hidden = false; next.hidden = false; next.focus({ preventScroll: true });
      });
      stage.appendChild(why); acts.appendChild(next); stage.appendChild(acts);
      next.addEventListener('click', function () {
        i++;
        if (i < list.length) show();
        else finish(score === list.length ? 3 : score >= list.length - total ? 2 : 1, score + ' of ' + list.length + ' correct. ' + line);
      });
    }
    show();
  }
  function runTF(u) {
    rounds(shuffle(u.tf), function (q, answered) {
      question(q[0]);
      var row = el('div', 'pz-tf'), t = btn('✔ True'), f = btn('✘ False');
      [t, f].forEach(function (b, k) {
        b.addEventListener('click', function () {
          var said = k === 0, ok = said === q[1];
          t.disabled = f.disabled = true;
          (q[1] ? t : f).classList.add('is-ok');
          if (!ok) { b.classList.add('is-bad'); shake(b); }
          answered(ok, 'It is ' + (q[1] ? 'true' : 'false') + '. ' + q[2]);
        });
        row.appendChild(b);
      });
      stage.appendChild(row);
    }, 2, 'Every answer comes with its reason, so replay to lock them in.');
  }
  function runOdd(u) {
    rounds(shuffle(u.odd), function (q, answered) {
      question('Which one does not belong with the others?');
      var grid = el('div', 'pz-odd'), bs = [];
      shuffle(q.items.map(function (x, k) { return { x: x, odd: k === q.odd }; })).forEach(function (it) {
        var b = btn(it.x); b._odd = it.odd; bs.push(b);
        b.addEventListener('click', function () {
          bs.forEach(function (o) { o.disabled = true; if (o._odd) o.classList.add('is-ok'); });
          if (!b._odd) { b.classList.add('is-bad'); shake(b); }
          answered(b._odd, q.why);
        });
        grid.appendChild(b);
      });
      stage.appendChild(grid);
    }, 1, 'The reason matters more than the pick.');
  }

  /* ---------- start ---------- */
  var r = $('[data-pz="random"]');
  if (r) r.addEventListener('click', function () { open(UNITS[Math.floor(Math.random() * UNITS.length)], TYPES[Math.floor(Math.random() * TYPES.length)]); });
  drawUnits();
  var h = location.hash.slice(1).split('/'), hu = unitById(h[0]);
  if (hu) open(hu, TYPES.indexOf(h[1]) >= 0 ? h[1] : 'match');
})();
