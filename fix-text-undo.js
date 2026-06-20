// fix-text-undo.js — Fix text tool focus/commit + verify undo
const fs = require('fs');
const path = require('path');
const presDir = 'presentations';
const files = fs.readdirSync(presDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(presDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix 1: Replace placeText function with improved version
  // - Auto focus with setTimeout (prevents click event from stealing focus)
  // - Commit text on blur (clicking outside)
  // - Stop event propagation properly

  const oldPlaceText = "function placeText(e){\n  if(currentTool!=='text')return;\n  var c=getCanvas();if(!c)return;\n  var r=c.getBoundingClientRect();\n  var x=e.clientX-r.left, y=e.clientY-r.top;\n  if(textInput){textInput.remove();textInput=null;}\n  var inp=document.createElement('input');\n  inp.type='text';\n  inp.style.cssText='position:fixed;left:'+(e.clientX-2)+'px;top:'+(e.clientY-14)+'px;background:rgba(0,0,0,.7);color:#fff;border:1px solid var(--accent);border-radius:4px;padding:4px 8px;font-size:16px;font-family:sans-serif;outline:none;z-index:300;min-width:120px;';\n  inp.placeholder='Type here...';\n  document.body.appendChild(inp);\n  inp.focus();\n  textInput=inp;\n  inp.addEventListener('keydown',function(ev){\n    if(ev.key==='Enter'){\n      saveState();\n      var ctx=getCtx();if(!ctx)return;\n      ctx.globalCompositeOperation='source-over';\n      ctx.globalAlpha=1;\n      ctx.font='bold 16px -apple-system,system-ui,sans-serif';\n      ctx.fillStyle=penColor;\n      ctx.fillText(inp.value,x,y);\n      inp.remove();textInput=null;\n    }else if(ev.key==='Escape'){\n      inp.remove();textInput=null;\n    }\n    ev.stopPropagation();\n  });\n}";

  const newPlaceText = `function placeText(e){
  if(currentTool!=='text')return;
  e.stopPropagation();e.preventDefault();
  var c=getCanvas();if(!c)return;
  var r=c.getBoundingClientRect();
  var x=e.clientX-r.left, y=e.clientY-r.top;
  if(textInput){commitText();}
  var inp=document.createElement('input');
  inp.type='text';
  inp.style.cssText='position:fixed;left:'+(e.clientX-2)+'px;top:'+(e.clientY-14)+'px;background:rgba(0,0,0,.85);color:#fff;border:2px solid #3b82f6;border-radius:6px;padding:6px 10px;font-size:18px;font-family:-apple-system,system-ui,sans-serif;outline:none;z-index:500;min-width:150px;box-shadow:0 4px 12px rgba(0,0,0,.3);';
  inp.placeholder='Type here...';
  inp._cx=x;inp._cy=y;
  document.body.appendChild(inp);
  textInput=inp;
  setTimeout(function(){inp.focus();},50);
  function commitText(){
    if(!textInput)return;
    var val=textInput.value;
    if(val.trim()){
      saveState();
      var ctx=getCtx();if(!ctx)return;
      ctx.globalCompositeOperation='source-over';
      ctx.globalAlpha=1;
      ctx.font='bold 18px -apple-system,system-ui,sans-serif';
      ctx.fillStyle=penColor;
      ctx.fillText(val,textInput._cx,textInput._cy);
    }
    textInput.remove();textInput=null;
  }
  inp.addEventListener('keydown',function(ev){
    if(ev.key==='Enter'){commitText();}
    else if(ev.key==='Escape'){textInput.remove();textInput=null;}
    ev.stopPropagation();
  });
  inp.addEventListener('blur',function(){
    setTimeout(commitText,100);
  });
}`;

  if (html.includes('function placeText(e)')) {
    // Remove old placeText and replace
    var start = html.indexOf('function placeText(e){');
    // Find the end of the function — count braces
    var depth = 0, end = start;
    var inFunc = false;
    for (var i = start; i < html.length; i++) {
      if (html[i] === '{') { depth++; inFunc = true; }
      if (html[i] === '}') { depth--; }
      if (inFunc && depth === 0) { end = i + 1; break; }
    }
    html = html.substring(0, start) + newPlaceText + html.substring(end);
    changed = true;
  }

  // Fix 2: Prevent deck click from advancing when text input is open
  if (!html.includes('if(textInput)return;')) {
    html = html.replace(
      "if(e.target.closest('.toolbar'))return;",
      "if(e.target.closest('.toolbar'))return;if(textInput)return;"
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html);
    console.log(file + ': fixed text tool');
  } else {
    console.log(file + ': no text tool found or already fixed');
  }
});

console.log('\nDone.');
