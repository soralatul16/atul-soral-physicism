// HW1: Kinematics Foundations — DP HL (FIXED FORMAT)
// Run: node hw1-kinematics-upload.js

const {initializeApp} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
initializeApp({projectId:'soral-atul-physicism'});
const db = getFirestore();

// ═══════════════════════════════════════════════
// SVG Diagrams
// ═══════════════════════════════════════════════

const SVG_POSITION_LINE = `<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px"><defs><marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#333"/></marker></defs><line x1="40" y1="70" x2="460" y2="70" stroke="#333" stroke-width="2" marker-end="url(#arr)"/><text x="465" y="74" font-size="13" font-family="sans-serif">x (m)</text><line x1="80" y1="65" x2="80" y2="75" stroke="#333" stroke-width="1.5"/><text x="80" y="92" font-size="11" text-anchor="middle" font-family="monospace">-20</text><line x1="140" y1="65" x2="140" y2="75" stroke="#333" stroke-width="1.5"/><text x="140" y="92" font-size="11" text-anchor="middle" font-family="monospace">-10</text><line x1="200" y1="65" x2="200" y2="75" stroke="#333" stroke-width="1.5"/><text x="200" y="92" font-size="11" text-anchor="middle" font-family="monospace">0</text><line x1="260" y1="65" x2="260" y2="75" stroke="#333" stroke-width="1.5"/><text x="260" y="92" font-size="11" text-anchor="middle" font-family="monospace">10</text><line x1="320" y1="65" x2="320" y2="75" stroke="#333" stroke-width="1.5"/><text x="320" y="92" font-size="11" text-anchor="middle" font-family="monospace">20</text><line x1="380" y1="65" x2="380" y2="75" stroke="#333" stroke-width="1.5"/><text x="380" y="92" font-size="11" text-anchor="middle" font-family="monospace">30</text><line x1="440" y1="65" x2="440" y2="75" stroke="#333" stroke-width="1.5"/><text x="440" y="92" font-size="11" text-anchor="middle" font-family="monospace">40</text><circle cx="140" cy="70" r="7" fill="#DC2626"/><text x="140" y="50" font-size="13" font-weight="bold" text-anchor="middle" fill="#DC2626" font-family="sans-serif">A</text><circle cx="380" cy="70" r="7" fill="#0D9488"/><text x="380" y="50" font-size="13" font-weight="bold" text-anchor="middle" fill="#0D9488" font-family="sans-serif">B</text><line x1="140" y1="30" x2="380" y2="30" stroke="#7C3AED" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arr)"/><text x="260" y="22" font-size="10" text-anchor="middle" fill="#7C3AED" font-family="sans-serif">displacement?</text></svg>`;

const SVG_JOURNEY_MAP = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px"><rect x="10" y="10" width="380" height="280" fill="#FAFAF8" stroke="#E5E1DC" rx="8"/><g stroke="#E5E1DC" stroke-width="0.5"><line x1="50" y1="30" x2="50" y2="270"/><line x1="110" y1="30" x2="110" y2="270"/><line x1="170" y1="30" x2="170" y2="270"/><line x1="230" y1="30" x2="230" y2="270"/><line x1="290" y1="30" x2="290" y2="270"/><line x1="350" y1="30" x2="350" y2="270"/><line x1="30" y1="50" x2="370" y2="50"/><line x1="30" y1="110" x2="370" y2="110"/><line x1="30" y1="170" x2="370" y2="170"/><line x1="30" y1="230" x2="370" y2="230"/></g><polyline points="50,230 170,230 170,110 290,110 290,230 350,230" fill="none" stroke="#0D9488" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="230" r="8" fill="#059669"/><text x="50" y="255" font-size="12" text-anchor="middle" font-weight="bold" font-family="sans-serif" fill="#059669">Start</text><circle cx="350" cy="230" r="8" fill="#DC2626"/><text x="350" y="255" font-size="12" text-anchor="middle" font-weight="bold" font-family="sans-serif" fill="#DC2626">End</text><text x="110" y="220" font-size="11" text-anchor="middle" fill="#333" font-family="monospace">2 km</text><text x="180" y="170" font-size="11" text-anchor="middle" fill="#333" font-family="monospace">2 km</text><text x="230" y="100" font-size="11" text-anchor="middle" fill="#333" font-family="monospace">2 km</text><text x="300" y="170" font-size="11" text-anchor="middle" fill="#333" font-family="monospace">2 km</text><text x="320" y="220" font-size="11" text-anchor="middle" fill="#333" font-family="monospace">1 km</text><line x1="50" y1="230" x2="350" y2="230" stroke="#7C3AED" stroke-width="2" stroke-dasharray="6,4"/><text x="200" y="275" font-size="11" text-anchor="middle" fill="#7C3AED" font-family="sans-serif">displacement = ?</text><text x="30" y="285" font-size="9" fill="#999" font-family="sans-serif">Grid: 1 square = 1 km</text></svg>`;

const SVG_DT_GRAPH = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><defs><marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#333"/></marker></defs><rect x="10" y="10" width="400" height="260" fill="#FAFAF8" stroke="#E5E1DC" rx="6"/><line x1="60" y1="230" x2="390" y2="230" stroke="#333" stroke-width="2" marker-end="url(#arr2)"/><line x1="60" y1="230" x2="60" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arr2)"/><text x="390" y="250" font-size="12" font-family="sans-serif">t (s)</text><text x="25" y="35" font-size="12" font-family="sans-serif">d (m)</text><g stroke="#E5E1DC" stroke-width="0.5"><line x1="60" y1="190" x2="380" y2="190"/><line x1="60" y1="150" x2="380" y2="150"/><line x1="60" y1="110" x2="380" y2="110"/><line x1="60" y1="70" x2="380" y2="70"/><line x1="120" y1="30" x2="120" y2="230"/><line x1="180" y1="30" x2="180" y2="230"/><line x1="240" y1="30" x2="240" y2="230"/><line x1="300" y1="30" x2="300" y2="230"/><line x1="360" y1="30" x2="360" y2="230"/></g><text x="120" y="245" font-size="10" text-anchor="middle" font-family="monospace">2</text><text x="180" y="245" font-size="10" text-anchor="middle" font-family="monospace">4</text><text x="240" y="245" font-size="10" text-anchor="middle" font-family="monospace">6</text><text x="300" y="245" font-size="10" text-anchor="middle" font-family="monospace">8</text><text x="360" y="245" font-size="10" text-anchor="middle" font-family="monospace">10</text><text x="50" y="193" font-size="10" text-anchor="end" font-family="monospace">10</text><text x="50" y="153" font-size="10" text-anchor="end" font-family="monospace">20</text><text x="50" y="113" font-size="10" text-anchor="end" font-family="monospace">30</text><text x="50" y="73" font-size="10" text-anchor="end" font-family="monospace">40</text><polyline points="60,230 180,150 240,150 360,70" fill="none" stroke="#0D9488" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="230" r="4" fill="#0D9488"/><circle cx="180" cy="150" r="4" fill="#0D9488"/><circle cx="240" cy="150" r="4" fill="#0D9488"/><circle cx="360" cy="70" r="4" fill="#0D9488"/><text x="120" y="180" font-size="10" fill="#0D9488" font-weight="bold" font-family="sans-serif">A</text><text x="210" y="140" font-size="10" fill="#0D9488" font-weight="bold" font-family="sans-serif">B</text><text x="300" y="100" font-size="10" fill="#0D9488" font-weight="bold" font-family="sans-serif">C</text></svg>`;

const SVG_VECTORS = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px"><defs><marker id="arr3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#333"/></marker><marker id="arr3r" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#DC2626"/></marker></defs><rect x="5" y="5" width="390" height="190" fill="#FAFAF8" stroke="#E5E1DC" rx="6"/><line x1="60" y1="100" x2="220" y2="100" stroke="#333" stroke-width="3" marker-end="url(#arr3)"/><text x="140" y="90" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold">3 km East</text><line x1="230" y1="100" x2="230" y2="35" stroke="#333" stroke-width="3" marker-end="url(#arr3)"/><text x="265" y="65" font-size="12" font-family="sans-serif" font-weight="bold">4 km North</text><line x1="60" y1="100" x2="227" y2="38" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="8,4" marker-end="url(#arr3r)"/><text x="120" y="55" font-size="12" fill="#DC2626" font-family="sans-serif" font-weight="bold">displacement = ?</text><path d="M 90,100 A 30,30 0 0,0 76,78" fill="none" stroke="#7C3AED" stroke-width="1.5"/><text x="100" y="82" font-size="10" fill="#7C3AED" font-family="sans-serif">θ</text><circle cx="60" cy="100" r="5" fill="#059669"/><text x="60" y="120" font-size="10" text-anchor="middle" fill="#059669" font-family="sans-serif">Start</text></svg>`;

const SVG_SPEED_TRAP = `<svg viewBox="0 0 450 150" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:450px"><rect x="5" y="5" width="440" height="140" fill="#FAFAF8" stroke="#E5E1DC" rx="6"/><rect x="30" y="60" width="390" height="40" fill="#E5E1DC" rx="4"/><line x1="30" y1="80" x2="420" y2="80" stroke="#fff" stroke-width="2" stroke-dasharray="12,8"/><rect x="80" y="65" width="40" height="20" fill="#2563EB" rx="4"/><circle cx="90" cy="88" r="5" fill="#333"/><circle cx="110" cy="88" r="5" fill="#333"/><text x="100" y="58" font-size="10" text-anchor="middle" fill="#2563EB" font-family="sans-serif" font-weight="bold">Car</text><line x1="150" y1="45" x2="150" y2="105" stroke="#DC2626" stroke-width="2" stroke-dasharray="3,2"/><text x="150" y="38" font-size="10" text-anchor="middle" fill="#DC2626" font-family="sans-serif" font-weight="bold">Sensor A</text><line x1="350" y1="45" x2="350" y2="105" stroke="#DC2626" stroke-width="2" stroke-dasharray="3,2"/><text x="350" y="38" font-size="10" text-anchor="middle" fill="#DC2626" font-family="sans-serif" font-weight="bold">Sensor B</text><line x1="150" y1="120" x2="350" y2="120" stroke="#333" stroke-width="1.5"/><line x1="150" y1="115" x2="150" y2="125" stroke="#333" stroke-width="1.5"/><line x1="350" y1="115" x2="350" y2="125" stroke="#333" stroke-width="1.5"/><text x="250" y="135" font-size="12" text-anchor="middle" font-family="monospace" font-weight="bold">d = 50.0 m</text></svg>`;

const SVG_CIRCULAR_TRACK = `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:300px"><rect x="5" y="5" width="290" height="290" fill="#FAFAF8" stroke="#E5E1DC" rx="6"/><circle cx="150" cy="150" r="100" fill="none" stroke="#E5E1DC" stroke-width="20"/><circle cx="150" cy="150" r="100" fill="none" stroke="#0D9488" stroke-width="3"/><circle cx="150" cy="50" r="8" fill="#059669"/><text x="150" y="35" font-size="11" text-anchor="middle" fill="#059669" font-weight="bold" font-family="sans-serif">Start/Finish</text><path d="M 230,80 A 100,100 0 0,1 250,150" fill="none" stroke="#333" stroke-width="2" marker-end="url(#arr3)"/><line x1="150" y1="50" x2="150" y2="250" stroke="#7C3AED" stroke-width="1.5" stroke-dasharray="5,3"/><text x="165" y="155" font-size="11" fill="#7C3AED" font-family="monospace">r = 50 m</text><text x="150" y="280" font-size="11" text-anchor="middle" fill="#333" font-family="sans-serif">400 m circular track</text></svg>`;

const SVG_ACCELERATION = `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px"><defs><marker id="arr4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="#333"/></marker></defs><rect x="10" y="10" width="400" height="230" fill="#FAFAF8" stroke="#E5E1DC" rx="6"/><line x1="60" y1="200" x2="380" y2="200" stroke="#333" stroke-width="2" marker-end="url(#arr4)"/><line x1="60" y1="200" x2="60" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arr4)"/><text x="380" y="218" font-size="12" font-family="sans-serif">t (s)</text><text x="20" y="35" font-size="12" font-family="sans-serif">v (m/s)</text><g stroke="#E5E1DC" stroke-width="0.5"><line x1="60" y1="160" x2="370" y2="160"/><line x1="60" y1="120" x2="370" y2="120"/><line x1="60" y1="80" x2="370" y2="80"/><line x1="60" y1="40" x2="370" y2="40"/><line x1="120" y1="30" x2="120" y2="200"/><line x1="180" y1="30" x2="180" y2="200"/><line x1="240" y1="30" x2="240" y2="200"/><line x1="300" y1="30" x2="300" y2="200"/><line x1="360" y1="30" x2="360" y2="200"/></g><text x="120" y="215" font-size="10" text-anchor="middle" font-family="monospace">2</text><text x="180" y="215" font-size="10" text-anchor="middle" font-family="monospace">4</text><text x="240" y="215" font-size="10" text-anchor="middle" font-family="monospace">6</text><text x="300" y="215" font-size="10" text-anchor="middle" font-family="monospace">8</text><text x="360" y="215" font-size="10" text-anchor="middle" font-family="monospace">10</text><text x="50" y="163" font-size="10" text-anchor="end" font-family="monospace">5</text><text x="50" y="123" font-size="10" text-anchor="end" font-family="monospace">10</text><text x="50" y="83" font-size="10" text-anchor="end" font-family="monospace">15</text><text x="50" y="43" font-size="10" text-anchor="end" font-family="monospace">20</text><polyline points="60,200 180,120 240,120 360,40" fill="none" stroke="#DC2626" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="200" r="4" fill="#DC2626"/><circle cx="180" cy="120" r="4" fill="#DC2626"/><circle cx="240" cy="120" r="4" fill="#DC2626"/><circle cx="360" cy="40" r="4" fill="#DC2626"/></svg>`;

// ═══════════════════════════════════════════════
// Questions — CORRECT FORMAT matching dpQuestions schema
// ═══════════════════════════════════════════════

const questions = [
  // ── MCQ Section (8 questions) ──
  {
    id: "HW1-A1-MCQ-01",
    text: "Which of the following is a vector quantity?",
    image: "",
    options: ["Distance", "Speed", "Displacement", "Time"],
    correct: 2,
    markScheme: "C. Displacement is a vector (has magnitude AND direction). Distance, speed, and time are scalars.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Scalar and vector quantities",
    commandTerm: "Identify",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 1,
    questionGroup: "HW1-A1-MCQ-01",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-02",
    text: "A runner completes exactly one lap of a 400 m circular track. What is the runner's displacement?",
    image: SVG_CIRCULAR_TRACK,
    options: ["400 m", "200 m", "0 m", "800 m"],
    correct: 2,
    markScheme: "C. After one complete lap, the runner returns to the starting point. Displacement (start → end) = 0. Distance = 400 m.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Distance and displacement",
    commandTerm: "Determine",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 2,
    questionGroup: "HW1-A1-MCQ-02",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-03",
    text: "What is the key difference between speed and velocity?",
    image: "",
    options: ["Speed is always greater than velocity", "Velocity includes direction, speed does not", "Speed is measured in km/h, velocity in m/s", "Velocity cannot be negative"],
    correct: 1,
    markScheme: "B. Speed is scalar (magnitude only). Velocity is vector (magnitude + direction). Both can be measured in any consistent unit.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Speed and velocity",
    commandTerm: "Identify",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 3,
    questionGroup: "HW1-A1-MCQ-03",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-04",
    text: "A person walks 3 km East and then 4 km North. What is the magnitude of their displacement?",
    image: SVG_VECTORS,
    options: ["7 km", "5 km", "1 km", "12 km"],
    correct: 1,
    markScheme: "B. Using Pythagoras: displacement = √(3² + 4²) = √(9 + 16) = √25 = 5 km. Distance = 3 + 4 = 7 km.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Displacement calculation",
    commandTerm: "Determine",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 4,
    questionGroup: "HW1-A1-MCQ-04",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-05",
    text: "A car travels 150 km in 2 hours, stops for 30 minutes, then travels another 90 km in 1 hour. What is the average speed for the entire journey?",
    image: "",
    options: ["80 km/h", "68.6 km/h", "75 km/h", "120 km/h"],
    correct: 1,
    markScheme: "B. Average speed = total distance / total time = (150 + 90) / (2 + 0.5 + 1) = 240/3.5 = 68.6 km/h. Include the stopped time!",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Average speed",
    commandTerm: "Calculate",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 5,
    questionGroup: "HW1-A1-MCQ-05",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-06",
    text: "A car's speedometer reads 60 km/h. This is a measurement of:",
    image: "",
    options: ["Average speed", "Average velocity", "Instantaneous speed", "Instantaneous velocity"],
    correct: 2,
    markScheme: "C. A speedometer shows the speed at that exact moment (instantaneous). It shows magnitude only (no direction), so it's speed not velocity.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Instantaneous vs average",
    commandTerm: "Identify",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 6,
    questionGroup: "HW1-A1-MCQ-06",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-07",
    text: "From the velocity-time graph, what is the acceleration during the first 4 seconds?",
    image: SVG_ACCELERATION,
    options: ["2.0 m/s²", "2.5 m/s²", "5.0 m/s²", "10 m/s²"],
    correct: 1,
    markScheme: "B. a = Δv/Δt = (10 - 0)/(4 - 0) = 10/4 = 2.5 m/s². Velocity goes from 0 to 10 m/s in 4 seconds.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Acceleration from v-t graph",
    commandTerm: "Determine",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 7,
    questionGroup: "HW1-A1-MCQ-07",
    stem: ""
  },
  {
    id: "HW1-A1-MCQ-08",
    text: "A ball is thrown vertically upward. At the highest point, its acceleration is:",
    image: "",
    options: ["Zero", "9.8 m/s² downward", "9.8 m/s² upward", "Changing from positive to negative"],
    correct: 1,
    markScheme: "B. Gravity acts constantly at 9.8 m/s² downward throughout the motion, including at the highest point. Only velocity is zero at the top, not acceleration.",
    marks: 1,
    paper: "Paper 1A",
    level: "HL",
    type: "MCQ",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Free fall acceleration",
    commandTerm: "Identify",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 8,
    questionGroup: "HW1-A1-MCQ-08",
    stem: ""
  },

  // ── Short Answer Section (5 questions) — each part is a separate doc ──
  {
    id: "HW1-A1-SA-01",
    text: "Define distance and displacement. State one key difference between them.",
    image: "",
    options: [],
    correct: -1,
    markScheme: "Distance: Total length of path travelled [1]. Scalar quantity. Displacement: Shortest straight-line distance from start to end point, with direction [1]. Vector quantity. Key difference: Distance has no direction (scalar); displacement has direction (vector).",
    marks: 2,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Definitions",
    commandTerm: "Define",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 9,
    questionGroup: "HW1-A1-SA-01",
    stem: ""
  },
  {
    id: "HW1-A1-SA-02",
    text: "A cyclist rides 5 km North in 10 minutes, then 5 km South in 15 minutes, returning to the starting point. Calculate: (a) the average speed, (b) the average velocity.",
    image: "",
    options: [],
    correct: -1,
    markScheme: "(a) Average speed = total distance / total time = 10 km / (25/60) h = 10 / 0.417 = 24 km/h [2] (b) Average velocity = displacement / time = 0 / 25 min = 0 km/h [1] (displacement = 0 since back to start)",
    marks: 3,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Average speed and velocity",
    commandTerm: "Calculate",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 10,
    questionGroup: "HW1-A1-SA-02",
    stem: ""
  },
  {
    id: "HW1-A1-SA-03",
    text: "A delivery driver follows the route shown in the diagram. Determine: (a) the total distance travelled, (b) the displacement from Start to End.",
    image: SVG_JOURNEY_MAP,
    options: [],
    correct: -1,
    markScheme: "(a) Total distance = 2 + 2 + 2 + 2 + 1 = 9 km [1] (b) Displacement = straight line from Start to End = 5 km East [1 magnitude, 1 direction]",
    marks: 3,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Distance and displacement from diagram",
    commandTerm: "Determine",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 11,
    questionGroup: "HW1-A1-SA-03",
    stem: ""
  },
  {
    id: "HW1-A1-SA-04",
    text: "Distinguish between instantaneous velocity and average velocity. Give one example of each.",
    image: "",
    options: [],
    correct: -1,
    markScheme: "Instantaneous velocity: Velocity at a specific moment in time [1]. Example: speedometer reading, velocity at t = 3s. Average velocity: Total displacement divided by total time for the whole journey [1]. Example: 'The car averaged 60 km/h for the trip.'",
    marks: 2,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Instantaneous vs average velocity",
    commandTerm: "Distinguish",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 12,
    questionGroup: "HW1-A1-SA-04",
    stem: ""
  },
  {
    id: "HW1-A1-SA-05",
    text: "A speed trap uses two sensors separated by 50.0 m. A car passes sensor A and then sensor B. The time between the signals is 2.3 s. (a) Calculate the average speed of the car. (b) Is this the same as instantaneous speed? Explain.",
    image: SVG_SPEED_TRAP,
    options: [],
    correct: -1,
    markScheme: "(a) Average speed = d/t = 50.0 / 2.3 = 21.7 m/s (≈ 78 km/h) [2] (b) Not exactly instantaneous — it's the average over 50 m [1]. It approximates instantaneous speed if the car's speed doesn't change much over that distance.",
    marks: 3,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Speed measurement",
    commandTerm: "Calculate",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 13,
    questionGroup: "HW1-A1-SA-05",
    stem: ""
  },

  // ── Structured Question (multi-part, same questionGroup) ──
  {
    id: "HW1-A1-ST-01a",
    text: "(a) Describe the motion during sections A (0–4 s), B (4–6 s), and C (6–10 s).",
    image: SVG_DT_GRAPH,
    options: [],
    correct: -1,
    markScheme: "Section A: Constant speed (straight line with positive gradient) [1]. Section B: Stationary / at rest (horizontal line, no change in distance) [1]. Section C: Constant speed, faster than A (steeper gradient) [1].",
    marks: 3,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Distance-time graph analysis",
    commandTerm: "Describe",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 14,
    questionGroup: "HW1-A1-ST-01",
    stem: "The distance-time graph shows the motion of a car over 10 seconds."
  },
  {
    id: "HW1-A1-ST-01b",
    text: "(b) Calculate the speed during section A.",
    image: "",
    options: [],
    correct: -1,
    markScheme: "Speed in A = Δd/Δt = (20 - 0)/(4 - 0) = 5 m/s [1]",
    marks: 1,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Speed from d-t graph",
    commandTerm: "Calculate",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 14,
    questionGroup: "HW1-A1-ST-01",
    stem: "The distance-time graph shows the motion of a car over 10 seconds."
  },
  {
    id: "HW1-A1-ST-01c",
    text: "(c) Calculate the speed during section C.",
    image: "",
    options: [],
    correct: -1,
    markScheme: "Speed in C = Δd/Δt = (40 - 20)/(10 - 6) = 20/4 = 5 m/s [1]",
    marks: 1,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Speed from d-t graph",
    commandTerm: "Calculate",
    difficulty: "Medium",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 14,
    questionGroup: "HW1-A1-ST-01",
    stem: "The distance-time graph shows the motion of a car over 10 seconds."
  },
  {
    id: "HW1-A1-ST-01d",
    text: "(d) During which section is the car stationary? How do you know from the graph?",
    image: "",
    options: [],
    correct: -1,
    markScheme: "Section B — the graph is flat/horizontal [1], meaning distance is not changing, so the car is not moving.",
    marks: 1,
    paper: "Paper 2",
    level: "HL",
    type: "Short Answer",
    topic: "A.1",
    topicName: "Kinematics",
    subtopic: "Interpreting d-t graph",
    commandTerm: "Identify",
    difficulty: "Easy",
    year: "HW1",
    session: "Homework",
    tz: "",
    qNum: 14,
    questionGroup: "HW1-A1-ST-01",
    stem: "The distance-time graph shows the motion of a car over 10 seconds."
  }
];

// ═══════════════════════════════════════════════
// Upload: Delete old broken ones, then upload correct format
// ═══════════════════════════════════════════════

async function upload() {
  console.log("🗑️  Deleting old broken questions...");
  const oldIds = ['hw1-mcq-01','hw1-mcq-02','hw1-mcq-03','hw1-mcq-04','hw1-mcq-05','hw1-mcq-06','hw1-mcq-07','hw1-mcq-08','hw1-short-01','hw1-short-02','hw1-short-03','hw1-short-04','hw1-short-05','hw1-struct-01'];
  await Promise.all(oldIds.map(id => db.collection('dpQuestions').doc(id).delete()));
  await db.collection('dpAssignments').doc('hw1-kinematics').delete();
  console.log("  ✓ Old questions deleted\n");

  console.log("📚 Uploading HW1 Kinematics (correct format)...\n");
  const questionIds = [];

  for (const q of questions) {
    await db.collection('dpQuestions').doc(q.id).set({
      ...q,
      createdAt: Date.now()
    });
    questionIds.push(q.id);
    console.log(`  ✓ ${q.id} (${q.type}, ${q.marks} mark${q.marks > 1 ? 's' : ''})`);
  }

  // Create assignment
  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
  await db.collection('dpAssignments').doc('hw1-kinematics').set({
    title: "HW1: Kinematics Foundations",
    description: "Motion, position, scalars & vectors, distance, displacement, speed, velocity, and acceleration.",
    programme: "DP",
    level: "HL",
    topic: "A.1 Kinematics",
    questionIds: questionIds,
    totalMarks: totalMarks,
    questionCount: questions.length,
    dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    createdAt: Date.now(),
    status: "active",
    allowOnline: true,
    allowOffline: true,
    onlineMessage: "Your work will be AI-graded within 24 hours and you will be notified with detailed feedback.",
    offlineMessage: "Offline submissions will not be graded. Please complete on paper and discuss with your teacher.",
    assignedTo: [],
    createdBy: "teacher"
  });

  console.log(`\n✅ Done! "HW1: Kinematics Foundations"`);
  console.log(`   Total: ${questions.length} questions, ${totalMarks} marks`);
  console.log(`   MCQ: ${questions.filter(q => q.type === 'MCQ').length} | Written: ${questions.filter(q => q.type === 'Short Answer').length}`);
  console.log(`\n🎯 Refresh your DP Question Bank — filter by A.1 + HL to see them.`);
  process.exit(0);
}

upload().catch(e => { console.error("❌ Error:", e.message); process.exit(1); });
