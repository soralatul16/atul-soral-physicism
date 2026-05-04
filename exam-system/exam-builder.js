let tempPaper = {
  title:"",
  scenario:"",
  content:[],
  questions:[]
};

function addContent(){

  const file = document.getElementById("fileInput").files[0];
  const url = document.getElementById("urlInput").value;

  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      tempPaper.content.push(e.target.result);
      renderContent();
    }
    reader.readAsDataURL(file);
  }

  if(url){
    tempPaper.content.push(url);
    renderContent();
  }
}

function renderContent(){
  const div = document.getElementById("contentArea");
  div.innerHTML="";

  tempPaper.content.forEach(c=>{
    div.innerHTML += `<img src="${c}" class="media">`;
  });
}

function addQuestion(){

  const type = document.getElementById("qType").value;

  tempPaper.questions.push({
    type:type,
    text:document.getElementById("qText").value,
    marks:document.getElementById("marks").value
  });

  renderQuestions();
}

function renderQuestions(){
  const div = document.getElementById("questionArea");
  div.innerHTML="";

  tempPaper.questions.forEach(q=>{
    div.innerHTML += `<p>${q.text} (${q.marks})</p>`;
  });
}

function savePaper(){

  tempPaper.title = document.getElementById("paperTitle").value;
  tempPaper.scenario = document.getElementById("scenario").value;

  let db = loadFromDB();
  db.push(tempPaper);

  saveToDB(db);

  alert("Saved Successfully!");
}
