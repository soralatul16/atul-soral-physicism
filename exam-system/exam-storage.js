const LIBRARY_KEY = "MYP_LIBRARY";
const ATTEMPTS_KEY = "PHYS_ATTEMPTS";

function getDB(){
  return JSON.parse(localStorage.getItem(LIBRARY_KEY) || "[]");
}

function saveDB(db){
  localStorage.setItem(LIBRARY_KEY, JSON.stringify(db));
}

function addQuestion(q){
  let db = getDB();
  db.push(q);
  saveDB(db);
}

function getAttempts(){
  return JSON.parse(localStorage.getItem(ATTEMPTS_KEY) || "[]");
}

function saveAttempts(arr){
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(arr));
}
