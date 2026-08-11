/* ============================================================
   teacher-guard.js  —  shared teacher-access gate
   Load this AFTER firebase-config.js (and after firebase-auth-compat.js).
   Behaviour:
     • no user            → open Google sign-in popup
     • signed in, not me  → log the attempt to 'security_log', redirect to index.html
     • signed in as me    → reveal the page (undo the pre-hide) and run any init
   The page is hidden until the check passes, so content never flashes.
   ============================================================ */
(function () {
  var TEACHER_UID = 'dkc2ZtpolTTQ6kFvtJtYeStRuhf1'; // atulsoralphysicism@gmail.com

  // Hide the page body immediately (belt-and-suspenders; CSS also hides it).
  try { document.documentElement.style.visibility = 'hidden'; } catch (e) {}

  function reveal() {
    try { document.documentElement.style.visibility = ''; } catch (e) {}
    var g = document.getElementById('tgGate'); if (g) g.remove();
  }

  function showGate(html) {
    try { document.documentElement.style.visibility = ''; } catch (e) {}
    var g = document.getElementById('tgGate');
    if (!g) {
      g = document.createElement('div');
      g.id = 'tgGate';
      g.style.cssText = 'position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:#f4f1ec;font-family:system-ui,-apple-system,Segoe UI,sans-serif;';
      document.body.appendChild(g);
    }
    g.innerHTML = '<div style="background:#fff;border-radius:16px;padding:32px 28px;max-width:380px;text-align:center;box-shadow:0 8px 30px rgba(0,0,0,.12)">' + html + '</div>';
  }

  function logAttempt(user, cb) {
    try {
      var db = window.db || firebase.firestore();
      db.collection('security_log').add({
        email: (user && user.email) || '(unknown)',
        uid: (user && user.uid) || '(none)',
        page: location.pathname + location.search,
        userAgent: navigator.userAgent,
        at: Date.now(),
        ts: (firebase.firestore.FieldValue && firebase.firestore.FieldValue.serverTimestamp) ? firebase.firestore.FieldValue.serverTimestamp() : null
      }).then(function () { cb && cb(); }).catch(function () { cb && cb(); });
    } catch (e) { cb && cb(); }
  }

  function go() {
    if (typeof firebase === 'undefined' || !firebase.auth) {
      // Firebase not present — fail safe: block.
      showGate('<h2 style="color:#b91c1c;margin:0 0 8px">Security error</h2><p style="color:#6b7280;font-size:.9rem">This page could not verify access. Please contact the administrator.</p>');
      return;
    }
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        showGate('<h2 style="color:#0d9488;margin:0 0 8px">🔐 Teacher Access</h2>' +
          '<p style="color:#6b7280;font-size:.9rem;margin-bottom:16px">Sign in with your teacher Google account.</p>' +
          '<button id="tgSignIn" style="background:#0d9488;color:#fff;border:none;border-radius:10px;padding:11px 22px;font-weight:700;cursor:pointer;font-size:.95rem">Sign in with Google</button>');
        var b = document.getElementById('tgSignIn');
        if (b) b.onclick = function () {
          firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .catch(function (e) { alert('Sign-in failed: ' + e.message); });
        };
      } else if (user.uid !== TEACHER_UID) {
        // Unauthorized: log the attempt, then redirect away.
        showGate('<h2 style="color:#b91c1c;margin:0 0 8px">⛔ Not authorized</h2>' +
          '<p style="color:#6b7280;font-size:.9rem">Redirecting…</p>');
        logAttempt(user, function () {
          firebase.auth().signOut().finally(function () {
            location.replace('index.html');
          });
        });
      } else {
        // Authorized teacher.
        reveal();
        if (typeof window.tgOnAuthorized === 'function') { try { window.tgOnAuthorized(); } catch (e) {} }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', go);
  } else {
    go();
  }
})();
