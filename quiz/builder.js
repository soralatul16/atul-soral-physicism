let paper = {
  scenario:"",
  images:[],
  videos:[],
  questions:[]
};

/* ADD IMAGE */
function addImage(){
const url = document.getElementById("imageUrl").value;

if(!url) return;

/* 🔥 Save URL */
paper.images.push(url);

/* Preview */
document.getElementById("imagePreview").innerHTML +=
`<img src="${url}" width="200">`;

}

/* ADD VIDEO */
function addVideo(){
const url = document.getElementById("videoUrl").value;

paper.videos.push(url);

document.getElementById("videoPreview").innerHTML +=
`<iframe width="300" src="${url}"></iframe>`;
}

/* ADD QUESTION */
function addQuestion(type){

const q = {
type:type,
question:"",
options:[],
answer:"",
marks:1
};

paper.questions.push(q);

renderQuestions();
}

/* RENDER QUESTIONS */
function renderQuestions(){

let html="";

paper.questions.forEach((q,i)=>{

html+=`<div class="question-box">

<input placeholder="Question" 
oninput="paper.questions[${i}].question=this.value">

<br>

Marks:
<input type="number" value="1"
oninput="paper.questions[${i}].marks=this.value">

`;

if(q.type==="mcq"){

html+=`
<input placeholder="Option 1" oninput="updateOption(${i},0,this.value)">
<input placeholder="Option 2" oninput="updateOption(${i},1,this.value)">
<input placeholder="Option 3" oninput="updateOption(${i},2,this.value)">
<input placeholder="Option 4" oninput="updateOption(${i},3,this.value)">

<input placeholder="Correct Answer"
oninput="paper.questions[${i}].answer=this.value">
`;

}

html+=`</div>`;
});

document.getElementById("questions").innerHTML = html;
}

/* UPDATE OPTION */
function updateOption(i,index,value){
paper.questions[i].options[index]=value;
}

/* SAVE PAPER */
function savePaper(){

paper.scenario = document.getElementById("scenario").value;

/* 🔥 SAVE LOCALLY */
localStorage.setItem("ib-paper", JSON.stringify(paper));

alert("Paper Saved!");
}
