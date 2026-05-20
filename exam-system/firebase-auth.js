/* ═══════════════════════════════════════════════════
   PHYSICISM — Firebase Auth Helpers
   Requires: firebase-config.js loaded first
═══════════════════════════════════════════════════ */

/* ── Register new student ── */
async function firebaseRegister(email, password, profile) {
  const cred = await auth.createUserWithEmailAndPassword(email, password);
  const uid = cred.user.uid;
  // Save student profile in Firestore
  await db.collection('students').doc(uid).set({
    uid,
    email: email.toLowerCase(),
    firstName: profile.firstName,
    lastName: profile.lastName,
    studentId: profile.studentId || '',
    grade: profile.grade || '',
    section: profile.section || '',
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
  });
  // Update display name
  await cred.user.updateProfile({
    displayName: profile.firstName + ' ' + profile.lastName
  });
  // Send verification email
  try {
    await cred.user.sendEmailVerification();
  } catch (err) {
    console.error('Verification email error:', err);
  }
  return cred.user;
}

/* ── Login with email/password ── */
async function firebaseLogin(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  // Update last login
  await db.collection('students').doc(cred.user.uid).update({
    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
  }).catch(() => {});
  return cred.user;
}

/* ── Login with Google ── */
async function firebaseGoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const result = await auth.signInWithPopup(provider);
  const user = result.user;
  // Check if profile exists, create if not
  const doc = await db.collection('students').doc(user.uid).get();
  if (!doc.exists) {
    const names = (user.displayName || '').split(' ');
    await db.collection('students').doc(user.uid).set({
      uid: user.uid,
      email: user.email.toLowerCase(),
      firstName: names[0] || '',
      lastName: names.slice(1).join(' ') || '',
      studentId: '',
      grade: '',
      section: '',
      authProvider: 'google',
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    });
  } else {
    await db.collection('students').doc(user.uid).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(() => {});
  }
  return user;
}

/* ── Logout ── */
async function firebaseLogout() {
  await auth.signOut();
}

/* ── Password Reset (sends real email!) ── */
async function firebaseResetPassword(email) {
  await auth.sendPasswordResetEmail(email);
}

/* ── Get current user's profile from Firestore ── */
async function getStudentProfile(uid) {
  const doc = await db.collection('students').doc(uid).get();
  return doc.exists ? doc.data() : null;
}

/* ── Build session object from Firebase user ── */
async function buildSession(user) {
  if (!user) return null;
  const profile = await getStudentProfile(user.uid);
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName || (profile ? profile.firstName + ' ' + profile.lastName : 'Student'),
    firstName: profile?.firstName || user.displayName?.split(' ')[0] || '',
    lastName: profile?.lastName || '',
    grade: profile?.grade || '',
    section: profile?.section || '',
    studentId: profile?.studentId || '',
    isTeacher: false
  };
}

/* ── Teacher Auth ── */
async function firebaseTeacherLogin(email, password) {
  const cred = await auth.signInWithEmailAndPassword(email, password);
  // Check if this user is a teacher
  const doc = await db.collection('teachers').doc(cred.user.uid).get();
  if (!doc.exists) {
    // Check by email
    const snap = await db.collection('teachers').where('email', '==', email.toLowerCase()).get();
    if (snap.empty) {
      await auth.signOut();
      throw new Error('NOT_TEACHER');
    }
  }
  return cred.user;
}

async function firebaseTeacherGoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  const user = result.user;
  // Check teacher authorization
  const doc = await db.collection('teachers').doc(user.uid).get();
  if (!doc.exists) {
    const snap = await db.collection('teachers').where('email', '==', user.email.toLowerCase()).get();
    if (snap.empty) {
      // Auto-register first teacher (bootstrap)
      const teacherCount = await db.collection('teachers').get();
      if (teacherCount.empty) {
        // First ever teacher — auto-approve
        await db.collection('teachers').doc(user.uid).set({
          uid: user.uid,
          email: user.email.toLowerCase(),
          name: user.displayName || '',
          role: 'admin',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✅ First teacher registered:', user.email);
        return user;
      }
      await auth.signOut();
      throw new Error('NOT_TEACHER');
    }
  }
  return user;
}

/* ── Check if current user is teacher ── */
async function isTeacher() {
  const user = auth.currentUser;
  if (!user) return false;
  const doc = await db.collection('teachers').doc(user.uid).get();
  if (doc.exists) return true;
  const snap = await db.collection('teachers').where('email', '==', user.email.toLowerCase()).get();
  return !snap.empty;
}
