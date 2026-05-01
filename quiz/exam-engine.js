
const params = new URLSearchParams(window.location.search);

const topic = params.get("topic");
const criterion = params.get("criterion");
const difficulty = params.get("difficulty");

let startTime = Date.now();

/* TIMER */
setInterval(()=>{
  let t = Math.floor((Date.now() - startTime)/1000);
  document.getElementById("timer").innerText = "⏱ Time: " + t + "s";
},1000);

/* FILTER QUESTIONS */
let questions = examData.filter(q =>
  q.topic === topic &&
  q.criterion === criterion &&
  q.level === difficulty
);

/* LOAD */
let html = "";

questions.forEach((q,i)=>{
  html += `
    <div class="question">
      <b>Q${i+1}</b><br><br>
      ${q.question}
      <textarea id="ans${i}" rows="4"></textarea>
    </div>
  `;
});

document.getElementById("examBox").innerHTML = html;

/* DOWNLOAD */
function downloadPDF(){

  let content = "Exam Answers\n\n";

  questions.forEach((q,i)=>{
    const ans = document.getElementById("ans"+i).value;

    content += `Q${i+1}: ${q.question}\n`;
    content += `Answer: ${ans}\n\n`;
  });

  let timeTaken = Math.floor((Date.now()-startTime)/1000);
  content += `Time Taken: ${timeTaken} seconds`;

  const blob = new Blob([content], {type: "text/plain"});
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "exam.txt";
  link.click();
}
