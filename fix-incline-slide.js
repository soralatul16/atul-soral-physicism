// fix-incline-slide.js
const fs = require('fs');
let html = fs.readFileSync('presentations/a2-1-forces-fbd.html', 'utf8');

// Fix 1: Two text labels both at y=250 — separate them and increase viewBox
html = html.replace(
  'viewBox="0 0 300 260"',
  'viewBox="0 0 300 280"'
);

// Fix the overlapping labels — put them at different y positions
html = html.replace(
  '<text x="50" y="250" font-size="9" fill="var(--sky)" font-family="sans-serif" font-weight="bold">W&#8214; = mg sin&#952; (down slope)</text>\n          <text x="50" y="250" font-size="9" fill="var(--teal)" font-family="sans-serif" font-weight="bold">W&#8869; = mg cos&#952; (into slope)</text>',
  '<text x="50" y="248" font-size="9" fill="var(--sky)" font-family="sans-serif" font-weight="bold">W&#8214; = mg sin&#952; (down slope)</text>\n          <text x="50" y="268" font-size="9" fill="var(--teal)" font-family="sans-serif" font-weight="bold">W&#8869; = mg cos&#952; (into slope)</text>'
);

console.log('Fixed incline slide: separated overlapping labels, increased viewBox height');
fs.writeFileSync('presentations/a2-1-forces-fbd.html', html);
