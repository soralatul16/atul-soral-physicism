/* ═══════════════════════════════════════════════════
   PHYSICISM — Unified Google Auth Helper
   Include on every student-facing page AFTER Firebase SDK scripts.
   
   Dependencies (load before this file):
     - firebase-app-compat.js
     - firebase-auth-compat.js
     - firebase-firestore-compat.js
   
   Usage:
     <script src="js/auth.js"></script>
     
     // Then use:
     PhysicismAuth.onAuthReady(function(user) { ... });
     PhysicismAuth.signIn();
     PhysicismAuth.signOut();
     PhysicismAuth.requireAuth();  // redirects if not signed in
     PhysicismAuth.renderAuthButton('containerId');
═══════════════════════════════════════════════════ */

var PhysicismAuth = (function() {
  'use strict';

  // ── Firebase Config ──
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCLw65yB0sPSf5lgSkom27PTN4DrS1CBFc",
    authDomain: "soral-atul-physicism.firebaseapp.com",
    projectId: "soral-atul-physicism",
    storageBucket: "soral-atul-physicism.appspot.com"
  };

  // Initialize Firebase if not already done
  if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  var auth = firebase.auth();
  var db = firebase.firestore();
  var provider = new firebase.auth.GoogleAuthProvider();


  // ── Sign In with Google ──
  function signIn() {
    return auth.signInWithPopup(provider).then(function(result) {
      return ensureStudentProfile(result.user);
    });
  }

  // ── Sign Up with Email ──
  function signUpWithEmail(email, password, name) {
    return auth.createUserWithEmailAndPassword(email, password).then(function(result) {
      var user = result.user;
      return user.updateProfile({ displayName: name }).then(function() {
        return user.sendEmailVerification().then(function() {
          return ensureStudentProfile(user, name);
        });
      });
    });
  }

  // ── Sign In with Email ──
  function signInWithEmail(email, password) {
    return auth.signInWithEmailAndPassword(email, password).then(function(result) {
      return ensureStudentProfile(result.user);
    });
  }

  // ── Resend Verification Email ──
  function sendVerificationEmail() {
    var user = auth.currentUser;
    if (user) {
      return user.sendEmailVerification();
    }
    return Promise.reject(new Error("No authenticated user"));
  }

  // ── Reset Password ──
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // ── Sign Out ──
  function signOut(redirectUrl) {
    return auth.signOut().then(function() {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        window.location.reload();
      }
    });
  }

  // ── Ensure student profile exists in Firestore ──
  // Returns a promise that resolves with { user, profile, isNewUser }
  function ensureStudentProfile(user, fallbackName) {
    var docRef = db.collection('students').doc(user.uid);
    return docRef.get().then(function(doc) {
      var displayName = user.displayName || fallbackName || '';
      if (doc.exists) {
        // Update lastLogin and merge
        var updateData = {
          lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
          name: displayName || doc.data().name,
          email: user.email || doc.data().email,
          photoURL: user.photoURL || doc.data().photoURL || ''
        };
        return docRef.set(updateData, { merge: true }).then(function() {
          return docRef.get();
        }).then(function(updatedDoc) {
          return { user: user, profile: updatedDoc.data(), isNewUser: false };
        });
      } else {
        // Create new student profile
        var profile = {
          uid: user.uid,
          name: displayName,
          email: user.email || '',
          photoURL: user.photoURL || '',
          level: '',  // Will be set via profile completion modal
          tags: ['self-registered'],
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
          registeredAt: new Date().toISOString()
        };
        return docRef.set(profile, { merge: true }).then(function() {
          return { user: user, profile: profile, isNewUser: true };
        });
      }
    });
  }

  // ── Get current user's student profile from Firestore ──
  function getStudentProfile(uid) {
    return db.collection('students').doc(uid).get().then(function(doc) {
      return doc.exists ? doc.data() : null;
    });
  }

  // ── Update student profile fields ──
  function updateProfile(uid, fields) {
    return db.collection('students').doc(uid).set(fields, { merge: true });
  }

  // ── Auth state listener wrapper ──
  function onAuthReady(callback) {
    auth.onAuthStateChanged(function(user) {
      callback(user);
    });
  }

  // ── Require auth — redirect if not signed in ──
  function requireAuth(redirectUrl) {
    redirectUrl = redirectUrl || 'dp-student-portal.html';
    auth.onAuthStateChanged(function(user) {
      if (!user) {
        window.location.href = redirectUrl;
      }
    });
  }

  // ── Get current user synchronously (may be null before auth resolves) ──
  function currentUser() {
    return auth.currentUser;
  }

  // ── Render auth button into a container ──
  // Shows "Sign in with Google" or "Name + Sign Out"
  function renderAuthButton(containerId, options) {
    options = options || {};
    var signOutUrl = options.signOutUrl || null;
    var onSignIn = options.onSignIn || null;

    auth.onAuthStateChanged(function(user) {
      var container = document.getElementById(containerId);
      if (!container) return;

      if (user) {
        var name = user.displayName || user.email.split('@')[0];
        var photoHtml = '';
        if (user.photoURL) {
          photoHtml = '<img src="' + user.photoURL + '" style="width:24px;height:24px;border-radius:50%;border:1.5px solid rgba(255,255,255,.3)" alt="">';
        } else {
          photoHtml = '<span style="width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700">' + 
            name.charAt(0).toUpperCase() + '</span>';
        }

        container.innerHTML = 
          '<div style="display:flex;align-items:center;gap:8px;">' +
            photoHtml +
            '<span style="font-size:.73rem;color:rgba(255,255,255,.9);display:flex;align-items:center;gap:5px">' +
              '<span style="width:6px;height:6px;border-radius:50%;background:#22c55e;display:inline-block"></span>' +
              _escHtml(name) +
            '</span>' +
            '<button onclick="PhysicismAuth.signOut(\'' + (signOutUrl || '') + '\')" ' +
              'style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;border-radius:7px;padding:3px 10px;font-size:.7rem;cursor:pointer">Sign Out</button>' +
          '</div>';

        if (onSignIn) onSignIn(user);
      } else {
        container.innerHTML = 
          '<button onclick="PhysicismAuth.signIn()" ' +
            'style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;border:none;padding:5px 14px;border-radius:7px;font-size:.75rem;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px">' +
            '👤 Sign In' +
          '</button>';
      }
    });
  }

  // ── Profile Completion Modal ──
  // Shows a modal asking for Level on first sign-in
  // Returns: appended modal element, call showProfileModal() to display
  function createProfileModal(onComplete) {
    // Check if modal already exists
    if (document.getElementById('profileCompletionOverlay')) {
      return document.getElementById('profileCompletionOverlay');
    }

    var overlay = document.createElement('div');
    overlay.id = 'profileCompletionOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:10000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;';
    
    overlay.innerHTML = 
      '<div style="background:#fff;border-radius:16px;padding:32px;max-width:400px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.2);transform:translateY(20px);transition:transform .3s;" id="profileModal">' +
        '<div style="text-align:center;font-size:2.5rem;margin-bottom:8px">🎓</div>' +
        '<h2 style="font-family:Georgia,serif;font-size:1.3rem;text-align:center;margin-bottom:4px;color:#1A1A2E">Welcome to <span style="color:#0B7285">Physicism</span></h2>' +
        '<p style="text-align:center;font-size:.82rem;color:#6B7280;margin-bottom:24px">One last step — select your level to get started.</p>' +
        '<div style="margin-bottom:20px">' +
          '<label style="display:block;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#9CA3AF;margin-bottom:6px">Your Level</label>' +
          '<select id="profileLevelSelect" style="width:100%;padding:12px 14px;border:1.5px solid #E5E1DC;border-radius:8px;font-size:.9rem;outline:none;background:#F5F2EE;cursor:pointer">' +
            '<option value="">Select your level...</option>' +
            '<option value="DP-SL">DP SL (Standard Level)</option>' +
            '<option value="DP-HL">DP HL (Higher Level)</option>' +
            '<option value="MYP">MYP</option>' +
          '</select>' +
        '</div>' +
        '<button id="profileCompleteBtn" onclick="PhysicismAuth._completeProfile()" ' +
          'style="width:100%;padding:12px;border:none;border-radius:8px;font-size:.9rem;font-weight:700;cursor:pointer;background:#0B7285;color:#fff;transition:opacity .2s">' +
          'Continue →' +
        '</button>' +
        '<p style="text-align:center;font-size:.7rem;color:#9CA3AF;margin-top:12px">You can change this later from your dashboard.</p>' +
      '</div>';

    document.body.appendChild(overlay);

    // Store callback
    overlay._onComplete = onComplete;

    return overlay;
  }

  function showProfileModal(onComplete) {
    var overlay = createProfileModal(onComplete);
    // Trigger animation
    requestAnimationFrame(function() {
      overlay.style.opacity = '1';
      var modal = document.getElementById('profileModal');
      if (modal) modal.style.transform = 'translateY(0)';
    });
  }

  // Internal: called by the Complete button
  function _completeProfile() {
    var select = document.getElementById('profileLevelSelect');
    var level = select ? select.value : '';
    
    if (!level) {
      select.style.borderColor = '#DC2626';
      select.focus();
      return;
    }

    var user = auth.currentUser;
    if (!user) return;

    var btn = document.getElementById('profileCompleteBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Saving...';
    }

    var tags = [level, 'self-registered'];

    db.collection('students').get().then(function(snap) {
      var seq = snap.size + 1;
      var padSeq = String(seq).padStart(3, '0');
      var year = new Date().getFullYear();
      var customId = level + '-' + year + '-' + padSeq;

      return updateProfile(user.uid, {
        name: user.displayName || "",
        email: user.email || "",
        photoURL: user.photoURL || "",
        uid: user.uid,
        studentId: customId,
        registeredAt: new Date().toISOString(),
        level: level,
        tags: firebase.firestore.FieldValue.arrayUnion(...tags)
      });
    }).then(function() {
      var overlay = document.getElementById('profileCompletionOverlay');
      if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(function() {
          overlay.remove();
        }, 300);
        if (overlay._onComplete) {
          overlay._onComplete(level);
        }
      }
    }).catch(function(err) {
      console.error('Profile update error:', err);
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Continue →';
      }
    });
  }

  // ── Helpers ──
  function _escHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // ── Public API ──
  return {
    signIn: signIn,
    signUpWithEmail: signUpWithEmail,
    signInWithEmail: signInWithEmail,
    sendVerificationEmail: sendVerificationEmail,
    resetPassword: resetPassword,
    signOut: signOut,
    ensureStudentProfile: ensureStudentProfile,
    getStudentProfile: getStudentProfile,
    updateProfile: updateProfile,
    onAuthReady: onAuthReady,
    requireAuth: requireAuth,
    currentUser: currentUser,
    renderAuthButton: renderAuthButton,
    showProfileModal: showProfileModal,
    _completeProfile: _completeProfile,  // exposed for onclick
    auth: auth,
    db: db
  };
})();
