// fix-undo-final.js — Fix undo by saving state on every mouseup when tool is active
const fs = require('fs');
const path = require('path');
const presDir = 'presentations';
const files = fs.readdirSync(presDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(presDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Replace endDraw: save state based on currentTool, not drawing flag
  const oldEndDraw = "function endDraw(){if(drawing)saveState();drawing=false;";
  const newEndDraw = "function endDraw(){var wasDraw=drawing;drawing=false;if(wasDraw&&currentTool!=='cursor'&&currentTool!=='text')saveState();";

  if (html.includes(oldEndDraw)) {
    html = html.replace(oldEndDraw, newEndDraw);
    fs.writeFileSync(filePath, html);
    console.log(file + ': fixed endDraw');
  } else {
    console.log(file + ': endDraw pattern not found');
  }
});

console.log('\nDone.');
