const DP_STUDENT_DATA = {
  "A2": {
    "title": "Forces & Momentum",
    "code": "A.2",
    "theme": "A",
    "level": "SL + HL",
    "subtopicCount": 17,
    "subtopics": [
      {
        "id": "a2_sub1",
        "num": 1,
        "title": "Newton's Three Laws of Motion",
        "group": "Newton's Laws",
        "scope": "sl",
        "level": "SL + HL",
        "prevTitle": "A.1 Kinematics Review",
        "nextTitle": "Forces and Friction",

        "bigIdea": "A body at rest stays at rest. A body in motion stays in motion. Unless a force acts on it.",

        "foundation": {
          "title": "Forces in everyday language",
          "content": "<p>Imagine you're sitting on a skateboard...</p>",
          "summary": "<p><strong>1st:</strong> No force &rarr; no change in motion</p>",
          "checkQuestions": [
            {
              "question": "A ball rolls across a smooth floor. What happens to its speed?",
              "answer": "It stays the same. No force = no change (1st Law)."
            }
          ]
        },

        "core": {
          "title": "Newton's Three Laws — Formal Statements",
          "content": "<p><strong>Newton's 1st Law:</strong> A body remains at rest...</p>",
          "keyPoints": [
            "Translational equilibrium: resultant force = 0 &rarr; no acceleration",
            "F = ma valid when mass is constant"
          ],
          "examTrap": {
            "wrong": "Weight and normal force are a 3rd law pair",
            "correct": "They act on the SAME body. 3rd-law partners act on DIFFERENT bodies."
          },
          "ahlContent": "<p>Additional HL content for Newton's laws: rate of change of momentum and changing mass systems.</p>",
          "ahlKeyPoints": [
            "Newton's second law is more fundamentally F = dp/dt",
            "Relativistic effects must be considered near light speed (Topic A.5)"
          ],
          "ahlExamTrap": {
            "wrong": "Using F = ma for rockets and changing mass systems",
            "correct": "Always use F = dp/dt when mass is changing"
          }
        },

        "extension": {
          "title": "Beyond the syllabus — for the curious",
          "content": "<p>Why F = &Delta;p/&Delta;t is more fundamental...</p>",
          "connections": [
            "A.4: &tau; = I&alpha; is the rotational version of F = ma",
            "A.5: F = dp/dt works relativistically"
          ]
        },

        "simulation": {
          "title": "PhET: Forces and Motion — Basics",
          "source": "University of Colorado Boulder",
          "url": "https://phet.colorado.edu/en/simulations/forces-and-motion-basics",
          "instructions": [
            "Go to 'Net Force' tab. Equal forces &rarr; no movement (1st Law).",
            "Switch to 'Motion'. Double the force &rarr; double the acceleration (2nd Law).",
            "Same force on heavy vs light crate — which accelerates more? (F = ma)"
          ]
        },

        "video": {
          "title": "Newton's Laws — Chris Doner IB Physics",
          "duration": "8 min",
          "description": "All three laws with IB worked examples",
          "embedId": "youtube_video_id_here"
        },

        "equations": [
          {
            "formula": "F = ma",
            "description": "Force (N) = mass (kg) &times; acceleration (m/s&sup2;). Constant mass only."
          },
          {
            "formula": "F = &Delta;p / &Delta;t",
            "description": "Force = rate of change of momentum. General form."
          }
        ],

        "ahlEquations": [
          {
            "formula": "F = v * (dm/dt)",
            "description": "Thrust equation for constant velocity, variable mass ejection."
          }
        ],

        "workedExamples": [
          {
            "level": "foundation",
            "scope": "sl",
            "title": "5 kg box pushed with 20 N. Find acceleration.",
            "steps": [
              { "label": "Step 1", "text": "Knowns: m = 5 kg, F = 20 N" },
              { "label": "Step 2", "text": "F = ma &rarr; a = F/m" },
              { "label": "Calculation", "text": "a = 20/5 = 4 m/s&sup2;", "isEquation": true },
              { "label": "Answer", "text": "4 m/s&sup2; in the direction of the force." }
            ]
          },
          {
            "level": "core",
            "scope": "sl",
            "title": "1200 kg car, 10 to 25 m/s in 6 s. Find resultant force.",
            "steps": [
              { "label": "Step 1", "text": "a = (25 &minus; 10)/6 = 2.5 m/s&sup2;" },
              { "label": "Calculation", "text": "F = 1200 &times; 2.5 = 3000 N", "isEquation": true }
            ]
          },
          {
            "level": "extension",
            "scope": "hl",
            "title": "Rocket expels 10 kg gas at 200 m/s in 0.5 s. Find thrust using F = &Delta;p/&Delta;t.",
            "steps": [
              { "label": "Step 1", "text": "&Delta;p = 10 &times; 200 = 2000 kg&middot;m/s" },
              { "label": "Calculation", "text": "F = 2000/0.5 = 4000 N", "isEquation": true },
              { "label": "Why not F=ma?", "text": "Mass is changing. F = &Delta;p/&Delta;t handles this." }
            ]
          }
        ],

        "practiceProblems": [
          {
            "difficulty": "easy",
            "scope": "sl",
            "question": "A 3 kg object, 12 N force. Find acceleration.",
            "solution": "a = F/m = 12/3 = 4 m/s&sup2;"
          },
          {
            "difficulty": "medium",
            "scope": "sl",
            "question": "1500 kg car brakes from 20 m/s to rest in 4 s. Find braking force.",
            "solution": "a = &minus;5 m/s&sup2;. F = 1500 &times; (&minus;5) = &minus;7500 N."
          },
          {
            "difficulty": "hard",
            "scope": "sl",
            "question": "Two skaters push off. A (60 kg) moves at 3 m/s. Find B's (90 kg) velocity.",
            "solution": "Conservation of momentum: v_B = 2 m/s opposite direction."
          },
          {
            "difficulty": "hard",
            "scope": "hl",
            "question": "An AHL exam question about changing mass and momentum conservation...",
            "solution": "Momentum calculation with integration or rate terms."
          }
        ],

        "commonMistakes": [
          {
            "wrong": "Weight and normal force are a 3rd law pair",
            "explanation": "They act on the SAME body.",
            "correct": "The 3rd-law partner of weight is YOU pulling Earth up."
          }
        ],

        "examCorner": {
          "scope": "sl",
          "question": "A box of 8.0 kg on a rough surface...",
          "marks": 7,
          "modelAnswer": "(a) F_f = 14 N [2] (b) Decelerates to rest [3] (c) Box pushes surface down; surface pushes box up [2]",
          "examinerTip": "For 3rd-law pairs: name BOTH bodies, state equal magnitude, opposite direction, different bodies."
        },

        "ahlExamCorner": {
          "scope": "hl",
          "question": "HL-specific exam question on rockets and propulsion dynamics...",
          "marks": 6,
          "modelAnswer": "HL model answer details...",
          "examinerTip": "AHL examiner tip on variable mass systems."
        }
      },
      {
        "id": "a2_sub2",
        "num": 2,
        "title": "Forces and Friction",
        "group": "Friction & Forces",
        "scope": "sl",
        "level": "SL + HL",
        "prevTitle": "Newton's Three Laws of Motion",
        "nextTitle": "AHL Topic: Torque and Rotation",

        "bigIdea": "Frictional forces oppose relative motion between surfaces. Static friction adapts up to a limit; dynamic friction remains constant.",

        "foundation": {
          "title": "What is friction?",
          "content": "<p>Friction is a contact force that acts parallel to the surfaces. It always opposes the relative motion of surfaces in contact.</p>",
          "summary": "<p>Static friction holds it. Dynamic friction slows it.</p>",
          "checkQuestions": [
            {
              "question": "Why is it easier to slide a box after it starts moving?",
              "answer": "Because dynamic friction coefficient &mu;_d is generally smaller than static coefficient &mu;_s."
            }
          ]
        },

        "core": {
          "title": "Friction Coefficients & Equations",
          "content": "<p>Static friction: <strong>F_f &le; &mu;_s * F_N</strong><br>Dynamic friction: <strong>F_f = &mu;_d * F_N</strong></p>",
          "keyPoints": [
            "Friction coefficient &mu; is dimensionless and depends on the materials in contact",
            "Normal force F_N is perpendicular to the contact surface"
          ],
          "examTrap": {
            "wrong": "Assuming static friction is always equal to &mu;_s * F_N",
            "correct": "Static friction is a variable force that matches the applied pushing force up to the maximum limit &mu;_s * F_N."
          }
        },

        "extension": {
          "title": "Microscopic model of friction",
          "content": "<p>At the microscopic level, even highly polished surfaces are rough, showing peaks and valleys. Friction arises from electromagnetic bonding at these junctions.</p>",
          "connections": [
            "B.5: Electromagnetic origin of contact forces"
          ]
        },

        "simulation": {
          "title": "PhET: Friction",
          "source": "University of Colorado Boulder",
          "url": "https://phet.colorado.edu/en/simulations/friction",
          "instructions": [
            "Observe the magnifying circle. Rub the chemistry book against the physics book and see how temperature increases due to work done against friction."
          ]
        },

        "video": {
          "title": "IB Physics: Coefficients of Friction",
          "duration": "7 min",
          "description": "How static and dynamic friction work in inclined planes",
          "embedId": "youtube_id_friction"
        },

        "equations": [
          {
            "formula": "F_f &le; &mu;_s R",
            "description": "Static friction limit. R is normal contact force."
          },
          {
            "formula": "F_f = &mu;_d R",
            "description": "Dynamic friction. Constant once sliding begins."
          }
        ],

        "workedExamples": [
          {
            "level": "foundation",
            "scope": "sl",
            "title": "10 kg block, static friction coefficient &mu;_s = 0.5. Find max static friction.",
            "steps": [
              { "label": "Step 1", "text": "R = mg = 10 * 9.81 = 98.1 N" },
              { "label": "Calculation", "text": "F_f = &mu;_s * R = 0.5 * 98.1 = 49.05 N", "isEquation": true },
              { "label": "Answer", "text": "Maximum force before sliding = 49 N." }
            ]
          }
        ],

        "practiceProblems": [
          {
            "difficulty": "medium",
            "scope": "sl",
            "question": "A 5.0 kg box is pushed horizontally with 15 N on a surface with &mu;_s = 0.4. Does it move?",
            "solution": "Max static friction = 0.4 * 5 * 9.81 = 19.6 N. Pushing force (15 N) is less than max friction, so it does not move."
          }
        ],

        "commonMistakes": [
          {
            "wrong": "Writing friction as F_f = &mu;_s * R in all static situations",
            "explanation": "&mu;_s * R is only the *maximum* static friction. If pushed with 5 N and it doesn't move, friction is 5 N, not maximum."
          }
        ],

        "examCorner": {
          "scope": "sl",
          "question": "A block sits on a ramp. The ramp is tilted. Determine the angle when it slides.",
          "marks": 5,
          "modelAnswer": "At slide threshold: mg sin &theta; = F_f = &mu;_s mg cos &theta; &rarr; tan &theta; = &mu;_s.",
          "examinerTip": "Always resolve gravity components parallel and perpendicular to the ramp."
        }
      },
      {
        "id": "a2_sub3",
        "num": 3,
        "title": "Torque and Rotational Motion",
        "group": "Rotational Motion",
        "scope": "hl",
        "level": "HL Only",
        "prevTitle": "Forces and Friction",
        "nextTitle": "A.3 Work & Energy",

        "bigIdea": "Torque is the rotational analog of force. Angular momentum is conserved in the absence of external torques.",

        "foundation": {
          "title": "What is turning force?",
          "content": "<p>Try opening a door by pushing close to the hinge versus far from the hinge. Pushing far is much easier because it generates more torque.</p>",
          "summary": "<p>Torque = Force * leverage distance</p>",
          "checkQuestions": [
            {
              "question": "Where should you apply force on a wrench to loosen a tight nut?",
              "answer": "At the very end of the wrench, perpendicular to it, to maximize torque."
            }
          ]
        },

        "core": {
          "title": "Torque & Angular Momentum Equations",
          "content": "<p>Torque: <strong>&tau; = F * r * sin &theta;</strong><br>Angular Momentum: <strong>L = I * &omega;</strong></p>",
          "keyPoints": [
            "Torque is a vector perpendicular to both leverage arm and force direction",
            "Moment of inertia I depends on mass distribution relative to rotational axis"
          ],
          "examTrap": {
            "wrong": "Assuming torque is just force times distance",
            "correct": "You must only multiply force by the perpendicular distance from pivot to line of action."
          }
        },

        "extension": {
          "title": "Conservation of Angular Momentum in Stars",
          "content": "<p>When a collapsing star collapses into a neutron star, its moment of inertia drops massively, causing it to spin incredibly fast to conserve angular momentum.</p>",
          "connections": [
            "E.5: Fusion and Stars"
          ]
        },

        "simulation": {
          "title": "PhET: Torque",
          "source": "University of Colorado Boulder",
          "url": "https://phet.colorado.edu/en/simulations/balancing-act",
          "instructions": [
            "Open 'Balancing Act'. Position blocks to balance the beam, verifying torque equilibrium (sum of anti-clockwise torques = sum of clockwise torques)."
          ]
        },

        "video": {
          "title": "Angular Momentum Conservation",
          "duration": "5 min",
          "description": "Spinning ice skater explanation",
          "embedId": "video_rotational"
        },

        "equations": [
          {
            "formula": "\\tau = F r \\sin \\theta",
            "description": "Torque (N m) where r is position vector and &theta; is angle."
          }
        ],

        "ahlEquations": [
          {
            "formula": "L = I \\omega",
            "description": "Angular momentum (kg m&sup2; s&minus;&sup1;) for rigid body."
          }
        ],

        "workedExamples": [
          {
            "level": "core",
            "scope": "hl",
            "title": "A 20 N force acts at 0.5 m from pivot at 30 degrees. Find torque.",
            "steps": [
              { "label": "Step 1", "text": "&tau; = F * r * sin &theta;" },
              { "label": "Calculation", "text": "&tau; = 20 * 0.5 * sin 30 = 5 N m", "isEquation": true }
            ]
          }
        ],

        "practiceProblems": [
          {
            "difficulty": "hard",
            "scope": "hl",
            "question": "A diver pulls arms in, halving moment of inertia. Find new angular velocity.",
            "solution": "L = I_1 &omega;_1 = I_2 &omega;_2. Since I_2 = I_1 / 2, &omega;_2 = 2 * &omega;_1 (doubles)."
          }
        ],

        "commonMistakes": [
          {
            "wrong": "Using parallel force components for torque calculations",
            "explanation": "Only perpendicular force components cause rotation."
          }
        ],

        "examCorner": {
          "scope": "hl",
          "question": "Calculate torque equilibrium on a seesaw with masses A and B.",
          "marks": 6,
          "modelAnswer": "Equate clockwise torque (m_B * g * x_B) to anti-clockwise torque (m_A * g * x_A) and solve for unknown.",
          "examinerTip": "Always choose a convenient pivot point to eliminate unknown pivot reaction forces."
        }
      }
    ]
  }
};
