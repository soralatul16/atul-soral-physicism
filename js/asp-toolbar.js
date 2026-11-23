/* ==========================================================================
   asp-toolbar.js · quick-navigation bar for simulation, unit and tool pages
   Add to a page with:  <script src="js/asp-toolbar.js" defer></script>
   (from inside /sims use  ../js/asp-toolbar.js )

   Top-left, glass:  [‹ Back] [⌂ Home] [MYP Physics] [⚡ Simulators]
   Bottom-right:     [↑] back to top, after scrolling down

   - Back returns to the previous page on this site, otherwise to the course page.
   - The course is worked out from the file name (myp-, igcse-, dp-).
   - The bar shrinks to icons on phones, and hides while scrolling down
     so it never covers the content; it comes back when scrolling up.
   - Not shown on the four main pages, inside iframes, or when printing.
   ========================================================================== */
(function () {
  'use strict';
  if (window.top !== window.self) return;
  var path = location.pathname;
  var file = path.split('/').pop() || 'index.html';
  if (/^(index|igcse-dashboard|myp-dashboard|dp-dashboard)\.html$/.test(file) || document.querySelector('.nav__back')) return;

  var up = /\/sims\//.test(path) ? '../' : '';
  var COURSES = {
    myp:   { name: 'MYP Physics',   page: 'myp-dashboard.html',   sims: 'myp-simulations.html',   c: '#1f7a72' },
    igcse: { name: 'IGCSE Physics', page: 'igcse-dashboard.html', sims: 'igcse-simulations.html', c: '#5a3fd6' },
    dp:    { name: 'DP Physics',    page: 'dp-dashboard.html',    sims: 'dp-simulations.html',    c: '#b4473e' }
  };
  var key = /^myp-/.test(file) || /^(crash-course|dos-donts|student-dashboard)/.test(file) ? 'myp'
          : /^igcse-/.test(file) ? 'igcse'
          : /^dp-/.test(file) ? 'dp' : null;
  var course = key ? COURSES[key] : null;
  var onGallery = course && file === course.sims;

  var ICON = {
    back: '<path d="M15 18l-6-6 6-6"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    book: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M8 7h8"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    up:   '<path d="M18 15l-6-6-6 6"/>'
  };
  var svg = function (n) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + '</svg>'; };

  var css =
    '.asp-tb{position:fixed;top:12px;left:12px;z-index:2147483000;display:flex;gap:4px;padding:4px;border-radius:999px;' +
      'font:600 13px/1 "Avenir Next","Segoe UI",system-ui,-apple-system,sans-serif;' +
      'background:rgba(255,255,255,.55);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);' +
      'border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff,0 1px 2px rgba(26,26,46,.08),0 8px 24px rgba(26,26,46,.14);transition:transform .3s,opacity .3s}' +
    '.asp-tb.asp-hide{transform:translateY(-70px);opacity:0}' +
    '.asp-tb a,.asp-top{display:inline-flex;align-items:center;gap:5px;height:34px;padding:0 13px;border-radius:999px;color:#1a1a2e;text-decoration:none;white-space:nowrap;' +
      'background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(255,255,255,.55));border:1px solid rgba(255,255,255,.9);box-shadow:inset 0 1px 0 #fff;transition:background .2s,transform .2s}' +
    '.asp-tb a,.asp-top{position:relative;isolation:isolate;overflow:hidden;-webkit-backdrop-filter:blur(14px) saturate(170%);backdrop-filter:blur(14px) saturate(170%)}' +
    '.asp-tb a::before,.asp-top::before{content:"";position:absolute;z-index:-1;left:8%;right:8%;top:1px;height:48%;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.75),rgba(255,255,255,0));pointer-events:none}' +
    '.asp-tb a:hover{background:linear-gradient(180deg,#fff,rgba(255,255,255,.7));transform:translateY(-1px);box-shadow:inset 0 1px 0 #fff,0 6px 14px rgba(26,26,46,.1)}' +
    '.asp-tb a:active,.asp-top:active{transform:scale(.96)}' +
    'html[data-theme="dark"] .asp-tb a::before,body.dark .asp-tb a::before,body.dark-mode .asp-tb a::before{background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,0))}' +
    '.asp-tb a.asp-course{color:var(--asp-c)}' +
    '.asp-tb svg,.asp-top svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0}' +
    '.asp-tb a:focus-visible,.asp-top:focus-visible{outline:2px solid #1f7a72;outline-offset:2px}' +
    '.asp-top{position:fixed;right:16px;bottom:16px;z-index:2147483000;width:42px;height:42px;padding:0;justify-content:center;cursor:pointer;' +
      'box-shadow:inset 0 1px 0 #fff,0 8px 24px rgba(26,26,46,.16);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);opacity:0;pointer-events:none;transition:opacity .25s}' +
    '.asp-top.asp-on{opacity:1;pointer-events:auto}' +
    '@media(max-width:700px){.asp-tb a{padding:0 10px}.asp-tb .asp-lbl{display:none}.asp-tb a.asp-back .asp-lbl{display:inline}}' +
    'html[data-theme="dark"] .asp-tb,body.dark .asp-tb,body.dark-mode .asp-tb{background:rgba(30,32,45,.7);border-color:rgba(255,255,255,.12);box-shadow:0 8px 24px rgba(0,0,0,.4)}' +
    'html[data-theme="dark"] .asp-tb a,body.dark .asp-tb a,body.dark-mode .asp-tb a,html[data-theme="dark"] .asp-top,body.dark .asp-top,body.dark-mode .asp-top{color:#e8e5dd;background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.12);box-shadow:none}' +
    '@media print{.asp-tb,.asp-top{display:none}}' +
    '@media(prefers-reduced-motion:reduce){.asp-tb,.asp-tb a,.asp-top{transition:none}}';

  function link(cls, href, icon, label, title) {
    return '<a class="' + cls + '" href="' + href + '" title="' + title + '">' + svg(icon) + '<span class="asp-lbl">' + label + '</span></a>';
  }

  function build() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var bar = document.createElement('nav');
    bar.className = 'asp-tb'; bar.setAttribute('aria-label', 'Quick navigation');
    if (course) bar.style.setProperty('--asp-c', course.c);
    var back = course ? up + course.page : up + 'index.html';
    var html = link('asp-back', back, 'back', 'Back', 'Go back') + link('asp-home', up + 'index.html', 'home', 'Home', 'Home');
    if (course) {
      html += link('asp-course', up + course.page, 'book', course.name, course.name);
      if (!onGallery) html += link('asp-sims', up + course.sims, 'bolt', 'Simulators', course.name + ' simulators');
    }
    bar.innerHTML = html;
    bar.querySelector('.asp-back').addEventListener('click', function (e) {
      var ref = document.referrer;
      if (ref && ref.indexOf(location.origin) === 0 && ref !== location.href && history.length > 1) { e.preventDefault(); history.back(); }
    });
    document.body.appendChild(bar);

    var top = document.createElement('button');
    top.type = 'button'; top.className = 'asp-top'; top.setAttribute('aria-label', 'Back to top'); top.title = 'Back to top';
    top.innerHTML = svg('up');
    top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(top);

    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      bar.classList.toggle('asp-hide', y > 160 && y > lastY + 4);
      if (y < lastY - 4 || y < 160) bar.classList.remove('asp-hide');
      top.classList.toggle('asp-on', y > 600);
      lastY = y;
    }, { passive: true });
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
