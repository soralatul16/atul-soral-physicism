// ============================================================
// DP PHYSICS TEACHER PLANNER - TOPIC CONTENT BANK
// ============================================================
// This file contains the pre-populated content for DP Physics topics.
// The teacher edits only this file to add, modify, or extend topics.
// Modifications are loaded automatically by the planner UI.

const DP_PLANNER_DATA = {
  "A1": {
  "title": "Kinematics",
  "code": "A.1",
  "theme": "A",
  "level": "SL + HL",
  "recommendedHours": 9,
  "recommendedMinutes": 540,
  "guidingQuestions": [
    "How can the motion of a body be described quantitatively and qualitatively?",
    "How can the position of a body in space and time be predicted?",
    "How can the analysis of motion in one and two dimensions be used to solve real-life problems?"
  ],
  "groups": [
    {
      "name": "Describing Motion",
      "color": "accent",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "Position, Displacement & Distance",
          "focus": "The difference between scalar distance and vector displacement",
          "minutes": 40,
          "understandings": [
            "The motion of bodies through space and time can be described and analysed in terms of position, velocity, and acceleration",
            "The change in position is the displacement — a vector quantity (magnitude and direction)",
            "The difference between distance (scalar, total path length) and displacement (vector, straight-line start to finish)",
            "Displacement can be positive or negative depending on direction; distance is always positive"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Ask a student to walk from one corner of the classroom to the opposite corner via the door. Measure the path length with a tape (distance). Then measure the straight-line diagonal (displacement). \"You walked 15 m but your displacement is only 7 m. Why the difference?\"</p><p><strong>Direct instruction (15 min):</strong> Define position as a coordinate relative to an origin. Displacement = final position − initial position = Δx (a vector). Distance = total path length (a scalar). A runner completing one lap of a 400 m track: distance = 400 m, displacement = 0. Emphasise sign convention: choose a positive direction; motion in the opposite direction is negative.</p><p><strong>Practice with maps (10 min):</strong> Give students a grid map. They trace a path (e.g., 3 blocks east, 4 blocks north). Calculate distance (7 blocks) and displacement (5 blocks at 53° N of E using Pythagoras). This introduces vector addition visually.</p><p><strong>Wrap-up (10 min):</strong> Quick quiz: 5 scenarios — students state distance AND displacement for each. Include circular motion (lap of a track) and back-and-forth motion.</p>",
          "engagementHook": {
            "title": "THE CLASSROOM WALK",
            "content": "A student walks the longest possible path from their seat to the teacher's desk (around every table). The class measures the path length (distance) and the straight-line result (displacement). \"You walked 20 metres to move 4 metres. Physics only cares about the 4.\" This visceral demonstration of the difference sticks."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "The displacement model ignores the path and focuses only on start and end points. This is a deliberate simplification — useful when only the net effect matters, misleading when the path matters (e.g., fuel consumption). Choosing the right level of abstraction is a core scientific skill."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define displacement, distance, position",
            "AO2 — Calculate displacement and distance for various paths"
          ],
          "resources": "Tape measure, grid map handout, whiteboard, scenario cards",
          "formative": "\"A car drives 3 km north, then 4 km east. (a) Total distance? (b) Displacement (magnitude and direction)? (c) The car then drives 3 km south and 4 km west. New distance? New displacement?\""
        },
        {
          "num": 2,
          "title": "Velocity & Speed — Instantaneous vs Average",
          "focus": "Rate of change of position, and why the average can hide the detail",
          "minutes": 50,
          "understandings": [
            "Velocity is the rate of change of position: v = Δx/Δt (a vector)",
            "Speed is the magnitude of velocity (a scalar), OR distance/time for average speed",
            "The difference between instantaneous and average values of velocity and speed",
            "Instantaneous velocity = gradient of the displacement-time graph at a point",
            "Average velocity = total displacement / total time; average speed = total distance / total time"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Usain Bolt ran 100 m in 9.58 s. His average speed was 10.4 m/s. But his top speed was 12.3 m/s. How can his maximum be higher than his average?\" Because he started from rest and accelerated. Average hides the variation.</p><p><strong>Direct instruction (15 min):</strong> Define velocity v = Δx/Δt. Vector: direction matters. Speed = |v| or distance/time. Average velocity = total displacement / total time. Average speed = total distance / total time. These can be DIFFERENT: a runner completing a lap has zero average velocity but non-zero average speed. Instantaneous velocity = velocity at a single instant = gradient of the x-t graph.</p><p><strong>Graphical work (15 min):</strong> Give students a displacement-time graph with changing slopes. At each section: calculate average velocity (secant line), estimate instantaneous velocity (tangent line). Show that as Δt → 0, average → instantaneous. This is the concept of a derivative without using calculus.</p><p><strong>Lab (10 min):</strong> TICKER TAPE or MOTION SENSOR — Record the position of a cart at regular intervals. Calculate average velocity for each interval. Plot v-t graph. See how the velocity changes when acceleration is present.</p><p><strong>Practice (5 min):</strong> Problems distinguishing average from instantaneous, speed from velocity.</p>",
          "engagementHook": {
            "title": "USAIN BOLT'S SPEED PROFILE",
            "content": "Show Bolt's 100 m split data: 0-10 m in 1.85 s, 60-70 m in 0.81 s. Calculate his speed in each segment. He's SLOWEST at the start and FASTEST at 60-70 m. His average speed (10.4 m/s) never actually equals his speed at any particular moment. \"The average is a useful lie — it tells you the result but hides the story.\""
          },
          "nos": {
            "tags": ["Measurements", "Patterns"],
            "description": "The transition from average to instantaneous values is foundational: it's the conceptual basis of calculus, developed independently by Newton and Leibniz. Physics drove the invention of new mathematics — a powerful example of how scientific needs shape mathematical tools."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define velocity, speed; distinguish instantaneous from average",
            "AO2 — Calculate average and instantaneous velocity from data and graphs",
            "AO3 — Analyse displacement-time graphs to extract velocity information"
          ],
          "resources": "Usain Bolt split data, displacement-time graph handout, ticker tape or motion sensor + cart, graph paper",
          "formative": "\"A cyclist rides 6 km north in 15 min, rests for 5 min, then rides 4 km south in 10 min. (a) Total distance. (b) Total displacement. (c) Average speed. (d) Average velocity. (e) Why are (c) and (d) different?\""
        },
        {
          "num": 3,
          "title": "Acceleration — Uniform & Non-Uniform",
          "focus": "Rate of change of velocity and recognising when it's constant",
          "minutes": 40,
          "understandings": [
            "Acceleration is the rate of change of velocity: a = Δv/Δt (a vector)",
            "Recognise situations where acceleration is uniform (constant) and non-uniform (changing)",
            "Uniform acceleration: v-t graph is a straight line (constant gradient)",
            "Non-uniform acceleration: v-t graph is curved (changing gradient)",
            "Deceleration is acceleration in the opposite direction to velocity — not a separate concept"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Drop a ball and a feather in the classroom. Ball: nearly uniform acceleration (g). Feather: non-uniform acceleration (drag increases with speed). \"Both accelerate — but one uniformly and the other not. How can we tell from a graph?\"</p><p><strong>Direct instruction (15 min):</strong> Define a = Δv/Δt. Vector — direction matters. Positive acceleration can mean speeding up OR slowing down (depends on direction). Uniform: a is constant → v-t graph is straight. Non-uniform: a changes → v-t graph curves. Example: a car merging onto a highway (non-uniform), then cruise control (a = 0), then braking (uniform negative a). Draw all three on one v-t graph.</p><p><strong>Demo (10 min):</strong> MOTION SENSOR ON A RAMP — Roll a cart down a ramp. Motion sensor captures position in real time. Software plots x-t, v-t, a-t graphs simultaneously. Students observe: x-t is curved (parabola), v-t is straight (constant gradient = a), a-t is horizontal (constant). Change to a non-uniform case: push and release a cart on a flat surface with friction. a-t shows changing acceleration.</p><p><strong>Practice (10 min):</strong> Match 5 scenarios to their v-t graphs. Calculate acceleration from v-t graph gradients.</p>",
          "engagementHook": {
            "title": "THE BALL vs FEATHER RACE (IN A VACUUM TUBE)",
            "content": "If available, show the BBC/NASA video of a feather and hammer dropped in a vacuum — they fall together. \"On the Moon, Apollo 15's David Scott did this for real.\" Without air resistance, ALL objects accelerate uniformly at g. The feather in air has non-uniform acceleration because drag increases with speed. Same physics, different conditions, different motion."
          },
          "nos": {
            "tags": ["Observations", "Models"],
            "description": "Galileo's inclined plane experiments (1638) were the first systematic measurements of uniform acceleration. He used water clocks and rolling balls because free-fall was too fast to measure directly. The idea of slowing down a phenomenon to study it — using a ramp instead of free fall — is a foundational experimental technique."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define acceleration; distinguish uniform from non-uniform",
            "AO2 — Calculate acceleration from velocity-time data",
            "AO3 — Analyse v-t graphs to determine acceleration type"
          ],
          "resources": "Motion sensor + ramp + cart, ball and feather, vacuum tube video (BBC/NASA), v-t graph matching cards",
          "formative": "\"A car accelerates from rest to 20 m/s in 8 s uniformly, then maintains speed for 10 s, then brakes uniformly to rest in 5 s. (a) Calculate acceleration in each phase. (b) Sketch the v-t graph. (c) Sketch the a-t graph. (d) Is the braking acceleration positive or negative? Justify.\""
        }
      ]
    },
    {
      "name": "Equations of Motion & Graphs",
      "color": "accent3",
      "totalMinutes": 210,
      "subtopics": [
        {
          "num": 1,
          "title": "The SUVAT Equations",
          "focus": "The four equations for uniformly accelerated motion",
          "minutes": 60,
          "understandings": [
            "The equations of motion for solving problems with uniformly accelerated motion: s = (u+v)/2 × t, v = u + at, s = ut + ½at², v² = u² + 2as",
            "These equations are only valid when acceleration is constant (uniform)",
            "Each equation uses 4 of the 5 SUVAT variables — choose the equation that contains the 3 knowns and 1 unknown",
            "Sign convention: choose positive direction; variables in the opposite direction are negative"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A ball is thrown straight up at 20 m/s. How high does it go? How long until it returns?\" Students guess. \"By the end of this lesson, you'll solve this in 30 seconds.\"</p><p><strong>Derivation & understanding (20 min):</strong> Derive each equation from the definitions of velocity and acceleration, using the v-t graph. (1) v = u + at from a = (v−u)/t. (2) s = (u+v)/2 × t from average velocity. (3) s = ut + ½at² by substituting (1) into (2). (4) v² = u² + 2as by eliminating t. For each: identify which SUVAT variable is missing. Build a table: \"Missing s? Use v = u + at. Missing t? Use v² = u² + 2as.\" This decision framework is more valuable than memorising equations.</p><p><strong>Worked examples (20 min):</strong> (1) Car accelerates from 10 to 30 m/s over 200 m. Find a (2 m/s²) and t (10 s). (2) Ball thrown up at 20 m/s: find max height (v = 0 at top → h = 20.4 m) and time to return (4.08 s). (3) A train brakes with a = −1.5 m/s² from 30 m/s. How far to stop? (300 m). (4) Two-stage: a car accelerates then decelerates — solve each stage separately.</p><p><strong>Practice (15 min):</strong> Students solve 6 graded problems. Key: identify the 3 knowns and 1 unknown BEFORE choosing an equation.</p>",
          "engagementHook": {
            "title": "THE REACTION TIME TEST",
            "content": "Drop a ruler — the student catches it. Measure the distance fallen. Using s = ½gt² (u = 0), calculate the student's reaction time. Typical: 0.15–0.25 s. Fastest student wins. This is SUVAT applied to a real measurement in under 1 minute — students see the equations working instantly. \"Your reaction time determines your braking distance when driving. At 30 m/s, you travel 6 m before you even touch the brake.\""
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "The SUVAT equations model uniformly accelerated motion — a common but not universal situation. They're exact for free fall near Earth's surface, excellent for car braking, but wrong for a rocket (mass changes) or a feather (drag changes). Knowing the boundaries of a model is as important as knowing the model itself."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the four equations of motion",
            "AO2 — Apply SUVAT equations to solve uniformly accelerated motion problems",
            "AO3 — Analyse which equation to use based on known and unknown variables"
          ],
          "resources": "30 cm rulers (for reaction time test), whiteboard, SUVAT decision table handout, graded problem sets",
          "formative": "\"A stone is dropped from a 45 m cliff. (a) Time to hit the ground. (b) Speed on impact. (c) A second stone is thrown DOWN at 5 m/s from the same cliff. Time to hit? Speed on impact? (d) Compare: does the initial speed make a bigger difference to the time or the impact speed?\""
        },
        {
          "num": 2,
          "title": "Multi-Step SUVAT Problem Solving",
          "focus": "Two-stage problems and vertical motion under gravity",
          "minutes": 55,
          "understandings": [
            "Vertical motion under gravity uses the same SUVAT equations with a = g = 9.8 m/s² (or −9.8 depending on sign convention)",
            "At the highest point of vertical throw, v = 0 (instantaneously at rest before falling back)",
            "Multi-stage problems require solving each stage separately — the final conditions of one stage become the initial conditions of the next",
            "Free fall, throw up, and throw down are all the same physics with different initial conditions"
          ],
          "teachingStrategy": "<p><strong>Vertical motion (15 min):</strong> All vertical motion near Earth's surface has a = g downward. Sign convention matters! If up is positive: a = −9.8 m/s². Throw up at 25 m/s: (a) max height (v = 0 → h = 31.9 m), (b) time to peak (2.55 s), (c) time to return to hand (5.1 s — symmetry: up time = down time), (d) speed on return (25 m/s — same as launch, symmetry). Emphasise these symmetries — they speed up problem-solving.</p><p><strong>Multi-stage problems (20 min):</strong> (1) A ball is thrown up at 15 m/s from the top of a 30 m building. Find: time to reach max height, max height above ground, time to hit the ground, speed on impact. Stage 1: up to peak. Stage 2: peak to ground. (2) A car accelerates for 10 s at 2 m/s², cruises for 20 s, brakes at −3 m/s² to rest. Total distance? Total time? These require chaining SUVAT for each stage.</p><p><strong>Group challenge (15 min):</strong> Groups solve a 3-stage problem on whiteboards. Present and compare methods. Fastest correct group wins.</p><p><strong>Practice (5 min):</strong> 2 multi-stage problems independently.</p>",
          "engagementHook": {
            "title": "THE BUILDING DROP — UP OR DOWN?",
            "content": "\"From the top of a 50 m building, you throw a ball UP at 10 m/s. Your friend drops a ball at the same instant. Which hits the ground first?\" Students debate. The dropped ball wins (obviously). But by how much? Calculate both. The thrown ball takes only 0.7 s longer — much less than students expect, because it spends most of its extra time near the top where it's moving slowly."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The symmetry of vertical motion (same speed up and down, equal times) is a consequence of energy conservation combined with uniform gravity. Recognising symmetry reduces problem-solving time — a skill that transfers to every area of physics."
          },
          "atl": ["Thinking skills", "Social skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO2 — Apply SUVAT to vertical motion and multi-stage problems",
            "AO3 — Analyse multi-stage problems by chaining initial/final conditions"
          ],
          "resources": "Whiteboards and markers for group work, multi-stage problem cards",
          "formative": "\"A ball is thrown up at 20 m/s from a 25 m rooftop. (a) Max height above ground. (b) Time from throw to hitting the ground below. (c) Impact speed. (d) Sketch the v-t graph for the entire motion, clearly labelling key points.\""
        },
        {
          "num": 3,
          "title": "Motion Graphs — s-t, v-t, a-t",
          "focus": "Drawing, interpreting, and extracting physics from graphs",
          "minutes": 55,
          "understandings": [
            "Displacement-time (s-t) graphs: gradient = velocity; curve means acceleration; straight line means constant velocity; horizontal means at rest",
            "Velocity-time (v-t) graphs: gradient = acceleration; area under the graph = displacement; straight line means uniform acceleration",
            "Acceleration-time (a-t) graphs: area under the graph = change in velocity; horizontal line means uniform acceleration",
            "The three graphs are linked: each is the gradient of the one above and the area of the one below"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Present the three graph types side by side for the same motion (e.g., a ball thrown up and caught). s-t: inverted parabola. v-t: straight line crossing zero at the peak. a-t: horizontal line at −g. Teach the links: gradient of s-t = velocity. Gradient of v-t = acceleration. Area under v-t = displacement. Area under a-t = Δv. These links are the most powerful tool in kinematics.</p><p><strong>Lab (15 min):</strong> MOTION SENSOR LIVE GRAPHS — Walk toward and away from a motion sensor. The software plots s-t, v-t, a-t in real time. Students see how their movement creates specific graph shapes. Challenge: \"Walk to produce a triangular v-t graph\" or \"Walk to produce a constant-velocity s-t line.\" The feedback is immediate and physical.</p><p><strong>Graph interpretation practice (15 min):</strong> Give students 5 v-t graphs. For each: (a) describe the motion in words, (b) calculate displacement (area), (c) sketch the corresponding s-t and a-t graphs. Include graphs with negative velocities and graphs returning to zero.</p><p><strong>Wrap-up (10 min):</strong> Summary poster: the three graphs with arrows showing gradient/area relationships. Students copy into notes. This is the single most useful reference in all of kinematics.</p>",
          "engagementHook": {
            "title": "WALK THE GRAPH — LIVE MOTION SENSOR",
            "content": "A motion sensor plots your position in real time. Challenge: \"Can you walk to produce THIS graph?\" Show a target s-t graph (e.g., triangular displacement). Students take turns. The physical connection between movement and graph shape builds deep intuition that no worksheet can match. Competitive version: who can match the target graph most accurately?"
          },
          "nos": {
            "tags": ["Observations", "Patterns", "Models"],
            "description": "Graphical analysis is a universal scientific tool. The gradient/area relationships between s-t, v-t, and a-t graphs are the conceptual foundation of calculus — differentiation (gradient) and integration (area). Newton invented calculus specifically to describe motion. The IB linking question asks: 'How does graphical analysis allow for the determination of other physical quantities?' (NOS)"
          },
          "atl": ["Thinking skills", "Communication skills", "Research skills"],
          "learnerProfile": ["Communicator", "Thinker", "Inquirer"],
          "ao": [
            "AO1 — State what gradients and areas represent on each graph type",
            "AO2 — Calculate velocity, acceleration, and displacement from graphs",
            "AO3 — Analyse complex graphs and convert between s-t, v-t, and a-t"
          ],
          "resources": "Motion sensor + laptop/display, graph interpretation worksheets, graph relationship poster template",
          "formative": "\"A v-t graph shows: 0-4 s: v increases linearly from 0 to 8 m/s. 4-10 s: v constant at 8 m/s. 10-14 s: v decreases linearly to 0. (a) Calculate acceleration in each phase. (b) Calculate total displacement (area under graph). (c) Sketch the corresponding s-t graph. (d) Sketch the a-t graph.\""
        },
        {
          "num": 4,
          "title": "Gradients, Areas & Graphical Problem Solving",
          "focus": "Using graphs to solve problems that equations can't easily handle",
          "minutes": 40,
          "understandings": [
            "How to determine instantaneous velocity from the gradient of a tangent to an s-t curve",
            "How to determine displacement from the area under a non-linear v-t graph (counting squares or using trapezoids)",
            "How to handle non-uniform acceleration using graphs when SUVAT equations don't apply",
            "Graphical analysis allows determination of physical quantities even when algebraic solutions are difficult or impossible"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> When acceleration is non-uniform, SUVAT fails. But graphs still work. Show a curved v-t graph (e.g., a car with changing acceleration). Displacement = area under the curve. Estimate by counting grid squares or drawing trapezoids. Instantaneous acceleration = gradient of tangent at any point.</p><p><strong>Worked examples (15 min):</strong> (1) A curved s-t graph: draw tangent at t = 3 s, measure gradient → instantaneous velocity. (2) A non-linear v-t graph: count squares under the curve → displacement. (3) Data-based: given a table of v vs t (non-uniform), plot the graph, find area → displacement. Find gradient at specific times → acceleration.</p><p><strong>Practice (15 min):</strong> IB-style data-based questions: extract velocities from tangents, displacements from areas, and accelerations from gradients. This is a frequent Paper 1 Section B question type.</p>",
          "engagementHook": {
            "title": "THE IMPOSSIBLE EQUATION — GRAPHS TO THE RESCUE",
            "content": "\"A car's velocity is recorded every second for 10 seconds. The acceleration isn't constant — it changes unpredictably. Can SUVAT find the total distance?\" No. \"Can a graph?\" Yes — plot v-t and measure the area. This is why graphical analysis exists: it solves problems that algebra can't. Students count squares on a real, messy, non-uniform v-t graph and find the displacement."
          },
          "nos": {
            "tags": ["Observations", "Models"],
            "description": "Graphical analysis bridges observation and theory. When the mathematical model is too complex for an algebraic solution, the graph provides the answer directly from the data. This is the IB linking question in action: 'How does graphical analysis allow for the determination of other physical quantities?'"
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO2 — Determine velocity from tangent gradients; displacement from areas",
            "AO3 — Analyse non-uniform motion using graphical methods when SUVAT fails"
          ],
          "resources": "Printed curved s-t and v-t graphs on grid paper, rulers, data tables, calculators",
          "formative": "\"A v-t graph shows a curve (not straight). Estimate: (a) instantaneous acceleration at t = 5 s by drawing a tangent, (b) total displacement from t = 0 to t = 10 s by counting squares, (c) average velocity over the 10 s, (d) at what time is the acceleration zero?\""
        }
      ]
    },
    {
      "name": "Projectile Motion & Fluid Resistance",
      "color": "accent2",
      "totalMinutes": 200,
      "subtopics": [
        {
          "num": 1,
          "title": "Projectile Motion — Resolving into Components",
          "focus": "Horizontal and vertical motion are independent",
          "minutes": 65,
          "understandings": [
            "The behaviour of projectiles in the absence of fluid resistance",
            "Projectile motion resolved into vertical and horizontal components",
            "Horizontal: no force → constant velocity (a_x = 0, v_x = u cosθ)",
            "Vertical: gravity only → uniform acceleration (a_y = g, u_y = u sinθ)",
            "The two components are INDEPENDENT — horizontal motion doesn't affect vertical motion and vice versa",
            "Projectile motion uses constant g close to the surface of the Earth"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> THE MONKEY AND THE HUNTER — \"A hunter aims directly at a monkey in a tree. The monkey sees the flash and drops. Does the dart hit?\" Show the simulation: YES — both the dart and monkey fall at the same rate. The horizontal and vertical motions are independent.</p><p><strong>Demo (10 min):</strong> Simultaneously launch one ball horizontally and drop another from the same height. They hit the ground at the SAME time. \"The horizontal velocity doesn't affect how fast it falls.\" This is the key insight of projectile motion.</p><p><strong>Direct instruction (20 min):</strong> Resolve initial velocity: u_x = u cosθ (horizontal), u_y = u sinθ (vertical). Horizontal: no acceleration → x = u_x × t. Vertical: acceleration = g → use SUVAT. Combine to get the trajectory. Work through: (a) horizontal launch from a cliff — find time to fall (vertical SUVAT), then range (x = u_x × t), (b) oblique launch at 45° — find time of flight, max height, range.</p><p><strong>Worked examples (15 min):</strong> (1) Ball kicked at 20 m/s at 30° — range, max height, time of flight. (2) Ball launched horizontally at 15 m/s from a 20 m cliff — time, range, impact speed. (3) A ball launched below horizontal at 10° — calculate landing point.</p><p><strong>Practice (15 min):</strong> 4 projectile problems of increasing difficulty.</p>",
          "engagementHook": {
            "title": "THE MONKEY AND THE HUNTER",
            "content": "Show the classic simulation (or build with a blowpipe and a falling target): a hunter aims directly at a monkey. The monkey drops the instant the dart is fired. The dart still hits because both fall at the same rate — gravity acts equally on both. Students predict before watching. The result is counterintuitive and unforgettable. \"The dart curves downward at exactly the same rate the monkey falls.\""
          },
          "nos": {
            "tags": ["Models", "Theories"],
            "description": "The independence of horizontal and vertical components is a modelling choice — it works because gravity acts only vertically and (without air resistance) there's no horizontal force. This decomposition strategy appears throughout physics: any complex motion can be broken into independent components. Galileo was the first to describe projectile motion this way (1638)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State that horizontal and vertical motions are independent in projectile motion",
            "AO2 — Resolve initial velocity into components; apply SUVAT to each independently",
            "AO3 — Analyse projectile trajectories for horizontal, oblique, and below-horizontal launches"
          ],
          "resources": "Projectile launcher or ball + ramp, second ball to drop simultaneously, Monkey and Hunter simulation, stopwatch",
          "formative": "\"A ball is launched at 25 m/s at 40° above horizontal from ground level. (a) Find u_x and u_y. (b) Time of flight. (c) Maximum height. (d) Range. (e) At what other angle would the same initial speed give the same range?\""
        },
        {
          "num": 2,
          "title": "Solving Projectile Problems",
          "focus": "Systematic approach to all projectile scenarios",
          "minutes": 65,
          "understandings": [
            "A systematic method: (1) resolve u into components, (2) use vertical SUVAT to find time, (3) use horizontal equation to find range, (4) combine components for resultant velocity",
            "The trajectory is parabolic (in the absence of air resistance)",
            "Impact speed found using Pythagoras on horizontal and vertical velocity components",
            "Impact angle found using trigonometry: θ = tan⁻¹(v_y/v_x)"
          ],
          "teachingStrategy": "<p><strong>Systematic method (10 min):</strong> Teach the 4-step method as a recipe: (1) Resolve: u_x = u cosθ, u_y = u sinθ. (2) Vertical SUVAT: find t (often from the vertical displacement or v_y = 0 at peak). (3) Horizontal: x = u_x × t (finds range). (4) Resultant: v = √(v_x² + v_y²) for impact speed; θ = tan⁻¹(v_y/v_x) for impact angle. This method works for EVERY projectile problem.</p><p><strong>Lab (20 min):</strong> PROJECTILE RANGE PREDICTION — Launch a ball horizontally from a measured height using a ramp. Calculate the predicted range using the 4-step method. Mark the predicted landing spot on the floor. Launch and measure. How close was the prediction? Discrepancy comes from air resistance and measurement error — real physics.</p><p><strong>Worked examples (15 min):</strong> (1) A stunt car drives off a 30 m cliff at 25 m/s horizontally — where does it land and at what speed/angle? (2) A football kicked at 18 m/s at 55° — time of flight, range, max height, and the velocity vector at t = 1.5 s. (3) A ball launched at 12 m/s at 20° below horizontal from a 40 m tower — where and how fast does it land?</p><p><strong>Group challenge (15 min):</strong> \"Design the longest-range projectile.\" Given a fixed launch speed, what angle maximises range? (45° for flat ground.) What if launched from a height? (Slightly below 45°.) Groups calculate and compare.</p><p><strong>Practice (5 min):</strong> 2 exam-style projectile problems independently.</p>",
          "engagementHook": {
            "title": "PREDICT THE LANDING SPOT",
            "content": "Students calculate exactly where a ball launched horizontally from a table will land. They place a cup at the predicted spot. Launch the ball. If it lands in the cup — physics works. The thrill of prediction matching reality is deeply satisfying. Groups compete for accuracy. Discrepancies lead to a discussion of air resistance, measurement uncertainty, and model limitations."
          },
          "nos": {
            "tags": ["Measurements", "Models"],
            "description": "The cup-catching lab is a genuine test of the projectile model. When the ball misses, students must decide: is the model wrong, or is the measurement imprecise? This is the scientific method in miniature — test predictions, analyse discrepancies, refine understanding."
          },
          "atl": ["Thinking skills", "Research skills", "Social skills"],
          "learnerProfile": ["Inquirer", "Risk-taker", "Thinker"],
          "ao": [
            "AO2 — Apply the 4-step method to all projectile scenarios",
            "AO3 — Analyse trajectory, impact speed, and impact angle",
            "AO4 — Lab: predict and verify projectile landing position"
          ],
          "resources": "Ramp + ball, metre sticks, cups/targets, stopwatch, protractors, printed problem sets",
          "formative": "Lab: predicted vs actual landing spot (calculate % error). \"A ball is thrown at 22 m/s at 35° from the edge of a 15 m building. (a) Time to hit the ground. (b) Horizontal distance from the building. (c) Impact speed. (d) Impact angle with the horizontal.\""
        },
        {
          "num": 3,
          "title": "Fluid Resistance, Drag & Terminal Speed",
          "focus": "The qualitative effect of air resistance on projectile motion",
          "minutes": 70,
          "understandings": [
            "The qualitative effect of fluid resistance on projectiles: time of flight, trajectory, velocity, acceleration, range, and terminal speed",
            "Fluid resistance (drag) acts opposite to the direction of motion and increases with speed",
            "With air resistance: the trajectory is NOT a symmetric parabola — it's steeper on the way down, range is shorter, max height is lower",
            "Terminal speed: when drag equals weight, net force = 0, acceleration = 0, speed becomes constant",
            "Fluid resistance refers to effects of both gases (air resistance) and liquids (viscous drag)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show a slow-motion video of a shuttlecock vs a ball. The ball follows a near-parabolic path. The shuttlecock curves sharply and drops steeply. \"Same launch angle and speed — why such different trajectories?\" Air resistance.</p><p><strong>Direct instruction (20 min):</strong> Qualitative analysis (no equations — IB asks for qualitative effects only): With air resistance: (a) Range decreases — drag removes horizontal KE. (b) Max height decreases — drag opposes upward motion, so it decelerates faster going up. (c) Trajectory is asymmetric — steeper descent because the object is slower at the peak than without drag, and drag adds to gravity on the way down. (d) Time of flight changes — shorter going up (drag + gravity), longer coming down (drag opposes gravity). (e) Terminal speed: when drag force = weight, net force = 0, the object reaches constant speed. Sketch all these effects on a trajectory diagram and a v-t graph.</p><p><strong>Comparison activity (15 min):</strong> Give students a table: projectile WITH and WITHOUT air resistance. They fill in qualitative comparisons for: range, max height, time up, time down, total time, impact speed, trajectory shape, and acceleration during flight. This systematic comparison is exactly what IB exams ask for.</p><p><strong>Terminal speed analysis (15 min):</strong> The v-t graph for a falling object with drag: starts at 0, curves upward, approaches a horizontal asymptote (terminal speed). Draw the FBD at three stages: early fall (mg >> drag, large a), mid fall (mg > drag, decreasing a), terminal (mg = drag, a = 0). Link to A.2 concepts: Stokes' law (viscous drag) and the submarine challenge.</p><p><strong>Lab (10 min):</strong> Drop coffee filters (stacked for different masses). Time the fall from 2 m. More filters → higher terminal speed (more weight to balance). Plot terminal speed vs number of filters. Discuss the shape of the graph.</p><p><strong>Practice (5 min):</strong> Qualitative questions comparing trajectories with and without resistance.</p>",
          "engagementHook": {
            "title": "SHUTTLECOCK vs BALL — SAME LAUNCH, DIFFERENT FATE",
            "content": "Launch a shuttlecock and a ball at the same angle and speed (use identical rubber-band launchers). Film in slow motion. The ball sails in a near-perfect parabola. The shuttlecock hooks downward dramatically. Overlay the two trajectories on screen. \"The ball's path is what physics predicts without air resistance. The shuttlecock is reality.\" Then drop stacked coffee filters — they reach terminal speed in about 1 metre, visible to the naked eye."
          },
          "nos": {
            "tags": ["Models", "Observations", "Patterns"],
            "description": "The 'no air resistance' model is an idealisation — useful for understanding but never perfectly true. Real physics always includes drag. The skill is knowing WHEN the idealisation is good enough (a dense ball) and when it fails (a feather, a shuttlecock). This judgement — when to apply which model — is central to scientific thinking."
          },
          "atl": ["Thinking skills", "Research skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Inquirer", "Knowledgeable"],
          "ao": [
            "AO1 — Describe qualitative effects of fluid resistance on projectile motion",
            "AO2 — Sketch modified trajectories and v-t graphs with air resistance",
            "AO3 — Analyse terminal speed conditions using FBDs"
          ],
          "resources": "Shuttlecock, ball, rubber-band launcher, slow-mo camera (phone), coffee filters, stopwatch, 2 m drop height",
          "formative": "\"A ball is launched at 45° with and without air resistance. Compare qualitatively: (a) range, (b) max height, (c) time of flight, (d) impact speed, (e) trajectory shape. Sketch both trajectories on the same diagram. (f) A skydiver jumps from 4000 m. Sketch her v-t graph. Label: the acceleration phase, the point where terminal speed is reached, and the effect of opening a parachute.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "How effectively do the equations of motion model Newton's laws of dynamics?" },
    { "topic": "A.3 Work, Energy & Power", "question": "When can projectile motion problems be solved by conservation of energy instead of kinematic equations?" },
    { "topic": "A.4 Rigid Body Mechanics", "question": "How are the equations for rotational motion related to those for linear motion?" },
    { "topic": "D.1 Gravitational Fields", "question": "How does a gravitational force allow for orbital motion? How does motion change within a gravitational field?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How does the motion of a mass in a gravitational field compare to the motion of a charged particle in an electric field?" },
    { "topic": "IB Linking (NOS)", "question": "How does graphical analysis allow for the determination of other physical quantities?" }
  ]
},
  "A2": {
    "title": "Forces & Momentum",
    "code": "A.2",
    "theme": "A",
    "level": "SL+HL",
    "recommendedHours": 10,
    "recommendedMinutes": 600,
    "guidingQuestions": [
      "How can forces acting on a system be represented both visually and algebraically?",
      "How can Newton's laws be modelled mathematically?",
      "How can knowledge of forces and momentum be used to predict the behaviour of interacting bodies?"
    ],
    "groups": [
      {
        "name": "Newton's Laws",
        "color": "accent",
        "totalMinutes": 110,
        "subtopics": [
          {
            "num": 1,
            "title": "Newton's 1st Law & Translational Equilibrium",
            "focus": "A body remains at rest or in uniform motion unless acted upon by a resultant external force",
            "minutes": 30,
            "understandings": [
              "A body remains at rest or in uniform motion unless acted upon by a resultant external force",
              "Applied to problems involving translational equilibrium (resultant force = 0)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show ISS astronaut video — objects float, liquids form spheres. Ask: \"Why doesn't the water fall?\" Surface prior conceptions about forces.</p><p><strong>Socratic discussion (10 min):</strong> \"Is the ball at rest because no forces act, or because forces balance?\" Challenge the common misconception. Use think-pair-share to get every student involved.</p><p><strong>Concept building (10 min):</strong> Introduce interaction diagrams — draw two objects and label what each does to the other. Bridge from intuitive understanding to formal physics language. Work through translational equilibrium examples: a book on a table, a parachutist at terminal velocity.</p><p><strong>Practice (5 min):</strong> Students solve 2–3 equilibrium problems independently, then check with a partner.</p>",
            "engagementHook": {
              "title": "TABLECLOTH PULL",
              "content": "Yank the cloth and the dishes stay (inertia). Students predict before the demo. Follow with coin — on — card flick over a glass. Ask: \"Why does the coin drop straight down instead of flying sideways?\" Both demos take 3 minutes but create a vivid anchor for the 1st law."
            },
            "nos": {
              "tags": [
                "Models",
                "Theories"
              ],
              "description": "Newton's laws are a model of how the physical world works, developed by observing patterns and formalising them. Galileo's thought experiments about frictionless surfaces were a precursor (NOS: science as a shared endeavour)."
            },
            "atl": [
              "Thinking skills",
              "Communication skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Inquirer"
            ],
            "ao": [
              "AO1 — State the 1st law",
              "AO2 — Apply to equilibrium problems"
            ],
            "resources": "ISS video clip, tablecloth + plastic dishes, coin + card + glass, whiteboard",
            "formative": "Exit ticket: \"A lamp hangs from two cables at 30° and 60° to the ceiling. Is it in equilibrium? How do you know? Draw the FBD.\""
          },
          {
            "num": 2,
            "title": "Newton's 2nd Law — F = ma and F = Δp/Δt",
            "focus": "F = ma assumes constant mass",
            "minutes": 45,
            "understandings": [
              "F = ma assumes constant mass",
              "F = Δp/Δt is the general form allowing for changing mass (rockets, conveyor belts, rain on a cart)",
              "Derive F = ma as a special case of F = Δp/Δt"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show rocket launch video. \"As the rocket burns fuel, its mass decreases — can we still use F = ma?\" Create the need for the general form.</p><p><strong>Derivation (10 min):</strong> Start from p = mv. Differentiate: F = Δp/Δt. Show that when m is constant, this reduces to F = ma. This is NOT just a formula — it's the idea that force is fundamentally about changing momentum, not just accelerating a fixed mass.</p><p><strong>Worked examples (15 min):</strong> Escalate complexity: (1) constant mass — block on a surface, find acceleration; (2) connected bodies — two blocks on a surface connected by a string; (3) changing mass — a rocket expelling gas at a known rate. For each, set up the problem together, then let students finish.</p><p><strong>Group problem-solving (10 min):</strong> Groups of 3 tackle a challenging problem: \"Sand falls at 2 kg/s onto a conveyor belt moving at 3 m/s. What force is needed to keep the belt moving?\" Each group presents their solution.</p><p><strong>Consolidation (5 min):</strong> Key takeaway — F = ma is a special case. Both forms give the same answer when mass is constant, but only F = Δp/Δt works for variable-mass systems.</p>",
            "engagementHook": {
              "title": "BALLOON ROCKET",
              "content": "Inflate a balloon, tape it to a straw threaded on a fishing line stretched across the room. Release. It accelerates as air (mass) leaves. Ask: \"Is the force constant? Is the acceleration constant? Why not?\" Students see the acceleration increase as mass decreases — a direct, visceral demonstration of why F = ma alone is insufficient. Follow up by calculating the approximate thrust."
            },
            "nos": {
              "tags": [
                "Theories"
              ],
              "description": "F = Δp/Δt is more general than F = ma; scientific theories evolve to become more encompassing without invalidating simpler cases. Global impact — the rocket equation has geopolitical significance (space race, satellites, missile defence)."
            },
            "atl": [
              "Thinking skills",
              "Social skills"
            ],
            "learnerProfile": [
              "Knowledgeable",
              "Thinker"
            ],
            "ao": [
              "AO1 — State both forms",
              "AO2 — Apply both",
              "AO3 — Evaluate when each is needed"
            ],
            "resources": "Rocket launch video, balloon + straw + fishing line, graded problem sets",
            "formative": "Group problem presentation. Exit ticket: \"A 500 kg rocket expels 10 kg of gas at 200 m/s in 0.5 s. Calculate the thrust using F = Δp/Δt and explain why F = ma alone would be insufficient.\""
          },
          {
            "num": 3,
            "title": "Newton's 3rd Law & Force Pairs",
            "focus": "Forces exist in pairs: equal magnitude, opposite direction, on DIFFERENT bodies",
            "minutes": 35,
            "understandings": [
              "Forces exist in pairs: equal magnitude, opposite direction, on DIFFERENT bodies",
              "Forces as interactions between bodies — every force involves two objects",
              "Identification of force pairs in various situations (per IB guidance)"
            ],
            "teachingStrategy": "<p><strong>Demonstration (10 min):</strong> Two students of different masses sit on office chairs/skateboards and push off each other. Before the push, ask the class to predict: Who moves faster? Who exerts more force? After: \"If the forces are equal, why don't they accelerate equally?\" (Because F = ma, and their masses differ.)</p><p><strong>Concept building (10 min):</strong> Draw interaction diagrams for: (a) book on table, (b) person standing on Earth, (c) horse pulling a cart. For each, identify ALL 3rd-law pairs. Emphasise: 3rd-law pairs act on DIFFERENT bodies and therefore NEVER cancel.</p><p><strong>Common misconception attack (10 min):</strong> \"If the horse and cart exert equal forces on each other, how does the cart move?\" Work through this carefully — the net force on the cart comes from the horse's pull minus friction, NOT from the 3rd-law pair.</p><p><strong>Practice (5 min):</strong> Students draw interaction diagrams for 3 new scenarios and identify all force pairs.</p>",
            "engagementHook": {
              "title": "SKATEBOARD CHALLENGE",
              "content": "The visceral surprise when the heavier student barely moves while the lighter one shoots backward is unforgettable. Film it in slow motion. Have students calculate the expected velocity ratio from the mass ratio, then compare with the video."
            },
            "nos": {
              "tags": [
                "Patterns & trends"
              ],
              "description": "Newton observed patterns in interactions. Science as a shared endeavour — Newton acknowledged building on Galileo, Kepler, and others (\"If I have seen further, it is by standing on the shoulders of giants\")."
            },
            "atl": [
              "Communication skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Inquirer",
              "Communicator"
            ],
            "ao": [
              "AO1 — State the 3rd law",
              "AO2 — Identify force pairs",
              "AO3 — Analyse the horse-and-cart paradox"
            ],
            "resources": "2 office chairs or skateboards, phone for slow-mo video, whiteboard",
            "formative": "\"Draw the interaction diagram for a rocket in space. Identify the 3rd-law pair. Explain how a rocket accelerates in the vacuum of space where there is nothing to 'push against'.\""
          }
        ]
      },
      {
        "name": "Free-Body Diagrams",
        "color": "accent3",
        "totalMinutes": 80,
        "subtopics": [
          {
            "num": 4,
            "title": "Drawing & Labelling FBDs",
            "focus": "Represent all forces acting on a single body using a free-body diagram",
            "minutes": 35,
            "understandings": [
              "Represent all forces acting on a single body using a free-body diagram",
              "Forces labelled using accepted names/symbols: F_N, F_f, F_g, T, etc.",
              "FBDs for 1D and 2D situations only (per IB guidance)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show a photo of a rock climber on a cliff face. \"What forces act on her? How is she in equilibrium?\" Students sketch rough FBDs in notebooks — no instruction yet, just intuition.</p><p><strong>Step-by-step modelling (10 min):</strong> Teach the 5-step FBD process: (1) Isolate the body, (2) Draw it as a dot, (3) Identify every contact and field force, (4) Draw force arrows FROM the dot, to scale, (5) Label each force with its accepted symbol. Model with 3 examples of increasing difficulty: object on horizontal surface → object on inclined plane → object suspended by two ropes at angles.</p><p><strong>Guided practice (15 min):</strong> Students work through 6 graded problems in pairs. Circulate actively — the most common errors at this stage are: missing forces (forgetting normal force), drawing forces ON the surface instead of on the body, and mislabelling.</p><p><strong>Peer assessment (5 min):</strong> Pairs swap their inclined plane FBD. Partners check against a rubric: Are all forces present? Are labels correct using accepted symbols? Are arrows roughly to scale?</p>",
            "engagementHook": {
              "title": "ROCK CLIMBER FBD",
              "content": "Show the photo first, let students attempt the FBD, THEN teach the method, THEN have them redo it. Comparing their before/after builds metacognitive awareness of what they've learned."
            },
            "nos": {
              "tags": [
                "Models"
              ],
              "description": "FBDs are a model that strips away irrelevant detail to focus on the physics. Discuss: \"Why do we draw the object as a dot? When does the point — particle assumption break down?\" (Answer: when rotation matters — link to A.4.)"
            },
            "atl": [
              "Communication skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Communicator",
              "Thinker"
            ],
            "ao": [
              "AO1 — Draw and label FBDs correctly",
              "AO2 — Identify all forces on a body"
            ],
            "resources": "Printed problem sets (graded difficulty), rock climber photo, whiteboard markers, FBD rubric",
            "formative": "Peer-assessed FBD with rubric. The rubric itself is a teaching tool — students internalise what a good FBD looks like."
          },
          {
            "num": 5,
            "title": "Resultant Force & Vector Resolution",
            "focus": "Finding resultant force by vector addition in 1D and 2D",
            "minutes": 45,
            "understandings": [
              "Finding resultant force by vector addition in 1D and 2D",
              "Resolving forces into components using trigonometry",
              "Solving equilibrium problems using simultaneous equations (per IB guidance)"
            ],
            "teachingStrategy": "<p><strong>Review (5 min):</strong> Quick recap of FBDs. Show a 2D FBD and ask: \"How do we find the net force when forces point in different directions?\"</p><p><strong>Direct instruction (15 min):</strong> Teach force resolution into components (F_x = F·cosθ, F_y = F·sinθ). Work through: (a) forces on an inclined plane — resolve weight into components parallel and perpendicular to the surface, show F_N = mg·cosθ; (b) two ropes supporting a sign at different angles — set up simultaneous equations T₁·sinα = T₂·sinβ and T₁·cosα + T₂·cosβ = mg.</p><p><strong>Guided practice (15 min):</strong> Students work through 4 problems in pairs, escalating from basic component resolution to simultaneous equation problems. Provide worked solutions for self-checking after each problem.</p><p><strong>Extension challenge (10 min):</strong> \"A 50 kg lamp hangs from two cables. Cable 1 makes 30° with the horizontal, Cable 2 makes 60°. Find the tension in each cable.\" This requires setting up and solving two simultaneous equations — a critical IB exam skill.</p>",
            "engagementHook": {
              "title": "HUMAN FBD",
              "content": "A student stands on a bathroom scale. The class draws the FBD and predicts the scale reading. Then simulate a lift: push down on the student's shoulders (scale reads more) and pull up (scale reads less). \"Are you heavier when someone pushes you? Or is the normal force just larger?\" This makes apparent weight tangible."
            },
            "nos": {
              "tags": [
                "Models"
              ],
              "description": "The point — particle model breaks down for extended bodies. The component method is itself a mathematical model that simplifies 2D problems into two 1D problems."
            },
            "atl": [
              "Thinking skills",
              "Social skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Communicator"
            ],
            "ao": [
              "AO2 — Resolve forces into components",
              "AO3 — Analyse equilibrium using simultaneous equations"
            ],
            "resources": "Bathroom scale, printed problem sets with worked answers, angle protractors, calculators",
            "formative": "Exit ticket: \"Draw the FBD for a 5 kg block on a 30° incline with friction (μ = 0.3). Calculate the net force and the acceleration.\""
          }
        ]
      },
      {
        "name": "Contact Forces",
        "color": "accent2",
        "totalMinutes": 165,
        "subtopics": [
          {
            "num": 6,
            "title": "Normal Force & Friction (μ_s and μ_d)",
            "focus": "Normal force (F_N): component of contact force perpendicular to the surface that counteracts the body",
            "minutes": 50,
            "understandings": [
              "Normal force (F_N): component of contact force perpendicular to the surface that counteracts the body",
              "Static friction: F_f ≤ μ_s·F_N (up to a maximum before sliding)",
              "Dynamic friction: F_f = μ_d·F_N (constant while moving, μ_d < μ_s)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Push a heavy textbook on a desk. Push gently — nothing happens. Gradually increase force — still nothing. Suddenly it slides. \"What was pushing back? Why did it suddenly give way?\" Introduce the concept of static friction having a maximum.</p><p><strong>Lab (25 min):</strong> MEASURING FRICTION COEFFICIENTS — Students use a spring scale to drag wooden blocks across different surfaces (wood, sandpaper, glass, rubber mat). For each: (a) increase force gradually until the block just starts moving — record F_f at that instant (this gives μ_s·F_N), (b) drag at constant velocity — record F_f (this gives μ_d·F_N). Add masses to change F_N. Plot F_f vs F_N for each surface. Find μ from the gradient. Compare μ_s vs μ_d.</p><p><strong>Theory consolidation (10 min):</strong> Formalise the equations. Work through an inclined plane problem: \"At what angle will the block start sliding?\" Show that μ_s = tanθ_critical. This is elegant — students can verify it immediately with a book and a coin.</p><p><strong>Real-world connections (5 min):</strong> Why do car tyres have treads? (Channels water to maintain contact → friction.) Why is it harder to start pushing a fridge than to keep it moving? (μ_s > μ_d.) Why do new shoes slip? (Smooth sole → low μ.)</p><p><strong>Practice (5 min):</strong> 2 inclined plane problems with friction.</p>",
            "engagementHook": {
              "title": "FRICTION OLYMPICS",
              "content": "Three events: (1) Tug — of — war between a student in socks vs shoes on a smooth floor — who wins and why? (2) Drag race: pull identical blocks across sandpaper, wood, and oiled glass — students bet on which has highest μ before measuring. (3) The unbeatable incline: students find the exact angle where a coin just starts sliding on a tilted textbook, then calculate μ_s = tanθ. Award prizes for the most accurate measurement (± 0.01). The competitive format makes abstract coefficients unforgettable."
            },
            "nos": {
              "tags": [
                "Measurements",
                "Patterns & trends"
              ],
              "description": "Friction coefficients are empirical, not derived from theory. The linear relationship between F_f and F_N is a pattern discovered through data. Discuss: \"Is Coulomb's friction model a law or an approximation? When does it fail?\" (It fails at very high speeds, very smooth surfaces, or lubricated contacts.)"
            },
            "atl": [
              "Research skills",
              "Self-management skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Inquirer",
              "Risk-taker"
            ],
            "ao": [
              "AO1 — Define friction",
              "AO2 — Apply μ in calculations",
              "AO3 — Analyse lab data to determine μ",
              "AO4 — Lab skills (measurement, graphing, gradient analysis)"
            ],
            "resources": "Spring scales (0–10 N), wooden blocks, surfaces (sandpaper, glass, rubber, wood), inclined plane, protractors, graph paper, calculators",
            "formative": "Lab report: F_f vs F_N graph with gradient calculation and comparison of μ_s vs μ_d. Must include uncertainties."
          },
          {
            "num": 7,
            "title": "Tension & Pulley Systems",
            "focus": "Tension: the pulling force transmitted through a string, rope, or cable",
            "minutes": 30,
            "understandings": [
              "Tension: the pulling force transmitted through a string, rope, or cable",
              "Tension is the same throughout an ideal (massless, inextensible) string",
              "Atwood machine and connected-body problems"
            ],
            "teachingStrategy": "<p><strong>Demo (5 min):</strong> Set up an Atwood machine with two clearly different masses. Ask students to predict: \"Which mass accelerates down? What determines the acceleration?\" Let them discuss in pairs before revealing.</p><p><strong>Worked example (10 min):</strong> Apply Newton's 2nd law to EACH mass separately. For mass 1: T − m₁g = m₁a. For mass 2: m₂g − T = m₂a. Add the equations to eliminate T, solve for a. Then back-substitute to find T. Show that T is NOT equal to the weight of either mass.</p><p><strong>Extension (10 min):</strong> Connected bodies on a surface: a block on a table connected by a string over a pulley to a hanging mass. Same method — FBD for each body, Newton's 2nd law for each, solve simultaneously.</p><p><strong>Practice (5 min):</strong> One Atwood machine problem and one connected-body problem. Students solve independently then compare.</p>",
            "engagementHook": {
              "title": "HUMAN ATWOOD MACHINE",
              "content": "Two students hold ends of a rope over a smooth bar. Attach different water bottles to each end. Who gets pulled? Predict first, then test. The physical struggle makes the abstract problem real."
            },
            "nos": {
              "tags": [
                "Models"
              ],
              "description": "The \"ideal string\" is a model assumption (massless, inextensible). Discuss when this breaks down: bungee cords stretch, heavy chains have their own weight distribution."
            },
            "atl": [
              "Thinking skills"
            ],
            "learnerProfile": [
              "Thinker"
            ],
            "ao": [
              "AO2 — Apply Newton's 2nd law to connected systems",
              "AO3 — Set up and solve simultaneous equations"
            ],
            "resources": "Atwood machine (pulley + string + masses), or improvised with a smooth bar and rope",
            "formative": "\"Two masses (3 kg and 5 kg) are connected by a string over a frictionless pulley. Calculate the acceleration and the tension. Then: what would happen if the string had a mass of 0.5 kg?\""
          },
          {
            "num": 8,
            "title": "Elastic Restoring Force (Hooke's Law)",
            "focus": "F_H = −kx, where k is the spring constant and x is the extension/compression",
            "minutes": 40,
            "understandings": [
              "F_H = −kx, where k is the spring constant and x is the extension/compression",
              "The negative sign indicates a restoring force (opposite to displacement)",
              "Hooke's law is only valid within the elastic limit"
            ],
            "teachingStrategy": "<p><strong>Lab (20 min):</strong> HOOKE'S LAW INVESTIGATION — Students hang masses from a spring and measure extension for each added mass. Record in a table. Plot F (weight of masses) vs x (extension). Find k from the gradient. Discuss: Is the relationship perfectly linear? What happens if you load too much? Show a permanently deformed spring — this is the elastic limit. Key question: \"Why is there a negative sign in F_H = −kx?\" Answer: the force acts in the opposite direction to the displacement — it always pulls back toward equilibrium.</p><p><strong>Theory (10 min):</strong> Formalise Hooke's law. Distinguish between extension (positive x) and compression (negative x) — force reverses direction in both cases. Introduce spring combinations: springs in series (1/k_total = 1/k₁ + 1/k₂) and parallel (k_total = k₁ + k₂). Work through one example of each.</p><p><strong>Practice (10 min):</strong> Problem set: (a) find k from F-x data, (b) find extension under a given force, (c) springs in series and parallel, (d) elastic potential energy preview: \"If the area under the F-x graph is energy stored, what is it?\" (½kx² — this links to A.3.)</p>",
            "engagementHook": {
              "title": "SPRING MYSTERY",
              "content": "Give students 3 springs that look identical (same length, same coils) but have different k values. They must determine which is stiffest using only a ruler and a set of masses — no labels, no hints. The discovery that appearance is deceptive and only measurement reveals the truth is a direct lesson in scientific method."
            },
            "nos": {
              "tags": [
                "Models have boundaries"
              ],
              "description": "Hooke's law is an approximation that fails beyond the elastic limit. This is a powerful example of the scope and limitations of scientific models. Discuss: \"Does any real spring obey Hooke's law perfectly?\" (No — it's always an approximation, best for small deformations.)"
            },
            "atl": [
              "Research skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Inquirer",
              "Thinker"
            ],
            "ao": [
              "AO1 — State Hooke's law",
              "AO2 — Calculate k and extension",
              "AO3 — Analyse F-x data",
              "AO4 — Lab skills"
            ],
            "resources": "3+ springs of different k, mass hangers, slotted masses, rulers, clamp stands, graph paper",
            "formative": "Lab report: F vs x graph with gradient = k, uncertainty bars, discussion of elastic limit. Bonus: \"Predict the extension when two of your springs are connected in series, then verify experimentally.\""
          },
          {
            "num": 9,
            "title": "Viscous Drag (Stokes' Law) & Buoyancy",
            "focus": "Viscous drag on a small sphere: F_d = 6πηrv (Stokes' law) where η is fluid viscosity, r is radius, v is velocity",
            "minutes": 45,
            "understandings": [
              "Viscous drag on a small sphere: F_d = 6πηrv (Stokes' law) where η is fluid viscosity, r is radius, v is velocity",
              "Buoyancy: F_b = ρVg where V is the volume of fluid displaced, ρ is the fluid density",
              "Terminal velocity: when drag + buoyancy = weight, acceleration = 0"
            ],
            "teachingStrategy": "<p><strong>Demonstration (5 min):</strong> Drop a steel ball into a tall cylinder (1 m+) of glycerol or thick honey. Students observe it accelerate, then reach a constant speed. \"The gravitational force didn't change — so what grew as the ball sped up?\"</p><p><strong>Direct instruction (15 min):</strong> Introduce Stokes' law F_d = 6πηrv — drag increases with velocity. Introduce buoyancy F_b = ρVg — depends on displaced volume, not the object's weight. Derive the terminal velocity condition: at terminal velocity, a = 0, so mg = 6πηrv_t + ρVg. Rearrange to find v_t. Numerical example: steel ball (r = 5 mm, ρ = 7800 kg/m³) in glycerol (η = 1.5 Pa·s, ρ = 1260 kg/m³).</p><p><strong>Skydiver analysis (10 min):</strong> The skydiver is the most important application. Draw the v-t graph showing three phases: (1) just after jumping — only gravity acts, acceleration = g, (2) as speed increases — drag grows, net force decreases, acceleration decreases but speed still increases, (3) terminal velocity reached — drag = weight, a = 0. Then: parachute opens — drag suddenly exceeds weight, deceleration occurs, new (lower) terminal velocity reached. Students sketch the FBD at each phase.</p><p><strong>Practice (10 min):</strong> Problem set: (a) calculate terminal velocity for a given sphere in a given fluid, (b) \"Will this object float in water? In mercury? In oil?\", (c) \"Two spheres of the same material but different radii fall through glycerol — which reaches terminal velocity first and why?\"</p><p><strong>Wrap-up (5 min):</strong> Limitations of Stokes' law: only valid for small spheres at low Reynolds numbers (laminar flow). At high speeds, drag ∝ v² instead of v.</p>",
            "engagementHook": {
              "title": "TWO ACTIVITIES",
              "content": "(1) SLOW — MOTION RACE: Drop steel, glass, and plastic balls simultaneously into glycerol columns. Students predict the finishing order using Stokes' law — both radius AND density matter. (2) SUBMARINE CHALLENGE: Give groups a film canister, plasticine, and a tub of water. They must make the canister hover neutrally buoyant (neither sinking nor floating). This requires precise balancing of F_b = ρVg and mg. The satisfaction when it hovers is genuine delight."
            },
            "nos": {
              "tags": [
                "Falsification"
              ],
              "description": "Stokes' law makes a specific, testable prediction. If the ball doesn't reach the predicted terminal velocity, something is wrong with the assumptions (turbulent flow, wall effects, non — spherical shape). Models have defined scope."
            },
            "atl": [
              "Thinking skills",
              "Research skills"
            ],
            "learnerProfile": [
              "Inquirer",
              "Thinker"
            ],
            "ao": [
              "AO1 — State Stokes' law and buoyancy equation",
              "AO2 — Apply to calculate terminal velocity and buoyancy",
              "AO3 — Analyse conditions for terminal velocity from FBDs"
            ],
            "resources": "Tall cylinders (1 m) with glycerol, steel/glass/plastic balls of known radii, film canisters, plasticine, water tub, stopwatches",
            "formative": "Annotated FBD + v-t graph for a skydiver at all four stages (free fall, increasing drag, terminal velocity, parachute). Must label forces and state whether a > 0, a = 0, or a < 0 at each stage."
          }
        ]
      },
      {
        "name": "Field Forces",
        "color": "accent5",
        "totalMinutes": 35,
        "subtopics": [
          {
            "num": 10,
            "title": "Weight (F_g = mg) & Mass vs Weight",
            "focus": "Gravitational force F_g = mg (weight)",
            "minutes": 20,
            "understandings": [
              "Gravitational force F_g = mg (weight)",
              "Mass is a scalar (invariant); weight is a force (varies with g)",
              "g varies by location: Moon 1.6, Mars 3.7, Earth 9.8, Jupiter 24.8 m/s²"
            ],
            "teachingStrategy": "<p><strong>Demo (5 min):</strong> Weigh an object on a spring scale (measures weight) and a balance (measures mass). \"Which reading would change on the Moon?\"</p><p><strong>Discussion & calculation (10 min):</strong> Students calculate their weight on Moon, Mars, Jupiter. Record in a table. \"Would your mass change? Would your weight?\" Formalise: mass is the quantity of matter (doesn't change); weight is the gravitational force (depends on g). Address the common confusion: \"I weigh 70 kg\" — no, you have a mass of 70 kg and a weight of 686 N on Earth.</p><p><strong>Practice (5 min):</strong> Quick problems involving weight on different planets, apparent weightlessness in orbit.</p>",
            "engagementHook": {
              "title": "WEIGHT ON OTHER WORLDS",
              "content": "Give each student a \"passport\" card. They calculate their weight on 5 planets/moons and fill it in. Display results. \"On Jupiter, you'd struggle to stand up. On the Moon, you could jump 6 times higher.\""
            },
            "nos": {
              "tags": [
                "Global impact"
              ],
              "description": "understanding weight vs mass is essential for space exploration and satellite deployment."
            },
            "atl": [
              "Thinking skills"
            ],
            "learnerProfile": [
              "Knowledgeable"
            ],
            "ao": [
              "AO1 — Define mass and weight",
              "AO2 — Apply F_g = mg"
            ],
            "resources": "Spring scale, balance, planetary g-values chart, \"passport\" cards",
            "formative": "\"An astronaut has a mass of 80 kg. Calculate her weight on Earth, on the Moon, and in the ISS (in orbit around Earth). Explain why she feels weightless in the ISS even though g ≈ 8.7 m/s² at that altitude.\""
          },
          {
            "num": 11,
            "title": "Electric & Magnetic Forces (Intro)",
            "focus": "Electric force (F_e): acts between charged bodies",
            "minutes": 15,
            "understandings": [
              "Electric force (F_e): acts between charged bodies",
              "Magnetic force (F_m): acts on moving charges and currents",
              "Both are field forces — act at a distance without contact",
              "These will be quantified in Theme D (D.2 and D.3)"
            ],
            "teachingStrategy": "<p><strong>Quick demos (5 min):</strong> (a) Rub a balloon on hair, stick it to a wall — electric force. (b) Bring a magnet near a current-carrying wire — it deflects — magnetic force. Both act WITHOUT CONTACT.</p><p><strong>Classification (5 min):</strong> Students update their force classification table (started in earlier subtopics): Contact forces (normal, friction, tension, spring, drag, buoyancy) vs Field forces (gravitational, electric, magnetic). Discuss: \"What's the fundamental difference?\"</p><p><strong>Preview (5 min):</strong> \"We've met F_g = mg for gravity. In Theme D, you'll learn F_e = kq₁q₂/r² for electric force and F_m = qvB for magnetic force. These follow the same patterns — force depends on a property of the object and a property of the field.\"</p>",
            "engagementHook": {
              "title": "VAN DE GRAAFF HAIR",
              "content": "RAISING or charged balloon attracting small paper pieces. Quick, visual, memorable. \"This is the electric force — it's the same force that holds atoms together and makes lightning.\""
            },
            "nos": {
              "tags": [
                "Observations"
              ],
              "description": "Field forces were discovered through unexpected observations (Oersted's accidental discovery that a current deflects a compass)."
            },
            "atl": [
              "Communication skills"
            ],
            "learnerProfile": [
              "Open-minded"
            ],
            "ao": [
              "AO1 — Identify and classify field forces"
            ],
            "resources": "Balloon, Van de Graaff (if available), bar magnet, wire, battery, compass",
            "formative": "\"Complete the force classification table. For each force, state whether it is contact or field, give its symbol, and give one real-world example.\""
          }
        ]
      },
      {
        "name": "Momentum & Impulse",
        "color": "accent",
        "totalMinutes": 110,
        "subtopics": [
          {
            "num": 12,
            "title": "Linear Momentum (p = mv) & Conservation",
            "focus": "p = mv is a vector quantity",
            "minutes": 40,
            "understandings": [
              "p = mv is a vector quantity",
              "Momentum remains constant unless the system is acted upon by a resultant external force",
              "Conservation of momentum in isolated systems"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show slow-motion car crash test video. Pause at impact. \"The car had momentum before the crash. After the crash, it's stopped. Where did the momentum go?\"</p><p><strong>Concept building (10 min):</strong> Define p = mv. Emphasise it's a VECTOR — direction matters. Momentum of a system = sum of individual momenta. Conservation: if no external force acts, total momentum before = total momentum after. This works because Newton's 3rd law ensures internal forces cancel.</p><p><strong>Demo (10 min):</strong> Dynamics carts on a track. (a) Equal masses, one moving — after collision, the moving one stops and the stationary one moves (elastic). (b) Unequal masses — both move after collision. For each, calculate total p before and after. Students see conservation in action.</p><p><strong>Problem-solving (10 min):</strong> Numerical problems: (a) two carts colliding, (b) a bullet embedding in a block (find the block's velocity after), (c) a cannon firing a cannonball (find the recoil velocity). Set up conservation equation for each: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'.</p><p><strong>Discussion (5 min):</strong> \"Is momentum always conserved?\" Discuss: yes, for an isolated system. In a car crash, is the system isolated? (No — friction from the road is an external force. But during the very short collision time, external forces are negligible compared to the collision forces, so momentum is approximately conserved.)</p>",
            "engagementHook": {
              "title": "CRASH TEST VIDEO",
              "content": "The visceral drama of a car crash grabs attention. Calculate the car's momentum before impact (m ≈ 1500 kg, v ≈ 50 km/h ≈ 14 m/s → p ≈ 21,000 kg·m/s). \"That's the momentum that had to go somewhere in 0.1 seconds.\""
            },
            "nos": {
              "tags": [
                "Patterns"
              ],
              "description": "Conservation laws are among the deepest patterns in physics. Every conservation law is connected to a symmetry of nature (Noether's theorem, mentioned briefly). Theories — conservation of momentum was used to predict the existence of the neutrino (Pauli, 1930)."
            },
            "atl": [
              "Thinking skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Knowledgeable"
            ],
            "ao": [
              "AO1 — Define momentum",
              "AO2 — Apply conservation of momentum",
              "AO3 — Analyse whether a system is isolated"
            ],
            "resources": "Dynamics carts, track, crash test video, problem sets",
            "formative": "\"A 0.02 kg bullet travelling at 400 m/s embeds in a 2 kg wooden block at rest. Calculate the velocity of the block+bullet after impact. Is momentum conserved? Is kinetic energy conserved? Calculate the % of KE lost.\""
          },
          {
            "num": 13,
            "title": "Impulse (J = FΔt = Δp) & Safety Design",
            "focus": "Impulse J = FΔt — the product of average resultant force and time of contact",
            "minutes": 70,
            "understandings": [
              "Impulse J = FΔt — the product of average resultant force and time of contact",
              "Impulse equals the change in momentum: J = Δp",
              "Same change in momentum can be achieved by large F × short Δt or small F × long Δt",
              "Use of simultaneous equations involving conservation of momentum and energy (per IB guidance)"
            ],
            "teachingStrategy": "<p><strong>Concept building (15 min):</strong> Derive J = Δp from F = Δp/Δt. Rearrange: FΔt = Δp. This is the impulse-momentum theorem. Key insight: for the same Δp, increasing Δt DECREASES F. This one idea explains all of the following: crumple zones (car deforms over longer time → lower force on passengers), airbags (cushion → longer Δt → lower force on head), seatbelts (stretch slightly → longer Δt), bungee cords (decelerate over seconds, not milliseconds), catching a cricket ball (draw hands back to increase Δt), martial arts rolls (distribute impact over time). Work through the calculation: \"A 70 kg person moving at 10 m/s stops in 0.05 s (hitting a wall) vs 0.5 s (crumple zone). Calculate the force in each case.\" (14,000 N vs 1,400 N — a 10x reduction.)</p><p><strong>Lab (30 min):</strong> EGG DROP CHALLENGE — Each group gets: 1 raw egg, 4 sheets of newspaper, 50 cm of tape. BEFORE building: write a one-paragraph physics justification explaining how their design increases Δt to reduce the force on the egg. Use the equation J = FΔt = Δp explicitly. Then build (10 min), then drop from 2 m (5 min — film in slow motion). After: calculate the egg's momentum just before impact (estimate mass, use v = √(2gh)), calculate the impulse, estimate the average force during impact using the approximate time from the slow-mo video.</p><p><strong>Problem-solving (15 min):</strong> Conservation of momentum problems requiring simultaneous equations: (a) elastic collision with both final velocities unknown (two equations: p conservation + KE conservation), (b) ballistic pendulum (bullet in block, then block swings up — combine momentum conservation with energy conservation). These are classic IB exam problems.</p><p><strong>Debrief (10 min):</strong> Return to the car crash video. Students now explain QUANTITATIVELY how crumple zones, airbags, and seatbelts each reduce peak force. Discussion: \"Are there situations where you WANT a short impact time?\" (Yes: hammering a nail, martial arts strikes, heading a football for power.)</p>",
            "engagementHook": {
              "title": "EGG DROP ENGINEERING CHALLENGE",
              "content": "The twist of requiring a written physics justification BEFORE building forces students to think about the physics, not just build randomly. Groups whose egg survives AND whose explanation correctly uses the impulse — momentum theorem earn full marks. The tension when the egg drops, the slow — mo replay, the physics analysis afterward — this is the kind of lesson students remember for years."
            },
            "nos": {
              "tags": [
                "Global impact"
              ],
              "description": "Car safety standards (Euro NCAP, NHTSA) are direct applications of impulse — momentum theory. Scientific knowledge informing international policy and saving lives. Science as a shared endeavour — crash test data is shared internationally."
            },
            "atl": [
              "Thinking skills",
              "Social skills",
              "Self-management skills",
              "Communication skills"
            ],
            "learnerProfile": [
              "Caring (safety design protects lives)",
              "Principled (honest data)",
              "Thinker",
              "Communicator"
            ],
            "ao": [
              "AO1 — Define impulse",
              "AO2 — Apply J = Δp and conservation",
              "AO3 — Analyse how Δt affects force",
              "AO4 — Design and justify egg-drop experiment"
            ],
            "resources": "Raw eggs (extras!), newspaper, tape, 2m drop height, slow-mo camera (phone), dynamics carts, crash test video, problem sets with simultaneous equations",
            "formative": "(a) Egg drop physics justification — assessed for correct use of J = FΔt. (b) Problem set: ballistic pendulum and elastic collision simultaneous equation problems."
          }
        ]
      },
      {
        "name": "Collisions & Explosions",
        "color": "accent4",
        "totalMinutes": 100,
        "subtopics": [
          {
            "num": 14,
            "title": "Elastic & Inelastic Collisions",
            "focus": "Elastic collisions: both momentum and kinetic energy are conserved",
            "minutes": 55,
            "understandings": [
              "Elastic collisions: both momentum and kinetic energy are conserved",
              "Inelastic collisions: momentum is conserved, kinetic energy is NOT (some → heat, sound, deformation)",
              "Perfectly inelastic: objects stick together — maximum KE loss",
              "Setting up simultaneous equations from conservation of momentum AND conservation of KE",
              "Shortcut for elastic collisions: relative speed of approach = relative speed of separation"
            ],
            "teachingStrategy": "<p><strong>Opener (10 min):</strong> Newton's cradle. Pull back 1 ball → 1 swings out. Pull back 2 → 2 swing out. Pull back 3 → 3 swing out. Ask: \"Why doesn't pulling back 1 ball make 1 ball fly out at DOUBLE the speed? Momentum would still be conserved!\" Let students struggle with this. The answer: BOTH momentum AND kinetic energy must be conserved. If 1 ball flew out at 2v, KE would be ½m(2v)² = 2mv², but the original KE was only ½mv². Conservation of KE forbids it. This creates the intellectual NEED for the energy equation.</p><p><strong>Lab (20 min):</strong> COLLISION ANALYSIS — Dynamics carts on a track with photogates or motion sensors. Three experiments: (a) Elastic collision — spring bumpers: record v₁ and v₂ before and after, calculate total p and total KE before and after. Are they conserved? (b) Inelastic collision — velcro bumpers (carts stick): same measurements. p conserved? KE conserved? Calculate % KE lost. (c) Explosion — compressed spring released between two carts initially at rest: measure final velocities. p_total should ≈ 0. KE increased from where? (Elastic potential energy of the spring.)</p><p><strong>Theory (15 min):</strong> Formalise the algebra for a 1D elastic collision between two bodies: Set up (1) m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ and (2) ½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂². Show that these can be combined to give the shortcut: u₁ − u₂ = −(v₁ − v₂), i.e., relative approach speed = relative separation speed. This makes problem-solving MUCH faster than solving the full simultaneous equations every time. Work through 2 examples.</p><p><strong>Classification practice (10 min):</strong> Show 5 short video clips: billiards shot, car crash, firework, ball caught by hand, neutron hitting uranium nucleus. For each, students classify as elastic, inelastic, or explosion AND justify using energy arguments.</p>",
            "engagementHook": {
              "title": "NEWTON'S CRADLE MYSTERY + BILLIARDS TOURNAMENT",
              "content": "After the cradle analysis, set up a mini billiards/snooker tournament using marbles on a flat surface. Students must PREDICT the outcome of each shot using conservation of momentum, then verify by measurement. Show a professional trick shot compilation and identify the physics."
            },
            "nos": {
              "tags": [
                "Models"
              ],
              "description": "No macroscopic collision is perfectly elastic; it's an idealisation. Theories — Particle physicists use conservation of p and KE to detect invisible particles. Pauli predicted the neutrino in 1930 because energy and momentum appeared to be missing in beta decay. The neutrino wasn't detected until 1956. Conservation laws as tools for DISCOVERY."
            },
            "atl": [
              "Thinking skills",
              "Research skills",
              "Self-management skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Inquirer",
              "Knowledgeable"
            ],
            "ao": [
              "AO1 — Define elastic/inelastic/perfectly inelastic",
              "AO2 — Apply conservation of p and KE simultaneously",
              "AO3 — Analyse collision data to classify and calculate energy loss"
            ],
            "resources": "Newton's cradle, dynamics carts (spring + velcro bumpers), photogates or motion sensors, data logger, marbles, flat surface, video clips",
            "formative": "Lab data table: total p and total KE before and after for each collision type, % KE lost, classification with justification."
          },
          {
            "num": 15,
            "title": "Explosions & Energy Analysis",
            "focus": "Explosions: total momentum before = 0, so total momentum after = 0",
            "minutes": 45,
            "understandings": [
              "Explosions: total momentum before = 0, so total momentum after = 0",
              "KE increases — energy comes from internal (chemical, elastic, nuclear) energy",
              "Energy analysis: calculate KE before and after to classify any collision/explosion and find energy transferred"
            ],
            "teachingStrategy": "<p><strong>Ice skater analysis (10 min):</strong> Two ice skaters of different masses (60 kg and 90 kg) push off from rest. \"If they start at rest, total momentum = 0. After pushing, total momentum still = 0. So if the 60 kg skater moves right at 3 m/s, what is the 90 kg skater's velocity?\" (2 m/s left.) Calculate KE of each: 60 kg skater → 270 J, 90 kg skater → 180 J. Total KE = 450 J. \"Where did 450 J come from if they started at rest?\" (Internal energy — chemical energy in muscles.)</p><p><strong>Cannon & recoil problems (10 min):</strong> A 500 kg cannon fires a 5 kg ball at 100 m/s. Find the recoil velocity (−1 m/s). Calculate KE of ball (25,000 J) and cannon (250 J). \"The ball gets 99% of the KE. Why?\" (Same momentum magnitude, but KE = p²/2m, so the lighter object gets more KE.)</p><p><strong>Energy analysis framework (15 min):</strong> Teach a systematic approach for ANY collision/explosion problem: (1) Calculate total p before and after — is it conserved? (Should be.) (2) Calculate total KE before and after. (3) Compare: KE_after = KE_before → elastic. KE_after < KE_before → inelastic (find where the KE went). KE_after > KE_before → explosion (find where the KE came from). Work through 3 examples using this framework.</p><p><strong>Practice (10 min):</strong> Mixed problem set — students must first classify, then solve.</p>",
            "engagementHook": {
              "title": "CANNON DEMO",
              "content": "Use a spring — loaded dynamics cart against a wall: the \"cannonball\" (small cart) flies off while the \"cannon\" (heavy cart) barely moves. Students calculate both velocities and verify that total momentum = 0. Then calculate KE of each and see the energy asymmetry."
            },
            "nos": {
              "tags": [
                "Theories guide observation"
              ],
              "description": "Missing energy in beta decay led to the neutrino prediction. Missing momentum in particle collisions at CERN has been used to search for dark matter candidates. Conservation laws are not just calculation tools — they're discovery tools."
            },
            "atl": [
              "Thinking skills",
              "Self-management skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Knowledgeable"
            ],
            "ao": [
              "AO2 — Apply conservation to explosions",
              "AO3 — Evaluate energy transfer and classify interactions"
            ],
            "resources": "Spring-loaded dynamics cart, wall/barrier, problem sets, calculators",
            "formative": "\"A 10 g bullet at 300 m/s hits a 2 kg block and passes through, emerging at 100 m/s. (a) Find the block's velocity. (b) Is this elastic, inelastic, or an explosion? (c) Calculate the energy transferred to heat/deformation.\""
          }
        ]
      },
      {
        "name": "Circular Motion",
        "color": "accent4",
        "totalMinutes": 100,
        "subtopics": [
          {
            "num": 16,
            "title": "Centripetal Acceleration & Force",
            "focus": "Bodies moving in a circle at constant speed experience centripetal acceleration: a = v²/r = ω²r = 4π²r/T²",
            "minutes": 55,
            "understandings": [
              "Bodies moving in a circle at constant speed experience centripetal acceleration: a = v²/r = ω²r = 4π²r/T²",
              "Centripetal force acts perpendicular to velocity — changes direction, not speed",
              "Centripetal force is NOT a new force — it is whatever real force (tension, gravity, friction, normal) acts toward the centre"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Swing a bucket of water in a vertical circle over your head. The water doesn't fall out at the top! \"What force keeps the water in? Is there a force pushing the water outward?\" Tackle the centrifugal force misconception immediately.</p><p><strong>Geometric derivation (15 min):</strong> Draw the velocity vector at two points on a circular path (separated by a small angle Δθ). Move both vectors to a common origin. The change in velocity Δv points toward the centre. As Δθ → 0, the magnitude of acceleration = v²/r. This is a beautiful derivation — walk through it slowly, let students draw along. Key message: constant speed ≠ constant velocity (direction changes), so there IS acceleration.</p><p><strong>Centripetal force identification (10 min):</strong> The centripetal force is not a new force. Work through examples: (a) ball on a string in horizontal circle — tension provides F_c. (b) Car on a flat curve — friction provides F_c. (c) Satellite in orbit — gravity provides F_c. (d) Clothes in a washing machine — normal force provides F_c. For each, draw the FBD and identify which real force acts toward the centre.</p><p><strong>Conical pendulum demo (15 min):</strong> Swing a mass on a string in a horizontal circle. Students measure: radius (r), angle of string (θ), period (T). From the FBD: T·sinθ = mv²/r (centripetal direction) and T·cosθ = mg (vertical equilibrium). Divide: tanθ = v²/(rg). Calculate v from measurements, compare with v = 2πr/T.</p><p><strong>Practice (10 min):</strong> 3 problems: (a) find centripetal acceleration given v and r, (b) find the tension in a string for horizontal circular motion, (c) minimum speed at the top of a vertical loop.</p>",
            "engagementHook": {
              "title": "BUCKET OF WATER",
              "content": "Students genuinely fear getting splashed, which guarantees 100% attention. After the demo, ask: \"At the top of the circle, the water is upside down. Draw the FBD. What provides the centripetal force?\" (Gravity + normal force from the bucket, both pointing down toward the centre.) \"What's the minimum speed so the water doesn't fall?\" (When N = 0: mg = mv²/r, so v = √(gr).) Calculate it for your bucket."
            },
            "nos": {
              "tags": [
                "Models"
              ],
              "description": "\"Centrifugal force\" is a valid concept in a rotating (non — inertial) reference frame, but NOT in the inertial frame we use in IB physics. This is a nuanced discussion about frames of reference and the role of models. Falsification — students can test whether centripetal force predictions match observations (conical pendulum)."
            },
            "atl": [
              "Thinking skills",
              "Communication skills",
              "Social skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Risk-taker",
              "Communicator"
            ],
            "ao": [
              "AO1 — Define centripetal acceleration and centripetal force",
              "AO2 — Apply a = v²/r and F_c = mv²/r",
              "AO3 — Identify which real force provides the centripetal force in each scenario"
            ],
            "resources": "Bucket of water, string + mass (conical pendulum), stopwatch, ruler, protractor, whiteboard",
            "formative": "\"A 0.5 kg ball on a 1.2 m string is swung in a horizontal circle, making 2 revolutions per second. (a) Find ω, v, and the centripetal acceleration. (b) Draw the FBD and find the tension. (c) Why does the string make an angle with the horizontal rather than being perfectly horizontal?\""
          },
          {
            "num": 17,
            "title": "Angular Velocity & Applications",
            "focus": "Angular velocity ω related to linear speed: v = 2πr/T = ωr",
            "minutes": 45,
            "understandings": [
              "Angular velocity ω related to linear speed: v = 2πr/T = ωr",
              "Applications: car on flat curve (friction), banked curve (normal force component), vertical loop (minimum speed at top), satellite orbit (gravity as centripetal force)"
            ],
            "teachingStrategy": "<p><strong>Quick review (5 min):</strong> Recap ω = 2π/T, v = ωr. \"Two students sit on a merry-go-round, one near the centre, one at the edge. Who has greater ω? Who has greater v?\" (Same ω, but the one at the edge has greater v because v = ωr.)</p><p><strong>Problem-solving carousel (25 min):</strong> Set up 4 stations around the room. Each station has a different circular motion scenario with a problem to solve. Groups of 3–4 rotate every 6 minutes:</p><p><strong>Station 1:</strong> CAR ON A FLAT CURVE — \"A 1200 kg car takes a curve of radius 50 m at 20 m/s. What minimum coefficient of friction is needed?\" (Friction = centripetal force: μmg = mv²/r, so μ = v²/(rg) = 0.82.)</p><p><strong>Station 2:</strong> BANKED CURVE — \"The same curve is banked at 25°. At what speed can a car take the curve with zero friction?\" (Component of normal force provides centripetal force: tan25° = v²/(rg), v = 15.1 m/s.)</p><p><strong>Station 3:</strong> VERTICAL LOOP — \"A roller coaster car enters a loop of radius 10 m. What minimum speed at the top ensures the car stays on the track?\" (At minimum speed, N = 0: mg = mv²/r, v = √(gr) = 9.9 m/s.)</p><p><strong>Station 4:</strong> SATELLITE ORBIT — \"A satellite orbits Earth at altitude 400 km. Find its orbital speed and period.\" (GMm/r² = mv²/r, v = √(GM/r). Preview of D.1.)</p><p><strong>Synthesis & connections (15 min):</strong> (a) \"Why do you feel pushed outward on a roundabout?\" — explain using inertial vs non-inertial frames. (b) ROLLER COASTER DESIGN CHALLENGE: give each group a printed loop diagram with a given drop height. They must calculate: Is the speed at the bottom sufficient to make it around the loop? (Use energy conservation from A.3 to find v at bottom, then check if v at top > √(gr).) This links A.2 (circular motion) with A.3 (energy conservation). (c) Preview connections to D.1 (planetary orbits use circular motion + gravitation) and D.3 (charged particles in magnetic fields move in circles: qvB = mv²/r).</p>",
            "engagementHook": {
              "title": "PROBLEM CAROUSEL FORMAT",
              "content": "Moving around the room keeps energy high. The roller coaster design challenge connects circular motion to energy (A.3 link) and lets students play engineer. Bonus: show a Formula 1 banked turn and ask students to calculate the banking angle from published speed and radius data."
            },
            "nos": {
              "tags": [
                "Global impact"
              ],
              "description": "Satellite orbits, GPS technology, space station design, and particle accelerators all depend on circular motion physics. International collaboration in space (ISS partners: NASA, ESA, JAXA, Roscosmos, CSA)."
            },
            "atl": [
              "Social skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Knowledgeable",
              "Thinker",
              "Communicator"
            ],
            "ao": [
              "AO2 — Apply v = ωr and circular motion equations to diverse scenarios",
              "AO3 — Analyse FBDs to identify centripetal force in each application"
            ],
            "resources": "Printed station cards with problems, roller coaster loop diagrams, calculators, F1 corner data",
            "formative": "(a) Completed solutions from all 4 stations. (b) Exit ticket: \"A highway curve has radius 200 m. It is banked at 12°. Calculate the speed at which no friction is needed. If a car travels at 30 m/s instead, does it slide up the bank or down? Why?\""
          }
        ]
      }
    ],
    "linkingQuestions": [
      {
        "topic": "A.1 Kinematics",
        "question": "How do the equations of motion connect to Newton's 2nd law? Use kinematic graphs to derive force-time relationships."
      },
      {
        "topic": "A.3 Work, Energy & Power",
        "question": "How does the work-energy theorem relate to F = ma? When is energy analysis more efficient than force analysis?"
      },
      {
        "topic": "A.4 Rigid Body Mechanics (HL)",
        "question": "How does torque extend the concept of force to rotational systems? How is angular momentum analogous to linear momentum?"
      },
      {
        "topic": "B.1 Thermal Energy",
        "question": "How does viscous drag connect to thermal conductivity? How does Newton's law of cooling relate to forces at the molecular level?"
      },
      {
        "topic": "B.5 Circuits",
        "question": "How is Ohm's law (V = IR) analogous to F = ma? How does electrical resistance mirror mechanical friction?"
      },
      {
        "topic": "D.1 Gravitational Fields",
        "question": "How does F_g = mg connect to Newton's law of gravitation F = GMm/r²? How does circular motion apply to planetary orbits?"
      },
      {
        "topic": "D.3 Motion in EM Fields",
        "question": "How does the magnetic force on a charged particle produce circular motion? Compare F = qvB with F = mv²/r."
      },
      {
        "topic": "E.1 Structure of the Atom",
        "question": "How did Rutherford use momentum conservation to deduce nuclear structure from alpha particle scattering?"
      }
    ]
  },
  "A3": {
    "title": "Work, Energy and Power",
    "code": "A.3",
    "theme": "A",
    "level": "SL + HL",
    "recommendedHours": 8,
    "recommendedMinutes": 480,
    "guidingQuestions": [
      "How are concepts of work, energy and power used to predict changes within a system?",
      "How can a consideration of energetics be used as a method to solve problems in kinematics?",
      "How can transfer of energy be used to do work?"
    ],
    "groups": [
      {
        "name": "Work & Energy Concepts",
        "color": "accent",
        "totalMinutes": 135,
        "subtopics": [
          {
            "num": 1,
            "title": "The Principle of Conservation of Energy",
            "focus": "Energy cannot be created or destroyed, only transferred or transformed",
            "minutes": 40,
            "understandings": [
              "The principle of the conservation of energy",
              "Work done by a force is equivalent to a transfer of energy",
              "Energy forms: kinetic, gravitational potential, elastic potential, thermal, chemical, electrical, nuclear, radiant",
              "Distinguish energy transfers (between objects) from energy transformations (between forms within a system)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show a Rube Goldberg machine video. Students count how many times energy changes form: gravitational → kinetic → elastic → kinetic → thermal. This previews the entire topic.</p><p><strong>Concept mapping (15 min):</strong> Students brainstorm all energy forms on the board. Categorise: stored (potential) vs in motion (kinetic). Key insight: GPE, elastic PE, and chemical energy are all forms of potential energy — energy stored due to position or configuration.</p><p><strong>Guided discussion (10 min):</strong> \"Where does the energy go?\" scenarios: (a) ball bounces lower each time — KE → thermal + sound, (b) phone charges — electrical → chemical, (c) photosynthesis — radiant → chemical. For each: total energy in = total energy out.</p><p><strong>Practice (10 min):</strong> Students trace complete energy chains for 5 real-world systems and verify conservation at each step.</p>",
            "engagementHook": {
              "title": "THE BOUNCING BALL AUDIT",
              "content": "Drop a ball from a measured height. Measure the bounce height. Calculate the percentage of energy \"lost.\" Ask: \"Lost to WHERE?\" Students touch the ball and the floor — both slightly warmer. Energy wasn't destroyed; it was transferred to thermal energy. This 3-minute demo makes conservation tangible and anchors the entire unit."
            },
            "nos": {
              "tags": ["Theories", "Patterns"],
              "description": "Conservation of energy has never been violated in any experiment. Unlike Newton's laws (which break down at relativistic speeds), it holds universally. Noether's theorem connects it to time-translation symmetry — a deep link between physics and mathematics."
            },
            "atl": ["Thinking skills", "Communication skills"],
            "learnerProfile": ["Knowledgeable", "Thinker"],
            "ao": [
              "AO1 — State the conservation of energy principle",
              "AO2 — Identify energy forms and trace transformations"
            ],
            "resources": "Bouncing balls (various types), metre ruler, Rube Goldberg machine video, whiteboard for concept map",
            "formative": "Trace the full energy chain for a hydroelectric dam: sun → evaporation → rain → GPE of water → KE of falling water → KE of turbine → electrical → thermal/light in homes. Verify conservation at each step."
          },
          {
            "num": 2,
            "title": "Work Done — W = Fs cosθ & the Work-Energy Theorem",
            "focus": "Work by a force, work by the resultant force, and the work-energy theorem",
            "minutes": 60,
            "understandings": [
              "Work W done on a body by a constant force depends on the component of the force along the line of displacement: W = Fs cosθ",
              "θ = 0°: W = Fs (force parallel to displacement)",
              "θ = 90°: W = 0 (force perpendicular — centripetal force does no work)",
              "θ > 90°: W is negative (force opposes motion — e.g., friction)",
              "Work done by the resultant force on a system is equal to the change in the energy of the system (work-energy theorem)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two students carry identical heavy bags. One walks horizontally; the other climbs stairs. \"Who did more work on the bag?\" The carrying force (upward) is perpendicular to horizontal displacement — W = Fs cos90° = 0. Only climbing involves work against gravity.</p><p><strong>Direct instruction (15 min):</strong> Define W = Fs cosθ. Walk through three key cases with diagrams: θ = 0 (pushing a box), θ = 90° (carrying horizontally), θ between 0–90 (pulling a sled). Explicitly state: work by the resultant force = change in total energy. If W_net > 0, system gains energy. If W_net < 0, it loses energy.</p><p><strong>Worked examples (15 min):</strong> (1) Pulling a sled: 100 N at 30° over 20 m → W = 1732 J. (2) Pushing a crate 5 m with 200 N, friction 150 N → net work = 250 J → becomes KE. (3) Satellite in orbit: force always perpendicular → W = 0, speed constant.</p><p><strong>Lab (15 min):</strong> WORK AT ANGLES — Pull a block with a spring scale at 0°, 30°, 45°, 60°. Calculate W = Fs cosθ for each. Plot W vs θ.</p><p><strong>Practice (10 min):</strong> Problems including negative work, zero work, and applying the work-energy theorem.</p>",
            "engagementHook": {
              "title": "THE CARRYING PARADOX",
              "content": "\"You carry a 20 kg suitcase across a flat airport for 500 metres. You're exhausted. How much work did you do on the suitcase?\" Answer: zero. The carrying force is vertical; displacement is horizontal; cos90° = 0. \"Then why are you tired?\" Your muscles do internal work — chemical energy converts to thermal energy inside your body. The distinction between physics-work and everyday-work is one of the most powerful conceptual moments in the course."
            },
            "nos": {
              "tags": ["Models", "Measurements"],
              "description": "The physics definition of \"work\" is narrower than everyday language. Technical terms are redefined to have exact, quantifiable meanings. W = F·s is a mathematical model capturing only the component of force along displacement."
            },
            "atl": ["Thinking skills", "Research skills"],
            "learnerProfile": ["Thinker", "Inquirer"],
            "ao": [
              "AO1 — Define work done",
              "AO2 — Apply W = Fs cosθ including negative and zero work; apply the work-energy theorem",
              "AO3 — Analyse whether work is done and determine its sign"
            ],
            "resources": "Spring scales, wooden blocks, protractors, metre rulers, various surfaces",
            "formative": "\"A 50 N force at 60° drags a box 10 m. Friction = 15 N. (a) Work by applied force. (b) Work by friction. (c) Net work. (d) Use the work-energy theorem: does the box speed up or slow down? By how much does its KE change?\""
          },
          {
            "num": 3,
            "title": "Sankey Diagrams & Energy Transfers",
            "focus": "Visual representation of energy flow, useful output, and waste",
            "minutes": 35,
            "understandings": [
              "Energy transfers can be represented on a Sankey diagram",
              "Arrow widths are proportional to energy transferred",
              "Input energy (left) = sum of all output energies (right) — conservation of energy visualised",
              "Useful energy flows straight ahead; wasted energy branches downward"
            ],
            "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Show a Sankey diagram for a light bulb: 100 J electrical → 5 J light + 95 J thermal (incandescent) vs 100 J → 25 J light + 75 J thermal (LED). Rules: input arrow on left, useful output straight ahead, waste branches down. Widths MUST be proportional.</p><p><strong>Guided practice (15 min):</strong> Students construct Sankey diagrams for: (a) car engine — 100 J chemical → 25 J KE + 60 J thermal + 10 J sound + 5 J friction, (b) coal power station with cascade losses, (c) human body running — 25% KE + 75% thermal. Use graph paper.</p><p><strong>Analysis task (10 min):</strong> 3 pre-drawn Sankey diagrams. Students: read off efficiency, identify largest waste, suggest one improvement.</p>",
            "engagementHook": {
              "title": "LIGHT BULB SHOWDOWN",
              "content": "Bring an incandescent and an LED bulb of the same brightness. Turn both on for 2 minutes. Touch each (incandescent through cloth). The incandescent is scorching; the LED barely warm. \"Both make the same light. Where is the extra energy going?\" Draw side-by-side Sankey diagrams. The fat \"waste heat\" arrow for incandescent vs the thin one for LED makes efficiency visceral."
            },
            "nos": {
              "tags": ["Models", "Science as a shared endeavour"],
              "description": "Sankey diagrams were created by Captain Matthew Sankey in 1898 for steam engines. Now used universally — from classrooms to government energy policy. A shared convention that facilitates unambiguous communication."
            },
            "atl": ["Communication skills", "Thinking skills"],
            "learnerProfile": ["Communicator", "Knowledgeable"],
            "ao": [
              "AO1 — Sketch Sankey diagrams with proportional arrows",
              "AO3 — Analyse Sankey diagrams to determine efficiency and identify waste"
            ],
            "resources": "Incandescent + LED bulbs, graph paper, printed Sankey diagrams for analysis, coloured pens",
            "formative": "\"A coal power station: 1000 MJ input. Boiler losses: 100 MJ. Turbine losses: 550 MJ. Transmission losses: 35 MJ. Draw the complete Sankey diagram and calculate the overall efficiency.\""
          }
        ]
      },
      {
        "name": "Mechanical Energy",
        "color": "accent2",
        "totalMinutes": 195,
        "subtopics": [
          {
            "num": 1,
            "title": "Kinetic Energy — Eₖ = ½mv² = p²/2m",
            "focus": "Derivation, the v² relationship, and the momentum form",
            "minutes": 50,
            "understandings": [
              "The kinetic energy of translational motion: Eₖ = ½mv²",
              "Alternative form using momentum: Eₖ = p²/2m (derived from p = mv)",
              "Derive Eₖ = ½mv² from W = Fs and the equations of motion",
              "The v² relationship: doubling speed quadruples KE"
            ],
            "teachingStrategy": "<p><strong>Derivation (10 min):</strong> From first principles: F acts on mass m over distance s from rest. W = Fs = mas. From v² = u² + 2as: s = v²/2a. So W = ma × v²/2a = ½mv². Then derive p form: v = p/m → Eₖ = ½m(p/m)² = p²/2m. The p²/2m form is useful in collision problems where momentum is known.</p><p><strong>Worked examples (10 min):</strong> (1) 70 kg sprinter at 10 m/s → KE = 3500 J. Doubling speed → 4× KE. (2) Bullet with p = 8 kg·m/s, m = 0.02 kg → Eₖ = p²/2m = 1600 J. (3) 1500 kg car at 30 m/s — to what height could it coast? h = v²/2g = 45.9 m.</p><p><strong>Lab (20 min):</strong> THE v² RELATIONSHIP — Roll a cart down ramps of different heights. Measure speed at bottom. Plot v² vs h. Linear graph → v² ∝ h. Gradient = 2g — extract experimental g.</p><p><strong>Practice (10 min):</strong> Problems using both Eₖ forms. Include the \"doubling speed\" trap question.</p>",
            "engagementHook": {
              "title": "SPEED KILLS — THE v² SURPRISE",
              "content": "\"A car at 60 km/h has a certain KE. How much more KE at 120 km/h?\" Students guess double. Answer: FOUR times. Show real stopping distance data at 30, 50, 70 mph — the gap between 50 and 70 is shockingly large. Braking distance scales with v², not v. Physics saves lives."
            },
            "nos": {
              "tags": ["Theories", "Measurements"],
              "description": "The work-energy theorem connects forces (Newton's laws) with energy — two frameworks describing the same physics from different angles. The p²/2m form bridges A.2 and A.3, showing how momentum and energy are related."
            },
            "atl": ["Thinking skills", "Research skills"],
            "learnerProfile": ["Thinker", "Caring"],
            "ao": [
              "AO1 — Define KE; derive Eₖ = ½mv²; state Eₖ = p²/2m",
              "AO2 — Calculate KE using both forms",
              "AO3 — Analyse the v² relationship and its consequences for braking distance"
            ],
            "resources": "Ramp, dynamics cart, photogates or phone speed app, stopping distance data table",
            "formative": "Lab: v² vs h graph — find g from gradient. Exit ticket: \"Car A at 20 m/s, Car B at 40 m/s, same mass. How many times longer is B's braking distance?\" AND \"A bullet (m = 10 g, p = 6 kg·m/s) — find its KE using p²/2m.\""
          },
          {
            "num": 2,
            "title": "Gravitational PE & Elastic PE",
            "focus": "ΔEₚ = mgΔh and E_H = ½k(Δx)²",
            "minutes": 50,
            "understandings": [
              "Gravitational potential energy close to the surface of the Earth: ΔEₚ = mgΔh",
              "Δh is the change in height relative to a chosen reference level — GPE is relative, not absolute",
              "This equation only applies close to the Earth's surface where g is approximately constant",
              "Elastic potential energy stored in a spring: E_H = ½k(Δx)²",
              "Derived from the area under the F-x graph (Hooke's law: F = kΔx → area = ½k(Δx)²)",
              "Energy stored equals work done to stretch or compress the spring"
            ],
            "teachingStrategy": "<p><strong>GPE section (20 min):</strong> Lifting mass m by Δh against gravity: W = mgΔh = ΔEₚ. Emphasise the Δ: GPE depends on the CHANGE in height. Reference level is your choice. Worked example: 2 kg ball lifted from 5 m table to 8 m → ΔEₚ = 58.8 J regardless of reference. Discuss: \"Why only near Earth's surface?\" g varies with altitude. Far away: Eₚ = −GMm/r (preview D.1).</p><p><strong>Elastic PE section (15 min):</strong> Recall Hooke's law from A.2. Area under F vs Δx graph = ½k(Δx)². Doubling Δx quadruples energy. Worked example: spring k = 200 N/m, compressed 0.05 m → E_H = 0.25 J.</p><p><strong>Lab (10 min):</strong> SPRING LAUNCHER — Compress spring by measured Δx. Launch ball vertically. Measure max height. Verify: ½k(Δx)² = mgΔh.</p><p><strong>Practice (5 min):</strong> Mixed GPE and elastic PE calculations.</p>",
            "engagementHook": {
              "title": "SPRING LAUNCHER COMPETITION",
              "content": "Each group compresses a spring by a different amount and PREDICTS the launch height BEFORE releasing, using ½k(Δx)² = mgΔh. The group whose prediction is closest to the measured height wins. Energy conservation becomes a testable, competitive prediction."
            },
            "nos": {
              "tags": ["Models", "Measurements"],
              "description": "The area-under-the-graph method connects algebra and geometry to physics. It recurs: work = area under F-s graph, impulse = area under F-t graph. A general transferable technique."
            },
            "atl": ["Thinking skills", "Research skills"],
            "learnerProfile": ["Inquirer", "Thinker"],
            "ao": [
              "AO1 — State ΔEₚ = mgΔh and E_H = ½k(Δx)²",
              "AO2 — Calculate GPE and elastic PE",
              "AO3 — Analyse spring-launch data for energy conservation"
            ],
            "resources": "Springs (known k from A.2 lab), small balls, rulers, clamp stands, metre sticks",
            "formative": "Spring launcher prediction vs measurement. \"A spring (k = 500 N/m) compressed 8 cm launches a 50 g ball. Find: (a) E_H stored, (b) launch speed, (c) max height.\""
          },
          {
            "num": 3,
            "title": "Conservation of Mechanical Energy",
            "focus": "Eₖ + Eₚ(grav) + E_H = constant when no non-conservative forces act",
            "minutes": 55,
            "understandings": [
              "Mechanical energy is the sum of kinetic energy, gravitational potential energy, and elastic potential energy",
              "In the absence of frictional, resistive forces, the total mechanical energy of a system is conserved",
              "If mechanical energy is conserved, work is the amount of energy transformed between different forms of mechanical energy: Eₖ = ½mv², ΔEₚ = mgΔh, E_H = ½k(Δx)²",
              "Solve problems using Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂",
              "Energy bar charts as a visual tool for tracking energy at each point"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Pendulum: at highest point, all GPE. At lowest, all KE. BOWLING BALL PENDULUM — hold a heavy ball against a student's nose, release, stand still. It swings back and stops just before their nose. Conservation guarantees it.</p><p><strong>Direct instruction (15 min):</strong> Formalise: E_mech = ½mv² + mgΔh + ½k(Δx)² = constant. Method: (1) choose reference level, (2) total energy at point 1, (3) total energy at point 2, (4) set equal, (5) solve. Worked examples: ball dropped 5 m; roller coaster top to bottom.</p><p><strong>Energy bar charts (10 min):</strong> Stacked bars showing KE, GPE, elastic PE at each point. Total stays constant (no friction) or decreases (with friction — missing bar is thermal).</p><p><strong>Problem-solving (20 min):</strong> (a) Frictionless ramp, (b) pendulum from angle, (c) spring launches ball up ramp, (d) roller coaster loop — minimum height (links A.2 circular motion), (e) with friction: μ = 0.2 on ramp.</p><p><strong>Wrap-up (5 min):</strong> \"Energy methods are often EASIER than force methods — you only need start and end states, not the path.\"</p>",
            "engagementHook": {
              "title": "THE BOWLING BALL PENDULUM",
              "content": "Suspend a heavy ball from the ceiling. A student holds it against their nose, releases it, and stands perfectly still. The ball swings away and returns — stopping just before their nose. Conservation guarantees it can't return past the release point. The emotional trust in physics makes this unforgettable. Follow with: \"What minimum starting height clears a loop of radius R?\" (h_min = 2.5R.)"
            },
            "nos": {
              "tags": ["Theories", "Models"],
              "description": "Energy conservation provides an alternative to Newton's laws for mechanics. The two are equivalent but conceptually different. Choosing the right tool is a scientific skill. Energy methods are scalar, avoiding vector complexity."
            },
            "atl": ["Thinking skills", "Self-management skills"],
            "learnerProfile": ["Thinker", "Risk-taker"],
            "ao": [
              "AO2 — Apply conservation of mechanical energy to solve problems",
              "AO3 — Analyse systems with and without friction using energy bar charts"
            ],
            "resources": "Bowling ball or heavy pendulum, ceiling mount, ramp + dynamics cart, printed roller coaster diagrams",
            "formative": "\"A 2 kg ball released from rest on a frictionless track with a loop of radius 0.5 m. (a) Minimum starting height? (b) Draw energy bar charts at start, bottom, top of loop. (c) If 10% energy lost to friction, what height now needed?\""
          },
          {
            "num": 4,
            "title": "Work by Non-Conservative Forces & Complex Problems",
            "focus": "When mechanical energy is NOT conserved — the IB guidance in practice",
            "minutes": 40,
            "understandings": [
              "IB Guidance: The change in total mechanical energy should be interpreted in terms of the work done by any non-conservative force",
              "ΔE_mech = W_non-conservative (friction, applied forces, drag)",
              "When friction acts: E_mech,final = E_mech,initial − W_friction",
              "Combining energy, momentum (A.2), and force methods in multi-step problems",
              "Decision framework: when to use force vs energy vs momentum methods"
            ],
            "teachingStrategy": "<p><strong>Key concept (10 min):</strong> When friction (non-conservative) acts, mechanical energy decreases. \"Lost\" energy = work by friction = F_f × d. Worked example: 10 kg box slides 8 m down 30° ramp, μ = 0.3 → E_initial = 392 J, W_friction = 203.6 J, E_final = 188.4 J → v = 6.14 m/s.</p><p><strong>Decision framework (5 min):</strong> When to use which? (a) Force: need acceleration. (b) Energy: know start/end, don't care about path. (c) Momentum: collisions. Many IB problems need two or three in sequence.</p><p><strong>Worked example (10 min):</strong> Spring launches ball off table: (a) launch speed (energy), (b) time to ground (kinematics), (c) range (kinematics), (d) impact speed (energy). Identify method at each step.</p><p><strong>Group challenge (15 min):</strong> \"A 50 g ball slides down a frictionless ramp from h = 2 m, hits a 150 g ball (perfectly inelastic), combined slides up rough 30° incline (μ = 0.3). How far up?\" Steps: energy → momentum → energy with friction. Groups present one step each.</p>",
            "engagementHook": {
              "title": "GLOWING F1 BRAKES & PROBLEM TOURNAMENT",
              "content": "Show Formula 1 brake discs glowing red: ½ × 800 × 83² ≈ 2.8 MJ of KE → thermal in ~2 seconds. \"Enough to boil 8 litres of water.\" Then run a problem-solving tournament: groups race to solve multi-step challenge cards. Fastest correct solution wins."
            },
            "nos": {
              "tags": ["Models", "Patterns", "Global impact"],
              "description": "Non-conservative forces break the simple conservation picture. Recognising when a model applies and when it doesn't is core scientific judgement. Regenerative braking recaptures \"lost\" energy — physics driving innovation."
            },
            "atl": ["Thinking skills", "Social skills", "Self-management skills"],
            "learnerProfile": ["Thinker", "Communicator"],
            "ao": [
              "AO2 — Apply energy methods with friction; combine with momentum and kinematics",
              "AO3 — Evaluate which method to use; interpret energy changes via non-conservative forces"
            ],
            "resources": "F1 braking photos/video, whiteboards for group work, printed challenge cards",
            "formative": "\"A 1200 kg car brakes from 25 m/s to rest over 40 m. (a) KE lost. (b) Average braking force. (c) If regenerative braking recovers 30%, energy recovered?\""
          }
        ]
      },
      {
        "name": "Power, Efficiency & Energy Density",
        "color": "accent3",
        "totalMinutes": 150,
        "subtopics": [
          {
            "num": 1,
            "title": "Power — P = ΔW/Δt = Fv",
            "focus": "Rate of work done and rate of energy transfer",
            "minutes": 50,
            "understandings": [
              "Power developed P is the rate of work done, or the rate of energy transfer: P = ΔW/Δt",
              "Derive P = Fv from P = ΔW/Δt = FΔs/Δt = Fv",
              "P = Fv is useful for constant-velocity motion against resistive forces",
              "Units: watts (W) = J/s"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two students climb to the 3rd floor. One runs, one walks. Same work. But who is more powerful? Power = how FAST you transfer energy.</p><p><strong>Lab (20 min):</strong> MEASURE YOUR POWER — Run up stairs. Measure mass, height, time. Calculate W = mgΔh, P = W/t. Compare: typical human 200–500 W, Usain Bolt ~2600 W, horse ~750 W (1 hp), car ~100 kW.</p><p><strong>Direct instruction (10 min):</strong> Derive P = Fv. Application: car at 150 kW max speed, driving force = drag → P = F_drag × v_max.</p><p><strong>Practice (15 min):</strong> (1) Student climbs 3 m in 4 s. (2) Crane lifts 2000 kg by 20 m in 30 s. (3) Car at 80 kW and 40 m/s — drag? (4) Power to accelerate 1200 kg to 30 m/s in 8 s.</p>",
            "engagementHook": {
              "title": "STAIR-CLIMB POWER CHALLENGE",
              "content": "Students race up stairs and calculate their own power output. Post results on a leaderboard. Compare: light bulb (60 W), horse (750 W), Usain Bolt (2600 W), car (100 kW), jet engine (50 MW). \"You are roughly as powerful as a bright light bulb.\" Physical exertion makes the watt a unit you can feel."
            },
            "nos": {
              "tags": ["Measurements", "Patterns"],
              "description": "James Watt defined \"horsepower\" to market his steam engines against horses — a brilliant use of comparison. The watt (named after him) became the SI unit. Clear, universal units facilitate global communication."
            },
            "atl": ["Research skills", "Self-management skills"],
            "learnerProfile": ["Risk-taker", "Knowledgeable"],
            "ao": [
              "AO1 — Define power; derive P = Fv",
              "AO2 — Apply P = ΔW/Δt and P = Fv"
            ],
            "resources": "Bathroom scale, metre stick, stopwatch, staircase, power comparison chart",
            "formative": "Stair-climb calculation. Exit ticket: \"A lift motor raises a 600 kg cabin 30 m in 20 s. (a) Power output. (b) If 80% efficient, electrical power input needed?\""
          },
          {
            "num": 2,
            "title": "Efficiency",
            "focus": "η = useful work out / total work in = useful power out / total power in",
            "minutes": 45,
            "understandings": [
              "Efficiency η in terms of energy transfer or power: η = useful work out / total work in = useful power out / total power in",
              "Dimensionless; expressed as fraction or percentage",
              "η < 1 (< 100%) for all real systems — some energy always becomes thermal",
              "Combined efficiency: η_total = η₁ × η₂ × η₃ …"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"You eat 2000 kcal/day. Only ~500 kcal becomes useful work. Where does 75% go?\" Thermal energy — why you're warm. Human body: ~25% efficient.</p><p><strong>Direct instruction (10 min):</strong> Define both forms. Examples: incandescent 5%, LED 25%, electric motor 85% (500 W in → 425 W useful), combined: station 40% × transmission 90% = 36%.</p><p><strong>Lab (20 min):</strong> MOTOR EFFICIENCY — Electric motor lifts mass by measured height. Measure electrical input (V × I × t). η = mgΔh / (VIt). Typical: 30–50%. Discuss where \"lost\" energy goes.</p><p><strong>Practice (10 min):</strong> Combined efficiency problems and working backwards.</p>",
            "engagementHook": {
              "title": "THE HUMAN MACHINE",
              "content": "Calculate your efficiency climbing stairs. Input: a snack (~100 kcal = 418,000 J). Output: mgΔh (~2000 J). Efficiency ≈ 0.5%. \"Wait, aren't humans 25% efficient?\" That's muscles alone; most food energy keeps you alive. This sparks a discussion about system boundaries."
            },
            "nos": {
              "tags": ["Global impact", "Measurements"],
              "description": "Efficiency drives energy policy: EU Energy Labels, ENERGY STAR, fuel economy standards. Improving efficiency reduces emissions without changing behaviour."
            },
            "atl": ["Research skills", "Thinking skills"],
            "learnerProfile": ["Caring", "Principled"],
            "ao": [
              "AO1 — Define efficiency in both forms",
              "AO2 — Calculate efficiency; find combined efficiency",
              "AO3 — Analyse multi-stage systems"
            ],
            "resources": "Small electric motor, masses, joulemeter or voltmeter + ammeter + stopwatch, pulley",
            "formative": "Motor lab report. \"Coal station: 1000 MJ input. Boiler η = 88%. Turbine η = 42%. Generator η = 96%. Transmission η = 92%. (a) Overall η. (b) Useful energy delivered. (c) Total waste.\""
          },
          {
            "num": 3,
            "title": "Energy Density of Fuel Sources",
            "focus": "Comparing fuels quantitatively and evaluating suitability",
            "minutes": 55,
            "understandings": [
              "Energy density: energy released per unit mass (J/kg) or per unit volume (J/m³)",
              "Compare: hydrogen (~140 MJ/kg), petrol (~46 MJ/kg), coal (~24 MJ/kg), wood (~16 MJ/kg), Li battery (~0.5 MJ/kg)",
              "Solve problems involving energy density, fuel mass, and energy output",
              "Evaluate suitability considering: energy density, efficiency, availability, cost, environmental impact"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why can't electric planes cross the Atlantic?\" Batteries: ~0.5 MJ/kg. Jet fuel: ~43 MJ/kg. Plane would need 86× more battery mass.</p><p><strong>Data analysis (15 min):</strong> Fuel table. Tasks: rank, calculate mass for 1 GJ, discuss why hydrogen isn't widely used despite best energy density.</p><p><strong>Calculations (15 min):</strong> (1) Car uses 8 L petrol per 100 km — energy consumed. (2) Electric car: 15 kWh per 100 km — compare. Electric uses LESS total energy (motor 90% vs engine 25%). (3) Station burns 500 tonnes coal/day.</p><p><strong>Group debate (15 min):</strong> Groups represent fossil fuels, nuclear, solar, wind, hydrogen. 2-minute case each on energy density, efficiency, availability, cost, environment. Class votes.</p><p><strong>Wrap-up (5 min):</strong> International-mindedness: Norway (hydro), France (nuclear), Iceland (geothermal) — context matters.</p>",
            "engagementHook": {
              "title": "THE ELECTRIC PLANE PROBLEM & ENERGY DEBATE",
              "content": "Boeing 787 carries ~100,000 kg of fuel. Replacing with batteries: 8.6 million kg. The plane weighs 120,000 kg. \"Batteries 70× heavier than the plane.\" The debate forces multi-dimensional thinking about real trade-offs."
            },
            "nos": {
              "tags": ["Global impact", "Science as a shared endeavour"],
              "description": "Energy policy is science informing global decisions. The Paris Agreement, IPCC reports, and national strategies rely on energy density and efficiency. Scientists have a responsibility to communicate clearly."
            },
            "atl": ["Thinking skills", "Communication skills", "Social skills"],
            "learnerProfile": ["Caring", "Open-minded", "Knowledgeable"],
            "ao": [
              "AO1 — Define energy density",
              "AO2 — Calculate energy from fuel mass and energy density",
              "AO3 — Evaluate suitability of fuels considering multiple factors"
            ],
            "resources": "Fuel energy density data table, calculators, debate preparation cards",
            "formative": "\"Hybrid car: 40 L petrol (34 MJ/L) + 50 kWh battery. (a) Total energy in each. (b) Petrol 25% efficient, motor 90% — useful energy from each. (c) Why use both?\""
          }
        ]
      }
    ],
    "linkingQuestions": [
      { "topic": "A.1 Kinematics", "question": "How do the equations of motion connect to the derivation of Eₖ = ½mv²? How does v² = u² + 2as relate to the work-energy theorem?" },
      { "topic": "A.2 Forces & Momentum", "question": "When should you use force vs energy vs momentum methods? How does Eₖ = p²/2m bridge momentum and energy?" },
      { "topic": "B.1 Thermal Energy", "question": "How does thermal energy fit into conservation? Why is energy transfer to thermal considered \"waste\"?" },
      { "topic": "B.2 Greenhouse Effect", "question": "How does fossil fuel energy density connect to CO₂ emissions and the enhanced greenhouse effect?" },
      { "topic": "C.1 Simple Harmonic Motion", "question": "How does energy interchange between KE and PE in SHM? How is E_total = ½kA² related to elastic PE?" },
      { "topic": "D.1 Gravitational Fields", "question": "Why is ΔEₚ = mgΔh only valid near Earth's surface? What happens further away?" },
      { "topic": "IB Linking (NOS)", "question": "Where do the laws of conservation apply in other areas of physics?" },
      { "topic": "IB Linking (Rates)", "question": "Which other quantities in physics involve rates of change?" }
    ]
  },

  "A4": {
    "title": "Rigid Body Mechanics",
    "code": "A.4",
    "theme": "A",
    "level": "HL only",
    "recommendedHours": 7,
    "recommendedMinutes": 420,
    "guidingQuestions": [
      "How can the understanding of linear motion be applied to rotational motion?",
      "How is the understanding of the torques acting on a system used to predict changes in rotational motion?",
      "How does the distribution of mass within a body affect its rotational motion?"
    ],
    "groups": [
      {
        "name": "Torque & Rotational Equilibrium",
        "color": "accent",
        "totalMinutes": 90,
        "subtopics": [
          {
            "num": 1,
            "title": "Torque — τ = Fr sinθ",
            "focus": "The rotational equivalent of force",
            "minutes": 50,
            "understandings": [
              "The torque τ of a force about an axis: τ = Fr sinθ, where r is the distance from the axis and θ is the angle between the force and the line from the axis",
              "Torque causes rotation, not translation — it is the rotational equivalent of force",
              "The sense (CW or CCW) of a torque should be identified (vector nature not required)",
              "Units: N·m (not joules, even though dimensionally equivalent)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hold a door open. Push near the hinge — hard to close. Push at the handle — easy. \"Same force, different effect. What changed?\" The distance from the axis. This is torque.</p><p><strong>Direct instruction (15 min):</strong> Define τ = Fr sinθ. Three cases: θ = 90° (max torque), θ = 0° (zero torque), θ between (partial). Diagrams for each. Emphasise: the sinθ picks out only the perpendicular component. CW = negative, CCW = positive by convention.</p><p><strong>Parallel with linear motion (5 min):</strong> Start the analogy table: Force F → Torque τ. This table grows throughout A.4.</p><p><strong>Worked examples (15 min):</strong> (1) 40 N at 90° on 0.3 m wrench → τ = 12 N·m. (2) Same at 60° → 10.4 N·m. (3) See-saw with two children at different distances — net torque. (4) Wheel with multiple forces — sum CW and CCW torques.</p><p><strong>Practice (10 min):</strong> Calculate torque at various angles and find net torque on systems.</p>",
            "engagementHook": {
              "title": "THE DOOR CHALLENGE",
              "content": "Two students compete: one pushes near the hinge with maximum force, the other pushes at the handle gently. The handle always wins. Then: try pushing parallel to the door — impossible. τ = Fr sinθ explains both instantly. \"Why are long wrenches used for tight bolts? Why are handles on the opposite side from the hinge?\""
            },
            "nos": {
              "tags": ["Models"],
              "description": "Torque extends force to rotational systems, just as velocity extends displacement to include time. Physics builds new concepts by analogy with existing ones."
            },
            "atl": ["Thinking skills", "Communication skills"],
            "learnerProfile": ["Thinker", "Inquirer"],
            "ao": [
              "AO1 — Define torque; state τ = Fr sinθ",
              "AO2 — Calculate torque for various force orientations; find net torque on a system"
            ],
            "resources": "Door (in classroom), long and short wrenches, metre ruler with pivot and hanging masses",
            "formative": "\"A mechanic applies 80 N to a 0.25 m wrench at 45°. (a) Calculate torque. (b) What angle maximises torque? (c) Why don't mechanics push parallel to the wrench?\""
          },
          {
            "num": 2,
            "title": "Rotational Equilibrium",
            "focus": "Στ = 0 and combined equilibrium with ΣF = 0",
            "minutes": 40,
            "understandings": [
              "Bodies in rotational equilibrium have a resultant torque of zero: Στ = 0",
              "An unbalanced torque on an extended, rigid body causes angular acceleration",
              "Full static equilibrium requires BOTH ΣF = 0 (translational) AND Στ = 0 (rotational)",
              "The pivot point for calculating torques can be chosen freely — the result is the same"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Balance a metre ruler on a finger. Place 100 g at 20 cm mark. \"Where must I place 200 g to rebalance?\" Students calculate using Στ = 0.</p><p><strong>Direct instruction (10 min):</strong> Στ = 0 for rotational equilibrium. Combined with ΣF = 0 → complete static equilibrium. Smart pivot choice eliminates unknowns. Work through: beam on two supports with off-centre load.</p><p><strong>Lab (15 min):</strong> BALANCING ACT — Metre ruler on pivot. Place masses at different positions. Verify Σ(CW torques) = Σ(CCW torques). Predict where to place unknown mass; check experimentally.</p><p><strong>Practice (10 min):</strong> Beam and bridge problems: uniform plank on two supports with off-centre load. Find reactions using Στ = 0 and ΣF = 0 together.</p>",
            "engagementHook": {
              "title": "BALANCING ACT LAB",
              "content": "Students build a \"human see-saw\": a plank on a fulcrum. Two students of different masses find the balance point using torque calculations, then test. Extension: \"A 4 m bridge (200 kg) with supports at each end. A 600 kg car parks 1 m from the left. Find each support force.\" Engineers solve this exact problem."
            },
            "nos": {
              "tags": ["Patterns"],
              "description": "The same structure (sum of effects = 0 for equilibrium) recurs: ΣF = 0, Στ = 0, and later ΣV = 0 in circuits. Recognising patterns across domains is a core scientific skill."
            },
            "atl": ["Thinking skills", "Research skills"],
            "learnerProfile": ["Thinker", "Knowledgeable"],
            "ao": [
              "AO1 — State conditions for rotational equilibrium",
              "AO2 — Apply Στ = 0 and ΣF = 0 simultaneously",
              "AO3 — Analyse beam/bridge problems"
            ],
            "resources": "Metre ruler, pivot/fulcrum, slotted masses, hangers, printed beam/bridge problems",
            "formative": "Lab: torque balance verification. \"A 3 m uniform plank (15 kg) supported at each end. A 40 kg child stands 1 m from the left support. Find reaction at each support.\""
          }
        ]
      },
      {
        "name": "Rotational Kinematics",
        "color": "accent3",
        "totalMinutes": 95,
        "subtopics": [
          {
            "num": 1,
            "title": "Angular Displacement, Velocity & Acceleration",
            "focus": "The rotational analogues of s, v, and a",
            "minutes": 45,
            "understandings": [
              "Rotation described by angular displacement Δθ (rad), angular velocity ω (rad/s), and angular acceleration α (rad/s²)",
              "These are rotational analogues of s, v, and a",
              "ω = Δθ/Δt and α = Δω/Δt",
              "Connection to linear: v = ωr and a_tangential = αr"
            ],
            "teachingStrategy": "<p><strong>Building the analogy (10 min):</strong> Full translation ↔ rotation table: s ↔ θ, v ↔ ω, a ↔ α, F ↔ τ, m ↔ I. Every A.1 equation has a rotational twin. Students who understood kinematics already know this — just new symbols.</p><p><strong>Direct instruction (15 min):</strong> Define each: Δθ in radians (1 rev = 2π), ω = Δθ/Δt, α = Δω/Δt. Connect: v = ωr and a_t = αr. All points on a rigid body share ω and α but have different v and a depending on r.</p><p><strong>Worked examples (10 min):</strong> (1) Wheel at 300 rpm → 31.4 rad/s. (2) Rim point (r = 0.3 m) → v = 9.4 m/s. (3) Centrifuge: 0 to 10,000 rpm in 20 s → find α. (4) Merry-go-round: same ω at centre and edge, different v.</p><p><strong>Practice (10 min):</strong> Conversion problems and calculating v, a_t from ω, α.</p>",
            "engagementHook": {
              "title": "MERRY-GO-ROUND PUZZLE",
              "content": "Two children on a merry-go-round: r = 0.5 m and r = 2 m. Same ω (π/2 rad/s). But the edge child has 4× the linear speed and feels 4× the centripetal acceleration. This connects A.4 to A.2 circular motion and makes the ω vs v distinction visceral."
            },
            "nos": {
              "tags": ["Models"],
              "description": "Building new physics by analogy with known physics is a powerful modelling strategy. Rotational kinematics mirrors translational kinematics — same structure, different quantities."
            },
            "atl": ["Thinking skills", "Communication skills"],
            "learnerProfile": ["Thinker", "Communicator"],
            "ao": [
              "AO1 — Define angular displacement, velocity, acceleration",
              "AO2 — Convert units (rpm ↔ rad/s); apply v = ωr"
            ],
            "resources": "Rotating platform or lazy Susan, ruler, stopwatch, analogy table handout",
            "formative": "\"Bicycle wheel (r = 0.35 m) at 5 rev/s. (a) Convert to rad/s. (b) Rim speed. (c) Decelerates to rest in 8 s — find α. (d) Tangential deceleration of rim.\""
          },
          {
            "num": 2,
            "title": "Equations of Motion for Uniform Angular Acceleration",
            "focus": "The rotational SUVAT equations",
            "minutes": 50,
            "understandings": [
              "Equations for uniform angular acceleration: Δθ = (ω_f + ω_i)/2 × t, ω_f = ω_i + αt, Δθ = ω_i·t + ½αt², ω_f² = ω_i² + 2αΔθ",
              "Identical in structure to the linear SUVAT equations: replace s → θ, u → ω_i, v → ω_f, a → α",
              "Valid only when angular acceleration is constant (uniform)",
              "Angular speed will be measured in rad/s"
            ],
            "teachingStrategy": "<p><strong>Pattern recognition (5 min):</strong> Linear SUVAT next to rotational: every s → θ, u → ω_i, v → ω_f, a → α. \"You already KNOW these — learned in A.1. Physics differs; maths is identical.\"</p><p><strong>Worked examples (20 min):</strong> (1) Grinding wheel ω_i = 50, α = −2: time to stop, Δθ in revolutions. (2) Turntable: 0 to 33 rpm in 5 s → α and Δθ. (3) Fan: 200 rev decelerating 1200 → 300 rpm → find α and time. (4) Centrifuge spin-up: revolutions during acceleration.</p><p><strong>Pair practice (15 min):</strong> 4 problems choosing the right equation. Key trap: rpm vs rad/s unit errors.</p><p><strong>Graphical connections (10 min):</strong> ω-t graphs: gradient = α, area = Δθ. Compare with v-t from A.1. Students sketch ω-t and θ-t graphs.</p>",
            "engagementHook": {
              "title": "SPIN-DOWN CHALLENGE",
              "content": "Spin a bicycle wheel and time how long it takes to stop. Count revolutions. Calculate α using ω_f² = ω_i² + 2αΔθ. Compare heavy vs light wheels, lubricated vs dry bearings. Direct measurement makes the equations concrete. \"Washing machine: 1200 rpm stops in 40 revolutions. How long? What is α?\""
            },
            "nos": {
              "tags": ["Patterns"],
              "description": "The mathematical structure of rotational kinematics is identical to translational. This universality — same equations governing different phenomena — is one of the deepest features of physics."
            },
            "atl": ["Thinking skills", "Self-management skills"],
            "learnerProfile": ["Thinker", "Knowledgeable"],
            "ao": [
              "AO1 — State the four rotational equations of motion",
              "AO2 — Apply them to calculate θ, ω, α, and t",
              "AO3 — Analyse ω-t and θ-t graphs"
            ],
            "resources": "Bicycle wheel or fidget spinner, stopwatch, SUVAT ↔ rotation comparison handout, problem sets",
            "formative": "\"Pottery wheel accelerates from rest at 3 rad/s² for 4 s, constant ω for 30 s, decelerates at −1.5 rad/s² to rest. (a) ω after acceleration. (b) Total Δθ. (c) Total time. (d) Sketch ω-t graph.\""
          }
        ]
      },
      {
        "name": "Moment of Inertia & Newton's 2nd Law for Rotation",
        "color": "accent2",
        "totalMinutes": 95,
        "subtopics": [
          {
            "num": 1,
            "title": "Moment of Inertia — I = Σmr²",
            "focus": "How mass distribution determines resistance to angular acceleration",
            "minutes": 50,
            "understandings": [
              "Moment of inertia I depends on the distribution of mass about the axis of rotation",
              "For point masses: I = Σmr² = m₁r₁² + m₂r₂² + ...",
              "I is the rotational analogue of mass — measures resistance to angular acceleration",
              "The same body has DIFFERENT I about different axes",
              "I for specific distributions (disc, ring, sphere, rod) will be provided when necessary"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hold a baseball bat at the handle and swing — easy. Grip at the heavy end and swing — much harder. Same mass, same force. What changed? Mass distribution relative to the axis. This is moment of inertia.</p><p><strong>Direct instruction (15 min):</strong> Define I = Σmr². Common shapes: disc (½MR²), ring (MR²), solid sphere (⅖MR²), rod about centre (1/12ML²), rod about end (⅓ML²). Key: mass far from axis contributes MORE (r²). Figure skaters pull arms in → reduce I → spin faster.</p><p><strong>Calculations (15 min):</strong> (1) Three point masses on a rod — I about centre. (2) Same system, different axis → I changes. (3) Dumbbell: two 5 kg masses, 0.4 m rod → I about centre vs about one end. (4) Two wheels same mass, different radii — which has larger I?</p><p><strong>Lab (15 min):</strong> ROLLING RACE — Solid vs hollow cylinder (same M, R) down a ramp. Solid wins: smaller I → more GPE → translational KE. Predict winner, then race.</p>",
            "engagementHook": {
              "title": "ROLLING RACE",
              "content": "Same mass, same radius, different I. Solid vs hollow cylinder race down a ramp. Students predict using I. Solid always wins — less energy goes to rotation. Follow with figure skater video: arms extend/retract → spin speed changes. \"Mass doesn't change. What changes?\" I changes → ω changes (previewing angular momentum conservation)."
            },
            "nos": {
              "tags": ["Models"],
              "description": "Moment of inertia collapses complex mass distribution into a single number that predicts rotational behaviour. Different I formulas for different shapes represent models simplifying reality."
            },
            "atl": ["Thinking skills", "Research skills"],
            "learnerProfile": ["Inquirer", "Thinker"],
            "ao": [
              "AO1 — Define moment of inertia; state I = Σmr²",
              "AO2 — Calculate I for point mass systems and using provided formulas",
              "AO3 — Analyse how mass distribution affects I"
            ],
            "resources": "Baseball bat, solid and hollow cylinders (same M and R), ramp, figure skater spin video, I formula sheet",
            "formative": "Rolling race prediction. \"Three masses (2, 3, 1 kg) at 0.1, 0.2, 0.3 m from axis. (a) Calculate I. (b) Move the 1 kg to 0.5 m — new I? (c) Which is harder to spin?\""
          },
          {
            "num": 2,
            "title": "Newton's Second Law for Rotation — τ = Iα",
            "focus": "The rotational analogue of F = ma",
            "minutes": 45,
            "understandings": [
              "Newton's second law for rotation: τ = Iα, where τ is the average resultant torque",
              "This is the rotational analogue of F = ma",
              "Net torque causes angular acceleration proportional to torque and inversely proportional to I",
              "Combining τ = Iα with rotational kinematics for complete problem-solving"
            ],
            "teachingStrategy": "<p><strong>Building the analogy (5 min):</strong> Update the table: F = ma → τ = Iα. Force → torque. Mass → moment of inertia. Acceleration → angular acceleration. Pattern complete for dynamics.</p><p><strong>Direct instruction (10 min):</strong> Derivation for a point mass: F = ma, a = αr → F = mαr. Torque = Fr = mr²α = Iα. For a system: Στ = Iα. NOT a new law — Newton's 2nd law for rotation.</p><p><strong>Worked examples (15 min):</strong> (1) Disc (I = 0.5 kg·m²), torque 2 N·m → α = 4 rad/s²; ω after 5 s. (2) Pulley problem: mass hangs from string on disc — find α of disc and linear a of mass using τ = Iα and F = ma simultaneously. (3) Door: 1.2 m wide, 8 kg (I = ⅓ML²), 20 N at handle → α.</p><p><strong>Practice (15 min):</strong> Combined τ = Iα with rotational kinematics. Include: given torque, find revolutions to target ω.</p>",
            "engagementHook": {
              "title": "THE PULLEY PARADOX",
              "content": "Hang a mass from a string on a MASSIVE pulley (not the ideal massless ones from A.2). The mass accelerates slower than g. \"In A.2 we assumed massless pulleys. Now the pulley has I, and GPE goes partly into rotational KE.\" Calculate with and without I — the difference is striking."
            },
            "nos": {
              "tags": ["Theories"],
              "description": "τ = Iα is not new — it's Newton's 2nd law applied to rotation. Existing theories are extended to new domains without contradiction. The identical structure of F = ma and τ = Iα suggests deeper unity."
            },
            "atl": ["Thinking skills", "Self-management skills"],
            "learnerProfile": ["Thinker", "Knowledgeable"],
            "ao": [
              "AO1 — State τ = Iα",
              "AO2 — Apply τ = Iα to solve for α, τ, or I; combine with rotational kinematics",
              "AO3 — Analyse pulley and rotating-body problems"
            ],
            "resources": "Massive pulley, string, hanging masses, analogy table poster, problem sets",
            "formative": "\"Solid disc (M = 4 kg, R = 0.2 m), string on rim, 2 kg mass hangs. (a) FBDs for disc and mass. (b) Write τ = Iα and F = ma. (c) Solve for α and tension. (d) Why is acceleration less than g?\""
          }
        ]
      },
      {
        "name": "Angular Momentum & Rotational Energy",
        "color": "accent4",
        "totalMinutes": 140,
        "subtopics": [
          {
            "num": 1,
            "title": "Angular Momentum & Conservation — L = Iω",
            "focus": "The rotational analogue of p = mv and its conservation",
            "minutes": 50,
            "understandings": [
              "Angular momentum of a rotating body: L = Iω",
              "Angular momentum remains constant unless acted upon by a resultant torque: if Στ = 0, then L = Iω = constant",
              "Rotational analogue of linear momentum conservation (p = mv = constant when ΣF = 0)",
              "When I changes (arms pulled in), ω changes to keep L constant"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Figure skater video: arms out → slow spin. Arms in → fast spin. \"Mass didn't change. No external torque. What's conserved?\" L = Iω. When I decreases, ω increases.</p><p><strong>Direct instruction (15 min):</strong> Define L = Iω. Conservation: if Στ = 0, then I₁ω₁ = I₂ω₂. Analogy: p = mv → L = Iω. Worked example: skater I₁ = 3, ω₁ = 2 rev/s, pulls arms to I₂ = 1 → ω₂ = 6 rev/s. KE increases — where from? Work done pulling arms inward.</p><p><strong>Demo (5 min):</strong> SPINNING CHAIR — Student on rotating chair holds weights. Arms out → slow. Arms in → fast. Feel conservation in your body.</p><p><strong>Worked examples (15 min):</strong> (1) Neutron star: R = 700,000 km, T = 30 days collapses to R = 10 km → T in milliseconds (pulsars). (2) Two discs: one rotating drops onto stationary identical disc → ω₂ = ω₁/2, 50% KE lost. (3) Child jumps on/off merry-go-round.</p><p><strong>Practice (10 min):</strong> Conservation problems with KE analysis.</p>",
            "engagementHook": {
              "title": "SPINNING CHAIR DEMO",
              "content": "Student on rotating chair holds dumbbells. Gentle spin. Arms extended: slow rotation. Arms in: dramatic speed increase. Arms out: slow again. They FEEL angular momentum conservation. Follow with the neutron star calculation — same physics, cosmic scale."
            },
            "nos": {
              "tags": ["Theories", "Science as a shared endeavour"],
              "description": "Conservation of angular momentum mirrors linear momentum conservation. Both arise from symmetries (Noether's theorem). Pulsars were discovered by Jocelyn Bell Burnell in 1967; their rapid spin is explained by angular momentum conservation during stellar collapse."
            },
            "atl": ["Thinking skills", "Communication skills"],
            "learnerProfile": ["Thinker", "Knowledgeable", "Open-minded"],
            "ao": [
              "AO1 — Define angular momentum; state conservation condition",
              "AO2 — Apply I₁ω₁ = I₂ω₂",
              "AO3 — Analyse KE changes when I changes"
            ],
            "resources": "Spinning office chair, dumbbells, figure skater video, pulsar/neutron star video",
            "formative": "\"Skater (I = 4.5 kg·m²) spins at 1.5 rev/s. Pulls arms to I = 1.5 kg·m². (a) New ω. (b) KE before and after. (c) Where did extra KE come from? (d) Does she exert a torque on herself?\""
          },
          {
            "num": 2,
            "title": "Angular Impulse — ΔL = τΔt",
            "focus": "The rotational analogue of J = FΔt",
            "minutes": 40,
            "understandings": [
              "The action of a resultant torque constitutes an angular impulse: ΔL = τΔt = Δ(Iω)",
              "Rotational analogue of linear impulse: J = FΔt = Δp",
              "Torque applied over time changes angular momentum",
              "Area under τ-t graph = angular impulse = ΔL"
            ],
            "teachingStrategy": "<p><strong>Analogy (5 min):</strong> Complete the table: J = FΔt = Δp → ΔL = τΔt = Δ(Iω). \"Impulse changes momentum. Angular impulse changes angular momentum.\"</p><p><strong>Direct instruction (10 min):</strong> Define ΔL = τΔt. If I constant: ΔL = IΔω. If I changes: ΔL = I₂ω₂ − I₁ω₁. Area under τ-t graph = angular impulse.</p><p><strong>Worked examples (15 min):</strong> (1) Motor: 5 N·m on disc (I = 2) for 10 s from rest → ΔL = 50, ω_f = 25 rad/s. (2) Brake: −3 N·m on wheel at 100 rad/s (I = 0.8) → time to stop. (3) τ-t graph (triangle): find ΔL from area, then Δω.</p><p><strong>Practice (10 min):</strong> τ-t graph problems. Compare same ΔL from large τ × short Δt vs small τ × long Δt.</p>",
            "engagementHook": {
              "title": "DOOR SLAM vs GENTLE CLOSE",
              "content": "Same ΔL (door goes from closed to open), but slamming = large τ × short Δt, gentle = small τ × long Δt. This is the rotational crumple zone principle. \"Why push at the handle rather than kick near the hinge?\" Both r and Δt matter."
            },
            "nos": {
              "tags": ["Patterns"],
              "description": "The impulse-momentum theorem appears in both linear and rotational forms. The same mathematical structure governs both. Recognising this allows transfer of problem-solving strategies."
            },
            "atl": ["Thinking skills", "Self-management skills"],
            "learnerProfile": ["Thinker"],
            "ao": [
              "AO1 — Define angular impulse; state ΔL = τΔt",
              "AO2 — Apply angular impulse to calculate changes in L",
              "AO3 — Analyse τ-t graphs to find angular impulse"
            ],
            "resources": "τ-t graph worksheets, door for demo, problem sets",
            "formative": "\"Brake applies −4 N·m to flywheel (I = 6 kg·m²) at 60 rad/s. (a) Angular impulse to stop. (b) Braking time. (c) Revolutions while stopping. (d) Sketch τ-t and ω-t graphs.\""
          },
          {
            "num": 3,
            "title": "Rotational Kinetic Energy & Rolling Motion",
            "focus": "Eₖ = ½Iω² = L²/2I and rolling without slipping",
            "minutes": 50,
            "understandings": [
              "Kinetic energy of rotational motion: Eₖ = ½Iω² = L²/2I",
              "Rotational analogue of Eₖ = ½mv² = p²/2m",
              "A rolling body has BOTH translational KE (½mv²) and rotational KE (½Iω²)",
              "Rolling without slipping: v = ωR, total KE = ½mv² + ½Iω²",
              "Energy conservation for rolling: mgh = ½mv² + ½Iω²"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Recall rolling race from sub_5. \"Solid cylinder won — MORE GPE went to translational KE. Now we calculate exactly how much.\"</p><p><strong>Direct instruction (15 min):</strong> Eₖ(rot) = ½Iω². Alternative: L²/2I. For rolling: total KE = ½mv² + ½Iω². With v = ωR: total = ½v²(m + I/R²). Solid cylinder: ¾mv². Hollow: mv². Hollow puts more into rotation → slower.</p><p><strong>Worked examples (15 min):</strong> (1) Disc at 20 rad/s (I = 0.4) → Eₖ = 80 J. (2) Solid sphere rolls down 2 m ramp → v = √(10gh/7). Compare with frictionless slide: v = √(2gh). (3) Ball rolls off table — find range (energy → kinematics).</p><p><strong>Problem-solving (10 min):</strong> Rolling race ranking: sphere, disc, ring. Energy problems combining rolling + projectile motion.</p><p><strong>Wrap-up (5 min):</strong> Complete the master analogy table. Every translational quantity has a rotational twin.</p>",
            "engagementHook": {
              "title": "ROLLING RACE REMATCH — WITH CALCULATIONS",
              "content": "Predict finishing order: solid sphere (⅖MR²), solid cylinder (½MR²), hollow sphere (⅔MR²), hollow cylinder (MR²). Calculate speeds at bottom of 1 m ramp, then verify. The match between prediction and measurement is the payoff of the entire A.4 unit."
            },
            "nos": {
              "tags": ["Theories", "Patterns"],
              "description": "Rotational KE completes the energy framework from A.3. Every conservation law from translational physics has a rotational counterpart. L²/2I parallels p²/2m — deep structural similarity."
            },
            "atl": ["Thinking skills", "Research skills", "Self-management skills"],
            "learnerProfile": ["Thinker", "Inquirer", "Knowledgeable"],
            "ao": [
              "AO1 — State Eₖ = ½Iω² = L²/2I",
              "AO2 — Apply energy conservation to rolling problems",
              "AO3 — Analyse rolling race outcomes using rotational and translational KE"
            ],
            "resources": "Solid cylinder, hollow cylinder, solid sphere, hollow sphere (matched M and R), ramp, stopwatch",
            "formative": "\"Solid sphere (2 kg, r = 0.1 m) rolls without slipping down 1.5 m ramp. (a) Speed at bottom (include both KEs). (b) Compare with frictionless sliding. (c) Fraction of KE that is rotational. (d) Hollow sphere: faster or slower? Calculate.\""
          }
        ]
      }
    ],
    "linkingQuestions": [
      { "topic": "A.1 Kinematics", "question": "How do the SUVAT equations map onto rotational kinematics? What is the physical meaning of the analogy?" },
      { "topic": "A.2 Forces & Momentum", "question": "How does torque extend force to rotation? How is angular momentum analogous to linear momentum?" },
      { "topic": "A.3 Work, Energy & Power", "question": "How does rotational KE (½Iω²) extend the mechanical energy framework? When must rolling KE be included?" },
      { "topic": "A.5 Special Relativity", "question": "Does the mass-energy equivalence E = mc² affect moment of inertia at relativistic speeds?" },
      { "topic": "D.1 Gravitational Fields", "question": "How does angular momentum conservation explain Kepler's 2nd law (equal areas in equal times)?" },
      { "topic": "E.1 Structure of the Atom", "question": "How does the concept of quantised angular momentum apply to the Bohr model of the atom?" }
    ]
  },
  "A5": {
  "title": "Galilean and Special Relativity",
  "code": "A.5",
  "theme": "A",
  "level": "HL only",
  "recommendedHours": 8,
  "recommendedMinutes": 480,
  "guidingQuestions": [
    "How do observers in different reference frames describe events in terms of space and time?",
    "How does special relativity change our understanding of motion compared to Galilean relativity?",
    "How are space-time diagrams used to represent relativistic motion?"
  ],
  "groups": [
    {
      "name": "Galilean Relativity",
      "color": "accent",
      "totalMinutes": 90,
      "subtopics": [
        {
          "num": 1,
          "title": "Reference Frames & Inertial Frames",
          "focus": "How different observers describe the same event",
          "minutes": 35,
          "understandings": [
            "A reference frame is a coordinate system relative to which observations and measurements are made",
            "An inertial reference frame is non-accelerating (moves at constant velocity or is at rest)",
            "Newton's laws of motion are consistent in all inertial reference frames (Galilean relativity)",
            "There is no experiment that can distinguish one inertial frame from another — all are equally valid"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"You're sitting on a smooth train. The blinds are closed. Can you tell if the train is moving at constant velocity or stationary?\" Students debate. The answer: no — there's no experiment you can do inside the train to tell. This is the principle of Galilean relativity.</p><p><strong>Direct instruction (15 min):</strong> Define reference frame and inertial frame. A non-accelerating frame is inertial. Newton's laws work identically in all inertial frames. Example: throw a ball vertically on a smooth train — it lands back in your hand, just as on the ground. A passenger sees a straight path; a person on the platform sees a parabola. Both are correct descriptions — physics is the same, coordinates differ.</p><p><strong>Discussion (10 min):</strong> \"Is the Earth an inertial frame?\" Approximately, yes — its rotation and orbital acceleration are small enough to ignore for most experiments. \"Is a car braking an inertial frame?\" No — you feel a forward force (Newton's 1st law appears violated). Non-inertial frames require fictitious forces (centrifugal, Coriolis).</p><p><strong>Practice (5 min):</strong> Classify 6 scenarios as inertial or non-inertial frames.</p>",
          "engagementHook": {
            "title": "THE TRAIN THOUGHT EXPERIMENT",
            "content": "\"Close your eyes on a perfectly smooth train. Can you tell if you're moving at 200 km/h or parked?\" No — and this bothered physicists for centuries. Galileo first stated this principle in 1632. Einstein took it further: what if this applies to ALL physics, including light? That single question — asked at age 16 — led to special relativity."
          },
          "nos": {
            "tags": ["Theories", "Observations"],
            "description": "Galilean relativity started as a thought experiment — Galileo argued in 1632 that motion is relative by imagining experiments below decks of a ship. Thought experiments remain a powerful tool in physics, especially in relativity where direct experimentation at high speeds is impractical."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded"],
          "ao": [
            "AO1 — Define reference frame and inertial reference frame",
            "AO2 — Identify inertial vs non-inertial frames in various scenarios"
          ],
          "resources": "Video of ball thrown on a moving train (from both perspectives), whiteboard, scenario cards",
          "formative": "\"A person drops a ball inside a lift. Describe the ball's motion as seen by: (a) the person in the lift, (b) someone outside watching through a glass wall — for three cases: lift stationary, lift moving up at constant velocity, lift accelerating upward. In which cases is the lift an inertial frame?\""
        },
        {
          "num": 2,
          "title": "Galilean Transformations & Velocity Addition",
          "focus": "x' = x − vt, t' = t, and u' = u − v",
          "minutes": 55,
          "understandings": [
            "In Galilean relativity, the position and time of an event in frame S' moving at velocity v relative to frame S are: x' = x − vt and t' = t",
            "Time is absolute in Galilean relativity — all observers agree on the time of an event (t' = t)",
            "Velocity addition for a Galilean transformation: u' = u − v",
            "These transformations work perfectly at everyday speeds but fail at speeds close to c"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Set up two frames: S (ground) and S' (train moving at v relative to ground). An event occurs at position x at time t in S. In S': x' = x − vt (the train has moved vt, so the event is closer by that amount) and t' = t (time is the same for both — this is the key Galilean assumption). For velocities: if a ball moves at u in S, it moves at u' = u − v in S'. Example: you walk at 5 km/h on a train going 100 km/h → ground sees you at 105 km/h.</p><p><strong>Worked examples (15 min):</strong> (1) A car at 30 m/s passes a ball thrown at 20 m/s in the same direction → ball's velocity in the car's frame? (−10 m/s — moving backward). (2) Two spaceships approach each other at 0.3c and 0.4c → Galilean closing speed = 0.7c. \"Is this a problem? What if each travels at 0.6c? Galilean gives 1.2c — faster than light!\" This motivates the need for special relativity.</p><p><strong>Group activity (15 min):</strong> Students work through 5 transformation problems in pairs, including one where Galilean addition gives v > c. For each, ask: \"Does this result make physical sense?\" Build the case that something must change at high speeds.</p><p><strong>Wrap-up (10 min):</strong> \"Galilean transformations assume t' = t — time is absolute. Einstein questioned this: what if time ISN'T the same for different observers? That question changed physics forever.\"</p>",
          "engagementHook": {
            "title": "THE SPEED-OF-LIGHT PARADOX",
            "content": "\"You're on a spaceship at 0.9c. You turn on the headlights. How fast does the light travel relative to the ground?\" Galilean answer: 0.9c + c = 1.9c. But Maxwell's equations predict light ALWAYS travels at c — for everyone. Both can't be right. Either Newton or Maxwell is wrong. Einstein chose to trust Maxwell, and everything we thought we knew about space and time had to change."
          },
          "nos": {
            "tags": ["Theories", "Falsification"],
            "description": "Galilean relativity is not 'wrong' — it's an excellent approximation at v << c. It was 'falsified' only at extreme speeds, replaced by a more general theory (special relativity) that reduces to Galilean physics in the low-speed limit. This is how science progresses: theories are refined, not discarded."
          },
          "atl": ["Thinking skills", "Social skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State the Galilean transformation equations",
            "AO2 — Apply x' = x − vt, t' = t, and u' = u − v",
            "AO3 — Evaluate the limitations of Galilean transformations at high speeds"
          ],
          "resources": "Whiteboard, problem sets with everyday and relativistic scenarios",
          "formative": "\"Spaceship A moves at 0.5c to the right. It fires a probe at 0.7c (relative to itself) to the right. (a) Find the probe's velocity relative to the ground using Galilean addition. (b) What is wrong with this answer? (c) Why does this force us to reconsider the Galilean framework?\""
        }
      ]
    },
    {
      "name": "Postulates & Lorentz Transformations",
      "color": "accent3",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "The Two Postulates of Special Relativity",
          "focus": "Einstein's revolutionary assumptions and their consequences",
          "minutes": 45,
          "understandings": [
            "Postulate 1: The laws of physics are the same in all inertial reference frames",
            "Postulate 2: The speed of light in a vacuum is the same for all inertial observers, regardless of the motion of the source or observer (c = 3 × 10⁸ m/s)",
            "These two postulates together lead to all the consequences of special relativity: time dilation, length contraction, mass-energy equivalence",
            "The postulates must be memorised"
          ],
          "teachingStrategy": "<p><strong>Opener (10 min):</strong> Tell Einstein's story: at age 16, he imagined riding alongside a beam of light. \"What would a light wave look like if I kept pace with it?\" It would appear frozen — a stationary electromagnetic wave. But Maxwell's equations don't allow stationary EM waves. Something must give. Einstein's radical solution: you CAN'T keep pace with light. Its speed is constant for everyone.</p><p><strong>Direct instruction (15 min):</strong> State both postulates precisely. Postulate 1 is Galileo's principle — nothing new. Postulate 2 is the revolution: c is invariant. Unpack what this means: if you drive at 0.9c toward a light source, the light STILL approaches you at c, not at 1.9c. This violates everything about Galilean velocity addition. But experiments (Michelson-Morley, 1887) confirm it.</p><p><strong>Discussion (10 min):</strong> \"If light has the same speed for everyone, what must change?\" Guide students to the conclusion: space and time themselves must be different for different observers. Time is NOT absolute. Length is NOT absolute. Only c is absolute. This is the conceptual earthquake that makes special relativity so counterintuitive.</p><p><strong>Practice (10 min):</strong> Students write the two postulates from memory. Then apply them qualitatively: \"A spaceship at 0.8c fires a laser forward. How fast does the laser light travel relative to the ground?\" (Answer: c — not 1.8c.)</p>",
          "engagementHook": {
            "title": "EINSTEIN'S THOUGHT EXPERIMENT AT 16",
            "content": "\"Imagine you could ride a bicycle at the speed of light next to a light beam. What would you see?\" A frozen wave — but Maxwell says that's impossible. Einstein realised at 16 that this paradox could only be resolved if the speed of light is the same for ALL observers. He spent 10 years working out the consequences. Show the famous 1905 paper — just 30 pages that changed the universe."
          },
          "nos": {
            "tags": ["Theories", "Falsification", "Observations"],
            "description": "The Michelson-Morley experiment (1887) failed to detect the 'aether' — the medium light was supposed to travel through. This null result was one of the most important experiments in physics: it didn't find what it was looking for, but the failure was more valuable than success. Einstein used it to build special relativity."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Inquirer"],
          "ao": [
            "AO1 — State the two postulates of special relativity (must be memorised)",
            "AO2 — Apply the postulates to predict that light speed is constant for all observers",
            "AO3 — Evaluate why Galilean transformations fail at high speeds"
          ],
          "resources": "Einstein biography excerpt, Michelson-Morley experiment video/animation, whiteboard",
          "formative": "\"Write both postulates from memory. Then: A spaceship at 0.95c fires a probe backward at 0.3c (relative to the ship). (a) What does Galilean addition predict for the probe's ground-frame speed? (b) Is this consistent with the postulates? (c) What does this tell us about the need for new transformation equations?\""
        },
        {
          "num": 2,
          "title": "Lorentz Transformations & Relativistic Velocity Addition",
          "focus": "The equations that replace Galilean transformations at high speeds",
          "minutes": 55,
          "understandings": [
            "The Lorentz transformation equations replace Galilean transformations at high speeds (derivation NOT required)",
            "The Lorentz factor: γ = 1/√(1 − v²/c²), where γ ≥ 1 always",
            "The relativistic velocity addition equation replaces u' = u − v (derivation NOT required)",
            "Relativistic velocity addition ensures no combined velocity exceeds c"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Introduce the Lorentz factor γ = 1/√(1 − v²/c²). Calculate γ for various speeds: v = 0 → γ = 1, v = 0.5c → γ = 1.15, v = 0.9c → γ = 2.29, v = 0.99c → γ = 7.09, v = 0.999c → γ = 22.4. γ grows rapidly as v → c and reaches infinity at v = c. Present the Lorentz transformation equations (derivation not required): x' = γ(x − vt), t' = γ(t − vx/c²). Compare with Galilean: the extra factors are γ and the −vx/c² term. At low speeds, γ → 1 and vx/c² → 0, recovering Galilean transformations.</p><p><strong>Velocity addition (10 min):</strong> Relativistic velocity addition: u = (u' + v)/(1 + u'v/c²). Test: two ships at 0.6c toward each other → u = (0.6c + 0.6c)/(1 + 0.36) = 1.2c/1.36 = 0.88c. Always < c! Test with light: u' = c, v = 0.9c → u = (c + 0.9c)/(1 + 0.9) = 1.9c/1.9 = c. Light always measured at c — the postulate is built into the maths.</p><p><strong>Worked examples (15 min):</strong> (1) Calculate γ for a particle at 0.8c. (2) Use Lorentz transformations to find x' and t' for an event. (3) Relativistic velocity addition: probe fired at 0.7c from a ship at 0.5c. (4) Verify that adding any two speeds < c always gives a result < c.</p><p><strong>Practice (15 min):</strong> Problem set with γ calculations, Lorentz transformations, and velocity addition. Include comparison: Galilean vs relativistic result for the same scenario.</p>",
          "engagementHook": {
            "title": "THE γ FACTOR GRAPH",
            "content": "Plot γ vs v/c on a large graph. At everyday speeds (v << c), γ ≈ 1 — you can't tell. But as v approaches c, γ shoots up toward infinity. \"At 0.99c, one second for you is 7 seconds for everyone else. At 0.9999c, one second becomes 71 seconds.\" Draw the curve together — the dramatic uptick near c makes the mathematics feel physical. \"This is why you can never reach c: γ → ∞ means you'd need infinite energy.\""
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "The Lorentz transformations were originally derived by Hendrik Lorentz to explain the Michelson-Morley result within the aether framework. Einstein derived the same equations from his two postulates — a completely different physical interpretation. Same maths, different physics. The shift from aether to spacetime geometry was a paradigm shift."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the Lorentz factor γ",
            "AO2 — Calculate γ; apply Lorentz transformations and relativistic velocity addition",
            "AO3 — Compare Galilean and relativistic predictions for the same scenario"
          ],
          "resources": "γ vs v/c graph (large printout or drawn live), calculators, Galilean vs Lorentz comparison table, problem sets",
          "formative": "\"(a) Calculate γ for v = 0.6c, 0.8c, 0.95c, 0.99c. (b) Spaceship at 0.8c fires a probe at 0.6c forward. Find ground-frame speed using both Galilean and relativistic addition. (c) An event at x = 100 m, t = 2 × 10⁻⁷ s in frame S. Frame S' moves at 0.6c. Find x' and t' using Lorentz transformations.\""
        }
      ]
    },
    {
      "name": "Consequences of Special Relativity",
      "color": "accent2",
      "totalMinutes": 150,
      "subtopics": [
        {
          "num": 1,
          "title": "Time Dilation — Δt = γΔt₀",
          "focus": "Moving clocks run slow",
          "minutes": 55,
          "understandings": [
            "Proper time interval Δt₀ is the time between two events measured by an observer for whom both events occur at the SAME position",
            "Time dilation: Δt = γΔt₀ — a moving clock runs slower than a stationary one",
            "The derivation is NOT required, but the conceptual basis (the light clock thought experiment) should be understood",
            "Time dilation is NOT an illusion — it is a real physical effect, confirmed experimentally"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"If you travelled at 0.99c for what feels like 1 year to you, 7.09 years would pass on Earth. Your twin would be 6 years older than you when you return.\" The twin paradox — introduce it as a hook, resolve it at the end of the lesson.</p><p><strong>Light clock thought experiment (15 min):</strong> Draw a light clock: a beam bouncing vertically between two mirrors, separated by distance d. For the rest frame: one tick takes Δt₀ = 2d/c. For a moving frame: the light travels a longer diagonal path, but still at speed c. So the tick takes longer: Δt = γΔt₀. Walk through the geometry slowly with diagrams. Key message: this isn't about light clocks specifically — ALL clocks (including biological ones) slow down.</p><p><strong>Worked examples (15 min):</strong> (1) A spaceship at 0.8c (γ = 5/3). Crew measures 10 s for an event. Ground time: 10 × 5/3 = 16.7 s. (2) A muon has a rest-frame lifetime of 2.2 μs. At 0.998c (γ = 15.8), its lab lifetime is 34.8 μs — long enough to reach Earth's surface from the upper atmosphere. (3) GPS satellites: their clocks gain ~38 μs/day due to combined relativistic effects. Without correction, GPS would drift by 10 km/day.</p><p><strong>Twin paradox resolution (10 min):</strong> The paradox assumes symmetry — but the travelling twin accelerates (non-inertial frame), breaking the symmetry. Only the stay-at-home twin remains in an inertial frame throughout. The travelling twin really IS younger.</p><p><strong>Practice (10 min):</strong> Time dilation calculations and identifying the proper time observer.</p>",
          "engagementHook": {
            "title": "THE TWIN PARADOX & GPS WITHOUT RELATIVITY",
            "content": "\"Your twin stays on Earth. You travel at 0.99c for 1 year (your time). You return — your twin is now 7 years older. You're biologically younger. Is this real?\" YES. Then the practical hook: GPS satellites experience time dilation. Without relativistic corrections, your phone's GPS would be off by 10 km per day. Relativity isn't just theory — it's running on your phone right now."
          },
          "nos": {
            "tags": ["Theories", "Measurements", "Technology"],
            "description": "Time dilation was predicted by theory (1905) and confirmed by experiment: Hafele-Keating (1971) flew atomic clocks around the world and measured nanosecond differences matching predictions. GPS is a daily technological application. When theory predicts, experiments confirm, and technology applies — that's the full scientific cycle."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — Define proper time; state Δt = γΔt₀",
            "AO2 — Apply time dilation to calculate dilated time intervals",
            "AO3 — Analyse the twin paradox and identify the proper time observer"
          ],
          "resources": "Light clock animation/diagram, GPS accuracy infographic, Hafele-Keating experiment summary, calculators",
          "formative": "\"A muon has rest-frame lifetime 2.2 μs. It travels at 0.995c. (a) Calculate γ. (b) What is its lifetime as measured in the lab? (c) How far does it travel in the lab frame? (d) Is the 2.2 μs the proper time or dilated time? Justify your answer.\""
        },
        {
          "num": 2,
          "title": "Length Contraction — L = L₀/γ",
          "focus": "Moving objects are shorter in the direction of motion",
          "minutes": 45,
          "understandings": [
            "Proper length L₀ is the length of an object measured in the frame where the object is at rest",
            "Length contraction: L = L₀/γ — an object moving relative to an observer is contracted along its direction of motion",
            "Contraction occurs ONLY in the direction of motion, not perpendicular to it",
            "Length contraction and time dilation are two sides of the same coin — both arise from the Lorentz transformations"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Define proper length L₀: measured in the object's rest frame. In a frame where the object moves at v: L = L₀/γ. The object is physically shorter — this is real, not an optical illusion. Only the dimension parallel to motion contracts; perpendicular dimensions are unchanged. Show: at 0.87c (γ = 2), a 1 m rod becomes 0.5 m.</p><p><strong>Connecting to the muon (10 min):</strong> Revisit the muon problem from two perspectives: (a) Earth frame: muon lives longer (time dilation) → travels far enough. (b) Muon frame: muon's lifetime is normal (2.2 μs), but the atmosphere is LENGTH CONTRACTED → distance is shorter → muon still reaches the surface. Same physics, two perspectives, both give the same answer. This is the most powerful check in all of relativity.</p><p><strong>Worked examples (15 min):</strong> (1) A 100 m spaceship at 0.6c → L = 100/1.25 = 80 m as seen from Earth. (2) A particle accelerator ring: circumference 27 km. A proton at 0.9999c sees it as 27000/70.7 = 382 m. (3) The muon problem from both frames — verify consistency.</p><p><strong>Practice (10 min):</strong> Length contraction problems, always identifying which observer measures proper length.</p>",
          "engagementHook": {
            "title": "THE MUON — TWO EXPLANATIONS, ONE ANSWER",
            "content": "Muons are created 15 km up in the atmosphere. At 0.998c, Newtonian physics says they'd travel only 660 m before decaying — they shouldn't reach us. But they do! Earth's explanation: time dilation — they live longer. Muon's explanation: length contraction — the atmosphere is thinner. BOTH explanations give the same answer. This consistency is what makes relativity trustworthy."
          },
          "nos": {
            "tags": ["Theories", "Observations", "Measurements"],
            "description": "The muon experiment provides simultaneous evidence for time dilation AND length contraction. The same phenomenon explained from two frames — this internal consistency is what physicists mean when they say a theory is 'self-consistent.' A theory that contradicted itself between frames would be immediately rejected."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define proper length; state L = L₀/γ",
            "AO2 — Apply length contraction",
            "AO3 — Analyse the muon problem from both Earth and muon frames; verify consistency"
          ],
          "resources": "Muon problem diagram (Earth frame vs muon frame), calculators, visualisation of a contracted spaceship",
          "formative": "\"Muons at 0.998c created 15 km up. Rest lifetime = 2.2 μs. (a) Earth frame: find γ, dilated lifetime, distance travelled. (b) Muon frame: find contracted atmosphere thickness, time to traverse it using normal lifetime. (c) Do both frames agree on whether the muon reaches the ground?\""
        },
        {
          "num": 3,
          "title": "Relativistic Velocity Addition & the Space-Time Interval",
          "focus": "The invariant quantity that all observers agree on",
          "minutes": 50,
          "understandings": [
            "The relativistic velocity addition equation ensures no combined velocity exceeds c (derivation NOT required)",
            "The space-time interval Δs between two events is invariant: (Δs)² = (cΔt)² − (Δx)²",
            "All observers in all frames calculate the same Δs for the same pair of events — it is the relativistic invariant",
            "If (Δs)² > 0: time-like interval (events can be causally connected). If (Δs)² < 0: space-like (no causal connection possible). If (Δs)² = 0: light-like (connected by light)"
          ],
          "teachingStrategy": "<p><strong>Velocity addition (15 min):</strong> State the relativistic formula: u = (u' + v)/(1 + u'v/c²). Verify: two ships at 0.6c → 0.88c (not 1.2c). Light from a moving source: u' = c → u = c always. This is the postulate built into the maths. Work through 3 examples and compare with Galilean in each case.</p><p><strong>Space-time interval (20 min):</strong> Introduce (Δs)² = (cΔt)² − (Δx)². Explain: while Δt and Δx differ between frames, Δs does NOT. It's the relativistic equivalent of distance — but in 4D spacetime. Analogy: in 2D, rotating axes changes x and y coordinates but preserves x² + y² (distance). In spacetime, changing frames changes Δt and Δx but preserves (cΔt)² − (Δx)². Worked example: calculate Δs for an event from two frames — same answer.</p><p><strong>Classification (10 min):</strong> Time-like (Δs² > 0): events can be causally connected — one can influence the other. Space-like (Δs² < 0): no causal connection — they're too far apart in space for even light to connect them. Light-like (Δs² = 0): connected by a light signal. Students classify 4 event pairs.</p><p><strong>Practice (5 min):</strong> Calculate Δs and classify intervals.</p>",
          "engagementHook": {
            "title": "THE INVARIANT — WHAT ALL OBSERVERS AGREE ON",
            "content": "\"Different observers disagree on when and where events happen. They disagree on time intervals and lengths. Is there ANYTHING everyone agrees on?\" Yes: the space-time interval (Δs)². It's the one quantity that's the same for all observers. It's the bedrock of relativity — the invariant that holds the universe together. Calculate it from two different frames for the same events and watch the numbers match perfectly."
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "Invariance is a central concept in modern physics. The speed of light c is invariant. The space-time interval Δs is invariant. Later: rest mass and electric charge are invariant. Identifying what DOESN'T change is often more powerful than tracking what does. Symmetry and invariance underpin all of modern theoretical physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the space-time interval formula",
            "AO2 — Calculate the space-time interval; apply relativistic velocity addition",
            "AO3 — Classify intervals as time-like, space-like, or light-like and interpret physically"
          ],
          "resources": "Calculators, Galilean vs relativistic velocity addition comparison table, interval classification worksheet",
          "formative": "\"Event A: x = 0, t = 0. Event B: x = 3 × 10⁸ m, t = 2 s. (a) Calculate (Δs)². (b) Is this time-like, space-like, or light-like? (c) Can event A cause event B? (d) A second observer measures Δx' = 5 × 10⁸ m. Find Δt' such that (Δs)² is the same.\""
        }
      ]
    },
    {
      "name": "Space-Time Diagrams & Experimental Evidence",
      "color": "accent4",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Space-Time Diagrams & World Lines",
          "focus": "Visualising motion in spacetime with ct on the vertical axis",
          "minutes": 55,
          "understandings": [
            "Space-time diagrams have ct on the vertical axis and x on the horizontal axis",
            "A world line represents the trajectory of a particle through spacetime",
            "A stationary object has a vertical world line (only time passes)",
            "The angle between the world line and the ct axis: tanθ = v/c",
            "Light travels at 45° (tanθ = c/c = 1) — light lines define the boundary of causal connection",
            "World lines of massive particles always have θ < 45° (slower than light)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Set up the spacetime diagram: ct vertical, x horizontal. Stationary object: vertical line (x doesn't change, only ct increases). Object at constant v: a straight line at angle θ where tanθ = v/c. Light: θ = 45° (diagonal). Draw examples: stationary observer, object at 0.5c (θ = 26.6°), object at 0.9c (θ = 42°), light ray (45°). Nothing can have θ > 45° (would mean v > c).</p><p><strong>Drawing practice (15 min):</strong> Students draw spacetime diagrams for: (a) two objects at rest, separated by distance d, (b) an object accelerating from rest (world line curves), (c) a light pulse sent from origin reflected by a mirror and returning, (d) two objects approaching each other at constant speeds.</p><p><strong>Light cones (10 min):</strong> The 45° light lines from an event divide spacetime into: future light cone (events the event CAN influence), past light cone (events that COULD have influenced it), and \"elsewhere\" (no causal connection). This is the spacetime interval classification visualised.</p><p><strong>Worked examples (10 min):</strong> (1) Calculate θ for a particle at 0.3c, 0.7c, 0.95c. (2) Read off the velocity from a given world line. (3) Determine from a diagram whether two events are causally connected.</p><p><strong>Practice (5 min):</strong> Draw and interpret spacetime diagrams.</p>",
          "engagementHook": {
            "title": "DRAWING THE UNIVERSE — YOUR FIRST SPACETIME DIAGRAM",
            "content": "\"Every moment of your life is a point on a spacetime diagram. Your entire existence — past, present, future — is a line: your world line. Right now, you're adding to it. Nothing you do can make your world line tilt past 45° — that would mean travelling faster than light.\" Students draw their own world lines for today: sitting still in class (vertical), walking to lunch (slight tilt), driving home (more tilt). \"Even at 100 km/h, your world line is practically vertical. You'd need a microscope to see the tilt.\""
          },
          "nos": {
            "tags": ["Models", "Theories"],
            "description": "Space-time diagrams were introduced by Hermann Minkowski in 1908. He famously declared: 'Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows, and only a kind of union of the two will preserve an independent reality.' This visualisation tool transformed how physicists think about relativity — a model that changed the conceptual landscape."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Draw and label spacetime diagrams with ct axis",
            "AO2 — Calculate tanθ = v/c; read velocities from diagrams",
            "AO3 — Analyse causal connections using light cones"
          ],
          "resources": "Graph paper, rulers, protractors, printed spacetime diagram templates, Minkowski quote",
          "formative": "\"Draw a spacetime diagram showing: (a) a stationary observer at x = 0, (b) a spaceship passing at 0.6c at t = 0, (c) a light pulse emitted from x = 0 at t = 0. (d) Calculate θ for the spaceship. (e) Mark the future light cone and determine: can the stationary observer send a message that reaches the spaceship?\""
        },
        {
          "num": 2,
          "title": "Simultaneity on Space-Time Diagrams",
          "focus": "Events simultaneous in one frame may not be in another",
          "minutes": 40,
          "understandings": [
            "The relativity of simultaneity: two events that are simultaneous in one frame are NOT necessarily simultaneous in another",
            "Simultaneity can be visualised on spacetime diagrams by drawing the lines of simultaneity for different observers",
            "This is a direct consequence of the Lorentz transformations: if t' = γ(t − vx/c²), then events at different x with the same t have different t'",
            "Simultaneity is relative, not absolute — this is perhaps the most counterintuitive consequence of special relativity"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> THE TRAIN AND LIGHTNING — Einstein's classic thought experiment: lightning strikes both ends of a moving train simultaneously (in the ground frame). A passenger at the centre of the train: does she see them simultaneously? No — she moves toward one flash and away from the other. Since light speed is constant, she sees the front flash first. \"Same events, different time ordering.\" Simultaneity is relative.</p><p><strong>Direct instruction (15 min):</strong> Show on a spacetime diagram: in frame S, two events at the same t (horizontal line) but different x. In frame S', the line of simultaneity is TILTED — these events have different t'. The faster S' moves, the more tilted the simultaneity line. Draw the transformed axes for S' on the same diagram. Show that S' disagrees about which event happened first.</p><p><strong>Mathematical verification (10 min):</strong> Use t' = γ(t − vx/c²): if two events have the same t but different x₁ and x₂, then t₁' = γ(t − vx₁/c²) and t₂' = γ(t − vx₂/c²). Since x₁ ≠ x₂, t₁' ≠ t₂'. The events are NOT simultaneous in S'. QED.</p><p><strong>Practice (10 min):</strong> Problems: calculate the time difference between two \"simultaneous\" events as seen from a moving frame. Draw the tilted simultaneity lines on diagrams.</p>",
          "engagementHook": {
            "title": "EINSTEIN'S TRAIN & LIGHTNING",
            "content": "Lightning strikes both ends of a 300 m train moving at 0.8c. Ground observer: simultaneous. Train passenger at the centre: \"The front flash arrives first — the front strike happened earlier!\" Same events, different ordering. \"If two people can't agree on WHEN things happened, can they agree on cause and effect?\" (Only for causally connected events — time-like intervals.) This single thought experiment breaks the intuition that time is universal."
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "Simultaneity was considered self-evident before Einstein — an assumption so deeply embedded in human experience that no one questioned it. Einstein's genius was to question the unquestionable. This is a powerful lesson in NOS: the most important scientific advances often come from questioning assumptions that everyone takes for granted."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded"],
          "ao": [
            "AO1 — State the relativity of simultaneity",
            "AO2 — Apply Lorentz transformations to show that simultaneous events in one frame aren't in another",
            "AO3 — Visualise simultaneity on spacetime diagrams with tilted axes"
          ],
          "resources": "Train-and-lightning animation, spacetime diagram templates with tilted axes, calculators",
          "formative": "\"Two explosions occur at x₁ = 0 and x₂ = 900 m at the same time t = 0 in frame S. Frame S' moves at 0.6c. (a) Find t₁' and t₂'. (b) Which event occurs first in S'? (c) Draw a spacetime diagram showing both frames' lines of simultaneity. (d) Can the order of these events matter physically? Why or why not?\""
        },
        {
          "num": 3,
          "title": "Muon Decay — Experimental Evidence",
          "focus": "How muon experiments confirm time dilation and length contraction",
          "minutes": 45,
          "understandings": [
            "Muon decay experiments provide experimental evidence for time dilation and length contraction",
            "Muons created in the upper atmosphere (~15 km) by cosmic rays travel at ~0.998c",
            "Rest-frame lifetime: 2.2 μs → should only travel ~660 m before decaying",
            "But muons ARE detected at sea level — explained by time dilation (Earth frame) or length contraction (muon frame)",
            "Both explanations give the same prediction — this internal consistency validates special relativity"
          ],
          "teachingStrategy": "<p><strong>The puzzle (10 min):</strong> Present the data: muons are created ~15 km up. They travel at 0.998c. Their rest lifetime is 2.2 μs. Classical calculation: distance = 0.998c × 2.2 μs = 659 m. They should decay long before reaching the ground. But detectors at sea level register a significant fraction of the muons created above. \"Something is very wrong with our classical calculation. What?\"</p><p><strong>Earth-frame explanation (10 min):</strong> Time dilation: γ at 0.998c = 15.8. Dilated lifetime: 2.2 × 15.8 = 34.8 μs. Distance: 0.998c × 34.8 μs = 10,400 m. Many muons survive 15 km. Quantitative: fraction surviving = e^(−t/τ), where τ is the dilated lifetime. Calculate the expected fraction at sea level — matches observation.</p><p><strong>Muon-frame explanation (10 min):</strong> In the muon's rest frame, its lifetime is normal (2.2 μs). But the atmosphere is length-contracted: 15 km / 15.8 = 949 m. The muon only needs to travel 949 m in 2.2 μs at 0.998c — possible. Same prediction, different explanation. Both frames agree on the observable: muons reach the ground.</p><p><strong>Synthesis (10 min):</strong> Compare the two explanations in a table: Earth says \"muon lives longer,\" muon says \"atmosphere is thinner.\" Same physics, two perspectives. This is the hallmark of a correct relativistic analysis — frame independence of predictions. Discuss: \"Which frame is right?\" Both are — that's the point of relativity.</p><p><strong>Practice (5 min):</strong> Full muon calculation from both frames.</p>",
          "engagementHook": {
            "title": "COSMIC RAY DETECTIVES",
            "content": "\"Right now, muons are raining down on you. They're created 15 km above your head, live for 2 microseconds, and somehow reach you. Without relativity, they'd decay 14 km above your head. You — sitting in this room — are living experimental evidence for special relativity.\" If available, show a cloud chamber video with cosmic ray muon tracks. The fact that students can BE the experiment — standing at sea level while muons arrive — makes this deeply personal."
          },
          "nos": {
            "tags": ["Observations", "Measurements", "Theories"],
            "description": "Muon decay experiments were first conducted by Rossi and Hall (1941) and later refined by Frisch and Smith (1963). These experiments are elegant because they test TWO predictions simultaneously (time dilation AND length contraction) using the same data. A single experiment confirming multiple predictions from one theory is especially powerful evidence."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Knowledgeable", "Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe muon decay experiments and their significance",
            "AO2 — Calculate muon lifetime and distance from both frames",
            "AO3 — Analyse why both frames give the same physical prediction"
          ],
          "resources": "Muon creation/detection diagram, cloud chamber video (if available), dual-frame calculation worksheet, calculators",
          "formative": "\"Muons at 0.995c, created 20 km up, rest lifetime 2.2 μs. (a) Calculate γ. (b) Earth frame: dilated lifetime and distance. Do they reach the ground? (c) Muon frame: contracted atmosphere thickness. Time to traverse? Do they reach? (d) A sceptic says 'time dilation is just a mathematical trick.' How does the muon experiment prove it's physically real?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "How does relativistic momentum p = γmv differ from Newtonian momentum? Why is F = ma insufficient at high speeds?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does mass-energy equivalence E = mc² connect to kinetic energy at relativistic speeds? How does Eₖ = (γ−1)mc² reduce to ½mv² at low speeds?" },
    { "topic": "A.4 Rigid Body Mechanics", "question": "Does the mass-energy equivalence affect moment of inertia at relativistic speeds?" },
    { "topic": "D.3 Motion in EM Fields", "question": "How do electric and magnetic fields transform between reference frames? A purely electric field in one frame can appear as a magnetic field in another." },
    { "topic": "E.1 Structure of the Atom", "question": "How does the relativistic energy-momentum relation E² = (pc)² + (mc²)² apply to particles and photons?" },
    { "topic": "E.3 Radioactive Decay", "question": "How does mass defect (Δm) relate to binding energy via E = Δmc²? Why is this relevant to nuclear power and weapons?" }
  ]
}

};