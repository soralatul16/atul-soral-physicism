// ================================
// MYP PHYSICS QUESTION BANK
// ================================

const QUESTION_BANK = {

  waves: [
    {
      q: "What is the unit of frequency?",
      options: ["Hz", "m/s", "J", "N"],
      answer: 0
    },
    {
      q: "Which wave is longitudinal?",
      options: ["Light", "Water", "Sound", "EM"],
      answer: 2
    },
    {
      q: "Wave speed formula is:",
      options: ["v = fλ", "v = d/t", "v = at", "v = u+at"],
      answer: 0
    },
    {
      q: "Which property increases with amplitude?",
      options: ["Energy", "Speed", "Frequency", "Time"],
      answer: 0
    }
  ],

  electricity: [
    {
      q: "Unit of current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      answer: 1
    },
    {
      q: "Ohm’s Law is:",
      options: ["V = IR", "P = IV", "E = mc²", "F = ma"],
      answer: 0
    },
    {
      q: "Resistance unit?",
      options: ["Ohm", "Volt", "Ampere", "Joule"],
      answer: 0
    },
    {
      q: "Series circuit current is:",
      options: ["Same", "Different", "Zero", "Infinite"],
      answer: 0
    }
  ],

  atomic: [
    {
      q: "Who proposed nuclear model?",
      options: ["Dalton", "Thomson", "Rutherford", "Bohr"],
      answer: 2
    },
    {
      q: "Charge of electron?",
      options: ["+1", "-1", "0", "+2"],
      answer: 1
    },
    {
      q: "Alpha particle is:",
      options: ["Electron", "Helium nucleus", "Photon", "Proton"],
      answer: 1
    },
    {
      q: "Half-life means:",
      options: [
        "Time for full decay",
        "Time for half decay",
        "Time for double decay",
        "No decay"
      ],
      answer: 1
    }
  ]

};


// ================================
// BALANCED ANSWER DISTRIBUTION
// ================================

function shuffleQuestionsBalanced(questions) {
  let groups = [[], [], [], []]; // A B C D

  questions.forEach(q => {
    groups[q.answer].push(q);
  });

  let result = [];
  let maxLen = Math.max(...groups.map(g => g.length));

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < 4; j++) {
      if (groups[j][i]) result.push(groups[j][i]);
    }
  }

  return result.sort(() => Math.random() - 0.5);
}
"Electromagnetism": [

{
criterion:"A",
strand:"i",
type:"mcq",
question:"Unit of current is:",
options:{A:"Volt",B:"Ampere",C:"Ohm",D:"Watt"},
answer:"B"
},

{
criterion:"A",
strand:"ii",
type:"mcq",
question:"Ohm’s Law is:",
options:{A:"V = IR",B:"F = ma",C:"p = mv",D:"E = mc²"},
answer:"A"
}

]   // ✅ CLOSE Electromagnetism array

};   // ✅ CLOSE OBJECT
