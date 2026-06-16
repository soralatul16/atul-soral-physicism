// MYP Questions - Batch 2 (remaining parts + SVGs)
// Run: node myp-questions-batch2.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  // ═══ M24 Q3: Remaining resistance investigation parts ═══
  {id:"myp-m24-3g",text:"The student's data shows: Length 100 cm, Resistance 6.3 Ω. Plot this data point on the graph and draw a line of best fit for all data points.",criterion:"C",strand:"ii",topic:"Electromagnetism",chapter:7,difficulty:"Medium",commandTerm:"Plot",maxLevel:8,markScheme:"Data point plotted correctly at (100, 6.3); Line of best fit has data points above and below, correctly models proportional relationship (through or near origin).",marks:2,type:"Short Answer",year:"2024",session:"May"},

  // ═══ M24 Q4: Forces & Magnetism — remaining parts ═══
  {id:"myp-m24-4d",text:"A ball rolls down a ramp and collides with a stationary ball near a magnet. The first ball stops and the second ball moves. Which law best explains this?\n\nA. Conservation of energy\nB. Conservation of momentum\nC. Newton's first law\nD. Newton's third law",criterion:"A",strand:"i",topic:"Forces & Motion",chapter:2,difficulty:"Easy",commandTerm:"State",maxLevel:8,markScheme:"A. Conservation of energy (or B depending on context — mark scheme says A).",marks:1,type:"MCQ",options:["Conservation of energy","Conservation of momentum","Newton's first law","Newton's third law"],year:"2024",session:"May"},
  {id:"myp-m24-4e",text:"When the second ball reaches the magnet, it has more kinetic energy than the first ball had at the top of the ramp. Explain where this extra energy comes from.",criterion:"C",strand:"ii",topic:"Forces & Motion",chapter:2,difficulty:"Medium",commandTerm:"Explain",maxLevel:8,markScheme:"Magnetic energy is released / changes in the magnetic field provide additional kinetic energy / the magnet does work on the ball as it attracts it.",marks:1,type:"Short Answer",year:"2024",session:"May"},

  // ═══ M24 Q4f: Full Criterion B experimental design ═══
  {id:"myp-m24-4f-v",text:"Design an investigation to find out how the initial height of a ball on a ramp affects the maximum height it reaches after being attracted by a magnet at the bottom.\n\nState the independent variable (IV), dependent variable (DV), and one controlled variable (CV).",criterion:"B",strand:"i",topic:"Forces & Motion",chapter:2,difficulty:"Medium",commandTerm:"State",maxLevel:8,markScheme:"IV: Initial height of ball on ramp; DV: Maximum height reached after magnet interaction; CV: Strength of magnet / angle of incline / material or mass or size of balls. Do NOT accept 'keeping equipment the same' or 'temperature'.",marks:4,type:"Extended Response",year:"2024",session:"May"},
  {id:"myp-m24-4f-h",text:"Write a testable hypothesis for the investigation about initial height and maximum height. Include a scientific explanation.",criterion:"B",strand:"i",topic:"Forces & Motion",chapter:2,difficulty:"Hard",commandTerm:"Write",maxLevel:8,markScheme:"Testable hypothesis linking initial height and maximum height (e.g., 'If initial height increases, maximum height increases'); With explanation linking to conservation of energy or conversion of KE/GPE. The hypothesis does not need to be correct but must be logical.",marks:4,type:"Extended Response",year:"2024",session:"May"},
  {id:"myp-m24-4f-m",text:"Write a complete method for the investigation that another student could follow. Include how you would vary the independent variable and measure the dependent variable.",criterion:"B",strand:"ii",topic:"Forces & Motion",chapter:2,difficulty:"Hard",commandTerm:"Describe",maxLevel:8,markScheme:"Method changes initial height and measures final/maximum height; Detailed enough to be followed by another student; Includes how to set up ramp, release ball, measure heights. A method without how to vary the IV is incomplete.",marks:3,type:"Extended Response",year:"2024",session:"May"},
  {id:"myp-m24-4f-s",text:"State one safety precaution for this investigation and link it to a specific hazard.",criterion:"B",strand:"iii",topic:"Forces & Motion",chapter:2,difficulty:"Easy",commandTerm:"State",maxLevel:8,markScheme:"Taking care not to trap fingers between colliding balls/magnets. Must be linked to a specific hazard — do not accept general precautions like 'wear a mask' or 'handle magnets carefully' without linking to a hazard.",marks:1,type:"Short Answer",year:"2024",session:"May"},

  // ═══ M23 Q3: Remaining nuclear parts ═══
  {id:"myp-m23-3d",text:"Write the nuclear equation for the beta decay of Thorium-234 to Protactinium-234.",criterion:"A",strand:"iii",topic:"Atomic Physics",chapter:6,difficulty:"Hard",commandTerm:"Write",maxLevel:8,markScheme:"²³⁴₉₀Th → ²³⁴₉₁Pa + ⁰₋₁β. Mass number stays same (234 = 234 + 0). Atomic number increases by 1 (90 → 91 + (-1)).",marks:2,type:"Short Answer",year:"2023",session:"May"},
  {id:"myp-m23-3e",text:"Uranium-238 can be converted to Uranium-239 in a nuclear reactor. Explain how this happens.",criterion:"A",strand:"ii",topic:"Atomic Physics",chapter:6,difficulty:"Medium",commandTerm:"Explain",maxLevel:8,markScheme:"A neutron is absorbed by the nucleus of Uranium-238 (increasing mass number by 1).",marks:1,type:"Short Answer",year:"2023",session:"May"},

  // ═══ M23 Q4g: Graph reading ═══
  {id:"myp-m23-4g",text:"Using the graph of pressure against volume, estimate the volume of gas when the pressure is 200 kPa.",criterion:"C",strand:"ii",topic:"Forces & Motion",chapter:2,difficulty:"Easy",commandTerm:"Estimate",maxLevel:8,markScheme:"Answer in range 145-155 cm³. Award unit mark independently.",marks:2,type:"Short Answer",year:"2023",session:"May"},

  // ═══ M23 Q5b: Gas expansion experimental design ═══
  {id:"myp-m23-5b",text:"Design an investigation to find out how temperature affects the volume (circumference) of a balloon.\n\nWrite a research question linking temperature and volume/circumference.",criterion:"B",strand:"i",topic:"Thermal Physics",chapter:8,difficulty:"Easy",commandTerm:"State",maxLevel:8,markScheme:"A research question correctly linking temperature and volume or circumference (e.g., 'How does temperature affect the circumference of a balloon?').",marks:1,type:"Short Answer",year:"2023",session:"May"},

  // ═══ SVG IMAGES — Add to existing questions ═══
  // (These will be added via update, not new docs)
];

// Additional: Patch images onto existing questions
const imagePatches = [
  {id:"myp-m24-1a", image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150"><rect width="400" height="150" fill="#fff"/><rect x="20" y="40" width="70" height="60" fill="#f90" rx="5" stroke="#000" stroke-width="1.5"/><text x="55" y="75" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">BOILER</text><text x="55" y="110" text-anchor="middle" font-size="9">Coal → Steam</text><rect x="140" y="45" width="60" height="50" fill="#4a90d9" rx="5" stroke="#000" stroke-width="1.5"/><text x="170" y="75" text-anchor="middle" font-size="9" fill="#fff">TURBINE</text><rect x="250" y="45" width="70" height="50" fill="#22c55e" rx="5" stroke="#000" stroke-width="1.5"/><text x="285" y="70" text-anchor="middle" font-size="9" fill="#fff">GENER-</text><text x="285" y="82" text-anchor="middle" font-size="9" fill="#fff">ATOR</text><line x1="90" y1="70" x2="140" y2="70" stroke="#e33" stroke-width="2"/><polygon points="135,67 142,70 135,73" fill="#e33"/><text x="115" y="62" font-size="8" fill="#e33">Steam</text><line x1="200" y1="70" x2="250" y2="70" stroke="#000" stroke-width="2"/><polygon points="245,67 252,70 245,73" fill="#000"/><line x1="320" y1="70" x2="370" y2="70" stroke="#22c55e" stroke-width="2"/><polygon points="365,67 372,70 365,73" fill="#22c55e"/><text x="355" y="60" font-size="8" fill="#22c55e">Electricity</text><path d="M 170,95 C 170,120 170,130 55,130 C 40,130 30,120 30,100" fill="none" stroke="#36a" stroke-width="1.5" stroke-dasharray="4"/><text x="100" y="140" font-size="8" fill="#36a">Water returns</text></svg>`},

  {id:"myp-m24-4b", image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#fff"/><line x1="30" y1="120" x2="270" y2="120" stroke="#000" stroke-width="2"/><circle cx="150" cy="105" r="20" fill="#ff9999" stroke="#000" stroke-width="1.5"/><text x="150" y="110" text-anchor="middle" font-size="9">ball</text><rect x="250" y="80" width="20" height="60" fill="#666" rx="2"/><text x="260" y="155" text-anchor="middle" font-size="8">magnet</text><line x1="150" y1="105" x2="150" y2="60" stroke="#1a56db" stroke-width="2"/><polygon points="147,60 150,52 153,60" fill="#1a56db"/><text x="130" y="58" font-size="9" fill="#1a56db">Normal</text><line x1="150" y1="105" x2="150" y2="150" stroke="#e33" stroke-width="2"/><polygon points="147,150 150,158 153,150" fill="#e33"/><text x="130" y="160" font-size="9" fill="#e33">Weight</text><line x1="150" y1="105" x2="220" y2="105" stroke="#090" stroke-width="2"/><polygon points="220,102 228,105 220,108" fill="#090"/><text x="190" y="95" font-size="9" fill="#090">Magnetic force</text></svg>`}
];

async function uploadQuestions() {
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('mypQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} additional MYP questions (Batch 2)`);

  // Patch images
  for (const p of imagePatches) {
    await db.collection('mypQuestions').doc(p.id).update({ image: p.image });
  }
  console.log(`✅ Patched ${imagePatches.length} questions with SVG images`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
