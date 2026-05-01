const examData = [

/* SECTION A (MCQ) */
{
  section: "A",
  type: "mcq",
  topic: "waves",
  marks: 1,
  command: "state",
  question: "State the wave equation.",
  options: ["v=fλ", "v=f/λ", "v=λ/f", "v=f²λ"],
  answer: "v=fλ",
  markscheme: "Correct answer: v = fλ"
},

/* SECTION B */
{
  section: "B",
  type: "text",
  topic: "atomic",
  marks: 2,
  command: "define",
  question: "Define half-life.",
  markscheme: "Time taken for half the nuclei to decay."
},

/* IMAGE QUESTION */
{
  section: "C",
  type: "image",
  topic: "electromagnetism",
  marks: 3,
  command: "describe",
  image: "../Images/20-magnetic-fields.png",
  question: "Describe the magnetic field pattern.",
  markscheme: "Field lines go from N to S, dense near poles."
},

/* VIDEO QUESTION */
{
  section: "D",
  type: "video",
  topic: "waves",
  marks: 4,
  command: "explain",
  video: "https://www.youtube.com/embed/abc123",
  question: "Explain the phenomenon shown.",
  markscheme: "Explanation based on wave interference."
}

];
