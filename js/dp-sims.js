const DP_SIMS = [
  <nav>
  <div style="display:flex;align-items:center;gap:14px">
    <a href="../index.html" class="nav-logo">Atul Soral Physicism</a>
    <a href="../dp-simulations.html">← All Simulations</a>
  </div>
  <div style="display:flex;gap:8px;align-items:center;">
    <button class="nav-btn" id="themeBtn">☀️</button>
    <a href="../dp-simulations.html" class="nav-btn" style="text-decoration:none;">← Back</a>
    <a href="../index.html" class="nav-btn" style="text-decoration:none;">Home</a>
    <a href="../myp-dashboard.html" class="nav-btn" style="text-decoration:none;">MYP</a>
    <a href="../dp-dashboard.html" class="nav-btn" style="text-decoration:none;">DP</a>
  </div>
</nav>
  {
    id: "gravitational-force",
    title: "Gravitational Force Simulator",
    icon: "🌍",
    topic: "D.1",
    topicName: "Gravitational Fields",
    description: "Explore gravitational attraction between masses. Adjust mass, distance, and see the force change in real time.",
    file: "sims/gravitational-force.html"
  }
  {
  id: 'derived-quantities-lab',
  title: 'Derived Quantities Lab',
  icon: '📐',
  topic: 'A.1',
  topicName: 'Measurements & Uncertainties',
  description: 'Explore how derived quantities are calculated from base measurements.',
  file: 'sims/derived-quantities-lab.html'
}

  // To add a new simulator:
  // 1. Create an HTML file in the sims/ folder
  // 2. Add an object here with id, title, icon, topic, topicName, description, file
  // 3. Commit and push — it appears automatically
];
