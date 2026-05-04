const STORAGE_KEY = "examQuestionBank";

function getDB(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveDB(db){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function addQuestion(q){
  let db = getDB();
  db.push(q);
  saveDB(db);
}
