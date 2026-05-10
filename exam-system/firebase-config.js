/* ═══════════════════════════════════════════════════
   PHYSICISM — Firebase Configuration
   Project: soral-atul-physicism
═══════════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey: "AIzaSyCLw65yB0sPSf5lgSkom27PTN4DrS1CBFc",
  authDomain: "soral-atul-physicism.firebaseapp.com",
  projectId: "soral-atul-physicism",
  storageBucket: "soral-atul-physicism.firebasestorage.app",
  messagingSenderId: "466087894566",
  appId: "1:466087894566:web:61b4a05cfb97c8594d90e7"
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global references
const auth = firebase.auth();
const db   = firebase.firestore();

console.log('🔥 Firebase initialized — project:', firebaseConfig.projectId);
