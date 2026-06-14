// CH2 Mechanics - Batch 4: Remaining Structured Questions
// Run: node ch2-mechanics-batch4.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  // ═══ Q10: Circular motion - ball on string (7 marks) ═══
  {
    id: "ch2-mech-010a",
    text: "A ball of mass 0.25 kg is attached to a string and is made to rotate with constant speed v along a horizontal circle of radius r = 0.33 m. The string is attached to the ceiling and makes an angle of 30° with the vertical.\n\n(a)(ii) State and explain whether the ball is in equilibrium.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250"><rect width="300" height="250" fill="#fff"/><rect x="100" y="10" width="100" height="8" fill="#666"/><line x1="150" y1="18" x2="100" y2="180" stroke="#333" stroke-width="1.5"/><circle cx="100" cy="185" r="10" fill="#4a90d9"/><path d="M 150 50 L 150 18" stroke="#333" stroke-width="0.8" stroke-dasharray="3"/><path d="M 145 40 A 20 20 0 0 0 140 55" fill="none" stroke="#333" stroke-width="1"/><text x="135" y="55" font-size="11">30°</text><text x="55" y="195" font-size="11">ball</text><line x1="100" y1="185" x2="180" y2="185" stroke="#999" stroke-width="0.8" stroke-dasharray="3"/><text x="140" y="200" font-size="11">r = 0.33 m</text><text x="155" y="30" font-size="10">vertical</text></svg>`,
    markScheme: "No, the ball is NOT in equilibrium;\nBecause the two forces on the ball can never cancel out / there is a net force on the ball / the ball moves in a circle / the ball has acceleration (it is changing direction).",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "10a",
    questionGroup: "ch2-mech-010",
    stem: "Ball of mass 0.25 kg on string, horizontal circle radius 0.33 m, string at 30° to vertical.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-010b",
    text: "(b) Determine the speed of rotation of the ball.",
    markScheme: "T cos30° = mg → T = mg/cos30° = (0.25 × 9.81)/cos30° = 2.83 N\nT sin30° = mv²/r\n2.83 × sin30° = 0.25 × v²/0.33\n1.415 = 0.758v²\nv² = 1.87\nv = 1.4 m s⁻¹",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "10b",
    questionGroup: "ch2-mech-010",
    stem: "Ball of mass 0.25 kg on string, horizontal circle radius 0.33 m, string at 30° to vertical.",
    level: "SL/HL"
  },

  // ═══ Q14: Bus on incline (17 marks) ═══
  {
    id: "ch2-mech-014a",
    text: "A bus is travelling at a constant speed of 6.2 m s⁻¹ along a section of road that is inclined at 6.0° to the horizontal.\n\n(a)(ii) State the value of the rate of change of momentum of the bus.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200"><rect width="350" height="200" fill="#fff"/><line x1="30" y1="170" x2="320" y2="100" stroke="#333" stroke-width="2"/><rect x="140" y="88" width="50" height="30" fill="#4a90d9" rx="3" transform="rotate(-12,165,103)"/><path d="M 70 170 A 60 60 0 0 1 95 155" fill="none" stroke="#333" stroke-width="1"/><text x="95" y="168" font-size="11">6.0°</text><text x="220" y="85" font-size="11">6.2 m s⁻¹ →</text></svg>`,
    markScheme: "Zero (constant speed means constant momentum, so rate of change = 0).",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14a",
    questionGroup: "ch2-mech-014",
    stem: "Bus mass 8.5 × 10³ kg, constant speed 6.2 m s⁻¹, incline 6.0°.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-014b",
    text: "(b) The total output power of the engine of the bus is 70 kW and the efficiency of the engine is 35%. Calculate the input power to the engine.",
    markScheme: "Efficiency = output/input\n0.35 = 70000/input\nInput power = 70000/0.35 = 200 kW",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14b",
    questionGroup: "ch2-mech-014",
    stem: "Bus engine output 70 kW, efficiency 35%.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-014c",
    text: "(c) The mass of the bus is 8.5 × 10³ kg. Determine the rate of increase of gravitational potential energy of the bus.",
    markScheme: "Height gained per second = v sinθ = 6.2 × sin6° = 0.648 m/s\nRate of PE increase = mgh/t = mg × (v sinθ) = 8.5×10³ × 9.81 × 0.648 = 5.4 × 10⁴ W",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14c",
    questionGroup: "ch2-mech-014",
    stem: "Bus mass 8.5 × 10³ kg, speed 6.2 m s⁻¹, incline 6.0°.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-014d",
    text: "(d) Using your answer to (c) and the data in (b), estimate the magnitude of the resistive forces acting on the bus.",
    markScheme: "Power used against friction = total output - PE rate = 70000 - 54000 = 16000 W\nF = P/v = 16000/6.2 = 2600 N ≈ 2.6 kN",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14d",
    questionGroup: "ch2-mech-014",
    stem: "Bus output power 70 kW, PE rate ≈ 54 kW, speed 6.2 m s⁻¹.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-014e",
    text: "(e)(i) The engine suddenly stops working. Determine the magnitude of the net force opposing the motion of the bus at the instant the engine stops.",
    markScheme: "Component of weight down slope = mg sinθ = 8.5×10³ × 9.81 × sin6° = 8710 N\nNet force = resistive force + weight component = 2600 + 8710 ≈ 11 kN",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14e",
    questionGroup: "ch2-mech-014",
    stem: "Bus on 6° incline, resistive force 2.6 kN, mass 8.5 × 10³ kg, engine stops.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-014f",
    text: "(e)(ii) Discuss, with reference to air resistance, the change in the net force as the bus slows down.",
    markScheme: "Air resistance decreases as speed drops;\nSo net (decelerating) force decreases.",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "14f",
    questionGroup: "ch2-mech-014",
    stem: "Bus decelerating on incline after engine stops.",
    level: "SL/HL"
  },

  // ═══ Q33: Momentum, energy and power - ball & spike (15 marks) ═══
  {
    id: "ch2-mech-033a",
    text: "(a) In his Principia Mathematica Newton expressed his third law as 'to every action there is always opposed an equal reaction'. State what Newton meant by this law.",
    markScheme: "When a force acts on a body, an equal and opposite force acts on another body / In the interaction between two bodies A and B, the force that A exerts on B is equal and opposite to the force that B exerts on A.",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33a",
    questionGroup: "ch2-mech-033",
    stem: "Questions about Newton's third law, momentum conservation, and collisions.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-033b",
    text: "(b) A book is released from rest and falls towards the surface of Earth. Discuss how the conservation of momentum applies to the Earth-book system.",
    markScheme: "Forces on Earth and book are equal and opposite / no external force acts on the system;\nChanges in momentum of Earth and book are equal and opposite;\nHence total momentum of Earth-book system stays the same (always zero) and so is conserved.",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33b",
    questionGroup: "ch2-mech-033",
    stem: "Book falling towards Earth — momentum conservation.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-033c",
    text: "A large swinging ball of mass 3.5 kg falls through a vertical height of 1.6 m before striking a spike of mass 0.80 kg. After striking, ball and spike move together.\n\n(c)(i) Show that the speed of the ball on striking the spike is 5.6 m s⁻¹.",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 220"><rect width="300" height="220" fill="#fff"/><rect x="240" y="60" width="60" height="160" fill="#8B7355"/><circle cx="100" cy="50" r="20" fill="#333"/><line x1="100" y1="30" x2="100" y2="10" stroke="#333" stroke-width="1.5"/><text x="60" y="55" font-size="10" fill="#fff">3.5 kg</text><line x1="100" y1="70" x2="100" y2="170" stroke="#e33" stroke-width="1" stroke-dasharray="4"/><text x="110" y="125" font-size="11">1.6 m</text><circle cx="100" cy="175" r="18" fill="#333" opacity="0.4"/><rect x="200" y="130" width="40" height="10" fill="#999"/><text x="200" y="155" font-size="10">0.80 kg</text><text x="250" y="145" font-size="10">wall</text></svg>`,
    markScheme: "v = √(2gh) = √(2 × 9.81 × 1.6) = √31.4 = 5.6 m s⁻¹",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33c",
    questionGroup: "ch2-mech-033",
    stem: "Ball mass 3.5 kg falls 1.6 m, strikes spike mass 0.80 kg.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-033d",
    text: "(c)(ii) Show that the energy dissipated as a result of the collision is about 10 J.",
    markScheme: "Conservation of momentum: 3.5 × 5.6 = (3.5 + 0.80) × V\nV = 19.6/4.3 = 4.56 m s⁻¹\nKE before = ½ × 3.5 × 5.6² = 54.9 J\nKE after = ½ × 4.3 × 4.56² = 44.7 J\nEnergy dissipated = 54.9 - 44.7 = 10.2 ≈ 10 J",
    marks: 4,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33d",
    questionGroup: "ch2-mech-033",
    stem: "Ball 3.5 kg at 5.6 m s⁻¹ hits spike 0.80 kg, they move together.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-033e",
    text: "(d) As a result of the collision, the spike is driven a distance 7.3 × 10⁻² m into the wall. Calculate, assuming it to be constant, the friction force F between the spike and the wall.",
    markScheme: "KE of ball+spike after collision = ½ × 4.3 × 4.56² = 44.7 J\nWork done against friction: F × d = KE\nF = 44.7 / 0.073 = 612 ≈ 620 N",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33e",
    questionGroup: "ch2-mech-033",
    stem: "Ball+spike (4.3 kg) at 4.56 m s⁻¹, spike driven 7.3 × 10⁻² m into wall.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-033f",
    text: "(e) The machine used to raise the ball has a useful power output of 18 W. Calculate how long it takes for the machine to raise the ball through 1.6 m.",
    markScheme: "Work needed = mgh = 3.5 × 9.81 × 1.6 = 54.9 J\nTime = Work/Power = 54.9/18 = 3.1 s",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "33f",
    questionGroup: "ch2-mech-033",
    stem: "Machine power 18 W, ball mass 3.5 kg, raised 1.6 m.",
    level: "SL/HL"
  },

  // ═══ Q51: Ball falling in oil (11 marks) ═══
  {
    id: "ch2-mech-051a",
    text: "(a) Distinguish between average speed and instantaneous speed.",
    markScheme: "Average speed is the total distance travelled divided by the total time taken;\nInstantaneous speed is the rate of change of distance at a given instant in time.",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "51a",
    questionGroup: "ch2-mech-051",
    stem: "Ball of mass M dropped from rest into oil.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-051b",
    text: "(b) A small steel ball of mass M is dropped from rest into oil. The speed v varies with time t (curve approaching terminal velocity). Explain how you would use the graph to find the average speed between t = 0 and t = t₁.",
    markScheme: "Find the area under the graph between t = 0 and t = t₁;\nThis equals the distance travelled;\nAverage speed = distance/t₁ = (area under curve)/t₁.",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "51b",
    questionGroup: "ch2-mech-051",
    stem: "Ball of mass M in oil, speed-time graph given.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-051c",
    text: "(c) The gradient of the graph at t = t₁ is k. Deduce an expression in terms of k, M and g for the magnitude of the frictional force F acting on the ball at t = t₁.",
    markScheme: "Acceleration at t₁ = k (gradient of v-t graph);\nNet force = Mg - F = Mk (Newton's second law);\nF = M(g - k)",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "51c",
    questionGroup: "ch2-mech-051",
    stem: "Ball mass M in oil, gradient at t₁ is k.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-051d",
    text: "(d) State and explain the magnitude of the frictional force acting on the ball at t = t₂ (where the ball has reached terminal velocity).",
    markScheme: "Net force = 0 (since acceleration is zero at terminal velocity);\nTherefore Mg - F = 0;\nFrictional force = Mg (equals the weight).",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "51d",
    questionGroup: "ch2-mech-051",
    stem: "Ball at terminal velocity in oil.",
    level: "SL/HL"
  },

  // ═══ Q67: Bicycle forces (12 marks) ═══
  {
    id: "ch2-mech-067a",
    text: "A bicycle and cyclist travel at constant velocity along a horizontal road.\n\n(a)(i) State the value of the net force acting on the cyclist.",
    markScheme: "Zero (constant velocity → zero net force by Newton's first law).",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67a",
    questionGroup: "ch2-mech-067",
    stem: "Bicycle + cyclist at constant velocity on horizontal road. Total resistive force 40 N, speed 8.0 m s⁻¹, total mass 70 kg.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-067b",
    text: "(a)(iii) With reference to the horizontal forces, explain why the system is travelling at constant velocity.",
    markScheme: "Drag/friction force = driving force/thrust (forward force equals backward resistive force);\nNet force = zero therefore acceleration is zero (constant velocity).",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67b",
    questionGroup: "ch2-mech-067",
    stem: "Bicycle + cyclist at constant velocity.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-067c",
    text: "(b) The total resistive force acting on the system is 40 N and its speed is 8.0 m s⁻¹. Calculate the useful power output of the cyclist.",
    markScheme: "P = Fv = 40 × 8.0 = 320 W",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67c",
    questionGroup: "ch2-mech-067",
    stem: "Resistive force 40 N, speed 8.0 m s⁻¹.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-067d",
    text: "(c)(i) The cyclist stops pedalling. The total mass is 70 kg. Calculate the magnitude of the initial deceleration.",
    markScheme: "a = F/m = 40/70 = 0.57 m s⁻²",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67d",
    questionGroup: "ch2-mech-067",
    stem: "Cyclist stops pedalling, mass 70 kg, resistive force 40 N.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-067e",
    text: "(c)(ii) Estimate the distance taken by the system to come to rest from the time the cyclist stops pedalling.",
    markScheme: "v² = u² + 2as → 0 = 8² + 2(-0.57)s\ns = 64/1.14 = 56 m",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.1 Kinematics",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67e",
    questionGroup: "ch2-mech-067",
    stem: "Initial speed 8.0 m s⁻¹, deceleration 0.57 m s⁻².",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-067f",
    text: "(c)(iii) State and explain one reason why your answer to (c)(ii) is only an estimate.",
    markScheme: "Air resistance varies with speed (decreases as cyclist slows);\nSo actual deceleration decreases over time, meaning the distance is longer than calculated (underestimate).",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "67f",
    questionGroup: "ch2-mech-067",
    stem: "Cyclist decelerating, air resistance varies with speed.",
    level: "SL/HL"
  },

  // ═══ Q70: Iron ball on crane (10 marks) ═══
  {
    id: "ch2-mech-070a",
    text: "A solid iron ball of mass 770 kg is suspended by a rope from a crane. The distance from the point of suspension to the centre of mass is 12 m.\n\n(a) Calculate the tension in the rope when the ball hangs vertical and stationary.",
    markScheme: "T = mg = 770 × 9.81 = 7500 N (≈ 7.5 kN)",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "70a",
    questionGroup: "ch2-mech-070",
    stem: "Iron ball 770 kg on rope from crane, suspension length 12 m.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-070b",
    text: "(b)(i) The ball is pulled back and released. It falls through a vertical height of 1.6 m and strikes a wall. Calculate the speed of the ball just before impact.",
    markScheme: "v = √(2gh) = √(2 × 9.81 × 1.6) = √31.4 = 5.6 m s⁻¹",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.3 Work, Energy and Power",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "70b",
    questionGroup: "ch2-mech-070",
    stem: "Ball falls through 1.6 m on pendulum.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-070c",
    text: "(b)(ii) Calculate the tension in the rope just before impact.",
    markScheme: "Centripetal acceleration = v²/r = 5.6²/12 = 2.61 m s⁻²\nAt bottom of swing: T - mg = mv²/r\nT = mg + mv²/r = 770(9.81 + 2.61) = 770 × 12.42 = 9560 ≈ 9500 N",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "70c",
    questionGroup: "ch2-mech-070",
    stem: "Ball 770 kg, speed 5.6 m s⁻¹, rope length 12 m, at bottom of swing.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-070d",
    text: "(c)(i) The ball is brought to rest by the wall in 0.15 s. State what quantity is represented by the area under the force-time graph.",
    markScheme: "Impulse / change in momentum.",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "70d",
    questionGroup: "ch2-mech-070",
    stem: "Ball hits wall, force-time graph (triangular shape).",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-070e",
    text: "(c)(ii) Determine the maximum force F_max exerted by the ball on the wall.",
    markScheme: "Impulse = Δp = mv = 770 × 5.6 = 4312 N s\nArea of triangle = ½ × F_max × t\n½ × F_max × 0.15 = 4312\nF_max = 4312 × 2 / 0.15 = 57500 ≈ 57 kN",
    marks: 3,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "70e",
    questionGroup: "ch2-mech-070",
    stem: "Ball 770 kg, speed 5.6 m s⁻¹, stopped in 0.15 s, triangular force profile.",
    level: "SL/HL"
  },

  // ═══ Q32: Circular motion + greenhouse (7 marks) ═══
  {
    id: "ch2-mech-032a",
    text: "A car is travelling at constant speed of 18 m s⁻¹ around a horizontal bend. The mass is 1.5 × 10³ kg and the bend has radius 2.0 × 10³ m.\n\n(a)(i) State why the car is accelerating.",
    markScheme: "The velocity/direction is changing (even though speed is constant, velocity changes direction in circular motion).",
    marks: 1,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "32a",
    questionGroup: "ch2-mech-032",
    stem: "Car mass 1.5×10³ kg, speed 18 m s⁻¹, radius 2.0×10³ m.",
    level: "SL/HL"
  },
  {
    id: "ch2-mech-032b",
    text: "(a)(ii) Determine the frictional force between the tyres and the road that produces the acceleration.",
    markScheme: "F = mv²/r = (1.5×10³ × 18²) / (2.0×10³) = (1500 × 324) / 2000 = 243 ≈ 240 N",
    marks: 2,
    type: "Short Answer",
    topic: "A",
    topicName: "Mechanics",
    subtopic: "A.2 Forces and Momentum",
    difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH2", tz: "", qNum: "32b",
    questionGroup: "ch2-mech-032",
    stem: "Car mass 1.5×10³ kg, speed 18 m s⁻¹, radius 2.0×10³ m.",
    level: "SL/HL"
  }
];

async function uploadQuestions() {
  // Firestore batch limit is 500, we're well under
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('dpQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} CH2 Mechanics Structured Questions (Batch 4)`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
