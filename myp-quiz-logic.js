let currentIndex = 0;
let score = 0;
let selectedQuestions = [];

function startQuiz(){

const topic = document.getElementById("mainTopicSelect").value;
const email = document.getElementById("studentEmail").value;

if(!topic){
alert("Select topic");
return;
}

selectedQuestions = shuffle(MYP_QUESTION_BANK[topic]).slice(0,10);

document.getElementById("quizBox").style.display="block";

currentIndex = 0;
score = 0;

loadQuestion();

gtag('event','quiz_start',{
topic:topic,
user:email
});

}

function loadQuestion(){

if(currentIndex >= selectedQuestions.length){

document.getElementById("questionText").innerHTML = "🎉 Quiz Completed!";
document.getElementById("choiceList").innerHTML = "";
document.getElementById("scoreBox").innerHTML = `Score: ${score}/10`;

gtag('event','quiz_complete',{
score:score
});

return;
}

const q = selectedQuestions[currentIndex];

document.getElementById("questionText").innerHTML =
`(${q.criterion}-${q.strand}) ${q.question}`;

let html = "";

for(let key in q.options){
html += `<li class="list-group-item" onclick="checkAnswer('${key}', this)">
${key}. ${q.options[key]}
</li>`;
}

document.getElementById("choiceList").innerHTML = html;

}

function checkAnswer(ans, element){

const correct = selectedQuestions[currentIndex].answer;

if(ans === correct){
element.style.background="lightgreen";
score++;
gtag('event','correct_answer');
}else{
element.style.background="salmon";
gtag('event','wrong_answer');
}

currentIndex++;

setTimeout(loadQuestion,800);

}

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

/* LOAD TOPICS */
window.onload = function(){

const topicSelect = document.getElementById("mainTopicSelect");

for(let topic in MYP_QUESTION_BANK){
let option = document.createElement("option");
option.value = topic;
option.textContent = topic;
topicSelect.appendChild(option);
}

}
