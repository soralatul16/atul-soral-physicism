// Animated presentation upgrade for Topics 1 & 2 (overrides only the `slides` arrays).
// Loads AFTER igcse-content.js, so the literature (learn/practice/etc.) is untouched.
(function(){
  var C = window.IGCSE_CONTENT = window.IGCSE_CONTENT || {};
  function setSlides(code, slides){ if(C[code]){ C[code].slides = slides; } }

  // ---------- 1.1 Physical quantities & measurement ----------
  setSlides("IG1.1", [
    { title:"What is a physical quantity?",
      html:"<p>A <b>physical quantity</b> is anything we can measure. It always has two parts:</p>"+
           "<p style='text-align:center;font-size:1.35em;margin:16px 0;color:var(--ig-d)'><b>quantity = number × unit</b></p>"+
           "<div style='text-align:center;margin:10px 0'><svg id='m11' width='300' height='70' viewBox='0 0 300 70' style='max-width:100%'>"+
           "<rect x='20' y='25' width='120' height='24' rx='6' fill='#ede9ff' stroke='#6c4cff'/><text id='m11n' x='80' y='42' font-size='14' text-anchor='middle' fill='#5238cc'>2.5</text>"+
           "<text x='155' y='42' font-size='16' fill='#6c4cff'>×</text>"+
           "<rect x='175' y='25' width='105' height='24' rx='6' fill='#f0fdf4' stroke='#16a34a'/><text x='227' y='42' font-size='13' text-anchor='middle' fill='#16a34a'>metre (m)</text></svg></div>"+
           "<div class='f'><p>A number with no unit is meaningless in physics.</p></div>",
      init:function(el){ if(el._t)clearInterval(el._t); var n=el.querySelector('#m11n'); var vals=['2.5','40','0.71','9.8']; var i=0; el._t=setInterval(function(){ i=(i+1)%vals.length; if(n)n.textContent=vals[i]; },900); } },
    { title:"SI base units",
      html:"<table class='ig-tbl'><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>"+
           "<tr><td>length</td><td>metre</td><td>m</td></tr><tr><td>mass</td><td>kilogram</td><td>kg</td></tr>"+
           "<tr><td>time</td><td>second</td><td>s</td></tr><tr><td>current</td><td>ampere</td><td>A</td></tr>"+
           "<tr><td>temperature</td><td>kelvin</td><td>K</td></tr></table>"+
           "<div class='f'><p>All other units are <b>derived</b> — speed (m/s), force (N = kg·m/s²).</p></div>" },
    { title:"Interactive: reading a micrometer",
      html:"<p>Drag to change the thimble reading and see the total.</p>"+
           "<div style='text-align:center;margin:10px 0'><svg width='300' height='60' viewBox='0 0 300 60' style='max-width:100%'>"+
           "<rect x='20' y='25' width='150' height='18' fill='#ede9ff' stroke='#6c4cff'/><rect id='mm-th' x='170' y='18' width='60' height='32' rx='5' fill='#6c4cff'/></svg></div>"+
           "<div style='text-align:center;font-family:Outfit,sans-serif'><label>Thimble: <input id='mm-r' type='range' min='0' max='99' value='32'></label><div style='margin-top:8px;font-size:1.1em;color:var(--ig-d)'>Reading = 4.5 + <span id='mm-t'>0.32</span> = <b id='mm-tot'>4.82 mm</b></div></div>",
      init:function(el){ var r=el.querySelector('#mm-r'); var t=el.querySelector('#mm-t'); var tot=el.querySelector('#mm-tot'); function upd(){ var v=(+r.value)/100; t.textContent=v.toFixed(2); tot.textContent=(4.5+v).toFixed(2)+' mm'; } r.oninput=upd; upd(); } },
    { title:"Measuring volume — displacement",
      html:"<p>Find an irregular solid's volume by the water it pushes up.</p>"+
           "<div style='text-align:center;margin:10px 0'><svg id='disp' width='240' height='120' viewBox='0 0 240 120' style='max-width:100%'>"+
           "<rect x='40' y='15' width='50' height='95' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/><rect x='42' y='60' width='46' height='48' fill='#cfe8ff'/><text x='44' y='52' font-size='9' fill='#413b63'>40</text>"+
           "<rect x='150' y='15' width='50' height='95' rx='4' fill='none' stroke='#6c4cff' stroke-width='2'/><rect id='disp-w' x='152' y='45' width='46' height='63' fill='#cfe8ff'/><circle id='disp-o' cx='175' cy='90' r='11' fill='#9b7dff'/><text x='152' y='38' font-size='9' fill='#413b63'>55</text>"+
           "<text x='108' y='65' font-size='16' fill='#5238cc'>→</text></svg></div>"+
           "<div class='f'><p>Volume = 55 − 40 = <b>15 cm³</b>.</p></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var o=el.querySelector('#disp-o'); var t=0; function a(){ o.setAttribute('cy',(90+3*Math.sin(t)).toFixed(1)); t+=0.06; el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Reduce your errors",
      html:"<ul><li><b>Parallax:</b> read at eye level, straight on.</li><li><b>Zero error:</b> check it reads zero first.</li><li><b>Repeat & average</b> to cut random error.</li></ul>"+
           "<div class='f'><p>For a pendulum, time <b>many swings</b> and divide.</p></div>" },
    { title:"Scalars & vectors (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p><b>Scalar</b> = size only (mass, time, speed). <b>Vector</b> = size + direction (force, velocity).</p>"+
           "<div style='text-align:center;margin:8px 0'><svg width='200' height='120' viewBox='0 0 200 120' style='max-width:100%'>"+
           "<line x1='40' y1='95' x2='150' y2='95' stroke='#6c4cff' stroke-width='3'/><text x='85' y='112' font-size='10' fill='#6c4cff'>3 N</text>"+
           "<line x1='150' y1='95' x2='150' y2='35' stroke='#16a34a' stroke-width='3'/><text x='155' y='70' font-size='10' fill='#16a34a'>4 N</text>"+
           "<line x1='40' y1='95' x2='150' y2='35' stroke='#ea580c' stroke-width='3'/><text x='70' y='55' font-size='10' fill='#ea580c'>5 N</text></svg></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 50 sheets of paper are 5.0 mm thick. Find one sheet's thickness.</p><p class='f'><b>A:</b> 5.0 ÷ 50 = <b>0.10 mm</b> — measuring 50 reduces the ruler error per sheet.</p></div>" }
  ]);

  // ---------- 1.2 Motion (interactive graphs) ----------
  setSlides("IG1.2", [
    { title:"Speed = distance ÷ time",
      html:"<p><b>Speed</b> is how much distance is covered each second (m/s). <b>Velocity</b> is speed with a direction.</p>"+
           "<p style='text-align:center;font-size:1.3em;color:var(--ig-d)'><b>speed = distance ÷ time</b></p>"+
           "<div class='f'><p>A runner covering 100 m in 12.5 s has speed 100 ÷ 12.5 = 8 m/s.</p></div>" },
    { title:"Interactive: acceleration",
      html:"<p>Drag the acceleration and watch the speed–time line steepen.</p>"+
           "<div style='text-align:center'><svg id='acc' width='300' height='160' viewBox='0 0 300 160' style='max-width:100%'>"+
           "<line x1='30' y1='140' x2='290' y2='140' stroke='#413b63'/><line x1='30' y1='140' x2='30' y2='15' stroke='#413b63'/>"+
           "<text x='140' y='156' font-size='9' fill='#413b63'>time</text><text x='2' y='80' font-size='9' fill='#413b63'>speed</text>"+
           "<line id='acc-l' x1='30' y1='140' x2='290' y2='60' stroke='#6c4cff' stroke-width='3'/></svg></div>"+
           "<div style='text-align:center;font-family:Outfit,sans-serif'><label>a = <input id='acc-r' type='range' min='0' max='120' value='80'> <span id='acc-v'>2.0</span> m/s²</label></div>",
      init:function(el){ var r=el.querySelector('#acc-r'); var l=el.querySelector('#acc-l'); var v=el.querySelector('#acc-v'); function upd(){ var val=+r.value; l.setAttribute('y2',(140-val).toFixed(0)); v.textContent=(val/40).toFixed(1);} r.oninput=upd; upd(); } },
    { title:"Reading motion graphs",
      html:"<ul><li><b>Distance–time:</b> gradient = speed.</li><li><b>Speed–time:</b> gradient = acceleration; area under = distance.</li></ul>"+
           "<div class='f'><p>A flat line means at rest (d–t) or constant speed (v–t).</p></div>" },
    { title:"Free fall & terminal velocity (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p>Near Earth, g ≈ 9.8 m/s². A falling body speeds up until air resistance equals weight, then falls at a constant <b>terminal velocity</b>.</p>"+
           "<div style='text-align:center;margin:8px 0'><svg id='fall' width='120' height='120' viewBox='0 0 120 120' style='max-width:100%'><circle id='fall-b' cx='60' cy='20' r='9' fill='#6c4cff'/></svg></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var b=el.querySelector('#fall-b'); var y=20,v=0; function a(){ v+=0.15; if(v>3)v=3; y+=v; if(y>105){y=20;v=0;} b.setAttribute('cy',y.toFixed(0)); el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A car goes 0 → 20 m/s in 8 s. Find the acceleration.</p><p class='f'><b>A:</b> a = (20−0) ÷ 8 = <b>2.5 m/s²</b>.</p></div>" }
  ]);

  // ---------- 1.3 Mass and weight ----------
  setSlides("IG1.3", [
    { title:"Mass vs weight",
      html:"<p><b>Mass</b> (kg) = amount of matter — the same everywhere. <b>Weight</b> (N) = the pull of gravity — changes with location.</p>"+
           "<div class='f'><p>Same mass on the Moon, but less weight.</p></div>" },
    { title:"Interactive: change the planet",
      html:"<p>Drag gravity and watch the weight change while mass stays fixed.</p>"+
           "<div style='text-align:center;font-family:Outfit,sans-serif'><label>Mass = 6 kg · g = <input id='w-g' type='range' min='16' max='240' value='98'> <span id='w-gv'>9.8</span> N/kg</label>"+
           "<div style='margin-top:10px'><svg width='120' height='120' viewBox='0 0 120 120' style='max-width:100%'><line x1='60' y1='15' x2='60' y2='45' stroke='#413b63' stroke-width='2'/><rect x='42' y='45' width='36' height='24' fill='#9b7dff'/><line id='w-arrow' x1='60' y1='69' x2='60' y2='95' stroke='#dc2626' stroke-width='3'/></svg></div>"+
           "<div style='font-size:1.2em;color:var(--ig-d);margin-top:6px'>W = <b id='w-out'>58.8 N</b></div></div>",
      init:function(el){ var g=el.querySelector('#w-g'); var gv=el.querySelector('#w-gv'); var out=el.querySelector('#w-out'); var ar=el.querySelector('#w-arrow'); function upd(){ var gval=(+g.value)/10; gv.textContent=gval.toFixed(1); out.textContent=(6*gval).toFixed(1)+' N'; ar.setAttribute('y2',(69+Math.min(gval*2.5,40)).toFixed(0)); } g.oninput=upd; upd(); } },
    { title:"W = m × g",
      html:"<p style='text-align:center;font-size:1.35em;margin:14px 0;color:var(--ig-d)'><b>W = m × g</b></p>"+
           "<p>W = weight (N), m = mass (kg), g = gravitational field strength (N/kg). On Earth g ≈ 9.8; on the Moon ≈ 1.6.</p>"+
           "<div class='f'><p>A 60 kg student weighs 588 N on Earth but only ~96 N on the Moon.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> A 6 kg bag on Earth (g = 10). Find its weight.</p><p class='f'><b>A:</b> W = 6 × 10 = <b>60 N</b>.</p></div>" }
  ]);

  // ---------- 1.4 Density ----------
  setSlides("IG1.4", [
    { title:"Density = mass ÷ volume",
      html:"<p><b>Density</b> tells you how much mass is packed into a volume.</p>"+
           "<p style='text-align:center;font-size:1.35em;color:var(--ig-d)'><b>ρ = m ÷ V</b></p>"+
           "<div class='f'><p>Water = 1000 kg/m³ = 1 g/cm³.</p></div>" },
    { title:"Interactive: float or sink?",
      html:"<p>Drag the object's density and see if it floats in water.</p>"+
           "<div style='text-align:center'><svg id='fs' width='220' height='140' viewBox='0 0 220 140' style='max-width:100%'>"+
           "<rect x='30' y='40' width='160' height='95' fill='#cfe8ff' stroke='#6c4cff'/><line x1='30' y1='40' x2='190' y2='40' stroke='#0369a1'/>"+
           "<rect id='fs-o' x='95' y='30' width='30' height='30' fill='#9b7dff'/></svg></div>"+
           "<div style='font-family:Outfit,sans-serif'><label>Object density = <input id='fs-r' type='range' min='3' max='20' value='8'> <span id='fs-v'>0.8</span> g/cm³</label><div id='fs-msg' style='margin-top:6px;font-weight:600;color:var(--ig-d)'></div></div>",
      init:function(el){ var r=el.querySelector('#fs-r'); var v=el.querySelector('#fs-v'); var o=el.querySelector('#fs-o'); var msg=el.querySelector('#fs-msg'); function upd(){ var d=(+r.value)/10; v.textContent=d.toFixed(1); if(d<1){ o.setAttribute('y',32); msg.textContent='Floats — less dense than water'; msg.style.color='#16a34a'; } else { o.setAttribute('y',100); msg.textContent='Sinks — denser than water'; msg.style.color='#dc2626'; } } r.oninput=upd; upd(); } },
    { title:"Finding density",
      html:"<ul><li><b>Regular solid:</b> mass on balance, volume by formula.</li><li><b>Irregular solid:</b> mass on balance, volume by displacement.</li></ul>"+
           "<div class='f'><p>A 240 g block of volume 30 cm³ has ρ = 8 g/cm³.</p></div>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> mass 240 g, volume 30 cm³. Find density.</p><p class='f'><b>A:</b> 240 ÷ 30 = <b>8 g/cm³</b>.</p></div>" }
  ]);

  // ---------- 1.5 Forces ----------
  setSlides("IG1.5", [
    { title:"Forces change motion",
      html:"<p>A <b>force</b> (N) is a push or pull. It can change speed, direction or shape. Forces are vectors — they have direction.</p>" },
    { title:"Interactive: F = m a",
      html:"<p>Drag the force on a 2 kg trolley and watch it accelerate.</p>"+
           "<div style='text-align:center'><svg id='fma' width='300' height='80' viewBox='0 0 300 80' style='max-width:100%'>"+
           "<line x1='10' y1='60' x2='290' y2='60' stroke='#cbd5e1'/><rect id='fma-b' x='20' y='36' width='34' height='24' fill='#6c4cff'/></svg></div>"+
           "<div style='font-family:Outfit,sans-serif'><label>Force = <input id='fma-r' type='range' min='0' max='40' value='12'> <span id='fma-f'>12</span> N → a = <b id='fma-a'>6.0</b> m/s²</label></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var r=el.querySelector('#fma-r'); var f=el.querySelector('#fma-f'); var av=el.querySelector('#fma-a'); var b=el.querySelector('#fma-b'); var x=20; function upd(){ f.textContent=r.value; av.textContent=((+r.value)/2).toFixed(1);} r.oninput=upd; upd(); function a(){ var acc=(+r.value)/2; x+=acc*0.15; if(x>256)x=20; b.setAttribute('x',x.toFixed(0)); el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Resultant force",
      html:"<p>Combine forces: same direction add, opposite subtract. Zero resultant → still or constant velocity (equilibrium).</p>"+
           "<div class='f'><p>10 N right and 4 N left give a 6 N resultant to the right.</p></div>" },
    { title:"Friction & Hooke's law (Extended)",
      html:"<p><b>Friction</b> and air resistance oppose motion. <b>Hooke's law (Ext):</b> F = k x — spring extension ∝ force.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 12 N resultant on a 4 kg mass. Find a.</p><p class='f'><b>A:</b> a = 12 ÷ 4 = <b>3 m/s²</b>.</p></div>" }
  ]);

  // ---------- 1.6 Momentum ----------
  setSlides("IG1.6", [
    { title:"Momentum (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.3em;color:var(--ig-d)'><b>p = m × v</b></p><p>Momentum = mass × velocity (kg·m/s). It's a vector.</p>" },
    { title:"Conservation in a collision",
      html:"<div class='ig-ext'>EXTENDED</div><p>With no external force, <b>total momentum before = total after</b>.</p>"+
           "<div style='text-align:center'><svg id='col' width='300' height='70' viewBox='0 0 300 70' style='max-width:100%'>"+
           "<line x1='10' y1='50' x2='290' y2='50' stroke='#cbd5e1'/><rect id='col-a' x='30' y='28' width='30' height='22' fill='#6c4cff'/><rect id='col-b' x='200' y='28' width='30' height='22' fill='#16a34a'/></svg></div>"+
           "<div class='f'><p>2 kg at 3 m/s hits 1 kg at rest → couple → 2 m/s.</p></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var a=el.querySelector('#col-a'); var b=el.querySelector('#col-b'); var xa=30,xb=200,phase=0; function f(){ if(phase===0){ xa+=2; if(xa+30>=xb){phase=1;} } else { xa+=1.3; xb+=1.3; if(xb>260){xa=30;xb=200;phase=0;} } a.setAttribute('x',xa.toFixed(0)); b.setAttribute('x',xb.toFixed(0)); el._raf=requestAnimationFrame(f);} f(); } },
    { title:"Force & safety",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;color:var(--ig-d)'><b>F = Δp ÷ Δt</b></p><p>Longer collision time → smaller force. This is how airbags and crumple zones protect you.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 2 kg ball at 3 m/s. Find momentum.</p><p class='f'><b>A:</b> p = 2 × 3 = <b>6 kg·m/s</b>.</p></div>" }
  ]);

  // ---------- 1.7 Energy, work, power ----------
  setSlides("IG1.7", [
    { title:"Energy is conserved",
      html:"<p>Energy (J) is stored (kinetic, gravitational, elastic, thermal, chemical, nuclear) and transferred — never created or destroyed.</p>" },
    { title:"GPE → KE animation",
      html:"<p>A falling ball transfers gravitational energy to kinetic energy.</p>"+
           "<div style='text-align:center'><svg id='gpe' width='120' height='130' viewBox='0 0 120 130' style='max-width:100%'>"+
           "<line x1='20' y1='120' x2='100' y2='120' stroke='#cbd5e1'/><circle id='gpe-b' cx='60' cy='20' r='10' fill='#6c4cff'/>"+
           "<text id='gpe-l' x='60' y='12' font-size='9' text-anchor='middle' fill='#16a34a'>GPE</text></svg></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var b=el.querySelector('#gpe-b'); var l=el.querySelector('#gpe-l'); var y=20,v=0; function a(){ v+=0.2; y+=v; if(y>110){y=20;v=0;} b.setAttribute('cy',y.toFixed(0)); l.textContent = y<65?'GPE':'KE'; l.setAttribute('y',(y-14).toFixed(0)); el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Work and power",
      html:"<p style='text-align:center;color:var(--ig-d)'><b>W = F × d</b> &nbsp; <b>P = W ÷ t</b></p><p>Work (J) = force × distance. Power (W) = energy per second.</p>"+
           "<div class='f'><p>50 N moving a box 4 m does 200 J of work.</p></div>" },
    { title:"Efficiency (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;color:var(--ig-d)'><b>efficiency = useful ÷ total</b></p><p>Always under 100% — waste usually becomes heat.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 50 N force moves a box 4 m. Work done?</p><p class='f'><b>A:</b> W = 50 × 4 = <b>200 J</b>.</p></div>" }
  ]);

  // ---------- 1.8 Pressure ----------
  setSlides("IG1.8", [
    { title:"Pressure = force ÷ area",
      html:"<p style='text-align:center;font-size:1.3em;color:var(--ig-d)'><b>p = F ÷ A</b></p><p>Same force, smaller area → bigger pressure (that's why knives are sharp). Unit: pascal (Pa).</p>" },
    { title:"Pressure grows with depth",
      html:"<p>In a liquid, pressure increases with depth and acts in all directions.</p>"+
           "<div style='text-align:center'><svg width='200' height='130' viewBox='0 0 200 130' style='max-width:100%'>"+
           "<path d='M40 15 L160 15 L150 125 L50 125 Z' fill='#cfe8ff' stroke='#6c4cff' stroke-width='2'/>"+
           "<line x1='60' y1='40' x2='85' y2='40' stroke='#5238cc' stroke-width='2'/><line x1='60' y1='75' x2='100' y2='75' stroke='#5238cc' stroke-width='3'/><line x1='60' y1='110' x2='115' y2='110' stroke='#5238cc' stroke-width='4'/></svg></div>"+
           "<div class='f'><p>Dam walls are thicker at the bottom for this reason.</p></div>" },
    { title:"Liquid pressure (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;color:var(--ig-d)'><b>p = ρ g h</b></p><p>Depends only on depth and density, not container shape.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> 200 N on 0.5 m². Find pressure.</p><p class='f'><b>A:</b> p = 200 ÷ 0.5 = <b>400 Pa</b>.</p></div>" }
  ]);

  // ---------- 2.1 Kinetic particle model ----------
  setSlides("IG2.1", [
    { title:"Three states of matter",
      html:"<p>All matter is made of tiny <b>particles</b>. Their arrangement and energy give the three states.</p>"+
           "<div style='text-align:center;margin:8px 0'><svg id='states' width='300' height='90' viewBox='0 0 300 90' style='max-width:100%'>"+
           "<text x='30' y='14' font-size='9' fill='#413b63'>SOLID</text><text x='130' y='14' font-size='9' fill='#413b63'>LIQUID</text><text x='235' y='14' font-size='9' fill='#413b63'>GAS</text></svg></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var s=el.querySelector('#states'); var t=0; function a(){ var g='';
        for(var i=0;i<9;i++){ var col=i%3, row=Math.floor(i/3); g+='<circle cx="'+(18+col*16+1.5*Math.sin(t+i)).toFixed(1)+'" cy="'+(30+row*16+1.5*Math.cos(t+i)).toFixed(1)+'" r="6" fill="#6c4cff"/>'; }
        for(var j=0;j<7;j++){ g+='<circle cx="'+(120+(j*13)%55+4*Math.sin(t*1.4+j)).toFixed(1)+'" cy="'+(35+Math.floor(j/4)*18+4*Math.cos(t+j)).toFixed(1)+'" r="6" fill="#9b7dff"/>'; }
        for(var k=0;k<5;k++){ g+='<circle cx="'+(225+((k*40+t*30)%60)).toFixed(1)+'" cy="'+(30+((k*33+t*22)%45)).toFixed(1)+'" r="6" fill="#c4b5fd"/>'; }
        s.innerHTML='<text x="30" y="14" font-size="9" fill="#413b63">SOLID</text><text x="130" y="14" font-size="9" fill="#413b63">LIQUID</text><text x="235" y="14" font-size="9" fill="#413b63">GAS</text>'+g; t+=0.05; el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Properties explained",
      html:"<ul><li><b>Solids</b> — fixed shape & volume (locked particles).</li><li><b>Liquids</b> — take container shape, fixed volume.</li><li><b>Gases</b> — fill any space, compressible.</li></ul>" },
    { title:"Interactive: heat it up",
      html:"<p>Drag the temperature and watch the particles speed up.</p>"+
           "<div style='text-align:center'><svg id='heat' width='160' height='120' viewBox='0 0 160 120' style='max-width:100%'><rect x='20' y='15' width='120' height='95' fill='none' stroke='#6c4cff'/></svg></div>"+
           "<div style='font-family:Outfit,sans-serif;text-align:center'><label>Temp <input id='heat-r' type='range' min='1' max='10' value='4'></label></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var svg=el.querySelector('#heat'); var r=el.querySelector('#heat-r'); var ps=[]; for(var i=0;i<12;i++){ ps.push({x:30+Math.random()*100,y:25+Math.random()*75,vx:(Math.random()-.5),vy:(Math.random()-.5)}); } function a(){ var sp=(+r.value)/2; var g=''; ps.forEach(function(p){ p.x+=p.vx*sp; p.y+=p.vy*sp; if(p.x<26||p.x>134)p.vx*=-1; if(p.y<21||p.y>104)p.vy*=-1; g+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="5" fill="#6c4cff"/>'; }); svg.innerHTML='<rect x="20" y="15" width="120" height="95" fill="none" stroke="#6c4cff"/>'+g; el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Gas pressure",
      html:"<p>Gas particles collide with the walls — those collisions create <b>pressure</b>. Heat the gas → faster particles → more collisions → higher pressure.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> Why can gases be compressed but liquids can't?</p><p class='f'><b>A:</b> Gas particles are far apart with space between; liquid particles already touch.</p></div>" }
  ]);

  // ---------- 2.2 Thermal properties & temperature ----------
  setSlides("IG2.2", [
    { title:"Temperature vs heat",
      html:"<p><b>Temperature</b> (°C/K) = average particle energy. <b>Thermal energy</b> = total energy transferred due to a temperature difference. Heat flows <b>hot → cold</b>.</p>" },
    { title:"Thermal expansion",
      html:"<p>Heated materials <b>expand</b> — particles vibrate more and take up more room.</p>"+
           "<div style='text-align:center'><svg id='exp' width='200' height='60' viewBox='0 0 200 60' style='max-width:100%'><rect id='exp-b' x='40' y='20' width='60' height='22' fill='#ea580c'/></svg></div>"+
           "<div class='f'><p>Gaps in bridges and rails allow for this.</p></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var b=el.querySelector('#exp-b'); var t=0; function a(){ var w=60+25*(0.5+0.5*Math.sin(t)); b.setAttribute('width',w.toFixed(0)); t+=0.03; el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Specific heat capacity (Extended)",
      html:"<div class='ig-ext'>EXTENDED</div><p style='text-align:center;font-size:1.25em;color:var(--ig-d)'><b>E = m c Δθ</b></p><p>Energy to warm a material depends on mass, the material (c), and the temperature change.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> Why are gaps left in railway tracks?</p><p class='f'><b>A:</b> To allow the metal to expand in heat without buckling.</p></div>" }
  ]);

  // ---------- 2.3 Transfer of thermal energy ----------
  setSlides("IG2.3", [
    { title:"Three ways heat travels",
      html:"<p><b>Conduction</b> (solids), <b>convection</b> (fluids), <b>radiation</b> (through empty space).</p>" },
    { title:"Conduction",
      html:"<p>Heated particles vibrate more and pass energy to neighbours. Metals are best — free electrons carry energy fast.</p>"+
           "<div style='text-align:center'><svg id='cond' width='240' height='40' viewBox='0 0 240 40' style='max-width:100%'><rect x='20' y='14' width='200' height='14' fill='#cbd5e1'/><rect id='cond-h' x='20' y='14' width='20' height='14' fill='#ea580c'/></svg></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var h=el.querySelector('#cond-h'); var w=20; function a(){ w+=0.6; if(w>200)w=20; h.setAttribute('width',w.toFixed(0)); el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Convection currents",
      html:"<p>Heated fluid expands, becomes less dense and <b>rises</b>; cooler fluid sinks — a convection current.</p>"+
           "<div style='text-align:center'><svg id='conv' width='200' height='120' viewBox='0 0 200 120' style='max-width:100%'>"+
           "<rect x='40' y='20' width='120' height='80' fill='none' stroke='#6c4cff' stroke-width='2'/>"+
           "<circle id='cv1' cx='70' cy='90' r='6' fill='#ef4444'/><circle id='cv2' cx='130' cy='30' r='6' fill='#3b82f6'/>"+
           "<line x1='70' y1='100' x2='130' y2='100' stroke='#ea580c' stroke-width='4'/></svg></div>",
      init:function(el){ if(el._raf)cancelAnimationFrame(el._raf); var c1=el.querySelector('#cv1'); var c2=el.querySelector('#cv2'); var t=0; function a(){ c1.setAttribute('cy',(60-30*Math.sin(t)).toFixed(0)); c1.setAttribute('cx',(70+10*Math.sin(t)).toFixed(0)); c2.setAttribute('cy',(60+30*Math.sin(t)).toFixed(0)); c2.setAttribute('cx',(130-10*Math.sin(t)).toFixed(0)); t+=0.04; el._raf=requestAnimationFrame(a);} a(); } },
    { title:"Radiation",
      html:"<p><b>Infrared radiation</b> needs no particles — it crosses a vacuum (Sun → Earth). Dark dull surfaces emit/absorb best; shiny surfaces reflect.</p>" },
    { title:"Quick check",
      html:"<div class='pq'><p><b>Q:</b> Which heat transfer works through a vacuum?</p><p class='f'><b>A:</b> <b>Radiation</b> — it needs no particles.</p></div>" }
  ]);

})();
