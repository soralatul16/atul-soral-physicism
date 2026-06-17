// patch-animations.js — Adds animated SVGs to every teaching slide
// Run: node patch-animations.js

const fs = require('fs');
let html = fs.readFileSync('presentations/a1-kinematics.html', 'utf8');

// ═══ SLIDE 4: SCALARS vs VECTORS — add animated vector addition ═══
const vectorAnim = `
    <div class="f svg-fig" style="margin-top:12px">
      <svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:450px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:8px">
        <style>
          @keyframes drawEast{from{stroke-dashoffset:150}to{stroke-dashoffset:0}}
          @keyframes drawNorth{0%,40%{stroke-dashoffset:120;opacity:0}41%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}
          @keyframes drawResult{0%,70%{stroke-dashoffset:190;opacity:0}71%{opacity:1}100%{stroke-dashoffset:0;opacity:1}}
          @keyframes fadeLabel{0%,80%{opacity:0}100%{opacity:1}}
          .vec-east{stroke-dasharray:150;animation:drawEast 1.5s ease forwards}
          .vec-north{stroke-dasharray:120;animation:drawNorth 3s ease forwards}
          .vec-result{stroke-dasharray:190;animation:drawResult 4.5s ease forwards}
          .lbl-result{animation:fadeLabel 5s ease forwards}
        </style>
        <defs>
          <marker id="ve" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#f59e0b"/></marker>
          <marker id="vn" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#f59e0b"/></marker>
          <marker id="vr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#ef4444"/></marker>
        </defs>
        <!-- 3 km East -->
        <line x1="60" y1="160" x2="210" y2="160" stroke="#f59e0b" stroke-width="3" marker-end="url(#ve)" class="vec-east"/>
        <text x="135" y="180" font-size="11" fill="#f59e0b" text-anchor="middle" font-family="sans-serif" font-weight="bold">3 km East</text>
        <!-- 4 km North -->
        <line x1="210" y1="160" x2="210" y2="40" stroke="#f59e0b" stroke-width="3" marker-end="url(#vn)" class="vec-north"/>
        <text x="235" y="100" font-size="11" fill="#f59e0b" font-family="sans-serif" font-weight="bold">4 km North</text>
        <!-- Resultant = 5 km -->
        <line x1="60" y1="160" x2="210" y2="40" stroke="#ef4444" stroke-width="3" stroke-dasharray="190" marker-end="url(#vr)" class="vec-result"/>
        <text x="110" y="85" font-size="12" fill="#ef4444" font-family="sans-serif" font-weight="bold" class="lbl-result" opacity="0">Displacement = 5 km</text>
        <!-- Labels -->
        <text x="300" y="60" font-size="10" fill="var(--text2)" font-family="sans-serif">Scalar: 3 + 4 = 7 km</text>
        <text x="300" y="80" font-size="10" fill="#ef4444" font-family="sans-serif" font-weight="bold" class="lbl-result" opacity="0">Vector: 3 + 4 = 5 km!</text>
        <text x="300" y="110" font-size="9" fill="var(--text2)" font-family="sans-serif" class="lbl-result" opacity="0">(Pythagoras: 3² + 4² = 5²)</text>
        <!-- Start dot -->
        <circle cx="60" cy="160" r="5" fill="#10b981"/>
        <text x="60" y="195" font-size="9" fill="#10b981" text-anchor="middle" font-family="sans-serif">Start</text>
      </svg>
    </div>`;

html = html.replace(
  '<div class="f note"><strong>Why does this matter?</strong>',
  vectorAnim + '\n    <div class="f note"><strong>Why does this matter?</strong>'
);

// ═══ SLIDE 5: DISTANCE vs DISPLACEMENT — animate the dot traveling ═══
const distAnimSvg = `
        <svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" style="background:var(--surface);border:1px solid var(--border);border-radius:8px">
          <style>
            @keyframes moveDot{
              0%{cx:40;cy:200}
              18%{cx:130;cy:200}
              36%{cx:130;cy:80}
              54%{cx:250;cy:80}
              72%{cx:250;cy:200}
              90%{cx:280;cy:200}
              100%{cx:280;cy:200}
            }
            @keyframes pathDraw{from{stroke-dashoffset:600}to{stroke-dashoffset:0}}
            .travel-dot{animation:moveDot 6s ease-in-out infinite}
            .path-draw{stroke-dasharray:600;animation:pathDraw 4s ease forwards}
          </style>
          <defs><marker id="av" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><polygon points="0 0,8 3,0 6" fill="#a78bfa"/></marker></defs>
          <g stroke="var(--border)" stroke-width=".5"><line x1="40" y1="40" x2="40" y2="240"/><line x1="100" y1="40" x2="100" y2="240"/><line x1="160" y1="40" x2="160" y2="240"/><line x1="220" y1="40" x2="220" y2="240"/><line x1="280" y1="40" x2="280" y2="240"/><line x1="20" y1="60" x2="290" y2="60"/><line x1="20" y1="120" x2="290" y2="120"/><line x1="20" y1="180" x2="290" y2="180"/><line x1="20" y1="240" x2="290" y2="240"/></g>
          <!-- Path -->
          <polyline points="40,200 130,200 130,80 250,80 250,200 280,200" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linejoin="round" class="path-draw"/>
          <!-- Start/End -->
          <circle cx="40" cy="200" r="7" fill="#10b981"/>
          <circle cx="280" cy="200" r="7" fill="#ef4444"/>
          <text x="40" y="220" font-size="9" fill="#10b981" text-anchor="middle" font-family="sans-serif" font-weight="bold">Start</text>
          <text x="280" y="220" font-size="9" fill="#ef4444" text-anchor="middle" font-family="sans-serif" font-weight="bold">End</text>
          <!-- Segment labels -->
          <text x="85" y="195" font-size="9" fill="#0ea5e9" font-family="monospace">1.5</text>
          <text x="138" y="145" font-size="9" fill="#0ea5e9" font-family="monospace">2</text>
          <text x="190" y="72" font-size="9" fill="#0ea5e9" font-family="monospace">2</text>
          <text x="258" y="145" font-size="9" fill="#0ea5e9" font-family="monospace">2</text>
          <text x="265" y="195" font-size="9" fill="#0ea5e9" font-family="monospace">.5</text>
          <!-- Displacement arrow -->
          <line x1="40" y1="250" x2="280" y2="250" stroke="#a78bfa" stroke-width="2" stroke-dasharray="7,4" marker-end="url(#av)"/>
          <text x="160" y="268" font-size="10" fill="#a78bfa" text-anchor="middle" font-weight="bold" font-family="sans-serif">Displacement = 4 m East</text>
          <text x="160" y="30" font-size="10" fill="#0ea5e9" text-anchor="middle" font-weight="bold" font-family="sans-serif">Distance = 8 m (path)</text>
          <!-- Moving dot -->
          <circle cx="40" cy="200" r="6" fill="#f59e0b" class="travel-dot">
          </circle>
          <!-- Trail glow -->
          <circle cx="40" cy="200" r="10" fill="#f59e0b" opacity=".2" class="travel-dot"/>
        </svg>`;

// Replace old static SVG for slide 5
html = html.replace(
  /<div class="f svg-fig">\s*<svg viewBox="0 0 300 280"[^]*?<\/svg>\s*<\/div>/,
  '<div class="f svg-fig">\n' + distAnimSvg + '\n      </div>'
);

// ═══ SLIDE 6: CLOSED PATH — animate runner around track ═══
const trackAnimSvg = `
        <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="background:var(--surface);border:1px solid var(--border);border-radius:8px">
          <style>
            @keyframes runTrack{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
            .runner-orbit{animation:runTrack 4s linear infinite;transform-origin:120px 120px}
          </style>
          <defs><marker id="ac" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#f59e0b"/></marker></defs>
          <circle cx="120" cy="120" r="80" fill="none" stroke="var(--border)" stroke-width="14"/>
          <circle cx="120" cy="120" r="80" fill="none" stroke="#0ea5e9" stroke-width="2"/>
          <!-- Direction arrow -->
          <path d="M 130,41 A 80,80 0 0,1 185,65" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1.5" marker-end="url(#ac)"/>
          <!-- Start/Finish marker -->
          <circle cx="120" cy="40" r="6" fill="#10b981"/>
          <text x="120" y="26" font-size="9" fill="#10b981" text-anchor="middle" font-weight="bold" font-family="sans-serif">Start = End</text>
          <!-- Animated runner dot -->
          <g class="runner-orbit">
            <circle cx="120" cy="40" r="8" fill="#f59e0b"/>
            <circle cx="120" cy="40" r="12" fill="#f59e0b" opacity=".2"/>
            <text x="120" y="44" font-size="7" fill="#000" text-anchor="middle" font-weight="bold">🏃</text>
          </g>
          <!-- Track label -->
          <text x="120" y="125" font-size="11" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">400 m track</text>
          <text x="120" y="145" font-size="9" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">r = 63.7 m</text>
        </svg>`;

html = html.replace(
  /<svg viewBox="0 0 240 240"[^]*?class="orbit-path"[^]*?<\/svg>/,
  trackAnimSvg
);

// ═══ SLIDE 9: ACCELERATION — ball thrown up with velocity arrows ═══
const accelAnim = `
    <div class="f svg-fig" style="margin-top:14px">
      <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:8px">
        <style>
          @keyframes ballUp{0%{cy:170}50%{cy:30}100%{cy:170}}
          @keyframes vArrow1{0%{y2:140;opacity:1}50%{y2:170;opacity:.2}100%{y2:140;opacity:1}}
          .ball-anim{animation:ballUp 3s ease-in-out infinite}
        </style>
        <defs><marker id="vup" markerWidth="6" markerHeight="5" refX="3" refY="5" orient="auto"><polygon points="0 5,3 0,6 5" fill="#3b82f6"/></marker>
        <marker id="vdn" markerWidth="6" markerHeight="5" refX="3" refY="0" orient="auto"><polygon points="0 0,3 5,6 0" fill="#ef4444"/></marker></defs>
        <!-- Ground -->
        <line x1="20" y1="180" x2="480" y2="180" stroke="var(--border)" stroke-width="2"/>
        <!-- Ball positions with velocity arrows -->
        <!-- Position 1: going up fast -->
        <circle cx="80" cy="150" r="10" fill="#f59e0b" opacity=".6"/>
        <line x1="80" y1="140" x2="80" y2="100" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#vup)"/>
        <text x="80" y="195" font-size="8" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">v = 20 m/s ↑</text>
        <!-- Position 2: slowing down -->
        <circle cx="170" cy="90" r="10" fill="#f59e0b" opacity=".6"/>
        <line x1="170" y1="80" x2="170" y2="55" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#vup)"/>
        <text x="170" y="195" font-size="8" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">v = 10 m/s ↑</text>
        <!-- Position 3: TOP — v=0 -->
        <circle cx="260" cy="35" r="12" fill="#f59e0b"/>
        <text x="260" y="40" font-size="7" fill="#000" text-anchor="middle" font-weight="bold">TOP</text>
        <text x="260" y="60" font-size="9" fill="#ef4444" text-anchor="middle" font-weight="bold" font-family="sans-serif">v = 0</text>
        <text x="260" y="75" font-size="8" fill="#ef4444" text-anchor="middle" font-family="sans-serif">but a = 9.8 ↓ !!</text>
        <!-- Position 4: falling -->
        <circle cx="350" cy="90" r="10" fill="#f59e0b" opacity=".6"/>
        <line x1="350" y1="100" x2="350" y2="125" stroke="#ef4444" stroke-width="2.5" marker-end="url(#vdn)"/>
        <text x="350" y="195" font-size="8" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">v = 10 m/s ↓</text>
        <!-- Position 5: falling fast -->
        <circle cx="440" cy="150" r="10" fill="#f59e0b" opacity=".6"/>
        <line x1="440" y1="160" x2="440" y2="195" stroke="#ef4444" stroke-width="2.5" marker-end="url(#vdn)"/>
        <text x="440" y="195" font-size="8" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">v = 20 m/s ↓</text>
        <!-- g arrows (constant throughout) -->
        <text x="260" y="185" font-size="8" fill="#94a3b8" text-anchor="middle" font-family="sans-serif">g = 9.8 m/s² ↓ at ALL positions</text>
        <!-- Animated ball -->
        <circle cx="260" cy="170" r="8" fill="#f59e0b" opacity=".4" class="ball-anim"/>
      </svg>
    </div>`;

html = html.replace(
  '<div class="f warn" style="margin-top:10px"><strong>The #1 student misconception:</strong>',
  accelAnim + '\n    <div class="f warn" style="margin-top:10px"><strong>The #1 student misconception:</strong>'
);

// ═══ SLIDE 10: GRAPHS — self-drawing animated graphs ═══
const graphAnimContent = `
    <div class="f grid2" style="margin-top:12px">
      <div>
        <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:8px">
          <style>
            @keyframes drawGraph1{from{stroke-dashoffset:400}to{stroke-dashoffset:0}}
            @keyframes moveDot1{
              0%{cx:35;cy:170}
              30%{cx:100;cy:100}
              60%{cx:160;cy:100}
              100%{cx:250;cy:40}
            }
            .graph1-line{stroke-dasharray:400;animation:drawGraph1 4s ease forwards}
            .graph1-dot{animation:moveDot1 4s ease forwards infinite}
          </style>
          <defs><marker id="ga" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><polygon points="0 0,6 2,0 4" fill="var(--text2)"/></marker></defs>
          <text x="150" y="14" font-size="10" fill="#0ea5e9" text-anchor="middle" font-weight="bold" font-family="sans-serif">Displacement-Time Graph</text>
          <line x1="35" y1="185" x2="275" y2="185" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#ga)"/>
          <line x1="35" y1="185" x2="35" y2="20" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#ga)"/>
          <text x="278" y="196" font-size="10" fill="var(--text2)" font-family="sans-serif">t (s)</text>
          <text x="18" y="18" font-size="10" fill="var(--text2)" font-family="sans-serif">s (m)</text>
          <!-- Grid -->
          <g stroke="var(--border)" stroke-width=".5"><line x1="35" y1="140" x2="270" y2="140"/><line x1="35" y1="100" x2="270" y2="100"/><line x1="35" y1="60" x2="270" y2="60"/><line x1="100" y1="20" x2="100" y2="185"/><line x1="160" y1="20" x2="160" y2="185"/><line x1="220" y1="20" x2="220" y2="185"/></g>
          <!-- Self-drawing line -->
          <polyline points="35,170 100,100 160,100 250,40" fill="none" stroke="#0ea5e9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="graph1-line"/>
          <!-- Moving dot -->
          <circle cx="35" cy="170" r="5" fill="#f59e0b" class="graph1-dot"/>
          <!-- Labels -->
          <text x="65" y="125" font-size="8" fill="#10b981" font-family="sans-serif" font-weight="bold">constant v</text>
          <text x="120" y="92" font-size="8" fill="#ef4444" font-family="sans-serif" font-weight="bold">at rest</text>
          <text x="200" y="60" font-size="8" fill="#f59e0b" font-family="sans-serif" font-weight="bold">faster v</text>
          <text x="150" y="210" font-size="9" fill="#0ea5e9" text-anchor="middle" font-weight="bold" font-family="sans-serif">Gradient = Velocity</text>
        </svg>
      </div>
      <div>
        <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:8px">
          <style>
            @keyframes drawGraph2{from{stroke-dashoffset:350}to{stroke-dashoffset:0}}
            @keyframes fillArea{0%,60%{opacity:0}100%{opacity:.12}}
            .graph2-line{stroke-dasharray:350;animation:drawGraph2 4s ease forwards}
            .area-fill{animation:fillArea 5s ease forwards}
          </style>
          <text x="150" y="14" font-size="10" fill="#a78bfa" text-anchor="middle" font-weight="bold" font-family="sans-serif">Velocity-Time Graph</text>
          <line x1="35" y1="185" x2="275" y2="185" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#ga)"/>
          <line x1="35" y1="185" x2="35" y2="20" stroke="var(--text2)" stroke-width="1.5" marker-end="url(#ga)"/>
          <text x="278" y="196" font-size="10" fill="var(--text2)" font-family="sans-serif">t (s)</text>
          <text x="18" y="18" font-size="10" fill="var(--text2)" font-family="sans-serif">v (m/s)</text>
          <g stroke="var(--border)" stroke-width=".5"><line x1="35" y1="140" x2="270" y2="140"/><line x1="35" y1="100" x2="270" y2="100"/><line x1="35" y1="60" x2="270" y2="60"/><line x1="100" y1="20" x2="100" y2="185"/><line x1="160" y1="20" x2="160" y2="185"/><line x1="220" y1="20" x2="220" y2="185"/></g>
          <!-- Shaded area -->
          <polygon points="35,185 35,185 100,90 180,90 180,185" fill="#a78bfa" opacity="0" class="area-fill"/>
          <!-- Self-drawing line -->
          <polyline points="35,185 100,90 180,90 250,40" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="graph2-line"/>
          <!-- Labels -->
          <text x="60" y="130" font-size="8" fill="#10b981" font-family="sans-serif" font-weight="bold">accelerating</text>
          <text x="130" y="80" font-size="8" fill="#f59e0b" font-family="sans-serif" font-weight="bold">constant v</text>
          <text x="210" y="56" font-size="8" fill="#ef4444" font-family="sans-serif" font-weight="bold">acc. again</text>
          <text x="75" y="145" font-size="7" fill="#a78bfa" font-family="sans-serif">Area = disp.</text>
          <text x="150" y="210" font-size="9" fill="#a78bfa" text-anchor="middle" font-weight="bold" font-family="sans-serif">Gradient = Acceleration | Area = Displacement</text>
        </svg>
      </div>
    </div>`;

// Replace the old graph content (the grid2 with graph columns)
const oldGraphSection = html.match(/<div class="grid2">\s*<div>\s*<h3 class="f">Displacement–Time \(s-t\)<\/h3>[\s\S]*?<\/div>\s*<\/div>\s*<div class="f warn"><strong>Paper 2/);
if (oldGraphSection) {
  html = html.replace(oldGraphSection[0], graphAnimContent + '\n    <div class="f warn"><strong>Paper 2');
}

// ═══ SLIDE 8: AVERAGE vs INSTANTANEOUS — add car journey animation ═══
const avgInstAnim = `
    <div class="f svg-fig" style="margin-top:12px">
      <svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:500px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:6px">
        <style>
          @keyframes carDrive{
            0%{transform:translateX(0)}
            30%{transform:translateX(120px)}
            50%{transform:translateX(120px)}
            100%{transform:translateX(300px)}
          }
          @keyframes speedNeedle{
            0%{transform:rotate(-40deg)}
            30%{transform:rotate(20deg)}
            31%{transform:rotate(-60deg)}
            50%{transform:rotate(-60deg)}
            51%{transform:rotate(-40deg)}
            100%{transform:rotate(40deg)}
          }
          .car-move{animation:carDrive 6s ease-in-out infinite}
          .needle{animation:speedNeedle 6s ease-in-out infinite;transform-origin:420px 65px}
        </style>
        <!-- Road -->
        <rect x="30" y="60" width="350" height="20" fill="var(--border)" rx="3"/>
        <line x1="30" y1="70" x2="380" y2="70" stroke="var(--text2)" stroke-width="1" stroke-dasharray="10,8" opacity=".3"/>
        <!-- Distance markers -->
        <text x="30" y="95" font-size="8" fill="var(--text2)" font-family="monospace">0</text>
        <text x="150" y="95" font-size="8" fill="var(--text2)" font-family="monospace">150km</text>
        <text x="150" y="55" font-size="7" fill="#ef4444" font-family="sans-serif">STOP 30min</text>
        <text x="360" y="95" font-size="8" fill="var(--text2)" font-family="monospace">240km</text>
        <!-- Stop sign -->
        <rect x="148" y="42" width="4" height="18" fill="#ef4444" opacity=".5"/>
        <!-- Animated car -->
        <g class="car-move">
          <rect x="30" y="52" width="28" height="14" fill="#3b82f6" rx="3"/>
          <rect x="34" y="48" width="18" height="8" fill="#60a5fa" rx="2"/>
          <circle cx="38" cy="68" r="4" fill="var(--text)"/><circle cx="52" cy="68" r="4" fill="var(--text)"/>
        </g>
        <!-- Mini speedometer -->
        <circle cx="420" cy="65" r="25" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>
        <text x="420" y="55" font-size="6" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">SPEED</text>
        <line x1="420" y1="65" x2="420" y2="48" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" class="needle"/>
        <text x="420" y="82" font-size="6" fill="var(--text2)" text-anchor="middle" font-family="sans-serif">instantaneous</text>
        <!-- Average label -->
        <text x="200" y="112" font-size="9" fill="var(--accent)" text-anchor="middle" font-weight="bold" font-family="sans-serif">Average = 240km ÷ 3.5h = 68.6 km/h</text>
      </svg>
    </div>`;

html = html.replace(
  '<div class="f warn"><strong>Common Error:</strong> Average speed',
  avgInstAnim + '\n    <div class="f warn"><strong>Common Error:</strong> Average speed'
);

fs.writeFileSync('presentations/a1-kinematics.html', html);
console.log('All animated SVGs added:');
console.log('  Slide 2: Earth orbit animation (already done)');
console.log('  Slide 4: Vector addition arrows drawing themselves');
console.log('  Slide 5: Dot traveling along path (distance counter)');
console.log('  Slide 6: Runner orbiting the track');
console.log('  Slide 8: Car driving with speedometer needle');
console.log('  Slide 9: Ball trajectory with velocity arrows at each point');
console.log('  Slide 10: Self-drawing graphs with moving dot');
