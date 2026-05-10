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

/* ── Helpers: Firestore doesn't support nested arrays, so we serialize complex fields ── */
function _prepareSetForFirestore(set) {
  const doc = JSON.parse(JSON.stringify(set));
  delete doc._docId;
  // Stringify complex nested arrays so Firestore accepts them
  if (doc.blocks && Array.isArray(doc.blocks)) {
    doc.blocksJson = JSON.stringify(doc.blocks);
    delete doc.blocks;
  }
  if (doc.sections && Array.isArray(doc.sections)) {
    doc.sectionsJson = JSON.stringify(doc.sections);
    delete doc.sections;
  }
  doc.updatedAt = Date.now();
  return doc;
}

function _parseSetFromFirestore(data) {
  // Deserialize blocks/sections from JSON strings
  if (data.blocksJson && typeof data.blocksJson === 'string') {
    try { data.blocks = JSON.parse(data.blocksJson); } catch(e) { data.blocks = []; }
    delete data.blocksJson;
  }
  if (data.sectionsJson && typeof data.sectionsJson === 'string') {
    try { data.sections = JSON.parse(data.sectionsJson); } catch(e) { data.sections = []; }
    delete data.sectionsJson;
  }
  return data;
}

function _prepareAttemptForFirestore(att) {
  const doc = JSON.parse(JSON.stringify(att));
  delete doc._docId;
  // Stringify answers (may contain nested arrays)
  if (doc.answers) {
    doc.answersJson = JSON.stringify(doc.answers);
    delete doc.answers;
  }
  if (doc.flags) {
    doc.flagsJson = JSON.stringify(doc.flags);
    delete doc.flags;
  }
  if (doc.notes) {
    doc.notesJson = JSON.stringify(doc.notes);
    delete doc.notes;
  }
  if (doc.grades) {
    doc.gradesJson = JSON.stringify(doc.grades);
    delete doc.grades;
  }
  return doc;
}

function _parseAttemptFromFirestore(data) {
  if (data.answersJson && typeof data.answersJson === 'string') {
    try { data.answers = JSON.parse(data.answersJson); } catch(e) { data.answers = {}; }
    delete data.answersJson;
  }
  if (data.flagsJson && typeof data.flagsJson === 'string') {
    try { data.flags = JSON.parse(data.flagsJson); } catch(e) { data.flags = {}; }
    delete data.flagsJson;
  }
  if (data.notesJson && typeof data.notesJson === 'string') {
    try { data.notes = JSON.parse(data.notesJson); } catch(e) { data.notes = {}; }
    delete data.notesJson;
  }
  if (data.gradesJson && typeof data.gradesJson === 'string') {
    try { data.grades = JSON.parse(data.gradesJson); } catch(e) { data.grades = {}; }
    delete data.gradesJson;
  }
  return data;
}

/* ── Initialize: load data from Firestore into cache ── */
async function initFirebaseDB() {
  try {
    // Load question sets
    const libSnap = await db.collection('questionSets').get();
    _libraryCache = libSnap.docs.map(doc => {
      const data = doc.data();
      data._docId = doc.id;
      return _parseSetFromFirestore(data);
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
        return _parseAttemptFromFirestore(data);
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
    const results = snap.docs.map(doc => {
      const data = { ...doc.data(), _docId: doc.id };
      return _parseAttemptFromFirestore(data);
    });
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
    const firestoreDoc = _prepareSetForFirestore(set);
    if (!firestoreDoc.createdAt) firestoreDoc.createdAt = Date.now();
    db.collection('questionSets').doc(docId).set(firestoreDoc, { merge: true })
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
  const firestoreDoc = _prepareSetForFirestore(set);
  if (!firestoreDoc.createdAt) firestoreDoc.createdAt = Date.now();
  await db.collection('questionSets').doc(docId).set(firestoreDoc, { merge: true });
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
    const firestoreDoc = _prepareAttemptForFirestore(att);
    db.collection('attempts').doc(docId).set(firestoreDoc, { merge: true })
      .catch(err => console.error('Attempt save error:', err));
  });
}

/* ── Save a single attempt ── */
async function saveAttemptToFirestore(attempt) {
  const docId = attempt._docId || attempt.id;
  if (!docId) return;
  const firestoreDoc = _prepareAttemptForFirestore(attempt);
  await db.collection('attempts').doc(docId).set(firestoreDoc, { merge: true });
  
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
