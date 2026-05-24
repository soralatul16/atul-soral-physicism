/**
 * Graphing Display Calculator (GDC) for Physicism
 * Self-contained component providing a TI-84/Casio fx-CG50 level calculator
 * Phase 1: Calculator Mode (Scientific Calculator)
 */

(function() {
  // Prevent double injection
  if (document.getElementById('gdcModal')) return;

  // 1. Dynamically load CSS if not already loaded
  if (!document.querySelector('link[href*="gdc.css"]')) {
    // Find basePath from this script's src path
    const scriptTag = document.querySelector('script[src*="gdc.js"]');
    let basePath = 'js/';
    if (scriptTag) {
      const src = scriptTag.getAttribute('src');
      const idx = src.lastIndexOf('gdc.js');
      if (idx !== -1) {
        basePath = src.substring(0, idx);
      }
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = basePath + 'gdc.css';
    document.head.appendChild(link);
  }

  // 2. Inject GDC HTML Structure
  const modalHTML = `
    <div id="gdcModal" class="gdc-modal">
      <div class="gdc-header" id="gdcHeader">
        <div class="gdc-title">
          <span>🧮 GDC Calculator</span>
        </div>
        <div class="gdc-window-controls">
          <button class="gdc-control-btn" id="gdcMinBtn" title="Minimize">—</button>
          <button class="gdc-control-btn" id="gdcMaxBtn" title="Maximize">⬜</button>
          <button class="gdc-control-btn close-btn" id="gdcCloseBtn" title="Close">✕</button>
        </div>
      </div>
      
      <div class="gdc-tabs">
        <button class="gdc-tab-btn active" data-tab="calc">Calculator</button>
        <button class="gdc-tab-btn" data-tab="graph">Graph</button>
        <button class="gdc-tab-btn" data-tab="table">Table</button>
        <button class="gdc-tab-btn" data-tab="regression">Regression</button>
      </div>
      
      <div class="gdc-content">
        <!-- CALCULATOR MODE PANEL -->
        <div id="gdcPanelCalc" class="gdc-panel active">
          <div class="gdc-calc-screen">
            <div class="gdc-mode-indicator" id="gdcModeIndicator">DEG</div>
            <div class="gdc-history-container" id="gdcHistory"></div>
            <div class="gdc-input-line" id="gdcInput"></div>
            <div class="gdc-result-line" id="gdcResult">0</div>
            <div class="gdc-fraction-line" id="gdcFraction"></div>
          </div>
          <div class="gdc-calc-keypad" id="gdcKeypad">
            <!-- Row 1 -->
            <button class="gdc-key func ctrl" data-action="toggle-deg">DEG</button>
            <button class="gdc-key func" data-insert="sin(">sin</button>
            <button class="gdc-key func" data-insert="cos(">cos</button>
            <button class="gdc-key func" data-insert="tan(">tan</button>
            <button class="gdc-key func" data-insert="π">π</button>

            <!-- Row 2 -->
            <button class="gdc-key func" data-insert="sin⁻¹(">sin⁻¹</button>
            <button class="gdc-key func" data-insert="cos⁻¹(">cos⁻¹</button>
            <button class="gdc-key func" data-insert="tan⁻¹(">tan⁻¹</button>
            <button class="gdc-key func" data-insert="e">e</button>
            <button class="gdc-key func ctrl" data-insert="E">EXP</button>

            <!-- Row 3 -->
            <button class="gdc-key func" data-action="square">x²</button>
            <button class="gdc-key func" data-insert="√(">√</button>
            <button class="gdc-key func" data-insert="^">xⁿ</button>
            <button class="gdc-key func" data-insert="log(">log</button>
            <button class="gdc-key func" data-insert="ln(">ln</button>

            <!-- Row 4 -->
            <button class="gdc-key func" data-insert="(">(</button>
            <button class="gdc-key func" data-insert=")">)</button>
            <button class="gdc-key func ctrl" data-action="toggle-fraction">F◀▶D</button>
            <button class="gdc-key ctrl clr" data-action="backspace">⌫</button>
            <button class="gdc-key ctrl clr" data-action="clear">C</button>

            <!-- Row 5 -->
            <button class="gdc-key num" data-insert="7">7</button>
            <button class="gdc-key num" data-insert="8">8</button>
            <button class="gdc-key num" data-insert="9">9</button>
            <button class="gdc-key op" data-insert="÷">÷</button>
            <button class="gdc-key func" data-action="negate">±</button>

            <!-- Row 6 -->
            <button class="gdc-key num" data-insert="4">4</button>
            <button class="gdc-key num" data-insert="5">5</button>
            <button class="gdc-key num" data-insert="6">6</button>
            <button class="gdc-key op" data-insert="×">×</button>
            <button class="gdc-key ctrl" data-insert="ANS">ANS</button>

            <!-- Row 7 & 8 -->
            <button class="gdc-key num" data-insert="1">1</button>
            <button class="gdc-key num" data-insert="2">2</button>
            <button class="gdc-key num" data-insert="3">3</button>
            <button class="gdc-key op" data-insert="-">-</button>
            <button class="gdc-key eq" data-action="equal" style="grid-row: span 2; height: 100%;">=</button>

            <button class="gdc-key num" data-insert="0">0</button>
            <button class="gdc-key num" data-insert=".">.</button>
            <button class="gdc-key func" data-insert="/100">%</button>
            <button class="gdc-key op" data-insert="+">+</button>
          </div>
        </div>

        <!-- GRAPH MODE PANEL -->
        <div id="gdcPanelGraph" class="gdc-panel">
          <div class="gdc-graph-equations">
            <div class="gdc-eq-row">
              <span class="gdc-eq-badge y1">y₁=</span>
              <input type="text" class="gdc-eq-input" id="gdcEq1" placeholder="Type function of x" value="2x">
              <label class="gdc-checkbox-label"><input type="checkbox" id="gdcShow1" checked><span></span></label>
            </div>
            <div class="gdc-eq-row">
              <span class="gdc-eq-badge y2">y₂=</span>
              <input type="text" class="gdc-eq-input" id="gdcEq2" placeholder="Type function of x" value="">
              <label class="gdc-checkbox-label"><input type="checkbox" id="gdcShow2" checked><span></span></label>
            </div>
            <div class="gdc-eq-row">
              <span class="gdc-eq-badge y3">y₃=</span>
              <input type="text" class="gdc-eq-input" id="gdcEq3" placeholder="Type function of x" value="">
              <label class="gdc-checkbox-label"><input type="checkbox" id="gdcShow3" checked><span></span></label>
            </div>
            
            <div class="gdc-graph-controls">
              <button class="gdc-graph-btn" id="gdcWindowBtn">📐 Window</button>
              <button class="gdc-graph-btn" id="gdcTraceBtn">📍 Trace: OFF</button>
              <button class="gdc-graph-btn" id="gdcRootsBtn">🎯 Roots</button>
              <button class="gdc-graph-btn" id="gdcIntersectBtn">🔗 Intersect</button>
              <button class="gdc-graph-btn" id="gdcClearGraphBtn">🧹 Clear</button>
              <button class="gdc-graph-btn plot-btn" id="gdcPlotBtn">📈 Plot</button>
            </div>
          </div>
          
          <div class="gdc-helper-keys">
            <button class="gdc-helper-key" data-key="x">x</button>
            <button class="gdc-helper-key" data-key="^">^</button>
            <button class="gdc-helper-key" data-key="sin(">sin</button>
            <button class="gdc-helper-key" data-key="cos(">cos</button>
            <button class="gdc-helper-key" data-key="tan(">tan</button>
            <button class="gdc-helper-key" data-key="√(">√</button>
            <button class="gdc-helper-key" data-key="π">π</button>
            <button class="gdc-helper-key" data-key="e">e</button>
            <button class="gdc-helper-key" data-key="(">(</button>
            <button class="gdc-helper-key" data-key=")">)</button>
          </div>

          <div class="gdc-canvas-container" id="gdcCanvasContainer">
            <canvas id="gdcCanvas"></canvas>
            
            <!-- Window Settings Overlay -->
            <div class="gdc-window-settings" id="gdcWindowSettings">
              <h4>Window Settings</h4>
              <div class="gdc-settings-grid">
                <div><label>Xmin</label><input type="number" id="gdcXmin" value="-10" step="any"></div>
                <div><label>Xmax</label><input type="number" id="gdcXmax" value="10" step="any"></div>
                <div><label>Xscl</label><input type="number" id="gdcXscl" value="1" step="any"></div>
                <div><label>Ymin</label><input type="number" id="gdcYmin" value="-10" step="any"></div>
                <div><label>Ymax</label><input type="number" id="gdcYmax" value="10" step="any"></div>
                <div><label>Yscl</label><input type="number" id="gdcYscl" value="1" step="any"></div>
              </div>
              <div class="gdc-settings-actions">
                <button class="gdc-settings-btn" id="gdcResetWindow">Reset [-10,10]</button>
                <button class="gdc-settings-btn primary" id="gdcApplyWindow">Apply</button>
              </div>
            </div>

            <!-- Trace Tooltip -->
            <div class="gdc-trace-tooltip" id="gdcTraceTooltip"></div>
          </div>
        </div>

        <!-- TABLE MODE PANEL -->
        <div id="gdcPanelTable" class="gdc-panel">
          <div class="gdc-table-settings">
            <div class="gdc-tbl-input-row">
              <div><label>Start X</label><input type="number" id="gdcTblStart" value="0" step="any"></div>
              <div><label>Step (Δ)</label><input type="number" id="gdcTblStep" value="1" step="any"></div>
              <button class="gdc-graph-btn primary" id="gdcTblGenBtn">📋 Generate</button>
            </div>
          </div>
          <div class="gdc-table-container">
            <table id="gdcTable">
              <thead>
                <tr>
                  <th>x</th>
                  <th class="y1-header">y₁</th>
                  <th class="y2-header">y₂</th>
                  <th class="y3-header">y₃</th>
                </tr>
              </thead>
              <tbody id="gdcTableBody">
                <!-- Populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- REGRESSION MODE PANEL -->
        <div id="gdcPanelRegression" class="gdc-panel">
          <div class="gdc-regression-container">
            <div class="gdc-reg-data">
              <h5>Data Points (L₁, L₂)</h5>
              <div class="gdc-reg-table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>X</th>
                      <th>Y</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="gdcRegTableBody">
                    <!-- Dynamic rows -->
                  </tbody>
                </table>
              </div>
              <div class="gdc-reg-data-actions">
                <button class="gdc-reg-btn" id="gdcRegAddRowBtn">➕ Add Row</button>
                <button class="gdc-reg-btn clr" id="gdcRegClearDataBtn">🧹 Clear</button>
              </div>
            </div>
            
            <div class="gdc-reg-results">
              <h5>Linear Regression</h5>
              <button class="gdc-reg-calc-btn" id="gdcRegCalcBtn">📊 Calculate ax + b</button>
              
              <div class="gdc-reg-readout" id="gdcRegReadout">
                <div class="reg-eq">y = ax + b</div>
                <div class="reg-stat"><span>a (slope):</span> <span id="regValA">-</span></div>
                <div class="reg-stat"><span>b (y-int):</span> <span id="regValB">-</span></div>
                <div class="reg-stat"><span>r (corr):</span> <span id="regValR">-</span></div>
                <div class="reg-stat"><span>r² (det):</span> <span id="regValR2">-</span></div>
              </div>
              
              <button class="gdc-reg-calc-btn primary" id="gdcRegPlotBtn" disabled>📈 Plot Reg Line</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="gdc-resize-handle" id="gdcResizeHandle"></div>
    </div>
    
    
  `;

  // Inject into body
  const container = document.createElement('div');
  container.innerHTML = modalHTML;
  while (container.firstChild) {
    document.body.appendChild(container.firstChild);
  }

  // 3. State Variables
  let calcDisplay = '';
  let calcAns = 0;
  let degMode = true;
  let showFraction = false;
  let currentNumericResult = null;
  let clearOnNextInput = false;

  // Window bounds caching
  let savedHeight = '580px';
  let savedBounds = null;

  // 4. DOM References
  const modal = document.getElementById('gdcModal');
  const launcher = document.getElementById('gdcLauncher');
  const header = document.getElementById('gdcHeader');
  const resizeHandle = document.getElementById('gdcResizeHandle');
  
  const minBtn = document.getElementById('gdcMinBtn');
  const maxBtn = document.getElementById('gdcMaxBtn');
  const closeBtn = document.getElementById('gdcCloseBtn');
  
  const gdcInput = document.getElementById('gdcInput');
  const gdcResult = document.getElementById('gdcResult');
  const gdcFraction = document.getElementById('gdcFraction');
  const gdcModeIndicator = document.getElementById('gdcModeIndicator');
  const gdcHistory = document.getElementById('gdcHistory');
  
  // 5. Global Trigger Functions
  window.openGDC = function() {
    modal.style.display = 'flex';
    if (modal.classList.contains('minimized')) {
      toggleMinimize();
    }
  };
  
  window.closeGDC = function() {
    modal.style.display = 'none';
  };

  if (launcher) launcher.addEventListener('click', window.openGDC);
  if (closeBtn) closeBtn.addEventListener('click', window.closeGDC);

  // 6. Window Controls (Minimize / Maximize)
  if (minBtn) minBtn.addEventListener('click', toggleMinimize);
  if (maxBtn) maxBtn.addEventListener('click', toggleMaximize);

  function toggleMinimize() {
    const tabs = modal.querySelector('.gdc-tabs');
    const content = modal.querySelector('.gdc-content');
    const handle = modal.querySelector('.gdc-resize-handle');
    const isMinimized = modal.classList.toggle('minimized');
    
    if (isMinimized) {
      tabs.style.display = 'none';
      content.style.display = 'none';
      handle.style.display = 'none';
      modal.style.height = 'auto';
      modal.style.minHeight = '0';
      minBtn.textContent = '▲';
      minBtn.title = 'Restore';
    } else {
      tabs.style.display = 'flex';
      content.style.display = 'flex';
      handle.style.display = 'block';
      modal.style.height = savedHeight;
      modal.style.minHeight = '480px';
      minBtn.textContent = '—';
      minBtn.title = 'Minimize';
    }
  }

  function toggleMaximize() {
    if (modal.classList.contains('minimized')) return;
    const isMaximized = modal.classList.toggle('maximized');
    
    if (isMaximized) {
      savedBounds = {
        width: modal.style.width,
        height: modal.style.height,
        top: modal.style.top,
        left: modal.style.left
      };
      modal.style.width = '';
      modal.style.height = '';
      modal.style.top = '';
      modal.style.left = '';
      maxBtn.textContent = '❐';
      maxBtn.title = 'Restore';
    } else {
      if (savedBounds) {
        modal.style.width = savedBounds.width;
        modal.style.height = savedBounds.height;
        modal.style.top = savedBounds.top;
        modal.style.left = savedBounds.left;
      }
      maxBtn.textContent = '⬜';
      maxBtn.title = 'Maximize';
    }
  }

  // 7. Draggable and Resizable Logic
  (function initDragAndResize() {
    let isDragging = false;
    let isResizing = false;
    let startX, startY;
    let startWidth, startHeight;
    let startLeft, startTop;
    
    // Dragging
    header.addEventListener('mousedown', startDrag);
    header.addEventListener('touchstart', startDrag, { passive: false });
    
    function startDrag(e) {
      if (modal.classList.contains('maximized')) return;
      if (e.target.closest('.gdc-window-controls')) return; // Don't drag on window buttons
      
      isDragging = true;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      startX = clientX;
      startY = clientY;
      startLeft = modal.offsetLeft;
      startTop = modal.offsetTop;
      
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);
    }
    
    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();
      
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - startX;
      const dy = clientY - startY;
      
      let newLeft = startLeft + dx;
      let newTop = startTop + dy;
      
      // Keep inside bounds
      const maxLeft = window.innerWidth - modal.offsetWidth;
      const maxTop = window.innerHeight - modal.offsetHeight;
      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));
      
      modal.style.left = newLeft + 'px';
      modal.style.top = newTop + 'px';
      modal.style.right = 'auto';
    }
    
    function stopDrag() {
      isDragging = false;
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchend', stopDrag);
    }
    
    // Resizing
    resizeHandle.addEventListener('mousedown', startResize);
    resizeHandle.addEventListener('touchstart', startResize, { passive: false });
    
    function startResize(e) {
      if (modal.classList.contains('maximized')) return;
      isResizing = true;
      
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      startX = clientX;
      startY = clientY;
      startWidth = modal.offsetWidth;
      startHeight = modal.offsetHeight;
      
      document.addEventListener('mousemove', resize);
      document.addEventListener('touchmove', resize, { passive: false });
      document.addEventListener('mouseup', stopResize);
      document.addEventListener('touchend', stopResize);
    }
    
    function resize(e) {
      if (!isResizing) return;
      e.preventDefault();
      
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      const dx = clientX - startX;
      const dy = clientY - startY;
      
      const newWidth = Math.max(360, startWidth + dx);
      const newHeight = Math.max(480, startHeight + dy);
      
      modal.style.width = newWidth + 'px';
      modal.style.height = newHeight + 'px';
      savedHeight = modal.style.height;
    }
    
    function stopResize() {
      isResizing = false;
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('touchmove', resize);
      document.removeEventListener('mouseup', stopResize);
      document.removeEventListener('touchend', stopResize);
    }
  })();

  // 8. Tab Switching Logic
  const tabs = modal.querySelectorAll('.gdc-tab-btn');
  const panels = modal.querySelectorAll('.gdc-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      const targetPanel = modal.querySelector(`#gdcPanel${capitalizeFirstLetter(tab.dataset.tab)}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // 9. Trig Wrapper Functions (to handle DEG/RAD mode cleanly)
  function gdcSin(x) {
    return degMode ? Math.sin(x * Math.PI / 180) : Math.sin(x);
  }
  function gdcCos(x) {
    return degMode ? Math.cos(x * Math.PI / 180) : Math.cos(x);
  }
  function gdcTan(x) {
    return degMode ? Math.tan(x * Math.PI / 180) : Math.tan(x);
  }
  function gdcAsin(x) {
    return degMode ? Math.asin(x) * 180 / Math.PI : Math.asin(x);
  }
  function gdcAcos(x) {
    return degMode ? Math.acos(x) * 180 / Math.PI : Math.acos(x);
  }
  function gdcAtan(x) {
    return degMode ? Math.atan(x) * 180 / Math.PI : Math.atan(x);
  }

  // 10. Continued Fraction Generator (to convert decimals to fractions)
  function getFraction(val, tolerance = 1e-9) {
    if (isNaN(val) || !isFinite(val)) return '';
    if (Math.abs(val - Math.round(val)) < tolerance) return '';
    
    let sign = val < 0 ? '-' : '';
    let x = Math.abs(val);
    
    let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
    let b = x;
    do {
      let a = Math.floor(b);
      let aux = h1; h1 = a * h1 + h2; h2 = aux;
      aux = k1; k1 = a * k1 + k2; k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(x - h1 / k1) > x * tolerance && isFinite(b));
    
    if (k1 > 1 && k1 < 10000) {
      return `${sign}${h1}/${k1}`;
    }
    return '';
  }

  // 11. Algebraic Exponent Preprocessor
  function preprocessPower(str) {
    while (true) {
      let idx = str.lastIndexOf('^');
      if (idx === -1) break;
      
      // Find left operand
      let leftStart = idx;
      let parenCount = 0;
      
      for (let j = idx - 1; j >= 0; j--) {
        let char = str[j];
        if (char === ')') {
          parenCount++;
        } else if (char === '(') {
          parenCount--;
          if (parenCount === 0) {
            // Include function names prefixing parenthesized blocks
            let k = j - 1;
            while (k >= 0 && /[a-zA-Z0-9_⁻¹]/.test(str[k])) {
              k--;
            }
            leftStart = k + 1;
            break;
          }
        } else if (parenCount === 0) {
          if (/[\+\-\*\/÷×]/.test(char)) {
            let isUnary = (j === 0 || /[\+\-\*\/÷×\(]/.test(str[j-1]));
            if (isUnary) {
              leftStart = j;
            } else {
              leftStart = j + 1;
            }
            break;
          }
        }
        if (j === 0) {
          leftStart = 0;
        }
      }
      
      // Find right operand
      let rightEnd = idx;
      parenCount = 0;
      
      for (let j = idx + 1; j < str.length; j++) {
        let char = str[j];
        if (j === idx + 1 && (char === '-' || char === '+')) {
          continue;
        }
        
        if (char === '(') {
          parenCount++;
        } else if (char === ')') {
          parenCount--;
          if (parenCount === 0) {
            rightEnd = j;
            break;
          }
        } else if (parenCount === 0) {
          if (/[\+\-\*\/÷×\^]/.test(char)) {
            rightEnd = j - 1;
            break;
          }
        }
        if (j === str.length - 1) {
          rightEnd = str.length - 1;
        }
      }
      
      let leftExpr = str.slice(leftStart, idx);
      let rightExpr = str.slice(idx + 1, rightEnd + 1);
      
      str = str.slice(0, leftStart) + `Math.pow(${leftExpr}, ${rightExpr})` + str.slice(rightEnd + 1);
    }
    return str;
  }

  // 12. Implicit Multiplication Preprocessor
  function preprocessImplicitMultiplication(expr) {
    // Number, ANS, constants, or x/X followed by open paren, function, constant, or x/X
    expr = expr.replace(/(\d+|ANS|[πexX])(?=\(|sin|cos|tan|log|ln|√|[πexX])/g, '$1*');
    // Closing paren followed by number, ANS, constant, open paren, function, or x/X
    expr = expr.replace(/\)(?=\d|ANS|[πexX]|\(|sin|cos|tan|log|ln|√)/g, ')*');
    // Number followed by constant, ANS, or x/X
    expr = expr.replace(/(\d+)(?=[πexX]|ANS)/g, '$1*');
    // Constant or x/X followed by number, ANS, constant, or x/X
    expr = expr.replace(/([πexX])(?=\d|ANS|[πexX])/g, '$1*');
    return expr;
  }

  // 13. UI Update Helpers
  function updateDisplay() {
    gdcInput.textContent = calcDisplay || ' ';
    
    // Update Mode indicator
    gdcModeIndicator.textContent = degMode ? 'DEG' : 'RAD';
    const degBtn = modal.querySelector('[data-action="toggle-deg"]');
    if (degBtn) {
      degBtn.textContent = degMode ? 'DEG' : 'RAD';
    }
  }

  function handleKeyInput(val) {
    if (clearOnNextInput) {
      const isOperator = /[\+\-\×÷\^]/.test(val) || val === '/100';
      if (isOperator) {
        calcDisplay = 'ANS' + val;
      } else {
        calcDisplay = val;
      }
      clearOnNextInput = false;
    } else {
      calcDisplay += val;
    }
    updateDisplay();
  }

  function handleBackspace() {
    if (clearOnNextInput) {
      calcDisplay = '';
      clearOnNextInput = false;
    } else {
      // Handle multi-character functions deleting as one unit (like "sin(", "cos(", etc.)
      const multiCharFuncs = ['sin⁻¹(', 'cos⁻¹(', 'tan⁻¹(', 'sin(', 'cos(', 'tan(', 'log(', 'ln(', '√(', 'ANS'];
      let deleted = false;
      for (let func of multiCharFuncs) {
        if (calcDisplay.endsWith(func)) {
          calcDisplay = calcDisplay.slice(0, -func.length);
          deleted = true;
          break;
        }
      }
      if (!deleted) {
        calcDisplay = calcDisplay.slice(0, -1);
      }
    }
    updateDisplay();
  }

  function handleClear() {
    calcDisplay = '';
    currentNumericResult = null;
    gdcResult.textContent = '0';
    gdcFraction.textContent = '';
    clearOnNextInput = false;
    updateDisplay();
  }

  function evaluateExpression() {
    if (!calcDisplay.trim()) return;

    try {
      // 1. Parentheses Auto-Closer
      let openCount = (calcDisplay.match(/\(/g) || []).length;
      let closeCount = (calcDisplay.match(/\)/g) || []).length;
      let missing = openCount - closeCount;
      for (let i = 0; i < missing; i++) {
        calcDisplay += ')';
      }
      updateDisplay();

      // 2. Preprocessing
      let expr = calcDisplay;
      
      // Implicit Multiplication
      expr = preprocessImplicitMultiplication(expr);
      
      // Powers
      expr = preprocessPower(expr);
      
      // Constants and basic replacements
      expr = expr.replace(/×/g, '*')
                 .replace(/÷/g, '/')
                 .replace(/π/g, 'Math.PI')
                 .replace(/e/g, 'Math.E')
                 .replace(/ANS/g, `(${calcAns})`);
      
      // Trigonometric and logarithmic mappings
      expr = expr.replace(/sin⁻¹\(/g, 'gdcAsin(')
                 .replace(/cos⁻¹\(/g, 'gdcAcos(')
                 .replace(/tan⁻¹\(/g, 'gdcAtan(')
                 .replace(/sin\(/g, 'gdcSin(')
                 .replace(/cos\(/g, 'gdcCos(')
                 .replace(/tan\(/g, 'gdcTan(')
                 .replace(/log\(/g, 'Math.log10(')
                 .replace(/ln\(/g, 'Math.log(')
                 .replace(/√\(/g, 'Math.sqrt(');
                 
      // EXP parsing e.g. 2E3 -> 2 * Math.pow(10, 3)
      expr = expr.replace(/(\d+(?:\.\d+)?)?E(-?\d+)/g, (match, p1, p2) => {
        return (p1 || '1') + ' * Math.pow(10, ' + p2 + ')';
      });

      // 3. Evaluation
      let result = eval(expr);

      if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid value');
      }

      currentNumericResult = result;
      calcAns = result;

      // 4. Formatting output
      let formattedResult = Number(result.toPrecision(12)).toString();
      if (formattedResult.includes('e')) {
        formattedResult = formattedResult.replace(/e\+?/, ' × 10^');
      }

      // 5. Fraction display
      showFraction = false;
      let fraction = getFraction(result);
      if (fraction) {
        gdcFraction.textContent = '▶ ' + fraction;
      } else {
        gdcFraction.textContent = '';
      }

      gdcResult.textContent = formattedResult;

      // 6. Append to history
      const historyItem = document.createElement('div');
      historyItem.className = 'gdc-history-item';
      historyItem.textContent = `${calcDisplay} = ${formattedResult}`;
      historyItem.addEventListener('click', () => {
        if (clearOnNextInput) {
          calcDisplay = formattedResult;
          clearOnNextInput = false;
        } else {
          calcDisplay += formattedResult;
        }
        updateDisplay();
      });
      gdcHistory.appendChild(historyItem);
      gdcHistory.scrollTop = gdcHistory.scrollHeight;

      // Prep next calculation state
      clearOnNextInput = true;

    } catch (err) {
      gdcResult.textContent = 'Error';
      gdcFraction.textContent = '';
      setTimeout(() => {
        if (gdcResult.textContent === 'Error') {
          gdcResult.textContent = '0';
        }
      }, 1500);
      clearOnNextInput = true;
    }
  }

  function toggleFractionDisplay() {
    if (currentNumericResult === null) return;
    
    let fraction = getFraction(currentNumericResult);
    if (!fraction) return;
    
    showFraction = !showFraction;
    
    let formattedResult = Number(currentNumericResult.toPrecision(12)).toString();
    if (formattedResult.includes('e')) {
      formattedResult = formattedResult.replace(/e\+?/, ' × 10^');
    }
    
    if (showFraction) {
      gdcResult.textContent = fraction;
      gdcFraction.textContent = '▶ ' + formattedResult;
    } else {
      gdcResult.textContent = formattedResult;
      gdcFraction.textContent = '▶ ' + fraction;
    }
  }

  // === GRAPH & TABLE & REGRESSION STATE ===
  let viewport = { xmin: -10, xmax: 10, ymin: -10, ymax: 10, xscl: 1, yscl: 1 };
  let compiledFns = [null, null, null];
  let eqInputs = ['', '', ''];
  let eqShows = [true, true, true];
  let lastFocusedInput = null;
  
  // Trace Mode State
  let traceMode = false;
  let traceMousePos = null; // {col, row} in canvas pixel coords
  
  // Roots & Intersections State
  let showRoots = false;
  let showIntersects = false;
  let foundRoots = [];
  let foundIntersects = [];
  
  // Regression State
  let regPoints = [
    { x: 1, y: 2.1 },
    { x: 2, y: 3.9 },
    { x: 3, y: 6.2 },
    { x: 4, y: 8.0 },
    { x: 5, y: 10.1 }
  ];
  let regressionResult = null; // { a, b, r, r2, active: false }

  // DOM Elements for Graph
  const canvas = document.getElementById('gdcCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;
  const canvasContainer = document.getElementById('gdcCanvasContainer');
  const windowSettings = document.getElementById('gdcWindowSettings');
  const traceTooltip = document.getElementById('gdcTraceTooltip');
  
  const btnWindow = document.getElementById('gdcWindowBtn');
  const btnTrace = document.getElementById('gdcTraceBtn');
  const btnRoots = document.getElementById('gdcRootsBtn');
  const btnIntersect = document.getElementById('gdcIntersectBtn');
  const btnClearGraph = document.getElementById('gdcClearGraphBtn');
  const btnPlot = document.getElementById('gdcPlotBtn');

  function compileEquations() {
    for (let i = 0; i < 3; i++) {
      const input = document.getElementById(`gdcEq${i+1}`);
      const show = document.getElementById(`gdcShow${i+1}`);
      if (input) {
        eqInputs[i] = input.value;
        compiledFns[i] = parseEquation(input.value);
      }
      if (show) {
        eqShows[i] = show.checked;
      }
    }
    // Clear roots/intersects since graph changed
    foundRoots = [];
    foundIntersects = [];
    showRoots = false;
    showIntersects = false;
    if (btnRoots) btnRoots.classList.remove('active');
    if (btnIntersect) btnIntersect.classList.remove('active');
  }

  function parseEquation(expr) {
    if (!expr || !expr.trim()) return null;
    let jsExpr = expr.trim();
    // remove y = prefix
    jsExpr = jsExpr.replace(/^[yY](?:[123])?\s*=\s*/, '');
    // strip spaces
    jsExpr = jsExpr.replace(/\s+/g, '');
    // convert X to x
    jsExpr = jsExpr.replace(/X/g, 'x');
    // implicit multiplication
    jsExpr = preprocessImplicitMultiplication(jsExpr);
    // powers
    jsExpr = preprocessPower(jsExpr);
    // constants
    jsExpr = jsExpr.replace(/π/g, 'Math.PI')
                   .replace(/e/g, 'Math.E');
    // trig & log mappings
    jsExpr = jsExpr.replace(/sin⁻¹\(/g, 'gdcAsin(')
                   .replace(/cos⁻¹\(/g, 'gdcAcos(')
                   .replace(/tan⁻¹\(/g, 'gdcAtan(')
                   .replace(/sin\(/g, 'gdcSin(')
                   .replace(/cos\(/g, 'gdcCos(')
                   .replace(/tan\(/g, 'gdcTan(')
                   .replace(/log\(/g, 'Math.log10(')
                   .replace(/ln\(/g, 'Math.log(')
                   .replace(/√\(/g, 'Math.sqrt(')
                   .replace(/abs\(/g, 'Math.abs(');

    // EXP parsing
    jsExpr = jsExpr.replace(/(\d+(?:\.\d+)?)?E(-?\d+)/g, (match, p1, p2) => {
      return (p1 || '1') + ' * Math.pow(10, ' + p2 + ')';
    });

    try {
      return new Function('x', 'gdcSin', 'gdcCos', 'gdcTan', 'gdcAsin', 'gdcAcos', 'gdcAtan', 'degMode', 'return ' + jsExpr);
    } catch (e) {
      return null;
    }
  }

  function evaluateFn(fn, x) {
    if (!fn) return NaN;
    try {
      let val = fn(x, gdcSin, gdcCos, gdcTan, gdcAsin, gdcAcos, gdcAtan, degMode);
      if (typeof val !== 'number' || isNaN(val) || !isFinite(val)) return NaN;
      return val;
    } catch (e) {
      return NaN;
    }
  }

  // Coordinate transformations
  function mathToPix(x, y) {
    let col = ((x - viewport.xmin) / (viewport.xmax - viewport.xmin)) * canvas.width;
    let row = canvas.height - ((y - viewport.ymin) / (viewport.ymax - viewport.ymin)) * canvas.height;
    return { col, row };
  }

  // Convert pixel coordinates to math coordinates
  function pixToMath(col, row) {
    let x = viewport.xmin + (col / canvas.width) * (viewport.xmax - viewport.xmin);
    let y = viewport.ymin + ((canvas.height - row) / canvas.height) * (viewport.ymax - viewport.ymin);
    return { x, y };
  }

  let animationFrameId = null;
  function queueDraw() {
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        drawGraph();
      });
    }
  }

  function drawGraph() {
    if (!canvas || !ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const isDark = theme === 'dark';
    
    // Determine colors based on theme
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(26, 35, 126, 0.04)';
    const axisColor = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(26, 35, 126, 0.2)';
    const textColor = isDark ? '#a0a0b0' : '#555555';
    
    // Line colors for functions
    const fnColors = isDark 
      ? ['#8f9eff', '#ff8a80', '#b9f6ca'] // High contrast light colors
      : ['#1a237e', '#c0392b', '#2e7d32']; // Classic bold colors
      
    // 1. Draw Grid Lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = gridColor;
    ctx.fillStyle = textColor;
    ctx.font = '10px monospace';
    
    // Determine dynamic grid step so lines aren't too dense
    let xStep = getGridStep(viewport.xscl, viewport.xmin, viewport.xmax, canvas.width);
    let yStep = getGridStep(viewport.yscl, viewport.ymin, viewport.ymax, canvas.height);
    
    // X grid lines and labels
    let firstX = Math.ceil(viewport.xmin / xStep) * xStep;
    for (let x = firstX; x <= viewport.xmax; x += xStep) {
      if (Math.abs(x) < 1e-10) continue; // Draw axis later
      let pt = mathToPix(x, 0);
      ctx.beginPath();
      ctx.moveTo(pt.col, 0);
      ctx.lineTo(pt.col, canvas.height);
      ctx.stroke();
      
      // Draw tick mark/number label on horizontal axis
      let axisY = mathToPix(0, 0).row;
      axisY = Math.max(15, Math.min(canvas.height - 5, axisY)); // Keep label inside viewport
      let label = Number(x.toFixed(4)).toString();
      ctx.fillText(label, pt.col - ctx.measureText(label).width / 2, axisY + 12);
    }
    
    // Y grid lines and labels
    let firstY = Math.ceil(viewport.ymin / yStep) * yStep;
    for (let y = firstY; y <= viewport.ymax; y += yStep) {
      if (Math.abs(y) < 1e-10) continue; // Draw axis later
      let pt = mathToPix(0, y);
      ctx.beginPath();
      ctx.moveTo(0, pt.row);
      ctx.lineTo(canvas.width, pt.row);
      ctx.stroke();
      
      // Draw tick label on vertical axis
      let axisX = mathToPix(0, 0).col;
      axisX = Math.max(5, Math.min(canvas.width - ctx.measureText(Number(y.toFixed(4)).toString()).width - 5, axisX));
      ctx.fillText(Number(y.toFixed(4)).toString(), axisX + 5, pt.row + 3);
    }
    
    // 2. Draw Axes
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = axisColor;
    let axisPt = mathToPix(0, 0);
    
    // X Axis
    if (axisPt.row >= 0 && axisPt.row <= canvas.height) {
      ctx.beginPath();
      ctx.moveTo(0, axisPt.row);
      ctx.lineTo(canvas.width, axisPt.row);
      ctx.stroke();
      // Label x axis
      ctx.fillText('x', canvas.width - 10, axisPt.row - 5);
    }
    
    // Y Axis
    if (axisPt.col >= 0 && axisPt.col <= canvas.width) {
      ctx.beginPath();
      ctx.moveTo(axisPt.col, 0);
      ctx.lineTo(axisPt.col, canvas.height);
      ctx.stroke();
      // Label y axis
      ctx.fillText('y', axisPt.col + 5, 10);
    }
    
    // Label origin
    if (axisPt.col >= 0 && axisPt.col <= canvas.width && axisPt.row >= 0 && axisPt.row <= canvas.height) {
      ctx.fillText('0', axisPt.col - 10, axisPt.row + 12);
    }

    // 3. Draw Functions
    ctx.lineWidth = 2.5;
    for (let i = 0; i < 3; i++) {
      if (!compiledFns[i] || !eqShows[i]) continue;
      
      ctx.strokeStyle = fnColors[i];
      ctx.beginPath();
      let started = false;
      
      for (let col = 0; col <= canvas.width; col++) {
        let x = viewport.xmin + (col / canvas.width) * (viewport.xmax - viewport.xmin);
        let y = evaluateFn(compiledFns[i], x);
        
        if (isNaN(y) || !isFinite(y)) {
          if (started) {
            ctx.stroke();
            ctx.beginPath();
            started = false;
          }
          continue;
        }
        
        let pt = mathToPix(x, y);
        // Prevent drawing extremely large coordinates
        if (pt.row < -canvas.height * 2 || pt.row > canvas.height * 3) {
          if (started) {
            ctx.stroke();
            ctx.beginPath();
            started = false;
          }
          continue;
        }

        if (!started) {
          ctx.moveTo(col, pt.row);
          started = true;
        } else {
          ctx.lineTo(col, pt.row);
        }
      }
      if (started) ctx.stroke();
    }
    
    // 4. Draw Regression Plot (if active)
    if (regressionResult && regressionResult.active) {
      // Draw scatter dots
      ctx.fillStyle = isDark ? '#ffca28' : '#ff9800'; // Amber
      ctx.strokeStyle = isDark ? '#fff' : '#000';
      ctx.lineWidth = 1;
      regPoints.forEach(pt => {
        if (isNaN(pt.x) || isNaN(pt.y)) return;
        let pix = mathToPix(pt.x, pt.y);
        if (pix.col >= 0 && pix.col <= canvas.width && pix.row >= 0 && pix.row <= canvas.height) {
          ctx.beginPath();
          ctx.arc(pix.col, pix.row, 4.5, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
        }
      });
      
      // Draw best fit line: y = ax + b
      ctx.strokeStyle = '#ff9800';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]); // Dashed line
      ctx.beginPath();
      
      let x1 = viewport.xmin;
      let y1 = regressionResult.a * x1 + regressionResult.b;
      let x2 = viewport.xmax;
      let y2 = regressionResult.a * x2 + regressionResult.b;
      
      let p1 = mathToPix(x1, y1);
      let p2 = mathToPix(x2, y2);
      ctx.moveTo(p1.col, p1.row);
      ctx.lineTo(p2.col, p2.row);
      ctx.stroke();
      ctx.setLineDash([]); // Reset dash
    }
    
    // 5. Draw Roots and Intersections Dots
    if (showRoots) {
      ctx.fillStyle = '#ff7043'; // Orange-red
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      foundRoots.forEach(r => {
        let pix = mathToPix(r.x, r.y);
        ctx.beginPath();
        ctx.arc(pix.col, pix.row, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = isDark ? '#fff' : '#000';
        ctx.fillText(`(${r.x.toFixed(2)}, 0)`, pix.col + 8, pix.row - 4);
      });
    }
    
    if (showIntersects) {
      ctx.fillStyle = '#ab47bc'; // Purple
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      foundIntersects.forEach(pt => {
        let pix = mathToPix(pt.x, pt.y);
        ctx.beginPath();
        ctx.arc(pix.col, pix.row, 6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = isDark ? '#fff' : '#000';
        ctx.fillText(`(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})`, pix.col + 8, pix.row - 4);
      });
    }
    
    // 6. Draw Trace Vertical Line and Highlights
    if (traceMode && traceMousePos) {
      let mathCoords = pixToMath(traceMousePos.col, traceMousePos.row);
      let xTrace = mathCoords.x;
      
      // Draw vertical dashed line
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(traceMousePos.col, 0);
      ctx.lineTo(traceMousePos.col, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]); // reset
      
      let tooltipContent = `x: ${xTrace.toFixed(4)}<br>`;
      let hasActiveFn = false;
      
      for (let i = 0; i < 3; i++) {
        if (!compiledFns[i] || !eqShows[i]) continue;
        let yTrace = evaluateFn(compiledFns[i], xTrace);
        if (!isNaN(yTrace) && isFinite(yTrace)) {
          hasActiveFn = true;
          let pt = mathToPix(xTrace, yTrace);
          
          // Draw highlight ring on curve
          ctx.fillStyle = fnColors[i];
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(pt.col, pt.row, 5, 0, 2*Math.PI);
          ctx.fill();
          ctx.stroke();
          
          tooltipContent += `<span style="color:${fnColors[i]}; font-weight:bold;">y${i+1}:</span> ${yTrace.toFixed(4)}<br>`;
        }
      }
      
      // Update tooltip element
      if (hasActiveFn) {
        traceTooltip.style.display = 'block';
        traceTooltip.innerHTML = tooltipContent;
        
        // Position tooltip
        let left = traceMousePos.col + 15;
        let top = traceMousePos.row + 15;
        
        if (left + traceTooltip.offsetWidth > canvas.width) {
          left = traceMousePos.col - traceTooltip.offsetWidth - 15;
        }
        if (top + traceTooltip.offsetHeight > canvas.height) {
          top = canvas.height - traceTooltip.offsetHeight - 10;
        }
        
        traceTooltip.style.left = left + 'px';
        traceTooltip.style.top = top + 'px';
      } else {
        traceTooltip.style.display = 'none';
      }
    } else {
      traceTooltip.style.display = 'none';
    }
  }

  function getGridStep(scale, min, max, size) {
    let step = scale || 1;
    if (step <= 0) step = 1;
    let iterations = 0;
    while ((step / (max - min)) * size < 35 && iterations < 30) {
      step *= 2;
      iterations++;
    }
    iterations = 0;
    while ((step / (max - min)) * size > 150 && iterations < 30 && step > 0.0001) {
      step /= 2;
      iterations++;
    }
    return step;
  }

  // Roots & Intersections numerical algorithms
  function calculateRoots() {
    compileEquations();
    foundRoots = [];
    
    for (let i = 0; i < 3; i++) {
      if (!compiledFns[i] || !eqShows[i]) continue;
      
      let fn = compiledFns[i];
      let steps = 150;
      let dx = (viewport.xmax - viewport.xmin) / steps;
      
      for (let s = 0; s < steps; s++) {
        let xa = viewport.xmin + s * dx;
        let xb = xa + dx;
        let ya = evaluateFn(fn, xa);
        let yb = evaluateFn(fn, xb);
        
        if (isNaN(ya) || isNaN(yb)) continue;
        
        if (ya * yb <= 0) {
          let left = xa;
          let right = xb;
          let mid = (left + right) / 2;
          
          for (let iter = 0; iter < 30; iter++) {
            mid = (left + right) / 2;
            let ymid = evaluateFn(fn, mid);
            if (Math.abs(ymid) < 1e-12) break;
            
            let yleft = evaluateFn(fn, left);
            if (yleft * ymid <= 0) {
              right = mid;
            } else {
              left = mid;
            }
          }
          
          let rootY = evaluateFn(fn, mid);
          if (Math.abs(rootY) < 0.05) {
            if (!foundRoots.some(r => Math.abs(r.x - mid) < 1e-4)) {
              foundRoots.push({ x: mid, y: 0 });
            }
          }
        }
      }
    }
    
    showRoots = foundRoots.length > 0;
    btnRoots.classList.toggle('active', showRoots);
    if (!showRoots) {
      alert("No roots found in the current window.");
    }
    queueDraw();
  }

  // Find intersections of functions
  function calculateIntersections() {
    compileEquations();
    foundIntersects = [];
    
    let activeFns = [];
    for (let i = 0; i < 3; i++) {
      if (compiledFns[i] && eqShows[i]) {
        activeFns.push({ fn: compiledFns[i], label: `y${i+1}` });
      }
    }
    
    if (activeFns.length < 2) {
      alert("Please enter and show at least two functions to find intersections.");
      return;
    }
    
    for (let i = 0; i < activeFns.length; i++) {
      for (let j = i + 1; j < activeFns.length; j++) {
        let fn1 = activeFns[i].fn;
        let fn2 = activeFns[j].fn;
        
        let steps = 150;
        let dx = (viewport.xmax - viewport.xmin) / steps;
        
        for (let s = 0; s < steps; s++) {
          let xa = viewport.xmin + s * dx;
          let xb = xa + dx;
          let ya = evaluateFn(fn1, xa) - evaluateFn(fn2, xa);
          let yb = evaluateFn(fn1, xb) - evaluateFn(fn2, xb);
          
          if (isNaN(ya) || isNaN(yb)) continue;
          
          if (ya * yb <= 0) {
            let left = xa;
            let right = xb;
            let mid = (left + right) / 2;
            
            for (let iter = 0; iter < 30; iter++) {
              mid = (left + right) / 2;
              let ymid = evaluateFn(fn1, mid) - evaluateFn(fn2, mid);
              if (Math.abs(ymid) < 1e-12) break;
              
              let yleft = evaluateFn(fn1, left) - evaluateFn(fn2, left);
              if (yleft * ymid <= 0) {
                right = mid;
              } else {
                left = mid;
              }
            }
            
            let y1Val = evaluateFn(fn1, mid);
            let y2Val = evaluateFn(fn2, mid);
            if (Math.abs(y1Val - y2Val) < 0.05) {
              if (!foundIntersects.some(pt => Math.abs(pt.x - mid) < 1e-4)) {
                foundIntersects.push({ x: mid, y: y1Val });
              }
            }
          }
        }
      }
    }
    
    showIntersects = foundIntersects.length > 0;
    btnIntersect.classList.toggle('active', showIntersects);
    if (!showIntersects) {
      alert("No intersections found in the current window.");
    }
    queueDraw();
  }

  // Interactive Graph Controls init
  function initGraphEngine() {
    if (!canvas) return;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        canvas.width = entry.contentRect.width || canvas.offsetWidth;
        canvas.height = entry.contentRect.height || canvas.offsetHeight;
        queueDraw();
      }
    });
    const wrapper = document.getElementById('gdcCanvasContainer');
    if (wrapper) {
      resizeObserver.observe(wrapper);
    }
    
    const graphTabBtn = modal.querySelector('.gdc-tab-btn[data-tab="graph"]');
    if (graphTabBtn) {
      graphTabBtn.addEventListener('click', () => {
        compileEquations();
        setTimeout(() => {
          canvas.width = wrapper.offsetWidth;
          canvas.height = wrapper.offsetHeight;
          queueDraw();
        }, 100);
      });
    }
    
    btnPlot.addEventListener('click', () => {
      compileEquations();
      queueDraw();
    });
    
    btnClearGraph.addEventListener('click', () => {
      for (let i = 0; i < 3; i++) {
        document.getElementById(`gdcEq${i+1}`).value = i === 0 ? '2x' : '';
        document.getElementById(`gdcShow${i+1}`).checked = true;
      }
      resetViewport();
      foundRoots = [];
      foundIntersects = [];
      showRoots = false;
      showIntersects = false;
      btnRoots.classList.remove('active');
      btnIntersect.classList.remove('active');
      traceMode = false;
      btnTrace.classList.remove('active');
      btnTrace.textContent = '📍 Trace: OFF';
      
      if (regressionResult) {
        regressionResult.active = false;
      }
      
      compileEquations();
      queueDraw();
    });
    
    btnWindow.addEventListener('click', () => {
      windowSettings.classList.toggle('active');
      document.getElementById('gdcXmin').value = viewport.xmin;
      document.getElementById('gdcXmax').value = viewport.xmax;
      document.getElementById('gdcXscl').value = viewport.xscl;
      document.getElementById('gdcYmin').value = viewport.ymin;
      document.getElementById('gdcYmax').value = viewport.ymax;
      document.getElementById('gdcYscl').value = viewport.yscl;
    });
    
    document.getElementById('gdcApplyWindow').addEventListener('click', () => {
      viewport.xmin = parseFloat(document.getElementById('gdcXmin').value) || -10;
      viewport.xmax = parseFloat(document.getElementById('gdcXmax').value) || 10;
      viewport.xscl = parseFloat(document.getElementById('gdcXscl').value) || 1;
      viewport.ymin = parseFloat(document.getElementById('gdcYmin').value) || -10;
      viewport.ymax = parseFloat(document.getElementById('gdcYmax').value) || 10;
      viewport.yscl = parseFloat(document.getElementById('gdcYscl').value) || 1;
      
      windowSettings.classList.remove('active');
      queueDraw();
    });
    
    document.getElementById('gdcResetWindow').addEventListener('click', () => {
      resetViewport();
      windowSettings.classList.remove('active');
      queueDraw();
    });
    
    btnTrace.addEventListener('click', () => {
      traceMode = !traceMode;
      btnTrace.classList.toggle('active', traceMode);
      btnTrace.textContent = `📍 Trace: ${traceMode ? 'ON' : 'OFF'}`;
      if (!traceMode) {
        traceMousePos = null;
      }
      queueDraw();
    });
    
    btnRoots.addEventListener('click', calculateRoots);
    btnIntersect.addEventListener('click', calculateIntersections);
    
    // Pan Logic
    let isPanning = false;
    let panStartPix = { col: 0, row: 0 };
    let panStartViewport = null;
    
    canvas.addEventListener('mousedown', startPan);
    canvas.addEventListener('touchstart', startPan, { passive: false });
    
    function startPan(e) {
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      const rect = canvas.getBoundingClientRect();
      const col = clientX - rect.left;
      const row = clientY - rect.top;
      
      if (e.target.closest('#gdcWindowSettings')) return;
      
      isPanning = true;
      panStartPix = { col, row };
      panStartViewport = { ...viewport };
      
      document.addEventListener('mousemove', pan);
      document.addEventListener('touchmove', pan, { passive: false });
      document.addEventListener('mouseup', endPan);
      document.addEventListener('touchend', endPan);
    }
    
    function pan(e) {
      if (!isPanning) return;
      e.preventDefault();
      
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
      
      const rect = canvas.getBoundingClientRect();
      const col = clientX - rect.left;
      const row = clientY - rect.top;
      
      const dcol = col - panStartPix.col;
      const drow = row - panStartPix.row;
      
      const dxMath = (dcol / canvas.width) * (panStartViewport.xmax - panStartViewport.xmin);
      const dyMath = (drow / canvas.height) * (panStartViewport.ymax - panStartViewport.ymin);
      
      viewport.xmin = panStartViewport.xmin - dxMath;
      viewport.xmax = panStartViewport.xmax - dxMath;
      viewport.ymin = panStartViewport.ymin + dyMath;
      viewport.ymax = panStartViewport.ymax + dyMath;
      
      queueDraw();
    }
    
    function endPan() {
      isPanning = false;
      document.removeEventListener('mousemove', pan);
      document.removeEventListener('touchmove', pan);
      document.removeEventListener('mouseup', endPan);
      document.removeEventListener('touchend', endPan);
    }
    
    // Zoom Logic
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      const rect = canvas.getBoundingClientRect();
      const col = e.clientX - rect.left;
      const row = e.clientY - rect.top;
      
      const cursorMath = pixToMath(col, row);
      const zoomFactor = e.deltaY < 0 ? 0.85 : 1.15;
      
      const w = viewport.xmax - viewport.xmin;
      const h = viewport.ymax - viewport.ymin;
      
      const fracX = (cursorMath.x - viewport.xmin) / w;
      const fracY = (cursorMath.y - viewport.ymin) / h;
      
      const newW = w * zoomFactor;
      const newH = h * zoomFactor;
      
      viewport.xmin = cursorMath.x - fracX * newW;
      viewport.xmax = cursorMath.x + (1 - fracX) * newW;
      viewport.ymin = cursorMath.y - fracY * newH;
      viewport.ymax = cursorMath.y + (1 - fracY) * newH;
      
      queueDraw();
    });
    
    // Mouse Move for Trace
    canvas.addEventListener('mousemove', (e) => {
      if (!traceMode) return;
      const rect = canvas.getBoundingClientRect();
      traceMousePos = {
        col: e.clientX - rect.left,
        row: e.clientY - rect.top
      };
      queueDraw();
    });
    
    canvas.addEventListener('mouseleave', () => {
      traceMousePos = null;
      queueDraw();
    });
    
    // Helper keyboard logic (equation shortcuts)
    const helperKeys = modal.querySelectorAll('.gdc-helper-key');
    helperKeys.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        let target = lastFocusedInput;
        if (!target) {
          target = document.getElementById('gdcEq1');
        }
        if (!target) return;
        
        const start = target.selectionStart;
        const end = target.selectionEnd;
        const val = target.value;
        target.value = val.substring(0, start) + key + val.substring(end);
        target.selectionStart = target.selectionEnd = start + key.length;
        
        target.focus();
        compileEquations();
        queueDraw();
      });
    });
    
    // Focus tracking
    for (let i = 1; i <= 3; i++) {
      const input = document.getElementById(`gdcEq${i}`);
      if (input) {
        input.addEventListener('focus', () => {
          lastFocusedInput = input;
        });
        input.addEventListener('input', () => {
          compileEquations();
          queueDraw();
        });
      }
      const show = document.getElementById(`gdcShow${i}`);
      if (show) {
        show.addEventListener('change', () => {
          compileEquations();
          queueDraw();
        });
      }
    }
  }

  function resetViewport() {
    viewport = { xmin: -10, xmax: 10, ymin: -10, ymax: 10, xscl: 1, yscl: 1 };
  }

  // === TABLE TAB LOGIC ===
  function initTableEngine() {
    const tblGenBtn = document.getElementById('gdcTblGenBtn');
    const tableTabBtn = modal.querySelector('.gdc-tab-btn[data-tab="table"]');
    
    if (tblGenBtn) {
      tblGenBtn.addEventListener('click', generateTable);
    }
    if (tableTabBtn) {
      tableTabBtn.addEventListener('click', () => {
        compileEquations();
        generateTable();
      });
    }
  }

  function generateTable() {
    const tableBody = document.getElementById('gdcTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    let startX = parseFloat(document.getElementById('gdcTblStart').value);
    if (isNaN(startX)) startX = 0;
    
    let step = parseFloat(document.getElementById('gdcTblStep').value);
    if (isNaN(step) || step <= 0) step = 1;
    
    compileEquations();
    
    for (let k = 0; k < 50; k++) {
      let x = startX + k * step;
      let tr = document.createElement('tr');
      
      let tdX = document.createElement('td');
      tdX.textContent = Number(x.toFixed(6)).toString();
      tr.appendChild(tdX);
      
      for (let i = 0; i < 3; i++) {
        let tdY = document.createElement('td');
        if (compiledFns[i]) {
          let y = evaluateFn(compiledFns[i], x);
          tdY.textContent = (isNaN(y) || !isFinite(y)) ? 'Error' : Number(y.toPrecision(8)).toString();
        } else {
          tdY.textContent = '-';
        }
        tr.appendChild(tdY);
      }
      
      tableBody.appendChild(tr);
    }
  }

  // === REGRESSION TAB LOGIC ===
  function initRegressionEngine() {
    const addRowBtn = document.getElementById('gdcRegAddRowBtn');
    const clearBtn = document.getElementById('gdcRegClearDataBtn');
    const calcBtn = document.getElementById('gdcRegCalcBtn');
    const plotBtn = document.getElementById('gdcRegPlotBtn');
    const regTabBtn = modal.querySelector('.gdc-tab-btn[data-tab="regression"]');
    
    if (addRowBtn) addRowBtn.addEventListener('click', () => {
      regPoints.push({ x: 0, y: 0 });
      renderRegTable();
    });
    
    if (clearBtn) clearBtn.addEventListener('click', () => {
      regPoints = [];
      renderRegTable();
      clearRegCalculations();
    });
    
    if (calcBtn) calcBtn.addEventListener('click', calculateRegression);
    
    if (plotBtn) plotBtn.addEventListener('click', () => {
      if (regressionResult) {
        regressionResult.active = true;
        
        // Switch to graph tab
        const graphTabBtn = modal.querySelector('.gdc-tab-btn[data-tab="graph"]');
        if (graphTabBtn) {
          graphTabBtn.click();
        }
      }
    });
    
    if (regTabBtn) {
      regTabBtn.addEventListener('click', renderRegTable);
    }
    
    renderRegTable();
  }

  function renderRegTable() {
    const tbody = document.getElementById('gdcRegTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    regPoints.forEach((pt, idx) => {
      let tr = document.createElement('tr');
      
      let tdX = document.createElement('td');
      let inputX = document.createElement('input');
      inputX.type = 'number';
      inputX.step = 'any';
      inputX.className = 'gdc-reg-input';
      inputX.value = isNaN(pt.x) ? '' : pt.x;
      inputX.addEventListener('input', (e) => {
        regPoints[idx].x = parseFloat(e.target.value);
      });
      tdX.appendChild(inputX);
      tr.appendChild(tdX);
      
      let tdY = document.createElement('td');
      let inputY = document.createElement('input');
      inputY.type = 'number';
      inputY.step = 'any';
      inputY.className = 'gdc-reg-input';
      inputY.value = isNaN(pt.y) ? '' : pt.y;
      inputY.addEventListener('input', (e) => {
        regPoints[idx].y = parseFloat(e.target.value);
      });
      tdY.appendChild(inputY);
      tr.appendChild(tdY);
      
      let tdDel = document.createElement('td');
      let delBtn = document.createElement('button');
      delBtn.className = 'gdc-reg-del-btn';
      delBtn.innerHTML = '✕';
      delBtn.addEventListener('click', () => {
        regPoints.splice(idx, 1);
        renderRegTable();
        clearRegCalculations();
      });
      tdDel.appendChild(delBtn);
      tr.appendChild(tdDel);
      
      tbody.appendChild(tr);
    });
  }

  function clearRegCalculations() {
    regressionResult = null;
    document.getElementById('regValA').textContent = '-';
    document.getElementById('regValB').textContent = '-';
    document.getElementById('regValR').textContent = '-';
    document.getElementById('regValR2').textContent = '-';
    document.getElementById('gdcRegPlotBtn').disabled = true;
  }

  function calculateRegression() {
    let validPts = regPoints.filter(pt => !isNaN(pt.x) && !isNaN(pt.y));
    
    if (validPts.length < 2) {
      alert("Please enter at least two data points to perform linear regression.");
      return;
    }
    
    let n = validPts.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
    
    validPts.forEach(pt => {
      sumX += pt.x;
      sumY += pt.y;
      sumXY += pt.x * pt.y;
      sumX2 += pt.x * pt.x;
      sumY2 += pt.y * pt.y;
    });
    
    let denominator = n * sumX2 - sumX * sumX;
    if (Math.abs(denominator) < 1e-12) {
      alert("Error: Division by zero (all X values are identical).");
      return;
    }
    
    let slope = (n * sumXY - sumX * sumY) / denominator;
    let intercept = (sumY - slope * sumX) / n;
    
    let rDenominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
    let r = 0;
    if (Math.abs(rDenominator) > 1e-12) {
      r = (n * sumXY - sumX * sumY) / rDenominator;
    }
    
    let r2 = r * r;
    
    regressionResult = {
      a: slope,
      b: intercept,
      r: r,
      r2: r2,
      active: false
    };
    
    document.getElementById('regValA').textContent = Number(slope.toFixed(6)).toString();
    document.getElementById('regValB').textContent = Number(intercept.toFixed(6)).toString();
    document.getElementById('regValR').textContent = Number(r.toFixed(6)).toString();
    document.getElementById('regValR2').textContent = Number(r2.toFixed(6)).toString();
    
    document.getElementById('gdcRegPlotBtn').disabled = false;
  }

  // 14. Keypad Button Event Listeners
  const keypad = document.getElementById('gdcKeypad');
  keypad.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    if (btn.dataset.insert) {
      handleKeyInput(btn.dataset.insert);
    } else if (btn.dataset.action) {
      const action = btn.dataset.action;
      if (action === 'clear') {
        handleClear();
      } else if (action === 'backspace') {
        handleBackspace();
      } else if (action === 'equal') {
        evaluateExpression();
      } else if (action === 'toggle-deg') {
        degMode = !degMode;
        updateDisplay();
      } else if (action === 'square') {
        handleKeyInput('^2');
      } else if (action === 'negate') {
        if (calcDisplay.startsWith('-')) {
          calcDisplay = calcDisplay.slice(1);
        } else {
          calcDisplay = '-' + calcDisplay;
        }
        updateDisplay();
      } else if (action === 'toggle-fraction') {
        toggleFractionDisplay();
      }
    }
  });

  // 15. Keyboard Support
  document.addEventListener('keydown', (e) => {
    if (modal.style.display !== 'flex') return;

    // Don't hijack keystrokes if the user is typing in any text input
    if (document.activeElement && 
        (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
      return;
    }

    const key = e.key;
    if (key >= '0' && key <= '9') {
      handleKeyInput(key);
    } else if (key === '.') {
      handleKeyInput('.');
    } else if (key === '+') {
      handleKeyInput('+');
    } else if (key === '-') {
      handleKeyInput('-');
    } else if (key === '*' || key === 'x' || key === 'X') {
      handleKeyInput('×');
    } else if (key === '/') {
      handleKeyInput('÷');
    } else if (key === '(' || key === ')') {
      handleKeyInput(key);
    } else if (key === '^') {
      handleKeyInput('^');
    } else if (key === 'Enter' || key === '=') {
      e.preventDefault();
      evaluateExpression();
    } else if (key === 'Backspace') {
      e.preventDefault();
      handleBackspace();
    } else if (key === 'Escape') {
      handleClear();
    }
  });

  // 16. Hijack/Override exam-student.html old calculator if present
  function hijackOldCalculator() {
    const oldCalc = document.getElementById('calcTool') || document.getElementById('calcModal');
    if (oldCalc) {
      oldCalc.remove(); // Delete old basic calc layout
    }
    
    // Override openCalc to point to openGDC
    window.openCalc = function() {
      if (typeof window.openGDC === 'function') {
        window.openGDC();
      }
    };
    
    // Find all triggers like onclick="document.getElementById('calcTool').style.display='flex'" and replace
    document.querySelectorAll('button[onclick*="calcTool"]').forEach(btn => {
      btn.removeAttribute('onclick');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openGDC();
      });
    });
  }

  // Execute hijack immediately and on DOMContentLoaded
  hijackOldCalculator();
  document.addEventListener('DOMContentLoaded', hijackOldCalculator);

  // Initialize engines
  initGraphEngine();
  initTableEngine();
  initRegressionEngine();

  // Initialize display
  updateDisplay();
})();
