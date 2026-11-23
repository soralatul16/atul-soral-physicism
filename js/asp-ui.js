/* ==========================================================================
   asp-ui.js · shared behaviour for every main page
   - theme toggle (localStorage key 'physicism-theme', same as before)
   - mobile menu, scroll reveal, glass-button pointer light
   - drifting background equations
   - Google sign-in: Firebase loads after the page is idle, not before it paints
   - teacher shortcut (type SORALISM)
   ========================================================================== */
(function () {
  'use strict';
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  doc.classList.remove('no-js');

  /* Theme */
  window.toggleTheme = function () {
    var next = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    doc.setAttribute('data-theme', next);
    try { localStorage.setItem('physicism-theme', next); } catch (e) {}
    document.dispatchEvent(new CustomEvent('asp:theme', { detail: next }));
  };
  document.querySelectorAll('[data-action="theme"]').forEach(function (b) { b.addEventListener('click', window.toggleTheme); });

  /* Back button: returns to the previous page on this site, otherwise to its href */
  document.querySelectorAll("[data-back]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      var ref = document.referrer;
      if (ref && ref.indexOf(location.origin) === 0 && ref !== location.href && history.length > 1) { e.preventDefault(); history.back(); }
    });
  });

  /* Back to top: appears after scrolling down */
  var topBtn = document.createElement("button");
  topBtn.type = "button"; topBtn.className = "gb gb--icon to-top"; topBtn.setAttribute("aria-label", "Back to top"); topBtn.title = "Back to top";
  topBtn.innerHTML = "<svg class=\"ico\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M18 15l-6-6-6 6\"/></svg>";
  topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
  document.body.appendChild(topBtn);
  var onScroll = function () { topBtn.classList.toggle("is-on", window.scrollY > 600); };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* Mobile menu */
  var nav = document.querySelector('.nav'), burger = document.querySelector('.nav__burger');
  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') nav.classList.remove('is-open'); });
  }

  /* Scroll reveal */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Glass buttons: light follows the pointer */
  document.addEventListener('pointermove', function (e) {
    var b = e.target.closest && e.target.closest('.gb');
    if (!b) return;
    var r = b.getBoundingClientRect();
    b.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    b.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  /* Background equations: a few at a time, paused when the tab is hidden */
  var bg = document.querySelector('.asp-bg');
  if (bg && !reduce) {
    var EQS = ['F = ma', 'E = mc²', 'v = fλ', 'P = IV', 'W = Fd', 'a = Δv/t', 'Eₖ = ½mv²', 'p = mv', 'V = IR', 'τ = Fr', 'T = 2π√(l/g)', 'PV = nRT', 'Q = mcΔT', 'F = kx'];
    var spawn = function () {
      if (document.hidden || bg.querySelectorAll('.asp-eq').length > 6) return;
      var el = document.createElement('span');
      el.className = 'asp-eq';
      el.textContent = EQS[Math.floor(Math.random() * EQS.length)];
      el.style.top = (Math.random() * 85 + 5) + '%';
      el.style.fontSize = (Math.random() * 6 + 11) + 'px';
      el.style.animationDuration = (Math.random() * 40 + 30) + 's';
      el.addEventListener('animationend', function () { el.remove(); });
      bg.appendChild(el);
    };
    for (var i = 0; i < 4; i++) setTimeout(spawn, i * 5000);
    setInterval(spawn, 8000);
  }

  /* Sign in. Firebase scripts load when the browser is idle, so they never delay the page. */
  var FB = 'https://www.gstatic.com/firebasejs/10.12.0/';
  var authBox = document.querySelector('[data-auth]');
  var fbReady = null;
  function load(src) {
    return new Promise(function (ok, fail) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = fail; document.head.appendChild(s); });
  }
  function firebaseReady() {
    if (window.firebase && firebase.apps && firebase.apps.length) return Promise.resolve();
    if (!fbReady) {
      var cfg = (authBox && authBox.getAttribute('data-config')) || 'exam-system/firebase-config.js?v=2';
      fbReady = load(FB + 'firebase-app-compat.js')
        .then(function () { return Promise.all([load(FB + 'firebase-auth-compat.js'), load(FB + 'firebase-firestore-compat.js')]); })
        .then(function () { return load(cfg); });
    }
    return fbReady;
  }
  window.aspFirebase = firebaseReady;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function renderAuth(user) {
    if (!authBox) return;
    if (user) {
      var name = user.displayName || (user.email || '').split('@')[0];
      authBox.innerHTML = '<span class="nav__user">' + esc(name.split(' ')[0]) + '</span>' +
        '<button class="gb gb--sm" type="button" data-action="signout">Sign out</button>';
    } else {
      authBox.innerHTML = '<button class="gb gb--sm" type="button" data-action="signin">Sign in</button>';
    }
  }
  if (authBox) {
    authBox.addEventListener('click', function (e) {
      var a = e.target.closest('[data-action]');
      if (!a) return;
      if (a.dataset.action === 'signin') {
        a.disabled = true;
        firebaseReady().then(function () {
          return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
        }).catch(function (err) {
          console.warn('Sign in failed:', err);
          a.disabled = false;
        });
      }
      if (a.dataset.action === 'signout') firebase.auth().signOut().then(function () { location.reload(); });
    });
    var start = function () { firebaseReady().then(function () { firebase.auth().onAuthStateChanged(renderAuth); }).catch(function () {}); };
    if ('requestIdleCallback' in window) requestIdleCallback(start, { timeout: 3000 }); else setTimeout(start, 1500);
  }

  /* Teacher shortcut: type SORALISM anywhere outside a text box */
  var keys = '', last = 0;
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable || e.key.length !== 1) return;
    var now = Date.now(); if (now - last > 800) keys = ''; last = now;
    keys = (keys + e.key.toUpperCase()).slice(-16);
    if (keys.slice(-8) !== 'SORALISM') return;
    keys = '';
    var dest = prompt('Teacher area: type a code\n  HUB  · Teacher Hub\n  EXAM · Exam Teacher\n  PLAN · DP Planner\n  LEAD · Leadership\n  REC  · Class Records\n  IA   · IA/EE Generator');
    var map = { HUB: 'teacher-hub.html', EXAM: 'exam-system/exam-teacher.html', PLAN: 'dp-teacher-planner.html', LEAD: 'ib-leadership-course.html', REC: 'class-records.html', IA: 'ia-ee-generator.html' };
    if (dest && map[dest.trim().toUpperCase()]) location.href = map[dest.trim().toUpperCase()];
  });
})();
