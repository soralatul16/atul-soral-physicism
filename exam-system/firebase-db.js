/* ═══════════════════════════════════════════════════
   PHYSICISM — Firebase Firestore Database Helpers
   Requires: firebase-config.js loaded first
   
   Strategy: Local cache + async Firestore sync
   - On page load: fetch from Firestore → cache
   - Reads: synchronous from cache (backward compatible)
   - Writes: update cache + async Firestore write
═══════════════════════════════════════════════════ */

let _libraryCache = null;
let _attemptsCache = null;
let _dbReady = false;

/* ── Initialize: load data from Firestore into cache ── */
async function initFirebaseDB() {
  try {
    // Load question sets
    const libSnap = await db.collection('questionSets').get();
    _libraryCache = libSnap.docs.map(doc => {
      const data = doc.data();
      data._docId = doc.id;
      return data;
    });
    // Sort by updatedAt client-side
    _libraryCache.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    console.log(`📚 Loaded ${_libraryCache.length} question sets from Firestore`);

    // Load attempts for current user
    const user = auth.currentUser;
    if (user) {
      const attSnap = await db.collection('attempts')
        .where('studentEmail', '==', user.email.toLowerCase())
        .get();
      _attemptsCache = attSnap.docs.map(doc => {
        const data = doc.data();
        data._docId = doc.id;
        return data;
      });
      // Sort by startedAt client-side
      _attemptsCache.sort((a, b) => (b.startedAt || 0) - (a.startedAt || 0));
      console.log(`📝 Loaded ${_attemptsCache.length} attempts for ${user.email}`);
    }

    _dbReady = true;
    return true;
  } catch (err) {
    console.error('Firebase DB init error:', err);
    // Fall back to localStorage
    _libraryCache = JSON.parse(localStorage.getItem('MYP_LIBRARY') || '[]');
    _attemptsCache = JSON.parse(localStorage.getItem('PHYS_ATTEMPTS') || '[]');
    return false;
  }
}

/* ── Load ALL attempts (for teacher analytics) ── */
async function loadAllAttempts() {
  try {
    const snap = await db.collection('attempts').get();
    const results = snap.docs.map(doc => ({ ...doc.data(), _docId: doc.id }));
    results.sort((a, b) => (b.startedAt || 0) - (a.startedAt || 0));
    return results;
  } catch (err) {
    console.error('loadAllAttempts error:', err);
    return [];
  }
}

/* ══════ Question Sets (Library) ══════ */

function getLibrary() {
  if (_libraryCache !== null) return _libraryCache;
  return JSON.parse(localStorage.getItem('MYP_LIBRARY') || '[]');
}

function saveLibrary(lib) {
  _libraryCache = lib;
  // Local backup
  try { localStorage.setItem('MYP_LIBRARY', JSON.stringify(lib)); } catch(e) {}
  
  if (!_dbReady) return;
  // Async Firestore sync — each set is its own document
  lib.forEach(set => {
    const docId = set._docId || set.id;
    if (!docId) return;
    const cleanSet = JSON.parse(JSON.stringify(set));
    delete cleanSet._docId;
    // Add/update timestamps
    if (!cleanSet.createdAt || typeof cleanSet.createdAt === 'number') {
      cleanSet.createdAt = cleanSet.createdAt || Date.now();
    }
    cleanSet.updatedAt = Date.now();
    db.collection('questionSets').doc(docId).set(cleanSet, { merge: true })
      .catch(err => console.error('Firestore save error:', err));
  });
}

function getPublished() {
  return getLibrary().filter(s => s.status === 'Published');
}

/* ── Save a single question set to Firestore ── */
async function saveQuestionSetToFirestore(set) {
  const docId = set._docId || set.id;
  if (!docId) return;
  const cleanSet = JSON.parse(JSON.stringify(set));
  delete cleanSet._docId;
  cleanSet.updatedAt = Date.now();
  await db.collection('questionSets').doc(docId).set(cleanSet, { merge: true });
  return docId;
}

/* ── Delete a question set ── */
async function deleteQuestionSetFromFirestore(docId) {
  if (!docId) return;
  await db.collection('questionSets').doc(docId).delete();
}

/* ══════ Attempts ══════ */

function getAttempts() {
  if (_attemptsCache !== null) return _attemptsCache;
  return JSON.parse(localStorage.getItem('PHYS_ATTEMPTS') || '[]');
}

function saveAttempts(arr) {
  _attemptsCache = arr;
  try { localStorage.setItem('PHYS_ATTEMPTS', JSON.stringify(arr)); } catch(e) {}
  
  if (!_dbReady) return;
  // Sync each attempt to Firestore
  arr.forEach(att => {
    const docId = att._docId || att.id;
    if (!docId) return;
    const clean = JSON.parse(JSON.stringify(att));
    delete clean._docId;
    db.collection('attempts').doc(docId).set(clean, { merge: true })
      .catch(err => console.error('Attempt save error:', err));
  });
}

/* ── Save a single attempt ── */
async function saveAttemptToFirestore(attempt) {
  const docId = attempt._docId || attempt.id;
  if (!docId) return;
  const clean = JSON.parse(JSON.stringify(attempt));
  delete clean._docId;
  await db.collection('attempts').doc(docId).set(clean, { merge: true });
  
  // Also log to analytics
  await logAnalyticsEvent('exam_submitted', {
    studentEmail: attempt.studentEmail,
    studentName: attempt.studentName || '',
    setId: attempt.setId,
    setTitle: attempt.setTitle || '',
    score: attempt.score || 0,
    totalMarks: attempt.totalMarks || 0,
    percentage: attempt.totalMarks ? Math.round((attempt.score / attempt.totalMarks) * 100) : 0,
    timeTaken: attempt.timeTaken || 0,
    submittedAt: Date.now()
  });
}

/* ══════ Analytics ══════ */

async function logAnalyticsEvent(eventType, data) {
  try {
    await db.collection('analytics').add({
      event: eventType,
      ...data,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userAgent: navigator.userAgent || ''
    });
  } catch (err) {
    console.warn('Analytics log error:', err);
  }
}

async function logStudentActivity(action, details) {
  const user = auth.currentUser;
  if (!user) return;
  await logAnalyticsEvent('student_activity', {
    studentEmail: user.email,
    studentName: user.displayName || '',
    action,
    ...details
  });
}

/* ══════ Legacy Compat ══════ */
function getDB() { return getLibrary(); }
function saveDB(db_data) { saveLibrary(db_data); }

/* ── Session (Firebase Auth based) ── */
const SESSION_KEY = 'PHYS_SESSION';

function getSession() {
  const user = auth.currentUser;
  if (user) {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName || user.email.split('@')[0],
      expiry: Date.now() + (5 * 24 * 60 * 60 * 1000) // compatibility
    };
  }
  // Fallback to localStorage session for offline
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || Date.now() > s.expiry) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return s;
  } catch (e) { return null; }
}
