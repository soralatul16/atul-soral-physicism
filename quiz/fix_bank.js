const fs = require('fs');
let content = fs.readFileSync('question-bank.js', 'utf8');

// Fix missing comma after answer property
// Pattern: answer: "..."\n    explanation:
content = content.replace(/(answer\s*:\s*(?:"[^"]*"|'[^']*'|[^,\n]+?))\s*\n(\s*explanation\s*:)/gi, '$1,\n$2');

// Fix missing comma between objects in the array
// Pattern: } followed by optional whitespace/comments followed by {
// But we must be careful not to replace it inside actual code. 
// Since question-bank.js is just a big array assignment: const QUESTION_BANK = [ ... ];
// We can find `}` followed by `{` (with any whitespace/comments in between) and add a comma.
content = content.replace(/\}\s*(?:\/\*[\s\S]*?\*\/\s*|\/\/.*?\s*)*\{/g, match => {
  if (!match.startsWith('},')) {
    return match.replace(/^}/, '},');
  }
  return match;
});

// Also fix if the last object in the array doesn't have a trailing comma or has one, it doesn't matter for JS.
// Wait, the regex `/(answer\s*:\s*".*?")\s*\n(\s*explanation\s*:)/gi` is good.
// What about answer property without quotes? like `answer: 0 N` instead of `answer: "0 N"`
// In the grep output, some are like `answer:"Law of inertia"`
// My regex `(answer\s*:\s*(?:"[^"]*"|'[^']*'|[^,\n]+?))` captures the value.

fs.writeFileSync('question-bank.js', content, 'utf8');
console.log("Fixed question-bank.js syntax errors");
