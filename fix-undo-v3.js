// fix-undo-v3.js — Track actual strokes for undo
const fs = require('fs');
const path = require('path');
const presDir = 'presentations';
const files = fs.readdirSync(presDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(presDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Add a strokeMade flag
  if (!html.includes('strokeMade')) {
    html = html.replace(
      "var currentTool='cursor',penColor='#ef4444',penSize=3,drawing=false;",
      "var currentTool='cursor',penColor='#ef4444',penSize=3,drawing=false,strokeMade=false;"
    );

    // Set strokeMade=true in moveDraw when actually drawing
    html = html.replace(
      'function moveDraw(e){if(!drawing||currentTool===\'cursor\')return;var ctx=getCtx();if(!ctx)return;var r=getCanvas().getBoundingClientRect();ctx.lineTo(e.clientX-r.left,e.clientY-r.top);ctx.stroke();}',
      'function moveDraw(e){if(!drawing||currentTool===\'cursor\')return;var ctx=getCtx();if(!ctx)return;var r=getCanvas().getBoundingClientRect();ctx.lineTo(e.clientX-r.left,e.clientY-r.top);ctx.stroke();strokeMade=true;}'
    );

    // Save state in endDraw based on strokeMade
    html = html.replace(
      "function endDraw(){var wasDraw=drawing;drawing=false;if(wasDraw&&currentTool!=='cursor'&&currentTool!=='text')saveState();",
      "function endDraw(){drawing=false;if(strokeMade){saveState();strokeMade=false;}"
    );

    // Also set strokeMade=false in startDraw
    html = html.replace(
      'function startDraw(e){if(currentTool===\'cursor\')return;drawing=true;',
      'function startDraw(e){if(currentTool===\'cursor\')return;drawing=true;strokeMade=false;'
    );

    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html);
    console.log(file + ': fixed with strokeMade flag');
  } else {
    console.log(file + ': already has strokeMade');
  }
});
console.log('\nDone.');
