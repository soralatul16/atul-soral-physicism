/* ==========================================================================
   asp-course.js · shared behaviour for the IGCSE, MYP and DP pages
   - Level switch  [data-filter-level="storageKey"] with buttons [data-level]
       items carry data-levels="core ext" (shown when the chosen level is listed)
   - Search        input[data-find]; items [data-find-item]; groups [data-find-group]
       press "/" to jump to the search box, Esc to clear it
   - Jump bar      .jump links highlight the section in view
   ========================================================================== */
(function () {
  'use strict';
  var state = { level: null, q: '' };
  var items = document.querySelectorAll('[data-find-item], [data-levels]');
  var groups = document.querySelectorAll('[data-find-group]');
  var empty = document.getElementById('findEmpty');
  var norm = function (s) { return s.toLowerCase().replace(/[^a-z0-9.]+/g, ' ').trim(); };
  items.forEach(function (el) { el._t = norm(el.textContent + ' ' + (el.getAttribute('data-find-item') || '')); });

  function apply() {
    var words = state.q ? state.q.split(' ') : [];
    items.forEach(function (el) {
      var lv = el.getAttribute('data-levels');
      var levelOk = !state.level || !lv || lv.split(' ').indexOf(state.level) > -1;
      var queryOk = !words.length || !el.hasAttribute('data-find-item') || words.every(function (w) { return el._t.indexOf(w) > -1; });
      el.classList.toggle('is-hidden', !(levelOk && queryOk));
    });
    var any = !groups.length;
    groups.forEach(function (g) {
      var kids = g.querySelectorAll('[data-find-item]');
      var vis = !kids.length || Array.prototype.some.call(kids, function (el) { return !el.classList.contains('is-hidden'); });
      g.classList.toggle('is-hidden', !vis);
      if (vis) any = true;
    });
    if (empty) empty.classList.toggle('is-on', !any);
  }

  /* Level switch */
  document.querySelectorAll('[data-filter-level]').forEach(function (seg) {
    var key = seg.getAttribute('data-filter-level');
    var btns = seg.querySelectorAll('button[data-level]');
    function set(lv) {
      state.level = lv;
      btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.level === lv ? 'true' : 'false'); });
      try { localStorage.setItem(key, lv); } catch (e) {}
      apply();
    }
    btns.forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.level); }); });
    var saved = null; try { saved = localStorage.getItem(key); } catch (e) {}
    var valid = Array.prototype.some.call(btns, function (b) { return b.dataset.level === saved; });
    set(valid ? saved : btns[btns.length - 1].dataset.level);
  });

  /* Search */
  var input = document.querySelector('[data-find]');
  if (input) {
    input.addEventListener('input', function () { state.q = norm(input.value); apply(); });
    input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { input.value = ''; state.q = ''; apply(); } });
    document.addEventListener('keydown', function (e) {
      var a = document.activeElement;
      if (e.key === '/' && a !== input && !/INPUT|TEXTAREA/.test(a.tagName) && !a.isContentEditable) { e.preventDefault(); input.focus(); }
    });
  }

  /* Jump bar */
  var links = document.querySelectorAll('.jump a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { var s = document.getElementById(a.getAttribute('href').slice(1)); if (s) map[s.id] = a; });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-on'); });
        map[e.target.id].classList.add('is-on');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { io.observe(document.getElementById(id)); });
  }
})();
