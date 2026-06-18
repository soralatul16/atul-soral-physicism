// fix-present-visibility.js — Hide Present button when no presentation exists
const fs = require('fs');
let html = fs.readFileSync('dp-chapter.html', 'utf8');

// Find the Present button in the subtopic header and add an ID so we can show/hide it
// The button is inside the subBadgesHtml template literal
html = html.replace(
  `onclick="openPresentation(); return false;"`,
  `onclick="openPresentation(); return false;" id="presentBtnInline"`
);

// Now update the openPresentation function to also handle visibility
// Find the current function
const oldFunc = html.match(/function openPresentation\(\)\{[\s\S]*?\n\}/);
if (oldFunc) {
  html = html.replace(oldFunc[0], `function openPresentation(){
  var params=new URLSearchParams(window.location.search);
  var topic=(params.get("topic")||"").toUpperCase();
  var presentations={"A1-0":"presentations/a1-1-position-displacement-distance.html","A1-1":"presentations/a1-2-velocity-speed.html","A1-2":"presentations/a1-3-acceleration.html","A1-3":"presentations/a1-4-suvat-equations.html","A1-4":"presentations/a1-5-free-fall.html","A1-5":"presentations/a1-6-projectile-motion.html","A1-6":"presentations/a1-7-graphs-of-motion.html","A1-7":"presentations/a1-8-relative-motion.html","A1-8":"presentations/a1-9-multi-step-problems.html","A2-0":"presentations/a2-1-forces-fbd.html","A2-1":"presentations/a2-2-newtons-first-law.html","A1":"presentations/a1-kinematics.html"};
  var activeItem=document.querySelector(".si.active");var idx=0;if(activeItem){var items=document.querySelectorAll(".si");items.forEach(function(item,i){if(item.classList.contains("active"))idx=i;});}
  var key=topic+"-"+idx;
  if(presentations[key]){window.open(presentations[key],"_blank");}
  else if(presentations[topic]){window.open(presentations[topic],"_blank");}
  else{alert("No presentation available for this topic yet.");}
}

function updatePresentBtn(){
  var btn=document.getElementById("presentBtnInline");
  if(!btn)return;
  var params=new URLSearchParams(window.location.search);
  var topic=(params.get("topic")||"").toUpperCase();
  var presentations={"A1-0":1,"A1-1":1,"A1-2":1,"A1-3":1,"A1-4":1,"A1-5":1,"A1-6":1,"A1-7":1,"A1-8":1,"A2-0":1,"A2-1":1,"A1":1};
  var activeItem=document.querySelector(".si.active");var idx=0;if(activeItem){var items=document.querySelectorAll(".si");items.forEach(function(item,i){if(item.classList.contains("active"))idx=i;});}
  var key=topic+"-"+idx;
  btn.style.display=(presentations[key]||presentations[topic])?"inline-block":"none";
}`);
  console.log('1. Updated openPresentation with full map + added updatePresentBtn');
}

// Now hook updatePresentBtn into the showLesson function so it runs on every lesson change
// Find where showLesson is called or where sidebar items are clicked
if (html.includes('item.onclick = () => showLesson(idx)')) {
  html = html.replace(
    'item.onclick = () => showLesson(idx)',
    'item.onclick = () => { showLesson(idx); setTimeout(updatePresentBtn, 100); }'
  );
  console.log('2. Hooked updatePresentBtn into sidebar lesson click');
}

// Also call it on initial load — after the first lesson renders
html = html.replace(
  'setTool(\'cursor\');',
  'setTool(\'cursor\');\nsetTimeout(function(){if(typeof updatePresentBtn==="function")updatePresentBtn();},500);'
);

// Also try hooking into the showLesson function itself
if (html.includes('function showLesson(')) {
  // Add updatePresentBtn call at the end of showLesson
  // We need to find where showLesson ends — tricky in minified code
  // Instead, let's use a MutationObserver approach
}

console.log('3. Added initial load call for updatePresentBtn');

fs.writeFileSync('dp-chapter.html', html);
console.log('\nDone. Present button now hidden when no presentation exists.');
