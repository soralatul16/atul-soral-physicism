// CH3 Thermal Physics - Full batch
// Run: node ch3-thermal-batch1.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const questions = [
  // ═══ MCQs ═══
  {
    id: "ch3-therm-001",
    text: "A solid piece of tungsten melts into liquid without a change in temperature. Which of the following is correct for the molecules in the liquid phase compared with the molecules in the solid phase?\n\n| | Kinetic energy | Potential energy |\n|---|---|---|\n| A | same | greater |\n| B | same | same |\n| C | greater | greater |\n| D | greater | same |",
    options: ["A. KE same, PE greater", "B. KE same, PE same", "C. KE greater, PE greater", "D. KE greater, PE same"],
    correct: 0,
    markScheme: "A. During melting (constant temperature): KE stays the same (temperature unchanged). PE increases (bonds partially broken, molecules move further apart).",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "1", level: "SL/HL"
  },
  {
    id: "ch3-therm-002",
    text: "What is the mass of carbon-12 that contains the same number of atoms as 14 g of silicon-28?",
    options: ["6 g", "12 g", "14 g", "24 g"],
    correct: 0,
    markScheme: "A. 14 g of Si-28 = 14/28 = 0.5 mol. 0.5 mol of C-12 = 0.5 × 12 = 6 g.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "2", level: "SL/HL"
  },
  {
    id: "ch3-therm-003",
    text: "A heater of constant power heats a liquid of mass m and specific heat capacity c. The graph shows temperature increasing linearly with time. The gradient of the graph is k and no energy is lost. What is the power of the heater?",
    options: ["kmc", "k/(mc)", "mc/k", "km/c"],
    correct: 0,
    markScheme: "A. P = mcΔT/Δt = mc × (gradient) = mc × k = kmc.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "3", level: "SL/HL"
  },
  {
    id: "ch3-therm-005",
    text: "The energy of the molecules of an ideal gas is",
    options: ["thermal only", "thermal and potential", "potential and kinetic", "kinetic only"],
    correct: 3,
    markScheme: "D. Ideal gas molecules have no intermolecular forces, so no potential energy. Their energy is purely kinetic.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "5", level: "SL/HL"
  },
  {
    id: "ch3-therm-006",
    text: "Oil with volume V has specific heat capacity c at temperature T. The density of oil is ρ. Which of the following is the thermal capacity of the oil?",
    options: ["ρcV", "c/(ρV)", "ρcVT", "cV/ρ"],
    correct: 0,
    markScheme: "A. Thermal capacity = mc. Mass = ρV. So thermal capacity = ρVc = ρcV.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "6", level: "SL/HL"
  },
  {
    id: "ch3-therm-007",
    text: "The volume of an ideal gas in a container is increased at constant temperature. Which statements are correct?\nI. Their speed remains constant.\nII. The frequency of collisions with unit area of wall decreases.\nIII. The force between them decreases.",
    options: ["I only", "I and II only", "I and III only", "II and III only"],
    correct: 1,
    markScheme: "B. At constant T: speed is unchanged (I correct). Larger volume means fewer collisions per unit area (II correct). Ideal gas has no forces between molecules (III not applicable/wrong).",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "7", level: "SL/HL"
  },
  {
    id: "ch3-therm-009",
    text: "Two objects are in thermal contact with each other. Which of the following will determine the direction of the transfer of thermal energy between the bodies?",
    options: ["The mass of each body", "The area of contact between the bodies", "The specific heat capacity of each body", "The temperature of each body"],
    correct: 3,
    markScheme: "D. Thermal energy always flows from higher temperature to lower temperature. Temperature determines the direction.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "9", level: "SL/HL"
  },
  {
    id: "ch3-therm-010",
    text: "The mole is defined as",
    options: ["the mass of an atom of the isotope carbon-12", "the amount of substance that contains as many elementary entities as the number of atoms in 12 g of carbon-12", "the mass of one atom of the isotope carbon-12", "the amount of substance that contains as many nuclei as the number of nuclei in 12 g of carbon-12"],
    correct: 1,
    markScheme: "B. The mole is defined as the amount of substance containing as many entities as there are atoms in 12 g of carbon-12 (Avogadro's number).",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "10", level: "SL/HL"
  },
  {
    id: "ch3-therm-011",
    text: "A gas is contained in a cylinder by a piston. The gas is compressed rapidly. The best explanation for the resulting increase in temperature is that the molecules gain kinetic energy",
    options: ["from the moving piston", "by colliding more frequently with each other", "by being pushed closer together", "by colliding more frequently with the walls of the cylinder"],
    correct: 0,
    markScheme: "A. When the piston moves in, molecules bouncing off the moving piston gain kinetic energy (like a ball bouncing off a moving bat). Work is done ON the gas.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "11", level: "SL/HL"
  },
  {
    id: "ch3-therm-014",
    text: "Water at 0°C is kept in a thermally insulated container. A lump of ice, also at 0°C, is placed in the water and completely submerged.\n\n| | Net ice that melts | Change in water temperature |\n|---|---|---|\n| A | all will melt | no change |\n| B | some will melt | decrease |\n| C | none will melt | no change |\n| D | all will melt | decrease |",
    options: ["A. all melts, no temp change", "B. some melts, temp decreases", "C. none melts, no temp change", "D. all melts, temp decreases"],
    correct: 2,
    markScheme: "C. Both at same temperature (0°C) → no temperature difference → no heat flow → no melting occurs. System is in thermal equilibrium.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "14", level: "SL/HL"
  },
  {
    id: "ch3-therm-016",
    text: "A box at rest contains a fixed quantity of ideal gas with internal energy U and temperature T. The box is now made to move at constant speed. Which gives the change in internal energy and temperature of the gas after moving for some time?\n\n| | Internal energy | Temperature |\n|---|---|---|\n| A | no change | no change |\n| B | no change | increase |\n| C | increase | no change |\n| D | increase | increase |",
    options: ["A. no change / no change", "B. no change / increase", "C. increase / no change", "D. increase / increase"],
    correct: 0,
    markScheme: "A. Internal energy of an ideal gas depends only on temperature. The box moving doesn't add random KE to molecules — it adds ordered KE. Temperature and internal energy are unchanged.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "16", level: "SL/HL"
  },
  {
    id: "ch3-therm-018",
    text: "For two objects to be in thermal equilibrium they must",
    options: ["be in contact with each other", "radiate equal amounts of power", "have the same thermal capacity", "be at the same temperature"],
    correct: 3,
    markScheme: "D. Thermal equilibrium means no net heat flow between objects, which requires them to be at the same temperature.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "18", level: "SL/HL"
  },
  {
    id: "ch3-therm-022",
    text: "Which of the following is an assumption made in the kinetic model of ideal gases?",
    options: ["Molecules have zero mass", "Forces between molecules are attractive", "Collisions between molecules are elastic", "Molecules move at high speed"],
    correct: 2,
    markScheme: "C. Key assumptions of kinetic theory include: elastic collisions (KE conserved), no intermolecular forces, random motion, negligible volume of molecules.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "22", level: "SL/HL"
  },
  {
    id: "ch3-therm-024",
    text: "An ice cube and an iceberg are both at 0°C. Which is correct for average random KE and total KE of molecules?\n\n| | Average random KE | Total KE |\n|---|---|---|\n| A | same | same |\n| B | same | different |\n| C | different | same |\n| D | different | different |",
    options: ["A. same / same", "B. same / different", "C. different / same", "D. different / different"],
    correct: 1,
    markScheme: "B. Same temperature → same average random KE. But iceberg has far more molecules → much greater total KE.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "24", level: "SL/HL"
  },
  {
    id: "ch3-therm-025",
    text: "A temperature of 23 K is equivalent to a temperature of",
    options: ["–300 °C", "–250 °C", "+250 °C", "+300 °C"],
    correct: 1,
    markScheme: "B. T(°C) = T(K) - 273 = 23 - 273 = -250 °C.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "25", level: "SL/HL"
  },
  {
    id: "ch3-therm-027",
    text: "In the kinetic model of an ideal gas, it is assumed that",
    options: ["the forces between molecules and the container are always zero", "the intermolecular potential energy of the molecules is constant", "the kinetic energy of a given molecule is constant", "the momentum of a given molecule is constant"],
    correct: 1,
    markScheme: "B. In ideal gas: no intermolecular forces → PE is constant (zero). Individual molecules change KE/momentum in collisions, but average stays constant.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "27", level: "SL/HL"
  },
  {
    id: "ch3-therm-030",
    text: "Two objects near each other are at the same temperature. Which statement has to be true?",
    options: ["The objects have the same internal energy", "The objects have the same thermal capacity", "No thermal energy is exchanged between the objects", "The net thermal energy exchanged between the objects is zero"],
    correct: 3,
    markScheme: "D. At same temperature, objects may still exchange thermal radiation, but NET exchange is zero (thermal equilibrium). C is wrong because exchange still occurs — just net is zero.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "30", level: "SL/HL"
  },
  {
    id: "ch3-therm-031",
    text: "The temperature of an ideal gas is a measure of the molecules' average",
    options: ["velocity", "momentum", "kinetic energy", "frequency of collisions"],
    correct: 2,
    markScheme: "C. Temperature is directly proportional to average kinetic energy of molecules: ½m<v²> = (3/2)kT.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "31", level: "SL/HL"
  },
  {
    id: "ch3-therm-033",
    text: "Which row shows the correct conversion between Kelvin and Celsius?\n\n| | Kelvin / K | Celsius / °C |\n|---|---|---|\n| A | 0 | 373 |\n| B | 100 | –173 |\n| C | 173 | 100 |\n| D | 373 | –100 |",
    options: ["A. 0 K = 373 °C", "B. 100 K = –173 °C", "C. 173 K = 100 °C", "D. 373 K = –100 °C"],
    correct: 1,
    markScheme: "B. T(°C) = T(K) - 273. So 100 K = 100 - 273 = -173 °C. ✓",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "33", level: "SL/HL"
  },
  {
    id: "ch3-therm-034",
    text: "Carbon has relative atomic mass 12 and oxygen has relative atomic mass 16. A sample of 6 g of carbon has twice as many atoms as",
    options: ["32 g of oxygen", "8 g of oxygen", "4 g of oxygen", "3 g of oxygen"],
    correct: 2,
    markScheme: "C. 6g C = 6/12 = 0.5 mol. Half of 0.5 = 0.25 mol O. Mass = 0.25 × 16 = 4 g oxygen.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.3 Gas Laws", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "34", level: "SL/HL"
  },
  {
    id: "ch3-therm-037",
    text: "The internal energy of a solid substance is equal to the",
    options: ["average kinetic energy of the molecules", "total kinetic energy of the molecules", "total potential energy of the molecules", "total potential and total kinetic energy of the molecules"],
    correct: 3,
    markScheme: "D. Internal energy = total KE + total PE of all molecules. For a solid, both KE (vibrations) and PE (intermolecular bonds) contribute.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "37", level: "SL/HL"
  },
  {
    id: "ch3-therm-038",
    text: "A gas is contained in a cylinder fitted with a piston. When the gas is compressed rapidly by the piston its temperature rises because the molecules of the gas",
    options: ["are squeezed closer together", "collide with each other more frequently", "collide with the walls more frequently", "gain energy from the moving piston"],
    correct: 3,
    markScheme: "D. Same as Q11. Molecules gain KE when they bounce off the moving piston (work done on gas). Like a ball hitting a moving bat — rebounds faster.",
    marks: 1, type: "MCQ", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "38", level: "SL/HL"
  },

  // ═══ STRUCTURED QUESTIONS ═══
  {
    id: "ch3-therm-008a",
    text: "(a) Distinguish between internal energy and thermal energy.",
    markScheme: "Internal energy is the total kinetic and potential energy of the molecules of a body;\nThermal energy is a net amount of energy transferred between two bodies;\nat different temperatures.",
    marks: 3, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "8a", questionGroup: "ch3-therm-008", stem: "Internal energy, thermal energy, and calorimetry.", level: "SL/HL"
  },
  {
    id: "ch3-therm-008b",
    text: "(b) Describe, with reference to the energy of molecules, the difference in internal energy of a piece of iron and the internal energy of an ideal gas.",
    markScheme: "Internal energy of iron = total KE plus PE of the molecules;\nIdeal gas molecules have only KE (no intermolecular forces), so internal energy is total KE only.",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "8b", questionGroup: "ch3-therm-008", stem: "Comparing internal energy of solid vs ideal gas.", level: "SL/HL"
  },
  {
    id: "ch3-therm-008c",
    text: "(c) Iron at temperature θ is placed in water at 16°C in an insulated container. Final temperature = 45°C.\nThermal capacity of iron = 60 J K⁻¹, Thermal capacity of water = 2.0 × 10³ J K⁻¹.\n\n(iii) Determine θ (the initial temperature of the iron).",
    markScheme: "Energy lost by iron = Energy gained by water\n60 × (θ - 45) = 2000 × (45 - 16) = 58000 J\n60θ - 2700 = 58000\n60θ = 60700\nθ = 1012 ≈ 1000°C",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "8c", questionGroup: "ch3-therm-008", stem: "Iron cooled in water. Thermal capacity iron = 60 J/K, water = 2000 J/K.", level: "SL/HL"
  },
  {
    id: "ch3-therm-013a",
    text: "(a) Suggest why, in terms of the molecular model, the energy associated with melting is less than that associated with boiling.",
    markScheme: "In boiling, energy is required to break bonds AND to separate molecules (large separation);\nIn melting, energy overcomes some bond energies without large separation of molecules.",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "13a", questionGroup: "ch3-therm-013", stem: "Phase changes and latent heat.", level: "SL/HL"
  },
  {
    id: "ch3-therm-013b",
    text: "(b)(i) Distinguish between evaporation and boiling.",
    markScheme: "Evaporation occurs at the surface only, boiling throughout the liquid;\nEvaporation occurs at all temperatures, boiling only at the boiling point;\nBoiling: vapour pressure = atmospheric pressure; Evaporation: vapour pressure < atmospheric.",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "13b", questionGroup: "ch3-therm-013", stem: "Evaporation vs boiling.", level: "SL/HL"
  },
  {
    id: "ch3-therm-013c",
    text: "(b)(ii) 0.30 kg of milk at 18°C is heated to 80°C by steam at 100°C. Estimate the minimum mass of steam required.\n\nL_v (water) = 2.3 × 10⁶ J/kg, c_water = 4200 J/(kg·K), c_milk = 3800 J/(kg·K)",
    markScheme: "Energy needed by milk = 0.30 × 3800 × (80-18) = 0.30 × 3800 × 62 = 70,680 J\nEnergy from steam = m × [L_v + c_water × (100-80)] = m × [2.3×10⁶ + 4200×20] = m × 2,384,000\nm = 70680 / 2384000 = 0.030 kg",
    marks: 4, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "13c", questionGroup: "ch3-therm-013", stem: "Steam heating milk. L_v = 2.3×10⁶, c_water = 4200, c_milk = 3800.", level: "SL/HL"
  },
  {
    id: "ch3-therm-019a",
    text: "(a) State the difference between evaporation and boiling with reference to:\n(i) temperature\n(ii) surface area of a liquid",
    markScheme: "(i) Evaporation takes place at any temperature; boiling at constant (boiling point) temperature only.\n(ii) Evaporation takes place at the surface only; boiling occurs throughout the liquid (independent of surface area).",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "19a", questionGroup: "ch3-therm-019", stem: "Evaporation vs boiling and latent heat.", level: "SL/HL"
  },
  {
    id: "ch3-therm-019b",
    text: "(b) A liquid is heated at its boiling point. Power = 15 W, time = 4.5 × 10² s, mass boiled away = 1.8 × 10⁻² kg. Determine the specific latent heat of vaporization.",
    markScheme: "Energy supplied = Pt = 15 × 450 = 6750 J\nL = E/m = 6750 / 0.018 = 3.75 × 10⁵ ≈ 3.8 × 10⁵ J kg⁻¹",
    marks: 3, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "19b", questionGroup: "ch3-therm-019", stem: "Heater power 15 W, time 450 s, mass evaporated 0.018 kg.", level: "SL/HL"
  },
  {
    id: "ch3-therm-019c",
    text: "(c) State and explain one reason why the calculation in (b) gives a value greater than the true value.",
    markScheme: "Thermal energy/heat is lost to the surroundings (or to heat the calorimeter);\nSo less energy is available to actually boil the liquid / less mass boils than expected → calculated L is too high.",
    marks: 2, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "19c", questionGroup: "ch3-therm-019", stem: "Systematic error in latent heat measurement.", level: "SL/HL"
  },
  {
    id: "ch3-therm-040a",
    text: "(a) Define specific heat capacity.",
    markScheme: "The amount of energy/heat required to raise the temperature of 1 kg of a substance through 1 K (or 1°C).",
    marks: 1, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "40a", questionGroup: "ch3-therm-040", stem: "Specific heat capacity and domestic shower.", level: "SL/HL"
  },
  {
    id: "ch3-therm-040b",
    text: "(c) A domestic shower heating element is rated at 7.2 kW, 240 V. Water enters at 14°C and leaves at 40°C. c_water = 4.2 × 10³ J/(kg·K).\n\nEstimate the flow rate of the water.",
    markScheme: "Energy per second = 7200 J\nEnergy per second = (mass/second) × c × ΔT\n7200 = (mass/s) × 4200 × 26\nmass/s = 7200 / (4200 × 26) = 7200 / 109200 = 0.066 kg s⁻¹",
    marks: 4, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "40b", questionGroup: "ch3-therm-040", stem: "Shower: 7.2 kW, water 14°C → 40°C, c = 4200 J/(kg·K).", level: "SL/HL"
  },
  {
    id: "ch3-therm-012a",
    text: "(a) State the energy change that takes place in a solar panel.",
    markScheme: "Solar energy (radiation) → thermal/internal energy. Do not accept 'light → heat'.",
    marks: 1, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "12a", questionGroup: "ch3-therm-012", stem: "Solar panels for hot water.", level: "SL/HL"
  },
  {
    id: "ch3-therm-012b",
    text: "(b) 120 houses need 3.0 kW each. Solar intensity = 650 W/m², panel efficiency = 18%. Calculate minimum panel area required.",
    markScheme: "Total power = 120 × 3000 = 360 kW\nInput solar power needed = 360000/0.18 = 2000 kW\nArea = 2000000/650 = 3077 ≈ 3.1 × 10³ m²",
    marks: 3, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Medium",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "12b", questionGroup: "ch3-therm-012", stem: "120 houses, 3 kW each, solar intensity 650 W/m², efficiency 18%.", level: "SL/HL"
  },
  {
    id: "ch3-therm-036a",
    text: "(a)(i) Define thermal capacity.",
    markScheme: "The amount of energy/heat required to change the temperature (of an object) by 1 K / 1°C. OR: mass × specific heat capacity.",
    marks: 1, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Easy",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "36a", questionGroup: "ch3-therm-036", stem: "Copper heated in flame, then transferred to water.", level: "SL/HL"
  },
  {
    id: "ch3-therm-036b",
    text: "(b)(i) Copper (0.12 kg, c = 390 J/(kg·K)) is heated in a flame then placed in water (0.45 kg, c = 4200 J/(kg·K)). Water rises 30 K. Final T of copper = 308 K. Calculate the flame temperature.",
    markScheme: "Heat lost by copper = Heat gained by water\n0.12 × 390 × (T - 308) = 0.45 × 4200 × 30\n46.8(T - 308) = 56700\nT - 308 = 1212\nT = 1520 K (≈ 1250°C)",
    marks: 3, type: "Short Answer", topic: "B", topicName: "Thermal Physics", subtopic: "B.1 Thermal Energy Transfers", difficulty: "Hard",
    paper: "QBank", year: "QBank", session: "CH3", tz: "", qNum: "36b", questionGroup: "ch3-therm-036", stem: "Copper in flame → water calorimetry.", level: "SL/HL"
  }
];

async function uploadQuestions() {
  const batch = db.batch();
  for (const q of questions) {
    const ref = db.collection('dpQuestions').doc(q.id);
    batch.set(ref, q);
  }
  await batch.commit();
  console.log(`✅ Uploaded ${questions.length} CH3 Thermal Physics questions`);
}

uploadQuestions().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
