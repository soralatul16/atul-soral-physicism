/* ==========================================================================
   asp-helpers.js · floating glass helpers: AI tutor, feedback, GDC calculator
   <script src="js/asp-helpers.js?v=1" data-course="MYP" defer></script>
   <script src="js/asp-helpers.js?v=1" data-course="DP" data-gdc defer></script>
   - AI tutor: the existing 'aiChat' Cloud Function (key stays on the server),
     signed-in students only.
   - Feedback: emailed through EmailJS (same account as before).
   - GDC: loads js/gdc.js the first time it is opened.
   Needs asp-ui.js (window.aspFirebase) and asp-visual.css.
   ========================================================================== */
(function () {
  'use strict';
  var me = document.currentScript;
  var COURSE = (me && me.getAttribute('data-course')) || 'MYP';
  var WITH_GDC = !!(me && me.hasAttribute('data-gdc'));
  var FBJS = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-functions-compat.js';
  var EMAILJS = { src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js', publicKey: 'jhfWQKIKtye-3eVpn', serviceID: 'service_ni72akl', templateID: 'template_xr522or' };
  var PROMPT = {
    MYP: 'You are a friendly IB MYP Physics tutor for Grade 6-10 students. Give clear, concise answers. Use simple language. Include formulas when relevant. Keep answers under 150 words. If asked about non-physics topics, politely redirect to physics. Always encourage the student.',
    DP: 'You are a friendly IB DP Physics tutor. Answer ONLY physics questions related to the IB DP Physics syllabus (2025 onwards, themes A-E). Keep answers concise (2-4 sentences). Use formulas where relevant. If asked non-physics questions, politely redirect to physics. Use emojis sparingly.'
  };
  var HELLO = {
    MYP: "Hi! I'm your MYP Physics tutor. Ask me anything about formulas, concepts or practice problems. 🔬",
    DP: "Hi! I'm your DP Physics tutor. Ask me about any topic from A to E, formulas, concepts or exam tips. 🔬"
  };
  function base() { return window.ASP_ASSET_BASE || ''; }
  function load(src) {
    return new Promise(function (ok, fail) { var s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = fail; document.head.appendChild(s); });
  }
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  /* ---------- Buttons ---------- */
  var dock = document.createElement('div');
  dock.className = 'helpers';
  dock.innerHTML =
    (WITH_GDC ? '<button class="gb gb--icon" type="button" data-h="gdc" aria-label="Open the GDC calculator" title="GDC calculator">&#129518;</button>' : '') +
    '<button class="gb gb--icon" type="button" data-h="ai" aria-label="Ask the AI tutor" title="AI tutor" aria-expanded="false" aria-controls="hAi">&#129504;</button>' +
    '<button class="gb gb--icon" type="button" data-h="fb" aria-label="Send feedback or a correction" title="Feedback" aria-expanded="false" aria-controls="hFb">&#128172;</button>';
  document.body.appendChild(dock);

  /* ---------- Panels ---------- */
  var ai = document.createElement('section');
  ai.className = 'hpanel'; ai.id = 'hAi'; ai.setAttribute('aria-label', 'AI tutor');
  ai.innerHTML =
    '<header><b>&#129504; Physicism AI Tutor</b><button class="gb gb--icon gb--sm" type="button" data-close aria-label="Close">&times;</button></header>' +
    '<div class="hpanel__msgs" aria-live="polite"><p class="hmsg hmsg--bot">' + esc(HELLO[COURSE] || HELLO.MYP) + '</p></div>' +
    '<form class="hpanel__row"><input type="text" placeholder="Ask a physics question&hellip;" aria-label="Your question" autocomplete="off" maxlength="600"><button class="gb gb--sm gb--dark" type="submit">Send</button></form>';
  var fb = document.createElement('section');
  fb.className = 'hpanel'; fb.id = 'hFb'; fb.setAttribute('aria-label', 'Feedback');
  fb.innerHTML =
    '<header><b>&#128172; Feedback / correction</b><button class="gb gb--icon gb--sm" type="button" data-close aria-label="Close">&times;</button></header>' +
    '<form class="hpanel__form">' +
      '<p class="hpanel__page">&#128196; ' + esc(location.pathname.split('/').pop() || 'index.html') + '</p>' +
      '<textarea required placeholder="Spotted a mistake or have an idea? Tell me here." aria-label="Your message" maxlength="2000"></textarea>' +
      '<input type="email" placeholder="Your email (optional, if you want a reply)" aria-label="Your email">' +
      '<button class="gb gb--dark" type="submit">Send feedback</button>' +
      '<p class="hpanel__status" role="status"></p>' +
    '</form>';
  document.body.appendChild(ai);
  document.body.appendChild(fb);

  function toggle(panel, on) {
    [ai, fb].forEach(function (p) {
      var open = p === panel ? (on === undefined ? !p.classList.contains('is-open') : on) : false;
      p.classList.toggle('is-open', open);
      var b = dock.querySelector('[aria-controls="' + p.id + '"]');
      if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) setTimeout(function () { var f = p.querySelector('input,textarea'); if (f) f.focus(); }, 200);
    });
  }
  dock.addEventListener('click', function (e) {
    var b = e.target.closest('[data-h]'); if (!b) return;
    var k = b.getAttribute('data-h');
    if (k === 'ai') toggle(ai);
    else if (k === 'fb') toggle(fb);
    else openGdc(b);
  });
  [ai, fb].forEach(function (p) { p.querySelector('[data-close]').addEventListener('click', function () { toggle(p, false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(null, false); });

  /* ---------- AI tutor ---------- */
  var msgs = ai.querySelector('.hpanel__msgs'), history = [];
  function say(text, who) {
    var p = document.createElement('p');
    p.className = 'hmsg hmsg--' + who;
    p.innerHTML = esc(text).replace(/\n/g, '<br>');
    msgs.appendChild(p); msgs.scrollTop = msgs.scrollHeight;
    return p;
  }
  function functionsReady() {
    return window.aspFirebase().then(function () { return firebase.functions ? null : load(FBJS); });
  }
  ai.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var input = this.querySelector('input'), q = input.value.trim();
    if (!q) return;
    input.value = '';
    say(q, 'me');
    var wait = say('Thinking…', 'bot'); wait.classList.add('is-wait');
    functionsReady().then(function () {
      if (!firebase.auth().currentUser) {
        wait.classList.remove('is-wait');
        wait.innerHTML = '&#128274; Please sign in to use the AI tutor.<br><button class="gb gb--sm" type="button" data-signin>Sign in with Google</button>';
        wait.querySelector('[data-signin]').addEventListener('click', function () {
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function () { wait.textContent = 'Signed in. Ask your question again.'; }).catch(function () {});
        });
        return;
      }
      history.push({ role: 'user', content: q });
      return firebase.functions().httpsCallable('aiChat')({
        messages: [{ role: 'system', content: PROMPT[COURSE] || PROMPT.MYP }].concat(history.slice(-6)),
        temperature: 0.7, maxTokens: 300
      }).then(function (r) {
        var reply = (r && r.data && r.data.reply) || 'Sorry, I could not answer that. Try asking it another way.';
        history.push({ role: 'assistant', content: reply });
        wait.classList.remove('is-wait');
        wait.innerHTML = esc(reply).replace(/\n/g, '<br>');
        msgs.scrollTop = msgs.scrollHeight;
      });
    }).catch(function (err) {
      wait.classList.remove('is-wait'); wait.classList.add('is-err');
      wait.textContent = 'The tutor is not available right now (' + ((err && err.message) || 'network error') + ').';
    });
  });

  /* ---------- Feedback ---------- */
  var mail = null;
  fb.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = this, status = form.querySelector('.hpanel__status'), btn = form.querySelector('button[type=submit]');
    var msg = form.querySelector('textarea').value.trim(), email = form.querySelector('input').value.trim();
    if (!msg) return;
    btn.disabled = true; btn.textContent = 'Sending…'; status.className = 'hpanel__status'; status.textContent = '';
    mail = mail || load(EMAILJS.src).then(function () { emailjs.init({ publicKey: EMAILJS.publicKey }); });
    mail.then(function () {
      return emailjs.send(EMAILJS.serviceID, EMAILJS.templateID, {
        page: location.href, message: msg, email: email || '(not provided)',
        sent_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
    }).then(function () {
      status.textContent = '✓ Sent. Thank you!'; status.className = 'hpanel__status is-ok';
      form.reset();
      setTimeout(function () { toggle(fb, false); status.textContent = ''; }, 2200);
    }).catch(function (err) {
      console.error(err); mail = null;
      status.textContent = 'Could not send. Please try again, or email atulsoralphysicism@gmail.com.'; status.className = 'hpanel__status is-err';
    }).then(function () { btn.disabled = false; btn.textContent = 'Send feedback'; });
  });

  /* ---------- GDC calculator ---------- */
  var gdc = null;
  function openGdc(btn) {
    toggle(null, false);
    btn.disabled = true;
    gdc = gdc || load(base() + 'js/gdc.js');
    gdc.then(function () { if (window.openGDC) window.openGDC(); })
      .catch(function () { gdc = null; alert('The calculator could not load. Check your connection and try again.'); })
      .then(function () { btn.disabled = false; });
  }
})();
