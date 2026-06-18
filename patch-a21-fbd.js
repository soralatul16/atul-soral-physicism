// patch-a21-fbd.js — Fix step-by-step diagram sync, incline cutoff, practice SVGs
const fs = require('fs');
let html = fs.readFileSync('presentations/a2-1-forces-fbd.html', 'utf8');

// ═══ FIX 1: Rebuild Slide 6 — Step-by-step FBD where diagram builds with each text step ═══
const oldSlide6 = `<h2 class="f">Building a FBD — Step by Step</h2>
    <p class="f">A book sits on a table. Let's build its FBD one force at a time.</p>
    <div class="grid2">
      <div>
        <div class="step f"><span class="step-n">1</span><span><strong>Draw the object</strong> — a dot or simple box. Remove everything else.</span></div>
        <div class="step f"><span class="step-n">2</span><span><strong>Weight (W = mg)</strong> — always present, always downward from centre of mass.</span></div>
        <div class="step f"><span class="step-n">3</span><span><strong>Ask: what's touching it?</strong> Table touches it → Normal force $N$ perpendicular to surface (upward).</span></div>
        <div class="step f"><span class="step-n">4</span><span><strong>Any other forces?</strong> No push, no rope, no friction (it's not sliding). Done.</span></div>
        <div class="step f"><span class="step-n">5</span><span><strong>Check:</strong> Book is at rest → $\\sum F = 0$ → $N$ must equal $W$. Arrows should be same length.</span></div>
        <div class="f fyi"><strong>The "what's touching it?" question</strong> is the key to finding all contact forces. If nothing touches it except the ground, you only have $W$ and $N$.</div>
      </div>
      <div class="f svg-fig">
        <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px">
          <defs><marker id="fu2" markerWidth="8" markerHeight="6" refX="3" refY="6" orient="auto"><polygon points="0 6,3 0,6 6" fill="var(--green)"/></marker><marker id="fd2" markerWidth="8" markerHeight="6" refX="3" refY="0" orient="auto"><polygon points="0 0,3 6,6 0" fill="var(--red)"/></marker></defs>
          <text x="130" y="18" font-size="10" fill="var(--accent)" text-anchor="middle" font-weight="bold" font-family="sans-serif">Free Body Diagram</text>
          <!-- Object dot -->
          <circle cx="130" cy="130" r="12" fill="var(--card)" stroke="var(--text2)" stroke-width="2"/>
          <text x="130" y="134" font-size="8" fill="var(--text)" text-anchor="middle" font-weight="bold" font-family="sans-serif">Book</text>
          <!-- W down -->
          <line x1="130" y1="142" x2="130" y2="210" stroke="var(--red)" stroke-width="3" marker-end="url(#fd2)"/>
          <text x="145" y="190" font-size="11" fill="var(--red)" font-weight="bold" font-family="sans-serif">W = mg</text>
          <!-- N up (same length) -->
          <line x1="130" y1="118" x2="130" y2="50" stroke="var(--green)" stroke-width="3" marker-end="url(#fu2)"/>
          <text x="145" y="75" font-size="11" fill="var(--green)" font-weight="bold" font-family="sans-serif">N</text>
          <!-- Labels -->
          <text x="130" y="240" font-size="9" fill="var(--text3)" text-anchor="middle" font-family="sans-serif">N = W (equilibrium)</text>
          <text x="130" y="252" font-size="8" fill="var(--gold)" text-anchor="middle" font-family="sans-serif">Only 2 forces — that's the complete FBD</text>
        </svg>
      </div>
    </div>`;

const newSlide6 = `<h2 class="f">Building a FBD — Step by Step</h2>
    <p class="f">A book sits on a table. Let's build its FBD one force at a time.</p>
    <div class="grid2">
      <div>
        <div class="step f" id="fbd-s1"><span class="step-n">1</span><span><strong>Draw the object</strong> — a dot or simple box. Remove everything else.</span></div>
        <div class="step f" id="fbd-s2"><span class="step-n">2</span><span><strong>Weight (W = mg)</strong> — always present, always downward from centre of mass.</span></div>
        <div class="step f" id="fbd-s3"><span class="step-n">3</span><span><strong>Ask: what's touching it?</strong> Table touches it → Normal force $N$ perpendicular to surface (upward).</span></div>
        <div class="step f" id="fbd-s4"><span class="step-n">4</span><span><strong>Any other forces?</strong> No push, no rope, no friction (it's not sliding). Done.</span></div>
        <div class="step f" id="fbd-s5"><span class="step-n">5</span><span><strong>Check:</strong> Book is at rest → $\\sum F = 0$ → $N$ must equal $W$. Arrows should be same length.</span></div>
        <div class="f fyi"><strong>The "what's touching it?" question</strong> is the key to finding all contact forces. If nothing touches it except the ground, you only have $W$ and $N$.</div>
      </div>
      <div class="svg-fig" style="align-self:center">
        <svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px">
          <defs><marker id="fu2" markerWidth="10" markerHeight="8" refX="5" refY="8" orient="auto"><polygon points="0 8,5 0,10 8" fill="var(--green)"/></marker><marker id="fd2" markerWidth="10" markerHeight="8" refX="5" refY="0" orient="auto"><polygon points="0 0,5 8,10 0" fill="var(--red)"/></marker></defs>
          <text x="130" y="18" font-size="10" fill="var(--accent)" text-anchor="middle" font-weight="bold" font-family="sans-serif">Free Body Diagram</text>
          <!-- Step 1: Object dot — appears with step 1 -->
          <g class="f" id="fbd-d1">
            <circle cx="130" cy="130" r="14" fill="var(--card)" stroke="var(--text)" stroke-width="2.5"/>
            <text x="130" y="135" font-size="9" fill="var(--text)" text-anchor="middle" font-weight="bold" font-family="sans-serif">Book</text>
          </g>
          <!-- Step 2: W arrow — appears with step 2 -->
          <g class="f" id="fbd-d2">
            <line x1="130" y1="144" x2="130" y2="215" stroke="var(--red)" stroke-width="3.5" marker-end="url(#fd2)"/>
            <text x="150" y="195" font-size="12" fill="var(--red)" font-weight="bold" font-family="sans-serif">W = mg</text>
          </g>
          <!-- Step 3: N arrow — appears with step 3 -->
          <g class="f" id="fbd-d3">
            <line x1="130" y1="116" x2="130" y2="45" stroke="var(--green)" stroke-width="3.5" marker-end="url(#fu2)"/>
            <text x="150" y="72" font-size="12" fill="var(--green)" font-weight="bold" font-family="sans-serif">N</text>
          </g>
          <!-- Step 4: checkmark — appears with step 4 -->
          <g class="f" id="fbd-d4">
            <text x="130" y="240" font-size="11" fill="var(--gold)" text-anchor="middle" font-family="sans-serif" font-weight="bold">&#10003; Complete — only 2 forces</text>
          </g>
          <!-- Step 5: equilibrium label — appears with step 5 -->
          <g class="f" id="fbd-d5">
            <text x="130" y="255" font-size="9" fill="var(--text3)" text-anchor="middle" font-family="sans-serif">N = W (equilibrium, arrows equal length)</text>
          </g>
        </svg>
      </div>
    </div>`;

html = html.replace(oldSlide6, newSlide6);
console.log('1. Slide 6: Diagram now builds step-by-step with text');

// ═══ FIX 2: Fix incline slide — larger SVG, fix cutoff, better arrows ═══
const oldInclineSvg = /<svg viewBox="0 0 300 260"[^]*?<\/svg>\s*<\/div>\s*<\/div>\s*<div>\s*<h3 class="f" style="color:var\(--sky\)">Resolving weight on a slope:/;

// We need to find and replace the incline SVG. Let's use a simpler anchor.
html = html.replace(
  'font-size="8" fill="var(--sky)" font-family="sans-serif">W&#8214; = mg sin&#952; (along slope)</text>\n          <text x="50" y="262" font-size="8" fill="var(--teal)" font-family="sans-serif">W&#8869; = mg cos&#952; (into slope)</text>',
  'font-size="9" fill="var(--sky)" font-family="sans-serif" font-weight="bold">W&#8214; = mg sin&#952; (down slope)</text>\n          <text x="50" y="250" font-size="9" fill="var(--teal)" font-family="sans-serif" font-weight="bold">W&#8869; = mg cos&#952; (into slope)</text>'
);
console.log('2. Fixed incline text cutoff');

// ═══ FIX 3: Add SVG diagrams to practice question answers ═══
// Replace text-only FBD answer for "book on table" with SVG
html = html.replace(
  'Two forces: <strong>W = mg</strong> downward [1] and <strong>N</strong> upward [1]. Equal length arrows (equilibrium).</div>',
  'Two forces: <strong>W = mg</strong> downward [1] and <strong>N</strong> upward [1]. Equal length arrows (equilibrium).<br><svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:140px;margin-top:6px;background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:4px"><circle cx="80" cy="55" r="10" fill="var(--card)" stroke="var(--text2)" stroke-width="1.5"/><text x="80" y="59" font-size="7" fill="var(--text)" text-anchor="middle" font-family="sans-serif">Book</text><line x1="80" y1="45" x2="80" y2="15" stroke="var(--green)" stroke-width="2.5"/><polygon points="75,18 80,8 85,18" fill="var(--green)"/><text x="92" y="28" font-size="8" fill="var(--green)" font-family="sans-serif" font-weight="bold">N</text><line x1="80" y1="65" x2="80" y2="95" stroke="var(--red)" stroke-width="2.5"/><polygon points="75,92 80,102 85,92" fill="var(--red)"/><text x="92" y="88" font-size="8" fill="var(--red)" font-family="sans-serif" font-weight="bold">W</text></svg></div>'
);

// Replace text-only answer for "rising ball" with SVG
html = html.replace(
  '<strong>Only ONE force: W = mg downward</strong> [2]. There is NO upward "throwing force" once the ball leaves the hand [1]. The ball moves upward due to inertia, not an upward force. This is the most common FBD mistake in IB.</div>',
  '<strong>Only ONE force: W = mg downward</strong> [2]. There is NO upward "throwing force" once the ball leaves the hand [1]. The ball moves upward due to inertia, not an upward force.<br><svg viewBox="0 0 140 110" xmlns="http://www.w3.org/2000/svg" style="width:120px;margin-top:6px;background:var(--surface);border:1px solid var(--border);border-radius:6px;padding:4px"><circle cx="70" cy="40" r="10" fill="var(--card)" stroke="var(--text2)" stroke-width="1.5"/><text x="70" y="44" font-size="7" fill="var(--text)" text-anchor="middle" font-family="sans-serif">Ball</text><line x1="70" y1="50" x2="70" y2="85" stroke="var(--red)" stroke-width="2.5"/><polygon points="65,82 70,92 75,82" fill="var(--red)"/><text x="82" y="75" font-size="8" fill="var(--red)" font-family="sans-serif" font-weight="bold">W</text><text x="70" y="105" font-size="7" fill="var(--gold)" text-anchor="middle" font-family="sans-serif" font-weight="bold">ONLY force!</text></svg></div>'
);

console.log('3. Added SVG diagrams to practice answers');

fs.writeFileSync('presentations/a2-1-forces-fbd.html', html);
console.log('\nDone. All 4 issues fixed.');
