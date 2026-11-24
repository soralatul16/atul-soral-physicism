/* ==========================================================================
   asp-formula-bank.js · the formula bank pages (DP and MYP)
   The page sets window.FB_CONFIG before loading this file:
     groups:    [{ id, badge, name, list: [{ topic, name, eq, note, scope, poster, mine }] }]
     levels:    true to show SL/HL tags (the page adds the SL/HL switch)
     keyPrefix: added to the localStorage key of each "Learned" tick
     means:     { 'Formula name': 'x = meaning, y = meaning' } for symbols the note leaves out
     old:       { 'old formula text': 'new eq' } to carry over ticks from an old page
   Needs js/asp-math.js. Tapping a formula opens the formula studio:
   symbol meanings, rearrange for any quantity, solve with numbers, poster.
   ========================================================================== */
(function () {
  'use strict';
  var C = window.FB_CONFIG || {}, M = window.aspMath;
  if (!M || !C.groups) return;
  var CONST = [
    { k: 'G', t: /./, v: '6.67e-11', u: 'N m² kg⁻²' }, { k: 'h', t: /planck/i, v: '6.63e-34', u: 'J s' },
    { k: 'c', t: /light/i, v: '3.00e8', u: 'm s⁻¹' }, { k: 'k', t: /coulomb|electric|charge/i, v: '8.99e9', u: 'N m² C⁻²' },
    { k: 'k_B', t: /./, v: '1.38e-23', u: 'J K⁻¹' }, { k: 'σ', t: /constant|boltzmann/i, v: '5.67e-8', u: 'W m⁻² K⁻⁴' },
    { k: 'R', t: /gas constant/i, v: '8.31', u: 'J K⁻¹ mol⁻¹' }, { k: 'N_A', t: /./, v: '6.02e23', u: 'mol⁻¹' },
    { k: 'μ_₀', t: /./, v: '1.26e-6', u: 'T m A⁻¹' }, { k: 'g', t: /gravit|^gravity$/i, v: '9.8', u: 'm s⁻²' }, { k: 'm_e', t: /electron/i, v: '9.11e-31', u: 'kg' }
  ];
  var UNITS = [
    [/per unit mass/, 'J kg⁻¹'], [/angular displacement/, 'rad'], [/angular (velocity|speed|frequency)|^speed$/, null], [/angular acceleration/, 'rad s⁻²'],
    [/angular momentum/, 'kg m² s⁻¹'], [/moment of inertia/, 'kg m²'], [/torque/, 'N m'], [/impulse/, 'N s'], [/spring constant/, 'N m⁻¹'],
    [/thermal conductivity/, 'W m⁻¹ K⁻¹'], [/specific heat/, 'J kg⁻¹ K⁻¹'], [/latent heat/, 'J kg⁻¹'], [/decay constant/, 's⁻¹'], [/entropy/, 'J K⁻¹'],
    [/resistivity/, 'Ω m'], [/viscosity/, 'Pa s'], [/density/, 'kg m⁻³'], [/acceleration|field strength \(acc/, 'm s⁻²'], [/velocity|speed/, 'm s⁻¹'],
    [/momentum/, 'kg m s⁻¹'], [/energy|work|heat/, 'J'], [/power|luminosity|heat current/, 'W'], [/brightness|intensity/, 'W m⁻²'],
    [/electric field/, 'N C⁻¹'], [/magnetic field/, 'T'], [/flux/, 'Wb'], [/emf|potential difference|voltage|electric potential/, 'V'], [/resistance/, 'Ω'],
    [/current/, 'A'], [/charge/, 'C'], [/frequency/, 'Hz'], [/period|time/, 's'], [/temp/, 'K'], [/pressure/, 'Pa'], [/volume/, 'm³'], [/area/, 'm²'],
    [/force|weight|drag/, 'N'], [/mass/, 'kg'], [/moles/, 'mol'], [/angle/, 'ANGLE'],
    [/wavelength|displacement|distance|radius|length|height|separation|amplitude|extension|thickness|spacing|width|position|path/, 'm']
  ];
  var MEANS = C.means || {}, PREFIX = C.keyPrefix || '';
  var $ = function (id) { return document.getElementById(id); };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function key(f) { return PREFIX + f.replace(/\W/g, '-'); }      // DP keeps the old page's keys (no prefix)
  function isOn(f) { try { return localStorage.getItem(key(f)) === 'true'; } catch (e) { return false; } }
  function setOn(f, v) { try { localStorage.setItem(key(f), v ? 'true' : 'false'); } catch (e) {} }
  try { Object.keys(C.old || {}).forEach(function (o) { if (localStorage.getItem(key(o)) === 'true' && !isOn(C.old[o])) setOn(C.old[o], true); }); } catch (e) {}

  /* ---- build the list ---- */
  var ALL = [];
  C.groups.forEach(function (g) { (g.list || []).forEach(function (f) { ALL.push(Object.assign({ group: g.id }, f)); }); });
  function meaning(f, k) {
    if (f.mean[k]) return f.mean[k];
    var b = k.replace(/_([₀-₉]+|orbital)$/, '').replace(/'+$/, '');
    if (b !== k && f.mean[b]) return f.mean[b];
    if (k.charAt(0) === 'Δ') { var m = meaning(f, k.slice(1)); if (m) return 'change in ' + m.replace(/^(a|an|the) /, ''); }
    return '';
  }
  function constFor(f, k) {
    var m = meaning(f, k), ctx = m || (f.name + ' ' + (f.note || ''));   // no meaning given: judge from the formula's name and note
    for (var i = 0; i < CONST.length; i++) if (CONST[i].k === k && CONST[i].t.test(ctx)) return CONST[i];
    return null;
  }
  function unitFor(f, k, form) {
    var c = constFor(f, k); if (c) return c.u;
    if (k === 'B' || k === 'B_₀') return 'T';
    var m = (meaning(f, k) || '').toLowerCase();
    if (/^(number|count|order|nucleon|principal|coefficient|refractive|efficiency|lorentz|ratio)/.test(m) || /coefficient|number of|turns|index|efficiency|factor/.test(m)) return '';
    // judge by the main words first ("distance moved in the direction of the force" is a distance), then the whole meaning
    var head = m.replace(/^change in /, '').split(/ (?:in|of|on|at|for|between|to|from|during|when|by)\b/)[0];
    var tries = [head, m];
    for (var t = 0; t < tries.length; t++) for (var i = 0; i < UNITS.length; i++) if (UNITS[i][0].test(tries[t])) {
      var u = UNITS[i][1];
      if (u === null) u = /angular/.test(tries[t]) ? 'rad s⁻¹' : 'm s⁻¹';
      if (u === 'ANGLE') u = form && Object.keys(form.fn).some(function (x) { return form.fn[x].arg === k; }) ? '°' : 'rad';
      return u;
    }
    return '';
  }
  ALL.forEach(function (f, i) {
    f.i = i;
    f.mean = M.notes(f.note);
    if (MEANS[f.name]) { var x = M.notes(MEANS[f.name]); Object.keys(x).forEach(function (k) { if (!f.mean[k]) f.mean[k] = x[k]; }); }
    f.forms = M.forms(f.eq).filter(function (fm) { return Object.keys(fm.n).every(function (k) { var s = fm.fn[k] ? fm.fn[k].arg : k; return meaning(f, s) || constFor(f, s); }); });
  });

  var html = '', nHl = 0, nSolve = 0;
  C.groups.forEach(function (g) {
    var list = ALL.filter(function (f) { return f.group === g.id; }), topics = [];
    list.forEach(function (f) { if (topics.indexOf(f.topic || '') < 0) topics.push(f.topic || ''); });
    html += '<section class="fb-theme t-' + esc(g.id) + '" id="t-' + esc(g.id) + '" data-find-group>' +
      '<div class="fb-theme__h"><span class="fb-theme__l" aria-hidden="true">' + g.badge + '</span><h2>' + g.name + '</h2><small>' + list.length + ' formula' + (list.length === 1 ? '' : 's') + '</small></div>';
    topics.forEach(function (t) {
      html += '<div class="fb-topic" data-find-group>' + (t ? '<h3>' + esc(t) + '</h3>' : '') + '<div class="fb-list">';
      list.filter(function (f) { return (f.topic || '') === t; }).forEach(function (f) {
        var hl = C.levels && f.scope === 'hl', on = isOn(f.eq), sv = f.forms.length > 0;
        if (hl) nHl++; if (sv) nSolve++;
        html += '<article class="card fb' + (on ? ' is-learned' : '') + '" data-i="' + f.i + '"' + (C.levels ? ' data-levels="' + (hl ? 'hl' : 'sl hl') + '"' : '') +
          ' data-find-item="' + esc(f.name + ' ' + f.eq + ' ' + (f.topic || '') + ' ' + (f.note || '')) + '">' +
          '<button class="fb__open" type="button" data-open="' + f.i + '" aria-label="Explore ' + esc(f.name) + '">' +
            '<span class="fb__f"><span class="m">' + M.html(f.eq) + '</span></span><span class="fb__n">' + esc(f.name) + '</span></button>' +
          '<div class="fb__acts">' + (t ? '<span class="fb__tag">' + esc(t.split(' ')[0]) + '</span>' : '') + (hl ? '<span class="fb__tag fb__tag--hl">HL</span>' : '') +
            (sv ? '<span class="fb__tag fb__tag--sv" title="Can be rearranged and solved">&#129518; solve</span>' : '') +
            (f.poster ? '<span class="fb__tag" title="Has an infographic poster">&#128444; poster</span>' : '') +
            (f.mine ? '<span class="fb__tag" title="Not in the data booklet">extra</span>' : '') +
            '<label class="fb__learn"><input type="checkbox" data-learn="' + f.i + '"' + (on ? ' checked' : '') + '> Learned</label></div></article>';
      });
      html += '</div></div>';
    });
    html += '</section>';
  });
  $('themes').innerHTML = html;
  if ($('nAll')) $('nAll').textContent = ALL.length;
  if ($('nHl')) $('nHl').textContent = nHl;
  if ($('nSolve')) $('nSolve').textContent = nSolve;

  var toast = $('toast'), tt;
  function say(t) { toast.textContent = t; toast.classList.add('is-on'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('is-on'); }, 1800); }
  function progress() {
    var all = document.querySelectorAll('[data-learn]'), n = 0;
    all.forEach(function (c) { if (c.checked) n++; });
    $('progTxt').textContent = n + ' of ' + all.length + ' learned';
    $('progBar').style.width = (all.length ? n / all.length * 100 : 0) + '%';
  }
  progress();
  var mode = 'all', test = false;
  function applyMode() { document.querySelectorAll('.fb').forEach(function (c) { c.classList.toggle('is-off-mode', mode === 'todo' && c.classList.contains('is-learned')); }); }
  function learn(i, v) {
    setOn(ALL[i].eq, v);
    var card = document.querySelector('.fb[data-i="' + i + '"]');
    if (card) { card.classList.toggle('is-learned', v); card.querySelector('[data-learn]').checked = v; }
    progress(); applyMode();
    if (cur === i) syncLearn();
    if (v) say('Nice, one more learned');
  }
  function visible() { return Array.prototype.filter.call(document.querySelectorAll('.fb'), function (c) { return c.offsetParent !== null; }).map(function (c) { return +c.getAttribute('data-i'); }); }

  /* ---- formula studio ---- */
  var fs = $('fs'), cur = -1, form = null, unk = null, vals = {}, last = null;
  var posterBtn = fs.querySelector('[data-fs="poster"]'), posterBox = $('fsPoster');
  function open(i) {
    if (cur < 0) last = document.activeElement;
    cur = i; vals = {};
    var f = ALL[i], g = C.groups.filter(function (x) { return x.id === f.group; })[0];
    $('fsWhere').innerHTML = esc(g.short || g.name) + (f.topic ? ' &middot; ' + esc(f.topic) : '') + (C.levels ? (f.scope === 'hl' ? ' &middot; <b>HL</b>' : ' &middot; SL and HL') : '');
    $('fsName').textContent = f.name;
    $('fsEq').innerHTML = '<span class="m">' + M.html(f.eq) + '</span>';
    var keys = [], seen = {};
    $('fsEq').querySelectorAll('.sy').forEach(function (s) {
      var k = s.getAttribute('data-s'), mm = meaning(f, k);
      if (mm) s.title = mm;
      if (!seen[k]) { seen[k] = s.innerHTML; keys.push(k); }
    });
    var chips = keys.filter(function (k) { return meaning(f, k); });
    $('fsSyms').innerHTML = chips.map(function (k) {
      var u = unitFor(f, k, f.forms[0]);
      return '<button class="gb gb--sm fs__chip" type="button" data-sym="' + esc(k) + '"><span class="fs__sym">' + seen[k] + '</span><span>' + esc(meaning(f, k)) + '</span>' + (u ? '<em>' + esc(u) + '</em>' : '') + '</button>';
    }).join('');
    var showNote = f.note && (!Object.keys(f.mean).length || chips.length < keys.length);
    $('fsNote').textContent = showNote ? f.note : '';
    $('fsNote').hidden = !showNote;
    $('fsHint').textContent = f.forms.length ? 'Tap a letter in the formula, or a symbol below, to make it the one you find.' : chips.length ? 'Point at a symbol below to see where it sits in the formula.' : '';
    $('fsSolve').hidden = !f.forms.length;
    $('fsForms').innerHTML = f.forms.length > 1 ? '<span class="fs__lbl">Use</span>' + f.forms.map(function (fm, j) { return '<button class="gb gb--sm" type="button" data-form="' + j + '" aria-pressed="' + (j ? 'false' : 'true') + '"><span class="m">' + M.html(fm.text) + '</span></button>'; }).join('') : '';
    if (f.forms.length) setForm(0);
    if (posterBtn) {
      posterBtn.hidden = !f.poster;
      posterBtn.setAttribute('aria-expanded', 'false');
      posterBox.hidden = true; posterBox.innerHTML = '';
    }
    syncLearn();
    if (fs.hidden) { fs.hidden = false; document.documentElement.style.overflow = 'hidden'; }
    fs.querySelector('.fs__box').scrollTop = 0;
    fs.querySelector('[data-fs="close"]').focus();
  }
  function close() { fs.hidden = true; cur = -1; document.documentElement.style.overflow = ''; if (last) last.focus(); }
  function step(d) { var v = visible(), p = v.indexOf(cur); if (v.length) open(p < 0 ? v[0] : v[(p + d + v.length) % v.length]); }
  function syncLearn() {
    var b = fs.querySelector('[data-fs="learn"]'), on = isOn(ALL[cur].eq);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.innerHTML = on ? '&#9745; Learned' : '&#9744; Mark as learned';
  }
  function togglePoster() {
    var f = ALL[cur], showing = !posterBox.hidden;
    posterBox.hidden = showing;
    posterBtn.setAttribute('aria-expanded', showing ? 'false' : 'true');
    if (!showing && !posterBox.innerHTML) {
      var src = (window.ASP_ASSET_BASE || '') + (C.posterBase || 'Images/') + f.poster;
      posterBox.innerHTML = '<img src="' + esc(src) + '" alt="' + esc(f.name) + ' infographic poster" loading="lazy">';
      posterBox.querySelector('img').addEventListener('error', function () { posterBox.innerHTML = '<p class="fs__err">This poster could not be loaded.</p>'; });
      posterBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }
  function setForm(j) {
    form = ALL[cur].forms[j];
    fs.querySelectorAll('[data-form]').forEach(function (b) { b.setAttribute('aria-pressed', +b.getAttribute('data-form') === j ? 'true' : 'false'); });
    setUnknown(Object.keys(form.n)[0]);
  }
  function argOf(k) { return form.fn[k] ? form.fn[k].arg : k; }
  function setUnknown(k) {
    unk = k;
    var f = ALL[cur], ks = Object.keys(form.n);
    $('fsFind').innerHTML = ks.map(function (x) {
      return '<button class="gb gb--sm" type="button" data-unk="' + esc(x) + '" aria-pressed="' + (x === k ? 'true' : 'false') + '">' + M.symHTML(form.sym[x]) + '</button>';
    }).join('');
    $('fsIns').innerHTML = ks.filter(function (x) { return x !== k; }).map(function (x) {
      var a = argOf(x), c = constFor(f, a), u = unitFor(f, a, form);
      if (vals[a] === undefined && c) vals[a] = c.v;
      return '<label class="fs__in"><span class="fs__sym">' + M.symHTML(form.sym[x]) + '</span><span class="fs__m">' + esc(meaning(f, a) || '') + (c ? ' <b class="fs__const">booklet value</b>' : '') + '</span>' +
        '<input type="text" inputmode="decimal" autocomplete="off" spellcheck="false" data-val="' + esc(a) + '" value="' + esc(vals[a] || '') + '" placeholder="' + (form.fn[x] ? 'angle in degrees' : 'e.g. 2.5 or 3e8') + '">' +
        '<span class="fs__u">' + esc(form.fn[x] ? '°' : u) + '</span></label>';
    }).join('');
    $('fsEq').querySelectorAll('.sy').forEach(function (s) { s.classList.toggle('is-u', s.getAttribute('data-s') === argOf(k)); });
    calc();
  }
  function calc() {
    var f = ALL[cur], v = {};
    Object.keys(vals).forEach(function (a) { v[a] = M.readNum(vals[a]); });
    var r = M.solve(form, unk, v), a = argOf(unk), u = form.fn[unk] ? '°' : unitFor(f, a, form), out = '<div class="fs__re"><span class="m">' + r.html + '</span></div>';
    fs.querySelectorAll('[data-val]').forEach(function (inp) { var x = inp.value.trim(); inp.classList.toggle('is-bad', x !== '' && isNaN(M.readNum(x))); });
    if (r.missing.length) out += '<p class="fs__wait">Type the other values in SI units to get ' + M.symHTML(form.sym[unk]) + '.</p>';
    else if (r.err) out += '<p class="fs__err">' + esc(r.err) + '</p>';
    else out += '<p class="fs__ans">' + (r.angle ? form.fn[unk].fn + ' ' + M.symHTML(form.sym[unk]) + ' = ' + M.fmtNum(r.ratio) + ', so ' : '') +
      '<span class="m">' + M.symHTML(form.sym[unk]) + ' = <b>' + M.fmtNum(r.value) + '</b>' + (u ? ' ' + esc(u) : '') + '</span></p>';
    $('fsOut').innerHTML = out;
  }
  function hi(k, on) { $('fsEq').querySelectorAll('.sy').forEach(function (s) { if (s.getAttribute('data-s') === k) s.classList.toggle('is-hi', on); }); }
  function pickSym(s) {
    if (!form || $('fsSolve').hidden) return;
    var k = Object.keys(form.n).filter(function (x) { return argOf(x) === s; })[0];
    if (k) setUnknown(k); else say('That symbol is not in this form of the equation');
  }
  function copy(t) { (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { say('Copied ' + t); }, function () { say('Select the formula to copy it'); }); }

  fs.addEventListener('input', function (e) { var a = e.target.getAttribute('data-val'); if (a) { vals[a] = e.target.value; calc(); } });
  ['mouseover', 'focusin'].forEach(function (ev) { fs.addEventListener(ev, function (e) { var c = e.target.closest('[data-sym]'); if (c) hi(c.getAttribute('data-sym'), true); }); });
  ['mouseout', 'focusout'].forEach(function (ev) { fs.addEventListener(ev, function (e) { var c = e.target.closest('[data-sym]'); if (c) hi(c.getAttribute('data-sym'), false); }); });
  fs.addEventListener('click', function (e) {
    if (e.target === fs) return close();
    var b = e.target.closest('[data-fs]');
    if (b) {
      var a = b.getAttribute('data-fs');
      if (a === 'close') close();
      if (a === 'prev' || a === 'next') step(a === 'next' ? 1 : -1);
      if (a === 'copy') copy(ALL[cur].eq);
      if (a === 'learn') learn(cur, !isOn(ALL[cur].eq));
      if (a === 'poster') togglePoster();
      return;
    }
    var fm = e.target.closest('[data-form]'); if (fm) return setForm(+fm.getAttribute('data-form'));
    var u = e.target.closest('[data-unk]'); if (u) return setUnknown(u.getAttribute('data-unk'));
    var c = e.target.closest('[data-sym]'); if (c) return pickSym(c.getAttribute('data-sym'));
    var s = e.target.closest('#fsEq .sy'); if (s) return pickSym(s.getAttribute('data-s'));
  });
  document.addEventListener('keydown', function (e) {
    if (fs.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'Tab') {                                   // keep focus inside the studio
      var f = Array.prototype.filter.call(fs.querySelectorAll('button, input'), function (x) { return x.offsetParent !== null; }), first = f[0], lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---- page buttons ---- */
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]');
    if (o) {
      var card = o.closest('.fb');
      if (test && !card.classList.contains('is-shown')) { card.classList.add('is-shown'); return; }
      return open(+o.getAttribute('data-open'));
    }
    var s = e.target.closest('[data-show]');
    if (s) {
      mode = s.getAttribute('data-show');
      document.querySelectorAll('[data-show]').forEach(function (b) { b.setAttribute('aria-pressed', b === s ? 'true' : 'false'); });
      applyMode();
    }
    var a = e.target.closest('[data-act]');
    if (a && a.getAttribute('data-act') === 'random') { var v = visible(); if (v.length) open(v[Math.floor(Math.random() * v.length)]); }
    if (a && a.getAttribute('data-act') === 'test') {
      test = !test;
      a.setAttribute('aria-pressed', test ? 'true' : 'false');
      document.body.classList.toggle('is-test', test);
      document.querySelectorAll('.fb.is-shown').forEach(function (c) { c.classList.remove('is-shown'); });
      $('testNote').hidden = !test;
      say(test ? 'Test me is on: the formulas are hidden' : 'Formulas are showing again');
    }
  });
  document.addEventListener('change', function (e) {
    var c = e.target.closest('[data-learn]'); if (c) learn(+c.getAttribute('data-learn'), c.checked);
  });
})();
