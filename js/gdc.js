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
          <div class="gdc-coming-soon">
            <div class="gdc-coming-icon">📈</div>
            <h3>Graph Mode</h3>
            <p>Plot functions, zoom, pan, trace coordinates, and find intersections. (Phase 2)</p>
          </div>
        </div>

        <!-- TABLE MODE PANEL -->
        <div id="gdcPanelTable" class="gdc-panel">
          <div class="gdc-coming-soon">
            <div class="gdc-coming-icon">📋</div>
            <h3>Table Mode</h3>
            <p>Generate scrollable coordinate tables for plotted functions. (Phase 3)</p>
          </div>
        </div>

        <!-- REGRESSION MODE PANEL -->
        <div id="gdcPanelRegression" class="gdc-panel">
          <div class="gdc-coming-soon">
            <div class="gdc-coming-icon">📊</div>
            <h3>Regression Mode</h3>
            <p>Compute linear regression coefficients, calculate r² values, and plot line of best fit. (Phase 4)</p>
          </div>
        </div>
      </div>
      
      <div class="gdc-resize-handle" id="gdcResizeHandle"></div>
    </div>
    
    <button id="gdcLauncher" class="gdc-launcher" title="Open GDC Calculator">🧮</button>
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

  launcher.addEventListener('click', window.openGDC);
  closeBtn.addEventListener('click', window.closeGDC);

  // 6. Window Controls (Minimize / Maximize)
  minBtn.addEventListener('click', toggleMinimize);
  maxBtn.addEventListener('click', toggleMaximize);

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
    expr = expr.replace(/(\d+|ANS|[πe])(?=\(|sin|cos|tan|log|ln|√)/g, '$1*');
    expr = expr.replace(/\)(?=\d|ANS|[πe]|\(|sin|cos|tan|log|ln|√)/g, ')*');
    expr = expr.replace(/(\d+)(?=[πe]|ANS)/g, '$1*');
    expr = expr.replace(/([πe])(?=\d|ANS|[πe])/g, '$1*');
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

    // Don't hijack keystrokes if the user is typing in a text input elsewhere on the page
    if (document.activeElement && 
        (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') && 
        !document.activeElement.closest('#gdcModal')) {
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

  // Initialize display
  updateDisplay();
})();
