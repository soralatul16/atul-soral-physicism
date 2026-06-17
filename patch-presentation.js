// patch-presentation.js — Enhances A.1 presentation with review feedback
// Run: node patch-presentation.js

const fs = require('fs');
let html = fs.readFileSync('presentations/a1-kinematics.html', 'utf8');

// 1. ADD REAL-WORLD HOOK SLIDE (after title slide)
const hookSlide = `
<!-- ═══════════ SLIDE: REAL-WORLD HOOK ═══════════ -->
<div class="slide center">
  <h2 class="frag" style="font-size:2.6rem">Are you moving right now?</h2>
  <div class="frag" style="margin-top:20px;max-width:600px">
    <div class="info-card sky">
      <p style="font-size:1.05rem;line-height:1.7">You're sitting "still" — but Earth rotates at <strong>1,670 km/h</strong>.<br>Earth orbits the Sun at <strong>107,000 km/h</strong>.<br>The solar system moves through the galaxy at <strong>828,000 km/h</strong>.</p>
    </div>
  </div>
  <div class="frag" style="margin-top:16px;font-size:1.1rem;color:var(--gold);font-weight:600">
    So... are you moving or not?
  </div>
  <div class="frag" style="margin-top:16px;max-width:500px">
    <div class="info-card gold">
      <strong>The answer depends on your reference frame.</strong><br>
      <span style="color:var(--text2);font-size:.9rem">This is why kinematics starts with defining position and frame of reference.</span>
    </div>
  </div>
</div>
`;

// 2. ADD MOTION GRAPHS SLIDE (before practice questions)
const graphsSlide = `
<!-- ═══════════ SLIDE: MOTION GRAPHS ═══════════ -->
<div class="slide center">
  <h2 class="frag">Motion Graphs — Reading the Story</h2>
  <p class="subtitle frag">Graphs are the language of kinematics. Learn to read them.</p>
  <div class="two-col frag full-w" style="margin-top:12px">
    <div>
      <div class="svg-wrap">
        <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
          <defs><marker id="ga" markerWidth="7" markerHeight="5" refX="7" refY="2.5" orient="auto"><polygon points="0 0, 7 2.5, 0 5" fill="#94a3b8"/></marker></defs>
          <text x="150" y="16" font-size="11" fill="#0ea5e9" text-anchor="middle" font-weight="bold" font-family="sans-serif">Distance-Time Graph</text>
          <line x1="40" y1="190" x2="280" y2="190" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ga)"/>
          <line x1="40" y1="190" x2="40" y2="25" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ga)"/>
          <text x="280" y="205" font-size="10" fill="#94a3b8" font-family="sans-serif">t</text>
          <text x="25" y="30" font-size="10" fill="#94a3b8" font-family="sans-serif">d</text>
          <polyline points="40,190 120,110 180,110 260,50" fill="none" stroke="#0ea5e9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <text x="75" y="140" font-size="9" fill="#10b981" font-family="sans-serif" font-weight="bold">Moving</text>
          <text x="140" y="100" font-size="9" fill="#ef4444" font-family="sans-serif" font-weight="bold">Stopped</text>
          <text x="215" y="70" font-size="9" fill="#f59e0b" font-family="sans-serif" font-weight="bold">Faster</text>
        </svg>
      </div>
      <div style="margin-top:8px;font-size:.8rem;color:var(--text2);text-align:center"><strong style="color:var(--accent)">Gradient = Speed</strong><br>Steeper = faster | Flat = stationary</div>
    </div>
    <div>
      <div class="svg-wrap">
        <svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">
          <text x="150" y="16" font-size="11" fill="#8b5cf6" text-anchor="middle" font-weight="bold" font-family="sans-serif">Velocity-Time Graph</text>
          <line x1="40" y1="190" x2="280" y2="190" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ga)"/>
          <line x1="40" y1="190" x2="40" y2="25" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#ga)"/>
          <text x="280" y="205" font-size="10" fill="#94a3b8" font-family="sans-serif">t</text>
          <text x="25" y="30" font-size="10" fill="#94a3b8" font-family="sans-serif">v</text>
          <polyline points="40,190 120,100 200,100 260,50" fill="none" stroke="#8b5cf6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="40" y="100" width="80" height="90" fill="rgba(139,92,246,0.08)" stroke="none"/>
          <text x="80" y="155" font-size="8" fill="#8b5cf6" font-family="sans-serif">Area =</text>
          <text x="80" y="168" font-size="8" fill="#8b5cf6" font-family="sans-serif">distance</text>
          <text x="75" y="88" font-size="9" fill="#10b981" font-family="sans-serif" font-weight="bold">Accelerating</text>
          <text x="155" y="88" font-size="9" fill="#f59e0b" font-family="sans-serif" font-weight="bold">Constant v</text>
          <text x="230" y="65" font-size="9" fill="#ef4444" font-family="sans-serif" font-weight="bold">Speeding up</text>
        </svg>
      </div>
      <div style="margin-top:8px;font-size:.8rem;color:var(--text2);text-align:center"><strong style="color:var(--purple)">Gradient = Acceleration</strong><br><strong style="color:var(--purple)">Area = Displacement</strong></div>
    </div>
  </div>
  <div class="frag" style="margin-top:14px">
    <div class="info-card red" style="max-width:650px;text-align:center;padding:12px 20px">
      <strong>IB Exam Trap:</strong> Students lose marks confusing "gradient of d-t" (= speed) with "gradient of v-t" (= acceleration). Know which graph you're reading!
    </div>
  </div>
</div>
`;

// 3. ADD TOK SLIDE (before key takeaways)
const tokSlide = `
<!-- ═══════════ SLIDE: TOK CONNECTION ═══════════ -->
<div class="slide center">
  <h2 class="frag">TOK Connection</h2>
  <p class="subtitle frag" style="color:var(--gold)">Theory of Knowledge — The Nature of Measurement</p>
  <div class="frag" style="max-width:650px;margin-top:16px">
    <div class="info-card gold">
      <h3 style="color:var(--gold);margin-bottom:12px">Is all motion truly relative?</h3>
      <ul class="bullet-list">
        <li>If there's no "absolute rest," can we ever say something is <strong>truly</strong> moving?</li>
        <li>Newton assumed absolute space. Einstein showed motion is <strong>always relative</strong> to an observer.</li>
        <li>What does this mean for the concept of "objectivity" in physics?</li>
      </ul>
    </div>
  </div>
  <div class="frag" style="max-width:650px;margin-top:12px">
    <div class="info-card purple">
      <h3 style="color:var(--purple);margin-bottom:8px">Discussion Prompt</h3>
      <p style="color:var(--text2);font-size:.95rem;line-height:1.6">"A passenger on a train drops a ball. The passenger says it fell straight down. An observer on the platform says it followed a parabolic path. <strong>Who is correct?</strong>"</p>
    </div>
  </div>
  <div class="frag" style="margin-top:12px;font-size:.85rem;color:var(--text2)">Both are correct in their own reference frame — this links to Topic A.5 (Relativity) at HL.</div>
</div>
`;

// 4. FIX: Flag HL on calculus notation
html = html.replace(
  '$$v_{inst} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$',
  '$$v_{inst} = \\lim_{\\Delta t \\to 0} \\frac{\\Delta s}{\\Delta t} = \\frac{ds}{dt}$$</div><div style="margin-top:4px"><span style="background:rgba(59,130,246,.15);color:#3b82f6;font-size:.7rem;font-weight:700;padding:2px 8px;border-radius:4px">HL ENRICHMENT</span> <span style="font-size:.78rem;color:var(--text2)">Calculus notation — SL students use the average formula only.</span>'
);

// 5. FIX: Add command terms to practice questions
html = html.replace(
  '<p><strong>Q1:</strong> A runner completes 2 laps of a 400 m track in 3 minutes. Calculate the average speed and average velocity.</p>',
  '<p><span class="ib-cmd">Calculate</span> <strong>Q1:</strong> A runner completes 2 laps of a 400 m track in 3 minutes. Calculate the average speed and average velocity.</p>'
);
html = html.replace(
  '<p><strong>Q2:</strong> A ball is thrown up at 20 m/s. What is its velocity at the top? What is its acceleration at the top?</p>',
  '<p><span class="ib-cmd">Determine</span> <strong>Q2:</strong> A ball is thrown up at 20 m/s. What is its velocity at the top? What is its acceleration at the top?</p>'
);
html = html.replace(
  '<p><strong>Q3:</strong> A car accelerates from rest to 25 m/s in 5 seconds. Calculate the acceleration.</p>',
  '<p><span class="ib-cmd">Calculate</span> <strong>Q3:</strong> A car accelerates from rest to 25 m/s in 5 seconds. Calculate the acceleration.</p>'
);

// INSERT SLIDES
// Hook after title
html = html.replace(
  '<!-- ═══════════ SLIDE 2: WHAT IS MOTION? ═══════════ -->',
  hookSlide + '\n<!-- ═══════════ SLIDE 2: WHAT IS MOTION? ═══════════ -->'
);

// Graphs before practice
html = html.replace(
  '<!-- ═══════════ SLIDE 13: PRACTICE QUESTIONS ═══════════ -->',
  graphsSlide + '\n<!-- ═══════════ SLIDE 13: PRACTICE QUESTIONS ═══════════ -->'
);

// TOK before key takeaways
html = html.replace(
  '<!-- ═══════════ SLIDE 14: KEY TAKEAWAYS ═══════════ -->',
  tokSlide + '\n<!-- ═══════════ SLIDE 14: KEY TAKEAWAYS ═══════════ -->'
);

fs.writeFileSync('presentations/a1-kinematics.html', html);
console.log('Presentation updated:');
console.log('  + Real-world hook slide (Earth rotation speeds)');
console.log('  + Motion graphs slide (d-t and v-t with SVG)');
console.log('  + TOK connection slide (relativity of motion)');
console.log('  + HL enrichment flag on calculus notation');
console.log('  + IB command terms on practice questions');
console.log('\nTotal slides: 17 (was 14)');
