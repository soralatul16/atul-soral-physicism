const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

// Question groups that are extended (Paper 2): total marks > 10
const paper2Groups = [
  'ch2-mech-014','ch2-mech-033','ch2-mech-009','ch2-mech-022',
  'ch2-mech-067','ch2-mech-070',
  'ch4-wave-009','ch4-wave-020','ch4-wave-034','ch4-wave-040','ch4-wave-053',
  'ch5-elec-019','ch5-elec-028','ch5-elec-037',
  'ch6-circ-020','ch6-circ-023','ch6-circ-027','ch6-circ-030'
];

async function fix() {
  const snap1 = await db.collection('dpQuestions').where('paper', '==', 'QBank').get();
  const snap2 = await db.collection('dpQuestions').where('paper', '==', 'Question Bank').get();
  
  const allDocs = [...snap1.docs, ...snap2.docs];
  console.log(`Found ${allDocs.length} docs to categorize`);
  
  let count = 0;
  const batches = [];
  let batch = db.batch();
  
  allDocs.forEach(doc => {
    const data = doc.data();
    let newPaper;
    
    if (data.type === 'MCQ') {
      newPaper = 'Paper 1A';
    } else if (data.questionGroup && paper2Groups.includes(data.questionGroup)) {
      newPaper = 'Paper 2';
    } else {
      newPaper = 'Paper 1B';
    }
    
    batch.update(doc.ref, { paper: newPaper });
    count++;
    if (count % 400 === 0) { batches.push(batch); batch = db.batch(); }
  });
  batches.push(batch);
  
  for (const b of batches) { await b.commit(); }
  console.log(`✅ Updated ${count} questions → Paper 1A / 1B / 2`);
}

fix().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
