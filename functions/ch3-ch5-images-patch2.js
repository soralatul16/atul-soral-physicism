// CH3 & CH5 Image Patch 2 - Remaining SVG diagrams
// Run: node ch3-ch5-images-patch2.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const updates = [
  // ═══════════════════════════════════════
  // CH3 THERMAL PHYSICS - Remaining Images
  // ═══════════════════════════════════════

  // Q21: Temperature-time heating curve (solid → liquid → gas with plateaus)
  {
    id: "ch3-therm-021",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250"><rect width="400" height="250" fill="#fff"/><line x1="50" y1="210" x2="370" y2="210" stroke="#000" stroke-width="1.5"/><line x1="50" y1="210" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><text x="210" y="240" text-anchor="middle" font-size="12">t</text><text x="20" y="115" text-anchor="middle" font-size="12" transform="rotate(-90,20,115)">T / °C</text><polyline points="50,200 100,140 160,140 220,80 300,80 370,40" fill="none" stroke="#1a56db" stroke-width="2"/><text x="75" y="175" font-size="9" fill="#666">solid</text><text x="130" y="155" font-size="9" fill="#e33">melting</text><text x="190" y="100" font-size="9" fill="#666">liquid</text><text x="260" y="95" font-size="9" fill="#e33">boiling</text><text x="340" y="55" font-size="9" fill="#666">gas</text></svg>`
  },

  // ═══════════════════════════════════════
  // CH5 ELECTRIC CURRENT - Remaining Circuits
  // ═══════════════════════════════════════

  // Q3: LDR + fixed resistor + 12V + voltmeter across fixed resistor
  {
    id: "ch5-elec-003",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 220"><rect width="350" height="220" fill="#fff"/><line x1="60" y1="30" x2="290" y2="30" stroke="#000" stroke-width="1.5"/><line x1="60" y1="190" x2="290" y2="190" stroke="#000" stroke-width="1.5"/><line x1="60" y1="30" x2="60" y2="190" stroke="#000" stroke-width="1.5"/><line x1="290" y1="30" x2="290" y2="190" stroke="#000" stroke-width="1.5"/><text x="175" y="22" text-anchor="middle" font-size="10">12 V</text><line x1="165" y1="25" x2="165" y2="35" stroke="#000" stroke-width="3"/><line x1="175" y1="20" x2="175" y2="40" stroke="#000" stroke-width="1.5"/><line x1="185" y1="25" x2="185" y2="35" stroke="#000" stroke-width="3"/><rect x="50" y="70" width="20" height="40" fill="none" stroke="#000" stroke-width="1.5"/><line x1="40" y1="68" x2="80" y2="112" stroke="#000" stroke-width="1"/><circle cx="77" cy="68" r="4" fill="none" stroke="#000" stroke-width="1"/><text x="30" y="95" font-size="9">LDR</text><rect x="50" y="140" width="20" height="30" fill="none" stroke="#000" stroke-width="1.5"/><text x="30" y="160" font-size="9">R</text><circle cx="200" cy="155" r="15" fill="none" stroke="#000" stroke-width="1.5"/><text x="200" y="160" text-anchor="middle" font-size="11" font-weight="bold">V</text><line x1="200" y1="140" x2="200" y2="120" stroke="#000" stroke-width="1"/><line x1="200" y1="170" x2="200" y2="190" stroke="#000" stroke-width="1"/><line x1="200" y1="120" x2="60" y2="120" stroke="#000" stroke-width="0.8" stroke-dasharray="3"/></svg>`
  },

  // Q7: I-V characteristics for resistors X and Y (linear, different gradients)
  {
    id: "ch5-elec-007",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250"><rect width="350" height="250" fill="#fff"/><line x1="50" y1="210" x2="320" y2="210" stroke="#000" stroke-width="1.5"/><line x1="50" y1="210" x2="50" y2="20" stroke="#000" stroke-width="1.5"/><text x="185" y="240" text-anchor="middle" font-size="12">V / V</text><text x="20" y="115" text-anchor="middle" font-size="12" transform="rotate(-90,20,115)">I / A</text><text x="50" y="225" font-size="10">0</text><line x1="50" y1="210" x2="300" y2="50" stroke="#e33" stroke-width="2"/><line x1="50" y1="210" x2="300" y2="130" stroke="#1a56db" stroke-width="2"/><text x="280" y="45" font-size="11" fill="#e33">X</text><text x="280" y="125" font-size="11" fill="#1a56db">Y</text></svg>`
  },

  // Q8c/Q10d: Battery 6V + r(1.8Ω) + 1.5Ω + variable R
  {
    id: "ch5-elec-008c",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180"><rect width="400" height="180" fill="#fff"/><line x1="40" y1="40" x2="100" y2="40" stroke="#000" stroke-width="1.5"/><line x1="140" y1="40" x2="360" y2="40" stroke="#000" stroke-width="1.5"/><line x1="360" y1="40" x2="360" y2="140" stroke="#000" stroke-width="1.5"/><line x1="40" y1="140" x2="360" y2="140" stroke="#000" stroke-width="1.5"/><line x1="40" y1="40" x2="40" y2="140" stroke="#000" stroke-width="1.5"/><line x1="108" y1="35" x2="108" y2="45" stroke="#000" stroke-width="3"/><line x1="118" y1="30" x2="118" y2="50" stroke="#000" stroke-width="1.5"/><line x1="128" y1="35" x2="128" y2="45" stroke="#000" stroke-width="3"/><text x="118" y="25" text-anchor="middle" font-size="10">6.0 V</text><rect x="95" y="42" width="20" height="12" fill="none" stroke="#e33" stroke-width="1" rx="2"/><text x="105" y="65" text-anchor="middle" font-size="9" fill="#e33">1.8 Ω</text><rect x="100" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="145" text-anchor="middle" font-size="10">1.5 Ω</text><rect x="220" y="130" width="60" height="20" fill="none" stroke="#000" stroke-width="1.5"/><line x1="235" y1="125" x2="265" y2="155" stroke="#000" stroke-width="1"/><circle cx="262" cy="125" r="3" fill="none" stroke="#000" stroke-width="1"/><text x="250" y="165" text-anchor="middle" font-size="10">R</text></svg>`
  },

  // Q15: LDR in series with fixed resistor, voltmeter across fixed resistor
  {
    id: "ch5-elec-015",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200"><rect width="350" height="200" fill="#fff"/><line x1="60" y1="30" x2="290" y2="30" stroke="#000" stroke-width="1.5"/><line x1="60" y1="170" x2="290" y2="170" stroke="#000" stroke-width="1.5"/><line x1="60" y1="30" x2="60" y2="170" stroke="#000" stroke-width="1.5"/><line x1="290" y1="30" x2="290" y2="170" stroke="#000" stroke-width="1.5"/><text x="175" y="22" text-anchor="middle" font-size="10">ε</text><line x1="165" y1="25" x2="165" y2="35" stroke="#000" stroke-width="3"/><line x1="180" y1="22" x2="180" y2="38" stroke="#000" stroke-width="1.5"/><rect x="50" y="60" width="20" height="35" fill="none" stroke="#000" stroke-width="1.5"/><line x1="40" y1="58" x2="80" y2="97" stroke="#000" stroke-width="1"/><circle cx="77" cy="58" r="3" fill="none" stroke="#000" stroke-width="1"/><text x="30" y="82" font-size="9">LDR</text><rect x="50" y="120" width="20" height="30" fill="none" stroke="#000" stroke-width="1.5"/><text x="30" y="140" font-size="9">R</text><circle cx="200" cy="135" r="14" fill="none" stroke="#000" stroke-width="1.5"/><text x="200" y="140" text-anchor="middle" font-size="11" font-weight="bold">V</text><line x1="200" y1="121" x2="200" y2="105" stroke="#000" stroke-width="1"/><line x1="200" y1="149" x2="200" y2="170" stroke="#000" stroke-width="1"/></svg>`
  },

  // Q19: Two heating elements E1, E2 in parallel with switches, 240V
  {
    id: "ch5-elec-019a",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 200"><rect width="380" height="200" fill="#fff"/><line x1="40" y1="30" x2="340" y2="30" stroke="#000" stroke-width="1.5"/><line x1="40" y1="170" x2="340" y2="170" stroke="#000" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="170" stroke="#000" stroke-width="1.5"/><line x1="340" y1="30" x2="340" y2="170" stroke="#000" stroke-width="1.5"/><line x1="100" y1="30" x2="100" y2="70" stroke="#000" stroke-width="1.5"/><line x1="100" y1="70" x2="100" y2="130" stroke="#000" stroke-width="1.5"/><line x1="100" y1="130" x2="100" y2="170" stroke="#000" stroke-width="1.5"/><line x1="250" y1="30" x2="250" y2="70" stroke="#000" stroke-width="1.5"/><line x1="250" y1="70" x2="250" y2="130" stroke="#000" stroke-width="1.5"/><line x1="250" y1="130" x2="250" y2="170" stroke="#000" stroke-width="1.5"/><rect x="85" y="80" width="30" height="40" fill="none" stroke="#000" stroke-width="1.5"/><text x="100" y="105" text-anchor="middle" font-size="9">E₁</text><rect x="235" y="80" width="30" height="40" fill="none" stroke="#000" stroke-width="1.5"/><text x="250" y="105" text-anchor="middle" font-size="9">E₂</text><circle cx="100" cy="55" r="4" fill="none" stroke="#000" stroke-width="1.5"/><line x1="100" y1="40" x2="107" y2="52" stroke="#000" stroke-width="1.5"/><circle cx="250" cy="55" r="4" fill="none" stroke="#000" stroke-width="1.5"/><line x1="250" y1="40" x2="257" y2="52" stroke="#000" stroke-width="1.5"/><text x="190" y="18" text-anchor="middle" font-size="11">240 V</text></svg>`
  },

  // Q22: 20V battery + R + 10Ω in series, ammeter reads 1.0A
  {
    id: "ch5-elec-022",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 170"><rect width="380" height="170" fill="#fff"/><line x1="40" y1="30" x2="150" y2="30" stroke="#000" stroke-width="1.5"/><line x1="190" y1="30" x2="340" y2="30" stroke="#000" stroke-width="1.5"/><line x1="340" y1="30" x2="340" y2="140" stroke="#000" stroke-width="1.5"/><line x1="40" y1="140" x2="340" y2="140" stroke="#000" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="140" stroke="#000" stroke-width="1.5"/><line x1="160" y1="25" x2="160" y2="35" stroke="#000" stroke-width="3"/><line x1="170" y1="20" x2="170" y2="40" stroke="#000" stroke-width="1.5"/><line x1="180" y1="25" x2="180" y2="35" stroke="#000" stroke-width="3"/><text x="170" y="15" text-anchor="middle" font-size="10">20 V</text><rect x="100" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="125" y="145" text-anchor="middle" font-size="10">R</text><rect x="230" y="130" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="255" y="145" text-anchor="middle" font-size="10">10 Ω</text><circle cx="60" cy="85" r="13" fill="none" stroke="#000" stroke-width="1.5"/><text x="60" y="90" text-anchor="middle" font-size="11" font-weight="bold">A</text><text x="95" y="85" font-size="10" fill="#1a56db">1.0 A</text></svg>`
  },

  // Q26: Incorrectly connected ammeter (parallel) and voltmeter (series)
  {
    id: "ch5-elec-026",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="#fff"/><line x1="40" y1="30" x2="150" y2="30" stroke="#000" stroke-width="1.5"/><line x1="190" y1="30" x2="360" y2="30" stroke="#000" stroke-width="1.5"/><line x1="360" y1="30" x2="360" y2="170" stroke="#000" stroke-width="1.5"/><line x1="40" y1="170" x2="360" y2="170" stroke="#000" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="170" stroke="#000" stroke-width="1.5"/><line x1="160" y1="25" x2="160" y2="35" stroke="#000" stroke-width="3"/><line x1="172" y1="22" x2="172" y2="38" stroke="#000" stroke-width="1.5"/><line x1="184" y1="25" x2="184" y2="35" stroke="#000" stroke-width="3"/><text x="172" y="15" text-anchor="middle" font-size="10">6 V</text><rect x="80" y="160" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="105" y="175" text-anchor="middle" font-size="10">6 Ω</text><circle cx="105" cy="120" r="13" fill="none" stroke="#e33" stroke-width="1.5"/><text x="105" y="125" text-anchor="middle" font-size="10" fill="#e33" font-weight="bold">A</text><line x1="92" y1="120" x2="80" y2="120" stroke="#e33" stroke-width="1"/><line x1="80" y1="120" x2="80" y2="160" stroke="#e33" stroke-width="1"/><line x1="118" y1="120" x2="130" y2="120" stroke="#e33" stroke-width="1"/><line x1="130" y1="120" x2="130" y2="160" stroke="#e33" stroke-width="1"/><text x="105" y="105" font-size="8" fill="#e33">in parallel!</text><rect x="250" y="160" width="50" height="20" fill="none" stroke="#000" stroke-width="1.5"/><text x="275" y="175" text-anchor="middle" font-size="10">6 Ω</text><circle cx="275" cy="100" r="13" fill="none" stroke="#e33" stroke-width="1.5"/><text x="275" y="105" text-anchor="middle" font-size="10" fill="#e33" font-weight="bold">V</text><text x="275" y="80" font-size="8" fill="#e33">in series!</text></svg>`
  },

  // Q27: 12V + 3kΩ + LDR(R) potential divider, voltmeter across LDR
  {
    id: "ch5-elec-027",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 220"><rect width="350" height="220" fill="#fff"/><line x1="60" y1="30" x2="290" y2="30" stroke="#000" stroke-width="1.5"/><line x1="60" y1="190" x2="290" y2="190" stroke="#000" stroke-width="1.5"/><line x1="60" y1="30" x2="60" y2="190" stroke="#000" stroke-width="1.5"/><line x1="290" y1="30" x2="290" y2="190" stroke="#000" stroke-width="1.5"/><text x="175" y="22" text-anchor="middle" font-size="10">12 V</text><line x1="165" y1="25" x2="165" y2="35" stroke="#000" stroke-width="3"/><line x1="178" y1="22" x2="178" y2="38" stroke="#000" stroke-width="1.5"/><rect x="50" y="60" width="20" height="35" fill="none" stroke="#000" stroke-width="1.5"/><text x="30" y="82" font-size="9">3 kΩ</text><rect x="50" y="130" width="20" height="35" fill="none" stroke="#000" stroke-width="1.5"/><line x1="40" y1="128" x2="80" y2="167" stroke="#000" stroke-width="1"/><circle cx="77" cy="128" r="3" fill="none" stroke="#000" stroke-width="1"/><text x="30" y="152" font-size="9">R</text><circle cx="200" cy="147" r="14" fill="none" stroke="#000" stroke-width="1.5"/><text x="200" y="152" text-anchor="middle" font-size="11" font-weight="bold">V</text><line x1="200" y1="133" x2="200" y2="110" stroke="#000" stroke-width="1"/><line x1="200" y1="161" x2="200" y2="190" stroke="#000" stroke-width="1"/><line x1="200" y1="110" x2="60" y2="110" stroke="#000" stroke-width="0.8" stroke-dasharray="3"/></svg>`
  },

  // Q32: Three heaters with two switches (for P, 2P, or 3P)
  {
    id: "ch5-elec-032a",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="#fff"/><line x1="40" y1="30" x2="360" y2="30" stroke="#000" stroke-width="1.5"/><line x1="40" y1="170" x2="360" y2="170" stroke="#000" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="170" stroke="#000" stroke-width="1.5"/><line x1="360" y1="30" x2="360" y2="170" stroke="#000" stroke-width="1.5"/><text x="200" y="22" text-anchor="middle" font-size="10">S (supply)</text><line x1="100" y1="30" x2="100" y2="170" stroke="#000" stroke-width="1.5"/><line x1="200" y1="30" x2="200" y2="170" stroke="#000" stroke-width="1.5"/><line x1="300" y1="30" x2="300" y2="170" stroke="#000" stroke-width="1.5"/><rect x="85" y="80" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/><text x="100" y="100" text-anchor="middle" font-size="9">P</text><rect x="185" y="80" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/><text x="200" y="100" text-anchor="middle" font-size="9">P</text><rect x="285" y="80" width="30" height="30" fill="none" stroke="#000" stroke-width="1.5"/><text x="300" y="100" text-anchor="middle" font-size="9">P</text></svg>`
  },

  // Q36: Circuit X (cell + 1 resistor) vs Circuit Y (cell + 2 resistors in series)
  {
    id: "ch5-elec-036",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150"><rect width="400" height="150" fill="#fff"/><text x="100" y="15" text-anchor="middle" font-size="11" font-weight="bold">Circuit X</text><rect x="30" y="20" width="140" height="110" fill="none" stroke="#ddd" stroke-width="1" rx="5"/><line x1="50" y1="40" x2="85" y2="40" stroke="#000" stroke-width="1.5"/><line x1="115" y1="40" x2="150" y2="40" stroke="#000" stroke-width="1.5"/><line x1="150" y1="40" x2="150" y2="110" stroke="#000" stroke-width="1.5"/><line x1="50" y1="110" x2="150" y2="110" stroke="#000" stroke-width="1.5"/><line x1="50" y1="40" x2="50" y2="110" stroke="#000" stroke-width="1.5"/><line x1="93" y1="35" x2="93" y2="45" stroke="#000" stroke-width="2.5"/><line x1="100" y1="32" x2="100" y2="48" stroke="#000" stroke-width="1.5"/><line x1="107" y1="35" x2="107" y2="45" stroke="#000" stroke-width="2.5"/><rect x="80" y="100" width="40" height="15" fill="none" stroke="#000" stroke-width="1.5"/><text x="100" y="112" text-anchor="middle" font-size="9">R</text><text x="300" y="15" text-anchor="middle" font-size="11" font-weight="bold">Circuit Y</text><rect x="230" y="20" width="140" height="110" fill="none" stroke="#ddd" stroke-width="1" rx="5"/><line x1="250" y1="40" x2="285" y2="40" stroke="#000" stroke-width="1.5"/><line x1="315" y1="40" x2="350" y2="40" stroke="#000" stroke-width="1.5"/><line x1="350" y1="40" x2="350" y2="110" stroke="#000" stroke-width="1.5"/><line x1="250" y1="110" x2="350" y2="110" stroke="#000" stroke-width="1.5"/><line x1="250" y1="40" x2="250" y2="110" stroke="#000" stroke-width="1.5"/><line x1="293" y1="35" x2="293" y2="45" stroke="#000" stroke-width="2.5"/><line x1="300" y1="32" x2="300" y2="48" stroke="#000" stroke-width="1.5"/><line x1="307" y1="35" x2="307" y2="45" stroke="#000" stroke-width="2.5"/><rect x="260" y="100" width="30" height="15" fill="none" stroke="#000" stroke-width="1.5"/><text x="275" y="112" text-anchor="middle" font-size="9">R</text><rect x="310" y="100" width="30" height="15" fill="none" stroke="#000" stroke-width="1.5"/><text x="325" y="112" text-anchor="middle" font-size="9">R</text></svg>`
  },

  // Q39: Three lamps - L,M parallel, in series with N
  {
    id: "ch5-elec-039",
    field: "image",
    value: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 180"><rect width="400" height="180" fill="#fff"/><line x1="40" y1="30" x2="360" y2="30" stroke="#000" stroke-width="1.5"/><line x1="40" y1="150" x2="360" y2="150" stroke="#000" stroke-width="1.5"/><line x1="40" y1="30" x2="40" y2="150" stroke="#000" stroke-width="1.5"/><line x1="360" y1="30" x2="360" y2="150" stroke="#000" stroke-width="1.5"/><line x1="100" y1="30" x2="100" y2="60" stroke="#000" stroke-width="1.5"/><line x1="100" y1="60" x2="100" y2="90" stroke="#000" stroke-width="1.5"/><line x1="100" y1="120" x2="100" y2="150" stroke="#000" stroke-width="1.5"/><line x1="200" y1="30" x2="200" y2="60" stroke="#000" stroke-width="1.5"/><line x1="200" y1="120" x2="200" y2="150" stroke="#000" stroke-width="1.5"/><circle cx="100" cy="90" r="14" fill="none" stroke="#000" stroke-width="1.5"/><line x1="90" y1="80" x2="110" y2="100" stroke="#000" stroke-width="1"/><line x1="110" y1="80" x2="90" y2="100" stroke="#000" stroke-width="1"/><text x="75" y="95" font-size="9">L</text><circle cx="200" cy="90" r="14" fill="none" stroke="#000" stroke-width="1.5"/><line x1="190" y1="80" x2="210" y2="100" stroke="#000" stroke-width="1"/><line x1="210" y1="80" x2="190" y2="100" stroke="#000" stroke-width="1"/><text x="220" y="95" font-size="9">M</text><circle cx="310" cy="90" r="14" fill="none" stroke="#000" stroke-width="1.5"/><line x1="300" y1="80" x2="320" y2="100" stroke="#000" stroke-width="1"/><line x1="320" y1="80" x2="300" y2="100" stroke="#000" stroke-width="1"/><text x="330" y="95" font-size="9">N</text><line x1="310" y1="30" x2="310" y2="76" stroke="#000" stroke-width="1.5"/><line x1="310" y1="104" x2="310" y2="150" stroke="#000" stroke-width="1.5"/></svg>`
  }
];

async function patchImages() {
  let count = 0;
  for (const u of updates) {
    const ref = db.collection('dpQuestions').doc(u.id);
    try {
      await ref.update({ image: u.value });
      count++;
    } catch(e) {
      console.log(`Skipped ${u.id}: ${e.message}`);
    }
  }
  console.log(`✅ Patched ${count} more questions with SVG images (CH3 + CH5 Batch 2)`);
}

patchImages().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
