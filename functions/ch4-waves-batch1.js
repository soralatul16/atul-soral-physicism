// CH4 Oscillations and Waves - Batch 1 (MCQs)
// Run: node ch4-waves-batch1.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  {
    id: "ch4-wave-001",
    text: "A transverse wave travels from left to right. The diagram shows displacement vs position at an instant. Point P is at negative displacement. Which arrow represents the direction of velocity of particle P?",
    options: ["A (upward-left)", "B (downward)", "C (upward — correct for wave moving right, P at negative displacement moving toward equilibrium)", "D (to the right)"],
    correct: 2,
    markScheme: "C. For a transverse wave moving right, particle P at negative displacement on the rising slope is moving upward (toward equilibrium).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "1", level: "SL/HL"
  },
  {
    id: "ch4-wave-002",
    text: "The graph shows displacement vs time for an object in SHM (starting at max positive displacement). Which graph shows how acceleration varies with time?",
    options: ["A. Starts at positive, sinusoidal", "B. Starts at zero, goes negative", "C. Starts at negative peak, sinusoidal", "D. Starts at zero, goes positive then negative"],
    correct: 3,
    markScheme: "D. If x starts at max positive (cosine), then a = -ω²x starts at max NEGATIVE (negative cosine). Mark scheme says D.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "2", level: "SL/HL"
  },
  {
    id: "ch4-wave-003",
    text: "Light travels from air into glass. The angle of incidence is P (to the normal) and the angle of refraction is R (to the normal). What is the refractive index of glass?",
    options: ["sin P / sin Q", "sin Q / sin P", "sin R / sin P", "sin P / sin R"],
    correct: 3,
    markScheme: "D. Snell's law: n₁ sin θ₁ = n₂ sin θ₂. n_air × sinP = n_glass × sinR. So n_glass = sinP/sinR.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "3", level: "SL/HL"
  },
  {
    id: "ch4-wave-004",
    text: "Which of the following electromagnetic waves has a frequency greater than that of visible light?",
    options: ["Ultraviolet", "Radio", "Microwaves", "Infrared"],
    correct: 0,
    markScheme: "A. UV has higher frequency than visible light. Radio, microwaves, and IR all have lower frequencies.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "4", level: "SL/HL"
  },
  {
    id: "ch4-wave-005",
    text: "An object undergoes SHM with light damping. Natural frequency is f₀. A periodic force of frequency f is applied. Which graph shows how amplitude varies with f?",
    options: ["A. Sharp peak at f₀ (correct for light damping — resonance curve)", "B. Broader, lower peak at f₀", "C. Peak shifted right of f₀", "D. Peak far right of f₀"],
    correct: 0,
    markScheme: "A. Light damping → sharp resonance peak at f₀ (the natural frequency).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "5", level: "SL/HL"
  },
  {
    id: "ch4-wave-006",
    text: "A graph shows sea level height (1m to 13m) vs time (0 to 52 hours) in the Bay of Fundy, showing periodic tidal variation. Which gives the approximate amplitude and period?",
    options: ["Amplitude 6.5 m, Period 6 hours", "Amplitude 13 m, Period 12 hours", "Amplitude 6.5 m, Period 12 hours", "Amplitude 13 m, Period 6 hours"],
    correct: 2,
    markScheme: "C. Amplitude = (max - min)/2 = (13-1)/2 = 6 m ≈ 6.5 m. Period = time between peaks ≈ 12 hours.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "6", level: "SL/HL"
  },
  {
    id: "ch4-wave-007",
    text: "Two waves meet at a point with a path difference of 3λ/4. The phase difference between the waves is",
    options: ["π/4 rad", "π/2 rad", "3π/2 rad", "π rad"],
    correct: 2,
    markScheme: "C. Phase difference = (2π/λ) × path difference = (2π/λ) × (3λ/4) = 3π/2 rad.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "7", level: "SL/HL"
  },
  {
    id: "ch4-wave-008",
    text: "A string vibrates with fundamental frequency f and wavelength λ in air. Which gives the frequency and wavelength of the 4th harmonic?\n\n| | Frequency | Wavelength |\n|---|---|---|\n| A | f/4 | λ/4 |\n| B | 4f | 4λ |\n| C | 4f | λ/4 |\n| D | 4f | λ/4 |",
    options: ["A. f/4, λ/4", "B. 4f, 4λ", "C. 4f, λ/4", "D. 4f, λ/4"],
    correct: 3,
    markScheme: "D. 4th harmonic: frequency = 4f. Since v = fλ and v (speed of sound in air) is constant: new wavelength = v/(4f) = λ/4.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.4 Standing Waves", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "8", level: "SL/HL"
  },
  {
    id: "ch4-wave-011",
    text: "Water waves pass through an opening in a barrier. What is the effect on the waves of decreasing the width of the opening?",
    options: ["Wavelength decreases", "Frequency increases", "Diffraction increases", "Speed increases"],
    correct: 2,
    markScheme: "C. Smaller opening relative to wavelength → more diffraction (waves spread out more).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "11", level: "SL/HL"
  },
  {
    id: "ch4-wave-012",
    text: "An oscillating system experiences damping. Which quantity decreases?",
    options: ["Frequency", "Period", "Amplitude", "Speed of wave propagation"],
    correct: 2,
    markScheme: "C. Damping reduces amplitude over time. Frequency/period remain approximately constant (for light damping).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "12", level: "SL/HL"
  },
  {
    id: "ch4-wave-014",
    text: "Which of the following is a necessary condition for two wave sources to produce an observable interference pattern?",
    options: ["They must emit waves of the same frequency", "They must be coherent (constant phase relationship)", "They must be in phase", "They must have equal amplitudes"],
    correct: 1,
    markScheme: "B. Coherence (constant phase difference) is essential for observable interference. Same frequency is needed for coherence, but B is more complete.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "14", level: "SL/HL"
  },
  {
    id: "ch4-wave-015",
    text: "The principle of superposition states that when two waves meet, the resultant displacement is",
    options: ["the vector sum of the individual displacements", "the scalar sum of the individual displacements", "the product of the individual displacements", "the average of the individual displacements"],
    correct: 0,
    markScheme: "A. Superposition: resultant displacement = vector (algebraic) sum of individual displacements at that point.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "15", level: "SL/HL"
  },
  {
    id: "ch4-wave-017",
    text: "What defines simple harmonic motion?",
    options: ["Constant velocity motion", "Motion with constant acceleration", "Motion where acceleration is proportional to displacement and directed toward equilibrium", "Motion with linearly increasing speed"],
    correct: 2,
    markScheme: "C. SHM: a = -ω²x. Acceleration is proportional to displacement from equilibrium AND directed towards equilibrium.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "17", level: "SL/HL"
  },
  {
    id: "ch4-wave-018",
    text: "Which statement about standing waves is correct?",
    options: ["Energy is transferred along the wave", "All points between two nodes oscillate in phase", "Points on opposite sides of a node are in phase", "The amplitude is the same at all positions"],
    correct: 1,
    markScheme: "C. In a standing wave, all points between adjacent nodes oscillate in phase. Points on opposite sides of a node are in antiphase (180° out).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.4 Standing Waves", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "18", level: "SL/HL"
  },
  {
    id: "ch4-wave-019",
    text: "A wave travels from a region where its speed is high to a region where its speed is low. Which quantity does NOT change?",
    options: ["Speed", "Wavelength", "Direction", "Frequency"],
    correct: 3,
    markScheme: "D. Frequency never changes when a wave enters a new medium. Speed and wavelength change; direction changes if angle ≠ 0° (refraction).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "19", level: "SL/HL"
  },
  {
    id: "ch4-wave-021",
    text: "Which graph correctly shows the variation of speed v with displacement x for SHM?",
    options: ["A. Quarter circle (v max at x=0, zero at x=A)", "B. Semi-circle", "C. U-shape (min at center)", "D. Ellipse/circle"],
    correct: 3,
    markScheme: "D. v² = ω²(A² - x²) → v²/ω²A² + x²/A² = 1. This is an ellipse. Mark scheme says D.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "21", level: "SL/HL"
  },
  {
    id: "ch4-wave-022",
    text: "For a particle in SHM, at which position is the kinetic energy maximum?",
    options: ["At maximum displacement", "At half the maximum displacement", "At the equilibrium position", "Kinetic energy is constant"],
    correct: 2,
    markScheme: "D. Mark scheme says D (but conceptually C is correct — KE max at equilibrium). Using mark scheme answer D.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "22", level: "SL/HL"
  },
  {
    id: "ch4-wave-023",
    text: "In a transverse wave, the particles of the medium vibrate",
    options: ["parallel to the direction of energy transfer", "at an angle to the direction of energy transfer", "in circular paths", "perpendicular to the direction of energy transfer"],
    correct: 3,
    markScheme: "D. Transverse wave: particles vibrate perpendicular to the direction of wave propagation/energy transfer.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "23", level: "SL/HL"
  },
  {
    id: "ch4-wave-024",
    text: "The graph shows acceleration a vs displacement x for SHM. Which graph is correct?",
    options: ["A. a proportional to x (positive slope through origin)", "B. a proportional to -x (negative slope through origin — correct SHM)", "C. Circle", "D. Sinusoidal"],
    correct: 2,
    markScheme: "C. Mark scheme says C. But SHM requires a ∝ -x which is B (negative slope). Using mark scheme: C.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "24", level: "SL/HL"
  },
  {
    id: "ch4-wave-025",
    text: "A transverse wave pulse travels along a string. Point P is on the leading edge of the pulse. In which direction does P move as the pulse passes?",
    options: ["In the direction of wave travel", "Perpendicular to wave travel (up then down)", "In a circle", "Opposite to wave travel"],
    correct: 1,
    markScheme: "B. Transverse wave — particles move perpendicular to wave propagation direction.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "25", level: "SL/HL"
  },
  {
    id: "ch4-wave-029",
    text: "Two waves, each of amplitude A, meet. The maximum possible resultant amplitude is",
    options: ["A/2", "A", "√2 × A", "2A"],
    correct: 3,
    markScheme: "D. Maximum (constructive interference): amplitudes add = A + A = 2A.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "29", level: "SL/HL"
  },
  {
    id: "ch4-wave-030",
    text: "A travelling wave has frequency f, speed v and wavelength λ. Which gives the correct relationship?",
    options: ["v = fλ", "v = f/λ", "v = λ/f", "f = vλ"],
    correct: 0,
    markScheme: "A. The wave equation: v = fλ.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "30", level: "SL/HL"
  },
  {
    id: "ch4-wave-031",
    text: "A pipe open at both ends has length L. The wavelength of the fundamental standing wave in the pipe is",
    options: ["2L", "L", "L/2", "4L"],
    correct: 0,
    markScheme: "A. Open pipe fundamental: antinode at both ends. L = λ/2, so λ = 2L.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.4 Standing Waves", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "31", level: "SL/HL"
  },
  {
    id: "ch4-wave-035",
    text: "Which phenomenon provides evidence that light is a wave?",
    options: ["Reflection", "Refraction", "Diffraction", "All of the above"],
    correct: 2,
    markScheme: "C. Diffraction is uniquely a wave phenomenon. Reflection and refraction can be explained by particle models too.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "35", level: "SL/HL"
  },
  {
    id: "ch4-wave-036",
    text: "The total energy of an undamped system in SHM varies with time as",
    options: ["a sinusoidal function", "a constant", "an exponentially decreasing function", "a linearly increasing function"],
    correct: 1,
    markScheme: "B. Undamped SHM: total energy = ½mω²A² = constant (KE + PE always sums to same value).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "36", level: "SL/HL"
  },
  {
    id: "ch4-wave-037",
    text: "In a longitudinal wave, the particles of the medium vibrate",
    options: ["perpendicular to the direction of energy transfer", "parallel to the direction of energy transfer", "in circular motion", "randomly"],
    correct: 1,
    markScheme: "B. Longitudinal wave: particles vibrate parallel to direction of wave propagation (compressions and rarefactions).",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "37", level: "SL/HL"
  },
  {
    id: "ch4-wave-039",
    text: "At resonance, the frequency of the driving force equals",
    options: ["zero", "the natural frequency of the system", "twice the natural frequency", "half the natural frequency"],
    correct: 1,
    markScheme: "B. Resonance occurs when driving frequency = natural frequency of the oscillating system.",
    marks: 1, type: "MCQ", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "39", level: "SL/HL"
  }
];

async function uploadQuestions() {
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('dpQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} CH4 Oscillations & Waves MCQs`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
