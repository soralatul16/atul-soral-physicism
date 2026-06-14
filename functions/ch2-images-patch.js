// CH2 Mechanics - Image Patch (fill gaps)
// Run: node ch2-images-patch.js

const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

const updates = [
  // Q3: Car with driving force F and resistive force 500N, a=0.3 m/s²
  {id:"ch2-mech-003",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 140"><rect width="400" height="140" fill="#fff"/><rect x="120" y="50" width="120" height="50" fill="#4a90d9" rx="8"/><circle cx="150" cy="105" r="12" fill="#333"/><circle cx="220" cy="105" r="12" fill="#333"/><line x1="240" y1="75" x2="310" y2="75" stroke="#1a56db" stroke-width="2.5"/><polygon points="310,70 320,75 310,80" fill="#1a56db"/><text x="280" y="65" font-size="11" fill="#1a56db">F</text><line x1="120" y1="75" x2="60" y2="75" stroke="#e33" stroke-width="2.5"/><polygon points="60,70 50,75 60,80" fill="#e33"/><text x="70" y="65" font-size="11" fill="#e33">500 N</text><text x="180" y="40" text-anchor="middle" font-size="11">a = 0.3 ms⁻²</text><line x1="180" y1="42" x2="210" y2="42" stroke="#000" stroke-width="1"/><polygon points="210,39 217,42 210,45" fill="#000"/></svg>`},

  // Q4: Tennis ball mass m, speed u towards racket, rebounds speed v
  {id:"ch2-mech-004",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 140"><rect width="350" height="140" fill="#fff"/><rect x="200" y="20" width="8" height="100" fill="#8B7355" rx="2"/><circle cx="120" cy="70" r="15" fill="#ccff00" stroke="#999" stroke-width="1"/><text x="120" y="75" text-anchor="middle" font-size="9">m</text><line x1="140" y1="70" x2="185" y2="70" stroke="#1a56db" stroke-width="2"/><polygon points="185,66 195,70 185,74" fill="#1a56db"/><text x="165" y="60" font-size="11" fill="#1a56db">u</text><circle cx="280" cy="70" r="15" fill="#ccff00" stroke="#999" stroke-width="1" opacity="0.5"/><line x1="220" y1="70" x2="265" y2="70" stroke="#e33" stroke-width="2"/><polygon points="220,66 210,70 220,74" fill="#e33"/><text x="240" y="60" font-size="11" fill="#e33">v</text><text x="204" y="130" text-anchor="middle" font-size="10">racket</text></svg>`},

  // Q29: Ball in semicircular ring with force direction arrows A,B,C,D
  {id:"ch2-mech-029",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#fff"/><path d="M 50 100 A 80 80 0 0 1 210 100" fill="none" stroke="#000" stroke-width="3"/><circle cx="130" cy="30" r="8" fill="#4a90d9"/><text x="130" y="20" text-anchor="middle" font-size="9">ball</text><line x1="130" y1="30" x2="180" y2="30" stroke="#000" stroke-width="1.5"/><polygon points="180,27 187,30 180,33" fill="#000"/><text x="190" y="30" font-size="10">v</text><line x1="130" y1="40" x2="160" y2="70" stroke="#e33" stroke-width="1.5"/><polygon points="158,68 165,75 155,72" fill="#e33"/><text x="170" y="80" font-size="10" fill="#e33">A</text><line x1="130" y1="40" x2="180" y2="50" stroke="#36a" stroke-width="1.5"/><polygon points="178,47 187,50 178,53" fill="#36a"/><text x="192" y="52" font-size="10" fill="#36a">B</text><line x1="130" y1="40" x2="150" y2="90" stroke="#090" stroke-width="1.5"/><polygon points="148,88 152,97 145,91" fill="#090"/><text x="155" y="100" font-size="10" fill="#090">C</text><line x1="130" y1="40" x2="100" y2="80" stroke="#909" stroke-width="1.5"/><polygon points="102,78 97,87 96,77" fill="#909"/><text x="85" y="85" font-size="10" fill="#909">D</text></svg>`},

  // Q38/42: Ball on string in vertical plane, lowest point, net force arrows
  {id:"ch2-mech-038",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><rect width="250" height="250" fill="#fff"/><circle cx="125" cy="125" r="70" fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="5"/><line x1="125" y1="55" x2="125" y2="195" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3"/><circle cx="125" cy="195" r="12" fill="#4a90d9"/><text x="125" y="200" text-anchor="middle" font-size="9" fill="#fff">ball</text><line x1="125" y1="10" x2="125" y2="183" stroke="#333" stroke-width="1.5"/><text x="135" y="20" font-size="9">string</text><line x1="125" y1="207" x2="125" y2="240" stroke="#e33" stroke-width="2"/><polygon points="121,240 125,248 129,240" fill="#e33"/><text x="140" y="240" font-size="10" fill="#e33">D</text><line x1="125" y1="183" x2="125" y2="155" stroke="#1a56db" stroke-width="2"/><polygon points="121,155 125,147 129,155" fill="#1a56db"/><text x="140" y="155" font-size="10" fill="#1a56db">C</text><line x1="137" y1="195" x2="165" y2="195" stroke="#090" stroke-width="2"/><polygon points="165,191 173,195 165,199" fill="#090"/><text x="175" y="198" font-size="10" fill="#090">B</text><line x1="113" y1="195" x2="85" y2="175" stroke="#909" stroke-width="2"/><polygon points="87,177 80,170 90,173" fill="#909"/><text x="65" y="170" font-size="10" fill="#909">A</text><text x="125" y="15" text-anchor="middle" font-size="9">●</text></svg>`},

  // Q43: Two steel balls in oil tube (M and 2M)
  {id:"ch2-mech-043",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250"><rect width="200" height="250" fill="#fff"/><rect x="70" y="10" width="60" height="230" fill="#ffe0a0" stroke="#000" stroke-width="1.5" rx="3"/><circle cx="100" cy="80" r="10" fill="#333"/><text x="100" y="84" text-anchor="middle" font-size="8" fill="#fff">M</text><circle cx="100" cy="170" r="14" fill="#333"/><text x="100" y="174" text-anchor="middle" font-size="8" fill="#fff">2M</text><text x="145" y="80" font-size="9">mass M</text><text x="145" y="170" font-size="9">mass 2M</text><text x="100" y="255" text-anchor="middle" font-size="10">oil</text></svg>`},

  // Q67: Bicycle/cyclist side view for vertical forces
  {id:"ch2-mech-067a",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 180"><rect width="350" height="180" fill="#fff"/><line x1="30" y1="150" x2="320" y2="150" stroke="#000" stroke-width="2"/><circle cx="100" cy="130" r="25" fill="none" stroke="#000" stroke-width="2"/><circle cx="240" cy="130" r="25" fill="none" stroke="#000" stroke-width="2"/><line x1="100" y1="130" x2="170" y2="80" stroke="#000" stroke-width="2"/><line x1="240" y1="130" x2="170" y2="80" stroke="#000" stroke-width="2"/><line x1="170" y1="80" x2="170" y2="50" stroke="#000" stroke-width="1.5"/><circle cx="170" cy="42" r="10" fill="none" stroke="#000" stroke-width="1.5"/><text x="170" y="30" text-anchor="middle" font-size="9">cyclist</text><line x1="170" y1="130" x2="170" y2="170" stroke="#e33" stroke-width="2" stroke-dasharray="4"/><polygon points="166,170 170,178 174,170" fill="#e33"/><text x="185" y="175" font-size="10" fill="#e33">W</text></svg>`},

  // Q70: Iron ball on crane rope, swings to hit wall
  {id:"ch2-mech-070a",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250"><rect width="300" height="250" fill="#fff"/><rect x="0" y="0" width="300" height="15" fill="#666"/><line x1="150" y1="15" x2="150" y2="140" stroke="#333" stroke-width="1.5"/><circle cx="150" cy="155" r="20" fill="#333"/><text x="150" y="160" text-anchor="middle" font-size="9" fill="#fff">770 kg</text><text x="170" y="80" font-size="10">12 m</text><line x1="150" y1="15" x2="80" y2="120" stroke="#333" stroke-width="1" stroke-dasharray="4"/><circle cx="80" cy="130" r="15" fill="#333" opacity="0.4"/><line x1="80" y1="145" x2="80" y2="175" stroke="#e33" stroke-width="1" stroke-dasharray="3"/><text x="65" y="165" font-size="10" fill="#e33">1.6 m</text><rect x="270" y="50" width="30" height="180" fill="#8B7355"/><text x="285" y="145" font-size="10" fill="#fff">wall</text></svg>`},

  // Q73: Person on weighing scale in accelerating lift
  {id:"ch2-mech-073",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><rect width="250" height="250" fill="#fff"/><rect x="50" y="30" width="150" height="200" fill="none" stroke="#000" stroke-width="2" rx="5"/><text x="125" y="22" text-anchor="middle" font-size="10">lift</text><rect x="80" y="190" width="90" height="15" fill="#ddd" stroke="#000" stroke-width="1"/><text x="125" y="225" text-anchor="middle" font-size="9">scale</text><line x1="125" y1="120" x2="125" y2="190" stroke="#000" stroke-width="2"/><circle cx="125" cy="110" r="15" fill="none" stroke="#000" stroke-width="1.5"/><line x1="110" y1="130" x2="125" y2="155" stroke="#000" stroke-width="1.5"/><line x1="140" y1="130" x2="125" y2="155" stroke="#000" stroke-width="1.5"/><line x1="125" y1="30" x2="125" y2="10" stroke="#1a56db" stroke-width="2.5"/><polygon points="121,10 125,2 129,10" fill="#1a56db"/><text x="140" y="10" font-size="10" fill="#1a56db">a ↑</text><text x="220" y="120" font-size="10">R ↑</text><text x="220" y="180" font-size="10">W ↓</text></svg>`},

  // Q74: Two spheres moving towards each other
  {id:"ch2-mech-074",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 120"><rect width="350" height="120" fill="#fff"/><circle cx="80" cy="60" r="20" fill="#4a90d9"/><text x="80" y="65" text-anchor="middle" font-size="10" fill="#fff">m₁</text><line x1="105" y1="60" x2="145" y2="60" stroke="#1a56db" stroke-width="2"/><polygon points="145,56 155,60 145,64" fill="#1a56db"/><text x="130" y="50" font-size="10" fill="#1a56db">v₁</text><circle cx="260" cy="60" r="20" fill="#e33" opacity="0.8"/><text x="260" y="65" text-anchor="middle" font-size="10" fill="#fff">m₂</text><line x1="235" y1="60" x2="195" y2="60" stroke="#e33" stroke-width="2"/><polygon points="195,56 185,60 195,64" fill="#e33"/><text x="210" y="50" font-size="10" fill="#e33">v₂</text><line x1="30" y1="95" x2="320" y2="95" stroke="#000" stroke-width="1"/><polygon points="315,92 325,95 315,98" fill="#000"/><text x="330" y="98" font-size="9">+ve</text></svg>`},

  // Q75: Brick on rotating disc - 4 force direction options
  {id:"ch2-mech-075",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="#fff"/><ellipse cx="150" cy="120" rx="100" ry="40" fill="none" stroke="#000" stroke-width="1.5"/><rect x="130" y="105" width="40" height="20" fill="#8B7355" stroke="#000" stroke-width="1"/><text x="150" y="118" text-anchor="middle" font-size="9">brick</text><line x1="150" y1="120" x2="150" y2="50" stroke="#000" stroke-width="1" stroke-dasharray="3"/><text x="155" y="45" font-size="9">axis</text><circle cx="150" cy="40" r="3" fill="#000"/><text x="150" y="180" text-anchor="middle" font-size="10">disc (rotating)</text><line x1="80" y1="90" x2="60" y2="75" stroke="#ccc" stroke-width="1.5"/><polygon points="62,77 55,70 65,72" fill="#ccc"/><text x="55" y="65" font-size="9" fill="#999">ω</text></svg>`},

  // Q76: Trolley on frictionless slope
  {id:"ch2-mech-076",image:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><rect width="300" height="150" fill="#fff"/><line x1="30" y1="130" x2="270" y2="50" stroke="#000" stroke-width="2"/><rect x="120" y="60" width="40" height="20" fill="#4a90d9" rx="3" transform="rotate(-18,140,70)"/><text x="140" y="50" text-anchor="middle" font-size="10">m</text><text x="230" y="95" font-size="11">a →</text><line x1="60" y1="130" x2="90" y2="130" stroke="#000" stroke-width="1"/><path d="M 70 130 A 20 20 0 0 0 78 118" fill="none" stroke="#000" stroke-width="1"/><text x="85" y="125" font-size="10">θ</text></svg>`}
];

async function patchImages() {
  let count = 0;
  for (const u of updates) {
    const ref = db.collection('dpQuestions').doc(u.id);
    try {
      await ref.update({ image: u.image });
      count++;
    } catch(e) {
      console.log(`Skipped ${u.id}: ${e.message}`);
    }
  }
  console.log(`✅ Patched ${count} CH2 Mechanics questions with SVG images`);
}

patchImages().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
