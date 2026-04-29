let questions = [];
let index = 0;
let score = 0;

function startQuiz(){

const topic = document.getElementById("mainTopicSelect").value;
const email = document.getElementById("studentEmail").value;

if(!topic){
alert("Select topic");
return;
}

questions = MYP_QUESTION_BANK[topic];

if(!questions || questions.length === 0){
alert("No questions found for this topic");
return;
}

index = 0;
score = 0;

document.getElementById("quizSection").style.display="block";
document.getElementById("startSection").style.display="none";

loadQuestion();

gtag('event','quiz_start',{topic:topic,user:email});
}

function loadQuestion(){

if(index >= questions.length){
document.getElementById("questionText").innerHTML = "🎉 Quiz Completed!";
document.getElementById("choiceList").innerHTML = "";
document.getElementById("scoreBox").innerHTML = `Score: ${score}/${questions.length}`;
return;
}

const q = questions[index];

document.getElementById("questionText").innerHTML =
`(${q.criterion}-${q.strand}) ${q.question}`;

let html = "";

for(let key in q.options){
html += `<li class="list-group-item option" onclick="checkAnswer('${key}', this)">
${key}. ${q.options[key]}
</li>`;
}

document.getElementById("choiceList").innerHTML = html;
}

function checkAnswer(ans, element){

const correct = questions[index].answer;

if(ans === correct){
element.classList.add("correct");
score++;
}else{
element.classList.add("wrong");
}

index++;
setTimeout(loadQuestion,800);
}

window.onload = function(){

const select = document.getElementById("mainTopicSelect");

for(let topic in MYP_QUESTION_BANK){
let opt = document.createElement("option");
opt.value = topic;
opt.textContent = topic;
select.appendChild(opt);
}

}document.getElementById("scoreBox").innerHTML = `Score: ${score}/10`;

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
