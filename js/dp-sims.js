const DP_SIMS = [
  {
    id: "gravity-lab",
    title: "Gravity Lab",
    icon: "🪐",
    topic: "D.1",
    topicName: "Gravitational Fields",
    description: "Explore gravitational force, inverse-square law, orbits, and drag in an interactive space environment.",
    file: "sims/gravity-lab.html"
  },
  {
    id: "derived-quantities-lab",
    title: "Derived Quantities Lab",
    icon: "📐",
    topic: "A.1",
    topicName: "Measurements & Uncertainties",
    description: "Explore how derived quantities are calculated from base measurements.",
    file: "sims/derived-quantities-lab.html"
  },
  {
    id: "particle-model",
    title: "Particle Model",
    icon: "🔬",
    topic: "B.1",
    topicName: "Thermal Energy Transfers",
    description: "Visualise how particles behave in solids, liquids, and gases. Explore temperature, energy, and state changes.",
    file: "sims/particle-model.html"
  },
  {
    id: "motion-lab",
    title: "Motion Lab",
    icon: "🏃",
    topic: "A.1",
    topicName: "Kinematics",
    description: "Explore distance, displacement, velocity, and acceleration with waypoints and real-time graphs.",
    file: "sims/motion-lab.html"
  },
  {
    id: "torque-lab",
    title: "Torque Lab",
    icon: "⚙️",
    topic: "A.4",
    topicName: "Forces – Torque & Moments",
    description: "Explore torque, levers, pulleys, and rotational equilibrium. Balance forces and discover the conditions for equilibrium.",
    file: "sims/torque-lab.html"
  },
  {
    id: "moment-of-inertia-3d",
    title: "Moment of Inertia",
    icon: "🔄",
    topic: "A.4",
    topicName: "Forces – Rotational Dynamics",
    description: "Compare rotational inertia of different shapes. Explore angular acceleration, rolling, and the parallel axis theorem.",
    file: "sims/moment-of-inertia.html"
  },
    {
    id: "thermal-physics",
    title: "Thermal Physics Lab",
    icon: "🌡️",
    topic: "B.1",
    topicName: "Thermal Energy Transfers",
    description: "Explore temperature, heat, specific heat capacity, latent heat, and heating curves with interactive experiments.",
    file: "sims/thermal-physics.html"
  },
    {
    id: "thermal-conduction",
    title: "Thermal Conduction",
    icon: "🔥",
    topic: "B.1",
    topicName: "Thermal Conduction",
    description: "Explore conduction, thermal conductivity, Fourier's law, R-values, and insulation with interactive experiments.",
    file: "sims/thermal-conduction.html"
  },
    {
    id: "stability-3d",
    title: "Stability & Toppling 3D",
    icon: "🧱",
    topic: "A.4",
    topicName: "Rigid Body Mechanics – Stability",
    description: "Explore centre of gravity, base of support, stability conditions, and critical toppling angles in 3D.",
    file: "sims/stability-3d.html"
  },
    {
    id: "heat-transfer-modes",
    title: "Heat Transfer Modes",
    icon: "♨️",
    topic: "B.1",
    topicName: "Thermal Energy Transfers",
    description: "Compare conduction, convection, and radiation. Explore Stefan-Boltzmann law, Newton's cooling, and emissivity.",
    file: "sims/heat-transfer-modes.html"
  },
    {
    id: "blackbody-radiation",
    title: "Blackbody Radiation",
    icon: "☀️",
    topic: "B.1",
    topicName: "Thermal Radiation & Quantum",
    description: "Explore Planck curves, Wien's displacement law, Stefan-Boltzmann, and the ultraviolet catastrophe.",
    file: "sims/blackbody-radiation.html"
  },
  {
    id: "ideal-gas-law-2d",
    title: "Ideal Gas Law Simulator",
    icon: "💨",
    topic: "B.3",
    topicName: "Gas Laws",
    description: "Explore Boyle's, Charles', and Gay-Lussac's laws. Visualise PV=nRT with kinetic particle model and Maxwell-Boltzmann distributions.",
    file: "sims/ideal-gas-law.html"
  },
  {
    id: "circuit-builder",
    title: "Circuit Builder Lab",
    icon: "⚡",
    topic: "B.5",
    topicName: "Current and Circuits",
    description: "Build series and parallel circuits. Explore Ohm's law, Kirchhoff's rules, V-I characteristics, EMF and internal resistance.",
    file: "sims/circuit-builder.html"
  },
  {
    id: "shm",
    title: "Simple Harmonic Motion",
    icon: "〰️",
    topic: "C.1",
    topicName: "Simple Harmonic Motion",
    description: "Explore springs, pendulums, damping, and resonance. Visualise amplitude, period, energy transfer, and phase space.",
    file: "sims/shm.html"
  },
  {
    id: "waves-lab-v3",
    title: "Waves and Oscillations Lab",
    icon: "🌊",
    topic: "C.2",
    topicName: "Wave Model",
    description: "Explore transverse, longitudinal, water, sound, and light waves. Visualise wavelength, frequency, amplitude, and wave speed.",
    file: "sims/waves-lab.html"
  },
    {
    id: "wave-phenomena-v3",
    title: "Wave Phenomena Lab",
    icon: "🔮",
    topic: "C.3",
    topicName: "Wave Phenomena",
    description: "Explore reflection, refraction, diffraction, interference, and dispersion. Visualise wavefronts and Snell's law.",
    file: "sims/wave-phenomena.html"
  },
    {
    id: "kepler-laws",
    title: "Kepler's Laws",
    icon: "🪐",
    topic: "D.1",
    topicName: "Gravitational Fields",
    description: "Explore elliptical orbits, equal areas in equal times, and the T²∝a³ relationship. Visualise orbital mechanics.",
    file: "sims/kepler-laws.html"
  },
    {
    id: "doppler-effect",
    title: "Doppler Effect Lab",
    icon: "🔊",
    topic: "C.5",
    topicName: "Doppler Effect",
    description: "Explore the Doppler effect for sound and light. Visualise moving sources, shock waves, Mach cones, and redshift.",
    file: "sims/doppler-effect.html"
  },
  {
  id: 'density-lab',
  title: 'Density Lab',
  topic: 'B.3',
  topicName: 'Matter & States',
  grade: ['DP', 'MYP'],
  level: 'both',
  theme: 'B',
  concepts: ['density', 'buoyancy', 'Archimedes principle', 'floating', 'sinking', 'mass', 'volume'],
  difficulty: 'foundational',
  path: 'sims/density-lab.html'
},
 {
  id: 'energy-efficiency-lab',
  title: 'Energy Efficiency Lab',
  topic: 'B.2',
  topicName: 'Energy Transfers',
  grade: ['MYP5', 'DP'],
  level: 'both',
  theme: 'B',
  concepts: ['efficiency', 'energy-transfer', 'sankey-diagrams', 'power', 'cost'],
  difficulty: 'intermediate',
  path: 'sims/energy-efficiency.html'
},
 
];
