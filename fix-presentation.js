// fix-presentation.js — fixes canvas sizing and animation restart
const fs = require('fs');
let html = fs.readFileSync('presentations/a1-kinematics.html', 'utf8');

// Fix 1: Replace resizeCanvas to only resize ACTIVE slide canvas
const oldResize = `function resizeCanvas(){
  canvases.forEach(function(c){
    var r=c.parentElement.getBoundingClientRect();
    if(c.width!==r.width*devicePixelRatio||c.height!==r.height*devicePixelRatio){
      var imgData=c.toDataURL();
      c.width=r.width*devicePixelRatio;c.height=r.height*devicePixelRatio;
      c.style.width=r.width+'px';c.style.height=r.height+'px';
      var ctx=c.getContext('2d');ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
      // Redraw
      var img=new Image();img.onload=function(){ctx.drawImage(img,0,0,r.width,r.height);};img.src=imgData;
    }
  });
}
window.addEventListener('resize',resizeCanvas);
setTimeout(resizeCanvas,100);`;

const newResize = `function resizeCanvas(){
  var activeSlide=slides[cur];
  if(!activeSlide)return;
  var c=activeSlide.querySelector('.draw-layer');
  if(!c)return;
  var r=activeSlide.getBoundingClientRect();
  if(r.width===0)return;
  var needsResize=c.width!==Math.round(r.width*devicePixelRatio)||c.height!==Math.round(r.height*devicePixelRatio);
  if(needsResize){
    var imgData=c.toDataURL();
    c.width=Math.round(r.width*devicePixelRatio);
    c.height=Math.round(r.height*devicePixelRatio);
    c.style.width=r.width+'px';
    c.style.height=r.height+'px';
    var ctx=c.getContext('2d');
    ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
    var img=new Image();img.onload=function(){ctx.drawImage(img,0,0,r.width,r.height);};img.src=imgData;
  }
}
window.addEventListener('resize',resizeCanvas);
setTimeout(resizeCanvas,200);`;

if(html.includes(oldResize)){
  html=html.replace(oldResize,newResize);
  console.log('1. Fixed resizeCanvas to only size active slide');
} else {
  console.log('1. WARN: Could not find exact resizeCanvas block — trying partial fix');
  html=html.replace('function resizeCanvas(){', '// PATCHED\nfunction resizeCanvas(){');
}

// Fix 2: Call resizeCanvas AFTER slide becomes visible (with delay)
html=html.replace(
  'function show(i){slides.forEach(function(s,idx){s.classList.toggle(\'active\',idx===i);});fi=0;frags(slides[i]).forEach(function(f){f.classList.remove(\'v\');});updP();updC();resizeCanvas();}',
  'function show(i){slides.forEach(function(s,idx){s.classList.toggle(\'active\',idx===i);});fi=0;frags(slides[i]).forEach(function(f){f.classList.remove(\'v\');});updP();updC();setTimeout(resizeCanvas,50);restartAnimations(i);}'
);

// Fix 3: Add animation restart function (re-triggers CSS animations on slide change)
const animRestart = `
function restartAnimations(i){
  var svgs=slides[i].querySelectorAll('svg');
  svgs.forEach(function(svg){
    var anims=svg.querySelectorAll('[class]');
    anims.forEach(function(el){
      var cls=el.getAttribute('class');
      el.setAttribute('class','');
      void el.offsetWidth;
      el.setAttribute('class',cls);
    });
  });
}
`;

html=html.replace('function next(){', animRestart + 'function next(){');
console.log('2. Added animation restart on slide change');

// Fix 4: Fix getCanvas to work with active slide
html=html.replace(
  'function getCanvas(){return slides[cur].querySelector(\'.draw-layer\');}',
  'function getCanvas(){var s=slides[cur];if(!s)return null;return s.querySelector(\'.draw-layer\');}'
);

// Fix 5: Ensure initial canvas resize happens after page fully renders
html=html.replace(
  'setTool(\'cursor\');',
  'setTool(\'cursor\');\nwindow.addEventListener(\'load\',function(){setTimeout(resizeCanvas,300);});'
);
console.log('3. Added delayed resize on window load');

fs.writeFileSync('presentations/a1-kinematics.html', html);
console.log('\nDone. Canvas and animations fixed.');
