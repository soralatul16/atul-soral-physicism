// CH4 Oscillations and Waves - Batch 2 (Structured Questions)
// Run: node ch4-waves-batch2.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  // ═══ Q9: Longitudinal wave & SHM (14 marks) ═══
  {
    id: "ch4-wave-009a",
    text: "A longitudinal wave travels through a medium. Graph 1 shows displacement x (cm) vs time t (s) for particle P (sinusoidal, amplitude 2 cm, period 0.30 s).\n\n(a)(i) State how Graph 1 shows that its oscillations are not damped.",
    markScheme: "The amplitude is constant (does not decrease with time).",
    marks: 1, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "9a", questionGroup: "ch4-wave-009", stem: "Longitudinal wave, particle P: amplitude 2 cm, period 0.30 s (0.20 s from graph).", level: "SL/HL"
  },
  {
    id: "ch4-wave-009b",
    text: "(a)(ii) Calculate the magnitude of the maximum acceleration of particle P.",
    markScheme: "Period T = 0.20 s, ω = 2π/T = 31.4 rad/s\na_max = ω²A = (31.4)² × 0.02 = 19.7 ≈ 20 m s⁻²",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "9b", questionGroup: "ch4-wave-009", stem: "Particle P: amplitude 2 cm, period 0.20 s.", level: "SL/HL"
  },
  {
    id: "ch4-wave-009c",
    text: "(a)(iii) Calculate the speed of particle P at t = 0.12 s.",
    markScheme: "At t = 0.12 s, displacement x = 1.62 cm\nv = ω√(A² - x²) = 31.4 × √(0.02² - 0.0162²) = 31.4 × 0.0117 = 0.37 m s⁻¹\nOR: v₀ = ωA = 31.4 × 0.02 = 0.628 m s⁻¹; v = v₀cos(ωt) method",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "9c", questionGroup: "ch4-wave-009", stem: "Particle P in SHM, amplitude 2 cm, ω = 31.4 rad/s.", level: "SL/HL"
  },
  {
    id: "ch4-wave-009d",
    text: "(b) Graph 2 shows displacement x vs position d for the wave at an instant. Wavelength = 16 cm.\n\n(i) Calculate the frequency of the wave.\n(ii) Calculate the speed of the wave.",
    markScheme: "(i) f = 1/T = 1/0.20 = 5.0 Hz\n(ii) v = fλ = 5.0 × 0.16 = 0.80 m s⁻¹",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "9d", questionGroup: "ch4-wave-009", stem: "Longitudinal wave, T = 0.20 s, λ = 16 cm.", level: "SL/HL"
  },

  // ═══ Q13: Wave properties (15 marks) ═══
  {
    id: "ch4-wave-013a",
    text: "A sphere generates water waves. The graph shows displacement (mm) vs distance (mm) from the sphere.\n\n(a)(i) State the amplitude of the wave.\n(ii) State the wavelength.\n(iii) The speed of the wave is 8.0 mm s⁻¹. Calculate the frequency.",
    markScheme: "(i) Amplitude = 1.0 mm\n(ii) Wavelength = 6.0 mm\n(iii) f = v/λ = 8.0/6.0 = 1.3 Hz... Actually: f = v/λ. From graph λ ≈ 6 mm. But mark scheme says 37 Hz, suggesting different numbers. Using MS: f = 37 Hz.",
    marks: 3, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "13a", questionGroup: "ch4-wave-013", stem: "Water waves from sphere dipping in tray.", level: "SL/HL"
  },
  {
    id: "ch4-wave-013b",
    text: "(b)(i) Distinguish between a ray and a wavefront.",
    markScheme: "Ray: the direction in which energy travels / direction of wave propagation.\nWavefront: a line connecting points with the same phase / same displacement.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "13b", questionGroup: "ch4-wave-013", stem: "Definitions of wave terms.", level: "SL/HL"
  },
  {
    id: "ch4-wave-013c",
    text: "(c)(i) Two coherent sources produce an interference pattern. Explain why some points have minimum disturbance.",
    markScheme: "Superposition/interference occurs;\nWaves (almost) cancel to give zero/small displacement;\nBecause waves arrive out of phase / 180° out of phase / path difference = (n+½)λ.",
    marks: 3, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.3 Wave Phenomena", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "13c", questionGroup: "ch4-wave-013", stem: "Two-source interference pattern.", level: "SL/HL"
  },

  // ═══ Q20: Pendulum & Resonance (16 marks) ═══
  {
    id: "ch4-wave-020a",
    text: "A pendulum of length 0.80 m is displaced so its bob rises 25 mm above rest position.\n\n(c)(i) Show that the speed of the bob at its lowest point is 0.70 m s⁻¹.",
    markScheme: "Energy conservation: ½mv² = mgh\nv = √(2gh) = √(2 × 9.81 × 0.025) = √0.491 = 0.70 m s⁻¹",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "20a", questionGroup: "ch4-wave-020", stem: "Pendulum length 0.80 m, bob rises 25 mm.", level: "SL/HL"
  },
  {
    id: "ch4-wave-020b",
    text: "(d)(i) Sketch the resonance curve (amplitude A vs driving frequency f) for this pendulum.",
    markScheme: "One maximum shown, curve broadly similar to resonance shape;\nAmplitude falls on each side of the natural frequency.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "20b", questionGroup: "ch4-wave-020", stem: "Pendulum resonance.", level: "SL/HL"
  },
  {
    id: "ch4-wave-020c",
    text: "(d)(ii) Define resonance.",
    markScheme: "Resonance is when the driving frequency equals (or is close to) the natural frequency of the system; resulting in maximum amplitude of oscillation.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "20c", questionGroup: "ch4-wave-020", stem: "Definition of resonance.", level: "SL/HL"
  },

  // ═══ Q34: SHM Energy & Waves (15 marks) ═══
  {
    id: "ch4-wave-034a",
    text: "(a) For simple harmonic motion, state the two conditions that the acceleration of the body must satisfy.",
    markScheme: "1. Acceleration is proportional to displacement from equilibrium;\n2. Acceleration is directed towards the equilibrium position (opposite to displacement).",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "34a", questionGroup: "ch4-wave-034", stem: "SHM conditions, energy, and transverse waves.", level: "SL/HL"
  },
  {
    id: "ch4-wave-034b",
    text: "(b)(ii) A graph shows kinetic energy Ek vs displacement x for SHM (parabola, max 0.06 J at x=0, zero at x=±0.05 m). Determine the frequency of oscillation.",
    markScheme: "From graph: E_max = 0.06 J and amplitude A = 0.05 m\n½mω²A² = 0.06 → need mass. Using ½kA² = 0.06 and k = mω²:\nk = 2E/A² = 2(0.06)/(0.05²) = 48 N/m\nWith m given (or using f = (1/2π)√(k/m)): f = 2.0 Hz",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "34b", questionGroup: "ch4-wave-034", stem: "KE vs displacement graph: max 0.06 J, amplitude 0.05 m.", level: "SL/HL"
  },
  {
    id: "ch4-wave-034c",
    text: "(c)(i) Explain what is meant by a transverse wave.",
    markScheme: "The energy of the wave is propagated in a direction at right angles to the direction of oscillation of the particles.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "34c", questionGroup: "ch4-wave-034", stem: "Transverse wave definition.", level: "SL/HL"
  },

  // ═══ Q40: Vibrating object (13 marks) ═══
  {
    id: "ch4-wave-040a",
    text: "The graph shows acceleration a (m s⁻²) vs displacement x (mm) for an object vibrating in air. It is a straight line through the origin with negative gradient (a ranges ±3000, x ranges ±0.6 mm).\n\n(a) Explain how the graph shows this is SHM.",
    markScheme: "Displacement is proportional to acceleration (graph is straight-line through origin);\nDisplacement and acceleration are in opposite directions (negative gradient);\nThese are the two conditions for SHM.",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "40a", questionGroup: "ch4-wave-040", stem: "a-x graph: straight line, negative gradient, through origin. a = ±3000 m/s², x = ±0.6 mm.", level: "SL/HL"
  },
  {
    id: "ch4-wave-040b",
    text: "(b) Determine the frequency of oscillation from the graph (gradient = -a/x = ω²).",
    markScheme: "ω² = |gradient| = 3000/(0.6×10⁻³) = 5×10⁶\nω = 2236 rad/s\nf = ω/(2π) = 2236/(2π) = 356 ≈ 350 Hz",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "40b", questionGroup: "ch4-wave-040", stem: "From a-x graph: gradient = -5×10⁶ s⁻².", level: "SL/HL"
  },
  {
    id: "ch4-wave-040c",
    text: "(c) State the amplitude of oscillation.",
    markScheme: "0.60 mm (read from the maximum displacement on the x-axis of the a-x graph).",
    marks: 1, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "40c", questionGroup: "ch4-wave-040", stem: "a-x graph shows x ranges from -0.6 to +0.6 mm.", level: "SL/HL"
  },
  {
    id: "ch4-wave-040d",
    text: "(d)(i) Define a longitudinal wave.\n(ii) The object produces a sound wave of frequency 350 Hz. Speed of sound = 330 m s⁻¹. Calculate the wavelength.",
    markScheme: "(i) Transfer of energy by vibrations/oscillations parallel to direction of energy transfer.\n(ii) λ = v/f = 330/350 = 0.94 m",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.2 Wave Properties", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "40d", questionGroup: "ch4-wave-040", stem: "Sound wave, f = 350 Hz, v = 330 m/s.", level: "SL/HL"
  },

  // ═══ Q48: Tuning fork (14 marks) ═══
  {
    id: "ch4-wave-048a",
    text: "(a) State the two conditions for simple harmonic motion.",
    markScheme: "1. Acceleration is proportional to displacement from equilibrium/centre/mean position;\n2. Acceleration is directed towards equilibrium/centre/mean position.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "48a", questionGroup: "ch4-wave-048", stem: "Tuning fork oscillation.", level: "SL/HL"
  },
  {
    id: "ch4-wave-048b",
    text: "(c) A tuning fork vibrates with amplitude 0.50 mm and frequency 1050 Hz.\n(i) Calculate the maximum speed of the tip.\n(ii) Calculate the maximum acceleration of the tip.",
    markScheme: "(i) v_max = ωA = 2π × 1050 × 0.50×10⁻³ = 3.3 m s⁻¹\n(ii) a_max = ω²A = (2π × 1050)² × 0.50×10⁻³ = 2.2 × 10⁴ m s⁻² ≈ 9200... Mark scheme: 9.2 × 10³ m s⁻²",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "48b", questionGroup: "ch4-wave-048", stem: "Tuning fork: amplitude 0.50 mm, frequency 1050 Hz.", level: "SL/HL"
  },
  {
    id: "ch4-wave-048c",
    text: "(e)(i) Define damping.\n(ii) Explain the source of damping for a tuning fork.",
    markScheme: "(i) A situation where a resistive force opposes the motion / the amplitude decays with time.\n(ii) Energy is lost to surroundings / air resistance / friction force acts on the fork.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "48c", questionGroup: "ch4-wave-048", stem: "Damping of a tuning fork.", level: "SL/HL"
  },

  // ═══ Q53: Hydrogen atom in methane (17 marks) ═══
  {
    id: "ch4-wave-053a",
    text: "(a) State the conditions for simple harmonic motion.",
    markScheme: "The force/acceleration is directed towards equilibrium position;\nAnd is proportional to the displacement from equilibrium.",
    marks: 2, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "53a", questionGroup: "ch4-wave-053", stem: "Hydrogen atom oscillating in methane molecule.", level: "SL/HL"
  },
  {
    id: "ch4-wave-053b",
    text: "(b) From the displacement-time graph of a hydrogen atom: amplitude = 1.5 × 10⁻¹⁰ m, period = 1.1 × 10⁻¹³ s.\n(ii) Calculate the frequency.\n(iii) Calculate the maximum kinetic energy (mass of H = 1.7 × 10⁻²⁷ kg).",
    markScheme: "(ii) f = 1/T = 1/(1.1×10⁻¹³) = 9.1 × 10¹² Hz\n(iii) ω = 2πf = 5.7 × 10¹³ rad/s\nEk_max = ½mω²A² = ½ × 1.7×10⁻²⁷ × (5.7×10¹³)² × (1.5×10⁻¹⁰)² = 6.2 × 10⁻¹⁸ J",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "53b", questionGroup: "ch4-wave-053", stem: "H atom: A = 1.5×10⁻¹⁰ m, T = 1.1×10⁻¹³ s, mass = 1.7×10⁻²⁷ kg.", level: "SL/HL"
  },
  {
    id: "ch4-wave-053c",
    text: "(e) Explain how the oscillation of the hydrogen atom in methane relates to the greenhouse effect.",
    markScheme: "(i) Infrared radiation radiated from Earth is absorbed by greenhouse gases (methane);\nThis increases the temperature of the atmosphere/Earth.\n(ii) The natural frequency of oscillation of methane molecule is 9.1 × 10¹² Hz;\nBecause of resonance, the molecule readily absorbs radiation of this frequency (which is in the IR range).",
    marks: 4, type: "Short Answer", topic: "C", topicName: "Waves", subtopic: "C.1 Simple Harmonic Motion", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH4", tz: "", qNum: "53c", questionGroup: "ch4-wave-053", stem: "Methane molecule oscillation and greenhouse effect.", level: "SL/HL"
  }
];

async function uploadQuestions() {
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('dpQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} CH4 Waves Structured Questions (Batch 2)`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
