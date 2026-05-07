/* ═══════════════════════════════════════════════════
   PHYSICISM — Shared Storage Helper
   Keys: MYP_LIBRARY (question sets), PHYS_ATTEMPTS (student attempts)
═══════════════════════════════════════════════════ */

const LIBRARY_KEY  = "MYP_LIBRARY";
const ATTEMPTS_KEY = "PHYS_ATTEMPTS";
const SESSION_KEY  = "PHYS_SESSION";

/* ── Library (Question Sets) ── */
function getLibrary() {
  return JSON.parse(localStorage.getItem(LIBRARY_KEY) || "[]");
}
function saveLibrary(lib) {
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(lib));
}
function getPublished() {
  return getLibrary().filter(s => s.status === "Published");
}

/* ── Attempts ── */
function getAttempts() {
  return JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || "[]");
}
function saveAttempts(arr) {
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(arr));
}

/* ── Session ── */
function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || Date.now() > s.expiry) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return s;
  } catch(e) { return null; }
}

/* ── Legacy compat ── */
function getDB() {
  return getLibrary();
}
function saveDB(db) {
  saveLibrary(db);
}
function addQuestion(q) {
  const db = getLibrary();
  db.push(q);
  saveLibrary(db);
}
