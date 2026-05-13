/* ═══════════════════════════════════════════════════════════
   PHYSICISM — Exam Guided Builder
   Manual structure, AI-generated content.
   ═══════════════════════════════════════════════════════════ */

let guidedSections = [];
let figureCount = 0;
let tableCount = 0;
let guidedActiveBlock = null;

// Multi-select Logic
function toggleMultiSelect(id) {
  const panel = document.getElementById(id + '-panel');
  if(panel) {
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  }
}
function updateMultiSelect(id) {
  const checks = document.querySelectorAll('#' + id + '-panel input:checked');
  const values = Array.from(checks).map(c => c.value);
  const label = document.getElementById(id + '-label');
  if(label) {
    label.textContent = values.length ? values.length + ' selected' : 'Select...';
  }
}
function getMultiSelectValues(id) {
  const checks = document.querySelectorAll('#' + id + '-panel input:checked');
  return Array.from(checks).map(c => c.value);
}
// Close on outside click
document.addEventListener('click', e => {
  document.querySelectorAll('.multi-select-panel').forEach(p => {
    if (!p.parentElement.contains(e.target)) p.style.display = 'none';
  });
});

function checkDFactor() {
  const criteria = getMultiSelectValues('shared-criteria');
  const dGroup = document.getElementById('shared-dfactor-group');
  if(dGroup) {
    dGroup.style.display = criteria.includes('D') ? 'block' : 'none';
  }
}

// Auto-numbering
function getNextFigureNumber() { return ++figureCount; }
function getNextTableNumber() { return ++tableCount; }

function resetNumbering() {
  figureCount = 0;
  tableCount = 0;
  guidedSections.forEach(sec => {
    sec.blocks.forEach(b => {
      if(b.mode === 'content') {
        if(b.source === 'image') b.data.figureNumber = getNextFigureNumber();
        if(b.source === 'data_table') b.data.tableNumber = getNextTableNumber();
      }
    });
  });
  guidedRenderTree();
}

function openGuidedBuilder() {
  showPage('guidedBuilder');
  const screen = document.getElementById('guidedBuilderScreen');
  if (!screen) return;
  screen.style.display = 'flex';
  
  // Move shared meta form
  const metaForm = document.getElementById('shared-meta-form');
  const placeholder = document.getElementById('guided-meta-placeholder');
  if(metaForm && placeholder) {
    placeholder.appendChild(metaForm);
    metaForm.style.display = 'block';
  }
  
  if(guidedSections.length === 0) {
    guidedAddSection();
  } else {
    guidedRenderTree();
  }
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function guidedAddSection() {
  guidedSections.push({
    id: generateId(),
    name: 'Section ' + (guidedSections.length + 1),
    blocks: []
  });
  guidedRenderTree();
}

function guidedAddContent(sectionId) {
  const sec = guidedSections.find(s => s.id === sectionId);
  if(!sec) return;
  sec.blocks.push({
    id: generateId(),
    mode: 'content',
    source: 'ai', // 'ai', 'provided', 'image', 'video', 'data_table', 'simulation'
    prompt: '',
    data: { text: '' }
  });
  resetNumbering();
}

function guidedAddQuestion(sectionId) {
  const sec = guidedSections.find(s => s.id === sectionId);
  if(!sec) return;
  sec.blocks.push({
    id: generateId(),
    mode: 'question',
    type: 'MCQ',
    meta: { marks: 1, strand: 'i', difficulty: 'Medium', commandTerm: 'State', criterion: 'A' },
    prompt: '',
    references: ''
  });
  guidedRenderTree();
}

function guidedDeleteBlock(sectionId, blockId) {
  const sec = guidedSections.find(s => s.id === sectionId);
  if(!sec) return;
  sec.blocks = sec.blocks.filter(b => b.id !== blockId);
  if(guidedActiveBlock && guidedActiveBlock.block.id === blockId) {
    document.getElementById('guided-block-editor').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text3);">Select a block from the tree to edit</div>';
    guidedActiveBlock = null;
  }
  resetNumbering();
}

function guidedRenderTree() {
  const container = document.getElementById('guided-tree-content');
  if(!container) return;
  
  let html = '';
  guidedSections.forEach((sec, sIdx) => {
    html += `
      <div style="margin-bottom:12px;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:8px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:13px;margin-bottom:8px;">
          <input type="text" value="${sec.name}" onchange="guidedSections[${sIdx}].name=this.value" style="border:none;background:transparent;font-weight:600;color:var(--text);width:150px;outline:none;">
          <button class="icon-btn" onclick="guidedSections.splice(${sIdx},1); guidedRenderTree();">🗑</button>
        </div>
    `;
    sec.blocks.forEach((block, bIdx) => {
      let label = '';
      if(block.mode === 'content') {
        if(block.source === 'image') label = `📷 Figure ${block.data.figureNumber}`;
        else if(block.source === 'data_table') label = `📊 Table ${block.data.tableNumber}`;
        else label = `📝 Content (${block.source})`;
      } else {
        label = `❓ Q${sIdx+1}(${String.fromCharCode(97+bIdx)}) · ${block.type} · ${block.meta.marks}m`;
      }
      
      const isSelected = guidedActiveBlock && guidedActiveBlock.block.id === block.id;
      html += `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;border-radius:4px;margin-bottom:4px;cursor:pointer;background:${isSelected ? 'var(--accent-light)' : 'transparent'};color:${isSelected ? 'var(--accent)' : 'var(--text)'};font-size:12px;border:1px solid ${isSelected ? 'var(--accent)' : 'transparent'};" onclick="guidedEditBlock('${sec.id}','${block.id}')">
          <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px;">${label}</div>
          <button class="icon-btn" style="padding:2px;font-size:10px;" onclick="event.stopPropagation(); guidedDeleteBlock('${sec.id}','${block.id}')">✖</button>
        </div>
      `;
    });
    html += `
        <div style="display:flex;gap:4px;margin-top:8px;">
          <button class="sm-btn" style="flex:1;" onclick="guidedAddContent('${sec.id}')">+ Content</button>
          <button class="sm-btn" style="flex:1;" onclick="guidedAddQuestion('${sec.id}')">+ Question</button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

const commandTermsByStrand = {
  A: {
    i: { "1": ["Outline","State","Recall"], "3": ["Describe","State","Outline"], "5": ["Explain","Describe","Define"] },
    ii: { "1": ["Apply","Calculate","Suggest"], "3": ["Apply","Calculate","Solve"], "5": ["Apply","Calculate","Determine","Solve","Show","Derive"] },
    iii: { "1": ["Interpret"], "3": ["Analyse","Interpret"], "5": ["Analyse","Evaluate","Discuss","Compare","Justify"] }
  },
  B: {
    i: { "1": ["Outline","State"], "3": ["Describe","Outline"], "5": ["Explain","Describe"] },
    ii: { "1": ["Outline","Predict"], "3": ["Outline","Explain","Formulate"], "5": ["Formulate","Explain","Predict","Justify"] },
    iii: { "1": ["Outline","State"], "3": ["Describe","Outline"], "5": ["Explain","Describe"] },
    iv: { "1": ["Design"], "3": ["Design"], "5": ["Design"] }
  },
  C: {
    i: { "1": ["Present","Collect"], "3": ["Present","Organize"], "5": ["Present","Construct","Plot","Organize"] },
    ii: { "1": ["Interpret","Outline"], "3": ["Interpret","Describe"], "5": ["Interpret","Explain"] },
    iii: { "1": ["Discuss","State"], "3": ["Discuss","Outline"], "5": ["Evaluate","Discuss"] },
    iv: { "1": ["Discuss","State"], "3": ["Discuss","Outline"], "5": ["Evaluate","Discuss"] },
    v: { "1": ["Describe","Outline"], "3": ["Describe","Outline"], "5": ["Explain","Describe","Suggest"] }
  },
  D: {
    i: { "1": ["Summarize","State"], "3": ["Describe","Outline"], "5": ["Explain","Describe"] },
    ii: { "1": ["Describe","Summarize"], "3": ["Discuss","Analyse"], "5": ["Discuss","Evaluate","Analyse"] },
    iii: { "1": ["Apply"], "3": ["Apply"], "5": ["Apply","Explain"] },
    iv: { "1": ["Document"], "3": ["Document"], "5": ["Document"] }
  }
};

function getCommandTerms(criterion, strand, grade) {
  const yl = parseInt(grade) <= 7 ? "1" : parseInt(grade) <= 9 ? "3" : "5";
  const crit = criterion.charAt(0);
  return commandTermsByStrand[crit]?.[strand]?.[yl] || ["State"];
}

function updateCommandTerms() {
  if(!guidedActiveBlock || guidedActiveBlock.block.mode !== 'question') return;
  const grade = document.getElementById('shared-grade').value || '9';
  const block = guidedActiveBlock.block;
  const terms = getCommandTerms(block.meta.criterion, block.meta.strand, grade);
  
  const select = document.getElementById('guided-command-term');
  if(!select) return;
  select.innerHTML = terms.map(t => `<option value="${t}" ${t===block.meta.commandTerm?'selected':''}>${t}</option>`).join('');
  if(!terms.includes(block.meta.commandTerm)) {
    block.meta.commandTerm = terms[0];
    select.value = terms[0];
  }
}

function getAvailableReferences() {
  let refs = [];
  guidedSections.forEach(sec => {
    sec.blocks.forEach(b => {
      if(b.mode === 'content') {
        if(b.source === 'image') refs.push(`Figure ${b.data.figureNumber}`);
        if(b.source === 'data_table') refs.push(`Table ${b.data.tableNumber}`);
      }
    });
  });
  return refs;
}

function guidedEditBlock(sectionId, blockId) {
  const sec = guidedSections.find(s => s.id === sectionId);
  if(!sec) return;
  const block = sec.blocks.find(b => b.id === blockId);
  if(!block) return;
  
  guidedActiveBlock = { sectionId, block };
  guidedRenderTree(); // highlight
  
  const editor = document.getElementById('guided-block-editor');
  let html = `<div style="background:var(--white);border:1.5px solid var(--border);border-radius:12px;padding:24px;">`;
  
  if(block.mode === 'content') {
    html += `<h3 style="margin-bottom:16px;">Content Block</h3>`;
    html += `
      <div class="form-group"><label>Source Type</label>
        <select onchange="guidedActiveBlock.block.source = this.value; resetNumbering(); guidedEditBlock('${sectionId}','${blockId}');" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);">
          <option value="ai" ${block.source==='ai'?'selected':''}>AI Generate</option>
          <option value="provided" ${block.source==='provided'?'selected':''}>Paste Text</option>
          <option value="image" ${block.source==='image'?'selected':''}>Image</option>
          <option value="data_table" ${block.source==='data_table'?'selected':''}>Data Table</option>
          <option value="video" ${block.source==='video'?'selected':''}>Video</option>
          <option value="simulation" ${block.source==='simulation'?'selected':''}>Simulation</option>
        </select>
      </div>
    `;
    
    if(block.source === 'ai') {
      html += `
        <div class="form-group"><label>Prompt for AI</label>
          <textarea rows="4" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="Write a stimulus about a student investigating..." onchange="guidedActiveBlock.block.prompt = this.value">${block.prompt}</textarea>
        </div>
      `;
    } else if(block.source === 'provided') {
      html += `
        <div class="form-group"><label>Text Content</label>
          <textarea rows="6" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="Enter content here..." onchange="guidedActiveBlock.block.data.text = this.value">${block.data.text||''}</textarea>
        </div>
      `;
    } else if(block.source === 'image') {
      html += `
        <div class="form-group"><label>Image URL</label>
          <input type="text" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="https://..." value="${block.data.url||''}" onchange="guidedActiveBlock.block.data.url = this.value">
        </div>
        <div class="form-group"><label>Caption (Figure ${block.data.figureNumber})</label>
          <input type="text" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="Caption..." value="${block.data.caption||''}" onchange="guidedActiveBlock.block.data.caption = this.value">
        </div>
      `;
    } else if(block.source === 'data_table') {
      html += `<div style="padding:10px;background:var(--cream);border-radius:6px;font-size:12px;">Data table generation will be handled by the full editor. Just add instructions below.</div>`;
      html += `
        <div class="form-group" style="margin-top:10px;"><label>Table Instructions</label>
          <textarea rows="3" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="E.g. 2x4 table showing voltage and current" onchange="guidedActiveBlock.block.prompt = this.value">${block.prompt||''}</textarea>
        </div>
      `;
    } else if(block.source === 'video' || block.source === 'simulation') {
      html += `
        <div class="form-group"><label>Media URL</label>
          <input type="text" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="https://..." value="${block.data.url||''}" onchange="guidedActiveBlock.block.data.url = this.value">
        </div>
      `;
    }
    
  } else {
    // QUESTION BLOCK
    html += `<h3 style="margin-bottom:16px;">Question Block</h3>`;
    
    // Type Grid
    const types = ["MCQ", "Long Answer", "True / False", "Fill Text", "Match the Following", "Table", "Multi-Dropdown", "Split Answer", "Drawing", "Graph Plot"];
    html += `<div class="form-group"><label>Question Type</label><div style="display:flex;flex-wrap:wrap;gap:6px;">`;
    types.forEach(t => {
      const isSelected = block.type === t;
      html += `<button class="sm-btn" style="${isSelected?'background:var(--accent);color:white;':''}" onclick="guidedActiveBlock.block.type='${t}'; guidedEditBlock('${sectionId}','${blockId}');">${t}</button>`;
    });
    html += `</div></div>`;
    
    // Settings row
    html += `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:16px;">
      <div class="form-group"><label>Marks</label>
        <input type="number" min="1" max="20" value="${block.meta.marks}" onchange="guidedActiveBlock.block.meta.marks = Number(this.value)" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;">
      </div>
      <div class="form-group"><label>Criterion</label>
        <select onchange="guidedActiveBlock.block.meta.criterion = this.value; updateCommandTerms();" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;">
          <option value="A" ${block.meta.criterion==='A'?'selected':''}>A</option>
          <option value="B" ${block.meta.criterion==='B'?'selected':''}>B</option>
          <option value="C" ${block.meta.criterion==='C'?'selected':''}>C</option>
          <option value="D" ${block.meta.criterion==='D'?'selected':''}>D</option>
        </select>
      </div>
      <div class="form-group"><label>Strand</label>
        <select onchange="guidedActiveBlock.block.meta.strand = this.value; updateCommandTerms();" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;">
          <option value="i" ${block.meta.strand==='i'?'selected':''}>i</option>
          <option value="ii" ${block.meta.strand==='ii'?'selected':''}>ii</option>
          <option value="iii" ${block.meta.strand==='iii'?'selected':''}>iii</option>
          <option value="iv" ${block.meta.strand==='iv'?'selected':''}>iv</option>
          <option value="v" ${block.meta.strand==='v'?'selected':''}>v</option>
        </select>
      </div>
    </div>`;
    
    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
      <div class="form-group"><label>Command Term</label>
        <select id="guided-command-term" onchange="guidedActiveBlock.block.meta.commandTerm = this.value" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;"></select>
      </div>
      <div class="form-group"><label>Difficulty</label>
        <select onchange="guidedActiveBlock.block.meta.difficulty = this.value" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;">
          <option ${block.meta.difficulty==='Easy'?'selected':''}>Easy</option>
          <option ${block.meta.difficulty==='Medium'?'selected':''}>Medium</option>
          <option ${block.meta.difficulty==='Hard'?'selected':''}>Hard</option>
        </select>
      </div>
    </div>`;
    
    const refs = getAvailableReferences();
    html += `
      <div class="form-group"><label>Reference</label>
        <select onchange="guidedActiveBlock.block.references = this.value" style="width:100%;padding:8px;border:1px solid var(--border);border-radius:6px;">
          <option value="">None</option>
          ${refs.map(r => `<option value="${r}" ${block.references===r?'selected':''}>${r}</option>`).join('')}
        </select>
      </div>
    `;
    
    html += `
      <div class="form-group"><label>Teacher Prompt (Optional)</label>
        <textarea rows="3" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);" placeholder="What should this question ask about? E.g. Calculate the spring constant..." onchange="guidedActiveBlock.block.prompt = this.value">${block.prompt}</textarea>
      </div>
    `;
  }
  
  html += `</div>`;
  editor.innerHTML = html;
  if(block.mode === 'question') updateCommandTerms();
}

function buildGuidedPrompt(config, structure) {
  let prompt = `You are an IB MYP Physics teacher. Generate questions for the following exam structure.

EXAM DETAILS:
Grade: ${config.grade}
Chapters: ${config.chapters.join(', ')}
Topics: ${config.topics}
Criteria: ${config.criteria.join(', ')}
Global Context: ${config.gc}
Total Marks: ${config.totalMarks}

INSTRUCTIONS:
- Generate ONLY the [GENERATE] slots below
- Keep all [PROVIDED] content exactly as written
- Reference figures and tables by their numbers
- Use the specified command term for each question
- Mark schemes must use IB format: "Award X mark(s) for..."
- Question text must START with the command term

STRUCTURE:
`;

  structure.sections.forEach((sec, si) => {
    prompt += `\n=== Section ${si+1}: ${sec.name} ===\n`;
    sec.blocks.forEach((block) => {
      if (block.mode === 'content') {
        if (block.source === 'provided') {
          prompt += `[PROVIDED CONTENT]: ${block.data.text || block.data.url || 'Image: ' + block.data.caption}\n`;
        } else if (block.source === 'ai') {
          prompt += `[GENERATE CONTENT]: ${block.prompt}\n`;
        } else if (block.source === 'data_table') {
          prompt += `[GENERATE DATA TABLE]: ${block.prompt}\n`;
        } else if (block.source === 'image') {
          prompt += `[PROVIDED CONTENT]: Image URL=${block.data.url}\n`;
        }
        if (block.data.figureNumber) prompt += `(This is Figure ${block.data.figureNumber})\n`;
        if (block.data.tableNumber) prompt += `(This is Table ${block.data.tableNumber})\n`;
      } else if (block.mode === 'question') {
        prompt += `[GENERATE QUESTION]: Type=${block.type}, Marks=${block.meta.marks}, Criterion=${block.meta.criterion}, Strand=${block.meta.strand}, Difficulty=${block.meta.difficulty}, CommandTerm=${block.meta.commandTerm}`;
        if (block.prompt) prompt += `, TeacherPrompt="${block.prompt}"`;
        if (block.references) prompt += `, References="${block.references}"`;
        prompt += `\n`;
      }
    });
  });

  prompt += `\nReturn ONLY valid JSON with the same structure as before (sections + blocks array).`;
  return prompt;
}

async function guidedGenerateAll() {
  const btn = document.querySelector('#guided-tree-panel .btn-save');
  const status = document.getElementById('guided-status');
  
  const config = {
    assessmentType: document.getElementById('shared-assessment-type').value,
    grade: document.getElementById('shared-grade').value,
    chapters: getMultiSelectValues('shared-chapters'),
    topics: document.getElementById('shared-topics').value,
    criteria: getMultiSelectValues('shared-criteria'),
    gc: document.getElementById('shared-gc').value,
    dFactor: document.getElementById('shared-dfactor').value,
    totalMarks: document.getElementById('shared-total-marks').value,
    timeLimit: document.getElementById('shared-time-limit').value,
    heading: document.getElementById('shared-heading').value
  };
  
  if(!config.chapters.length) { alert('Please select at least one chapter'); return; }
  
  btn.disabled = true;
  btn.textContent = "⏳ Generating...";
  status.textContent = "Analyzing structure and generating content...";
  
  try {
    const promptText = buildGuidedPrompt(config, { sections: guidedSections });
    const result = await callAI(promptText); // Assumes callAI is globally available from exam-generator.js
    
    // We get a JSON result with { sections: [...] }. 
    // Wait, callAI returns raw text, we need to parse it? 
    // In exam-generator.js runGeneration handles parsing.
    
    // We should parse the JSON from callAI result
    let jsonStr = result.trim();
    if (jsonStr.startsWith('```json')) {
      jsonStr = jsonStr.substring(7, jsonStr.length - 3);
    } else if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.substring(3, jsonStr.length - 3);
    }
    
    const parsedData = JSON.parse(jsonStr);
    
    // Pass it to openSetInBuilder
    // Add config metadata
    parsedData.chapter = config.chapters.join(', ');
    parsedData.topic = config.topics;
    parsedData.heading = config.heading || (config.topics + " — " + config.criteria.join(', '));
    
    status.textContent = "Success! Opening in Builder...";
    setTimeout(() => {
      openSetInBuilder(parsedData);
      btn.disabled = false;
      btn.textContent = "⚡ Generate All Questions";
      status.textContent = "";
    }, 1000);
    
  } catch(e) {
    status.innerHTML = `<span style="color:red;">Error: ${e.message}</span>`;
    btn.disabled = false;
    btn.textContent = "⚡ Generate All Questions";
  }
}
