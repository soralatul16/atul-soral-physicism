const admin=require('firebase-admin');
const sa=require('./serviceAccountKey.json');
admin.initializeApp({credential:admin.credential.cert(sa)});
const db=admin.firestore();

const stems={
  'myp-m24-1':'A coal-fired power station heats water to produce steam, which drives a turbine connected to a generator.',
  'myp-m24-2':'Uranium-235 is used as fuel in nuclear power stations. When U-235 undergoes fission, it splits into lighter nuclei.',
  'myp-m24-3':'A student investigates how the length of a wire affects its electrical resistance.',
  'myp-m24-4':'A steel ball rolls down a ramp towards a magnet. The ball accelerates as it approaches the magnet.',
  'myp-m23-1':'A horse race involves horses of different masses travelling at various speeds.',
  'myp-m23-2':'White light passes through a glass prism and separates into a spectrum of colours.',
  'myp-m23-3':'Carbon exists as different isotopes including Carbon-12 and Carbon-14.',
  'myp-m23-4':'A student investigates how adding mass to a syringe affects the volume of trapped air.',
  'myp-m23-5':'A balloon is heated and expands as the temperature increases.',
  'myp-n23-1':'Our solar system contains the Sun, planets, and other objects orbiting within it.',
  'myp-n23-2':'Carbon-14 is a radioactive isotope used for dating archaeological samples.',
  'myp-n23-3':'A filament bulb and an LED both convert electrical energy into light with different efficiencies.',
  'myp-n23-4':'A student drops a ball from different heights and measures how high it bounces.',
  'myp-m25-1':'A defibrillator delivers an electrical shock to restart the heart during cardiac arrest.',
  'myp-m25-2':'Light travels at different speeds in different materials, causing refraction.',
  'myp-m25-3':'Nuclear power stations use uranium fuel to generate electricity through fission.',
  'myp-m25-4':'A model car attached to a spring oscillates back and forth on a track.',
  'myp-n24-1':'A pendulum swings back and forth, converting between kinetic and potential energy.',
  'myp-n24-2':'A smoke detector uses americium-241 which emits alpha particles to detect smoke.',
  'myp-n24-3':'A student investigates how the diameter of a wire affects its electrical resistance.',
  'myp-n24-4':'A student investigates how distance from a light source affects the resistance of an LDR.'
};

db.collection('mypQuestions').get().then(function(snap){
  var batch=db.batch();
  var count=0;
  snap.forEach(function(doc){
    var id=doc.id;
    var match=id.match(/^(myp-[a-z]\d+-\d+)/);
    if(match){
      var group=match[1];
      var update={questionGroup:group};
      if(stems[group]) update.stem=stems[group];
      batch.update(doc.ref, update);
      count++;
    }
  });
  return batch.commit().then(function(){console.log('Grouped '+count+' questions with stems');process.exit(0);});
}).catch(function(e){console.error(e);process.exit(1);});
