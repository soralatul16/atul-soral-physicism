// IGCSE Physics 0625 — rich subtopic content store (DP-style: 6 tabs + checklist).
// Structure per subtopic:
//  { title, tier, learn:[{tier:'foundation'|'core'|'ext', heading, html}],
//    simulation:{title,file,source,instructions:[]}, formulas:[{f,d}],
//    practice:[{q,type,options?,answer,marks,solution}],
//    mistakes:[html], exam:[{q,marks,solution}], checklist:[str] }
window.IGCSE_CONTENT = {

"IG1.1": {
  title: "Physical quantities & measurement techniques",
  tier: "both",
  slides: [
    { title:"What is a physical quantity?",
      html:"<p>A <b>physical quantity</b> is anything we can measure. It always has two parts:</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>quantity = number × unit</b></p>"+
           "<p>A length of <b>2.5 m</b> — the number is 2.5, the unit is the metre.</p>"+
           "<div class='f'><p>A number with no unit is meaningless in physics.</p></div>" },
    { title:"SI base units",
      html:"<table class='ig-tbl'><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>"+
           "<tr><td>length</td><td>metre</td><td>m</td></tr><tr><td>mass</td><td>kilogram</td><td>kg</td></tr>"+
           "<tr><td>time</td><td>second</td><td>s</td></tr><tr><td>current</td><td>ampere</td><td>A</td></tr>"+
           "<tr><td>temperature</td><td>kelvin</td><td>K</td></tr></table>"+
           "<div class='f'><p>All other units are <b>derived</b> — speed (m/s), force (N = kg·m/s²).</p></div>" },
    { title:"Measuring length",
      html:"<ul><li><b>Ruler</b> — ±1 mm</li><li><b>Micrometer</b> — 0.01 mm, for thin wires</li></ul>"+
           "<div class='f'><p>Read at eye level (avoid <b>parallax</b>); check for a <b>zero error</b> first.</p></div>" },
    { title:"Measuring volume",
      html:"<p><b>Regular solid:</b> V = l × w × h. <b>Liquid:</b> measuring cylinder, read the meniscus.</p>"+
           "<div class='f'><p><b>Irregular solid — displacement:</b> the water it pushes up = its volume.</p></div>" },
    { title:"Measuring time",
      html:"<p>Use a stopwatch. For a pendulum, time <b>many swings</b> and divide.</p>"+
           "<div class='f'><p>This shrinks the effect of reaction-time error.</p></div>" },
    { title:"Precision & significant figures",
      html:"<p>A balance reading 1.427 g is precise to ±0.001 g.</p>"+
           "<div class='f'><p>Give answers to a sensible number of significant figures (2–3 s.f. typical).</p></div>" },
    { title:"Scalars & vectors (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div>"+
           "<p><b>Scalar</b> — size only: mass, time, speed, energy.</p>"+
           "<p><b>Vector</b> — size + direction: displacement, velocity, force, momentum.</p>"+
           "<div class='f'><p>Perpendicular vectors combine by scale diagram or Pythagoras.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 50 sheets of paper are 5.0 mm thick. Find one sheet's thickness — and why measure 50?</p>"+
           "<p class='f'><b>A:</b> 5.0 ÷ 50 = <b>0.10 mm</b>. Measuring 50 reduces the ±1 mm ruler error on each thin sheet.</p></div>" }
  ],
  learn: [
    { tier:"foundation", heading:"Starting with a question: what does it mean to measure?",
      html:"<p>Imagine you tell a friend “the table is 3 long.” Three what? Three metres? Three hand-spans? Without a <b>unit</b>, the number 3 is useless.</p>"+
           "<p>This is the heart of physics: every measurement is a <b>number paired with a unit</b>.</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:18px 0;color:var(--ig-d)'><b>physical quantity = number × unit</b></p>"+
           "<p>A <b>physical quantity</b> is simply anything we can measure — length, mass, time, temperature, and so on.</p>" },
    { tier:"core", heading:"The SI base units",
      html:"<p>Scientists worldwide agree on one system so results can be compared: the <b>SI system</b>. Five base units matter at IGCSE:</p>"+
           "<table class='ig-tbl'><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>"+
           "<tr><td>length</td><td>metre</td><td>m</td></tr>"+
           "<tr><td>mass</td><td>kilogram</td><td>kg</td></tr>"+
           "<tr><td>time</td><td>second</td><td>s</td></tr>"+
           "<tr><td>current</td><td>ampere</td><td>A</td></tr>"+
           "<tr><td>temperature</td><td>kelvin</td><td>K</td></tr></table>"+
           "<p>Every other unit is <b>derived</b> from these. Speed = distance ÷ time, so its unit is m/s. Force is measured in newtons (N), which is really kg·m/s².</p>" },
    { tier:"core", heading:"Measuring length, volume and time",
      html:"<h4>Length</h4><ul><li><b>Ruler</b> — precision ±1 mm.</li><li><b>Micrometer screw gauge</b> — for tiny thicknesses, precision 0.01 mm.</li></ul>"+
           "<h4>Volume</h4><ul><li><b>Regular solid:</b> measure and calculate (cuboid: V = l × w × h).</li><li><b>Liquid:</b> measuring cylinder — read the bottom of the <b>meniscus</b> at eye level.</li><li><b>Irregular solid:</b> the <b>displacement method</b> — the water it pushes up equals its volume.</li></ul>"+
           "<h4>Time</h4><p>Use a stopwatch. For repeating events like a pendulum, time <b>many swings</b> and divide — this shrinks the effect of your reaction-time error.</p>" },
    { tier:"core", heading:"Getting accurate readings",
      html:"<ul><li><b>Parallax error:</b> always read a scale at eye level, straight on.</li>"+
           "<li><b>Zero error:</b> check the instrument reads zero before you start.</li>"+
           "<li><b>Repeat and average:</b> take several readings and find the mean to reduce random error.</li></ul>" },
    { tier:"ext", heading:"Extended: scalars and vectors",
      html:"<p>Some quantities need only a size; others need a direction too.</p>"+
           "<p><b>Scalar</b> — magnitude only: mass, time, distance, speed, energy, temperature.</p>"+
           "<p><b>Vector</b> — magnitude <i>and</i> direction: displacement, velocity, acceleration, force, weight, momentum.</p>"+
           "<p>Vectors in the same line add or subtract. Two perpendicular vectors combine by a scale diagram or Pythagoras.</p>" }
  ],
  simulation: {
    title: "Derived Quantities Lab",
    file: "sims/derived-quantities-lab.html",
    source: "Atul Soral Physicism — Interactive Sim",
    instructions: [
      "Measure a length and a time, then build the derived quantity speed (m/s).",
      "Change the base measurements and watch how the derived unit changes.",
      "Try to predict the unit of a new derived quantity before revealing it."
    ]
  },
  formulas: [
    { f:"physical quantity = number × unit", d:"Every measurement has both a value and a unit." },
    { f:"speed = distance ÷ time", d:"A derived quantity; unit m/s." },
    { f:"volume of cuboid = l × w × h", d:"For a regular solid; unit m³." },
    { f:"volume of irregular solid = final − initial water level", d:"Displacement method in a measuring cylinder." }
  ],
  practice: [
    { q:"Which of these is an SI base unit?", type:"mcq", options:["newton","kilogram","joule","watt"], answer:1, marks:1,
      solution:"The kilogram is the SI base unit of mass. Newton, joule and watt are derived." },
    { q:"Which instrument best measures the diameter of a thin wire?", type:"mcq", options:["metre rule","measuring tape","micrometer screw gauge","trundle wheel"], answer:2, marks:1,
      solution:"A micrometer measures to 0.01 mm — ideal for a thin wire." },
    { q:"Describe how to find the volume of a small irregular stone using a measuring cylinder.", type:"struct", answer:"Displacement method", marks:3,
      solution:"Part-fill the cylinder with water; read the volume. Lower the stone in fully; read the new volume. Volume of stone = new − initial. [3]" },
    { q:"A student times 20 swings of a pendulum as 30.0 s. Find the time for one swing.", type:"struct", answer:"1.5 s", marks:2,
      solution:"T = total time ÷ number of swings = 30.0 ÷ 20 = 1.5 s. [2]" }
  ],
  mistakes: [
    "Writing a number with <b>no unit</b> — in physics a bare number is wrong. Always attach the unit.",
    "Reading a scale from an angle → <b>parallax error</b>. Read at eye level.",
    "Forgetting to check for a <b>zero error</b> on a micrometer or balance before measuring.",
    "Timing only <b>one</b> pendulum swing — reaction time makes this very inaccurate. Time many and divide.",
    "Confusing a <b>scalar</b> and a <b>vector</b> (Extended): forgetting that force, velocity and displacement need a direction."
  ],
  exam: [
    { q:"State what is meant by a physical quantity. [1]", marks:1,
      solution:"A quantity that can be measured, consisting of a number and a unit." },
    { q:"A block measures 4.0 cm × 3.0 cm × 2.0 cm. Calculate its volume in cm³. [2]", marks:2,
      solution:"V = 4.0 × 3.0 × 2.0 = 24 cm³. [2]" },
    { q:"Explain why a student measures the thickness of 100 sheets of paper rather than one. [2]", marks:2,
      solution:"One sheet is far thinner than the ±1 mm ruler precision, giving a large percentage error. Measuring 100 and dividing gives a much more accurate value per sheet. [2]" }
  ],
  checklist: [
    "I can state that a physical quantity = number × unit.",
    "I can name the five SI base units and their symbols.",
    "I can choose the right instrument to measure length, volume and time.",
    "I can use the displacement method for an irregular solid's volume.",
    "I can reduce errors (parallax, zero error, repeat & average).",
    "I can tell a scalar from a vector and give examples (Extended)."
  ]
},

"IG1.2": {
  title: "Motion",
  tier: "both",
  slides: [
    { title:"Speed and velocity",
      html:"<p><b>Speed</b> = how fast you move. <b>Velocity</b> = speed in a stated direction.</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>speed = distance ÷ time</b></p>"+
           "<div class='f'><p>Unit: metre per second (m/s). Velocity is a <b>vector</b>; speed is a <b>scalar</b>.</p></div>" },
    { title:"Acceleration",
      html:"<p><b>Acceleration</b> = how quickly velocity changes.</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>a = (v − u) ÷ t</b></p>"+
           "<div class='f'><p>Unit: m/s². Negative acceleration = slowing down (deceleration).</p></div>" },
    { title:"Distance–time graphs",
      html:"<ul><li>Flat line = stationary</li><li>Straight slope = constant speed</li><li>Curved = changing speed</li></ul>"+
           "<div class='f'><p>The <b>gradient</b> of a distance–time graph = speed.</p></div>" },
    { title:"Speed–time graphs",
      html:"<ul><li>Flat line = constant speed</li><li>Straight slope = constant acceleration</li></ul>"+
           "<div class='f'><p>The <b>gradient</b> = acceleration; the <b>area under</b> the graph = distance travelled.</p></div>" },
    { title:"Acceleration of free fall (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p>Near Earth, all objects accelerate downward at <b>g ≈ 9.8 m/s²</b> (use 9.8 or 10).</p>"+
           "<div class='f'><p>Ignoring air resistance, a heavy and a light object fall together.</p></div>" },
    { title:"Terminal velocity (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p>A falling object speeds up until air resistance equals weight — then it falls at constant <b>terminal velocity</b>.</p>"+
           "<div class='f'><p>At terminal velocity the resultant force is zero, so acceleration is zero.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A car goes from 0 to 20 m/s in 8 s. Find its acceleration.</p>"+
           "<p class='f'><b>A:</b> a = (20 − 0) ÷ 8 = <b>2.5 m/s²</b>.</p></div>" }
  ],
  learn:[
    { tier:"foundation", heading:"Distance, speed and the idea of motion",
      html:"<p>Motion means changing position. To describe it we use <b>speed</b> — how much distance is covered each second.</p><p style='text-align:center;font-size:1.15em;color:var(--ig-d)'><b>speed = distance ÷ time</b></p><p>Average speed uses total distance over total time; instantaneous speed is the speed at one moment (what a speedometer shows).</p>" },
    { tier:"core", heading:"Velocity and acceleration",
      html:"<p><b>Velocity</b> is speed with a direction. <b>Acceleration</b> is the rate of change of velocity:</p><p style='text-align:center;font-size:1.15em;color:var(--ig-d)'><b>a = (v − u) ÷ t</b></p><p>where u = starting velocity, v = final velocity, t = time. Unit m/s².</p>" },
    { tier:"core", heading:"Graphs of motion",
      html:"<h4>Distance–time</h4><ul><li>gradient = speed</li><li>flat = at rest; curve = changing speed</li></ul><h4>Speed–time</h4><ul><li>gradient = acceleration</li><li>area under graph = distance travelled</li></ul>" },
    { tier:"ext", heading:"Free fall and terminal velocity",
      html:"<p>Free fall acceleration <b>g ≈ 9.8 m/s²</b>. A falling body accelerates until air resistance balances its weight, reaching a constant <b>terminal velocity</b> (zero resultant force, zero acceleration).</p>" }
  ],
  simulation:{ title:"Motion Lab", file:"sims/motion-lab.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Set a starting speed and acceleration; watch the distance–time and speed–time graphs build.","Make the gradient of the speed–time graph zero and see constant speed.","Read distance off as the area under the speed–time graph."] },
  formulas:[ {f:"speed = distance ÷ time", d:"Unit m/s."}, {f:"a = (v − u) ÷ t", d:"Acceleration, unit m/s²."}, {f:"gradient of d–t graph = speed", d:""}, {f:"area under v–t graph = distance", d:""} ],
  practice:[
    { q:"The gradient of a distance–time graph represents:", type:"mcq", options:["distance","speed","acceleration","time"], answer:1, marks:1, solution:"Gradient of a distance–time graph = speed." },
    { q:"On a speed–time graph, the area under the line represents:", type:"mcq", options:["acceleration","speed","distance travelled","force"], answer:2, marks:1, solution:"Area under a speed–time graph = distance travelled." },
    { q:"A cyclist accelerates from 4 m/s to 10 m/s in 3 s. Calculate the acceleration.", type:"struct", answer:"2 m/s²", marks:2, solution:"a = (10 − 4) ÷ 3 = 6 ÷ 3 = 2 m/s². [2]" },
    { q:"Explain what terminal velocity is. (Extended)", type:"struct", answer:"Constant velocity when air resistance = weight", marks:2, solution:"The constant velocity reached when air resistance equals weight, so resultant force and acceleration are zero. [2]" }
  ],
  mistakes:[
    "Confusing <b>speed</b> (scalar) with <b>velocity</b> (vector) — velocity needs a direction.",
    "Reading the <b>area</b> of a distance–time graph — it has no meaning. Area matters only on speed–time graphs.",
    "Forgetting units: acceleration is m/s², not m/s.",
    "Thinking a curved distance–time graph means acceleration is constant — a curve just means speed is changing."
  ],
  exam:[
    { q:"A car travels 150 m in 10 s at constant speed. Calculate the speed. [2]", marks:2, solution:"speed = distance ÷ time = 150 ÷ 10 = 15 m/s. [2]" },
    { q:"Sketch a speed–time graph for an object that accelerates uniformly then travels at constant speed. [3]", marks:3, solution:"A straight upward slope (acceleration) followed by a horizontal line (constant speed). [3]" }
  ],
  checklist:[ "I can calculate speed from distance and time.","I can calculate acceleration using a = (v−u)/t.","I can interpret distance–time graphs (gradient = speed).","I can interpret speed–time graphs (gradient = acceleration, area = distance).","I can explain free fall and terminal velocity (Extended)." ]
},

"IG1.3": {
  title: "Mass and weight",
  tier: "core",
  slides:[
    { title:"Mass vs weight",
      html:"<p><b>Mass</b> = amount of matter in an object (kg). It never changes.</p><p><b>Weight</b> = the force of gravity on that mass (N). It changes with location.</p>"+
         "<div class='f'><p>You have the same mass on the Moon, but less weight.</p></div>" },
    { title:"Calculating weight",
      html:"<p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>W = m × g</b></p><p>W = weight (N), m = mass (kg), g = gravitational field strength (N/kg).</p>"+
         "<div class='f'><p>On Earth g ≈ 9.8 N/kg (use 10 for easy sums).</p></div>" },
    { title:"Gravitational field strength",
      html:"<p><b>g</b> is the force of gravity per kilogram. On Earth ≈ 9.8 N/kg; on the Moon ≈ 1.6 N/kg.</p>"+
         "<div class='f'><p>That's why astronauts weigh less on the Moon but keep the same mass.</p></div>" },
    { title:"Measuring mass and weight",
      html:"<ul><li><b>Mass</b> — balance (compares to known masses).</li><li><b>Weight</b> — newton-meter (spring balance).</li></ul>"+
         "<div class='f'><p>A balance gives the same reading anywhere; a spring balance does not.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A 6 kg bag on Earth (g = 10 N/kg) — find its weight.</p><p class='f'><b>A:</b> W = m × g = 6 × 10 = <b>60 N</b>.</p></div>" }
  ],
  learn:[
    { tier:"core", heading:"The difference between mass and weight",
      html:"<p><b>Mass</b> is how much matter an object contains, measured in kilograms — it is the same everywhere. <b>Weight</b> is the pull of gravity on that mass, a force measured in newtons — it depends where you are.</p>" },
    { tier:"core", heading:"Weight = mass × g",
      html:"<p style='text-align:center;font-size:1.15em;color:var(--ig-d)'><b>W = m × g</b></p><p>g is the gravitational field strength: about 9.8 N/kg on Earth, 1.6 N/kg on the Moon. A larger g means a larger weight for the same mass.</p>" },
    { tier:"core", heading:"Measuring",
      html:"<ul><li>Mass — a balance, comparing against standard masses.</li><li>Weight — a spring balance (newton-meter).</li></ul>" }
  ],
  simulation:{ title:"Gravity Lab", file:"sims/gravity-lab.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Change the planet and see how weight changes while mass stays fixed.","Verify W = m × g by reading the values.","Compare Earth and Moon for the same object."] },
  formulas:[ {f:"W = m × g", d:"Weight = mass × gravitational field strength."}, {f:"g (Earth) ≈ 9.8 N/kg", d:"Use 10 for quick calculations."} ],
  practice:[
    { q:"Which statement is correct?", type:"mcq", options:["Mass is a force","Weight is measured in kg","Mass is the same everywhere","Weight never changes"], answer:2, marks:1, solution:"Mass (matter) is the same everywhere; weight changes with g." },
    { q:"Calculate the weight of a 12 kg object on Earth (g = 9.8 N/kg).", type:"struct", answer:"117.6 N", marks:2, solution:"W = m × g = 12 × 9.8 = 117.6 N ≈ 118 N. [2]" },
    { q:"Explain why an astronaut's weight is less on the Moon but their mass is unchanged.", type:"struct", answer:"g is smaller on Moon", marks:2, solution:"Mass (matter) is unchanged. The Moon's g (1.6 N/kg) is smaller than Earth's, so W = mg is smaller. [2]" }
  ],
  mistakes:[
    "Saying weight is measured in kilograms — weight is a <b>force</b>, measured in <b>newtons</b>.",
    "Thinking mass changes on the Moon — only <b>weight</b> changes; mass is constant.",
    "Forgetting to multiply by g when asked for weight."
  ],
  exam:[
    { q:"State the difference between mass and weight. [2]", marks:2, solution:"Mass is the amount of matter (kg), the same everywhere. Weight is the gravitational force on the mass (N), depending on g. [2]" },
    { q:"A rock has a weight of 45 N on Earth (g = 9.8 N/kg). Calculate its mass. [2]", marks:2, solution:"m = W ÷ g = 45 ÷ 9.8 = 4.6 kg. [2]" }
  ],
  checklist:[ "I can state the difference between mass and weight.","I can use W = m × g.","I can rearrange to find mass from weight.","I can explain why weight changes with location but mass does not." ]
},

"IG1.4": {
  title: "Density",
  tier: "core",
  slides:[
    { title:"What is density?",
      html:"<p><b>Density</b> tells you how much mass is packed into a given volume.</p><p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>ρ = m ÷ V</b></p>"+
         "<div class='f'><p>Unit: kg/m³ or g/cm³. Water = 1000 kg/m³ = 1 g/cm³.</p></div>" },
    { title:"Measuring density of a regular solid",
      html:"<ul><li>Measure mass on a balance.</li><li>Measure sides and calculate volume.</li><li>Divide: ρ = m ÷ V.</li></ul>" },
    { title:"Measuring density of an irregular solid",
      html:"<ul><li>Mass on a balance.</li><li>Volume by displacement (measuring cylinder).</li><li>ρ = m ÷ V.</li></ul>"+
         "<div class='f'><p>The water pushed up equals the object's volume.</p></div>" },
    { title:"Floating and sinking",
      html:"<p>An object <b>floats</b> if it is less dense than the liquid, and <b>sinks</b> if it is denser.</p>"+
         "<div class='f'><p>Ice floats on water because ice is less dense than liquid water.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A block has mass 240 g and volume 30 cm³. Find its density.</p><p class='f'><b>A:</b> ρ = 240 ÷ 30 = <b>8 g/cm³</b>.</p></div>" }
  ],
  learn:[
    { tier:"core", heading:"Density: mass per unit volume",
      html:"<p style='text-align:center;font-size:1.15em;color:var(--ig-d)'><b>ρ = m ÷ V</b></p><p>Density measures how tightly matter is packed. A small dense object (like lead) can be heavier than a large light one (like foam). Units: kg/m³ or g/cm³.</p>" },
    { tier:"core", heading:"Finding density in the lab",
      html:"<p><b>Regular solid:</b> mass on a balance, volume by calculation. <b>Irregular solid:</b> mass on a balance, volume by displacement. <b>Liquid:</b> mass of a known volume in a measuring cylinder.</p>" },
    { tier:"core", heading:"Floating and sinking",
      html:"<p>Compare densities: an object floats if less dense than the surrounding liquid, sinks if more dense. This is why oil floats on water.</p>" }
  ],
  simulation:{ title:"Density Lab", file:"sims/density-lab.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Change an object's mass and volume; watch its density and whether it floats.","Find the density of an irregular shape by displacement.","Test which materials float in water (ρ = 1 g/cm³)."] },
  formulas:[ {f:"ρ = m ÷ V", d:"Density = mass ÷ volume. Unit kg/m³ or g/cm³."}, {f:"ρ(water) = 1000 kg/m³ = 1 g/cm³", d:"Objects less dense than this float."} ],
  practice:[
    { q:"The unit of density is:", type:"mcq", options:["kg","kg/m³","m³","N/kg"], answer:1, marks:1, solution:"Density = mass ÷ volume, so kg/m³." },
    { q:"A metal cube has mass 54 g and side 3.0 cm. Calculate its density.", type:"struct", answer:"2 g/cm³", marks:3, solution:"V = 3³ = 27 cm³. ρ = 54 ÷ 27 = 2.0 g/cm³. [3]" },
    { q:"Explain how to find the density of an irregular stone.", type:"struct", answer:"Mass on balance, volume by displacement", marks:3, solution:"Find mass on a balance. Find volume by displacement in a measuring cylinder. Density = mass ÷ volume. [3]" }
  ],
  mistakes:[
    "Mixing units — don't divide grams by m³. Keep mass and volume in matching units.",
    "Forgetting to cube the side for a cube's volume (V = s³, not s²).",
    "Thinking heavier always means denser — a large light object can outweigh a small dense one."
  ],
  exam:[
    { q:"Define density. [1]", marks:1, solution:"Mass per unit volume (ρ = m/V). [1]" },
    { q:"A liquid of volume 50 cm³ has mass 40 g. Calculate its density and state whether it floats on water. [3]", marks:3, solution:"ρ = 40 ÷ 50 = 0.8 g/cm³. Less than 1 g/cm³, so it floats on water. [3]" }
  ],
  checklist:[ "I can define density and state its units.","I can use ρ = m ÷ V.","I can find the volume of a regular and irregular solid.","I can predict floating or sinking by comparing densities." ]
}

};
