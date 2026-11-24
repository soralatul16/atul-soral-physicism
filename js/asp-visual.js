/* ==========================================================================
   asp-visual.js · formula infographic tabs + full-screen viewer
   Tabs:   <div class="seg" data-ig-tabs> <button data-ig="mech"> ... </div>
           <div class="ig__panel" id="ig-mech"> ...
   Viewer: any <a data-ig-img href="Images/x.png" data-title="..."> opens the
           poster on this page (Esc closes, arrow keys step through).
           Optional data-quiz="url" adds a Quiz button for that poster.
   ========================================================================== */
(function () {
  'use strict';

  document.querySelectorAll('[data-ig-tabs]').forEach(function (bar) {
    var btns = bar.querySelectorAll('button[data-ig]');
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        btns.forEach(function (x) {
          var on = x === b;
          x.setAttribute('aria-pressed', on ? 'true' : 'false');
          var p = document.getElementById('ig-' + x.getAttribute('data-ig'));
          if (p) p.classList.toggle('is-on', on);
        });
      });
    });
  });

  var all = Array.prototype.slice.call(document.querySelectorAll('a[data-ig-img]'));
  if (!all.length) return;

  var box = document.createElement('div');
  box.className = 'igv';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Infographic');
  box.innerHTML =
    '<div class="igv__bar">' +
      '<button class="gb gb--sm" type="button" data-igv="close">&larr; Back to page</button>' +
      '<div>' +
        '<a class="gb gb--sm" data-igv-quiz hidden>&#129504; Quiz</a>' +
        '<a class="gb gb--sm" data-igv-dl download>&#11015; Download</a>' +
        '<button class="gb gb--sm" type="button" data-igv="prev" aria-label="Previous infographic">&lsaquo; Prev</button>' +
        '<button class="gb gb--sm" type="button" data-igv="next" aria-label="Next infographic">Next &rsaquo;</button>' +
      '</div>' +
    '</div>' +
    '<figure><img alt=""><p class="igv__miss" hidden>This poster could not be loaded.</p><figcaption></figcaption></figure>';
  document.body.appendChild(box);
  var img = box.querySelector('img'), cap = box.querySelector('figcaption'), miss = box.querySelector('.igv__miss');
  var dl = box.querySelector('[data-igv-dl]'), quiz = box.querySelector('[data-igv-quiz]');
  var links = all, idx = 0, last = null;
  img.addEventListener('error', function () { if (img.getAttribute('src')) { img.hidden = true; miss.hidden = false; } });
  img.addEventListener('load', function () { img.hidden = false; miss.hidden = true; });

  function show(i) {
    idx = (i + links.length) % links.length;
    var a = links[idx], t = a.getAttribute('data-title') || a.textContent, src = a.getAttribute('href');
    img.hidden = false; miss.hidden = true;
    img.src = src;
    img.alt = t + ' infographic';
    cap.textContent = t + '  (' + (idx + 1) + ' of ' + links.length + ')';
    dl.href = src;
    dl.setAttribute('download', decodeURIComponent(src.split('/').pop()));
    var q = a.getAttribute('data-quiz');
    if (q) { quiz.href = q; quiz.hidden = false; } else quiz.hidden = true;
  }
  function open(a) {
    last = document.activeElement;
    // step only through posters that are visible (respects search filters)
    links = all.filter(function (x) { return x.offsetParent !== null || x === a; });
    show(links.indexOf(a));
    box.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    box.querySelector('[data-igv="close"]').focus();
  }
  function close() {
    box.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    img.removeAttribute('src');
    if (last) last.focus();
  }

  all.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      open(a);
    });
  });
  box.addEventListener('click', function (e) {
    var act = e.target.closest('[data-igv]');
    if (act) {
      var k = act.getAttribute('data-igv');
      if (k === 'close') close(); else show(idx + (k === 'next' ? 1 : -1));
    } else if (e.target === box) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(idx + 1);
    else if (e.key === 'ArrowLeft') show(idx - 1);
  });
})();
