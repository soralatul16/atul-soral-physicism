// IGCSE Topic 4 — Electricity and Magnetism (animated presentations + full literature)
(function(){
  var C = window.IGCSE_CONTENT = window.IGCSE_CONTENT || {};

  C["IG4.1"] = {
    title: "Simple phenomena of magnetism",
    tier: "both",
    slides:[
      { title:"Magnets and poles",
        html:"<p>Every magnet has a <b>north</b> and a <b>south</b> pole. <b>Like poles repel, unlike poles attract.</b></p>"+
             "<div style='text-align:center;margin:8px 0'><svg width='260' height='60' viewBox='0 0 260 60' style='max-width:100%'>"+
             "<rect x='20' y='22' width='40' height='20' fill='#dc2626'/><rect x='60' y='22' width='40' height='20' fill='#2563eb'/><text x='35' y='37' font-size='11' fill='#fff'>N</text><text x='75' y='37' font-size='11' fill='#fff'>S</text>"+
             "<rect x='160' y='22' width='40' height='20' fill='#2563eb'/><rect x='200' y='22' width='40' height='20' fill='#dc2626'/><text x='175' y='37' font-size='11' fill='#fff'>S</text><text x='215' y='37' font-size='11' fill='#fff'>N</text></svg></div>"+
             "<div class='f'><p>Magnetic materials: iron, steel, nickel, cobalt.</p></div>" },
      { title:"Magnetic field lines",
        html:"<p>A magnetic <b>field</b> is the region where a magnet's force acts. Field lines run from <b>N to S</b> outside the magnet; closer lines = stronger field.</p>"+
             "<div style='text-align:center'><svg id='fld' width='260' height='120' viewBox='0 0 260 120' style='max-width:100%'>"+
             "<rect x='110' y='50' width='40' height='20' fill='#94a3b8'/><text x='118' y='64' font-size='9' fill='#fff'>N  S</text>"+
             "<path d='M150 55 Q200 20 130 60' fill='none' stroke='#6c4cff'/><path d='M150 65 Q200 100 130 60' fill='none' stroke='#6c4cff'/>"+
             "<path d='M110 55 Q60 20 130 60' fill='none' stroke='#6c4cff'/><path d='M110 65 Q60 100 130 60' fill='none' stroke='#6c4cff'/></svg></div>" },
      { title:"Temporary vs permanent",
        html:"<ul><li><b>Soft iron</b> — easily magnetised and demagnetised (temporary; used in electromagnets).</li><li><b>Steel</b> — hard to magnetise but keeps its magnetism (permanent magnets).</li></ul>" },
      { title:"Electromagnet (Extended)",
        html:"<div class='ig-ext'>EXTENDED</div><p>A current through a coil makes a magnetic field — an <b>electromagnet</b>. More turns, more current, or an iron core → stronger field. It can be switched on and off.</p>" },
      { title:"Quick check",
        html:"<div class='pq'><p><b>Q:</b> Two north poles are brought together. What happens?</p><p class='f'><b>A:</b> They <b>repel</b> — like poles repel.</p></div>" }
    ],
    learn:[
      { tier:"foundation", heading:"Magnets, poles and materials",
        html:"<p>A magnet has two poles, <b>north</b> and <b>south</b>. The basic rule: <b>like poles repel, unlike poles attract</b>. Magnetic materials — iron, steel, nickel and cobalt — are attracted to magnets; most other materials are not.</p>" },
      { tier:"core", heading:"Magnetic fields",
        html:"<p>A <b>magnetic field</b> is the region around a magnet where its force can be felt. We draw it with <b>field lines</b> that point from north to south outside the magnet. Where the lines are closer together, the field is stronger. A plotting compass or iron filings reveal the field pattern.</p>" },
      { tier:"core", heading:"Induced magnetism, soft & hard materials",
        html:"<p>A magnetic material placed in a field becomes a temporary magnet (<b>induced magnetism</b>). <b>Soft</b> magnetic materials (soft iron) magnetise and demagnetise easily — ideal for electromagnets. <b>Hard</b> materials (steel) keep their magnetism — used for permanent magnets.</p>" },
      { tier:"ext", heading:"Electromagnets",
        html:"<p>A current-carrying coil (solenoid) produces a magnetic field like a bar magnet. Adding an iron core, more turns, or more current strengthens it. Because it switches with the current, an electromagnet is used in relays, cranes and bells.</p>" }
    ],
    simulation:{ title:"Electromagnetism Lab", file:"sims/electromagnetism.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Map the field around a bar magnet.","Build an electromagnet and change turns/current.","See how a compass aligns with the field."] },
    formulas:[ {f:"like poles repel, unlike attract", d:"The basic law of magnetism."}, {f:"field lines: N → S (outside)", d:"Closer lines = stronger field."} ],
    practice:[
      { q:"Which material makes the best permanent magnet?", type:"mcq", options:["soft iron","steel","copper","aluminium"], answer:1, marks:1, solution:"Steel keeps its magnetism, so it makes permanent magnets." },
      { q:"Magnetic field lines point from:", type:"mcq", options:["S to N outside","N to S outside","N to N","they don't have direction"], answer:1, marks:1, solution:"Outside a magnet, field lines run from north to south." },
      { q:"State two ways to make an electromagnet stronger. (Extended)", type:"struct", answer:"More turns / more current / iron core", marks:2, solution:"Any two of: more turns on the coil, more current, add a soft-iron core. [2]" }
    ],
    mistakes:[
      "Saying all metals are magnetic — only iron, steel, nickel, cobalt are.",
      "Drawing field lines from S to N outside — they go <b>N to S</b>.",
      "Using steel for an electromagnet core — use <b>soft iron</b> (it demagnetises when current stops)."
    ],
    exam:[
      { q:"Describe how to plot the magnetic field around a bar magnet using a compass. [3]", marks:3, solution:"Place the compass near the magnet, mark the needle direction with dots, move the compass to follow, and join the dots into field lines from N to S. [3]" },
      { q:"State the difference between soft and hard magnetic materials. [2]", marks:2, solution:"Soft (e.g. iron) magnetises/demagnetises easily; hard (e.g. steel) keeps its magnetism. [2]" }
    ],
    checklist:[ "I can state the law of magnetic poles.","I can describe and draw magnetic field lines.","I can distinguish magnetic materials and induced magnetism.","I can compare soft and hard magnetic materials.","I can describe an electromagnet and how to strengthen it (Extended)." ]
  };

  C["IG4.2"] = {
    title: "Electrical quantities",
    tier: "both",
    slides:[
      { title:"Charge and current",
        html:"<p><b>Current</b> is the rate of flow of <b>charge</b> (electrons) around a circuit, measured in <b>amperes (A)</b> with an ammeter (in series).</p>"+
             "<div style='text-align:center'><svg id='cur' width='260' height='70' viewBox='0 0 260 70' style='max-width:100%'>"+
             "<rect x='20' y='25' width='220' height='20' rx='10' fill='none' stroke='#6c4cff'/></svg></div>"+
             "<p style='text-align:center;color:var(--ig-d)'><b>Q = I × t</b></p>",
        init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var svg=el.querySelector('#cur'); var t=0; function a(){ var g='<rect x="20" y="25" width="220" height="20" rx="10" fill="none" stroke="#6c4cff"/>'; for(var i=0;i<8;i++){ var x=25+((i*28+t*2)%210); g+='<circle cx="'+x.toFixed(0)+'" cy="35" r="4" fill="#ea580c"/>'; } svg.innerHTML=g; t+=1; el._raf=requestAnimationFrame(a);} a(); } },
      { title:"Voltage (potential difference)",
        html:"<p><b>Voltage</b> is the energy given to each unit of charge, measured in <b>volts (V)</b> with a voltmeter (in parallel). It's what pushes the current round.</p>" },
      { title:"Interactive: Ohm's law",
        html:"<p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>V = I × R</b></p><p>Drag the resistance and voltage and see the current.</p>"+
             "<div style='text-align:center;font-family:Outfit,sans-serif'><label>V = <input id='o-v' type='range' min='1' max='12' value='6'> <span id='o-vv'>6</span> V</label><br>"+
             "<label>R = <input id='o-r' type='range' min='1' max='12' value='3'> <span id='o-rv'>3</span> Ω</label>"+
             "<div style='font-size:1.3em;color:var(--ig-d);margin-top:8px'>I = <b id='o-i'>2.0</b> A</div></div>",
        init:function(el){ var v=el.querySelector('#o-v'),r=el.querySelector('#o-r'),vv=el.querySelector('#o-vv'),rv=el.querySelector('#o-rv'),iv=el.querySelector('#o-i'); function upd(){ vv.textContent=v.value; rv.textContent=r.value; iv.textContent=((+v.value)/(+r.value)).toFixed(2);} v.oninput=upd; r.oninput=upd; upd(); } },
      { title:"Resistance",
        html:"<p><b>Resistance</b> (ohms, Ω) opposes current. Longer or thinner wires have more resistance; a component's resistance can change with temperature.</p>" },
      { title:"Quick check",
        html:"<div class='pq'><p><b>Q:</b> 12 V across a 4 Ω resistor. Find the current.</p><p class='f'><b>A:</b> I = V ÷ R = 12 ÷ 4 = <b>3 A</b>.</p></div>" }
    ],
    learn:[
      { tier:"foundation", heading:"Current, charge and voltage",
        html:"<p><b>Electric current</b> is the flow of electric charge (electrons in a metal), measured in <b>amperes (A)</b> by an ammeter connected <b>in series</b>. Charge is measured in coulombs: <b>Q = I × t</b>. <b>Voltage</b> (potential difference) is the energy transferred per unit charge, measured in <b>volts (V)</b> by a voltmeter connected <b>in parallel</b>.</p>" },
      { tier:"core", heading:"Ohm's law and resistance",
        html:"<p><b>Resistance</b> (ohms, Ω) opposes the flow of current. The three are linked by:</p><p style='text-align:center;font-size:1.15em;color:var(--ig-d)'><b>V = I × R</b></p><p>For a fixed resistor at constant temperature, current is proportional to voltage (Ohm's law). <b>Worked example:</b> 12 V across 4 Ω gives I = 12/4 = 3 A.</p>" },
      { tier:"core", heading:"What affects resistance",
        html:"<p>A wire's resistance increases with <b>length</b> and decreases with greater <b>cross-sectional area</b>. Many components change resistance with conditions — a filament lamp's resistance rises as it heats; a thermistor's falls as it warms; an LDR's falls in brighter light.</p>" }
    ],
    simulation:{ title:"Circuit Builder Lab", file:"sims/circuit-builder.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Build a simple circuit with a cell, resistor and ammeter.","Change the voltage and read the current (V = IR).","Swap resistor values to see the effect."] },
    formulas:[ {f:"V = I × R", d:"Voltage = current × resistance."}, {f:"Q = I × t", d:"Charge = current × time (coulombs)."} ],
    practice:[
      { q:"An ammeter is connected in:", type:"mcq", options:["parallel","series","either","neither"], answer:1, marks:1, solution:"An ammeter goes in series to measure the current through a component." },
      { q:"A 9 V supply drives 3 A. Calculate the resistance.", type:"struct", answer:"3 Ω", marks:2, solution:"R = V ÷ I = 9 ÷ 3 = 3 Ω. [2]" },
      { q:"State how the resistance of a wire changes if it is made longer.", type:"struct", answer:"Increases", marks:1, solution:"Resistance increases with length. [1]" }
    ],
    mistakes:[
      "Connecting an ammeter in parallel — it goes <b>in series</b>; a voltmeter goes in parallel.",
      "Rearranging V = IR incorrectly (I = V/R, R = V/I).",
      "Forgetting a filament lamp's resistance rises as it heats (not constant)."
    ],
    exam:[
      { q:"Define electric current. [1]", marks:1, solution:"The rate of flow of electric charge. [1]" },
      { q:"A resistor has 6 V across it and a current of 0.5 A. Calculate its resistance. [2]", marks:2, solution:"R = V ÷ I = 6 ÷ 0.5 = 12 Ω. [2]" }
    ],
    checklist:[ "I can define current, charge and voltage with units.","I can connect ammeters (series) and voltmeters (parallel).","I can use V = I × R and Q = I × t.","I can state what affects a wire's resistance." ]
  };

  C["IG4.3"] = {
    title: "Electric circuits",
    tier: "both",
    slides:[
      { title:"Series and parallel",
        html:"<p><b>Series:</b> one loop — same current everywhere, voltage shared. <b>Parallel:</b> branches — voltage the same across each, current splits.</p>"+
             "<div style='text-align:center;margin:6px 0'><svg width='260' height='80' viewBox='0 0 260 80' style='max-width:100%'>"+
             "<rect x='20' y='20' width='90' height='40' fill='none' stroke='#6c4cff'/><rect x='45' y='16' width='16' height='8' fill='#6c4cff'/><rect x='72' y='16' width='16' height='8' fill='#6c4cff'/>"+
             "<rect x='150' y='15' width='90' height='50' fill='none' stroke='#16a34a'/><line x1='195' y1='15' x2='195' y2='65' stroke='#16a34a'/></svg></div>" },
      { title:"Rules to remember",
        html:"<ul><li><b>Series</b> — current same; voltages add; resistances add.</li><li><b>Parallel</b> — voltage same; currents add; total resistance is less than the smallest branch.</li></ul>" },
      { title:"Interactive: bulbs in series vs parallel",
        html:"<p>See why parallel bulbs stay bright when one is removed.</p>"+
             "<div style='text-align:center;font-family:Outfit,sans-serif'><button id='cir-btn' style='background:var(--ig);color:#fff;border:none;border-radius:8px;padding:8px 16px;cursor:pointer'>Remove one bulb</button>"+
             "<div style='margin-top:10px'><svg id='cir' width='260' height='90' viewBox='0 0 260 90' style='max-width:100%'>"+
             "<circle id='b1' cx='70' cy='45' r='16' fill='#fde047' stroke='#ca8a04'/><circle id='b2' cx='190' cy='45' r='16' fill='#fde047' stroke='#ca8a04'/></svg></div>"+
             "<div id='cir-msg' style='margin-top:6px;color:var(--ig-d);font-weight:600'>Parallel: both lit.</div></div>",
        init:function(el){ var btn=el.querySelector('#cir-btn'); var b1=el.querySelector('#b1'); var b2=el.querySelector('#b2'); var msg=el.querySelector('#cir-msg'); var removed=false; btn.onclick=function(){ removed=!removed; if(removed){ b1.setAttribute('fill','#e5e7eb'); msg.textContent='One removed — the other stays lit (parallel).'; } else { b1.setAttribute('fill','#fde047'); msg.textContent='Parallel: both lit.'; } }; } },
      { title:"Circuit components",
        html:"<p>Cells, switches, resistors, lamps, fuses, diodes (one-way), LEDs, thermistors, LDRs. Each has a standard symbol you should recognise and draw.</p>" },
      { title:"Quick check",
        html:"<div class='pq'><p><b>Q:</b> Two 3 Ω resistors in series. Total resistance?</p><p class='f'><b>A:</b> 3 + 3 = <b>6 Ω</b>.</p></div>" }
    ],
    learn:[
      { tier:"foundation", heading:"Building circuits",
        html:"<p>A circuit needs a source (cell/battery), conductors (wires) and components. Current only flows in a <b>complete</b> loop. Components can be connected in <b>series</b> (one path) or <b>parallel</b> (multiple branches).</p>" },
      { tier:"core", heading:"Series circuits",
        html:"<p>In series there is one path, so the <b>current is the same</b> everywhere. The supply voltage is <b>shared</b> between components, and total <b>resistance adds</b> (R = R₁ + R₂ + …). If one component breaks, the whole circuit stops.</p>" },
      { tier:"core", heading:"Parallel circuits",
        html:"<p>In parallel each branch gets the <b>full supply voltage</b>, and the branch currents <b>add up</b> to the total. Adding parallel paths <b>lowers</b> the total resistance. House wiring is parallel so each device works independently and gets full voltage.</p>" }
    ],
    simulation:{ title:"Circuit Builder Lab", file:"sims/circuit-builder.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Build a series circuit and note the single current.","Build a parallel circuit and see the current split.","Remove a bulb from each and compare what happens."] },
    formulas:[ {f:"Series: R = R₁ + R₂ + …", d:"Resistances add."}, {f:"Series: same current; voltages add", d:""}, {f:"Parallel: same voltage; currents add", d:""} ],
    practice:[
      { q:"In a series circuit, the current is:", type:"mcq", options:["different everywhere","the same everywhere","zero","doubled"], answer:1, marks:1, solution:"Series circuits have the same current throughout." },
      { q:"Two 4 Ω resistors in series give a total resistance of:", type:"mcq", options:["2 Ω","4 Ω","8 Ω","16 Ω"], answer:2, marks:1, solution:"In series they add: 4 + 4 = 8 Ω." },
      { q:"Explain why house lights are wired in parallel.", type:"struct", answer:"Full voltage, independent", marks:2, solution:"Each light gets the full mains voltage and can be switched independently; if one fails the others still work. [2]" }
    ],
    mistakes:[
      "Thinking current is 'used up' round a circuit — it is the <b>same</b> in series.",
      "Adding parallel resistances like series — parallel total is <b>less</b> than the smallest.",
      "Forgetting the circuit must be a <b>complete loop</b> for current to flow."
    ],
    exam:[
      { q:"State how current and voltage behave in a series circuit. [2]", marks:2, solution:"Current is the same everywhere; the supply voltage is shared between components. [2]" },
      { q:"Two 6 Ω resistors are connected in series to a 12 V supply. Calculate the current. [2]", marks:2, solution:"Total R = 12 Ω; I = V ÷ R = 12 ÷ 12 = 1 A. [2]" }
    ],
    checklist:[ "I can build and recognise series and parallel circuits.","I can apply the current/voltage rules for series.","I can apply the rules for parallel.","I can recognise standard circuit symbols." ]
  };

  C["IG4.4"] = {
    title: "Electrical safety",
    tier: "core",
    slides:[
      { title:"Hazards",
        html:"<p>Electricity is dangerous through: damaged insulation, overheating cables, damp conditions, and overloaded sockets.</p>" },
      { title:"The fuse",
        html:"<p>A <b>fuse</b> is a thin wire that melts if the current gets too high, breaking the circuit and protecting it.</p>"+
             "<div style='text-align:center'><svg id='fuse' width='200' height='50' viewBox='0 0 200 50' style='max-width:100%'><line x1='20' y1='25' x2='80' y2='25' stroke='#333' stroke-width='3'/><line id='fw' x1='80' y1='25' x2='120' y2='25' stroke='#ea580c' stroke-width='3'/><line x1='120' y1='25' x2='180' y2='25' stroke='#333' stroke-width='3'/></svg></div>",
        init:function(el){ if(el._t)clearInterval(el._t); var fw=el.querySelector('#fw'); var blown=false; el._t=setInterval(function(){ blown=!blown; if(blown){ fw.setAttribute('stroke','#e5e7eb'); fw.setAttribute('x2','95'); } else { fw.setAttribute('stroke','#ea580c'); fw.setAttribute('x2','120'); } },1200); } },
      { title:"Earthing & the three-pin plug",
        html:"<ul><li><b>Live</b> (brown) — carries the voltage.</li><li><b>Neutral</b> (blue) — completes the circuit.</li><li><b>Earth</b> (green/yellow) — safety path if a fault makes the case live.</li></ul>" },
      { title:"Double insulation & circuit breakers",
        html:"<p><b>Double-insulated</b> devices need no earth (plastic case). A <b>circuit breaker</b> is a resettable switch that trips on excess current — faster and reusable versus a fuse.</p>" },
      { title:"Quick check",
        html:"<div class='pq'><p><b>Q:</b> What is the job of the earth wire?</p><p class='f'><b>A:</b> To provide a safe low-resistance path to ground if a fault makes the metal case live.</p></div>" }
    ],
    learn:[
      { tier:"core", heading:"Electrical hazards",
        html:"<p>Common dangers: <b>frayed or damaged insulation</b>, <b>overheating</b> from too much current or coiled cables, <b>water</b> near electricity, and <b>overloaded</b> sockets/extension leads. Any of these can cause electric shock or fire.</p>" },
      { tier:"core", heading:"Fuses and circuit breakers",
        html:"<p>A <b>fuse</b> contains a thin wire that melts (‘blows’) if the current exceeds its rating, breaking the circuit before cables overheat. A <b>circuit breaker</b> does the same job but is a switch that trips and can be reset — faster and reusable. The fuse/breaker goes in the <b>live</b> wire.</p>" },
      { tier:"core", heading:"Earthing and insulation",
        html:"<p>A metal-cased appliance has an <b>earth wire</b>: if a fault connects the live wire to the case, current flows safely to earth and blows the fuse, rather than shocking the user. <b>Double-insulated</b> appliances have a plastic case and need no earth. The three-pin plug: live (brown), neutral (blue), earth (green/yellow).</p>" }
    ],
    simulation:{ title:"Circuit Builder Lab", file:"sims/circuit-builder.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Add a fuse and increase the current until it blows.","See how an earth path protects a metal case.","Compare a fuse with a resettable breaker."] },
    formulas:[ {f:"fuse rating > normal current", d:"Choose a fuse just above the device's normal current."}, {f:"P = V × I", d:"Useful to find the working current for a fuse."} ],
    practice:[
      { q:"The earth wire is coloured:", type:"mcq", options:["brown","blue","green/yellow","red"], answer:2, marks:1, solution:"The earth wire is green and yellow." },
      { q:"A fuse is placed in which wire?", type:"mcq", options:["neutral","earth","live","any"], answer:2, marks:1, solution:"The fuse goes in the live wire." },
      { q:"Explain how an earth wire and fuse together protect a user.", type:"struct", answer:"Fault current to earth blows fuse", marks:3, solution:"If a fault makes the case live, a large current flows through the earth wire to ground; this blows the fuse, disconnecting the supply and preventing shock. [3]" }
    ],
    mistakes:[
      "Putting the fuse in the neutral wire — it goes in the <b>live</b>.",
      "Thinking double-insulated devices need an earth — they don't.",
      "Choosing a fuse far above the working current — it wouldn't protect the device."
    ],
    exam:[
      { q:"State the colour and purpose of each wire in a three-pin plug. [3]", marks:3, solution:"Live (brown) carries voltage; neutral (blue) completes the circuit; earth (green/yellow) is the safety path if the case becomes live. [3]" },
      { q:"Explain the advantage of a circuit breaker over a fuse. [2]", marks:2, solution:"It trips faster and can be reset rather than replaced. [2]" }
    ],
    checklist:[ "I can identify electrical hazards.","I can explain how a fuse and circuit breaker protect a circuit.","I can explain earthing and the three-pin plug.","I can explain double insulation." ]
  };

  C["IG4.5"] = {
    title: "Electromagnetic effects",
    tier: "both",
    slides:[
      { title:"Current makes magnetism",
        html:"<p>A current in a wire creates a <b>magnetic field</b> around it (circular field lines). Coil the wire into a <b>solenoid</b> and it behaves like a bar magnet.</p>"+
             "<div style='text-align:center'><svg id='mag' width='200' height='90' viewBox='0 0 200 90' style='max-width:100%'>"+
             "<line x1='100' y1='10' x2='100' y2='80' stroke='#ea580c' stroke-width='3'/>"+
             "<circle id='mc1' cx='100' cy='45' r='18' fill='none' stroke='#6c4cff'/><circle id='mc2' cx='100' cy='45' r='30' fill='none' stroke='#9b7dff'/></svg></div>",
        init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var c1=el.querySelector('#mc1'); var t=0; function a(){ c1.setAttribute('r',(15+4*Math.sin(t)).toFixed(1)); t+=0.08; el._raf=requestAnimationFrame(a);} a(); } },
      { title:"The motor effect",
        html:"<p>A current-carrying wire in a magnetic field feels a <b>force</b> (the motor effect). Reverse the current or field and the force reverses. This drives electric <b>motors</b>.</p>"+
             "<div class='f'><p>Fleming's left-hand rule gives the direction: thumb = force, first finger = field, second finger = current.</p></div>" },
      { title:"Electromagnetic induction",
        html:"<p>Move a magnet near a coil (or a wire through a field) and you <b>induce a voltage</b>. Faster movement, more turns, or a stronger magnet → bigger induced voltage. This is how <b>generators</b> work.</p>" },
      { title:"Transformers (Extended)",
        html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;color:var(--ig-d)'><b>V_p / V_s = N_p / N_s</b></p><p>Transformers change AC voltage using two coils on an iron core — vital for the power grid.</p>" },
      { title:"Quick check",
        html:"<div class='pq'><p><b>Q:</b> How can you increase the voltage induced in a coil?</p><p class='f'><b>A:</b> Move the magnet faster, use more turns, or a stronger magnet.</p></div>" }
    ],
    learn:[
      { tier:"foundation", heading:"Magnetism from current",
        html:"<p>An electric current always produces a magnetic field around it. A straight wire has circular field lines; a coiled wire (<b>solenoid</b>) produces a field like a bar magnet, with a north and south end. Adding an iron core makes an <b>electromagnet</b>.</p>" },
      { tier:"core", heading:"The motor effect",
        html:"<p>When a current-carrying wire sits in a magnetic field, it experiences a <b>force</b> — the motor effect. The force is larger with a bigger current or stronger field, and reverses if either the current or the field is reversed. <b>Fleming's left-hand rule</b> predicts the direction. This effect turns the coil in an electric motor.</p>" },
      { tier:"core", heading:"Electromagnetic induction",
        html:"<p>Moving a magnet relative to a coil <b>induces a voltage</b> (and a current if the circuit is complete). The induced voltage is bigger with faster movement, more turns, or a stronger magnet, and reverses when the motion reverses. This is the principle of the <b>generator</b>, which produces alternating current.</p>" },
      { tier:"ext", heading:"Transformers",
        html:"<p>A <b>transformer</b> changes the size of an alternating voltage using two coils wound on a soft-iron core. <b>V_p/V_s = N_p/N_s</b> (voltage ratio = turns ratio). Step-up transformers raise voltage for efficient transmission; step-down transformers lower it for safe use in homes.</p>" }
    ],
    simulation:{ title:"Electromagnetism Lab", file:"sims/electromagnetism.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Pass current through a coil and see the field.","Move a magnet into a coil and watch the induced voltage.","Change speed and turns to change the induced voltage."] },
    formulas:[ {f:"motor effect: F larger with more I or B", d:"Fleming's left-hand rule for direction."}, {f:"V_p / V_s = N_p / N_s", d:"Transformer equation (Extended)."} ],
    practice:[
      { q:"The motor effect is the force on a:", type:"mcq", options:["stationary charge","current-carrying wire in a field","magnet at rest","resistor"], answer:1, marks:1, solution:"A current-carrying wire in a magnetic field feels a force." },
      { q:"To induce a bigger voltage in a coil you should:", type:"mcq", options:["move the magnet slower","use fewer turns","move the magnet faster","use a weaker magnet"], answer:2, marks:1, solution:"Faster movement induces a larger voltage." },
      { q:"A transformer has 200 primary and 50 secondary turns. If the primary voltage is 240 V, find the secondary voltage. (Extended)", type:"struct", answer:"60 V", marks:2, solution:"Vs = Vp × Ns/Np = 240 × 50/200 = 60 V. [2]" }
    ],
    mistakes:[
      "Confusing the motor effect (current → force) with induction (movement → voltage).",
      "Thinking a stationary magnet induces a voltage — there must be <b>relative movement</b>.",
      "Muddling Fleming's left-hand (motor) with the right-hand rule."
    ],
    exam:[
      { q:"State three ways to increase the voltage induced in a coil. [3]", marks:3, solution:"Move the magnet faster; use more turns; use a stronger magnet. [3]" },
      { q:"A step-down transformer has 1000 primary and 100 secondary turns. The primary voltage is 230 V. Calculate the secondary voltage. [2]", marks:2, solution:"Vs = 230 × 100/1000 = 23 V. [2]" }
    ],
    checklist:[ "I can explain that a current produces a magnetic field.","I can describe the motor effect and use Fleming's left-hand rule.","I can describe electromagnetic induction and generators.","I can use the transformer equation (Extended)." ]
  };

})();
