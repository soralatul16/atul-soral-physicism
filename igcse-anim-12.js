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

})();
