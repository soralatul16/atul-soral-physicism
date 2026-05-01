const examData = [

/* ================= ATOMIC ================= */

{
topic:"atomic",
section:"A",
difficulty:"easy",
type:"mcq",
question:"Define an isotope.",
options:[
"Same protons different neutrons",
"Same neutrons different protons",
"Different elements",
"Same electrons only"
],
answer:"Same protons different neutrons",
marks:1,
markscheme:"Isotopes have the same number of protons but different numbers of neutrons."
},

{
topic:"atomic",
section:"B",
difficulty:"medium",
type:"drag",
question:"Match particle to its charge.",
pairs:[
{left:"Proton", right:"+1"},
{left:"Electron", right:"-1"},
{left:"Neutron", right:"0"}
],
marks:3,
markscheme:"Proton +1, Electron -1, Neutron 0"
},

{
topic:"atomic",
section:"C",
difficulty:"medium",
type:"text",
question:"Explain why isotopes have similar chemical properties.",
marks:3,
markscheme:"They have the same electron configuration, which determines chemical behaviour."
},

{
topic:"atomic",
section:"D",
difficulty:"hard",
type:"image",
image:"../Images/7-isotopes.png",
question:"Describe what the diagram shows about isotopes.",
marks:4,
markscheme:"Different numbers of neutrons but same number of protons."
},

/* ================= WAVES ================= */

{
topic:"waves",
section:"A",
difficulty:"easy",
type:"mcq",
question:"What is the wave speed equation?",
options:["v=fλ","v=f/λ","v=λ/f","v=f²"],
answer:"v=fλ",
marks:1,
markscheme:"Wave speed = frequency × wavelength"
},

{
topic:"waves",
section:"B",
difficulty:"medium",
type:"text",
question:"Explain what happens to wavelength when frequency increases (wave speed constant).",
marks:3,
markscheme:"Wavelength decreases because v = fλ, so λ = v/f."
},

{
topic:"waves",
section:"C",
difficulty:"medium",
type:"video",
video:"https://www.youtube.com/embed/dQw4w9WgXcQ",
question:"Describe the wave behaviour shown in the video.",
marks:4,
markscheme:"Answers depend on observation (reflection/diffraction/interference)."
},

/* ================= ELECTROMAGNETISM ================= */

{
topic:"electromagnetism",
section:"A",
difficulty:"easy",
type:"mcq",
question:"What is the unit of current?",
options:["Volt","Ampere","Ohm","Watt"],
answer:"Ampere",
marks:1,
markscheme:"Ampere (A)"
},

{
topic:"electromagnetism",
section:"B",
difficulty:"medium",
type:"text",
question:"State Ohm’s Law.",
marks:2,
markscheme:"V = IR (voltage is proportional to current)"
},

{
topic:"electromagnetism",
section:"C",
difficulty:"hard",
type:"image",
image:"../Images/12-resistance-and-ohms-law.png",
question:"Explain the relationship shown in the graph.",
marks:4,
markscheme:"Linear relationship → constant resistance → obeys Ohm’s law."
},

/* ================= PLACEHOLDER TOPICS ================= */
/* These ensure dropdown works + “Coming Soon” logic triggers properly */

{
topic:"matter",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
},

{
topic:"forces",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
},

{
topic:"workpower",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
},

{
topic:"energy",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
},

{
topic:"thermal",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
},

{
topic:"astro",
section:"A",
difficulty:"easy",
type:"text",
question:"Coming soon placeholder.",
marks:1
}

];
