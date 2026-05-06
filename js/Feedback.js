/* ============================================================
   PHYSICISM — Feedback Widget (feedback.js)
   
   HOW TO USE ON ANY PAGE:
   1. In <head>, add:
        <link rel="stylesheet" href="/feedback.css">
        (adjust path depth as needed, e.g. ../../feedback.css)

   2. Before </body>, add:
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <script src="/feedback.js"></script>
        (adjust path depth as needed)

   3. Fill in YOUR credentials below (one-time setup).
   ============================================================ */

/* ──────────────────────────────────────────
   ★  YOUR EMAILJS CREDENTIALS  ★
   Get these from https://www.emailjs.com/
   ────────────────────────────────────────── */
const FB_CONFIG = {
  publicKey:   "jhfWQKIKtye-3eVpn",      // EmailJS → Account → Public Key
  serviceID:   "service_ni72akl",      // EmailJS → Email Services → Service ID
  templateID:  "template_xr522or",     // EmailJS → Email Templates → Template ID
};

/* ──────────────────────────────────────────
   Template variables used (set these in
   your EmailJS template):
     {{page}}     – URL of the page
     {{message}}  – student's feedback
     {{email}}    – student's email (optional)
     {{sent_at}}  – timestamp
   ────────────────────────────────────────── */

(function () {

  /* ── Init EmailJS ── */
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: FB_CONFIG.publicKey });
  }

  /* ── Inject HTML ── */
  const html = `
    <button id="fb-trigger" title="Send feedback">💬</button>

    <div id="fb-panel">
      <div class="fb-header">📬 &nbsp;Feedback / Correction</div>
      <div class="fb-body">
        <div class="fb-page-tag" id="fb-page-url"></div>

        <input
          id="fb-email"
          type="email"
          placeholder="Your email (optional — for a reply)"
          autocomplete="email"
        />

        <textarea
          id="fb-message"
          placeholder="Found an error? Have a suggestion? Tell me here…"
        ></textarea>

        <button class="fb-submit" id="fb-send">Send Feedback</button>
        <div class="fb-status" id="fb-status"></div>
      </div>
    </div>
  `;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  /* ── Populate page URL tag ── */
  document.getElementById("fb-page-url").textContent =
    "📄 " + (window.location.pathname + window.location.search || "unknown page");

  /* ── Toggle panel ── */
  const trigger = document.getElementById("fb-trigger");
  const panel   = document.getElementById("fb-panel");

  trigger.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("open");
    trigger.classList.toggle("open", isOpen);
    trigger.textContent = isOpen ? "✕" : "💬";
    if (isOpen) document.getElementById("fb-message").focus();
  });

  /* ── Close on outside click ── */
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      panel.classList.remove("open");
      trigger.classList.remove("open");
      trigger.textContent = "💬";
    }
  });

  /* ── Send ── */
  document.getElementById("fb-send").addEventListener("click", async () => {
    const message = document.getElementById("fb-message").value.trim();
    const email   = document.getElementById("fb-email").value.trim();
    const status  = document.getElementById("fb-status");
    const btn     = document.getElementById("fb-send");

    if (!message) {
      status.textContent = "Please write something first.";
      status.className   = "fb-status error";
      return;
    }

    btn.disabled       = true;
    btn.textContent    = "Sending…";
    status.textContent = "";
    status.className   = "fb-status";

    const params = {
      page:    window.location.href,
      message: message,
      email:   email || "(not provided)",
      sent_at: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    try {
      if (typeof emailjs === "undefined") throw new Error("EmailJS not loaded");
      await emailjs.send(FB_CONFIG.serviceID, FB_CONFIG.templateID, params);

      status.textContent = "✓ Sent! Thank you.";
      status.className   = "fb-status success";
      document.getElementById("fb-message").value = "";
      document.getElementById("fb-email").value   = "";

      setTimeout(() => {
        panel.classList.remove("open");
        trigger.classList.remove("open");
        trigger.textContent    = "💬";
        status.textContent     = "";
        btn.disabled           = false;
        btn.textContent        = "Send Feedback";
      }, 2200);

    } catch (err) {
      console.error("Feedback error:", err);
      status.textContent = "❌ Failed to send. Check your EmailJS config.";
      status.className   = "fb-status error";
      btn.disabled       = false;
      btn.textContent    = "Send Feedback";
    }
  });

})();
