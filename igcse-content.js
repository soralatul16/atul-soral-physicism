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
    { tier:"foundation", heading:"What it means to measure",
      html:"<p>Suppose you tell a friend “the desk is 3 long.” Three <i>what</i>? Three metres, three feet, three hand-spans? The number 3 on its own means nothing. Every measurement in physics must carry two pieces of information together:</p>"+
           "<p style='text-align:center;font-size:1.3em;margin:18px 0;color:var(--ig-d)'><b>physical quantity = number × unit</b></p>"+
           "<p>The <b>number</b> tells you how many, and the <b>unit</b> tells you of what. A length of 3 metres is written <b>3 m</b>; the 3 is the number and the m is the unit. Leaving off the unit is one of the most common — and most costly — mistakes in physics, because a bare number cannot be checked, compared, or used in a calculation.</p>"+
           "<p>A <b>physical quantity</b> is anything we can measure: length, mass, time, temperature, current, force, energy, and dozens more. Throughout this course, every quantity you meet will always be a number together with a unit.</p>" },

    { tier:"core", heading:"The SI system and base units",
      html:"<p>If every country used its own units, comparing scientific results would be chaos. To avoid this, scientists worldwide use one agreed system: the <b>SI system</b> (Système International). It is built on a small set of <b>base units</b>, from which every other unit is constructed. Five base quantities matter at IGCSE:</p>"+
           "<table class='ig-tbl'><tr><th>Base quantity</th><th>Unit</th><th>Symbol</th></tr>"+
           "<tr><td>length</td><td>metre</td><td>m</td></tr>"+
           "<tr><td>mass</td><td>kilogram</td><td>kg</td></tr>"+
           "<tr><td>time</td><td>second</td><td>s</td></tr>"+
           "<tr><td>electric current</td><td>ampere</td><td>A</td></tr>"+
           "<tr><td>temperature</td><td>kelvin</td><td>K</td></tr></table>"+
           "<p>Notice the base unit of mass is the <b>kilogram</b>, not the gram — this often surprises students.</p>"+
           "<h4>Derived units</h4>"+
           "<p>Every other unit is <b>derived</b> by combining base units through a defining equation. For example:</p>"+
           "<ul><li><b>Speed</b> = distance ÷ time, so its unit is metre per second, <b>m/s</b>.</li>"+
           "<li><b>Area</b> = length × length, so its unit is <b>m²</b>.</li>"+
           "<li><b>Force</b> is measured in <b>newtons (N)</b>. One newton is really 1 kg·m/s² — you can see the base units hidden inside.</li></ul>"+
           "<p>Understanding that derived units come from base units lets you check any equation: if the units on both sides don't match, the equation is wrong.</p>" },

    { tier:"core", heading:"Prefixes for large and small quantities",
      html:"<p>Physics deals with sizes from atoms to galaxies, so we use <b>prefixes</b> to avoid writing long strings of zeros. Each prefix multiplies the unit by a power of ten:</p>"+
           "<table class='ig-tbl'><tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th></tr>"+
           "<tr><td>kilo</td><td>k</td><td>× 1000 (10³)</td></tr>"+
           "<tr><td>centi</td><td>c</td><td>÷ 100 (10⁻²)</td></tr>"+
           "<tr><td>milli</td><td>m</td><td>÷ 1000 (10⁻³)</td></tr>"+
           "<tr><td>micro</td><td>μ</td><td>÷ 1 000 000 (10⁻⁶)</td></tr>"+
           "<tr><td>nano</td><td>n</td><td>÷ 1 000 000 000 (10⁻⁹)</td></tr></table>"+
           "<p>So 3 km = 3000 m, and 5 mm = 0.005 m. Being fluent with prefixes saves you from errors when converting units in calculations.</p>" },

    { tier:"core", heading:"Measuring length accurately",
      html:"<p>The right instrument depends on the size and precision you need:</p>"+
           "<ul><li><b>Metre rule</b> — everyday lengths; reads to the nearest <b>1 mm</b>.</li>"+
           "<li><b>Micrometer screw gauge</b> — very small thicknesses such as a wire's diameter; reads to <b>0.01 mm</b>.</li>"+
           "<li><b>Measuring tape</b> — long or curved distances.</li></ul>"+
           "<p>A micrometer has a main scale on the sleeve and a rotating thimble scale. You read the sleeve to the nearest 0.5 mm, then add the thimble reading (each division = 0.01 mm):</p>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='300' height='120' viewBox='0 0 300 120' style='max-width:100%'>"+
           "<rect x='20' y='50' width='160' height='24' fill='#e6e3f5' stroke='#6c4cff'/>"+
           "<line x1='40' y1='50' x2='40' y2='74' stroke='#5238cc'/><line x1='70' y1='50' x2='70' y2='74' stroke='#5238cc'/><line x1='100' y1='50' x2='100' y2='74' stroke='#5238cc'/><line x1='130' y1='50' x2='130' y2='74' stroke='#5238cc'/>"+
           "<text x='20' y='90' font-size='10' fill='#413b63'>0</text><text x='95' y='90' font-size='10' fill='#413b63'>5 mm</text>"+
           "<rect x='180' y='40' width='90' height='44' rx='6' fill='#6c4cff'/>"+
           "<text x='198' y='67' font-size='11' fill='#fff'>thimble</text>"+
           "<text x='60' y='40' font-size='10' fill='#413b63'>sleeve scale</text>"+
           "</svg></div>"+
           "<p><b>Worked example:</b> A micrometer sleeve reads 4.5 mm and the thimble reads 32 divisions. Diameter = 4.5 + (32 × 0.01) = 4.5 + 0.32 = <b>4.82 mm</b>.</p>" },

    { tier:"core", heading:"Measuring volume",
      html:"<h4>Regular solids</h4>"+
           "<p>Measure the dimensions and calculate. For a cuboid, <b>V = length × width × height</b>. A block 4 cm × 3 cm × 2 cm has V = 24 cm³.</p>"+
           "<h4>Liquids</h4>"+
           "<p>Pour into a <b>measuring cylinder</b> and read the scale at the bottom of the curved surface (the <b>meniscus</b>), with your eye level with the liquid to avoid parallax error.</p>"+
           "<h4>Irregular solids — the displacement method</h4>"+
           "<p>You cannot use a formula for an odd shape like a stone, so you use the water it pushes aside:</p>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='260' height='140' viewBox='0 0 260 140' style='max-width:100%'>"+
           "<rect x='30' y='20' width='60' height='110' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/>"+
           "<rect x='32' y='70' width='56' height='58' fill='#cfe8ff'/><text x='36' y='60' font-size='10' fill='#413b63'>50 mL</text>"+
           "<rect x='170' y='20' width='60' height='110' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/>"+
           "<rect x='172' y='50' width='56' height='78' fill='#cfe8ff'/><circle cx='200' cy='100' r='14' fill='#9b7dff'/><text x='176' y='40' font-size='10' fill='#413b63'>68 mL</text>"+
           "<text x='95' y='140' font-size='10' fill='#413b63'>before</text><text x='185' y='140' font-size='10' fill='#413b63'>after</text>"+
           "</svg></div>"+
           "<p>Volume of the stone = final reading − initial reading = 68 − 50 = <b>18 cm³</b> (1 mL = 1 cm³).</p>" },

    { tier:"core", heading:"Measuring time and reducing error",
      html:"<p>Time is measured with a <b>stopwatch</b> (digital, ±0.01 s) or, for very fast events, electronic <b>light gates</b>.</p>"+
           "<p>Your reaction time (~0.2 s) adds error every time you start and stop a stopwatch. For a repeating motion like a swinging pendulum, you reduce this by timing <b>many oscillations</b> and dividing:</p>"+
           "<p><b>Worked example:</b> A pendulum takes 30.0 s for 20 complete swings. Time for one swing = 30.0 ÷ 20 = <b>1.5 s</b>. The ±0.2 s reaction error is now spread over 20 swings, so the error per swing is 20 times smaller.</p>"+
           "<h4>Three habits for accurate readings</h4>"+
           "<ul><li><b>Avoid parallax:</b> read any scale straight on, at eye level.</li>"+
           "<li><b>Check the zero:</b> make sure the instrument reads zero before measuring (a micrometer or balance can have a zero error).</li>"+
           "<li><b>Repeat and average:</b> take several readings and use the mean to reduce random error.</li></ul>" },

    { tier:"ext", heading:"Scalars and vectors",
      html:"<p>Some quantities are fully described by a size alone; others also need a direction.</p>"+
           "<p>A <b>scalar</b> has <b>magnitude only</b>: mass, time, distance, speed, energy, temperature.</p>"+
           "<p>A <b>vector</b> has <b>magnitude and direction</b>: displacement, velocity, acceleration, force, weight, momentum.</p>"+
           "<h4>Combining vectors</h4>"+
           "<p>Vectors along the same line simply add or subtract: two forces of 3 N and 4 N pulling the same way give 7 N; pulling opposite ways they give 1 N.</p>"+
           "<p>Two <b>perpendicular</b> vectors combine using a scale drawing or Pythagoras. A 3 N force east and a 4 N force north give a resultant of √(3² + 4²) = √25 = <b>5 N</b>, at an angle found from the triangle:</p>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='200' height='150' viewBox='0 0 200 150' style='max-width:100%'>"+
           "<line x1='40' y1='120' x2='160' y2='120' stroke='#6c4cff' stroke-width='3'/><text x='95' y='138' font-size='11' fill='#413b63'>3 N</text>"+
           "<line x1='160' y1='120' x2='160' y2='40' stroke='#16a34a' stroke-width='3'/><text x='165' y='85' font-size='11' fill='#413b63'>4 N</text>"+
           "<line x1='40' y1='120' x2='160' y2='40' stroke='#ea580c' stroke-width='3'/><text x='80' y='70' font-size='11' fill='#ea580c'>5 N</text>"+
           "</svg></div>" }
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
      html:"<p>Motion means an object is changing its position. To describe how fast that happens we use <b>speed</b> — the distance travelled each second:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>speed = distance ÷ time</b></p>"+
           "<p>The unit is the <b>metre per second (m/s)</b>. There are two kinds of speed to distinguish:</p>"+
           "<ul><li><b>Average speed</b> = total distance ÷ total time for a whole journey.</li>"+
           "<li><b>Instantaneous speed</b> = the speed at one particular moment — what a car's speedometer shows.</li></ul>"+
           "<p><b>Worked example:</b> A runner covers 100 m in 12.5 s. Average speed = 100 ÷ 12.5 = <b>8 m/s</b>.</p>" },
    { tier:"core", heading:"Velocity and acceleration",
      html:"<p><b>Velocity</b> is speed in a stated direction — so it is a vector. Two cars moving at 30 m/s in opposite directions have the same speed but different velocities.</p>"+
           "<p><b>Acceleration</b> is how quickly velocity changes each second:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>a = (v − u) ÷ t</b></p>"+
           "<p>where <b>u</b> = initial velocity, <b>v</b> = final velocity, <b>t</b> = time taken. The unit is <b>m/s²</b>. A positive value means speeding up; a negative value (deceleration) means slowing down.</p>"+
           "<p><b>Worked example:</b> A car speeds up from 5 m/s to 25 m/s in 8 s. a = (25 − 5) ÷ 8 = 20 ÷ 8 = <b>2.5 m/s²</b>.</p>" },
    { tier:"core", heading:"Distance–time graphs",
      html:"<p>A distance–time graph shows how far an object has travelled over time. The <b>gradient (steepness) equals the speed</b>.</p>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='260' height='170' viewBox='0 0 260 170' style='max-width:100%'>"+
           "<line x1='40' y1='140' x2='240' y2='140' stroke='#413b63'/><line x1='40' y1='140' x2='40' y2='20' stroke='#413b63'/>"+
           "<text x='120' y='162' font-size='10' fill='#413b63'>time</text><text x='6' y='80' font-size='10' fill='#413b63'>distance</text>"+
           "<line x1='40' y1='140' x2='120' y2='140' stroke='#16a34a' stroke-width='3'/>"+
           "<line x1='120' y1='140' x2='200' y2='60' stroke='#6c4cff' stroke-width='3'/>"+
           "<text x='60' y='134' font-size='9' fill='#16a34a'>at rest</text><text x='150' y='95' font-size='9' fill='#6c4cff'>constant speed</text>"+
           "</svg></div>"+
           "<ul><li><b>Flat (horizontal)</b> line → object is stationary.</li><li><b>Straight slope</b> → constant speed (steeper = faster).</li><li><b>Curve</b> → speed is changing (accelerating).</li></ul>" },
    { tier:"core", heading:"Speed–time graphs",
      html:"<p>A speed–time graph shows how speed changes with time. Here <b>two</b> things are read off:</p>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='260' height='170' viewBox='0 0 260 170' style='max-width:100%'>"+
           "<line x1='40' y1='140' x2='240' y2='140' stroke='#413b63'/><line x1='40' y1='140' x2='40' y2='20' stroke='#413b63'/>"+
           "<text x='120' y='162' font-size='10' fill='#413b63'>time</text><text x='10' y='80' font-size='10' fill='#413b63'>speed</text>"+
           "<line x1='40' y1='140' x2='130' y2='50' stroke='#6c4cff' stroke-width='3'/>"+
           "<line x1='130' y1='50' x2='220' y2='50' stroke='#16a34a' stroke-width='3'/>"+
           "<polygon points='40,140 130,50 130,140' fill='rgba(108,76,255,0.12)'/>"+
           "<text x='60' y='95' font-size='9' fill='#6c4cff'>accelerating</text><text x='150' y='44' font-size='9' fill='#16a34a'>constant speed</text>"+
           "<text x='70' y='132' font-size='9' fill='#5238cc'>area = distance</text>"+
           "</svg></div>"+
           "<ul><li>The <b>gradient</b> = acceleration.</li><li>The <b>area under</b> the line = distance travelled.</li><li>A flat line = constant speed (zero acceleration).</li></ul>"+
           "<p><b>Worked example:</b> If an object accelerates uniformly from 0 to 20 m/s in 4 s, the area under the line is a triangle: ½ × 4 × 20 = <b>40 m</b> travelled.</p>" },
    { tier:"ext", heading:"Free fall and the acceleration due to gravity",
      html:"<p>Near the Earth's surface, gravity pulls every object down with the same acceleration, the <b>acceleration of free fall g ≈ 9.8 m/s²</b> (often rounded to 10 m/s²).</p>"+
           "<p>Ignoring air resistance, a heavy hammer and a light feather fall together — famously demonstrated on the Moon, where there is no air. On Earth the feather is slowed by air resistance, not by weaker gravity.</p>" },
    { tier:"ext", heading:"Terminal velocity",
      html:"<p>When an object falls through air, two forces act: its <b>weight</b> (down) and <b>air resistance</b> (up). Air resistance grows as the object speeds up.</p>"+
           "<p>At first weight is much bigger, so the object accelerates. As it goes faster, air resistance rises until it <b>equals the weight</b>. Now the resultant force is zero, so acceleration is zero and the object falls at a steady <b>terminal velocity</b>.</p>"+
           "<p>This is why a skydiver reaches a constant speed, and why opening a parachute (more air resistance) gives a new, lower terminal velocity for a safe landing.</p>" }
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
    { tier:"core", heading:"Mass: the amount of matter",
      html:"<p><b>Mass</b> is a measure of how much matter an object contains. It is measured in <b>kilograms (kg)</b> and it does not change when you move the object — a 2 kg bag of sugar has a mass of 2 kg on Earth, on the Moon, or floating in deep space.</p>"+
           "<p>Mass also measures an object's <b>inertia</b>: its resistance to a change in motion. A more massive object is harder to speed up, slow down or turn.</p>" },
    { tier:"core", heading:"Weight: the pull of gravity",
      html:"<p><b>Weight</b> is the <b>force</b> that gravity exerts on an object's mass. Because it is a force, it is measured in <b>newtons (N)</b>, and because gravity varies from place to place, weight varies too.</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>W = m × g</b></p>"+
           "<p>Here <b>W</b> is weight (N), <b>m</b> is mass (kg), and <b>g</b> is the <b>gravitational field strength</b> — the force of gravity on each kilogram, measured in N/kg.</p>"+
           "<p><b>Worked example:</b> A student of mass 60 kg on Earth (g = 9.8 N/kg) has weight W = 60 × 9.8 = <b>588 N</b>.</p>" },
    { tier:"core", heading:"Gravitational field strength",
      html:"<p><b>g</b> tells you how strong gravity is at a location:</p>"+
           "<table class='ig-tbl'><tr><th>Place</th><th>g (N/kg)</th></tr>"+
           "<tr><td>Earth's surface</td><td>≈ 9.8</td></tr><tr><td>Moon's surface</td><td>≈ 1.6</td></tr><tr><td>Jupiter's surface</td><td>≈ 24</td></tr></table>"+
           "<p>The same 60 kg student would weigh only about 60 × 1.6 = 96 N on the Moon — their <b>mass is unchanged</b>, but their <b>weight is far less</b> because the Moon's gravity is weaker. This is why astronauts can bounce around on the Moon while carrying the same amount of matter.</p>" },
    { tier:"core", heading:"Measuring mass and weight",
      html:"<ul><li><b>Mass</b> — a <b>balance</b> compares the object against known masses. Because it compares, it gives the same reading anywhere.</li>"+
           "<li><b>Weight</b> — a <b>spring balance (newton-meter)</b> measures the pull of gravity directly, so its reading changes with location.</li></ul>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='240' height='130' viewBox='0 0 240 130' style='max-width:100%'>"+
           "<line x1='60' y1='15' x2='60' y2='55' stroke='#413b63' stroke-width='2'/>"+
           "<path d='M45 55 q15 20 30 0' fill='none' stroke='#6c4cff' stroke-width='2'/>"+
           "<rect x='48' y='75' width='24' height='20' fill='#9b7dff'/>"+
           "<text x='30' y='115' font-size='10' fill='#413b63'>spring balance</text>"+
           "<line x1='150' y1='30' x2='210' y2='30' stroke='#413b63' stroke-width='2'/>"+
           "<line x1='180' y1='30' x2='180' y2='15' stroke='#413b63' stroke-width='2'/>"+
           "<rect x='150' y='30' width='24' height='14' fill='#16a34a'/><rect x='186' y='30' width='24' height='14' fill='#16a34a'/>"+
           "<text x='150' y='70' font-size='10' fill='#413b63'>balance</text>"+
           "</svg></div>" }
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
    { tier:"core", heading:"What density means",
      html:"<p><b>Density</b> tells you how much mass is packed into a given volume. It explains why a small lead fishing weight feels heavy while a large foam cushion feels light — the lead has far more mass in each cubic centimetre.</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>ρ = m ÷ V</b></p>"+
           "<p>Here <b>ρ</b> (the Greek letter 'rho') is density, <b>m</b> is mass and <b>V</b> is volume. The unit is <b>kg/m³</b> or, for smaller objects, <b>g/cm³</b>. Water has a density of 1000 kg/m³, which is the same as 1 g/cm³ — a useful number to remember.</p>"+
           "<p><b>Worked example:</b> A metal block has mass 240 g and volume 30 cm³. ρ = 240 ÷ 30 = <b>8 g/cm³</b> — roughly the density of iron.</p>" },
    { tier:"core", heading:"Finding the density of a regular solid",
      html:"<ol><li>Find the <b>mass</b> on a balance.</li><li>Measure the sides and <b>calculate the volume</b> (cuboid: V = l × w × h).</li><li>Divide: ρ = m ÷ V.</li></ol>"+
           "<p>This works whenever the shape has a volume formula — cubes, cuboids, cylinders, spheres.</p>" },
    { tier:"core", heading:"Finding the density of an irregular solid",
      html:"<p>An odd shape like a stone has no volume formula, so you use the <b>displacement method</b>:</p>"+
           "<ol><li>Find the <b>mass</b> on a balance.</li><li>Part-fill a measuring cylinder with water and note the volume.</li><li>Lower the object in fully; note the new volume.</li><li><b>Volume of object = new reading − first reading.</b></li><li>ρ = m ÷ V.</li></ol>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='240' height='130' viewBox='0 0 240 130' style='max-width:100%'>"+
           "<rect x='30' y='15' width='50' height='105' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/><rect x='32' y='65' width='46' height='53' fill='#cfe8ff'/><text x='30' y='58' font-size='9' fill='#413b63'>40 cm³</text>"+
           "<rect x='160' y='15' width='50' height='105' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/><rect x='162' y='45' width='46' height='73' fill='#cfe8ff'/><circle cx='185' cy='95' r='12' fill='#9b7dff'/><text x='160' y='38' font-size='9' fill='#413b63'>55 cm³</text>"+
           "<text x='120' y='70' font-size='16' fill='#5238cc'>→</text>"+
           "</svg></div>"+
           "<p>Here volume = 55 − 40 = <b>15 cm³</b>.</p>" },
    { tier:"core", heading:"Floating, sinking and everyday density",
      html:"<p>Whether something floats depends on how its density compares with the liquid's:</p>"+
           "<ul><li>Less dense than the liquid → it <b>floats</b> (wood, ice, oil on water).</li><li>More dense → it <b>sinks</b> (a stone, a coin).</li></ul>"+
           "<p>Ice floats because freezing water expands, making ice slightly less dense than liquid water — which is why icebergs sit partly above the surface. Oil floats on water because oil is less dense.</p>" }
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
},

"IG1.5": {
  title: "Forces",
  tier: "both",
  slides:[
    { title:"What a force does",
      html:"<p>A <b>force</b> is a push or pull (unit: newton, N). Forces can change an object's <b>speed, direction or shape</b>.</p><div class='f'><p>Forces are vectors — they have size and direction.</p></div>" },
    { title:"Resultant force",
      html:"<p>The <b>resultant</b> is the single force equal to all forces combined.</p><ul><li>Same direction → add</li><li>Opposite → subtract</li></ul><div class='f'><p>Zero resultant → object stays still or moves at constant velocity.</p></div>" },
    { title:"Newton's second law",
      html:"<p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>F = m × a</b></p><p>A resultant force makes a mass accelerate.</p><div class='f'><p>Bigger force → bigger acceleration; bigger mass → smaller acceleration.</p></div>" },
    { title:"Friction and air resistance",
      html:"<p><b>Friction</b> opposes motion between surfaces; <b>air resistance</b> (drag) opposes motion through air.</p><div class='f'><p>Both act opposite to the direction of movement.</p></div>" },
    { title:"Hooke's law (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>F = k × x</b></p><p>Extension of a spring is proportional to the force — up to the limit of proportionality.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A resultant force of 12 N acts on a 4 kg mass. Find the acceleration.</p><p class='f'><b>A:</b> a = F ÷ m = 12 ÷ 4 = <b>3 m/s²</b>.</p></div>" }
  ],
  learn:[
    { tier:"foundation", heading:"What a force can do",
      html:"<p>A <b>force</b> is simply a push or a pull. Forces are measured in <b>newtons (N)</b> using a newton-meter (spring balance). A force can:</p>"+
           "<ul><li>start an object moving, or stop it;</li><li>speed it up or slow it down;</li><li>change its direction;</li><li>change its shape (stretch, squash or bend it).</li></ul>"+
           "<p>Because a force has both a size and a direction, it is a <b>vector</b> and is often drawn as an arrow — longer arrow means bigger force, and the arrow points the way the force acts.</p>" },
    { tier:"core", heading:"Resultant force",
      html:"<p>Usually several forces act on an object at once. The <b>resultant force</b> is the single force that has the same effect as all of them combined.</p>"+
           "<ul><li>Forces in the <b>same direction</b> add together.</li><li>Forces in <b>opposite directions</b> subtract.</li></ul>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='260' height='90' viewBox='0 0 260 90' style='max-width:100%'>"+
           "<rect x='110' y='35' width='40' height='30' fill='#9b7dff'/>"+
           "<line x1='60' y1='50' x2='108' y2='50' stroke='#16a34a' stroke-width='3' marker-end='url(#ar)'/><text x='60' y='30' font-size='10' fill='#16a34a'>10 N</text>"+
           "<line x1='200' y1='50' x2='152' y2='50' stroke='#dc2626' stroke-width='3' marker-end='url(#ar)'/><text x='170' y='30' font-size='10' fill='#dc2626'>4 N</text>"+
           "<defs><marker id='ar' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6' fill='#333'/></marker></defs>"+
           "<text x='95' y='85' font-size='10' fill='#5238cc'>resultant = 6 N to the right</text>"+
           "</svg></div>"+
           "<p>If the resultant is <b>zero</b>, the forces are balanced: the object stays still, or keeps moving at constant velocity (this is <b>equilibrium</b>).</p>" },
    { tier:"core", heading:"Newton's second law: F = ma",
      html:"<p>A non-zero resultant force makes an object <b>accelerate</b>. The bigger the force, the bigger the acceleration; the bigger the mass, the smaller the acceleration:</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>F = m × a</b></p>"+
           "<p><b>F</b> = resultant force (N), <b>m</b> = mass (kg), <b>a</b> = acceleration (m/s²).</p>"+
           "<p><b>Worked example:</b> A resultant force of 12 N acts on a 4 kg trolley. a = F ÷ m = 12 ÷ 4 = <b>3 m/s²</b>.</p>" },
    { tier:"core", heading:"Friction and air resistance",
      html:"<p><b>Friction</b> is a force that opposes motion between two surfaces in contact. <b>Air resistance (drag)</b> opposes motion through air. Both always act <b>opposite</b> to the direction of movement.</p>"+
           "<p>Friction can be useful (tyre grip, brakes, being able to walk) or a nuisance (wear and wasted energy as heat). Reducing it — with oil, wheels or streamlining — makes machines more efficient.</p>" },
    { tier:"ext", heading:"Hooke's law",
      html:"<p>When you stretch a spring, the <b>extension</b> (how much it lengthens) is proportional to the force pulling it — up to a point called the <b>limit of proportionality</b>:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>F = k × x</b></p>"+
           "<p><b>F</b> = force (N), <b>x</b> = extension (m), <b>k</b> = spring constant (N/m) — a stiff spring has a large k. A force–extension graph is a straight line through the origin until the limit of proportionality, after which it curves.</p>"+
           "<p><b>Worked example:</b> A spring extends 0.04 m under a 2 N load. k = F ÷ x = 2 ÷ 0.04 = <b>50 N/m</b>.</p>" }
  ],
  simulation:{ title:"Motion Lab", file:"sims/motion-lab.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Apply a force to a mass and watch it accelerate (F = ma).","Balance two opposing forces to get zero resultant.","Add friction and see how it opposes motion."] },
  formulas:[ {f:"F = m × a", d:"Resultant force = mass × acceleration. Unit N."}, {f:"resultant = sum of forces (with direction)", d:""}, {f:"F = k × x", d:"Hooke's law (Extended); k = spring constant."} ],
  practice:[
    { q:"The unit of force is the:", type:"mcq", options:["joule","newton","watt","pascal"], answer:1, marks:1, solution:"Force is measured in newtons (N)." },
    { q:"A 2 kg trolley experiences a resultant force of 10 N. Calculate its acceleration.", type:"struct", answer:"5 m/s²", marks:2, solution:"a = F ÷ m = 10 ÷ 2 = 5 m/s². [2]" },
    { q:"State Hooke's law. (Extended)", type:"struct", answer:"Extension proportional to force", marks:2, solution:"The extension of a spring is proportional to the force applied, up to the limit of proportionality. [2]" }
  ],
  mistakes:[
    "Forgetting forces are <b>vectors</b> — opposing forces subtract, they don't just add.",
    "Using F = ma with the wrong mass or forgetting to find the <b>resultant</b> first.",
    "Thinking a moving object needs a constant force — at constant velocity the resultant is zero."
  ],
  exam:[
    { q:"A car of mass 900 kg accelerates at 2 m/s². Calculate the resultant force. [2]", marks:2, solution:"F = ma = 900 × 2 = 1800 N. [2]" },
    { q:"Explain why a skydiver reaches a constant velocity. [3]", marks:3, solution:"As speed rises, air resistance increases until it equals weight. Resultant force becomes zero, so acceleration is zero and velocity stays constant (terminal velocity). [3]" }
  ],
  checklist:[ "I can describe the effects of a force.","I can find a resultant force.","I can use F = m × a.","I can describe friction and air resistance.","I can state and use Hooke's law (Extended)." ]
},

"IG1.6": {
  title: "Momentum",
  tier: "ext",
  slides:[
    { title:"What is momentum? (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>p = m × v</b></p><p>Momentum = mass × velocity. Unit: kg·m/s. It's a vector.</p>" },
    { title:"Conservation of momentum",
      html:"<div class='ig-ext'>EXTENDED</div><p>In a collision with no external force, <b>total momentum before = total momentum after</b>.</p><div class='f'><p>momentum before = momentum after</p></div>" },
    { title:"Force and momentum",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>F = Δp ÷ Δt</b></p><p>Force = rate of change of momentum.</p><div class='f'><p>A longer collision time means a smaller force (crumple zones, airbags).</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A 2 kg ball moves at 3 m/s. Find its momentum.</p><p class='f'><b>A:</b> p = m × v = 2 × 3 = <b>6 kg·m/s</b>.</p></div>" }
  ],
  learn:[
    { tier:"ext", heading:"What momentum is",
      html:"<p><b>Momentum</b> measures how hard it is to stop a moving object. A slow lorry and a fast bullet can both be dangerous because both have large momentum — the lorry from its huge mass, the bullet from its huge speed.</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>p = m × v</b></p>"+
           "<p><b>p</b> = momentum (kg·m/s), <b>m</b> = mass (kg), <b>v</b> = velocity (m/s). Momentum is a <b>vector</b>: its direction is the direction of motion, so momentum to the right is positive and to the left is negative.</p>"+
           "<p><b>Worked example:</b> A 1200 kg car travels at 15 m/s. p = 1200 × 15 = <b>18 000 kg·m/s</b>.</p>" },
    { tier:"ext", heading:"Conservation of momentum",
      html:"<p>In any collision or explosion where <b>no external force</b> acts, the <b>total momentum stays the same</b>:</p>"+
           "<p style='text-align:center;font-size:1.15em;margin:14px 0;color:var(--ig-d)'><b>total momentum before = total momentum after</b></p>"+
           "<p>This powerful rule lets you predict what happens after objects interact. Remember to include <b>direction</b> (sign) for each object.</p>"+
           "<p><b>Worked example:</b> A 2 kg trolley at 3 m/s hits a stationary 1 kg trolley and they move off together. Before: p = 2×3 + 1×0 = 6 kg·m/s. After: (2+1)×v = 6, so v = <b>2 m/s</b>.</p>" },
    { tier:"ext", heading:"Force and the change of momentum",
      html:"<p>A force changes an object's momentum. In fact force equals the <b>rate of change of momentum</b>:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>F = Δp ÷ Δt</b></p>"+
           "<p>The key insight for safety: spreading the same momentum change over a <b>longer time</b> gives a <b>smaller force</b>. This is exactly how <b>airbags, crumple zones, crash mats and seatbelts</b> protect you — they extend the stopping time, so the force on your body is far smaller.</p>" }
  ],
  simulation:{ title:"Motion Lab", file:"sims/motion-lab.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Set masses and velocities and collide two trolleys.","Check total momentum before = total after.","See how collision time affects the force."] },
  formulas:[ {f:"p = m × v", d:"Momentum, unit kg·m/s."}, {f:"total momentum before = total after", d:"Conservation (no external force)."}, {f:"F = Δp ÷ Δt", d:"Force = rate of change of momentum."} ],
  practice:[
    { q:"The unit of momentum is:", type:"mcq", options:["N","kg·m/s","J","m/s"], answer:1, marks:1, solution:"p = mv → kg·m/s." },
    { q:"A 3 kg object moves at 4 m/s. Calculate its momentum.", type:"struct", answer:"12 kg·m/s", marks:2, solution:"p = mv = 3 × 4 = 12 kg·m/s. [2]" },
    { q:"Explain how an airbag reduces injury using momentum ideas.", type:"struct", answer:"Longer time, smaller force", marks:3, solution:"The airbag increases the time over which momentum changes. Since F = Δp/Δt, a longer time gives a smaller force on the passenger. [3]" }
  ],
  mistakes:[
    "Forgetting momentum is a <b>vector</b> — opposite directions have opposite signs.",
    "Using speed instead of velocity, or dropping the unit kg·m/s.",
    "In collisions, forgetting to include direction (sign) when adding momenta."
  ],
  exam:[
    { q:"A 1200 kg car travels at 15 m/s. Calculate its momentum. [2]", marks:2, solution:"p = mv = 1200 × 15 = 18000 kg·m/s. [2]" },
    { q:"Two trolleys (2 kg at 3 m/s and 1 kg at rest) collide and move together. Calculate their common velocity. [3]", marks:3, solution:"Before: p = 2×3 + 1×0 = 6 kg·m/s. After: (2+1)v = 6 → v = 2 m/s. [3]" }
  ],
  checklist:[ "I can calculate momentum with p = m × v.","I can apply conservation of momentum to a collision.","I can explain safety features using F = Δp/Δt." ]
},

"IG1.7": {
  title: "Energy, work and power",
  tier: "both",
  slides:[
    { title:"Energy stores and transfers",
      html:"<p>Energy is stored (kinetic, gravitational, elastic, thermal, chemical, nuclear) and <b>transferred</b> between stores.</p><div class='f'><p>Energy is measured in joules (J) and is always conserved.</p></div>" },
    { title:"Kinetic and gravitational energy",
      html:"<p style='text-align:center;color:var(--ig-d)'><b>KE = ½mv²</b> &nbsp;&nbsp; <b>ΔGPE = mgh</b></p><div class='f'><p>A falling object transfers GPE to KE.</p></div>" },
    { title:"Work done",
      html:"<p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>W = F × d</b></p><p>Work (J) = force × distance moved in the force's direction.</p><div class='f'><p>Doing work transfers energy.</p></div>" },
    { title:"Power",
      html:"<p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>P = W ÷ t</b></p><p>Power (watt, W) = energy transferred per second.</p><div class='f'><p>A more powerful device does the same work in less time.</p></div>" },
    { title:"Efficiency (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;color:var(--ig-d)'><b>efficiency = useful energy out ÷ total energy in</b></p><div class='f'><p>Always less than 100% — some energy is wasted, usually as heat.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A 50 N force moves a box 4 m. Find the work done.</p><p class='f'><b>A:</b> W = F × d = 50 × 4 = <b>200 J</b>.</p></div>" }
  ],
  learn:[
    { tier:"foundation", heading:"Energy stores and transfers",
      html:"<p>Energy is what makes things happen. It is measured in <b>joules (J)</b> and is held in different <b>stores</b>:</p>"+
           "<ul><li><b>Kinetic</b> — movement</li><li><b>Gravitational potential</b> — height</li><li><b>Elastic</b> — stretched or squashed objects</li><li><b>Thermal</b> — hot objects</li><li><b>Chemical</b> — food, fuel, batteries</li><li><b>Nuclear</b> — inside atoms</li></ul>"+
           "<p>Energy is <b>transferred</b> between stores by forces (mechanical work), heating, electricity, or waves (light and sound). Crucially, energy is never made or destroyed — this is the <b>principle of conservation of energy</b>. The total amount stays the same; it just moves and changes form.</p>" },
    { tier:"core", heading:"Kinetic and gravitational potential energy",
      html:"<p>A moving object stores <b>kinetic energy</b>:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:12px 0;color:var(--ig-d)'><b>KE = ½ m v²</b></p>"+
           "<p>Notice the speed is <b>squared</b> — double the speed gives four times the kinetic energy, which is why fast crashes are so dangerous.</p>"+
           "<p>A raised object stores <b>gravitational potential energy</b>:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:12px 0;color:var(--ig-d)'><b>ΔGPE = m g h</b></p>"+
           "<p>When an object falls, GPE transfers to KE. <b>Worked example:</b> a 0.5 kg ball at 4 m/s has KE = ½ × 0.5 × 4² = <b>4 J</b>.</p>" },
    { tier:"core", heading:"Work done by a force",
      html:"<p><b>Work</b> is the energy transferred when a force moves an object:</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>W = F × d</b></p>"+
           "<p><b>W</b> = work done / energy transferred (J), <b>F</b> = force (N), <b>d</b> = distance moved <b>in the direction of the force</b> (m). Doing work always means transferring energy from one store to another.</p>"+
           "<p><b>Worked example:</b> lifting a 50 N box up 4 m: W = 50 × 4 = <b>200 J</b> transferred to gravitational potential energy.</p>" },
    { tier:"core", heading:"Power",
      html:"<p><b>Power</b> is how <b>fast</b> energy is transferred — the energy transferred each second:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>P = W ÷ t</b></p>"+
           "<p>Power is measured in <b>watts (W)</b>, where 1 W = 1 J/s. Two motors can do the same job (same work), but the more powerful one does it in less time.</p>"+
           "<p><b>Worked example:</b> a crane does 6000 J of work in 3 s. P = 6000 ÷ 3 = <b>2000 W</b> (2 kW).</p>" },
    { tier:"ext", heading:"Efficiency",
      html:"<p>No device transfers all its input energy usefully — some is always wasted, usually as heat to the surroundings. <b>Efficiency</b> measures how good a device is:</p>"+
           "<p style='text-align:center;font-size:1.15em;margin:14px 0;color:var(--ig-d)'><b>efficiency = useful energy out ÷ total energy in</b></p>"+
           "<p>It is often given as a percentage (× 100%) and is always less than 100%. <b>Worked example:</b> a motor gives 600 J of useful output from 800 J of electrical input. Efficiency = 600 ÷ 800 = 0.75 = <b>75%</b>. The wasted 200 J becomes heat.</p>" }
  ],
  simulation:{ title:"Energy Efficiency Lab", file:"sims/energy-efficiency.html", source:"Atul Soral Physicism — Interactive Sim",
    instructions:["Transfer energy through a device and see useful vs wasted energy.","Change the input and read the efficiency.","Track energy in a Sankey-style flow."] },
  formulas:[ {f:"W = F × d", d:"Work done, unit J."}, {f:"P = W ÷ t", d:"Power, unit watt (W)."}, {f:"KE = ½ m v²", d:"Kinetic energy."}, {f:"ΔGPE = m g h", d:"Gravitational potential energy change."}, {f:"efficiency = useful ÷ total", d:"Extended; always < 1."} ],
  practice:[
    { q:"The unit of power is the:", type:"mcq", options:["joule","newton","watt","pascal"], answer:2, marks:1, solution:"Power is measured in watts (1 W = 1 J/s)." },
    { q:"A crane lifts a 200 N load 5 m. Calculate the work done.", type:"struct", answer:"1000 J", marks:2, solution:"W = F × d = 200 × 5 = 1000 J. [2]" },
    { q:"A motor transfers 600 J usefully from 800 J input. Calculate the efficiency. (Extended)", type:"struct", answer:"75%", marks:2, solution:"efficiency = 600 ÷ 800 = 0.75 = 75%. [2]" }
  ],
  mistakes:[
    "Saying energy is 'used up' — it is <b>transferred</b>, never destroyed.",
    "Using distance not in the force's direction for W = F × d.",
    "Confusing energy (J) with power (W = J/s).",
    "Writing efficiency above 100% — impossible."
  ],
  exam:[
    { q:"A 0.5 kg ball moves at 4 m/s. Calculate its kinetic energy. [2]", marks:2, solution:"KE = ½mv² = ½ × 0.5 × 4² = ½ × 0.5 × 16 = 4 J. [2]" },
    { q:"A lamp transfers 20 J of light from 100 J of electrical energy each second. State its power input and efficiency. [3]", marks:3, solution:"Power input = 100 W. Efficiency = 20 ÷ 100 = 20%. [3]" }
  ],
  checklist:[ "I can list energy stores and describe transfers.","I can use W = F × d and P = W ÷ t.","I can use KE = ½mv² and GPE = mgh.","I can calculate efficiency (Extended).","I can state that energy is conserved." ]
},

"IG1.8": {
  title: "Pressure",
  tier: "both",
  slides:[
    { title:"What is pressure?",
      html:"<p style='text-align:center;font-size:1.25em;margin:14px 0;color:var(--ig-d)'><b>p = F ÷ A</b></p><p>Pressure = force per unit area. Unit: pascal (Pa = N/m²).</p><div class='f'><p>A sharp knife has a small area → large pressure → cuts easily.</p></div>" },
    { title:"Pressure in liquids",
      html:"<p>Pressure in a liquid increases with <b>depth</b> and acts in all directions.</p><div class='f'><p>Deeper water pushes harder — dam walls are thicker at the bottom.</p></div>" },
    { title:"Liquid pressure formula (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>p = ρ × g × h</b></p><p>Pressure due to a liquid column of height h.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A 200 N force acts on 0.5 m². Find the pressure.</p><p class='f'><b>A:</b> p = F ÷ A = 200 ÷ 0.5 = <b>400 Pa</b>.</p></div>" }
  ],
  learn:[
    { tier:"foundation", heading:"Pressure: force spread over area",
      html:"<p><b>Pressure</b> tells you how concentrated a force is. The same force acting on a small area produces a large pressure; spread over a large area it produces a small pressure:</p>"+
           "<p style='text-align:center;font-size:1.25em;margin:16px 0;color:var(--ig-d)'><b>p = F ÷ A</b></p>"+
           "<p><b>p</b> = pressure in <b>pascals (Pa)</b>, where 1 Pa = 1 N/m². <b>F</b> = force (N), <b>A</b> = area (m²).</p>"+
           "<p>This single idea explains a lot of everyday life: a sharp knife, a drawing pin and a nail all have a tiny area, so even a modest force gives a huge pressure that cuts or pierces. The opposite is true for <b>snowshoes, tractor tyres and camel feet</b> — a large area keeps the pressure low so they don't sink.</p>"+
           "<p><b>Worked example:</b> a 200 N force on 0.5 m² gives p = 200 ÷ 0.5 = <b>400 Pa</b>.</p>" },
    { tier:"core", heading:"Pressure in liquids",
      html:"<p>A liquid presses on anything inside it. Two rules matter:</p>"+
           "<ul><li>Pressure <b>increases with depth</b> — the deeper you go, the more liquid is pressing down from above.</li>"+
           "<li>At any point, pressure acts <b>equally in all directions</b> — up, down and sideways.</li></ul>"+
           "<div style='text-align:center;margin:14px 0'>"+
           "<svg width='200' height='140' viewBox='0 0 200 140' style='max-width:100%'>"+
           "<path d='M40 20 L160 20 L150 130 L50 130 Z' fill='#cfe8ff' stroke='#6c4cff' stroke-width='2'/>"+
           "<line x1='60' y1='45' x2='90' y2='45' stroke='#5238cc' stroke-width='2' marker-end='url(#a2)'/>"+
           "<line x1='60' y1='80' x2='105' y2='80' stroke='#5238cc' stroke-width='3' marker-end='url(#a2)'/>"+
           "<line x1='60' y1='115' x2='120' y2='115' stroke='#5238cc' stroke-width='4' marker-end='url(#a2)'/>"+
           "<defs><marker id='a2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6' fill='#5238cc'/></marker></defs>"+
           "<text x='120' y='135' font-size='9' fill='#413b63'>deeper = more pressure</text>"+
           "</svg></div>"+
           "<p>This is why a dam wall is built <b>thicker at the bottom</b>, and why deep-sea submarines need extremely strong hulls.</p>" },
    { tier:"ext", heading:"Calculating liquid pressure",
      html:"<p>The pressure caused by a column of liquid of depth h is:</p>"+
           "<p style='text-align:center;font-size:1.2em;margin:14px 0;color:var(--ig-d)'><b>p = ρ g h</b></p>"+
           "<p><b>ρ</b> = density of the liquid (kg/m³), <b>g</b> = gravitational field strength (N/kg), <b>h</b> = depth (m). Notice the pressure depends only on <b>depth and density</b> — not on the shape or width of the container.</p>"+
           "<p><b>Worked example:</b> pressure at 2 m depth in water (ρ = 1000 kg/m³, g = 10 N/kg): p = 1000 × 10 × 2 = <b>20 000 Pa</b>. (This is the pressure from the water alone, on top of atmospheric pressure.)</p>" }
  ],
  simulation:{ title:"Explore all simulations", file:"dp-simulations.html", source:"Atul Soral Physicism — Simulations Gallery",
    instructions:["Browse the full simulation library.","Use a fluids or forces sim to explore pressure ideas.","Relate what you see back to p = F ÷ A."] },
  formulas:[ {f:"p = F ÷ A", d:"Pressure = force ÷ area. Unit Pa (N/m²)."}, {f:"p = ρ g h", d:"Pressure in a liquid at depth h (Extended)."} ],
  practice:[
    { q:"The unit of pressure is the:", type:"mcq", options:["newton","pascal","joule","watt"], answer:1, marks:1, solution:"Pressure is measured in pascals (1 Pa = 1 N/m²)." },
    { q:"A force of 60 N acts on an area of 0.2 m². Calculate the pressure.", type:"struct", answer:"300 Pa", marks:2, solution:"p = F ÷ A = 60 ÷ 0.2 = 300 Pa. [2]" },
    { q:"Calculate the pressure at 2 m depth in water (ρ = 1000 kg/m³, g = 10 N/kg). (Extended)", type:"struct", answer:"20000 Pa", marks:2, solution:"p = ρgh = 1000 × 10 × 2 = 20000 Pa. [2]" }
  ],
  mistakes:[
    "Swapping force and area in p = F ÷ A.",
    "Thinking liquid pressure depends on container shape — it depends only on depth (and density).",
    "Forgetting pressure in a liquid acts in <b>all</b> directions, not just downward."
  ],
  exam:[
    { q:"Explain why a wide strap on a heavy bag is more comfortable than a thin one. [2]", marks:2, solution:"A wider strap has a larger area, so for the same force the pressure on the shoulder is smaller (p = F/A). [2]" },
    { q:"A diver is 15 m deep in water (ρ = 1000 kg/m³, g = 10 N/kg). Calculate the water pressure on them. [2]", marks:2, solution:"p = ρgh = 1000 × 10 × 15 = 150000 Pa. [2]" }
  ],
  checklist:[ "I can use p = F ÷ A.","I can explain everyday pressure examples (sharp/blunt, area).","I can describe how liquid pressure changes with depth.","I can use p = ρgh (Extended)." ]
}

};
