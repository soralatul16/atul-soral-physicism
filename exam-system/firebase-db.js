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

/* ── Helpers: Firestore doesn't support nested arrays, so we serialize the entire payload ── */
function _prepareSetForFirestore(set) {
  const raw = JSON.parse(JSON.stringify(set));
  delete raw._docId;
  // Store the ENTIRE set as a JSON string to avoid ALL nested array issues
  // Keep only searchable/filterable fields at the top level
  return {
    id: raw.id || '',
    heading: raw.heading || '',
    chapter: raw.chapter || '',
    topic: raw.topic || '',
    status: raw.status || 'Draft',
    totalMarks: raw.totalMarks || 0,
    teacherId: raw.teacherId || '',
    version: raw.version || 1,
    createdAt: raw.createdAt || Date.now(),
    updatedAt: Date.now(),
    dataJson: JSON.stringify(raw)  // everything serialized as one string
  };
}

function _parseSetFromFirestore(data) {
  // If stored as dataJson (new format), parse it
  if (data.dataJson && typeof data.dataJson === 'string') {
    try {
      const parsed = JSON.parse(data.dataJson);
      parsed._docId = data._docId;
      return parsed;
    } catch(e) { console.error('Parse error:', e); }
  }
  // Legacy: blocksJson/sectionsJson format
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
  const raw = JSON.parse(JSON.stringify(att));
  delete raw._docId;
  // Store the ENTIRE attempt as a JSON string
  return {
    id: raw.id || '',
    studentEmail: raw.studentEmail || '',
    studentName: raw.studentName || '',
    setId: raw.setId || '',
    setTitle: raw.setTitle || '',
    status: raw.status || '',
    startedAt: raw.startedAt || Date.now(),
    endTime: raw.endTime || null,
    duration: raw.duration || 0,
    earnedMarks: raw.earnedMarks || 0,
    totalMarks: raw.totalMarks || 0,
    percentScore: raw.percentScore || 0,
    dataJson: JSON.stringify(raw)
  };
}

function _parseAttemptFromFirestore(data) {
  if (data.dataJson && typeof data.dataJson === 'string') {
    try {
      const parsed = JSON.parse(data.dataJson);
      parsed._docId = data._docId;
      return parsed;
    } catch(e) { console.error('Attempt parse error:', e); }
  }
  // Legacy format fallback
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
  
  // Update DP progress analytics
  if (attempt.status === 'graded' || attempt.status === 'completed') {
    try {
      await updateDPProgressFromAttempt(attempt);
    } catch (e) {
      console.warn("Could not update DP student progress from attempt:", e);
    }
  }

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

/* ── Delete a single attempt ── */
async function deleteAttemptFromFirestore(docId) {
  if (!docId) return;
  try {
    await db.collection('attempts').doc(docId).delete();
  } catch (err) {
    console.error('Attempt delete error:', err);
  }
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

/* ── Extract and sync Command Term and AO analytics to DP Progress ── */
async function updateDPProgressFromAttempt(attempt) {
  if (!attempt.studentEmail) return;
  const email = attempt.studentEmail.toLowerCase();
  
  // Determine if it is a DP exam/attempt
  // If the chapter is not set or doesn't match DP conventions (Themes A-E), we still check.
  // To be safe, we will track it if it has question blocks with valid command terms.
  
  let studentUid = null;
  // Find student UID by email query
  try {
    const progressSnap = await db.collection('dp-progress').where('studentEmail', '==', email).get();
    if (!progressSnap.empty) {
      studentUid = progressSnap.docs[0].id;
    } else {
      const studentSnap = await db.collection('students').where('email', '==', email).get();
      if (!studentSnap.empty) {
        studentUid = studentSnap.docs[0].id;
      } else {
        const currentUser = auth.currentUser;
        if (currentUser && currentUser.email && currentUser.email.toLowerCase() === email) {
          studentUid = currentUser.uid;
        }
      }
    }
  } catch(e) {
    console.warn("Error looking up student UID by email:", e);
  }

  if (!studentUid) {
    console.warn("Could not identify student UID for email:", email);
    return;
  }

  let blocks = [];
  if (attempt.dataJson) {
    try {
      const parsed = JSON.parse(attempt.dataJson);
      blocks = parsed.blocks || [];
    } catch(e) { console.error("Error parsing attempt dataJson:", e); }
  } else if (attempt.blocks) {
    blocks = attempt.blocks;
  }

  if (!blocks || blocks.length === 0) return;

  const COMMAND_TERM_TO_AO = {
    "State": "AO1", "Draw": "AO1",
    "Annotate": "AO2", "Calculate": "AO2", "Describe": "AO2", "Estimate": "AO2", "Identify": "AO2", "Outline": "AO2",
    "Analyse": "AO3", "Deduce": "AO3", "Determine": "AO3", "Discuss": "AO3", "Explain": "AO3", "Predict": "AO3", "Show": "AO3", "Sketch": "AO3", "Suggest": "AO3"
  };

  const termDiff = {};
  const aoDiff = {};
  let hasHL = false;

  if (attempt.chapter && attempt.chapter.toLowerCase().includes("hl")) hasHL = true;
  if (attempt.topic && attempt.topic.toLowerCase().includes("hl")) hasHL = true;

  blocks.forEach((block, idx) => {
    if (block.mode !== 'question') return;
    const cmdTerm = block.meta?.commandTerm;
    const maxMarks = Number(block.meta?.marks || 1);
    
    // Attempt to retrieve graded score
    let earnedMarks = 0;
    if (attempt.grades && attempt.grades[idx] !== undefined) {
      earnedMarks = Number(attempt.grades[idx]);
    } else if (block.ui && block.ui.tfAnswer !== undefined && attempt.answers && attempt.answers[idx] !== undefined) {
      // True/False autograder fallback
      earnedMarks = (attempt.answers[idx] === block.ui.tfAnswer) ? maxMarks : 0;
    } else if (block.ui && block.ui.mcqOptions && attempt.answers && attempt.answers[idx] !== undefined) {
      // MCQ autograder fallback
      const correctIdx = Number(block.data?.correct);
      earnedMarks = (Number(attempt.answers[idx]) === correctIdx) ? maxMarks : 0;
    }

    if (cmdTerm) {
      const cleanTerm = cmdTerm.trim().charAt(0).toUpperCase() + cmdTerm.trim().slice(1).toLowerCase();
      
      if (!termDiff[cleanTerm]) termDiff[cleanTerm] = { attempted: 0, correct: 0 };
      termDiff[cleanTerm].attempted += 1;
      termDiff[cleanTerm].correct += (earnedMarks / maxMarks);

      const ao = COMMAND_TERM_TO_AO[cleanTerm];
      if (ao) {
        if (!aoDiff[ao]) aoDiff[ao] = { attempted: 0, correct: 0 };
        aoDiff[ao].attempted += 1;
        aoDiff[ao].correct += (earnedMarks / maxMarks);
      }
    }
  });

  const docRef = db.collection('dp-progress').doc(studentUid);
  const updateData = {
    studentName: attempt.studentName || email.split('@')[0],
    studentEmail: email,
    lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
  };

  Object.keys(termDiff).forEach(term => {
    updateData[`commandTermPerformance.${term}.attempted`] = firebase.firestore.FieldValue.increment(termDiff[term].attempted);
    updateData[`commandTermPerformance.${term}.correct`] = firebase.firestore.FieldValue.increment(termDiff[term].correct);
  });

  Object.keys(aoDiff).forEach(ao => {
    updateData[`aoPerformance.${ao}.attempted`] = firebase.firestore.FieldValue.increment(aoDiff[ao].attempted);
    updateData[`aoPerformance.${ao}.correct`] = firebase.firestore.FieldValue.increment(aoDiff[ao].correct);
  });

  if (hasHL) {
    updateData[`learnerProfile.Risk-taker`] = true;
  }

  try {
    await docRef.update(updateData);
    console.log("⚡ Updated student DP progress from attempt:", attempt.setTitle);
  } catch(err) {
    if (err.code === 'not-found') {
      const initDoc = {
        studentName: attempt.studentName || email.split('@')[0],
        studentEmail: email,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
        commandTermPerformance: {},
        aoPerformance: {}
      };
      Object.keys(termDiff).forEach(term => {
        initDoc.commandTermPerformance[term] = termDiff[term];
      });
      Object.keys(aoDiff).forEach(ao => {
        initDoc.aoPerformance[ao] = aoDiff[ao];
      });
      if (hasHL) {
        initDoc.learnerProfile = { 'Risk-taker': true };
      }
      await docRef.set(initDoc, { merge: true });
      console.log("⚡ Initialized student DP progress doc from attempt.");
    } else {
      console.error("Error saving DP progress from attempt:", err);
    }
  }
}
