function saveToDB(data){
  localStorage.setItem("examPapers", JSON.stringify(data));
}

function loadFromDB(){
  return JSON.parse(localStorage.getItem("examPapers")||"[]");
}
