const DP_STUDENT_DATA = {
  "A1": {
  "title": "Kinematics",
  "code": "A.1",
  "theme": "A",
  "level": "SL + HL",
  "subtopicCount": 10,
  "subtopics": [
    {
      "id": "a1_sub1",
      "num": 1,
      "title": "Position, Displacement & Distance",
      "group": "Describing Motion",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": null,
      "nextTitle": "Velocity & Speed",

      "bigIdea": "Distance tells you how far you walked. Displacement tells you how far you are from where you started. They sound the same — but in physics, one is a scalar and the other is a vector, and the difference matters in every calculation that follows.",

      "foundation": {
        "title": "The difference between distance and displacement",
        "content": "<p>Imagine walking from your classroom to the cafeteria via the long corridor — you walk 200 metres. But the cafeteria is only 50 metres from your classroom in a straight line. You walked 200 m (distance) but you're only 50 m from where you started (displacement).</p><p><strong>Distance</strong> is the total length of the path you took. It's always positive, doesn't care about direction, and can never decrease — it only adds up.</p><p><strong>Displacement</strong> is the straight-line distance from start to finish, WITH a direction. It can be positive, negative, or zero (if you end up back where you started).</p><p>A runner completing one lap of a 400 m track: distance = 400 m, displacement = 0.</p>",
        "summary": "<p><strong>Distance:</strong> Total path length. Scalar. Always positive.</p><p><strong>Displacement:</strong> Straight line from start to finish. Vector. Can be +, −, or 0.</p><p><strong>Position:</strong> Where you are relative to a chosen origin point.</p>",
        "checkQuestions": [
          {
            "question": "You walk 5 km north then 5 km south. What is your distance? What is your displacement?",
            "answer": "Distance = 10 km (total path). Displacement = 0 (you're back where you started)."
          },
          {
            "question": "A car drives around a circular track and returns to the start. Is the displacement zero?",
            "answer": "Yes — displacement is zero because start and end positions are the same. But distance equals the circumference of the track."
          }
        ]
      },

      "core": {
        "title": "Position, displacement and distance — formal definitions",
        "content": "<p><strong>Position</strong> is a coordinate relative to a chosen origin. In 1D: x = +3 m means 3 metres to the right of the origin. x = −2 m means 2 metres to the left.</p><p><strong>Displacement (Δx)</strong> = change in position = final position − initial position = x₂ − x₁. It's a vector: magnitude AND direction. SI unit: metre (m).</p><p><strong>Distance</strong> = total path length travelled. It's a scalar: magnitude only, always ≥ 0. SI unit: metre (m).</p><p>In 2D: displacement is found using Pythagoras. Walk 3 m east then 4 m north → displacement = √(3² + 4²) = 5 m at 53° north of east. Distance = 3 + 4 = 7 m.</p>",
        "keyPoints": [
          "Displacement = final position − initial position (a vector with direction)",
          "Distance = total path length (a scalar, always ≥ 0)",
          "A complete circuit (return to start) has displacement = 0 but distance > 0",
          "In 2D: displacement uses Pythagoras; distance just adds path segments"
        ],
        "examTrap": {
          "wrong": "Distance and displacement are the same thing for straight-line motion",
          "correct": "They're equal in MAGNITUDE for straight-line motion in one direction, but they're still different quantities: displacement has direction, distance doesn't. And for any path with a direction change, they differ in magnitude too."
        }
      },

      "extension": {
        "title": "Why physicists care about displacement, not distance",
        "content": "<p>In every equation of motion (SUVAT), the variable <em>s</em> is displacement, not distance. When you throw a ball up and catch it at the same height: s = 0 (displacement is zero, it returned to the start), even though the ball travelled a non-zero distance.</p><p>This matters because Newton's laws deal with forces and acceleration — both vectors. The equations of motion must use vectors (displacement, velocity) to stay consistent. Using scalar distance would break the sign conventions that make the equations work.</p><p><strong>Connection to A.2:</strong> Momentum (p = mv) is a vector because velocity is a vector. If you used speed instead, momentum conservation would give wrong answers in 2D collisions.</p>",
        "connections": [
          "A.2 Forces & Momentum: momentum is a vector precisely because displacement and velocity are vectors",
          "A.3 Work, Energy & Power: work W = Fs cosθ uses displacement, not distance — carrying a bag horizontally does zero work"
        ]
      },

      "simulation": {
        "title": "PhET: The Moving Man",
        "source": "University of Colorado Boulder",
        "url": "https://phet.colorado.edu/en/simulations/the-moving-man",
        "instructions": [
          "Drag the man back and forth. Watch how position changes on the graph. Moving right = positive position; moving left = negative.",
          "Walk the man from x = −4 to x = +4 then back to x = 0. Total distance = 12. Final displacement = +4 then −4 = 0 from start.",
          "Try to make the man's position-time graph a straight line (constant velocity), then a curve (acceleration)."
        ]
      },

      "video": {
        "title": "Distance vs Displacement — IB Physics",
        "duration": "5 min",
        "description": "Clear visual explanation of the difference with worked examples",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "Δx = x₂ − x₁",
          "description": "Displacement = final position − initial position. A vector (has direction)."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "A student walks 6 m east then 8 m north. Find distance and displacement.",
          "steps": [
            { "label": "Distance", "text": "Total path = 6 + 8 = 14 m" },
            { "label": "Displacement", "text": "Straight line from start to finish: use Pythagoras" },
            { "label": "Calculation", "text": "Δx = √(6² + 8²) = √(36 + 64) = √100 = 10 m", "isEquation": true },
            { "label": "Direction", "text": "θ = tan⁻¹(8/6) = 53° north of east" },
            { "label": "Answer", "text": "Distance = 14 m. Displacement = 10 m at 53° north of east." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "A ball is thrown up from ground level, reaches 5 m, and returns. Find distance and displacement.",
          "steps": [
            { "label": "Path", "text": "Ball goes UP 5 m then DOWN 5 m" },
            { "label": "Distance", "text": "Total path = 5 + 5 = 10 m" },
            { "label": "Displacement", "text": "Δx = final − initial = 0 − 0 = 0 m", "isEquation": true },
            { "label": "Key point", "text": "The ball returned to its starting position. Displacement is zero even though it clearly moved. This is why SUVAT uses s (displacement), not total distance." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "A car drives 3 km north, 4 km east, then 3 km south. Find displacement.",
          "steps": [
            { "label": "North-South", "text": "3 km north + 3 km south cancel → net N-S displacement = 0" },
            { "label": "East-West", "text": "4 km east → net E-W displacement = 4 km east" },
            { "label": "Answer", "text": "Displacement = 4 km east. Distance = 3 + 4 + 3 = 10 km.", "isEquation": true }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A runner completes 3 laps of a 400 m track. What is the total distance? What is the displacement?",
          "solution": "Distance = 3 × 400 = 1200 m. Displacement = 0 (returned to starting point after each complete lap)."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "An ant walks 30 cm east then 40 cm north. Find the displacement (magnitude and direction).",
          "solution": "Displacement = √(30² + 40²) = √2500 = 50 cm. Direction: θ = tan⁻¹(40/30) = 53° north of east."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A lift goes up 12 floors (3.5 m each), then down 5 floors. Find distance and displacement.",
          "solution": "Up: 12 × 3.5 = 42 m. Down: 5 × 3.5 = 17.5 m. Distance = 42 + 17.5 = 59.5 m. Displacement = 42 − 17.5 = 24.5 m upward (net 7 floors up)."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A boat sails 5 km north, 12 km east. Find the displacement and the bearing.",
          "solution": "Displacement = √(5² + 12²) = √169 = 13 km. Bearing: θ = tan⁻¹(12/5) = 67.4° from north → bearing = 067°."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A particle moves from position x = +3 m to x = −5 m, then to x = +2 m. Find total distance and displacement.",
          "solution": "Segment 1: +3 to −5 = 8 m. Segment 2: −5 to +2 = 7 m. Distance = 8 + 7 = 15 m. Displacement = final − initial = +2 − (+3) = −1 m (1 m in the negative direction)."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "Distance and displacement are the same for motion in a straight line",
          "explanation": "Only if the motion is in ONE direction without reversing. If the object reverses direction (ball thrown up and caught), distance > displacement.",
          "correct": "They're equal in magnitude only for straight-line, single-direction motion. For any reversal, they differ."
        },
        {
          "wrong": "Displacement is always positive",
          "explanation": "Displacement is a vector — it can be positive (forward/right/up) or negative (backward/left/down) depending on the chosen sign convention.",
          "correct": "Displacement can be +, −, or 0. Its sign indicates direction relative to the chosen positive direction."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "A cyclist rides 8.0 km due north and then 6.0 km due east.\n(a) Calculate the total distance travelled. [1]\n(b) Determine the magnitude of the displacement. [2]\n(c) Determine the direction of the displacement as a bearing. [1]\n(d) The cyclist then rides directly back to the starting point. State the new displacement. [1]",
        "marks": 5,
        "modelAnswer": "(a) Distance = 8.0 + 6.0 = 14.0 km [1]\n(b) Displacement = √(8.0² + 6.0²) = √(64 + 36) = √100 = 10.0 km [2]\n(c) θ = tan⁻¹(6.0/8.0) = 36.9° east of north → bearing = 037° [1]\n(d) Displacement = 0 (returned to start) [1]",
        "examinerTip": "For bearing questions: bearings are measured clockwise from north, written as 3 digits (e.g., 037° not 37°). The angle from Pythagoras gives the angle from north — add to get the bearing."
      }
    },
    {
      "id": "a1_sub2",
      "num": 2,
      "title": "Velocity & Speed — Instantaneous vs Average",
      "group": "Describing Motion",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "Position, Displacement & Distance",
      "nextTitle": "Acceleration — Uniform & Non-Uniform",

      "bigIdea": "Velocity tells you how fast AND in which direction. Speed tells you how fast but not where you're going. The average hides the story — a car that averages 50 km/h might have been stationary for half the trip and doing 100 km/h for the other half.",

      "foundation": {
        "title": "Speed vs velocity in everyday language",
        "content": "<p>Your car's speedometer shows 60 km/h. That's <strong>speed</strong> — how fast you're going. It doesn't tell you the direction.</p><p>If you say 'I'm doing 60 km/h north,' that's <strong>velocity</strong> — speed PLUS direction. Velocity is a vector.</p><p><strong>Average vs instantaneous:</strong> You drive 100 km in 2 hours. Your average speed is 50 km/h. But at any moment, you might have been going 30, 60, or 80 km/h. The average hides the variation. The speedometer shows your <em>instantaneous</em> speed — how fast you are right NOW.</p>",
        "summary": "<p><strong>Speed:</strong> How fast. Scalar. Always ≥ 0.</p><p><strong>Velocity:</strong> How fast + which direction. Vector. Can be +, −, or 0.</p><p><strong>Average:</strong> Total distance (or displacement) ÷ total time.</p><p><strong>Instantaneous:</strong> Speed/velocity at a single moment.</p>",
        "checkQuestions": [
          {
            "question": "A car drives 100 km north in 2 hours. What is its average speed? What is its average velocity?",
            "answer": "Average speed = 100/2 = 50 km/h. Average velocity = 100/2 = 50 km/h NORTH (same magnitude but includes direction)."
          },
          {
            "question": "A runner completes a 400 m lap in 50 s. What is the average speed? Average velocity?",
            "answer": "Average speed = 400/50 = 8 m/s. Average velocity = 0/50 = 0 m/s (displacement is zero — back to start!)."
          }
        ]
      },

      "core": {
        "title": "Velocity, speed, and the difference between average and instantaneous",
        "content": "<p><strong>Velocity</strong> = rate of change of displacement: v = Δx/Δt. A vector (unit: m/s).</p><p><strong>Speed</strong> = rate of change of distance, OR |velocity|. A scalar (unit: m/s).</p><p><strong>Average velocity</strong> = total displacement / total time. <strong>Average speed</strong> = total distance / total time. These can be DIFFERENT: the lap runner has avg speed 8 m/s but avg velocity 0 m/s.</p><p><strong>Instantaneous velocity</strong> = velocity at a single instant = the gradient of the displacement-time (x-t) graph at that point. As the time interval shrinks toward zero, average velocity → instantaneous velocity. This is the concept of a derivative.</p><p><strong>Instantaneous speed</strong> = |instantaneous velocity| = magnitude of the gradient of the x-t graph.</p>",
        "keyPoints": [
          "v = Δx/Δt (velocity = displacement / time)",
          "Average speed ≠ average velocity when direction changes (e.g., round trips)",
          "Instantaneous velocity = gradient of the x-t graph at a point",
          "On an x-t graph: straight line = constant velocity; curve = changing velocity (acceleration)"
        ],
        "examTrap": {
          "wrong": "Average speed = (initial speed + final speed) / 2",
          "correct": "This formula ONLY works for uniform (constant) acceleration. For non-uniform motion, average speed = total distance / total time. The formula (u+v)/2 is a SUVAT shortcut, not a general definition."
        }
      },

      "extension": {
        "title": "From average to instantaneous — the birth of calculus",
        "content": "<p>Average velocity = Δx/Δt. As Δt → 0, this becomes dx/dt — the derivative of position with respect to time. Newton and Leibniz invented calculus specifically to handle this limit.</p><p>At the IB level, you approximate instantaneous velocity by drawing a tangent to the x-t curve and measuring its gradient. In university physics, you'll calculate it directly: if x = 3t² + 2t, then v = dx/dt = 6t + 2.</p><p><strong>Relativistic note (A.5):</strong> At speeds approaching c, velocity addition changes: u' = (u + v)/(1 + uv/c²). The simple v = Δx/Δt still holds in each reference frame, but different frames disagree on Δx and Δt.</p>",
        "connections": [
          "A.1 Subtopic 6 (Motion Graphs): gradient of x-t = velocity; gradient of v-t = acceleration",
          "A.5 Special Relativity: velocity transforms differently at relativistic speeds"
        ]
      },

      "simulation": {
        "title": "PhET: The Moving Man",
        "source": "University of Colorado Boulder",
        "url": "https://phet.colorado.edu/en/simulations/the-moving-man",
        "instructions": [
          "Set a constant velocity (e.g., 2 m/s). Watch the x-t graph — it's a straight line. The gradient = velocity.",
          "Now set the velocity to change (add acceleration). The x-t graph becomes a curve. The gradient changes at every point.",
          "Pause at any moment and draw a tangent to the curve — the gradient of that tangent is the instantaneous velocity."
        ]
      },

      "video": {
        "title": "Speed vs Velocity — IB Physics",
        "duration": "6 min",
        "description": "Distinguishing scalar speed from vector velocity with IB exam examples",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "v = Δx / Δt",
          "description": "Average velocity = displacement / time. A vector (m/s)."
        },
        {
          "formula": "speed = distance / time",
          "description": "Average speed = total path length / total time. A scalar (m/s)."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "A cyclist rides 6 km north in 15 min, rests 5 min, then rides 4 km south in 10 min. Find average speed and average velocity.",
          "steps": [
            { "label": "Total distance", "text": "6 + 4 = 10 km" },
            { "label": "Total displacement", "text": "6 north − 4 south = 2 km north" },
            { "label": "Total time", "text": "15 + 5 + 10 = 30 min = 0.5 h" },
            { "label": "Average speed", "text": "10 / 0.5 = 20 km/h", "isEquation": true },
            { "label": "Average velocity", "text": "2 / 0.5 = 4 km/h north", "isEquation": true },
            { "label": "Key point", "text": "Average speed (20 km/h) is 5× the average velocity (4 km/h) because the cyclist doubled back." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "Usain Bolt ran 100 m in 9.58 s. His top speed was 12.3 m/s. Find his average speed and explain the difference.",
          "steps": [
            { "label": "Average speed", "text": "100 / 9.58 = 10.44 m/s", "isEquation": true },
            { "label": "Why different?", "text": "He started from rest (0 m/s) and accelerated. His instantaneous speed varied throughout the race — slow at the start, fastest around 60-70 m, slightly slower at the finish." },
            { "label": "Key insight", "text": "Average speed (10.44) < maximum speed (12.3) because the average includes the slow start. The average is the 'smoothed out' version." }
          ]
        },
        {
          "level": "extension",
          "scope": "sl",
          "title": "From an x-t graph, the position at t = 2 s is 5 m and at t = 2.01 s is 5.04 m. Estimate the instantaneous velocity at t = 2 s.",
          "steps": [
            { "label": "Method", "text": "Use a very small Δt to approximate the tangent gradient" },
            { "label": "Calculation", "text": "v ≈ Δx/Δt = (5.04 − 5)/(2.01 − 2) = 0.04/0.01 = 4 m/s", "isEquation": true },
            { "label": "Precision", "text": "The smaller Δt, the closer to the true instantaneous value. At Δt → 0, this becomes the derivative dx/dt." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A car travels 150 km in 2.5 hours. What is the average speed?",
          "solution": "Average speed = 150 / 2.5 = 60 km/h."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A ball rolls 8 m to the right in 4 s, then 3 m to the left in 2 s. Find average speed and average velocity.",
          "solution": "Distance = 8 + 3 = 11 m. Displacement = 8 − 3 = 5 m right. Time = 6 s. Avg speed = 11/6 = 1.83 m/s. Avg velocity = 5/6 = 0.83 m/s to the right."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A train travels at 80 km/h for 2 hours, then 60 km/h for 3 hours. Find the average speed for the whole journey.",
          "solution": "Total distance = (80 × 2) + (60 × 3) = 160 + 180 = 340 km. Total time = 5 h. Average speed = 340/5 = 68 km/h. (NOT (80+60)/2 = 70 — that only works for equal time intervals.)"
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "From an x-t graph, the gradient at t = 3 s is measured as −2.5 m/s. What does the negative sign mean?",
          "solution": "The instantaneous velocity is −2.5 m/s. The negative sign means the object is moving in the negative direction (e.g., to the left or downward, depending on the convention). The instantaneous speed is 2.5 m/s (magnitude only)."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "An object moves along the x-axis. Its position is given by: x = 0 at t = 0, x = 8 m at t = 2 s, x = 8 m at t = 5 s, x = 2 m at t = 8 s. Calculate: (a) average velocity for the whole journey, (b) average speed, (c) the average velocity between t = 2 and t = 5 s.",
          "solution": "(a) Avg velocity = (2 − 0)/(8 − 0) = 0.25 m/s in +x direction. (b) Distance = 8 + 0 + 6 = 14 m. Avg speed = 14/8 = 1.75 m/s. (c) Displacement = 8 − 8 = 0. Avg velocity = 0/3 = 0 m/s (the object was stationary or returned to x = 8)."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "Average speed = (v₁ + v₂) / 2 always works",
          "explanation": "This only works for UNIFORM acceleration. For a trip at 80 km/h for 2 h then 60 km/h for 3 h: (80+60)/2 = 70 km/h is WRONG. Correct: total distance / total time = 340/5 = 68 km/h.",
          "correct": "Always use: average speed = total distance / total time. The shortcut (u+v)/2 only applies with constant acceleration."
        },
        {
          "wrong": "If velocity is zero, the object must be at the origin",
          "explanation": "Zero velocity means the object isn't moving — it could be anywhere. A ball at the top of its throw has v = 0 but is 20 m above the ground.",
          "correct": "v = 0 means the object is momentarily at rest at whatever position it happens to be. Position and velocity are independent properties."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "A car travels along a straight road. It moves 500 m east in 20 s, then turns around and moves 200 m west in 10 s.\n(a) Calculate the average speed for the entire journey. [2]\n(b) Calculate the average velocity for the entire journey. [2]\n(c) Explain why the values in (a) and (b) are different. [1]",
        "marks": 5,
        "modelAnswer": "(a) Total distance = 500 + 200 = 700 m. Total time = 20 + 10 = 30 s. Average speed = 700/30 = 23.3 m/s [2]\n(b) Total displacement = 500 − 200 = 300 m east. Average velocity = 300/30 = 10.0 m/s east [2]\n(c) The car changed direction, so the total distance (scalar, adds all segments) is greater than the magnitude of the displacement (vector, accounts for the reversal). [1]",
        "examinerTip": "Always state the DIRECTION for velocity answers (e.g., '10 m/s east'). Giving just the number loses a mark because velocity is a vector. Speed answers don't need a direction."
      }
    },
    {
      "id": "a1_sub3",
      "num": 3,
      "title": "Acceleration — Uniform & Non-Uniform",
      "group": "Describing Motion",
      "scope": "sl",
      "level": "SL + HL",
      "prevTitle": "Velocity & Speed",
      "nextTitle": "The SUVAT Equations",

      "bigIdea": "Acceleration is how quickly your velocity changes. A car going from 0 to 100 km/h is accelerating. A car going from 100 to 0 is also accelerating — just in the opposite direction. The word 'deceleration' is just acceleration with a negative sign.",

      "foundation": {
        "title": "What acceleration feels like",
        "content": "<p>You're in a car. The light turns green — the driver floors it. You feel pushed back into your seat. That's acceleration: your speed is increasing.</p><p>Now the driver slams the brakes. You lurch forward. That's also acceleration — your speed is decreasing. Physicists call this 'negative acceleration' (in the direction opposite to motion), not 'deceleration.'</p><p>If the car cruises at a steady 60 km/h, there's no acceleration. Even though you're moving fast, your velocity isn't CHANGING — and acceleration is about CHANGE.</p>",
        "summary": "<p><strong>Acceleration:</strong> How quickly velocity changes. Unit: m/s².</p><p><strong>Positive acceleration:</strong> Velocity increasing (in the positive direction).</p><p><strong>Negative acceleration:</strong> Velocity decreasing, or increasing in the negative direction.</p><p><strong>Zero acceleration:</strong> Constant velocity — speed AND direction unchanged.</p>",
        "checkQuestions": [
          {
            "question": "A ball is thrown upward and reaches its highest point. At the top, is its acceleration zero?",
            "answer": "No! Its velocity is zero at the top, but gravity is still pulling it down. Acceleration = g = 9.8 m/s² downward throughout the flight — even at the top."
          },
          {
            "question": "A car drives around a circular track at a constant speed of 20 m/s. Is it accelerating?",
            "answer": "Yes! Its SPEED is constant but its DIRECTION is changing. Since velocity = speed + direction, the velocity is changing → the car IS accelerating (centripetal acceleration, toward the centre)."
          }
        ]
      },

      "core": {
        "title": "Acceleration — rate of change of velocity",
        "content": "<p><strong>Acceleration</strong> = rate of change of velocity: a = Δv/Δt = (v − u)/t. A vector (unit: m/s²).</p><p><strong>Uniform acceleration:</strong> a is constant. v-t graph is a straight line (constant gradient). Example: free fall near Earth's surface (a = g = 9.8 m/s² downward).</p><p><strong>Non-uniform acceleration:</strong> a changes with time. v-t graph is curved (changing gradient). Example: a car with increasing air resistance — acceleration decreases as speed increases.</p><p><strong>Key:</strong> Deceleration is NOT a separate concept. It's acceleration in the opposite direction to velocity. If velocity is +20 m/s and acceleration is −5 m/s², the object slows down. The sign of a alone doesn't tell you if the object speeds up or slows down — you must compare the signs of v and a.</p>",
        "keyPoints": [
          "a = Δv/Δt = (v − u)/t (average acceleration)",
          "Instantaneous acceleration = gradient of the v-t graph at a point",
          "Uniform: a constant → v-t graph is straight → x-t graph is a parabola",
          "Non-uniform: a changes → v-t graph is curved",
          "Object speeds up when v and a have the SAME sign; slows down when they have OPPOSITE signs"
        ],
        "examTrap": {
          "wrong": "If acceleration is negative, the object is slowing down",
          "correct": "Negative acceleration means acceleration in the negative direction. If the object is ALSO moving in the negative direction (v < 0), it's actually speeding up! A car reversing and accelerating backward has negative v AND negative a — it's getting faster. Compare signs of v and a to determine speeding up vs slowing down."
        }
      },

      "extension": {
        "title": "Beyond constant acceleration — real-world motion",
        "content": "<p>SUVAT equations (next subtopic) only work for constant acceleration. In reality, most acceleration is non-uniform: a car engine doesn't produce constant force (engine torque varies with RPM), air resistance increases with speed (reducing net force), and rockets lose mass (changing a = F/m).</p><p>For non-uniform acceleration, you need either: (a) graphical methods (area under a-t graph = Δv, area under v-t graph = Δx), or (b) calculus (a = dv/dt, v = dx/dt → x(t) from integration).</p><p><strong>Connection to A.2:</strong> Newton's 2nd law F = ma tells you WHY acceleration happens. A.1 describes the motion (kinematics); A.2 explains the cause (dynamics).</p>",
        "connections": [
          "A.2 Forces: F = ma explains what CAUSES acceleration",
          "A.4 Rigid Body Mechanics: angular acceleration α = Δω/Δt is the rotational equivalent"
        ]
      },

      "simulation": {
        "title": "PhET: The Moving Man",
        "source": "University of Colorado Boulder",
        "url": "https://phet.colorado.edu/en/simulations/the-moving-man",
        "instructions": [
          "Set acceleration to 1 m/s² with initial velocity 0. Watch all three graphs build: x-t (parabola), v-t (straight line), a-t (horizontal line).",
          "Change to negative acceleration (braking): set v = 10 m/s, a = −2 m/s². Watch the v-t line slope downward and x-t curve flatten.",
          "Set non-uniform acceleration by manually moving the man with changing speed. See how the v-t graph becomes curved and a-t graph varies."
        ]
      },

      "video": {
        "title": "Acceleration — IB Physics",
        "duration": "7 min",
        "description": "Uniform vs non-uniform acceleration with v-t graph interpretation",
        "embedId": ""
      },

      "equations": [
        {
          "formula": "a = Δv / Δt = (v − u) / t",
          "description": "Average acceleration = change in velocity / time. Vector (m/s²)."
        }
      ],

      "workedExamples": [
        {
          "level": "foundation",
          "scope": "sl",
          "title": "A car accelerates from rest to 20 m/s in 5 s. Find the acceleration.",
          "steps": [
            { "label": "Knowns", "text": "u = 0 m/s (from rest), v = 20 m/s, t = 5 s" },
            { "label": "Formula", "text": "a = (v − u)/t" },
            { "label": "Calculation", "text": "a = (20 − 0)/5 = 4 m/s²", "isEquation": true },
            { "label": "Meaning", "text": "The velocity increases by 4 m/s every second." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "A car brakes from 30 m/s to 10 m/s in 4 s. Find the acceleration. Is it positive or negative?",
          "steps": [
            { "label": "Calculation", "text": "a = (10 − 30)/4 = −20/4 = −5 m/s²", "isEquation": true },
            { "label": "Sign", "text": "Negative because the car is slowing down (velocity and acceleration are in opposite directions)." },
            { "label": "Check", "text": "v is positive (forward), a is negative (backward) → opposite signs → the car IS decelerating. If both were negative, the car would be speeding up in reverse." }
          ]
        },
        {
          "level": "core",
          "scope": "sl",
          "title": "From a v-t graph: velocity changes from 15 m/s to −5 m/s in 8 s. Find acceleration and describe the motion.",
          "steps": [
            { "label": "Calculation", "text": "a = (−5 − 15)/8 = −20/8 = −2.5 m/s²", "isEquation": true },
            { "label": "Motion", "text": "The object starts moving at +15 m/s (forward), decelerates, passes through v = 0 (momentarily stops), then moves at −5 m/s (backward). The acceleration is constant at −2.5 m/s² throughout — it never changed, even as the object reversed direction." }
          ]
        }
      ],

      "practiceProblems": [
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A bicycle accelerates from 2 m/s to 8 m/s in 3 s. Find the acceleration.",
          "solution": "a = (8 − 2)/3 = 6/3 = 2 m/s²."
        },
        {
          "difficulty": "easy",
          "scope": "sl",
          "question": "A ball is dropped. After 3 s, what is its velocity? (g = 9.8 m/s²)",
          "solution": "v = u + at = 0 + 9.8 × 3 = 29.4 m/s downward."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A car's velocity changes from +25 m/s to −5 m/s in 10 s. Find the acceleration. At what time does the car momentarily stop?",
          "solution": "a = (−5 − 25)/10 = −3 m/s². The car stops when v = 0: 0 = 25 + (−3)t → t = 25/3 = 8.33 s."
        },
        {
          "difficulty": "medium",
          "scope": "sl",
          "question": "A v-t graph shows a straight line from (0, 0) to (4, 12) then horizontal to (8, 12). Describe the motion and find the acceleration in each phase.",
          "solution": "Phase 1 (0-4 s): uniform acceleration from rest. a = 12/4 = 3 m/s². Phase 2 (4-8 s): constant velocity at 12 m/s. a = 0."
        },
        {
          "difficulty": "hard",
          "scope": "sl",
          "question": "A car accelerates from rest at 3 m/s² for 5 s, then travels at constant velocity for 10 s, then brakes at −2 m/s² to rest. Sketch the v-t and a-t graphs. Calculate the total displacement.",
          "solution": "Phase 1: v increases from 0 to 15 m/s. s₁ = ½ × 3 × 25 = 37.5 m. Phase 2: v = 15 m/s for 10 s. s₂ = 15 × 10 = 150 m. Phase 3: v decreases from 15 to 0. Time = 15/2 = 7.5 s. s₃ = ½ × 15 × 7.5 = 56.25 m. Total = 243.75 m. v-t: triangle rise, flat, triangle fall. a-t: +3 block, 0 block, −2 block."
        }
      ],

      "commonMistakes": [
        {
          "wrong": "At the highest point of a throw, acceleration is zero because velocity is zero",
          "explanation": "Velocity IS zero at the top — but acceleration is NOT. Gravity acts throughout the entire flight at g = 9.8 m/s² downward. At the top, the velocity is changing from upward to downward — that REQUIRES acceleration.",
          "correct": "At the highest point: v = 0 but a = g = 9.8 m/s² downward. Velocity and acceleration are independent — one can be zero while the other is not."
        },
        {
          "wrong": "Negative acceleration always means slowing down",
          "explanation": "It means acceleration in the negative direction. If the object moves in the negative direction too (v < 0), it's actually SPEEDING UP.",
          "correct": "Speeding up: v and a have the same sign. Slowing down: v and a have opposite signs. Check BOTH signs."
        }
      ],

      "examCorner": {
        "scope": "sl",
        "question": "A ball is thrown vertically upward with an initial velocity of 15 m/s. Take upward as positive and g = 9.8 m/s².\n(a) State the acceleration of the ball at its highest point. [1]\n(b) Calculate the time taken to reach the highest point. [2]\n(c) Sketch a v-t graph for the ball from the moment it is thrown to the moment it returns to the thrower. [3]\n(d) From your graph, determine the total distance travelled. [2]",
        "marks": 8,
        "modelAnswer": "(a) a = −9.8 m/s² (downward) [1]. NOT zero — gravity acts throughout.\n(b) At the top: v = 0. v = u + at → 0 = 15 + (−9.8)t → t = 15/9.8 = 1.53 s [2]\n(c) Straight line from +15 m/s at t = 0 to 0 at t = 1.53 s, continuing to −15 m/s at t = 3.06 s. Line has constant gradient = −9.8 m/s². Crosses v = 0 at the midpoint. [3]\n(d) Total distance = area above + area below the axis = ½(1.53)(15) + ½(1.53)(15) = 11.5 + 11.5 = 23.0 m. OR: 2 × maximum height = 2 × u²/(2g) = 2 × 225/19.6 = 23.0 m [2]",
        "examinerTip": "For v-t graphs of vertical throw: the graph is a STRAIGHT line (constant gradient = −g) that passes through zero at the peak. Students often draw a curve — it's not. Constant acceleration → straight v-t line."
      }
    }
  ]
},
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
