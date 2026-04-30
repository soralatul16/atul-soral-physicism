questionBank = questionBank.map(q => ({
  criterion: q.criterion || "A",
  level: q.level || "medium",
  ...q
}));

const questionBank = [

/* =========================
WAVES INTRODUCTION
========================= */

{
topic:"waves",
image:"2-waves-introduction",
criterion:"A",
level:"medium",
question:"Which statement best defines a wave based on the diagram?",
options:[
"Transfer of matter from one place to another",
"Transfer of energy without permanent movement of matter",
"Movement of particles in a straight line",
"Oscillation that stops after a short time"
],
answer:"Transfer of energy without permanent movement of matter",
explanation:"Waves transfer energy without transporting matter."
},

{
topic:"waves",
image:"2-waves-introduction",
criterion:"C",
level:"hard",
question:"A student observes ripples spreading outward on water. A leaf oscillates up and down. What can be concluded?",
options:[
"Energy is not being transferred",
"Matter is moving with the wave",
"Energy travels while particles oscillate about equilibrium",
"The wave is longitudinal"
],
answer:"Energy travels while particles oscillate about equilibrium",
explanation:"Particles oscillate, energy moves."
},

{
topic:"waves",
image:"2-waves-introduction",
criterion:"D",
level:"medium",
question:"Why can light travel through space but sound cannot?",
options:[
"Light has higher energy",
"Sound requires a medium",
"Light travels slower",
"Sound has zero frequency"
],
answer:"Sound requires a medium",
explanation:"Sound is mechanical; light is electromagnetic."
},

/* =========================
TRANSVERSE VS LONGITUDINAL
========================= */

{
topic:"waves",
image:"3-transverse-vs-longitudinal-wave",
criterion:"A",
level:"medium",
question:"Particles move perpendicular to wave direction. Type?",
options:[
"Longitudinal",
"Transverse",
"Standing",
"Mechanical only"
],
answer:"Transverse",
explanation:"Perpendicular motion = transverse."
},

{
topic:"waves",
image:"3-transverse-vs-longitudinal-wave",
criterion:"C",
level:"hard",
question:"Regions of compression and rarefaction indicate:",
options:[
"Transverse wave",
"Longitudinal wave",
"No energy transfer",
"Standing wave"
],
answer:"Longitudinal wave",
explanation:"Compression is characteristic of longitudinal waves."
},

/* =========================
WAVE PROPERTIES
========================= */

{
topic:"waves",
image:"4-basic-properties-of-waves",
criterion:"A",
level:"easy",
question:"Amplitude represents:",
options:[
"Distance between crests",
"Maximum displacement",
"Speed",
"Period"
],
answer:"Maximum displacement",
explanation:"Amplitude = maximum displacement."
},

{
topic:"waves",
image:"4-basic-properties-of-waves",
criterion:"C",
level:"hard",
question:"If amplitude increases, what changes?",
options:[
"Speed",
"Energy",
"Frequency",
"Wavelength"
],
answer:"Energy",
explanation:"Energy ∝ amplitude²."
},

/* =========================
WAVE EQUATION
========================= */

{
topic:"waves",
image:"5-wave-equation",
criterion:"A",
level:"medium",
question:"Correct wave equation:",
options:[
"v = fλ",
"v = f/λ",
"v = λ/f",
"v = f²λ"
],
answer:"v = fλ",
explanation:"Fundamental relation."
},

{
topic:"waves",
image:"5-wave-equation",
criterion:"C",
level:"hard",
question:"If frequency increases and speed constant, wavelength:",
options:[
"Increases",
"Decreases",
"Same",
"Zero"
],
answer:"Decreases",
explanation:"Inverse relationship."
},

/* =========================
REFLECTION
========================= */

{
topic:"waves",
image:"6-reflection-of-waves",
criterion:"A",
level:"medium",
question:"Law of reflection:",
options:[
"θi > θr",
"θi = θr",
"θi < θr",
"θi = 2θr"
],
answer:"θi = θr",
explanation:"Angle of incidence equals angle of reflection."
},

{
topic:"waves",
image:"6-reflection-of-waves",
criterion:"C",
level:"hard",
question:"A pulse reflects inverted. Boundary?",
options:[
"Free end",
"Fixed end",
"No reflection",
"Longitudinal wave"
],
answer:"Fixed end",
explanation:"Fixed boundary causes inversion."
}

/* =========================
REFRACTION
========================= */

,
{
topic:"waves",
image:"6-refraction-of-waves",
criterion:"A",
level:"medium",
question:"Refraction occurs when:",
options:[
"A wave changes direction due to change in speed",
"A wave reflects back",
"A wave stops moving",
"A wave disappears"
],
answer:"A wave changes direction due to change in speed",
explanation:"Refraction is caused by a change in wave speed."
},

{
topic:"waves",
image:"6-refraction-of-waves",
criterion:"C",
level:"hard",
question:"During refraction, which property remains constant?",
options:[
"Speed",
"Wavelength",
"Frequency",
"Direction"
],
answer:"Frequency",
explanation:"Frequency does not change when entering a new medium."
},

{
topic:"waves",
image:"6-refraction-of-waves",
criterion:"D",
level:"medium",
question:"Why does light bend towards the normal when entering glass from air?",
options:[
"Speed increases",
"Speed decreases",
"Frequency increases",
"Energy increases"
],
answer:"Speed decreases",
explanation:"Light slows down in denser medium causing bending towards normal."
},

/* =========================
DIFFRACTION
========================= */

{
topic:"waves",
image:"7-diffraction-of-waves",
criterion:"A",
level:"medium",
question:"Diffraction is:",
options:[
"Reflection of waves",
"Spreading of waves",
"Absorption of waves",
"Loss of energy"
],
answer:"Spreading of waves",
explanation:"Diffraction is spreading when waves pass through gaps."
},

{
topic:"waves",
image:"7-diffraction-of-waves",
criterion:"C",
level:"hard",
question:"Diffraction is most significant when:",
options:[
"Wavelength << gap",
"Wavelength ≈ gap",
"Gap is very large",
"No gap present"
],
answer:"Wavelength ≈ gap",
explanation:"Maximum diffraction occurs when wavelength is comparable to gap."
},

{
topic:"waves",
image:"7-diffraction-of-waves",
criterion:"D",
level:"medium",
question:"Why can sound be heard around corners but light cannot?",
options:[
"Sound has higher energy",
"Sound has longer wavelength",
"Light travels slower",
"Light has zero frequency"
],
answer:"Sound has longer wavelength",
explanation:"Longer wavelength causes more diffraction."
},

/* =========================
TOTAL INTERNAL REFLECTION
========================= */

{
topic:"waves",
image:"8-total-internal-reflection",
criterion:"A",
level:"medium",
question:"Total internal reflection occurs when:",
options:[
"Light travels from dense to rare medium and angle > critical angle",
"Light travels from rare to dense medium",
"Light is absorbed",
"Angle is zero"
],
answer:"Light travels from dense to rare medium and angle > critical angle",
explanation:"TIR requires angle greater than critical angle."
},

{
topic:"waves",
image:"8-total-internal-reflection",
criterion:"C",
level:"hard",
question:"At the critical angle, the refracted ray:",
options:[
"Reflects back",
"Travels along boundary",
"Stops",
"Changes frequency"
],
answer:"Travels along boundary",
explanation:"This defines the critical angle."
},

{
topic:"waves",
image:"8-total-internal-reflection",
criterion:"D",
level:"medium",
question:"Why is optical fiber useful in communication?",
options:[
"Uses reflection",
"Uses diffraction",
"Uses total internal reflection",
"Uses absorption"
],
answer:"Uses total internal reflection",
explanation:"TIR keeps light inside fiber."
},

/* =========================
SUPERPOSITION
========================= */

{
topic:"waves",
image:"9-superposition-of-waves",
criterion:"A",
level:"medium",
question:"Superposition principle states:",
options:[
"Energy is lost",
"Displacements add",
"Waves cancel permanently",
"Waves stop"
],
answer:"Displacements add",
explanation:"Waves combine algebraically."
},

{
topic:"waves",
image:"9-superposition-of-waves",
criterion:"C",
level:"hard",
question:"Constructive interference occurs when:",
options:[
"Crest meets trough",
"Crest meets crest",
"Trough meets crest",
"No overlap"
],
answer:"Crest meets crest",
explanation:"Amplitudes add to give larger wave."
},

{
topic:"waves",
image:"9-superposition-of-waves",
criterion:"D",
level:"medium",
question:"Why do noise-cancelling headphones work?",
options:[
"Increase sound",
"Use constructive interference",
"Use destructive interference",
"Absorb energy"
],
answer:"Use destructive interference",
explanation:"They cancel sound waves."
},

/* =========================
STANDING WAVES
========================= */

{
topic:"waves",
image:"10-standing-waves",
criterion:"A",
level:"medium",
question:"Standing waves are formed by:",
options:[
"Single wave",
"Two waves moving in opposite directions",
"Refraction",
"Diffraction"
],
answer:"Two waves moving in opposite directions",
explanation:"Interference of opposite waves."
},

{
topic:"waves",
image:"10-standing-waves",
criterion:"C",
level:"hard",
question:"Nodes are points of:",
options:[
"Maximum displacement",
"Zero displacement",
"Maximum speed",
"Maximum energy"
],
answer:"Zero displacement",
explanation:"Nodes do not move."
},

{
topic:"waves",
image:"10-standing-waves",
criterion:"D",
level:"medium",
question:"Why do musical instruments use standing waves?",
options:[
"To stop sound",
"To produce specific frequencies",
"To absorb waves",
"To reduce energy"
],
answer:"To produce specific frequencies",
explanation:"Standing waves define pitch."
}

/* =========================
SOUND WAVES
========================= */

,
{
topic:"waves",
image:"11-sound-waves",
criterion:"A",
level:"medium",
question:"Sound waves are:",
options:[
"Transverse",
"Longitudinal",
"Electromagnetic",
"Standing"
],
answer:"Longitudinal",
explanation:"Sound waves travel as compressions and rarefactions."
},

{
topic:"waves",
image:"11-sound-waves",
criterion:"C",
level:"hard",
question:"Which region represents high pressure in a sound wave?",
options:[
"Rarefaction",
"Compression",
"Node",
"Crest"
],
answer:"Compression",
explanation:"Compression = high pressure region."
},

{
topic:"waves",
image:"11-sound-waves",
criterion:"D",
level:"medium",
question:"Why cannot sound travel in space?",
options:[
"Low energy",
"No medium",
"Zero frequency",
"Too fast"
],
answer:"No medium",
explanation:"Sound requires particles to travel."
},

/* =========================
SPEED OF SOUND
========================= */

{
topic:"waves",
image:"12-speed-of-sound",
criterion:"A",
level:"medium",
question:"Sound travels fastest in:",
options:[
"Gases",
"Liquids",
"Solids",
"Vacuum"
],
answer:"Solids",
explanation:"Particles are closely packed."
},

{
topic:"waves",
image:"12-speed-of-sound",
criterion:"C",
level:"hard",
question:"If temperature increases, speed of sound:",
options:[
"Decreases",
"Increases",
"Remains same",
"Becomes zero"
],
answer:"Increases",
explanation:"Higher temperature → higher kinetic energy."
},

{
topic:"waves",
image:"12-speed-of-sound",
criterion:"D",
level:"medium",
question:"Why does sound travel slower in air than in steel?",
options:[
"Steel has more energy",
"Particles in steel are closer",
"Air has no particles",
"Steel absorbs sound"
],
answer:"Particles in steel are closer",
explanation:"Closer particles → faster transmission."
},

/* =========================
ELECTROMAGNETIC WAVES
========================= */

{
topic:"waves",
image:"14-electromagnetic-waves",
criterion:"A",
level:"medium",
question:"Electromagnetic waves are:",
options:[
"Mechanical",
"Transverse",
"Longitudinal",
"Stationary"
],
answer:"Transverse",
explanation:"EM waves are transverse."
},

{
topic:"waves",
image:"14-electromagnetic-waves",
criterion:"C",
level:"hard",
question:"Which property is same for all EM waves in vacuum?",
options:[
"Wavelength",
"Frequency",
"Speed",
"Energy"
],
answer:"Speed",
explanation:"All EM waves travel at same speed in vacuum."
},

{
topic:"waves",
image:"14-electromagnetic-waves",
criterion:"D",
level:"medium",
question:"Why are EM waves useful in communication?",
options:[
"They need medium",
"They travel in vacuum",
"They are slow",
"They lose energy quickly"
],
answer:"They travel in vacuum",
explanation:"Can travel through space."
},

/* =========================
APPLICATION & REAL WORLD
========================= */

{
topic:"waves",
image:"19-light-and-communication",
criterion:"B",
level:"medium",
question:"Which investigation would best test wave speed?",
options:[
"Measure time and distance",
"Measure mass",
"Measure color",
"Measure temperature only"
],
answer:"Measure time and distance",
explanation:"Speed = distance/time."
},

{
topic:"waves",
image:"19-light-and-communication",
criterion:"C",
level:"hard",
question:"A graph shows wave speed constant but frequency increases. What happens?",
options:[
"Wavelength increases",
"Wavelength decreases",
"Speed increases",
"Energy zero"
],
answer:"Wavelength decreases",
explanation:"v = fλ."
},

{
topic:"waves",
image:"19-light-and-communication",
criterion:"D",
level:"medium",
question:"Why are waves important in communication?",
options:[
"They carry energy and information",
"They stop signals",
"They absorb data",
"They reduce speed"
],
answer:"They carry energy and information",
explanation:"Waves transmit signals."
},

/* =========================
FINAL FALLBACK (VERY IMPORTANT)
========================= */

{
topic:"waves",
image:"default",
criterion:"A",
level:"easy",
question:"Unit of frequency is:",
options:[
"Hertz",
"Meter",
"Newton",
"Joule"
],
answer:"Hertz",
explanation:"Standard SI unit."
},

{
topic:"waves",
image:"default",
criterion:"C",
level:"medium",
question:"Wave speed depends on:",
options:[
"Medium",
"Color",
"Time",
"Shape"
],
answer:"Medium",
explanation:"Medium determines speed."
},

{
topic:"waves",
image:"default",
criterion:"D",
level:"medium",
question:"Why are waves useful?",
options:[
"They transfer energy",
"They destroy matter",
"They reduce motion",
"They stop energy"
],
answer:"They transfer energy",
explanation:"Core property of waves."
},


/* ===== ATOMIC PHYSICS ===== */

/* ===== IMAGE 1: ATOMIC MODELS ===== */
{
topic:"atomic",
image:"1-atomic-models",
question:"Who proposed the first atomic theory?",
options:["Dalton","Thomson","Rutherford","Bohr"],
answer:"Dalton",
explanation:"Dalton proposed atoms as indivisible particles."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model described atoms as solid spheres?",
options:["Dalton","Thomson","Rutherford","Bohr"],
answer:"Dalton",
explanation:"Dalton’s model treated atoms as solid spheres."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which scientist discovered the electron?",
options:["Thomson","Dalton","Rutherford","Bohr"],
answer:"Thomson",
explanation:"Thomson discovered the electron using cathode rays."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model introduced a nucleus?",
options:["Rutherford","Dalton","Thomson","Bohr"],
answer:"Rutherford",
explanation:"Rutherford discovered the nucleus via gold foil experiment."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model has fixed energy levels?",
options:["Bohr","Dalton","Thomson","Rutherford"],
answer:"Bohr",
explanation:"Bohr introduced quantized energy levels."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model is called plum pudding?",
options:["Thomson","Dalton","Rutherford","Bohr"],
answer:"Thomson",
explanation:"Electrons embedded in positive sphere."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model failed to explain electron stability?",
options:["Rutherford","Bohr","Dalton","Thomson"],
answer:"Rutherford",
explanation:"Electrons should collapse into nucleus in Rutherford model."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model uses circular orbits?",
options:["Bohr","Dalton","Thomson","Rutherford"],
answer:"Bohr",
explanation:"Electrons move in fixed circular orbits."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model has no internal structure?",
options:["Dalton","Thomson","Rutherford","Bohr"],
answer:"Dalton",
explanation:"Atoms were considered indivisible."
},
{
topic:"atomic",
image:"1-atomic-models",
question:"Which model came after Rutherford?",
options:["Bohr","Dalton","Thomson","Rutherford"],
answer:"Bohr",
explanation:"Bohr improved Rutherford model."
},

/* ===== IMAGE 7: ISOTOPES ===== */
{
topic:"atomic",
image:"7-isotopes",
question:"Isotopes differ in:",
options:["Neutrons","Protons","Electrons","Charge"],
answer:"Neutrons",
explanation:"Isotopes have same protons but different neutrons."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Isotopes have same:",
options:["Atomic number","Mass number","Neutron number","Energy"],
answer:"Atomic number",
explanation:"Atomic number = number of protons."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Example of isotopes:",
options:["C-12 & C-14","H & He","Na & Cl","Fe & Cu"],
answer:"C-12 & C-14",
explanation:"Same element, different neutrons."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Mass number equals:",
options:["Protons + Neutrons","Protons only","Neutrons only","Electrons"],
answer:"Protons + Neutrons",
explanation:"Mass number is sum of nucleons."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Isotopes have similar:",
options:["Chemical properties","Mass","Neutron count","Decay"],
answer:"Chemical properties",
explanation:"Chemical behavior depends on electrons."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Radioactive isotopes are called:",
options:["Radioisotopes","Ions","Atoms","Molecules"],
answer:"Radioisotopes",
explanation:"They undergo radioactive decay."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Isotopes differ in mass because:",
options:["Different neutrons","Different electrons","Different protons","Energy"],
answer:"Different neutrons",
explanation:"Neutrons contribute to mass."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Atomic number determines:",
options:["Element identity","Mass","Charge","Energy"],
answer:"Element identity",
explanation:"Number of protons defines element."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Carbon-14 is used for:",
options:["Dating fossils","Energy","Medicine","Cooling"],
answer:"Dating fossils",
explanation:"Used in radiocarbon dating."
},
{
topic:"atomic",
image:"7-isotopes",
question:"Isotopes of hydrogen include:",
options:["Protium, Deuterium, Tritium","Oxygen isotopes","Helium isotopes","Iron isotopes"],
answer:"Protium, Deuterium, Tritium",
explanation:"Three isotopes of hydrogen."
},

/* ===== IMAGE 9: RADIATION ===== */
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Alpha radiation is:",
options:["Helium nucleus","Electron","Photon","Neutron"],
answer:"Helium nucleus",
explanation:"2 protons + 2 neutrons."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Beta radiation is:",
options:["Electron","Photon","Neutron","Alpha"],
answer:"Electron",
explanation:"Fast moving electron."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Gamma radiation is:",
options:["EM wave","Particle","Electron","Neutron"],
answer:"EM wave",
explanation:"High energy electromagnetic wave."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Most penetrating radiation:",
options:["Gamma","Alpha","Beta","None"],
answer:"Gamma",
explanation:"Gamma penetrates deeply."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Least penetrating:",
options:["Alpha","Beta","Gamma","All equal"],
answer:"Alpha",
explanation:"Stopped by paper."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Charge of alpha:",
options:["+2","-1","0","+1"],
answer:"+2",
explanation:"Helium nucleus has +2 charge."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Charge of beta:",
options:["-1","+1","0","+2"],
answer:"-1",
explanation:"Electron has -1 charge."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Gamma has:",
options:["No charge","+1","-1","+2"],
answer:"No charge",
explanation:"It is a wave."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Alpha stopped by:",
options:["Paper","Aluminium","Lead","Water"],
answer:"Paper",
explanation:"Very low penetration."
},
{
topic:"atomic",
image:"9-alpha-beta-gamma-decay",
question:"Gamma stopped by:",
options:["Lead","Paper","Air","Plastic"],
answer:"Lead",
explanation:"Requires dense material."
},

/* ===== IMAGE 13: HALF LIFE ===== */
{
topic:"atomic",
image:"13-half-life",
question:"Half-life is:",
options:["Time for half nuclei to decay","Time for all decay","Energy lost","Mass gained"],
answer:"Time for half nuclei to decay",
explanation:"Definition of half-life."
},
{
topic:"atomic",
image:"13-half-life",
question:"After one half-life:",
options:["50% remains","25% remains","75% remains","0% remains"],
answer:"50% remains",
explanation:"Half decays."
},
{
topic:"atomic",
image:"13-half-life",
question:"After two half-lives:",
options:["25% remains","50% remains","75% remains","0%"],
answer:"25% remains",
explanation:"Half of half remains."
},
{
topic:"atomic",
image:"13-half-life",
question:"Decay is:",
options:["Random","Predictable","Linear","Constant"],
answer:"Random",
explanation:"Individual decay unpredictable."
},
{
topic:"atomic",
image:"13-half-life",
question:"Half-life depends on:",
options:["Material","Temperature","Pressure","Mass"],
answer:"Material",
explanation:"Intrinsic property."
},
{
topic:"atomic",
image:"13-half-life",
question:"Unit of half-life:",
options:["Seconds","Joules","Watts","Kelvin"],
answer:"Seconds",
explanation:"Time measurement."
},
{
topic:"atomic",
image:"13-half-life",
question:"Decay graph is:",
options:["Exponential","Linear","Circular","Random"],
answer:"Exponential",
explanation:"Decay follows exponential law."
},
{
topic:"atomic",
image:"13-half-life",
question:"Used in:",
options:["Dating fossils","Cooking","Cooling","Transport"],
answer:"Dating fossils",
explanation:"Radiocarbon dating."
},
{
topic:"atomic",
image:"13-half-life",
question:"More half-life means:",
options:["Slower decay","Faster decay","No decay","Instant decay"],
answer:"Slower decay",
explanation:"Takes longer to decay."
},
{
topic:"atomic",
image:"13-half-life",
question:"After 3 half-lives:",
options:["12.5% remains","50%","25%","0%"],
answer:"12.5% remains",
explanation:"1/8 remains."
}

];
