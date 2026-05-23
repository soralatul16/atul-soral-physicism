const DP_STUDENT_DATA = {
  "E5": {
  "title": "Fusion and Stars",
  "code": "E.5",
  "theme": "E",
  "level": "SL + HL",
  "subtopicCount": 5,
  "subtopics": [
    {
      "id": "e5_sub1",
      "num": 1,
      "title": "Nuclear Fusion — Combining Light Nuclei",
      "group": "Nuclear Fusion & Stellar Equilibrium",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "E.4 Fission",
      "nextTitle": "Stellar Equilibrium",

      "bigIdea": "The Sun doesn't burn — it fuses. Every second, 600 million tonnes of hydrogen become 596 million tonnes of helium. The missing 4 million tonnes become the light and heat that keep you alive. Nuclear fusion is the most powerful energy source in the universe.",

      "foundation": {
        "title": "Fusion in everyday language",
        "content": "<p>Imagine squeezing two small magnets together when they repel. You push and push — and suddenly they CLICK together and hold. Energy was released in that click. Nuclear fusion is the same idea, but with atomic nuclei instead of magnets, and the energy released is millions of times greater.</p><p>Light nuclei (like hydrogen) are on the LEFT side of the binding energy curve. They're loosely bound. If you can force them together, the result (helium) is MORE tightly bound — and the difference in binding energy is released as light, heat, and kinetic energy.</p><p><strong>The catch:</strong> nuclei are positive. They repel each other electrically. To get close enough for the strong nuclear force to pull them together, you need EXTREME temperatures — about 15 million degrees Celsius. That's the temperature at the core of the Sun.</p>",
        "summary": "<p><strong>Fusion:</strong> Light nuclei combine → heavier nucleus + energy released.</p><p><strong>Why energy?</strong> Products have higher binding energy per nucleon (more tightly bound).</p><p><strong>Why so hard?</strong> Must overcome electrostatic repulsion — needs ~10⁷ K.</p><p><strong>Where?</strong> In the cores of stars. On Earth: still experimental (ITER, NIF).</p>",
        "checkQuestions": [
          {
            "question": "Why does fusion release energy? Use the binding energy curve to explain.",
            "answer": "Light nuclei (left side of the curve) have low BE/A. When they fuse, the product has higher BE/A (closer to the peak at iron). The increase in binding energy is released as energy: E = Δmc²."
          },
          {
            "question": "Why doesn't fusion happen at room temperature?",
            "answer": "Nuclei are positively charged — they repel each other (Coulomb repulsion). At room temperature, they don't have enough kinetic energy to get close enough for the strong nuclear force to take over. You need temperatures of ~10⁷ K so the nuclei move fast enough to overcome the barrier."
          }
        ]
      },

      "core": {
        "title": "Nuclear fusion — the proton-proton chain and energy release",
        "content": "<p><strong>Fusion:</strong> two light nuclei combine to form a heavier nucleus. Energy is released because the products have a higher binding energy per nucleon (BE/A) than the reactants.</p><p><strong>The proton-proton (pp) chain</strong> — the dominant fusion process in the Sun:</p><p>Overall: 4 ¹H → ⁴He + 2e⁺ + 2ν + energy (~26.7 MeV)</p><p>The positrons (e⁺) immediately annihilate with electrons, adding ~1.02 MeV each. The neutrinos carry away ~0.5 MeV and escape the Sun without interacting.</p><p><strong>Why fusion requires extreme temperatures:</strong> Protons are positive — they repel via Coulomb's law. To fuse, they must get within ~1 fm (range of the strong force). The kinetic energy needed is KE ≈ kq²/r ≈ 1 MeV, corresponding to T ≈ 10¹⁰ K classically. But quantum tunnelling allows fusion at ~1.5 × 10⁷ K (the Sun's core temperature). Even so, the average proton waits ~10 billion years before fusing.</p><p><strong>Energy calculation from mass defect:</strong> 4 protons: 4 × 1.00728 = 4.02912 u. Products: ⁴He (4.00260) + 2e⁺ (2 × 0.00055) = 4.00370 u. Δm = 0.02542 u. E = Δm × 931.5 = 23.7 MeV. With positron annihilation: total ≈ 26.7 MeV.</p>",
        "keyPoints": [
          "Fusion releases energy because BE/A increases (products more tightly bound than reactants)",
          "The pp chain: 4 protons → ⁴He + 2 positrons + 2 neutrinos + 26.7 MeV",
          "Requires T ≈ 1.5 × 10⁷ K to overcome the Coulomb barrier (via quantum tunnelling)",
          "Fusion fuel (hydrogen) is abundant — oceans contain enough deuterium for billions of years",
          "Fusion produces NO long-lived radioactive waste (unlike fission)"
        ],
        "examTrap": {
          "wrong": "Fusion is easy because it releases so much energy",
          "correct": "Fusion RELEASES energy but REQUIRES extreme conditions to START. The Coulomb barrier means nuclei must be forced together at enormous temperatures. Achieving and containing these temperatures is the engineering challenge — not the energy release."
        }
      },

      "extension": {
        "title": "Fusion on Earth — the hardest engineering problem ever attempted",
        "content": "<p><strong>Deuterium-tritium (D-T) fusion</strong> is the most promising reaction for Earth: ²H + ³H → ⁴He + ¹n + 17.6 MeV. D-T has the lowest Coulomb barrier of any fusion reaction (deuterium and tritium have only 1 proton each), so it needs 'only' ~150 million K.</p><p><strong>Why not pp chain on Earth?</strong> The pp chain has an impossibly low cross-section at achievable temperatures — it only works in the Sun because there are 10⁵⁷ protons trying. D-T fusion has a much higher probability per reaction.</p><p><strong>Two approaches:</strong></p><p>1. <strong>Magnetic confinement (tokamak):</strong> ITER, under construction in France, aims for Q = 10 (10× more energy out than in) by ~2035. Plasma confined by superconducting magnets in a torus shape.</p><p>2. <strong>Inertial confinement:</strong> NIF (USA) uses 192 lasers to compress a D-T pellet. In December 2022, NIF achieved ignition — more fusion energy out than laser energy in — for the first time in history.</p><p><strong>Connection to E.3:</strong> D-T fusion produces neutrons, which activate the reactor walls (induced radioactivity). But the waste has much shorter half-lives (~100 years) than fission waste (~100,000 years). Fusion is cleaner but not completely clean.</p>",
        "connections": [
          "E.3 Radioactive Decay: BE/A curve explains why fusion of light nuclei releases energy",
          "E.4 Fission: Compare energy per nucleon, fuel availability, and waste between fusion and fission",
          "B.1 Thermal Energy: Stefan-Boltzmann L = σAT⁴ connects core temperature to the Sun's luminosity"
        ]
      },

      "simulation": {
        "title": "PhET: Nuclear Fission (includes fusion comparison)",
        "source": "University of Colorado Boulder",
        "url": "https://phet.colorado.edu/en/simulations/nuclear-fission",
        "instructions": [
          "Compare the BE/A values for hydrogen, helium, and iron on the curve. Moving LEFT to RIGHT (fusion) increases BE/A → energy released.",
          "Note that beyond iron, you need fission (RIGHT to LEFT) to release energy — the curve goes the other way.",
          "Consider: why is iron the 'ash' of stellar fusion? Because it's at the peak — fusing iron ABSORBS energy."
        ]
      },

      "video": {
        "title": "Nuclear Fusion — How Stars Produce Energy",
        "duration": "8 min",
        "description": "The pp chain, energy calculations, and why fusion is hard on Earth",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "E = Δmc²",
          "description": "Energy released = mass defect × c². Mass defect = total mass of reactants − total mass of products."
        },
        {
          "formula": "E (MeV) = Δm (u) × 931.5",
          "description": "Quick conversion: 1 atomic mass unit = 931.5 MeV/c²."
        },
        {
          "formula": "4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV",
          "description": "The proton-proton chain: the overall fusion reaction powering the Sun."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "Why does fusion release energy? Explain using binding energy per nucleon.",
          "steps": [
            { "label": "Before fusion", "text": "4 hydrogen nuclei: BE/A ≈ 0 MeV/nucleon (hydrogen has essentially no binding energy — it's a single proton)" },
            { "label": "After fusion", "text": "1 helium-4 nucleus: BE/A ≈ 7.07 MeV/nucleon" },
            { "label": "Change", "text": "Each nucleon becomes more tightly bound by ~7 MeV. For 4 nucleons: total energy released ≈ 4 × 7 = 28 MeV (approximate)." },
            { "label": "Key point", "text": "Moving UP the BE/A curve (left side → toward the peak) releases energy. The products are MORE stable than the reactants." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "Calculate the energy released in D-T fusion: ²H + ³H → ⁴He + ¹n.",
          "steps": [
            { "label": "Masses", "text": "²H = 2.01410 u, ³H = 3.01605 u, ⁴He = 4.00260 u, ¹n = 1.00866 u" },
            { "label": "Total reactants", "text": "2.01410 + 3.01605 = 5.03015 u" },
            { "label": "Total products", "text": "4.00260 + 1.00866 = 5.01126 u" },
            { "label": "Mass defect", "text": "Δm = 5.03015 − 5.01126 = 0.01889 u", "isEquation": true },
            { "label": "Energy", "text": "E = 0.01889 × 931.5 = 17.6 MeV", "isEquation": true },
            { "label": "Context", "text": "17.6 MeV per fusion. Compare: burning one carbon atom releases ~4 eV. Fusion releases ~4 million times more energy per reaction." }
          ]
        },
        {
          "level": "extension",
          "scope": "sl",
          "title": "The Sun converts 4.3 × 10⁹ kg of mass to energy per second. Calculate its power output.",
          "steps": [
            { "label": "Formula", "text": "P = Δmc²/t = Δm × c² (per second)" },
            { "label": "Calculation", "text": "P = 4.3 × 10⁹ × (3 × 10⁸)² = 4.3 × 10⁹ × 9 × 10¹⁶ = 3.87 × 10²⁶ W", "isEquation": true },
            { "label": "Context", "text": "This is the Sun's luminosity: L☉ = 3.85 × 10²⁶ W. Our calculation matches. The Sun is a fusion reactor converting mass to energy via E = mc²." },
            { "label": "Lifetime", "text": "Sun's mass = 2 × 10³⁰ kg. At 4.3 × 10⁹ kg/s: total time = 2 × 10³⁰ / (4.3 × 10⁹) = 4.7 × 10²⁰ s ≈ 15 billion years. But only ~10% is core hydrogen → main sequence life ≈ 10 billion years." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "State two conditions required for nuclear fusion to occur.",
          "solution": "(1) Extremely high temperature (~10⁷ K) so nuclei have enough kinetic energy to overcome electrostatic repulsion. (2) Sufficient density/confinement so nuclei collide frequently enough for fusion to be sustained."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "Using the BE/A curve, explain why fusion of hydrogen to helium releases energy but fusion of iron does not.",
          "solution": "Hydrogen has very low BE/A. Helium has much higher BE/A. Moving from low to high BE/A releases energy. Iron is at the PEAK of the curve — fusing iron would move to LOWER BE/A, which requires energy input, not release."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "In D-T fusion, 17.6 MeV is released per reaction. Calculate the energy released from 1 kg of D-T fuel mixture (assume equal masses of D and T, average molar mass ≈ 2.5 g/mol).",
          "solution": "Number of reactions per kg: N = (1000/2.5) × 6.02 × 10²³ = 2.41 × 10²⁶. Energy = 2.41 × 10²⁶ × 17.6 × 10⁶ × 1.6 × 10⁻¹⁹ = 6.8 × 10¹⁴ J ≈ 680 TJ. Compare: 1 kg of coal ≈ 30 MJ. Fusion gives ~23 million times more energy per kg."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "The pp chain produces 26.7 MeV per 4 protons fused. The Sun's luminosity is 3.85 × 10²⁶ W. How many pp chain reactions occur per second?",
          "solution": "Energy per reaction = 26.7 × 10⁶ × 1.6 × 10⁻¹⁹ = 4.27 × 10⁻¹² J. Reactions per second = L/E = 3.85 × 10²⁶ / 4.27 × 10⁻¹² = 9.0 × 10³⁷ reactions per second."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "Compare fusion and fission as energy sources: (a) energy per nucleon released, (b) fuel availability, (c) radioactive waste, (d) current technological status.",
          "solution": "(a) Fusion: ~6.7 MeV/nucleon (H→He). Fission: ~0.85 MeV/nucleon (U-235). Fusion releases ~8× more per nucleon. (b) Fusion: hydrogen is virtually unlimited (oceans). Fission: uranium is finite and must be mined. (c) Fusion: no long-lived waste (activated materials decay in ~100 years). Fission: produces waste dangerous for 100,000+ years. (d) Fission: mature technology, ~440 reactors worldwide. Fusion: experimental — first net energy achieved 2022 (NIF), commercial power expected ~2040s at earliest."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "Fusion is the opposite of fission, so one releases energy and the other absorbs it",
          "explanation": "BOTH release energy — just from different parts of the BE/A curve. Fusion works for light nuclei (left of iron). Fission works for heavy nuclei (right of iron). Both move TOWARD iron (the peak), increasing BE/A and releasing energy.",
          "correct": "Fusion AND fission both release energy. Fusion: light → heavier (left → peak). Fission: heavy → lighter (right → peak). Both head toward iron."
        },
        {
          "wrong": "The Sun burns hydrogen like a fire burns wood",
          "explanation": "Burning is a chemical reaction (rearranging electrons, ~1 eV per reaction). Fusion is a nuclear reaction (combining nuclei, ~26 MeV per reaction). They're completely different processes. The Sun doesn't 'burn' — it FUSES.",
          "correct": "The Sun's energy comes from nuclear fusion, not combustion. Fusion releases ~25 million times more energy per reaction than burning."
        },
        {
          "wrong": "Fusion produces no radioactive waste at all",
          "explanation": "D-T fusion produces fast neutrons (14.1 MeV), which activate the reactor walls through neutron capture, creating radioactive isotopes. However, these have relatively short half-lives (~decades to ~100 years) compared to fission waste (~thousands to millions of years).",
          "correct": "Fusion produces some induced radioactivity from neutron activation of reactor materials, but the waste is much shorter-lived than fission waste. It's cleaner, but not perfectly clean."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "Nuclear fusion is the energy source of stars.\n(a) Define nuclear fusion. [1]\n(b) State the overall reaction of the proton-proton chain in the Sun. [1]\n(c) Explain, with reference to the binding energy per nucleon curve, why this reaction releases energy. [3]\n(d) Explain why extremely high temperatures are required for fusion to occur. [2]\n(e) Calculate the energy released in the D-T reaction: ²H (2.01410 u) + ³H (3.01605 u) → ⁴He (4.00260 u) + ¹n (1.00866 u). [3]",
        "marks": 10,
        "modelAnswer": "(a) Nuclear fusion is the combining of two light nuclei to form a heavier nucleus, with the release of energy. [1]\n(b) 4 ¹H → ⁴He + 2e⁺ + 2ν + energy (26.7 MeV) [1]\n(c) Hydrogen has very low binding energy per nucleon [1]. Helium-4 has much higher BE/A (~7.07 MeV) [1]. The increase in BE/A means the product nucleons are more tightly bound → the mass of the products is less than the reactants → the mass difference is released as energy via E = Δmc² [1].\n(d) Both nuclei are positively charged → they repel each other via the Coulomb/electrostatic force [1]. Extremely high temperatures give the nuclei enough kinetic energy to overcome this electrostatic barrier and get close enough (~1 fm) for the strong nuclear force to act [1].\n(e) Δm = (2.01410 + 3.01605) − (4.00260 + 1.00866) = 5.03015 − 5.01126 = 0.01889 u [1]. E = 0.01889 × 931.5 [1] = 17.6 MeV [1].",
        "examinerTip": "For 'explain with reference to BE/A' questions: you MUST mention (1) that BE/A increases, (2) that this means products are more tightly bound, and (3) link to E = Δmc². Just saying 'energy is released' without referencing the curve earns zero marks."
      }
    },
    {
      "id": "e5_sub2",
      "num": 2,
      "title": "Stellar Equilibrium — Radiation Pressure vs Gravity",
      "group": "Nuclear Fusion & Stellar Equilibrium",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "Nuclear Fusion",
      "nextTitle": "The Hertzsprung-Russell Diagram",

      "bigIdea": "A star is a tug-of-war between gravity trying to crush it and radiation pressure trying to blow it apart. For billions of years, they balance perfectly. When the fuel runs out, gravity wins — and the star dies.",

      "foundation": {
        "title": "What keeps a star stable?",
        "content": "<p>A star is a giant ball of gas. Gravity pulls every part of it toward the centre. If gravity were the only force, the star would collapse in minutes.</p><p>But fusion reactions in the core produce enormous energy — photons push outward, creating <strong>radiation pressure</strong>. Hot gas also pushes outward (thermal pressure). These outward pressures balance gravity exactly. This is called <strong>hydrostatic equilibrium</strong>.</p><p><strong>The magic of negative feedback:</strong> If fusion suddenly speeds up → more pressure → star expands slightly → core cools → fusion slows down → pressure drops → star contracts back. If fusion slows → less pressure → star contracts → core heats → fusion speeds up → pressure rises. The star corrects itself automatically. This is why the Sun has been stable for 4.6 billion years.</p>",
        "summary": "<p><strong>Inward force:</strong> Gravity (from the star's own mass).</p><p><strong>Outward force:</strong> Radiation pressure + thermal pressure (from fusion).</p><p><strong>Equilibrium:</strong> These balance → star is stable.</p><p><strong>Negative feedback:</strong> Any change self-corrects. More fusion → expansion → cooling → less fusion → contraction → back to normal.</p>",
        "checkQuestions": [
          {
            "question": "What would happen to the Sun if fusion suddenly stopped?",
            "answer": "Without fusion, there would be no radiation pressure to support the star against gravity. The core would collapse under its own weight. (This actually happens when a massive star runs out of fuel — it's how supernovae begin.)"
          },
          {
            "question": "Why do massive stars have shorter lifetimes than small stars, even though they have more fuel?",
            "answer": "Massive stars have stronger gravity → higher core pressure → higher temperature → MUCH faster fusion rate. They burn through their fuel far faster than small stars. A 10 M☉ star lives ~20 million years vs the Sun's ~10 billion years."
          }
        ]
      },

      "core": {
        "title": "Hydrostatic equilibrium and the feedback mechanism",
        "content": "<p><strong>Hydrostatic equilibrium:</strong> at every layer of a star, the outward radiation pressure (from fusion + thermal energy) exactly balances the inward gravitational compression. This is the condition for a stable, non-collapsing, non-exploding star.</p><p><strong>The feedback loop (negative feedback):</strong></p><p>Suppose the fusion rate increases temporarily:<br>→ More energy produced → more radiation pressure<br>→ Core expands slightly<br>→ Density and temperature decrease<br>→ Fusion rate drops back<br>→ Pressure decreases → core contracts back to equilibrium.</p><p>The reverse also works: less fusion → contraction → heating → more fusion → equilibrium restored.</p><p><strong>Main sequence lifetime:</strong> depends on mass. Luminosity scales steeply with mass: L ∝ M³·⁵ (approximately). So a star with 10× the Sun's mass has ~3000× the luminosity → burns fuel 3000× faster → lives only ~1/300 as long.</p><p>Sun: ~10 billion years. 10 M☉ star: ~20 million years. 0.1 M☉ star: ~10 trillion years (far longer than the current age of the universe).</p>",
        "keyPoints": [
          "Stellar stability = balance between radiation pressure (outward) and gravity (inward)",
          "This balance is called hydrostatic equilibrium",
          "Negative feedback keeps the star self-regulating for billions of years",
          "More massive stars are MORE luminous but live SHORTER lives (L ∝ M³·⁵)",
          "When hydrogen fuel is exhausted, equilibrium breaks → star evolves off the main sequence"
        ],
        "examTrap": {
          "wrong": "The Sun is stable because it has the right amount of fuel",
          "correct": "The Sun is stable because of NEGATIVE FEEDBACK: any change in fusion rate is self-correcting via the expansion/contraction mechanism. It's not about the amount of fuel — it's about the feedback loop that maintains equilibrium."
        }
      },

      "extension": {
        "title": "When equilibrium breaks — the beginning of the end",
        "content": "<p>When core hydrogen is exhausted: fusion stops in the core → no radiation pressure → core contracts under gravity → core HEATS UP (gravitational PE → thermal energy) → when the core reaches ~10⁸ K, HELIUM fusion ignites (triple-alpha process: 3 ⁴He → ¹²C).</p><p>Meanwhile, the outer layers expand enormously as energy from shell hydrogen burning pushes them outward → RED GIANT phase. The star is briefly in a new equilibrium, but helium fusion is much faster than hydrogen fusion.</p><p>For massive stars: after helium, the core fuses carbon, neon, oxygen, silicon — each stage shorter than the last. Silicon → iron takes only ~1 day. Iron is the end of the line: fusing iron ABSORBS energy (it's at the peak of the BE/A curve). No more energy → no more pressure → catastrophic core collapse → SUPERNOVA.</p><p><strong>Connection to D.1:</strong> Gravitational PE drives the core collapse. The energy released in a supernova comes from gravitational PE converted to kinetic energy and radiation — not from fusion.</p>",
        "connections": [
          "E.3 Radioactive Decay: the BE/A curve shows why iron is the endpoint of stellar fusion",
          "D.1 Gravitational Fields: gravitational PE drives stellar collapse and supernova energy",
          "B.1 Thermal Energy: Stefan-Boltzmann L = σAT⁴ relates surface temperature to luminosity on the HR diagram"
        ]
      },

      "simulation": {
        "title": "Stellar Evolution Simulator",
        "source": "University of Nebraska-Lincoln Astronomy",
        "url": "https://astro.unl.edu/naap/hr/animations/hr.html",
        "instructions": [
          "Select different star masses and watch how their position on the HR diagram changes over time.",
          "Note: massive stars spend very little time on the main sequence compared to low-mass stars.",
          "Observe the red giant phase — the star expands and cools (moves right on the HR diagram) but becomes MORE luminous (moves up)."
        ]
      },

      "video": {
        "title": "Life Cycle of Stars — IB Physics",
        "duration": "10 min",
        "description": "From nebula to main sequence to red giant to remnant — the complete stellar life cycle",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "L ∝ M³·⁵",
          "description": "Main sequence luminosity scales steeply with mass. 10× mass → ~3000× luminosity."
        },
        {
          "formula": "Lifetime ∝ M / L ∝ M⁻²·⁵",
          "description": "More massive stars burn fuel faster → shorter lifetimes. 10× mass → ~1/300 the lifetime."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "Describe the two forces that keep a star stable and explain what happens if one dominates.",
          "steps": [
            { "label": "Inward force", "text": "Gravity — pulls every part of the star toward the centre. Stronger for more massive stars." },
            { "label": "Outward force", "text": "Radiation pressure from fusion + thermal pressure from hot gas. Stronger when fusion rate is higher." },
            { "label": "Balance", "text": "When they're equal: hydrostatic equilibrium. The star is stable." },
            { "label": "If gravity wins", "text": "The star contracts (happens when fuel runs out). If extreme: collapse → supernova or black hole." },
            { "label": "If pressure wins", "text": "The star expands. But expansion cools the core → fusion slows → pressure drops → star contracts back. Self-correcting." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "The Sun (1 M☉) has a main sequence lifetime of ~10 billion years. Estimate the lifetime of a 5 M☉ star.",
          "steps": [
            { "label": "Relationship", "text": "Lifetime ∝ M/L and L ∝ M³·⁵" },
            { "label": "So", "text": "Lifetime ∝ M/M³·⁵ = M⁻²·⁵" },
            { "label": "Ratio", "text": "t₅/t☉ = (5/1)⁻²·⁵ = 5⁻²·⁵ = 1/(5²·⁵) = 1/55.9", "isEquation": true },
            { "label": "Lifetime", "text": "t₅ = 10 × 10⁹ / 55.9 ≈ 1.8 × 10⁸ years ≈ 180 million years", "isEquation": true },
            { "label": "Context", "text": "A 5 M☉ star lives only 1.8% as long as the Sun despite having 5× the fuel. It burns so much brighter that it exhausts its hydrogen quickly." }
          ]
        },
        {
          "level": "extension",
          "scope": "sl",
          "title": "Explain why iron is the endpoint of stellar fusion and what happens next in a massive star.",
          "steps": [
            { "label": "The BE/A peak", "text": "Iron-56 has the highest binding energy per nucleon (~8.8 MeV). Fusing iron into heavier elements would require moving DOWN the curve — decreasing BE/A — which ABSORBS energy rather than releasing it." },
            { "label": "No energy", "text": "When a massive star's core becomes iron, fusion cannot produce energy. No energy → no radiation pressure." },
            { "label": "Core collapse", "text": "Gravity is unopposed → the iron core collapses in milliseconds. The infalling material bounces off the ultra-dense core → shockwave propagates outward → SUPERNOVA." },
            { "label": "Elements beyond iron", "text": "Elements heavier than iron (gold, uranium, etc.) are created in the supernova itself by rapid neutron capture (r-process). The extreme conditions provide the energy that fusion cannot." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "Name the two forces that maintain the stability of a main sequence star.",
          "solution": "Inward: gravitational force (from the star's own mass). Outward: radiation pressure (from nuclear fusion reactions in the core) and thermal/gas pressure."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "Explain what is meant by 'hydrostatic equilibrium' in a star.",
          "solution": "Hydrostatic equilibrium is the state where the outward radiation and gas pressure at every layer of the star exactly balances the inward gravitational force. The star neither expands nor contracts."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "The Sun has mass M☉ and main sequence lifetime ~10¹⁰ years. Estimate the lifetime of a star with mass 2 M☉.",
          "solution": "Lifetime ∝ M⁻²·⁵. Ratio = (2)⁻²·⁵ = 1/5.66. Lifetime = 10¹⁰/5.66 ≈ 1.8 × 10⁹ years ≈ 1.8 billion years."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "Explain the negative feedback mechanism that keeps a star stable. Your answer should describe what happens if the fusion rate temporarily increases.",
          "solution": "If fusion increases → more energy → more radiation pressure → core expands → density and temperature decrease → fusion rate drops → pressure decreases → core contracts → returns to equilibrium. The expansion cools the core, which automatically reduces the fusion rate. This self-correcting mechanism prevents the star from exploding or collapsing."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A star has mass 20 M☉. (a) Estimate its main sequence lifetime. (b) Describe the stages of its evolution after the main sequence. (c) Explain why its final fate differs from the Sun's.",
          "solution": "(a) Lifetime ∝ M⁻²·⁵ → (20)⁻²·⁵ = 1/1789. Lifetime ≈ 10¹⁰/1789 ≈ 5.6 × 10⁶ years ≈ 5.6 million years. (b) After H exhaustion: red supergiant → He, C, O, Ne, Si fusion in successive shorter stages → iron core → core collapse → supernova → neutron star or black hole. (c) The Sun will become a red giant → planetary nebula → white dwarf (mass < Chandrasekhar limit 1.4 M☉). A 20 M☉ star has a remnant exceeding 1.4 M☉ → cannot be supported by electron degeneracy → collapses further to a neutron star or black hole."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "The Sun is stable because gravity and radiation pressure are always constant",
          "explanation": "They're not constant — they fluctuate slightly. The stability comes from NEGATIVE FEEDBACK: any fluctuation is automatically corrected. If fusion increases, the star expands and cools, reducing fusion. The system is self-regulating.",
          "correct": "Stability comes from negative feedback, not from forces being constant. Small variations in fusion rate are continuously self-corrected."
        },
        {
          "wrong": "Massive stars live longer because they have more fuel",
          "explanation": "They have more fuel but burn it far FASTER. Luminosity L ∝ M³·⁵, so a 10× more massive star is ~3000× more luminous → uses fuel ~3000× faster → lives only ~1/300 as long.",
          "correct": "Massive stars live SHORTER lives. More mass → higher core temperature → faster fusion → higher luminosity → fuel exhausted sooner."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "Stars are described as being in a state of equilibrium during the main sequence.\n(a) State the two opposing forces or pressures that maintain this equilibrium. [2]\n(b) Explain, using the concept of negative feedback, how this equilibrium is maintained if the rate of fusion temporarily increases. [3]\n(c) A star has mass 8 M☉. Estimate, in terms of the Sun's main sequence lifetime, the main sequence lifetime of this star. (Use L ∝ M³·⁵) [3]",
        "marks": 8,
        "modelAnswer": "(a) Inward: gravitational force/pressure [1]. Outward: radiation pressure from fusion (and thermal gas pressure) [1].\n(b) If fusion increases → more radiation pressure → star expands [1] → core temperature and density decrease [1] → fusion rate decreases back to the equilibrium value [1]. (The expansion causes cooling which reduces the fusion rate — a self-correcting mechanism.)\n(c) Lifetime ∝ M/L ∝ M/M³·⁵ = M⁻²·⁵ [1]. For 8 M☉: t/t☉ = 8⁻²·⁵ = 1/181 [1]. t ≈ t☉/181 ≈ 5.5 × 10⁷ years ≈ 55 million years [1].",
        "examinerTip": "For negative feedback questions: describe the SEQUENCE of cause and effect as a chain (more fusion → more pressure → expansion → cooling → less fusion → back to normal). Each link in the chain earns a mark. Just saying 'it self-corrects' earns 0."
      }
    },
    {
      "id": "e5_sub3",
      "num": 3,
      "title": "The Hertzsprung-Russell Diagram",
      "group": "Stellar Evolution & the HR Diagram",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "Stellar Equilibrium",
      "nextTitle": "Stellar Evolution — From Birth to Death",

      "bigIdea": "Plot a star's temperature against its luminosity and patterns appear: a main band where most stars live, a region of cool giants, and a corner of hot dwarfs. This diagram — the HR diagram — is the single most powerful tool in astrophysics. It tells you a star's size, age, and future.",

      "foundation": {
        "title": "The star map that isn't a map of space",
        "content": "<p>Imagine measuring two things about every star you can see: how bright it really is (luminosity) and how hot its surface is (temperature, from its colour). Now plot them on a graph. You'd expect random dots everywhere. Instead, you get PATTERNS.</p><p>Most stars fall on a diagonal band from top-left (hot, bright, blue) to bottom-right (cool, dim, red). This is the <strong>main sequence</strong> — where stars spend most of their lives fusing hydrogen.</p><p>Some stars are cool but extremely bright — they must be ENORMOUS (big surface area compensates for low temperature). These are <strong>red giants</strong> and <strong>supergiants</strong> — upper right.</p><p>Some stars are hot but very dim — they must be TINY (small surface area despite high temperature). These are <strong>white dwarfs</strong> — lower left.</p>",
        "summary": "<p><strong>HR diagram:</strong> Luminosity (vertical) vs Temperature (horizontal, REVERSED — hot on left, cool on right).</p><p><strong>Main sequence:</strong> Diagonal band — hot/bright at top-left to cool/dim at bottom-right. ~90% of stars.</p><p><strong>Red giants:</strong> Upper right — cool but very bright (huge surface area).</p><p><strong>White dwarfs:</strong> Lower left — hot but very dim (tiny surface area).</p>",
        "checkQuestions": [
          {
            "question": "A star is very bright but has a low surface temperature (reddish). Where is it on the HR diagram?",
            "answer": "Upper right — it's a red giant or red supergiant. Cool (right side) but luminous (upper part). Its large radius compensates for the low temperature."
          },
          {
            "question": "Two stars have the same surface temperature, but Star A is 10,000× more luminous than Star B. What can you deduce?",
            "answer": "Since L = 4πR²σT⁴ and they have the same T: L ∝ R². Star A has R = √10,000 = 100× the radius of Star B. Star A is a giant; Star B is a main sequence star or white dwarf."
          }
        ]
      },

      "core": {
        "title": "The Hertzsprung-Russell diagram — reading a star's life story",
        "content": "<p><strong>Axes:</strong> Vertical = Luminosity (L, in L☉, logarithmic scale from 10⁻⁴ to 10⁶). Horizontal = Surface temperature (T, in K, REVERSED: hot on left ~40,000 K, cool on right ~2,500 K).</p><p><strong>Main sequence:</strong> The diagonal band where stars fuse hydrogen in their cores. Position depends on mass: massive stars are at the top-left (hot, luminous, blue, O/B type), low-mass stars at the bottom-right (cool, dim, red, M type). The Sun is a G-type star in the middle. ~90% of all observed stars are on the main sequence.</p><p><strong>Red giants and supergiants:</strong> Upper right. These are stars that have exhausted core hydrogen and expanded enormously. L = 4πR²σT⁴: despite low T (~3,000-4,000 K), their HUGE radius (10-1000 R☉) gives enormous luminosity. Betelgeuse: T ≈ 3,500 K, R ≈ 900 R☉, L ≈ 10⁵ L☉.</p><p><strong>White dwarfs:</strong> Lower left. Remnant cores of dead low-mass stars. Very hot (T ~ 10,000-30,000 K) but tiny (R ~ R_Earth ≈ 0.01 R☉) → very dim (L ~ 10⁻²-10⁻⁴ L☉). They glow from residual heat — no fusion. They cool slowly over billions of years.</p><p><strong>Estimating radius from L and T:</strong> L = 4πR²σT⁴ → R/R☉ = √(L/L☉) × (T☉/T)².</p>",
        "keyPoints": [
          "HR diagram axes: L (vertical, log) vs T (horizontal, REVERSED — hot on left)",
          "Main sequence: H-fusion stars. Position set by mass (massive = top-left, low-mass = bottom-right)",
          "Red giants: upper right — cool but enormous → luminous",
          "White dwarfs: lower left — hot but tiny → dim",
          "L = 4πR²σT⁴ connects position on the diagram to radius",
          "A star's position CHANGES as it evolves (next subtopic)"
        ],
        "examTrap": {
          "wrong": "Stars on the main sequence are all the same type — they just differ in how bright they are",
          "correct": "Main sequence stars differ in MASS, which determines their temperature, luminosity, colour, and lifetime. The main sequence is a mass sequence: top-left = massive/hot/blue/short-lived, bottom-right = low-mass/cool/red/long-lived."
        }
      },

      "extension": {
        "title": "Using the HR diagram to measure the universe",
        "content": "<p><strong>Spectroscopic parallax:</strong> Measure a star's spectrum → identify spectral class (O, B, A, F, G, K, M) → place it on the HR diagram → read off its luminosity L. Then measure its apparent brightness b. Since b = L/(4πd²): solve for distance d = √(L/(4πb)). You can measure the distance to ANY star whose spectral class you know — even millions of light-years away.</p><p><strong>Cepheid variables:</strong> Stars that pulsate with a period proportional to their luminosity (period-luminosity relation). Measure the period → know L → measure b → find d. Hubble used Cepheids to prove galaxies exist beyond the Milky Way (1924) and to discover the expansion of the universe (1929).</p><p><strong>Connection to B.1:</strong> Stefan-Boltzmann (L = σAT⁴) and Wien's law (λ_max = 2.9 × 10⁻³/T) are the tools that make the HR diagram quantitative. Without them, it would just be a pretty picture.</p>",
        "connections": [
          "B.1 Thermal Energy: Stefan-Boltzmann and Wien's law determine L and T from observations",
          "C.5 Doppler Effect: redshift of spectral lines reveals whether stars/galaxies are approaching or receding",
          "E.1 Structure of the Atom: spectral lines identify elements in stellar atmospheres"
        ]
      },

      "simulation": {
        "title": "HR Diagram Explorer",
        "source": "University of Nebraska-Lincoln Astronomy",
        "url": "https://astro.unl.edu/naap/hr/animations/hr.html",
        "instructions": [
          "Click on different stars on the HR diagram. Note their temperature, luminosity, and radius.",
          "Compare two stars at the same temperature but different luminosities — the more luminous one has a LARGER radius.",
          "Watch a star's evolution track: see how it moves from the main sequence to the red giant branch and eventually to the white dwarf region."
        ]
      },

      "video": {
        "title": "The HR Diagram — IB Physics",
        "duration": "8 min",
        "description": "How to read the HR diagram, estimate radius, and understand stellar populations",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "L = 4πR²σT⁴",
          "description": "Stefan-Boltzmann: luminosity depends on radius² and temperature⁴."
        },
        {
          "formula": "R/R☉ = √(L/L☉) × (T☉/T)²",
          "description": "Estimate a star's radius relative to the Sun from its L and T."
        },
        {
          "formula": "b = L / (4πd²)",
          "description": "Apparent brightness = luminosity / (4π × distance²). Inverse-square law."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "A star is very bright and very cool (red). Where is it on the HR diagram, and what does this tell us about its size?",
          "steps": [
            { "label": "Position", "text": "Upper right of the HR diagram: high luminosity (upper) and low temperature (right)." },
            { "label": "Reasoning", "text": "L = 4πR²σT⁴. Low T should mean low L — but L is HIGH. The only way: R must be VERY LARGE (R² compensates for T⁴)." },
            { "label": "Conclusion", "text": "It's a red giant or red supergiant — an enormous star with a huge surface area." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "Betelgeuse has T = 3,500 K and L = 100,000 L☉. The Sun has T = 5,800 K. Find Betelgeuse's radius in solar radii.",
          "steps": [
            { "label": "Formula", "text": "R/R☉ = √(L/L☉) × (T☉/T)²" },
            { "label": "Substitute", "text": "R/R☉ = √(100,000) × (5800/3500)²" },
            { "label": "Calculate", "text": "= 316.2 × (1.657)² = 316.2 × 2.746", "isEquation": true },
            { "label": "Result", "text": "R/R☉ = 868", "isEquation": true },
            { "label": "Context", "text": "Betelgeuse is 868 times the radius of the Sun. If placed at the Sun's position, its surface would extend past the orbit of Mars, almost reaching Jupiter." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "Sirius B (white dwarf): T = 25,000 K, L = 0.03 L☉. Find its radius.",
          "steps": [
            { "label": "Formula", "text": "R/R☉ = √(L/L☉) × (T☉/T)²" },
            { "label": "Substitute", "text": "R/R☉ = √(0.03) × (5800/25000)²" },
            { "label": "Calculate", "text": "= 0.173 × (0.232)² = 0.173 × 0.0538 = 0.0093", "isEquation": true },
            { "label": "Result", "text": "R ≈ 0.009 R☉ ≈ 6,300 km — about the size of Earth!", "isEquation": true },
            { "label": "Context", "text": "Despite being hotter than most main sequence stars, Sirius B is incredibly dim because it's tiny. A teaspoon of its material would weigh ~5 tonnes." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "On the HR diagram, where would you find: (a) the Sun, (b) a blue supergiant, (c) a red dwarf?",
          "solution": "(a) Middle of the main sequence (G-type, moderate T and L). (b) Top-left: very high T (blue) and very high L. (c) Bottom-right of the main sequence: low T (red) and low L."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "State three properties of a main sequence star compared to a red giant of the same surface temperature.",
          "solution": "The main sequence star has: (1) smaller radius, (2) lower luminosity, (3) higher density. The red giant has the same temperature but is much larger → much more luminous."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A star has L = 400 L☉ and T = 4,000 K. T☉ = 5,800 K. Calculate R/R☉ and determine if this is a main sequence star or a giant.",
          "solution": "R/R☉ = √400 × (5800/4000)² = 20 × 2.103 = 42.1 R☉. This is far too large for a main sequence star at 4000 K (which would be a small red dwarf with R < R☉). It's a red giant."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "Two stars have the same luminosity. Star A has T = 3,000 K and Star B has T = 12,000 K. Calculate the ratio of their radii R_A/R_B.",
          "solution": "L = 4πR²σT⁴. Same L → R_A²T_A⁴ = R_B²T_B⁴ → (R_A/R_B)² = (T_B/T_A)⁴ = (12000/3000)⁴ = 4⁴ = 256. R_A/R_B = √256 = 16. Star A (the cooler one) is 16× larger."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A star at 10 parsecs has apparent brightness b = 4.2 × 10⁻⁹ W/m². (a) Find its luminosity. (b) Its surface temperature is 8,000 K. Find its radius in R☉. (c) Identify its likely position on the HR diagram.",
          "solution": "(a) d = 10 pc = 10 × 3.086 × 10¹⁶ = 3.086 × 10¹⁷ m. L = 4πd²b = 4π(3.086 × 10¹⁷)² × 4.2 × 10⁻⁹ = 5.03 × 10²⁷ W = 13.1 L☉. (b) R/R☉ = √(13.1) × (5800/8000)² = 3.62 × 0.526 = 1.9 R☉. (c) L ≈ 13 L☉, T = 8000 K: this is on the main sequence, upper-middle region — an A-type star similar to Sirius A."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "The HR diagram temperature axis goes left to right (low to high)",
          "explanation": "The temperature axis is REVERSED: high temperature is on the LEFT, low temperature on the RIGHT. This is a historical convention from spectral classification (O-B-A-F-G-K-M goes left to right, from hot to cool).",
          "correct": "Temperature DECREASES from left to right. Hot blue stars are on the left; cool red stars are on the right."
        },
        {
          "wrong": "Red giants are in the upper right because they're the most massive stars",
          "explanation": "Red giants can be former medium-mass stars (like the Sun will become). Their high luminosity comes from their ENORMOUS SIZE (R up to 1000 R☉), not necessarily from high mass. Some red giants have only 1-2 M☉.",
          "correct": "Red giants are luminous because of their huge radius, not because of extreme mass. L = 4πR²σT⁴ — a large R compensates for a low T."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "The HR diagram plots luminosity against surface temperature for stars.\n(a) State the approximate position on the HR diagram of: (i) a red giant, (ii) a white dwarf. [2]\n(b) Star X has surface temperature 4,500 K and luminosity 200 L☉. The Sun has T = 5,800 K.\n    (i) Calculate the radius of Star X in terms of solar radii. [3]\n    (ii) Identify what type of star X is. [1]\n(c) Explain why a white dwarf is found in the lower left of the HR diagram despite having a high surface temperature. [2]",
        "marks": 8,
        "modelAnswer": "(a) (i) Red giant: upper right (high L, low T) [1]. (ii) White dwarf: lower left (low L, high T) [1].\n(b)(i) R/R☉ = √(L/L☉) × (T☉/T)² [1] = √200 × (5800/4500)² [1] = 14.14 × 1.661 = 23.5 R☉ [1].\n(ii) Red giant (large radius, cool temperature, high luminosity) [1].\n(c) A white dwarf has a high surface temperature (~25,000 K) [1], but its radius is very small (~0.01 R☉, about Earth-sized), so the total power output L = 4πR²σT⁴ is very low despite the high T — because R² is tiny [1].",
        "examinerTip": "When asked to 'explain' a position on the HR diagram: ALWAYS reference L = 4πR²σT⁴. This equation connects L, R, and T — and explains why giants are bright (big R) and dwarfs are dim (small R) even when T seems to suggest otherwise."
      }
    }
  ]
},
  {
      "id": "e5_sub4",
      "num": 4,
      "title": "Stellar Evolution — From Birth to Death",
      "group": "Stellar Evolution & the HR Diagram",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "The Hertzsprung-Russell Diagram",
      "nextTitle": "Measuring Stars & the Expanding Universe",

      "bigIdea": "Every atom in your body was forged inside a star. The carbon in your DNA, the oxygen you breathe, the iron in your blood — all created by nuclear fusion in stellar cores or in the violent death of a massive star. You are not just in the universe. You ARE the universe, experiencing itself.",

      "foundation": {
        "title": "The life story of a star — in plain language",
        "content": "<p>Stars are born, live, and die — just like everything else. But their lives last millions to trillions of years, and their deaths can be the most violent events in the universe.</p><p><strong>Birth:</strong> A cloud of gas and dust (a nebula) collapses under gravity. As it squeezes, it heats up. When the centre reaches ~10 million degrees — hydrogen fusion ignites. A star is born.</p><p><strong>Life (main sequence):</strong> The star fuses hydrogen into helium for most of its life. The Sun has been doing this for 4.6 billion years and has about 5 billion years left. Massive stars burn through their fuel much faster — in millions of years, not billions.</p><p><strong>Death (depends on mass):</strong></p><p><strong>Small/medium stars (like the Sun):</strong> When hydrogen runs out → core contracts → outer layers expand → RED GIANT → outer layers puff off as a beautiful planetary nebula → core remains as a hot, tiny WHITE DWARF that cools forever.</p><p><strong>Massive stars (>8 solar masses):</strong> Same start, but after hydrogen they fuse helium, then carbon, oxygen, silicon — all the way to IRON. Iron can't fuse (it's the peak of the BE/A curve). Fusion stops → gravity wins → core COLLAPSES in milliseconds → SUPERNOVA → remnant becomes a NEUTRON STAR or BLACK HOLE.</p>",
        "summary": "<p><strong>Birth:</strong> Nebula → protostar → main sequence (fusion ignites).</p><p><strong>Life:</strong> Main sequence — hydrogen fusion, equilibrium, stable for millions-billions of years.</p><p><strong>Death (Sun-like):</strong> Red giant → planetary nebula → white dwarf.</p><p><strong>Death (massive):</strong> Red supergiant → supernova → neutron star or black hole.</p><p><strong>Key:</strong> Elements heavier than iron are ONLY made in supernovae.</p>",
        "checkQuestions": [
          {
            "question": "Why does a star eventually leave the main sequence?",
            "answer": "It runs out of hydrogen fuel in the core. Without fusion, there's no radiation pressure to oppose gravity → the core contracts → the star evolves into a giant or supergiant."
          },
          {
            "question": "Why can't fusion continue beyond iron?",
            "answer": "Iron-56 has the highest binding energy per nucleon (the peak of the BE/A curve). Fusing iron into heavier elements would require ADDING energy, not releasing it. There's no energy gain, so the star can't sustain itself."
          }
        ]
      },

      "core": {
        "title": "Stellar evolution — two paths determined by mass",
        "content": "<p><strong>Star formation:</strong> Gravitational collapse of a molecular cloud (nebula) → protostar → when core temperature reaches ~10⁷ K, hydrogen fusion begins → star joins the main sequence.</p><p><strong>Main sequence phase:</strong> Hydrogen fusion in the core. Duration determined by mass: t ∝ M⁻²·⁵. The Sun: ~10 billion years. A 10 M☉ star: ~20 million years. A 0.1 M☉ star: ~10 trillion years.</p><p><strong>Post-main sequence — LOW-MASS STARS (< ~8 M☉, including the Sun):</strong></p><ul><li>Core hydrogen exhausted → core contracts → heats up → hydrogen SHELL burning begins (fusion in a shell around the inert helium core)</li><li>Outer layers expand enormously → RED GIANT (luminous but cool)</li><li>When core reaches ~10⁸ K → helium fusion ignites: 3 ⁴He → ¹²C (triple-alpha process)</li><li>Eventually helium also exhausted → outer layers ejected → PLANETARY NEBULA (expanding shell of glowing gas)</li><li>Remaining core → WHITE DWARF: hot, dense (Earth-sized), supported by electron degeneracy pressure. Slowly cools over trillions of years.</li></ul><p><strong>Post-main sequence — MASSIVE STARS (> ~8 M☉):</strong></p><ul><li>Same start but FASTER. After helium: core hot enough for successive fusion stages: C → Ne → O → Si → Fe</li><li>Each stage is shorter: carbon burning ~600 years, silicon burning ~1 DAY</li><li>Iron core forms → fusion STOPS (iron is at BE/A peak → no energy from fusing iron)</li><li>No radiation pressure → core collapses in milliseconds → rebounds → SUPERNOVA (briefly outshines an entire galaxy)</li><li>Remnant: if < ~3 M☉ → NEUTRON STAR (city-sized, nuclear density). If > ~3 M☉ → BLACK HOLE</li></ul><p><strong>Chandrasekhar limit:</strong> ~1.4 M☉ = maximum mass of a white dwarf. Above this, electron degeneracy pressure cannot support the remnant → it collapses further.</p><p><strong>Stellar nucleosynthesis:</strong> H → He (main sequence). He → C, O (giant phase). C → heavier elements up to Fe (massive stars only). Fe → heavier (gold, uranium, etc.): ONLY in supernovae via rapid neutron capture (r-process).</p>",
        "keyPoints": [
          "Star formation: nebula collapse → protostar → main sequence when T_core ≈ 10⁷ K",
          "Low-mass death: red giant → planetary nebula → white dwarf (mass < 1.4 M☉ Chandrasekhar limit)",
          "High-mass death: red supergiant → supernova → neutron star (< 3 M☉) or black hole (> 3 M☉)",
          "Iron is the endpoint of stellar fusion — fusing iron absorbs energy",
          "Elements heavier than iron are created only in supernovae (r-process nucleosynthesis)",
          "The Chandrasekhar limit (1.4 M☉) separates white dwarfs from neutron stars"
        ],
        "examTrap": {
          "wrong": "All stars end as black holes",
          "correct": "Only the most massive stars (remnant > ~3 M☉) form black holes. Medium-mass stars become neutron stars. Low-mass stars (like the Sun) become white dwarfs. The fate is determined by the REMNANT mass, not the original star mass — much of the mass is lost during giant and supernova phases."
        }
      },

      "extension": {
        "title": "You are stardust — the origin of every element",
        "content": "<p><strong>Where did the elements in your body come from?</strong></p><ul><li><strong>Hydrogen</strong> (10% of your body mass): from the Big Bang, 13.8 billion years ago</li><li><strong>Helium:</strong> Big Bang + stellar fusion (but helium doesn't form chemical bonds, so it's not in your body)</li><li><strong>Carbon, nitrogen, oxygen</strong> (65% of your body): forged by helium fusion (triple-alpha) and CNO cycle in red giant stars, scattered when those stars died</li><li><strong>Calcium, phosphorus</strong> (in your bones): from massive star fusion (silicon burning)</li><li><strong>Iron</strong> (in your blood's haemoglobin): the final product of stellar fusion, created at the instant of core collapse before the supernova</li><li><strong>Gold, silver, uranium:</strong> created in supernova explosions or neutron star mergers (r-process) — the most extreme events in the universe</li></ul><p>The solar system formed 4.6 billion years ago from a nebula enriched by previous stellar deaths. The heavy elements in Earth, and in you, were made by stars that lived and died BEFORE the Sun was born. Carl Sagan: 'We are made of star stuff.'</p><p><strong>Connection to E.3:</strong> Radioactive isotopes from supernovae (like Al-26 and Fe-60) have been found in Earth's deep-sea sediments, proving that a supernova occurred near the solar system in the recent geological past (~2-3 million years ago).</p>",
        "connections": [
          "E.3 Radioactive Decay: the BE/A curve determines which fusion stages are possible in stars",
          "E.4 Fission: heavy elements created in supernovae include fissile materials like U-235",
          "D.1 Gravitational Fields: gravitational collapse drives both star formation and stellar death"
        ]
      },

      "simulation": {
        "title": "Stellar Evolution on the HR Diagram",
        "source": "University of Nebraska-Lincoln Astronomy",
        "url": "https://astro.unl.edu/naap/hr/animations/hr.html",
        "instructions": [
          "Select a 1 M☉ star and watch its evolution track: main sequence → red giant branch → horizontal branch → white dwarf.",
          "Select a 20 M☉ star: main sequence (upper left) → red supergiant → the track ends with a supernova (off the chart).",
          "Compare the TIME each star spends on the main sequence — the massive star's life is a flash compared to the Sun's."
        ]
      },

      "video": {
        "title": "Life Cycle of Stars — IB Physics",
        "duration": "12 min",
        "description": "Complete stellar evolution: nebula to remnant for both low-mass and high-mass stars",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "Chandrasekhar limit ≈ 1.4 M☉",
          "description": "Maximum mass of a white dwarf. Above this: the remnant becomes a neutron star or black hole."
        },
        {
          "formula": "3 ⁴He → ¹²C + γ",
          "description": "Triple-alpha process: helium fusion in red giants. Creates carbon — the basis of life."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "Describe the main stages of evolution for a star like the Sun.",
          "steps": [
            { "label": "1. Birth", "text": "A nebula (cloud of gas and dust) collapses under gravity. The core heats up. When it reaches ~10⁷ K, hydrogen fusion ignites → protostar becomes a main sequence star." },
            { "label": "2. Main sequence", "text": "Fuses hydrogen to helium in the core for ~10 billion years. Hydrostatic equilibrium keeps it stable." },
            { "label": "3. Red giant", "text": "Core hydrogen exhausted → core contracts → heats → shell burning begins → outer layers expand → becomes a red giant (100× larger, cooler surface, very luminous)." },
            { "label": "4. Helium fusion", "text": "Core reaches ~10⁸ K → helium fuses to carbon (triple-alpha). This phase is shorter." },
            { "label": "5. Planetary nebula", "text": "Outer layers are gently ejected, forming a glowing shell of gas (a planetary nebula)." },
            { "label": "6. White dwarf", "text": "The remaining core (~0.6 M☉, Earth-sized, very hot) cools slowly over trillions of years. No more fusion — just residual heat." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "Compare the evolution of a 1 M☉ star and a 25 M☉ star after the main sequence.",
          "steps": [
            { "label": "1 M☉ star", "text": "Main sequence (~10 Gyr) → red giant → planetary nebula → white dwarf. Never fuses beyond helium. Peaceful death." },
            { "label": "25 M☉ star", "text": "Main sequence (~7 Myr) → red supergiant → fuses He, C, Ne, O, Si → iron core → core collapse → SUPERNOVA → neutron star or black hole. Violent death." },
            { "label": "Key differences", "text": "The 25 M☉ star: (1) lives ~1400× shorter, (2) fuses elements up to iron, (3) dies in a supernova, (4) leaves a neutron star/black hole instead of a white dwarf, (5) creates and disperses heavy elements." },
            { "label": "Why the difference?", "text": "Higher mass → higher core T and P → can fuse heavier elements. The remnant mass exceeds the Chandrasekhar limit (1.4 M☉) → cannot be a white dwarf → collapses further." }
          ]
        },
        {
          "level": "extension",
          "scope": "sl",
          "title": "Trace the origin of the iron atom in a haemoglobin molecule in your blood.",
          "steps": [
            { "label": "Step 1", "text": "A massive star (>8 M☉) formed from a nebula billions of years before the Sun." },
            { "label": "Step 2", "text": "The star fused hydrogen → helium → carbon → neon → oxygen → silicon over millions of years." },
            { "label": "Step 3", "text": "Silicon fused to iron in ~1 day. Iron: the end of the road (BE/A peak)." },
            { "label": "Step 4", "text": "The iron core collapsed → supernova → iron ejected into the interstellar medium." },
            { "label": "Step 5", "text": "~5 billion years ago, this iron-enriched gas became part of the solar nebula that formed the Sun and Earth." },
            { "label": "Step 6", "text": "Iron became part of Earth's crust, was absorbed by organisms, and is now in the haemoglobin molecule carrying oxygen in your blood." },
            { "label": "Summary", "text": "Your blood iron was created in the core of a star that died before the Sun was born. The supernova that spread it across space was more luminous than a billion suns — for a few weeks." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "State the final remnant for each: (a) a 1 M☉ star, (b) a 10 M☉ star, (c) a 30 M☉ star.",
          "solution": "(a) White dwarf (remnant mass < 1.4 M☉). (b) Neutron star (remnant mass between 1.4 and ~3 M☉ after supernova mass loss). (c) Black hole (remnant mass > ~3 M☉)."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "State the Chandrasekhar limit and explain its significance.",
          "solution": "The Chandrasekhar limit is ~1.4 M☉. It is the maximum mass of a white dwarf. If the remnant core mass exceeds this limit, electron degeneracy pressure cannot support it against gravitational collapse → it becomes a neutron star or (if > ~3 M☉) a black hole."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "Explain why stellar fusion cannot produce elements heavier than iron, and describe how heavier elements are formed.",
          "solution": "Iron-56 has the highest binding energy per nucleon (the peak of the BE/A curve). Fusing iron into heavier elements would move DOWN the curve (lower BE/A) → energy must be ABSORBED, not released. Without energy release, the star can't sustain fusion. Elements heavier than iron are formed in supernovae through rapid neutron capture (r-process): the extreme neutron flux allows rapid build-up of heavy nuclei on timescales of seconds."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "Draw the evolution track on an HR diagram for a star like the Sun, from main sequence to white dwarf. Label each stage.",
          "solution": "Main sequence (middle of the band, G-type) → moves RIGHT and UP to the red giant branch (cooler, more luminous) → horizontal branch (helium burning, moves left briefly) → ejects outer layers (planetary nebula) → remnant core drops to lower LEFT: white dwarf (hot, very dim). The track crosses the diagram from middle → upper right → lower left."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A star of initial mass 15 M☉ undergoes a supernova. The remnant has mass 2.0 M☉. (a) What type of remnant is this? (b) How much mass was ejected? (c) This ejected material contains elements up to and beyond iron. Explain the significance of this for the formation of new stars and planets.",
          "solution": "(a) Neutron star (mass between 1.4 and ~3 M☉ — above the Chandrasekhar limit for a white dwarf, below the threshold for a black hole). (b) Ejected mass = 15 − 2 = 13 M☉. (c) The ejected material enriches the interstellar medium with heavy elements (carbon, oxygen, silicon, iron, gold, uranium). Future nebulae that form from this enriched gas will produce stars and planets with rocky cores and metallic elements — like our solar system. Without supernovae, there would be no elements heavier than helium (except traces from the Big Bang), no rocky planets, and no life as we know it."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "A planetary nebula is related to planets",
          "explanation": "The name is historical — William Herschel thought they looked like planetary discs through a telescope. They have nothing to do with planets. A planetary nebula is the outer layers of a dying low-mass star, expelled gently into space.",
          "correct": "A planetary nebula is the ejected outer shell of a red giant star. It has no connection to planets despite the misleading name."
        },
        {
          "wrong": "Supernovae happen when a star runs out of ALL fuel",
          "explanation": "A supernova happens when the core can no longer produce energy by fusion — specifically, when the core becomes IRON (which can't fuse to release energy). The star may still have hydrogen and helium in its outer layers. It's the CORE fuel failure that triggers the collapse.",
          "correct": "Supernovae occur when the iron core can no longer sustain fusion. Outer layers may still contain fusible material, but the core — where the pressure balance is maintained — has reached the end of the fusion road."
        },
        {
          "wrong": "Black holes suck everything in like a vacuum cleaner",
          "explanation": "A black hole has the same gravitational effect as any other object of the same mass. If the Sun became a black hole (it can't, but hypothetically), Earth's orbit wouldn't change — the gravitational pull at Earth's distance would be identical. Black holes are only 'dangerous' if you get very close.",
          "correct": "A black hole's gravity at a distance is the same as any other object of equal mass. Earth would orbit a 1 M☉ black hole exactly as it orbits the 1 M☉ Sun. The extreme effects (event horizon, tidal forces) only matter very close to the black hole."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "Stars evolve differently depending on their mass.\n(a) Outline the stages of evolution of a star of mass similar to the Sun, from main sequence to its final state. [4]\n(b) State the name and approximate mass limit that determines whether a stellar remnant becomes a white dwarf or a neutron star. [2]\n(c) Explain why elements heavier than iron cannot be produced by nuclear fusion in stars. [2]\n(d) Describe how elements heavier than iron are produced. [2]",
        "marks": 10,
        "modelAnswer": "(a) Main sequence: hydrogen fusion in core for ~10 billion years [1]. Core hydrogen exhausted → core contracts, outer layers expand → red giant [1]. Helium fusion in core (triple-alpha: 3He → C) [1]. Outer layers ejected → planetary nebula → core remains as white dwarf [1].\n(b) The Chandrasekhar limit [1], approximately 1.4 solar masses [1].\n(c) Iron-56 has the highest binding energy per nucleon — it is at the peak of the BE/A curve [1]. Fusing iron would produce nuclei with LOWER BE/A → energy would need to be absorbed, not released → fusion cannot sustain the star [1].\n(d) Elements heavier than iron are produced during supernova explosions [1] through rapid neutron capture (r-process): the intense neutron flux allows nuclei to capture neutrons rapidly, building up heavy elements [1].",
        "examinerTip": "The evolution sequence (main sequence → red giant → planetary nebula → white dwarf) must be in the correct ORDER. Writing the stages out of sequence loses marks. Also: 'planetary nebula' is NOT the same as 'supernova' — low-mass stars eject their shells gently, not explosively."
      }
    },
    {
      "id": "e5_sub5",
      "num": 5,
      "title": "Measuring Stars & the Expanding Universe",
      "group": "Observational Astrophysics",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "Stellar Evolution",
      "nextTitle": null,

      "bigIdea": "Every galaxy is moving away from us. The further it is, the faster it recedes. Run the movie backward and everything was once in the same place — the Big Bang, 13.8 billion years ago. The evidence? A faint microwave glow filling all of space: the cosmic microwave background, the oldest light in the universe.",

      "foundation": {
        "title": "How do we know what stars are made of — from millions of light-years away?",
        "content": "<p>You can't visit a star. You can't take a sample. But you CAN analyse its light. And light carries an astonishing amount of information:</p><p><strong>Temperature:</strong> Hot stars are blue. Cool stars are red. Wien's law: measure the peak wavelength of the light → calculate the surface temperature. The Sun peaks at ~500 nm (green-yellow) → T ≈ 5,800 K.</p><p><strong>Composition:</strong> Every element absorbs light at specific wavelengths (spectral lines from E.1). The dark lines in a star's spectrum tell you which elements are in its atmosphere — hydrogen, helium, iron, calcium, all identifiable from across the galaxy.</p><p><strong>Distance:</strong> Measure how bright a star APPEARS (apparent brightness b). Figure out how bright it ACTUALLY IS (luminosity L — from the HR diagram or Cepheid variables). Then use b = L/(4πd²) to find the distance d. One equation, applied across billions of light-years.</p><p><strong>The expanding universe:</strong> Edwin Hubble (1929) measured the distances and velocities of galaxies. He found: every galaxy is moving AWAY from us, and the further it is, the faster it moves. This means space itself is expanding. Run the expansion backward → everything was once in a single point → the Big Bang, 13.8 billion years ago.</p>",
        "summary": "<p><strong>Temperature:</strong> From colour/peak wavelength (Wien's law).</p><p><strong>Composition:</strong> From spectral absorption lines.</p><p><strong>Distance:</strong> From apparent brightness + known luminosity: d = √(L/4πb).</p><p><strong>Velocity:</strong> From Doppler shift of spectral lines (redshift = receding).</p><p><strong>Hubble's law:</strong> v = H₀d — recession speed ∝ distance → universe is expanding.</p><p><strong>Big Bang evidence:</strong> Hubble's law + cosmic microwave background (CMB at 2.7 K).</p>",
        "checkQuestions": [
          {
            "question": "How can astronomers determine the temperature of a distant star?",
            "answer": "By measuring the peak wavelength of its spectrum and applying Wien's displacement law: λ_max = 2.9 × 10⁻³ / T. A shorter peak wavelength means a hotter star (blue). A longer peak wavelength means a cooler star (red)."
          },
          {
            "question": "All distant galaxies show redshifted spectral lines. What does this tell us?",
            "answer": "Redshift means the galaxies are moving AWAY from us (Doppler effect). The fact that ALL distant galaxies are redshifted means the universe is expanding — space itself is stretching, carrying the galaxies apart."
          }
        ]
      },

      "core": {
        "title": "Luminosity, apparent brightness, Hubble's law, and the Big Bang",
        "content": "<p><strong>Luminosity (L):</strong> Total power output of a star in all directions (W). Determined by: L = 4πR²σT⁴ (Stefan-Boltzmann). If you know R and T → you know L.</p><p><strong>Apparent brightness (b):</strong> Power received per unit area at distance d: b = L/(4πd²). The inverse-square law from B.1. A star can be intrinsically luminous but appear dim if it's far away.</p><p><strong>Measuring distance:</strong> If L is known (from HR diagram spectral class, or from Cepheid period-luminosity relation) and b is measured: d = √(L/(4πb)).</p><p><strong>Cepheid variables:</strong> Stars that pulsate with a period proportional to their luminosity. Measure the period → know L → measure b → find d. These are 'standard candles' — used by Hubble to measure galaxy distances.</p><p><strong>Hubble's law:</strong> v = H₀d, where H₀ ≈ 70 km/s/Mpc is the Hubble constant. The recession velocity of a galaxy is proportional to its distance. This means the universe is EXPANDING.</p><p><strong>Age of the universe:</strong> t ≈ 1/H₀ ≈ 14 billion years (rough estimate, close to the accepted 13.8 Gyr).</p><p><strong>Cosmic Microwave Background (CMB):</strong> Thermal radiation filling all of space, uniform in all directions, at T = 2.7 K. This is the 'afterglow' of the Big Bang — light from when the universe was ~380,000 years old and ~3,000 K, now redshifted by the expansion to microwave wavelengths. Discovered by Penzias and Wilson (1965, Nobel Prize 1978). The strongest single piece of evidence for the Big Bang.</p>",
        "keyPoints": [
          "L = 4πR²σT⁴ (Stefan-Boltzmann) determines a star's luminosity from radius and temperature",
          "b = L/(4πd²) — apparent brightness falls off as distance² (inverse-square law)",
          "Cepheid variables: period-luminosity relation provides L → then b gives d",
          "Hubble's law: v = H₀d — recession velocity proportional to distance → expanding universe",
          "CMB: uniform 2.7 K radiation in all directions — afterglow of the Big Bang",
          "Three pillars of Big Bang evidence: (1) Hubble's law, (2) CMB, (3) Big Bang nucleosynthesis (H/He ratio)"
        ],
        "examTrap": {
          "wrong": "Galaxies are moving through space away from us — we must be at the centre of the expansion",
          "correct": "Galaxies are NOT moving through space — SPACE ITSELF is expanding, carrying galaxies with it. Every galaxy sees every other galaxy receding. There is no centre. Imagine dots on a balloon being inflated: every dot moves away from every other dot, but no dot is 'the centre.'"
        }
      },

      "extension": {
        "title": "Dark energy and the fate of the universe",
        "content": "<p><strong>The accelerating expansion:</strong> In 1998, observations of distant Type Ia supernovae showed that the expansion of the universe is not slowing down (as gravity should cause) but ACCELERATING. This was completely unexpected. Perlmutter, Schmidt, and Riess won the 2011 Nobel Prize for this discovery.</p><p><strong>Dark energy:</strong> The cause of the acceleration is unknown. It's called 'dark energy' — accounting for ~68% of the universe's total energy content. We know it exists (from the acceleration), but we have no idea what it is. It is the biggest unsolved problem in physics.</p><p><strong>The fate of the universe:</strong> Current evidence (accelerating expansion) → 'heat death.' Everything spreads out, cools, and eventually all stars die. In ~10¹⁰⁰ years, even black holes evaporate (Hawking radiation). The universe goes dark and cold — maximum entropy, no usable energy, no structure. Not with a bang, but with a fade.</p><p><strong>The cosmic distance ladder:</strong> Parallax (nearby stars, < 100 pc) → Cepheids (nearby galaxies, < 30 Mpc) → Type Ia supernovae (distant galaxies, > 100 Mpc). Each method calibrates the next. The entire scale of the observable universe rests on this ladder.</p>",
        "connections": [
          "C.5 Doppler Effect: redshift z = Δλ/λ = v/c measures galaxy recession velocity",
          "B.1 Thermal Energy: Wien's law λ_max = 2.9 × 10⁻³/T gives T from the CMB peak wavelength",
          "B.4 Thermodynamics (HL): the heat death of the universe is the state of maximum entropy — the 2nd law applied to the cosmos"
        ]
      },

      "simulation": {
        "title": "Hubble's Law Simulator",
        "source": "University of Nebraska-Lincoln Astronomy",
        "url": "https://astro.unl.edu/naap/esp/hubble.html",
        "instructions": [
          "Measure the redshift (Δλ/λ) of spectral lines from several galaxies. Calculate recession velocity: v = cΔλ/λ.",
          "Measure the distance to each galaxy (using apparent brightness of known standard candles).",
          "Plot v vs d. The straight line that emerges IS Hubble's law. The gradient is the Hubble constant H₀."
        ]
      },

      "video": {
        "title": "Hubble's Law and the Expanding Universe — IB Physics",
        "duration": "9 min",
        "description": "Redshift, Hubble's law, the Big Bang, and the CMB — with IB calculations",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "b = L / (4πd²)",
          "description": "Apparent brightness = luminosity / (4π × distance²). Inverse-square law."
        },
        {
          "formula": "v = H₀d",
          "description": "Hubble's law: recession velocity = Hubble constant × distance. H₀ ≈ 70 km/s/Mpc."
        },
        {
          "formula": "λ_max = 2.9 × 10⁻³ / T",
          "description": "Wien's displacement law: peak wavelength of thermal radiation. For CMB: T = 2.7 K → λ_max ≈ 1.1 mm (microwave)."
        },
        {
          "formula": "z = Δλ/λ ≈ v/c",
          "description": "Redshift parameter. For galaxies moving much slower than c."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "The CMB has temperature 2.7 K. Find its peak wavelength. What part of the EM spectrum is this?",
          "steps": [
            { "label": "Formula", "text": "Wien's law: λ_max = 2.9 × 10⁻³ / T" },
            { "label": "Calculation", "text": "λ_max = 2.9 × 10⁻³ / 2.7 = 1.07 × 10⁻³ m = 1.07 mm", "isEquation": true },
            { "label": "EM spectrum", "text": "1.07 mm is in the MICROWAVE region. That's why it's called the Cosmic MICROWAVE Background." },
            { "label": "Context", "text": "The CMB was originally ~3000 K visible light. The expansion of the universe stretched (redshifted) those photons by a factor of ~1100 over 13.8 billion years, cooling them to 2.7 K microwaves." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "A galaxy's hydrogen-alpha line (rest λ = 656.3 nm) is observed at 680.0 nm. Find the recession velocity and distance.",
          "steps": [
            { "label": "Redshift", "text": "Δλ = 680.0 − 656.3 = 23.7 nm" },
            { "label": "z", "text": "z = Δλ/λ = 23.7/656.3 = 0.0361", "isEquation": true },
            { "label": "Velocity", "text": "v = zc = 0.0361 × 3 × 10⁸ = 1.08 × 10⁷ m/s = 10,800 km/s", "isEquation": true },
            { "label": "Distance", "text": "d = v/H₀ = 10,800/70 = 154 Mpc", "isEquation": true },
            { "label": "In light-years", "text": "154 Mpc × 3.26 Mly/Mpc ≈ 503 million light-years. The light we're seeing left this galaxy 503 million years ago." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "A Cepheid variable in a distant galaxy has period 10 days → L = 10,000 L☉. Its apparent brightness is 2 × 10⁻¹⁵ W/m². Find the distance.",
          "steps": [
            { "label": "Luminosity", "text": "L = 10,000 × 3.85 × 10²⁶ = 3.85 × 10³⁰ W" },
            { "label": "Formula", "text": "d = √(L / (4πb))" },
            { "label": "Calculation", "text": "d = √(3.85 × 10³⁰ / (4π × 2 × 10⁻¹⁵))", "isEquation": true },
            { "label": "Simplify", "text": "= √(3.85 × 10³⁰ / 2.51 × 10⁻¹⁴) = √(1.53 × 10⁴⁴) = 1.24 × 10²² m", "isEquation": true },
            { "label": "Convert", "text": "d = 1.24 × 10²² / (3.086 × 10²²) = 0.40 Mpc ≈ 1.3 million light-years. This galaxy is in our local group — similar to the Andromeda galaxy's distance." }
          ]
        },
        {
          "level": "extension",
          "scope": "sl",
          "title": "Estimate the age of the universe from the Hubble constant H₀ = 70 km/s/Mpc.",
          "steps": [
            { "label": "Concept", "text": "If the universe has been expanding at a constant rate, then age ≈ 1/H₀ (the time for a galaxy at distance d to reach that distance at velocity v = H₀d)." },
            { "label": "Convert units", "text": "H₀ = 70 km/s/Mpc = 70 × 10³ m/s per 3.086 × 10²² m = 2.27 × 10⁻¹⁸ s⁻¹" },
            { "label": "Age", "text": "t = 1/H₀ = 1/(2.27 × 10⁻¹⁸) = 4.41 × 10¹⁷ s", "isEquation": true },
            { "label": "Convert", "text": "= 4.41 × 10¹⁷ / (3.15 × 10⁷) = 1.40 × 10¹⁰ years ≈ 14 billion years", "isEquation": true },
            { "label": "Comparison", "text": "The accepted value is 13.8 billion years. Our estimate is close — the small difference comes from the expansion not being constant (it accelerated due to dark energy)." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "State two pieces of evidence for the Big Bang theory.",
          "solution": "(1) Hubble's law: all distant galaxies are receding, with velocity proportional to distance → the universe is expanding. Extrapolating backward, everything was once in a single point. (2) The CMB: uniform thermal radiation at 2.7 K filling all of space — the cooled afterglow of the hot, dense early universe."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A star has L = 100 L☉ and is at distance d = 50 pc. Find its apparent brightness.",
          "solution": "L = 100 × 3.85 × 10²⁶ = 3.85 × 10²⁸ W. d = 50 × 3.086 × 10¹⁶ = 1.543 × 10¹⁸ m. b = L/(4πd²) = 3.85 × 10²⁸ / (4π × (1.543 × 10¹⁸)²) = 3.85 × 10²⁸ / 2.99 × 10³⁷ = 1.29 × 10⁻⁹ W/m²."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A galaxy has recession velocity 14,000 km/s. Using H₀ = 70 km/s/Mpc, find its distance in Mpc and in light-years.",
          "solution": "d = v/H₀ = 14,000/70 = 200 Mpc. In light-years: 200 × 3.26 × 10⁶ = 652 million light-years."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "The peak wavelength of the CMB is 1.06 mm. Verify that this corresponds to T ≈ 2.7 K using Wien's law.",
          "solution": "T = 2.9 × 10⁻³ / λ_max = 2.9 × 10⁻³ / 1.06 × 10⁻³ = 2.74 K ≈ 2.7 K. ✓ Confirmed."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A galaxy's spectrum shows the Hβ line (rest λ = 486.1 nm) at 501.2 nm. (a) Find the redshift z. (b) Find the recession velocity. (c) Find the distance. (d) How long ago did this light leave the galaxy?",
          "solution": "(a) z = (501.2 − 486.1)/486.1 = 15.1/486.1 = 0.0311. (b) v = zc = 0.0311 × 3 × 10⁸ = 9.33 × 10⁶ m/s = 9,330 km/s. (c) d = v/H₀ = 9330/70 = 133 Mpc = 434 million light-years. (d) The light left ~434 million years ago (approximately equal to the distance in light-years, since v << c)."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "The Big Bang was an explosion IN space — everything expanded outward from a central point",
          "explanation": "The Big Bang was not an explosion in existing space. Space ITSELF began expanding. There is no central point and no edge. Every point in the universe was the 'centre.' Think of it as the expansion of space, not an explosion within it.",
          "correct": "The Big Bang was the expansion of space itself. All of space was once compressed to a very hot, dense state. The expansion happens everywhere simultaneously — there is no centre or edge."
        },
        {
          "wrong": "The CMB comes from a specific direction in space",
          "explanation": "The CMB is uniform in ALL directions (to 1 part in 100,000). It fills the entire sky, not a specific region. It comes from everywhere because it was emitted by the hot plasma that filled ALL of space when the universe was ~380,000 years old.",
          "correct": "The CMB is isotropic — it looks the same in every direction. It fills all of space uniformly. This uniformity is one of the strongest pieces of evidence that the early universe was extremely homogeneous."
        },
        {
          "wrong": "Hubble's constant means the expansion rate has always been the same",
          "explanation": "H₀ is the CURRENT value of the expansion rate. The expansion rate has changed over time: it decelerated initially (gravity), then began accelerating ~5 billion years ago (dark energy). Using 1/H₀ as the age of the universe is only an approximation.",
          "correct": "H₀ is the present-day value. The expansion rate has varied: decelerating due to gravity in the early universe, then accelerating due to dark energy in the last ~5 billion years."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "Observations of distant galaxies provide evidence for the expansion of the universe.\n(a) State Hubble's law. [1]\n(b) A galaxy has a recession velocity of 21,000 km/s. Using H₀ = 70 km/s/Mpc, calculate the distance to the galaxy. [1]\n(c) Outline how astronomers use the redshift of spectral lines to determine the recession velocity of a galaxy. [3]\n(d) Describe one other piece of evidence that supports the Big Bang theory. [2]\n(e) Estimate the age of the universe from the Hubble constant. [2]",
        "marks": 9,
        "modelAnswer": "(a) The recession velocity of a galaxy is proportional to its distance: v = H₀d [1].\n(b) d = v/H₀ = 21,000/70 = 300 Mpc [1].\n(c) Light from distant galaxies is analysed using a spectrometer/diffraction grating [1]. Known spectral lines (e.g., hydrogen) are observed at LONGER wavelengths than expected (redshifted) [1]. The redshift z = Δλ/λ gives the recession velocity: v = zc [1].\n(d) The Cosmic Microwave Background (CMB): uniform thermal radiation at 2.7 K detected from all directions in space [1]. This is the cooled remnant of the hot radiation from the early universe, predicted by the Big Bang model and discovered by Penzias and Wilson in 1965 [1].\n(e) t ≈ 1/H₀. H₀ = 70 km/s/Mpc = 70 × 10³/(3.086 × 10²²) = 2.27 × 10⁻¹⁸ s⁻¹ [1]. t = 1/(2.27 × 10⁻¹⁸) = 4.4 × 10¹⁷ s ≈ 14 billion years [1].",
        "examinerTip": "For 'outline how redshift is used' questions: you need THREE elements — (1) how the spectrum is obtained (spectrometer/grating), (2) what is observed (lines shifted to longer wavelengths), and (3) how velocity is calculated (z = Δλ/λ, v = zc). Missing any one element costs a mark."
      }
    }
  ]
},
              
