const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

async function fix() {
  const snap = await db.collection('dpQuestions').where('paper', '==', 'QBank').get();
  console.log(`Found ${snap.size} docs with paper="QBank"`);
  let count = 0;
  const batches = [];
  let batch = db.batch();
  snap.forEach(doc => {
    batch.update(doc.ref, { paper: 'Question Bank' });
    count++;
    if (count % 400 === 0) { batches.push(batch); batch = db.batch(); }
  });
  batches.push(batch);
  for (const b of batches) { await b.commit(); }
  console.log(`✅ Updated ${count} questions: "QBank" → "Question Bank"`);
}

fix().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
