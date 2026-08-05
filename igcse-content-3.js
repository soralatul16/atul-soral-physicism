// IGCSE Topic 3 (Waves) — content with INTERACTIVE animated presentations.
// Merges into window.IGCSE_CONTENT (loaded after igcse-content.js).
(function(){
  var C = window.IGCSE_CONTENT = window.IGCSE_CONTENT || {};

  C["IG3.1"] = {
    title: "General properties of waves",
    tier: "both",
    slides: [
      { title: "What is a wave?",
        html: "<p>A <b>wave</b> transfers <b>energy</b> from one place to another <b>without transferring matter</b>. The particles vibrate about fixed points — they don't travel with the wave.</p>"+
              "<div class='f'><p>Think of a Mexican wave in a stadium: the wave moves around the stadium, but each person stays in their seat.</p></div>"+
              "<div style='text-align:center;margin:16px 0'><svg id='w-intro' width='320' height='120' viewBox='0 0 320 120' style='max-width:100%'><path id='w-intro-path' fill='none' stroke='#6c4cff' stroke-width='3'/></svg></div>",
        init: function(el){ var svg=el.querySelector('#w-intro-path'); var t=0; if(el._raf)cancelAnimationFrame(el._raf); function draw(){ var d='M0 60'; for(var x=0;x<=320;x+=4){ var y=60+35*Math.sin((x/40)-t); d+=' L'+x+' '+y.toFixed(1); } svg.setAttribute('d',d); t+=0.08; el._raf=requestAnimationFrame(draw); } draw(); } },

      { title: "Interactive: build a wave",
        html: "<p>Drag the sliders and watch how <b>amplitude</b> and <b>wavelength</b> change the wave.</p>"+
              "<div style='text-align:center;margin:12px 0'><svg id='w-int' width='340' height='150' viewBox='0 0 340 150' style='max-width:100%'>"+
              "<line x1='0' y1='75' x2='340' y2='75' stroke='#cbd5e1' stroke-dasharray='4'/>"+
              "<path id='w-int-path' fill='none' stroke='#6c4cff' stroke-width='3'/></svg></div>"+
              "<div style='display:flex;gap:20px;justify-content:center;flex-wrap:wrap;font-family:Outfit,sans-serif;font-size:13px'>"+
              "<label>Amplitude <input id='w-amp' type='range' min='10' max='60' value='35'></label>"+
              "<label>Wavelength <input id='w-len' type='range' min='20' max='90' value='45'></label></div>"+
              "<p class='f' style='text-align:center;color:var(--text3);font-family:Outfit,sans-serif;font-size:12px'>Amplitude = height of the wave · Wavelength = distance for one full cycle</p>",
        init: function(el){ var svg=el.querySelector('#w-int-path'); var amp=el.querySelector('#w-amp'); var len=el.querySelector('#w-len'); var t=0; if(el._raf)cancelAnimationFrame(el._raf);
          function draw(){ var A=+amp.value, L=+len.value; var d='M0 75'; for(var x=0;x<=340;x+=3){ var y=75+A*Math.sin((x/L*6.28)-t); d+=' L'+x+' '+y.toFixed(1); } svg.setAttribute('d',d); t+=0.07; el._raf=requestAnimationFrame(draw); } draw(); } },

      { title: "Wave equation",
        html: "<p>The speed, frequency and wavelength of a wave are linked:</p>"+
              "<p style='text-align:center;font-size:1.35em;margin:16px 0;color:var(--ig-d)'><b>v = f λ</b></p>"+
              "<ul><li><b>v</b> = wave speed (m/s)</li><li><b>f</b> = frequency (Hz) — waves per second</li><li><b>λ</b> = wavelength (m) — length of one wave</li></ul>"+
              "<div class='f'><p><b>Worked example:</b> a wave of frequency 5 Hz and wavelength 0.4 m travels at v = 5 × 0.4 = <b>2 m/s</b>.</p></div>" },

      { title: "Transverse vs longitudinal",
        html: "<p><b>Transverse:</b> particles vibrate at right angles to the wave direction (light, water, waves on a rope).</p>"+
              "<div style='text-align:center;margin:6px 0'><svg id='w-tr' width='300' height='70' viewBox='0 0 300 70' style='max-width:100%'><path id='w-tr-path' fill='none' stroke='#6c4cff' stroke-width='3'/></svg></div>"+
              "<p class='f'><b>Longitudinal:</b> particles vibrate along the wave direction — compressions and rarefactions (sound).</p>"+
              "<div class='f' style='text-align:center;margin:6px 0'><svg id='w-lo' width='300' height='50' viewBox='0 0 300 50' style='max-width:100%'></svg></div>",
        init: function(el){ if(el._raf)cancelAnimationFrame(el._raf); var tr=el.querySelector('#w-tr-path'); var lo=el.querySelector('#w-lo'); var t=0;
          function draw(){ var d='M0 35'; for(var x=0;x<=300;x+=4){ d+=' L'+x+' '+(35+22*Math.sin((x/35)-t)).toFixed(1); } tr.setAttribute('d',d);
            // longitudinal: dots bunching
            var dots=''; for(var i=0;i<40;i++){ var base=i*7.5; var off=6*Math.sin((base/35)-t); dots+='<circle cx="'+(base+off).toFixed(1)+'" cy="25" r="3" fill="#9b7dff"/>'; } lo.innerHTML=dots;
            t+=0.07; el._raf=requestAnimationFrame(draw); } draw(); } },

      { title: "Reflection & refraction",
        html: "<p>Waves change behaviour at boundaries:</p>"+
              "<ul><li><b>Reflection</b> — the wave bounces off a surface; angle in = angle out.</li>"+
              "<li><b>Refraction</b> — the wave changes speed (and bends) when it enters a new medium.</li></ul>"+
              "<div class='f'><p>When a wave slows down (e.g. water going shallow), its wavelength gets shorter but frequency stays the same.</p></div>" },

      { title: "Quick check",
        html: "<div class='pq'><p><b>Q:</b> A wave has frequency 8 Hz and wavelength 0.5 m. Find its speed.</p><p class='f'><b>A:</b> v = fλ = 8 × 0.5 = <b>4 m/s</b>.</p></div>" }
    ],
    learn: [
      { tier:"foundation", heading:"Waves carry energy, not matter",
        html:"<p>A wave is a disturbance that transfers <b>energy</b> from one point to another <b>without transferring matter</b>. When a wave travels along a rope, the rope particles move up and down but stay in the same place along its length — only the energy moves along.</p><p>Two families of waves: <b>transverse</b> (vibration at right angles to travel — light, water) and <b>longitudinal</b> (vibration along the direction of travel — sound).</p>" },
      { tier:"core", heading:"Describing a wave",
        html:"<ul><li><b>Wavelength (λ)</b> — distance for one complete wave (m).</li><li><b>Amplitude</b> — maximum displacement from rest (bigger = more energy).</li><li><b>Frequency (f)</b> — waves per second, in hertz (Hz).</li><li><b>Period (T)</b> — time for one wave; T = 1/f.</li></ul>" },
      { tier:"core", heading:"The wave equation",
        html:"<p style='text-align:center;font-size:1.2em;color:var(--ig-d)'><b>v = f λ</b></p><p>Wave speed = frequency × wavelength. <b>Worked example:</b> a 5 Hz wave with λ = 0.4 m has v = 5 × 0.4 = 2 m/s.</p>" },
      { tier:"core", heading:"Reflection, refraction and diffraction",
        html:"<p><b>Reflection:</b> waves bounce off a barrier (angle of incidence = angle of reflection). <b>Refraction:</b> waves change speed and direction entering a new medium — slowing shortens the wavelength (frequency unchanged). <b>Diffraction:</b> waves spread out when passing through a gap or round an edge, most when the gap ≈ the wavelength.</p>" }
    ],
    simulation:{ title:"Waves and Oscillations Lab", file:"sims/waves-lab.html", source:"Atul Soral Physicism — Interactive Sim",
      instructions:["Change frequency and amplitude and watch the wave.","Verify v = f λ by reading the values.","Send the wave into a boundary to see reflection and refraction."] },
    formulas:[ {f:"v = f λ", d:"Wave speed = frequency × wavelength."}, {f:"T = 1 / f", d:"Period = 1 / frequency."} ],
    practice:[
      { q:"A wave transfers:", type:"mcq", options:["matter only","energy without matter","both equally","neither"], answer:1, marks:1, solution:"Waves transfer energy without transferring matter." },
      { q:"Sound is which type of wave?", type:"mcq", options:["transverse","longitudinal","electromagnetic","standing"], answer:1, marks:1, solution:"Sound is a longitudinal wave (compressions and rarefactions)." },
      { q:"A wave has f = 12 Hz and λ = 0.25 m. Calculate its speed.", type:"struct", answer:"3 m/s", marks:2, solution:"v = fλ = 12 × 0.25 = 3 m/s. [2]" },
      { q:"When a wave refracts into a slower medium, what happens to its frequency and wavelength?", type:"struct", answer:"f same, λ shorter", marks:2, solution:"Frequency stays the same; wavelength decreases (since v = fλ and v drops). [2]" }
    ],
    mistakes:[
      "Thinking waves carry matter along — they carry <b>energy</b>; particles stay put.",
      "Mixing up amplitude (height/energy) with wavelength (length of one cycle).",
      "Saying frequency changes on refraction — <b>frequency is fixed by the source</b>; wavelength changes.",
      "Calling sound a transverse wave — it is <b>longitudinal</b>."
    ],
    exam:[
      { q:"State the difference between a transverse and a longitudinal wave. [2]", marks:2, solution:"In a transverse wave particles vibrate at right angles to the direction of travel; in a longitudinal wave they vibrate along it. [2]" },
      { q:"A water wave travels at 1.5 m/s with a wavelength of 0.30 m. Calculate its frequency. [2]", marks:2, solution:"f = v ÷ λ = 1.5 ÷ 0.30 = 5.0 Hz. [2]" }
    ],
    checklist:[ "I can state that waves transfer energy, not matter.","I can define wavelength, amplitude, frequency and period.","I can use v = f λ.","I can describe reflection, refraction and diffraction.","I can tell transverse from longitudinal waves." ]
  };

})();
