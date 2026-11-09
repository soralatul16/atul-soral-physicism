const DP_SIMS = [
  { id: "stationary-waves", title: "Stationary Waves", icon: "🎻", topic: "8.1", topicName: "Superposition · Cambridge A Level", description: "Formation of standing waves, nodes & antinodes, harmonics on strings, air columns and microwaves.", file: "sims/stationary-waves.html" },
  { id: "diffraction", title: "Diffraction", icon: "🌊", topic: "8.2", topicName: "Superposition · Cambridge A Level", description: "Spreading of waves at a gap; gap-to-wavelength effect across water, sound, light, microwaves and radio.", file: "sims/diffraction.html" },
  { id: "interference", title: "Interference", icon: "💫", topic: "8.3", topicName: "Superposition · Cambridge A Level", description: "Superposition, coherence, two-source experiments and Young's double slit with λ = ax/D.", file: "sims/interference.html" },
  {id:"progressive-waves", title:"7.1 Progressive Waves", icon:"🌊", topic:"7.1", topicName:"Waves · Cambridge A Level", description:"Build every wave quantity — displacement, amplitude, wavelength, period, frequency and phase difference — then the CRO, the v = fλ derivation, and intensity ∝ amplitude², with worked examples and a quiz.", file:"sims/progressive-waves.html"},
  {id:"transverse-longitudinal-waves", title:"7.2 Transverse & Longitudinal Waves", icon:"〰️", topic:"7.2", topicName:"Waves · Cambridge A Level", description:"Compare transverse and longitudinal waves side by side and master the exam skill of reading a longitudinal displacement graph to find compressions and rarefactions.", file:"sims/transverse-longitudinal-waves.html"},
  {id:"sound-frequency-wavelength", title:"7.3 Frequency & Wavelength of Sound", icon:"🔊", topic:"7.3", topicName:"Waves · Cambridge A Level", description:"Measure the frequency of sound on a calibrated oscilloscope and its wavelength from the nodes of a stationary wave, then combine them to find the speed of sound.", file:"sims/sound-frequency-wavelength.html"},
  {id:"doppler-effect-a-level", title:"7.4 The Doppler Effect", icon:"🚑", topic:"7.4", topicName:"Waves · Cambridge A Level", description:"See wavefronts bunch ahead of a moving source and stretch behind, use fₒ = fₛv/(v ± vₛ), and watch the pitch step down as a siren flies past.", file:"sims/doppler-effect-a-level.html"},
  {id:"electromagnetic-spectrum", title:"7.5 The Electromagnetic Spectrum", icon:"🌈", topic:"7.5", topicName:"Waves · Cambridge A Level", description:"Explore the spectrum from radio to γ-rays on a log scale, see the oscillating E and B fields of an EM wave, and compare every region's wavelength, frequency, production and uses.", file:"sims/electromagnetic-spectrum.html"},
  {id:"polarisation", title:"7.6 Polarisation", icon:"🕶️", topic:"7.6", topicName:"Waves · Cambridge A Level", description:"See why only transverse waves polarise, then use Malus's law I = I₀cos²θ for one analyser and for a series of filters — including the crossed-polariser surprise.", file:"sims/polarisation.html"},
  {id:"hookes-law", title:"Hooke's Law & Elastic Energy", icon:"🪝", topic:"A.3", topicName:"Work, energy and power", description:"Hang loads on soft, stiff or copper-wire springs, watch the extension, and plot force–extension graphs to find the spring constant and the elastic energy stored — with a built-in, auto-marking practical worksheet you can print.", file:"sims/hookes-law.html"},
  {id:"terminal-velocity", title:"Free Fall & Terminal Velocity", icon:"🪂", topic:"A.2", topicName:"Forces and momentum", description:"Drop a skydiver, sink a steel ball through water, release a feather, or watch true free fall on the Moon — weight, drag and upthrust battle to set the terminal velocity, with a live velocity–time graph and CSV export.", file:"sims/terminal-velocity.html"},
  {id:"circular-motion", title:"Uniform Circular Motion & Centripetal Force", icon:"🎡", topic:"A.2", topicName:"Forces and momentum", description:"Ball, car, planets or an electron — change v, r and m, watch the force and velocity vectors, and fit a graph like an IB IA.", file:"sims/circular-motion.html"},
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
    id: "current-drift-velocity",
    title: "Drift Velocity of Charges",
    icon: "⚡",
    topic: "B.5",
    topicName: "Current and Circuits",
    description: "Watch charges drift through a conductor and explore I = nAvq.",
    file: "sims/current-drift-velocity.html"
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
    id: "distance-displacement",
    title: "Distance vs Displacement",
    icon: "📏",
    topic: "A.1",
    topicName: "Kinematics",
    description: "Compare scalar distance and vector displacement with linear, circular, and freeform path modes. Includes real-life examples and challenges.",
    file: "sims/distance-displacement.html"
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
    id: "torque-turning-effect",
    title: "Torque & the Turning Effect",
    icon: "🔧",
    topic: "A.4",
    topicName: "Forces – Torque & Moments",
    description: "Explore the moment of a force, τ = Fr sinθ. Change the force, its distance from the pivot, and the angle, then plot torque against sin θ to investigate the turning effect and the conditions for rotational equilibrium.",
    file: "sims/torque-turning-effect.html"
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
    id: "density-lab",
    title: "Density Lab",
    icon: "⚖️",
    topic: "B.3",
    topicName: "Matter & States",
    description: "Explore density, buoyancy, and Archimedes' principle. Drop objects into different fluids, adjust mass and volume, and observe floating vs sinking.",
    file: "sims/density-lab.html"
  },
  {
    id: "energy-efficiency-lab",
    title: "Energy Efficiency Lab",
    icon: "⚡",
    topic: "B.2",
    topicName: "Energy Transfers",
    description: "Compare efficiency of different devices with animated Sankey diagrams. Explore energy transfers, calculate running costs, and investigate load effects.",
    file: "sims/energy-efficiency.html"
  },
  {id:"dp-e3-radioactive-decay", title:"E.3 Radioactive Decay", icon:"☢️", topic:"E.3", topicName:"Radioactive decay · IB DP (SL &amp; HL)", description:"The whole of E.3 in one page. Build isotopes proton by proton, find mass defect and binding energy from real atomic masses, and switch off the strong force to watch two protons fly apart. Watch α, β⁻, β⁺ and γ decay in slow motion and identify the missing particle, follow uranium-238 to lead-206 on an N–Z chart, and see the evidence for nuclear energy levels and the neutrino in decay spectra (HL). Test penetration with paper, aluminium and lead, watch tracks in a cloud chamber, measure background radiation, roll dice to see random decay, and measure the half-life of protactinium-234m in a virtual experiment. Includes the decay law N = N₀e^(−λt) (HL), carbon dating, a choose-the-isotope game, 9 uses of radioactivity, a history timeline, notes with all four guiding questions and every linking question, misconceptions, a quiz, an unlimited calculation drill, 12 Paper 1A/1B/2 sets and a timed mini-mock.", file:"sims/dp-e3-radioactive-decay.html"},

  {
    id: "electromagnetism-lab",
    title: "Electromagnetism Lab",
    icon: "🧲",
    topic: "D.3",
    topicName: "Motion in EM Fields",
    description: "Explore magnetic fields, motor effect, electromagnetic induction, generators, and transformers. Probe field strength, move magnets through coils, and build AC waveforms.",
    file: "sims/electromagnetism.html"
  },
  {
    id: "moments-equilibrium",
    title: "Moments & Equilibrium",
    icon: "⚖️",
    topic: "A.4",
    topicName: "Forces – Moments & Equilibrium",
    description: "Hang loads on a pivoted beam and watch it turn. Balance clockwise and anticlockwise moments, record readings, and plot a graph to reveal the principle of moments — with a printable practical worksheet.",
    file: "sims/moments-equilibrium.html"
  },
  {
    id: "centre-of-gravity-stability",
    title: "Centre of Gravity & Stability",
    icon: "🧱",
    topic: "A.4",
    topicName: "Forces – Centre of Gravity & Stability",
    description: "Tilt an object until it topples. See the centre of gravity and the weight's line of action, find the critical angle, and discover why a wide base and low centre of gravity give stability — with a printable practical worksheet.",
    file: "sims/centre-of-gravity-stability.html"
  },
  {
    id: "momentum-impulse",
    title: "Momentum & Impulse",
    icon: "↔️",
    topic: "A.2",
    topicName: "Forces – Momentum & Impulse",
    description: "Launch carts, guns, boats and billiard balls; watch momentum stay conserved in every collision and explosion, then investigate how a longer contact time softens the force (F = Δp/Δt) — with a printable practical worksheet.",
    file: "sims/momentum-impulse.html"
  },


  {
    id: "projectile-motion",
    title: "Projectile Motion",
    icon: "🎯",
    topic: "A.1",
    topicName: "Kinematics",
    description: "Launch a projectile and watch its velocity split into a constant horizontal push and a gravity-driven vertical part. Change the speed, angle and gravity, trace the parabola, and plot range against sin 2θ to find the angle for maximum range — with a printable practical worksheet.",
    file: "projectile-motion.html"
  },
  {
    id: "bohr-model-spectra",
    title: "Bohr Model, Spectra & the Nucleus",
    icon: "⚛️",
    topic: "E.1",
    topicName: "Atomic Structure & Spectra",
    description: "Build the Bohr model one step at a time, jump electrons between energy levels to emit photons and read off the hydrogen line spectrum, then explore nuclear size, density and the strong nuclear force.",
    file: "sims/bohr-model-spectra-nucleus.html"
  },
  {
    id: "photoelectric-effect",
    title: "The Photoelectric Effect (HL)",
    icon: "💡",
    topic: "E.2",
    topicName: "Quantum Physics",
    description: "Shine light on a metal and knock electrons out: explore threshold frequency, stopping voltage and Einstein's equation E_max = hf − Φ, then build I–V and stopping-voltage graphs to measure Planck's constant.",
    file: "sims/photoelectric-effect.html"
  },
  {
    id: "electric-potential",
    title: "Electric Potential & Potential Energy",
    icon: "🔋",
    topic: "D.2",
    topicName: "Electric & Magnetic Fields (HL)",
    description: "Build the energy picture of the electric field: the potential energy of a pair of charges, the scalar potential V = kQ/r, the potential gradient E = −ΔV/Δr, and the work done moving charges across equipotentials — with step-by-step derivations, worked examples and a quiz.",
    file: "sims/electric-potential.html"
  },
  {
    id: "rigid-body-torque",
    title: "Rigid Body 1 · Torque & Rotational Equilibrium",
    icon: "🔩",
    topic: "A.4",
    topicName: "Rigid Body Mechanics (HL)",
    description: "Part 1 of 4. Explore torque τ = Fr sinθ with a live turning-effect gauge, the lever-arm view, moment of inertia across shapes, rotational equilibrium on a draggable beam, and unbalanced torque leading to τ = Iα — with derivations, worked examples and a quiz.",
    file: "sims/rigid-body-torque.html"
  },
  {
    id: "rigid-body-kinematics",
    title: "Rigid Body 2 · Rotational Kinematics",
    icon: "🌀",
    topic: "A.4",
    topicName: "Rigid Body Mechanics (HL)",
    description: "Part 2 of 4. Angular displacement and the radian, angular velocity and v = rω, angular acceleration and a = rα, the four equations of uniform angular acceleration with a live predictor, and the linear ↔ rotational link via a rolling wheel — with derivations, worked examples and a quiz.",
    file: "sims/rigid-body-kinematics.html"
  },
  {
    id: "rigid-body-inertia",
    title: "Rigid Body 3 · Moment of Inertia & τ = Iα",
    icon: "🌀",
    topic: "A.4",
    topicName: "Rigid Body Mechanics (HL)",
    description: "Part 3 of 4. Build the moment of inertia from I = Σmr², compare the standard-shape coefficients, derive and apply Newton's second law for rotation τ = Iα, see the F=ma ↔ τ=Iα analogy, and explore how moving mass or coupling bodies changes I — with derivations, worked examples and a quiz.",
    file: "sims/rigid-body-inertia.html"
  },
  {
    id: "rigid-body-angular-momentum",
    title: "Rigid Body 4 · Angular Momentum & Rotational Energy",
    icon: "🌀",
    topic: "A.4",
    topicName: "Rigid body mechanics",
    description: "Angular momentum L = Iω and its conservation (the figure-skater effect), angular impulse ΔL = τΔt, rotational kinetic energy ½Iω² = L²/2I, and a coupled-disc rotational collision. Higher Level.",
    file: "sims/rigid-body-angular-momentum.html"
  },
  {id:"igcse-centre-of-gravity", title:"Centre of Gravity", icon:"🎯", topic:"1.5.3", topicName:"Forces · IGCSE", description:"Core IGCSE 1.5.3 — define the centre of gravity, find it for an irregular lamina with a plumb line, and investigate stability and toppling with a record-and-plot graph and a printable activity sheet.", file:"sims/igcse-centre-of-gravity.html", level:"IGCSE"},
  {id:"igcse-momentum", title:"Momentum & Impulse", icon:"🎱", topic:"1.6", topicName:"Momentum · IGCSE", description:"IGCSE 1.6 Supplement — p = mv, impulse = FΔt = Δ(mv), conservation of momentum in 1D collisions, and F = Δp/Δt, with an egg-drop force demo, a launch-and-coast impulse animation, a guided investigate graph and a printable activity sheet.", file:"sims/igcse-momentum.html", level:"IGCSE"},
  {
    id: "nuclear-decay-series",
    title: "Nuclear Decay Series & Binding Energy",
    icon: "☢️",
    topic: "E.3",
    topicName: "Radioactive Decay & Binding Energy",
    description: "Walk the uranium-238 decay series one step at a time on an N–Z chart (α and β⁻), explore β⁺ emission and PET imaging with fluorine-18, then travel the binding-energy-per-nucleon curve to see fusion, fission and why the chain ends at lead.",
    file: "sims/nuclear-decay-series.html"
  },
  {id:"igcse-energy", title:"Energy: Stores, Transfers & Conservation", icon:"🔋", topic:"1.7.1", topicName:"Energy, work and power · IGCSE", description:"IGCSE 1.7.1 Core + Supplement. Explore the seven energy stores and the transfer pathways with interactive pictures and animations, watch energy move between GPE, kinetic and thermal stores on a live track, build multi-stage energy chains with Sankey diagrams, and practise with 10 step-by-step IGCSE question sets using Ek = ½mv² and ΔEp = mgΔh.", file:"sims/igcse-energy.html", level:"IGCSE"},
  {id:"igcse-work", title:"Work: W = Fd = ΔE", icon:"🏋️", topic:"1.7.2", topicName:"Energy, work and power · IGCSE", description:"IGCSE 1.7.2 Core. Push and lift a crate to see that work done equals energy transferred, decide when a force does no work, find work from the area under force–distance graphs, compare electrical and mechanical work in a motor, and practise with 10 step-by-step IGCSE question sets.", file:"sims/igcse-work.html", level:"IGCSE"},
  {id:"igcse-energy-resources", title:"Energy Resources & Efficiency", icon:"🌍", topic:"1.7.3", topicName:"Energy, work and power · IGCSE", description:"IGCSE 1.7.3 Core + Supplement. Explore ten energy resources with interactive pictures and animations, build a boiler–turbine–generator power station with a live Sankey diagram, calculate efficiency from energy and power, compare resources on renewability, availability, reliability, scale and environmental impact, bust 18 common misconceptions, and practise with 10 step-by-step IGCSE question sets.", file:"sims/igcse-energy-resources.html", level:"IGCSE"},
  {id:"igcse-momentum-lab", title:"Momentum, Impulse & Force: Collision and Safety Labs", icon:"💥", topic:"1.6", topicName:"Momentum · IGCSE", description:"IGCSE 1.6 Supplement. Collide and explode trolleys with pause-and-explain at the moment of impact, see total momentum stay constant, drop eggs onto different surfaces and crash a car with seat belts, airbags and crumple zones to see F = Δp/Δt on a live force–time graph, bust 15 common misconceptions, and practise with 10 step-by-step IGCSE question sets.", file:"sims/igcse-momentum-lab.html", level:"IGCSE"},
  {id:"myp-waves", title:"Waves: Waves, Light, Sound & Water", icon:"🌊", topic:"Waves", topicName:"Waves · IB MYP", description:"IB MYP 4–5 Waves in one place, with four main tabs. Waves: transverse and longitudinal waves, wave properties, v = fλ and wave graphs. Light: reflection, plane and curved mirrors, refraction, lenses, total internal reflection, dispersion, rainbows and diffraction, with step-by-step ray diagrams. Sound: oscilloscope, tone vs note, music vs noise, speed of sound, echoes, reverberation, refraction and diffraction of sound, ultrasound, sonar and noise pollution, all with sound you can hear. Water waves: ripple tank, reflection, refraction, diffraction, interference and tsunamis. Includes virtual experiments, misconceptions, quizzes and MYP criteria A–D practice.", file:"sims/myp-waves.html", level:"MYP"},
  {id:"dp-d3-motion-em-fields", title:"D.3 Motion in Electromagnetic Fields", icon:"🧲", topic:"D.3", topicName:"Motion in electromagnetic fields · IB DP (SL & HL)", description:"The whole of D.3 in one page. Fire charges into electric fields (parabolas, electron gun, oscilloscope, stopping a charge) and magnetic fields (circles, helix, field regions, identify the particle), balance a velocity selector, run a mass spectrometer and Thomson’s method, measure B with a current balance, explore parallel wires, and find e/m in a fine-beam tube with error bars. Includes notes with both guiding questions and all linking questions, a direction trainer, a ratio drill, sketch-the-path questions, misconceptions, a quiz, 12 mixed Paper 1A/1B/2 sets and a timed mini-mock.", file:"sims/dp-d3-motion-em-fields.html"},
  {id:"dp-d4-induction", title:"D.4 Induction (HL)", icon:"⚡", topic:"D.4", topicName:"Induction · IB DP (HL only)", description:"The whole of D.4 in one page. Explore flux Φ = BA cos θ, push a rod along rails (ε = BvL, with forces and power), move a magnet in and out of a coil or let it bounce on a spring, change B over time, and train Lenz’s law directions. Also: a magnet falling through copper, plastic and slotted tubes, a universe where Lenz’s law is reversed, and a 3D generator with slip rings or a commutator. Then predict emf graphs, design a more powerful generator, time a falling magnet and find the mystery B in a crank generator. Includes notes with all three guiding questions and both linking questions, an efficiency chart for different energy sources, misconceptions, a quiz, a ratio drill, read-the-graph and “is an emf induced?” tasks, 11 mixed Paper 1A/1B/2 sets and a timed mini-mock.", file:"sims/dp-d4-induction.html"},
  {id:"igcse-waves", title:"Waves: Waves, Light, Sound & Water", icon:"🌊", topic:"3", topicName:"Waves · IGCSE", description:"Waves, light and sound in one place, with four main tabs. Waves: transverse and longitudinal waves, wave properties, v = fλ and wave graphs. Light: reflection, plane and curved mirrors, refraction, real and apparent depth, lenses, total internal reflection (diamonds, optical fibres, mirages, prisms), dispersion, rainbows and diffraction, with step-by-step ray diagrams. Sound: oscilloscope, speed of sound, echoes, ultrasound and sonar, with sound you can hear. Water waves: ripple tank, reflection, refraction, diffraction and interference. Includes virtual experiments, misconceptions, quizzes and practice questions.", file:"sims/myp-waves.html", level:"IGCSE"},
  {id:"dp-e5-fusion-stars", title:"E.5 Fusion and Stars", icon:"⭐", topic:"E.5", topicName:"Fusion and stars · IB DP (SL &amp; HL)", description:"The whole of E.5 in one page. Squeeze and puff up a star to see gravity and pressure in equilibrium, model a star with the gas laws, step through the proton–proton chain, and see why fusion needs high temperature, high density and quantum tunnelling. Explore black-body curves with Wien’s law and L = σ4πR²T⁴, match absorption spectra to elements, measure parallax and convert between AU, light years and parsecs, tap 31 real stars on an HR diagram with lines of constant radius and the instability strip, calculate stellar radii, and follow the life of a star of any mass to a white dwarf, neutron star or black hole. Includes notes with all three guiding questions and every linking question, 10 famous stars, 9 technologies, a history timeline, misconceptions, a quiz, an unlimited calculation drill, 9 Paper 1A/1B/2 sets and a timed mini-mock.", file:"sims/dp-e5-fusion-stars.html"},
{id:"myp-electricity", title:"Electricity & Magnetism: Static, Current, Circuits, Home & Magnetism", icon:"⚡", topic:"Electricity", topicName:"Electricity and magnetism · IB MYP", description:"IB MYP 4–5 Electricity and magnetism in one place, with five main tabs and a unit hub. Static: charging by friction, contact and induction, the gold-leaf electroscope, electric fields, lightning and lightning conductors, photocopiers and paint spraying. Current: conduction with drifting, colliding electrons, Ohm's law, V–I graphs for ohmic and non-ohmic conductors, emf and internal resistance. Circuits: 40 circuit symbols with a symbol game, a circuit builder with real short circuits, series and parallel rules, LDR, thermistor and diode sensor circuits with an alarm you can hear, and fault-finding. Home: ac vs dc, power and the electricity bill, live, neutral and earth, fuses, MCBs, RCDs and double insulation, and sustainability. Magnetism: fields and the right-hand grip rule, Fleming's left- and right-hand rules, the dc motor, induction, generators, transformers and transmission, plus relays, bells, loudspeakers, microphones, MRI and maglev. Includes three virtual labs (ohmic/non-ohmic, series/parallel, electromagnet strength), misconceptions, quizzes, MYP criteria A–D practice with exam-style diagrams, a confidence checklist, formula sheet, glossary, a mixed timed paper and a printable progress report.", file:"sims/myp-electricity.html", level:"MYP"},

{id:"igcse-electricity", title:"Electricity & Magnetism: Magnetism, Electrical Quantities, Circuits, Safety & Electromagnetic Effects", icon:"⚡", topic:"Electricity", topicName:"Electricity and magnetism · Cambridge IGCSE", description:"Cambridge IGCSE Physics Electricity and magnetism, in the same order as the syllabus, with a Core / Extended switch that shows or hides Supplement content. Simple phenomena of magnetism: poles, magnetic materials, induced magnetism, soft iron and steel, plotting field lines with compasses and iron filings, uses of magnets. Electrical quantities: charging by friction, conductors and insulators, electric fields, current and reading meters, e.m.f. and p.d., resistance and wire length and thickness, I–V graphs (I on the y-axis) and power, energy and cost. Electric circuits: symbols with a symbol game, a circuit builder, series and parallel rules, LDRs, thermistors, diodes and potential dividers, and fault-finding. Electrical safety: spot the hazard, choosing fuses, trip switches, earthing and double insulation. Electromagnetic effects: induction, the a.c. generator, fields of wires and solenoids, relays and loudspeakers, force on a wire, beams of charged particles, the d.c. motor, transformers and transmission. Includes three experiments, true-or-false checks, Paper 1/2-style multiple choice, Paper 3/4-style structured questions with mark schemes, a syllabus map, checklist, formula sheet, glossary, a timed paper and a printable progress report.", file:"sims/igcse-electricity.html", level:"IGCSE"},

{id:"igcse-measurement", title:"Physical Quantities & Measurement Techniques", icon:"📏", topic:"Motion, forces and energy", topicName:"Motion, forces and energy · Cambridge IGCSE", description:"Cambridge IGCSE Physics 1.1 Physical quantities and measurement techniques, with a Core / Extended switch. Measure lengths with a ruler (start readings, parallax error) and volumes with measuring cylinders of different sizes (meniscus, eye level, displacement of water). Race a stopwatch against light gates to see how reaction time affects short and long intervals, and choose the right timer. Time 1, 5, 10 or 20 oscillations of a pendulum with a fiducial marker, plot period against length, and find small thicknesses by measuring multiples. Extended: sort scalars and vectors, and find the resultant of two forces or velocities at right angles by calculation and by scale drawing. Includes notes, true-or-false checks, Paper 1/2-style multiple choice, Paper 3/4-style structured questions that open one part at a time with key-word mark schemes, Paper 6-style graph plotting, a timed paper, a checklist, key equations and a glossary.", file:"sims/igcse-measurement.html", level:"IGCSE"},
{id:"igcse-motion", title:"1.2 Motion", icon:"🏎️", topic:"Motion, forces and energy", topicName:"Motion, forces and energy · Cambridge IGCSE", description:"Cambridge IGCSE Physics 1.2 Motion, with a Core / Extended switch. Start with scalars and vectors (arrow lab, sorting game, resultants at right angles on Extended) and a story-based tour of distance and displacement. Race two runners to tell speed from velocity, use v = s/t with unit conversions, and practise average speed. Build journeys (a bus between stops, a walker, a car at traffic lights, a 100 m sprinter, a cyclist on a real hill) and watch the distance–time and speed–time graphs draw live; read values, measure gradients (speed, and acceleration on Extended) and shade the area under a speed–time graph to find distance. Describe motion from graph shapes and data tables, and match descriptions to sketch graphs. Extended: measure a trolley's acceleration with light gates, a = Δv/Δt, deceleration as negative acceleration, and falling with and without air resistance, including terminal velocity and parachutes. Includes notes, true-or-false checks, Paper 1/2-style multiple choice, Paper 3/4-style structured questions that open one part at a time with key-word mark schemes, Paper 6-style graph plotting, a timed paper, a checklist, a 15-minute revision mode, key equations and a glossary.", file:"sims/igcse-motion.html", level:"IGCSE"},

];
