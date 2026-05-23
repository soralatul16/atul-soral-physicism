/* ═══════════════════════════════════════════════════
   PHYSICISM — DP Progress Tracking Library
   Project: soral-atul-physicism
   Handles background duration tracking and performance syncing.
   Requires: Firebase App, Auth, and Firestore SDKs loaded first.
   ═══════════════════════════════════════════════════ */

(function() {
  // Hardcoded mappings
  const COMMAND_TERM_TO_AO = {
    // AO1 (Knowledge)
    "State": "AO1", "Draw": "AO1",
    // AO2 (Application)
    "Annotate": "AO2", "Calculate": "AO2", "Describe": "AO2", "Estimate": "AO2", "Identify": "AO2", "Outline": "AO2",
    // AO3 (Analysis)
    "Analyse": "AO3", "Deduce": "AO3", "Determine": "AO3", "Discuss": "AO3", "Explain": "AO3", "Predict": "AO3", "Show": "AO3", "Sketch": "AO3", "Suggest": "AO3"
  };

  // Local state variables
  let currentUser = null;
  let topicId = "A2"; // Default fallback
  let activeLessonIndex = 0; // Default first lesson active on load
  let activeStartTime = Date.now();
  let localAccumulatedTime = {}; // { 0: seconds, 1: seconds, etc. }
  let syncIntervalId = null;

  // Determine current topic from filename (e.g. dp-a2-forces.html -> A2)
  const pageName = window.location.pathname.split('/').pop();
  const match = pageName.match(/dp-([a-z]\d+)/i);
  if (match) {
    topicId = match[1].toUpperCase();
  }

  console.log(`🧭 DP Progress Init — Topic: ${topicId}`);

  // Hook into showLesson(i) to detect lesson shifts dynamically
  function hookShowLesson() {
    if (typeof window.showLesson === "function") {
      const originalShowLesson = window.showLesson;
      window.showLesson = function(i) {
        // Record time spent on the outgoing lesson
        recordCurrentTimeSpent();
        
        // Execute original showLesson
        originalShowLesson(i);
        
        // Switch to the new lesson
        activeLessonIndex = i;
        activeStartTime = Date.now();
        console.log(`📖 Switched active lesson to Index ${i} (Lesson ${i+1})`);
        
        // Immediate sync of the previous lesson's time
        syncProgressToFirestore();
      };
      console.log("⚓ Successfully hooked window.showLesson(i)");
    } else {
      // If showLesson is not defined yet, wait a bit and try hooking again
      setTimeout(hookShowLesson, 100);
    }
  }

  // Calculate time spent on currently active lesson and add to accumulator
  function recordCurrentTimeSpent() {
    const elapsedSeconds = Math.round((Date.now() - activeStartTime) / 1000);
    if (elapsedSeconds > 0) {
      if (!localAccumulatedTime[activeLessonIndex]) {
        localAccumulatedTime[activeLessonIndex] = 0;
      }
      localAccumulatedTime[activeLessonIndex] += elapsedSeconds;
      activeStartTime = Date.now();
    }
  }

  // Expose global tracking functions
  window.trackLessonView = async function(tId, lessonIdx, duration) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const db = firebase.firestore();
    const docRef = db.collection('dp-progress').doc(user.uid);
    const lessonKey = `${tId}-lesson${lessonIdx + 1}`; // Lesson 1-based naming

    // Read current data to calculate total time spent
    let currentViewed = false;
    let currentTotal = 0;

    try {
      const doc = await docRef.get();
      if (doc.exists) {
        const data = doc.data();
        if (data.lessonsViewed && data.lessonsViewed[lessonKey]) {
          currentViewed = data.lessonsViewed[lessonKey].viewed || false;
          currentTotal = data.lessonsViewed[lessonKey].timeSpent || 0;
        }
      }
    } catch(e) {
      console.warn("Error getting progress doc: ", e);
    }

    const newTotal = currentTotal + duration;
    const isViewed = currentViewed || newTotal >= 30; // Threshold of 30 seconds

    const updateData = {
      studentName: user.displayName || user.email.split('@')[0],
      studentEmail: user.email,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    updateData[`lessonsViewed.${lessonKey}.viewed`] = isViewed;
    updateData[`lessonsViewed.${lessonKey}.timeSpent`] = firebase.firestore.FieldValue.increment(duration);
    updateData[`lessonsViewed.${lessonKey}.timestamp`] = firebase.firestore.FieldValue.serverTimestamp();

    try {
      await docRef.update(updateData);
    } catch(err) {
      // Document might not exist, initialize it
      if (err.code === 'not-found') {
        const initDoc = {
          studentName: user.displayName || user.email.split('@')[0],
          studentEmail: user.email,
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          lessonsViewed: {
            [lessonKey]: {
              viewed: isViewed,
              timeSpent: duration,
              timestamp: new Date()
            }
          }
        };
        await docRef.set(initDoc, { merge: true });
      } else {
        console.error("Error updating lesson view:", err);
      }
    }
  };

  window.trackQuizCompletion = async function(tId, quizId, score, total) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const db = firebase.firestore();
    const docRef = db.collection('dp-progress').doc(user.uid);
    const quizKey = `${tId}-quiz-${quizId}`;

    const updateData = {
      studentName: user.displayName || user.email.split('@')[0],
      studentEmail: user.email,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    updateData[`quizzesCompleted.${quizKey}`] = {
      score: score,
      total: total,
      timestamp: new Date()
    };

    try {
      await docRef.update(updateData);
      console.log(`✅ Saved Quiz Progress: ${quizKey} — ${score}/${total}`);
    } catch(err) {
      if (err.code === 'not-found') {
        const initDoc = {
          studentName: user.displayName || user.email.split('@')[0],
          studentEmail: user.email,
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          quizzesCompleted: {
            [quizKey]: {
              score: score,
              total: total,
              timestamp: new Date()
            }
          }
        };
        await docRef.set(initDoc, { merge: true });
      } else {
        console.error("Error saving quiz completion:", err);
      }
    }
  };

  window.trackFlashcardProgress = async function(tId, mastered, total) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const db = firebase.firestore();
    const docRef = db.collection('dp-progress').doc(user.uid);

    const updateData = {
      studentName: user.displayName || user.email.split('@')[0],
      studentEmail: user.email,
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    updateData[`flashcardsProgress.${tId}`] = {
      mastered: mastered,
      total: total,
      timestamp: new Date()
    };

    try {
      await docRef.update(updateData);
      console.log(`✅ Saved Flashcard Progress for ${tId}: ${mastered}/${total}`);
    } catch(err) {
      if (err.code === 'not-found') {
        const initDoc = {
          studentName: user.displayName || user.email.split('@')[0],
          studentEmail: user.email,
          lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
          flashcardsProgress: {
            [tId]: {
              mastered: mastered,
              total: total,
              timestamp: new Date()
            }
          }
        };
        await docRef.set(initDoc, { merge: true });
      } else {
        console.error("Error saving flashcard progress:", err);
      }
    }
  };

  // Process completed exam attempts to update command term / AO performance
  window.updateDPProgressFromAttempt = async function(attempt) {
    const user = firebase.auth().currentUser;
    if (!user) return;

    // Check if there are blocks
    let blocks = [];
    if (attempt.dataJson) {
      try {
        const parsed = JSON.parse(attempt.dataJson);
        blocks = parsed.blocks || [];
      } catch(e) { console.error("Error parsing attempt blocks: ", e); }
    } else if (attempt.blocks) {
      blocks = attempt.blocks;
    }

    if (!blocks || blocks.length === 0) return;

    const db = firebase.firestore();
    const docRef = db.collection('dp-progress').doc(user.uid);

    // Dynamic aggregates
    const termDiff = {}; // { commandTerm: { attempted: X, correct: Y } }
    const aoDiff = {};   // { AO: { attempted: X, correct: Y } }

    blocks.forEach((block, idx) => {
      if (block.mode !== 'question') return;
      const cmdTerm = block.meta?.commandTerm;
      const maxMarks = Number(block.meta?.marks || 1);
      const earnedMarks = Number(attempt.grades?.[idx] ?? (block.ui?.tfAnswer !== undefined && attempt.answers?.[idx] === block.ui?.tfAnswer ? maxMarks : 0)); // simple grade fallback

      if (cmdTerm) {
        // Clean command term
        const cleanTerm = cmdTerm.trim().charAt(0).toUpperCase() + cmdTerm.trim().slice(1).toLowerCase();
        
        // Term Performance
        if (!termDiff[cleanTerm]) termDiff[cleanTerm] = { attempted: 0, correct: 0 };
        termDiff[cleanTerm].attempted += 1;
        termDiff[cleanTerm].correct += (earnedMarks / maxMarks);

        // AO Performance
        const ao = COMMAND_TERM_TO_AO[cleanTerm];
        if (ao) {
          if (!aoDiff[ao]) aoDiff[ao] = { attempted: 0, correct: 0 };
          aoDiff[ao].attempted += 1;
          aoDiff[ao].correct += (earnedMarks / maxMarks);
        }
      }
    });

    // Build update payload using increment
    const updateData = {
      studentName: user.displayName || user.email.split('@')[0],
      studentEmail: user.email,
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

    // Auto-lit Learner Profile or ATL completions
    // E.g., Scored >70% on AO3 questions -> Thinker, attempted HL topic -> Risk-taker
    let hasHL = false;
    if (attempt.chapter && attempt.chapter.toLowerCase().includes("hl")) hasHL = true;
    if (attempt.topic && attempt.topic.toLowerCase().includes("hl")) hasHL = true;

    if (hasHL) {
      updateData[`learnerProfile.Risk-taker`] = true;
    }

    try {
      await docRef.update(updateData);
      console.log("⚡ Auto-updated student command terms and AO performance from exam attempt.");
    } catch(err) {
      if (err.code === 'not-found') {
        // If progress document doesn't exist, create it with set merge
        const initDoc = {
          studentName: user.displayName || user.email.split('@')[0],
          studentEmail: user.email,
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
        await docRef.set(initDoc, { merge: true });
      } else {
        console.error("Error updating performance from attempt:", err);
      }
    }
  };

  // Sync accumulated lesson durations to Firestore
  function syncProgressToFirestore() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    Object.keys(localAccumulatedTime).forEach(idx => {
      const duration = localAccumulatedTime[idx];
      if (duration > 0) {
        window.trackLessonView(topicId, parseInt(idx), duration);
        localAccumulatedTime[idx] = 0; // Reset after trigger
      }
    });
  }

  // Setup periodic syncs and visibility hooks
  function initTracking() {
    activeStartTime = Date.now();

    // Hook showLesson
    hookShowLesson();

    // Sync on page visibility change
    document.addEventListener("visibilitychange", function() {
      recordCurrentTimeSpent();
      syncProgressToFirestore();
    });

    // Sync on pageunload
    window.addEventListener("pagehide", function() {
      recordCurrentTimeSpent();
      syncProgressToFirestore();
    });

    // Setup periodic sync every 10 seconds
    if (syncIntervalId) clearInterval(syncIntervalId);
    syncIntervalId = setInterval(function() {
      recordCurrentTimeSpent();
      syncProgressToFirestore();
    }, 10000);
  }

  // Listen to Auth State Changes
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged(function(user) {
      currentUser = user;
      if (user) {
        console.log(`👤 Student logged in: ${user.email}`);
        initTracking();
      } else {
        console.log("👤 Student logged out (Guest)");
        if (syncIntervalId) {
          clearInterval(syncIntervalId);
          syncIntervalId = null;
        }
      }
    });
  } else {
    console.warn("⚠️ Firebase Auth module not found on page.");
  }

})();
