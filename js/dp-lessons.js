const DP_LESSONS = {
  "A2": {
    title: "Forces and Momentum",
    code: "A.2",
    theme: "A",
    level: "SL + HL",
    hours: "10",
    lessons: [
      {
        id: "L1",
        title: "Newton's Second Law in Terms of Momentum",
        ao: "AO1 AO2 AO3",
        hours: "2.5",
        guiding: "How can Newton's laws be modelled mathematically? What happens when the mass of a system changes?",
        infographics: ["dp-a2-lesson1.png", "dp-a2-lesson1b.png"],
        sections: [
          {
            type: "syllabus",
            content: "<ul><li>Newton's three laws of motion</li><li>Linear momentum <strong>p = mv</strong> remains constant unless acted upon by a resultant external force</li><li>Newton's second law: <strong>F = Δp/Δt</strong> (general form) and <strong>F = ma</strong> (constant mass)</li></ul>"
          },
          {
            type: "heading",
            level: 2,
            text: "What is Momentum?"
          },
          {
            type: "text",
            content: "<p>Imagine trying to stop a bowling ball rolling towards you at 5 m s⁻¹ compared to stopping a table tennis ball at the same speed. The bowling ball is much harder to stop — not because it moves faster, but because it has more <strong>mass in motion</strong>. This idea is what physicists call <strong>momentum</strong>.</p><p>Momentum combines two properties of a moving object — its mass and velocity — into a single quantity that tells us how much \"motion\" the object carries. It is one of the most fundamental quantities in physics because, as we will see, it is <strong>conserved</strong> in every interaction.</p>"
          },
          {
            type: "formula",
            label: "Linear Momentum (Data Booklet)",
            formula: "p = mv",
            note: "p = momentum (kg m s⁻¹) · m = mass (kg) · v = velocity (m s⁻¹) · Vector: direction of p = direction of v"
          },
          {
            type: "concept",
            title: "Momentum is a Vector",
            content: "<p>Because velocity has direction, momentum inherits that direction. A car moving east at 20 m s⁻¹ has momentum pointing east. The same car moving west at 20 m s⁻¹ has momentum pointing west. These are <strong>not equal</strong> — they are opposite. This vector nature is critically important when solving collision problems, where you must assign positive and negative signs for opposite directions.</p>"
          },
          {
            type: "worked",
            num: 1,
            question: "Calculate the momentum of: (a) a 1200 kg car at 25 m s⁻¹, (b) a 58 g tennis ball served at 200 km h⁻¹, (c) a sprinter of mass 72 kg running at 10.4 m s⁻¹.",
            steps: [
              "<strong>(a)</strong> p = mv = 1200 × 25 = <strong>3.0 × 10⁴ kg m s⁻¹</strong>",
              "<strong>(b)</strong> Convert: 200 km h⁻¹ = 200 ÷ 3.6 = 55.6 m s⁻¹; 58 g = 0.058 kg<br>p = 0.058 × 55.6 = <strong>3.2 kg m s⁻¹</strong>",
              "<strong>(c)</strong> p = 72 × 10.4 = <strong>749 kg m s⁻¹</strong> ≈ <strong>750 kg m s⁻¹</strong> (2 s.f.)"
            ],
            ref: "Adapted from Allum & Morris, Hodder 2023, p.72"
          },
          {
            type: "keypoint",
            title: "Exam Tip",
            content: "Always convert to SI units first: mass in kg (not g), velocity in m s⁻¹ (not km h⁻¹). To convert km h⁻¹ → m s⁻¹, divide by 3.6."
          },
          {
            type: "heading",
            level: 2,
            text: "The Two Forms of Newton's Second Law"
          },
          {
            type: "text",
            content: "<p>You learned Newton's second law as <strong>F = ma</strong> in MYP. This form works perfectly when mass stays constant — pushing a box, dropping a ball, accelerating a car.</p><p>But Newton actually wrote his law more generally, in terms of the <strong>rate of change of momentum</strong>:</p>"
          },
          {
            type: "formula",
            label: "Newton's Second Law — General Form (Data Booklet)",
            formula: "F = Δp / Δt",
            note: "F = resultant force (N) · Δp = change in momentum (kg m s⁻¹) · Δt = time (s)"
          },
          {
            type: "heading",
            level: 3,
            text: "Derivation: F = ma from F = Δp/Δt"
          },
          {
            type: "derivation",
            content: "F = Δp / Δt = Δ(mv) / Δt = m(Δv/Δt) = m × a = <strong>ma</strong><br><span style=\"font-size:11px;color:var(--text3);\">↑ only valid when mass m is constant</span>"
          },
          {
            type: "text",
            content: "<p>So <strong>F = ma is a special case</strong> of the more fundamental F = Δp/Δt, valid only when mass doesn't change.</p>"
          },
          {
            type: "heading",
            level: 3,
            text: "When does mass change?"
          },
          {
            type: "table",
            headers: ["Situation", "Why mass changes", "Which form?"],
            rows: [
              ["Rocket propulsion", "Fuel is burned and expelled as exhaust", "F = Δp/Δt only"],
              ["Conveyor belt", "Material continuously loaded onto belt", "F = Δp/Δt only"],
              ["Rain falling into a moving cart", "Cart's mass increases", "F = Δp/Δt only"],
              ["Jet engine", "Air in + fuel → hot exhaust out", "F = Δp/Δt only"],
              ["Car braking on a road", "Mass stays constant", "Either form works"]
            ]
          },
          {
            type: "worked",
            num: 2,
            question: "A rocket ejects exhaust gases at a rate of 1.5 × 10⁴ kg s⁻¹ with speed 2.3 × 10³ m s⁻¹ relative to the rocket. Calculate the thrust.",
            steps: [
              "<strong>Identify:</strong> Δm/Δt = 1.5 × 10⁴ kg s⁻¹, v = 2.3 × 10³ m s⁻¹",
              "<strong>Apply:</strong> F = Δp/Δt = (Δm/Δt) × v = (1.5 × 10⁴)(2.3 × 10³)",
              "<strong>Answer:</strong> F = <strong>3.5 × 10⁷ N</strong>"
            ],
            ref: "Adapted from Allum & Morris, IB Physics, Hodder 2023, p.72"
          },
          {
            type: "worked",
            num: 3,
            question: "A rocket (mass 2.7 × 10⁶ kg at lift-off) ejects gas at 1.9 × 10⁴ kg s⁻¹ with speed 2.0 × 10³ m s⁻¹. (a) Find the initial acceleration. (b) Explain why acceleration increases as the rocket rises.",
            steps: [
              "<strong>(a) Thrust:</strong> F = (1.9 × 10⁴)(2.0 × 10³) = 3.8 × 10⁷ N",
              "<strong>Weight:</strong> W = mg = (2.7 × 10⁶)(9.8) = 2.65 × 10⁷ N",
              "<strong>Resultant:</strong> F<sub>net</sub> = 3.8 × 10⁷ − 2.65 × 10⁷ = 1.15 × 10⁷ N",
              "<strong>Acceleration:</strong> a = F/m = 1.15 × 10⁷ / 2.7 × 10⁶ = <strong>4.3 m s⁻²</strong>",
              "<strong>(b)</strong> As fuel burns, the rocket's mass <strong>decreases</strong>. Since a = F<sub>net</sub>/m, and thrust stays constant while m falls, acceleration <strong>increases</strong>. Additionally, g decreases slightly with altitude."
            ],
            ref: "Adapted from Allum & Morris, IB Physics, Hodder 2023, p.72"
          },
          {
            type: "worked",
            num: 4,
            question: "A firefighter's hose delivers 5.2 kg of water per second at 18 m s⁻¹ onto a wall, where the water splashes and falls vertically downward. Calculate the force on the wall.",
            steps: [
              "<strong>The water's horizontal momentum drops to zero on hitting the wall.</strong>",
              "<strong>Rate of momentum change:</strong> F = Δp/Δt = (Δm/Δt) × v = 5.2 × 18 = <strong>93.6 N ≈ 94 N</strong>"
            ]
          },
          {
            type: "infographic"
          },
          {
            type: "mistake",
            items: [
              "<strong>1.</strong> Thinking force <em>equals</em> momentum. Force is the <em>rate of change</em> of momentum. An object can have huge momentum but zero net force (constant velocity).",
              "<strong>2.</strong> Forgetting that F in F = ma is the <em>resultant</em> (net) force, not just any single force.",
              "<strong>3.</strong> Using F = ma when mass changes (rockets, conveyor belts). Always check first."
            ]
          },
          {
            type: "nos",
            content: "The progression from F = ma to F = Δp/Δt illustrates how scientific models can be <strong>generalised</strong>. The simpler model becomes a special case of a more powerful one. Newton's laws break down near the speed of light, where Einstein's relativity takes over (Topic A.5)."
          },
          {
            type: "practice",
            questions: [
              { num: "1.", text: "Calculate the momentum of: (a) a 0.45 kg football at 28 m s⁻¹, (b) the Earth (6.0 × 10²⁴ kg) at 3.0 × 10⁴ m s⁻¹, (c) a proton (1.67 × 10⁻²⁷ kg) at 2.0 × 10⁷ m s⁻¹.", cmd: "Calculate" },
              { num: "2.", text: "A trolley accelerated at 80 cm s⁻² when a resultant force of 1.7 N was applied. Calculate its mass.", cmd: "Calculate" },
              { num: "3.", text: "A 6.4 N force is applied to a 2.1 kg mass on a horizontal surface. It accelerates at 1.9 m s⁻². Determine the average frictional force.", cmd: "Determine" },
              { num: "4.", text: "A conveyor belt moves at constant speed. Sand is dropped onto it at 3.5 kg s⁻¹. If the belt speed is 2.4 m s⁻¹, calculate the force needed to keep the belt moving at constant speed.", cmd: "Calculate" },
              { num: "5.", text: "Explain why F = Δp/Δt is considered more fundamental than F = ma. Give two examples where F = ma cannot be used.", cmd: "Explain" },
              { num: "6.", text: "A car (1450 kg) has an engine force of 5200 N. Air resistance at 30 m s⁻¹ is 1400 N. Determine the acceleration at 30 m s⁻¹ and explain what happens as speed increases further.", cmd: "Determine" },
              { num: "7.", text: "A 150 g ball is dropped from 2.0 m onto a hard floor and bounces to 1.5 m. Contact time = 12 ms. Calculate: (a) speed before impact, (b) speed after, (c) Δp, (d) average force.", cmd: "Calculate" },
              { num: "8.", text: "A water sprinkler ejects 0.80 kg of water per second in all directions with speed 12 m s⁻¹. Suggest why there is no net force on the sprinkler. What would happen if one nozzle was blocked?", cmd: "Suggest" }
            ]
          },
          {
            type: "linking",
            questions: [
              "How does F = Δp/Δt connect to the workings of a nuclear power station? (E.4)",
              "How can Newton's second law be applied to circular motion? (A.2 circular motion)"
            ]
          },
          {
            type: "tok",
            content: "Newton's laws are called \"universal\" yet they fail at very high speeds and very small scales. Is a scientific law that works within defined limits still \"true\"? How do we decide when to replace a model vs refine it?"
          }
        ]
      },
      {
        id: "L2",
        title: "Impulse and Force-Time Graphs",
        ao: "AO2 AO3",
        hours: "2.5",
        guiding: "How can impulse help us understand forces that act for short times?",
        infographics: ["dp-a2-lesson2.png"],
        sections: [
          {
            type: "text",
            content: "<p style=\"text-align:center;color:var(--text3);padding:40px;\">Lesson 2 content loading in next update — same depth as Lesson 1.</p>"
          }
        ]
      },
      {
        id: "L3",
        title: "Conservation of Momentum",
        ao: "AO1 AO2 AO3",
        hours: "2.5",
        guiding: "How does Newton's third law lead to one of the most fundamental laws in physics?",
        infographics: ["dp-a2-lesson3.png"],
        sections: [
          {
            type: "text",
            content: "<p style=\"text-align:center;color:var(--text3);padding:40px;\">Lesson 3 content loading in next update.</p>"
          }
        ]
      },
      {
        id: "L4",
        title: "Collisions and Explosions",
        ao: "AO1 AO2 AO3",
        hours: "2.5",
        guiding: "How can energy considerations help us classify interactions?",
        infographics: ["dp-a2-lesson4.png"],
        sections: [
          {
            type: "text",
            content: "<p style=\"text-align:center;color:var(--text3);padding:40px;\">Lesson 4 content loading in next update.</p>"
          }
        ]
      }
    ]
  }
};
