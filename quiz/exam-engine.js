let currentExam = [];
let startTime;
let totalMarks = 0;

/* START */
function startExam(){

  const topic = document.getElementById("chapter").value;

  currentExam = examData.filter(q =>
    !topic || q.topic === topic
  );

  if(currentExam.length === 0){
    alert("🚧 Coming soon!");
    return;
  }

  startTime = new Date();
  renderExam();
}

/* RENDER */
function renderExam(){

  const container = document.getElementById("quiz");
  container.innerHTML = "";

  let sectionMap = {};
  totalMarks = 0;

  currentExam.forEach(q=>{
    totalMarks += q.marks;
    if(!sectionMap[q.section]) sectionMap[q.section] = [];
    sectionMap[q.section].push(q);
  });

  Object.keys(sectionMap).forEach(sec=>{

    container.innerHTML += `<h2>Section ${sec}</h2>`;

    sectionMap[sec].forEach((q,i)=>{

      let html = `
      <div class="question">
        <b>(${q.marks} marks)</b>
        <span class="command">${q.command.toUpperCase()}</span>:
        ${q.question}
      `;

      /* IMAGE */
      if(q.type === "image"){
        html += `<br><img src="${q.image}" width="100%">`;
      }

      /* VIDEO */
      if(q.type === "video"){
        html += `<br><iframe width="100%" height="200" src="${q.video}" frameborder="0"></iframe>`;
      }

      /* MCQ */
      if(q.type === "mcq"){
        q.options.forEach(opt=>{
          html += `
          <label>
            <input type="radio" name="q${i}" value="${opt}">
            ${opt}
          </label><br>`;
        });
      } else {
        html += `<textarea id="ans${i}" placeholder="Write answer..."></textarea>`;
      }

      html += `</div>`;
      container.innerHTML += html;

    });

  });

  document.getElementById("submitBtn").style.display = "block";
}

/* SUBMIT */
function submitExam(){

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;
  let score = 0;

  const endTime = new Date();
  const duration = Math.round((endTime - startTime)/1000);

  doc.text("IB MYP Physics Exam",10,y); y+=10;
  doc.text(`Time: ${duration} sec`,10,y); y+=10;

  currentExam.forEach((q,i)=>{

    let userAns = "";

    if(q.type === "mcq"){
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      userAns = selected ? selected.value : "Not answered";

      if(userAns === q.answer) score += q.marks;

    } else {
      userAns = document.getElementById(`ans${i}`).value;
    }

    doc.text(`Q${i+1}: ${q.question}`,10,y); y+=8;
    doc.text(`Answer: ${userAns}`,10,y); y+=10;

    if(y>270){ doc.addPage(); y=10; }

  });

  doc.text(`Score (MCQ only): ${score}/${totalMarks}`,10,y);

  doc.save("Exam-Answers.pdf");

  if(confirm("Download Markscheme?")){
    downloadMarkscheme();
  }
}

/* MARKSCHEME */
function downloadMarkscheme(){

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;

  doc.text("Markscheme",10,y); y+=10;

  currentExam.forEach((q,i)=>{

    doc.text(`Q${i+1}: ${q.question}`,10,y); y+=8;
    doc.text(`Answer: ${q.markscheme}`,10,y); y+=10;

    if(y>270){ doc.addPage(); y=10; }

  });

  doc.save("Markscheme.pdf");
}
