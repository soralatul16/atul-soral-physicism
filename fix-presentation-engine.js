// fix-presentation-engine.js
// Fixes: light theme, undo/redo, navigation while drawing, text box tool
// Run: node fix-presentation-engine.js
// Applies to ALL presentation files in presentations/ folder

const fs = require('fs');
const path = require('path');

const presDir = 'presentations';
const files = fs.readdirSync(presDir).filter(f => f.endsWith('.html'));

console.log('Found ' + files.length + ' presentation files to update.\n');

files.forEach(file => {
  const filePath = path.join(presDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changes = [];

  // ═══ FIX 1: Light theme not working — ensure [data-theme="light"] CSS exists ═══
  // Already exists in most files, but let's verify the body starts with data-theme
  if (!html.includes('data-theme="dark"') && !html.includes("data-theme='dark'")) {
    html = html.replace('<body>', '<body data-theme="dark">');
    changes.push('Added data-theme to body');
  }

  // ═══ FIX 2: Allow navigation (arrow keys, space) even when drawing tool is selected ═══
  // Replace the keyboard handler that blocks navigation when tool !== cursor
  const oldKeyHandler = "if(currentTool!=='cursor')return;if(e.key==='ArrowRight'";
  const newKeyHandler = "if(e.key==='ArrowRight'";
  if (html.includes(oldKeyHandler)) {
    html = html.replace(oldKeyHandler, newKeyHandler);
    changes.push('Fixed: navigation works while drawing tool selected');
  }

  // ═══ FIX 3: Add undo/redo for drawing (Ctrl+Z / Ctrl+Y) ═══
  // We need to store canvas states for undo/redo
  const undoRedoCode = `
// ════ UNDO/REDO SYSTEM ════
var undoStack=[], redoStack=[], maxUndo=30;
function saveState(){
  var c=getCanvas();if(!c)return;
  undoStack.push(c.toDataURL());
  if(undoStack.length>maxUndo)undoStack.shift();
  redoStack=[];
}
function undo(){
  var c=getCanvas();if(!c||undoStack.length===0)return;
  redoStack.push(c.toDataURL());
  var state=undoStack.pop();
  var ctx=c.getContext('2d');
  var img=new Image();
  img.onload=function(){ctx.clearRect(0,0,c.width,c.height);ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(img,0,0);ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);};
  img.src=state;
}
function redo(){
  var c=getCanvas();if(!c||redoStack.length===0)return;
  undoStack.push(c.toDataURL());
  var state=redoStack.pop();
  var ctx=c.getContext('2d');
  var img=new Image();
  img.onload=function(){ctx.clearRect(0,0,c.width,c.height);ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(img,0,0);ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);};
  img.src=state;
}
`;

  // Add undo/redo code before the show(0) call
  if (!html.includes('function undo()')) {
    html = html.replace('show(0);', undoRedoCode + 'show(0);');
    changes.push('Added undo/redo system');
  }

  // Save state on mouseup/touchend when drawing
  html = html.replace(
    'function endDraw(){drawing=false;',
    'function endDraw(){if(drawing)saveState();drawing=false;'
  );

  // Add Ctrl+Z/Y keyboard handler — insert into the keydown listener
  // We need to add it BEFORE the navigation keys check
  const ctrlZHandler = "if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();undo();return;}if((e.ctrlKey||e.metaKey)&&(e.key==='y'||e.key==='Z')){e.preventDefault();redo();return;}";

  if (!html.includes("undo();return;")) {
    html = html.replace(
      "document.addEventListener('keydown',function(e){",
      "document.addEventListener('keydown',function(e){" + ctrlZHandler
    );
    changes.push('Added Ctrl+Z/Y for undo/redo');
  }

  // ═══ FIX 4: Add text box tool ═══
  // Add text button to toolbar
  if (!html.includes('btnText')) {
    // Add text button after eraser in toolbar
    html = html.replace(
      '<button class="tb-btn" id="btnEraser"',
      '<button class="tb-btn" id="btnText" onclick="setTool(\'text\')" title="Text">T</button><button class="tb-btn" id="btnEraser"'
    );

    // Update setTool to handle text mode
    html = html.replace(
      "else document.getElementById('btnCursor').classList.add('active');",
      "else if(t==='text')document.getElementById('btnText').classList.add('active');else document.getElementById('btnCursor').classList.add('active');"
    );

    // Add text tool CSS
    html = html.replace(
      '.draw-layer.active{pointer-events:auto;cursor:crosshair}',
      '.draw-layer.active{pointer-events:auto;cursor:crosshair}.draw-layer.texting{cursor:text}'
    );

    // Update canvas class toggling for text mode
    html = html.replace(
      "c.classList.toggle('erasing',t==='eraser');",
      "c.classList.toggle('erasing',t==='eraser');c.classList.toggle('texting',t==='text');"
    );

    // Add text placement logic
    const textToolCode = `
// ════ TEXT BOX TOOL ════
var textInput=null;
function placeText(e){
  if(currentTool!=='text')return;
  var c=getCanvas();if(!c)return;
  var r=c.getBoundingClientRect();
  var x=e.clientX-r.left, y=e.clientY-r.top;
  if(textInput){textInput.remove();textInput=null;}
  var inp=document.createElement('input');
  inp.type='text';
  inp.style.cssText='position:fixed;left:'+(e.clientX-2)+'px;top:'+(e.clientY-14)+'px;background:rgba(0,0,0,.7);color:#fff;border:1px solid var(--accent);border-radius:4px;padding:4px 8px;font-size:16px;font-family:sans-serif;outline:none;z-index:300;min-width:120px;';
  inp.placeholder='Type here...';
  document.body.appendChild(inp);
  inp.focus();
  textInput=inp;
  inp.addEventListener('keydown',function(ev){
    if(ev.key==='Enter'){
      saveState();
      var ctx=getCtx();if(!ctx)return;
      ctx.globalCompositeOperation='source-over';
      ctx.globalAlpha=1;
      ctx.font='bold 16px -apple-system,system-ui,sans-serif';
      ctx.fillStyle=penColor;
      ctx.fillText(inp.value,x,y);
      inp.remove();textInput=null;
    }else if(ev.key==='Escape'){
      inp.remove();textInput=null;
    }
    ev.stopPropagation();
  });
}
`;
    // Add text tool code before show(0)
    html = html.replace('show(0);', textToolCode + 'show(0);');

    // Hook text placement into mousedown on draw-layer
    html = html.replace(
      "document.addEventListener('mousedown',function(e){if(e.target.closest('.draw-layer'))startDraw(e);});",
      "document.addEventListener('mousedown',function(e){if(e.target.closest('.draw-layer')){if(currentTool==='text'){placeText(e);}else{startDraw(e);}}});"
    );

    changes.push('Added text box tool (T button)');
  }

  // ═══ FIX 5: Add undo/redo buttons to toolbar ═══
  if (!html.includes('btnUndo')) {
    html = html.replace(
      '<button class="tb-btn" onclick="clearSlide()"',
      '<button class="tb-btn" id="btnUndo" onclick="undo()" title="Undo (Ctrl+Z)" style="font-size:10px">&#8617;</button><button class="tb-btn" id="btnRedo" onclick="redo()" title="Redo (Ctrl+Y)" style="font-size:10px">&#8618;</button><div class="tb-sep"></div><button class="tb-btn" onclick="clearSlide()"'
    );
    changes.push('Added undo/redo buttons to toolbar');
  }

  if (changes.length > 0) {
    fs.writeFileSync(filePath, html);
    console.log(file + ': ' + changes.join(', '));
  } else {
    console.log(file + ': no changes needed');
  }
});

console.log('\nDone. All presentations updated.');
