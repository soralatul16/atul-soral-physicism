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
}

};
