// patch-present-btn.js — Move Present button to subtopic header area
const fs = require('fs');
let html = fs.readFileSync('dp-chapter.html', 'utf8');

// 1. Remove Present button from top bar
html = html.replace(/\n\s*<a id="presentBtn"[^>]*onclick="openPresentation\(\)"[^>]*>.*?Present<\/a>/, '');
console.log('1. Removed Present from top bar');

// 2. Add Present button next to Mode: SL in the subtopic badges
html = html.replace(
  "👁️ Mode: ${currentLevel.toUpperCase()}\n      </span>\n    </div>",
  `👁️ Mode: \${currentLevel.toUpperCase()}
      </span>
      <a href="#" onclick="openPresentation(); return false;" style="font-size:10px;font-weight:700;padding:4px 12px;border-radius:50px;background:linear-gradient(135deg,rgba(239,68,68,.12),rgba(220,38,38,.06));color:#dc2626;border:1px solid rgba(220,38,38,.18);text-decoration:none;font-family:-apple-system,system-ui,sans-serif;margin-left:8px;transition:all .2s;" onmouseover="this.style.background='rgba(220,38,38,.15)'" onmouseout="this.style.background='linear-gradient(135deg,rgba(239,68,68,.12),rgba(220,38,38,.06))'">🎬 Present</a>
    </div>`
);
console.log('2. Added Present button next to Mode indicator');

fs.writeFileSync('dp-chapter.html', html);
console.log('Done');
