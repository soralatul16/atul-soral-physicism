/* ==========================================================================
   asp-home.js · home page only
   - travelling wave (pauses when off screen or the tab is hidden)
   - stat counters
   - "What's new" list: add new entries at the TOP of NEWS
   ========================================================================== */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isDark = function () { return document.documentElement.getAttribute('data-theme') === 'dark'; };

  /* ---------- What's new ---------- */
  var NEWS = [
    { date: '2026-11-22', icon: '🔭', text: 'MYP Astrophysics: new study unit with exam prep and question bank', href: 'sims/myp-astrophysics.html' },
    { date: '2026-11-21', icon: '🔊', text: 'MYP Light and Sound: exam prep with 350+ practice questions', href: 'sims/myp-sound-exam.html' },
    { date: '2026-06-10', icon: '📝', text: 'Student Portal: sign in, attempt tests, get graded', href: 'dp-student-portal.html' },
    { date: '2026-06-09', icon: '🧪', text: 'New simulators: density lab, energy efficiency, electromagnetism, radioactive decay', href: 'dp-simulations.html' }
  ];
  var newsText = document.getElementById('newsText'), newsLink = document.getElementById('newsLink');
  if (newsText && newsLink) {
    var idx = 0, timer = null;
    var fmt = function (iso) { return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); };
    var show = function (i) {
      idx = (i + NEWS.length) % NEWS.length;
      var n = NEWS[idx];
      newsText.style.opacity = 0;
      setTimeout(function () {
        newsText.textContent = n.icon + ' ' + n.text + ' ';
        var t = document.createElement('time'); t.dateTime = n.date; t.textContent = fmt(n.date);
        newsText.appendChild(t);
        newsLink.href = n.href;
        newsText.style.opacity = 1;
      }, reduce ? 0 : 250);
    };
    var auto = function () { clearInterval(timer); if (!reduce) timer = setInterval(function () { show(idx + 1); }, 6000); };
    document.getElementById('newsPrev').addEventListener('click', function () { show(idx - 1); auto(); });
    document.getElementById('newsNext').addEventListener('click', function () { show(idx + 1); auto(); });
    var box = newsText.closest('.news');
    box.addEventListener('mouseenter', function () { clearInterval(timer); });
    box.addEventListener('mouseleave', auto);
    auto();
  }

  /* ---------- Stat counters ---------- */
  var stats = document.querySelector('.stats');
  if (stats && 'IntersectionObserver' in window && !reduce) {
    var so = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      so.disconnect();
      stats.querySelectorAll('[data-count]').forEach(function (el) {
        var to = +el.dataset.count, suffix = el.querySelector('small') ? el.querySelector('small').outerHTML : '', t0 = null;
        (function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1200, 1);
          el.innerHTML = Math.round((1 - Math.pow(1 - p, 3)) * to) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(performance.now());
      });
    }, { threshold: 0.4 });
    so.observe(stats);
  }

  /* ---------- Travelling wave ---------- */
  var cv = document.getElementById('wave');
  if (!cv) return;
  var ctx = cv.getContext('2d'), t = 0, w = 0, h = 0, running = false, visible = true;
  var freq = 1, F_MIN = 0.25, F_MAX = 3;
  var out = document.getElementById('waveF');

  function size() {
    var r = cv.getBoundingClientRect(), d = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width; h = r.height;
    cv.width = Math.round(w * d); cv.height = Math.round(h * d);
    ctx.setTransform(d, 0, 0, d, 0, 0);
    draw();
  }
  function arrow(x1, y1, x2, y2) {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    [[x1, y1, x2, y2], [x2, y2, x1, y1]].forEach(function (p) {
      var a = Math.atan2(p[3] - p[1], p[2] - p[0]);
      ctx.beginPath();
      ctx.moveTo(p[2], p[3]); ctx.lineTo(p[2] - 7 * Math.cos(a - 0.4), p[3] - 7 * Math.sin(a - 0.4));
      ctx.moveTo(p[2], p[3]); ctx.lineTo(p[2] - 7 * Math.cos(a + 0.4), p[3] - 7 * Math.sin(a + 0.4));
      ctx.stroke();
    });
  }
  function draw() {
    if (!w) return;
    var dark = isDark(), mid = h * 0.56, A = h * 0.24, lam = w / 2.3, x, y, i;
    var Y = function (x) { return mid - A * Math.sin(2 * Math.PI * (x / lam) - t); };
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = dark ? 'rgba(255,255,255,.04)' : 'rgba(78,205,196,.10)'; ctx.lineWidth = 1;
    ctx.beginPath();
    for (x = 0; x < w; x += 20) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for (y = 0; y < h; y += 20) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
    ctx.stroke();

    ctx.strokeStyle = dark ? 'rgba(255,255,255,.2)' : 'rgba(26,26,46,.22)';
    ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(0, mid); ctx.lineTo(w, mid); ctx.stroke(); ctx.setLineDash([]);

    var fill = ctx.createLinearGradient(0, mid - A, 0, mid + A);
    fill.addColorStop(0, 'rgba(78,205,196,.18)'); fill.addColorStop(1, 'rgba(91,155,213,0)');
    ctx.beginPath(); ctx.moveTo(0, mid);
    for (x = 0; x <= w; x += 2) ctx.lineTo(x, Y(x));
    ctx.lineTo(w, mid); ctx.closePath(); ctx.fillStyle = fill; ctx.fill();

    var g = ctx.createLinearGradient(0, 0, w, 0);
    g.addColorStop(0, '#4ecdc4'); g.addColorStop(0.55, '#5b9bd5'); g.addColorStop(1, '#b39ddb');
    ctx.strokeStyle = g; ctx.lineWidth = 3; ctx.lineCap = 'round';
    ctx.beginPath();
    for (x = 0; x <= w; x += 2) { if (x) ctx.lineTo(x, Y(x)); else ctx.moveTo(x, Y(x)); }
    ctx.stroke();

    var cols = ['#4ecdc4', '#5b9bd5', '#b39ddb', '#f28b82'];
    for (i = 1; i < 14; i++) {
      var px = i * w / 14;
      ctx.strokeStyle = dark ? 'rgba(255,255,255,.08)' : 'rgba(26,26,46,.08)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(px, mid - A); ctx.lineTo(px, mid + A); ctx.stroke();
      ctx.fillStyle = dark ? '#1e2030' : '#fff'; ctx.strokeStyle = cols[i % 4]; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.arc(px, Y(px), 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }

    var mark = dark ? '#f7a59e' : '#d9645b';
    var x0 = ((t / (2 * Math.PI)) * lam + lam * 0.25) % lam, yTop = mid - A - 20;
    ctx.strokeStyle = mark; ctx.fillStyle = mark; ctx.lineWidth = 1.4;
    arrow(x0, yTop, x0 + lam, yTop);
    ctx.font = 'italic 600 17px "Palatino Linotype", Palatino, Georgia, serif';
    ctx.fillText('λ', x0 + lam / 2 - 4, yTop - 8);
    var xa = x0 + lam;
    if (xa + 34 < w) { arrow(xa + 14, mid, xa + 14, mid - A); ctx.fillText('A', xa + 21, mid - A / 2 + 5); }
  }
  function loop() {
    if (!running) return;
    t += 0.03 * freq; draw();
    requestAnimationFrame(loop);
  }
  function play() { if (running || reduce || !visible || document.hidden) return; running = true; requestAnimationFrame(loop); }
  function pause() { running = false; }

  function setF(f) {
    freq = Math.max(F_MIN, Math.min(F_MAX, Math.round(f * 100) / 100));
    if (out) out.textContent = 'f × ' + freq.toFixed(freq < 1 ? 2 : 1);
    if (reduce) { t += 0.5; draw(); }
  }
  document.getElementById('waveDown').addEventListener('click', function () { setF(freq / 1.5); });
  document.getElementById('waveUp').addEventListener('click', function () { setF(freq * 1.5); });
  setF(1);

  if ('ResizeObserver' in window) new ResizeObserver(size).observe(cv); else window.addEventListener('resize', size);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) play(); else pause(); }).observe(cv);
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else play(); });
  document.addEventListener('asp:theme', draw);
  size(); play();
})();
