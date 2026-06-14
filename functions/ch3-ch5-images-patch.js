// CH3 & CH5 Image Patch - Adds SVG diagrams to questions that need them
// Run: node ch3-ch5-images-patch.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const updates = [
  // ═══════════════════════════════════════
  // CH3 THERMAL PHYSICS - Images
  // ═══════════════════════════════════════

  // Q3: Temperature vs Time graph (linear increase)
  {
    id: "ch3-therm-003",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 220"><rect width="350" height="220" fill="#fff"/><line x1="50" y1="180" x2="310" y2="180" stroke="#000" stroke-width="1.5"/><line x1="50" y1="180" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><text x="180" y="210" text-anchor="middle" font-size="12">time</text><text x="20" y="100" text-anchor="middle" font-size="12" transform="rotate(-90,20,100)">temperature</text><line x1="50" y1="170" x2="280" y2="40" stroke="#1a56db" stroke-width="2"/><text x="180" y="80" font-size="11" fill="#666">gradient = k</text></svg>`
  },

  // Q6: Oil thermal capacity (no diagram needed - text only)

  // Q11: Gas compression in cylinder with piston
  {
    id: "ch3-therm-011",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 150"><rect width="350" height="150" fill="#fff"/><rect x="40" y="40" width="200" height="70" fill="none" stroke="#000" stroke-width="2" rx="2"/><rect x="220" y="45" width="20" height="60" fill="#888" stroke="#000" stroke-width="1.5"/><line x1="260" y1="75" x2="290" y2="75" stroke="#e33" stroke-width="2" marker-end="url(#a)"/><polygon points="290,70 300,75 290,80" fill="#e33"/><text x="120" y="80" font-size="13" text-anchor="middle" fill="#4a90d9">gas</text><text x="275" y="60" font-size="10" fill="#e33">push</text><rect x="40" y="35" width="5" height="80" fill="#666"/></svg>`
  },

  // Q14: Ice in water at 0°C (insulated container)
  {
    id: "ch3-therm-014",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#fff"/><rect x="60" y="40" width="180" height="140" fill="none" stroke="#000" stroke-width="3" rx="5"/><rect x="65" y="45" width="170" height="130" fill="none" stroke="#f90" stroke-width="2" stroke-dasharray="6" rx="3"/><rect x="80" y="80" width="140" height="90" fill="#c8e6ff"/><rect x="120" y="100" width="50" height="40" fill="#e0f0ff" stroke="#68b" stroke-width="1.5"/><text x="145" y="125" text-anchor="middle" font-size="11">ice</text><text x="150" y="160" text-anchor="middle" font-size="11" fill="#369">water</text><text x="150" y="65" text-anchor="middle" font-size="10" fill="#666">insulated container</text><text x="250" y="130" font-size="10">0°C</text></svg>`
  },

  // ═══════════════════════════════════════
  // CH5 ELECTRIC CURRENT - Circuit Diagrams
  // ═══════════════════════════════════════

  // Q2: Battery (internal r=2Ω) + external R=10Ω, I=0.5A
  {
    id: "ch5-elec-002",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="#fff"/><line x1="50" y1="50" x2="170" y2="50" stroke="#000" stroke-width="1.5"/><line x1="230" y1="50" x2="350" y2="50" stroke="#000" stroke-width="1.5"/><line x1="350" y1="50" x2="350" y2="150" stroke="#000" stroke-width="1.5"/><line x1="50" y1="150" x2="350" y2="150" stroke="#000" stroke-width="1.5"/><line x1="50" y1="50" x2="50" y2="150" stroke="#000" stroke-width="1.5"/><line x1="185" y1="40" x2="185" y2="60" stroke="#000" stroke-width="3"/><line x1="195" y1="35" x2="195" y2="65" stroke="#000" stroke-width="1.5"/><line x1="205" y1="40" x2="205" y2="60" stroke="#000" stroke-width="3"/><line x1="215" y1="35" x2="215" y2="65" stroke="#000" stroke-width="1.5"/><rect x="160" y="42" width="30" height="16" fill="none" stroke="#e33" stroke-width="1.5" rx="2"/><text x="175" y="35" text-anchor="middle" font-size="10" fill="#e33">2 Ω</text><rect x="280" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="305" y="145" text-anchor="middle" font-size="11">10 Ω</text><text x="200" y="80" text-anchor="middle" font-size="10">ε</text><line x1="100" y1="150" x2="120" y2="150" stroke="#1a56db" stroke-width="1.5"/><polygon points="120,147 127,150 120,153" fill="#1a56db"/><text x="115" y="170" font-size="10" fill="#1a56db">0.5 A</text></svg>`
  },

  // Q5: LDR potential divider with voltmeter across LDR
  {
    id: "ch5-elec-005",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250"><rect width="350" height="250" fill="#fff"/><line x1="50" y1="30" x2="300" y2="30" stroke="#000" stroke-width="1.5"/><line x1="50" y1="220" x2="300" y2="220" stroke="#000" stroke-width="1.5"/><line x1="50" y1="30" x2="50" y2="220" stroke="#000" stroke-width="1.5"/><line x1="300" y1="30" x2="300" y2="220" stroke="#000" stroke-width="1.5"/><rect x="35" y="80" width="30" height="15" fill="none" stroke="#000" stroke-width="1.5"/><text x="50" y="110" text-anchor="middle" font-size="9">10 kΩ</text><rect x="35" y="150" width="30" height="15" fill="none" stroke="#000" stroke-width="1.5"/><line x1="30" y1="148" x2="70" y2="167" stroke="#000" stroke-width="1"/><circle cx="67" cy="148" r="3" fill="none" stroke="#000" stroke-width="1"/><text x="50" y="185" text-anchor="middle" font-size="9">LDR</text><circle cx="230" cy="155" r="18" fill="none" stroke="#000" stroke-width="1.5"/><text x="230" y="160" text-anchor="middle" font-size="12" font-weight="bold">V</text><line x1="230" y1="137" x2="230" y2="100" stroke="#000" stroke-width="1.5"/><line x1="230" y1="173" x2="230" y2="200" stroke="#000" stroke-width="1.5"/><text x="175" y="20" text-anchor="middle" font-size="11">5.0 V</text></svg>`
  },

  // Q9: Two resistors in series with cell
  {
    id: "ch5-elec-009",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 180"><rect width="350" height="180" fill="#fff"/><line x1="50" y1="40" x2="150" y2="40" stroke="#000" stroke-width="1.5"/><line x1="200" y1="40" x2="300" y2="40" stroke="#000" stroke-width="1.5"/><line x1="300" y1="40" x2="300" y2="140" stroke="#000" stroke-width="1.5"/><line x1="50" y1="140" x2="300" y2="140" stroke="#000" stroke-width="1.5"/><line x1="50" y1="40" x2="50" y2="140" stroke="#000" stroke-width="1.5"/><line x1="165" y1="35" x2="165" y2="45" stroke="#000" stroke-width="3"/><line x1="175" y1="30" x2="175" y2="50" stroke="#000" stroke-width="1.5"/><line x1="185" y1="35" x2="185" y2="45" stroke="#000" stroke-width="3"/><text x="175" y="25" text-anchor="middle" font-size="11">ε</text><rect x="80" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="105" y="145" text-anchor="middle" font-size="10">R₁</text><rect x="200" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="225" y="145" text-anchor="middle" font-size="10">R₂</text></svg>`
  },

  // Q14: Resistance formula R = ρL/A
  {
    id: "ch5-elec-014",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120"><rect width="400" height="120" fill="#fff"/><rect x="30" y="30" width="150" height="40" fill="#ddd" stroke="#000" stroke-width="1.5" rx="3"/><text x="105" y="55" text-anchor="middle" font-size="11">R, length L, area S</text><rect x="220" y="20" width="150" height="60" fill="#ddd" stroke="#000" stroke-width="1.5" rx="3"/><text x="295" y="45" text-anchor="middle" font-size="11">length 2L</text><text x="295" y="65" text-anchor="middle" font-size="11">area S/2</text><text x="105" y="90" text-anchor="middle" font-size="10" fill="#666">Wire 1</text><text x="295" y="100" text-anchor="middle" font-size="10" fill="#666">Wire 2</text></svg>`
  },

  // Q18: Two 10Ω resistors (actually in parallel based on answer)
  {
    id: "ch5-elec-018",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><rect width="300" height="150" fill="#fff"/><text x="30" y="75" font-size="12" font-weight="bold">P</text><text x="270" y="75" font-size="12" font-weight="bold">Q</text><line x1="50" y1="70" x2="100" y2="70" stroke="#000" stroke-width="1.5"/><line x1="100" y1="70" x2="100" y2="40" stroke="#000" stroke-width="1.5"/><line x1="100" y1="70" x2="100" y2="100" stroke="#000" stroke-width="1.5"/><rect x="120" y="32" width="60" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="150" y="44" text-anchor="middle" font-size="10">10 Ω</text><rect x="120" y="92" width="60" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="150" y="104" text-anchor="middle" font-size="10">10 Ω</text><line x1="180" y1="40" x2="200" y2="40" stroke="#000" stroke-width="1.5"/><line x1="180" y1="100" x2="200" y2="100" stroke="#000" stroke-width="1.5"/><line x1="200" y1="40" x2="200" y2="100" stroke="#000" stroke-width="1.5"/><line x1="200" y1="70" x2="250" y2="70" stroke="#000" stroke-width="1.5"/></svg>`
  },

  // Q23: X,Y parallel + Z series
  {
    id: "ch5-elec-023",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180"><rect width="400" height="180" fill="#fff"/><line x1="30" y1="90" x2="80" y2="90" stroke="#000" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="50" stroke="#000" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="130" stroke="#000" stroke-width="1.5"/><rect x="100" y="42" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="54" text-anchor="middle" font-size="10">X</text><rect x="100" y="122" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="134" text-anchor="middle" font-size="10">Y</text><line x1="150" y1="50" x2="180" y2="50" stroke="#000" stroke-width="1.5"/><line x1="150" y1="130" x2="180" y2="130" stroke="#000" stroke-width="1.5"/><line x1="180" y1="50" x2="180" y2="130" stroke="#000" stroke-width="1.5"/><line x1="180" y1="90" x2="230" y2="90" stroke="#000" stroke-width="1.5"/><rect x="230" y="82" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="255" y="94" text-anchor="middle" font-size="10">Z</text><line x1="280" y1="90" x2="330" y2="90" stroke="#000" stroke-width="1.5"/><line x1="330" y1="90" x2="330" y2="30" stroke="#000" stroke-width="1.5"/><line x1="30" y1="90" x2="30" y2="30" stroke="#000" stroke-width="1.5"/><line x1="30" y1="30" x2="165" y2="30" stroke="#000" stroke-width="1.5"/><line x1="195" y1="30" x2="330" y2="30" stroke="#000" stroke-width="1.5"/><line x1="172" y1="25" x2="172" y2="35" stroke="#000" stroke-width="3"/><line x1="180" y1="22" x2="180" y2="38" stroke="#000" stroke-width="1.5"/><line x1="188" y1="25" x2="188" y2="35" stroke="#000" stroke-width="3"/></svg>`
  },

  // Q31: Ammeter and voltmeter resistance
  {
    id: "ch5-elec-031",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100"><rect width="350" height="100" fill="#fff"/><circle cx="90" cy="50" r="22" fill="none" stroke="#000" stroke-width="1.5"/><text x="90" y="57" text-anchor="middle" font-size="16" font-weight="bold">A</text><text x="90" y="90" text-anchor="middle" font-size="10">R → 0</text><circle cx="250" cy="50" r="22" fill="none" stroke="#000" stroke-width="1.5"/><text x="250" y="57" text-anchor="middle" font-size="16" font-weight="bold">V</text><text x="250" y="90" text-anchor="middle" font-size="10">R → ∞</text></svg>`
  },

  // Q34: Cell + motor
  {
    id: "ch5-elec-034",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160"><rect width="300" height="160" fill="#fff"/><line x1="50" y1="30" x2="120" y2="30" stroke="#000" stroke-width="1.5"/><line x1="160" y1="30" x2="250" y2="30" stroke="#000" stroke-width="1.5"/><line x1="250" y1="30" x2="250" y2="130" stroke="#000" stroke-width="1.5"/><line x1="50" y1="130" x2="250" y2="130" stroke="#000" stroke-width="1.5"/><line x1="50" y1="30" x2="50" y2="130" stroke="#000" stroke-width="1.5"/><line x1="130" y1="25" x2="130" y2="35" stroke="#000" stroke-width="3"/><line x1="140" y1="20" x2="140" y2="40" stroke="#000" stroke-width="1.5"/><line x1="150" y1="25" x2="150" y2="35" stroke="#000" stroke-width="3"/><text x="140" y="15" text-anchor="middle" font-size="10">ε, r</text><circle cx="150" cy="130" r="18" fill="none" stroke="#000" stroke-width="1.5"/><text x="150" y="135" text-anchor="middle" font-size="11">M</text></svg>`
  },

  // Q40: Voltmeter with 100kΩ resistance affecting reading
  {
    id: "ch5-elec-040",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200"><rect width="350" height="200" fill="#fff"/><line x1="50" y1="30" x2="130" y2="30" stroke="#000" stroke-width="1.5"/><line x1="170" y1="30" x2="300" y2="30" stroke="#000" stroke-width="1.5"/><line x1="300" y1="30" x2="300" y2="170" stroke="#000" stroke-width="1.5"/><line x1="50" y1="170" x2="300" y2="170" stroke="#000" stroke-width="1.5"/><line x1="50" y1="30" x2="50" y2="170" stroke="#000" stroke-width="1.5"/><line x1="140" y1="25" x2="140" y2="35" stroke="#000" stroke-width="3"/><line x1="150" y1="20" x2="150" y2="40" stroke="#000" stroke-width="1.5"/><line x1="160" y1="25" x2="160" y2="35" stroke="#000" stroke-width="3"/><text x="150" y="15" text-anchor="middle" font-size="10">6 V</text><rect x="40" y="80" width="20" height="40" fill="none" stroke="#000" stroke-width="1.5"/><text x="50" y="135" text-anchor="middle" font-size="9">100 kΩ</text><rect x="285" y="80" width="20" height="40" fill="none" stroke="#000" stroke-width="1.5"/><text x="295" y="135" text-anchor="middle" font-size="9">100 kΩ</text><circle cx="175" cy="130" r="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="175" y="135" text-anchor="middle" font-size="12" font-weight="bold">V</text><text x="175" y="160" text-anchor="middle" font-size="9">(100 kΩ)</text><line x1="175" y1="114" x2="175" y2="80" stroke="#000" stroke-width="1"/><line x1="175" y1="146" x2="175" y2="170" stroke="#000" stroke-width="1"/></svg>`
  },

  // Q41: 2R parallel with R, in series with R
  {
    id: "ch5-elec-041",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180"><rect width="400" height="180" fill="#fff"/><line x1="30" y1="90" x2="80" y2="90" stroke="#000" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="50" stroke="#000" stroke-width="1.5"/><line x1="80" y1="90" x2="80" y2="130" stroke="#000" stroke-width="1.5"/><rect x="100" y="42" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="54" text-anchor="middle" font-size="10">2R</text><rect x="100" y="122" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="134" text-anchor="middle" font-size="10">R</text><line x1="150" y1="50" x2="180" y2="50" stroke="#000" stroke-width="1.5"/><line x1="150" y1="130" x2="180" y2="130" stroke="#000" stroke-width="1.5"/><line x1="180" y1="50" x2="180" y2="130" stroke="#000" stroke-width="1.5"/><line x1="180" y1="90" x2="230" y2="90" stroke="#000" stroke-width="1.5"/><rect x="230" y="82" width="50" height="16" fill="none" stroke="#000" stroke-width="1.5"/><text x="255" y="94" text-anchor="middle" font-size="10">R</text><line x1="280" y1="90" x2="350" y2="90" stroke="#000" stroke-width="1.5"/><text x="60" y="80" font-size="10" fill="#1a56db">I₁</text><text x="90" y="45" font-size="10" fill="#1a56db">I₂</text><text x="90" y="140" font-size="10" fill="#1a56db">I₃</text></svg>`
  },

  // Q28: Parallel plates with electron
  {
    id: "ch5-elec-028a",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#fff"/><rect x="50" y="30" width="10" height="140" fill="#e33"/><rect x="240" y="30" width="10" height="140" fill="#36a"/><text x="55" y="25" text-anchor="middle" font-size="12">A</text><text x="245" y="25" text-anchor="middle" font-size="12">B</text><text x="35" y="100" font-size="14" fill="#e33">+</text><text x="35" y="80" font-size="14" fill="#e33">+</text><text x="35" y="120" font-size="14" fill="#e33">+</text><text x="258" y="100" font-size="14" fill="#36a">−</text><text x="258" y="80" font-size="14" fill="#36a">−</text><text x="258" y="120" font-size="14" fill="#36a">−</text><circle cx="150" cy="100" r="5" fill="#000"/><text x="150" y="120" text-anchor="middle" font-size="10">P (electron)</text></svg>`
  }
];

async function patchImages() {
  let count = 0;
  for (const u of updates) {
    const ref = db.collection('dpQuestions').doc(u.id);
    await ref.update({ image: u.image });
    count++;
  }
  console.log(`✅ Patched ${count} questions with SVG images (CH3 + CH5)`);
}

patchImages().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
