const fs = require('fs');
let html = fs.readFileSync('dp-chapter.html', 'utf8');

// 1. Add CSS
const newCSS = `
/* ── VISUAL REDESIGN STYLES ── */
.equation-box {
  background: var(--tint);
  border-left: 4px solid var(--accent);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  margin-top: 24px;
}
.equation-box-header {
  padding: 12px 16px;
  background: rgba(0,0,0,0.02);
  border-bottom: 1px solid var(--tint-border);
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 8px;
}
.eq-row {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.eq-row:last-child { border-bottom: none; }
.eq-formula {
  font-family: 'Courier New', monospace;
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
}
.eq-desc {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.5;
}

.layer-card {
  border-radius: 14px;
  padding: 24px 28px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.layer-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}
.layer-card-foundation {
  background: #FFF8EC;
  border: 1px solid #D4AF37;
}
[data-theme="dark"] .layer-card-foundation { background: rgba(212, 175, 55, 0.05); }

.layer-card-core {
  background: var(--card-bg);
  border: 1px solid var(--border);
}

.layer-card-extension {
  background: #F0F4F8;
  border: 1px solid #1B4965;
}
[data-theme="dark"] .layer-card-extension { background: rgba(27, 73, 101, 0.2); border-color: rgba(27, 73, 101, 0.5); }

.layer-card-title {
  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 600;
  margin: 12px 0 16px 0;
  color: var(--text);
}

.we-step-row {
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
}
.we-step-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--accent);
  min-width: 80px;
  padding-top: 2px;
}
.we-step-content {
  flex: 1;
  font-size: 14.5px;
  color: var(--text);
  line-height: 1.6;
}
.we-calc-box {
  background: #F8F6F1;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Courier New', monospace;
  font-weight: 600;
  color: var(--accent);
  margin-top: 8px;
  display: inline-block;
}
[data-theme="dark"] .we-calc-box { background: rgba(0,0,0,0.2); }
.we-final-answer {
  font-weight: 700;
  color: var(--green);
}

.practice-solution-box {
  background: #F5FFF5;
  border: 1px solid var(--green);
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}
[data-theme="dark"] .practice-solution-box { background: rgba(22, 163, 74, 0.05); }

.big-idea-box {
  border: 2px solid var(--accent);
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 24px;
  background: var(--card-bg);
  position: relative;
}
.big-idea-badge {
  position: absolute;
  top: -12px;
  left: 24px;
  background: var(--accent);
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.big-idea-text {
  font-family: Georgia, serif;
  font-size: 18px;
  line-height: 1.7;
  color: var(--text);
  font-style: italic;
  margin: 0;
}

.mistake-card {
  background: #FFF5F5;
  border-left: 4px solid var(--red);
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 16px;
}
[data-theme="dark"] .mistake-card { background: rgba(220, 38, 38, 0.05); }

.exam-corner-box {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  border: 1px solid var(--tint-border);
  margin-top: 24px;
}
.exam-corner-header {
  background: #1A1A1A;
  color: #FFFFFF;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
[data-theme="dark"] .exam-corner-header { background: #333; }
.exam-corner-body {
  background: var(--card-bg);
  padding: 24px;
}
.examiner-tip-box {
  background: #FFF8EC;
  border: 1px solid #D4AF37;
  border-radius: 8px;
  padding: 14px 18px;
  margin-top: 16px;
}
[data-theme="dark"] .examiner-tip-box { background: rgba(212, 175, 55, 0.05); }

/* ── END REDESIGN STYLES ── */
</style>
`;
html = html.replace('</style>', newCSS);

// We need to replace the render functions
const replacementScript = `
function renderActiveSubtopic() {
  const contentArea = document.getElementById('contentArea');
  contentArea.innerHTML = '';
  
  if (!currentTopicData || !currentTopicData.subtopics) return;
  
  const sub = currentTopicData.subtopics[currentLessonIdx];
  if (!sub) return;
  
  const subtopicContainer = document.createElement('div');
  subtopicContainer.className = 'lesson active';
  subtopicContainer.id = \`subtopic-\${currentLessonIdx}\`;
  
  // Banner
  const topicLevel = currentTopicData.level ? currentTopicData.level.toLowerCase() : '';
  const isHlOnly = topicLevel.includes('hl only');
  const isSlOnly = topicLevel.includes('sl only');
  const levelSwitchHtml = (isHlOnly || isSlOnly) 
    ? \`<span style="font-size: 11.5px; font-weight: 600; color: var(--text3);">\${isHlOnly ? 'Higher Level (AHL) Topic' : 'Standard Level (SL) Topic'}</span>\`
    : \`<span style="font-size: 11.5px; font-weight: 600; cursor: pointer; text-decoration: none; color: var(--accent2);" onclick="setScopeLevel('\${currentLevel === 'sl' ? 'hl' : 'sl'}')">Switch to \${currentLevel === 'sl' ? 'HL' : 'SL'}</span>\`;

  const bannerHtml = \`
    <div class="glass-card" style="margin-top: 0; margin-bottom: 20px; padding: 12px 16px; border-color: var(--tint-border); background: var(--tint); display: flex; align-items: center; justify-content: space-between; font-size: 13px; color: var(--text2); border-radius: 12px;">
      <span>👁️ Active View: <strong>\${currentLevel.toUpperCase()}</strong> mode · Ability: <strong>\${currentAbility.charAt(0).toUpperCase() + currentAbility.slice(1)}</strong></span>
      \${levelSwitchHtml}
    </div>
  \`;
  
  // Hero Header
  const headerHtml = \`
    <div class="lesson-header">
      <div class="lesson-badge">
        <span class="badge-topic">\${currentTopicData.code}</span>
        <span class="badge-sl">\${sub.level}</span>
        \${sub.scope === 'hl' ? \`<span class="glass-badge-ahl">AHL ONLY</span>\` : \`<span class="badge-sl" style="background: rgba(22,163,74,0.08); color: var(--green);">SL + HL</span>\`}
      </div>
      <h1>Subtopic \${currentTopicData.code}.\${sub.num}: \${sub.title}</h1>
    </div>
  \`;
  
  // Big Idea
  const bigIdeaHtml = \`
    <div class="big-idea-box">
      <div class="big-idea-badge">The Big Idea</div>
      <p class="big-idea-text">"\${sub.bigIdea}"</p>
    </div>
  \`;
  
  // Layer Navigation Tabs
  const layerTabsHtml = \`
    <div class="practice-more" style="justify-content: flex-start; margin: 20px 0; padding: 10px 16px; background: rgba(0,0,0,0.01); border-radius: 12px; border: 1px dashed var(--tint-border); gap: 8px;">
      <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text3); margin-right: 8px; align-self: center;">Jump to Layer:</span>
      <a href="#card-foundation" onclick="setAbilityLevel('foundation'); return true;" style="padding: 6px 14px; border-radius: 8px; font-size: 11.5px;">Foundation</a>
      <a href="#card-core" onclick="setAbilityLevel('core'); return true;" style="padding: 6px 14px; border-radius: 8px; font-size: 11.5px;">Core</a>
      <a href="#card-extension" onclick="setAbilityLevel('extension'); return true;" style="padding: 6px 14px; border-radius: 8px; font-size: 11.5px;">Extension</a>
    </div>
  \`;
  
  // Concept cards content helpers
  const fCheckQuestions = sub.foundation.checkQuestions && sub.foundation.checkQuestions.length > 0 ? \`
    <div style="margin-top: 20px; border-top: 1px solid var(--border); padding-top: 16px;">
      <h4 style="font-size: 14px; font-weight: 600; margin-bottom: 12px; color: var(--text);">Quick Check</h4>
      \${sub.foundation.checkQuestions.map((cq, cqIdx) => \`
        <div style="margin-bottom: 12px; background: rgba(0,0,0,0.01); border: 1.5px solid var(--border); border-radius: 8px; padding: 12px;">
          <p style="font-weight: 600; font-size: 13.5px; margin-bottom: 8px;">Q: \${cq.question}</p>
          <button class="nav-btn" style="padding: 4px 12px; font-size: 11px;" onclick="toggleAnswer('check-ans-\${cqIdx}', this, event)">Show Answer</button>
          <div id="check-ans-\${cqIdx}" style="display: none; margin-top: 8px; font-size: 13.5px; color: var(--green); font-weight: 500;">
            A: \${cq.answer}
          </div>
        </div>
      \`).join('')}
    </div>
  \` : '';
  
  const foundationHtml = \`
    <div class="layer-card layer-card-foundation concept-layer-card" id="card-foundation" data-layer="foundation" onclick="handleCardClick('foundation', event)">
      <div class="concept-card-header" style="margin-bottom: 0;">
        <div class="concept-card-title-group">
          <span class="concept-card-badge badge-foundation">FOUNDATION</span>
          <h3 class="layer-card-title">\${sub.foundation.title}</h3>
        </div>
        <span class="concept-card-trigger" id="trigger-foundation">Expand ▼</span>
      </div>
      <div class="concept-card-body" id="body-foundation">
        <div style="font-size: 14.5px; line-height: 1.8; color: var(--text2);">\${sub.foundation.content}</div>
        <div class="nos-box" style="margin-top: 16px; border: 1.5px solid rgba(13,148,136,0.15); background: rgba(13,148,136,0.02);">
          <div class="nos-box-title" style="color: #0d9488;">Foundation Summary</div>
          <div style="font-size: 13.5px; line-height: 1.6; color: var(--text2);">\${sub.foundation.summary}</div>
        </div>
        \${fCheckQuestions}
      </div>
    </div>
  \`;
  
  const coreAhlHtml = (currentLevel === 'hl' && sub.core.ahlContent) ? \`
    <div style="margin-top: 24px; border-top: 2px dashed rgba(59, 130, 246, 0.2); padding-top: 20px;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
        <span class="glass-badge-ahl">AHL Content</span>
      </div>
      <div style="font-size: 14.5px; line-height: 1.8; color: var(--text2);">\${sub.core.ahlContent}</div>
      \${sub.core.ahlKeyPoints && sub.core.ahlKeyPoints.length > 0 ? \`
        <div style="margin-top: 14px;">
          <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: var(--accent2); letter-spacing: 0.5px; margin-bottom: 8px;">AHL Key Takeaways</h4>
          <ul style="padding-left: 20px;">
            \${sub.core.ahlKeyPoints.map(kp => \`<li>\${kp}</li>\`).join('')}
          </ul>
        </div>
      \` : ''}
      \${sub.core.ahlExamTrap ? \`
        <div class="mistake-card" style="margin-top: 16px;">
          <div style="font-weight: 700; color: var(--red); margin-bottom: 6px; font-size: 12px; text-transform: uppercase;">🚨 AHL Exam Trap</div>
          <p style="margin-bottom: 6px;"><strong style="color: var(--red);">❌ Common Misconception:</strong> \${sub.core.ahlExamTrap.wrong}</p>
          <p style="margin-bottom: 0;"><strong style="color: var(--green);">✅ Correct Physics:</strong> \${sub.core.ahlExamTrap.correct}</p>
        </div>
      \` : ''}
    </div>
  \` : '';
  
  const coreHtml = \`
    <div class="layer-card layer-card-core concept-layer-card" id="card-core" data-layer="core" onclick="handleCardClick('core', event)">
      <div class="concept-card-header" style="margin-bottom: 0;">
        <div class="concept-card-title-group">
          <span class="concept-card-badge badge-core">CORE</span>
          <h3 class="layer-card-title">\${sub.core.title}</h3>
        </div>
        <span class="concept-card-trigger" id="trigger-core">Expand ▼</span>
      </div>
      <div class="concept-card-body" id="body-core">
        <div style="font-size: 14.5px; line-height: 1.8; color: var(--text2);">\${sub.core.content}</div>
        <div style="margin-top: 16px;">
          <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: var(--accent); letter-spacing: 0.5px; margin-bottom: 8px;">Key Takeaways</h4>
          <ul style="padding-left: 20px;">
            \${sub.core.keyPoints.map(kp => \`<li>\${kp}</li>\`).join('')}
          </ul>
        </div>
        \${sub.core.examTrap ? \`
          <div class="mistake-card" style="margin-top: 16px;">
            <div style="font-weight: 700; color: var(--red); margin-bottom: 6px; font-size: 12px; text-transform: uppercase;">🚨 Exam Trap</div>
            <p style="margin-bottom: 6px;"><strong style="color: var(--red);">❌ Common Misconception:</strong> \${sub.core.examTrap.wrong}</p>
            <p style="margin-bottom: 0;"><strong style="color: var(--green);">✅ Correct Physics:</strong> \${sub.core.examTrap.correct}</p>
          </div>
        \` : ''}
        \${coreAhlHtml}
      </div>
    </div>
  \`;
  
  const extensionHtml = \`
    <div class="layer-card layer-card-extension concept-layer-card" id="card-extension" data-layer="extension" onclick="handleCardClick('extension', event)">
      <div class="concept-card-header" style="margin-bottom: 0;">
        <div class="concept-card-title-group">
          <span class="concept-card-badge badge-extension">EXTENSION</span>
          <h3 class="layer-card-title">\${sub.extension.title}</h3>
        </div>
        <span class="concept-card-trigger" id="trigger-extension">Expand ▼</span>
      </div>
      <div class="concept-card-body" id="body-extension">
        <div style="font-size: 14.5px; line-height: 1.8; color: var(--text2);">\${sub.extension.content}</div>
        \${sub.extension.connections && sub.extension.connections.length > 0 ? \`
          <div style="margin-top: 16px;">
            <h4 style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: #7c3aed; letter-spacing: 0.5px; margin-bottom: 8px;">Syllabus Connections</h4>
            <ul style="padding-left: 20px;">
              \${sub.extension.connections.map(c => \`<li>\${c}</li>\`).join('')}
            </ul>
          </div>
        \` : ''}
      </div>
    </div>
  \`;
  
  const simHtml = sub.simulation ? \`
    <div class="glass-card" style="border-left: 4px solid var(--accent2); margin-top: 24px; padding: 24px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent2); font-weight: 700; margin-bottom: 12px;">💻 Interactive Simulator</div>
      <h3 style="font-size: 20px; margin-bottom: 8px; font-weight: 600;">\${sub.simulation.title}</h3>
      <p style="font-size: 13px; color: var(--text3); margin-bottom: 20px;">Source: \${sub.simulation.source}</p>
      
      <div style="background: rgba(0,0,0,0.02); border: 1px dashed var(--tint-border); border-radius: 12px; padding: 20px; margin-bottom: 20px;">
        <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 12px; color: var(--text);">Quick Exploration Guidelines:</h4>
        <ol style="margin-bottom: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
          \${sub.simulation.instructions.map(inst => \`<li>\${inst}</li>\`).join('')}
        </ol>
      </div>
      
      \${sub.simulation.url ? \`
        <button class="glass-btn" style="background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); color: var(--accent2);" onclick="window.open('\${sub.simulation.url}', '_blank')">
          Open Simulation ↗
        </button>
      \` : ''}
    </div>
  \` : '';
  
  const videoHtml = sub.video ? \`
    <div class="glass-card" style="border-left: 4px solid var(--red); margin-top: 24px; padding: 24px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--red); font-weight: 700; margin-bottom: 12px;">📺 Watch & Learn</div>
      <h3 style="font-size: 20px; margin-bottom: 8px; font-weight: 600;">\${sub.video.title}</h3>
      <p style="font-size: 13px; color: var(--text3); margin-bottom: 20px;">Duration: \${sub.video.duration} · \${sub.video.description}</p>
      
      \${sub.video.embedId ? \`
        <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; border-radius: 12px; overflow: hidden; border: 1px solid var(--tint-border);">
          <iframe src="https://www.youtube.com/embed/\${sub.video.embedId}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
        </div>
      \` : \`
        <div style="padding: 40px; text-align: center; background: rgba(0,0,0,0.02); border-radius: 12px; border: 1px dashed var(--tint-border);">
          <span style="font-size: 24px; margin-bottom: 12px; display: block;">⏳</span>
          <div style="font-weight: 600; color: var(--text2);">Video Coming Soon</div>
        </div>
      \`}
    </div>
  \` : '';
  
  const equationsHtml = \`
    <div class="equation-box">
      <div class="equation-box-header">
        📐 Key Equations
      </div>
      <div style="display: flex; flex-direction: column;">
        \${sub.equations && sub.equations.length > 0 ? sub.equations.map(eq => \`
          <div class="eq-row">
            <div class="eq-formula">\${eq.formula}</div>
            <div class="eq-desc">\${eq.description}</div>
          </div>
        \`).join('') : '<div style="padding: 16px; color: var(--text3); font-style: italic;">No equations for this subtopic</div>'}
        
        <!-- AHL Equations (Only in HL Mode) -->
        \${(currentLevel === 'hl' && sub.ahlEquations && sub.ahlEquations.length > 0) ? sub.ahlEquations.map(eq => \`
          <div class="eq-row" style="background: rgba(59, 130, 246, 0.02);">
            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 4px;">
              <span class="glass-badge-ahl" style="font-size: 9px; padding: 2px 6px;">AHL</span>
            </div>
            <div class="eq-formula" style="color: var(--accent2);">\${eq.formula}</div>
            <div class="eq-desc">\${eq.description}</div>
          </div>
        \`).join('') : ''}
      </div>
    </div>
  \`;
  
  subtopicContainer.innerHTML = \`
    \${bannerHtml}
    \${headerHtml}
    \${renderChecklistProgress(sub)}
    \${bigIdeaHtml}
    \${layerTabsHtml}
    \${foundationHtml}
    \${coreHtml}
    \${extensionHtml}
    \${simHtml}
    \${videoHtml}
    \${equationsHtml}
    \${renderWorkedExamples(sub.workedExamples)}
    \${renderPracticeProblems(sub.practiceProblems)}
    \${renderCommonMistakes(sub.commonMistakes)}
    \${renderExamCorner(sub.examCorner, sub.ahlExamCorner)}
    \${renderChecklist(sub)}
    \${renderFooterNav()}
  \`;
  
  contentArea.appendChild(subtopicContainer);
  
  // Set initial visible classes and heights based on currentAbility level
  setAbilityLevel(currentAbility);
  
  // Update sidebar checklist aggregate progress
  updateSidebarChecklistProgress();
}

function renderWorkedExamples(workedExamples) {
  if (!workedExamples || workedExamples.length === 0) return '';
  
  // Filter by scope
  const filtered = workedExamples.filter(we => currentLevel === 'hl' || we.scope !== 'hl');
  if (filtered.length === 0) return '';
  
  return \`
    <div class="glass-card" style="border-left: 4px solid var(--green); margin-top: 24px; padding: 24px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--green); font-weight: 700; margin-bottom: 20px;">📝 Worked Examples</div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        \${filtered.map((we, idx) => {
          const isMatching = we.level === currentAbility;
          const isAhl = we.scope === 'hl';
          
          return \`
            <div class="worked-example-card worked-example \${isMatching ? 'expanded' : 'collapsed'}" id="we-card-\${idx}" style="margin: 0; padding: 20px; border-radius: 12px; border-color: \${isAhl ? 'rgba(59, 130, 246, 0.3)' : 'rgba(22, 163, 74, 0.2)'};">
              <div style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="toggleWorkedExample(\${idx})">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span class="concept-card-badge badge-\${we.level}">\${we.level.toUpperCase()}</span>
                  \${isAhl ? \`<span class="glass-badge-ahl">AHL</span>\` : ''}
                  <strong style="font-size: 16px; color: var(--text);">\${we.title}</strong>
                </div>
                <button class="nav-btn" style="padding: 6px 14px; font-size: 11px; border-radius: 20px;" id="we-btn-\${idx}">\${isMatching ? 'Hide Steps ▲' : 'Show Steps ▼'}</button>
              </div>
              
              <div class="we-body" id="we-body-\${idx}" style="display: \${isMatching ? 'block' : 'none'}; margin-top: 20px; border-top: 1px solid var(--border); padding-top: 20px;">
                \${we.steps.map(step => \`
                  <div class="we-step-row">
                    <div class="we-step-label">\${step.label}</div>
                    <div class="we-step-content">
                      \${step.isEquation ? \`
                        <div class="we-calc-box">\${step.text}</div>
                      \` : step.text}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          \`;
        }).join('')}
      </div>
    </div>
  \`;
}

function renderPracticeProblems(practiceProblems) {
  if (!practiceProblems || practiceProblems.length === 0) return '';
  
  const filtered = practiceProblems.filter(p => currentLevel === 'hl' || p.scope !== 'hl');
  if (filtered.length === 0) return '';
  
  return \`
    <div class="glass-card" style="border-left: 4px solid var(--accent2); margin-top: 24px; padding: 24px;">
      <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent2); font-weight: 700; margin-bottom: 20px;">✍️ Practice Problems</div>
      
      <div style="display: flex; flex-direction: column; gap: 16px;">
        \${filtered.map((p, idx) => {
          const isAhl = p.scope === 'hl';
          let highlightClass = '';
          if (currentAbility === 'foundation' && p.difficulty === 'easy') {
            highlightClass = 'highlighted-easy';
          } else if (currentAbility === 'core' && p.difficulty === 'medium') {
            highlightClass = 'highlighted-medium';
          } else if (currentAbility === 'extension' && p.difficulty === 'hard') {
            highlightClass = 'highlighted-hard';
          }
          
          return \`
            <div class="practice-problem-card practice-box \${highlightClass}" id="practice-card-\${idx}" style="margin: 0; padding: 20px; border-radius: 12px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="concept-card-badge badge-\${p.difficulty === 'easy' ? 'foundation' : (p.difficulty === 'medium' ? 'core' : 'extension')}" style="font-size: 11px;">\${p.difficulty.toUpperCase()}</span>
                  \${isAhl ? \`<span class="glass-badge-ahl">AHL</span>\` : ''}
                </div>
                <span style="font-size: 12px; color: var(--text3); font-weight: 600;">Problem \${idx + 1}</span>
              </div>
              
              <div style="font-size: 15px; color: var(--text); margin-bottom: 20px; line-height: 1.7;">
                \${p.question}
              </div>
              
              <button class="glass-btn" style="padding: 8px 16px; font-size: 12px; background: rgba(22, 163, 74, 0.05); border-color: rgba(22, 163, 74, 0.2); color: var(--green);" onclick="toggleAnswer('practice-ans-\${idx}', this, event)">Show Solution</button>
              
              <div class="sol-body practice-solution-box" id="practice-ans-\${idx}" style="display: none;">
                <strong style="color: var(--text); display: block; margin-bottom: 8px;">Solution:</strong>
                <span style="font-size: 14.5px; line-height: 1.6;">\${p.solution}</span>
              </div>
            </div>
          \`;
        }).join('')}
      </div>
      
      <div class="practice-more" style="margin-top: 24px; margin-bottom: 0;">
        <a href="dp-quiz.html?topic=\${activeTopicCode}">📝 Paper 1A: MCQs</a>
        <a href="dp-past-paper.html?topic=\${activeTopicCode}&paper=1B">📊 Paper 1B: Data-Based</a>
        <a href="dp-past-paper.html?topic=\${activeTopicCode}&paper=2">✍️ Paper 2: Extended</a>
        <a href="dp-flashcards.html?topic=\${activeTopicCode}">🧠 Flashcards</a>
      </div>
    </div>
  \`;
}

function renderCommonMistakes(commonMistakes) {
  if (!commonMistakes || commonMistakes.length === 0) return '';
  
  return \`
    <div style="margin-top: 32px;">
      <h3 style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.5px;">🚨 Common Traps & Mistakes</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        \${commonMistakes.map(cm => \`
          <div class="mistake-card">
            <p style="margin-bottom: 8px; font-size: 14.5px;"><strong style="color: var(--red);">❌ Wrong:</strong> \${cm.wrong}</p>
            <p style="margin-bottom: 8px; font-size: 13.5px; color: var(--text2); font-style: italic; padding-left: 24px;">\${cm.explanation}</p>
            <p style="margin-bottom: 0; font-size: 14.5px;"><strong style="color: var(--green);">✅ Right:</strong> \${cm.correct}</p>
          </div>
        \`).join('')}
      </div>
    </div>
  \`;
}

function renderExamCorner(examCorner, ahlExamCorner) {
  if (!examCorner && !ahlExamCorner) return '';
  
  let html = \`
    <div class="exam-corner-box">
      <div class="exam-corner-header">
        <span style="font-weight: 700; letter-spacing: 1px;">🏆 IB-STYLE QUESTION</span>
      </div>
      <div class="exam-corner-body">
        <div style="display: flex; flex-direction: column; gap: 32px;">
  \`;
  
  if (examCorner) {
    html += \`
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <span class="concept-card-badge" style="background: rgba(124, 58, 237, 0.08); color: #7c3aed; border: 1px solid rgba(124, 58, 237, 0.2);">Standard Level</span>
          <span style="font-size: 13px; font-weight: 700; color: var(--text3);">[\${examCorner.marks} marks]</span>
        </div>
        
        <p style="font-size: 15px; color: var(--text); line-height: 1.7; margin-bottom: 20px;">
          \${examCorner.question}
        </p>
        
        <button class="nav-btn" style="padding: 8px 16px; font-size: 12px; border-radius: 8px;" onclick="toggleAnswer('exam-ans-sl', this, event)">Show Model Answer</button>
        
        <div class="sol-body" id="exam-ans-sl" style="display: none; margin-top: 20px;">
          <strong style="display: block; font-size: 13px; color: var(--text2); margin-bottom: 8px;">Model Answer:</strong>
          <div style="font-family: var(--font-mono); font-size: 14px; background: rgba(0,0,0,0.03); padding: 16px; border-radius: 8px; color: var(--text); line-height: 1.6;">
            \${examCorner.modelAnswer}
          </div>
          <div class="examiner-tip-box">
            <strong style="color: #d97706; display: block; margin-bottom: 4px;">💡 Examiner Tip:</strong>
            <span style="font-size: 14px; color: var(--text2); line-height: 1.5;">\${examCorner.examinerTip}</span>
          </div>
        </div>
      </div>
    \`;
  }
  
  if (currentLevel === 'hl' && ahlExamCorner) {
    html += \`
      <div style="border-top: 1px dashed var(--tint-border); padding-top: 32px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <span class="glass-badge-ahl">Higher Level (AHL)</span>
          <span style="font-size: 13px; font-weight: 700; color: var(--text3);">[\${ahlExamCorner.marks} marks]</span>
        </div>
        
        <p style="font-size: 15px; color: var(--text); line-height: 1.7; margin-bottom: 20px;">
          \${ahlExamCorner.question}
        </p>
        
        <button class="nav-btn" style="padding: 8px 16px; font-size: 12px; border-radius: 8px;" onclick="toggleAnswer('exam-ans-hl', this, event)">Show Model Answer</button>
        
        <div class="sol-body" id="exam-ans-hl" style="display: none; margin-top: 20px;">
          <strong style="display: block; font-size: 13px; color: var(--text2); margin-bottom: 8px;">Model Answer:</strong>
          <div style="font-family: var(--font-mono); font-size: 14px; background: rgba(0,0,0,0.03); padding: 16px; border-radius: 8px; color: var(--text); line-height: 1.6;">
            \${ahlExamCorner.modelAnswer}
          </div>
          <div class="examiner-tip-box">
            <strong style="color: #d97706; display: block; margin-bottom: 4px;">💡 Examiner Tip:</strong>
            <span style="font-size: 14px; color: var(--text2); line-height: 1.5;">\${ahlExamCorner.examinerTip}</span>
          </div>
        </div>
      </div>
    \`;
  }
  
  html += \`
        </div>
      </div>
    </div>
  \`;
  return html;
}
`;

const regex = /function renderActiveSubtopic\(\) \{[\s\S]*?function renderExamCorner[^}]*\}[^}]*\}/;
html = html.replace(regex, replacementScript);

fs.writeFileSync('dp-chapter.html', html, 'utf8');
console.log('Successfully refactored render templates and injected CSS!');
