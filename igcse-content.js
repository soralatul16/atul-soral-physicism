// IGCSE Physics 0625 — subtopic content store.
// Add a subtopic by adding an entry keyed by its code (e.g. "IG1.1").
// Each entry: { title, tier, slides:[...], notes:"html", practice:[...], revision:"html" }
//  - slides: array of {title, html} rendered as an 8-step deck
//  - practice: array of {q, type:'mcq'|'struct', options?, answer, marks, solution}
window.IGCSE_CONTENT = {

"IG1.1": {
  title: "Physical quantities & measurement techniques",
  tier: "both",
  slides: [
    { title: "What is a physical quantity?",
      html: "<p>A <b>physical quantity</b> is anything we can measure. It has two parts:</p>"+
            "<p style='text-align:center;font-size:1.2em;margin:16px 0'><b>quantity = number × unit</b></p>"+
            "<p>Example: a length of <b>2.5 m</b> — the number is 2.5, the unit is the metre (m). A number with no unit is meaningless in physics.</p>"+
            "<div class='f'><p>The seven <b>SI base quantities</b> are the foundation from which all other units are built.</p></div>" },
    { title: "SI base units",
      html: "<table class='ig-tbl'><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>"+
            "<tr><td>Length</td><td>metre</td><td>m</td></tr>"+
            "<tr><td>Mass</td><td>kilogram</td><td>kg</td></tr>"+
            "<tr><td>Time</td><td>second</td><td>s</td></tr>"+
            "<tr><td>Electric current</td><td>ampere</td><td>A</td></tr>"+
            "<tr><td>Temperature</td><td>kelvin</td><td>K</td></tr>"+
            "</table><div class='f'><p><b>Derived units</b> combine these — e.g. speed is m/s, force is kg·m/s² (the newton, N).</p></div>" },
    { title: "Measuring length",
      html: "<ul><li><b>Ruler</b> — everyday lengths, precision ±1 mm.</li>"+
            "<li><b>Measuring tape</b> — longer distances.</li>"+
            "<li><b>Micrometer screw gauge</b> — very small thicknesses (e.g. a wire), precision <b>0.01 mm</b>.</li></ul>"+
            "<div class='f'><p><b>Avoiding errors:</b> read at eye level to avoid <b>parallax error</b>; check for a <b>zero error</b> before measuring.</p></div>" },
    { title: "Measuring volume",
      html: "<p><b>Regular solid:</b> measure sides, calculate (e.g. cuboid V = l × w × h).</p>"+
            "<p><b>Liquid:</b> use a measuring cylinder; read the bottom of the <b>meniscus</b> at eye level.</p>"+
            "<div class='f'><p><b>Irregular solid — displacement method:</b> lower it into water in a measuring cylinder; the rise in water level equals the object's volume.</p></div>" },
    { title: "Measuring time",
      html: "<p>Use a <b>stopwatch</b> (digital, ±0.01 s) or light gates for fast events.</p>"+
            "<p><b>Measuring a pendulum period accurately:</b></p>"+
            "<ul><li>Time <b>many oscillations</b> (e.g. 20), not one.</li>"+
            "<li>Divide total time by the number of swings.</li></ul>"+
            "<div class='f'><p>This reduces the effect of <b>reaction-time error</b> — the same absolute error spread over 20 swings is 20× smaller per swing.</p></div>" },
    { title: "Precision & significant figures",
      html: "<p>Every measurement has a <b>precision</b> set by the instrument's smallest division.</p>"+
            "<p>A balance reading 1.427 g is precise to ±0.001 g (the milligram).</p>"+
            "<div class='f'><p>Give answers to a sensible number of <b>significant figures</b> — usually matching the data given (2–3 s.f. is typical at IGCSE).</p></div>" },
    { title: "Scalars and vectors (Extended)",
      html: "<div class='ig-ext'>EXTENDED</div>"+
            "<p>A <b>scalar</b> has size (magnitude) only: mass, time, distance, speed, energy.</p>"+
            "<p>A <b>vector</b> has magnitude <i>and</i> direction: displacement, velocity, acceleration, force, weight, momentum.</p>"+
            "<div class='f'><p>Two forces in the same direction add; in opposite directions they subtract. Perpendicular vectors combine using a scale diagram or Pythagoras.</p></div>" },
    { title: "Quick check",
      html: "<div class='pq'><p><b>Q:</b> A student measures the thickness of 50 sheets of paper as 5.0 mm. What is the thickness of one sheet, and why measure 50?</p>"+
            "<p class='f'><b>A:</b> 5.0 ÷ 50 = <b>0.10 mm</b> per sheet. Measuring 50 together reduces the effect of the ±1 mm ruler error on each single (very thin) sheet.</p></div>" }
  ],
  notes:
    "<h3>1.1 Physical quantities & measurement techniques</h3>"+
    "<p>All of physics rests on <b>measurement</b>. A physical quantity is written as a <b>number × unit</b>.</p>"+
    "<h4>SI base units</h4>"+
    "<p>Length (m), mass (kg), time (s), current (A), temperature (K). All other units are <b>derived</b> from these.</p>"+
    "<h4>Measuring techniques</h4>"+
    "<ul>"+
    "<li><b>Length:</b> ruler (±1 mm), micrometer (±0.01 mm). Avoid <b>parallax</b> by reading at eye level; check for <b>zero error</b>.</li>"+
    "<li><b>Volume:</b> regular solid by calculation; liquid by measuring cylinder (read the meniscus); irregular solid by <b>displacement</b>.</li>"+
    "<li><b>Time:</b> stopwatch; for a pendulum, time many oscillations and divide, to reduce reaction-time error.</li>"+
    "</ul>"+
    "<h4>Worked example</h4>"+
    "<p><b>Q:</b> A wire's diameter is measured 5 times with a micrometer: 0.42, 0.41, 0.43, 0.42, 0.42 mm. State the best estimate.</p>"+
    "<p><b>A:</b> Mean = (0.42+0.41+0.43+0.42+0.42)/5 = <b>0.42 mm</b>. Repeating and averaging reduces random error.</p>"+
    "<h4 class='ig-ext-h'>Extended: scalars vs vectors</h4>"+
    "<p>Scalars have magnitude only (mass, time, speed, energy). Vectors have magnitude and direction (displacement, velocity, acceleration, force, momentum). Combine parallel vectors by adding/subtracting; perpendicular vectors by scale diagram or Pythagoras.</p>",
  practice: [
    { q:"Which of these is an SI base unit?", type:"mcq", options:["newton","kilogram","joule","watt"], answer:1, marks:1,
      solution:"The kilogram is the SI base unit of mass. Newton, joule and watt are derived units." },
    { q:"Which instrument would best measure the diameter of a thin wire?", type:"mcq", options:["metre rule","measuring tape","micrometer screw gauge","trundle wheel"], answer:2, marks:1,
      solution:"A micrometer measures to 0.01 mm — suitable for a thin wire." },
    { q:"Describe how you would find the volume of a small irregular stone using a measuring cylinder.", type:"struct", answer:"Displacement method", marks:3,
      solution:"Part-fill a measuring cylinder with water and read the volume. Lower the stone in fully. Read the new volume. The volume of the stone = final volume − initial volume." },
    { q:"A student times 20 swings of a pendulum as 30.0 s. Calculate the time for one swing (the period).", type:"struct", answer:"1.5 s", marks:2,
      solution:"Period T = total time ÷ number of swings = 30.0 ÷ 20 = 1.5 s." },
    { q:"State the difference between a scalar and a vector, giving one example of each. (Extended)", type:"struct", answer:"Vector has direction", marks:2,
      solution:"A scalar has magnitude only (e.g. mass). A vector has magnitude and direction (e.g. force). [1 mark each]" },
    { q:"Why should the meniscus be read at eye level when using a measuring cylinder?", type:"struct", answer:"Avoid parallax error", marks:1,
      solution:"To avoid parallax error, which would give a reading that is too high or too low." }
  ],
  revision:
    "<h3>1.1 — Revision summary</h3>"+
    "<p><b>Key idea:</b> quantity = number × unit.</p>"+
    "<table class='ig-tbl'><tr><th>Base quantity</th><th>Unit</th></tr>"+
    "<tr><td>length</td><td>metre (m)</td></tr><tr><td>mass</td><td>kilogram (kg)</td></tr>"+
    "<tr><td>time</td><td>second (s)</td></tr><tr><td>current</td><td>ampere (A)</td></tr>"+
    "<tr><td>temperature</td><td>kelvin (K)</td></tr></table>"+
    "<p><b>Instruments:</b> ruler ±1 mm · micrometer ±0.01 mm · measuring cylinder (meniscus) · stopwatch.</p>"+
    "<p><b>Reduce errors:</b> read at eye level (parallax) · check zero error · time many oscillations · repeat and average.</p>"+
    "<p class='ig-ext-h'><b>Extended:</b> scalar = magnitude only; vector = magnitude + direction.</p>"
}

};
