/* ═══════════════════════════════════════════════════
   Standardized Experiment Panel
   Automatically injects into #expC, #dW, and #gC
   Depends on window.SIM_VARIABLES
═══════════════════════════════════════════════════ */

window.ExperimentPanel = {
  data: [],
  chart: null,
  iv: null,
  dv: null,
  cvs: [],
  hypothesis: '',

  init: function() {
    if (!window.SIM_VARIABLES) return;

    // Default selections
    this.iv = window.SIM_VARIABLES.iv[0].id;
    this.dv = window.SIM_VARIABLES.dv[0].id;
    
    this.buildUI();
    this.setupChart();
    this.updateHypothesis();
    this.bindPauseHook();
  },

  buildUI: function() {
    const expC = document.getElementById('expC');
    if (!expC) return;

    const v = window.SIM_VARIABLES;

    let html = `
      <div class="exp-panel" style="background:var(--surface); border:1px solid var(--border); border-radius:8px; padding:12px; margin-bottom:10px;">
        <h4 style="font-size:0.8rem; margin-bottom:8px; color:var(--accent); font-weight:700;">Variable Selection</h4>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px;">
          <div style="flex:1; min-width:140px;">
            <label style="font-size:0.65rem; font-weight:700; color:var(--text2); display:block; margin-bottom:4px;">Independent Variable (X)</label>
            <select id="ep_iv" onchange="ExperimentPanel.onVarChange()" style="width:100%; padding:6px; border-radius:6px; border:1px solid var(--border); background:var(--bg); color:var(--text); font-size:0.75rem;">
              ${v.iv.map(opt => `<option value="${opt.id}">${opt.name} (${opt.unit || ''})</option>`).join('')}
            </select>
          </div>
          <div style="flex:1; min-width:140px;">
            <label style="font-size:0.65rem; font-weight:700; color:var(--text2); display:block; margin-bottom:4px;">Dependent Variable (Y)</label>
            <select id="ep_dv" onchange="ExperimentPanel.onVarChange()" style="width:100%; padding:6px; border-radius:6px; border:1px solid var(--border); background:var(--bg); color:var(--text); font-size:0.75rem;">
              ${v.dv.map(opt => `<option value="${opt.id}">${opt.name} (${opt.unit || ''})</option>`).join('')}
            </select>
          </div>
        </div>
        
        <div style="margin-bottom:12px;">
          <label style="font-size:0.65rem; font-weight:700; color:var(--text2); display:block; margin-bottom:4px;">Control Variables (Keep Constant)</label>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${v.cv.map(opt => `
              <label style="font-size:0.65rem; color:var(--text); display:flex; align-items:center; gap:4px; background:var(--bg); padding:4px 8px; border-radius:4px; border:1px solid var(--border);">
                <input type="checkbox" value="${opt.id}" class="ep_cv" onchange="ExperimentPanel.onVarChange()"> ${opt.name}
              </label>
            `).join('')}
          </div>
        </div>

        <div style="background:rgba(21,101,192,0.06); border:1px solid rgba(21,101,192,0.15); border-radius:6px; padding:10px;">
          <h4 style="font-size:0.7rem; color:var(--accent); margin-bottom:6px;">Hypothesis</h4>
          <div style="font-size:0.75rem; color:var(--text); line-height:1.6; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            If <strong id="ep_h_iv" style="color:var(--accent)">...</strong> increases, then <strong id="ep_h_dv" style="color:var(--accent)">...</strong> will 
            <select id="ep_h_pred" style="padding:2px 6px; border-radius:4px; border:1px solid var(--border); font-size:0.75rem;">
              <option value="increase">increase</option>
              <option value="decrease">decrease</option>
              <option value="stay the same">stay the same</option>
            </select>
            because <input type="text" placeholder="type your reasoning..." style="flex:1; min-width:150px; padding:4px 8px; border-radius:4px; border:1px solid var(--border); font-size:0.75rem; background:var(--bg); color:var(--text);">
          </div>
        </div>

        <div style="margin-top:12px; display:flex; gap:8px;">
           <button onclick="ExperimentPanel.recordDataPoint()" style="background:var(--accent); color:#fff; border:none; padding:6px 12px; border-radius:6px; font-size:0.7rem; font-weight:700; cursor:pointer;">📸 Record Data Point</button>
           <button onclick="ExperimentPanel.clearData()" style="background:transparent; border:1px solid var(--border); color:var(--text2); padding:6px 12px; border-radius:6px; font-size:0.7rem; font-weight:700; cursor:pointer;">🗑 Clear Data</button>
        </div>
      </div>
    `;
    expC.innerHTML = html;

    // Setup initial hypothesis text
    this.updateHypothesis();
  },

  onVarChange: function() {
    const newIv = document.getElementById('ep_iv').value;
    const newDv = document.getElementById('ep_dv').value;
    
    if (newIv !== this.iv || newDv !== this.dv) {
      if (this.data.length > 0 && confirm("Changing variables will clear your current data. Proceed?")) {
        this.clearData();
      } else if (this.data.length > 0) {
        // Revert
        document.getElementById('ep_iv').value = this.iv;
        document.getElementById('ep_dv').value = this.dv;
        return;
      }
    }
    
    this.iv = document.getElementById('ep_iv').value;
    this.dv = document.getElementById('ep_dv').value;
    
    this.cvs = Array.from(document.querySelectorAll('.ep_cv:checked')).map(cb => cb.value);
    
    this.updateHypothesis();
    this.updateChartLabels();
    this.renderTable();
  },

  updateHypothesis: function() {
    const ivOpt = window.SIM_VARIABLES.iv.find(x => x.id === this.iv);
    const dvOpt = window.SIM_VARIABLES.dv.find(x => x.id === this.dv);
    
    if(document.getElementById('ep_h_iv')) {
      document.getElementById('ep_h_iv').innerText = ivOpt ? ivOpt.name : '...';
      document.getElementById('ep_h_dv').innerText = dvOpt ? dvOpt.name : '...';
    }
  },

  recordDataPoint: function() {
    if (!window.SIM_VARIABLES) return;
    
    const xVal = window.SIM_VARIABLES.getVar(this.iv);
    const yVal = window.SIM_VARIABLES.getVar(this.dv);
    
    if (xVal === null || xVal === undefined || yVal === null || yVal === undefined) return;
    
    this.data.push({ x: xVal, y: yVal });
    
    // Sort by X for line chart consistency
    this.data.sort((a,b) => a.x - b.x);
    
    this.renderTable();
    this.updateChart();
    
    // Switch to data tab briefly if function exists
    if(typeof window.bts === 'function') {
      const btabs = document.querySelectorAll('.bt');
      if(btabs.length > 1) window.bts(btabs[1], 1);
    }
  },

  clearData: function() {
    this.data = [];
    this.renderTable();
    this.updateChart();
  },

  renderTable: function() {
    const dw = document.getElementById('dW');
    if (!dw) return;
    
    const ivOpt = window.SIM_VARIABLES.iv.find(x => x.id === this.iv);
    const dvOpt = window.SIM_VARIABLES.dv.find(x => x.id === this.dv);
    
    if (this.data.length === 0) {
      dw.innerHTML = '<p style="font-size:0.7rem; color:var(--text3); text-align:center; padding:10px;">Collect data points to see results.</p>';
      return;
    }
    
    let html = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding:0 4px;">
        <span style="font-size:0.7rem; font-weight:700; color:var(--text2);">Data Table</span>
        <button onclick="ExperimentPanel.downloadCSV()" style="background:var(--surface); border:1px solid var(--border); color:var(--text2); padding:3px 8px; border-radius:4px; font-size:0.65rem; cursor:pointer;">⬇️ CSV</button>
      </div>
      <div style="overflow-x:auto;">
        <table class="dt" style="width:100%;">
          <thead>
            <tr>
              <th>Trial</th>
              <th>${ivOpt.name} (${ivOpt.unit || ''})</th>
              <th>${dvOpt.name} (${dvOpt.unit || ''})</th>
            </tr>
          </thead>
          <tbody>
            ${this.data.map((d, i) => `
              <tr>
                <td>${i+1}</td>
                <td>${Number(d.x).toFixed(3)}</td>
                <td>${Number(d.y).toFixed(3)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    dw.innerHTML = html;
  },

  downloadCSV: function() {
    if(this.data.length === 0) return;
    const ivOpt = window.SIM_VARIABLES.iv.find(x => x.id === this.iv);
    const dvOpt = window.SIM_VARIABLES.dv.find(x => x.id === this.dv);
    
    let csv = "Trial," + ivOpt.name + "," + dvOpt.name + "\\n";
    this.data.forEach((d, i) => {
      csv += (i+1) + "," + d.x + "," + d.y + "\\n";
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'experiment_data.csv');
    a.click();
  },

  setupChart: function() {
    const canvas = document.getElementById('gC');
    if (!canvas || typeof Chart === 'undefined') return;
    
    const ctx = canvas.getContext('2d');
    
    Chart.defaults.color = getComputedStyle(document.documentElement).getPropertyValue('--text2').trim() || '#94a3b8';
    Chart.defaults.font.family = '-apple-system, sans-serif';
    
    this.chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Data Points',
          data: [],
          backgroundColor: '#38bdf8',
          borderColor: '#0284c7',
          pointRadius: 5,
          pointHoverRadius: 7,
          showLine: true,
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' },
          tooltip: {
            callbacks: {
              label: (ctx) => `(${ctx.parsed.x.toFixed(2)}, ${ctx.parsed.y.toFixed(2)})`
            }
          }
        },
        scales: {
          x: { title: { display: true, text: 'IV' } },
          y: { title: { display: true, text: 'DV' } }
        }
      }
    });
    
    this.updateChartLabels();
  },

  updateChartLabels: function() {
    if (!this.chart) return;
    const ivOpt = window.SIM_VARIABLES.iv.find(x => x.id === this.iv);
    const dvOpt = window.SIM_VARIABLES.dv.find(x => x.id === this.dv);
    
    this.chart.options.scales.x.title.text = ivOpt ? `${ivOpt.name} (${ivOpt.unit || ''})` : 'IV';
    this.chart.options.scales.y.title.text = dvOpt ? `${dvOpt.name} (${dvOpt.unit || ''})` : 'DV';
    this.chart.data.datasets[0].label = `${dvOpt.name} vs ${ivOpt.name}`;
    this.chart.update();
  },

  updateChart: function() {
    if (!this.chart) return;
    this.chart.data.datasets[0].data = [...this.data];
    this.chart.update();
  },

  bindPauseHook: function() {
    document.addEventListener('click', e => {
      let target = e.target;
      if (target.tagName !== 'BUTTON') {
        target = target.closest('button');
      }
      if (!target) return;
      
      const txt = target.textContent || '';
      // If clicking pause (button currently says Pause and will pause the sim)
      if (txt.includes('Pause') || txt.includes('⏸') || txt.includes('Stop')) {
        // Give the simulation a tiny moment to pause, then record the snapshot
        setTimeout(() => {
          ExperimentPanel.recordDataPoint();
        }, 50);
      }
    });
  }
};

// Auto-load Chart.js and init
(function(){
  if (typeof Chart === 'undefined') {
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    s.onload = () => {
      // Small delay to ensure SIM_VARIABLES is set by the page
      setTimeout(() => ExperimentPanel.init(), 100);
    };
    document.head.appendChild(s);
  } else {
    setTimeout(() => ExperimentPanel.init(), 100);
  }
})();
