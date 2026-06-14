// CH2 Mechanics - Batch 3: Structured Questions (multi-part)
// Run: node ch2-mechanics-batch3.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  // ═══ Q9: Ball falling with air resistance (14 marks) ═══
  {
    id: "ch2-mech-009a",
    text: "The graph shows the variation with time t of the speed v of a ball of mass 0.50 kg, that has been released from rest above the Earth's surface. The force of air resistance is not negligible. g = 9.81 m s⁻².\n\n(a) State, without any calculations, how the graph could be used to determine the distance fallen.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#fff"/><line x1="50" y1="210" x2="370" y2="210" stroke="#000" stroke-width="1.5"/><line x1="50" y1="210" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><text x="210" y="240" text-anchor="middle" font-size="12">t / s</text><text x="15" y="115" text-anchor="middle" font-size="12" transform="rotate(-90,15,115)">v / ms⁻¹</text><text x="50" y="225" font-size="10">0</text><text x="115" y="225" font-size="10">2</text><text x="210" y="225" font-size="10">5</text><text x="370" y="225" font-size="10">10</text><text x="40" y="150" font-size="10" text-anchor="end">10</text><text x="40" y="50" font-size="10" text-anchor="end">25</text><path d="M 50,210 C 80,180 100,160 115,150 C 150,120 200,80 250,60 C 300,45 350,40 370,38" fill="none" stroke="#1a56db" stroke-width="2"/></svg>`,
    markScheme: "The area under the curve (gives the distance fallen).",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9a",
    questionGroup: "ch2-mech-009",
    stem: "Ball of mass 0.50 kg released from rest, air resistance not negligible, g = 9.81 m s⁻².",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-009b",
    text: "(b)(ii) Use the graph to show that the acceleration of the ball at 2.0 s is approximately 4 m s⁻².",
    markScheme: "Drawing of tangent to curve at t = 2.0 s;\nCalculation of slope of tangent in range 3.6–4.4 m s⁻².",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9b",
    questionGroup: "ch2-mech-009",
    stem: "Ball of mass 0.50 kg released from rest, air resistance not negligible, g = 9.81 m s⁻².",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-009c",
    text: "(b)(iii) Calculate the magnitude of the force of air resistance on the ball at 2.0 s.",
    markScheme: "F_net = ma = 0.50 × 4 = 2 N\nR = mg - ma = 0.50 × 9.81 - 0.50 × 4 ≈ 3 N",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9c",
    questionGroup: "ch2-mech-009",
    stem: "Ball of mass 0.50 kg released from rest, air resistance not negligible, g = 9.81 m s⁻². Acceleration at 2.0 s is 4 m s⁻².",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-009d",
    text: "(b)(iv) State and explain whether the air resistance on the ball at t = 5.0 s is smaller than, equal to or greater than the air resistance at t = 2.0 s.",
    markScheme: "The acceleration is decreasing (gradient of graph is less);\nTherefore net force is less, but weight unchanged, so R must be greater.\nOR: Air resistance increases with speed; since speed at 5.0 s is greater, resistance is greater.",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9d",
    questionGroup: "ch2-mech-009",
    stem: "Ball of mass 0.50 kg falling with air resistance.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-009e",
    text: "(c)(i) After 10 s the ball has fallen 190 m. Show that the sum of the potential and kinetic energies of the ball has decreased by 780 J.",
    markScheme: "Loss of PE = mgh = 0.50 × 9.81 × 190 = 932 J\nGain in KE = ½mv² = ½ × 0.50 × 25² = 156 J\nLoss of mechanical energy = 932 - 156 ≈ 780 J",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9e",
    questionGroup: "ch2-mech-009",
    stem: "Ball of mass 0.50 kg, after 10 s has fallen 190 m, speed at 10 s is 25 m/s.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-009f",
    text: "(c)(ii) The specific heat capacity of the ball is 480 J kg⁻¹ K⁻¹. Estimate the increase in the temperature of the ball.",
    markScheme: "mcΔθ = 780 J\nΔθ = 780 / (0.50 × 480) ≈ 3 K (or 3°C)",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "9f",
    questionGroup: "ch2-mech-009",
    stem: "780 J of energy dissipated, ball mass 0.50 kg, specific heat capacity 480 J kg⁻¹ K⁻¹.",
    level: "SL/HL"
  },

  // ═══ Q16: Kinematics - cliff throw (5 marks) ═══
  {
    id: "ch2-mech-016a",
    text: "Lucy stands on the edge of a vertical cliff and throws a stone vertically upwards. The stone leaves her hand with a speed of 15 m s⁻¹ at the instant her hand is 80 m above the surface of the sea. Air resistance is negligible and g = 10 m s⁻².\n\n(a) Calculate the maximum height reached by the stone as measured from the point where it is thrown.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 300"><rect width="250" height="300" fill="#fff"/><rect x="0" y="50" width="100" height="250" fill="#8B7355"/><rect x="0" y="260" width="250" height="40" fill="#4a90d9" opacity="0.4"/><line x1="100" y1="50" x2="100" y2="260" stroke="#000" stroke-width="1" stroke-dasharray="4"/><text x="115" y="160" font-size="11">80 m</text><circle cx="80" cy="50" r="5" fill="#333"/><line x1="80" y1="50" x2="80" y2="20" stroke="#e33" stroke-width="2" marker-end="url(#arr)"/><text x="90" y="35" font-size="11" fill="#e33">15 ms⁻¹</text><text x="125" y="275" font-size="11" fill="#4a90d9">sea surface</text></svg>`,
    markScheme: "v² = u² - 2gs → 0 = 15² - 2(10)s\ns = 225/20 = 11.25 m ≈ 11 m",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "16a",
    questionGroup: "ch2-mech-016",
    stem: "Stone thrown upward at 15 m s⁻¹ from 80 m above sea. g = 10 m s⁻².",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-016b",
    text: "(b) Determine the time for the stone to reach the surface of the sea after leaving Lucy's hand.",
    markScheme: "Using s = ut + ½at²:\n-80 = 15t - 5t²\n5t² - 15t - 80 = 0 → t² - 3t - 16 = 0\nt = (3 + √(9+64))/2 = (3 + √73)/2 = (3 + 8.54)/2 = 5.8 s\nOR: Time to max = 15/10 = 1.5 s; height at max = 80 + 11.25 = 91.25 m;\nTime to fall 91.25 m: 91.25 = ½(10)t² → t = 4.27 s; Total = 1.5 + 4.27 = 5.8 s",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "16b",
    questionGroup: "ch2-mech-016",
    stem: "Stone thrown upward at 15 m s⁻¹ from 80 m above sea. g = 10 m s⁻².",
    level: "SL/HL"
  },

  // ═══ Q22: Kicking a football (10 marks) ═══
  {
    id: "ch2-mech-022a",
    text: "A ball is suspended from a ceiling by a string of length 7.5 m. The ball is kicked horizontally and rises to a maximum height of 6.0 m.\n\n(a) Assuming that air resistance is negligible, show that the initial speed of the ball is 11 m s⁻¹.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280"><rect width="300" height="280" fill="#fff"/><line x1="150" y1="10" x2="150" y2="10" stroke="#000" stroke-width="3"/><rect x="100" y="5" width="100" height="8" fill="#666"/><line x1="150" y1="13" x2="150" y2="163" stroke="#333" stroke-width="1.5"/><circle cx="150" cy="168" r="10" fill="#4a90d9"/><line x1="150" y1="13" x2="80" y2="93" stroke="#333" stroke-width="1.5" stroke-dasharray="4"/><circle cx="80" cy="98" r="8" fill="#4a90d9" opacity="0.5"/><text x="165" y="95" font-size="11">7.5 m</text><line x1="60" y1="98" x2="60" y2="168" stroke="#e33" stroke-width="1" stroke-dasharray="3"/><text x="30" y="135" font-size="11" fill="#e33">6.0 m</text></svg>`,
    markScheme: "At max height, all KE → PE:\n½mv² = mgh\nv = √(2gh) = √(2 × 9.81 × 6.0) = √117.7 = 10.85 ≈ 11 m s⁻¹",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "22a",
    questionGroup: "ch2-mech-022",
    stem: "Ball on 7.5 m string, kicked horizontally, rises 6.0 m. Mass = 0.55 kg.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-022b",
    text: "(b) The mass of the ball is 0.55 kg and the impact time of the kicker's foot with the ball is 150 ms. Estimate the average force exerted on the ball by the kick.",
    markScheme: "F = Δp/Δt = mv/Δt = (0.55 × 11) / 0.150 ≈ 40 N",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "22b",
    questionGroup: "ch2-mech-022",
    stem: "Ball mass 0.55 kg, initial speed 11 m s⁻¹, contact time 150 ms.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-022c",
    text: "(c)(i) Explain why the tension in the string increases immediately after the ball is kicked.",
    markScheme: "Ball accelerates towards centre of circular path;\nTherefore force towards centre is needed (centripetal force);\nTension must exceed weight to provide this upward centripetal force.",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "22c",
    questionGroup: "ch2-mech-022",
    stem: "Ball on string kicked horizontally, begins circular motion.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-022d",
    text: "(c)(ii) Calculate the tension in the string immediately after the ball is kicked. Assume that the string is vertical.",
    markScheme: "Centripetal force: F = mv²/r = 0.55 × 11² / 7.5 = 8.9 N\nWeight = mg = 0.55 × 9.81 = 5.4 N\nTension = F + W = 8.9 + 5.4 = 14 N (approx)",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "22d",
    questionGroup: "ch2-mech-022",
    stem: "Ball on 7.5 m string, speed 11 m s⁻¹, mass 0.55 kg, string vertical.",
    level: "SL/HL"
  },

  // ═══ Q39: Land speed record (6 marks) ═══
  {
    id: "ch2-mech-039a",
    text: "In 1997 a high-speed car of mass 1.1 × 10⁴ kg achieved the world land speed record. The car accelerated uniformly in two stages:\n• Stage 1: 0.0 – 4.0 s, speed reached 44 m s⁻¹\n• Stage 2: 4.0 – 12 s, speed reached 280 m s⁻¹\nThe car started from rest.\n\n(a) Calculate the average acceleration of the car in stage 1.",
    markScheme: "a = Δv/Δt = 44/4.0 = 11 m s⁻²",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "39a",
    questionGroup: "ch2-mech-039",
    stem: "Car mass 1.1 × 10⁴ kg. Stage 1: 0-4s → 44 m/s. Stage 2: 4-12s → 280 m/s.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-039b",
    text: "(b) Calculate the average net force required to accelerate the car in stage 2.",
    markScheme: "Δv = 280 - 44 = 236 m s⁻¹\na = 236/8 = 29.5 m s⁻²\nF = ma = 1.1 × 10⁴ × 29.5 = 3.2 × 10⁵ N",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "39b",
    questionGroup: "ch2-mech-039",
    stem: "Car mass 1.1 × 10⁴ kg. Stage 2: 4.0 – 12 s, speed from 44 to 280 m s⁻¹.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-039c",
    text: "(c) Calculate the total distance travelled by the car in 12 s.",
    markScheme: "Stage 1: s = ½(0+44)×4 = 88 m\nStage 2: s = ½(44+280)×8 = 1296 m\nTotal = 88 + 1296 = 1384 ≈ 1400 m",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "39c",
    questionGroup: "ch2-mech-039",
    stem: "Car accelerates uniformly in two stages over 12 s total.",
    level: "SL/HL"
  },

  // ═══ Q50: Impulse (9 marks) ═══
  {
    id: "ch2-mech-050a",
    text: "A net force of magnitude F acts on a body.\n\n(a) Define the impulse I of the force.",
    markScheme: "I = FΔt where Δt is the time for which the force acts (OR: impulse = change in momentum).",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "50a",
    questionGroup: "ch2-mech-050",
    stem: "Questions about impulse and momentum.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-050b",
    text: "(b)(i) A ball of mass 0.0750 kg is travelling horizontally with a speed of 2.20 m s⁻¹. It strikes a vertical wall and rebounds horizontally. Due to the collision, 20% of the ball's initial kinetic energy is dissipated.\n\nShow that the ball rebounds from the wall with a speed of 1.97 m s⁻¹.",
    markScheme: "Initial KE = ½ × 0.075 × 2.20² = 0.182 J\n80% remains: 0.80 × 0.182 = 0.1452 J\n½mv² = 0.1452 → v = √(2 × 0.1452/0.075) = √3.872 = 1.97 m s⁻¹",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "50b",
    questionGroup: "ch2-mech-050",
    stem: "Ball mass 0.0750 kg, speed 2.20 m s⁻¹, 20% KE dissipated on collision.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-050c",
    text: "(b)(ii) Show that the impulse given to the ball by the wall is 0.313 N s.",
    markScheme: "Δp = m(u + v) = 0.075 × (2.20 + 1.97) = 0.075 × 4.17 = 0.313 N s\n(Ball reverses direction so momenta add)",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "50c",
    questionGroup: "ch2-mech-050",
    stem: "Ball mass 0.0750 kg, rebounds at 1.97 m s⁻¹ from 2.20 m s⁻¹.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-050d",
    text: "(c) The force F that the wall exerts on the ball varies with time as a triangle (linearly increases to F_max at t=T/2 then decreases to 0 at t=T). The time T is measured to be 0.0894 s.\n\nUse the impulse to estimate the average value of F.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 180"><rect width="300" height="180" fill="#fff"/><line x1="50" y1="150" x2="270" y2="150" stroke="#000" stroke-width="1.5"/><line x1="50" y1="150" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><text x="160" y="175" text-anchor="middle" font-size="12">t</text><text x="25" y="85" text-anchor="middle" font-size="12" transform="rotate(-90,25,85)">F</text><text x="50" y="165" font-size="10">0</text><text x="270" y="165" font-size="10">T</text><polyline points="50,150 160,30 270,150" fill="none" stroke="#1a56db" stroke-width="2"/></svg>`,
    markScheme: "Area under F-t graph = impulse = ½ × F_max × T = 0.313\nF_max = 2 × 0.313 / 0.0894 = 7.00 N\nAverage force = F_max/2 = 3.50 N\nOR: Impulse = F_avg × Δt → F_avg = 0.313/0.0894 = 3.50 N",
    marks: 4,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "50d",
    questionGroup: "ch2-mech-050",
    stem: "Impulse = 0.313 N s, contact time T = 0.0894 s, triangular force-time graph.",
    level: "SL/HL"
  },

  // ═══ Q23: Dragging a load (8 marks) ═══
  {
    id: "ch2-mech-023a",
    text: "An athlete trains by dragging a heavy load across a rough horizontal surface. The athlete exerts a force of magnitude F at an angle of 25° to the horizontal.\n\n(a) Once the load is moving at steady speed, the average horizontal frictional force is 470 N. Calculate the average value of F.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><rect width="300" height="150" fill="#fff"/><rect x="50" y="80" width="50" height="40" fill="#8B7355" rx="5"/><line x1="50" y1="120" x2="300" y2="120" stroke="#000" stroke-width="2"/><line x1="100" y1="95" x2="200" y2="60" stroke="#e33" stroke-width="2" marker-end="url(#arr)"/><text x="160" y="55" font-size="12" fill="#e33">F</text><path d="M 130 87 A 30 30 0 0 1 140 80" fill="none" stroke="#333" stroke-width="1"/><text x="150" y="92" font-size="11">25°</text></svg>`,
    markScheme: "At constant speed: F cos25° = 470 (horizontal equilibrium)\nF = 470 / cos25° = 470 / 0.906 = 519 ≈ 520 N",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "23a",
    questionGroup: "ch2-mech-023",
    stem: "Athlete drags load at 25° to horizontal, constant speed, friction = 470 N.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-023b",
    text: "(b)(i) The load is moved a horizontal distance of 2.5 km in 1.2 hours. Calculate the work done on the load by the force F.",
    markScheme: "Work = F cos25° × d = 470 × 2500 = 1.175 × 10⁶ ≈ 1.2 MJ\n(Using the horizontal component × horizontal distance)",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "23b",
    questionGroup: "ch2-mech-023",
    stem: "Load moved 2.5 km in 1.2 hours, friction force 470 N.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-023c",
    text: "(b)(ii) Calculate the minimum average power required to move the load.",
    markScheme: "Power = Work/time = 1.175 × 10⁶ / (1.2 × 3600) = 1.175 × 10⁶ / 4320 ≈ 270 W",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "23c",
    questionGroup: "ch2-mech-023",
    stem: "Work done ≈ 1.2 MJ, time = 1.2 hours.",
    level: "SL/HL"
  }
];

async function uploadQuestions() {
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('dpQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} CH2 Mechanics Structured Questions (Batch 3)`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
