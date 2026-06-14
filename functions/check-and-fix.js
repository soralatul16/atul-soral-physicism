const admin = require('firebase-admin');
if (!admin.apps.length) {
  const serviceAccount = require('./serviceAccountKey.json');
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}
const db = admin.firestore();

async function checkAndFix() {
  // Count all questions
  const all = await db.collection('dpQuestions').get();
  console.log(`Total questions in Firestore: ${all.size}`);
  
  // Count by paper type
  const paperCounts = {};
  const sessionCounts = {};
  all.forEach(doc => {
    const d = doc.data();
    paperCounts[d.paper] = (paperCounts[d.paper] || 0) + 1;
    sessionCounts[d.session] = (sessionCounts[d.session] || 0) + 1;
  });
  console.log('\nBy Paper:', paperCounts);
  console.log('\nBy Session:', sessionCounts);
  
  // Fix: Convert QBank/Question Bank → proper paper types
  let fixed = 0;
  const paper2Groups = [
    'ch2-mech-014','ch2-mech-033','ch2-mech-009','ch2-mech-022',
    'ch2-mech-067','ch2-mech-070',
    'ch4-wave-009','ch4-wave-020','ch4-wave-034','ch4-wave-040','ch4-wave-053',
    'ch5-elec-019','ch5-elec-028','ch5-elec-037',
    'ch6-circ-020','ch6-circ-023','ch6-circ-027','ch6-circ-030'
  ];
  
  const toFix = all.docs.filter(doc => {
    const p = doc.data().paper;
    return p === 'QBank' || p === 'Question Bank';
  });
  
  console.log(`\nQuestions needing paper fix: ${toFix.length}`);
  
  if (toFix.length > 0) {
    const batches = [];
    let batch = db.batch();
    let count = 0;
    
    toFix.forEach(doc => {
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
    console.log(`✅ Fixed ${count} questions → Paper 1A / 1B / 2`);
  }
}

checkAndFix().then(() => process.exit(0)).catch(err => { console.error(err); process.exit(1); });
