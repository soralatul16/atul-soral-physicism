/* dp-formulas.js · every equation in the DP data booklet (first assessment 2025).
   One list for the Data Booklet and the Formula Bank: edit it here and both pages update.
   eq = equation, note = what the symbols mean (written "x = meaning, y = meaning"), scope = "sl" or "hl". */
window.DP_FORMULAS = {
  // general sub-tabs
  "math": [
    { name: "Area of triangle", eq: "A = ½bh", note: "b = base, h = height", scope: "sl" },
    { name: "Area of circle", eq: "A = πr²", note: "r = radius", scope: "sl" },
    { name: "Circumference of circle", eq: "C = 2πr", note: "r = radius", scope: "sl" },
    { name: "Volume of cuboid", eq: "V = lwh", note: "l = length, w = width, h = height", scope: "sl" },
    { name: "Volume of cylinder", eq: "V = πr²h", note: "r = radius, h = height", scope: "sl" },
    { name: "Volume of sphere", eq: "V = ⁴/₃πr³", note: "r = radius", scope: "sl" },
    { name: "Curved surface area of cylinder", eq: "A = 2πrh", note: "r = radius, h = height", scope: "sl" },
    { name: "Horizontal vector component", eq: "A_H = A cos θ", note: "A = vector magnitude, θ = angle to horizontal", scope: "sl" },
    { name: "Vertical vector component", eq: "A_V = A sin θ", note: "A = vector magnitude, θ = angle to horizontal", scope: "sl" },
    { name: "Trigonometric relation", eq: "tan θ = sin θ / cos θ", note: "θ = angle", scope: "sl" },
    { name: "Trigonometric identity", eq: "sin²θ + cos²θ = 1", note: "θ = angle", scope: "sl" }
  ],
  "uncertainties": [
    { name: "Addition / Subtraction uncertainty", eq: "y = a ± b  →  Δy = Δa + Δb", note: "Absolute uncertainties add together", scope: "sl" },
    { name: "Multiplication / Division uncertainty", eq: "y = ab/c  →  Δy/y = Δa/a + Δb/b + Δc/c", note: "Fractional / percentage uncertainties add together", scope: "sl" },
    { name: "Power uncertainty", eq: "y = aⁿ  →  Δy/y = n × Δa/a", note: "Fractional uncertainty multiplied by exponent magnitude", scope: "sl" }
  ],
  "constants": [
    { name: "Acceleration of gravity (Earth surface)", eq: "g = 9.8 m s⁻²", note: "Average gravitational acceleration on Earth's surface", scope: "sl" },
    { name: "Gravitational constant", eq: "G = 6.67 × 10⁻¹¹ N m² kg⁻²", note: "Universal constant of gravitation", scope: "sl" },
    { name: "Avogadro's constant", eq: "N_A = 6.02 × 10²³ mol⁻¹", note: "Number of elementary entities per mole", scope: "sl" },
    { name: "Gas constant", eq: "R = 8.31 J K⁻¹ mol⁻¹", note: "Universal gas constant", scope: "sl" },
    { name: "Boltzmann constant", eq: "k_B = 1.38 × 10⁻²³ J K⁻¹", note: "Gas constant divided by Avogadro constant", scope: "sl" },
    { name: "Stefan-Boltzmann constant", eq: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴", note: "Constant of proportionality for blackbody radiation", scope: "sl" },
    { name: "Coulomb constant", eq: "k = 8.99 × 10⁹ N m² C⁻²", note: "Electrostatic constant, 1 / (4πε₀)", scope: "sl" },
    { name: "Permittivity of free space", eq: "ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²", note: "Vacuum electric permittivity", scope: "sl" },
    { name: "Permeability of free space", eq: "μ₀ = 4π × 10⁻⁷ T m A⁻¹", note: "Vacuum magnetic permeability", scope: "sl" },
    { name: "Speed of light in vacuum", eq: "c = 3.00 × 10⁸ m s⁻¹", note: "Speed of electromagnetic waves", scope: "sl" },
    { name: "Planck's constant", eq: "h = 6.63 × 10⁻³⁴ J s", note: "Quantum of electromagnetic action", scope: "sl" },
    { name: "Elementary charge", eq: "e = 1.60 × 10⁻¹⁹ C", note: "Charge of a proton / electron magnitude", scope: "sl" },
    { name: "Electron rest mass", eq: "m_e = 9.11 × 10⁻³¹ kg = 0.000549 u = 0.511 MeV/c²", note: "Rest mass of electron", scope: "sl" },
    { name: "Proton rest mass", eq: "m_p = 1.673 × 10⁻²⁷ kg = 1.007276 u = 938 MeV/c²", note: "Rest mass of proton", scope: "sl" },
    { name: "Neutron rest mass", eq: "m_n = 1.675 × 10⁻²⁷ kg = 1.008665 u = 940 MeV/c²", note: "Rest mass of neutron", scope: "sl" },
    { name: "Unified atomic mass unit", eq: "u = 1.661 × 10⁻²⁷ kg = 931.5 MeV/c²", note: "1/12 the mass of a Carbon-12 atom", scope: "sl" },
    { name: "Solar constant", eq: "S = 1.36 × 10³ W m⁻²", note: "Solar intensity reaching top of Earth's atmosphere", scope: "sl" },
    { name: "Fermi radius", eq: "R₀ = 1.20 × 10⁻¹⁵ m", note: "Nuclear radius scale constant", scope: "sl" }
  ],
  "prefixes": [
    { name: "peta", eq: "P = 10¹⁵", note: "Prefix multiplier 1,000,000,000,000,000", scope: "sl" },
    { name: "tera", eq: "T = 10¹²", note: "Prefix multiplier 1,000,000,000,000", scope: "sl" },
    { name: "giga", eq: "G = 10⁹", note: "Prefix multiplier 1,000,000,000", scope: "sl" },
    { name: "mega", eq: "M = 10⁶", note: "Prefix multiplier 1,000,000", scope: "sl" },
    { name: "kilo", eq: "k = 10³", note: "Prefix multiplier 1,000", scope: "sl" },
    { name: "hecto", eq: "h = 10²", note: "Prefix multiplier 100", scope: "sl" },
    { name: "deca", eq: "da = 10¹", note: "Prefix multiplier 10", scope: "sl" },
    { name: "deci", eq: "d = 10⁻¹", note: "Prefix multiplier 0.1", scope: "sl" },
    { name: "centi", eq: "c = 10⁻²", note: "Prefix multiplier 0.01", scope: "sl" },
    { name: "milli", eq: "m = 10⁻³", note: "Prefix multiplier 0.001", scope: "sl" },
    { name: "micro", eq: "μ = 10⁻⁶", note: "Prefix multiplier 0.000001", scope: "sl" },
    { name: "nano", eq: "n = 10⁻⁹", note: "Prefix multiplier 10⁻⁹", scope: "sl" },
    { name: "pico", eq: "p = 10⁻¹²", note: "Prefix multiplier 10⁻¹²", scope: "sl" },
    { name: "femto", eq: "f = 10⁻¹⁵", note: "Prefix multiplier 10⁻¹⁵", scope: "sl" }
  ],
  "conversions": [
    { name: "Radian to degrees", eq: "1 rad = 180°/π", note: "Conversion from radians to degrees", scope: "sl" },
    { name: "Celsius to Kelvin", eq: "T(K) = T(°C) + 273", note: "Temperature scales offset conversion", scope: "sl" },
    { name: "Light year", eq: "1 ly = 9.46 × 10¹⁵ m", note: "Distance light travels in vacuum in 1 year", scope: "sl" },
    { name: "Parsec", eq: "1 pc = 3.26 ly", note: "Distance where 1 AU subtends angle of 1 arc-second", scope: "sl" },
    { name: "Astronomical unit", eq: "1 AU = 1.50 × 10¹¹ m", note: "Mean distance from center of Earth to center of Sun", scope: "sl" },
    { name: "Kilowatt-hour", eq: "1 kWh = 3.60 × 10⁶ J", note: "Energy dissipated in 1 hour at a rate of 1 kW", scope: "sl" },
    { name: "Planck constant & light speed product", eq: "hc = 1.99 × 10⁻²⁵ J m = 1.24 × 10⁻⁶ eV m", note: "Planck constant × speed of light in vacuum", scope: "sl" }
  ],
  "theme_A": [
    // A.1
    { topic: "A.1 Kinematics", name: "Average displacement", eq: "s = ½(u + v)t", note: "s = displacement, u = initial velocity, v = final velocity, t = time", scope: "sl" },
    { topic: "A.1 Kinematics", name: "Velocity-time relation", eq: "v = u + at", note: "v = final velocity, u = initial velocity, a = constant acceleration, t = time", scope: "sl" },
    { topic: "A.1 Kinematics", name: "Displacement-time relation", eq: "s = ut + ½at²", note: "s = displacement, u = initial velocity, a = constant acceleration, t = time", scope: "sl" },
    { topic: "A.1 Kinematics", name: "Velocity-displacement relation", eq: "v² = u² + 2as", note: "v = final velocity, u = initial velocity, a = constant acceleration, s = displacement", scope: "sl" },
    // A.2
    { topic: "A.2 Forces and Momentum", name: "Static friction limit", eq: "F_f ≤ μ_s F_N", note: "F_f = static frictional force, μ_s = static coefficient, F_N = normal force", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Dynamic friction force", eq: "F_f = μ_d F_N", note: "F_f = dynamic frictional force, μ_d = dynamic coefficient, F_N = normal force", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Hooke's Law (spring force)", eq: "F_H = -kx", note: "F_H = restoring force, k = spring constant, x = displacement", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Stokes' law (viscous drag)", eq: "F_d = 6πηrv", note: "F_d = drag force, η = fluid viscosity, r = sphere radius, v = speed", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Buoyancy force (Archimedes)", eq: "F_b = ρVg", note: "F_b = buoyant force, ρ = fluid density, V = submerged volume, g = gravity", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Gravitational force (weight)", eq: "F_g = mg", note: "F_g = weight, m = mass, g = gravitational field strength", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Linear momentum", eq: "p = mv", note: "p = momentum, m = mass, v = velocity", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Impulse (momentum change)", eq: "J = FΔt", note: "J = impulse, F = average resultant force, Δt = contact time", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Newton's 2nd Law (force & momentum)", eq: "F = ma = Δp/Δt", note: "F = resultant force, m = mass, a = acceleration, p = momentum, t = time", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Centripetal acceleration", eq: "a = v²/r = ω²r = 4π²r/T²", note: "a = centripetal acceleration, v = speed, r = radius, ω = angular speed, T = period", scope: "sl" },
    { topic: "A.2 Forces and Momentum", name: "Orbital speed relation", eq: "v = 2πr/T = ωr", note: "v = linear speed, r = radius, T = orbital period, ω = angular velocity", scope: "sl" },
    // A.3
    { topic: "A.3 Work, Energy, Power", name: "Work done by constant force", eq: "W = Fs cos θ", note: "W = work, F = force, s = displacement, θ = angle between force and displacement", scope: "sl" },
    { topic: "A.3 Work, Energy, Power", name: "Kinetic energy", eq: "E_k = ½mv² = p²/2m", note: "E_k = kinetic energy, m = mass, v = speed, p = momentum", scope: "sl" },
    { topic: "A.3 Work, Energy, Power", name: "Gravitational potential energy change", eq: "ΔE_p = mgh", note: "E_p = potential energy change, m = mass, g = gravity, h = height change", scope: "sl" },
    { topic: "A.3 Work, Energy, Power", name: "Elastic potential energy", eq: "E_H = ½kΔx²", note: "E_H = elastic potential energy, k = spring constant, Δx = extension", scope: "sl" },
    { topic: "A.3 Work, Energy, Power", name: "Power", eq: "P = ΔW/Δt = Fv", note: "P = power, W = work, t = time, F = force, v = speed", scope: "sl" },
    { topic: "A.3 Work, Energy, Power", name: "Efficiency", eq: "η = useful out / total in", note: "η = efficiency (ratio or percentage)", scope: "sl" },
    // A.4
    { topic: "A.4 Rigid Body Mechanics", name: "Torque definition", eq: "τ = Fr sin θ", note: "τ = torque, F = applied force, r = distance to pivot, θ = angle to line of action", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Average angular displacement", eq: "Δθ = (ω_f + ω_i)/2 × t", note: "θ = angular displacement, ω = angular velocity, t = time", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular velocity-time relation", eq: "ω_f = ω_i + αt", note: "ω_f = final angular speed, ω_i = initial angular speed, α = angular acceleration", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular displacement-time relation", eq: "Δθ = ω_i t + ½αt²", note: "θ = displacement, ω_i = initial speed, α = angular acceleration, t = time", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular velocity-displacement relation", eq: "ω_f² = ω_i² + 2αΔθ", note: "ω = angular speed, α = acceleration, θ = displacement", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Moment of inertia", eq: "I = Σmr²", note: "I = moment of inertia, m = point masses, r = distance from rotational axis", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Rotational Newton's 2nd Law", eq: "τ = Iα", note: "τ = resultant torque, I = moment of inertia, α = angular acceleration", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular momentum", eq: "L = Iω", note: "L = angular momentum, I = moment of inertia, ω = angular velocity", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular impulse (torque & time)", eq: "ΔL = τΔt", note: "L = angular momentum, τ = resultant torque, t = contact time", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Angular momentum change", eq: "ΔL = Δ(Iω)", note: "Variation of angular momentum for variable shape/inertia", scope: "hl" },
    { topic: "A.4 Rigid Body Mechanics", name: "Rotational kinetic energy", eq: "E_k = ½Iω² = L²/2I", note: "E_k = rotational kinetic energy, I = moment of inertia, ω = speed, L = momentum", scope: "hl" },
    // A.5
    { topic: "A.5 Galilean & Special Relativity", name: "Galilean position transformation", eq: "x' = x - vt", note: "Position coordinate in frame S' moving at constant speed v relative to S", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Galilean time transformation", eq: "t' = t", note: "Absolute time assumption in Galilean relativity", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Galilean velocity transformation", eq: "u' = u - v", note: "Relative velocity in S' frame", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Lorentz position transformation", eq: "x' = γ(x - vt)", note: "Lorentz position coordinate, γ = Lorentz factor", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Lorentz time transformation", eq: "t' = γ(t - vx/c²)", note: "Lorentz time coordinate showing relativity of simultaneity", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Lorentz velocity transformation", eq: "u' = (u-v) / (1 - uv/c²)", note: "Relativistic velocity addition", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Lorentz factor", eq: "γ = 1 / √(1 - v²/c²)", note: "γ ≥ 1, measures relativistic dilation / contraction", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Space-time interval invariant", eq: "Δs² = (cΔt)² - Δx²", note: "Invariant space-time distance between events in all inertial reference frames", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Time dilation", eq: "Δt = γΔt₀", note: "Δt = dilated time interval, Δt₀ = proper time interval", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Length contraction", eq: "L = L₀/γ", note: "L = contracted length in motion direction, L₀ = proper length", scope: "hl" },
    { topic: "A.5 Galilean & Special Relativity", name: "Minkowski angle relation", eq: "tan θ = v/c", note: "θ = angle of rotated S' axes on Minkowski space-time diagram", scope: "hl" }
  ],
  "theme_B": [
    // B.1
    { topic: "B.1 Thermal Energy Transfers", name: "Density definition", eq: "ρ = m/V", note: "ρ = density, m = mass, V = volume", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Gas particle average kinetic energy", eq: "E_k = ³/₂ k_B T", note: "E_k = mean kinetic energy, k_B = Boltzmann constant, T = absolute temperature (K)", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Specific heat capacity equation", eq: "Q = mcΔT", note: "Q = thermal energy transferred, m = mass, c = specific heat capacity, ΔT = temperature change", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Specific latent heat equation", eq: "Q = mL", note: "Q = energy transferred during phase change, m = mass, L = specific latent heat", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Thermal conduction rate", eq: "ΔQ/Δt = kAΔT/Δx", note: "Q/t = heat current, k = thermal conductivity, A = area, ΔT = temp diff, Δx = thickness", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Stefan-Boltzmann radiation law", eq: "L = σAT⁴", note: "L = luminosity/radiated power, σ = constant, A = surface area, T = absolute temp", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Apparent brightness (radiation intensity)", eq: "b = L / (4πd²)", note: "b = apparent brightness, L = source luminosity, d = distance to source", scope: "sl" },
    { topic: "B.1 Thermal Energy Transfers", name: "Wien's displacement law", eq: "λ_max T = 2.9 × 10⁻³ m K", note: "λ_max = peak emission wavelength, T = blackbody absolute temperature", scope: "sl" },
    // B.2
    { topic: "B.2 Greenhouse Effect", name: "Emissivity definition", eq: "emissivity = power radiated per unit area / σT⁴", note: "Ratio of power radiated by a body to that of a blackbody of same dimensions at same temp", scope: "sl" },
    { topic: "B.2 Greenhouse Effect", name: "Albedo definition", eq: "albedo = total scattered / total incident", note: "Fraction of incident electromagnetic radiation reflected/scattered by a surface", scope: "sl" },
    // B.3
    { topic: "B.3 Gas Laws", name: "Pressure definition", eq: "P = F/A", note: "P = pressure, F = perpendicular force, A = area", scope: "sl" },
    { topic: "B.3 Gas Laws", name: "Mole calculation", eq: "n = N/N_A", note: "n = number of moles, N = number of particles, N_A = Avogadro's constant", scope: "sl" },
    { topic: "B.3 Gas Laws", name: "Ideal gas constant ratio", eq: "PV/T = const", note: "Combines Boyle's, Charles's, and Gay-Lussac's laws for fixed quantity of gas", scope: "sl" },
    { topic: "B.3 Gas Laws", name: "Ideal gas state equation", eq: "PV = nRT = N k_B T", note: "P = pressure, V = volume, n = moles, R = gas constant, N = particles, k_B = Boltzmann, T = absolute temp", scope: "sl" },
    { topic: "B.3 Gas Laws", name: "Gas pressure microscopic derivation", eq: "P = ⅓ρv²", note: "P = pressure, ρ = gas density, v = root-mean-square speed of gas particles", scope: "sl" },
    { topic: "B.3 Gas Laws", name: "Ideal gas internal energy", eq: "U = ³/₂ nRT = ³/₂ N k_B T", note: "U = internal energy (only kinetic for ideal gas), n = moles, R = gas constant, T = absolute temp", scope: "sl" },
    // B.4
    { topic: "B.4 Thermodynamics", name: "First Law of Thermodynamics", eq: "Q = ΔU + W", note: "Q = heat energy supplied, ΔU = increase in internal energy, W = work done BY the gas", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Work done by expanding gas", eq: "W = PΔV", note: "W = work done during isobaric (constant pressure) volume change ΔV", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Monatomic gas internal energy change", eq: "ΔU = ³/₂ nRΔT", note: "Internal energy change proportional to temperature change", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Entropy change", eq: "ΔS = ΔQ/T", note: "ΔS = entropy change, ΔQ = reversible heat transferred, T = absolute temperature", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Boltzmann entropy relation", eq: "S = k_B ln Ω", note: "S = thermodynamic entropy, k_B = Boltzmann constant, Ω = number of microstates", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Adiabatic gas expansion equation", eq: "PV^(5/3) = const", note: "For monatomic ideal gas undergoing reversible adiabatic process (no heat exchange)", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Thermodynamic cycle efficiency", eq: "η = useful work / input energy", note: "η = thermal efficiency", scope: "hl" },
    { topic: "B.4 Thermodynamics", name: "Carnot cycle maximum efficiency", eq: "η_Carnot = 1 - T_c/T_h", note: "Theoretical maximum efficiency between cold reservoir T_c and hot reservoir T_h", scope: "hl" },
    // B.5
    { topic: "B.5 Current and Circuits", name: "Electric current definition", eq: "I = Δq/Δt", note: "I = current, Δq = charge quantity, Δt = time flow duration", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Electric potential difference", eq: "V = W/q", note: "V = potential difference, W = work done to move charge, q = charge magnitude", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Electrical resistance (Ohm's law)", eq: "R = V/I", note: "R = resistance, V = potential difference, I = current", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Resistivity", eq: "ρ = RA/L", note: "ρ = material resistivity, R = wire resistance, A = cross-sectional area, L = wire length", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Electric power", eq: "P = VI = I²R = V²/R", note: "P = power dissipated in circuit component", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Resistors in series", eq: "Series: I same, V adds, R adds", note: "Total resistance is sum of individual resistances in series", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Resistors in parallel", eq: "Parallel: V same, I adds, 1/R adds", note: "Inverse of total resistance is sum of inverses in parallel", scope: "sl" },
    { topic: "B.5 Current and Circuits", name: "Electromotive force (emf)", eq: "ε = I(R + r)", note: "ε = emf of source, R = load resistance, r = internal source resistance", scope: "sl" }
  ],
  "theme_C": [
    // C.1
    { topic: "C.1 Simple Harmonic Motion", name: "SHM acceleration relation", eq: "a = -ω²x", note: "a = acceleration, ω = angular frequency, x = displacement from equilibrium", scope: "sl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM time period & frequency", eq: "T = 1/f = 2π/ω", note: "T = period, f = cyclic frequency, ω = angular frequency", scope: "sl" },
    { topic: "C.1 Simple Harmonic Motion", name: "Spring-mass oscillator period", eq: "T = 2π√(m/k)", note: "T = period, m = oscillating mass, k = spring constant", scope: "sl" },
    { topic: "C.1 Simple Harmonic Motion", name: "Simple pendulum time period", eq: "T = 2π√(l/g)", note: "T = period, l = pendulum string length, g = gravitational field strength", scope: "sl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM position equation", eq: "x = x₀ sin(ωt + φ)", note: "x = displacement, x₀ = amplitude, ω = angular frequency, t = time, φ = phase constant", scope: "hl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM velocity equation", eq: "v = ωx₀ cos(ωt + φ)", note: "v = velocity, x₀ = amplitude, ω = angular frequency, t = time, φ = phase constant", scope: "hl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM velocity-position relation", eq: "v = ±ω√(x₀² - x²)", note: "v = velocity at position x, x₀ = motion amplitude, ω = angular frequency", scope: "hl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM total mechanical energy", eq: "E_T = ½mω²x₀²", note: "E_T = total energy, m = mass, ω = angular frequency, x₀ = oscillation amplitude", scope: "hl" },
    { topic: "C.1 Simple Harmonic Motion", name: "SHM potential energy", eq: "E_p = ½mω²x²", note: "E_p = potential energy at displacement position x", scope: "hl" },
    // C.2
    { topic: "C.2 Wave Model", name: "Wave speed equation", eq: "v = fλ = λ/T", note: "v = wave propagation speed, f = frequency, λ = wavelength, T = period", scope: "sl" },
    // C.3
    { topic: "C.3 Wave Phenomena", name: "Snell's Law (refraction)", eq: "n₁/n₂ = sin θ₂/sin θ₁ = v₂/v₁", note: "n = refractive index, θ = angle to normal, v = wave speed in medium", scope: "sl" },
    { topic: "C.3 Wave Phenomena", name: "Constructive interference condition", eq: "path diff = nλ", note: "Path difference must be an integer multiple of wavelengths (n = 0, 1, 2, ...)", scope: "sl" },
    { topic: "C.3 Wave Phenomena", name: "Destructive interference condition", eq: "path diff = (n+½)λ", note: "Path difference must be a half-integer multiple of wavelengths (n = 0, 1, 2, ...)", scope: "sl" },
    { topic: "C.3 Wave Phenomena", name: "Double slit fringe spacing", eq: "s = λD/d", note: "s = fringe separation, λ = wavelength, D = distance to screen, d = slit spacing", scope: "sl" },
    { topic: "C.3 Wave Phenomena", name: "Single slit resolution angle", eq: "θ = λ/b", note: "θ = angular width of central maximum, λ = wavelength, b = slit width", scope: "hl" },
    { topic: "C.3 Wave Phenomena", name: "Diffraction grating maximum", eq: "nλ = d sin θ", note: "n = order of maximum, λ = wavelength, d = grating spacing, θ = diffraction angle", scope: "hl" },
    // C.5
    { topic: "C.5 Doppler Effect", name: "Relativistic Doppler approximation", eq: "Δf/f = Δλ/λ ≈ v/c", note: "Used for electromagnetic waves when source speed v << light speed c", scope: "sl" },
    { topic: "C.5 Doppler Effect", name: "Doppler effect (moving source)", eq: "f' = fv/(v ± u_s)", note: "f' = observed frequency, f = source frequency, v = wave speed, u_s = source speed (- approaches, + recedes)", scope: "hl" },
    { topic: "C.5 Doppler Effect", name: "Doppler effect (moving observer)", eq: "f' = f(v ± u_o)/v", note: "f' = observed frequency, f = source frequency, v = wave speed, u_o = observer speed (+ approaches, - recedes)", scope: "hl" }
  ],
  "theme_D": [
    // D.1
    { topic: "D.1 Gravitational Fields", name: "Newton's gravitational force law", eq: "F = Gm₁m₂/r²", note: "F = attractive gravitational force, G = constant, m = masses, r = center separation", scope: "sl" },
    { topic: "D.1 Gravitational Fields", name: "Gravitational field strength", eq: "g = F/m = GM/r²", note: "g = field strength (acceleration), F = force on test mass m, M = source mass, r = distance", scope: "sl" },
    { topic: "D.1 Gravitational Fields", name: "Gravitational potential energy", eq: "E_p = -Gm₁m₂/r", note: "E_p = gravitational potential energy (defined zero at infinity), m = masses, r = separation", scope: "hl" },
    { topic: "D.1 Gravitational Fields", name: "Gravitational potential", eq: "V_g = -GM/r", note: "V_g = potential (work done per unit mass to bring from infinity), M = source mass, r = distance", scope: "hl" },
    { topic: "D.1 Gravitational Fields", name: "Potential gradient relation", eq: "g = -ΔV_g/Δr", note: "Field strength is negative potential gradient", scope: "hl" },
    { topic: "D.1 Gravitational Fields", name: "Work done in field", eq: "W = mΔV_g", note: "W = work done, m = moved mass, ΔV_g = potential difference", scope: "hl" },
    { topic: "D.1 Gravitational Fields", name: "Escape speed", eq: "v_esc = √(2GM/r)", note: "v_esc = minimum speed required to escape planet's gravity, M = planet mass, r = radius", scope: "hl" },
    { topic: "D.1 Gravitational Fields", name: "Orbital speed", eq: "v_orbital = √(GM/r)", note: "v = speed of satellite in circular orbit, M = central body mass, r = orbit radius", scope: "hl" },
    // D.2
    { topic: "D.2 Electric & Magnetic Fields", name: "Coulomb's electrostatic force law", eq: "F = kq₁q₂/r²", note: "F = electrostatic force, k = Coulomb constant, q = charges, r = separation", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Electric field strength", eq: "E = F/q", note: "E = electric field strength, F = force on test charge q", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Uniform electric field", eq: "E = V/d", note: "E = electric field, V = potential difference, d = plate separation distance", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Magnetic force on moving charge", eq: "F = qvB sin θ", note: "F = magnetic force, q = charge, v = velocity, B = field strength, θ = angle to field", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Magnetic force on current wire", eq: "F = BIL sin θ", note: "F = force, B = magnetic field, I = current, L = wire length, θ = angle to field", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Magnetic force between parallel wires", eq: "F/L = μ₀I₁I₂/(2πr)", note: "F/L = force per unit length, μ₀ = permeability, I = currents, r = wire separation", scope: "sl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Electric potential energy", eq: "E_p = kq₁q₂/r", note: "E_p = electrostatic potential energy (defined zero at infinity), q = charges, r = separation", scope: "hl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Electric potential", eq: "V_e = kQ/r", note: "V_e = electric potential, Q = source charge, r = distance", scope: "hl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Potential gradient relation", eq: "E = -ΔV_e/Δr", note: "Electric field strength is negative potential gradient", scope: "hl" },
    { topic: "D.2 Electric & Magnetic Fields", name: "Work done in field", eq: "W = qΔV_e", note: "W = work done, q = moved charge, ΔV_e = potential difference", scope: "hl" },
    // D.4
    { topic: "D.4 Induction", name: "Magnetic flux definition", eq: "Φ = BA cos θ", note: "Φ = magnetic flux, B = field strength, A = loop area, θ = angle to area normal", scope: "hl" },
    { topic: "D.4 Induction", name: "Faraday's law of induction", eq: "ε = -NΔΦ/Δt", note: "ε = induced electromotive force (emf), N = number of turns, Φ = flux, t = time", scope: "hl" },
    { topic: "D.4 Induction", name: "Induced emf in moving conductor", eq: "ε = BvL", note: "ε = induced emf, B = magnetic field, v = conductor speed, L = conductor length", scope: "hl" }
  ],
  "theme_E": [
    // E.1
    { topic: "E.1 Structure of the Atom", name: "Planck-Einstein relation", eq: "E = hf", note: "E = photon energy, h = Planck's constant, f = wave frequency", scope: "sl" },
    { topic: "E.1 Structure of the Atom", name: "Nuclear radius scaling law", eq: "R = R₀A^(1/3)", note: "R = nuclear radius, R₀ = Fermi radius (~1.2 fm), A = nucleon number (mass number)", scope: "hl" },
    { topic: "E.1 Structure of the Atom", name: "Hydrogen state energies (Bohr)", eq: "E = -13.6/n² eV", note: "E = state energy, n = principal quantum number (1, 2, ...)", scope: "hl" },
    { topic: "E.1 Structure of the Atom", name: "Angular momentum quantization (Bohr)", eq: "mvr = nh/2π", note: "Electron orbital angular momentum quantization (n = 1, 2, ...)", scope: "hl" },
    // E.2
    { topic: "E.2 Quantum Physics", name: "Einstein photoelectric equation", eq: "E_max = hf - Φ", note: "E_max = max photoelectron kinetic energy, hf = photon energy, Φ = work function", scope: "hl" },
    { topic: "E.2 Quantum Physics", name: "de Broglie wavelength", eq: "λ = h/p", note: "λ = matter wave wavelength, h = Planck's constant, p = momentum", scope: "hl" },
    { topic: "E.2 Quantum Physics", name: "Compton scattering shift", eq: "Δλ = (h/m_ec)(1 - cos θ)", note: "Δλ = wavelength shift, m_e = electron mass, c = light speed, θ = scattering angle", scope: "hl" },
    // E.3
    { topic: "E.3 Radioactive Decay", name: "Mass-energy equivalence", eq: "E = mc²", note: "E = rest energy equivalent, m = rest mass, c = speed of light", scope: "sl" },
    { topic: "E.3 Radioactive Decay", name: "Radioactive decay exponential law", eq: "N = N₀e^(-λt)", note: "N = remaining active nuclei, N₀ = initial count, λ = decay constant, t = time", scope: "hl" },
    { topic: "E.3 Radioactive Decay", name: "Radioactive Activity", eq: "A = λN = λN₀e^(-λt)", note: "A = decay rate (becquerels), λ = decay constant, N = active nuclei number", scope: "hl" },
    { topic: "E.3 Radioactive Decay", name: "Half-life equation", eq: "T½ = ln2/λ", note: "T½ = time required for half the sample to decay, λ = decay constant", scope: "hl" },
    // E.5
    { topic: "E.5 Stars", name: "Stellar distance (parsec relation)", eq: "d(parsec) = 1/p(arc-second)", note: "d = distance in parsecs, p = parallax angle in arc-seconds", scope: "sl" }
  ]
};
