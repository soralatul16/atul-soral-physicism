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
};
"B1": {
  "title": "Thermal Energy Transfers",
  "code": "B.1",
  "theme": "B",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How do macroscopic observations provide a model of the microscopic properties of a substance?",
    "How is energy transferred within and between systems?",
    "How can observations of one physical quantity be used to determine the other properties of a system?"
  ],
  "groups": [
    {
      "name": "Molecular Theory & Temperature",
      "color": "accent5",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Molecular Theory — Solids, Liquids & Gases",
          "focus": "How microscopic particle behaviour explains macroscopic properties",
          "minutes": 35,
          "understandings": [
            "Molecular theory in solids, liquids and gases",
            "Solids: particles vibrate about fixed positions, closely packed, strong intermolecular forces, fixed shape and volume",
            "Liquids: particles can slide past each other, closely packed but disordered, moderate forces, fixed volume but variable shape",
            "Gases: particles move randomly at high speed, widely spaced, negligible forces except during collisions, no fixed shape or volume"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show three sealed containers: an ice cube, water, and steam (visible from a kettle). \"Same substance, three completely different behaviours. What's different at the particle level?\" Students sketch what they think the particles look like in each.</p><p><strong>Direct instruction (15 min):</strong> Present the molecular model for each phase. Solids: regular lattice, particles vibrate about equilibrium positions, strong bonds. Liquids: particles have enough energy to break free from fixed positions but not enough to separate entirely. Gases: particles move randomly, collide elastically, spend most of their time far apart. Link macroscopic properties (shape, volume, compressibility, density) to microscopic behaviour. Build a comparison table.</p><p><strong>Simulation (10 min):</strong> Use a PhET or similar particle simulation. Students observe: increase temperature → particles vibrate more (solid), move faster (liquid/gas). At phase boundaries, particles transition. This visual reinforcement connects the abstract model to observable behaviour.</p><p><strong>Practice (5 min):</strong> Match 6 macroscopic observations to their microscopic explanations.</p>",
          "engagementHook": {
            "title": "THE SYRINGE CHALLENGE",
            "content": "Give students three syringes: one filled with water, one with air, one with sand. Block the end. \"Compress each.\" Air compresses easily (particles far apart). Water barely compresses (particles close but mobile). Sand doesn't compress at all (rigid lattice). The feel in their fingers IS the molecular model. \"Why can't you compress water? Because the molecules are already touching.\""
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "The particle model is one of the most successful models in physics — it explains phase behaviour, pressure, temperature, and energy transfer using a single framework. But it's still a model: real molecules have shape, charge distribution, and quantum properties that the simple 'hard sphere' model ignores."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Describe molecular theory for each phase",
            "AO2 — Link macroscopic properties to microscopic particle behaviour"
          ],
          "resources": "Sealed containers with ice/water/steam, syringes (3 per group), sand, PhET particle simulation, comparison table handout",
          "formative": "\"Explain, using molecular theory: (a) why gases are compressible but liquids are not, (b) why solids have a fixed shape, (c) why liquids take the shape of their container, (d) why gas pressure increases when the gas is heated at constant volume.\""
        },
        {
          "num": 2,
          "title": "Temperature, Kelvin Scale & Average Kinetic Energy",
          "focus": "T/K = t/°C + 273 and E̅ₖ = (3/2)k_BT",
          "minutes": 35,
          "understandings": [
            "Kelvin and Celsius scales are used to express temperature",
            "The change in temperature is the same in K and °C (ΔT = Δt)",
            "T/K = t/°C + 273",
            "Kelvin temperature is a measure of the average kinetic energy of particles: E̅ₖ = (3/2)k_BT, where k_B is the Boltzmann constant",
            "At 0 K (absolute zero), particles have minimum energy — all translational motion ceases"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"What is the coldest possible temperature?\" Students guess. Reveal: −273.15°C = 0 K. \"At this temperature, particles stop moving (classically). You can't go lower because there's no more kinetic energy to remove.\" This motivates the Kelvin scale — it starts at zero where energy starts at zero.</p><p><strong>Direct instruction (15 min):</strong> Define the scales: T/K = t/°C + 273. Key insight: ΔT = Δt — a change of 1°C is the same as a change of 1 K. The Kelvin scale is the 'physicist's scale' because it's proportional to average KE: E̅ₖ = (3/2)k_BT. At 300 K (room temperature): E̅ₖ = 1.5 × 1.38×10⁻²³ × 300 = 6.21 × 10⁻²¹ J. \"This is the average KE of every air molecule around you right now.\"</p><p><strong>Calculation practice (10 min):</strong> (1) Convert 37°C (body temperature) to K. (2) Find average KE of air molecules at room temperature (300 K). (3) At what temperature do molecules have twice the average KE? (600 K = 327°C). (4) \"If you double the Celsius temperature from 20°C to 40°C, does the average KE double?\" No — must use Kelvin: 293 K to 313 K, ratio = 1.07. Common trap!</p><p><strong>Practice (5 min):</strong> Conversion and E̅ₖ calculation problems.</p>",
          "engagementHook": {
            "title": "THE DOUBLING TRAP",
            "content": "\"If you heat a gas from 20°C to 40°C, does the average KE of the molecules double?\" Every student says yes. Then calculate in Kelvin: 293 K to 313 K — the ratio is 1.07, not 2. KE barely changes! To actually double the KE, you'd need 586 K = 313°C. \"This is why physicists use Kelvin — Celsius lies about proportions.\""
          },
          "nos": {
            "tags": ["Models", "Measurements"],
            "description": "The Kelvin scale was defined by Lord Kelvin (William Thomson) based on the theoretical concept of absolute zero — a temperature that can be approached but never reached. The scale connects a macroscopic measurement (temperature) to a microscopic quantity (average KE). This bridge between macro and micro is the essence of thermal physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State the Kelvin-Celsius relationship; state E̅ₖ = (3/2)k_BT",
            "AO2 — Convert between K and °C; calculate average KE at a given temperature",
            "AO3 — Analyse why Kelvin must be used for proportional reasoning"
          ],
          "resources": "Whiteboard, calculators, k_B value card, temperature comparison chart (body, room, boiling, Sun surface)",
          "formative": "\"(a) Convert −40°C to Kelvin. (b) At what Celsius temperature do molecules have an average KE of 1 × 10⁻²⁰ J? (c) A gas at 200 K is heated to 800 K. By what factor does the average KE increase? (d) Explain why doubling the Celsius temperature does NOT double the KE.\""
        },
        {
          "num": 3,
          "title": "Internal Energy",
          "focus": "Total intermolecular PE + total random KE",
          "minutes": 30,
          "understandings": [
            "Internal energy of a system is the total intermolecular potential energy (from forces between molecules) plus the total random kinetic energy (from random motion)",
            "Temperature difference determines the direction of resultant thermal energy transfer between bodies — from hot to cold",
            "Heating a system increases KE (temperature rises) OR increases PE (phase changes at constant temperature) — but not both simultaneously during a phase change"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Internal energy = total KE (random motion) + total PE (intermolecular forces). When you heat a solid: KE increases → temperature rises. At the melting point: energy goes into BREAKING BONDS (increasing PE), not increasing KE → temperature stays constant during the phase change. After melting: KE increases again → temperature rises. This explains the flat sections on a heating curve.</p><p><strong>Heating curve analysis (10 min):</strong> Draw and annotate the temperature-time graph for heating ice from −20°C to steam at 120°C. Label: solid warming (KE ↑), melting (PE ↑, T constant), liquid warming (KE ↑), boiling (PE ↑, T constant), steam warming (KE ↑). Students annotate their own copy. \"Why is the boiling plateau longer than the melting plateau?\" (Latent heat of vaporisation >> fusion.)</p><p><strong>Thermal equilibrium (5 min):</strong> Heat flows from hot to cold until equilibrium (same T). Never the reverse — this is the direction of spontaneous energy transfer. Connect to the 2nd law of thermodynamics (preview B.4 for HL).</p><p><strong>Practice (5 min):</strong> \"A block of ice at 0°C is heated. Does its internal energy increase? Does its temperature increase?\" (Yes / No — during melting, PE increases but T stays constant.)</p>",
          "engagementHook": {
            "title": "THE ICE THAT WON'T GET HOTTER",
            "content": "Heat a beaker of ice. Monitor with a thermometer. Temperature rises to 0°C then STOPS — for several minutes — while the ice melts. \"You're adding energy but the temperature isn't rising. Where is the energy going?\" Into breaking intermolecular bonds (PE). The flat plateau is visible proof that internal energy has two components."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "The internal energy model explains why temperature plateaus during phase changes — a phenomenon that puzzled early scientists. The distinction between KE and PE components of internal energy is a model that successfully predicts heating curves, specific heat, and latent heat."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define internal energy as total KE + total PE",
            "AO2 — Explain why temperature remains constant during a phase change",
            "AO3 — Analyse heating curves in terms of KE and PE changes"
          ],
          "resources": "Beaker, ice, Bunsen burner or hotplate, thermometer, heating curve diagram handout",
          "formative": "\"A substance is heated at a constant rate. The temperature rises from 20°C to 50°C in 3 min, stays at 50°C for 5 min, then rises again. (a) What happens at 50°C? (b) Is internal energy increasing during the plateau? (c) Which component of internal energy is changing?\""
        }
      ]
    },
    {
      "name": "Thermal Properties of Matter",
      "color": "accent2",
      "totalMinutes": 110,
      "subtopics": [
        {
          "num": 1,
          "title": "Specific Heat Capacity — Q = mcΔT",
          "focus": "How much energy to change a substance's temperature",
          "minutes": 40,
          "understandings": [
            "Specific heat capacity c: energy required to raise the temperature of 1 kg of a substance by 1 K",
            "Q = mcΔT, where Q is energy transferred, m is mass, c is specific heat capacity, ΔT is temperature change",
            "Different substances have different c values — water has an unusually high c (4200 J kg⁻¹ K⁻¹)",
            "Solve problems involving specific heat capacity including mixtures reaching thermal equilibrium"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why does sand at the beach burn your feet but the sea feels cool — even though both have been in the same sun all day?\" Sand has low specific heat capacity; water has high c. Same energy input → different temperature change.</p><p><strong>Direct instruction (10 min):</strong> Define c and present Q = mcΔT. Units: J kg⁻¹ K⁻¹. Compare: water (4200), aluminium (900), copper (390), iron (450), sand (~800). Water's high c means it heats and cools slowly — this moderates coastal climates, makes water an excellent coolant, and is why your hot water bottle stays warm.</p><p><strong>Lab (15 min):</strong> MEASURING c — Heat a metal block (with holes for heater and thermometer) with a known electrical energy input (P × t = VIt). Measure mass, initial and final temperature. Calculate c = Q/(mΔT). Compare with textbook value. Discuss sources of error (heat loss to surroundings).</p><p><strong>Practice (10 min):</strong> (1) Energy to heat 2 kg of water from 20°C to 100°C. (2) 500 g of iron at 200°C is dropped into 1 kg of water at 20°C — find the equilibrium temperature (heat lost by iron = heat gained by water).</p>",
          "engagementHook": {
            "title": "THE BEACH PARADOX — SAND vs SEA",
            "content": "\"Noon at the beach: sand burns your feet, sea is refreshing. Midnight: sand is cold, sea is warm. Same sun, same time, opposite temperatures. Why?\" Water's high c means it resists temperature change. This single number explains coastal climates, ocean currents, and why England's winters are milder than Moscow's (same latitude)."
          },
          "nos": {
            "tags": ["Measurements", "Global impact"],
            "description": "Specific heat capacity was first systematically measured by Joseph Black in the 1760s. His work on latent heat and specific heat laid the foundations for thermodynamics. Water's high c has global consequences: ocean thermal inertia buffers climate, moderates weather, and stores solar energy seasonally."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Caring"],
          "ao": [
            "AO1 — Define specific heat capacity",
            "AO2 — Apply Q = mcΔT; solve thermal equilibrium problems",
            "AO3 — Analyse experimental data to determine c; evaluate sources of error"
          ],
          "resources": "Metal block with heater and thermometer holes, power supply, joulemeter or voltmeter+ammeter+timer, insulation, balance",
          "formative": "\"A 300 g copper block (c = 390) at 95°C is placed in 500 g of water (c = 4200) at 15°C in an insulated container. (a) Write the energy conservation equation. (b) Find the equilibrium temperature. (c) Why is the final temperature much closer to 15°C than to 95°C?\""
        },
        {
          "num": 2,
          "title": "Phase Changes & Specific Latent Heat — Q = mL",
          "focus": "Energy for phase transitions at constant temperature",
          "minutes": 40,
          "understandings": [
            "A phase change represents a change in particle behaviour from a change in energy at constant temperature",
            "During a phase change, energy changes the intermolecular PE — not the KE — so temperature remains constant",
            "Specific latent heat of fusion L_f: energy to change 1 kg of solid to liquid at constant temperature",
            "Specific latent heat of vaporisation L_v: energy to change 1 kg of liquid to gas at constant temperature",
            "Q = mL for phase change calculations; L_v >> L_f for most substances"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Put ice in a drink. After 10 minutes, the drink is colder and the ice has melted. \"Where did the energy go?\" Into breaking the bonds in ice (latent heat of fusion). The drink lost thermal energy; the ice gained PE without changing temperature.</p><p><strong>Direct instruction (10 min):</strong> Define latent heat: L_f (fusion) and L_v (vaporisation). Q = mL. Water: L_f = 334 kJ/kg, L_v = 2260 kJ/kg. L_v is ~7× larger because vaporisation requires completely separating molecules, not just loosening them. \"A steam burn at 100°C is far worse than a water burn at 100°C because the steam releases 2260 kJ/kg of latent heat onto your skin as it condenses.\"</p><p><strong>Lab (15 min):</strong> MEASURING L_f — Melt a known mass of ice by adding it to warm water of known mass and temperature. Measure final temperature. Energy balance: m_water × c × ΔT_water = m_ice × L_f + m_ice × c × ΔT_meltwater. Solve for L_f. Compare with textbook value.</p><p><strong>Practice (10 min):</strong> (1) Energy to convert 2 kg of ice at −10°C to steam at 110°C (multi-step: warming + melting + warming + boiling + warming). (2) How much ice at 0°C is needed to cool 500 g of water from 80°C to 10°C?</p>",
          "engagementHook": {
            "title": "THE STEAM BURN WARNING",
            "content": "\"Steam at 100°C and water at 100°C — same temperature. Which burns more?\" Steam — because it releases 2260 kJ/kg of latent heat as it condenses on your skin BEFORE it even starts cooling. That's 7× more energy than melting the same mass of ice. Students calculate: energy released by 1 g of steam condensing on skin vs 1 g of water at 100°C cooling to 37°C. The steam delivers 6× more energy."
          },
          "nos": {
            "tags": ["Measurements", "Models"],
            "description": "Joseph Black (1761) distinguished between heat and temperature — a revolutionary insight. Before Black, scientists thought melting happened because 'heat particles' (caloric) accumulated. Black showed that energy is absorbed WITHOUT temperature change during phase transitions. This led directly to the concept of latent heat."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define specific latent heat of fusion and vaporisation",
            "AO2 — Apply Q = mL; solve multi-step heating/cooling problems",
            "AO3 — Analyse why L_v >> L_f in terms of molecular behaviour"
          ],
          "resources": "Ice, warm water, insulated cup, thermometer, balance, Bunsen burner or hotplate",
          "formative": "\"Convert 500 g of ice at −15°C to steam at 100°C. Calculate the total energy required, showing each step separately. Which step requires the most energy and why?\""
        },
        {
          "num": 3,
          "title": "Density — ρ = m/V",
          "focus": "A macroscopic property explained by microscopic spacing",
          "minutes": 30,
          "understandings": [
            "Density ρ = m/V (mass per unit volume)",
            "Units: kg m⁻³",
            "Density reflects molecular spacing: solids and liquids have similar densities (particles close); gases have much lower density (particles far apart)",
            "Density varies with temperature (expansion) and phase (ice is less dense than water — an anomaly)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Float an ice cube in water. \"Why does ice float? Almost every other substance sinks when it solidifies.\" Water expands on freezing — ice is less dense. This anomaly is why lakes freeze from the top, fish survive winter, and Earth's climate works.</p><p><strong>Direct instruction (10 min):</strong> Define ρ = m/V. Typical values: air 1.2 kg/m³, water 1000, ice 917, iron 7874, gold 19300. Connect to molecular theory: gases have low ρ because particles are far apart. Solids/liquids are similar because particles are close. Temperature affects ρ: heating → expansion → ρ decreases (usually).</p><p><strong>Lab (10 min):</strong> DENSITY DETECTIVE — Give students 5 unknown metal blocks. They measure mass (balance) and volume (water displacement or ruler for regular shapes). Calculate ρ. Identify each metal by comparing with a reference table.</p><p><strong>Practice (5 min):</strong> Density calculation problems, including irregular shapes (displacement method).</p>",
          "engagementHook": {
            "title": "DENSITY DETECTIVE & THE ICE ANOMALY",
            "content": "Students identify mystery metal blocks by measuring their density. Then the big question: \"If ice were denser than water (like most solids), lakes would freeze from the BOTTOM up. Fish would die. Earth's oceans would eventually freeze solid. Life as we know it depends on water being weird.\" One anomalous density value → the survival of aquatic life."
          },
          "nos": {
            "tags": ["Measurements", "Patterns"],
            "description": "Archimedes supposedly discovered density measurement by displacement while solving the problem of the king's crown (c. 250 BC). Whether or not the story is true, the method — measuring volume by displacement — remains one of the most elegant experimental techniques in physics."
          },
          "atl": ["Research skills", "Thinking skills"],
          "learnerProfile": ["Inquirer", "Knowledgeable"],
          "ao": [
            "AO1 — Define density; state ρ = m/V",
            "AO2 — Calculate density; identify substances from density values",
            "AO3 — Explain density differences between phases using molecular theory"
          ],
          "resources": "Mystery metal blocks (5 types), balance, displacement can or graduated cylinder, ruler, density reference table",
          "formative": "\"A block measures 3 cm × 4 cm × 5 cm and has mass 324 g. (a) Calculate its density. (b) Identify the metal. (c) Will it float in water? In mercury (ρ = 13,600 kg/m³)? (d) Why is ice less dense than liquid water? Explain at the molecular level.\""
        }
      ]
    },
    {
      "name": "Thermal Energy Transfer Mechanisms",
      "color": "accent3",
      "totalMinutes": 150,
      "subtopics": [
        {
          "num": 1,
          "title": "Conduction & Convection",
          "focus": "Molecular-level mechanisms of thermal energy transfer",
          "minutes": 40,
          "understandings": [
            "Conduction: thermal energy transfer through a material by molecular vibrations and collisions — particles transfer KE to neighbours without bulk movement",
            "The rate of thermal energy transfer by conduction: Q/t = kA(ΔT)/d, where k is thermal conductivity, A is cross-sectional area, ΔT is temperature difference, d is thickness",
            "Convection: thermal energy transfer by bulk movement of fluid — heated fluid expands, becomes less dense, rises; cooler fluid sinks to replace it",
            "Convection requires a fluid medium; conduction can occur in solids, liquids, and gases"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hold a metal rod with one end in a Bunsen flame. After 30 seconds, the other end is warm. \"The flame never touched this end. How did the energy get here?\" Conduction — vibrating molecules pass energy along the rod.</p><p><strong>Direct instruction — Conduction (10 min):</strong> At the molecular level: fast-vibrating particles at the hot end collide with slower neighbours, transferring KE. Rate depends on: material (k), area (A), temperature difference (ΔT), and thickness (d). Q/t = kAΔT/d. Metals conduct well (free electrons carry energy); insulators don't (no free electrons).</p><p><strong>Direct instruction — Convection (10 min):</strong> Heat water in a beaker from one side. Add a drop of dye. Students observe: dye rises on the heated side and sinks on the cool side — a convection current. Explain: heated water expands → lower density → rises → cooler water sinks to replace it → continuous loop. Only works in fluids (needs bulk movement). Examples: sea breezes, room heating, Earth's mantle.</p><p><strong>Lab (10 min):</strong> CONDUCTION RACE — Rods of different materials (copper, iron, glass, wood) with wax beads at regular intervals, all heated at one end. Students time how fast the wax melts along each rod. Rank by conductivity.</p><p><strong>Practice (5 min):</strong> Calculate rate of heat transfer through a wall using Q/t = kAΔT/d.</p>",
          "engagementHook": {
            "title": "THE CONDUCTION RACE & CONVECTION DYE SWIRL",
            "content": "Wax beads on different metal rods melt at different rates — copper wins (highest k). Students see energy 'racing' along the rod. Then the dye in heated water creates beautiful, swirling convection currents visible to the whole class. Two demos, two mechanisms, both visual and immediate."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "Conduction and convection were understood at the macroscopic level long before the molecular theory explained them. The molecular explanation (vibration transfer for conduction, density-driven flow for convection) came later and unified multiple observations under one framework."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe conduction and convection at the molecular level",
            "AO2 — Apply Q/t = kAΔT/d to calculate conduction rates",
            "AO3 — Analyse which mechanism dominates in different scenarios"
          ],
          "resources": "Metal rods (copper, iron, glass, wood), wax beads, Bunsen burner, beaker + dye + heater, thermometers",
          "formative": "\"A glass window (k = 0.8 W m⁻¹ K⁻¹) is 1.5 m × 1 m × 5 mm thick. Inside: 22°C. Outside: 5°C. (a) Calculate the rate of heat loss. (b) If replaced by double glazing (two panes separated by air, k_air = 0.025), how does the heat loss change? (c) Why is trapped air a good insulator?\""
        },
        {
          "num": 2,
          "title": "Thermal Radiation, Stefan-Boltzmann & Wien's Law",
          "focus": "How bodies emit and absorb electromagnetic radiation",
          "minutes": 40,
          "understandings": [
            "Radiation: thermal energy transfer by electromagnetic waves — requires no medium (works in vacuum)",
            "All bodies above 0 K emit thermal radiation; the hotter the body, the more radiation emitted",
            "Stefan-Boltzmann law: total power radiated by a black body L = σAT⁴, where σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴",
            "Wien's displacement law: the peak wavelength of emission is inversely proportional to temperature: λ_max × T = 2.9 × 10⁻³ m·K",
            "Hotter objects peak at shorter wavelengths (blue) and cooler at longer (red)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How does the Sun's energy reach Earth? There's no air in space — so conduction and convection are impossible.\" Radiation — electromagnetic waves travel through vacuum. Everything above 0 K radiates. You are radiating right now — about 100 W of infrared.</p><p><strong>Direct instruction (15 min):</strong> Stefan-Boltzmann: L = σAT⁴. The T⁴ dependence is extreme: double the temperature → 16× the power. Wien's law: λ_max = 2.9 × 10⁻³ / T. The Sun (5800 K): λ_max = 500 nm (green/yellow — visible light). A human (310 K): λ_max = 9.4 μm (infrared — invisible). A blue star (30,000 K): λ_max = 97 nm (UV). Show a blackbody spectrum: the curve shifts left and grows enormously as T increases.</p><p><strong>Worked examples (10 min):</strong> (1) Find λ_max for a star at 4000 K. (2) Calculate total power radiated by the Sun (T = 5800 K, R = 6.96 × 10⁸ m). (3) An object has λ_max = 1.0 μm — find its temperature. (4) A body at 600 K is heated to 1200 K — by what factor does its radiated power increase? (16×).</p><p><strong>Discussion (5 min):</strong> \"Why do hot coals glow red but a welding torch glows white-blue?\" Wien's law: higher T → shorter λ → colour shifts from red to orange to white to blue.</p><p><strong>Practice (5 min):</strong> Stefan-Boltzmann and Wien's law calculations.</p>",
          "engagementHook": {
            "title": "YOU ARE GLOWING — 100 WATTS OF INVISIBLE LIGHT",
            "content": "\"Right now, you are emitting about 100 W of infrared radiation. You are literally glowing — just not in visible light.\" Calculate: L = σAT⁴ = 5.67×10⁻⁸ × 1.7 × 310⁴ ≈ 890 W total, but you also absorb ~790 W from your surroundings, so net emission is ~100 W. Show an infrared camera image of the class — everyone is bright. \"This is why a crowded room gets warm even with the heating off.\""
          },
          "nos": {
            "tags": ["Theories", "Measurements", "Patterns"],
            "description": "The Stefan-Boltzmann law was discovered empirically by Josef Stefan (1879) and derived theoretically by Ludwig Boltzmann (1884). Wien's law was derived in 1893. These laws describe blackbody radiation — the theoretical framework that eventually led Max Planck to quantum theory in 1900. Thermal radiation is where classical physics first broke down."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State Stefan-Boltzmann and Wien's laws",
            "AO2 — Apply L = σAT⁴ and λ_max T = 2.9 × 10⁻³ m·K",
            "AO3 — Analyse how temperature affects the spectrum of emitted radiation"
          ],
          "resources": "Infrared camera (or phone with IR app), blackbody spectrum diagram, calculators, star colour comparison chart",
          "formative": "\"Star A has surface temperature 3000 K. Star B has surface temperature 12,000 K. (a) Find λ_max for each — what colour would each appear? (b) Star B has the same radius as Star A. By what factor is its luminosity greater? (c) A third star has λ_max = 350 nm. Find its temperature.\""
        },
        {
          "num": 3,
          "title": "Luminosity & Apparent Brightness",
          "focus": "How a star's power spreads over distance",
          "minutes": 35,
          "understandings": [
            "Luminosity L: total power radiated by a star in all directions (W)",
            "Apparent brightness b: power received per unit area at a distance d from the star: b = L/(4πd²)",
            "A star can have high luminosity but low apparent brightness if it's far away",
            "Solve problems involving luminosity, apparent brightness, and distance"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Sirius is the brightest star in the night sky. Is it the most luminous star we can see?\" No — Betelgeuse is ~100,000× more luminous than the Sun but appears dimmer than Sirius because it's much farther away. Brightness depends on BOTH luminosity and distance.</p><p><strong>Direct instruction (10 min):</strong> Define luminosity L = total power output (in W). Apparent brightness b = power per unit area at distance d: b = L/(4πd²). The 4πd² is the surface area of a sphere of radius d — the star's light spreads uniformly over this sphere. Inverse square law: double the distance → quarter the brightness.</p><p><strong>Worked examples (10 min):</strong> (1) The Sun: L = 3.85 × 10²⁶ W, d = 1.5 × 10¹¹ m → b = 1361 W/m² (the solar constant!). (2) Two stars have the same luminosity but star A is 3× farther → b_A = b_B/9. (3) A star has b = 4 × 10⁻⁹ W/m² and d = 8 × 10¹⁶ m → find L.</p><p><strong>Connection (5 min):</strong> Link L = σAT⁴ (Stefan-Boltzmann) with b = L/(4πd²). If you know T and R of a star, you can find L. If you measure b, you can find d. This is how astronomers measure distances to stars — a powerful application connecting B.1 to E.4 Fusion and Stars.</p><p><strong>Practice (5 min):</strong> Luminosity and brightness calculations.</p>",
          "engagementHook": {
            "title": "THE STREET LAMP ANALOGY",
            "content": "Hold a light bulb close — it's bright. Walk it to the back of the room — much dimmer. \"Same luminosity (same bulb). Different brightness (different distance). Stars work the same way.\" Calculate: the Sun's apparent brightness on Earth (1361 W/m²) vs on Mars (589 W/m²) vs on Neptune (1.5 W/m²). \"On Neptune, the Sun is barely brighter than a full moon on Earth.\""
          },
          "nos": {
            "tags": ["Measurements", "Theories", "Patterns"],
            "description": "The inverse square law for brightness was used by astronomers to estimate stellar distances long before parallax measurements were possible. This 'standard candle' method — comparing known luminosity with measured brightness to find distance — remains fundamental to cosmology (used with Cepheid variables and Type Ia supernovae)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Define luminosity and apparent brightness",
            "AO2 — Apply b = L/(4πd²) to solve for L, b, or d",
            "AO3 — Analyse why apparent brightness alone doesn't indicate luminosity"
          ],
          "resources": "Light bulb, light meter (or phone app), metre stick, star data table (Sirius, Betelgeuse, Sun), calculators",
          "formative": "\"The Sun has L = 3.85 × 10²⁶ W and is 1.5 × 10¹¹ m from Earth. (a) Calculate the apparent brightness (solar constant). (b) Alpha Centauri has L = 1.5L_Sun and is 4.1 × 10¹⁶ m away. Calculate its apparent brightness. (c) How many times brighter does the Sun appear compared to Alpha Centauri? (d) Explain why the Sun appears so much brighter despite being only slightly more luminous.\""
        },
        {
          "num": 4,
          "title": "Emissivity & Black Body Radiation",
          "focus": "Real surfaces vs perfect black bodies",
          "minutes": 35,
          "understandings": [
            "A perfect black body absorbs all incident radiation and emits the maximum possible radiation at every wavelength",
            "Real surfaces emit less than a black body: L = εσAT⁴, where emissivity ε is between 0 and 1",
            "ε = 1 for a perfect black body; ε < 1 for real surfaces",
            "Good emitters are also good absorbers; poor emitters are poor absorbers (reflective surfaces)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> A perfect black body is an idealisation: ε = 1. Real surfaces have ε < 1. Shiny metal: ε ≈ 0.05 (poor emitter, poor absorber, good reflector). Matt black surface: ε ≈ 0.95 (good emitter, good absorber). Human skin: ε ≈ 0.98 (nearly a black body in infrared!). Modify Stefan-Boltzmann: L = εσAT⁴.</p><p><strong>Demo (10 min):</strong> Leslie's cube: a metal cube with four different surfaces (matt black, shiny metal, white, rough). Fill with hot water. Use an infrared thermometer to measure radiation from each surface. Matt black radiates most. Shiny metal radiates least. \"Same temperature, different emission — because of ε.\"</p><p><strong>Practice (10 min):</strong> (1) A matt black sphere (ε = 0.95, r = 0.1 m, T = 400 K) — find L. (2) A shiny sphere (ε = 0.1, same r and T) — find L. Compare. (3) An object at 500 K receives 200 W of radiation and emits 180 W — find ε.</p><p><strong>Connection to B.2 (5 min):</strong> \"The Earth receives radiation from the Sun and emits radiation back to space. The balance between absorbed and emitted determines Earth's temperature. This is the basis of the greenhouse effect — next topic.\"</p>",
          "engagementHook": {
            "title": "LESLIE'S CUBE — WHICH SURFACE RADIATES MOST?",
            "content": "Four surfaces, same temperature, different emission rates. Students predict the ranking before measuring. Most get it wrong — they expect white to emit most (confusing visible reflection with IR emission). Matt black wins. \"Your skin has ε = 0.98 — you're almost a perfect black body in infrared. That's why infrared cameras work so well on people.\""
          },
          "nos": {
            "tags": ["Models", "Measurements", "Observations"],
            "description": "The concept of a 'black body' is a theoretical ideal that doesn't exist in nature. But it's one of the most useful idealisations in physics — the black body spectrum led directly to quantum theory (Planck, 1900). The gap between the ideal model and real surfaces (measured by ε) is precisely quantified, making the model both approximate and useful."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define emissivity and black body",
            "AO2 — Apply L = εσAT⁴ for real surfaces",
            "AO3 — Analyse why good emitters are good absorbers"
          ],
          "resources": "Leslie's cube (or 4 cans with different surfaces), hot water, infrared thermometer, calculators",
          "formative": "\"Two spheres of equal radius (0.05 m) are at 600 K. Sphere A is matt black (ε = 0.95). Sphere B is polished silver (ε = 0.05). (a) Calculate the power emitted by each. (b) Both are placed in a room at 300 K. Which cools faster and why? (c) Explain why spacecraft use shiny surfaces on some panels and black surfaces on others.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.3 Work, Energy & Power", "question": "How does the concept of internal energy relate to mechanical energy? How do efficiency and energy density connect to thermal losses?" },
    { "topic": "B.2 Greenhouse Effect", "question": "How do Stefan-Boltzmann and Wien's laws determine Earth's equilibrium temperature? How does emissivity affect the energy balance?" },
    { "topic": "B.3 Gas Laws", "question": "How does E̅ₖ = (3/2)k_BT connect to the ideal gas law PV = NkT? How does temperature relate to pressure?" },
    { "topic": "B.4 Thermodynamics (HL)", "question": "How does the concept of internal energy connect to the first law of thermodynamics?" },
    { "topic": "E.4 Fusion and Stars", "question": "How are Stefan-Boltzmann, Wien's law, luminosity, and apparent brightness used to classify stars on the HR diagram?" },
    { "topic": "IB Linking", "question": "How can observations of one physical quantity (e.g., peak wavelength) be used to determine other properties (e.g., temperature) of a system?" }
  ]
},
"B2": {
  "title": "Greenhouse Effect",
  "code": "B.2",
  "theme": "B",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How does the greenhouse effect help to maintain life on Earth and how does human activity enhance this effect?",
    "How is the atmosphere as a system modelled to quantify the Earth–atmosphere energy balance?"
  ],
  "groups": [
    {
      "name": "Solar Radiation & Surface Properties",
      "color": "accent5",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "The Solar Constant & Incoming Radiation",
          "focus": "S, projected area, and why the mean intensity is S/4",
          "minutes": 40,
          "understandings": [
            "The solar constant S: the power per unit area received from the Sun at the mean Earth–Sun distance (~1361 W/m²)",
            "The incoming radiative power depends on the projected surface of the planet along the direction of the rays — a disc of area πR²",
            "The total surface area of the sphere is 4πR², so the mean incoming intensity is S/4",
            "Conservation of energy applies to the Earth–atmosphere energy balance"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"The Sun blasts Earth with 1361 W on every square metre facing it. But the whole Earth doesn't face the Sun — it's a sphere. How much power does each square metre of Earth's surface ACTUALLY receive on average?\" Students guess. The answer: S/4 = 340 W/m². The factor of 4 is the ratio of sphere area to disc area.</p><p><strong>Direct instruction (15 min):</strong> Define the solar constant S. The Sun illuminates a disc (shadow area = πR²), but the radiation spreads over the whole sphere (surface area = 4πR²). Average power per unit area = S × πR² / 4πR² = S/4. Draw the geometry carefully — this is the single most common source of exam errors. Total power intercepted = S × πR². Average intensity over the sphere = S/4 = 340 W/m².</p><p><strong>Worked examples (10 min):</strong> (1) Total power intercepted by Earth (R = 6.37 × 10⁶ m): P = S × πR² = 1.74 × 10¹⁷ W. (2) Average intensity on Earth's surface: 1361/4 = 340 W/m². (3) For Mars (S_Mars = 589 W/m²): average = 589/4 = 147 W/m². \"Mars gets less than half the average solar input — one reason it's so cold.\"</p><p><strong>Practice (10 min):</strong> Calculate incoming power for different planets. Verify the S/4 factor geometrically.</p>",
          "engagementHook": {
            "title": "THE DISC vs SPHERE — WHY S/4?",
            "content": "Shine a torch on a globe. The lit area is a disc (circle of light on one side). But the globe's TOTAL surface is 4× larger. Take a photo — the shadow on the wall is a circle (πR²), but the ball has area 4πR². \"The Sun lights a disc but heats a sphere. That's why we divide by 4.\" Students physically see the geometry that causes the factor."
          },
          "nos": {
            "tags": ["Models", "Measurements"],
            "description": "The S/4 factor is a geometric model — it averages day/night and latitude into a single number. It's an approximation that works for global energy balance calculations but hides important local variations (equator vs poles, summer vs winter). Knowing what a model averages away is as important as knowing what it predicts."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Define the solar constant",
            "AO2 — Explain why mean incoming intensity is S/4; calculate total intercepted power",
            "AO3 — Apply the S/4 model to other planets"
          ],
          "resources": "Torch, globe, calculator, planetary S-values table",
          "formative": "\"Earth intercepts solar radiation over a disc of area πR². (a) Calculate the total power intercepted. (b) This power is distributed over the full sphere. Calculate the average intensity. (c) Explain physically why the poles receive less solar energy per unit area than the equator, even though S is constant.\""
        },
        {
          "num": 2,
          "title": "Albedo & Emissivity",
          "focus": "How much energy is reflected vs absorbed, and how efficiently a surface radiates",
          "minutes": 40,
          "understandings": [
            "Albedo α = total scattered (reflected) power / total incident power — the fraction of incoming radiation reflected back",
            "Earth's average albedo is approximately 0.3 (30% of sunlight reflected)",
            "Albedo varies daily and depends on cloud formations and latitude (ice/snow α ≈ 0.8, ocean α ≈ 0.06, clouds α ≈ 0.5–0.8)",
            "Emissivity ε = power radiated per unit area / σT⁴ — how effectively a surface radiates compared to a black body",
            "Absorbed power per unit area = (1 − α) × S/4"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show two satellite images of Earth: one with cloud cover, one without. \"Which Earth reflects more sunlight?\" The cloudy one — clouds have high albedo. \"If all clouds disappeared tomorrow, Earth would absorb MORE solar energy and warm up.\"</p><p><strong>Direct instruction (15 min):</strong> Define albedo: α = reflected/incident. Earth average: α = 0.3. But it varies hugely: fresh snow (0.8–0.9), ocean (0.06), forest (0.1–0.2), desert (0.3–0.4), clouds (0.5–0.8). Absorbed fraction = (1 − α). So Earth absorbs (1 − 0.3) × S/4 = 0.7 × 340 = 238 W/m². Recall emissivity from B.1: ε = actual radiation / black body radiation. Earth's effective emissivity ≈ 0.612 (due to greenhouse gases trapping some outgoing radiation).</p><p><strong>Ice-albedo feedback (5 min):</strong> \"If Earth warms → ice melts → albedo decreases → more absorption → more warming → more ice melts → ...\" This is a positive feedback loop. The reverse also works: more ice → higher albedo → cooling → more ice. This feedback amplifies climate changes in both directions.</p><p><strong>Worked examples (10 min):</strong> (1) Earth with α = 0.3: absorbed = (1−0.3) × 1361 × πR²/(4πR²) = 238 W/m². (2) If albedo dropped to 0.25 (less ice): absorbed = 255 W/m². Difference = 17 W/m² — massive at global scale. (3) A planet with α = 0.5 and S = 2000 W/m²: absorbed intensity?</p><p><strong>Practice (5 min):</strong> Albedo and absorbed power calculations.</p>",
          "engagementHook": {
            "title": "THE ICE-ALBEDO DEATH SPIRAL",
            "content": "\"Ice reflects 80% of sunlight. Ocean absorbs 94%. So when Arctic ice melts and exposes ocean, Earth absorbs dramatically more energy, which melts more ice, which...\" Draw the feedback loop on the board. Students calculate: replacing 1 million km² of ice (α = 0.8) with ocean (α = 0.06) increases absorbed power by how much? The numbers are alarming — and it's happening now."
          },
          "nos": {
            "tags": ["Global impact", "Models", "Patterns"],
            "description": "The ice-albedo feedback is a real-world example of positive feedback in a complex system. Climate models must account for multiple interacting feedbacks — a challenge that makes climate science both difficult and essential. The IPCC (International Panel on Climate Change) synthesises global scientific effort to quantify these effects."
          },
          "atl": ["Thinking skills", "Social skills"],
          "learnerProfile": ["Caring", "Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Define albedo and emissivity",
            "AO2 — Calculate absorbed power using (1−α)S/4",
            "AO3 — Analyse the ice-albedo feedback mechanism"
          ],
          "resources": "Satellite images (cloudy vs clear Earth), albedo values table for different surfaces, calculators",
          "formative": "\"Earth has α = 0.3 and S = 1361 W/m². (a) Calculate the power absorbed per unit area. (b) If global warming reduces α to 0.25, calculate the new absorbed power. (c) Calculate the difference in total power absorbed over Earth's entire surface. (d) Explain the ice-albedo positive feedback loop.\""
        },
        {
          "num": 3,
          "title": "Estimating Equilibrium Temperature",
          "focus": "Energy balance: power absorbed = power emitted",
          "minutes": 40,
          "understandings": [
            "At equilibrium, the power absorbed by a planet equals the power emitted",
            "Power absorbed = (1 − α) × S/4 × 4πR² = (1 − α) × S × πR²",
            "Power emitted = εσT⁴ × 4πR²",
            "Setting absorbed = emitted and solving for T gives the equilibrium temperature",
            "For a black body (ε = 1, α = 0): T = (S / 4σ)^(1/4) ≈ 279 K for Earth",
            "With albedo (α = 0.3): T ≈ 255 K = −18°C — but Earth's actual average is 288 K (15°C). The 33 K difference is the greenhouse effect"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Energy balance: at equilibrium, P_in = P_out. P_in = (1 − α) × S × πR². P_out = εσT⁴ × 4πR². Set equal: (1 − α)SπR² = εσT⁴ × 4πR². Cancel πR²: (1 − α)S = 4εσT⁴. Solve: T = [(1 − α)S / (4εσ)]^(1/4). For ε = 1, α = 0.3: T = [(0.7 × 1361) / (4 × 5.67 × 10⁻⁸)]^(1/4) = 255 K = −18°C. But Earth's actual T = 288 K (15°C). The 33 K difference = greenhouse warming.</p><p><strong>Worked examples (15 min):</strong> (1) Earth without atmosphere (ε = 1, α = 0.3): T = 255 K. (2) Earth as a perfect black body (ε = 1, α = 0): T = 279 K. (3) Moon (ε = 1, α = 0.12, no atmosphere): T = 270 K (actual varies −173 to +127 due to no atmosphere to distribute heat). (4) Venus (α = 0.76, S = 2601 W/m²): T_equilibrium = 232 K but actual = 737 K — extreme greenhouse effect.</p><p><strong>Surface-atmosphere energy exchange (5 min):</strong> Introduce the two-layer model: surface absorbs solar + back-radiation from atmosphere. Atmosphere absorbs IR from surface and re-emits in all directions (half up, half down). This is the basis of the greenhouse effect.</p><p><strong>Practice (5 min):</strong> Calculate equilibrium temperature for given α, S, ε values.</p>",
          "engagementHook": {
            "title": "EARTH WITHOUT A BLANKET — 255 K",
            "content": "\"Calculate Earth's temperature with no greenhouse effect: 255 K = −18°C. The oceans would be frozen solid. Life as we know it would be impossible. The greenhouse effect raises Earth by 33 K to a comfortable 15°C.\" Then Venus: equilibrium T = 232 K, actual T = 737 K — a runaway greenhouse added 500 K. \"The greenhouse effect is not the problem. The ENHANCED greenhouse effect is.\""
          },
          "nos": {
            "tags": ["Models", "Global impact", "Theories"],
            "description": "The energy balance model treats Earth as a single point — no seasons, no latitude variation, no weather. Yet it predicts the right order of magnitude for planetary temperatures. This is the power and limitation of simple models: they capture the essential physics but miss the detail. Climate scientists build increasingly complex models to include what the simple one omits."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the energy balance condition",
            "AO2 — Calculate equilibrium temperature using (1−α)S = 4εσT⁴",
            "AO3 — Analyse the difference between calculated and observed temperature to quantify the greenhouse effect"
          ],
          "resources": "Calculators, planetary data table (S, α for Earth, Mars, Venus, Moon), whiteboard for derivation",
          "formative": "\"A rocky planet orbits a star with S = 800 W/m². Its albedo is 0.2 and it has no atmosphere (ε = 1). (a) Calculate its equilibrium temperature. (b) If a greenhouse atmosphere reduces ε to 0.6, find the new equilibrium T. (c) By how many degrees does the greenhouse effect warm this planet? (d) Compare with Earth's 33 K greenhouse warming.\""
        }
      ]
    },
    {
      "name": "Greenhouse Gases & Mechanisms",
      "color": "accent2",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "Greenhouse Gases — Sources & Properties",
          "focus": "CH₄, H₂O, CO₂, N₂O — natural and human origins",
          "minutes": 40,
          "understandings": [
            "The main greenhouse gases are: methane (CH₄), water vapour (H₂O), carbon dioxide (CO₂), and nitrous oxide (N₂O)",
            "Each has origins that are both natural and created by human activity",
            "CO₂: natural (respiration, volcanic eruptions) and human (fossil fuel combustion, deforestation)",
            "CH₄: natural (wetlands, termites) and human (livestock, rice paddies, landfills, fossil fuel extraction)",
            "H₂O: natural (evaporation) — not directly from human activity but amplified by warming (feedback)",
            "N₂O: natural (soil bacteria) and human (agriculture, fertilisers, combustion)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Without greenhouse gases, Earth would be −18°C. Name the gases responsible.\" Students brainstorm. Most know CO₂. Fewer know CH₄, H₂O, N₂O. \"Water vapour is actually the MOST abundant greenhouse gas — but it's not the one we're worried about. Why?\"</p><p><strong>Direct instruction (15 min):</strong> Present each gas with natural and human sources. Key data: CO₂ has risen from 280 ppm (pre-industrial) to ~425 ppm (2024). CH₄ is 80× more potent than CO₂ over 20 years but less abundant. H₂O acts as a feedback amplifier: warming → more evaporation → more H₂O → more warming. N₂O stays in the atmosphere for ~114 years. Build a comparison table: gas, sources, relative warming potential, atmospheric lifetime.</p><p><strong>Data analysis (10 min):</strong> Show the Keeling Curve (CO₂ at Mauna Loa since 1958). Students observe: steady rise + annual oscillation. \"Why the zigzag?\" Northern hemisphere vegetation: summer photosynthesis absorbs CO₂; winter decay releases it. \"The Earth breathes — and we can see it in the data.\"</p><p><strong>Discussion (10 min):</strong> \"The burning of fossil fuels is a primary cause of the enhanced greenhouse effect\" (IB guidance). Discuss: fossil fuels release carbon that was locked underground for millions of years. This is a one-way transfer from the lithosphere to the atmosphere. Why is deforestation a double problem? (Less absorption AND releases stored carbon.)</p>",
          "engagementHook": {
            "title": "THE KEELING CURVE — EARTH BREATHING",
            "content": "Show the Keeling Curve. Students see two things: the relentless upward trend (human emissions) and the annual zigzag (seasonal vegetation). \"You can literally see the Northern Hemisphere's forests breathing in summer and exhaling in winter.\" Then zoom out: the pre-industrial baseline was 280 ppm. We're at 425 ppm. \"In 200 years, we've increased atmospheric CO₂ by 50%. The last time it was this high was 3 million years ago.\""
          },
          "nos": {
            "tags": ["Observations", "Measurements", "Global impact"],
            "description": "The Keeling Curve is one of the most important datasets in science — continuous, meticulous measurement since 1958. Charles Keeling had to fight for funding to maintain it. The data was initially considered unimportant. Now it's central to climate science. This shows why long-term systematic measurement matters, even when results seem routine."
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Caring", "Knowledgeable", "Open-minded"],
          "ao": [
            "AO1 — Name the four main greenhouse gases and their natural/human sources",
            "AO2 — Explain why burning fossil fuels enhances the greenhouse effect",
            "AO3 — Analyse the Keeling Curve data to identify trends and seasonal patterns"
          ],
          "resources": "Keeling Curve printout, greenhouse gas comparison table, CO₂ historical data, whiteboard",
          "formative": "\"For each greenhouse gas (CO₂, CH₄, H₂O, N₂O): (a) give one natural source and one human source, (b) explain why H₂O is the most abundant but not the one we focus on for policy, (c) why is CH₄ more concerning per molecule than CO₂? (d) Explain the annual oscillation in the Keeling Curve.\""
        },
        {
          "num": 2,
          "title": "How Greenhouse Gases Trap Energy",
          "focus": "Molecular energy levels, IR absorption, resonance, and re-emission",
          "minutes": 45,
          "understandings": [
            "The absorption of infrared radiation by greenhouse gases in terms of molecular energy levels and subsequent emission in all directions",
            "Earth radiates thermal radiation as a black body (peak in infrared per Wien's law: λ_max ≈ 10 μm at 288 K)",
            "Greenhouse gas molecules have vibrational and rotational energy levels spaced to match infrared wavelengths",
            "When IR photon energy matches an energy level gap, the molecule absorbs it → vibrates more → re-emits in a random direction",
            "The greenhouse effect can be explained by both a resonance model (molecules resonate at IR frequencies) and molecular energy levels",
            "Re-emission is in ALL directions — roughly half goes back toward the surface, effectively trapping energy"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"The Sun sends visible light to Earth. Earth absorbs it and re-emits it as infrared. If the atmosphere were transparent to IR, it would escape to space and Earth would be −18°C. But greenhouse gases ABSORB IR and send half of it back.\" Draw the energy flow diagram.</p><p><strong>Direct instruction (20 min):</strong> Step by step: (1) Sun emits mostly visible/UV (Wien: T = 5800 K → λ_max = 500 nm). (2) Earth's surface absorbs and warms to ~288 K. (3) Earth re-emits IR (λ_max ≈ 10 μm). (4) N₂ and O₂ (78% and 21% of atmosphere) are transparent to IR — they're symmetric molecules with no dipole moment. (5) CO₂, H₂O, CH₄, N₂O ARE asymmetric — they have vibrational modes that match IR frequencies. (6) When an IR photon matches the energy gap between vibrational levels, the molecule absorbs it. (7) The excited molecule re-emits a photon in a random direction. (8) ~50% heads back to Earth → surface receives solar + back-radiation → warmer than it would be without the atmosphere.</p><p><strong>Resonance model (10 min):</strong> An alternative explanation: greenhouse gas molecules have natural vibrational frequencies that match the frequencies of IR radiation. When the driving frequency (IR) matches the natural frequency, resonance occurs — maximum energy absorption. This is the same resonance from C.4 (standing waves). Discuss the limitation: real absorption isn't a single sharp frequency but a band (unlike ideal resonance).</p><p><strong>Diagram exercise (10 min):</strong> Students draw the complete energy flow diagram: Sun → surface → IR emission → absorption by GHGs → re-emission (up and down) → back-radiation. Label every energy transfer with approximate values from the energy balance calculation.</p>",
          "engagementHook": {
            "title": "THE BLANKET MODEL — BUT BETTER",
            "content": "\"A greenhouse gas isn't a blanket — it's more like a mirror that only works for infrared. Visible light passes straight through (you can see the sky). But infrared gets bounced back.\" Demonstrate: hold a glass pane between a heat source and an IR thermometer — the glass blocks IR but transmits visible. \"Glass does what CO₂ does — that's why actual greenhouses work!\" Then discuss: why is the resonance model useful but limited?"
          },
          "nos": {
            "tags": ["Models", "Theories", "Patterns"],
            "description": "Two models explain the greenhouse effect: molecular energy levels (quantum) and resonance (classical). Both give correct predictions but from different conceptual frameworks. The resonance model is simpler but less precise (real absorption has bandwidth). The energy level model is more accurate but requires quantum concepts. Having multiple models for the same phenomenon is normal in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe IR absorption in terms of molecular energy levels and resonance",
            "AO2 — Explain how re-emission in all directions leads to surface warming",
            "AO3 — Analyse the limitations of the resonance model vs the energy level model"
          ],
          "resources": "Glass pane, IR thermometer, heat source, energy flow diagram template, molecular vibration animations",
          "formative": "\"(a) Why does Earth emit infrared rather than visible light? Use Wien's law. (b) Why do N₂ and O₂ NOT absorb IR? (c) Draw the complete energy flow: Sun → surface → atmosphere → space AND back to surface. (d) Explain how the resonance model describes greenhouse gas absorption. What is its main limitation?\""
        },
        {
          "num": 3,
          "title": "The Enhanced Greenhouse Effect",
          "focus": "Human activity augmenting the natural greenhouse effect",
          "minutes": 45,
          "understandings": [
            "The augmentation of the greenhouse effect due to human activities is the enhanced greenhouse effect",
            "The burning of fossil fuels is a primary cause (IB guidance)",
            "Increased GHG concentrations → more IR absorption → more back-radiation → higher surface temperature",
            "Energy balance problems including energy exchanged between surface and atmosphere"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> The natural greenhouse effect (33 K warming) is essential for life. The enhanced greenhouse effect is the ADDITIONAL warming caused by human-produced GHGs. Mechanism: more CO₂ → more IR absorption → more back-radiation → surface temperature rises → more H₂O evaporates (feedback) → even more warming. This is not speculative — it's measured. Global average temperature has risen ~1.2°C since pre-industrial times.</p><p><strong>Energy balance problem (15 min):</strong> Two-layer model: Surface at T_s emits εσT_s⁴ upward. Atmosphere at T_a absorbs all IR and re-emits εσT_a⁴ both up and down. Surface receives: S(1−α)/4 + εσT_a⁴ (back-radiation). At equilibrium: this equals εσT_s⁴. Solve for T_s in terms of T_a, or given values. Walk through the algebra carefully — this is a frequent exam question.</p><p><strong>Data interpretation (10 min):</strong> Show the global temperature anomaly graph (1880–present). Show CO₂ concentration over the same period. Ask students to describe the correlation. Then discuss: \"Correlation doesn't prove causation — but the MECHANISM (IR absorption by CO₂) is understood from physics. The correlation + mechanism together make the case.\"</p><p><strong>Group debate (10 min):</strong> \"What should be done?\" Groups propose one policy each based on the physics: carbon tax (reduce emissions), reforestation (increase absorption), geoengineering (increase albedo), nuclear power (zero-carbon energy). Each group must use at least two physics concepts from B.2 in their argument.</p>",
          "engagementHook": {
            "title": "VENUS — THE RUNAWAY GREENHOUSE WARNING",
            "content": "\"Venus has an atmosphere that is 96% CO₂. Its equilibrium temperature should be 232 K (−41°C). Its actual surface temperature is 737 K (464°C) — hot enough to melt lead. The greenhouse effect added 500 KELVIN.\" Show a comparison: Earth's natural greenhouse adds 33 K. Venus's adds 500 K. \"Could Earth become Venus? Probably not — but the direction of the trend is the same. Every tonne of CO₂ we add pushes us further from equilibrium.\""
          },
          "nos": {
            "tags": ["Global impact", "Science as a shared endeavour", "Ethics"],
            "description": "Climate science represents perhaps the most consequential application of physics to society. The IPCC brings together thousands of scientists globally to assess the evidence. The science is clear; the policy response involves ethical, economic, and political dimensions that science informs but doesn't decide. Scientists have a responsibility to communicate findings honestly and clearly."
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Caring", "Principled", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — Define the enhanced greenhouse effect",
            "AO2 — Solve energy balance problems including surface-atmosphere exchange",
            "AO3 — Analyse the relationship between GHG concentration and temperature data"
          ],
          "resources": "Global temperature anomaly graph, CO₂ vs temperature correlation data, Venus comparison data, debate cards, calculators",
          "formative": "\"In a simple model: the surface at T_s emits σT_s⁴. The atmosphere absorbs all IR and re-emits σT_a⁴ equally up and down. Solar input absorbed = (1−α)S/4 = 238 W/m². (a) Write the energy balance for the surface. (b) Write the energy balance for the atmosphere. (c) Solve for T_s and T_a. (d) Compare T_s with the no-atmosphere case (255 K). How much does this simple greenhouse model warm the surface?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "B.1 Thermal Energy Transfers", "question": "How do Stefan-Boltzmann and Wien's laws determine the spectral properties of solar and terrestrial radiation?" },
    { "topic": "C.1 Simple Harmonic Motion / C.4 Resonance", "question": "What relevance do simple harmonic motion and resonance have to climate change?" },
    { "topic": "B.5 Current and Circuits / E.4 Fission", "question": "How do different methods of electricity production affect the energy balance of the atmosphere?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does energy density of fuels relate to CO₂ emissions and the enhanced greenhouse effect?" },
    { "topic": "IB Linking (NOS)", "question": "How are developments in science and technology affected by climate change?" },
    { "topic": "IB Linking (Models)", "question": "What limitations are there in using a resonance model to explain the greenhouse effect?" }
  ]
},
"B3": {
  "title": "Gas Laws",
  "code": "B.3",
  "theme": "B",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How are the macroscopic characteristics of a gas related to the behaviour of individual molecules?",
    "What assumptions and observations lead to universal gas laws?",
    "How can models be used to help explain observed phenomena?"
  ],
  "groups": [
    {
      "name": "Pressure & Amount of Substance",
      "color": "accent5",
      "totalMinutes": 80,
      "subtopics": [
        {
          "num": 1,
          "title": "Pressure — P = F/A",
          "focus": "Force per unit area and how gas particles create pressure",
          "minutes": 35,
          "understandings": [
            "Pressure P = F/A, where F is the force exerted perpendicular to the surface",
            "Units: pascal (Pa) = N/m². Also: 1 atm = 101,325 Pa",
            "Gas pressure arises from collisions of gas molecules with the walls of the container",
            "More collisions per second OR harder collisions → higher pressure"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> A student stands on the floor in shoes — no problem. Now hand them a pair of stilettos (or place a block on a nail vs a flat surface). \"Same weight, different area, VERY different pressure.\" P = F/A means the same force concentrated on a smaller area creates higher pressure.</p><p><strong>Direct instruction (10 min):</strong> Define P = F/A. Units: 1 Pa = 1 N/m². Standard atmospheric pressure = 101,325 Pa ≈ 10⁵ Pa. The atmosphere pushes ~10⁵ N on every square metre of your body. \"Why aren't you crushed?\" Because the pressure inside your body pushes outward equally. For gases: billions of molecules collide with walls every second — each collision exerts a tiny force. Sum of all these tiny forces / wall area = pressure.</p><p><strong>Demo (5 min):</strong> Magdeburg hemispheres (or suction cups): press two half-spheres together and pump out the air. Students try to pull them apart — impossible. \"Atmospheric pressure pushes them together with enormous force.\" Calculate: F = P × A for the hemisphere area.</p><p><strong>Worked examples (10 min):</strong> (1) Atmospheric force on a 1 m × 2 m table = 10⁵ × 2 = 200,000 N ≈ 20 tonnes. \"Why doesn't the table collapse?\" Pressure acts from below too. (2) A nail (tip area 0.5 mm²) hit with 500 N → P = 10⁹ Pa = 1 GPa. (3) A tyre inflated to 2 atm has contact patch area 200 cm² — weight of car?</p><p><strong>Practice (5 min):</strong> Pressure calculations including unit conversions.</p>",
          "engagementHook": {
            "title": "THE MAGDEBURG HEMISPHERES — 20 TONNES OF NOTHING",
            "content": "Press two suction cups (or hemispheres) together and remove the air. Two students pull from each side — they can't separate them. \"There's NOTHING inside. What's holding them together?\" The atmosphere — pushing with ~10⁵ Pa on every square centimetre. Calculate the force: even for a 10 cm diameter hemisphere, F = P × πr² ≈ 800 N. That's like hanging 80 kg from the suction cups."
          },
          "nos": {
            "tags": ["Measurements", "Observations"],
            "description": "Otto von Guericke's original Magdeburg experiment (1654) used horse teams pulling in opposite directions and still couldn't separate the hemispheres. This public demonstration convinced sceptics that atmospheric pressure was real and enormous — a landmark in the history of experimental physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Define pressure; state P = F/A",
            "AO2 — Calculate pressure, force, or area given the other two; convert units"
          ],
          "resources": "Suction cups or Magdeburg hemispheres, vacuum pump (if available), nail and block, calculators",
          "formative": "\"A person (70 kg) stands on snow in boots (sole area 400 cm²) and sinks. They put on snowshoes (area 3000 cm²) and stay on top. (a) Calculate the pressure in each case. (b) By what factor does the pressure decrease? (c) Explain at the molecular level how gas pressure arises in a sealed container.\""
        },
        {
          "num": 2,
          "title": "Amount of Substance — n = N/Nₐ",
          "focus": "Counting molecules using moles, Avogadro's constant, and Boltzmann's constant",
          "minutes": 45,
          "understandings": [
            "The amount of substance n = N/Nₐ, where N is the number of molecules and Nₐ = 6.02 × 10²³ mol⁻¹ is the Avogadro constant",
            "One mole contains Nₐ particles — it's a counting unit, like a 'dozen' but for atoms",
            "The Boltzmann constant k_B = R/Nₐ = 1.38 × 10⁻²³ J/K bridges the molecular scale (per molecule) and the macroscopic scale (per mole)",
            "The molar gas constant R = 8.31 J mol⁻¹ K⁻¹"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How many molecules of air are in this classroom?\" Students guess wildly. Calculate: room volume ~150 m³ × 2.5 × 10²⁵ molecules/m³ ≈ 4 × 10²⁷ molecules. \"That's 4 followed by 27 zeros. We need a better way to count.\" Enter the mole.</p><p><strong>Direct instruction (15 min):</strong> Define n = N/Nₐ. One mole = 6.02 × 10²³ particles. Analogy: a dozen = 12. A mole = 6 × 10²³. Why this specific number? Because 1 mole of carbon-12 has a mass of exactly 12 g — the mole bridges counting (number of particles) and weighing (mass). Introduce k_B and R: k_B is energy per molecule per kelvin. R is energy per mole per kelvin. R = Nₐ × k_B. These connect the two ways of counting: per molecule (N, k_B) vs per mole (n, R).</p><p><strong>Worked examples (15 min):</strong> (1) 2 moles of gas: N = 2 × 6.02 × 10²³ = 1.204 × 10²⁴ molecules. (2) 5 × 10²⁵ molecules: n = 5 × 10²⁵ / 6.02 × 10²³ = 83.1 mol. (3) 32 g of O₂ (molar mass = 32 g/mol): n = 1 mol, N = 6.02 × 10²³. (4) Verify: R = Nₐ × k_B = 6.02 × 10²³ × 1.38 × 10⁻²³ = 8.31 J/(mol·K). ✓</p><p><strong>Practice (10 min):</strong> Convert between N, n, and mass. Calculate k_B from R/Nₐ and verify.</p>",
          "engagementHook": {
            "title": "HOW BIG IS A MOLE?",
            "content": "\"If you had a mole of rice grains, it would cover the entire surface of the Earth to a depth of 75 metres. A mole of tennis balls would fill the Sun. A mole of sheets of paper stacked would reach from Earth to the Andromeda galaxy — 2.5 million light-years away.\" These absurd comparisons make 6 × 10²³ feel real. Then: \"And yet, a glass of water contains about 10 moles — that's 6 × 10²⁴ molecules in your hand.\""
          },
          "nos": {
            "tags": ["Models", "Science as a shared endeavour"],
            "description": "The mole was defined by international agreement (SI system). Avogadro's number was measured by multiple methods (electrolysis, Brownian motion, X-ray diffraction) — all giving the same answer. This convergence from independent methods is strong evidence that atoms and molecules are real, not just theoretical constructs."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Define mole, Avogadro's constant, Boltzmann constant",
            "AO2 — Convert between N, n, and mass; relate k_B and R"
          ],
          "resources": "Periodic table, calculators, mole comparison infographic",
          "formative": "\"A container holds 0.5 mol of helium (molar mass 4 g/mol). (a) How many atoms? (b) What is the total mass? (c) Verify that k_B = R/Nₐ numerically. (d) Why do physicists use two different constants (k_B and R) for the same physics?\""
        }
      ]
    },
    {
      "name": "Gas Laws & the Ideal Gas",
      "color": "accent2",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Empirical Gas Laws — Boyle's, Charles's & Gay-Lussac's",
          "focus": "Constant T, constant P, and constant V — the building blocks",
          "minutes": 50,
          "understandings": [
            "The ideal gas law can be derived from empirical gas laws: PV/T = constant",
            "Boyle's law (constant T): P ∝ 1/V → P₁V₁ = P₂V₂",
            "Charles's law (constant P): V ∝ T → V₁/T₁ = V₂/T₂ (T in kelvin!)",
            "Gay-Lussac's law (constant V): P ∝ T → P₁/T₁ = P₂/T₂",
            "Gas laws are limited to constant volume, constant temperature, and constant pressure processes"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Inflate a balloon. Place it in a freezer (or pour liquid nitrogen on it). It shrinks dramatically. Remove it — it re-inflates. \"Pressure is roughly constant (open to the atmosphere). Temperature decreased. What happened to volume?\" V ∝ T — Charles's law.</p><p><strong>Lab (20 min):</strong> BOYLE'S LAW — Use a syringe connected to a pressure gauge. Students push the plunger to reduce volume and record pressure at each step. Plot P vs 1/V → should be a straight line through the origin. Or plot PV → should be constant. Discuss: what assumptions make this work? (Constant T, sealed gas, no leaks.)</p><p><strong>Direct instruction (10 min):</strong> Present all three laws with graphs: (a) Boyle: P vs V is a hyperbola; P vs 1/V is linear. (b) Charles: V vs T(K) is linear, extrapolates to V = 0 at T = 0 K — this is how absolute zero was first estimated! (c) Gay-Lussac: P vs T(K) is linear. Emphasise: T must be in kelvin for proportionality to hold. Combine: PV/T = constant → leads to the ideal gas law.</p><p><strong>Worked examples (10 min):</strong> (1) Gas at 1 atm, 2 L compressed to 0.5 L at constant T → P = 4 atm. (2) Gas at 300 K, 1 L heated to 600 K at constant P → V = 2 L. (3) Combined: gas at P₁, V₁, T₁ changes to P₂, V₂, T₂ → P₁V₁/T₁ = P₂V₂/T₂.</p><p><strong>Practice (5 min):</strong> Mixed gas law problems.</p>",
          "engagementHook": {
            "title": "THE BALLOON IN THE FREEZER & ABSOLUTE ZERO",
            "content": "Shrink a balloon with cold (freezer or liquid nitrogen). Students SEE Charles's law. Then the deeper hook: \"If V ∝ T(K), then at T = 0 K, volume = 0. That's absolute zero — the temperature where an ideal gas would have zero volume.\" Of course, real gases liquefy first. But the EXTRAPOLATION to V = 0 is how absolute zero was first estimated, 100 years before anyone could reach temperatures near it."
          },
          "nos": {
            "tags": ["Observations", "Patterns", "Models"],
            "description": "Boyle's, Charles's, and Gay-Lussac's laws were discovered empirically — by experiment, not theory. The kinetic theory (theoretical) came later and EXPLAINED why these empirical patterns exist. This is a classic NOS trajectory: observation → pattern → model → explanation."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — State the three gas laws and their conditions",
            "AO2 — Apply each law to calculate changes in P, V, or T",
            "AO3 — Analyse experimental data to verify Boyle's law"
          ],
          "resources": "Syringe + pressure gauge (Boyle's law kit), balloon, freezer or liquid nitrogen, graph paper, calculators",
          "formative": "\"A gas at 2 atm, 3 L, 300 K is heated to 450 K at constant pressure. (a) Find the new volume. (b) The gas is then compressed to 1.5 L at constant temperature. Find the new pressure. (c) Plot the two changes on a PV diagram. (d) What single gas law equation could have been used to go directly from the initial to the final state?\""
        },
        {
          "num": 2,
          "title": "The Ideal Gas Law — PV = Nk_BT = nRT",
          "focus": "The unifying equation combining all gas laws",
          "minutes": 45,
          "understandings": [
            "The ideal gas law: PV = Nk_BT (per molecule) and PV = nRT (per mole)",
            "Derived empirically from combining Boyle's, Charles's, and Gay-Lussac's laws: PV/T = constant",
            "The ideal gas is a modelled system: perfectly elastic collisions, no intermolecular forces, negligible particle volume",
            "Temperature, pressure and density conditions under which an ideal gas approximates a real gas: low P, moderate T, low density"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Combine the three laws: PV/T = constant. What IS the constant? It depends on the amount of gas. For N molecules: constant = Nk_B → PV = Nk_BT. For n moles: constant = nR → PV = nRT. These are equivalent (since R = Nₐk_B). List the ideal gas assumptions: (1) gas consists of identical point particles (negligible volume), (2) no intermolecular forces except during collisions, (3) collisions are perfectly elastic, (4) motion is random, (5) Newtonian mechanics applies. When do these assumptions hold? Low pressure (particles far apart → negligible volume and forces), moderate temperature (not too cold → gas doesn't liquefy), low density.</p><p><strong>Worked examples (15 min):</strong> (1) 2 mol of gas at 300 K in a 0.05 m³ container → P = nRT/V = 2 × 8.31 × 300 / 0.05 = 99,720 Pa ≈ 1 atm. (2) A balloon (V = 0.01 m³) at 1 atm, 293 K → n? N? (3) What volume does 1 mol of gas occupy at STP (0°C, 1 atm)? → 22.4 L (the molar volume). (4) A sealed flask is heated from 20°C to 100°C → new pressure?</p><p><strong>Ideal vs Real (10 min):</strong> Where does the ideal gas model fail? (a) High pressure: particles close → volume matters, forces matter. (b) Low temperature: particles slow → intermolecular attractions dominate → gas liquefies. (c) High density: same as high pressure. Real gases deviate most near their boiling point. Show a comparison graph: ideal PV = nRT (straight line) vs real gas (deviates at high P).</p><p><strong>Practice (5 min):</strong> Ideal gas law calculations and identifying when the model breaks down.</p>",
          "engagementHook": {
            "title": "THE MOLAR VOLUME — 22.4 LITRES OF ANYTHING",
            "content": "\"1 mole of ANY ideal gas at 0°C and 1 atm occupies exactly 22.4 litres — about the size of a basketball. Doesn't matter if it's hydrogen, oxygen, or xenon.\" Calculate it live: V = nRT/P = 1 × 8.31 × 273 / 101325 = 0.0224 m³ = 22.4 L. \"The MASS of 22.4 L differs hugely (H₂ = 2 g, Xe = 131 g), but the volume is the same. Why?\" Because ideal gas behaviour depends on NUMBER of particles, not their mass."
          },
          "nos": {
            "tags": ["Models", "Theories", "Patterns"],
            "description": "The ideal gas is one of the most successful models in physics — simple assumptions lead to a powerful equation that works across an enormous range of conditions. But every model has limits. Understanding WHEN a model fails is as important as understanding when it works. The ideal gas fails precisely when its assumptions break down: particles too close, forces too strong, volume not negligible."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the ideal gas law in both forms; list the assumptions",
            "AO2 — Apply PV = nRT and PV = Nk_BT to solve problems",
            "AO3 — Evaluate conditions under which the ideal gas model is valid"
          ],
          "resources": "Calculators, ideal vs real gas comparison graph, basketball (22.4 L visual), periodic table",
          "formative": "\"(a) Calculate the volume of 3 mol of gas at 25°C and 2 atm. (b) A sealed container of gas at 20°C and 1 atm is heated to 200°C. Find the new pressure. (c) Under what conditions would you expect the ideal gas law to fail for steam? Explain using the model's assumptions. (d) Why does 22.4 L of H₂ and 22.4 L of O₂ at STP contain the same number of molecules despite having very different masses?\""
        },
        {
          "num": 3,
          "title": "PV Diagrams & Changes of State",
          "focus": "Visualising gas processes on pressure-volume graphs",
          "minutes": 45,
          "understandings": [
            "Changes of state of a gas can be represented on pressure-volume (PV) diagrams",
            "Isothermal process (constant T): PV = constant → hyperbola on PV diagram",
            "Isobaric process (constant P): horizontal line on PV diagram",
            "Isovolumetric/isochoric process (constant V): vertical line on PV diagram",
            "The area under a PV curve represents the work done by or on the gas (preview of B.4 for HL students)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Draw PV diagrams for each process: (a) Isothermal: T constant, PV = constant → hyperbola. Moving to larger V means lower P (Boyle's law). (b) Isobaric: P constant → horizontal line. Heating at constant P → V increases (Charles's law). (c) Isochoric: V constant → vertical line. Heating at constant V → P increases (Gay-Lussac's law). Label each clearly. Multiple isotherms: higher T → higher curve (farther from origin).</p><p><strong>Worked examples (15 min):</strong> (1) Draw the PV diagram for: gas at (2 atm, 1 L) is heated at constant P to 2 L, then compressed isothermally to 4 atm. (2) A gas undergoes a cycle: isothermal expansion, isobaric compression, isochoric pressure increase back to start. Draw and label each step. (3) Identify the process from a given PV diagram segment.</p><p><strong>Area = Work preview (5 min):</strong> \"The area under a PV curve equals the work done by the gas. We'll formalise this in B.4 (HL). For now: isothermal expansion does MORE work than isobaric expansion to the same final volume because the pressure is higher throughout. You can see this from the area.\"</p><p><strong>Practice (10 min):</strong> Draw PV diagrams from descriptions. Identify processes from diagrams. Rank work done by comparing areas.</p>",
          "engagementHook": {
            "title": "THE PV DIAGRAM AS A STORY",
            "content": "\"A PV diagram is the biography of a gas — every point tells you its pressure and volume at that moment. A line tells you how it changed. A closed loop means it returned to where it started — a cycle.\" Draw the 'life story' of air in a bicycle pump: atmospheric pressure → compression (isochoric-ish) → release into tyre. Students narrate the physics of everyday actions using PV diagrams."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "PV diagrams are a visual model that reveals physics hidden in equations. Émile Clapeyron (1834) first used them to analyse Carnot's heat engine — a visual approach that made the abstract concrete. Graphical representations remain essential: Feynman diagrams, HR diagrams, and phase diagrams all follow this tradition."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Thinker"],
          "ao": [
            "AO1 — Identify isothermal, isobaric, and isochoric processes on PV diagrams",
            "AO2 — Sketch PV diagrams for described processes",
            "AO3 — Analyse and compare processes using PV diagram features"
          ],
          "resources": "Graph paper, printed PV diagram templates, whiteboard, coloured markers for different processes",
          "formative": "\"A gas starts at (1 atm, 4 L, 300 K). (a) It is compressed isothermally to 2 L. Find the new pressure. Draw on a PV diagram. (b) It is then heated at constant volume to 600 K. Find the new pressure. Draw this step. (c) It is then expanded isobarically back to 4 L. Find the new temperature. Draw this step. (d) Is the gas back at its starting state? If not, what would need to happen?\""
        }
      ]
    },
    {
      "name": "Kinetic Theory & Internal Energy",
      "color": "accent3",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Kinetic Theory — Assumptions & P = (1/3)ρv̄²",
          "focus": "How molecular collisions create pressure — the microscopic origin of gas laws",
          "minutes": 50,
          "understandings": [
            "Ideal gases are described in terms of the kinetic theory — a modelled system used to approximate real gas behaviour",
            "Assumptions: identical point particles, random motion, elastic collisions, no intermolecular forces (except during collisions), Newtonian mechanics",
            "The change in momentum of particles due to collisions with surfaces gives rise to pressure",
            "Pressure is related to average translational speed: P = (1/3)ρv̄², where v̄² is the mean square speed"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A balloon stays inflated — something pushes outward. What?\" Billions of air molecules hitting the inner surface every second. Each collision transfers a tiny momentum impulse. The sum of all these impulses per unit area per unit time = pressure. This is kinetic theory: explaining a macroscopic quantity (P) from microscopic behaviour (molecular collisions).</p><p><strong>Direct instruction (20 min):</strong> List the kinetic theory assumptions clearly. Then derive the pressure equation conceptually (full derivation not required, but the logic should be understood): (1) A molecule of mass m moves with speed v toward a wall. (2) It bounces back elastically: Δp = 2mv per collision. (3) The molecule travels back and forth in a box of length L: time between collisions = 2L/v. (4) Force from one molecule = Δp/Δt = 2mv/(2L/v) = mv²/L. (5) For N molecules in 3D (only 1/3 move in any given direction): total force = Nm v̄²/(3L). (6) P = F/A = Nm v̄²/(3LA) = Nm v̄²/(3V) = (1/3)(Nm/V)v̄² = (1/3)ρv̄². This is the bridge between the micro and macro worlds.</p><p><strong>Root mean square speed (10 min):</strong> v̄² is the mean SQUARE speed (average of v²). The root mean square speed v_rms = √(v̄²). From P = (1/3)ρv̄² and PV = Nk_BT: v_rms = √(3k_BT/m). At room temperature: air molecules move at ~500 m/s (faster than sound!). Hydrogen: ~1900 m/s. Calculate for several gases.</p><p><strong>Simulation (5 min):</strong> Use a PhET gas simulation. Students adjust T and observe: molecules move faster → hit walls harder → pressure increases. Increase N → more collisions → P increases. Decrease V → more frequent collisions → P increases. Every gas law emerges from particle behaviour.</p><p><strong>Practice (10 min):</strong> Calculate v_rms for different gases at different temperatures. Use P = (1/3)ρv̄² to find pressure from molecular data.</p>",
          "engagementHook": {
            "title": "MOLECULES AT MACH 1.5 — RIGHT NOW",
            "content": "\"The nitrogen molecules in this room are moving at about 510 m/s — that's 1.5 times the speed of sound. Oxygen: 480 m/s. If you could see them, the room would be a violent chaos of collisions.\" Calculate v_rms live for air at 293 K: v_rms = √(3 × 1.38×10⁻²³ × 293 / (4.8×10⁻²⁶)) = 508 m/s. \"Why don't you feel this? Because they're tiny and they hit you from all sides equally.\""
          },
          "nos": {
            "tags": ["Models", "Theories", "Patterns"],
            "description": "Kinetic theory is a triumph of theoretical physics: a simple model (hard spheres bouncing in a box) predicts PV = NkT, the relationship P = (1/3)ρv̄², and the distribution of molecular speeds (Maxwell-Boltzmann). The model was controversial in the 19th century — many physicists didn't believe atoms were real. Einstein's 1905 paper on Brownian motion provided definitive evidence."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State the assumptions of the kinetic theory",
            "AO2 — Apply P = (1/3)ρv̄² and v_rms = √(3k_BT/m)",
            "AO3 — Analyse how changes in T, V, N affect pressure using the kinetic model"
          ],
          "resources": "PhET gas properties simulation, calculators, periodic table (for molecular masses)",
          "formative": "\"Helium gas (molar mass 4 g/mol) is at 300 K. (a) Calculate v_rms. (b) Argon (40 g/mol) is at the same temperature. Calculate its v_rms. (c) Which molecules move faster and by what factor? (d) If the helium is heated to 1200 K, what is the new v_rms? By what factor did it increase? (e) Why √ and not just 4×?\""
        },
        {
          "num": 2,
          "title": "Internal Energy of an Ideal Monatomic Gas — U = (3/2)Nk_BT",
          "focus": "Total energy of all gas molecules — connecting to B.1 and previewing B.4",
          "minutes": 40,
          "understandings": [
            "The internal energy U of an ideal monatomic gas is given by U = (3/2)Nk_BT or U = (3/2)nRT",
            "For an ideal gas: no intermolecular PE, so internal energy = total translational KE only",
            "Internal energy depends only on temperature (for an ideal gas) — not on pressure or volume separately",
            "This connects to B.1 (internal energy = KE + PE; for ideal gas PE = 0) and previews B.4 (first law of thermodynamics, HL)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> From B.1: internal energy = total KE + total PE. For an ideal gas: no intermolecular forces → PE = 0. So U = total KE only. Each molecule has average KE = (3/2)k_BT (from B.1). For N molecules: U = N × (3/2)k_BT = (3/2)Nk_BT. Or per mole: U = (3/2)nRT. Key insight: U depends ONLY on T. Doubling T doubles U. Changing V at constant T does NOT change U.</p><p><strong>Worked examples (15 min):</strong> (1) U of 2 mol of helium at 300 K: U = 1.5 × 2 × 8.31 × 300 = 7479 J. (2) The gas is heated to 600 K: U doubles to 14,958 J. Energy input = ΔU = 7479 J. (3) The gas expands isothermally (constant T): ΔU = 0 — no change in internal energy! \"Where does the energy go if we add heat at constant T?\" Into work done by the gas expanding (preview of B.4 first law: Q = ΔU + W).</p><p><strong>HL preview connection (5 min):</strong> \"For HL students: in B.4 you'll learn the first law of thermodynamics: Q = ΔU + W. For an isothermal process of an ideal gas: ΔU = 0, so Q = W — all heat input becomes work. For an isochoric process: W = 0, so Q = ΔU — all heat input raises temperature. This equation is the key to thermodynamics.\"</p><p><strong>Practice (10 min):</strong> Calculate U, ΔU, and temperature changes. Include: \"Does U change during isothermal expansion? During isochoric heating? During adiabatic expansion?\"</p>",
          "engagementHook": {
            "title": "THE ROOM FULL OF ENERGY",
            "content": "\"How much kinetic energy do all the air molecules in this room have?\" Estimate: ~150 m³ of air, ~5.4 × 10²⁷ molecules, T = 293 K → U = (3/2) × 5.4×10²⁷ × 1.38×10⁻²³ × 293 ≈ 33 million joules. \"That's enough energy to run a 100 W light bulb for almost 4 days. It's all around you, moving at 500 m/s — but you can't USE it easily. Why?\" (Preview of 2nd law — energy is disordered.)"
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "The equation U = (3/2)NkT connects thermodynamics (macroscopic energy) to kinetic theory (microscopic motion). This unification — macro explained by micro — was one of the great achievements of 19th-century physics, driven by Boltzmann, Maxwell, and Clausius. Boltzmann's work was so controversial that he faced fierce opposition; his vindication came after his death."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State U = (3/2)NkT = (3/2)nRT for ideal monatomic gas",
            "AO2 — Calculate internal energy and changes in internal energy",
            "AO3 — Analyse why U depends only on T for an ideal gas"
          ],
          "resources": "Calculators, whiteboard, connection diagram (B.1 → B.3 → B.4 pathway)",
          "formative": "\"3 mol of ideal monatomic gas at 400 K. (a) Calculate U. (b) Heated to 500 K at constant V: find ΔU and the heat added. (c) The gas then expands isothermally at 500 K to twice its volume. Find ΔU. (d) Why is the answer to (c) zero even though the gas expanded? (e) For HL preview: if ΔU = 0 but the gas did work expanding, where did the energy come from?\""
        },
        {
          "num": 3,
          "title": "Ideal vs Real Gases — When Does the Model Break Down?",
          "focus": "Conditions for validity and how real gases deviate",
          "minutes": 50,
          "understandings": [
            "A real gas approximates an ideal gas at low pressure, moderate temperature, and low density",
            "At high pressure: molecular volume becomes significant (gas can't compress to zero volume)",
            "At low temperature: intermolecular attractions become significant (gas liquefies)",
            "At high density: both effects combine — deviations are largest",
            "The differences between ideal and real gases should be understood qualitatively"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Can you compress air to zero volume?\" No — molecules have physical size. \"Can you cool any gas and keep it as a gas forever?\" No — intermolecular forces eventually cause liquefaction. \"The ideal gas model ignores both of these realities. Let's find out when that matters.\"</p><p><strong>Direct instruction (15 min):</strong> Build a comparison table: Ideal gas vs Real gas. Ideal: point particles, no forces, no liquefaction, PV = nRT exact. Real: finite volume, attractive forces (Van der Waals), can liquefy, PV = nRT approximate. When does ideal work well? Low P (particles far apart → size negligible, forces negligible), moderate T (enough KE to overcome attractions), low density. When does it fail? High P, low T, near boiling point, polar molecules (stronger forces).</p><p><strong>Data analysis (15 min):</strong> Give students PV/nRT vs P data for N₂ at different temperatures. Ideal gas: PV/nRT = 1 always. Real gas: (a) at low P, PV/nRT ≈ 1 (ideal works). (b) At moderate P, PV/nRT < 1 (attractions dominate → gas more compressible than predicted). (c) At high P, PV/nRT > 1 (molecular volume dominates → gas less compressible). Students identify the crossover and explain each region.</p><p><strong>Demo (5 min):</strong> Compress butane in a transparent syringe — at sufficient pressure, it LIQUEFIES (visible phase change). \"An ideal gas can't do this. The ideal model has no mechanism for liquefaction because it has no intermolecular forces.\"</p><p><strong>Discussion (5 min):</strong> \"Is the ideal gas model wrong?\" No — it's an approximation. All models are approximations. The ideal gas model is excellent for most atmospheric conditions, reasonable for most lab conditions, and poor near phase boundaries. Knowing the limits is using the model wisely.</p><p><strong>Practice (5 min):</strong> Classify scenarios as 'ideal appropriate' or 'real gas needed.'</p>",
          "engagementHook": {
            "title": "LIQUEFYING GAS IN A SYRINGE",
            "content": "Compress butane gas in a transparent syringe. Students watch it TURN TO LIQUID before their eyes. \"The ideal gas model says this can't happen — there's no mechanism for it. The model fails because it ignores intermolecular attractions.\" Then decompress — the liquid boils back to gas. Students see the limits of the model in real time."
          },
          "nos": {
            "tags": ["Models", "Falsification", "Observations"],
            "description": "The ideal gas model is a deliberate simplification. It's not 'wrong' — it's an approximation with known limits. Johannes van der Waals (1873) modified the ideal gas equation to include molecular volume and attractions: (P + a/V²)(V − b) = nRT. His equation was more accurate but more complex. Science constantly balances simplicity and accuracy."
          },
          "atl": ["Thinking skills", "Research skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer", "Open-minded"],
          "ao": [
            "AO1 — State conditions where ideal gas model is valid",
            "AO2 — Compare ideal and real gas predictions qualitatively",
            "AO3 — Analyse PV/nRT data to identify deviations and explain them molecularly"
          ],
          "resources": "Transparent syringe with butane, PV/nRT vs P data graphs (N₂ at multiple temperatures), ideal vs real comparison table",
          "formative": "\"(a) List three assumptions of the ideal gas model and explain when each breaks down. (b) A PV/nRT vs P graph shows values below 1 at moderate P and above 1 at high P. Explain each region in terms of molecular behaviour. (c) Would H₂O vapour at 110°C behave more or less ideally than N₂ at the same temperature? Explain. (d) Why is the ideal gas model still useful even though it's an approximation?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "B.1 Thermal Energy Transfers", "question": "How does E̅ₖ = (3/2)k_BT connect to the ideal gas law PV = Nk_BT? How does internal energy relate to temperature?" },
    { "topic": "B.4 Thermodynamics (HL)", "question": "How does U = (3/2)NkT connect to the first law of thermodynamics? What does the area under a PV curve represent?" },
    { "topic": "A.2 Forces & Momentum", "question": "How does the change in momentum during molecular collisions give rise to pressure?" },
    { "topic": "B.2 Greenhouse Effect", "question": "How do gas laws help explain atmospheric behaviour and the distribution of greenhouse gases?" },
    { "topic": "IB Linking (NOS)", "question": "How can models be used to help explain observed phenomena? What are the limits of the ideal gas model?" }
  ]
},
"B4": {
  "title": "Thermodynamics",
  "code": "B.4",
  "theme": "B",
  "level": "HL only",
  "recommendedHours": 8,
  "recommendedMinutes": 480,
  "guidingQuestions": [
    "How can energy transfers and energy storage within a system be analysed?",
    "How can the future evolution of a system be determined?",
    "In what way is entropy fundamental to the evolution of the universe?"
  ],
  "groups": [
    {
      "name": "First Law of Thermodynamics",
      "color": "accent",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "The First Law — Q = ΔU + W",
          "focus": "Conservation of energy applied to a closed thermodynamic system",
          "minutes": 50,
          "understandings": [
            "The first law of thermodynamics: Q = ΔU + W, where Q is heat supplied TO the system, ΔU is change in internal energy, W is work done BY the system",
            "This is conservation of energy for a closed system: energy in (Q) = energy stored (ΔU) + energy out (W)",
            "Clausius sign convention: Q positive = heat flows IN; W positive = work done BY the system; W negative = work done ON the system",
            "The first law connects B.1 (internal energy), B.3 (ideal gas, PV diagrams), and A.3 (energy conservation) into a unified framework"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"You heat a gas in a piston. Some energy raises the temperature (ΔU). Some energy pushes the piston outward (W). The total heat input Q must equal both: Q = ΔU + W.\" Draw the system diagram: heat flows in, piston moves out, gas gets hotter. \"This is the bookkeeping of energy — every joule must be accounted for.\"</p><p><strong>Direct instruction (15 min):</strong> State the first law formally: Q = ΔU + W. Unpack Clausius sign convention: Q > 0 means heat flows INTO the system. W > 0 means work done BY the system (gas expands). W < 0 means work done ON the system (gas compressed). If Q = 0: adiabatic — all work comes from internal energy. If W = 0: isochoric — all heat goes to internal energy. If ΔU = 0: isothermal — all heat becomes work.</p><p><strong>Worked examples (20 min):</strong> (1) 500 J of heat is added to a gas. The gas does 200 J of work expanding. ΔU = 500 − 200 = 300 J — temperature rises. (2) A gas is compressed: 300 J of work is done ON the gas (W = −300 J), and 100 J of heat leaks out (Q = −100 J). ΔU = −100 − (−300) = +200 J — temperature rises despite losing heat. (3) A gas expands isothermally: ΔU = 0 → Q = W. All heat input becomes work. (4) Adiabatic compression: Q = 0 → ΔU = −W = +|W|. Gas heats up without any heat input.</p><p><strong>Practice (10 min):</strong> First law problems with sign conventions. Students must state the sign of Q, W, and ΔU for each scenario.</p>",
          "engagementHook": {
            "title": "THE DIESEL ENGINE — FIRE WITHOUT A SPARK",
            "content": "\"A diesel engine has no spark plug. It compresses air so rapidly (adiabatic, Q ≈ 0) that the temperature rises from ~300 K to ~900 K — hot enough to ignite fuel. Where did the heat come from?\" From the first law: Q = 0, W is negative (compression), so ΔU = −W is positive → temperature rises. No heat was added — the work of compression became internal energy. Students calculate: ΔU = (3/2)nRΔT for the compression."
          },
          "nos": {
            "tags": ["Theories", "Patterns"],
            "description": "The first law of thermodynamics is conservation of energy applied to thermal systems. It was developed independently by Mayer, Joule, and Helmholtz in the 1840s, each from a different perspective (metabolism, mechanical equivalent of heat, mathematical physics). Their convergence on the same law from different angles is powerful evidence for its universality."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the first law; explain Clausius sign convention",
            "AO2 — Apply Q = ΔU + W with correct signs",
            "AO3 — Analyse energy flows in various thermodynamic scenarios"
          ],
          "resources": "Piston/syringe demo, diesel engine cutaway diagram or video, whiteboard, problem sets",
          "formative": "\"A gas receives 800 J of heat. It expands, doing 500 J of work. (a) Find ΔU. (b) Does the temperature rise or fall? (c) The gas is then compressed adiabatically with 400 J of work done on it. Find ΔU and the temperature change direction. (d) State the sign of Q, W, and ΔU for each process.\""
        },
        {
          "num": 2,
          "title": "Work Done by a Gas — W = PΔV & PV Diagram Areas",
          "focus": "Calculating work from pressure and volume change, and from graph areas",
          "minutes": 40,
          "understandings": [
            "Work done by or on a closed system: W = PΔV when pressure is constant (isobaric)",
            "When pressure varies, W = area under the curve on a PV diagram",
            "Expansion (ΔV > 0): gas does positive work on surroundings",
            "Compression (ΔV < 0): surroundings do work on gas (W is negative)",
            "For a cyclic process: net work = area enclosed by the cycle on the PV diagram"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> At constant pressure: W = PΔV. But what if P changes? Then W = area under the PV curve. This is the same gradient/area concept from A.1 (area under v-t = displacement) and A.3 (area under F-x = work). Show: isobaric (rectangle area), isothermal (area under hyperbola), isochoric (zero area — vertical line has no width).</p><p><strong>Worked examples (15 min):</strong> (1) Gas expands isobarically from 2 L to 5 L at 1 atm: W = 1.013 × 10⁵ × 3 × 10⁻³ = 304 J. (2) Same initial and final states but via isothermal path — W is larger (area under the curve is bigger). Estimate by counting squares on a PV diagram. (3) A cyclic process: expansion at high P, compression at low P → net work = enclosed area = energy converted from heat to work per cycle.</p><p><strong>PV diagram skills (10 min):</strong> Students practise: (a) shading the area representing work for different processes, (b) comparing work done in two different paths between the same endpoints — work depends on the PATH, not just start and end. (c) For a cycle: shade the enclosed area = net work output per cycle.</p><p><strong>Practice (5 min):</strong> Calculate W for isobaric processes and estimate W from PV graphs.</p>",
          "engagementHook": {
            "title": "PATH MATTERS — THE SCENIC ROUTE COSTS MORE",
            "content": "\"Two hikers climb from the same base to the same summit. One takes the direct path, the other takes a winding scenic route. Who does more work against gravity?\" Same — gravity is conservative. \"But for a gas: two different paths between the same PV states give DIFFERENT amounts of work. W depends on the path.\" This is why PV diagrams are essential — the path IS the physics."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The PV diagram is one of the most powerful visual tools in physics. Clapeyron introduced it in 1834 to analyse Carnot's heat engine. The area-under-the-curve interpretation connects thermodynamics to mechanics (F-x diagrams) and kinematics (v-t diagrams) — the same mathematical structure appears everywhere."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — State W = PΔV; relate W to PV diagram area",
            "AO2 — Calculate work for isobaric processes; estimate work from PV diagrams",
            "AO3 — Analyse why work depends on path, not just initial and final states"
          ],
          "resources": "Printed PV diagram templates, graph paper, coloured markers, calculators",
          "formative": "\"A gas goes from state A (1 atm, 2 L) to state B (1 atm, 6 L) isobarically. (a) Calculate W. (b) The gas then goes from A to B via an isothermal path. Is the work greater, less, or equal? Explain using the PV diagram. (c) For a complete cycle A → B (isobaric) → A (isothermal), shade the net work area. Is net work done by or on the gas?\""
        },
        {
          "num": 3,
          "title": "Internal Energy Changes — ΔU = (3/2)NkΔT",
          "focus": "Quantifying temperature changes in an ideal monatomic gas",
          "minutes": 40,
          "understandings": [
            "Change in internal energy: ΔU = (3/2)Nk_BΔT = (3/2)nRΔT for an ideal monatomic gas",
            "ΔU depends ONLY on ΔT for an ideal gas — not on path, pressure, or volume independently",
            "ΔU is a state function: it depends only on initial and final states, not on the process",
            "This contrasts with Q and W, which ARE path-dependent"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> From B.3: U = (3/2)NkT. So ΔU = (3/2)NkΔT = (3/2)nRΔT. This is the key connection: temperature change → internal energy change, regardless of HOW the temperature changed. Whether you heat at constant V (all heat → ΔU), constant P (some heat → work), or any other path — if ΔT is the same, ΔU is the same. ΔU is a state function; Q and W are not.</p><p><strong>Worked examples (15 min):</strong> (1) 2 mol heated from 300 K to 500 K: ΔU = 1.5 × 2 × 8.31 × 200 = 4986 J — regardless of path. (2) Same gas, isochoric (W = 0): Q = ΔU = 4986 J. (3) Same gas, isobaric: Q = ΔU + PΔV. Use ideal gas law to find ΔV: V₁ = nRT₁/P, V₂ = nRT₂/P → ΔV = nRΔT/P → W = PΔV = nRΔT = 2 × 8.31 × 200 = 3324 J. So Q = 4986 + 3324 = 8310 J. MORE heat is needed at constant P because some goes to work.</p><p><strong>Key insight (5 min):</strong> \"At constant V: Q = ΔU (all heat raises temperature). At constant P: Q = ΔU + W > ΔU (some heat does work). That's why c_P > c_V for gases — you need more heat per degree at constant pressure.\"</p><p><strong>Practice (10 min):</strong> First law problems calculating Q, W, and ΔU for isobaric and isochoric processes.</p>",
          "engagementHook": {
            "title": "STATE FUNCTION vs PATH FUNCTION — THE ALTITUDE ANALOGY",
            "content": "\"Your altitude is a state function — it depends only on where you are, not how you got there. The distance you walked is a path function — it depends on the route. Internal energy U is like altitude: ΔU depends only on initial and final temperatures. Heat Q and work W are like distance walked: they depend on the path (process). Same destination, different journeys, different Q and W, but always the same ΔU.\""
          },
          "nos": {
            "tags": ["Models", "Theories"],
            "description": "The distinction between state functions (U, T, P, V) and path functions (Q, W) was clarified by Rudolf Clausius in the 1850s. It's a subtle but profound concept: some quantities describe WHERE the system is; others describe HOW it got there. This distinction is central to all of thermodynamics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State ΔU = (3/2)NkΔT; explain why ΔU is a state function",
            "AO2 — Calculate ΔU, Q, and W for isochoric and isobaric processes",
            "AO3 — Analyse why Q differs between isochoric and isobaric paths for the same ΔT"
          ],
          "resources": "Whiteboard, first law calculation framework, problem sets",
          "formative": "\"3 mol of ideal monatomic gas is heated from 200 K to 400 K. (a) Calculate ΔU (same for all paths). (b) If heated at constant V: find Q and W. (c) If heated at constant P: find W, then Q. (d) Verify Q = ΔU + W for both cases. (e) Why is Q different in (b) and (c) even though ΔU is the same?\""
        }
      ]
    },
    {
      "name": "Thermodynamic Processes",
      "color": "accent3",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Isovolumetric & Isobaric Processes",
          "focus": "Constant V and constant P — the simplest thermodynamic processes",
          "minutes": 45,
          "understandings": [
            "Isovolumetric (isochoric): V constant → W = 0 → Q = ΔU (all heat changes temperature)",
            "On a PV diagram: vertical line (no volume change)",
            "Isobaric: P constant → W = PΔV → Q = ΔU + PΔV",
            "On a PV diagram: horizontal line",
            "For both: apply Q = ΔU + W with the appropriate simplification"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Isochoric: sealed rigid container heated. V can't change → no work done (W = PΔV = P × 0 = 0). All heat raises temperature: Q = ΔU. PV diagram: vertical line. Pressure increases (Gay-Lussac). Isobaric: gas in a piston heated. Piston moves out freely at constant atmospheric pressure. W = PΔV > 0. Need more heat for the same ΔT because some energy goes to work: Q = ΔU + PΔV.</p><p><strong>Worked examples (15 min):</strong> (1) Isochoric: 1 mol heated from 300 to 500 K. ΔU = (3/2)(1)(8.31)(200) = 2493 J. W = 0. Q = 2493 J. (2) Isobaric: same gas, same ΔT. ΔU = 2493 J (same — state function!). W = nRΔT = 1 × 8.31 × 200 = 1662 J. Q = 2493 + 1662 = 4155 J. (3) Draw both processes on a PV diagram. Shade the work area for the isobaric process.</p><p><strong>Comparison table (10 min):</strong> Students build a table: Process | Constraint | W | ΔU | Q | PV diagram shape. Fill in for isochoric and isobaric. Leave rows blank for isothermal and adiabatic (next subtopic).</p><p><strong>Practice (10 min):</strong> Mixed isochoric and isobaric problems.</p>",
          "engagementHook": {
            "title": "THE PRESSURE COOKER vs THE OPEN POT",
            "content": "\"A pressure cooker heats water in a sealed, rigid container (isochoric): all heat raises temperature and pressure. An open pot heats water at constant atmospheric pressure (isobaric): the steam expands and does work pushing air aside, so you need MORE heat to reach the same temperature.\" Students calculate: how much more heat per degree does the isobaric process require? (Answer: 5/3 times more for a monatomic gas, because Q_P/Q_V = c_P/c_V = 5/3.)"
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The four thermodynamic processes (isochoric, isobaric, isothermal, adiabatic) are idealisations — no real process is perfectly any one of these. But they serve as building blocks: any complex process can be approximated as a sequence of these simple steps. This decomposition strategy is characteristic of how physics models complex systems."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Describe isochoric and isobaric processes",
            "AO2 — Apply the first law to calculate Q, W, ΔU for each",
            "AO3 — Compare energy flows between the two processes for the same ΔT"
          ],
          "resources": "Process comparison table template, PV diagram templates, calculators",
          "formative": "\"2 mol of monatomic gas at 250 K, 1 atm. (a) Heated isochorically to 450 K: find ΔU, W, Q, and the new pressure. (b) Instead heated isobarically to 450 K: find ΔU, W, Q, and the new volume. (c) Draw both processes on one PV diagram. (d) Why is Q larger in (b)?\""
        },
        {
          "num": 2,
          "title": "Isothermal & Adiabatic Processes",
          "focus": "Constant T and zero heat exchange — the two remaining idealised processes",
          "minutes": 50,
          "understandings": [
            "Isothermal: T constant → ΔU = 0 → Q = W (all heat input becomes work, or vice versa)",
            "On PV diagram: hyperbola (PV = constant for an ideal gas)",
            "Requires very SLOW process to maintain thermal equilibrium with surroundings",
            "Adiabatic: Q = 0 → ΔU = −W (work comes entirely from/goes to internal energy)",
            "On PV diagram: steeper curve than isothermal (γ = 5/3 for monatomic gas)",
            "Adiabatic expansion cools the gas; adiabatic compression heats it — no heat exchange needed"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Isothermal: temperature doesn't change → ΔU = 0. First law: Q = W. Gas expands isothermally → it does work → it must absorb heat from surroundings to maintain T. PV diagram: the familiar hyperbola PV = nRT = constant. Must be done slowly (quasi-static) so the gas stays in thermal equilibrium. Adiabatic: no heat exchange (Q = 0). First law: ΔU = −W. Expand → W > 0 → ΔU < 0 → gas cools. Compress → W < 0 → ΔU > 0 → gas heats. The adiabatic curve on a PV diagram is STEEPER than the isothermal because the gas cools as it expands (pressure drops faster).</p><p><strong>Demo (5 min):</strong> Fire syringe (or video): rapidly compress air in a closed syringe with a piece of cotton inside. The cotton ignites! Rapid compression is approximately adiabatic → Q ≈ 0 → all work becomes ΔU → temperature skyrockets. This is how diesel engines work.</p><p><strong>Worked examples (15 min):</strong> (1) Isothermal expansion: 1 mol at 300 K from 10 L to 20 L. ΔU = 0. P₁V₁ = P₂V₂ → P₂ = P₁/2. W = Q (must calculate from area under hyperbola or use W = nRT ln(V₂/V₁) if provided). (2) Adiabatic expansion: 1 mol from 400 K, V doubles. T drops (calculate using adiabatic relations if provided). W = −ΔU = −(3/2)nRΔT.</p><p><strong>Complete the table (5 min):</strong> Students fill in isothermal and adiabatic rows in their process comparison table from the previous subtopic. All four processes now covered.</p><p><strong>Practice (10 min):</strong> Identify processes from descriptions and PV diagrams. Apply first law to each.</p>",
          "engagementHook": {
            "title": "THE FIRE SYRINGE — COMPRESSION IGNITION",
            "content": "Rapidly compress air in a fire syringe. Cotton inside ignites. \"No spark, no flame — just compression. Q ≈ 0 (too fast for heat to escape). All work → ΔU → temperature exceeds 230°C → ignition.\" This is the diesel engine principle. Students calculate: if air is compressed adiabatically from 300 K by a factor of 20 in volume, the final temperature exceeds 1000 K. Mechanical work alone creates fire."
          },
          "nos": {
            "tags": ["Models", "Observations", "Technology"],
            "description": "Adiabatic processes are central to meteorology (rising air cools adiabatically → clouds form), engineering (diesel engines, refrigeration), and astrophysics (stellar cores). The same physics appears across vastly different scales — from a syringe in a classroom to the interior of a star."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Describe isothermal and adiabatic processes",
            "AO2 — Apply the first law with Q = 0 (adiabatic) or ΔU = 0 (isothermal)",
            "AO3 — Compare isothermal and adiabatic curves on PV diagrams; explain why adiabatic is steeper"
          ],
          "resources": "Fire syringe (or video), process comparison table, PV diagram overlays (isothermal vs adiabatic), calculators",
          "formative": "\"A gas undergoes two separate expansions from the same initial state, both doubling the volume. Process A is isothermal. Process B is adiabatic. (a) Which final state has lower pressure? Why? (b) Which process does more work? (Hint: compare PV diagram areas.) (c) In which does the temperature change? By how much? (d) Apply Q = ΔU + W to each and verify consistency.\""
        },
        {
          "num": 3,
          "title": "Adiabatic Processes for Monatomic Gases",
          "focus": "Quantitative treatment using γ = 5/3",
          "minutes": 45,
          "understandings": [
            "For adiabatic processes in monatomic ideal gases, the relationship between P and V is PV^γ = constant, where γ = 5/3",
            "Equivalently: TV^(γ−1) = constant → TV^(2/3) = constant for monatomic gas",
            "These allow calculation of final T and P after adiabatic expansion or compression",
            "γ = c_P/c_V = 5/3 for monatomic gases (3 translational degrees of freedom)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> For an adiabatic process: PV^γ = constant, where γ = 5/3 for monatomic gases. Derivation not required, but physical understanding: adiabatic curve is steeper than isothermal because P drops faster (gas cools as it expands). Also: TV^(γ−1) = T₁V₁^(2/3) = T₂V₂^(2/3). And: TP^((1−γ)/γ) = constant. These are equivalent — derived from PV^γ = const + PV = nRT. Use whichever gives the simplest calculation.</p><p><strong>Worked examples (20 min):</strong> (1) Monatomic gas at 300 K, 2 atm, 5 L is compressed adiabatically to 1 L. Find final T: T₂ = T₁(V₁/V₂)^(2/3) = 300 × 5^(2/3) = 300 × 2.92 = 877 K. Find final P: P₂ = P₁(V₁/V₂)^(5/3) = 2 × 5^(5/3) = 2 × 14.6 = 29.2 atm. (2) Verify using PV^γ: P₁V₁^(5/3) = P₂V₂^(5/3) → check. (3) Adiabatic expansion from 600 K, volume doubles → T₂ = 600/2^(2/3) = 600/1.587 = 378 K. ΔU = (3/2)nRΔT. W = −ΔU. (4) A diesel engine compresses air by factor 20 from 293 K → T = 293 × 20^(2/3) = 2153 K.</p><p><strong>Practice (10 min):</strong> Adiabatic calculations using PV^γ and TV^(2/3) relations.</p>",
          "engagementHook": {
            "title": "DIESEL TEMPERATURE CALCULATION",
            "content": "\"A diesel engine compresses air from 293 K by a volume ratio of 20:1. Calculate the final temperature.\" T₂ = 293 × 20^(2/3) = 293 × 7.37 = 2159 K — that's hotter than molten steel! Students are stunned. \"Pure compression, no fuel burning yet, and you've exceeded 2000 K. That's why diesel engines don't need spark plugs.\" The calculation makes the fire syringe demo quantitative."
          },
          "nos": {
            "tags": ["Models", "Technology"],
            "description": "The adiabatic relations for monatomic gases (γ = 5/3) come from the equipartition theorem: 3 translational degrees of freedom → c_V = (3/2)R, c_P = (5/2)R → γ = 5/3. For diatomic gases (N₂, O₂): 5 degrees of freedom → γ = 7/5. The value of γ encodes the microscopic structure of the molecule into a macroscopic thermodynamic property."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State PV^γ = constant and TV^(γ−1) = constant for adiabatic processes",
            "AO2 — Calculate final T, P, V after adiabatic compression/expansion",
            "AO3 — Analyse the diesel engine cycle using adiabatic relations"
          ],
          "resources": "Calculators (need y^x function), adiabatic relation reference card, diesel engine diagram",
          "formative": "\"Monatomic gas at 400 K, 3 atm, 8 L undergoes adiabatic expansion to 24 L. (a) Find T₂ using TV^(2/3) = const. (b) Find P₂ using PV^(5/3) = const. (c) Calculate ΔU. (d) Calculate W. (e) Verify Q = ΔU + W = 0 (adiabatic check).\""
        }
      ]
    },
    {
      "name": "Entropy & the Second Law",
      "color": "accent4",
      "totalMinutes": 110,
      "subtopics": [
        {
          "num": 1,
          "title": "Entropy — ΔS = ΔQ/T and S = k_B ln Ω",
          "focus": "Disorder, microstates, and the arrow of time",
          "minutes": 55,
          "understandings": [
            "Entropy S is a thermodynamic quantity related to the degree of disorder of particles in a system",
            "Macroscopic definition: ΔS = ΔQ/T (entropy change = heat transferred / temperature, for a reversible process)",
            "Microscopic definition: S = k_B ln Ω, where Ω is the number of possible microstates",
            "More microstates → higher entropy → more disorder",
            "Entropy is a state function (depends only on current state, not history)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Shuffle a deck of cards. \"A new deck is ordered (low entropy, Ω = 1 arrangement). After shuffling, it's disordered (high entropy, Ω = 52! ≈ 8 × 10⁶⁷ arrangements). It's astronomically unlikely that shuffling will return the deck to its original order.\" This is entropy: the number of ways a system can be arranged.</p><p><strong>Microscopic entropy (15 min):</strong> Define Ω (omega): the number of microstates — the number of distinct ways the particles can be arranged while giving the same macroscopic properties (T, P, V). S = k_B ln Ω. More microstates → higher S. Example: 4 coins, all heads = 1 microstate (Ω = 1, S = 0). 2 heads + 2 tails = 6 microstates (Ω = 6, S = k_B ln 6). The most probable state has the MOST microstates → highest entropy. Systems naturally evolve toward maximum entropy.</p><p><strong>Macroscopic entropy (10 min):</strong> ΔS = ΔQ/T. Adding heat increases entropy (more energy → more possible arrangements). At higher T, the same ΔQ produces LESS ΔS (the system is already disordered). Units: J/K. Irreversible processes: ΔS > ΔQ/T for the system (entropy increases even beyond the heat contribution).</p><p><strong>Worked examples (15 min):</strong> (1) 1000 J of heat flows into water at 373 K: ΔS = 1000/373 = 2.68 J/K. (2) Same heat flows into ice at 273 K: ΔS = 1000/273 = 3.66 J/K — more entropy increase at lower T. (3) Microstates: 2 particles in 2 boxes → Ω = 4. 3 particles in 2 boxes → Ω = 8. 10 particles → Ω = 1024. S increases with N. (4) Free expansion: gas expands into vacuum. Q = 0, W = 0, ΔU = 0, T unchanged. But Ω increases enormously (molecules have more space) → S increases. \"Entropy increased with no heat transfer — the macroscopic formula misses this!\"</p><p><strong>Practice (10 min):</strong> Calculate ΔS from ΔQ/T. Count microstates for simple systems.</p>",
          "engagementHook": {
            "title": "THE SHUFFLED DECK — 8 × 10⁶⁷ ARRANGEMENTS",
            "content": "\"Shuffle a deck. The number of possible arrangements is 52! = 8 × 10⁶⁷. If every person on Earth shuffled a deck every second since the Big Bang, they STILL wouldn't have covered all possible arrangements.\" The ordered deck has Ω = 1 (S = 0). A shuffled deck has Ω = 8 × 10⁶⁷ (very high S). \"Entropy is why your room gets messy but never cleans itself. There are overwhelmingly more disordered states than ordered ones.\""
          },
          "nos": {
            "tags": ["Theories", "Models", "Patterns"],
            "description": "Boltzmann's equation S = k_B ln Ω bridges the microscopic (individual particle arrangements) and the macroscopic (heat and temperature). Boltzmann was so proud of this equation that it's engraved on his tombstone. His work connected thermodynamics to statistical mechanics — one of the deepest unifications in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — Define entropy; state both ΔS = ΔQ/T and S = k_B ln Ω",
            "AO2 — Calculate entropy changes from heat transfer; count microstates",
            "AO3 — Analyse why systems evolve toward higher entropy"
          ],
          "resources": "Deck of cards, coin sets (for microstate counting), Boltzmann tombstone image, calculators",
          "formative": "\"(a) 500 J of heat is added to a system at 250 K. Calculate ΔS. (b) The same heat is added at 500 K. Calculate ΔS. Why is it smaller? (c) 4 identical particles are placed in 3 boxes. How many microstates? Calculate S. (d) An ice cube melts in a warm room. Does the entropy of the ice increase or decrease? Does the entropy of the room increase or decrease? Does the TOTAL entropy increase? Why?\""
        },
        {
          "num": 2,
          "title": "The Second Law of Thermodynamics",
          "focus": "Clausius form, Kelvin form, and entropy change in isolated systems",
          "minutes": 55,
          "understandings": [
            "The second law sets constraints on possible processes and the evolution of isolated systems",
            "Clausius form: heat cannot spontaneously flow from a cold body to a hot body",
            "Kelvin form: it is impossible to construct a heat engine that converts ALL heat into work with no other effect",
            "Entropy form: the entropy of an isolated system can never decrease; it increases for irreversible processes and stays constant for reversible ones",
            "Real processes are almost always irreversible → entropy of the universe always increases",
            "Entropy of a non-isolated system CAN decrease locally, compensated by a larger increase elsewhere"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why can't you un-burn a log? Un-scramble an egg? Un-mix coffee and milk?\" All are irreversible processes. The first law doesn't forbid the reverse — energy would still be conserved. But the second law does: entropy would decrease, and that doesn't happen spontaneously in isolated systems.</p><p><strong>Three forms (15 min):</strong> (1) Clausius: heat flows from hot to cold, never the reverse, without external work. A fridge DOES move heat from cold to hot — but only by doing work (using electricity). (2) Kelvin: no perfect heat engine — you can't convert 100% of heat to work. Some heat MUST be rejected to a cold reservoir. (3) Entropy: ΔS_total ≥ 0 for isolated systems. The = sign holds only for reversible (ideal) processes. All real processes are irreversible → ΔS_total > 0 always. These three statements are equivalent — proving any one proves the others.</p><p><strong>Local vs global entropy (10 min):</strong> \"A refrigerator decreases entropy inside (cools the food). But it increases entropy outside MORE (heats the kitchen). Total entropy increases.\" Living organisms decrease their internal entropy (building order from food) but increase environmental entropy MORE (exhaling CO₂, radiating heat). Life doesn't violate the 2nd law — it's a non-isolated system.</p><p><strong>Worked examples (15 min):</strong> (1) 1000 J flows from 500 K to 300 K. ΔS_hot = −1000/500 = −2 J/K. ΔS_cold = +1000/300 = +3.33 J/K. ΔS_total = +1.33 J/K > 0 ✓. (2) What if heat flowed 300 K → 500 K? ΔS_total = −1.33 J/K < 0 ✗. Forbidden. (3) A fridge: removes 200 J from food at 275 K, rejects 260 J to room at 295 K. ΔS_food = −200/275 = −0.73. ΔS_room = +260/295 = +0.88. ΔS_total = +0.15 > 0 ✓.</p><p><strong>Practice (10 min):</strong> Entropy change calculations. Determine if processes are allowed by the 2nd law.</p>",
          "engagementHook": {
            "title": "THE ARROW OF TIME — WHY EGGS DON'T UN-SCRAMBLE",
            "content": "Play a video of an egg being dropped — forward, then reversed. \"The forward video looks normal. The reversed video looks absurd. But the first law of thermodynamics allows it — energy would be conserved either way.\" The second law is what gives time its direction. Entropy increases → things break, mix, cool, and age. The 'arrow of time' is an entropy arrow. \"The universe is heading toward maximum entropy — heat death. But that's trillions of years away.\""
          },
          "nos": {
            "tags": ["Theories", "Global impact", "Ethics"],
            "description": "The second law is unique among physical laws: it introduces an arrow of time. All other laws (Newton's, Maxwell's, quantum mechanics) work equally well forward and backward in time. Only the second law distinguishes past from future. Arthur Eddington said: 'If your theory is found to be against the second law of thermodynamics, I can give you no hope; there is nothing for it but to collapse in deepest humiliation.'"
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — State the 2nd law in Clausius, Kelvin, and entropy forms",
            "AO2 — Calculate total entropy change for heat transfer between two bodies",
            "AO3 — Analyse whether a proposed process violates the 2nd law"
          ],
          "resources": "Egg drop video (forward and reverse), fridge energy flow diagram, entropy calculation worksheets",
          "formative": "\"(a) State the 2nd law in Clausius form and Kelvin form. (b) 2000 J of heat flows from a reservoir at 600 K to one at 300 K. Calculate ΔS for each and verify ΔS_total > 0. (c) A inventor claims a machine that converts 100% of heat to work. Explain why this violates the Kelvin form. (d) A fridge removes 150 J from food at 268 K and dumps 200 J to the room at 298 K. Is the 2nd law satisfied? Show your calculation.\""
        }
      ]
    },
    {
      "name": "Heat Engines & Carnot Cycle",
      "color": "accent2",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Cyclic Processes & Heat Engines",
          "focus": "Converting heat to work using thermodynamic cycles",
          "minutes": 50,
          "understandings": [
            "A heat engine operates in a cycle: it absorbs heat Q_H from a hot reservoir, converts part to work W, and rejects the rest Q_C to a cold reservoir",
            "Over one complete cycle: ΔU = 0 (returns to the same state) → Q_H = W + Q_C",
            "On a PV diagram, the net work per cycle = area enclosed by the cycle",
            "Real heat engines include: car engines (Otto cycle), diesel engines, power station turbines (Rankine cycle)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Every power station, car engine, and jet turbine is a heat engine: it takes in heat, produces work, and rejects waste heat. The 2nd law says you MUST reject some heat — you can never convert it all.\" Draw the heat engine diagram: hot reservoir (T_H) → Q_H → engine → W (output) + Q_C → cold reservoir (T_C).</p><p><strong>Direct instruction (15 min):</strong> A cyclic process returns the gas to its starting state → ΔU = 0. First law: Q_net = W_net. The engine absorbs Q_H and rejects Q_C, so Q_net = Q_H − Q_C = W. On a PV diagram, the cycle is a closed loop. Net work = enclosed area. Clockwise = engine (produces work). Counterclockwise = refrigerator/heat pump (consumes work). Walk through a simple rectangular cycle: two isobaric + two isochoric steps.</p><p><strong>Worked examples (15 min):</strong> (1) An engine absorbs 1000 J and rejects 600 J per cycle. W = 400 J. Draw the energy flow diagram. (2) A rectangular cycle on a PV diagram: P₁ = 1 atm, P₂ = 3 atm, V₁ = 2 L, V₂ = 5 L. Net work = (P₂ − P₁)(V₂ − V₁) = 2 × 10⁵ × 3 × 10⁻³ = 600 J. (3) A triangular cycle: calculate area = ½ base × height on PV diagram.</p><p><strong>Connection to real engines (10 min):</strong> Show simplified PV diagrams for the Otto cycle (petrol engine): two adiabatic + two isochoric processes. Diesel cycle: two adiabatic + one isobaric + one isochoric. Students identify each step. \"Your car runs 4000 of these cycles per minute.\"`</p><p><strong>Practice (5 min):</strong> Calculate net work from PV cycle areas.</p>",
          "engagementHook": {
            "title": "4000 CYCLES PER MINUTE — YOUR CAR ENGINE",
            "content": "\"A car engine at 4000 rpm completes 4000 thermodynamic cycles every minute — 67 per second. Each cycle: intake → compression (adiabatic) → combustion (isochoric) → expansion (adiabatic) → exhaust. You just learned the physics of every step.\" Show an animated PV diagram for the Otto cycle. The area enclosed = work per cycle = what moves your car."
          },
          "nos": {
            "tags": ["Technology", "Models", "Global impact"],
            "description": "Sadi Carnot analysed heat engines in 1824 — before the first and second laws were formally stated. He asked: 'What is the maximum possible efficiency?' His answer (the Carnot efficiency) set a theoretical upper limit that no real engine can exceed. Carnot's work is a rare example of engineering driving fundamental physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe how a heat engine operates; identify Q_H, W, Q_C",
            "AO2 — Calculate net work from PV diagram cycle areas",
            "AO3 — Analyse real engine cycles (Otto, Diesel) in terms of thermodynamic processes"
          ],
          "resources": "Heat engine energy flow diagram, Otto/Diesel cycle PV diagrams, animated engine video, calculators",
          "formative": "\"An engine operates between a hot reservoir at 800 K and a cold reservoir at 300 K. It absorbs 5000 J per cycle and rejects 3200 J. (a) Calculate W per cycle. (b) Draw the energy flow diagram. (c) On a PV diagram, the cycle is a rectangle from (1 atm, 1 L) to (4 atm, 3 L). Calculate the net work from the area. Does it match your answer?\""
        },
        {
          "num": 2,
          "title": "Thermal Efficiency & the Carnot Cycle",
          "focus": "Maximum possible efficiency and why it can never be 100%",
          "minutes": 50,
          "understandings": [
            "Thermal efficiency: η = W/Q_H = (Q_H − Q_C)/Q_H = 1 − Q_C/Q_H",
            "η < 1 always — some heat MUST be rejected (2nd law)",
            "The Carnot cycle is a theoretical heat engine with the maximum possible efficiency operating between two temperatures",
            "Carnot efficiency: η_Carnot = 1 − T_C/T_H (temperatures in kelvin)",
            "No real engine can exceed Carnot efficiency between the same temperatures",
            "The Carnot cycle consists of: isothermal expansion → adiabatic expansion → isothermal compression → adiabatic compression"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Define η = W/Q_H = 1 − Q_C/Q_H. From the 2nd law: Q_C > 0 always → η < 1. The Carnot cycle achieves the maximum: η_Carnot = 1 − T_C/T_H. Why? Because it uses only reversible processes (isothermal + adiabatic), minimising entropy generation. Describe the 4 steps: (1) isothermal expansion at T_H (absorbs Q_H), (2) adiabatic expansion (cools to T_C), (3) isothermal compression at T_C (rejects Q_C), (4) adiabatic compression (heats back to T_H). Draw on a PV diagram.</p><p><strong>Worked examples (20 min):</strong> (1) Carnot engine: T_H = 600 K, T_C = 300 K. η = 1 − 300/600 = 0.5 = 50%. (2) A real engine operates between the same temperatures at 35% efficiency. \"Is this possible?\" Yes — below Carnot. (3) A power station: T_H = 823 K (steam), T_C = 300 K. η_Carnot = 63.5%. Actual: ~40% (losses from friction, non-reversible processes). (4) \"To improve efficiency: raise T_H or lower T_C?\" Both work. Practically: raising T_H is limited by materials; lowering T_C is limited by the environment. (5) \"Why can η never reach 100%?\" That would require T_C = 0 K — absolute zero — which is unachievable.</p><p><strong>Discussion (10 min):</strong> \"Why do power stations need cooling towers?\" To reject Q_C to the cold reservoir (atmosphere/river). No cooling = no engine. The 2nd law demands waste heat. \"Why are combined-cycle gas turbines more efficient (~60%)?\" They use the exhaust heat from one engine as the input for a second — effectively raising T_H and lowering Q_C wasted.</p><p><strong>Practice (5 min):</strong> Carnot efficiency and real efficiency calculations.</p>",
          "engagementHook": {
            "title": "THE IMPOSSIBLE ENGINE — WHY 100% WILL NEVER HAPPEN",
            "content": "\"An inventor claims an engine at 80% efficiency between 500 K and 300 K. Carnot says the max is 1 − 300/500 = 40%. The inventor is either lying or has broken the 2nd law of thermodynamics.\" Students become patent examiners: given 5 engine claims (T_H, T_C, claimed η), they must calculate Carnot efficiency and rule each claim as 'possible' or 'impossible.' Two are impossible — students catch the fraud using physics."
          },
          "nos": {
            "tags": ["Theories", "Technology", "Ethics"],
            "description": "Carnot proved in 1824 that there's a maximum efficiency for any heat engine — a result with profound implications. No amount of engineering genius can exceed this limit. It's imposed by nature (the 2nd law), not by current technology. This is rare in physics: an absolute, permanent bound on what's possible."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Principled", "Knowledgeable"],
          "ao": [
            "AO1 — Define thermal efficiency; state η_Carnot = 1 − T_C/T_H",
            "AO2 — Calculate Carnot and real efficiencies; determine if a claimed efficiency is possible",
            "AO3 — Analyse why no real engine reaches Carnot efficiency and what factors limit real performance"
          ],
          "resources": "Carnot cycle PV diagram, engine efficiency comparison table, patent examiner activity cards, calculators",
          "formative": "\"(a) Calculate η_Carnot for T_H = 700 K, T_C = 350 K. (b) A real engine between these temperatures has η = 30%. Calculate Q_C per cycle if Q_H = 2000 J. (c) An inventor claims η = 55% between the same temperatures. Is this possible? Justify. (d) How could the theoretical maximum be increased without changing T_C? What practical limit would you hit? (e) Describe the 4 steps of the Carnot cycle and identify each on a PV diagram.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.3 Work, Energy & Power", "question": "How does the first law of thermodynamics extend conservation of energy from mechanics to thermal systems?" },
    { "topic": "B.1 Thermal Energy Transfers", "question": "How does the concept of internal energy (B.1) connect to ΔU = (3/2)NkΔT and the first law?" },
    { "topic": "B.3 Gas Laws", "question": "How do PV diagrams from B.3 support the analysis of thermodynamic processes? How does U = (3/2)NkT feed into the first law?" },
    { "topic": "B.2 Greenhouse Effect", "question": "How does the second law constrain the efficiency of power stations, and how does this relate to waste heat and CO₂ emissions?" },
    { "topic": "E.4 Fission / E.5 Fusion", "question": "How do nuclear power stations convert thermal energy to work? What limits their efficiency?" },
    { "topic": "IB Linking (NOS)", "question": "In what way is entropy fundamental to the evolution of the universe? How does the arrow of time emerge from the second law?" }
  ]
},
"B5": {
  "title": "Current and Circuits",
  "code": "B.5",
  "theme": "B",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How do charged particles flow through materials?",
    "How are the electrical properties of materials quantified?",
    "What are the consequences of resistance in conductors?"
  ],
  "groups": [
    {
      "name": "Current, EMF & Potential Difference",
      "color": "accent5",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "EMF, Cells & Circuit Diagrams",
          "focus": "Energy sources in circuits and standard symbols",
          "minutes": 30,
          "understandings": [
            "Cells provide a source of electromotive force (emf) — the energy supplied per unit charge by the cell",
            "Chemical cells and solar cells as energy sources in circuits",
            "Circuit diagrams represent the arrangement of components using standard symbols",
            "Advantages and disadvantages of different sources of electrical energy"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hand out a battery, a bulb, and a wire to each pair. \"Make the bulb light up.\" Students experiment — some succeed quickly, others struggle. The struggle reveals misconceptions: current doesn't flow FROM the battery — it flows THROUGH a complete circuit. The battery provides the energy (emf) that drives the current.</p><p><strong>Direct instruction (10 min):</strong> Define emf: energy per unit charge supplied by the cell (units: volts = J/C). A 1.5 V cell gives 1.5 J to every coulomb of charge. Chemical cells: chemical reactions push charges. Solar cells: photons knock electrons free. Draw standard circuit symbols: cell, battery, resistor, lamp, ammeter, voltmeter, switch, variable resistor. Emphasise: circuit diagrams are a MODEL — they show connectivity, not physical arrangement.</p><p><strong>Discussion (10 min):</strong> Compare energy sources: chemical cells (portable, limited life, environmental disposal), solar cells (renewable, daylight only, expensive), mains supply (high power, not portable, fossil/nuclear origin). Students build a comparison table.</p><p><strong>Practice (5 min):</strong> Draw circuit diagrams from descriptions and identify components from diagrams.</p>",
          "engagementHook": {
            "title": "LIGHT THE BULB — THE SIMPLEST CIRCUIT",
            "content": "One battery, one bulb, one wire. Can you light it? Students who fail reveal a common misconception: they try to connect both wire ends to the same terminal. \"Current needs a COMPLETE loop — from one terminal, through the bulb, back to the other terminal. No loop, no light.\" This 2-minute activity diagnoses and corrects the biggest misconception in circuits before you teach anything."
          },
          "nos": {
            "tags": ["Models", "Technology"],
            "description": "Circuit diagrams are a visual model — they abstract away physical layout to show electrical connectivity. Alessandro Volta invented the first chemical battery in 1800, enabling the systematic study of current electricity. Before Volta, electricity was limited to static charges and lightning."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Communicator"],
          "ao": [
            "AO1 — Define emf; draw and interpret circuit diagrams using standard symbols",
            "AO2 — Compare advantages and disadvantages of electrical energy sources"
          ],
          "resources": "Batteries (1.5 V), small bulbs, wires, circuit symbol reference sheet, solar cell (if available)",
          "formative": "\"Draw a circuit diagram for: a battery connected to two lamps in parallel, with an ammeter measuring total current and a voltmeter measuring the pd across one lamp. Label all components using standard symbols.\""
        },
        {
          "num": 2,
          "title": "Current — I = Δq/Δt",
          "focus": "Flow of charge carriers through a circuit",
          "minutes": 35,
          "understandings": [
            "Direct current (dc) I is a flow of charge carriers: I = Δq/Δt",
            "Units: ampere (A) = coulomb per second (C/s)",
            "In metals, the charge carriers are electrons (moving from − to +), but conventional current is defined as flowing from + to −",
            "In electrolytes, charge carriers can be positive and negative ions",
            "The properties of conductors and insulators in terms of mobility of charge carriers"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How many electrons pass through your phone charger cable every second?\" A typical charger: I = 2 A. Charge per second = 2 C. Number of electrons = 2 / 1.6×10⁻¹⁹ = 1.25 × 10¹⁹. \"12.5 billion billion electrons per second — and you can't feel or see any of them.\"</p><p><strong>Direct instruction (15 min):</strong> Define I = Δq/Δt. Current is the RATE of flow of charge. Analogy: current is like water flow rate (litres/second), charge is like the volume of water, and the battery is like a pump. In metals: charge carriers are free (delocalised) electrons. They drift slowly (~mm/s) but the electric field travels at near light speed — like a tube already full of marbles; push one in, one pops out the other end instantly. Conventional current: from + to − (historical convention, before electrons were discovered). Electron flow: from − to +.</p><p><strong>Conductors vs insulators (5 min):</strong> Conductors: many free charge carriers (metals, electrolytes). Insulators: very few free carriers (rubber, plastic, glass). Semiconductors: intermediate — controlled by doping and temperature (preview of diodes/transistors).</p><p><strong>Practice (10 min):</strong> (1) 5 A flows for 2 minutes. Calculate charge. (2) 3.2 × 10²⁰ electrons flow in 10 s. Calculate current. (3) A lightning bolt transfers 5 C in 0.001 s. Calculate current (5000 A!).</p>",
          "engagementHook": {
            "title": "THE MARBLE TUBE — WHY LIGHTS TURN ON INSTANTLY",
            "content": "Fill a tube with marbles. Push one in at one end — one pops out the other end instantly. \"Electrons work the same way. Individual electrons drift slowly (~0.1 mm/s). But the PUSH travels at near the speed of light. That's why the light turns on instantly even though no single electron has moved far.\" Students push marbles through a tube and see the effect. The drift speed calculation is a classic IB question."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "Benjamin Franklin defined current as flowing from + to −, not knowing that electrons (discovered 150 years later) actually flow from − to +. We still use his convention — a historical accident that persists because the maths works either way. This shows how scientific conventions, once established, are hard to change even when understood differently."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define current; state I = Δq/Δt; distinguish conventional current from electron flow",
            "AO2 — Calculate current, charge, and number of electrons"
          ],
          "resources": "Tube filled with marbles (drift speed demo), calculators, ammeter + simple circuit for demonstration",
          "formative": "\"A wire carries 3 A. (a) How much charge passes a point in 1 minute? (b) How many electrons is that? (c) If the drift speed of electrons is 0.2 mm/s and the wire has cross-section 1 mm², calculate the number density of free electrons. (d) Why does the light turn on instantly if electrons drift so slowly?\""
        },
        {
          "num": 3,
          "title": "Potential Difference — V = W/q",
          "focus": "Work done per unit charge between two points",
          "minutes": 35,
          "understandings": [
            "Electric potential difference V is the work done per unit charge on moving a positive charge between two points: V = W/q",
            "Units: volt (V) = joule per coulomb (J/C)",
            "EMF is the pd across the terminals of a source when no current flows (open circuit)",
            "PD across a component represents the energy converted per unit charge in that component",
            "A voltmeter measures pd and is connected in parallel; an ammeter measures current and is connected in series"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A 9 V battery and a 1.5 V battery both push electrons around a circuit. What's different?\" The 9 V battery gives each coulomb 9 J of energy; the 1.5 V gives 1.5 J. Voltage = energy per charge. More voltage = more energy per electron = more \"push.\"</p><p><strong>Direct instruction (15 min):</strong> Define V = W/q. A 12 V car battery: each coulomb gets 12 J of energy from the battery and delivers 12 J to the components. The energy is TRANSFORMED, not created: chemical → electrical (at the battery) → thermal + light (at the bulb). Ammeter: measures I, connected in SERIES (current flows through it). Must have very low resistance (doesn't impede flow). Voltmeter: measures V, connected in PARALLEL (across a component). Must have very high resistance (doesn't divert current). Ideal meters: ammeter R = 0, voltmeter R = ∞.</p><p><strong>Demo (5 min):</strong> Build a simple circuit: battery + resistor. Measure I with ammeter (in series). Measure V with voltmeter (across the resistor). Show that connecting the voltmeter in series or the ammeter in parallel gives wrong/dangerous readings.</p><p><strong>Practice (10 min):</strong> (1) A 6 V battery drives 0.5 C of charge. Energy transferred? (3 J). (2) A heater converts 1800 J when 10 C flows. PD across heater? (180 V). (3) Draw a circuit and show where to place ammeter and voltmeter correctly.</p>",
          "engagementHook": {
            "title": "THE WATER PUMP ANALOGY — VOLTAGE IS HEIGHT",
            "content": "\"Imagine a water park: the pump lifts water to the top of a slide (= battery gives energy = emf). The water rushes down the slide losing height (= current through a resistor losing pd). At the bottom it has no more height to lose (= pd used up). The pump lifts it again.\" Current = flow rate. Voltage = height (energy per unit). Resistance = how narrow the slide is. This analogy works remarkably well for series circuits."
          },
          "nos": {
            "tags": ["Models", "Measurements"],
            "description": "The volt is named after Alessandro Volta, who built the first battery in 1800. The water-circuit analogy is a model — useful but imperfect. It works well for series circuits but breaks down for parallel circuits (water doesn't split and rejoin easily). Knowing the limits of an analogy is as important as the analogy itself."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define pd; state V = W/q; explain ammeter and voltmeter placement",
            "AO2 — Calculate pd, work done, and charge"
          ],
          "resources": "Batteries, resistors, ammeter, voltmeter, connecting wires, bulb, circuit board",
          "formative": "\"A 12 V battery drives a current through a 6 Ω resistor. (a) Draw the circuit with ammeter and voltmeter correctly placed. (b) Calculate the current. (c) Calculate the energy transferred when 5 C of charge flows. (d) If the ammeter has R = 0.1 Ω, by how much does it affect the current? Is it significant?\""
        }
      ]
    },
    {
      "name": "Resistance, Ohm's Law & Power",
      "color": "accent2",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Resistance, Resistivity & Ohm's Law",
          "focus": "R = V/I, ρ = RA/L, and what makes a material resist current",
          "minutes": 45,
          "understandings": [
            "Electric resistance R: opposition to current flow, arising from collisions between charge carriers and the lattice structure",
            "R = V/I — definition of resistance. Units: ohm (Ω) = V/A",
            "Resistivity ρ = RA/L — a material property. R depends on length L (longer = more R), cross-sectional area A (wider = less R), and material (ρ)",
            "Ohm's law: for an ohmic conductor at constant temperature, V ∝ I (R is constant)",
            "A metal conductor at constant temperature is an ohmic device"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why does a thin wire get hotter than a thick wire carrying the same current?\" The thin wire has higher resistance (R ∝ 1/A). More energy is dissipated per second. This is why fuses are thin wires — they're designed to overheat and break the circuit.</p><p><strong>Direct instruction (15 min):</strong> Define R = V/I. Origin of resistance: electrons collide with the metal lattice — each collision transfers energy, slowing electrons and heating the metal. Resistivity: ρ = RA/L. R = ρL/A. Longer wire → more collisions → higher R. Wider wire → more paths for electrons → lower R. Copper: ρ = 1.7 × 10⁻⁸ Ω·m (excellent conductor). Glass: ρ ≈ 10¹⁰ Ω·m (insulator). Ohm's law: V/I = constant (at constant T). Not all materials obey this — Ohm's law is an observation about certain materials, not a universal law.</p><p><strong>Lab (15 min):</strong> MEASURING RESISTANCE — Students measure I for various V across a resistor (or nichrome wire). Plot V vs I. For an ohmic conductor: straight line through origin. Gradient = R. Then vary wire length: plot R vs L (linear). Vary thickness: plot R vs 1/A (linear). Extract ρ.</p><p><strong>Practice (10 min):</strong> (1) R of a 2 m copper wire, area 1 mm². (2) Two wires: same material, one twice as long and half the area — resistance ratio? (4:1). (3) Ohm's law: 6 V across 200 Ω → I?</p>",
          "engagementHook": {
            "title": "THE FUSE — A WIRE DESIGNED TO FAIL",
            "content": "Show a fuse wire. \"This is deliberately thin — high R → heats up quickly → melts and breaks the circuit before the house burns down.\" Calculate: a 13 A fuse with R = 0.02 Ω dissipates P = I²R = 3.4 W during normal operation. At 30 A (fault): P = 18 W — it melts in seconds. \"Resistance isn't always a problem — here it's a safety feature.\""
          },
          "nos": {
            "tags": ["Measurements", "Patterns", "Models"],
            "description": "Georg Ohm published his law in 1827 but was ridiculed — the idea that a simple ratio described electrical behaviour seemed too simple to be true. It took decades for Ohm's law to be accepted. It's also misnamed: it's not a universal law but an empirical observation about specific materials (ohmic conductors) under specific conditions (constant temperature)."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define resistance and resistivity; state Ohm's law",
            "AO2 — Apply R = V/I and ρ = RA/L",
            "AO3 — Analyse V-I graphs and experimental data to determine R and ρ"
          ],
          "resources": "Nichrome wire (various lengths/thicknesses), ammeter, voltmeter, power supply, graph paper, fuse wire",
          "formative": "\"A nichrome wire (ρ = 1.1 × 10⁻⁶ Ω·m) is 0.5 m long with diameter 0.4 mm. (a) Calculate R. (b) If 3 V is applied, find I. (c) Is this an ohmic device? How would you verify experimentally? (d) If the wire is replaced by one twice as long and twice the diameter, find the new R.\""
        },
        {
          "num": 2,
          "title": "Ohmic & Non-Ohmic Conductors",
          "focus": "I-V characteristics of resistors, filament lamps, and diodes",
          "minutes": 35,
          "understandings": [
            "Ohmic conductors: V ∝ I (straight line through origin on I-V graph) — resistance is constant",
            "Non-ohmic: filament lamp — resistance increases as temperature increases (curve flattens at higher V)",
            "Non-ohmic: diode — conducts in one direction only (forward bias). Very high resistance in reverse bias",
            "The heating effect: current through a resistor converts electrical energy to thermal energy"
          ],
          "teachingStrategy": "<p><strong>Lab (20 min):</strong> I-V CHARACTERISTICS — Students measure I for various V (positive and negative) for three components: (a) Fixed resistor: straight line → ohmic. (b) Filament lamp: curve → R increases as filament heats up (tungsten gets hotter → more lattice vibrations → more electron collisions → higher R). (c) Diode: conducts above ~0.6 V forward bias; essentially zero current in reverse. Plot all three on the same axes for comparison.</p><p><strong>Direct instruction (10 min):</strong> Explain each shape from microscopic physics. Resistor: constant T → constant lattice vibrations → constant R. Lamp: high current → heating → more vibrations → higher R → curve flattens. Diode: semiconductor junction allows current in one direction only — a one-way valve for electrons. The heating effect: P = I²R → electrical energy → thermal. This is useful (toasters, heaters) and wasteful (power lines, CPUs).</p><p><strong>Practice (5 min):</strong> Sketch I-V characteristics from descriptions. Identify components from their I-V graphs.</p>",
          "engagementHook": {
            "title": "THE LIGHT BULB THAT GETS LAZIER",
            "content": "\"A cold filament bulb has R ≈ 20 Ω. A hot filament: R ≈ 200 Ω — ten times more! The bulb literally becomes MORE resistant as it heats up.\" Students measure: switch on a bulb and watch the ammeter reading DROP in the first second as the filament heats. \"The rush of current when you flip the switch is why bulbs usually blow at the moment you turn them on — not while they're running.\""
          },
          "nos": {
            "tags": ["Observations", "Patterns"],
            "description": "The I-V characteristic is a direct experimental observation — you measure it, not derive it. Different materials give different curves, and the curves encode the microscopic physics (lattice vibrations, semiconductor junctions). This is empirical science at its most direct: graph the data and let the shape tell the story."
          },
          "atl": ["Research skills", "Thinking skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe ohmic and non-ohmic behaviour",
            "AO2 — Sketch and interpret I-V characteristics for resistor, lamp, and diode",
            "AO3 — Explain why filament lamp R increases with temperature at the molecular level"
          ],
          "resources": "Fixed resistor, filament lamp, diode, variable power supply (+ and − voltage), ammeter, voltmeter, graph paper",
          "formative": "\"Three I-V graphs are shown (unlabelled). Identify which is: (a) a fixed resistor, (b) a filament lamp, (c) a diode. Justify each answer. (d) At which point on the filament lamp curve is the resistance highest? How do you know? (e) Explain why the diode graph is almost flat for negative voltages.\""
        },
        {
          "num": 3,
          "title": "Electrical Power — P = IV = I²R = V²/R",
          "focus": "Rate of energy conversion in electrical components",
          "minutes": 40,
          "understandings": [
            "Electrical power dissipated by a resistor: P = IV = I²R = V²/R",
            "All three forms are equivalent (derived from P = IV and V = IR)",
            "Choose the form based on what you know: P = IV (general), I²R (when I is known), V²/R (when V is known)",
            "Power in a circuit = rate of energy conversion from electrical to other forms (thermal, light, kinetic)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> From P = W/t and V = W/q and I = q/t: P = W/t = (W/q) × (q/t) = VI. Since V = IR: P = (IR)I = I²R. Since I = V/R: P = V(V/R) = V²/R. All three give the same answer — choose based on convenience. P = IV is most general. P = I²R emphasises that power loss in wires depends on CURRENT squared. P = V²/R is useful when voltage is fixed (mains supply).</p><p><strong>Worked examples (15 min):</strong> (1) A 60 W bulb at 240 V: I = P/V = 0.25 A. R = V/I = 960 Ω. (2) Power lost in a 5 Ω cable carrying 10 A: P = I²R = 500 W. \"That's a LOT of waste.\" How to reduce: either lower R (thicker cables, expensive) or lower I (higher V — this is why power stations transmit at 400 kV). (3) Two 100 Ω resistors: in series at 12 V → P_total = V²/(R₁+R₂) = 144/200 = 0.72 W. In parallel → R_p = 50 Ω → P = 144/50 = 2.88 W. Parallel draws MORE power.</p><p><strong>Real-world connection (10 min):</strong> \"Your electricity bill charges by the kWh (kilowatt-hour). 1 kWh = 3.6 MJ. A 2 kW heater running for 3 hours: 6 kWh.\" Students calculate their phone charger's annual cost. \"Why does high-voltage transmission reduce power loss?\" P_loss = I²R. For the same power P transmitted: I = P/V. Higher V → lower I → much lower I²R loss.</p><p><strong>Practice (5 min):</strong> Power calculations using all three forms.</p>",
          "engagementHook": {
            "title": "WHY POWER LINES USE 400,000 VOLTS",
            "content": "\"A power station sends 1 GW at 25 kV: I = 40,000 A. Cable R = 1 Ω. Power lost: I²R = 1.6 GW — MORE than the power sent! At 400 kV: I = 2,500 A. Loss: 6.25 MW — less than 1%.\" The I² factor makes this dramatic: 16× less current → 256× less power loss. \"This is why transformers and high-voltage transmission exist — P = I²R demands it.\""
          },
          "nos": {
            "tags": ["Global impact", "Technology", "Patterns"],
            "description": "The 'War of Currents' (1880s) between Edison (DC) and Westinghouse/Tesla (AC) was decided by physics: AC can be easily stepped up to high voltage for efficient transmission (P_loss = I²R). Edison's DC system lost too much power over distance. Technology decisions driven by fundamental physics shaped the modern electrical grid."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Knowledgeable", "Caring"],
          "ao": [
            "AO1 — State P = IV = I²R = V²/R",
            "AO2 — Calculate power using the appropriate form; calculate energy in kWh",
            "AO3 — Analyse why high-voltage transmission reduces power losses"
          ],
          "resources": "Calculators, electricity bill example, power comparison chart (phone to power station)",
          "formative": "\"A 2 kW kettle runs on 240 V mains. (a) Calculate I. (b) Calculate R. (c) It takes 3 minutes to boil 1 L of water. Calculate energy used in kWh and cost at $0.15/kWh. (d) If the same 1 GW of power is transmitted at 100 kV instead of 400 kV, by what factor does the transmission loss increase?\""
        }
      ]
    },
    {
      "name": "Circuit Analysis",
      "color": "accent3",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Series & Parallel Circuits",
          "focus": "Rules for current, voltage, and resistance in combinations",
          "minutes": 50,
          "understandings": [
            "Series: I is the same through all components; V divides: V = V₁ + V₂ + ...; R adds: R_s = R₁ + R₂ + ...",
            "Parallel: V is the same across all branches; I divides: I = I₁ + I₂ + ...; 1/R_p = 1/R₁ + 1/R₂ + ...",
            "R_parallel is always LESS than the smallest individual resistance",
            "Solve circuit problems by identifying series and parallel sections, simplifying step by step"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Your house has lights in PARALLEL. How do you know?\" Turn off one light — the others stay on. In series, turning off one breaks the circuit for all (like old Christmas lights). Parallel gives independence.</p><p><strong>Direct instruction (15 min):</strong> Series rules: one path → same I everywhere. V splits proportionally (more R → more V). R_total = R₁ + R₂. Parallel rules: V same across all branches. I splits (more R → less I through that branch). 1/R_total = 1/R₁ + 1/R₂. For two equal resistors R: series → 2R, parallel → R/2. Key result: R_parallel < smallest R (adding a parallel path always reduces total resistance — more paths = easier flow).</p><p><strong>Lab (15 min):</strong> BUILD AND MEASURE — Students build: (a) 2 resistors in series: measure I (same everywhere) and V across each (adds to total). (b) Same resistors in parallel: measure V (same across each) and I through each (adds to total). Verify the rules with real measurements. Discuss discrepancies (meter resistance, connection resistance).</p><p><strong>Worked examples (10 min):</strong> (1) 100 Ω and 200 Ω in series with 12 V: I = 12/300 = 0.04 A. V₁ = 4 V, V₂ = 8 V. (2) Same in parallel: R_p = 66.7 Ω. I_total = 0.18 A. I₁ = 0.12 A, I₂ = 0.06 A. (3) Mixed circuit: two parallel resistors in series with a third. Simplify step by step.</p><p><strong>Practice (5 min):</strong> Mixed series-parallel circuit problems.</p>",
          "engagementHook": {
            "title": "THE CHRISTMAS LIGHT MYSTERY",
            "content": "\"Old Christmas lights: one bulb blows, ALL go out (series). New ones: one blows, the rest stay on (parallel). Why did manufacturers switch?\" Because parallel is more robust and each bulb gets the full voltage. But series is cheaper (fewer wires). Students calculate: 10 bulbs rated 24 V each. In series: need 240 V supply. In parallel: need 24 V supply but 10× the current. Trade-offs everywhere."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "Circuit analysis uses the same mathematical structure as other 'flow' problems: water pipes (hydraulic analogy), heat conduction, and even traffic flow. Kirchhoff's laws (sum of currents at a junction = 0, sum of voltages around a loop = 0) are conservation of charge and conservation of energy applied to circuits."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State rules for I, V, R in series and parallel",
            "AO2 — Calculate R_total, I, V for series, parallel, and mixed circuits",
            "AO3 — Analyse circuits by identifying and simplifying series/parallel sections"
          ],
          "resources": "Resistors (various values), breadboard or circuit board, ammeter, voltmeter, wires, power supply",
          "formative": "\"Three resistors: 10 Ω, 20 Ω, 30 Ω. (a) All in series with 12 V: find I and V across each. (b) All in parallel with 12 V: find R_total, I_total, and I through each. (c) The 10 Ω and 20 Ω in parallel, then in series with the 30 Ω, connected to 12 V. Find R_total, I, and V across the 30 Ω.\""
        },
        {
          "num": 2,
          "title": "EMF & Internal Resistance — ε = I(R + r)",
          "focus": "Why real batteries lose voltage under load",
          "minutes": 45,
          "understandings": [
            "Real cells have internal resistance r — resistance inside the cell itself",
            "EMF ε = I(R + r), where R is the external (load) resistance",
            "Terminal pd V = ε − Ir — the voltage available to the external circuit is LESS than the emf by the amount Ir ('lost volts')",
            "When no current flows (I = 0): V = ε (open circuit voltage = emf)",
            "When short-circuited (R = 0): I = ε/r (maximum current, all energy wasted internally)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Measure the voltage of a fresh battery with no load: 1.55 V. Connect it to a small bulb: voltage drops to ~1.3 V. \"Where did 0.25 V go?\" Lost inside the battery — internal resistance.</p><p><strong>Direct instruction (15 min):</strong> A real cell: emf ε is the total energy per charge. Internal resistance r uses some of this energy (as heat inside the cell). What's left for the external circuit: V = ε − Ir. Rearrange: ε = IR + Ir = I(R + r). Plot V vs I: straight line with y-intercept = ε and gradient = −r. As I increases, V decreases linearly. At I = 0 (open circuit): V = ε. At maximum I (short circuit): I_max = ε/r, V = 0.</p><p><strong>Lab (15 min):</strong> MEASURING ε AND r — Connect a cell to various resistors. Measure V and I for each. Plot V vs I. y-intercept = ε. Gradient = −r. Students extract both values from their graph. Typical AA cell: ε ≈ 1.5 V, r ≈ 0.5–1 Ω.</p><p><strong>Practice (10 min):</strong> (1) Cell ε = 6 V, r = 0.5 Ω, R = 11.5 Ω: find I, V_terminal, power to R, power wasted in r. (2) Two cells in series: ε_total = 2ε, r_total = 2r. (3) \"Why does a car battery 'die' when you leave the headlights on but the starter motor still drains it?\" (Starter draws huge I → big Ir drop → V_terminal too low to run electronics.)</p>",
          "engagementHook": {
            "title": "THE DYING BATTERY — WHERE DO THE VOLTS GO?",
            "content": "Connect a 9 V battery to increasing loads (decreasing R). Students watch the voltmeter reading DROP as the current increases. \"The battery says 9 V on the label. But under load, it delivers only 7 V. The missing 2 V is being wasted as heat INSIDE the battery.\" Plot V vs I live — the straight line emerges before their eyes. The y-intercept is the 'true' emf. The slope reveals the internal resistance."
          },
          "nos": {
            "tags": ["Models", "Measurements"],
            "description": "The ideal battery (no internal resistance) is a model — useful for simple calculations but inaccurate for real circuits. Adding r makes the model more realistic. This is a common pattern in physics: start with an idealisation, then add complexity. Each refinement makes the model more accurate but harder to use."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define emf and internal resistance; state ε = I(R + r)",
            "AO2 — Apply ε = I(R + r) and V = ε − Ir; extract ε and r from V-I graphs",
            "AO3 — Analyse how internal resistance affects circuit performance"
          ],
          "resources": "Cells, various resistors, ammeter, voltmeter, graph paper, 9 V battery for demo",
          "formative": "\"A cell (ε = 1.5 V, r = 0.8 Ω) is connected to R = 4.2 Ω. (a) Calculate I. (b) Calculate terminal pd. (c) Calculate power delivered to R and power wasted in r. (d) What value of R would result in maximum power transfer to R? (Hint: it equals r.) (e) From V-I data: V = 1.48 at I = 0.1, V = 1.20 at I = 0.5. Find ε and r.\""
        },
        {
          "num": 3,
          "title": "Variable Resistors, Thermistors, LDRs & Potential Dividers",
          "focus": "Components with changing resistance and voltage division",
          "minutes": 45,
          "understandings": [
            "Resistors can have variable resistance",
            "Thermistor: resistance decreases as temperature increases (NTC type)",
            "Light-dependent resistor (LDR): resistance decreases as light intensity increases",
            "Potentiometer: a variable resistor used to vary pd continuously",
            "Potential divider: V_out = V_in × R₂/(R₁ + R₂) — splits voltage in proportion to resistance"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Variable resistors change R by adjusting length of wire in the circuit. Special types: Thermistor (NTC): R decreases as T increases — used in temperature sensors, thermostats. LDR: R decreases as light intensity increases — used in automatic lighting, camera exposure. Potentiometer: a 3-terminal variable resistor that acts as a continuously adjustable voltage divider.</p><p><strong>Potential divider (15 min):</strong> Two resistors in series with a voltage source: V_out across R₂ = V_in × R₂/(R₁ + R₂). Derive from series current: I = V_in/(R₁ + R₂), V_out = IR₂. If R₁ = R₂: V_out = V_in/2. If R₂ >> R₁: V_out ≈ V_in. Replace R₁ with a thermistor: as T increases, R₁ decreases, V_out across R₂ increases — a temperature-to-voltage converter. Replace R₁ with LDR: as light increases, R₁ decreases, V_out increases — a light sensor.</p><p><strong>Lab (15 min):</strong> SENSOR CIRCUITS — Build a potential divider with a thermistor and a fixed resistor. Measure V_out at different temperatures (hold the thermistor, breathe on it, dip in warm water). Plot V_out vs T. Then replace the thermistor with an LDR. Measure V_out in different lighting conditions. Students see the sensor concept work in real time.</p><p><strong>Practice (5 min):</strong> Potential divider calculations and sensor circuit design.</p>",
          "engagementHook": {
            "title": "BUILD A TEMPERATURE ALARM",
            "content": "\"Using a thermistor, a fixed resistor, and a battery, build a circuit where V_out increases when temperature increases. If V_out exceeds a threshold, an LED lights up — a simple temperature alarm.\" Students design, build, and test. When they hold the thermistor, the LED lights up from their body heat. \"Congratulations — you just built the sensor circuit inside a fire alarm.\""
          },
          "nos": {
            "tags": ["Technology", "Observations", "Patterns"],
            "description": "Sensor circuits (thermistors, LDRs) convert physical quantities (temperature, light) into electrical signals (voltage). This is the basis of all electronic instrumentation: every digital thermometer, automatic streetlight, and smartphone light sensor uses a potential divider with a variable-resistance component."
          },
          "atl": ["Thinking skills", "Research skills", "Social skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe thermistors, LDRs, and potentiometers",
            "AO2 — Apply the potential divider equation V_out = V_in × R₂/(R₁+R₂)",
            "AO3 — Analyse how changing R₁ (thermistor/LDR) affects V_out in a sensor circuit"
          ],
          "resources": "Thermistor (NTC), LDR, fixed resistors, battery, voltmeter, LED, breadboard, warm water, torch",
          "formative": "\"A potential divider: 9 V supply, R₁ = thermistor (1 kΩ at 20°C, 500 Ω at 50°C), R₂ = 1 kΩ fixed. (a) Calculate V_out at 20°C. (b) Calculate V_out at 50°C. (c) Sketch V_out vs temperature (qualitatively). (d) If R₁ is replaced with an LDR, how does V_out change from darkness to bright light? (e) Design a circuit where V_out DECREASES with increasing temperature.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "How is Ohm's law (V = IR) structurally analogous to Newton's second law (F = ma)? What role does 'resistance' play in each?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does electrical power P = IV relate to mechanical power P = Fv? How does efficiency apply to electrical systems?" },
    { "topic": "B.1 Thermal Energy Transfers", "question": "How does resistance heating connect to thermal energy transfer? Why do conductors heat up when current flows?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How does the microscopic picture of electron drift connect to electric field and potential concepts in D.2?" },
    { "topic": "D.4 Induction (HL)", "question": "How does electromagnetic induction generate the emf that drives current in generators and transformers?" },
    { "topic": "IB Linking", "question": "What are the consequences of resistance in conductors for energy efficiency and transmission?" }
  ]
},
"C1": {
  "title": "Simple Harmonic Motion",
  "code": "C.1",
  "theme": "C",
  "level": "SL + HL",
  "recommendedHours": 7,
  "recommendedMinutes": 420,
  "guidingQuestions": [
    "What makes the harmonic oscillator model applicable to a wide range of physical phenomena?",
    "Why must the defining equation of simple harmonic motion take the form it does?",
    "How can the energy and motion of an oscillation be analysed both graphically and algebraically?"
  ],
  "groups": [
    {
      "name": "SHM Fundamentals (SL)",
      "color": "accent3",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Conditions for SHM & the Defining Equation",
          "focus": "a = −ω²x — why the negative sign is everything",
          "minutes": 50,
          "understandings": [
            "Conditions that lead to simple harmonic motion: (1) a restoring force directed toward the equilibrium position, (2) the restoring force is proportional to the displacement from equilibrium",
            "The defining equation of SHM: a = −ω²x, where ω is the angular frequency",
            "The negative sign means acceleration is always OPPOSITE to displacement — always directed toward equilibrium",
            "Definitions: time period T, frequency f, angular frequency ω = 2πf = 2π/T, amplitude A, equilibrium position, displacement x"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hang a mass from a spring. Pull it down and release. It oscillates. \"It overshoots equilibrium, reverses, overshoots again, reverses again. What force drives this back-and-forth?\" The spring always pulls toward the centre — a RESTORING force. The further you pull, the harder it pulls back — proportional to displacement.</p><p><strong>Direct instruction (20 min):</strong> Two conditions for SHM: (1) restoring force toward equilibrium, (2) force ∝ displacement. This gives F = −kx (spring) → ma = −kx → a = −(k/m)x. Define ω² = k/m → a = −ω²x. The DEFINING equation. Unpack the negative sign: when x is positive (right of centre), a is negative (acceleration to the left — toward centre). When x is negative (left), a is positive (toward centre). The acceleration ALWAYS opposes displacement. Define all terms: T (one complete oscillation), f = 1/T, ω = 2πf, A (maximum displacement), equilibrium (where x = 0 and F = 0).</p><p><strong>Demo (10 min):</strong> Pendulum, mass-spring, ruler clamped to table edge — all oscillate. For each: identify the restoring force and the equilibrium position. \"These look different but the physics is identical: a = −ω²x governs them all.\"</p><p><strong>Practice (15 min):</strong> (1) Identify whether given systems undergo SHM (ball in a bowl: yes; ball bouncing: no — force isn't proportional). (2) A = 0.05 m, f = 2 Hz: find ω, T, and maximum acceleration (a_max = ω²A).</p>",
          "engagementHook": {
            "title": "SHM IS EVERYWHERE — NAME THAT OSCILLATION",
            "content": "Show 10 quick video clips: playground swing, guitar string, heartbeat on ECG, building swaying in wind, vibrating phone, pendulum clock, car suspension, earthquake seismograph, child on a trampoline, metronome. \"Which of these are SHM?\" Students debate each. Key test: is the restoring force proportional to displacement? The swing and pendulum (small angles) are SHM. The bouncing ball is NOT (contact force isn't proportional). This sets up the entire topic."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "SHM is one of the most universal models in physics — it describes any system near a stable equilibrium. The same equation (a = −ω²x) governs a pendulum, a spring, atoms in a crystal, and electromagnetic oscillations. The power of physics is finding one model that explains many different phenomena."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State the two conditions for SHM; state a = −ω²x; define T, f, ω, A",
            "AO2 — Determine whether a given system undergoes SHM",
            "AO3 — Explain the significance of the negative sign in a = −ω²x"
          ],
          "resources": "Spring + mass, pendulum, ruler clamped to desk, 10 oscillation video clips, stopwatch",
          "formative": "\"A body oscillates with a = −ω²x. (a) Explain why the negative sign is essential for oscillation. (b) What would happen if a = +ω²x (positive)? (c) A mass on a spring has f = 3 Hz and A = 0.04 m. Find ω, T, max acceleration, and max speed (preview). (d) Is a ball bouncing on a floor SHM? Justify.\""
        },
        {
          "num": 2,
          "title": "Period of Mass-Spring & Simple Pendulum",
          "focus": "T = 2π√(m/k) and T = 2π√(L/g)",
          "minutes": 50,
          "understandings": [
            "Time period for a mass-spring system: T = 2π√(m/k), where m is the mass and k is the spring constant",
            "Time period for a simple pendulum: T = 2π√(L/g), where L is the length and g is acceleration due to gravity",
            "For the pendulum: T does NOT depend on mass or amplitude (for small angles)",
            "For the spring: T does NOT depend on amplitude but DOES depend on mass"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Mass-spring: from a = −(k/m)x, ω² = k/m → ω = √(k/m) → T = 2π/ω = 2π√(m/k). Heavier mass → longer period (more inertia). Stiffer spring → shorter period (stronger restoring force). Amplitude does NOT affect T — a remarkable result. Pendulum: restoring force = mg sinθ ≈ mgθ (small angles). a = −(g/L)x → ω² = g/L → T = 2π√(L/g). T depends on L and g only. NOT on mass (cancels out) or amplitude (small angle approximation).</p><p><strong>Lab (25 min):</strong> TWO EXPERIMENTS — (1) Pendulum: vary L (0.2, 0.4, 0.6, 0.8, 1.0 m). Time 20 oscillations for each. Plot T² vs L → straight line, gradient = 4π²/g. Extract g. (2) Mass-spring: vary m (0.1, 0.2, 0.3, 0.4, 0.5 kg). Time 20 oscillations. Plot T² vs m → straight line, gradient = 4π²/k. Extract k. Compare with k from A.2 Hooke's law lab.</p><p><strong>Worked examples (10 min):</strong> (1) A 0.5 kg mass on a spring (k = 200 N/m): T = 2π√(0.5/200) = 0.314 s, f = 3.18 Hz. (2) A pendulum of L = 1 m on Earth: T = 2.01 s. On the Moon (g = 1.6): T = 4.96 s. \"Pendulum clocks wouldn't work on the Moon.\" (3) What length pendulum gives T = 1 s? L = g(T/2π)² = 0.248 m.</p><p><strong>Practice (5 min):</strong> Period calculations and extracting g or k from lab data.</p>",
          "engagementHook": {
            "title": "GALILEO'S CHANDELIER — THE DISCOVERY OF ISOCHRONISM",
            "content": "\"In 1583, 19-year-old Galileo watched a chandelier swinging in Pisa Cathedral. He timed it against his pulse and discovered: the period doesn't depend on amplitude. Small swings and large swings take the SAME time.\" Students verify: pull a pendulum to 5° and 15° — time 20 swings each. Same period (within error). This 'isochronism' made pendulum clocks possible and launched the study of oscillations."
          },
          "nos": {
            "tags": ["Observations", "Measurements", "Theories"],
            "description": "Galileo's observation of the chandelier was serendipitous — he wasn't looking for a physics law. But he had the insight to measure what he saw. The pendulum became the most accurate timekeeper for 300 years (until quartz oscillators). Scientific progress often starts with careful observation of everyday phenomena."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — State T = 2π√(m/k) and T = 2π√(L/g)",
            "AO2 — Calculate T for mass-spring and pendulum systems; extract g or k from T² vs L or T² vs m graphs",
            "AO3 — Analyse what T depends on and what it doesn't for each system"
          ],
          "resources": "Pendulum (various lengths), springs + masses, stopwatch, clamp stands, rulers, graph paper",
          "formative": "\"(a) A 200 g mass on a spring oscillates with T = 0.8 s. Find k. (b) A pendulum has T = 2.5 s. Find L. (c) The pendulum is taken to Mars (g = 3.7 m/s²). Find the new T. (d) From your lab: plot T² vs L for the pendulum. Find g from the gradient. Calculate % error from the accepted value.\""
        }
      ]
    },
    {
      "name": "SHM Graphs & Energy (SL)",
      "color": "accent4",
      "totalMinutes": 80,
      "subtopics": [
        {
          "num": 1,
          "title": "SHM Graphs — x-t, v-t, a-t & a-x",
          "focus": "Sketching and interpreting the four key graphs",
          "minutes": 45,
          "understandings": [
            "Displacement-time graph: sinusoidal, amplitude A, period T",
            "Velocity-time graph: cosine curve (leads displacement by 90°), max velocity v_max = ωA at x = 0",
            "Acceleration-time graph: negative sine (leads velocity by 90°), max acceleration a_max = ω²A at x = ±A",
            "Acceleration-displacement graph: straight line through origin with negative gradient (−ω²), confirming a = −ω²x"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Start with x = A sin(ωt). Sketch x-t: sinusoidal, peaks at A, period T. Velocity: v = dx/dt = Aω cos(ωt). Sketch v-t: cosine, peaks at ωA (90° ahead of x). When x = 0 (equilibrium), v is maximum. When x = ±A (extremes), v = 0. Acceleration: a = dv/dt = −Aω² sin(ωt) = −ω²x. Sketch a-t: negative sine. When x = +A, a = −ω²A (max negative). The a-x graph: plot a vs x → straight line, gradient = −ω², passing through origin. This graph IS the defining equation visualised.</p><p><strong>Demo (10 min):</strong> Use a motion sensor on an oscillating mass-spring. Display x-t, v-t, a-t graphs simultaneously. Students observe: v leads x by ¼ cycle. a leads v by ¼ cycle. a and x are in antiphase (180° apart). The a-x plot is a straight negative line — live verification of a = −ω²x.</p><p><strong>Graphical skills (15 min):</strong> Give students one graph (e.g., x-t) and ask them to sketch the other three. Then repeat with a different starting graph (e.g., v-t). Key skill: from x-t, the gradient at any point = instantaneous velocity. From v-t, the gradient = instantaneous acceleration. These are the same gradient/area relationships from A.1.</p><p><strong>Practice (5 min):</strong> Match unlabelled graphs to x, v, or a. Read off A, T, ω from graphs.</p>",
          "engagementHook": {
            "title": "LIVE GRAPHS — WATCH SHM UNFOLD",
            "content": "Attach a motion sensor to a mass-spring system. The screen shows x-t, v-t, a-t updating in real time. Students SEE the phase relationships: v peaks when x crosses zero, a peaks when x is at extremes. Then plot a vs x live — a straight negative line appears. \"That line IS the equation a = −ω²x. You just watched a physics law draw itself.\""
          },
          "nos": {
            "tags": ["Patterns", "Models", "Observations"],
            "description": "The sinusoidal shape of SHM graphs connects to circular motion: SHM is the projection of uniform circular motion onto a diameter. This geometric connection explains why sine and cosine functions describe oscillations. The link between circular motion (A.2) and oscillations (C.1) is one of the most elegant in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Thinker"],
          "ao": [
            "AO1 — Sketch x-t, v-t, a-t, and a-x graphs for SHM",
            "AO2 — Read T, f, A, ω, v_max, a_max from graphs",
            "AO3 — Derive one graph from another using gradient relationships"
          ],
          "resources": "Motion sensor + mass-spring, display screen, graph paper, printed graphs for analysis",
          "formative": "\"An x-t graph shows: A = 3 cm, T = 0.4 s, starting at x = +A at t = 0. (a) Find ω, f, v_max, a_max. (b) Sketch v-t and a-t on the same time axis. (c) At t = 0.1 s (quarter period): state x, v, a. (d) Draw the a-x graph. State its gradient.\""
        },
        {
          "num": 2,
          "title": "Energy Changes During Oscillation",
          "focus": "KE ↔ PE interchange with constant total energy",
          "minutes": 35,
          "understandings": [
            "During SHM, energy is exchanged between kinetic energy and potential energy",
            "At equilibrium (x = 0): KE is maximum, PE is zero (or minimum)",
            "At extremes (x = ±A): KE is zero (momentarily at rest), PE is maximum",
            "Total mechanical energy E = KE + PE = constant (in the absence of damping)",
            "The energy-displacement graph: KE is an inverted parabola, PE is an upright parabola, their sum is constant"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Swing a pendulum. \"At the top: momentarily at rest — all GPE, no KE. At the bottom: maximum speed — all KE, no GPE. In between: a mix. The total never changes. Where have we seen this before?\" A.3 conservation of mechanical energy — same physics, applied to oscillations.</p><p><strong>Direct instruction (10 min):</strong> At x = 0: v = v_max = ωA → KE = ½m(ωA)² = maximum. PE = 0. At x = ±A: v = 0 → KE = 0. PE = maximum = ½m(ωA)² = ½kA² (for a spring). Total E = ½mω²A² = ½kA² — constant. The total depends on amplitude SQUARED: double A → 4× the energy. Draw the E vs x graph: KE as inverted parabola (max at x = 0), PE as upright parabola (max at x = ±A), E_total as a horizontal line.</p><p><strong>Graphical exercise (10 min):</strong> Students draw the energy-displacement diagram for A = 5 cm, k = 100 N/m. Calculate E_total = ½ × 100 × 0.05² = 0.125 J. Plot KE and PE vs x. Also draw E vs t: KE and PE oscillate sinusoidally at 2f (twice the frequency of the motion), always summing to E_total.</p><p><strong>Practice (10 min):</strong> Energy calculations and graph sketching. \"At what displacement is KE = PE?\" (x = A/√2.)</p>",
          "engagementHook": {
            "title": "THE ENERGY DANCE — KE AND PE SWAP PARTNERS",
            "content": "Swing a pendulum in front of a projected energy bar chart that updates in real time (simulation). Students watch KE and PE bars rise and fall in perfect antiphase, always summing to the same total. \"Energy doesn't disappear or appear — it just changes costume. KE becomes PE becomes KE, back and forth, forever (without damping).\" Ask: \"At what point in the swing are KE and PE equal?\" Students calculate: x = A/√2 ≈ 0.71A."
          },
          "nos": {
            "tags": ["Theories", "Patterns"],
            "description": "The energy interchange in SHM is a specific case of conservation of mechanical energy (A.3). The same principle governs pendulums, springs, LC circuits (electrical oscillations), and even the oscillation of atoms in molecules. Energy conservation provides a unifying framework across all areas of physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe the energy interchange during SHM",
            "AO2 — Calculate KE, PE, and E_total at any displacement",
            "AO3 — Sketch and analyse energy-displacement and energy-time graphs"
          ],
          "resources": "Pendulum, SHM energy simulation (PhET or similar), graph paper, calculators",
          "formative": "\"A 0.2 kg mass on a spring (k = 50 N/m) oscillates with A = 0.1 m. (a) Calculate E_total. (b) At x = 0: find KE and PE. (c) At x = 0.06 m: find PE, then KE from E_total − PE. (d) At what x does KE = PE? (e) Draw the energy-displacement graph.\""
        }
      ]
    },
    {
      "name": "Advanced SHM Analysis (AHL)",
      "color": "accent",
      "totalMinutes": 240,
      "subtopics": [
        {
          "num": 1,
          "title": "Phase Angle & Full Displacement Equation (AHL)",
          "focus": "x = A sin(ωt + φ) — describing SHM starting from any position",
          "minutes": 60,
          "understandings": [
            "Phase angle φ describes the state (position in the cycle) of a particle undergoing SHM",
            "Full displacement equation: x = A sin(ωt + φ) or x = A cos(ωt + φ) depending on initial conditions",
            "If the oscillation starts at x = +A: x = A cos(ωt) (φ = π/2 in sine form, or φ = 0 in cosine form)",
            "If the oscillation starts at x = 0 moving positively: x = A sin(ωt) (φ = 0)",
            "Phase difference between two oscillators: Δφ — determines whether they're in phase, antiphase, or between"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two identical pendulums released at different times. They have the same A, T, ω — but they're \"out of sync.\" \"What's different?\" The phase. One started earlier — it has a different phase angle φ.</p><p><strong>Direct instruction (20 min):</strong> The general SHM equation: x = A sin(ωt + φ). φ sets the starting position. If φ = 0: x starts at 0 and moves positive (sine curve). If φ = π/2: x starts at +A (cosine curve). If φ = π: x starts at 0 and moves negative. Any initial condition is captured by choosing the right φ. Phase difference: two oscillators with the same ω but different φ have Δφ = φ₂ − φ₁. In phase: Δφ = 0 (or 2π). Antiphase: Δφ = π. At the SL level, we only needed sin and cos; at HL, φ lets us describe ANY starting condition.</p><p><strong>Circle connection (10 min):</strong> SHM = projection of uniform circular motion. A particle moves on a circle of radius A at angular speed ω. Its x-coordinate at time t: x = A cos(ωt + φ), where φ is the starting angle. Draw the circle and the projection — students see SHM emerge geometrically.</p><p><strong>Worked examples (15 min):</strong> (1) x = 0.05 sin(4πt + π/3). Find A (0.05 m), ω (4π rad/s), f (2 Hz), T (0.5 s), φ (π/3), x at t = 0 (0.05 sin(π/3) = 0.043 m). (2) An oscillator starts at x = −3 cm and moves positively. A = 5 cm, f = 1 Hz. Find φ. (3) Two pendulums: x₁ = 10 sin(2t), x₂ = 10 sin(2t + π/2). Phase difference? When are they at the same position?</p><p><strong>Practice (10 min):</strong> Determine φ from initial conditions. Calculate x at any t given the full equation.</p>",
          "engagementHook": {
            "title": "THE CIRCULAR CONNECTION — SHM IS A SHADOW",
            "content": "Shine a light on a ball moving in a circle (turntable with ball). Its SHADOW on the wall oscillates back and forth — SHM! Students see that x = A cos(ωt + φ) is literally the horizontal projection of circular motion. \"The circle has constant speed ωA. The shadow slows at the edges and speeds up in the middle — exactly like a spring.\" The phase angle φ is just where on the circle you start."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The connection between SHM and circular motion was first noted by Galileo. It's a deep mathematical link: sinusoidal functions arise naturally from circular geometry. This connection appears everywhere: AC electricity, wave theory, quantum mechanics. The same mathematical structure (sine, cosine) governs all oscillatory and wave phenomena."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define phase angle; state x = A sin(ωt + φ)",
            "AO2 — Determine φ from initial conditions; calculate x at any time",
            "AO3 — Analyse phase difference between two oscillators"
          ],
          "resources": "Two identical pendulums, turntable with ball + light source (shadow projection), whiteboard, calculators",
          "formative": "\"x = 0.08 sin(6πt + π/4). (a) State A, ω, f, T, φ. (b) Find x at t = 0. (c) Find x at t = 0.25 s. (d) At what earliest time after t = 0 is x = +A? (e) A second oscillator: x₂ = 0.08 sin(6πt − π/4). Find the phase difference. Are they ever at the same position simultaneously?\""
        },
        {
          "num": 2,
          "title": "Velocity & Acceleration Equations (AHL)",
          "focus": "v = Aω cos(ωt + φ) and v = ±ω√(A² − x²)",
          "minutes": 55,
          "understandings": [
            "Velocity: v = dx/dt = Aω cos(ωt + φ)",
            "Maximum speed: v_max = ωA (at x = 0)",
            "Velocity as a function of displacement: v = ±ω√(A² − x²)",
            "Acceleration: a = −Aω² sin(ωt + φ) = −ω²x",
            "Maximum acceleration: a_max = ω²A (at x = ±A)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Differentiate x = A sin(ωt + φ): v = Aω cos(ωt + φ). v_max = Aω occurs when cos = ±1, i.e., at x = 0. Differentiate again: a = −Aω² sin(ωt + φ) = −ω²x. a_max = ω²A at x = ±A. The displacement-velocity relation (without time): from x² + (v/ω)² = A² → v = ±ω√(A² − x²). This is the equation of an ellipse in the x-v phase space — link to circular motion projection.</p><p><strong>Worked examples (20 min):</strong> (1) A = 0.1 m, ω = 5 rad/s. v_max = 0.5 m/s. a_max = 2.5 m/s². (2) At x = 0.06 m: v = ±5√(0.01 − 0.0036) = ±0.4 m/s. (3) Given x = 0.04 sin(10t): find v and a at t = π/30 s. (4) An oscillator has v = 0.3 m/s at x = 0.04 m and v = 0 at x = 0.05 m. Find ω and A. (Use v² = ω²(A² − x²) with both data points → two equations, two unknowns.)</p><p><strong>Phase space diagram (10 min):</strong> Plot v vs x for one complete oscillation: you get an ELLIPSE. The oscillator traces this ellipse in phase space. At (0, v_max) it's at equilibrium moving fast. At (±A, 0) it's at the extremes, momentarily stopped. Students draw the phase space ellipse and mark key points.</p><p><strong>Practice (10 min):</strong> Problems using v = ±ω√(A² − x²) and the time-dependent equations.</p>",
          "engagementHook": {
            "title": "THE PHASE SPACE ELLIPSE — SHM IN A SINGLE PICTURE",
            "content": "\"Plot v vs x for a full oscillation. You don't get a line — you get an ellipse. The oscillator runs around this ellipse forever.\" Students plot it point by point. \"At the top of the ellipse (x = 0, v = max): speeding through the middle. At the sides (x = ±A, v = 0): turning around at the edges. One picture contains ALL the information about the motion.\""
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "Phase space diagrams (x-v plots) are used throughout physics: from simple oscillators to planetary orbits to quantum states. The elliptical shape of the SHM phase space is a consequence of energy conservation: ½mv² + ½kx² = E = constant defines an ellipse. Form follows conservation."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State v = Aω cos(ωt + φ) and v = ±ω√(A² − x²)",
            "AO2 — Calculate v and a at any x or t; find v_max and a_max",
            "AO3 — Analyse phase space diagrams and extract physical information"
          ],
          "resources": "Whiteboard, calculators, phase space plotting worksheet, SHM simulation with v-x display",
          "formative": "\"An oscillator: A = 0.08 m, f = 2 Hz. (a) Find v_max and a_max. (b) Find v at x = 0.05 m. (c) Find a at x = 0.05 m. (d) The oscillator has v = 0.6 m/s at x = 0.03 m. Find ω and A. (e) Sketch the phase space (v vs x) diagram, labelling key points.\""
        },
        {
          "num": 3,
          "title": "Energy Interchange — Algebraic & Graphical (AHL)",
          "focus": "KE = ½mω²(A² − x²), PE = ½mω²x², E_total = ½mω²A²",
          "minutes": 65,
          "understandings": [
            "Kinetic energy as a function of displacement: KE = ½mv² = ½mω²(A² − x²)",
            "Potential energy as a function of displacement: PE = ½mω²x² (= ½kx² for a spring)",
            "Total energy: E = KE + PE = ½mω²A² = constant",
            "Energy interchange can be analysed both graphically (E vs x and E vs t) and algebraically",
            "KE and PE oscillate at 2f (twice the motion frequency), with their sum constant"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> From v = ±ω√(A² − x²): KE = ½mv² = ½mω²(A² − x²). PE = E_total − KE = ½mω²A² − ½mω²(A² − x²) = ½mω²x². Verify: at x = 0, KE = ½mω²A² (max), PE = 0. At x = ±A, KE = 0, PE = ½mω²A² (max). Sum: KE + PE = ½mω²A² always. For a spring: PE = ½kx² (since ω² = k/m → ½mω²x² = ½kx²). The E_total depends on A²: double the amplitude → 4× the total energy.</p><p><strong>Graphical analysis (15 min):</strong> E vs x: KE is an inverted parabola, PE is an upright parabola. They intersect at x = ±A/√2 (where KE = PE = E/2). E vs t: both KE and PE oscillate sinusoidally at frequency 2f (because sin²(ωt) has period T/2). They're always in antiphase. Students sketch both diagrams with numerical values.</p><p><strong>Worked examples (20 min):</strong> (1) m = 0.5 kg, k = 200 N/m, A = 0.04 m. E_total = ½ × 200 × 0.04² = 0.16 J. At x = 0.02 m: PE = ½ × 200 × 0.02² = 0.04 J, KE = 0.16 − 0.04 = 0.12 J, v = √(2KE/m) = 0.69 m/s. (2) An oscillator has KE = 3PE at some displacement. Find x in terms of A. (KE = 3PE, KE + PE = E → 3PE + PE = E → PE = E/4 = ½mω²A²/4. But PE = ½mω²x² → x = A/2.) (3) At what fraction of the period is KE = PE for the first time? (When x = A/√2 → find t from x = A sin(ωt).)</p><p><strong>Practice (15 min):</strong> Energy ratio problems, graphing, and finding displacements for given energy ratios.</p>",
          "engagementHook": {
            "title": "THE ENERGY RATIO CHALLENGE",
            "content": "\"At what displacement is the kinetic energy exactly 3 times the potential energy?\" Students work it out: KE = 3PE → (A² − x²) = 3x² → A² = 4x² → x = A/2. \"Halfway between centre and extreme, you have 3× more KE than PE.\" Then challenge: \"At what displacement is KE = PE?\" x = A/√2 ≈ 0.71A — further out than students expect. The energy distribution isn't intuitive — you need the algebra."
          },
          "nos": {
            "tags": ["Theories", "Patterns", "Models"],
            "description": "The algebraic energy analysis of SHM connects to the Lagrangian and Hamiltonian formulations of mechanics — the foundation of modern theoretical physics. The phase space ellipse (½mv² + ½kx² = E) is a conserved quantity called the Hamiltonian. This one idea unifies classical mechanics, quantum mechanics, and statistical mechanics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State KE, PE, and E_total as functions of x",
            "AO2 — Calculate KE, PE, v at any displacement; find x for given energy ratios",
            "AO3 — Analyse energy-displacement and energy-time graphs; explain the 2f frequency"
          ],
          "resources": "Calculators, energy graph templates, phase space worksheets",
          "formative": "\"A 0.3 kg mass on a spring (k = 120 N/m, A = 0.06 m). (a) Calculate E_total, v_max, a_max. (b) At x = 0.04 m: find KE, PE, v. (c) Find the displacement where KE = 2PE. (d) Sketch KE, PE, and E_total vs x on one graph. (e) At what frequency do KE and PE oscillate? Why is it different from the oscillation frequency?\""
        },
        {
          "num": 4,
          "title": "Advanced SHM Problem Solving (AHL)",
          "focus": "Multi-step problems combining all SHM concepts",
          "minutes": 60,
          "understandings": [
            "Combine phase angle, displacement, velocity, acceleration, and energy equations in complex problems",
            "Extract SHM parameters (A, ω, φ) from given data (position at two times, or velocity at a position, etc.)",
            "Link SHM to circular motion, energy conservation (A.3), and Hooke's law (A.2)",
            "Apply SHM analysis to real systems: loaded springs, pendulums, molecular vibrations"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Build a decision framework: \"What do you know? What do you need?\" If given x and t: use x = A sin(ωt + φ). If given v and x: use v = ±ω√(A² − x²). If given E and x: use energy equations. If given T: extract ω = 2π/T. Many problems require COMBINING two or more equations. Always check: do the units work? Is the answer physically reasonable (v < v_max, |x| < A)?</p><p><strong>Exam-style problems (30 min):</strong> Groups of 3 tackle one problem each from a set of 5, then present to the class: (1) A mass-spring: given k, m, and initial displacement released from rest. Find x(t), v(t), and the first time the mass passes through x = A/2. (2) Two oscillators with different φ: find the first time they have the same displacement. (3) A pendulum on the Moon: given T on Earth, find T on Moon and the maximum speed. (4) Energy: given v at a known x, find A, then E_total, then x where KE = 3PE. (5) A vertical spring: equilibrium extension + SHM about the new equilibrium.</p><p><strong>Common exam traps (10 min):</strong> (a) Forgetting to use radians (not degrees) in ωt. (b) Confusing T and t. (c) Assuming all SHM starts at x = 0 (it doesn't — check initial conditions). (d) Forgetting the ± in v = ±ω√(A² − x²) (direction matters). (e) Using the wrong formula for T (spring vs pendulum).</p><p><strong>Practice (10 min):</strong> 3 timed exam-style problems, worked independently.</p>",
          "engagementHook": {
            "title": "THE SHM EXAM ESCAPE ROOM",
            "content": "Set up 5 stations around the room, each with an SHM problem. Groups rotate every 6 minutes. To 'escape,' they must solve all 5 correctly. Each answer unlocks a digit of a combination. If all 5 digits are correct, they open a box with a prize. The time pressure and collaborative format simulate exam conditions while making practice engaging."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "SHM is the foundation of wave theory (Theme C), quantum mechanics (the quantum harmonic oscillator), and electrical engineering (LC circuits). Mastering SHM problem-solving provides tools that transfer to every subsequent topic in physics. The harmonic oscillator is arguably the single most important model in all of physics."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Communicator", "Risk-taker"],
          "ao": [
            "AO2 — Apply all SHM equations in combination to solve multi-step problems",
            "AO3 — Evaluate which equation to use for a given problem; check physical reasonableness of answers"
          ],
          "resources": "Exam-style problem sets, whiteboards, escape room combination lock (optional), timer",
          "formative": "\"A mass-spring system: m = 0.4 kg, k = 160 N/m. At t = 0, x = 3 cm and v = +0.8 m/s. (a) Find ω. (b) Find A using v² = ω²(A² − x²). (c) Find φ using x = A sin(ωt + φ) at t = 0. (d) Write the complete equation x(t). (e) Find the first time after t = 0 when x = −A. (f) Calculate E_total and verify it equals ½kA².\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "How does Hooke's law (F = −kx) from A.2 lead directly to the defining equation of SHM (a = −ω²x)?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does conservation of mechanical energy apply to SHM? How is E_total = ½kA² related to elastic PE?" },
    { "topic": "A.4 Rigid Body Mechanics (HL)", "question": "Can a torsional pendulum (rotating rather than swinging) undergo SHM? What would be the equivalent of the restoring force?" },
    { "topic": "C.4 Standing Waves & Resonance", "question": "How do natural frequency and resonance relate to SHM? What happens when a driving force matches the natural frequency?" },
    { "topic": "D.1 Gravitational Fields", "question": "How does the simple pendulum equation T = 2π√(L/g) connect to the gravitational field strength g?" },
    { "topic": "IB Linking", "question": "What makes the harmonic oscillator model applicable to such a wide range of phenomena — from springs to atoms to electromagnetic fields?" }
  ]
},
"C2": {
  "title": "Wave Model",
  "code": "C.2",
  "theme": "C",
  "level": "SL + HL",
  "recommendedHours": 3,
  "recommendedMinutes": 180,
  "guidingQuestions": [
    "What are the similarities and differences between different types of waves?",
    "How can the wave model describe the transmission of energy as a result of local disturbances in a medium?",
    "What effect does a change in the frequency of oscillation or medium through which the wave is travelling have on the wavelength of a travelling wave?"
  ],
  "groups": [
    {
      "name": "Types of Waves",
      "color": "accent3",
      "totalMinutes": 80,
      "subtopics": [
        {
          "num": 1,
          "title": "Transverse & Longitudinal Travelling Waves",
          "focus": "Particle motion relative to wave propagation direction",
          "minutes": 40,
          "understandings": [
            "Transverse waves: particle displacement is perpendicular to the direction of wave propagation (e.g., water waves, EM waves, waves on a string)",
            "Longitudinal waves: particle displacement is parallel to the direction of wave propagation (e.g., sound waves, compression waves in a spring)",
            "Travelling waves transfer energy without resultant displacement of the medium",
            "Describing particle motion in terms of displacement vs position along the wave and vs time"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two demos side by side: (1) Shake a slinky side-to-side — a transverse wave travels along it. (2) Push-pull the slinky along its length — a longitudinal wave travels. \"Watch the coils: in the first, they move UP while the wave goes FORWARD. In the second, they move FORWARD and BACK along the same line.\"</p><p><strong>Direct instruction (15 min):</strong> Transverse: displacement ⊥ propagation. The particles oscillate up-down (or side-to-side) while the wave moves horizontally. Examples: waves on water surface, light, waves on a guitar string. Longitudinal: displacement ∥ propagation. Particles oscillate back-and-forth along the wave direction, creating compressions (particles close) and rarefactions (particles spread). Example: sound. Key point: the WAVE moves forward but the particles DON'T — they oscillate about equilibrium. Energy is transferred without net displacement of the medium.</p><p><strong>Demo (10 min):</strong> THE HUMAN WAVE — Students stand in a line. For transverse: each student stands/sits in sequence (a Mexican wave). The wave moves along the line but no student moves from their position. For longitudinal: students lean forward toward their neighbour in sequence — a compression moves along the line. Both transfer \"energy\" (the motion pattern) without anyone walking anywhere.</p><p><strong>Practice (10 min):</strong> Sketch displacement-position and displacement-time graphs for both wave types. Identify compressions and rarefactions on a longitudinal wave diagram. Classify 8 wave examples as transverse or longitudinal.</p>",
          "engagementHook": {
            "title": "THE HUMAN WAVE — MEXICAN WAVE vs COMPRESSION WAVE",
            "content": "Students form the wave themselves. Mexican wave = transverse (standing up is perpendicular to the wave direction). Then a compression wave: lean toward your neighbour in sequence (parallel to wave direction). \"Energy moved from one end to the other. Nobody walked anywhere. THAT is what a wave does — transports energy, not matter.\""
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "The wave model describes energy transfer through local disturbances — no material moves from source to receiver. This was counterintuitive to early scientists who expected a physical substance (like the 'aether') to carry light. The wave model explains a vast range of phenomena with a single framework."
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Communicator", "Inquirer"],
          "ao": [
            "AO1 — Define transverse and longitudinal waves; describe particle motion for each",
            "AO2 — Sketch displacement-position and displacement-time graphs for both types"
          ],
          "resources": "Slinky (long), rope or string, students for human wave, wave type classification cards",
          "formative": "\"(a) A wave on a string moves horizontally. Describe the motion of a single point on the string. Is this transverse or longitudinal? (b) A sound wave moves through air. Describe the motion of an air molecule. (c) A stadium wave (Mexican wave) moves clockwise around the stadium. Do the fans move clockwise? What type of wave is it? (d) Why can't transverse mechanical waves travel through gases?\""
        },
        {
          "num": 2,
          "title": "Wave Speed, Wavelength, Frequency & Period",
          "focus": "v = fλ = λ/T — the universal wave equation",
          "minutes": 40,
          "understandings": [
            "Wavelength λ: distance between successive identical points on a wave (crest to crest, or compression to compression)",
            "Frequency f: number of complete oscillations per second (Hz)",
            "Time period T: time for one complete oscillation (T = 1/f)",
            "Wave speed v: the speed at which the wave pattern propagates through the medium",
            "The wave equation: v = fλ = λ/T",
            "Wave speed depends on the medium, NOT on frequency or amplitude"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Define each quantity with a diagram: λ (peak-to-peak on a displacement-position graph), T (peak-to-peak on a displacement-time graph), f = 1/T. Derive v = fλ: in one period T, the wave moves one wavelength λ, so speed = distance/time = λ/T = fλ. This applies to ALL waves — sound, light, water, seismic. Wave speed is set by the medium (sound in air ≈ 340 m/s, light in vacuum = 3 × 10⁸ m/s) and doesn't change with f or A.</p><p><strong>Worked examples (10 min):</strong> (1) Sound: f = 440 Hz (middle A), v = 340 m/s → λ = 340/440 = 0.77 m. (2) Radio: f = 100 MHz, v = c → λ = 3 m. (3) A wave on a string: λ = 0.5 m, v = 20 m/s → f = 40 Hz, T = 0.025 s. (4) \"If you shout louder (more A), does the sound travel faster?\" No — speed depends on the medium, not amplitude or frequency.</p><p><strong>Lab (15 min):</strong> MEASURING WAVE SPEED — (a) Sound: clap at a known distance from a wall, time the echo. v = 2d/t. Or use two microphones and a timer. (b) Waves on a string: vibrate a string at known f, measure λ (standing wave method — preview of C.4). Calculate v = fλ. Compare with the theoretical v = √(T/μ) where T is tension and μ is mass per unit length.</p><p><strong>Practice (5 min):</strong> v = fλ calculations and unit conversions (MHz to Hz, nm to m).</p>",
          "engagementHook": {
            "title": "THE THUNDER LAG — MEASURING LIGHTNING DISTANCE",
            "content": "\"You see lightning instantly (light speed ≈ 3 × 10⁸ m/s). You hear thunder later (sound speed ≈ 340 m/s). The delay = distance/340. So 3 seconds delay = 1 km away.\" Students calculate: if thunder arrives 8 seconds after lightning, how far was the strike? (2.72 km.) \"You've been using v = d/t your whole life without knowing it was wave physics.\""
          },
          "nos": {
            "tags": ["Measurements", "Patterns"],
            "description": "v = fλ is universal — it applies to every wave in every medium. This universality is remarkable: the same equation describes a tsunami and a gamma ray. The speed of sound was first measured by timing cannon fire over a known distance (1738). The speed of light was first estimated by Ole Rømer from Jupiter's moons (1676)."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Define λ, f, T, v; state v = fλ",
            "AO2 — Apply v = fλ to calculate any quantity given the other two",
            "AO3 — Analyse why wave speed depends on medium, not frequency"
          ],
          "resources": "Slinky, string + vibrator (if available), two microphones + timer, ruler, stopwatch, calculator",
          "formative": "\"(a) A wave has f = 500 Hz and λ = 0.68 m. Find v. What medium might this be? (b) Light: λ = 600 nm in vacuum. Find f. (c) Sound at 20°C: v = 343 m/s. A violin plays 880 Hz. Find λ. (d) The wave enters water (v_sound = 1480 m/s). Does f change? Does λ change? Find the new λ.\""
        }
      ]
    },
    {
      "name": "Sound & Electromagnetic Waves",
      "color": "accent4",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "The Nature of Sound Waves",
          "focus": "Longitudinal mechanical waves — compressions, rarefactions, and what you hear",
          "minutes": 45,
          "understandings": [
            "Sound waves are longitudinal mechanical waves — they require a medium (solid, liquid, or gas)",
            "Sound consists of compressions (high pressure) and rarefactions (low pressure) propagating through the medium",
            "Sound cannot travel through a vacuum — there is no medium to compress",
            "The speed of sound depends on the medium: faster in solids (~5000 m/s) than liquids (~1500 m/s) than gases (~340 m/s in air)",
            "Human hearing range: approximately 20 Hz to 20,000 Hz"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Play a tone through a speaker inside a bell jar. Gradually pump out the air. The sound fades and disappears — even though you can see the speaker vibrating. \"Sound needs a medium. No air = no sound. In space, no one can hear you scream.\"</p><p><strong>Direct instruction (15 min):</strong> Sound = longitudinal pressure wave. Speaker cone pushes air → compression (high pressure). Cone pulls back → rarefaction (low pressure). These travel outward at ~340 m/s in air. Draw the compression/rarefaction pattern alongside the displacement graph: maximum forward displacement at the front of a rarefaction, zero displacement at the centre of a compression. Speed depends on medium: solids fastest (particles tightly coupled), gases slowest (particles far apart). Range: 20 Hz (deep bass, felt more than heard) to 20 kHz (high pitch, lost with age). Below 20 Hz = infrasound. Above 20 kHz = ultrasound.</p><p><strong>Demo (10 min):</strong> Oscilloscope + microphone: visualise sound waves. Speak/sing → see the waveform. Vary pitch → frequency changes. Vary volume → amplitude changes. A tuning fork → nearly pure sine wave. A voice → complex waveform (harmonics). Students see that sound IS a wave.</p><p><strong>Worked examples (10 min):</strong> (1) Lowest audible note: f = 20 Hz, v = 340 m/s → λ = 17 m (the size of a room). (2) Highest: f = 20 kHz → λ = 1.7 cm. (3) Sound in water: v = 1480 m/s. A 1000 Hz tone → λ = 1.48 m (much longer than in air).</p><p><strong>Practice (5 min):</strong> Sound calculations and qualitative descriptions.</p>",
          "engagementHook": {
            "title": "THE BELL JAR — SOUND IN A VACUUM",
            "content": "Place a buzzing phone (or small speaker) inside a bell jar. Pump out the air. The buzzing fades to silence — but the phone is still vibrating. \"Light travels through the vacuum (you can see it vibrating). Sound cannot (no medium to compress). This is why astronauts use radios, not shouting.\" Re-admit air and the sound returns instantly."
          },
          "nos": {
            "tags": ["Observations", "Models"],
            "description": "Robert Boyle first demonstrated the bell jar experiment in 1660, proving sound requires a medium. This was a direct test of a hypothesis — the epitome of experimental physics. Newton later predicted the speed of sound from air density and pressure (though his value was 15% off — Laplace corrected it by including adiabatic, not isothermal, compression)."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe sound as a longitudinal mechanical wave; state it requires a medium",
            "AO2 — Calculate sound wavelength in different media; relate frequency to pitch and amplitude to loudness",
            "AO3 — Analyse why sound speed varies between media using the particle model"
          ],
          "resources": "Bell jar + vacuum pump + buzzer/speaker, oscilloscope + microphone, tuning forks (various f), calculators",
          "formative": "\"(a) Explain why sound cannot travel through a vacuum. (b) Sound travels at 340 m/s in air and 5100 m/s in steel. A 500 Hz tone: find λ in each. (c) Why is sound faster in steel than air? Explain using particle spacing and coupling. (d) A student claps 100 m from a wall. The echo returns in 0.59 s. Calculate the speed of sound.\""
        },
        {
          "num": 2,
          "title": "Electromagnetic Waves & Mechanical vs EM Comparison",
          "focus": "The EM spectrum, wave properties, and what makes EM waves unique",
          "minutes": 55,
          "understandings": [
            "Electromagnetic waves are transverse waves consisting of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation",
            "EM waves do NOT require a medium — they travel through a vacuum at c = 3 × 10⁸ m/s",
            "The EM spectrum (in order of decreasing wavelength / increasing frequency): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma ray",
            "All EM waves travel at the same speed c in vacuum; frequency and wavelength vary inversely (c = fλ)",
            "Differences between mechanical waves (need medium, can be transverse or longitudinal) and EM waves (no medium needed, always transverse, travel at c in vacuum)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Right now, radio waves, Wi-Fi, infrared from your body, visible light, and UV from the Sun are ALL passing through this room simultaneously. They're all the same thing — electromagnetic waves — just at different frequencies.\" Show the EM spectrum poster/diagram.</p><p><strong>Direct instruction (20 min):</strong> EM waves: oscillating E and B fields, perpendicular to each other and to propagation direction. No medium needed — they travel through vacuum (that's how sunlight reaches Earth). All travel at c = 3 × 10⁸ m/s in vacuum. The spectrum: radio (λ ~ km, f ~ MHz), microwave (λ ~ cm), IR (λ ~ μm), visible (λ ~ 400-700 nm), UV (λ ~ 10-400 nm), X-ray (λ ~ nm), gamma (λ ~ pm). Higher frequency = higher energy per photon (preview E.1). Key comparison: Mechanical waves need a medium, can be transverse or longitudinal, speeds vary (340 to 5000 m/s). EM waves don't need a medium, always transverse, all travel at c in vacuum.</p><p><strong>Spectrum activity (15 min):</strong> Give students a blank spectrum template. They must: (a) label all 7 regions, (b) add approximate wavelength and frequency ranges, (c) add one application for each (radio: communication, microwave: cooking, IR: thermal imaging, visible: vision, UV: sterilisation, X-ray: medical imaging, gamma: cancer treatment). (d) Calculate f for λ = 550 nm (green light) and λ = 10 cm (microwave).</p><p><strong>Comparison table (10 min):</strong> Students build a table: Mechanical vs EM — medium?, types (T/L)?, speed?, examples. This comparison is a very common exam question.</p><p><strong>Practice (5 min):</strong> EM spectrum calculations and comparison questions.</p>",
          "engagementHook": {
            "title": "YOUR PHONE USES 5 PARTS OF THE EM SPECTRUM",
            "content": "\"Your phone uses: radio waves (cellular signal), microwaves (Wi-Fi/Bluetooth), infrared (face recognition, remote controls), visible light (screen, camera), and it PROTECTS you from UV (screen coating). One device, five parts of the spectrum.\" Students list which EM waves they interact with daily. Then: \"All of these are the same thing — oscillating electric and magnetic fields. The ONLY difference is frequency.\""
          },
          "nos": {
            "tags": ["Theories", "Patterns", "Technology"],
            "description": "James Clerk Maxwell predicted EM waves theoretically in 1865. Heinrich Hertz confirmed them experimentally in 1887. This is one of the greatest achievements in physics: a prediction from equations, verified by experiment, leading to radio, TV, radar, Wi-Fi, and all wireless communication. Theory → experiment → technology — the full scientific cycle."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Knowledgeable", "Communicator"],
          "ao": [
            "AO1 — Describe EM waves; list the EM spectrum in order; state differences between mechanical and EM waves",
            "AO2 — Apply c = fλ across the EM spectrum",
            "AO3 — Compare and contrast mechanical and electromagnetic waves systematically"
          ],
          "resources": "EM spectrum poster, prism (to split white light), phone (as spectrum example), blank spectrum template, calculators",
          "formative": "\"(a) List the EM spectrum in order of increasing frequency. (b) Calculate the frequency of green light (λ = 530 nm). (c) Calculate the wavelength of a 2.4 GHz Wi-Fi signal. (d) Complete the table: Property | Mechanical wave | EM wave — for: medium required?, transverse/longitudinal?, speed in vacuum?, example. (e) Why can light from the Sun reach Earth but sound from the Sun cannot?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "C.1 Simple Harmonic Motion", "question": "How is the oscillation of a single particle (SHM) related to the propagation of a wave through a medium?" },
    { "topic": "C.3 Wave Phenomena", "question": "How do reflection, refraction, and diffraction depend on wavelength?" },
    { "topic": "C.5 Doppler Effect", "question": "How does relative motion between source and observer change the observed frequency of a wave?" },
    { "topic": "B.1 Thermal Energy Transfers", "question": "How does Wien's displacement law connect the peak wavelength of thermal radiation to the EM spectrum?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How do oscillating electric and magnetic fields give rise to electromagnetic wave propagation?" },
    { "topic": "IB Linking", "question": "What effect does a change in frequency or medium have on the wavelength of a travelling wave?" }
  ]
},
"C3": {
  "title": "Wave Phenomena",
  "code": "C.3",
  "theme": "C",
  "level": "SL + HL",
  "recommendedHours": 11,
  "recommendedMinutes": 660,
  "guidingQuestions": [
    "How are observations of wave behaviours at a boundary between different media explained?",
    "How is the behaviour of waves passing through apertures represented?",
    "What happens when two waves meet at a point in space?"
  ],
  "groups": [
    {
      "name": "Wave Behaviour at Boundaries (SL)",
      "color": "accent3",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "Wavefronts, Rays & Reflection",
          "focus": "Describing waves in 2D/3D and the law of reflection",
          "minutes": 40,
          "understandings": [
            "Waves travelling in two and three dimensions can be described through wavefronts (surfaces of constant phase) and rays (perpendicular to wavefronts, showing direction of propagation)",
            "Wave behaviour at boundaries: reflection — the wave bounces back from the boundary",
            "Law of reflection: angle of incidence = angle of reflection (measured from the normal)",
            "Sketch incident, reflected and transmitted wavefronts/rays between media"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Ripple tank demo: generate circular waves from a point source. Students observe wavefronts (circles expanding outward) and can draw rays (radial lines). Place a flat barrier — waves reflect. The reflected wavefronts appear to come from a mirror-image source behind the barrier.</p><p><strong>Direct instruction (15 min):</strong> Define wavefronts: lines joining points of equal phase (like crests). Rays: arrows perpendicular to wavefronts showing propagation direction. Plane waves: straight wavefronts, parallel rays. Circular waves: curved wavefronts, radial rays. At a flat boundary: reflection — angle of incidence = angle of reflection. Draw the normal, label angles. Wavefronts reverse direction; the spacing (wavelength) stays the same.</p><p><strong>Demo (10 min):</strong> Laser + mirror: show reflection with visible beam path (use chalk dust or fog). Measure angles with a protractor on the whiteboard. Verify θᵢ = θᵣ for several angles. Show: curved mirror focuses parallel rays to a point (converging) or spreads them (diverging).</p><p><strong>Practice (10 min):</strong> Draw wavefronts and rays for: plane waves hitting a flat mirror, circular waves hitting a straight barrier. Verify angle of reflection from diagrams.</p>",
          "engagementHook": {
            "title": "THE RIPPLE TANK — WAVES YOU CAN SEE",
            "content": "A ripple tank makes wave behaviour visible. Students watch circular wavefronts expand, reflect off barriers, and pass through gaps. \"This is exactly what light, sound, and water all do — but water lets you SEE it.\" The entire topic of wave phenomena can be previewed in 5 minutes of ripple tank observation."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "The wavefront-ray model is a visual simplification — it collapses a continuous wave into discrete lines and arrows. The ray model works well when wavelength is much smaller than the objects involved (geometric optics). When wavelength is comparable to object size, the ray model fails and diffraction dominates."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Inquirer"],
          "ao": [
            "AO1 — Define wavefronts and rays; state the law of reflection",
            "AO2 — Sketch wavefronts and rays for reflected waves"
          ],
          "resources": "Ripple tank, laser + mirror + protractor, chalk dust/fog for beam visibility, whiteboard",
          "formative": "\"(a) Draw plane wavefronts approaching a flat mirror at 40° to the normal. Sketch the reflected wavefronts and rays. (b) A circular wavefront reflects from a flat barrier. Where does the reflected wave appear to originate from? (c) Why do wavefronts remain the same spacing after reflection?\""
        },
        {
          "num": 2,
          "title": "Refraction & Snell's Law",
          "focus": "n₁ sinθ₁ = n₂ sinθ₂ — why waves bend when they change speed",
          "minutes": 50,
          "understandings": [
            "Refraction: a wave changes direction when it crosses a boundary into a medium where its speed is different",
            "Snell's law: n₁ sinθ₁ = n₂ sinθ₂, where n is the refractive index of the medium",
            "Refractive index n = c/v (ratio of speed of light in vacuum to speed in the medium)",
            "When a wave enters a denser medium (higher n): it slows down, wavelength decreases, and it bends TOWARD the normal",
            "Frequency does NOT change during refraction — it's set by the source"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Place a pencil in a glass of water. It appears bent at the surface. \"The pencil isn't broken — light changes direction at the water surface. Why?\" Because light travels slower in water than air.</p><p><strong>Direct instruction (15 min):</strong> Define refractive index: n = c/v. Air: n ≈ 1. Water: n = 1.33. Glass: n ≈ 1.5. Diamond: n = 2.42. When light enters a medium with higher n: speed decreases, wavelength decreases (v = fλ, f stays same), ray bends toward the normal. Snell's law: n₁ sinθ₁ = n₂ sinθ₂. Derive from wavefronts: draw the wavefront hitting the boundary at an angle — one end slows first, causing the wavefront to rotate. The geometry gives Snell's law.</p><p><strong>Lab (15 min):</strong> SNELL'S LAW VERIFICATION — Shine a light ray through a semicircular glass block. Measure θ₁ (in air) and θ₂ (in glass) for 5 different angles. Plot sinθ₁ vs sinθ₂ → straight line, gradient = n_glass. Compare with the accepted value.</p><p><strong>Worked examples (10 min):</strong> (1) Light from air (n = 1) enters water (n = 1.33) at 45°. Find θ₂. (2) Light in glass (n = 1.5) enters air. θ₁ = 30°. Find θ₂. (3) Speed of light in diamond: v = c/n = 3 × 10⁸/2.42 = 1.24 × 10⁸ m/s.</p><p><strong>Practice (5 min):</strong> Snell's law calculations.</p>",
          "engagementHook": {
            "title": "THE BENT PENCIL & THE SWIMMING POOL ILLUSION",
            "content": "\"A swimming pool always looks shallower than it is. A coin at the bottom appears closer to the surface. Why?\" Light refracts away from the normal when leaving water → the image appears higher. Students calculate: pool depth 2 m, apparent depth = real depth / n = 2/1.33 = 1.5 m. \"You're seeing 0.5 m of invisible water. This is why you should never dive into an unfamiliar pool.\""
          },
          "nos": {
            "tags": ["Measurements", "Theories", "Patterns"],
            "description": "Willebrord Snell discovered the law of refraction empirically in 1621. Descartes independently derived it theoretically. The agreement between experiment and theory was a triumph. Later, the wave theory explained WHY refraction occurs (speed changes) — a deeper understanding replacing the empirical rule."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — State Snell's law; define refractive index",
            "AO2 — Apply n₁ sinθ₁ = n₂ sinθ₂; calculate n from speed data",
            "AO3 — Analyse why waves bend and verify Snell's law experimentally"
          ],
          "resources": "Semicircular glass block, ray box or laser, protractor, graph paper, glass of water + pencil",
          "formative": "\"Light enters a glass block (n = 1.52) from air at 50°. (a) Find the angle of refraction. (b) Find the speed of light in the glass. (c) Does the wavelength change? Does the frequency change? Explain. (d) Plot your lab data: sinθ₁ vs sinθ₂. Find n from the gradient.\""
        },
        {
          "num": 3,
          "title": "Total Internal Reflection & Critical Angle",
          "focus": "When refraction fails and all light reflects — fibre optics and diamonds",
          "minutes": 40,
          "understandings": [
            "Total internal reflection (TIR) occurs when light in a denser medium hits the boundary at an angle greater than the critical angle",
            "Critical angle θ_c: the angle of incidence that gives an angle of refraction of 90° → sinθ_c = n₂/n₁ (where n₁ > n₂)",
            "For θ > θ_c: no refracted ray — all light is reflected internally",
            "Applications: optical fibres (telecommunications), endoscopes (medical), diamond sparkle, prisms in binoculars"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Shine a laser into a semicircular glass block from the flat side. Slowly increase the angle. At first: refracted ray exits. At the critical angle: refracted ray runs along the surface (θ₂ = 90°). Beyond: the ray reflects completely — total internal reflection. \"The glass becomes a perfect mirror.\"</p><p><strong>Direct instruction (10 min):</strong> At θ_c: sinθ_c = n₂/n₁. For glass-air: sinθ_c = 1/1.5 → θ_c = 41.8°. For water-air: sinθ_c = 1/1.33 → θ_c = 48.8°. For diamond-air: sinθ_c = 1/2.42 → θ_c = 24.4° — diamond has a very small critical angle, so light bounces around inside many times → sparkle. TIR only occurs going from higher n to lower n (dense → less dense).</p><p><strong>Applications (10 min):</strong> Optical fibres: light enters at an angle exceeding θ_c → bounces along the fibre with no loss. This carries internet data at the speed of light over thousands of km. Endoscopes: fibre bundles carry images inside the body for surgery without large incisions. Diamonds: cut to maximise TIR → light enters and bounces internally before exiting → brilliance.</p><p><strong>Lab + Practice (15 min):</strong> Measure θ_c for the glass block: find the angle where the refracted ray just disappears. Calculate n from θ_c. Compare with the n from Snell's law lab. Then 3 calculation problems.</p>",
          "engagementHook": {
            "title": "WHY DIAMONDS SPARKLE & THE INTERNET RUNS ON GLASS",
            "content": "\"A diamond's critical angle is only 24.4°. Light that enters bounces around inside — hitting surface after surface at angles > θ_c — before finally escaping. Each bounce adds sparkle. Cut the diamond at wrong angles → dull.\" Then: \"The internet is 99% optical fibre. Your Netflix stream travels as light bouncing inside glass threads thinner than a hair, across the Atlantic Ocean. Total internal reflection makes it possible.\""
          },
          "nos": {
            "tags": ["Technology", "Observations", "Patterns"],
            "description": "TIR was discovered by Kepler (1611) but not understood until the wave theory of light. Its applications in fibre optics have transformed global communication — physics enabling the information age. Charles Kao won the 2009 Nobel Prize for his work on optical fibres."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Define critical angle and TIR; state sinθ_c = n₂/n₁",
            "AO2 — Calculate θ_c; determine whether TIR occurs for a given angle",
            "AO3 — Analyse applications of TIR in technology"
          ],
          "resources": "Semicircular glass block, laser, protractor, optical fibre (if available), diamond image",
          "formative": "\"(a) Calculate θ_c for glass-water (n_glass = 1.5, n_water = 1.33). (b) A ray in the glass hits the boundary at 50°. Does TIR occur for glass-air? For glass-water? (c) Explain why optical fibres must be clad in a material with LOWER n than the core. (d) A diamond cutter shapes a diamond so that light entering the top surface always hits internal surfaces at > 24.4°. Explain why this maximises brilliance.\""
        }
      ]
    },
    {
      "name": "Diffraction, Superposition & Young's Experiment (SL)",
      "color": "accent4",
      "totalMinutes": 170,
      "subtopics": [
        {
          "num": 1,
          "title": "Diffraction Through Apertures & Around Objects",
          "focus": "Waves spreading after passing through gaps or around obstacles",
          "minutes": 40,
          "understandings": [
            "Diffraction: the spreading of a wave as it passes through an aperture or around an obstacle",
            "Maximum diffraction occurs when the aperture width ≈ wavelength (aperture ≈ λ)",
            "If aperture >> λ: minimal diffraction (ray model works). If aperture << λ: wave spreads almost uniformly in all directions",
            "Diffraction explains why you can hear around corners (sound λ ≈ door width) but can't see around corners (light λ << door width)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"You can hear someone talking in the next room through an open door, but you can't see them (unless you look through the doorway). Both sound and light are waves. Why does sound bend around the corner but light doesn't?\" Because sound λ (0.3–17 m) ≈ door width, but light λ (400–700 nm) << door width. Diffraction depends on λ/aperture.</p><p><strong>Direct instruction (10 min):</strong> Diffraction = spreading of waves. Maximum when gap ≈ λ. Ripple tank: show water waves passing through gaps of different widths. Wide gap: waves pass straight through (like rays). Gap ≈ λ: waves spread in semicircles. Around a barrier: waves curve around the edges. Sketch wavefronts for each case.</p><p><strong>Demo (15 min):</strong> (1) Ripple tank with adjustable slit: vary gap width, observe diffraction amount. (2) Laser through a single narrow slit: the beam SPREADS into a wide pattern on the wall (not a point). \"If light were just particles, it would pass through the slit and make a narrow line. The spreading proves light is a wave.\" (3) Sound diffraction: stand behind a wall and listen to a speaker — you can hear it because sound diffracts around the wall.</p><p><strong>Practice (10 min):</strong> Sketch diffraction patterns for various aperture/λ ratios. Explain everyday diffraction examples.</p>",
          "engagementHook": {
            "title": "WHY CAN YOU HEAR BUT NOT SEE AROUND CORNERS?",
            "content": "\"Sound wavelength: ~1 m. Door width: ~1 m. Ratio ≈ 1 → maximum diffraction → sound bends around the door. Light wavelength: ~500 nm. Door width: ~1 m. Ratio ≈ 2 × 10⁻⁶ → almost zero diffraction → light goes straight.\" Students calculate the ratio for both. The factor of a million explains why one bends and the other doesn't."
          },
          "nos": {
            "tags": ["Observations", "Models"],
            "description": "Diffraction was first observed by Francesco Grimaldi (1665) and was a key argument for the wave nature of light. Newton's particle model couldn't explain spreading — waves could. This debate (wave vs particle) ran for 150 years until Young's double slit experiment settled it (temporarily — quantum mechanics reopened it)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define diffraction; state when it's maximum",
            "AO2 — Sketch diffraction patterns for various aperture/λ ratios"
          ],
          "resources": "Ripple tank with adjustable slit, laser + single slit, speaker + wall, whiteboard",
          "formative": "\"(a) Sound (λ = 1.5 m) passes through a 1 m doorway. Sketch the diffraction pattern. (b) Light (λ = 500 nm) passes through the same doorway. Sketch. (c) What aperture size would produce significant diffraction for light? (d) Why don't AM radio waves (λ ~ 300 m) cast sharp shadows behind buildings?\""
        },
        {
          "num": 2,
          "title": "Superposition & Interference Conditions",
          "focus": "When two waves meet — constructive and destructive interference",
          "minutes": 55,
          "understandings": [
            "Superposition: when two waves meet, the resultant displacement is the sum of the individual displacements",
            "Constructive interference: waves in phase → amplitudes add → maximum resultant (path difference = nλ)",
            "Destructive interference: waves in antiphase → amplitudes cancel → zero resultant (path difference = (n+½)λ)",
            "Conditions for observable interference: coherent sources (same f, constant phase difference), similar amplitudes",
            "Path difference determines whether interference is constructive or destructive at any point"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Drop two stones into a ripple tank simultaneously. Where the circular wavefronts overlap: some points have large waves (constructive), some have calm water (destructive). \"Two waves + one point = one resultant. The waves ADD — this is superposition.\"</p><p><strong>Direct instruction (15 min):</strong> Superposition principle: y_total = y₁ + y₂ at every point. Constructive: crests align with crests → amplitude doubles. Path difference = 0, λ, 2λ, … = nλ. Destructive: crests align with troughs → cancellation. Path difference = λ/2, 3λ/2, … = (n+½)λ. For a stable interference pattern: sources must be coherent (same f, constant phase relationship). Two different-frequency sources: the pattern shifts constantly → no visible pattern.</p><p><strong>Demo (10 min):</strong> Two speakers, same signal, same frequency. Walk across the room: loud spots (constructive) alternate with quiet spots (destructive). Students map the positions. \"You're walking through an interference pattern made of SOUND.\"</p><p><strong>Worked examples (15 min):</strong> (1) Two sources, same f. At point P: distance from source 1 = 3.5λ, from source 2 = 5.0λ. Path difference = 1.5λ = (1+½)λ → destructive. (2) Path difference = 4λ → constructive. (3) Two speakers 2 m apart, f = 1700 Hz (λ = 0.2 m). At a point 5 m away along the centreline, then 0.3 m to the side: calculate path difference and determine constructive or destructive.</p><p><strong>Practice (10 min):</strong> Path difference problems and interference classification.</p>",
          "engagementHook": {
            "title": "THE SILENT SPOT — WALKING THROUGH SOUND INTERFERENCE",
            "content": "Two speakers face the class, playing the same pure tone. Students walk from side to side and find SILENT SPOTS between LOUD SPOTS. \"The sound isn't missing — two waves are arriving at that point and cancelling each other perfectly. Move 20 cm and they reinforce.\" Mark the positions on the floor. Calculate the expected spacing from λ and speaker separation. Prediction matches reality."
          },
          "nos": {
            "tags": ["Observations", "Theories", "Patterns"],
            "description": "Interference was the decisive evidence for the wave nature of light. Only waves can cancel — particles can't. The requirement for coherent sources wasn't understood until Young's experiment (1801). Before lasers, coherent light was extremely difficult to produce, limiting interference experiments."
          },
          "atl": ["Thinking skills", "Social skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State superposition principle; define constructive/destructive interference; state conditions for coherent sources",
            "AO2 — Calculate path difference and classify interference type",
            "AO3 — Analyse two-source interference patterns"
          ],
          "resources": "Ripple tank (two dippers), two speakers + signal generator, metre ruler, calculator",
          "formative": "\"Two coherent sources emit waves of λ = 0.04 m. Point P is 0.56 m from source 1 and 0.50 m from source 2. (a) Calculate path difference. (b) Is interference constructive or destructive? (c) Point Q is 0.52 m from source 1 and 0.50 m from source 2. Classify. (d) What is the minimum path difference for destructive interference?\""
        },
        {
          "num": 3,
          "title": "Young's Double Slit Experiment — s = λD/d",
          "focus": "The experiment that proved light is a wave",
          "minutes": 75,
          "understandings": [
            "Young's double slit experiment: monochromatic light through two narrow slits produces an interference pattern of bright and dark fringes on a screen",
            "The significance: this experiment demonstrated the wave nature of light (1801)",
            "Fringe spacing: s = λD/d, where s is fringe separation, D is slit-to-screen distance, d is slit separation",
            "Constructive fringes (bright): path difference = nλ. Destructive fringes (dark): path difference = (n+½)λ",
            "Conditions: coherent sources (same slit illuminated by monochromatic light), similar amplitudes"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"In 1801, Thomas Young performed the most important experiment in the history of optics. He shone light through two thin slits and saw bright and dark bands — an interference pattern. Newton's particle theory couldn't explain this. Waves could. This settled the debate.\" Show a photograph of the double slit pattern.</p><p><strong>Direct instruction (20 min):</strong> Set up: monochromatic light → single slit (to create coherence) → double slit (separation d) → screen (distance D). Each slit acts as a coherent source. At the screen: light from both slits arrives. At some points: path difference = nλ → constructive → bright. At others: path difference = (n+½)λ → destructive → dark. Derive s = λD/d from geometry: for small angles, path difference ≈ d sinθ ≈ dy/D. For constructive: dy/D = nλ → y_n = nλD/d. Fringe spacing: s = y_{n+1} − y_n = λD/d. Wider spacing (larger s) if: longer λ, larger D, or smaller d.</p><p><strong>Lab (25 min):</strong> YOUNG'S DOUBLE SLIT — Use a laser and a double slit (or fine scratches on a blackened glass slide). Measure s (fringe spacing), D (slit-to-screen), and d (slit separation, provided or measured with travelling microscope). Calculate λ = sd/D. Compare with the known laser wavelength. Discuss sources of error: difficulty measuring d, non-uniform fringe brightness, diffraction envelope.</p><p><strong>Worked examples (15 min):</strong> (1) λ = 632 nm, d = 0.2 mm, D = 2 m → s = 6.32 mm. (2) White light double slit: each colour has different λ → different s → coloured fringes. Central fringe is white (all colours constructive). (3) If D doubles, s doubles. If d halves, s doubles. Students verify these dependencies.</p><p><strong>Practice (10 min):</strong> s = λD/d calculations and conceptual questions about changing parameters.</p>",
          "engagementHook": {
            "title": "THE EXPERIMENT THAT KILLED NEWTON'S THEORY",
            "content": "\"Newton said light is particles. Young said light is waves. In 1801, Young shone light through two slits and saw bands of brightness and darkness — an interference pattern. Particles can't cancel each other. Waves can. Newton was wrong (about this). One elegant experiment overturned 100 years of physics.\" Students perform Young's experiment themselves with a laser — seeing the fringes with their own eyes."
          },
          "nos": {
            "tags": ["Theories", "Observations", "Falsification"],
            "description": "Young's experiment is one of the most celebrated in physics. It falsified Newton's corpuscular (particle) theory of light and established the wave theory. But 100 years later, Einstein showed light IS also particles (photons) — wave-particle duality. Science doesn't just replace theories; it synthesises them."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe Young's experiment; state s = λD/d; state its significance",
            "AO2 — Apply s = λD/d to calculate fringe spacing; determine λ from experimental data",
            "AO3 — Analyse how changing λ, D, d affects the pattern"
          ],
          "resources": "Laser (red or green), double slit (various d), screen, ruler, travelling microscope (if available for d measurement), calculator",
          "formative": "\"A red laser (λ = 633 nm) passes through a double slit (d = 0.25 mm) onto a screen 3 m away. (a) Calculate fringe spacing. (b) If replaced with a blue laser (λ = 450 nm), will fringes be closer or further apart? Calculate. (c) If d is halved, what happens to s? (d) Why must the two slits be illuminated by the SAME source for interference to be observed? (e) State the significance of Young's experiment.\""
        }
      ]
    },
    {
      "name": "Single Slit Diffraction (AHL)",
      "color": "accent",
      "totalMinutes": 180,
      "subtopics": [
        {
          "num": 1,
          "title": "Single Slit Diffraction Pattern & First Minimum (AHL)",
          "focus": "θ = λ/b — why a single slit produces a central maximum with subsidiary fringes",
          "minutes": 65,
          "understandings": [
            "Single slit diffraction at normal incidence produces a central maximum with subsidiary maxima and minima on either side",
            "The central maximum is twice the width of subsidiary maxima",
            "Position of the first minimum: sinθ = λ/b, where b is slit width",
            "Narrower slit → wider diffraction pattern (more spreading). If b >> λ: minimal diffraction",
            "The diffraction pattern is an intensity distribution (not sharp bright/dark like double slit)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Shine a laser through a single narrow slit. On the screen: not a dot, not a sharp line, but a broad central bright band with fainter bands on either side. \"If light were just particles, there'd be a sharp image of the slit. The spreading and the pattern prove it's a wave.\"</p><p><strong>Direct instruction (20 min):</strong> The single slit acts as a continuous source of secondary wavelets (Huygens' principle). At the centre: all wavelets arrive in phase → maximum intensity. At angle θ where sinθ = λ/b: wavelets from the top and middle of the slit have a path difference of λ/2 → destructive. Every point in the top half is cancelled by its partner in the bottom half → first minimum. Central maximum width = 2λ/b (in angular terms). Narrower slit → wider pattern (more spreading). Draw the intensity distribution: broad central peak, subsidiary peaks decreasing rapidly.</p><p><strong>Lab (20 min):</strong> SINGLE SLIT PATTERN — Shine a laser through slits of different widths (0.1, 0.2, 0.5 mm). For each: measure the width of the central maximum on the screen at known D. Calculate λ from sinθ = λ/b. Observe: narrower slit → wider pattern.</p><p><strong>Worked examples (15 min):</strong> (1) Slit b = 0.1 mm, λ = 633 nm, D = 2 m. Position of first minimum: y = λD/b = 12.7 mm. Central maximum width = 25.4 mm. (2) If b is doubled: pattern halves in width. (3) Width of central max for b = 0.05 mm?</p><p><strong>Practice (5 min):</strong> Single slit calculations and pattern sketching.</p>",
          "engagementHook": {
            "title": "THE PARADOX — SMALLER SLIT, BIGGER PATTERN",
            "content": "\"Make the slit narrower. Does the light pattern get narrower?\" Students expect yes. \"NO — it gets WIDER. The narrower the slit, the MORE the light spreads.\" Demo with decreasing slit widths — the central maximum visibly grows. \"This is the opposite of what particles would do. Diffraction is definitively a wave phenomenon.\""
          },
          "nos": {
            "tags": ["Observations", "Theories"],
            "description": "Single slit diffraction was explained by Augustin Fresnel using Huygens' wavelets — each point in the slit acts as a source. This wave model predicts the exact pattern, including the widths and intensities of all fringes. Fresnel's theory won him the 1819 Grand Prix of the French Academy, despite fierce opposition from particle-theory supporters."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Describe single slit diffraction; state sinθ = λ/b for first minimum",
            "AO2 — Calculate position of first minimum and central maximum width",
            "AO3 — Analyse how changing b and λ affects the diffraction pattern"
          ],
          "resources": "Laser, single slits (various b), screen, ruler, calculator",
          "formative": "\"λ = 500 nm through a 0.15 mm slit onto a screen 3 m away. (a) Angular position of first minimum. (b) Position on screen. (c) Central maximum width. (d) The slit is narrowed to 0.05 mm. What happens to the pattern? Calculate the new central width. (e) Sketch the intensity distribution.\""
        },
        {
          "num": 2,
          "title": "Double Slit Modulated by Single Slit Envelope (AHL)",
          "focus": "The real double slit pattern — interference fringes inside a diffraction envelope",
          "minutes": 60,
          "understandings": [
            "The real double slit pattern is a combination of: double slit INTERFERENCE (fine fringes, spacing s = λD/d) modulated by single slit DIFFRACTION (broad envelope, width = 2λD/b)",
            "The double slit fringes are visible WITHIN the single slit envelope",
            "Where the single slit envelope has a minimum, the double slit fringes disappear ('missing orders')",
            "Sketch and interpret intensity graphs showing both effects superimposed"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> At SL: double slit → uniform bright/dark fringes (idealised). At HL: each slit has width b → each slit INDIVIDUALLY produces a diffraction pattern. The two patterns then INTERFERE. Result: the double slit fringes are modulated by the single slit envelope. Draw: fine interference fringes (spacing s = λD/d) inside a broad diffraction envelope (central width = 2λD/b). Where the envelope is zero (single slit minimum): no light → fringes disappear. These are 'missing orders.'</p><p><strong>Demo (10 min):</strong> Show a real double slit pattern with a laser. Compare with a single slit pattern from one slit of the same width. The double slit has the same overall shape (envelope) but with fine fringes inside. \"The envelope tells you about each individual slit. The fringes tell you about the spacing between slits.\"</p><p><strong>Intensity graph analysis (15 min):</strong> Give students a printed intensity graph. Identify: the diffraction envelope (broad peaks), the interference fringes (fine peaks), missing orders (where envelope = 0). Measure: fringe spacing (gives d), envelope width (gives b). \"You can measure BOTH slit width and slit separation from the same pattern.\"</p><p><strong>Worked examples (10 min):</strong> (1) d = 0.5 mm, b = 0.1 mm. Fringes per central maximum = d/b = 5 → expect ~9 visible fringes (central ± 4). (2) If d = 0.25 mm, b = 0.05 mm → d/b = 5, same ratio → same number. (3) If b decreases (narrower slits): envelope widens → more fringes visible.</p><p><strong>Practice (10 min):</strong> Sketch modulated patterns and count fringes within the central maximum.</p>",
          "engagementHook": {
            "title": "THE FINGERPRINT WITHIN THE ENVELOPE",
            "content": "\"The broad shape is the diffraction envelope — it depends on slit WIDTH b. The fine fringes are the interference pattern — they depend on slit SEPARATION d. One pattern carries TWO pieces of information. It's like seeing fingerprints (fine detail) inside a handprint (broad shape).\" Students identify both in a real laser pattern."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The modulated pattern shows how two independent phenomena (diffraction from individual slits + interference between slits) combine mathematically through multiplication of amplitudes. This superposition of effects is a recurring theme: complex phenomena often result from the combination of simpler ones."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Describe the modulated double slit pattern",
            "AO2 — Distinguish slit width effects (envelope) from slit separation effects (fringes)",
            "AO3 — Analyse intensity graphs to extract b and d; identify missing orders"
          ],
          "resources": "Laser, double slit (known d and b), screen, printed intensity graphs for analysis",
          "formative": "\"A double slit: d = 0.4 mm, b = 0.1 mm, λ = 600 nm. (a) Calculate the interference fringe spacing s = λD/d. (b) Calculate the width of the central diffraction envelope = 2λD/b. (c) How many bright fringes are visible within the central maximum? (d) Sketch the intensity pattern. (e) What happens to the pattern if the slit width b is halved but d stays the same?\""
        },
        {
          "num": 3,
          "title": "Intensity Graphs & Slit Width vs Separation (AHL)",
          "focus": "How changing b and d independently affects the pattern",
          "minutes": 55,
          "understandings": [
            "Slit width b controls the diffraction ENVELOPE (broader b → narrower envelope; narrower b → wider envelope)",
            "Slit separation d controls the FRINGE spacing (larger d → closer fringes; smaller d → wider fringes)",
            "Width of slits and separation of slits have independent, distinguishable effects on intensity graphs",
            "Sketch and interpret intensity graphs for various b and d combinations"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Systematic comparison: (a) Fix d, vary b: changing b changes the envelope width but NOT the fringe spacing. Narrower b → wider envelope → more fringes visible. (b) Fix b, vary d: changing d changes fringe spacing but NOT the envelope. Larger d → closer fringes (more fringes in the same envelope). (c) Change both: both effects change independently. Students must learn to read BOTH from a single graph.</p><p><strong>Graph comparison activity (20 min):</strong> Give 6 intensity graphs with different b and d values. Students rank by: (a) which has the narrowest slit? (widest envelope), (b) which has the largest separation? (closest fringes), (c) which has the most fringes in the central maximum? (largest d/b ratio). Then match each graph to a given set of (b, d) values.</p><p><strong>Worked examples (15 min):</strong> (1) Graph A has envelope width 24 mm and fringe spacing 3 mm → 8 fringes in central max → d/b = 4. If λ = 600 nm and D = 2 m: b = 2λD/envelope = 0.1 mm, d = λD/s = 0.4 mm. Verify d/b = 4. (2) Graph B has a narrower envelope and wider fringes: larger b and smaller d. Students extract numerical values.</p><p><strong>Practice (10 min):</strong> Exam-style: given an intensity graph, extract b, d, λ, and number of fringes.</p>",
          "engagementHook": {
            "title": "CSI OPTICS — READING THE CLUES IN THE PATTERN",
            "content": "\"A detective finds a diffraction pattern at a crime scene (from light passing through evidence). From the pattern alone, can she determine both the slit width AND the slit separation?\" YES. Envelope width → b. Fringe spacing → d. Students become forensic physicists: given 4 unknown patterns, they calculate b and d for each and 'identify the evidence.'"
          },
          "nos": {
            "tags": ["Patterns", "Models", "Measurements"],
            "description": "The ability to extract TWO independent physical quantities (b and d) from a single measurement (the intensity pattern) is a powerful example of how physics uses patterns. X-ray crystallography works similarly: the diffraction pattern of X-rays through a crystal reveals the atomic spacing and arrangement."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Distinguish slit width effects from slit separation effects on intensity",
            "AO2 — Extract b and d from intensity graph measurements",
            "AO3 — Analyse how independently changing b and d affects the observed pattern"
          ],
          "resources": "6 printed intensity graphs (various b, d), rulers, calculators, CSI activity cards",
          "formative": "\"Two intensity graphs are given. Graph X has envelope width 30 mm and fringe spacing 5 mm. Graph Y has envelope width 15 mm and fringe spacing 2.5 mm. Both use the same λ and D. (a) Which has the narrower slits? (b) Which has the larger slit separation? (c) Both have the same number of fringes in the central max. Why? (d) Calculate b and d for each if λ = 500 nm and D = 1.5 m.\""
        }
      ]
    },
    {
      "name": "Diffraction Gratings (AHL)",
      "color": "accent2",
      "totalMinutes": 180,
      "subtopics": [
        {
          "num": 1,
          "title": "Multiple Slits & Diffraction Gratings — nλ = d sinθ (AHL)",
          "focus": "From 2 slits to N slits — sharper maxima and the grating equation",
          "minutes": 75,
          "understandings": [
            "Multiple slits (N > 2) create interference patterns with sharper, brighter principal maxima",
            "More slits → narrower maxima → better resolution",
            "Diffraction gratings: large N (thousands per mm) produce very sharp maxima at specific angles",
            "Grating equation: nλ = d sinθ, where n is the order number (0, 1, 2, ...) and d is the slit spacing",
            "Maximum number of orders: n_max is the largest integer where sinθ ≤ 1, i.e., n_max = floor(d/λ)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show the pattern from a laser through a diffraction grating — sharp, bright dots instead of the fuzzy fringes from a double slit. \"More slits = sharper peaks. A grating has thousands of slits per millimetre.\"</p><p><strong>Direct instruction (20 min):</strong> From 2 slits → N slits: as N increases, principal maxima become narrower and brighter (intensity ∝ N²), secondary maxima become negligible. A diffraction grating (N ~ 1000–10,000 per mm): extremely sharp maxima at angles satisfying nλ = d sinθ. d = 1/N (slit spacing = inverse of slits per unit length). Order n = 0: θ = 0 (central). n = 1: sinθ = λ/d. n = 2: sinθ = 2λ/d. Maximum order: when sinθ = 1 → n_max = d/λ. Draw the pattern: sharp dots at calculated angles.</p><p><strong>Lab (25 min):</strong> GRATING EXPERIMENT — Shine a laser through a diffraction grating (e.g., 300 lines/mm → d = 3.33 μm). Measure the angle to each order using tan θ = y/D. Calculate λ from nλ = d sinθ for n = 1, 2, 3. Average. Compare with known λ. This is one of the most accurate λ measurements possible in a school lab.</p><p><strong>Worked examples (15 min):</strong> (1) Grating: 500 lines/mm, λ = 550 nm. d = 2 μm. θ for n = 1: sinθ = 550 × 10⁻⁹ / 2 × 10⁻⁶ = 0.275 → θ = 16.0°. (2) Maximum order: n_max = d/λ = 2000/550 = 3.6 → n_max = 3. (3) White light through a grating: each colour diffracts at a different angle → spectrum. Violet (short λ) diffracts least, red (long λ) diffracts most.</p><p><strong>Practice (10 min):</strong> Grating calculations and maximum order determination.</p>",
          "engagementHook": {
            "title": "THE CD RAINBOW — A DIFFRACTION GRATING IN YOUR HAND",
            "content": "Hold a CD under white light. Rainbow colours appear — the grooves on the CD act as a reflection diffraction grating. Students estimate the groove spacing: the first-order rainbow appears at ~30° for green (550 nm) → d = λ/sinθ = 550/sin30° = 1100 nm ≈ 1.1 μm. \"The CD has ~910 tracks per mm. You just measured it with your eyes and a protractor.\""
          },
          "nos": {
            "tags": ["Measurements", "Technology", "Patterns"],
            "description": "Diffraction gratings are one of the most important tools in physics: they measure wavelengths with extraordinary precision. Joseph von Fraunhofer (1821) built the first precise gratings and used them to discover dark lines in the solar spectrum — absorption lines from elements in the Sun's atmosphere. This launched astrophysical spectroscopy."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State the grating equation nλ = d sinθ; explain why more slits give sharper maxima",
            "AO2 — Apply nλ = d sinθ to calculate θ, λ, d, or n; find maximum order",
            "AO3 — Analyse grating patterns to determine wavelengths"
          ],
          "resources": "Diffraction grating (various lines/mm), laser, screen, protractor or ruler for angle measurement, CD, white light source",
          "formative": "\"A grating has 600 lines/mm. (a) Calculate d. (b) For λ = 480 nm: find θ for orders 1, 2, 3. (c) What is the maximum order visible? (d) White light (400–700 nm) passes through. For n = 1: find the angular range of the spectrum. Do the spectra for n = 1 and n = 2 overlap? (e) Why are grating maxima sharper than double slit fringes?\""
        },
        {
          "num": 2,
          "title": "Spectrometry & Advanced Diffraction Problem Solving (AHL)",
          "focus": "Applications of gratings and synthesis of all wave phenomena",
          "minutes": 75,
          "understandings": [
            "Diffraction gratings are used in spectrometers to analyse the wavelength composition of light",
            "Applications: identifying elements from emission spectra, measuring stellar composition, analysing laser wavelengths",
            "Resolving power: a grating with more lines can distinguish closer wavelengths (better resolution)",
            "Combining all wave phenomena: reflection, refraction, diffraction, interference in complex problems"
          ],
          "teachingStrategy": "<p><strong>Spectroscopy application (15 min):</strong> Show the emission spectra of hydrogen, helium, sodium through a grating. Each element produces a unique pattern of wavelengths — a 'fingerprint.' Astronomers use this to determine what stars are made of (preview E.1). Students observe: the grating separates the colours into distinct lines at calculated angles. Measure one spectral line's angle → calculate its wavelength → identify the element.</p><p><strong>Resolution discussion (10 min):</strong> \"Can a grating tell the difference between two wavelengths that are very close?\" More lines → narrower maxima → can resolve closer wavelengths. This is why astronomical spectrometers use gratings with 100,000+ lines. A grating's resolving power R = nN (order × number of slits). Students calculate: 1000-line grating in 2nd order: R = 2000 → can distinguish wavelengths differing by Δλ = λ/R.</p><p><strong>Synthesis problems (30 min):</strong> Groups tackle multi-concept problems: (1) Light passes through a glass prism then through a grating — combine refraction + diffraction. (2) White light through a double slit: describe the pattern (central white, coloured fringes, overlapping orders). (3) A fibre optic (TIR) carries laser light to a grating for wavelength analysis — trace the light through the entire system. (4) Sound waves: double slit interference using two speakers — calculate fringe spacing using s = λD/d with sound λ.</p><p><strong>Exam practice (15 min):</strong> 3 timed exam-style problems covering the full range of C.3.</p><p><strong>Wrap-up (5 min):</strong> Summary poster: reflection, refraction, diffraction, interference, TIR — all are consequences of the wave model. \"Light bends, bounces, spreads, and cancels. All because it's a wave.\"</p>",
          "engagementHook": {
            "title": "WHAT IS THE SUN MADE OF? — SPECTROSCOPY ANSWERS",
            "content": "\"In 1868, scientists pointed a spectrometer at the Sun and found a spectral line at 587.56 nm that didn't match ANY known element. They named the unknown element 'helium' — from Helios, the Greek sun god. Helium was discovered on the Sun 27 years before it was found on Earth.\" Students observe helium and hydrogen spectra through a grating and compare with the solar spectrum. \"You're doing the same physics that discovered a new element.\""
          },
          "nos": {
            "tags": ["Observations", "Theories", "Science as a shared endeavour"],
            "description": "Spectroscopy has been called 'the most powerful tool in all of science.' It identifies elements, measures temperatures, detects motion (Doppler shift), and determines chemical composition — all from analysing light. The discovery of helium on the Sun before Earth is a dramatic example of how physics reveals the universe's composition from a distance."
          },
          "atl": ["Thinking skills", "Research skills", "Social skills"],
          "learnerProfile": ["Inquirer", "Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — Describe spectrometer operation using a grating",
            "AO2 — Apply nλ = d sinθ in spectrometry contexts; calculate resolving power",
            "AO3 — Synthesise multiple wave phenomena in complex problems"
          ],
          "resources": "Diffraction grating, spectral tubes (H, He, Na), power supply, spectrometer (if available), solar spectrum poster, exam papers",
          "formative": "\"(a) A sodium lamp produces two lines at 589.0 nm and 589.6 nm. A grating has 5000 lines. Can it resolve these in 1st order? In 2nd? (b) A star's spectrum shows hydrogen lines shifted from their expected positions. What does this indicate? (preview C.5 Doppler). (c) White light passes through a 300 lines/mm grating. Describe and sketch the pattern for orders 0, 1, and 2. Do orders 1 and 2 overlap? Calculate to verify.\""
        },
        {
          "num": 3,
          "title": "Synthesis — Comparing All Diffraction & Interference Patterns (AHL)",
          "focus": "Single slit vs double slit vs grating — side-by-side comparison",
          "minutes": 30,
          "understandings": [
            "Single slit: broad central maximum, subsidiary maxima decreasing in intensity",
            "Double slit: uniform fringes modulated by single slit envelope",
            "Diffraction grating: very sharp principal maxima at nλ = d sinθ positions",
            "As N increases (1 → 2 → N): maxima become sharper and brighter, pattern becomes more useful for measurement"
          ],
          "teachingStrategy": "<p><strong>Comparison activity (15 min):</strong> Students build the ultimate comparison table: Single slit (1 slit, width b) | Double slit (2 slits, width b, separation d) | Grating (N slits, spacing d). For each: key equation, pattern description, what it depends on, intensity distribution sketch. Show all three patterns side by side (from the same laser). The progression from 1 → 2 → 1000 slits is visually dramatic.</p><p><strong>Quick quiz (10 min):</strong> Show 5 unlabelled patterns. Students identify each as single slit, double slit, or grating and justify. Then: given a pattern, extract all possible physical quantities (b, d, λ, N).</p><p><strong>Wrap-up (5 min):</strong> \"Single slit tells you about ONE opening. Double slit tells you about the SPACING between two. Grating tells you about WAVELENGTH with extreme precision. All are the same physics — waves interfering — at different scales.\"</p>",
          "engagementHook": {
            "title": "THE LINEUP — CAN YOU TELL THEM APART?",
            "content": "Show 6 patterns on screen: 3 real photos + 3 computer-generated. Students must identify each as single slit, double slit, or grating AND estimate whether the patterns are real or simulated. Then reveal. \"If you can't tell the computer from reality, the physics model is working perfectly.\""
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The progression from one slit to a grating illustrates a key scientific strategy: start with the simplest case (one slit), understand it fully, then build complexity (two slits, then N slits). Each step adds new physics without invalidating the previous understanding."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Thinker"],
          "ao": [
            "AO1 — Compare single slit, double slit, and grating patterns",
            "AO3 — Identify pattern type from observations and extract physical parameters"
          ],
          "resources": "Laser, single slit, double slit, diffraction grating, screen, comparison table template, printed/projected pattern images",
          "formative": "\"Complete the table: Pattern type | Key equation | What determines fringe/peak spacing | What determines envelope width | Sketch intensity vs position. Then: an unknown pattern has sharp peaks at 15.2° and 31.5° for orders 1 and 2 with λ = 532 nm. Is this a double slit or grating? Find d.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "C.1 Simple Harmonic Motion", "question": "How does the oscillation of particles in a medium connect to wave phenomena like diffraction and interference?" },
    { "topic": "C.2 Wave Model", "question": "How does v = fλ relate to refraction (speed change → wavelength change → direction change)?" },
    { "topic": "C.4 Standing Waves", "question": "How does the superposition of two waves travelling in opposite directions create standing waves?" },
    { "topic": "C.5 Doppler Effect", "question": "How does the apparent change in wavelength from a moving source relate to the wave phenomena studied here?" },
    { "topic": "E.1 Structure of the Atom", "question": "How does the diffraction of electrons provide evidence for wave-particle duality?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How does the behaviour of light at boundaries (reflection, refraction) connect to the electromagnetic wave model?" }
  ]
},
"C4": {
  "title": "Standing Waves and Resonance",
  "code": "C.4",
  "theme": "C",
  "level": "SL + HL",
  "recommendedHours": 4,
  "recommendedMinutes": 240,
  "guidingQuestions": [
    "What distinguishes standing waves from travelling waves?",
    "How does the form of standing waves depend on the boundary conditions?",
    "How can the application of force result in resonance within a system?"
  ],
  "groups": [
    {
      "name": "Standing Waves",
      "color": "accent3",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Formation & Properties of Standing Waves",
          "focus": "Superposition of two identical waves travelling in opposite directions",
          "minutes": 45,
          "understandings": [
            "Standing waves form from the superposition of two identical waves (same f, λ, A) travelling in opposite directions",
            "Nodes: points of zero displacement (destructive interference, always at rest)",
            "Antinodes: points of maximum displacement (constructive interference, maximum oscillation)",
            "Between adjacent nodes, all points oscillate in phase with each other; across a node, they're in antiphase (180° phase difference)",
            "Standing waves do NOT transfer energy — energy is stored, not propagated",
            "Node-to-node distance = λ/2; antinode-to-antinode distance = λ/2"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Tie one end of a long rope to a wall. Shake the other end at the right frequency. A standing wave appears — some points don't move (nodes) while others oscillate wildly (antinodes). \"The wave isn't going anywhere — it's STANDING still. But it's made from two travelling waves.\"</p><p><strong>Direct instruction (15 min):</strong> How it forms: an incident wave reflects off a boundary. The reflected wave travels back. At certain frequencies, the two waves superpose to create a stable pattern. At nodes: the two waves always cancel (equal and opposite displacements). At antinodes: they always reinforce. Key differences from travelling waves: (1) no energy transfer, (2) amplitude varies with position (zero at nodes, max at antinodes), (3) all points between adjacent nodes oscillate in phase — they reach their maxima simultaneously. Across a node: 180° phase difference.</p><p><strong>Demo (10 min):</strong> (1) Rope/slinky on vibrator: show 1st, 2nd, 3rd harmonics by adjusting frequency. Students observe nodes and antinodes appearing and disappearing. (2) Ruben's tube (if available): gas tube with speaker — flames show the pressure pattern of a standing sound wave. Flames are tall at pressure antinodes and short at nodes.</p><p><strong>Graphical skills (10 min):</strong> Draw a standing wave at different instants: t = 0, T/4, T/2, 3T/4, T. Show that nodes never move. Show that all points between nodes reach maximum simultaneously. Students practise drawing and labelling: nodes (N), antinodes (A), λ/2 between nodes.</p><p><strong>Practice (5 min):</strong> Identify nodes, antinodes, and λ from standing wave diagrams. State the phase relationship between marked points.</p>",
          "engagementHook": {
            "title": "THE ROPE THAT STANDS STILL — AND RUBEN'S TUBE OF FIRE",
            "content": "Shake a rope at the resonant frequency and watch the standing wave appear — certain points refuse to move no matter how hard you shake. \"Those are nodes. The wave goes THROUGH them but they don't budge.\" If you have a Ruben's tube: a row of gas flames over a tube with a speaker at one end. Play a tone → the flames form a wave pattern. \"You're SEEING sound. The tall flames mark pressure antinodes. The short flames mark nodes.\""
          },
          "nos": {
            "tags": ["Models", "Observations", "Patterns"],
            "description": "Standing waves emerge from the superposition of travelling waves — a complex pattern from simple components. This emergence of complexity from simplicity is a theme throughout physics: from standing waves in strings to electron orbitals in atoms (which are also standing wave patterns)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Communicator"],
          "ao": [
            "AO1 — Describe standing wave formation; define nodes and antinodes; state phase relationships",
            "AO2 — Draw standing waves at different times; determine λ from node spacing",
            "AO3 — Compare standing and travelling waves"
          ],
          "resources": "Long rope or slinky, mechanical vibrator + signal generator (if available), Ruben's tube (optional), whiteboard",
          "formative": "\"A standing wave has nodes at 0 cm, 25 cm, 50 cm, 75 cm, 100 cm. (a) Find λ. (b) Mark the antinodes. (c) Points at 10 cm and 15 cm — are they in phase or antiphase? (d) Points at 10 cm and 40 cm? (e) List three differences between standing and travelling waves.\""
        },
        {
          "num": 2,
          "title": "Standing Waves in Strings — Harmonics",
          "focus": "Fixed-end boundary conditions and the harmonic series",
          "minutes": 50,
          "understandings": [
            "A string fixed at both ends can only sustain standing waves at specific frequencies (harmonics)",
            "Boundary condition: both ends must be nodes (fixed points can't vibrate)",
            "1st harmonic (fundamental): L = λ₁/2 → f₁ = v/(2L)",
            "2nd harmonic: L = λ₂ → f₂ = 2f₁ = v/L",
            "nth harmonic: fₙ = nf₁ = nv/(2L), where n = 1, 2, 3, ...",
            "The frequency of harmonics depends on string length L, wave speed v, and v depends on tension T and mass per unit length μ: v = √(T/μ)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Pluck a guitar string. It vibrates — you hear the fundamental. Lightly touch the middle and pluck — you hear a higher note (2nd harmonic). Touch at 1/3 — even higher (3rd harmonic). \"The string can only vibrate at specific frequencies. Why?\"</p><p><strong>Direct instruction (15 min):</strong> Both ends are fixed → both must be nodes. The longest wavelength that fits: λ₁ = 2L (one antinode in the middle). f₁ = v/(2L) — the fundamental. Next: λ₂ = L (two antinodes). f₂ = v/L = 2f₁. Then λ₃ = 2L/3, f₃ = 3f₁. General: fₙ = nv/(2L). Draw each harmonic: 1st (one loop), 2nd (two loops), 3rd (three loops). n = number of antinodes = number of half-wavelengths that fit.</p><p><strong>Lab (20 min):</strong> HARMONICS ON A STRING — Vibrate a string at measured frequencies. Find f₁ (fundamental). Increase frequency: find f₂ = 2f₁, f₃ = 3f₁. Measure: L, count nodes, determine λ for each. Calculate v = fλ. Then change tension: v = √(T/μ) → higher tension → higher v → higher f₁. Students verify quantitatively.</p><p><strong>Practice (10 min):</strong> (1) A 0.6 m string, v = 300 m/s. Find f₁, f₂, f₃. (2) A guitar string plays 330 Hz as its fundamental. What frequency is the 3rd harmonic? (3) To double f₁ without changing L: what must happen to tension?</p>",
          "engagementHook": {
            "title": "GUITAR HARMONICS — TOUCHING MUSIC WITH PHYSICS",
            "content": "Pluck a guitar string open → fundamental. Touch the middle, pluck → one octave up (2nd harmonic). Touch at 1/3 → an octave + a fifth (3rd harmonic). Touch at 1/4 → two octaves (4th harmonic). \"Every musical note is a standing wave. Every harmony is a ratio of standing wave frequencies. Music IS physics.\" Students who play guitar can demonstrate. Others experiment with a monochord or sonometer."
          },
          "nos": {
            "tags": ["Patterns", "Observations", "Science as a shared endeavour"],
            "description": "Pythagoras (c. 500 BC) discovered that harmonious musical intervals correspond to simple ratios of string lengths — octave = 2:1, fifth = 3:2, fourth = 4:3. This was arguably the first quantitative law in physics. Music and physics have been intertwined for 2500 years."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe boundary conditions for strings; state fₙ = nv/(2L)",
            "AO2 — Calculate harmonic frequencies; determine wavelength from diagrams",
            "AO3 — Analyse how changing L, T, μ affects the harmonic frequencies"
          ],
          "resources": "Guitar or sonometer/monochord, vibrator + string setup, frequency generator, rulers, calculator",
          "formative": "\"A string (L = 0.8 m, v = 400 m/s). (a) Draw the first three harmonics, labelling nodes, antinodes, and λ. (b) Calculate f₁, f₂, f₃. (c) The string's tension is quadrupled. New v? New f₁? (d) A guitar string plays A4 (440 Hz) as its fundamental. The string is 65 cm long. Find v and λ₁.\""
        },
        {
          "num": 3,
          "title": "Standing Waves in Pipes — Open & Closed Ends",
          "focus": "Boundary conditions for air columns and their harmonic series",
          "minutes": 45,
          "understandings": [
            "Open end of a pipe: pressure node / displacement antinode (air is free to vibrate)",
            "Closed end of a pipe: pressure antinode / displacement node (air can't vibrate at the wall)",
            "Open-open pipe: both ends are antinodes → all harmonics: fₙ = nv/(2L), n = 1, 2, 3, ...",
            "Open-closed pipe: one antinode, one node → odd harmonics only: fₙ = nv/(4L), n = 1, 3, 5, ...",
            "Closed pipes produce only odd harmonics — this gives them a distinctive 'hollow' tone"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Blow across the top of a bottle — a tone. Cover the bottom (closed pipe): lower pitch. Open the bottom (open pipe): higher pitch and different timbre. \"Changing boundary conditions changes the harmonics allowed.\"</p><p><strong>Direct instruction (15 min):</strong> Open-open pipe: antinodes at both ends. Longest wavelength: λ₁ = 2L. f₁ = v/(2L). All harmonics present: f₂ = 2f₁, f₃ = 3f₁, etc. Same as a string (similar boundary symmetry). Open-closed pipe: antinode at open end, node at closed end. Longest wavelength: λ₁ = 4L (only quarter-wave fits). f₁ = v/(4L). Only ODD harmonics: f₃ = 3f₁, f₅ = 5f₁ (no f₂, f₄, ...). Draw each: show how the patterns fit with the boundary conditions. A closed pipe's fundamental has f₁ = v/(4L), which is HALF of an open pipe of the same length → lower pitch.</p><p><strong>Lab (15 min):</strong> RESONANCE TUBE — Hold a vibrating tuning fork over a tube partially filled with water (adjustable length). Lower the water level until resonance is heard (loudest sound). The air column length at resonance = λ/4 (first harmonic of closed pipe). Measure L. Calculate v = 4fL. Compare with accepted v_sound. Find the next resonance (3λ/4) to verify.</p><p><strong>Practice (10 min):</strong> (1) Open pipe 0.5 m: f₁ = ? (2) Closed pipe 0.5 m: f₁ = ? (3) Draw the 3rd harmonic for each. (4) Which pipe (same L) has the lower fundamental? (Closed — by factor 2.) (5) Why do closed pipes sound 'hollow'? (Missing even harmonics.)</p>",
          "engagementHook": {
            "title": "THE BOTTLE ORCHESTRA — PHYSICS OF WIND INSTRUMENTS",
            "content": "Bottles filled to different levels: shorter air column → higher pitch. Students calculate: f₁ = v/(4L) for each bottle (closed at the water surface). They tune bottles to play a scale. \"Every wind instrument — flute, trumpet, organ — works on the same principle: standing waves in air columns. The flute is an open-open pipe. A clarinet is effectively open-closed. That's why they sound different even playing the same note.\""
          },
          "nos": {
            "tags": ["Models", "Measurements", "Patterns"],
            "description": "The resonance tube experiment is one of the most elegant in school physics: you hear the resonance, measure the length, and calculate the speed of sound. It was first used by Ernst Chladni (c. 1800), who also famously visualised standing wave patterns on plates using sand — Chladni patterns."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe boundary conditions for open and closed pipes; state harmonic series for each",
            "AO2 — Calculate harmonic frequencies for both pipe types; determine v from resonance data",
            "AO3 — Analyse why closed pipes have only odd harmonics and how this affects timbre"
          ],
          "resources": "Resonance tube (glass tube + water reservoir), tuning forks (various f), ruler, bottles (various fill levels), calculator",
          "formative": "\"(a) An open pipe (L = 0.68 m, v = 340 m/s): find f₁, f₂, f₃. Draw each harmonic. (b) A closed pipe of the same length: find f₁, f₃, f₅. Draw each. (c) Which has the lower fundamental? By what factor? (d) A tuning fork (f = 512 Hz) resonates with a closed pipe at L = 16.4 cm. Calculate v_sound. (e) The next resonance occurs at L = 49.2 cm. Verify that this is 3λ/4.\""
        }
      ]
    },
    {
      "name": "Resonance & Damping",
      "color": "accent4",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Resonance & Natural Frequency",
          "focus": "When driving frequency matches natural frequency — maximum amplitude",
          "minutes": 50,
          "understandings": [
            "Every oscillating system has a natural frequency f₀ — the frequency at which it oscillates freely when disturbed",
            "When an external periodic force (driving force) is applied at frequency f_d, the system oscillates at f_d",
            "Resonance occurs when f_d = f₀ — the amplitude of oscillation is maximum",
            "At resonance, the driving force transfers energy to the system most efficiently",
            "Examples of useful resonance: musical instruments, radio tuning, MRI, microwave ovens",
            "Examples of destructive resonance: Tacoma Narrows Bridge, wine glass shattering, building collapse in earthquakes"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hang several pendulums of different lengths from a horizontal rod. Shake the rod at a specific frequency. Only the pendulum whose natural frequency matches the driving frequency responds strongly — it resonates. The others barely move. \"The rod is shouting at the same frequency. Only one pendulum is listening.\"</p><p><strong>Direct instruction (15 min):</strong> Define natural frequency f₀: the frequency a system oscillates at when displaced and released. Driving frequency f_d: the frequency of the applied force. When f_d = f₀: resonance. Amplitude builds up because each push arrives at exactly the right time to add energy. Draw the resonance curve: amplitude vs f_d. Peak at f₀. Narrower peak = less damping (sharper resonance). Wider peak = more damping (broader, lower peak).</p><p><strong>Demo (10 min):</strong> (1) Barton's pendulums: one driver pendulum drives several others of different lengths. Only the matching-length one resonates. (2) Wine glass resonance (video or live): sing/play the right frequency → glass vibrates with increasing amplitude → shatters. \"The sound wave pushes the glass at its natural frequency. Each cycle adds energy. Eventually the glass can't hold it.\"</p><p><strong>Examples (10 min):</strong> Useful: (a) Radio tuning — the receiver circuit resonates at the station's frequency. (b) Musical instruments — strings/pipes resonate at harmonic frequencies. (c) MRI — hydrogen nuclei resonate at specific radio frequencies. Destructive: (a) Tacoma Narrows Bridge (1940) — wind at the bridge's f₀ → catastrophic oscillation → collapse. (b) Soldiers break step on bridges to avoid resonance. (c) Earthquake frequencies matching building f₀ → selective destruction.</p><p><strong>Practice (10 min):</strong> Sketch resonance curves for different damping levels. Identify resonance in real scenarios. Determine f₀ from given data.</p>",
          "engagementHook": {
            "title": "THE WINE GLASS SHATTER & THE BRIDGE THAT DANCED",
            "content": "Show the Tacoma Narrows Bridge video: a massive bridge oscillating in the wind like a ribbon, then collapsing. \"Wind at the right frequency + low damping = catastrophic resonance.\" Then the wine glass: a singer hits the exact natural frequency → the glass vibrates more and more → SMASH. \"Same physics. The bridge is a big wine glass. The wind is the singer.\" Students calculate: a wine glass with f₀ ≈ 500 Hz — what wavelength of sound causes this? (λ = 0.68 m.)"
          },
          "nos": {
            "tags": ["Observations", "Global impact", "Patterns"],
            "description": "The Tacoma Narrows collapse (1940) transformed engineering: all bridges are now analysed for resonant frequencies. The disaster converted a physics concept into an engineering requirement. Destructive resonance also affects buildings in earthquakes — seismic engineering uses physics to save lives."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Caring", "Knowledgeable"],
          "ao": [
            "AO1 — Define natural frequency and resonance; give examples of useful and destructive resonance",
            "AO2 — Sketch resonance curves; identify conditions for resonance",
            "AO3 — Analyse real-world resonance scenarios"
          ],
          "resources": "Barton's pendulums, wine glass shattering video, Tacoma Narrows video, resonance curve diagrams",
          "formative": "\"(a) Define resonance. (b) A child on a swing has f₀ = 0.5 Hz. Explain why pushing at 0.5 Hz builds amplitude but pushing at 0.8 Hz doesn't. (c) Sketch a resonance curve (amplitude vs f_d). Label f₀ and the peak. (d) Redraw the curve with MORE damping — what changes? (e) Soldiers break step on bridges. Explain why using physics.\""
        },
        {
          "num": 2,
          "title": "Damping — Light, Critical & Heavy",
          "focus": "How energy loss affects oscillation amplitude and resonance curves",
          "minutes": 50,
          "understandings": [
            "Damping: the progressive loss of energy (and reduction in amplitude) of an oscillation due to resistive forces",
            "Light damping: amplitude decreases gradually over many oscillations (system oscillates near f₀ with slowly decaying A)",
            "Critical damping: system returns to equilibrium as fast as possible WITHOUT oscillating (e.g., car shock absorbers)",
            "Heavy (over-)damping: system returns to equilibrium very slowly without oscillating (e.g., door closer mechanism)",
            "Effect on resonance curve: more damping → lower peak amplitude, broader peak, f_resonance shifts slightly below f₀"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Push a child on a swing, then stop pushing. What happens?\" Amplitude decreases — the swing eventually stops. \"Where does the energy go?\" Air resistance, friction at the pivot. This is damping. Show three scenarios: (a) the swing (light damping — oscillates many times), (b) a car suspension (critical — returns to equilibrium in ~1 bounce), (c) a door closer (heavy — returns slowly with no oscillation).</p><p><strong>Direct instruction (15 min):</strong> Draw x-t graphs for each: Light: sinusoidal oscillation with exponentially decreasing amplitude envelope. Critical: fastest return to equilibrium without crossing it. Heavy: slow exponential approach — slower than critical. On the resonance curve: no damping → infinite peak at f₀ (theoretical). Light damping → tall, narrow peak. Heavy damping → short, broad peak. The peak also shifts slightly left (f_resonance < f₀) with damping, but this shift is small for light damping.</p><p><strong>Demo (5 min):</strong> Pendulum in air (light damping) vs in water (heavy damping) vs pendulum with a large card attached (somewhere between). Students observe the amplitude decay rate for each. \"The card acts like a brake — it increases the damping.\"</p><p><strong>Application (10 min):</strong> Car suspension: MUST be critically damped. Underdamped: car bounces after every bump (dangerous). Overdamped: car responds too slowly to bumps (uncomfortable). Critical: one smooth return. Earthquake-resistant buildings: dampers absorb seismic energy, reducing resonant amplitude. Electrical circuits: radio receivers use controlled damping (Q factor) to select one station frequency.</p><p><strong>Graphical skills (10 min):</strong> Students draw: (a) x-t for light, critical, and heavy damping from the same initial displacement. (b) Resonance curves for three damping levels on the same axes. (c) Label f₀ and f_resonance (noting the slight shift with damping).</p><p><strong>Practice (5 min):</strong> Classify damping types from graphs and real scenarios.</p>",
          "engagementHook": {
            "title": "THE CAR SUSPENSION TEST — BOUNCE OR NOT?",
            "content": "\"Push down the corner of a car and release. It should return smoothly in one motion (critical damping). If it bounces: shock absorbers are worn (underdamped). If it rises very slowly: too stiff (overdamped).\" Students can test this on a teacher's car in the parking lot. \"Your comfort and safety on every road depend on getting damping exactly right. Too little: you bounce off the road. Too much: you can't react to bumps.\""
          },
          "nos": {
            "tags": ["Models", "Technology", "Patterns"],
            "description": "Damping models are used across physics and engineering: mechanical (shock absorbers), electrical (circuit resistance), acoustic (concert hall design), and even nuclear (reactor control). The mathematics of damping (exponential decay of amplitude) is identical in all these systems — another example of the universality of physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — Define light, critical, and heavy damping; describe their effects on oscillation and resonance",
            "AO2 — Sketch x-t graphs for each damping type; sketch resonance curves for different damping levels",
            "AO3 — Analyse real-world damping applications (car suspension, earthquake engineering)"
          ],
          "resources": "Pendulum, water tub (for heavy damping demo), card attached to pendulum (variable damping), car suspension video, resonance curve overlays",
          "formative": "\"(a) Sketch x-t graphs for light, critical, and heavy damping from the same initial displacement. (b) On the same resonance curve axes, draw curves for no damping, light damping, and heavy damping. Label f₀. (c) A car bounces 3 times after hitting a pothole. Is the damping light, critical, or heavy? What should be done? (d) Explain why earthquake-resistant buildings have dampers that are designed to be slightly overdamped rather than underdamped.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "C.1 Simple Harmonic Motion", "question": "How does the natural frequency of a system (f₀) relate to the SHM analysis of that system (ω = 2πf₀)?" },
    { "topic": "C.2 Wave Model", "question": "How does v = fλ connect to standing wave frequencies? If v changes (different medium), how do the harmonics change?" },
    { "topic": "C.3 Wave Phenomena", "question": "How does the superposition principle (C.3) explain the formation of standing waves?" },
    { "topic": "B.2 Greenhouse Effect", "question": "What relevance do resonance and natural frequency have to molecular absorption of IR radiation and climate change?" },
    { "topic": "B.5 Current and Circuits", "question": "How does resonance in electrical LC circuits parallel mechanical resonance in springs and pendulums?" },
    { "topic": "IB Linking", "question": "How does the application of force result in resonance within a system? What are the conditions for maximum energy transfer?" }
  ]
},
"C5": {
  "title": "Doppler Effect",
  "code": "C.5",
  "theme": "C",
  "level": "SL + HL",
  "recommendedHours": 4,
  "recommendedMinutes": 240,
  "guidingQuestions": [
    "How can the Doppler effect be explained both qualitatively and quantitatively?",
    "What are some practical applications of the Doppler effect?",
    "Why are there differences when applying the Doppler effect to different types of waves?"
  ],
  "groups": [
    {
      "name": "Doppler Effect Concepts (SL)",
      "color": "accent3",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "The Doppler Effect — Qualitative Understanding",
          "focus": "Why pitch changes when a source moves — wavefront compression and stretching",
          "minutes": 45,
          "understandings": [
            "The nature of the Doppler effect for sound waves and electromagnetic waves",
            "When a source moves TOWARD an observer: wavefronts are compressed → shorter λ → higher f (higher pitch for sound, blueshift for light)",
            "When a source moves AWAY: wavefronts are stretched → longer λ → lower f (lower pitch for sound, redshift for light)",
            "Representation of the Doppler effect in terms of wavefront diagrams showing compressed and stretched wavefronts"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Play audio of an ambulance siren passing — the classic pitch drop. \"The siren's actual frequency doesn't change. YOUR perception changes. Why?\" As the ambulance approaches, it 'catches up' with its own waves, compressing them. As it recedes, it stretches them. This is the Doppler effect.</p><p><strong>Direct instruction (15 min):</strong> Draw wavefront diagrams: (a) Stationary source: concentric circles, equally spaced. (b) Source moving right: wavefronts compressed ahead (shorter λ, higher f), stretched behind (longer λ, lower f). The source is NOT between the centres of the circles — it has moved since emitting each wavefront. Key: the wave speed doesn't change (it's set by the medium), but λ and f as perceived by the observer DO change. For EM waves: same effect but no medium needed. Light from an approaching star: blueshift (shorter λ). Receding star: redshift (longer λ).</p><p><strong>Demo (10 min):</strong> (1) Swing a buzzer on a string in a circle above your head — students hear the pitch rise and fall as it approaches and recedes. (2) PhET Doppler simulation: students adjust source speed and observe wavefront compression/stretching in real time.</p><p><strong>Graphical skills (10 min):</strong> Students draw wavefront diagrams for: (a) stationary source, (b) source at 0.3v, (c) source at 0.8v. Observe: faster source → more compression → bigger frequency shift. \"What happens at v = v_sound?\" All wavefronts pile up → sonic boom (Mach cone — mentioned qualitatively).</p><p><strong>Practice (5 min):</strong> Sketch wavefronts and predict higher/lower pitch for different scenarios.</p>",
          "engagementHook": {
            "title": "THE AMBULANCE SIREN — PHYSICS YOU HEAR EVERY DAY",
            "content": "Play the sound: eeeeEEEEEEeeeee. The pitch rises as the ambulance approaches, drops as it passes. \"The siren plays ONE frequency the entire time. Your ears hear TWO — one higher (approach) and one lower (recede). The Doppler effect is the universe's way of telling you whether something is coming or going.\" Students have heard this their whole lives — now they understand why."
          },
          "nos": {
            "tags": ["Observations", "Models", "Patterns"],
            "description": "Christian Doppler proposed this effect in 1842 for light from stars. Christoph Buys Ballot confirmed it in 1845 using musicians playing on a moving train — listeners on the platform heard the pitch change. This is a rare example of a theoretical prediction confirmed by a creative, low-tech experiment."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Communicator"],
          "ao": [
            "AO1 — Describe the Doppler effect for sound and EM waves",
            "AO2 — Draw wavefront diagrams for moving sources",
            "AO3 — Predict whether observed frequency is higher or lower in given scenarios"
          ],
          "resources": "Ambulance siren audio clip, buzzer on string, PhET Doppler simulation, whiteboard for wavefront diagrams",
          "formative": "\"(a) Draw wavefront diagrams for a source at rest and a source moving at 0.5v_sound to the right. Label compressed and stretched regions. (b) An observer is ahead of the moving source. Is the observed frequency higher or lower than emitted? (c) An observer is behind. Higher or lower? (d) At what point during the ambulance pass does the pitch change most abruptly?\""
        },
        {
          "num": 2,
          "title": "Applications — Radars, Redshift, Ultrasound & Spectral Lines",
          "focus": "Real-world uses of the Doppler effect across the spectrum",
          "minutes": 40,
          "understandings": [
            "Applications: speed radars (police), weather radar, Doppler ultrasound (blood flow), redshift of galaxies, spectral line analysis of star motion",
            "Spectral line shifts provide information about the motion of stars and galaxies: lines shifted to red → receding, lines shifted to blue → approaching",
            "Hubble's law: redshift of galaxies is proportional to distance → the universe is expanding",
            "Doppler ultrasound: reflected sound from moving blood cells has shifted frequency → measures blood flow speed"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Walk through each application: (a) Police radar: emit microwaves at a car, reflected waves have shifted frequency → calculate car speed from Δf. (b) Weather radar: microwaves reflected from rain droplets → Doppler shift reveals wind speed and direction inside storms. (c) Medical ultrasound: sound reflected from moving blood → Δf gives blood flow speed. Blocked artery → abnormal flow pattern. (d) Astronomy: hydrogen emits/absorbs at known wavelengths (spectral lines). If a star's lines are shifted to the red → it's moving away. Blue → approaching. The amount of shift gives the speed.</p><p><strong>Hubble's discovery (10 min):</strong> Edwin Hubble (1929): nearly all galaxies show redshift. More distant galaxies → larger redshift. Conclusion: the universe is EXPANDING. Every galaxy is moving away from every other. \"The redshift of distant galaxies is the most important Doppler measurement ever made — it revealed the expansion of the universe and led to the Big Bang theory.\"</p><p><strong>Data analysis (10 min):</strong> Give students spectral data: hydrogen Balmer series expected wavelengths vs observed wavelengths from a distant galaxy. Calculate Δλ/λ for each line. Verify they're all redshifted by the same fraction (z = v/c). Calculate the recession velocity.</p><p><strong>Practice (5 min):</strong> Application identification and qualitative questions.</p>",
          "engagementHook": {
            "title": "THE UNIVERSE IS RUNNING AWAY — HUBBLE'S REDSHIFT",
            "content": "\"Every galaxy is moving away from us. The further it is, the faster it moves. This isn't because we're special — EVERYTHING is moving away from everything else. Space itself is expanding.\" Show Hubble's original data (1929): galaxy velocity vs distance. The straight line changed cosmology forever. Students calculate: a galaxy at 100 Mpc (megaparsecs) recedes at ~7000 km/s. \"That's 2.3% of the speed of light — and that's a nearby galaxy.\""
          },
          "nos": {
            "tags": ["Observations", "Theories", "Global impact"],
            "description": "Hubble's discovery of the expanding universe (1929) is one of the most profound in all of science. It came from a simple observation — spectral lines are shifted — and a simple equation — Δλ/λ = v/c. The Big Bang theory, dark energy, and the ultimate fate of the universe all trace back to Doppler measurements of distant galaxies."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Knowledgeable", "Open-minded", "Inquirer"],
          "ao": [
            "AO1 — Describe applications of the Doppler effect (radar, ultrasound, redshift, spectral lines)",
            "AO2 — Explain how spectral line shifts reveal stellar motion",
            "AO3 — Analyse redshift data to determine recession velocity"
          ],
          "resources": "Spectral data tables, Hubble's original graph, hydrogen spectral line reference, calculator",
          "formative": "\"The hydrogen Balmer alpha line has rest wavelength 656.3 nm. A galaxy's spectrum shows this line at 659.6 nm. (a) Is this redshift or blueshift? Is the galaxy approaching or receding? (b) Calculate Δλ/λ. (c) Estimate the galaxy's recession velocity using v/c ≈ Δλ/λ. (d) Name two other applications of the Doppler effect and explain how each works.\""
        },
        {
          "num": 3,
          "title": "EM Doppler Approximation — Δf/f ≈ v/c",
          "focus": "The simplified equation for electromagnetic waves at non-relativistic speeds",
          "minutes": 35,
          "understandings": [
            "For electromagnetic waves, the Doppler effect requires the approximation equation: Δf/f ≈ Δλ/λ ≈ v/c (valid when v << c)",
            "This approximation works because EM waves have no medium — only relative velocity matters",
            "Redshift parameter z = Δλ/λ = v/c (for v << c)",
            "For sound waves, the full equations (AHL) distinguish between source and observer motion — for EM waves, only relative motion matters"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> For EM waves: Δf/f = Δλ/λ ≈ v/c. This is simpler than sound because there's no medium — only the relative velocity between source and observer matters. v is positive for recession (redshift), negative for approach (blueshift). This works only when v << c. For v near c: need the full relativistic Doppler formula (not required). Define z = Δλ/λ = v/c — the redshift parameter used in cosmology.</p><p><strong>Worked examples (15 min):</strong> (1) A star moves away at 3 × 10⁶ m/s. z = v/c = 0.01. A line at 500 nm shifts to 505 nm. (2) A galaxy has z = 0.05: recession speed = 0.05c = 1.5 × 10⁷ m/s. (3) Police radar: f = 10 GHz, car at 30 m/s. Δf = fv/c = 10 × 10⁹ × 30/(3 × 10⁸) = 1000 Hz. The radar detects a 1 kHz shift. (4) An approaching star: Δλ = −0.3 nm on a 600 nm line → v = cΔλ/λ = 1.5 × 10⁵ m/s approaching.</p><p><strong>Practice (10 min):</strong> EM Doppler calculations for stars, galaxies, and radar applications.</p>",
          "engagementHook": {
            "title": "CATCHING SPEEDERS WITH PHYSICS — THE RADAR GUN",
            "content": "\"A radar gun sends microwaves at 10 GHz. They bounce off your car and return with a frequency shift of 2000 Hz. How fast are you going?\" Δf = 2fv/c (factor 2 for round trip). v = Δf × c / (2f) = 2000 × 3×10⁸ / (2 × 10¹⁰) = 30 m/s = 108 km/h. \"You're 8 km/h over the limit. That's a ticket.\" Students calculate their own speed from a hypothetical radar reading."
          },
          "nos": {
            "tags": ["Measurements", "Technology", "Patterns"],
            "description": "The EM Doppler equation is an approximation — valid for v << c. At relativistic speeds, the full formula includes the Lorentz factor γ. The approximation is good enough for all everyday applications (radar, stellar spectroscopy of nearby stars) but fails for distant galaxies with z > 0.1. Knowing when an approximation is valid is a key scientific skill."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State Δf/f ≈ v/c for EM waves; define redshift z",
            "AO2 — Apply the approximation to calculate v, Δf, Δλ, or z",
            "AO3 — Analyse when the approximation is valid (v << c) and when it fails"
          ],
          "resources": "Calculators, spectral shift data, radar gun specifications",
          "formative": "\"(a) A star recedes at 6 × 10⁵ m/s. Find z and the shift of a 486 nm line. (b) A radar gun (24 GHz) detects Δf = 4800 Hz from a car. Find the car's speed (account for the factor of 2 for reflection). (c) A galaxy has z = 0.03. Find its recession speed. Is the approximation valid? (d) At what value of z does the approximation break down (say, 10% error)? Why?\""
        }
      ]
    },
    {
      "name": "Quantitative Doppler for Sound (AHL)",
      "color": "accent",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Doppler Equations for Sound — Moving Source & Observer (AHL)",
          "focus": "f' = fv/(v ± v_s) and f' = f(v ± v_o)/v",
          "minutes": 55,
          "understandings": [
            "Moving source: f' = fv/(v ∓ v_s) — source approaching: f' = fv/(v − v_s) (higher f); source receding: f' = fv/(v + v_s) (lower f)",
            "Moving observer: f' = f(v ± v_o)/v — observer approaching: f' = f(v + v_o)/v (higher f); observer receding: f' = f(v − v_o)/v (lower f)",
            "For sound, moving source and moving observer give DIFFERENT results (unlike EM) because sound has a medium",
            "v = speed of sound in the medium (fixed), v_s = speed of source, v_o = speed of observer"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> Why sound is different from EM: sound has a medium (air). Moving the source compresses/stretches the wavefronts in the medium. Moving the observer changes how many wavefronts they encounter per second. These are physically different! Moving source toward: the source 'chases' its own waves. In one period T, it moves v_sT. The wavelength ahead is λ' = λ − v_sT = (v − v_s)/f. So f' = v/λ' = fv/(v − v_s). Moving observer toward: the observer encounters wavefronts faster. Relative speed of waves toward observer = v + v_o. So f' = (v + v_o)/λ = f(v + v_o)/v. Key difference: source moving at v_s ≠ observer moving at v_o even if v_s = v_o. (For EM: they're identical because there's no medium.)</p><p><strong>Worked examples (20 min):</strong> (1) Ambulance (f = 800 Hz, v_s = 30 m/s) approaches. v_sound = 340 m/s. f' = 800 × 340/(340 − 30) = 877 Hz. Receding: f' = 800 × 340/(340 + 30) = 735 Hz. Shift: from 877 to 735 Hz as it passes. (2) Observer runs at 5 m/s toward a stationary 440 Hz source: f' = 440(340 + 5)/340 = 446.5 Hz. (3) Both moving: source at 20 m/s toward observer running at 10 m/s toward source: f' = f(v + v_o)/(v − v_s) = f × 350/320. (4) A train whistle: observer on platform hears 900 Hz as train approaches, 800 Hz as it recedes. Find v_s. (Use ratio: f_approach/f_recede = (v + v_s)/(v − v_s) → solve for v_s.)</p><p><strong>Practice (15 min):</strong> Mixed problems with source moving, observer moving, and both moving.</p>",
          "engagementHook": {
            "title": "THE TRAIN WHISTLE PROBLEM — FINDING SPEED FROM PITCH",
            "content": "\"A train blows its whistle (constant f). You stand on the platform and hear 950 Hz as it approaches, 850 Hz as it recedes. Can you find the train's speed WITHOUT seeing it?\" YES: f_toward/f_away = (v + v_s)/(v − v_s). 950/850 = (340 + v_s)/(340 − v_s). Solve: v_s = 18.9 m/s ≈ 68 km/h. \"You measured the train's speed using only your ears and mathematics.\""
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "The asymmetry between moving source and moving observer for sound — but not for light — puzzled physicists for decades. It was one of the clues that led Einstein to special relativity: if there's no preferred reference frame for EM waves (no aether/medium), then only relative motion should matter. The Doppler effect for sound vs light encodes a deep difference in the physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State Doppler equations for moving source and moving observer",
            "AO2 — Apply f' = fv/(v ± v_s) and f' = f(v ± v_o)/v to calculate observed frequencies",
            "AO3 — Analyse why moving source ≠ moving observer for sound but not for EM"
          ],
          "resources": "Calculators, Doppler equation reference card, train whistle audio clip",
          "formative": "\"(a) A police siren (f = 700 Hz) approaches at 25 m/s. Find f' heard by a stationary observer (v = 340 m/s). (b) The police car passes and recedes. Find f'. (c) An observer runs at 8 m/s toward a stationary 500 Hz source. Find f'. (d) Source at 40 m/s toward observer running at 10 m/s away. Find f'. (e) Why do the source-moving and observer-moving formulas give slightly different results for the same speeds?\""
        },
        {
          "num": 2,
          "title": "Doppler Problem Solving & Velocity Determination (AHL)",
          "focus": "Using measured frequency shifts to calculate source or observer speeds",
          "minutes": 65,
          "understandings": [
            "Determine the velocity of a source or observer from measured frequency or wavelength changes",
            "Combine Doppler equations with other wave concepts: v = fλ, reflection (radar), spectral analysis",
            "For reflected waves (radar/ultrasound): the Doppler shift is doubled (signal hits moving target and bounces back)",
            "Apply Doppler analysis to complex scenarios: moving source + moving observer, reflected waves, sequential observations"
          ],
          "teachingStrategy": "<p><strong>Velocity determination (15 min):</strong> Rearranging Doppler equations to find v_s or v_o: Given f, f', v → solve for v_s or v_o. From two observations (approach + recede): f_toward/f_away = (v + v_s)/(v − v_s) → eliminates f, finds v_s directly. This is extremely useful: you don't need to know the emitted frequency, only the ratio of received frequencies.</p><p><strong>Reflected waves (10 min):</strong> Radar/ultrasound: signal hits a moving object and reflects back. The object acts as BOTH a moving observer (receiving the signal) and a moving source (re-emitting the reflection). Result: the Doppler shift is approximately doubled. For radar: Δf ≈ 2fv/c (used in the SL section). For sound ultrasound: Δf ≈ 2fv_blood/v_sound. Doppler ultrasound measures blood velocity from this shift.</p><p><strong>Complex problems (25 min):</strong> Groups tackle multi-step problems: (1) Two trains approach each other. Train A (f = 500 Hz, v_A = 30 m/s), train B's observer. Find f' heard on train B (use combined formula). (2) Ultrasound (f = 5 MHz) reflects from blood moving at 0.3 m/s in an artery. v_sound = 1540 m/s. Find Δf. (3) A bat emits 40 kHz, flies at 10 m/s toward a wall. The echo returns. What frequency does the bat hear? (Doppler shift twice: outgoing + returning.) (4) An astronomer measures a star's Hα line (656.3 nm) oscillating between 656.1 and 656.5 nm over a period of 4 days. What does this tell us? (Binary star system — the star orbits a companion.)</p><p><strong>Exam practice (10 min):</strong> 3 timed IB-style Doppler problems.</p><p><strong>Wrap-up (5 min):</strong> \"The Doppler effect lets you measure speed WITHOUT touching or seeing the object — just by listening to its waves. This makes it one of the most powerful measurement tools in physics, medicine, and astronomy.\"</p>",
          "engagementHook": {
            "title": "THE BAT — NATURE'S DOPPLER RADAR",
            "content": "\"A bat emits ultrasound at 40 kHz while flying at 10 m/s toward a moth. The sound hits the moth and reflects back. The bat hears a HIGHER frequency than it emitted — the Doppler shift tells it the moth's distance AND speed. Bats do this calculation 200 times per second while navigating in total darkness.\" Students calculate: what frequency does the bat hear? (Two Doppler shifts: bat as moving source toward wall, then wall as 'stationary source' reflected to moving observer.) The answer: ~42.4 kHz."
          },
          "nos": {
            "tags": ["Technology", "Observations", "Models"],
            "description": "Doppler radar, medical ultrasound, and bat echolocation all use the same physics — reflected waves with frequency shifts. Nature evolved Doppler navigation 50 million years before humans invented radar. Biomimicry — learning from nature's solutions — is an active area of engineering research."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Inquirer", "Knowledgeable"],
          "ao": [
            "AO2 — Determine velocity from frequency/wavelength data; apply double Doppler shift for reflected waves",
            "AO3 — Analyse complex Doppler scenarios including combined motion and reflection"
          ],
          "resources": "Calculators, bat echolocation video, Doppler ultrasound diagram, exam-style problem sets",
          "formative": "\"(a) A train whistle: observer hears 880 Hz approaching, 780 Hz receding. Find v_s (v_sound = 340 m/s). (b) Medical ultrasound (f = 4 MHz, v = 1540 m/s) reflects from blood at 0.5 m/s. Find Δf. (c) A bat (v = 15 m/s, f = 45 kHz) flies toward a wall. What frequency does the echo have? Show both Doppler shifts. (d) A star's spectral lines oscillate with Δλ/λ = ±0.001 over 10 days. What is happening and what is the star's orbital speed?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "C.2 Wave Model", "question": "How does v = fλ underpin the Doppler equations? If v stays constant but λ changes, how does f change?" },
    { "topic": "C.3 Wave Phenomena", "question": "How does the wavefront diagram for a moving source relate to the concepts of wavefronts and rays?" },
    { "topic": "A.5 Special Relativity (HL)", "question": "Why does the EM Doppler effect depend only on relative velocity, while sound distinguishes source from observer motion?" },
    { "topic": "E.1 Structure of the Atom", "question": "How do shifts in spectral lines provide information about the motion of astronomical objects?" },
    { "topic": "E.5 Fusion and Stars", "question": "How is the Doppler effect used to detect exoplanets via the radial velocity method?" },
    { "topic": "IB Linking", "question": "Why are there differences when applying the Doppler effect to sound waves versus electromagnetic waves?" }
  ]
},
"D1": {
  "title": "Gravitational Fields",
  "code": "D.1",
  "theme": "D",
  "level": "SL + HL",
  "recommendedHours": 12,
  "recommendedMinutes": 720,
  "guidingQuestions": [
    "How are the properties of a gravitational field quantified?",
    "How does an understanding of gravitational fields allow for humans to explore the solar system?"
  ],
  "groups": [
    {
      "name": "Newton's Gravitation & Kepler's Laws (SL)",
      "color": "accent5",
      "totalMinutes": 300,
      "subtopics": [
        {
          "num": 1,
          "title": "Kepler's Three Laws of Orbital Motion",
          "focus": "The empirical laws that describe how planets move",
          "minutes": 55,
          "understandings": [
            "Kepler's 1st law: planets orbit the Sun in ellipses with the Sun at one focus",
            "Kepler's 2nd law: a line from the Sun to a planet sweeps equal areas in equal times (faster when closer)",
            "Kepler's 3rd law: T² ∝ r³ — the square of the orbital period is proportional to the cube of the mean orbital radius",
            "Kepler's laws are EMPIRICAL — derived from observation. Newton later explained WHY they work using his law of gravitation"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"For 2000 years, people tried to explain planetary motion. Circles didn't work. Ptolemy added epicycles — circles on circles. Then Kepler spent 8 years analysing Tycho Brahe's data and found three simple laws that described everything.\" Show the elliptical orbit with the Sun at one focus — not the centre.</p><p><strong>Direct instruction (20 min):</strong> 1st law: orbits are ellipses. For most planets, the eccentricity is small (nearly circular), but comets have highly elliptical orbits. 2nd law: equal areas in equal times. When a planet is CLOSER to the Sun, it moves FASTER (speeds up near perihelion, slows near aphelion). This conserves angular momentum (link A.4). 3rd law: T² = kr³ (the constant k is the same for all objects orbiting the same central body). For the solar system: T²/r³ = 4π²/(GM_Sun). Derive this from Newton's law + circular orbit: GMm/r² = mv²/r → v = 2πr/T → T² = 4π²r³/(GM).</p><p><strong>Data analysis (15 min):</strong> Give students planetary data: orbital radius and period for all 8 planets. Plot T² vs r³ — should be a straight line through the origin. Gradient = 4π²/(GM_Sun). Extract M_Sun from the gradient. \"You just weighed the Sun using a ruler and a graph.\"</p><p><strong>Worked examples (10 min):</strong> (1) Mars: r = 1.52 AU, T = ? using T²/r³ = 1 (in AU-year units). T = 1.52^(3/2) = 1.87 years. (2) A satellite orbits Earth at r = 42,200 km. Find T. (3) If T = 90 min, find the orbital radius (low Earth orbit).</p><p><strong>Practice (5 min):</strong> T² vs r³ calculations.</p>",
          "engagementHook": {
            "title": "WEIGHING THE SUN WITH A GRAPH",
            "content": "Students plot T² vs r³ for all planets. The straight line gives gradient = 4π²/(GM_Sun). From the gradient: M_Sun = 4π²/(G × gradient) ≈ 2 × 10³⁰ kg. \"You just determined the mass of the Sun — 330,000 times Earth's mass — using only orbital data. No spaceship needed. Kepler's 3rd law is a cosmic weighing scale.\""
          },
          "nos": {
            "tags": ["Observations", "Patterns", "Theories"],
            "description": "Kepler spent 8 years (1601-1609) analysing Tycho Brahe's observational data before discovering his laws. He tried circular orbits first, failed, and only reluctantly accepted ellipses. This persistence — and willingness to abandon a beautiful model (circles) when data demanded it — is the essence of the scientific method."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — State Kepler's three laws",
            "AO2 — Apply T² ∝ r³ to calculate orbital periods and radii",
            "AO3 — Analyse planetary data to verify Kepler's 3rd law and extract M_Sun"
          ],
          "resources": "Planetary data table (r, T for 8 planets), graph paper, calculators, orbital simulation",
          "formative": "\"Planet X has orbital radius 4 AU. (a) Find its period in years using T² ∝ r³. (b) A moon orbits Jupiter at r = 4.2 × 10⁸ m with T = 1.77 days. Find M_Jupiter. (c) Why does Kepler's 3rd law constant differ for Jupiter's moons vs the Sun's planets? (d) Mars moves faster at perihelion than aphelion. Which law explains this?\""
        },
        {
          "num": 2,
          "title": "Newton's Universal Law of Gravitation — F = Gm₁m₂/r²",
          "focus": "The force that governs the universe — and why apples fall",
          "minutes": 60,
          "understandings": [
            "Newton's universal law of gravitation: F = Gm₁m₂/r², where G = 6.67 × 10⁻¹¹ N m² kg⁻²",
            "The force is attractive, acts along the line joining the centres, and obeys Newton's 3rd law (equal forces on both masses)",
            "r is the distance between the CENTRES of mass of the two bodies",
            "Extended bodies of uniform density can be treated as point masses with all mass concentrated at the centre",
            "Newton's law EXPLAINS Kepler's laws — it provides the 'why' behind the 'what'"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Newton supposedly watched an apple fall and asked: does the same force reach the Moon?\" The apple falls because Earth pulls it. The Moon also 'falls' — but it moves sideways fast enough to keep missing Earth. That sideways + falling motion IS an orbit. \"The same force that drops an apple holds the Moon in orbit.\"</p><p><strong>Direct instruction (20 min):</strong> F = Gm₁m₂/r². G is the universal gravitational constant — the same everywhere in the universe. The force is: (a) attractive (always pulls), (b) proportional to BOTH masses (double one → double F), (c) inversely proportional to r² (double distance → quarter F). Obeys Newton's 3rd law: Earth pulls you with F = mg; you pull Earth with the SAME force (but Earth barely accelerates because its mass is enormous). Extended bodies: a uniform sphere gravitationally acts as if all its mass is at the centre — Newton proved this and it took him 20 years.</p><p><strong>Worked examples (20 min):</strong> (1) Force between Earth (6 × 10²⁴ kg) and Moon (7.3 × 10²² kg) at 3.84 × 10⁸ m: F = 1.98 × 10²⁰ N. (2) Force between two 70 kg people 1 m apart: F = 3.27 × 10⁻⁷ N — negligible. \"Gravity is incredibly weak between small objects.\" (3) At Earth's surface: F = GMm/R² = mg → g = GM/R² = 9.8 m/s². (4) At altitude h: g = GM/(R+h)². At 400 km (ISS): g = 8.7 m/s². \"Astronauts aren't weightless because gravity is zero — it's still 89% of surface value! They're in FREE FALL.\"</p><p><strong>Practice (15 min):</strong> Force calculations, deriving g at different altitudes, explaining ISS 'weightlessness.'</p>",
          "engagementHook": {
            "title": "THE APPLE, THE MOON & THE ISS — ONE FORCE RULES ALL",
            "content": "\"At the ISS (400 km up), g = 8.7 m/s² — that's 89% of surface gravity. Astronauts are NOT weightless because gravity disappeared. They're weightless because they're FALLING — along with the station. Everything inside falls at the same rate, so nothing pushes on anything else.\" Calculate g at ISS altitude. Students are shocked it's so close to 9.8. \"Weightlessness is free fall, not zero gravity.\""
          },
          "nos": {
            "tags": ["Theories", "Observations", "Patterns"],
            "description": "Newton unified terrestrial gravity (apples) with celestial gravity (Moon, planets) — perhaps the greatest unification in physics until Maxwell. His law explained Kepler's empirical observations from first principles. Henry Cavendish measured G in 1798 using a torsion balance — 'weighing the Earth' in a laboratory."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State Newton's law of gravitation; define G",
            "AO2 — Calculate gravitational force between two masses; derive g = GM/r²",
            "AO3 — Analyse why ISS astronauts experience weightlessness despite strong gravity"
          ],
          "resources": "Calculators, planetary mass/radius data, ISS altitude data, Cavendish experiment video/diagram",
          "formative": "\"(a) Calculate F between Earth and the Sun (M_Sun = 2 × 10³⁰, r = 1.5 × 10¹¹ m). (b) Two asteroids (m₁ = 10⁶ kg, m₂ = 2 × 10⁶ kg) are 500 m apart. Find F. (c) Calculate g at the surface of Mars (M = 6.4 × 10²³ kg, R = 3.4 × 10⁶ m). (d) At what altitude above Earth is g = 4.9 m/s² (half surface value)?\""
        },
        {
          "num": 3,
          "title": "Gravitational Field Strength & Field Lines",
          "focus": "g = GM/r² — the field concept and how to visualise it",
          "minutes": 55,
          "understandings": [
            "Gravitational field strength g at a point: the force per unit mass experienced by a small test mass at that point",
            "g = F/m = GM/r² — a vector pointing toward the mass creating the field",
            "Gravitational field lines: arrows showing the direction of the force on a test mass",
            "Radial field (around a sphere): lines point inward toward the centre, getting further apart with distance (weaker field)",
            "Uniform field (close to a massive surface): parallel, equally-spaced, vertical lines (g ≈ constant)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> The field concept: instead of asking 'what force does mass M exert on mass m?', ask 'what field does M create at every point in space?' Then any mass m placed in the field experiences F = mg. g = GM/r² is the field strength — it depends only on M and r, not on the test mass. Direction: toward M. At Earth's surface: g = 9.8 N/kg = 9.8 m/s² (same number, different units). Field lines: arrows pointing in the direction of g. Around a sphere: radial lines pointing inward. Closer lines = stronger field. Near a large flat surface: lines are parallel and equally spaced = uniform field (the approximation used in A.1/A.2).</p><p><strong>Demo (10 min):</strong> Draw field lines for: (a) single spherical mass — radial inward, (b) near Earth's surface — uniform parallel downward, (c) two masses (Earth-Moon system) — lines curve, showing how the field changes between them.</p><p><strong>Resultant field (15 min):</strong> Between two masses: the field from each mass acts as a vector. At any point between them: g_total = g₁ − g₂ (if point is between the two masses, fields oppose). Find the point where g = 0 (neutral point). Worked example: Earth-Moon system — find the L1 Lagrange point.</p><p><strong>Worked examples (10 min):</strong> (1) g at distance 2R from Earth's centre: g = GM/(2R)² = g_surface/4. (2) Two masses: 4M and M separated by distance d. Find the point between them where g = 0. (3) Sketch field lines for this two-mass system.</p><p><strong>Practice (5 min):</strong> Field strength calculations and field line sketches.</p>",
          "engagementHook": {
            "title": "THE INVISIBLE LANDSCAPE — MAPPING GRAVITY",
            "content": "\"Gravity is invisible, but we can map it. Imagine you're a tiny mass placed at every point around Earth. At each point, you'd feel a tug toward the centre — stronger when close, weaker when far. The field lines are the 'map' of this invisible landscape. Between Earth and Moon, there's a point where the tugs balance perfectly — the L1 Lagrange point. The James Webb Space Telescope orbits near the Sun-Earth L2 point.\""
          },
          "nos": {
            "tags": ["Models", "Theories"],
            "description": "The 'field' concept was introduced by Michael Faraday (for electromagnetism) and applied to gravity. It replaced 'action at a distance' (a mysterious force across empty space) with a field that fills space and mediates the force. This shift in thinking — from forces between objects to fields filling space — was one of the most important conceptual advances in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define g; sketch radial and uniform field lines",
            "AO2 — Calculate g at any distance; find resultant g between two masses",
            "AO3 — Analyse field line diagrams to extract physical information"
          ],
          "resources": "Whiteboard for field line drawings, calculators, Earth-Moon data, JWST/Lagrange point infographic",
          "formative": "\"(a) Calculate g at 3 Earth radii from Earth's centre. (b) Two masses: 5 × 10²⁴ kg and 2 × 10²⁴ kg separated by 10⁸ m. Find the point between them where g = 0. (c) Sketch the field lines for this system. (d) At the surface of a planet with twice Earth's mass and twice its radius, what is g compared to Earth's?\""
        },
        {
          "num": 4,
          "title": "Circular Orbits — Linking Gravitation to Circular Motion",
          "focus": "Gravity provides the centripetal force for orbital motion",
          "minutes": 65,
          "understandings": [
            "For astronomical bodies in circular orbit: gravitational force = centripetal force",
            "GMm/r² = mv²/r → v = √(GM/r) — orbital speed decreases with distance (preview of AHL formula)",
            "From v = 2πr/T and the above: T² = 4π²r³/(GM) — this IS Kepler's 3rd law, now derived from Newton",
            "Newton explained WHY Kepler's laws work: gravitation provides the centripetal force for orbital motion"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Newton imagined firing a cannonball horizontally from a mountain. At low speed: it falls to the ground (projectile from A.1). Faster: it lands further away. Even faster: the Earth curves away at the same rate the ball falls. The ball never lands — it's in ORBIT.\" Show Newton's cannonball diagram.</p><p><strong>Direct instruction (20 min):</strong> Set gravity = centripetal: GMm/r² = mv²/r. Cancel m: GM/r = v². So v = √(GM/r). Key result: orbital speed DECREASES with r — outer planets move slower. Substitute v = 2πr/T: GM/r = (2πr/T)² → T² = 4π²r³/(GM). This is Kepler's 3rd law — DERIVED from Newton! Kepler found the pattern; Newton explained the mechanism. This is one of the great triumphs of theoretical physics.</p><p><strong>Worked examples (20 min):</strong> (1) ISS orbital speed at r = 6.77 × 10⁶ m: v = √(GM_E/r) = 7.67 km/s. T = 2πr/v = 92.4 min. (2) Geostationary orbit: T = 24 h. Find r. r = (GMT²/4π²)^(1/3) = 42,200 km ≈ 6.6 R_Earth. (3) Find the Moon's orbital speed and verify with its known period (27.3 days).</p><p><strong>Discussion (10 min):</strong> \"Why are geostationary orbits at exactly 42,200 km?\" Because T = 24 hours forces r to be specific. Used for: TV satellites, weather monitoring, GPS. Lower orbits: faster (ISS: 90 min). Higher orbits: slower (Moon: 27 days).</p><p><strong>Practice (10 min):</strong> Orbital speed and period calculations for various scenarios.</p>",
          "engagementHook": {
            "title": "NEWTON'S CANNONBALL — FROM PROJECTILE TO ORBIT",
            "content": "\"Imagine firing a cannonball horizontally from a very tall mountain. At low speed: it falls to the ground. Faster: it travels further before landing. Even faster: the Earth curves away as fast as the ball falls. It keeps falling but NEVER LANDS — it's orbiting.\" Animate the diagram. \"This is the ISS: falling around the Earth at 7.7 km/s. It's been falling for 25 years and hasn't landed yet.\""
          },
          "nos": {
            "tags": ["Theories", "Models", "Patterns"],
            "description": "Newton's derivation of Kepler's laws from his law of gravitation was one of the most powerful demonstrations of theoretical physics: empirical patterns (Kepler) explained by a fundamental law (Newton). Edmund Halley encouraged Newton to publish, leading to the Principia (1687) — arguably the most important scientific book ever written."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State that gravity provides centripetal force for orbits",
            "AO2 — Derive and apply v = √(GM/r) and T² = 4π²r³/(GM)",
            "AO3 — Analyse why Kepler's 3rd law follows from Newton's gravitation"
          ],
          "resources": "Newton's cannonball animation, ISS live tracker, geostationary orbit diagram, calculators",
          "formative": "\"(a) Find the orbital speed and period for a satellite at altitude 200 km above Earth. (b) A geostationary satellite orbits at r = 42,200 km. Verify T = 24 hours. (c) If Earth's mass doubled but radius stayed the same, how would the ISS orbital speed change? (d) Derive Kepler's 3rd law from F_grav = F_centripetal.\""
        },
        {
          "num": 5,
          "title": "Resultant Gravitational Field & Problem Solving",
          "focus": "Finding the net field between two masses — where does g = 0?",
          "minutes": 65,
          "understandings": [
            "The resultant gravitational field strength at a point is the vector sum of the individual fields from all masses",
            "Restricted to points along the line joining two bodies",
            "Between two masses: fields from each mass point in opposite directions",
            "At a neutral point: g₁ = g₂ → GM₁/r₁² = GM₂/r₂² (where r₁ + r₂ = d)",
            "Sketching field lines for systems of two or more masses"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Between two masses M₁ and M₂ separated by distance d, at point P (distance r₁ from M₁, r₂ from M₂, r₁ + r₂ = d): g from M₁ points toward M₁ (left), g from M₂ points toward M₂ (right). g_total = GM₁/r₁² − GM₂/r₂² (if P is between them). At the neutral point: g_total = 0 → GM₁/r₁² = GM₂/r₂² → r₁/r₂ = √(M₁/M₂). For equal masses: neutral point is at the midpoint. For unequal: neutral point is closer to the smaller mass.</p><p><strong>Worked examples (20 min):</strong> (1) Earth (6 × 10²⁴ kg) and Moon (7.3 × 10²² ​kg), d = 3.84 × 10⁸ m. Find neutral point: r_E/r_M = √(M_E/M_M) = √(82.2) = 9.07. r_E = 9.07d/10.07 = 3.46 × 10⁸ m from Earth (90% of the way to the Moon). (2) Two identical masses M separated by d: neutral at d/2. Calculate g at d/4 from one mass: g = GM/(d/4)² − GM/(3d/4)². (3) Sketch field lines for Earth-Moon system: lines point toward Earth everywhere except near the Moon, where they curve toward the Moon. Show the neutral point.</p><p><strong>Lab (15 min):</strong> MAPPING A GRAVITATIONAL FIELD — Use a PhET simulation: place two masses, explore the field strength at various points between and around them. Students map the neutral point and verify with calculation.</p><p><strong>Extension (10 min):</strong> Beyond two bodies: mention the 5 Lagrange points (L1-L5) in the Sun-Earth system. L1: between the two (used by solar observatories). L2: behind Earth (JWST). L4, L5: 60° ahead/behind Earth (Trojan asteroids). \"These are locations where gravitational fields balance in the rotating frame — cosmic parking spots.\"</p><p><strong>Practice (5 min):</strong> Neutral point and field strength calculations.</p>",
          "engagementHook": {
            "title": "LAGRANGE POINTS — COSMIC PARKING SPOTS",
            "content": "\"There are 5 special points in the Sun-Earth system where gravitational forces balance. L2 — 1.5 million km behind Earth — is where the James Webb Space Telescope orbits. It's the perfect spot: always in Earth's shadow, always pointing away from the Sun, with a clear view of the universe.\" Students calculate the approximate position of L1 (Sun-Earth neutral point) and discover it's inside Earth's orbit."
          },
          "nos": {
            "tags": ["Theories", "Technology", "Science as a shared endeavour"],
            "description": "Lagrange points were predicted mathematically by Joseph-Louis Lagrange in 1772 — over 200 years before we could place spacecraft there. The Trojan asteroids at Jupiter's L4 and L5 points were discovered in 1906, confirming the prediction. JWST at L2 is a triumph of gravitational physics enabling astronomy."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Inquirer"],
          "ao": [
            "AO1 — Describe how resultant field is determined between two masses",
            "AO2 — Calculate the neutral point position between two masses",
            "AO3 — Analyse field line diagrams for multi-body systems"
          ],
          "resources": "PhET gravitational field simulation, calculators, Earth-Moon and Sun-Earth data, Lagrange point diagram",
          "formative": "\"Two masses: 8 × 10²⁴ kg and 2 × 10²⁴ kg, separated by 5 × 10⁸ m. (a) Find the neutral point. (b) Calculate g at the midpoint — which mass dominates? (c) Sketch the field lines. (d) The JWST orbits at the Sun-Earth L2 point, about 1.5 million km from Earth. Why is this a good location for a space telescope?\""
        }
      ]
    },
    {
      "name": "Gravitational Potential & Energy (AHL)",
      "color": "accent3",
      "totalMinutes": 210,
      "subtopics": [
        {
          "num": 1,
          "title": "Gravitational PE — Eₚ = −Gm₁m₂/r (AHL)",
          "focus": "Why gravitational PE is negative — work done to assemble from infinity",
          "minutes": 55,
          "understandings": [
            "Gravitational PE of a system = work done to assemble the system from infinite separation",
            "For two masses: Eₚ = −Gm₁m₂/r (negative because you must do POSITIVE work to separate them to infinity)",
            "At infinity: Eₚ = 0 (by definition — this is the reference level)",
            "Closer together → more negative Eₚ → more bound (harder to separate)",
            "This replaces ΔEₚ = mgΔh which only works close to Earth's surface (g constant)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"In A.3 you used Eₚ = mgh. But this assumes g is constant — only true near the surface. For satellites, rockets, and planets, g varies with altitude. We need a new formula.\" The new formula: Eₚ = −GMm/r. The negative sign confuses everyone — let's unpack it carefully.</p><p><strong>Direct instruction (20 min):</strong> Convention: Eₚ = 0 at r = ∞. Bringing a mass from ∞ to distance r: gravity does POSITIVE work (pulls the mass in), so the mass LOSES PE → Eₚ becomes negative. The closer you bring them, the more negative Eₚ gets. To separate: you must DO work (add energy) → Eₚ increases (becomes less negative) → approaches 0 at ∞. Analogy: being in debt. Eₚ = 0 is debt-free (at infinity). Eₚ = −5 × 10⁹ J means you owe 5 GJ of energy to escape. Binding energy = |Eₚ| = energy needed to separate to infinity.</p><p><strong>Connection to mgh (5 min):</strong> Near the surface: Eₚ = −GMm/r. At height h above surface: Eₚ = −GMm/(R+h). Change: ΔEₚ = −GMm/(R+h) + GMm/R ≈ GMmh/R² = mgh (when h << R). So mgh IS a special case of −GMm/r. The new formula is more general.</p><p><strong>Worked examples (15 min):</strong> (1) Eₚ of Earth-Moon system: −GMₑMₘ/r = −7.6 × 10²⁸ J. (2) Eₚ of a 500 kg satellite at 400 km altitude: −GMₑm/(R+h). (3) Change in Eₚ moving satellite from 400 km to 800 km orbit: ΔEₚ = −GMm/(R+800) − (−GMm/(R+400)). Positive → energy was added. (4) Verify ΔEₚ ≈ mgΔh for a 1 kg mass lifted 10 m at the surface.</p><p><strong>Practice (10 min):</strong> Eₚ calculations and energy changes for orbit changes.</p>",
          "engagementHook": {
            "title": "THE GRAVITATIONAL DEBT — WHY PE IS NEGATIVE",
            "content": "\"Think of gravitational PE as debt. At infinity: debt-free (Eₚ = 0). As Earth pulls you closer, you 'borrow' kinetic energy from the gravitational field — but now you're in debt. The ISS is −29 GJ in debt. The Moon is −76 × 10²⁷ J in debt. To escape, you must 'pay back' every joule.\" The negative sign isn't scary — it just means you're bound. The MORE negative, the MORE bound."
          },
          "nos": {
            "tags": ["Theories", "Models"],
            "description": "The choice Eₚ = 0 at infinity is a CONVENTION — not a physical fact. We could define Eₚ = 0 at the surface, but then the formula would be messier. Choosing the reference level wisely simplifies the mathematics. This is a common technique in physics: pick the reference that makes the algebra cleanest."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define gravitational PE; explain why it's negative; state Eₚ = −Gm₁m₂/r",
            "AO2 — Calculate Eₚ and changes in Eₚ for orbit changes",
            "AO3 — Analyse how Eₚ = −GMm/r reduces to ΔEₚ = mgΔh near the surface"
          ],
          "resources": "Calculators, Earth/Moon/satellite data, Eₚ vs r graph, gravitational 'debt' analogy diagram",
          "formative": "\"(a) Calculate Eₚ for a 200 kg satellite at altitude 600 km above Earth. (b) The satellite moves to 1200 km. Find the change in Eₚ. Is energy added or removed? (c) Show that for h = 100 m at Earth's surface, ΔEₚ from −GMm/r gives the same result as mgh (to 3 s.f.). (d) Why is Eₚ always negative for gravitationally bound systems?\""
        },
        {
          "num": 2,
          "title": "Gravitational Potential Vg = −GM/r & Equipotentials (AHL)",
          "focus": "Potential per unit mass and surfaces of equal potential",
          "minutes": 55,
          "understandings": [
            "Gravitational potential Vg at a point: work done per unit mass in bringing a test mass from infinity to that point",
            "Vg = −GM/r (scalar, units: J/kg). Vg = 0 at infinity, negative everywhere else",
            "Equipotential surfaces: surfaces where Vg has the same value. Moving along an equipotential requires NO work",
            "Equipotential surfaces are perpendicular to field lines",
            "Near Earth: equipotentials are approximately flat horizontal planes (uniform field). Far from Earth: concentric spheres"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Vg = Eₚ/m = −GM/r. It's the PE per unit mass — a property of the FIELD, not the test mass. Like g gives the force per unit mass, Vg gives the PE per unit mass. Equipotential surfaces: contours of equal Vg. Moving along them costs no energy (like walking on flat ground). Moving between them requires/releases energy (like climbing/descending). Key: equipotentials ⊥ field lines always. Draw: around a sphere → concentric circles (in 2D). Near surface → horizontal lines. Between two masses → distorted shapes.</p><p><strong>Demo (10 min):</strong> Topographic map analogy: contour lines = equipotentials. Height = potential. Walking along a contour = no work. Walking uphill = work needed. The steeper the hill (closer contours), the stronger the field (larger g). Draw the gravitational equivalent around Earth.</p><p><strong>Worked examples (15 min):</strong> (1) Vg at Earth's surface: Vg = −GM/R = −6.26 × 10⁷ J/kg. (2) At ISS altitude: Vg = −GM/(R+400km) = −5.93 × 10⁷ J/kg. (3) Work to move a 100 kg mass from surface to ISS: W = mΔVg = 100 × (−5.93 − (−6.26)) × 10⁷ = 3.3 × 10⁸ J = 330 MJ. (4) Draw equipotential lines between Earth and Moon — show how they distort.</p><p><strong>Practice (10 min):</strong> Vg calculations, equipotential sketches, and work calculations.</p><p><strong>Connection (5 min):</strong> \"Equipotentials are the 'contour map' of the gravitational landscape. Satellites orbit ALONG an equipotential (same Vg → no work by gravity → constant speed for circular orbit). Changing orbit means crossing equipotentials — requires energy input or output.\"</p>",
          "engagementHook": {
            "title": "THE CONTOUR MAP OF GRAVITY",
            "content": "Show a topographic map with contour lines. \"This IS a gravitational potential map — height IS proportional to gravitational potential (near the surface). Walking along a contour = no work. Climbing = work against gravity. The closer the contour lines, the steeper the hill, the stronger the 'field.'\" Then show the actual Vg map around Earth — concentric circles with values in MJ/kg. Satellites orbit along these circles."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "Equipotential surfaces were introduced to make the invisible gravitational field visible. They're analogous to pressure contours on weather maps, voltage contours in electric fields, and temperature contours in thermal systems. The same mathematical tool describes different physical fields — a powerful unifying concept."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define gravitational potential; describe equipotential surfaces",
            "AO2 — Calculate Vg and work done W = mΔVg",
            "AO3 — Analyse the relationship between equipotentials and field lines"
          ],
          "resources": "Topographic map, Vg contour diagrams, calculators, Earth/planetary data",
          "formative": "\"(a) Calculate Vg at the surface of Mars. (b) Calculate the work done to move a 50 kg probe from Mars's surface to a height of 1000 km using W = mΔVg. (c) Sketch equipotential lines around a single mass. (d) On your sketch, draw 3 field lines. Verify they're perpendicular to the equipotentials. (e) A satellite orbits along an equipotential. Does gravity do work on it? Explain.\""
        },
        {
          "num": 3,
          "title": "Potential Gradient & Work Done (AHL)",
          "focus": "g = −ΔVg/Δr — the field is the slope of the potential",
          "minutes": 50,
          "understandings": [
            "Gravitational field strength = negative potential gradient: g = −ΔVg/Δr",
            "The negative sign: g points in the direction of DECREASING potential (toward the mass, downhill)",
            "On a Vg vs r graph: the gradient at any point gives g at that point (magnitude)",
            "Work done moving mass m: W = mΔVg = m(Vg,final − Vg,initial)",
            "Moving to less negative Vg (away from mass): positive work required. Moving to more negative Vg (toward mass): work done by gravity"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Plot Vg vs r: starts at −∞ (at r = 0, theoretically), rises toward 0 as r → ∞. The gradient dVg/dr at any r gives g at that r. But g points INWARD (toward mass) while Vg INCREASES outward — hence the negative sign: g = −ΔVg/Δr. Near the surface: Vg changes approximately linearly with height → g ≈ constant. Far away: Vg changes slowly → g is small. Steeper Vg curve → stronger field.</p><p><strong>Graphical analysis (15 min):</strong> Give students a Vg vs r graph (curved). They draw tangent lines at different r values and measure gradients. These gradients equal g at those points. Verify: g calculated from gradient matches g = GM/r². Work: W = mΔVg. On the graph: the difference in Vg between two points × mass = work required to move between them.</p><p><strong>Worked examples (10 min):</strong> (1) From a Vg vs r graph: at r = 7000 km, the gradient is approximately 9.8 J/(kg·m) → g = 9.8 m/s². (2) Work to raise a satellite: W = m(Vg,800km − Vg,surface). (3) A rocket rises from r₁ to r₂: calculate work using W = mΔVg and verify with W = ΔEₖ + ΔEₚ.</p><p><strong>Practice (10 min):</strong> Gradient and work calculations from Vg-r graphs and numerical data.</p>",
          "engagementHook": {
            "title": "THE SLOPE OF GRAVITY — STEEP NEAR, FLAT FAR",
            "content": "\"The Vg-r graph is the 'profile' of the gravitational well. Near a massive body: steep slope, strong g, hard to climb out. Far away: gentle slope, weak g, easy to move. The gradient IS the field strength. The area under a g-r curve between two points IS the change in Vg.\" Students trace their finger along the curve: \"Feel how steep it is near the surface — that's 9.8 m/s². Way out at the Moon's orbit — barely a slope.\""
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The relationship g = −dV/dr is the same mathematical structure as F = −dU/dx (force = negative gradient of PE) and E = −dV_e/dx (electric field = negative voltage gradient). This gradient relationship between a field quantity and its potential appears in every branch of physics — gravity, electrostatics, thermodynamics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State g = −ΔVg/Δr; explain the negative sign",
            "AO2 — Extract g from Vg-r graphs; calculate work W = mΔVg",
            "AO3 — Analyse how Vg-r graphs encode field strength information"
          ],
          "resources": "Printed Vg vs r graphs, rulers for gradient measurement, calculators",
          "formative": "\"A Vg vs r graph for a planet shows: Vg = −4.0 × 10⁷ J/kg at r = 5000 km, Vg = −2.5 × 10⁷ J/kg at r = 8000 km. (a) Estimate g at r = 6500 km using the gradient. (b) Calculate the work to move a 300 kg satellite from 5000 to 8000 km. (c) Does the satellite gain or lose PE? (d) If the satellite was in a circular orbit at 5000 km, what was its KE?\""
        },
        {
          "num": 4,
          "title": "Energy in Gravitational Orbits (AHL)",
          "focus": "Total energy of orbiting bodies — Eₜ = −GMm/(2r)",
          "minutes": 50,
          "understandings": [
            "For a circular orbit: KE = GMm/(2r), PE = −GMm/r, so total E = −GMm/(2r)",
            "Total energy is negative → the body is BOUND (can't escape without adding energy)",
            "Moving to a higher orbit: E becomes less negative → energy must be ADDED (fire engines forward in the direction of motion)",
            "KE decreases as r increases (satellite slows down), PE increases (less negative), total E increases (less negative)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> For circular orbit: gravity = centripetal → GMm/r² = mv²/r → v² = GM/r → KE = ½mv² = GMm/(2r). PE = −GMm/r. Total E = KE + PE = GMm/(2r) − GMm/r = −GMm/(2r). Note: |PE| = 2KE for any circular orbit. E is negative → bound. E = 0 → just barely escapes. E > 0 → escapes with KE to spare. Moving to higher orbit: r increases → E = −GMm/(2r) becomes less negative → need to ADD energy. Paradox: the satellite SLOWS DOWN when you add energy (KE decreases, but PE increases more).</p><p><strong>Worked examples (20 min):</strong> (1) ISS: KE, PE, total E at 400 km altitude. (2) Satellite moves from 500 km to 1000 km orbit. Find ΔE = energy input required. (3) \"To move to a higher orbit, do you fire engines forward or backward?\" Forward — you ADD KE. The satellite enters an elliptical transfer orbit. At the higher altitude, fire again to circularise. This is the Hohmann transfer — how real spacecraft change orbits.</p><p><strong>Energy diagram (10 min):</strong> Plot KE, PE, and E vs r on the same axes. KE curve: positive, decreasing with r. PE curve: negative, increasing toward 0. E curve: negative, halfway between KE and PE curves, increasing toward 0. At r → ∞: all three → 0. Students annotate the diagram with physical meaning at key points.</p><p><strong>Practice (5 min):</strong> Orbital energy calculations and energy changes for orbit transfers.</p>",
          "engagementHook": {
            "title": "THE ORBITAL SPEED PARADOX — SPEED UP BY SLOWING DOWN",
            "content": "\"To reach a higher orbit, you fire your engines FORWARD (adding energy). Your speed temporarily increases. But at the higher orbit, your speed is LOWER than before. You added energy but ended up slower. Where did the energy go?\" Into PE — the satellite climbed the gravitational well. KE decreased but PE increased MORE. The total energy increased. Students calculate the specific case for ISS moving from 400 to 800 km."
          },
          "nos": {
            "tags": ["Theories", "Patterns"],
            "description": "The relationship E = −GMm/(2r) with E < 0 for bound orbits appears identically in atomic physics: the electron in a hydrogen atom has E = −13.6/n² eV. The mathematics of gravitational orbits and atomic orbits are structurally identical — a deep analogy between gravity and electrostatics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State KE, PE, E for circular orbits; explain why E is negative",
            "AO2 — Calculate orbital energies and energy changes for orbit transfers",
            "AO3 — Analyse the orbital speed paradox and the KE/PE relationship"
          ],
          "resources": "Calculators, orbital energy vs r graph template, Hohmann transfer diagram",
          "formative": "\"A 1000 kg satellite orbits Earth at r = 7000 km. (a) Calculate KE, PE, and total E. (b) Verify |PE| = 2KE. (c) The satellite moves to r = 8000 km. Find the new E and the energy input required. (d) Is the satellite faster or slower in the new orbit? Calculate both speeds. (e) Sketch KE, PE, E vs r on one graph.\""
        }
      ]
    },
    {
      "name": "Escape Speed, Orbital Speed & Drag (AHL)",
      "color": "accent4",
      "totalMinutes": 210,
      "subtopics": [
        {
          "num": 1,
          "title": "Escape Speed — v_esc = √(2GM/r) (AHL)",
          "focus": "The minimum speed to leave a gravitational field permanently",
          "minutes": 55,
          "understandings": [
            "Escape speed: the minimum speed at which a body must be launched to escape the gravitational field completely (reach r = ∞ with v = 0)",
            "Derived from energy conservation: ½mv² + (−GMm/r) = 0 → v_esc = √(2GM/r)",
            "Escape speed does NOT depend on the mass of the escaping body (m cancels)",
            "Escape speed does NOT depend on the direction of launch",
            "At any point in a field: v_esc = √2 × v_orbital (escape speed = √2 times orbital speed at the same radius)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How fast do you need to throw a ball so it NEVER comes back?\" Not a trick question — there's a specific speed above which the ball has enough KE to overcome all the gravitational PE. This is the escape speed.</p><p><strong>Derivation (10 min):</strong> Total energy must be ≥ 0 to escape (E = 0 means just barely reaches infinity with v = 0). At launch: E = ½mv² − GMm/r. Set E = 0: ½mv² = GMm/r → v² = 2GM/r → v_esc = √(2GM/r). Note: m cancels — a marble and a rocket need the same speed. Direction doesn't matter — only magnitude (as long as you don't hit the ground).</p><p><strong>Worked examples (15 min):</strong> (1) Earth: v_esc = √(2 × 6.67×10⁻¹¹ × 6×10²⁴ / 6.37×10⁶) = 11.2 km/s. (2) Moon: v_esc = 2.4 km/s (much easier to escape). (3) Jupiter: v_esc = 60 km/s. (4) Sun's surface: 618 km/s. (5) For a neutron star (M = 2M_Sun, R = 10 km): v_esc = 0.6c — approaching light speed! If R shrinks to about 3 km: v_esc = c → BLACK HOLE (nothing escapes, not even light).</p><p><strong>Connection to v_orbital (10 min):</strong> v_orbital = √(GM/r). v_esc = √(2GM/r) = √2 × v_orbital. So escape speed is always 41.4% more than orbital speed. \"A satellite at 7.7 km/s orbits Earth. At 11.2 km/s, it escapes forever.\"</p><p><strong>Practice (15 min):</strong> Calculate escape speeds for various bodies. Compare v_esc with v_orbital. Discuss black holes qualitatively.</p>",
          "engagementHook": {
            "title": "FROM ORBIT TO ESCAPE TO BLACK HOLE",
            "content": "\"Earth v_orbital = 7.7 km/s. Earth v_esc = 11.2 km/s. Just 45% faster and you leave forever.\" Then: \"A neutron star: v_esc ≈ 0.6c. Compress it more and v_esc reaches c — the speed of light. NOTHING can escape. Not light, not information, not anything. That's a black hole. The 'event horizon' is the surface where v_esc = c.\" Calculate the Schwarzschild radius for Earth's mass: R = 2GM/c² = 9 mm. \"If Earth were compressed to the size of a marble, it would be a black hole.\""
          },
          "nos": {
            "tags": ["Theories", "Models", "Patterns"],
            "description": "John Michell (1783) and Pierre-Simon Laplace (1796) independently predicted 'dark stars' — objects so massive that light couldn't escape. This was 130 years before Einstein's general relativity formally described black holes. The Newtonian escape speed argument gives the correct Schwarzschild radius — a remarkable coincidence between classical and relativistic physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — Define escape speed; derive v_esc = √(2GM/r)",
            "AO2 — Calculate escape speed for various bodies; relate v_esc to v_orbital",
            "AO3 — Analyse the conditions for a black hole (v_esc = c)"
          ],
          "resources": "Calculators, planetary data table, black hole infographic, Schwarzschild radius calculation",
          "formative": "\"(a) Calculate v_esc for Mars. (b) A rocket at Earth's surface has v = 9 km/s. Does it escape? Find the maximum distance it reaches. (c) Show that v_esc = √2 × v_orbital at any r. (d) Calculate the Schwarzschild radius for the Sun (M = 2 × 10³⁰ kg). Compare with the Sun's actual radius. (e) Why doesn't escape speed depend on launch direction?\""
        },
        {
          "num": 2,
          "title": "Orbital Speed & Satellite Motion (AHL)",
          "focus": "v_orbital = √(GM/r) and the physics of real satellite orbits",
          "minutes": 60,
          "understandings": [
            "Orbital speed: v_orbital = √(GM/r) — derived from gravitational force = centripetal force",
            "Higher orbits → slower speeds. Lower orbits → faster speeds",
            "Geostationary orbit: T = 24 hours, r ≈ 42,200 km above Earth's centre, above the equator, circular",
            "Low Earth Orbit (LEO): r ≈ 6,600–8,000 km, T ≈ 90 min, v ≈ 7.7 km/s (ISS, Hubble)",
            "Changes in energy when a satellite changes orbit"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> v_orbital = √(GM/r). This means: closer → faster, further → slower. ISS at 400 km: v = 7.67 km/s, T = 92 min. Moon at 384,000 km: v = 1.02 km/s, T = 27.3 days. Geostationary: must have T = 24 h → unique r = 42,200 km. Must be circular, equatorial, and same rotational direction as Earth. Uses: TV broadcast, weather, communications. LEO uses: Earth observation, ISS, Hubble.</p><p><strong>Orbit transfer (15 min):</strong> Hohmann transfer orbit: from LEO to geostationary. (1) Fire engines forward at LEO → enter elliptical transfer orbit. (2) Coast to apogee (at geostationary altitude). (3) Fire again to circularise. Calculate: ΔE = E_final − E_initial = energy required for the transfer. KE changes: slower in higher orbit. PE changes: less negative in higher orbit. Net energy input = ΔE_total.</p><p><strong>Worked examples (15 min):</strong> (1) Calculate v_orbital for a satellite at 2R_Earth. (2) A satellite in LEO (r = 6800 km) transfers to r = 20,000 km. Find: v₁, v₂, ΔE. (3) How many minutes of engine burn (at a given thrust) are needed for the transfer?</p><p><strong>Practice (15 min):</strong> Mixed orbital problems including period, speed, energy, and orbit transfers.</p>",
          "engagementHook": {
            "title": "GPS — 24 SATELLITES MAKING YOUR PHONE WORK",
            "content": "\"GPS uses 24+ satellites at r = 26,560 km (medium Earth orbit), T = 12 hours. Your phone receives signals from 4+ satellites, measures time delays, and triangulates your position to within 3 metres. The timing is so precise that GPS must correct for BOTH special relativity (satellite moves → time dilation) and general relativity (weaker gravity → time runs faster). Without relativistic corrections, GPS would drift by 10 km per day.\""
          },
          "nos": {
            "tags": ["Technology", "Theories", "Global impact"],
            "description": "Satellite technology transforms daily life: GPS navigation, weather forecasting, global communications, Earth observation for climate science. Each application requires precise gravitational calculations. The GPS system also provides one of the most practical demonstrations of Einstein's relativity — the corrections are essential for accuracy."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State v_orbital = √(GM/r); describe geostationary orbit conditions",
            "AO2 — Calculate orbital speed, period, and energy for various orbits; calculate orbit transfer energy",
            "AO3 — Analyse practical satellite applications and orbit selection"
          ],
          "resources": "Calculators, satellite orbit comparison table (LEO, MEO, GEO), GPS satellite diagram, Hohmann transfer animation",
          "formative": "\"(a) Calculate v and T for a satellite at altitude 1000 km above Earth. (b) Find the radius of a geostationary orbit (T = 24 h). (c) A 500 kg satellite transfers from r = 7000 km to r = 42,200 km. Calculate the change in total energy. Is energy added or removed? (d) Is the satellite faster or slower in the higher orbit? (e) List three conditions for a geostationary orbit.\""
        },
        {
          "num": 3,
          "title": "Atmospheric Drag on Orbiting Bodies (AHL)",
          "focus": "What happens when a satellite encounters drag — the counterintuitive speed-up",
          "minutes": 40,
          "understandings": [
            "A small viscous drag force from the upper atmosphere removes energy from an orbiting body",
            "The satellite loses total energy → it spirals to a LOWER orbit",
            "In the lower orbit: KE is HIGHER (v_orbital = √(GM/r), r decreased → v increased)",
            "Counterintuitive result: drag slows the satellite → it drops → it speeds up",
            "The satellite's PE decreases more than its KE increases → total energy decreases continuously"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"The ISS orbits in the upper atmosphere (tiny air density, but not zero). Drag slows it. So it should slow down, right? WRONG — it speeds up. Every few months, it must fire engines to BOOST back to its original orbit. How does drag make something go faster?\"</p><p><strong>Direct instruction (15 min):</strong> Drag removes energy → E decreases (becomes more negative) → satellite drops to lower orbit. At lower r: v_orbital = √(GM/r) is LARGER. The satellite is faster despite losing energy. How? It lost PE (became more negative) by an amount GREATER than the KE it gained. ΔPE = −GMm/(r−Δr) − (−GMm/r) < 0 (more negative). ΔKE = GMm/(2(r−Δr)) − GMm/(2r) > 0 (KE increased). But |ΔPE| > |ΔKE|, so ΔE < 0. This is the virial theorem: for gravitational orbits, ΔKE = −½ΔE and ΔPE = ΔE.</p><p><strong>Worked example (10 min):</strong> ISS drops from 420 km to 415 km due to drag. Calculate: (a) change in v_orbital (increases by ~0.6 m/s), (b) change in PE (decreases by ~2.8 × 10⁶ J per kg), (c) change in KE (increases by ~1.4 × 10⁶ J per kg), (d) total energy lost = 1.4 × 10⁶ J per kg → dissipated as heat in the atmosphere.</p><p><strong>Discussion (5 min):</strong> \"Ultimately, if no reboosting occurs, a satellite spirals inward, heats up from friction with increasing atmospheric density, and burns up. This is deorbiting. Skylab (1979), Mir (2001), and eventually the ISS will meet this fate.\"</p><p><strong>Practice (5 min):</strong> Qualitative and quantitative questions on drag effects.</p>",
          "engagementHook": {
            "title": "THE ISS PARADOX — DRAG MAKES IT FASTER",
            "content": "\"The ISS encounters drag. It loses energy. It drops lower. And yet — it's going FASTER. Every few weeks, it must fire engines to push back UP to its original altitude, which SLOWS it down. Drag accelerates it. Engines decelerate it. Everything is backward.\" Students calculate v at 420 km and 415 km to verify the speed increase. \"The gravitational well is responsible: dropping into a deeper well releases more PE than the KE gained.\""
          },
          "nos": {
            "tags": ["Observations", "Models", "Patterns"],
            "description": "The counterintuitive behaviour of orbiting bodies under drag is a direct consequence of the virial theorem — a deep result in classical mechanics that relates average KE and PE in bound gravitational systems. The same theorem explains why collapsing gas clouds HEAT UP as they shrink (relevant to star formation in E.4)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — Describe qualitatively the effect of atmospheric drag on an orbiting body",
            "AO2 — Explain why the satellite speeds up despite losing energy",
            "AO3 — Analyse the energy balance: PE lost > KE gained → total energy decreases"
          ],
          "resources": "ISS reboost data, orbital decay diagram, calculators",
          "formative": "\"A satellite in a circular orbit at 500 km experiences atmospheric drag. (a) Does its total energy increase or decrease? (b) Does it move to a higher or lower orbit? (c) Does its speed increase or decrease? (d) Explain the apparent contradiction between (a) and (c). (e) Why must the ISS periodically fire its engines forward, even though this slows it down?\""
        },
        {
          "num": 4,
          "title": "Gravitational Fields — Advanced Problem Solving (AHL)",
          "focus": "Multi-step problems combining all D.1 concepts",
          "minutes": 55,
          "understandings": [
            "Combine Kepler's laws, Newton's gravitation, field strength, potential, energy, escape speed, and orbital mechanics in complex problems",
            "Common exam scenarios: orbit changes, satellite launches, interplanetary transfers, binary star systems",
            "Use energy methods (Eₚ, KE, E_total) when possible — they avoid vector complications",
            "Link gravitational concepts to A.2 (circular motion), A.3 (energy), and A.5 (relativity for extreme cases)"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Decision framework for gravitational problems: (a) Need force → F = GMm/r². (b) Need field strength → g = GM/r². (c) Need potential → Vg = −GM/r. (d) Need energy → Eₚ = −GMm/r, KE = GMm/(2r), E = −GMm/(2r). (e) Need speed → v_orbital = √(GM/r), v_esc = √(2GM/r). (f) Need period → T² = 4π²r³/(GM). Many problems require chaining 2-3 of these.</p><p><strong>Complex problems (30 min):</strong> Groups tackle one each: (1) A rocket launches from Earth at 15 km/s. What maximum distance from Earth's centre does it reach? (Energy conservation: ½mv² − GMm/R = 0 − GMm/r_max → solve for r_max.) (2) Binary star: two stars of mass M and 2M orbit their common centre of mass. Separation = d. Find the orbital period. (3) A satellite in orbit at r₁ fires engines to increase speed by Δv. Find the new orbital parameters (semi-major axis from energy, period from Kepler's 3rd law). (4) An asteroid passes Earth at distance 10R at speed v. Will it be captured into orbit, fly past, or crash? (Compare E with 0.)</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style D.1 problems.</p>",
          "engagementHook": {
            "title": "MISSION TO MARS — PLAN THE TRAJECTORY",
            "content": "\"NASA is sending a probe to Mars. From Earth orbit (r₁ = 1 AU, v₁ = 29.8 km/s), it needs to reach Mars orbit (r₂ = 1.52 AU). Calculate: the Δv needed at Earth orbit to enter the transfer ellipse, the travel time (half of the transfer orbit's period), and the arrival speed at Mars.\" Students plan a real interplanetary mission using orbital mechanics. Every Mars mission uses exactly this physics."
          },
          "nos": {
            "tags": ["Technology", "Science as a shared endeavour"],
            "description": "Every space mission — from Apollo to Voyager to JWST to Mars rovers — relies on the gravitational physics covered in D.1. The calculations are the same as Newton performed in the Principia (1687). Three centuries later, they still guide us to other planets."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Communicator"],
          "ao": [
            "AO2 — Apply multiple D.1 concepts in combination to solve multi-step problems",
            "AO3 — Evaluate which approach (force, energy, potential) is most efficient for a given problem"
          ],
          "resources": "Problem sets, whiteboards for group work, planetary data, Hohmann transfer reference",
          "formative": "\"A 2000 kg satellite is launched from Earth at 12 km/s (> v_esc). (a) Calculate its KE and PE at launch. (b) Find total E. Is the satellite bound or unbound? (c) Find its speed when it's at distance 3R from Earth's centre. (d) What speed would it need at launch to just barely escape (v → 0 at r → ∞)? (e) Compare with v_esc = √(2GM/R).\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "How does gravity provide the centripetal force for circular orbits? How is F = GMm/r² linked to F = mv²/r?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does Eₚ = −GMm/r generalise ΔEₚ = mgΔh? When does the simpler equation fail?" },
    { "topic": "A.4 Rigid Body Mechanics (HL)", "question": "How does conservation of angular momentum explain Kepler's 2nd law (equal areas in equal times)?" },
    { "topic": "A.5 Special Relativity (HL)", "question": "What happens when v_esc approaches c? How does general relativity modify Newtonian gravity near black holes?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How do gravitational and electric fields compare? Both follow inverse-square laws — what are the key differences?" },
    { "topic": "E.4 Fission / E.5 Fusion", "question": "How does gravitational PE drive stellar collapse, initiating nuclear fusion in the cores of stars?" }
  ]
},
"D2": {
  "title": "Electric and Magnetic Fields",
  "code": "D.2",
  "theme": "D",
  "level": "SL + HL",
  "recommendedHours": 14,
  "recommendedMinutes": 840,
  "guidingQuestions": [
    "Which experiments provided evidence to determine the nature of the electron?",
    "How can the properties of fields be understood using both an algebraic approach and a visual representation?",
    "What are the consequences of interactions between electric and magnetic fields?"
  ],
  "groups": [
    {
      "name": "Electric Charge & Coulomb's Law (SL)",
      "color": "accent5",
      "totalMinutes": 160,
      "subtopics": [
        {
          "num": 1,
          "title": "Electric Charge, Conservation & Transfer",
          "focus": "Two types of charge, conservation, and methods of charging",
          "minutes": 50,
          "understandings": [
            "There are two types of electric charge: positive and negative. Like charges repel; unlike charges attract",
            "The conservation of electric charge: charge cannot be created or destroyed, only transferred",
            "Electric charge can be transferred between bodies by: friction (rubbing), electrostatic induction (no contact), and contact (touching), including the role of grounding (earthing)",
            "Millikan's experiment as evidence for the quantisation of charge: charge comes in integer multiples of e = 1.6 × 10⁻¹⁹ C"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Rub a balloon on your hair. It sticks to the wall. Rub a plastic rod with fur — it attracts small paper pieces. \"What force is doing this? It's not gravity — gravity can't repel. It's not magnetic — balloons aren't magnets. It's ELECTRIC force — the same force that holds atoms together and makes lightning.\"</p><p><strong>Direct instruction (15 min):</strong> Two types: positive (protons) and negative (electrons). Like repels, unlike attracts. Conservation: rubbing doesn't CREATE charge — it TRANSFERS electrons from one surface to the other. The total charge of the universe is zero (probably). Three transfer methods: (a) Friction: rubbing strips electrons from one material to another. (b) Induction: bring a charged rod near a conductor — charges separate WITHOUT contact. Ground one side → permanent charge. (c) Contact: touch a charged object to a neutral one — charge flows until shared equally.</p><p><strong>Millikan's experiment (10 min):</strong> Oil drops suspended in an electric field. By balancing gravity with electric force, Millikan measured the charge on each drop. ALL charges were multiples of 1.6 × 10⁻¹⁹ C = e. \"Charge is quantised — it comes in packets. You can't have 0.7e or 1.3e. Only whole numbers.\"</p><p><strong>Demo (10 min):</strong> (1) Charge a Van de Graaff. Touch a grounded sphere — spark. \"Charge flows from high to low potential, just like heat flows from hot to cold.\" (2) Electroscope: charge by contact and by induction. Show both and explain the difference.</p><p><strong>Practice (10 min):</strong> Classify charging scenarios, Millikan calculation: given field E and drop mass, find charge q = mg/E, verify it's a multiple of e.</p>",
          "engagementHook": {
            "title": "LIGHTNING IN THE CLASSROOM — VAN DE GRAAFF SPARKS",
            "content": "Charge a Van de Graaff generator. Bring a grounded sphere close — CRACK! A spark jumps. \"That's a tiny bolt of lightning. Same physics: charge builds up until the electric field is strong enough to ionise air, creating a conducting path. Lightning is just a Van de Graaff on a planetary scale — billions of coulombs instead of microcoulombs.\" Students calculate: how many electrons is 1 μC? (6.25 × 10¹²)."
          },
          "nos": {
            "tags": ["Measurements", "Observations", "Patterns"],
            "description": "Millikan's oil drop experiment (1909) is one of the most celebrated precision measurements in physics. It proved charge is quantised — a fundamental discovery. However, Millikan was later criticised for selectively discarding data that didn't fit his hypothesis. This raises important questions about scientific integrity and data handling."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Principled"],
          "ao": [
            "AO1 — State two types of charge; state conservation of charge; describe Millikan's experiment",
            "AO2 — Explain charging by friction, induction, and contact",
            "AO3 — Analyse Millikan's data to show charge quantisation"
          ],
          "resources": "Van de Graaff generator, electroscope, balloons, plastic/glass rods + fur/silk, paper pieces, Millikan data table",
          "formative": "\"(a) A plastic rod rubbed with fur gains a charge of −3.2 × 10⁻⁸ C. How many excess electrons does it have? (b) In Millikan's experiment, a drop of mass 1.6 × 10⁻¹⁵ kg is suspended in a field of 5 × 10⁵ V/m. Find the charge on the drop. How many electron charges is this? (c) Explain how to charge a metal sphere by induction WITHOUT touching the charged rod to it.\""
        },
        {
          "num": 2,
          "title": "Coulomb's Law — F = kq₁q₂/r²",
          "focus": "The electric force between point charges — an inverse-square law",
          "minutes": 55,
          "understandings": [
            "Coulomb's law: F = kq₁q₂/r², where k = 1/(4πε₀) = 8.99 × 10⁹ N m² C⁻²",
            "Charged bodies treated as point charges (valid when separation >> size)",
            "Attractive force if charges have opposite signs; repulsive if same sign",
            "The structure is identical to Newton's law of gravitation — but gravity is always attractive, electric force can attract or repel",
            "A range of permittivity values for different media may be used"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Gravity and electricity both follow inverse-square laws: F ∝ 1/r². But the electric force between a proton and electron in a hydrogen atom is 10³⁹ times stronger than gravity between them. Electricity utterly dominates at the atomic scale.\"</p><p><strong>Direct instruction (15 min):</strong> F = kq₁q₂/r². Compare with F = Gm₁m₂/r²: same structure but k >> G. Electric force can be + (repulsive) or − (attractive). Gravity is always attractive. k = 1/(4πε₀) where ε₀ = 8.85 × 10⁻¹² F/m is the permittivity of free space. In a medium: k_medium = 1/(4πε₀ε_r) where ε_r is the relative permittivity (reduces the force — the medium partially shields the charges).</p><p><strong>Worked examples (20 min):</strong> (1) Two protons 10⁻¹⁵ m apart (inside a nucleus): F = 230 N — enormous force from tiny charges! (2) Two 1 μC charges 0.1 m apart: F = 0.9 N (about the weight of an apple). (3) Hydrogen atom: proton-electron force at r = 5.3 × 10⁻¹¹ m = 8.2 × 10⁻⁸ N. Compare with gravitational force: 3.6 × 10⁻⁴⁷ N — 10³⁹ times weaker. (4) Three charges in a line: find the net force on the middle charge (vector addition).</p><p><strong>Comparison table (5 min):</strong> Students build: Gravity vs Electricity — force law, constant, sign, range, relative strength, mediated by. This comparison is a common IB question.</p><p><strong>Practice (10 min):</strong> Coulomb's law calculations and gravitational comparison problems.</p>",
          "engagementHook": {
            "title": "10³⁹ TIMES STRONGER — WHY ELECTRICITY RULES THE ATOM",
            "content": "\"The electric force between a proton and electron is 10³⁹ times stronger than gravity between them. That's a 1 followed by 39 zeros. If gravity were a grain of sand, electricity would be larger than the observable universe.\" Calculate both forces for hydrogen. \"So why does gravity seem stronger in daily life?\" Because matter is electrically neutral — positive and negative cancel. Gravity never cancels (no negative mass)."
          },
          "nos": {
            "tags": ["Theories", "Patterns", "Measurements"],
            "description": "Charles-Augustin de Coulomb measured the electric force with a torsion balance in 1785 — the same technique Cavendish later used for gravity. The identical mathematical structure (inverse-square) of gravity and electricity fascinated physicists and eventually led to attempts at 'grand unification' — finding one theory for all forces."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State Coulomb's law; define k and ε₀",
            "AO2 — Calculate electric force between point charges; compare with gravitational force",
            "AO3 — Analyse the similarities and differences between gravitational and electric forces"
          ],
          "resources": "Calculators, gravity-electricity comparison table template, periodic table (for particle data)",
          "formative": "\"(a) Two charges: +3 μC and −5 μC, 0.2 m apart. Find F (magnitude and direction). (b) Compare the electric and gravitational forces between two protons at 1 fm. (c) Three charges on a line: +2 μC at x = 0, −4 μC at x = 0.1 m, +3 μC at x = 0.3 m. Find the net force on the middle charge. (d) How does the force change if the charges are placed in water (ε_r = 80)?\""
        },
        {
          "num": 3,
          "title": "Electric Field Strength & Field Lines",
          "focus": "E = F/q, E = V/d, and visualising electric fields",
          "minutes": 55,
          "understandings": [
            "Electric field strength E at a point: force per unit positive test charge — E = F/q (units: N/C or V/m)",
            "For a point charge: E = kQ/r² (radial field, inverse-square)",
            "For parallel plates: E = V/d (uniform field between plates)",
            "Electric field lines: arrows showing the direction of force on a POSITIVE test charge",
            "Field lines go FROM positive TO negative; denser lines = stronger field; lines never cross",
            "Higher field line density represents larger electric field strength"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> Define E = F/q — the force per unit positive test charge placed at that point. For a point charge Q: combine with Coulomb's law → E = kQ/r² (doesn't depend on test charge — it's a property of the field). Direction: away from + charges, toward − charges. Between parallel plates: E = V/d (uniform — same everywhere between the plates). This is the simplest field to work with and the most useful for problems. Field lines: (a) single + charge: radial outward, (b) single − charge: radial inward, (c) two opposite charges (dipole): lines from + to −, (d) parallel plates: straight parallel lines from + plate to − plate (with edge effects curving at the edges), (e) inside a conducting sphere: E = 0 (charges on surface shield the interior).</p><p><strong>Demo (10 min):</strong> Grass seeds or semolina in oil between charged conductors. Apply voltage → seeds align with the field. Students SEE: radial patterns around point charges, uniform parallel lines between plates, dipole pattern between +/− charges. \"These seeds ARE field lines — they show the direction the electric force pushes at every point.\"</p><p><strong>Worked examples (15 min):</strong> (1) E at 0.3 m from a 5 μC charge: E = kQ/r² = 5 × 10⁵ N/C. (2) Parallel plates: V = 200 V, d = 5 mm → E = 40,000 V/m. (3) Force on a 2 nC charge in a field of 10⁴ N/C: F = qE = 2 × 10⁻⁵ N. (4) Resultant E at a point between two charges: vector addition along the line joining them.</p><p><strong>Practice (10 min):</strong> E calculations and field line sketching for various configurations.</p>",
          "engagementHook": {
            "title": "SEEING THE INVISIBLE — GRASS SEEDS IN ELECTRIC FIELDS",
            "content": "Sprinkle grass seeds or semolina into oil between charged conductors. Apply voltage. The seeds rotate and align with the field — you can SEE the field lines. Around a point charge: beautiful radial pattern. Between parallel plates: perfect straight lines. Between a dipole: the classic curved pattern from every textbook — but REAL and in front of you."
          },
          "nos": {
            "tags": ["Models", "Observations"],
            "description": "Michael Faraday introduced field lines in the 1830s as a visual tool. He had little mathematical training but extraordinary physical intuition. His 'lines of force' were initially dismissed by mathematicians but later became the foundation of field theory. Maxwell translated Faraday's pictures into equations — one of the greatest collaborations (across decades) in physics history."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Thinker"],
          "ao": [
            "AO1 — Define E; state E = kQ/r² and E = V/d; sketch field lines for standard configurations",
            "AO2 — Calculate E and force on charges in fields",
            "AO3 — Analyse the relationship between field line density and field strength"
          ],
          "resources": "Grass seeds/semolina in oil, electrodes + HV supply, Van de Graaff, whiteboard for field line drawing",
          "formative": "\"(a) Sketch electric field lines for: a single +Q, a dipole (+Q and −Q), and parallel plates. (b) Parallel plates: V = 500 V, d = 2 cm. Find E. A proton (q = 1.6 × 10⁻¹⁹ C) is placed between them. Find F and acceleration. (c) At what distance from a 10 μC point charge is E = 10⁴ N/C? (d) Why is E = 0 inside a hollow conducting sphere?\""
        }
      ]
    },
    {
      "name": "Magnetic Fields (SL)",
      "color": "accent3",
      "totalMinutes": 80,
      "subtopics": [
        {
          "num": 1,
          "title": "Magnetic Field Lines & Patterns",
          "focus": "Bar magnets, current-carrying wires, coils, and solenoids",
          "minutes": 80,
          "understandings": [
            "Magnetic field lines: from north to south outside the magnet; form closed loops",
            "Field patterns for: bar magnet, straight current-carrying wire (concentric circles), circular coil, and solenoid",
            "Direction of magnetic field around a current-carrying wire: right-hand grip rule",
            "Solenoid: uniform field inside (like a bar magnet), negligible outside",
            "Sketching and interpretation of magnetic field lines is required"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Sprinkle iron filings on paper over a bar magnet. Tap the paper. The filings arrange into the classic pattern — field lines visible. \"These filings ARE the magnetic field, made visible. Each filing acts as a tiny compass, aligning with the local field direction.\"</p><p><strong>Direct instruction (20 min):</strong> Bar magnet: field lines emerge from N, curve through space, enter S, continue through the magnet from S to N (closed loops). Denser near the poles = stronger field. Current-carrying wire: field lines are concentric circles centred on the wire. Direction: right-hand grip rule — thumb points in current direction, fingers curl in field direction. Circular coil: field lines through the centre, looping around the outside. Solenoid: many coils → uniform parallel field inside (like a bar magnet), nearly zero outside. The solenoid IS an electromagnet — current on = magnetic; current off = not.</p><p><strong>Lab (20 min):</strong> MAPPING MAGNETIC FIELDS — (1) Iron filings on paper over: bar magnet, two magnets (N-N, N-S), horseshoe magnet. Students sketch the patterns. (2) Compass around a current-carrying wire: trace the circular field. Verify right-hand grip rule. (3) Compass inside a solenoid: verify uniform direction and determine N/S poles from current direction.</p><p><strong>Demo (10 min):</strong> Electromagnet: wrap wire around a nail, connect to battery. It picks up paperclips. Reverse the current → the poles flip (compass shows reversal). \"Every MRI machine, electric motor, and maglev train uses the solenoid field.\"</p><p><strong>Worked examples (10 min):</strong> (1) Determine the magnetic field direction at various points around a current-carrying wire using the right-hand rule. (2) Identify N and S poles of a solenoid given current direction. (3) Sketch the combined field from two bar magnets in N-N and N-S configurations.</p><p><strong>Practice (15 min):</strong> Sketch field patterns from descriptions. Apply the right-hand grip rule. Identify poles. Interpret given field diagrams.</p>",
          "engagementHook": {
            "title": "IRON FILINGS — FROZEN MAGNETIC FIELD LINES",
            "content": "Sprinkle iron filings on paper over various magnet configurations. Each filing is a tiny compass — the collective alignment reveals the field. N-N repulsion creates a 'neutral point' between the magnets (filings chaotic there). N-S attraction creates beautiful curved lines connecting the poles. \"Faraday invented this technique in the 1830s. It's still the best way to SEE a magnetic field.\" Then: build an electromagnet from a nail and wire — students experience making magnetism from electricity."
          },
          "nos": {
            "tags": ["Observations", "Models", "Technology"],
            "description": "Hans Christian Ørsted discovered in 1820 that a current-carrying wire deflects a compass — the first link between electricity and magnetism. This accidental discovery (during a lecture!) launched the field of electromagnetism and eventually led to Maxwell's equations. Great discoveries sometimes happen by accident — but only to prepared minds."
          },
          "atl": ["Thinking skills", "Research skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Communicator", "Thinker"],
          "ao": [
            "AO1 — Sketch magnetic field patterns for bar magnet, wire, coil, solenoid",
            "AO2 — Apply the right-hand grip rule to determine field direction",
            "AO3 — Analyse and interpret magnetic field diagrams"
          ],
          "resources": "Bar magnets (various), iron filings, paper, compasses (small, many), wire + battery for straight wire demo, solenoid, nail + wire (electromagnet), paperclips",
          "formative": "\"(a) Sketch the magnetic field of a bar magnet. Label N, S, and indicate field direction. (b) A wire carries current INTO the page. Draw the field lines and indicate direction. (c) Current flows clockwise when viewed from the left end of a solenoid. Which end is N? (d) Two bar magnets are placed N–N 5 cm apart. Sketch the field between them. Where is the neutral point?\""
        }
      ]
    },
    {
      "name": "Electric Potential & Energy (AHL)",
      "color": "accent",
      "totalMinutes": 240,
      "subtopics": [
        {
          "num": 1,
          "title": "Electric PE — Eₚ = kq₁q₂/r (AHL)",
          "focus": "Work to assemble charges from infinity — can be positive or negative",
          "minutes": 55,
          "understandings": [
            "Electric PE of a system = work done to assemble from infinite separation",
            "For two point charges: Eₚ = kq₁q₂/r",
            "Unlike gravity: Eₚ can be POSITIVE (like charges repelled, work done TO push together) or NEGATIVE (unlike charges attracted, work released pulling together)",
            "Zero PE at r = ∞ by convention"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"In D.1 gravitational PE was always negative — masses attract. Electric PE is different: like charges repel, so pushing them together STORES energy (positive PE). Unlike charges attract, so bringing them together RELEASES energy (negative PE). The sign tells you whether the system is bound or unbound.\"</p><p><strong>Direct instruction (15 min):</strong> Eₚ = kq₁q₂/r. Like signs (both + or both −): Eₚ > 0 → repulsive system, energy was added to bring them together. Unlike signs: Eₚ < 0 → attractive system, energy was released. Compare with gravity: Eₚ = −Gm₁m₂/r (always negative because masses always attract). Electric PE can be either sign because charge can be positive or negative.</p><p><strong>Worked examples (20 min):</strong> (1) Two protons at 10⁻¹⁰ m: Eₚ = kq²/r = 2.3 × 10⁻¹⁸ J = 14.4 eV (positive — repulsive). (2) Proton-electron at 5.3 × 10⁻¹¹ m (hydrogen): Eₚ = −4.35 × 10⁻¹⁸ J = −27.2 eV (negative — bound). (3) Three charges at the corners of a triangle: total Eₚ = Eₚ₁₂ + Eₚ₁₃ + Eₚ₂₃ (add all pairwise contributions). (4) Work to bring a +3 μC charge from ∞ to 0.1 m from a +5 μC charge: W = ΔEₚ = kq₁q₂/r − 0 = 1.35 J.</p><p><strong>Practice (15 min):</strong> Eₚ calculations for 2 and 3 charge systems. Work done in assembling charge configurations.</p>",
          "engagementHook": {
            "title": "POSITIVE OR NEGATIVE? — THE SIGN TELLS THE STORY",
            "content": "\"Two positive charges near each other: Eₚ > 0. Release them → they fly apart → Eₚ → 0 → the stored energy becomes KE. Two opposite charges near each other: Eₚ < 0. To separate them, you must ADD energy (do work) until Eₚ = 0 at infinity. Negative PE = trapped. Positive PE = loaded spring, ready to release.\""
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The parallel between gravitational PE (−GMm/r, always negative) and electric PE (kq₁q₂/r, can be either sign) reveals a deep structural similarity between the two forces — and a key difference. The ability of electric force to repel is why matter doesn't collapse: electron-electron repulsion balances nuclear attraction."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define electric PE; state Eₚ = kq₁q₂/r; explain the sign",
            "AO2 — Calculate Eₚ for 2- and 3-charge systems; calculate work to assemble",
            "AO3 — Compare electric and gravitational PE"
          ],
          "resources": "Calculators, charge configuration diagrams, gravity-electricity PE comparison table",
          "formative": "\"(a) Two charges +4 μC and −6 μC are 0.05 m apart. Find Eₚ. Is the system bound? (b) Work to bring a +2 μC charge from ∞ to 0.2 m from a −3 μC charge. Is work done BY you or BY the field? (c) Three charges at triangle vertices (0.1 m sides): +1 μC, +2 μC, −3 μC. Find total Eₚ.\""
        },
        {
          "num": 2,
          "title": "Electric Potential Vₑ = kQ/r & Equipotentials (AHL)",
          "focus": "Potential per unit charge and surfaces of constant potential",
          "minutes": 55,
          "understandings": [
            "Electric potential Vₑ at a point: work done per unit charge bringing a positive test charge from infinity",
            "Vₑ = kQ/r (scalar, units: V = J/C). Positive for + charges, negative for − charges",
            "Vₑ = 0 at infinity by convention",
            "Equipotential surfaces: Vₑ = constant. No work to move charge along an equipotential",
            "Equipotentials ⊥ field lines always",
            "Equipotentials for: point charge (concentric spheres), parallel plates (flat planes), multiple charges (distorted surfaces)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Vₑ = Eₚ/q = kQ/r. Like gravitational potential Vg = −GM/r, but Vₑ can be positive (near + charge) or negative (near − charge). Equipotentials: identical concept to gravitational equipotentials. No work moving along them. Always perpendicular to field lines. Draw for: single + charge (concentric circles, values decreasing outward), single − charge (concentric, values increasing toward 0), parallel plates (flat equally-spaced planes), dipole (complex distorted shapes).</p><p><strong>Multiple charges (10 min):</strong> Vₑ is a scalar — for multiple charges: V_total = V₁ + V₂ + V₃ ... (just add, no vectors!). This is simpler than adding forces or fields (which require vector addition). Example: two +Q charges 2d apart. At the midpoint: V = 2kQ/d. At any point: calculate V from each charge and add algebraically.</p><p><strong>Worked examples (15 min):</strong> (1) Vₑ at 0.1 m from +5 μC: V = 4.5 × 10⁵ V. (2) Two charges +3 μC at (0,0) and −2 μC at (0.1, 0). Find V at (0.05, 0): V = kq₁/r₁ + kq₂/r₂. (3) Work to move a 2 nC charge from r = 0.1 m to r = 0.3 m from a +10 μC charge: W = qΔV. (4) Sketch equipotentials for a +/− charge pair (dipole) and verify ⊥ to field lines.</p><p><strong>Equipotential sketching (10 min):</strong> Students sketch equipotentials for: point charge, parallel plates, two equal + charges, dipole. Cross-reference with field line sketches. Verify perpendicularity.</p><p><strong>Practice (5 min):</strong> Potential and work calculations.</p>",
          "engagementHook": {
            "title": "POTENTIAL IS A SCALAR — THE EASY ONE",
            "content": "\"To find the total FIELD from multiple charges, you need vector addition — angles, components, Pythagoras. To find the total POTENTIAL, just ADD numbers. No vectors. That's why potential is often easier to work with than field.\" Students calculate V at a point from 4 charges — just 4 additions. Then calculate E — much harder (4 vectors). \"Same physics, different difficulty. Choose wisely.\""
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "The concept of electric potential was developed by George Green (1828) and later refined by Gauss and others. It provides a scalar description of what is fundamentally a vector phenomenon — a mathematical shortcut that simplifies many calculations without losing any physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define Vₑ; state Vₑ = kQ/r; describe equipotential surfaces",
            "AO2 — Calculate Vₑ from multiple charges; calculate W = qΔV",
            "AO3 — Sketch equipotentials and verify perpendicularity with field lines"
          ],
          "resources": "Calculators, equipotential sketching templates, field line + equipotential overlay sheets",
          "formative": "\"(a) Calculate Vₑ at 0.2 m from a −8 μC charge. (b) Two charges +5 μC and +5 μC are 0.4 m apart. Find V at the midpoint and at a point 0.3 m from each. (c) Work to move a 3 nC charge from V₁ = 500 V to V₂ = 200 V. Is work done BY the field or against it? (d) Sketch equipotentials for two equal positive charges. Where is V highest?\""
        },
        {
          "num": 3,
          "title": "Potential Gradient & Work Done (AHL)",
          "focus": "E = −ΔVₑ/Δr and W = qΔVₑ",
          "minutes": 50,
          "understandings": [
            "Electric field strength = negative potential gradient: E = −ΔVₑ/Δr",
            "The field points in the direction of DECREASING potential (from + to −)",
            "Work done moving charge q: W = qΔVₑ",
            "Can be expressed in joules or electronvolts (1 eV = 1.6 × 10⁻¹⁹ J)",
            "On a Vₑ vs r graph: gradient = −E at that point"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> E = −ΔVₑ/Δr — identical structure to g = −ΔVg/Δr from D.1. The field is the 'slope' of the potential landscape. Steeper slope = stronger field. For parallel plates: V changes linearly → E = V/d (constant). For point charges: V changes as 1/r → E changes as 1/r² (gradient of 1/r is 1/r²). Work: W = qΔVₑ. Positive charge moving from high to low V: W done BY the field (charge accelerates). Moving from low to high: W done AGAINST the field (needs external energy). Electronvolt: the energy gained by an electron accelerated through 1 V. 1 eV = 1.6 × 10⁻¹⁹ J.</p><p><strong>Worked examples (20 min):</strong> (1) From a Vₑ-r graph: draw tangent at r = 0.05 m, gradient = −E. (2) Parallel plates (V = 1000 V, d = 2 cm): E = 50,000 V/m. Work to move an electron across: W = eV = 1000 eV = 1.6 × 10⁻¹⁶ J. (3) An electron accelerated from rest through 5000 V: KE = eV = 5000 eV. Speed: ½mv² = eV → v = √(2eV/m). (4) Proton accelerated through 10⁶ V: energy in eV and joules.</p><p><strong>Practice (15 min):</strong> Gradient, work, and energy calculations. Convert between eV and J. Determine E from Vₑ-r graphs.</p>",
          "engagementHook": {
            "title": "THE ELECTRONVOLT — A PHYSICIST'S FAVOURITE UNIT",
            "content": "\"A joule is too big for atomic physics. A single electron through 1 V gains 1.6 × 10⁻¹⁹ J. Writing that every time is painful. So physicists invented the electronvolt: 1 eV = 1.6 × 10⁻¹⁹ J. An electron through 1 V gains 1 eV. Through 100 V: 100 eV. Through 1 million V: 1 MeV.\" The particle physics energy scale: chemical bonds ~ 1 eV, X-rays ~ keV, nuclear ~ MeV, LHC ~ TeV."
          },
          "nos": {
            "tags": ["Models", "Patterns", "Measurements"],
            "description": "The electronvolt exemplifies how physicists create units suited to their scale of investigation. Chemistry works in kJ/mol, atomic physics in eV, nuclear physics in MeV, and particle physics in GeV-TeV. Each scale has its natural unit — using the wrong one makes numbers unwieldy."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State E = −ΔVₑ/Δr; define the electronvolt",
            "AO2 — Calculate E from potential gradient; calculate W = qΔV in J and eV",
            "AO3 — Analyse Vₑ-r graphs to extract field strength"
          ],
          "resources": "Vₑ vs r graphs (printed), calculators, eV-J conversion reference",
          "formative": "\"(a) An electron is accelerated from rest through 2000 V. Find its KE in eV and J, then its speed. (b) Parallel plates: 600 V, 3 cm apart. Find E. Find the force on a proton between them and its acceleration. (c) From a Vₑ-r graph: estimate E at r = 0.1 m by measuring the gradient. (d) Convert 13.6 eV to joules. (This is the ionisation energy of hydrogen.)\""
        },
        {
          "num": 4,
          "title": "Equipotentials for Multiple Configurations (AHL)",
          "focus": "Point charges, charged spheres, and parallel plates — complete picture",
          "minutes": 80,
          "understandings": [
            "Equipotential surfaces for: a point charge, a collection of up to 4 point charges, inside/outside a solid charged conducting sphere, inside/outside a hollow charged conducting sphere, between parallel plates",
            "Inside a conductor: E = 0, V = constant (equipotential throughout the volume)",
            "Outside a charged sphere: field and potential behave as if all charge is at the centre",
            "No work done moving charge on an equipotential surface"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> Systematic coverage of all required configurations: (a) Point charge: concentric spheres, V = kQ/r. (b) 2-4 point charges: superpose individual equipotentials. Near charges: circular. Between: distorted. Neutral points where V from opposing charges sum to specific values. (c) Solid conducting sphere: charge on surface. Inside: E = 0, V = constant = V_surface. Outside: same as point charge at centre. (d) Hollow conducting sphere: same as solid (charge on outer surface only). (e) Parallel plates: flat equally-spaced equipotentials between the plates. V changes linearly from one plate to the other.</p><p><strong>Graphical analysis (20 min):</strong> Draw V vs r graphs for: (a) point charge (hyperbola), (b) solid sphere (constant inside, hyperbola outside — continuous at surface), (c) hollow sphere (same shape). Draw E vs r: (a) point charge (1/r²), (b) solid sphere (0 inside, 1/r² outside — discontinuous at surface). Students annotate both graphs with field line and equipotential sketches.</p><p><strong>Lab (15 min):</strong> EQUIPOTENTIAL MAPPING — Use conducting paper or a water tray with electrodes. Connect a voltmeter and probe. Map equipotential lines between: (a) two point electrodes, (b) two parallel plates, (c) a point and a plate. Students discover the equipotential shapes experimentally.</p><p><strong>Worked examples (15 min):</strong> (1) A conducting sphere of radius R carries charge Q. Find V and E at: r = R/2 (inside), r = R (surface), r = 2R (outside). (2) Two parallel plates: V = 400 V, d = 4 cm. Draw 4 equipotentials between them, equally spaced. State V at each. (3) Four charges at square corners: find V at the centre.</p><p><strong>Practice (10 min):</strong> V and E calculations for conductors and multi-charge configurations.</p>",
          "engagementHook": {
            "title": "THE FARADAY CAGE — ZERO FIELD INSIDE",
            "content": "\"Inside a conducting shell: E = 0 everywhere. This is a Faraday cage — it shields the interior from ALL external electric fields.\" Demo: place a radio inside a metal mesh cage → signal disappears. \"Your microwave oven has a Faraday cage (the metal mesh on the door) to keep the microwaves IN. Your car's metal body protects you from lightning (mostly). MRI rooms are Faraday cages to block external EM interference.\""
          },
          "nos": {
            "tags": ["Theories", "Technology", "Observations"],
            "description": "Faraday demonstrated the cage effect in 1836 by sitting inside a large metal-mesh room while it was bombarded with high-voltage sparks. He was unharmed — the charge stayed on the outer surface. This dramatic demonstration proved a theoretical prediction and has practical applications from electronics shielding to lightning protection."
          },
          "atl": ["Thinking skills", "Research skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe V and E inside and outside conducting spheres",
            "AO2 — Sketch equipotentials for all required configurations; calculate V from multiple charges",
            "AO3 — Analyse V-r and E-r graphs for conductors"
          ],
          "resources": "Conducting paper + voltmeter + probe (equipotential mapping), metal mesh cage + radio (Faraday cage demo), calculators, V-r and E-r graph templates",
          "formative": "\"(a) A solid conducting sphere (R = 0.1 m, Q = +4 μC). Find V and E at r = 0.05 m, r = 0.1 m, r = 0.2 m. (b) Sketch V vs r and E vs r for this sphere. (c) Why is E = 0 inside the conductor? (d) Map equipotentials between two point electrodes on conducting paper. What shape are they? (e) Why does a Faraday cage protect electronics from lightning?\""
        }
      ]
    },
    {
      "name": "Synthesis & Problem Solving",
      "color": "accent4",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Comparing Gravitational & Electric Fields",
          "focus": "Systematic comparison — the parallels and the differences",
          "minutes": 55,
          "understandings": [
            "Both are inverse-square force laws: F ∝ 1/r²",
            "Both have field strength = force per unit test object (g = F/m, E = F/q)",
            "Both have potential defined as zero at infinity",
            "Key differences: gravity always attracts (one sign of mass); electric force can attract or repel (two signs of charge)",
            "Gravitational PE always negative; electric PE can be positive or negative",
            "Gravity is vastly weaker than electricity: G << k; the ratio for protons is ~10³⁶"
          ],
          "teachingStrategy": "<p><strong>Comparison table (20 min):</strong> Students build the master comparison table — the single most important synthesis in Theme D: Force law | Field strength | Potential | PE | Potential gradient | Field lines | Equipotentials | Sign(s) | Relative strength. Each row compares gravity and electricity. This table summarises two entire topics in one page.</p><p><strong>Analogy problems (20 min):</strong> \"Every gravitational problem has an electric analogue.\" (1) Escape speed from a charged sphere: ½mv² = kQq/r (analogue of ½mv² = GMm/r). (2) \"Orbit\" of an electron around a proton: kq²/r² = mv²/r (analogue of GMm/r² = mv²/r). Calculate the electron's speed in hydrogen — preview of E.1 Bohr model. (3) Resultant field between two charges — same method as resultant g between two masses.</p><p><strong>Discussion (10 min):</strong> \"Why does gravity dominate at large scales (planets, galaxies) but electricity dominates at small scales (atoms, molecules)?\" Because bulk matter is electrically neutral — positive and negative cancel. Gravity never cancels because there's no 'negative mass.' At the atomic level, individual charges dominate.</p><p><strong>Practice (5 min):</strong> Mixed gravity/electricity comparison questions.</p>",
          "engagementHook": {
            "title": "ONE TABLE TO RULE THEM ALL",
            "content": "\"D.1 and D.2 are the SAME PHYSICS with different constants.\" Students fill in a giant comparison poster. Every formula has a twin. g = GM/r² ↔ E = kQ/r². Vg = −GM/r ↔ Vₑ = kQ/r. Eₚ = −GMm/r ↔ Eₚ = kq₁q₂/r. \"If you understand one, you understand both. The IB loves comparison questions — this table is your best friend.\""
          },
          "nos": {
            "tags": ["Patterns", "Theories"],
            "description": "The structural parallel between gravity and electricity inspired Einstein to seek a 'unified field theory' connecting all forces. He never succeeded, but the quest continues: the Standard Model unifies electromagnetic, weak, and strong forces. Gravity remains the outlier — unifying it with quantum mechanics is the biggest unsolved problem in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Communicator"],
          "ao": [
            "AO1 — List the parallels and differences between gravitational and electric fields",
            "AO2 — Solve analogue problems in both fields",
            "AO3 — Analyse why gravity dominates at large scales but electricity at small scales"
          ],
          "resources": "Large comparison poster template, calculators, previous D.1 and D.2 notes",
          "formative": "\"Complete the comparison table for all quantities. Then: (a) An electron 'orbits' a proton at 5.3 × 10⁻¹¹ m. Using kq²/r² = mv²/r, find its speed. (b) Compare with the Moon's orbital speed around Earth. (c) Why can't a gravitational analogue of an electric dipole exist? (d) In what ways are gravitational and electric fields fundamentally different despite having identical mathematical structures?\""
        },
        {
          "num": 2,
          "title": "Advanced D.2 Problem Solving",
          "focus": "Multi-step problems combining charge, field, potential, and energy",
          "minutes": 65,
          "understandings": [
            "Combine Coulomb's law, field strength, potential, PE, and work in complex problems",
            "Common scenarios: charged particles accelerated through potential differences, particles in uniform fields, multi-charge configurations",
            "Use energy methods when possible (scalar, simpler than force/vector methods)",
            "Link to D.3 (motion in EM fields) and E.1 (atomic structure)"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Decision framework: (a) Force → F = kq₁q₂/r². (b) Field → E = kQ/r² or E = V/d. (c) Potential → Vₑ = kQ/r. (d) Energy → Eₚ = kq₁q₂/r, KE = qV. (e) Work → W = qΔV. Choose scalar methods (V, Eₚ, W) over vector methods (F, E) when possible.</p><p><strong>Multi-step problems (35 min):</strong> Groups tackle: (1) An electron accelerated through 500 V enters a uniform field between parallel plates (V = 200 V, d = 2 cm). Find: entry speed, E between plates, force, acceleration, time to cross, vertical deflection. (2) Two charges +Q and −Q separated by distance d. Find: V and E at the midpoint, at a point distance d from each charge (equilateral triangle position), and the work to bring a third charge from ∞ to that point. (3) A charged sphere (R = 5 cm, Q = 10 μC): graph V and E vs r from r = 0 to r = 0.5 m. Find the PE of a 1 nC charge at the surface. Find the work to move it to 0.3 m. (4) Alpha particle (q = 2e) approaches a gold nucleus (Z = 79). Find the distance of closest approach using energy conservation: KE = kZe × 2e / r_min.</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style D.2 problems.</p><p><strong>Wrap-up (5 min):</strong> \"D.2 gives you the tools. D.3 shows you what happens when charges MOVE in these fields.\"</p>",
          "engagementHook": {
            "title": "RUTHERFORD'S CLOSEST APPROACH — HOW CLOSE DID THE ALPHA GET?",
            "content": "\"In 1909, Rutherford fired alpha particles (KE = 7.7 MeV) at gold nuclei (Z = 79). The alphas slowed, stopped, and reversed — repelled by the nucleus. How close did they get?\" Energy conservation: ½mv² = k(2e)(79e)/r_min. Solve: r_min = k × 2 × 79 × e² / KE ≈ 3 × 10⁻¹⁴ m. \"The nucleus is SMALLER than this — the alpha never reached it. This calculation told Rutherford the nucleus was tiny.\" Preview of E.1."
          },
          "nos": {
            "tags": ["Theories", "Measurements", "Observations"],
            "description": "Rutherford's scattering experiment used Coulomb's law and energy conservation to deduce the size of the nucleus — a quantity too small to measure directly. Using known physics to probe the unknown is the essence of experimental physics. The same technique (scattering with energy analysis) is still used at the LHC today."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Inquirer"],
          "ao": [
            "AO2 — Apply multiple D.2 concepts in combination",
            "AO3 — Evaluate which approach (force, field, potential, energy) is most efficient"
          ],
          "resources": "Problem sets, whiteboards, calculators, Rutherford scattering diagram",
          "formative": "\"An alpha particle (q = 2e, KE = 5 MeV) approaches a silver nucleus (Z = 47) head-on. (a) Find the distance of closest approach. (b) Calculate E at that distance. (c) Calculate the force on the alpha at closest approach. (d) Sketch the trajectory and the PE vs r graph, labelling key points. (e) If the alpha had twice the KE, by what factor would r_min change?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "D.1 Gravitational Fields", "question": "How are electric and magnetic fields like gravitational fields? What are the key differences?" },
    { "topic": "D.3 Motion in EM Fields", "question": "How do charged particles move in uniform electric and magnetic fields?" },
    { "topic": "B.5 Current and Circuits", "question": "How does the microscopic picture of electron drift connect to E and V concepts?" },
    { "topic": "E.1 Structure of the Atom", "question": "How does Coulomb's law explain the stability and energy levels of the hydrogen atom?" },
    { "topic": "IB Linking (Quantisation)", "question": "Charge is quantised. Which other physical quantities are quantised?" },
    { "topic": "IB Linking (Fundamental forces)", "question": "What are the relative strengths of the four fundamental forces?" }
  ]
},
"D3": {
  "title": "Motion in Electromagnetic Fields",
  "code": "D.3",
  "theme": "D",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How do charged particles move in magnetic fields?",
    "What can be deduced about the nature of a charged particle from observations of it moving in electric and magnetic fields?"
  ],
  "groups": [
    {
      "name": "Charged Particles in Electric Fields",
      "color": "accent5",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Motion of a Charged Particle in a Uniform Electric Field",
          "focus": "Acceleration in E fields — the electric 'projectile'",
          "minutes": 55,
          "understandings": [
            "A charged particle in a uniform electric field (e.g., between parallel plates) experiences a constant force F = qE",
            "If the particle enters parallel to E: it accelerates (or decelerates) along the field direction — like free fall under gravity",
            "If the particle enters perpendicular to E: it follows a PARABOLIC path — identical to projectile motion under gravity but with a = qE/m instead of g",
            "The motion can be resolved into components: constant velocity along the field-free direction, uniform acceleration along the field direction"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"An electron enters the space between two parallel plates. There's no gravity to worry about — but there IS an electric field. What happens?\" If it enters along the field: it accelerates (like a ball thrown downward). If it enters perpendicular: it curves — a parabola. \"This is projectile motion from A.1, but with qE/m replacing g.\"</p><p><strong>Direct instruction (15 min):</strong> Between parallel plates: E = V/d (uniform). Force on charge q: F = qE = qV/d. Acceleration: a = F/m = qE/m = qV/(md). Case 1: particle enters parallel to E — SUVAT applies with a = qE/m. Case 2: particle enters perpendicular to E — projectile motion: horizontal (constant v), vertical (a = qE/m). Path is parabolic. Exit velocity: combine components using Pythagoras. Deflection: use y = ½at² where t = L/v_horizontal (L = plate length).</p><p><strong>Worked examples (20 min):</strong> (1) Electron accelerated from rest through 1000 V: KE = eV → v = √(2eV/m) = 1.87 × 10⁷ m/s. (2) Electron enters perpendicular to E = 5 × 10⁴ V/m between plates 10 cm long at v = 10⁷ m/s. Find: time in the field, vertical acceleration, vertical deflection at exit, exit angle. (3) A proton in the same field — compare deflection (much less because m_proton >> m_electron). (4) CRT: electrons accelerated, deflected by plates, hit screen — this is how old TVs worked.</p><p><strong>Practice (15 min):</strong> Projectile-in-E-field problems with increasing complexity.</p>",
          "engagementHook": {
            "title": "THE ELECTRIC PROJECTILE — BENDING ELECTRON BEAMS",
            "content": "\"Old TV screens (CRTs) worked by firing an electron beam and deflecting it with electric fields between plates. Sweeping the beam across the screen 25 times per second created the image.\" Show a CRT tube diagram. Students calculate the deflection of an electron beam — they're solving the physics that powered television for 70 years. \"Every pixel on an old TV was placed by solving F = qE and projectile kinematics.\""
          },
          "nos": {
            "tags": ["Technology", "Models", "Patterns"],
            "description": "The CRT (cathode ray tube) was invented by Karl Ferdinand Braun in 1897. J.J. Thomson used it to discover the electron (also 1897) by measuring its charge-to-mass ratio. The same device that enabled television also revealed the fundamental nature of matter — technology and pure science advancing together."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe motion of a charge in a uniform E field (parallel and perpendicular entry)",
            "AO2 — Calculate acceleration, deflection, exit speed, and exit angle for a charged particle between plates",
            "AO3 — Analyse the analogy between projectile motion (g) and E-field motion (qE/m)"
          ],
          "resources": "CRT tube diagram, parallel plate diagrams, calculators, projectile-in-E-field problem sets",
          "formative": "\"An electron (m = 9.1 × 10⁻³¹ kg) enters a uniform E field of 2 × 10⁴ V/m perpendicular to the field at 3 × 10⁷ m/s. The plates are 5 cm long. (a) Time spent in the field. (b) Vertical acceleration. (c) Vertical deflection at exit. (d) Exit angle. (e) A proton enters at the same speed. Compare its deflection. Why is it different?\""
        },
        {
          "num": 2,
          "title": "Velocity Selectors — Crossed E and B Fields",
          "focus": "When electric and magnetic forces balance — selecting particles by speed",
          "minutes": 45,
          "understandings": [
            "When uniform electric and magnetic fields are perpendicular to each other and to the particle's velocity: F_E = qE (one direction), F_B = qvB (opposite direction)",
            "For a specific speed: qE = qvB → v = E/B — the forces balance and the particle travels straight",
            "Faster particles curve one way (F_B > F_E); slower particles curve the other (F_E > F_B)",
            "This is a velocity selector: only particles with v = E/B pass through undeflected",
            "Used in mass spectrometers and particle physics experiments"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How do you select ONLY particles of a specific speed from a beam containing many speeds? Put them in crossed E and B fields. Only those with v = E/B go straight. Everything else curves away.\" This is the velocity selector — a speed filter made of pure physics.</p><p><strong>Direct instruction (15 min):</strong> Set up: E field pointing up, B field pointing into the page, particle moving right with charge +q. F_E = qE (upward). F_B = qvB (downward, from F = qvB and the right-hand rule). For balance: qE = qvB → v = E/B. If v > E/B: F_B > F_E → curves downward. If v < E/B: F_E > F_B → curves upward. Only v = E/B goes straight → velocity selector. Note: the selected speed doesn't depend on q or m — it selects by speed alone.</p><p><strong>Worked examples (15 min):</strong> (1) E = 30 kV/m, B = 0.5 T → selected speed: v = E/B = 60,000 m/s. (2) A beam contains protons at speeds 5 × 10⁴ to 8 × 10⁴ m/s. Design a selector for 6 × 10⁴ m/s: choose E and B such that E/B = 6 × 10⁴. (3) After the selector: particles enter a region with only B → circular motion (next subtopic). From the radius: determine q/m. This is a mass spectrometer.</p><p><strong>Practice (10 min):</strong> Velocity selector calculations and mass spectrometer problems.</p>",
          "engagementHook": {
            "title": "THE SPEED FILTER — PHYSICS AS A SIEVE",
            "content": "\"Imagine a crowd of runners on a treadmill. If you set the treadmill to 10 km/h, only runners at exactly 10 km/h stay in place. Slower ones fall back, faster ones fly forward.\" A velocity selector does the same with charged particles: E pushes one way, B pushes the other, and only v = E/B stays straight. \"Mass spectrometers use this to identify unknown atoms — measure their speed, then their circular radius in a B field, and you know exactly what element they are.\""
          },
          "nos": {
            "tags": ["Technology", "Measurements", "Models"],
            "description": "The velocity selector was developed by Wilhelm Wien (1898) and refined by J.J. Thomson and Francis Aston for mass spectrometry. Mass spectrometers revolutionised chemistry, biology, and forensics — they can identify molecules by mass with extraordinary precision. Modern versions are used in drug testing, environmental monitoring, and space exploration (Mars rovers carry miniature mass spectrometers)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe motion of a charge in perpendicular E and B fields",
            "AO2 — Calculate the selected velocity v = E/B; design a selector for a given speed",
            "AO3 — Analyse how the velocity selector forms part of a mass spectrometer"
          ],
          "resources": "Velocity selector diagram, mass spectrometer schematic, calculators",
          "formative": "\"A velocity selector has E = 2.4 × 10⁴ V/m and B = 0.4 T. (a) What speed passes through undeflected? (b) Does this depend on the particle's charge or mass? (c) A particle with v = 5 × 10⁴ m/s enters. In which direction does it curve? (d) After the selector, particles enter a region with B = 0.4 T only. A singly-charged ion makes a semicircle of radius 0.12 m. Find q/m and identify the ion.\""
        }
      ]
    },
    {
      "name": "Charged Particles in Magnetic Fields",
      "color": "accent3",
      "totalMinutes": 140,
      "subtopics": [
        {
          "num": 1,
          "title": "Force on a Moving Charge — F = qvB sinθ",
          "focus": "The magnetic force is always perpendicular to velocity — it changes direction, not speed",
          "minutes": 55,
          "understandings": [
            "The magnitude of the force on a charge moving in a B field: F = qvB sinθ, where θ is the angle between v and B",
            "Direction: right-hand rule (for positive charges). Thumb = v, fingers = B, palm pushes = F. For negative charges: force is opposite",
            "F is always perpendicular to v → the magnetic force does NO WORK → KE stays constant → speed doesn't change, only direction",
            "If v ∥ B (θ = 0): F = 0 — no force. If v ⊥ B (θ = 90°): F = qvB — maximum force, circular motion"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Gravity pulls you DOWN (parallel to g). Electric fields push you ALONG the field. Magnetic fields do something weird: they push you SIDEWAYS — perpendicular to BOTH your velocity AND the field. If you try to walk north in a magnetic field pointing up, you get pushed EAST.\"</p><p><strong>Direct instruction (20 min):</strong> F = qvB sinθ. Maximum when v ⊥ B (θ = 90°). Zero when v ∥ B (θ = 0°). Direction: right-hand rule (for +q). Point fingers in v direction, curl toward B, thumb points in F direction. For −q (electrons): F is opposite. Key property: F ⊥ v ALWAYS → the force NEVER does work → KE = constant → speed constant → only direction changes. This is fundamentally different from electric and gravitational forces, which CAN change speed.</p><p><strong>Demo (10 min):</strong> Electron beam tube (or video): electrons in a vacuum tube pass through a B field. The beam curves into a CIRCLE. \"The magnetic force provides centripetal force — constantly turning the electron without changing its speed.\" Vary B → radius changes. Vary v (accelerating voltage) → radius changes.</p><p><strong>Worked examples (10 min):</strong> (1) Proton at 10⁶ m/s perpendicular to B = 0.1 T: F = 1.6 × 10⁻¹⁹ × 10⁶ × 0.1 = 1.6 × 10⁻¹⁴ N. (2) Same proton at 45° to B: F = 1.6 × 10⁻¹⁴ × sin45° = 1.13 × 10⁻¹⁴ N. (3) Electron at 5 × 10⁶ m/s in B = 0.2 T: find F and the direction of the force.</p><p><strong>Practice (10 min):</strong> F = qvB sinθ calculations and right-hand rule direction problems.</p>",
          "engagementHook": {
            "title": "THE FORCE THAT NEVER DOES WORK",
            "content": "\"Every other force you've met can speed things up or slow them down. Gravity accelerates falling objects. Friction decelerates sliding ones. Electric fields accelerate charges. But the magnetic force CANNOT change speed — only direction. It's like a barrier that constantly redirects you without pushing or pulling. That's why KE is constant in a B field.\" Students verify: F ⊥ v → W = Fs cosθ = Fs cos90° = 0. Zero work, always."
          },
          "nos": {
            "tags": ["Models", "Patterns", "Observations"],
            "description": "The magnetic force is unique among fundamental forces: it depends on VELOCITY, not just position. A stationary charge in a B field feels nothing. This velocity-dependence troubled physicists until Einstein showed that electric and magnetic forces are aspects of the SAME force, seen from different reference frames. A purely electric force in one frame appears partly magnetic in another."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer"],
          "ao": [
            "AO1 — State F = qvB sinθ; explain why F does no work",
            "AO2 — Calculate F for various v, B, θ; determine direction using right-hand rule",
            "AO3 — Analyse why speed is constant but direction changes in a B field"
          ],
          "resources": "Electron beam tube (or video), magnets, right-hand rule practice cards, calculators",
          "formative": "\"(a) A proton moves at 2 × 10⁶ m/s perpendicular to B = 0.5 T. Find F and its direction. (b) The proton now moves at 30° to B. Find F. (c) An electron moves at the same speed. Find F — same magnitude? Same direction? (d) Explain why the magnetic force cannot change the KE of a particle. Use W = Fs cosθ.\""
        },
        {
          "num": 2,
          "title": "Circular Motion in B Fields & Charge-to-Mass Ratio",
          "focus": "qvB = mv²/r → r = mv/(qB) and q/m determination",
          "minutes": 50,
          "understandings": [
            "When v ⊥ B: the magnetic force provides centripetal force → circular motion",
            "qvB = mv²/r → radius of circular path: r = mv/(qB)",
            "Larger mass → larger r (harder to turn). Larger charge or B → smaller r (stronger force)",
            "The charge-to-mass ratio q/m can be determined by measuring the radius of the circular path in a known B field",
            "q/m = v/(Br) — this is how Thomson discovered the electron and measured e/m"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> F_magnetic provides F_centripetal: qvB = mv²/r. Solve: r = mv/(qB). Rearrange: q/m = v/(Br). If you know v (from a velocity selector) and measure r (from the circular path) in known B: you get q/m. This is how J.J. Thomson identified the electron (1897): he found q/m was 1836× larger than for hydrogen ions → either the charge was huge or the mass was tiny. He concluded: a new particle with mass ~1/1836 of a proton. The electron.</p><p><strong>Worked examples (20 min):</strong> (1) Proton at 10⁶ m/s in B = 0.1 T: r = mv/(qB) = 1.67×10⁻²⁷ × 10⁶ / (1.6×10⁻¹⁹ × 0.1) = 0.104 m ≈ 10 cm. (2) Electron at same speed: r = 9.1×10⁻³¹ × 10⁶ / (1.6×10⁻¹⁹ × 0.1) = 5.7 × 10⁻⁵ m ≈ 0.057 mm — vastly smaller (lighter → tighter curve). (3) Unknown particle: r = 0.15 m, v = 5 × 10⁵ m/s, B = 0.2 T. q/m = v/(Br) = 1.67 × 10⁷ C/kg. Compare with known particles → it's a singly-charged nitrogen ion. (4) Period of circular motion: T = 2πr/v = 2πm/(qB) — independent of v! (The cyclotron frequency.)</p><p><strong>Discussion (10 min):</strong> Applications: (a) Cyclotron (particle accelerator): particles spiral outward as energy increases, T stays constant → can be accelerated by AC electric field at fixed frequency. (b) Mass spectrometer: after velocity selection, particles curve in B → different masses curve differently → separate by mass. (c) Earth's magnetic field: protects us from solar wind particles — they spiral along field lines, trapped in the Van Allen belts.</p><p><strong>Practice (5 min):</strong> r and q/m calculations.</p>",
          "engagementHook": {
            "title": "THOMSON'S DISCOVERY — FINDING THE ELECTRON",
            "content": "\"In 1897, J.J. Thomson measured the circular radius of 'cathode rays' in a known B field. He calculated q/m = 1.76 × 10¹¹ C/kg — 1836× larger than for hydrogen ions. Either the charge was enormous or the mass was tiny. He chose tiny — and discovered the electron, the first subatomic particle.\" Students repeat the calculation from given data and 'discover' the electron themselves."
          },
          "nos": {
            "tags": ["Measurements", "Theories", "Observations"],
            "description": "Thomson's discovery of the electron (1897) using crossed E and B fields is one of the most important experiments in physics. It proved atoms were NOT indivisible — they contained smaller particles. This opened the door to atomic physics, quantum mechanics, and eventually nuclear energy. One measurement of q/m changed everything."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State r = mv/(qB); explain how q/m is determined from circular motion in B",
            "AO2 — Calculate r, q/m, and T for charged particles in B fields",
            "AO3 — Analyse Thomson's experiment and mass spectrometer operation"
          ],
          "resources": "Electron beam tube (or video/simulation), calculators, Thomson experiment data, mass spectrometer diagram",
          "formative": "\"(a) An electron at 4 × 10⁶ m/s enters B = 0.01 T perpendicular to the field. Find r and T. (b) A proton at the same speed in the same field: find r. Compare. (c) An unknown singly-charged ion has r = 0.25 m at v = 3 × 10⁵ m/s in B = 0.3 T. Find q/m and the ion's mass. Identify it. (d) Why does T = 2πm/(qB) NOT depend on v? What does this imply for cyclotrons?\""
        },
        {
          "num": 3,
          "title": "Force on Current-Carrying Conductors & Parallel Wires",
          "focus": "F = BIL sinθ and F/L = μ₀I₁I₂/(2πr)",
          "minutes": 35,
          "understandings": [
            "Force on a current-carrying conductor in a B field: F = BIL sinθ, where I is current, L is length of conductor in the field, θ is angle between current and B",
            "Direction: right-hand rule (or Fleming's left-hand rule) — thumb = force, index = field, middle = current",
            "This force is the basis of all electric motors",
            "Force per unit length between two parallel wires: F/L = μ₀I₁I₂/(2πr), where μ₀ = 4π × 10⁻⁷ T·m/A",
            "Currents in the same direction: attractive. Opposite directions: repulsive"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> A current = moving charges. Moving charges in B feel F = qvB. For N charges in a wire of length L: F = NqvB = (Nqv)B = ILB (since I = Nqv/L). With angle: F = BIL sinθ. Direction: use the right-hand rule or Fleming's left-hand rule. This force makes the wire JUMP — it's how motors work. For two parallel wires: each creates a B field that exerts a force on the other. Same direction currents: attract (their B fields pull them together). Opposite: repel. F/L = μ₀I₁I₂/(2πr).</p><p><strong>Demo (10 min):</strong> (1) Wire on rails in a magnet: turn on current → wire rolls (motor effect). Reverse current → rolls the other way. This IS a motor — in its simplest form. (2) Two parallel wires carrying current: show attraction (same direction) and repulsion (opposite). Flexible wires visibly move together or apart.</p><p><strong>Worked examples (10 min):</strong> (1) Wire (L = 0.5 m, I = 3 A) perpendicular to B = 0.4 T: F = 0.6 N. (2) Same wire at 60° to B: F = 0.52 N. (3) Two wires 5 cm apart, each carrying 10 A: F/L = 4π×10⁻⁷ × 100/(2π × 0.05) = 4 × 10⁻⁴ N/m = 0.4 mN per metre — small but measurable.</p><p><strong>Practice (5 min):</strong> F = BIL and parallel wire calculations.</p>",
          "engagementHook": {
            "title": "THE JUMPING WIRE — A MOTOR IN 5 SECONDS",
            "content": "Place an aluminium rod across two rails between the poles of a strong magnet. Turn on the current — the rod SHOOTS along the rails. \"That rod is a motor. Current × magnetic field = force. Every electric motor, from your phone's vibration motor to a Tesla's drivetrain, works on F = BIL.\" Reverse the current → rod moves the other way. Change B direction → same. Students predict and verify."
          },
          "nos": {
            "tags": ["Technology", "Observations", "Global impact"],
            "description": "Michael Faraday built the first electric motor in 1821 — just one year after Ørsted discovered the link between electricity and magnetism. The motor effect (F = BIL) has transformed civilisation: transport, industry, computing, and medicine all depend on electric motors. An estimated 45% of global electricity consumption drives electric motors."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State F = BIL sinθ and F/L = μ₀I₁I₂/(2πr); determine force direction",
            "AO2 — Calculate force on a conductor and force between parallel wires",
            "AO3 — Explain why same-direction currents attract and opposite repel"
          ],
          "resources": "Magnet + rails + aluminium rod (motor effect demo), two parallel flexible wires + power supply, calculators",
          "formative": "\"(a) A 0.3 m wire carries 5 A perpendicular to B = 0.8 T. Find F. (b) At 45° to B: find F. (c) Two parallel wires 0.1 m apart carry 20 A each in the same direction. Find F/L. Attract or repel? (d) The wires now carry current in opposite directions. What changes? (e) Explain why F = BIL is the basis of every electric motor.\""
        }
      ]
    },
    {
      "name": "Synthesis & Applications",
      "color": "accent4",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Mass Spectrometry, Cyclotrons & Real Applications",
          "focus": "How crossed fields and circular motion are used in science and technology",
          "minutes": 55,
          "understandings": [
            "Mass spectrometer: velocity selector (v = E/B₁) → B₂ field → circular path (r = mv/(qB₂)) → separation by mass",
            "Cyclotron: particles spiral in B field, accelerated by alternating E field each half-turn, T = 2πm/(qB) is constant",
            "Earth's magnetic field traps charged particles from the solar wind → Van Allen belts, aurora",
            "Applications: mass spectrometry in chemistry/forensics, particle accelerators in physics, MRI in medicine"
          ],
          "teachingStrategy": "<p><strong>Mass spectrometer (15 min):</strong> Full walkthrough: ionise the sample → accelerate through V (gives KE = qV → v = √(2qV/m)) → velocity selector (v = E/B₁) → enter B₂ region → circular path with r = mv/(qB₂). Different masses → different r → land at different positions on the detector. From r: calculate m. Students solve a complete mass spectrometer problem: identify an isotope from its measured r.</p><p><strong>Cyclotron (10 min):</strong> Two D-shaped electrodes ('dees') in a B field. Particles spiral outward as they gain energy each half-turn. Key: T = 2πm/(qB) is independent of v → the AC frequency stays fixed. As v increases, r increases (r = mv/(qB)), but the particle takes the same time per half-turn. Maximum energy: when the particle reaches the edge. Used for: medical isotope production, proton therapy for cancer.</p><p><strong>Aurora & Van Allen belts (10 min):</strong> Solar wind particles (mainly protons and electrons) hit Earth's magnetic field. They spiral along field lines (F = qvB → circular component) and bounce between the poles. Near the poles: they collide with atmospheric gases → aurora. \"The Northern Lights are a massive physics demonstration: charged particles spiralling in a magnetic field and exciting gas molecules.\"</p><p><strong>Worked examples (15 min):</strong> (1) Mass spectrometer: r = 0.15 m, B = 0.2 T, V_accel = 1000 V, charge = e. Find m and identify the element. (2) Cyclotron: B = 1.5 T, proton. Find the frequency of the AC supply. Find the maximum KE if the dee radius is 0.5 m. (3) A proton in the Van Allen belt at B = 5 × 10⁻⁵ T, v = 10⁷ m/s: find r of the spiral.</p><p><strong>Practice (5 min):</strong> Application problems.</p>",
          "engagementHook": {
            "title": "THE AURORA — PHYSICS LIGHT SHOW",
            "content": "Show stunning aurora footage. \"Protons and electrons from the Sun hit Earth's magnetic field at millions of m/s. They spiral along field lines (F = qvB → circular component), bounce between poles, and near the poles, they collide with nitrogen (green light) and oxygen (red/purple light). The aurora IS charged particle motion in a magnetic field — the most beautiful physics demonstration on Earth.\""
          },
          "nos": {
            "tags": ["Technology", "Observations", "Science as a shared endeavour"],
            "description": "Mass spectrometry, cyclotrons, and magnetic shielding all use the same F = qvB physics. Francis Aston won the 1922 Nobel Prize for mass spectrometry (discovering isotopes). Ernest Lawrence won the 1939 Nobel for the cyclotron. The same equation discovered the electron, revealed isotopes, and now treats cancer with proton beams."
          },
          "atl": ["Thinking skills", "Communication skills", "Research skills"],
          "learnerProfile": ["Knowledgeable", "Thinker", "Caring"],
          "ao": [
            "AO1 — Describe mass spectrometer, cyclotron, and aurora in terms of EM field physics",
            "AO2 — Solve complete mass spectrometer and cyclotron problems",
            "AO3 — Analyse how EM fields are used in technology and natural phenomena"
          ],
          "resources": "Mass spectrometer schematic, cyclotron diagram, aurora video/photos, calculators",
          "formative": "\"(a) In a mass spectrometer: ions accelerated through 2000 V enter B = 0.3 T. An ion traces a semicircle of radius 0.08 m. Find q/m. If singly charged, find m. What element? (b) A cyclotron operates at B = 1.2 T for protons. Find the required AC frequency. (c) Explain qualitatively why the aurora is seen near the poles, not the equator.\""
        },
        {
          "num": 2,
          "title": "D.3 Advanced Problem Solving",
          "focus": "Multi-step problems combining E fields, B fields, and energy conservation",
          "minutes": 65,
          "understandings": [
            "Combine E field acceleration (KE = qV), B field circular motion (r = mv/(qB)), and velocity selection (v = E/B) in complex problems",
            "Use energy conservation in EM fields: KE gained = qV (electric), KE unchanged in B field",
            "Determine particle properties (q, m, q/m, speed, KE) from observed trajectories in known fields",
            "Link to A.2 (circular motion), A.3 (energy), D.2 (fields and potentials)"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Decision framework for D.3: (a) Particle in E field → F = qE → a = qE/m → SUVAT or projectile motion. (b) Particle in B field → F = qvB → circular motion → r = mv/(qB). (c) Crossed E and B → velocity selector: v = E/B. (d) Energy: KE = qV (from E field), KE unchanged in B field. (e) q/m = v/(Br). Many problems chain these steps.</p><p><strong>Multi-step problems (35 min):</strong> Groups tackle: (1) Complete mass spectrometer: ion source → acceleration through V → velocity selector (E, B₁) → deflection in B₂ → find m. All values given. (2) Electron gun + deflection: electron accelerated from rest through V, enters perpendicular E field between plates (length L, separation d, voltage V_plates). Find: entry speed, deflection angle, point of impact on screen beyond plates. (3) Particle enters B field: traces a semicircle of measured diameter. Given B and V_acceleration: find q/m and identify the particle. (4) A proton enters a region with BOTH E and B (not perpendicular to each other): resolve forces and determine trajectory qualitatively.</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style D.3 problems.</p><p><strong>Wrap-up (5 min):</strong> \"D.3 is where forces (A.2), energy (A.3), circular motion (A.2), and fields (D.1/D.2) all come together. Every problem is a synthesis.\"\n</p>",
          "engagementHook": {
            "title": "BUILD A MASS SPECTROMETER — ON PAPER",
            "content": "\"Design a mass spectrometer to separate carbon-12 and carbon-14 isotopes. Choose: acceleration voltage V, selector fields E and B₁, and deflection field B₂. Calculate the expected separation of the two isotopes on the detector.\" Students design, calculate, and compare designs. The best design separates the isotopes by the largest distance — most practical to build. \"This is real engineering: choosing parameters to maximise performance within constraints.\""
          },
          "nos": {
            "tags": ["Technology", "Models", "Science as a shared endeavour"],
            "description": "Carbon-14 dating (used to determine the age of archaeological artefacts) relies on mass spectrometry to count C-14 atoms. Accelerator mass spectrometry can measure one C-14 atom among 10¹⁵ C-12 atoms. The physics of D.3 enables archaeology, forensics, and climate science."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Communicator"],
          "ao": [
            "AO2 — Apply E field, B field, and energy concepts in multi-step problems",
            "AO3 — Design and analyse EM field configurations for particle separation"
          ],
          "resources": "Problem sets, whiteboards, mass spectrometer design template, isotope data, calculators",
          "formative": "\"An ion is accelerated from rest through 5000 V, passes through a velocity selector (E = 3 × 10⁴ V/m, B₁ = 0.5 T), then enters B₂ = 0.3 T. It traces a semicircle of diameter 0.24 m. (a) Find the selected speed. (b) Find the radius. (c) Find q/m. (d) If singly charged, find m and identify the ion. (e) If a doubly-charged ion of the same mass entered, what would its radius be?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "A.2 Forces & Momentum", "question": "What causes circular motion of charged particles in a B field? How is F = qvB related to F = mv²/r?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How can conservation of energy be applied to motion in electromagnetic fields? Why does the magnetic force do no work?" },
    { "topic": "D.1 Gravitational Fields", "question": "How can the orbital radius in a field determine the nature of a particle (mass, charge)?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How are the properties of E and B fields used to control charged particle motion?" },
    { "topic": "E.1 Structure of the Atom", "question": "How are the concepts of energy, forces and fields used to determine the size of an atom (Rutherford scattering, Bohr model)?" },
    { "topic": "IB Linking (NOS)", "question": "How are the properties of electric and magnetic fields represented visually and mathematically?" }
  ]
},
"D4": {
  "title": "Induction",
  "code": "D.4",
  "theme": "D",
  "level": "HL only",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "What are the effects of relative motion between a conductor and a magnetic field?",
    "How can the power output of electrical generators be increased?",
    "How did the discovery of electromagnetic induction effect industrialization?"
  ],
  "groups": [
    {
      "name": "Magnetic Flux & Faraday's Law",
      "color": "accent5",
      "totalMinutes": 150,
      "subtopics": [
        {
          "num": 1,
          "title": "Magnetic Flux — Φ = BA cosθ",
          "focus": "How much magnetic field 'threads' through a surface",
          "minutes": 45,
          "understandings": [
            "Magnetic flux Φ = BA cosθ, where B is the magnetic field strength, A is the area of the surface, and θ is the angle between B and the normal to the surface",
            "Units: weber (Wb) = T·m²",
            "When B ⊥ surface (θ = 0°): Φ = BA (maximum flux). When B ∥ surface (θ = 90°): Φ = 0 (no flux)",
            "Flux represents 'how many field lines pass through the surface' — a useful visual model"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Hold a wire loop in front of a bar magnet. \"How much magnetic field passes through this loop?\" Turn the loop — the amount changes. Face it directly at the magnet: maximum. Turn it edge-on: zero. \"The amount that passes through depends on the angle. This is magnetic flux.\"</p><p><strong>Direct instruction (15 min):</strong> Define Φ = BA cosθ. B = field strength (T). A = area of the loop (m²). θ = angle between B and the NORMAL to the loop surface. When the loop faces the field head-on (θ = 0°): Φ = BA (max — all field lines pass through). When the loop is edge-on (θ = 90°): Φ = 0 (no lines pass through). Between: Φ = BA cosθ. Visual: count the field lines passing through the loop. More lines = more flux. Turning the loop reduces the number of lines threading through it.</p><p><strong>Worked examples (15 min):</strong> (1) A circular coil (r = 0.05 m) in B = 0.3 T, perpendicular to field: Φ = 0.3 × π × 0.05² = 2.36 × 10⁻³ Wb. (2) Same coil tilted at 60° to the field (θ = 60° from normal): Φ = 2.36 × 10⁻³ × cos60° = 1.18 × 10⁻³ Wb. (3) Rectangular coil (0.1 × 0.2 m), B = 0.5 T, edge-on (θ = 90°): Φ = 0. (4) The coil rotates from θ = 0° to θ = 90° — the flux changes from BA to 0. \"Whenever flux CHANGES, something happens...\"</p><p><strong>Practice (10 min):</strong> Flux calculations for various angles and coil orientations.</p>",
          "engagementHook": {
            "title": "THE RAIN ANALOGY — CATCHING FLUX",
            "content": "\"Hold a bucket in the rain. Straight up: maximum rain collected (Φ = BA). Tilt it 45°: less rain (Φ = BA cos45°). Turn it sideways: no rain collected (Φ = 0).\" The bucket area is A. The rain intensity is B. The angle between rain and bucket-normal is θ. Magnetic flux is EXACTLY like 'rain collected.' Students hold books at different angles under a 'rainfall' of marker pens dropped from above — count how many land on the book."
          },
          "nos": {
            "tags": ["Models", "Patterns"],
            "description": "Magnetic flux is a mathematical model — there are no actual 'lines' threading through the loop. But the model is so useful that physicists treat flux as a real, measurable quantity. It connects the abstract field to the concrete effect (induced emf). Faraday thought of flux intuitively; Maxwell formalised it mathematically."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Communicator"],
          "ao": [
            "AO1 — Define magnetic flux; state Φ = BA cosθ",
            "AO2 — Calculate flux for various B, A, θ values",
            "AO3 — Analyse how rotating a coil changes the flux through it"
          ],
          "resources": "Wire loop, bar magnet, whiteboard, 'rain and bucket' demo materials, calculators",
          "formative": "\"A rectangular coil (0.05 × 0.08 m) is in a uniform B = 0.4 T field. (a) Find Φ when the coil is perpendicular to B. (b) At 30° to B (θ = 30° between B and normal). (c) Parallel to B. (d) The coil rotates from perpendicular to parallel in 0.1 s. Find the change in flux. (e) Predict: will this change produce an effect? (Teaser for Faraday's law.)\""
        },
        {
          "num": 2,
          "title": "Faraday's Law of Induction — ε = −NΔΦ/Δt",
          "focus": "A changing flux induces an emf — the foundation of all generators",
          "minutes": 55,
          "understandings": [
            "A time-changing magnetic flux induces an emf: ε = −NΔΦ/Δt (Faraday's law)",
            "N = number of turns in the coil. More turns → larger emf",
            "The emf is proportional to the RATE of change of flux, not the flux itself",
            "The negative sign (Lenz's law) indicates the direction: the induced emf opposes the change that caused it",
            "Ways to change flux: change B, change A, change θ, or move the coil in/out of the field"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Push a bar magnet into a coil connected to a galvanometer. The needle deflects — current flows! Pull it out — needle deflects the other way. Hold it still inside — NOTHING. \"Moving it in: flux changes → emf. Stationary: flux constant → no emf. Moving it out: flux changes again → emf. The KEY is CHANGE.\"</p><p><strong>Direct instruction (20 min):</strong> Faraday's law: ε = −NΔΦ/Δt. The induced emf equals the rate of change of flux linkage (NΦ). Faster change → larger emf. More turns → larger emf. Ways to change Φ: (a) move a magnet toward/away from a coil (change B at the coil), (b) move a coil into/out of a B field region (change A in the field), (c) rotate a coil in B (change θ → Φ = BA cosθ changes), (d) change B itself (electromagnet with varying current). The negative sign = Lenz's law: the induced current creates a magnetic field that OPPOSES the change in flux. This is conservation of energy — if it didn't oppose, you'd get energy for free.</p><p><strong>Lenz's law deep dive (10 min):</strong> Push N pole toward coil → flux into coil increases → induced current creates a field to OPPOSE the increase → induced field pushes back (like N pole) → coil repels the magnet. You must do WORK to push the magnet → this work becomes the electrical energy. If the coil attracted the magnet instead, the magnet would accelerate in, inducing MORE current, attracting MORE — infinite energy from nothing. Lenz's law prevents this.</p><p><strong>Worked examples (15 min):</strong> (1) A coil (N = 50, A = 0.01 m²) in B that increases from 0 to 0.5 T in 0.2 s: ε = 50 × 0.5 × 0.01/0.2 = 1.25 V. (2) A rectangular coil (0.1 × 0.05 m, N = 100) is pulled out of a B = 0.3 T field in 0.5 s: ΔΦ = 0.3 × 0.005 = 1.5 × 10⁻³ Wb → ε = 100 × 1.5 × 10⁻³/0.5 = 0.3 V. (3) Determine the direction of induced current using Lenz's law for 3 scenarios.</p><p><strong>Practice (5 min):</strong> ε calculations and Lenz's law direction problems.</p>",
          "engagementHook": {
            "title": "THE MAGNET AND COIL — THE EXPERIMENT THAT POWERED THE WORLD",
            "content": "\"In 1831, Michael Faraday pushed a magnet into a coil and saw a current. He pulled it out and saw the current reverse. He held it still — nothing. With that simple experiment, he discovered electromagnetic induction. Within 50 years: power stations, electric motors, transformers. One experiment → the entire electrical age.\" Students recreate the exact experiment with a bar magnet and galvanometer."
          },
          "nos": {
            "tags": ["Observations", "Theories", "Global impact"],
            "description": "Faraday's discovery of electromagnetic induction (1831) is arguably the most consequential experiment in human history. It led directly to: electric generators, power grids, transformers, induction motors, and every device that runs on electricity. Faraday had no formal mathematical training — his physical intuition was extraordinary. Maxwell later expressed Faraday's ideas mathematically."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Inquirer"],
          "ao": [
            "AO1 — State Faraday's law; state Lenz's law; explain the negative sign as energy conservation",
            "AO2 — Calculate induced emf from rate of flux change",
            "AO3 — Analyse the direction of induced current using Lenz's law"
          ],
          "resources": "Bar magnet, coil (many turns), galvanometer, electromagnet + AC supply, calculators",
          "formative": "\"(a) A coil (N = 200, A = 4 × 10⁻³ m²) is in a field that drops from 0.6 T to 0.1 T in 0.25 s. Find ε. (b) The same coil is pulled completely out of a 0.6 T field in 0.1 s. Find ε. (c) A magnet is dropped through a coil. Sketch the emf-time graph (positive pulse, then negative pulse). (d) Explain why a dropped magnet falls SLOWER through a copper tube than through a plastic tube (Lenz's law braking).\""
        },
        {
          "num": 3,
          "title": "EMF in a Moving Conductor — ε = BvL",
          "focus": "A straight conductor cutting field lines — the simplest generator",
          "minutes": 50,
          "understandings": [
            "A straight conductor of length L moving with velocity v perpendicular to a uniform B field induces emf: ε = BvL",
            "This is a specific case of Faraday's law: the conductor sweeps out area A = Lv·t per second → ΔΦ/Δt = BLv",
            "Direction: use the right-hand rule (or consider Lenz's law — the induced current opposes the change)",
            "Quantitative treatment restricted to straight conductors moving at right angles to B"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> A conductor of length L moves at speed v perpendicular to B. In time Δt, it sweeps out area A = L × vΔt. Flux swept: ΔΦ = B × LvΔt. EMF: ε = ΔΦ/Δt = BLv. This is the SIMPLEST generator: a wire moving through a field. The free electrons in the wire experience F = qvB and are pushed along the wire → emf. Direction: right-hand rule — thumb (v), fingers (B), palm pushes electrons → determines which end is + and which is −.</p><p><strong>Demo (10 min):</strong> Slide a conducting rod along metal rails in a magnetic field (homopolar generator). Connect a sensitive meter. Move the rod → meter deflects. Faster → larger deflection. Reverse direction → reverse deflection. \"This rod IS a generator. Power stations use this principle with rotating coils instead of sliding rods.\"</p><p><strong>Worked examples (15 min):</strong> (1) A 0.5 m rod at 3 m/s in B = 0.4 T: ε = 0.4 × 3 × 0.5 = 0.6 V. (2) An aeroplane (wingspan 30 m) flies at 250 m/s through Earth's B field (vertical component 5 × 10⁻⁵ T): ε = 5 × 10⁻⁵ × 250 × 30 = 0.375 V. \"There's a voltage between your wingtips — but too small to use.\" (3) A rectangular coil (0.1 × 0.05 m) is pulled out of B = 0.2 T at 2 m/s. The 0.1 m side cuts the field. ε = BvL = 0.2 × 2 × 0.1 = 0.04 V.</p><p><strong>Practice (10 min):</strong> ε = BvL calculations and direction determination.</p>",
          "engagementHook": {
            "title": "VOLTAGE BETWEEN YOUR WINGTIPS",
            "content": "\"A Boeing 747 (wingspan 64 m) flies at 250 m/s through Earth's magnetic field (B ≈ 5 × 10⁻⁵ T). The wingtips are a moving conductor.\" Calculate: ε = BvL = 5 × 10⁻⁵ × 250 × 64 = 0.8 V. \"There's almost a volt between your wingtips right now. Not enough to power anything — but enough to MEASURE.\" MHD (magnetohydrodynamic) generators use this principle with conducting fluids to generate real power."
          },
          "nos": {
            "tags": ["Observations", "Technology", "Patterns"],
            "description": "The motional emf ε = BvL is the most intuitive form of induction: free electrons in the moving wire experience F = qvB and are pushed along the wire. It directly connects D.3 (force on moving charges) to D.4 (induction). The same physics that deflects electrons in a cathode ray tube also generates electricity in a power station."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State ε = BvL for a straight conductor; derive it from Faraday's law",
            "AO2 — Calculate induced emf for moving conductors",
            "AO3 — Analyse the direction of induced emf using the right-hand rule or Lenz's law"
          ],
          "resources": "Conducting rod on rails + magnet + galvanometer, calculators, aeroplane wingspan data",
          "formative": "\"(a) A 0.3 m rod moves at 5 m/s ⊥ to B = 0.2 T. Find ε. (b) The rod is connected to a 10 Ω resistor. Find the induced current and the force needed to maintain the motion. (c) An aeroplane (wingspan 40 m, speed 200 m/s, B_vertical = 4 × 10⁻⁵ T): find ε between wingtips. (d) Explain why the induced current in part (b) creates a force that OPPOSES the rod's motion (Lenz's law).\""
        }
      ]
    },
    {
      "name": "AC Generators & Applications",
      "color": "accent3",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "The AC Generator — Rotating Coil in a Uniform B Field",
          "focus": "How rotation produces sinusoidal emf — the basis of all power generation",
          "minutes": 60,
          "understandings": [
            "A coil rotating in a uniform B field: Φ = BA cosθ = BA cos(ωt), where ω is the angular frequency of rotation",
            "Faraday's law: ε = −NΔΦ/Δt → for continuous rotation: ε = NBAω sin(ωt)",
            "The emf is SINUSOIDAL — it varies as sin(ωt), with peak emf ε₀ = NBAω",
            "The effect of changing rotation frequency: higher ω → higher ε₀ AND higher frequency of the AC output",
            "This is how AC electricity is generated in every power station"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Every power station in the world — coal, gas, nuclear, hydro, wind — does the same thing: rotates a coil in a magnetic field. That's it. The energy source just determines WHAT spins the coil. Faraday's law does the rest.\"</p><p><strong>Direct instruction (20 min):</strong> A rectangular coil (N turns, area A) rotates at angular speed ω in uniform B. At angle θ = ωt from the perpendicular: Φ = BA cos(ωt). Rate of change: ΔΦ/Δt = −BAω sin(ωt). EMF: ε = NBAω sin(ωt). Peak emf: ε₀ = NBAω. The output is SINUSOIDAL. One revolution = one complete AC cycle. Frequency: f = ω/(2π). To increase ε₀: increase N (more turns), B (stronger magnet), A (bigger coil), ω (spin faster). Faster spinning also increases f. UK mains: f = 50 Hz → coil rotates 50 times per second = 3000 rpm.</p><p><strong>Graphical analysis (10 min):</strong> Plot ε vs t: sinusoidal. Mark: ε₀ (peak), T (period), and the positions of the coil at ε = 0 (coil perpendicular to B, Φ is max but ΔΦ/Δt = 0 — rate of change is zero at the peak of cosine) and ε = ε₀ (coil parallel to B, Φ = 0 but changing fastest). Students often confuse this: \"Maximum flux ≠ maximum emf. Maximum CHANGE of flux = maximum emf.\"</p><p><strong>Worked examples (15 min):</strong> (1) Coil: N = 200, A = 0.04 m², B = 0.5 T, f = 50 Hz → ω = 100π. ε₀ = 200 × 0.5 × 0.04 × 100π = 1257 V. (2) The rotation speed is doubled: new ε₀ = 2514 V AND f = 100 Hz. Both increase. (3) At what angle (position) is the emf: (a) maximum, (b) zero? (4) Sketch ε-t and Φ-t on the same axes — show they're 90° out of phase.</p><p><strong>Practice (10 min):</strong> Generator calculations and graph sketching.</p>",
          "engagementHook": {
            "title": "SPIN THE GENERATOR — LIGHT THE BULB",
            "content": "Connect a hand-crank generator to a small bulb. Spin slowly: dim glow. Spin faster: brighter AND the flicker frequency increases (visible if you spin slowly enough). \"Faster spin → more flux change per second → larger emf AND higher frequency. Your hand is doing what a turbine does in a power station — converting mechanical rotation into electrical energy via Faraday's law.\" Students feel the resistance increase when the bulb is connected (Lenz's law — the generator fights back)."
          },
          "nos": {
            "tags": ["Technology", "Theories", "Global impact"],
            "description": "The AC generator transformed human civilisation. Before 1882, there were no public power grids. Within 40 years of Faraday's discovery, cities were electrified. The debate between Edison (DC) and Tesla/Westinghouse (AC) was settled by physics: AC can be easily transformed to high voltage for efficient transmission (P_loss = I²R). Tesla's AC system won — and still powers the world."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — State ε = NBAω sin(ωt); explain how an AC generator works",
            "AO2 — Calculate peak emf and frequency; analyse the effect of changing ω, N, B, A",
            "AO3 — Sketch and interpret ε-t and Φ-t graphs; explain the phase relationship"
          ],
          "resources": "Hand-crank generator, small bulb, oscilloscope (to show AC waveform), coil-in-magnet model, calculators",
          "formative": "\"A coil (N = 500, A = 0.02 m²) rotates at 60 Hz in B = 0.3 T. (a) Find ω. (b) Find ε₀. (c) Write the expression for ε(t). (d) Sketch ε vs t for 2 complete cycles. (e) The rotation speed is halved. Find the new ε₀ and frequency. (f) At what coil orientation is the emf maximum? Explain using ΔΦ/Δt.\""
        },
        {
          "num": 2,
          "title": "Lenz's Law, Energy Conservation & Self-Induction",
          "focus": "Why induction always opposes — and a qualitative look at self-induction",
          "minutes": 60,
          "understandings": [
            "Lenz's law: the direction of the induced emf is such that the induced current opposes the change in flux that caused it",
            "This is a consequence of conservation of energy — if the induced current aided the change, energy would be created from nothing",
            "Applications: eddy current braking, electromagnetic damping, induction cooktops",
            "Self-induction (qualitative only): a changing current in a coil induces an emf in the SAME coil that opposes the change in current"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Drop a strong magnet through a copper tube. It falls in slow motion — much slower than free fall. \"There's no friction, no contact. The copper isn't magnetic. What's slowing it?\" Lenz's law: the falling magnet changes the flux through the tube → induces eddy currents → these create a field that OPPOSES the motion → the magnet is braked. Energy: the magnet's gravitational PE → electrical energy in the eddy currents → thermal energy in the copper.</p><p><strong>Direct instruction (15 min):</strong> Systematic Lenz's law: (1) Determine how Φ is changing (increasing or decreasing). (2) The induced current creates B to OPPOSE the change: if Φ increases → induced B opposes the external B (reduces flux). If Φ decreases → induced B supports the external B (maintains flux). (3) Use the right-hand rule to find the current direction that creates the opposing B. Applications: (a) Eddy current brakes (trains, rollercoasters — braking without friction, wear-free). (b) Induction cooktops: rapidly alternating B induces eddy currents in the pan → the PAN heats up, not the cooktop. (c) Electromagnetic damping in galvanometers.</p><p><strong>Self-induction (10 min):</strong> Qualitative only. When current in a coil changes, the changing current → changing B → changing Φ through the SAME coil → induced emf opposes the change. This is self-induction. \"A coil resists changes in its own current — like inertia for electricity.\" When you switch off a large inductor, the collapsing field induces a large emf → can create sparks (back-emf).</p><p><strong>Demo (15 min):</strong> (1) Magnet through copper tube — slow fall. (2) Aluminium plate swinging between magnet poles — stops quickly (eddy current damping). (3) Induction cooktop (video): boils water in 90 seconds, paper on the cooktop doesn't burn (the surface isn't hot — only the pan is). (4) Back-emf spark: disconnect a coil from a battery → spark at the switch (energy stored in the magnetic field is released).</p><p><strong>Practice (10 min):</strong> Lenz's law direction problems and qualitative self-induction questions.</p><p><strong>Wrap-up (5 min):</strong> \"Faraday's law tells you HOW MUCH emf. Lenz's law tells you WHICH DIRECTION. Together they're the complete story of electromagnetic induction — and the reason you have electricity at home.\"</p>",
          "engagementHook": {
            "title": "THE SLOW-FALLING MAGNET — LENZ'S LAW IN ACTION",
            "content": "Drop a strong neodymium magnet through a copper tube. It takes 5-10 seconds to fall 1 metre — instead of 0.45 seconds in free fall. \"No friction. No contact. No magnetism in copper. The magnet creates its own brake by inducing eddy currents that OPPOSE its fall.\" Then drop through a PVC tube (non-conductor) — normal speed. \"The difference is Lenz's law. The copper allows eddy currents; the plastic doesn't.\" Students calculate the theoretical fall time and compare."
          },
          "nos": {
            "tags": ["Theories", "Technology", "Observations"],
            "description": "Lenz's law is conservation of energy applied to induction. Without it, a generator could produce unlimited electricity for free — violating the first law of thermodynamics. Heinrich Lenz (1834) stated the law; it was immediately recognised as a consequence of energy conservation. Eddy current braking, now used in high-speed trains and rollercoasters, is a direct technological application."
          },
          "atl": ["Thinking skills", "Communication skills", "Research skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — State Lenz's law; explain it as a consequence of energy conservation; describe self-induction qualitatively",
            "AO2 — Determine the direction of induced current using Lenz's law",
            "AO3 — Analyse eddy current braking, induction cooking, and self-induction effects"
          ],
          "resources": "Strong neodymium magnet, copper tube + PVC tube, aluminium plate + magnets, induction cooktop video, galvanometer with damping, battery + coil (back-emf demo)",
          "formative": "\"(a) A magnet's N pole approaches a coil from the left. Which direction does the induced current flow (viewed from the left)? (b) The magnet is now pulled AWAY from the coil. New current direction? (c) Explain why a magnet falls slowly through a copper tube but at normal speed through a plastic tube. (d) A large electromagnet is switched off. Explain why a spark appears at the switch. (e) Why does Lenz's law follow from conservation of energy? What would happen if the induced current AIDED the flux change?\""
        }
      ]
    },
    {
      "name": "Synthesis & Power Generation",
      "color": "accent4",
      "totalMinutes": 90,
      "subtopics": [
        {
          "num": 1,
          "title": "D.4 Synthesis — Induction Problem Solving & Power Generation",
          "focus": "Multi-step problems and the physics of electricity generation",
          "minutes": 90,
          "understandings": [
            "Combine Φ = BA cosθ, ε = −NΔΦ/Δt, ε = BvL, and ε = NBAω sin(ωt) in complex problems",
            "Energy and power in generators: P = εI = ε²/R",
            "Efficiency of electricity generation depends on the energy source: thermal (30-60%), hydro (80-95%), wind (30-45%), nuclear (33-37%)",
            "The complete chain: energy source → mechanical rotation → ΔΦ/Δt → ε → current → power to grid"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Decision framework: (a) Flux at any time → Φ = BA cosθ. (b) Induced emf → ε = −NΔΦ/Δt (general) or ε = BvL (straight conductor) or ε = NBAω sinωt (rotating coil). (c) Induced current → I = ε/R. (d) Power → P = εI = ε²/R. (e) Direction → Lenz's law. Most problems combine 2-3 of these steps.</p><p><strong>Complex problems (35 min):</strong> Groups tackle: (1) A coil is pulled from a B field at constant speed. Find: ε (BvL for the leading edge), current (I = ε/R), force needed to maintain speed (F = BIL — must equal Lenz force), power input (Fv), power dissipated (I²R). Verify: mechanical power input = electrical power output (energy conservation). (2) A magnet oscillates on a spring above a coil (SHM from C.1!). The flux varies as Φ = Φ₀ cos(ωt). Find ε(t) and ε₀. Sketch ε-t graph. (3) Generator design: a power station needs ε₀ = 10 kV at 50 Hz. Given B = 0.5 T, choose N and A. Multiple solutions exist — trade-offs between size and turns.</p><p><strong>Efficiency discussion (15 min):</strong> The energy chain: coal → heat → steam → turbine rotation → generator (Faraday's law) → ε → grid. Every conversion has losses. Coal station: 33-40% efficient (most energy lost as waste heat — 2nd law from B.4). Hydro: 80-95% (direct mechanical → electrical, no thermal stage). Nuclear: ~33% (same thermal limitations as coal). Wind: 30-45% (Betz limit: max 59.3% of wind energy extractable). Students calculate: if a coal station's fuel input is 1000 MW, how much electrical power is output at 37% efficiency? (370 MW.) Where does the other 630 MW go? (Cooling towers — waste heat.)</p><p><strong>Historical impact (10 min):</strong> \"Before Faraday (1831): no electricity generation. By 1882: Edison's Pearl Street station powered lower Manhattan. By 1900: cities worldwide were electrified. By 2024: 29,000 TWh of electricity generated globally. ALL of it uses Faraday's law: ε = −NΔΦ/Δt. One equation, discovered by a self-taught bookbinder's apprentice, powers civilisation.\"</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style D.4 problems.</p><p><strong>Wrap-up (5 min):</strong> Theme D complete. \"Fields (D.1, D.2) → forces on moving charges (D.3) → induction (D.4). One connected story from Newton's gravity to the electricity in this room.\"</p>",
          "engagementHook": {
            "title": "ONE EQUATION POWERS CIVILISATION",
            "content": "\"Michael Faraday was a bookbinder's apprentice with no formal education. He couldn't do calculus. But in 1831, he discovered electromagnetic induction — and wrote the equation that powers every light, computer, hospital, and city on Earth. ε = −NΔΦ/Δt. 29,000 terawatt-hours per year. All from one man's curiosity about magnets and coils.\" Show the timeline: 1831 → 1882 → 1900 → 2024. The exponential growth of electricity generation — all built on Faraday's law."
          },
          "nos": {
            "tags": ["Global impact", "Technology", "Science as a shared endeavour"],
            "description": "The discovery of electromagnetic induction is arguably the most impactful scientific discovery in human history — measured by its effect on daily life. Faraday, Joseph Henry (independently, same year), and later Tesla and Westinghouse transformed the discovery into the electrical grid. Science → technology → society — the full cycle, completed in one generation."
          },
          "atl": ["Thinking skills", "Social skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring", "Communicator"],
          "ao": [
            "AO2 — Apply all D.4 equations in multi-step problems; calculate power and efficiency",
            "AO3 — Evaluate the efficiency of different electricity generation methods; analyse energy chains"
          ],
          "resources": "Problem sets, whiteboards, electricity generation efficiency data, Faraday biography, power station diagrams, calculators",
          "formative": "\"(a) A 0.2 m rod moves at 4 m/s ⊥ to B = 0.5 T. Connected to R = 2 Ω. Find: ε, I, power dissipated, force needed to maintain speed. Verify Fv = I²R. (b) A generator (N = 1000, A = 0.05 m², B = 0.4 T) rotates at 50 Hz. Find ε₀. If the total circuit resistance is 500 Ω, find the peak current and average power. (c) A coal power station inputs 800 MW of thermal energy. Efficiency = 35%. Find electrical output and waste heat. (d) Explain why hydroelectric stations are more efficient than coal stations.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How does the magnetic field from a current (D.2) lead to the induction of emf when that current changes (D.4)?" },
    { "topic": "D.3 Motion in EM Fields", "question": "How does the force on a moving charge (F = qvB) in D.3 relate to the motional emf (ε = BvL) in D.4?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does conservation of energy explain Lenz's law and the efficiency limitations of generators?" },
    { "topic": "B.4 Thermodynamics (HL)", "question": "How is the efficiency of electricity generation dependent on the source of energy? Why can't thermal stations exceed Carnot efficiency?" },
    { "topic": "C.1 Simple Harmonic Motion", "question": "How does a magnet oscillating on a spring above a coil produce a sinusoidal emf? How does ω connect SHM to AC generation?" },
    { "topic": "IB Linking (NOS)", "question": "Faraday's law includes a rate of change. Which other areas of physics relate to rates of change?" }
  ]
},
"E1": {
  "title": "Structure of the Atom",
  "code": "E.1",
  "theme": "E",
  "level": "SL + HL",
  "recommendedHours": 9,
  "recommendedMinutes": 540,
  "guidingQuestions": [
    "What is the current understanding of the nature of an atom?",
    "What is the role of evidence in the development of models of the atom?",
    "In what ways are previous models of the atom still valid despite recent advances in understanding?"
  ],
  "groups": [
    {
      "name": "The Nucleus & Rutherford Scattering (SL)",
      "color": "accent4",
      "totalMinutes": 150,
      "subtopics": [
        {
          "num": 1,
          "title": "The Geiger-Marsden-Rutherford Experiment",
          "focus": "How gold foil and alpha particles revealed the nuclear atom",
          "minutes": 55,
          "understandings": [
            "The Geiger-Marsden-Rutherford experiment: alpha particles fired at thin gold foil",
            "Three key observations: (1) most alphas pass straight through (atom is mostly empty space), (2) some deflect at small angles (positive nucleus repels positive alphas), (3) very few (~1 in 8000) bounce back at large angles (head-on encounter with a tiny, massive, positive nucleus)",
            "Conclusions: the atom has a small, dense, positively charged nucleus containing most of the mass, surrounded by orbiting electrons in mostly empty space",
            "Nuclear notation: ᴬ_Z X where A = nucleon number (protons + neutrons), Z = proton number"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Before 1909, the best model was Thomson's 'plum pudding' — positive charge spread throughout the atom with electrons embedded like raisins. Rutherford's team fired alpha particles at gold foil expecting them all to pass through with slight deflections. What they saw changed everything.\"</p><p><strong>Direct instruction (20 min):</strong> The experiment: alpha source → collimator → thin gold foil → zinc sulfide screen (detects alphas by flashes). Three observations: (1) Most pass straight through → atom is mostly empty. If the positive charge were spread out (plum pudding), ALL alphas would deflect slightly. (2) Some deflect at small angles → there's a concentrated positive charge that repels at a distance. (3) A tiny fraction bounce BACK (>90°) → they hit something very small, very dense, and very positive head-on. Rutherford: \"It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.\" Conclusion: nuclear model — tiny positive nucleus (~10⁻¹⁵ m), electrons far away (~10⁻¹⁰ m), mostly empty space. Nuclear notation: ᴬ_Z X. Example: ²³⁸₉₂U → 92 protons, 238 nucleons, 146 neutrons.</p><p><strong>Scale demo (10 min):</strong> \"If the nucleus were a marble (1 cm), the atom would be a football stadium (100 m across). The electrons would be gnats flying around the upper seats.\" Students calculate: atom diameter / nucleus diameter ≈ 10⁻¹⁰/10⁻¹⁵ = 10⁵. \"The atom is 99.9999999999999% empty space. You are mostly nothing.\"</p><p><strong>Worked examples (10 min):</strong> (1) How many protons, neutrons in ⁵⁶₂₆Fe? (26p, 30n). (2) Isotopes: ¹²₆C and ¹⁴₆C — same Z, different A. (3) Why do most alphas pass through? (They miss the nucleus — it's tiny compared to the atom.)</p><p><strong>Practice (10 min):</strong> Nuclear notation, isotope identification, and Rutherford observation interpretation.</p>",
          "engagementHook": {
            "title": "THE 15-INCH SHELL — RUTHERFORD'S ASTONISHMENT",
            "content": "\"Rutherford expected every alpha to pass through — like firing bullets through fog. Instead, some bounced BACK. He said it was like firing a 15-inch artillery shell at tissue paper and having it come back and hit you.\" Show the scale: if the gold foil were scaled up so atoms were football stadiums, the nuclei would be marbles on the centre spot. Students calculate the probability of an alpha hitting a nucleus — explain why only 1 in 8000 bounces back."
          },
          "nos": {
            "tags": ["Observations", "Models", "Falsification"],
            "description": "Rutherford's experiment falsified Thomson's plum pudding model. The back-scattered alphas were impossible under Thomson's model — a clear falsification. The nuclear model replaced it. But the nuclear model had its own problems (electrons should spiral into the nucleus, radiating energy). Bohr later fixed this with quantised orbits. Science progresses by replacing models with better models."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Describe the Rutherford experiment, its observations, and conclusions",
            "AO2 — Use nuclear notation to identify protons, neutrons, nucleon number",
            "AO3 — Analyse why the observations falsified the plum pudding model"
          ],
          "resources": "Rutherford experiment animation/video, gold foil diagram, scale model materials, periodic table",
          "formative": "\"(a) State the three key observations of the Rutherford experiment. (b) Explain how each observation leads to a conclusion about atomic structure. (c) Why couldn't the plum pudding model explain the back-scattering? (d) Write the nuclear notation for an atom with 20 protons and 20 neutrons. Identify the element. (e) Two isotopes of chlorine: ³⁵Cl and ³⁷Cl. How many neutrons in each?\""
        },
        {
          "num": 2,
          "title": "Emission & Absorption Spectra — Evidence for Energy Levels",
          "focus": "Discrete spectral lines prove atoms have quantised energy levels",
          "minutes": 50,
          "understandings": [
            "Emission spectra: hot gases emit light at specific discrete wavelengths (bright lines on dark background)",
            "Absorption spectra: cool gases absorb light at the same specific wavelengths (dark lines on continuous background)",
            "These provide evidence for discrete atomic energy levels — electrons can only exist at specific energies",
            "Each element has a UNIQUE spectrum — a 'fingerprint' used to identify chemical composition"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show hydrogen spectrum through a diffraction grating: red, cyan, blue, violet lines — nothing in between. \"A hot hydrogen gas doesn't emit all colours. It emits only THESE specific wavelengths. Why?\" Because the electron can only occupy specific energy levels, and transitions between them produce photons of specific energies (and therefore specific wavelengths).</p><p><strong>Direct instruction (15 min):</strong> Energy level diagram: draw horizontal lines at specific energies (n = 1, 2, 3, ...). An electron dropping from level 3 to level 2 emits a photon with energy E₃ − E₂. This corresponds to a specific frequency (and colour). Each possible transition → one spectral line. Emission: electron drops DOWN → photon OUT → bright line. Absorption: photon IN → electron jumps UP → dark line at the same wavelength. Key: absorption and emission lines occur at the SAME wavelengths for the same element. Each element has different energy levels → different spectrum → unique fingerprint.</p><p><strong>Demo (10 min):</strong> View spectral tubes (H, He, Na, Ne) through diffraction gratings. Each element shows completely different lines. Na: bright yellow doublet. H: the Balmer series (red, cyan, blue, violet). Ne: complex red/orange. \"No two elements have the same spectrum. This is how astronomers identify what stars are made of — from millions of light-years away.\"</p><p><strong>Worked examples (10 min):</strong> (1) An atom has energy levels at −13.6, −3.4, −1.51, −0.85 eV. Draw the energy level diagram. (2) List all possible emission transitions. (3) The 3→2 transition: ΔE = −1.51 − (−3.4) = 1.89 eV → photon frequency? (4) Solar absorption: dark lines in the Sun's continuous spectrum → which elements are in the Sun's atmosphere?</p><p><strong>Practice (10 min):</strong> Energy level diagrams, transition calculations, spectrum identification.</p>",
          "engagementHook": {
            "title": "ATOMIC FINGERPRINTS — EVERY ELEMENT HAS ITS OWN",
            "content": "View H, He, Na, Ne through diffraction gratings. Each shows completely different coloured lines. \"If I gave you an unknown gas and a diffraction grating, you could identify the element by its spectral lines — without any chemical test.\" Then show the Sun's absorption spectrum: dark lines matching known elements. \"Helium was discovered this way — on the Sun, 27 years before it was found on Earth.\""
          },
          "nos": {
            "tags": ["Observations", "Measurements", "Theories"],
            "description": "Kirchhoff and Bunsen (1860) showed that each element produces a unique spectrum. This launched the field of spectroscopy. The EXPLANATION — quantised energy levels — didn't come until Bohr (1913). For 50 years, spectra were observed and catalogued without understanding WHY they looked the way they did. The pattern was known; the theory came later."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Knowledgeable"],
          "ao": [
            "AO1 — Describe emission and absorption spectra; explain as evidence for discrete energy levels",
            "AO2 — Draw energy level diagrams; identify transitions producing specific spectral lines",
            "AO3 — Analyse how spectra reveal chemical composition"
          ],
          "resources": "Spectral tubes (H, He, Na, Ne) + power supply, diffraction gratings, solar spectrum poster, energy level diagram handout",
          "formative": "\"An atom has energy levels at −10.4, −5.1, −2.3, −1.0 eV. (a) Draw the energy level diagram. (b) How many emission lines are possible? List them. (c) Calculate the photon energy and wavelength for the transition from −2.3 to −10.4 eV. (d) This element's gas is placed in front of a white light source. Which wavelengths are absorbed? (e) Why does each element have a unique spectrum?\""
        },
        {
          "num": 3,
          "title": "Photon Emission & Absorption — E = hf",
          "focus": "The quantum link between energy levels and photon properties",
          "minutes": 45,
          "understandings": [
            "Photons are emitted during transitions from higher to lower energy levels",
            "Photons are absorbed during transitions from lower to higher energy levels",
            "The frequency of the photon depends on the energy difference: E = hf, where h = 6.63 × 10⁻³⁴ J·s",
            "Also: E = hc/λ — connecting energy to wavelength",
            "Only photons with EXACTLY the right energy can be absorbed (matching a level gap)"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> When an electron drops from E_high to E_low: it emits a photon with energy E_photon = E_high − E_low = hf. Rearrange: f = (E_high − E_low)/h. And λ = hc/E_photon. The photon carries exactly the energy of the transition — no more, no less. Absorption: a photon can ONLY be absorbed if its energy matches a level gap exactly. If E_photon doesn't match any gap: the photon passes through — the gas is transparent at that wavelength. This is why absorption lines are at the SAME wavelengths as emission lines — same gaps, same energies.</p><p><strong>Worked examples (20 min):</strong> (1) Hydrogen transition n=3→n=2: E₃ = −1.51 eV, E₂ = −3.40 eV. E_photon = 1.89 eV = 1.89 × 1.6 × 10⁻¹⁹ J = 3.02 × 10⁻¹⁹ J. f = E/h = 4.57 × 10¹⁴ Hz. λ = c/f = 656 nm (red — Hα line). (2) A photon of λ = 486 nm is emitted. Find E in eV and identify the transition from the hydrogen energy level diagram. (3) Can a 2.0 eV photon be absorbed by hydrogen in the ground state? Check: E₂ − E₁ = −3.40 − (−13.6) = 10.2 eV. No — 2.0 eV doesn't match any transition from n = 1. (4) A 10.2 eV photon IS absorbed by hydrogen in the ground state → electron jumps to n = 2.</p><p><strong>Practice (10 min):</strong> Photon energy, frequency, and wavelength calculations. Match photons to transitions.</p>",
          "engagementHook": {
            "title": "THE PHOTON THAT FITS — OR DOESN'T",
            "content": "\"A hydrogen atom in the ground state is like a vending machine that only takes exact change. A 10.2 eV photon? ACCEPTED — electron jumps to n = 2. A 10.0 eV photon? REJECTED — no matching level gap. A 13.6 eV photon? ACCEPTED — ionisation (electron ejected entirely). The atom is incredibly picky.\" Students try various photon energies and determine which are accepted and which rejected."
          },
          "nos": {
            "tags": ["Theories", "Patterns"],
            "description": "Planck introduced E = hf in 1900 to explain blackbody radiation, but he considered it a mathematical trick. Einstein (1905) proposed that light ACTUALLY comes in packets (photons) of energy hf. Bohr (1913) applied this to atoms. Three Nobel laureates, three steps, one equation: E = hf is the foundation of quantum physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State E = hf = hc/λ; explain photon emission and absorption",
            "AO2 — Calculate photon energy, frequency, wavelength for atomic transitions",
            "AO3 — Analyse which photons can be absorbed by a given atom"
          ],
          "resources": "Hydrogen energy level diagram, calculators, periodic table, h and c values",
          "formative": "\"Hydrogen levels: E₁ = −13.6, E₂ = −3.4, E₃ = −1.51, E₄ = −0.85 eV. (a) Find the energy and wavelength of the n=4→n=2 transition. (b) What colour is this light? (c) Can a 12.1 eV photon be absorbed by hydrogen in the ground state? Which level does the electron reach? (d) A photon of λ = 122 nm is emitted. Identify the transition. (e) Why can't a hydrogen atom absorb a 7.0 eV photon when in the ground state?\""
        }
      ]
    },
    {
      "name": "Nuclear Size & Scattering (AHL)",
      "color": "accent",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Nuclear Radius, Density & High-Energy Scattering (AHL)",
          "focus": "R = R₀A^(1/3) — all nuclei have the same density",
          "minutes": 55,
          "understandings": [
            "The relationship between nuclear radius R and nucleon number A: R = R₀A^(1/3), where R₀ ≈ 1.2 × 10⁻¹⁵ m",
            "This implies nuclear volume ∝ A (each nucleon occupies the same volume) → nuclear density is approximately constant for all nuclei (~2.3 × 10¹⁷ kg/m³)",
            "Nuclear density is ~10¹⁴ times greater than ordinary matter — a teaspoon of nuclear matter would weigh ~5 billion tonnes",
            "Deviations from Rutherford scattering at high energies: the alpha gets close enough to 'feel' the nuclear force → the scattering pattern deviates from the Coulomb prediction → evidence that the nucleus has a finite size"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> R = R₀A^(1/3). For hydrogen (A = 1): R ≈ 1.2 fm. For uranium (A = 238): R = 1.2 × 238^(1/3) = 1.2 × 6.2 = 7.4 fm. Volume: V = (4/3)πR³ = (4/3)πR₀³A → V ∝ A. Each nucleon occupies the same volume — nucleons pack like incompressible spheres. Density: ρ = Am_nucleon / V = m_nucleon / ((4/3)πR₀³) ≈ 2.3 × 10¹⁷ kg/m³. This is CONSTANT for all nuclei. \"A neutron star is essentially a giant nucleus — same density, ~10 km radius, mass of the Sun.\"\n\nHigh-energy scattering: at low energies, alphas are repelled by Coulomb force → Rutherford scattering (1/sin⁴(θ/2) pattern). At very high energies, alphas get close enough to reach the nuclear surface (~few fm) → nuclear strong force kicks in → scattering deviates from the Coulomb prediction. The energy at which deviation occurs tells us the nuclear radius.</p><p><strong>Worked examples (15 min):</strong> (1) Calculate R for ⁵⁶Fe (A = 56): R = 1.2 × 56^(1/3) = 1.2 × 3.83 = 4.6 fm. (2) Calculate nuclear density: ρ = 56 × 1.67 × 10⁻²⁷ / ((4/3)π × (4.6 × 10⁻¹⁵)³) = 2.3 × 10¹⁷ kg/m³. (3) A teaspoon (5 mL) of nuclear matter: mass = 2.3 × 10¹⁷ × 5 × 10⁻⁶ = 1.15 × 10¹² kg ≈ 1 billion tonnes. (4) At what energy does an alpha get within R of a gold nucleus? Use closest approach: KE = kZe × 2e / R → KE = k × 79 × 2 × e² / R.</p><p><strong>Discussion (10 min):</strong> \"Electron scattering (not alpha) gives more precise nuclear radii because electrons aren't affected by the strong force — they probe the charge distribution purely via the electromagnetic force. The diffraction pattern of scattered electrons gives R directly.\"</p><p><strong>Practice (10 min):</strong> R and density calculations. Closest approach problems.</p>",
          "engagementHook": {
            "title": "A TEASPOON WEIGHING A BILLION TONNES",
            "content": "Calculate the mass of 5 mL of nuclear matter: 1.15 × 10¹² kg. \"That's about the mass of Mount Everest. All in a teaspoon. Nuclear matter is 10¹⁴ times denser than water.\" Then: \"Neutron stars ARE nuclear matter — a star that has collapsed until protons and electrons merge into neutrons. A neutron star packs 1.4 solar masses into a sphere 10 km across.\" Students calculate the density of a neutron star and verify it matches nuclear density."
          },
          "nos": {
            "tags": ["Measurements", "Models", "Patterns"],
            "description": "The constant nuclear density (R ∝ A^(1/3)) tells us something profound: nucleons behave like incompressible fluid — they pack tightly regardless of nucleus size. This led to the 'liquid drop' model of the nucleus, which successfully predicts binding energies and explains nuclear fission (a drop splitting in two)."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State R = R₀A^(1/3); explain constant nuclear density",
            "AO2 — Calculate nuclear radius, volume, density; calculate closest approach distance",
            "AO3 — Analyse why high-energy scattering deviates from Rutherford predictions"
          ],
          "resources": "Calculators, nuclear data table, neutron star infographic, scattering deviation graph",
          "formative": "\"(a) Calculate R for ²⁰⁸Pb. (b) Calculate its nuclear density. Compare with water (1000 kg/m³). (c) At what alpha KE does the distance of closest approach equal R for gold (Z = 79)? (d) At energies above this: what happens to the scattering pattern and why? (e) Why are electrons better probes of nuclear size than alpha particles?\""
        },
        {
          "num": 2,
          "title": "Distance of Closest Approach (AHL)",
          "focus": "Using energy conservation to find how close an alpha gets to a nucleus",
          "minutes": 65,
          "understandings": [
            "In head-on scattering: the alpha particle approaches the nucleus, decelerates due to Coulomb repulsion, stops momentarily, then reverses",
            "At closest approach: all KE has converted to electric PE → ½mv² = kZe × 2e / r_min",
            "r_min = k × 2Ze² / KE — gives an UPPER BOUND on the nuclear radius",
            "If r_min > R_nucleus: the alpha never reaches the nucleus → pure Coulomb scattering (Rutherford pattern valid)",
            "If r_min ≈ R_nucleus: nuclear force becomes significant → deviations from Rutherford"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Head-on collision (b = 0): alpha approaches nucleus directly. As it gets closer: KE → PE (Coulomb repulsion). At r_min: KE = 0, all energy is PE. Energy conservation: ½mv² = k(2e)(Ze)/r_min. Solve: r_min = k × 2Ze² / (½mv²) = 2kZe² / KE. This is the closest the alpha gets — an upper bound for the nucleus size. If the alpha has enough energy to reach the actual nuclear surface: nuclear force takes over → scattering differs from Coulomb prediction.</p><p><strong>Worked examples (25 min):</strong> (1) Classic Rutherford: alpha (KE = 7.7 MeV) at gold (Z = 79). r_min = 2 × 8.99 × 10⁹ × 79 × (1.6 × 10⁻¹⁹)² / (7.7 × 10⁶ × 1.6 × 10⁻¹⁹) = 2.96 × 10⁻¹⁴ m = 29.6 fm. R_gold ≈ 7.3 fm (from R = R₀A^(1/3)). Since r_min >> R: alpha never reaches the nucleus → Rutherford scattering is valid. (2) Higher energy alpha (50 MeV) at gold: r_min = 4.56 fm. Now r_min < R → nuclear force affects the scattering. (3) Find the minimum KE for an alpha to reach the nuclear surface of aluminium (Z = 13, A = 27). R = 1.2 × 27^(1/3) = 3.6 fm. KE = 2kZe²/R = 10.4 MeV.</p><p><strong>Graphical analysis (15 min):</strong> Plot KE vs r and PE vs r for an alpha approaching a nucleus. KE starts at KE₀ and decreases. PE starts at 0 and increases as 1/r. At r_min: KE = 0, PE = KE₀. Total energy (horizontal line) = KE₀ throughout. This is A.3 energy conservation applied to nuclear physics.</p><p><strong>Practice (10 min):</strong> Closest approach calculations for various nuclei and alpha energies.</p>",
          "engagementHook": {
            "title": "HOW CLOSE DID RUTHERFORD'S ALPHAS GET?",
            "content": "Students calculate r_min for Rutherford's original experiment (7.7 MeV alphas at gold). Answer: ~30 fm. Gold's nuclear radius: ~7 fm. \"The alphas never got close to the nucleus — they turned around 4 nuclear radii away. That's why Rutherford scattering worked perfectly with his energies.\" Then: \"What energy would you need to actually TOUCH the gold nucleus?\" Calculate: ~25 MeV. \"Rutherford's alphas were 3× too weak. Modern accelerators easily exceed this — and they see the scattering pattern change.\""
          },
          "nos": {
            "tags": ["Theories", "Measurements", "Models"],
            "description": "The closest approach calculation uses ONLY energy conservation and Coulomb's law — concepts from A.3 and D.2. No new physics is needed. This is the power of conservation laws: they apply everywhere, from springs to nuclei. Rutherford used this simple calculation in 1911 to estimate the nuclear size — a profound result from elementary physics."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe head-on scattering and closest approach",
            "AO2 — Calculate r_min from KE using energy conservation; compare with R_nucleus",
            "AO3 — Analyse when Rutherford scattering is valid and when it breaks down"
          ],
          "resources": "Calculators, KE-PE vs r graph template, nuclear radii table",
          "formative": "\"An alpha (KE = 5 MeV) approaches a nitrogen nucleus (Z = 7, A = 14) head-on. (a) Calculate r_min. (b) Calculate R_nitrogen using R = R₀A^(1/3). (c) Does the alpha reach the nuclear surface? (d) What minimum KE is needed to reach R? (e) At energies above this, how would the scattering differ from the Rutherford prediction?\""
        }
      ]
    },
    {
      "name": "The Bohr Model (AHL)",
      "color": "accent3",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "The Bohr Model — Quantised Energy Levels & Orbits (AHL)",
          "focus": "E = −13.6/n² eV and mvr = nh/(2π) — the first quantum model of the atom",
          "minutes": 60,
          "understandings": [
            "The Bohr model for hydrogen: electrons orbit the nucleus in discrete circular orbits with quantised energy",
            "Energy levels: E_n = −13.6/n² eV, where n = 1 (ground state), 2, 3, ... (excited states)",
            "The existence of quantised energy and orbits arises from the quantisation of angular momentum: mvr = nh/(2π)",
            "Only orbits where the angular momentum is an integer multiple of h/(2π) are allowed — this is the quantum condition",
            "The Bohr model correctly predicts hydrogen's spectrum but fails for multi-electron atoms"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Rutherford's model had a problem: an orbiting electron accelerates (centripetal) → Maxwell's equations say it should radiate energy → it should spiral into the nucleus in ~10⁻¹¹ s. But atoms are stable. Something is wrong with classical physics. Bohr's radical solution: electrons can ONLY orbit at specific radii — and they DON'T radiate while in these orbits.\"</p><p><strong>Direct instruction (20 min):</strong> Bohr's postulates: (1) Electrons orbit in stationary states (don't radiate). (2) Only orbits where mvr = nh/(2π) are allowed. (3) Photons are emitted/absorbed only during transitions between states. From postulate 2 + Coulomb force + circular motion: derive (or state) E_n = −13.6/n² eV. n = 1: E₁ = −13.6 eV (ground state, most tightly bound). n = 2: E₂ = −3.4 eV. n = 3: E₃ = −1.51 eV. n → ∞: E = 0 (ionisation — electron free). The orbit radius: r_n = n²a₀ where a₀ = 0.053 nm (Bohr radius). Draw the energy level diagram with transitions: Lyman (to n = 1, UV), Balmer (to n = 2, visible), Paschen (to n = 3, IR).</p><p><strong>Spectral verification (10 min):</strong> Calculate the wavelengths predicted by Bohr for the Balmer series: E = 13.6(1/n_f² − 1/n_i²) eV. For n = 3→2: E = 1.89 eV → λ = 656 nm (red). For n = 4→2: E = 2.55 eV → λ = 486 nm (cyan). These match the OBSERVED hydrogen spectrum exactly. \"Bohr's theory PREDICTED the spectrum — it wasn't fitted to the data. This is the power of a correct theory.\"</p><p><strong>Worked examples (15 min):</strong> (1) Ionisation energy from the ground state = 13.6 eV. (2) Photon from n = 5→2: E = 13.6(1/4 − 1/25) = 2.856 eV → λ = 434 nm (violet). (3) An electron in n = 4 absorbs a photon and is ionised. Minimum photon energy? E = |E₄| = 0.85 eV. (4) Angular momentum in n = 3: L = 3h/(2π).</p><p><strong>Practice (10 min):</strong> Energy level, transition, and angular momentum calculations.</p>",
          "engagementHook": {
            "title": "THE SPECTRUM THAT BOHR PREDICTED — WITHOUT SEEING IT",
            "content": "\"Bohr published his model in 1913. His equation predicted hydrogen's spectral lines to 4 significant figures — matching measurements that had been catalogued for decades but never explained. He predicted lines in the UV (Lyman series) that HADN'T BEEN OBSERVED YET. They were found exactly where Bohr said they'd be.\" Students calculate 3 Balmer wavelengths and compare with the observed hydrogen spectrum on the wall."
          },
          "nos": {
            "tags": ["Theories", "Models", "Observations"],
            "description": "The Bohr model is a fascinating case study in NOS: it was revolutionary (introduced quantisation to atomic structure), partially correct (accurate for hydrogen), and ultimately wrong (fails for helium and all heavier atoms). Yet it's still taught because it captures the essential physics of quantised energy. Previous models are 'still valid' within their domain — as the IB guiding question asks."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Open-minded"],
          "ao": [
            "AO1 — State E_n = −13.6/n² eV; state mvr = nh/(2π); describe the Bohr model",
            "AO2 — Calculate energy levels, transition energies, and photon wavelengths for hydrogen",
            "AO3 — Analyse the successes and limitations of the Bohr model"
          ],
          "resources": "Hydrogen energy level diagram (large), calculators, hydrogen spectral tube + grating for verification, Bohr model animation",
          "formative": "\"(a) Calculate E₁, E₂, E₃, E₄ for hydrogen using E_n = −13.6/n². (b) Find the wavelength of the photon emitted in the n = 6→2 transition. Which series is this in? (c) A hydrogen atom absorbs a 12.75 eV photon while in the ground state. To which level does the electron jump? (d) Calculate the angular momentum of the electron in n = 4. (e) Why does the Bohr model fail for helium?\""
        },
        {
          "num": 2,
          "title": "Bohr Model Applications & Synthesis (AHL)",
          "focus": "Multi-step problems combining energy levels, spectra, and scattering",
          "minutes": 60,
          "understandings": [
            "Combine E_n = −13.6/n², E = hf, closest approach, and R = R₀A^(1/3) in complex problems",
            "Ionisation energy: energy to remove the electron from n = 1 to n = ∞ (13.6 eV for hydrogen)",
            "Series identification: Lyman (n_f = 1, UV), Balmer (n_f = 2, visible), Paschen (n_f = 3, IR)",
            "Connections: energy levels → spectra → composition → stellar physics (E.4/E.5)"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> E.1 connects multiple topics: (a) Rutherford scattering → closest approach (energy conservation from A.3 + Coulomb from D.2). (b) Bohr model → energy levels → spectra (E = hf from quantum). (c) Nuclear size → R = R₀A^(1/3) → density. Multi-step problems chain these together.</p><p><strong>Complex problems (30 min):</strong> Groups tackle: (1) A hydrogen atom in n = 5 drops to n = 2. Find: energy released, photon frequency, wavelength, which series, which colour. Then the electron absorbs a 2.55 eV photon: which level does it reach? (2) An alpha (KE = 4 MeV) approaches aluminium (Z = 13). Find closest approach. Compare with nuclear radius (R = R₀ × 27^(1/3)). Does the alpha reach the nucleus? (3) From a star's absorption spectrum: dark lines at 656 nm and 486 nm. Identify the element and the transitions. Estimate the star's composition. (4) Using mvr = nh/(2π) and F_centripetal = Coulomb force: derive the expression for r_n = n²a₀ (show that quantising angular momentum forces discrete radii).</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style E.1 problems.</p><p><strong>Wrap-up (5 min):</strong> \"E.1 is the story of how we learned what atoms look like: Thomson → Rutherford → Bohr → quantum mechanics. Each model replaced the previous one — but each is still valid within its domain. This is how science works.\"</p>",
          "engagementHook": {
            "title": "THE EVOLUTION OF THE ATOM — 4 MODELS IN 20 YEARS",
            "content": "\"1897: Thomson — plum pudding (electrons in positive 'dough'). 1911: Rutherford — nuclear model (tiny positive core). 1913: Bohr — quantised orbits (electrons in fixed energy levels). 1926: Schrödinger — wave mechanics (electrons as probability clouds).\" Each model was 'wrong' — and each was essential. Students draw all 4 models side by side. \"Which is 'right'? All of them — within their domain. And none of them — at the deepest level. This is how physics progresses.\""
          },
          "nos": {
            "tags": ["Theories", "Models", "Science as a shared endeavour"],
            "description": "The history of atomic models is the best example in the IB syllabus of the guiding question: 'In what ways are previous models still valid despite recent advances?' Thomson's model is wrong about atomic structure but right about electrons. Rutherford's model is wrong about electron orbits but right about the nucleus. Bohr's model is wrong about fixed orbits but right about quantised energy. Each 'wrong' model captured something true."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Open-minded", "Communicator"],
          "ao": [
            "AO2 — Apply E.1 concepts in multi-step problems combining scattering, energy levels, and spectra",
            "AO3 — Evaluate the progression of atomic models and what each contributed"
          ],
          "resources": "Problem sets, whiteboards, 4-models poster, calculators, exam papers",
          "formative": "\"(a) A hydrogen atom drops from n = 4 to n = 1 (via n = 4→3→2→1). Calculate the wavelength of each photon emitted. In which part of the EM spectrum is each? (b) Compare: single transition 4→1 vs stepwise 4→3→2→1. Is the total energy the same? Are the photons the same? (c) An alpha (5 MeV) is fired at a carbon nucleus (Z = 6, A = 12). Find r_min. Find R_carbon. Does the alpha reach the nucleus? (d) Draw the four atomic models in chronological order. For each, state one thing it got RIGHT and one thing it got WRONG.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "D.2 Electric & Magnetic Fields", "question": "How does Coulomb's law explain the Rutherford scattering pattern and the distance of closest approach?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How is energy conservation applied in head-on scattering experiments?" },
    { "topic": "A.2 Forces & Momentum", "question": "How did Rutherford use momentum conservation to deduce nuclear structure?" },
    { "topic": "E.4 Fission / E.5 Fusion", "question": "How can emission spectra allow for the properties of stars to be determined?" },
    { "topic": "C.3 Wave Phenomena", "question": "How does electron diffraction provide evidence for wave-particle duality and probe nuclear structure?" },
    { "topic": "IB Linking (NOS)", "question": "What is the role of evidence in the development of models of the atom? How are previous models still valid?" }
  ]
},
"E2": {
  "title": "Quantum Physics",
  "code": "E.2",
  "theme": "E",
  "level": "HL only",
  "recommendedHours": 8,
  "recommendedMinutes": 480,
  "guidingQuestions": [
    "How can light be used to create an electric current?",
    "What is meant by wave–particle duality?"
  ],
  "groups": [
    {
      "name": "The Photoelectric Effect",
      "color": "accent4",
      "totalMinutes": 240,
      "subtopics": [
        {
          "num": 1,
          "title": "Photoelectric Effect — Observations & Evidence",
          "focus": "Light ejects electrons from metals — but only above a threshold frequency",
          "minutes": 60,
          "understandings": [
            "The photoelectric effect: light shining on a metal surface can eject electrons (photoelectrons)",
            "Photoelectrons are only emitted when the light frequency exceeds a threshold frequency f₀ — below f₀, NO electrons are emitted regardless of intensity",
            "Increasing intensity increases the NUMBER of photoelectrons but NOT their maximum KE",
            "Increasing frequency increases the maximum KE of photoelectrons",
            "These observations CANNOT be explained by the wave model of light — evidence for the particle nature of light"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Shine UV light on a zinc plate connected to an electroscope — the electroscope discharges. The UV ejects electrons.\" Now try visible light — even very bright visible light — NOTHING happens. \"Brighter light has MORE energy per second. Why doesn't it work?\" Because it's not about total energy — it's about energy PER PHOTON. Each photon must have enough energy individually to eject one electron.</p><p><strong>Direct instruction (20 min):</strong> The three key observations that wave theory CAN'T explain: (1) Threshold frequency: below f₀, no emission regardless of intensity. Wave theory says: just wait — waves should accumulate energy gradually. Reality: instant emission above f₀, zero below. (2) Intensity increases rate (more photons → more electrons) but NOT max KE. Wave theory says: more intense → more energy → faster electrons. Reality: same max KE, just more of them. (3) Emission is instantaneous (within 10⁻⁹ s). Wave theory says: energy accumulates over time — should take minutes for a dim source. Reality: immediate. Einstein's explanation (1905): light comes in PHOTONS, each with energy E = hf. One photon ejects one electron. If hf < Φ (work function): photon doesn't have enough energy → no emission. If hf ≥ Φ: electron ejected with KE_max = hf − Φ.</p><p><strong>Demo (10 min):</strong> UV lamp + zinc plate + electroscope: plate discharges under UV but not visible light. Insert a glass plate between UV source and zinc: discharge STOPS (glass absorbs UV). \"The glass removes the high-frequency photons. The remaining visible photons don't have enough energy per photon.\"</p><p><strong>Discussion (15 min):</strong> Why couldn't wave theory explain this? In wave theory, energy depends on amplitude (intensity), not frequency. A very bright red light should eventually eject electrons if waves delivered energy gradually. But it NEVER does. \"This was the crisis that launched quantum physics. Einstein solved it — and won the Nobel Prize, NOT for relativity, but for the photoelectric effect.\"</p><p><strong>Practice (10 min):</strong> Classify observations as explainable by wave theory or requiring photon theory.</p>",
          "engagementHook": {
            "title": "EINSTEIN'S NOBEL PRIZE — NOT FOR E = mc²",
            "content": "\"Einstein is famous for relativity. But his Nobel Prize (1921) was for the photoelectric effect. His 1905 paper proposed that light is made of particles (photons), each carrying energy hf. This was MORE revolutionary than relativity — it said light, which Maxwell had proved was a wave, was ALSO a particle. The entire foundation of quantum mechanics rests on this idea.\""
          },
          "nos": {
            "tags": ["Theories", "Observations", "Falsification"],
            "description": "The photoelectric effect falsified the classical wave theory of light — a theory that had been triumphant since Young's double slit experiment (1801). Maxwell's equations described light perfectly as a wave. Yet the photoelectric effect demanded particles. This is one of the most dramatic examples of scientific revolution: a successful theory overturned by a single set of observations."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer", "Open-minded"],
          "ao": [
            "AO1 — Describe the photoelectric effect and its key observations",
            "AO2 — Explain why wave theory fails and photon theory succeeds",
            "AO3 — Analyse why each observation supports the particle nature of light"
          ],
          "resources": "UV lamp, zinc plate, electroscope, glass plate (UV filter), photoelectric effect simulation (PhET)",
          "formative": "\"(a) State three observations of the photoelectric effect that wave theory cannot explain. (b) For each, explain how the photon model provides a correct explanation. (c) UV light ejects electrons from zinc but visible light doesn't (even at very high intensity). Explain. (d) Why did Einstein receive the Nobel Prize for the photoelectric effect rather than relativity?\""
        },
        {
          "num": 2,
          "title": "Einstein's Equation — E_k(max) = hf − Φ",
          "focus": "One photon, one electron, one equation — the quantum revolution",
          "minutes": 65,
          "understandings": [
            "Work function Φ: the minimum energy needed to release an electron from the metal surface",
            "Einstein's photoelectric equation: E_k(max) = hf − Φ",
            "If hf < Φ: no emission. If hf = Φ: electron just barely released (KE = 0). If hf > Φ: excess energy becomes KE",
            "Threshold frequency: f₀ = Φ/h — the minimum frequency for emission",
            "Different metals have different Φ values → different f₀ values"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> Energy conservation for one photon ejecting one electron: photon energy = work to escape + kinetic energy of the freed electron. hf = Φ + E_k(max). Rearrange: E_k(max) = hf − Φ. At threshold: E_k = 0 → hf₀ = Φ → f₀ = Φ/h. Below f₀: hf < Φ → E_k would be negative → impossible → no emission. Φ depends on the metal: caesium has low Φ (easy to eject, responds to visible light), platinum has high Φ (needs UV). Present a table of Φ values for common metals.</p><p><strong>Worked examples (25 min):</strong> (1) Zinc: Φ = 4.3 eV. Threshold frequency: f₀ = Φ/h = 4.3 × 1.6 × 10⁻¹⁹ / 6.63 × 10⁻³⁴ = 1.04 × 10¹⁵ Hz → λ₀ = 289 nm (UV — explains why visible light doesn't work). (2) UV photon (f = 1.5 × 10¹⁵ Hz) hits zinc: E_k = hf − Φ = 6.63 × 10⁻³⁴ × 1.5 × 10¹⁵ − 4.3 × 1.6 × 10⁻¹⁹ = 3.07 × 10⁻¹⁹ J = 1.92 eV. Speed: v = √(2E_k/m) = 8.2 × 10⁵ m/s. (3) Which metals emit with visible light (f ≈ 5 × 10¹⁴ Hz)? Only those with Φ < hf = 2.07 eV → caesium (Φ = 1.9 eV) works. (4) A photon of λ = 200 nm hits sodium (Φ = 2.3 eV). Find E_k(max) and the speed of the fastest photoelectron.</p><p><strong>Practice (20 min):</strong> Mixed photoelectric calculations: finding Φ, f₀, E_k, v from various given data.</p>",
          "engagementHook": {
            "title": "SOLAR CELLS — THE PHOTOELECTRIC EFFECT POWERING YOUR PHONE",
            "content": "\"Solar cells work by the photoelectric effect: sunlight photons eject electrons in a semiconductor, creating a current. The threshold frequency determines which part of the solar spectrum is useful. Silicon's band gap (1.1 eV → f₀ ≈ 2.7 × 10¹⁴ Hz, λ₀ ≈ 1100 nm) means it absorbs visible and near-IR but not far-IR. Every solar panel on Earth runs on Einstein's 1905 equation.\""
          },
          "nos": {
            "tags": ["Theories", "Technology", "Global impact"],
            "description": "Einstein's photoelectric equation is one of the simplest in physics — yet it won the Nobel Prize because it introduced the photon concept. Solar cells, night vision, CCD cameras, and automatic doors all use the photoelectric effect. One equation, discovered through pure physics, now generates hundreds of gigawatts of renewable energy."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define work function; state E_k(max) = hf − Φ; define threshold frequency",
            "AO2 — Calculate Φ, f₀, E_k, v for various metals and photon frequencies",
            "AO3 — Analyse which metals respond to which parts of the EM spectrum"
          ],
          "resources": "Φ values table for metals, calculators, solar cell diagram, PhET photoelectric simulation",
          "formative": "\"(a) Potassium has Φ = 2.3 eV. Find f₀ and λ₀. Will violet light (λ = 400 nm) cause emission? (b) If yes, find E_k(max) and the speed of the emitted electron. (c) Red light (λ = 700 nm) at 10× the intensity: any emission? Why not? (d) A metal has f₀ = 6 × 10¹⁴ Hz. Find Φ in eV. (e) A 3.5 eV photon ejects an electron with E_k = 1.2 eV. Find Φ.\""
        },
        {
          "num": 3,
          "title": "Stopping Voltage & Graphical Analysis",
          "focus": "eV_s = hf − Φ and extracting h and Φ from graphs",
          "minutes": 55,
          "understandings": [
            "Stopping voltage V_s: the minimum reverse voltage needed to stop the most energetic photoelectrons",
            "eV_s = E_k(max) = hf − Φ → V_s = (h/e)f − Φ/e",
            "V_s vs f graph: straight line with gradient h/e and y-intercept −Φ/e",
            "The x-intercept gives f₀ (threshold frequency)",
            "This graph allows experimental determination of h and Φ"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> To measure E_k(max): apply a reverse voltage V_s until the photocurrent drops to zero. At that point: eV_s = E_k(max). So: eV_s = hf − Φ → V_s = (h/e)f − Φ/e. Plot V_s vs f: straight line! Gradient = h/e → extract h. y-intercept = −Φ/e → extract Φ. x-intercept (V_s = 0): f₀ = Φ/h. This is one of the most important graphs in modern physics — it's how Millikan verified Einstein's equation (1916) and measured h.</p><p><strong>Lab / Data analysis (20 min):</strong> Give students V_s vs f data for a metal (or use simulation data). Plot V_s vs f. Draw the best-fit line. From gradient: h = gradient × e. From y-intercept: Φ = −(y-intercept) × e. From x-intercept: f₀. Compare calculated h with accepted value (6.63 × 10⁻³⁴). Calculate % error.</p><p><strong>Worked examples (10 min):</strong> (1) V_s = 1.2 V when f = 8 × 10¹⁴ Hz, and V_s = 0.4 V when f = 6 × 10¹⁴ Hz. Gradient = (1.2 − 0.4)/(8 − 6) × 10¹⁴ = 4 × 10⁻¹⁵ V·s = h/e → h = 4 × 10⁻¹⁵ × 1.6 × 10⁻¹⁹ = 6.4 × 10⁻³⁴ J·s (close to actual). (2) Find Φ from the data. (3) Different metal: same gradient (h/e is universal) but different intercept (different Φ).</p><p><strong>Practice (10 min):</strong> Graph interpretation and h extraction problems.</p>",
          "engagementHook": {
            "title": "MILLIKAN'S MEASUREMENT OF h — FROM A GRAPH",
            "content": "\"Robert Millikan spent 10 years (1906-1916) trying to DISPROVE Einstein's photoelectric equation. He measured V_s vs f meticulously for multiple metals. Every time: a straight line with gradient h/e. Despite wanting Einstein to be wrong, Millikan's data CONFIRMED the equation perfectly. He wrote: 'I spent ten years of my life testing Einstein's 1905 equation and, contrary to all my expectations, I was compelled to assert its unambiguous verification.'\" Students extract h from Millikan-style data and verify Einstein was right."
          },
          "nos": {
            "tags": ["Measurements", "Theories", "Falsification"],
            "description": "Millikan tried to falsify Einstein's equation and ended up confirming it — a beautiful example of how science works. His meticulous measurements earned him the Nobel Prize (1923). The integrity of accepting results that contradict your hypothesis is the hallmark of good science."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Principled", "Thinker"],
          "ao": [
            "AO1 — Define stopping voltage; state V_s = (h/e)f − Φ/e",
            "AO2 — Extract h and Φ from V_s vs f graphs",
            "AO3 — Analyse why different metals have the same gradient but different intercepts"
          ],
          "resources": "V_s vs f data sets, graph paper, calculators, PhET photoelectric simulation",
          "formative": "\"V_s vs f data: (5.5 × 10¹⁴, 0.1), (7.0 × 10¹⁴, 0.72), (8.5 × 10¹⁴, 1.34), (10 × 10¹⁴, 1.96). All in Hz and V. (a) Plot V_s vs f. (b) Find gradient. Calculate h. (c) Find y-intercept. Calculate Φ in eV. (d) Find f₀ from the x-intercept. (e) A second metal has V_s values that are all 0.5 V lower. What changed? Same or different h? Same or different Φ?\""
        },
        {
          "num": 4,
          "title": "Photoelectric Problem Solving",
          "focus": "Multi-step problems combining all photoelectric concepts",
          "minutes": 60,
          "understandings": [
            "Combine E_k = hf − Φ, eV_s = E_k, f₀ = Φ/h, and graphical analysis in complex problems",
            "Calculate photon energy from wavelength: E = hc/λ",
            "Determine whether emission occurs for a given metal and light source",
            "Calculate photoelectron speed, current (from intensity and photon rate), and power"
          ],
          "teachingStrategy": "<p><strong>Strategy review (10 min):</strong> Decision framework: (a) Given λ → E = hc/λ. (b) Compare E with Φ → emission? (c) If yes: E_k = E − Φ → v = √(2E_k/m). (d) Stopping voltage: V_s = E_k/e. (e) Photon rate: n/t = P/(hf) where P is light power. (f) Photocurrent: I = (n/t) × e × quantum efficiency.</p><p><strong>Complex problems (30 min):</strong> Groups tackle: (1) A 60 W UV lamp (λ = 250 nm) shines on caesium (Φ = 1.9 eV). Find: photon energy (4.97 eV), E_k (3.07 eV), v (1.04 × 10⁶ m/s), V_s (3.07 V), photon rate (1.51 × 10¹⁹/s). If 1% of photons eject electrons: I = 24.2 mA. (2) Two metals (Φ₁ = 2.0 eV, Φ₂ = 4.5 eV) illuminated by the same 300 nm source. Which emits? Find E_k for each that emits. (3) A V_s vs f graph with 4 data points: extract h, Φ, f₀. Then predict V_s for a new frequency. (4) A photoelectric cell in a circuit: light energy → electrical energy → power to a load. Calculate efficiency.</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style problems.</p><p><strong>Wrap-up (5 min):</strong> \"The photoelectric effect proved light is a particle. But Young's double slit proved light is a wave. Both are correct — wave-particle duality. Next: if light can be a particle, can particles be waves?\"</p>",
          "engagementHook": {
            "title": "DESIGNING A PHOTOELECTRIC SENSOR",
            "content": "\"Design a sensor that detects UV light but NOT visible light. Which metal should you use?\" Students choose a metal with f₀ in the UV range (high Φ). Calculate: response to 300 nm UV (yes → find current) and 500 nm visible (no → Φ too high). Then: \"Design one that detects ALL visible light.\" Need Φ < 1.77 eV (lowest visible energy) → caesium works. Real photodetectors use exactly this physics."
          },
          "nos": {
            "tags": ["Technology", "Models"],
            "description": "Photoelectric sensors are everywhere: automatic doors, smoke detectors, digital cameras (CCD/CMOS sensors), solar cells. Each application requires choosing a material with the right work function for the desired wavelength range. Engineering IS applied physics."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Communicator"],
          "ao": [
            "AO2 — Apply all photoelectric equations in multi-step problems",
            "AO3 — Design photoelectric systems for specific applications"
          ],
          "resources": "Problem sets, whiteboards, Φ values table, calculators",
          "formative": "\"A 40 W lamp emits light of λ = 400 nm onto a sodium surface (Φ = 2.3 eV). (a) Photon energy in eV. (b) Does emission occur? (c) E_k(max) and V_s. (d) Photon rate. (e) If quantum efficiency is 0.5%, find the photocurrent. (f) The lamp wavelength is changed to 600 nm. Does emission still occur? Why or why not?\""
        }
      ]
    },
    {
      "name": "Wave-Particle Duality & Matter Waves",
      "color": "accent",
      "totalMinutes": 240,
      "subtopics": [
        {
          "num": 1,
          "title": "de Broglie Wavelength — λ = h/p",
          "focus": "If waves are particles, are particles waves?",
          "minutes": 60,
          "understandings": [
            "Louis de Broglie (1924): if light (a wave) can behave as a particle (photon with p = h/λ), then particles (electrons, protons) should behave as waves with wavelength λ = h/p = h/(mv)",
            "The de Broglie wavelength: λ = h/p = h/(mv) for a particle with momentum p",
            "Larger momentum → shorter wavelength → less wave-like behaviour",
            "For macroscopic objects: λ is incredibly small → wave effects are undetectable",
            "For electrons: λ can be comparable to atomic spacings → diffraction and interference are observable"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Young's double slit proved light is a wave (1801). The photoelectric effect proved light is a particle (1905). Both are true — light is BOTH. In 1924, a French PhD student asked: if waves can be particles, can particles be waves? His name was Louis de Broglie. His thesis changed physics forever.\"</p><p><strong>Direct instruction (15 min):</strong> For a photon: E = hf and p = E/c = hf/c = h/λ → λ = h/p. de Broglie proposed: the SAME equation applies to ALL particles. An electron with momentum p has a wavelength λ = h/p = h/(mv). Is this detectable? For a person (70 kg, 1 m/s): λ = 6.63 × 10⁻³⁴ / 70 = 9.5 × 10⁻³⁶ m. Way too small — no observable wave effects. For an electron accelerated through 100 V: v = √(2eV/m) = 5.9 × 10⁶ m/s → λ = h/(mv) = 1.2 × 10⁻¹⁰ m = 0.12 nm. This is comparable to atomic spacings in crystals → diffraction IS possible.</p><p><strong>Worked examples (20 min):</strong> (1) Electron at 10⁷ m/s: λ = 7.3 × 10⁻¹¹ m = 0.073 nm. (2) Electron accelerated through V: KE = eV → p = √(2meV) → λ = h/√(2meV). For V = 150 V: λ = 0.1 nm. (3) A neutron at room temperature (thermal neutron, KE = (3/2)k_BT): v = √(3k_BT/m) → λ. At T = 300 K: λ ≈ 0.15 nm → neutron diffraction is used to study crystal structures. (4) A 0.1 kg ball at 30 m/s: λ = 2.2 × 10⁻³⁴ m → undetectable.</p><p><strong>Discussion (10 min):</strong> \"Why don't we see wave effects in everyday life?\" Because λ is fantastically small for macroscopic objects. Wave effects (diffraction, interference) are only observable when λ is comparable to the size of obstacles/apertures. For baseballs: λ << any aperture. For electrons: λ ≈ atomic spacings → interference IS observable.</p><p><strong>Practice (10 min):</strong> de Broglie wavelength calculations for various particles and speeds.</p>",
          "engagementHook": {
            "title": "A PhD THESIS THAT WON THE NOBEL PRIZE",
            "content": "\"In 1924, Louis de Broglie submitted a PhD thesis proposing that ALL particles have wave properties. His thesis committee was so unsure they sent it to Einstein for review. Einstein called it 'a first feeble ray of light on this worst of our physics enigmas.' Three years later, electron diffraction was observed — confirming de Broglie's prediction. He won the Nobel Prize in 1929 — for his PhD thesis.\""
          },
          "nos": {
            "tags": ["Theories", "Patterns", "Observations"],
            "description": "De Broglie's hypothesis is a beautiful example of reasoning by analogy: if waves have particle properties, then particles should have wave properties. This symmetry argument — extended by Schrödinger into wave mechanics — became the foundation of quantum mechanics. The prediction was confirmed experimentally within 3 years by Davisson and Germer (electron diffraction from nickel crystals, 1927)."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — State λ = h/p = h/(mv); explain de Broglie's hypothesis",
            "AO2 — Calculate de Broglie wavelength for various particles and energies",
            "AO3 — Analyse why wave effects are observable for electrons but not macroscopic objects"
          ],
          "resources": "Calculators, particle data table (masses), crystal spacing data, de Broglie biography",
          "formative": "\"(a) An electron is accelerated through 200 V. Find its speed, momentum, and de Broglie wavelength. (b) A proton at the same speed: find its wavelength. Why is it shorter? (c) A cricket ball (0.16 kg, 40 m/s): find λ. Could you ever observe its diffraction? (d) What accelerating voltage gives an electron a wavelength of 0.1 nm (comparable to atomic spacing)?\""
        },
        {
          "num": 2,
          "title": "Electron Diffraction — Evidence for Matter Waves",
          "focus": "Electrons diffract through crystals — they ARE waves",
          "minutes": 55,
          "understandings": [
            "Electron diffraction: electrons fired at a thin crystal (or graphite film) produce a diffraction pattern of concentric rings — identical in form to X-ray diffraction",
            "This is direct evidence that electrons have wave properties",
            "The ring spacing matches predictions from λ = h/p using the known crystal spacing",
            "Davisson-Germer experiment (1927): first experimental confirmation of de Broglie's hypothesis",
            "Wave-particle duality: all quantum objects (photons, electrons, neutrons, atoms) exhibit BOTH wave and particle properties — which you observe depends on the experiment"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show the electron diffraction pattern: concentric rings, exactly like X-ray diffraction. \"If electrons were just particles, they'd make a dot on the screen. Rings mean interference. Interference means WAVES. Electrons are waves.\"</p><p><strong>Direct instruction (15 min):</strong> Davisson and Germer (1927): fired electrons at a nickel crystal and observed a diffraction pattern matching λ = h/p exactly. G.P. Thomson (son of J.J. Thomson) independently observed electron diffraction through thin metal foils — also matching de Broglie. The rings appear because the crystal lattice acts as a diffraction grating for electron waves, just as it does for X-rays. Higher accelerating voltage → faster electrons → shorter λ → rings closer together (less diffraction, just like light through a wide slit).</p><p><strong>The irony (5 min):</strong> \"J.J. Thomson won the Nobel Prize (1906) for proving the electron is a PARTICLE. His son G.P. Thomson won the Nobel Prize (1937) for proving the electron is a WAVE. Both were right.\" This is wave-particle duality — the central mystery of quantum mechanics.</p><p><strong>Demo / Simulation (10 min):</strong> Electron diffraction tube (if available) or PhET simulation: increase voltage → rings shrink (shorter λ). Decrease voltage → rings expand (longer λ). Students verify: λ = h/√(2meV) predicts the ring size correctly.</p><p><strong>Worked examples (10 min):</strong> (1) Electrons at 5 kV: λ = h/√(2meV) = 0.017 nm. Compare with graphite lattice spacing (0.213 nm). First ring angle: sinθ = λ/d. (2) Neutrons at thermal energies (λ ≈ 0.1 nm) diffract from crystals — used in materials science. (3) Even ATOMS have been diffracted — helium atoms through nanostructures.</p><p><strong>Practice (10 min):</strong> Electron diffraction calculations and wave-particle duality conceptual questions.</p>",
          "engagementHook": {
            "title": "FATHER AND SON — BOTH WON NOBELS, BOTH WERE RIGHT",
            "content": "\"J.J. Thomson proved the electron is a particle (1897). His son G.P. Thomson proved the electron is a wave (1927). Father: Nobel 1906. Son: Nobel 1937. Were they contradicting each other?\" No — both were correct. The electron IS both. \"Which property you see depends on what experiment you do. Measure which slit it goes through → particle. Don't measure → wave (interference pattern). This is the deepest mystery in physics.\""
          },
          "nos": {
            "tags": ["Observations", "Theories", "Falsification"],
            "description": "Electron diffraction confirmed de Broglie's hypothesis — a prediction from pure theoretical reasoning verified by experiment. The wave-particle duality it revealed remains the most counterintuitive aspect of quantum mechanics. Feynman called the double slit experiment with electrons 'the only mystery' in quantum physics."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker", "Open-minded"],
          "ao": [
            "AO1 — Describe electron diffraction as evidence for matter waves",
            "AO2 — Calculate electron wavelength and relate to diffraction pattern",
            "AO3 — Analyse wave-particle duality — when does each behaviour manifest?"
          ],
          "resources": "Electron diffraction tube or simulation, diffraction pattern photos, calculators",
          "formative": "\"(a) Electrons accelerated through 4 kV hit a graphite target (d = 0.213 nm). Find λ and the angle of the first diffraction ring. (b) The voltage is increased to 10 kV. Does the ring get larger or smaller? Calculate to verify. (c) If protons were used at the same voltage instead of electrons, would the rings be larger or smaller? Why? (d) Explain why the double slit experiment with electrons demonstrates wave-particle duality.\""
        },
        {
          "num": 3,
          "title": "Pair Production & Annihilation",
          "focus": "Energy ↔ matter — E = mc² in action",
          "minutes": 60,
          "understandings": [
            "Pair production: a photon with sufficient energy (≥ 2m_ec² = 1.022 MeV) can create an electron-positron pair near a nucleus",
            "The photon disappears; its energy becomes the mass and KE of the two particles: E_photon = 2m_ec² + KE_e + KE_positron",
            "A nucleus must be nearby to conserve momentum (photon has momentum; the pair alone can't conserve it)",
            "Pair annihilation: when an electron meets a positron, they annihilate, producing (typically) two gamma photons",
            "Conservation: charge (0 = +1 + (−1)), energy (masses → photon energies), momentum (two photons in opposite directions)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Einstein's E = mc² says mass IS energy. Can you convert pure energy (a photon) into mass (particles)?\" YES — pair production. A gamma ray photon with ≥ 1.022 MeV can create an electron + positron out of nothing but energy. And the reverse: electron + positron → two gamma photons. Matter and energy are interchangeable.</p><p><strong>Direct instruction (20 min):</strong> Pair production: photon → e⁻ + e⁺ (near a nucleus). Minimum photon energy: E_min = 2m_ec² = 2 × 0.511 MeV = 1.022 MeV. Any excess energy → KE of the particles. Why near a nucleus? Conservation of momentum. A single photon has momentum p = E/c. The electron-positron pair can't conserve both energy AND momentum alone — the nucleus absorbs the recoil momentum. Pair annihilation: e⁻ + e⁺ → 2γ. Why TWO photons? Conservation of momentum. If the pair is at rest: total p = 0. One photon has p ≠ 0 → can't conserve. Two photons in opposite directions: p₁ + p₂ = 0 ✓. Each photon: E = m_ec² = 0.511 MeV. Conservation checks: charge (+1 − 1 = 0 ✓), lepton number (1 − 1 = 0 ✓), energy (2 × 0.511 = 1.022 MeV ✓), momentum (opposite directions ✓).</p><p><strong>Worked examples (15 min):</strong> (1) A 3 MeV photon produces a pair. KE of each particle: (3 − 1.022)/2 = 0.989 MeV each. (2) A 0.8 MeV photon: can it produce a pair? No — 0.8 < 1.022 MeV. (3) An electron (KE = 0.5 MeV) annihilates with a positron at rest. Total energy = 0.511 + 0.511 + 0.5 = 1.522 MeV → shared between two photons (not equally, since momentum of the moving electron must be conserved).</p><p><strong>PET scan application (5 min):</strong> Positron Emission Tomography: a radioactive tracer emits positrons inside the body. Each positron annihilates with a nearby electron → two 0.511 MeV gamma rays in opposite directions. Detectors around the body locate the origin. \"Medical imaging powered by E = mc² and pair annihilation.\"</p><p><strong>Practice (15 min):</strong> Pair production thresholds, annihilation photon energies, conservation checks.</p>",
          "engagementHook": {
            "title": "CREATING MATTER FROM LIGHT — E = mc² IN REVERSE",
            "content": "\"In pair production: a photon disappears and TWO particles appear. Pure energy → matter. This happens right now in the Earth's upper atmosphere — cosmic ray gamma rays create electron-positron pairs constantly.\" Then: \"In PET scans: positrons from a radioactive tracer annihilate with your body's electrons. The two gamma rays reveal exactly where the tracer is — doctors use antimatter to find cancers.\""
          },
          "nos": {
            "tags": ["Theories", "Technology", "Observations"],
            "description": "Pair production was predicted by Dirac's equation (1928) and first observed by Anderson (1932, discovered the positron). It confirmed: (a) E = mc² allows mass-energy conversion, (b) antimatter exists, (c) Dirac's relativistic quantum theory was correct. Anderson's cloud chamber photograph of a positron is one of the most important images in physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Open-minded"],
          "ao": [
            "AO1 — Describe pair production and annihilation; state threshold energy 2m_ec²",
            "AO2 — Calculate minimum photon energy, particle KE, and annihilation photon energies",
            "AO3 — Analyse conservation laws in pair production and annihilation"
          ],
          "resources": "Cloud chamber photo of pair production, PET scan diagram, calculators, particle data (m_e, c)",
          "formative": "\"(a) Calculate the minimum photon energy (in MeV and J) for pair production. (b) A 5 MeV photon creates an electron-positron pair. Find the KE of each particle. (c) An electron and positron, both at rest, annihilate. Find the energy, frequency, and wavelength of each gamma photon. (d) Why are two photons produced, not one? (e) Explain how PET scans use pair annihilation to image the body.\""
        },
        {
          "num": 4,
          "title": "Quantum Synthesis — Wave-Particle Duality in Full",
          "focus": "Bringing together photons, matter waves, and the quantum worldview",
          "minutes": 65,
          "understandings": [
            "Wave-particle duality applies to ALL quantum objects: photons, electrons, neutrons, atoms",
            "When a quantum object is detected: it behaves as a particle (localised, definite position)",
            "When it propagates: it behaves as a wave (delocalised, interference, diffraction)",
            "The double slit experiment with single electrons: each electron lands as a dot (particle), but the pattern of many dots builds up interference fringes (wave)",
            "This is the central mystery of quantum mechanics — no classical explanation exists"
          ],
          "teachingStrategy": "<p><strong>The double slit with electrons (15 min):</strong> The most important experiment in quantum physics: fire electrons one at a time through a double slit. Each electron hits the screen at a SINGLE point (particle). But after thousands of electrons: the dots form an INTERFERENCE PATTERN (wave). \"Each electron interferes with ITSELF — it goes through both slits simultaneously as a wave, but arrives at the screen as a particle.\" If you put a detector at the slits to see which slit each electron goes through: the interference pattern DISAPPEARS. Observation changes the outcome. Show the Hitachi electron double slit video.</p><p><strong>Synthesis discussion (15 min):</strong> Organise the evidence: WAVE evidence: Young's double slit, diffraction, interference, polarisation. PARTICLE evidence: photoelectric effect, Compton scattering, pair production, detectors clicking. Resolution: quantum objects are NEITHER classical waves NOR classical particles. They're quantum objects described by probability amplitudes (wave functions). We use 'wave' and 'particle' as metaphors because we have no direct experience of quantum behaviour. \"Quantum mechanics doesn't answer 'what IS an electron?' — it answers 'what will we OBSERVE when we measure?'\"</p><p><strong>Multi-step problems (25 min):</strong> (1) Light: λ = 500 nm. Find: photon energy, momentum, de Broglie wavelength (same as light λ — self-consistent). (2) Electron with same λ = 500 nm: find momentum, speed, KE. Compare with photon energy at same λ. (3) An electron passes through a 0.1 nm slit. Estimate the angular spread of its diffraction pattern: θ ≈ λ/w where λ = de Broglie wavelength. (4) Pair production from a 2 MeV photon → find de Broglie wavelengths of the produced particles.</p><p><strong>Exam practice (10 min):</strong> 2 timed problems combining photoelectric + de Broglie + pair production.</p>",
          "engagementHook": {
            "title": "THE EXPERIMENT THAT BROKE REALITY — ELECTRONS ONE AT A TIME",
            "content": "Show the Hitachi video: single electrons through a double slit. Dot by dot, the interference pattern builds up. \"Each electron goes through BOTH slits. It interferes with itself. If you watch which slit it goes through, the interference vanishes. The act of observation changes the result.\" Feynman: 'Nobody understands quantum mechanics.' \"And he was right — but we can PREDICT with it to 12 decimal places. It's the most successful theory in history, and the least understood.\""
          },
          "nos": {
            "tags": ["Theories", "Models", "Observations"],
            "description": "Wave-particle duality forced physicists to abandon the idea that nature can be described by everyday concepts. Bohr's complementarity principle: wave and particle are complementary descriptions — both are needed, neither is complete alone. This represents a fundamental shift in what we expect physics to provide: not a picture of 'what things are,' but a framework for predicting observations."
          },
          "atl": ["Thinking skills", "Communication skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — State wave-particle duality for all quantum objects",
            "AO2 — Calculate photon and particle properties; solve combined quantum problems",
            "AO3 — Analyse the double slit experiment with electrons and its implications"
          ],
          "resources": "Hitachi electron double slit video, calculators, summary table template (wave vs particle evidence), exam papers",
          "formative": "\"(a) List three pieces of evidence for the wave nature of light and three for the particle nature. (b) An electron is accelerated through 100 V and passes through a 0.2 nm slit. Find λ and estimate the diffraction angle. (c) In the double slit experiment with single electrons: describe what you see on the screen after 10, 1000, and 100,000 electrons. (d) If a detector is placed at the slits: what changes and why? (e) 'The electron goes through both slits.' Is this statement literally true? Discuss.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "E.1 Structure of the Atom", "question": "How does the photoelectric effect relate to atomic energy levels? Both involve photons with E = hf." },
    { "topic": "C.3 Wave Phenomena", "question": "How does electron diffraction connect to the wave phenomena (diffraction, interference) studied in C.3?" },
    { "topic": "A.5 Special Relativity (HL)", "question": "How does E = mc² enable pair production and annihilation? How is the relativistic energy-momentum relation E² = (pc)² + (mc²)² relevant?" },
    { "topic": "B.1 Thermal Energy Transfers", "question": "How does the photoelectric effect connect to the black body radiation problem that launched quantum physics (Planck, 1900)?" },
    { "topic": "IB Linking (NOS)", "question": "How did the photoelectric effect and electron diffraction challenge existing paradigms and lead to quantum mechanics?" }
  ]
},
"E3": {
  "title": "Radioactive Decay",
  "code": "E.3",
  "theme": "E",
  "level": "SL + HL",
  "recommendedHours": 12,
  "recommendedMinutes": 720,
  "guidingQuestions": [
    "Why are some isotopes more stable than others?",
    "In what ways can a nucleus undergo change?",
    "How can the random nature of radioactive decay allow for predictions to be made?"
  ],
  "groups": [
    {
      "name": "Nuclear Structure & Binding Energy (SL)",
      "color": "accent4",
      "totalMinutes": 180,
      "subtopics": [
        {
          "num": 1,
          "title": "Isotopes, Mass Defect & Binding Energy",
          "focus": "Why nuclei weigh less than their parts — and where the missing mass goes",
          "minutes": 60,
          "understandings": [
            "Isotopes: atoms of the same element (same Z) with different numbers of neutrons (different A)",
            "Mass defect Δm: the difference between the total mass of separate nucleons and the actual mass of the nucleus — Δm = Zm_p + (A−Z)m_n − m_nucleus",
            "The mass defect represents the mass converted to energy when the nucleus was assembled: E_binding = Δmc²",
            "Nuclear binding energy: the energy required to completely separate the nucleus into individual nucleons",
            "Greater binding energy → more stable nucleus"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Weigh 2 protons and 2 neutrons separately: total mass = 4.03188 u. Weigh a helium-4 nucleus: 4.00153 u. Where did 0.03035 u go?\" It was converted to energy: E = Δmc² = 28.3 MeV. \"This 'missing mass' is the binding energy — the energy that holds the nucleus together. To split helium-4 back into its parts, you'd need to supply 28.3 MeV.\"</p><p><strong>Direct instruction (20 min):</strong> Define isotopes: same Z, different A. Hydrogen: ¹H (0 neutrons), ²H (1 neutron = deuterium), ³H (2 neutrons = tritium). Mass defect: Δm = Zm_p + (A−Z)m_n − m_nucleus. Always positive for stable nuclei — they always weigh LESS than their parts. E = Δmc². Units: 1 u = 931.5 MeV/c². So E_binding (MeV) = Δm (u) × 931.5. Binding energy per nucleon: BE/A — a measure of how tightly each nucleon is held. Higher BE/A → more stable.</p><p><strong>Worked examples (20 min):</strong> (1) He-4: Δm = 2(1.00728) + 2(1.00866) − 4.00153 = 0.03035 u. E = 0.03035 × 931.5 = 28.3 MeV. BE/A = 28.3/4 = 7.07 MeV/nucleon. (2) Fe-56: given masses, calculate Δm and BE/A. (Compare: Fe-56 has the highest BE/A at ~8.8 MeV/nucleon.) (3) U-238: calculate BE/A (~7.6 MeV/nucleon — lower than Fe-56, hence less stable per nucleon).</p><p><strong>Practice (15 min):</strong> Mass defect and BE/A calculations for various nuclei.</p>",
          "engagementHook": {
            "title": "THE MISSING MASS — WHERE DID IT GO?",
            "content": "\"4 separate nucleons weigh MORE than the helium nucleus they form. The 'missing' 0.03 u became 28.3 MeV of energy when the nucleus formed. That energy was released as radiation — and is the energy source of every star. The Sun converts 4 million tonnes of mass to energy every SECOND. E = mc² in action, 150 million km away, keeping you alive.\""
          },
          "nos": {
            "tags": ["Theories", "Measurements", "Patterns"],
            "description": "Francis Aston measured atomic masses precisely with his mass spectrometer (1920s Nobel) and discovered that nuclei weigh less than their parts. The explanation required Einstein's E = mc² (1905). Two Nobel Prize-winning discoveries combined to explain nuclear stability — a beautiful convergence of measurement and theory."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Define isotopes, mass defect, binding energy, and BE/A",
            "AO2 — Calculate Δm, E_binding, and BE/A from given masses",
            "AO3 — Analyse why greater BE/A means greater nuclear stability"
          ],
          "resources": "Atomic mass data table, calculators, periodic table, BE/A graph",
          "formative": "\"Given: m_p = 1.00728 u, m_n = 1.00866 u, m(Li-7) = 7.01436 u. (a) Find Δm. (b) Find E_binding in MeV. (c) Find BE/A. (d) Compare with Fe-56 (BE/A = 8.79). Which is more stable per nucleon? (e) If you could convert 1 kg of mass entirely to energy (E = mc²), how much energy would that be?\""
        },
        {
          "num": 2,
          "title": "The BE/A Curve & the Strong Nuclear Force",
          "focus": "The graph that explains fission, fusion, and stellar energy",
          "minutes": 60,
          "understandings": [
            "The variation of binding energy per nucleon (BE/A) with nucleon number A: rises steeply for light nuclei, peaks at Fe-56 (~8.8 MeV), then gradually decreases for heavy nuclei",
            "Fusion (combining light nuclei) INCREASES BE/A → releases energy. Fission (splitting heavy nuclei) also INCREASES BE/A → releases energy",
            "Both processes move TOWARD the peak (Fe-56) — the most stable configuration",
            "The strong nuclear force: short-range (~1 fm), attractive force between nucleons that overcomes electrostatic repulsion",
            "The strong force binds the nucleus; the electromagnetic force tries to break it apart"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> Display the BE/A curve. \"This is the most important graph in nuclear physics. It tells you: which nuclei are stable, why stars shine, why nuclear weapons work, and why iron is the final product of stellar fusion.\"</p><p><strong>Direct instruction (20 min):</strong> Walk through the graph: (a) Very light nuclei (H, He): low BE/A → not very tightly bound per nucleon. (b) Rising steeply: He-4 is a spike (unusually stable — 'magic number' 2). (c) Peak at Fe-56: maximum stability. (d) Heavy nuclei (U, Pu): BE/A decreases — electrostatic repulsion of many protons loosens the binding. Energy is released when nuclei move TOWARD Fe-56: fusion (left → peak) or fission (right → peak). Both release energy because BE/A increases. The strong nuclear force: attractive, acts between ALL nucleon pairs, but only over ~1 fm (comparable to nucleon size). Beyond ~3 fm: essentially zero. This is why large nuclei are less stable — protons on opposite sides feel electrostatic repulsion (long-range) but NOT the strong force (short-range).</p><p><strong>Graphical analysis (15 min):</strong> Students annotate the BE/A curve: mark Fe-56 (peak), fusion region (left), fission region (right), He-4 (spike), very heavy elements (decreasing). Calculate: energy released in fusion of 2 H-2 → He-4: ΔBE = 4 × 7.07 − 2 × (2 × 1.11) = 28.28 − 4.44 = 23.84 MeV. (Approximate — actual depends on specific masses.)</p><p><strong>Discussion (10 min):</strong> \"Why can't you get energy from splitting iron? Or from fusing iron?\" Because Fe-56 is at the PEAK. Moving in either direction from the peak DECREASES BE/A — you'd need to ADD energy. Iron is the nuclear ash — the dead end of stellar fusion.</p><p><strong>Practice (10 min):</strong> BE/A curve interpretation and energy release estimation.</p>",
          "engagementHook": {
            "title": "THE MOST IMPORTANT GRAPH IN NUCLEAR PHYSICS",
            "content": "\"This one graph explains: (1) why the Sun shines (fusion, left → peak). (2) Why nuclear reactors work (fission, right → peak). (3) Why iron is the most common element in Earth's core (peak = end of the road). (4) Why elements heavier than iron require supernovae to form (need energy INPUT).\" Students trace with their finger: fusion goes UP the left side (energy out). Fission comes DOWN the right side (energy out). Both head toward iron."
          },
          "nos": {
            "tags": ["Patterns", "Theories", "Global impact"],
            "description": "The BE/A curve was constructed from thousands of mass measurements over decades. The pattern — peak at Fe-56 — was recognised before it was fully explained. The explanation required both the strong nuclear force (proposed by Yukawa, 1935) and the liquid drop model of the nucleus (Gamow, von Weizsäcker). Pattern → explanation → prediction → application."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — Describe the BE/A curve; describe the strong nuclear force",
            "AO2 — Use the curve to predict whether fusion or fission releases energy for a given nucleus",
            "AO3 — Analyse why Fe-56 is the most stable nucleus and why iron is the endpoint of stellar fusion"
          ],
          "resources": "Large BE/A curve poster, calculators, nuclear force range diagram",
          "formative": "\"(a) Sketch the BE/A curve. Label the fusion region, fission region, and Fe-56 peak. (b) Why does fusion of light nuclei release energy? Use BE/A to explain. (c) Why does fission of heavy nuclei release energy? (d) Can you get energy from fusing two iron nuclei? Explain. (e) The strong force has range ~1 fm. Explain why this makes very large nuclei unstable.\""
        },
        {
          "num": 3,
          "title": "E = mc² in Nuclear Reactions",
          "focus": "Mass-energy equivalence — the source of nuclear power",
          "minutes": 60,
          "understandings": [
            "Mass-energy equivalence: E = mc² — mass can be converted to energy and vice versa",
            "In nuclear reactions: the total mass of products is LESS than the total mass of reactants → the difference (Δm) appears as energy: E = Δmc²",
            "1 u of mass = 931.5 MeV of energy",
            "Nuclear reactions release ~10⁶ times more energy per unit mass than chemical reactions",
            "This is the energy source of nuclear power stations and nuclear weapons"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A chemical reaction (burning coal) releases ~4 eV per atom. A nuclear reaction (fission of U-235) releases ~200 MeV per atom. That's 50 MILLION times more energy per event. Why?\" Because nuclear reactions convert MASS to energy. Chemical reactions rearrange electrons — no mass changes. Nuclear reactions rearrange nucleons — measurable mass changes.</p><p><strong>Direct instruction (15 min):</strong> E = mc². In nuclear reactions: measure total mass before and after. The difference Δm → E = Δmc². Conversion: 1 u = 1.661 × 10⁻²⁷ kg → E = 1.661 × 10⁻²⁷ × (3 × 10⁸)² = 1.493 × 10⁻¹⁰ J = 931.5 MeV. So: Δm in u × 931.5 = energy in MeV. Compare: 1 kg of U-235 fission → ~8.2 × 10¹³ J. 1 kg of coal combustion → ~3 × 10⁷ J. Ratio: ~2.7 million. Nuclear energy density is millions of times greater than chemical.</p><p><strong>Worked examples (20 min):</strong> (1) Fission: U-235 + n → Ba-141 + Kr-92 + 3n. Given masses: calculate Δm and energy released per fission (~200 MeV). (2) Fusion: 2H + 3H → 4He + n. Calculate energy released (~17.6 MeV). (3) Energy from 1 kg of U-235: number of atoms = 1000/(235 × 1.661 × 10⁻²⁷) = 2.56 × 10²⁴. Total energy = 2.56 × 10²⁴ × 200 × 10⁶ × 1.6 × 10⁻¹⁹ = 8.2 × 10¹³ J. (4) The Sun: converts 4.3 million tonnes/s of mass to energy. P = Δm × c²/t = 4.3 × 10⁹ × (3 × 10⁸)² / 1 = 3.87 × 10²⁶ W.</p><p><strong>Practice (20 min):</strong> E = Δmc² calculations for various nuclear reactions.</p>",
          "engagementHook": {
            "title": "THE SUN LOSES 4 MILLION TONNES PER SECOND",
            "content": "\"Every second, the Sun converts 4.3 × 10⁹ kg of mass into energy. 4.3 million tonnes — vanished. Converted to 3.87 × 10²⁶ watts of light and heat. E = mc² at cosmic scale.\" Students calculate: how long until the Sun runs out? Mass = 2 × 10³⁰ kg. At 4.3 × 10⁹ kg/s: ~4.7 × 10²⁰ seconds ≈ 15 billion years. (But only ~10% is usable hydrogen → ~5 billion years of main sequence left. We're about halfway through.)"
          },
          "nos": {
            "tags": ["Theories", "Global impact", "Measurements"],
            "description": "E = mc² was proposed by Einstein in 1905 as a consequence of special relativity. Its verification in nuclear reactions came decades later. The equation enables both nuclear power (controlled fission) and nuclear weapons (uncontrolled fission/fusion). No other equation in physics has had such profound ethical and geopolitical consequences."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — State E = mc²; explain mass-energy equivalence in nuclear reactions",
            "AO2 — Calculate energy released from Δm in nuclear reactions",
            "AO3 — Compare nuclear and chemical energy densities; analyse the Sun's energy output"
          ],
          "resources": "Nuclear reaction mass data, calculators, Sun data, energy comparison chart (nuclear vs chemical)",
          "formative": "\"(a) In the reaction ²H + ³H → ⁴He + ¹n, total mass of reactants = 5.02990 u, products = 5.01102 u. Find Δm and energy released. (b) Energy from 1 g of deuterium-tritium fuel. Compare with 1 g of petrol (~46 kJ). (c) The Sun's luminosity is 3.85 × 10²⁶ W. Find the mass converted per second. (d) Why are nuclear reactions ~10⁶ times more energetic than chemical reactions per unit mass?\""
        }
      ]
    },
    {
      "name": "Radioactive Decay Processes (SL)",
      "color": "accent",
      "totalMinutes": 240,
      "subtopics": [
        {
          "num": 1,
          "title": "Alpha, Beta & Gamma Decay",
          "focus": "Three types of radiation — what they are and what they do to the nucleus",
          "minutes": 60,
          "understandings": [
            "Radioactive decay is random and spontaneous — it cannot be predicted for individual nuclei or influenced by external conditions",
            "Alpha (α) decay: nucleus emits ⁴₂He → A decreases by 4, Z decreases by 2",
            "Beta-minus (β⁻) decay: neutron → proton + electron + antineutrino → A unchanged, Z increases by 1",
            "Beta-plus (β⁺) decay: proton → neutron + positron + neutrino → A unchanged, Z decreases by 1",
            "Gamma (γ) decay: excited nucleus emits a photon → no change in A or Z",
            "Neutrinos ν and antineutrinos ν̄ are emitted in beta decay to conserve energy, momentum, and lepton number"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A uranium atom sits peacefully for 4.5 billion years, then suddenly — with no warning and no trigger — it spits out an alpha particle and becomes thorium. Nothing caused it. It's fundamentally random. This is radioactive decay.\"</p><p><strong>Direct instruction (25 min):</strong> Alpha: ²³⁸U → ²³⁴Th + ⁴He. Heavy particle (4u), +2 charge, low penetration (stopped by paper), high ionisation. Occurs in heavy nuclei (A > 200) to reduce size. Beta-minus: ¹⁴C → ¹⁴N + ⁰₋₁e + ν̄. A neutron converts to a proton (mediated by the weak force). Emits electron + antineutrino. Occurs in neutron-rich nuclei. Beta-plus: ¹¹C → ¹¹B + ⁰₊₁e + ν. A proton converts to a neutron. Emits positron + neutrino. Occurs in proton-rich nuclei. Gamma: excited nucleus → lower state + γ photon. Often follows α or β decay. No change in A or Z — just energy release. Neutrinos: needed to conserve energy (beta particles have a continuous energy spectrum, not discrete — the neutrino carries the 'missing' energy).</p><p><strong>Decay equations (10 min):</strong> Students write balanced decay equations for 6 examples. Verify: A conserved (total nucleon number), Z conserved (total charge), lepton number conserved.</p><p><strong>Comparison table (10 min):</strong> Build: Type | Particle | Charge | Mass | Penetration | Ionisation | Effect on A, Z | Occurs when...</p><p><strong>Practice (10 min):</strong> Write decay equations, classify decay types, identify daughter nuclei.</p>",
          "engagementHook": {
            "title": "THE GHOST PARTICLE — WHY NEUTRINOS HAD TO EXIST",
            "content": "\"In 1930, beta decay had a problem: the emitted electron didn't always have the same energy. Energy appeared to be NOT conserved. Pauli proposed a desperate solution: an invisible, nearly massless particle carries the missing energy. He called it the 'little neutral one' — the neutrino. It wasn't detected until 1956 (26 years later). Pauli: 'I have done a terrible thing. I have postulated a particle that cannot be detected.'\" Students calculate the missing energy in a specific beta decay."
          },
          "nos": {
            "tags": ["Theories", "Observations", "Patterns"],
            "description": "The neutrino was predicted (1930) from conservation laws before it was detected (1956). This is one of the most powerful examples of conservation laws as predictive tools in physics. Rather than abandon energy conservation, Pauli hypothesised a new particle — and was eventually proved right. Conservation laws are so trusted that their apparent violation signals new physics."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Inquirer", "Knowledgeable"],
          "ao": [
            "AO1 — Describe α, β⁻, β⁺, γ decay; write decay equations; explain the role of neutrinos",
            "AO2 — Write balanced nuclear decay equations; identify daughter nuclei",
            "AO3 — Analyse why each decay type occurs (neutron-rich, proton-rich, heavy nuclei)"
          ],
          "resources": "Decay equation practice sheets, periodic table, comparison table template, neutrino story",
          "formative": "\"(a) Write the decay equation for α decay of Ra-226. (b) Write the β⁻ decay of Co-60. (c) Why is a neutrino needed in β decay? (d) Complete the table: decay type, particle, penetration, ionisation. (e) A nucleus undergoes α decay followed by two β⁻ decays. If it starts as Th-232, what is the final nucleus?\""
        },
        {
          "num": 2,
          "title": "Penetration, Ionisation & Detection",
          "focus": "How alpha, beta, and gamma interact with matter differently",
          "minutes": 45,
          "understandings": [
            "Alpha particles: high ionisation (large charge, large mass, slow), low penetration (stopped by paper or few cm of air)",
            "Beta particles: moderate ionisation, moderate penetration (stopped by few mm of aluminium)",
            "Gamma rays: low ionisation (no charge), high penetration (reduced by several cm of lead or thick concrete)",
            "Penetration and ionisation are inversely related: high ionisation → rapid energy loss → short range"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Alpha particles can be stopped by a sheet of paper. Gamma rays can pass through your entire body. But alpha particles are MORE dangerous if you swallow the source — they dump ALL their energy into a tiny volume of tissue. Gamma passes through without depositing much. Penetration and danger are NOT the same thing.\"</p><p><strong>Direct instruction (10 min):</strong> Alpha: +2 charge, 4u mass. Ionises EVERY atom it passes near (strips electrons). Loses energy rapidly → stops quickly (paper, skin, few cm air). Beta: −1 charge (or +1), light (1/1836 u). Less ionising per encounter but travels further before stopping (few mm Al). Gamma: no charge, no mass — just a photon. Rarely interacts → passes through most materials. Reduced (not stopped) by dense materials (lead, concrete). Inverse relationship: alpha ionises heavily → loses energy fast → stops quickly. Gamma ionises weakly → retains energy → travels far.</p><p><strong>Demo (10 min):</strong> Geiger-Müller tube + radioactive sources (if available) or simulation: (1) Alpha source + paper between source and detector → count drops to background. (2) Beta source + aluminium → count drops. (3) Gamma source + lead → count reduced but not zero. Students record count rates for each absorber thickness.</p><p><strong>Discussion (10 min):</strong> Safety implications: external exposure → gamma is most dangerous (reaches internal organs). Internal exposure (ingested/inhaled) → alpha is most dangerous (dumps energy into tissue, causing DNA damage). Polonium-210 (alpha emitter) was used to poison Alexander Litvinenko in 2006 — harmless outside the body, lethal inside.</p><p><strong>Practice (10 min):</strong> Classify radiation types by properties. Safety scenario analysis.</p>",
          "engagementHook": {
            "title": "THE LITVINENKO CASE — ALPHA'S DEADLY SECRET",
            "content": "\"Alexander Litvinenko was poisoned with polonium-210, an alpha emitter. Alpha can't penetrate skin — it's harmless externally. But he drank it in tea. Inside his body: every alpha particle deposited ALL its energy into his cells. He died 23 days later.\" Students calculate: Po-210 emits 5.3 MeV alphas. Each alpha ionises ~150,000 atoms in tissue. \"Same radiation, different route, opposite outcome. Physics saves lives — and takes them.\""
          },
          "nos": {
            "tags": ["Global impact", "Observations", "Ethics"],
            "description": "Understanding radiation penetration and ionisation is essential for radiation safety — medical imaging (X-rays, gamma), cancer treatment (targeted radiation), nuclear industry safety, and environmental protection. The biological effects of radiation depend on the TYPE, ENERGY, and LOCATION — all physics concepts applied to protect health."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Caring", "Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State penetration and ionisation properties of α, β, γ",
            "AO2 — Determine radiation type from absorber experiments",
            "AO3 — Analyse safety implications of internal vs external exposure"
          ],
          "resources": "GM tube + sources (if available) or simulation, absorbers (paper, Al, lead), safety scenario cards",
          "formative": "\"(a) Rank α, β, γ by penetration (low to high) and ionisation (low to high). (b) An unknown source is tested: paper has no effect, 3 mm Al stops it. What type? (c) A worker handles a gamma source with tongs at 2 m distance. Another accidentally ingests an alpha source. Who is in greater danger? Explain. (d) Why are alpha emitters used in smoke detectors (inside a sealed chamber) but not in medical imaging?\""
        },
        {
          "num": 3,
          "title": "Half-Life, Activity & Count Rate",
          "focus": "T₁/₂ — the clock of nuclear physics",
          "minutes": 60,
          "understandings": [
            "Half-life T₁/₂: the time taken for half the radioactive nuclei in a sample to decay (or for the activity to halve)",
            "Activity A: the number of decays per second (unit: becquerel, Bq = 1 decay/s)",
            "Count rate: the number of decays detected per second — less than activity due to detector efficiency and geometry",
            "After n half-lives: fraction remaining = (½)ⁿ, activity = A₀(½)ⁿ",
            "Background radiation must be subtracted from count rate to get the corrected count rate",
            "Integer half-lives: problems using 1, 2, 3, ... half-lives without exponential equations (SL)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Carbon-14 has a half-life of 5730 years. If a tree dies with 100 C-14 atoms, after 5730 years: 50 remain. After 11,460 years: 25. After 17,190: 12.5 (on average). We can't predict WHICH atoms will decay — but we can predict HOW MANY.\"</p><p><strong>Direct instruction (15 min):</strong> Half-life T₁/₂: after each T₁/₂, half the remaining nuclei decay. N = N₀(½)ⁿ where n = t/T₁/₂ (integer values at SL). Activity A = decay rate. After n half-lives: A = A₀(½)ⁿ. Count rate: what the detector measures — always LESS than activity (detector doesn't catch every decay). Background: natural radiation (cosmic rays, radon, rocks) that the detector picks up even with no source present. Must subtract background from count rate: corrected count rate = measured − background.</p><p><strong>Simulation (10 min):</strong> Dice simulation: 100 dice = radioactive atoms. Roll all: any showing '6' has 'decayed' — remove them. Record how many remain. Repeat. Plot remaining vs round number. The curve is exponential. T₁/₂ ≈ 3.8 rounds (ln2 / ln(6/5) ≈ 3.8). Students see: each atom's fate is random, but the overall pattern is predictable. This is the essence of radioactive decay.</p><p><strong>Worked examples (15 min):</strong> (1) T₁/₂ = 8 days. A₀ = 1000 Bq. After 24 days (3 half-lives): A = 1000/8 = 125 Bq. (2) A sample has count rate 240 cpm, background = 40 cpm. Corrected = 200 cpm. After 2 half-lives: corrected = 50 cpm. Measured = 50 + 40 = 90 cpm. (3) C-14 dating: a sample has 25% of its original C-14. How old? 2 half-lives = 11,460 years. (4) Medical: Tc-99m (T₁/₂ = 6 hours) injected at 800 MBq. Activity after 24 hours? (4 half-lives → 50 MBq.)</p><p><strong>Practice (15 min):</strong> Half-life problems including background correction.</p>",
          "engagementHook": {
            "title": "THE DICE EXPERIMENT — RANDOMNESS CREATES PATTERNS",
            "content": "100 dice. Roll all. Remove every 6 — they've 'decayed.' Count survivors. Roll again. Repeat. \"Each die has a 1/6 chance of decaying each round — completely random. But the TOTAL number of survivors follows a smooth exponential curve.\" Plot the data. \"This is radioactive decay: unpredictable for individuals, perfectly predictable for populations. That's why half-life works.\""
          },
          "nos": {
            "tags": ["Models", "Patterns", "Measurements"],
            "description": "Radioactive decay is fundamentally random — the first truly random process discovered in physics. Unlike Newtonian mechanics (deterministic), decay is probabilistic. This was deeply disturbing to physicists: Einstein famously said 'God does not play dice.' But the statistics are reliable: for large numbers of atoms, the decay rate is precisely predictable."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Thinker"],
          "ao": [
            "AO1 — Define half-life, activity, count rate; explain background radiation",
            "AO2 — Calculate remaining nuclei, activity, and count rate using integer half-lives",
            "AO3 — Analyse decay data including background subtraction"
          ],
          "resources": "100 dice per group, data table, graph paper, GM tube (if available), C-14 dating example",
          "formative": "\"T₁/₂ = 5 hours. Initial count rate (corrected) = 800 cpm. Background = 20 cpm. (a) Corrected count rate after 15 hours. (b) Measured count rate after 15 hours. (c) A bone has 12.5% of its original C-14 (T₁/₂ = 5730 years). How old is it? (d) A sample's measured count rate drops from 320 to 100 cpm in 12 minutes. Background = 20 cpm. Find T₁/₂.\""
        },
        {
          "num": 4,
          "title": "Decay Chains & Problem Solving",
          "focus": "Multi-step decay series and mixed decay problems",
          "minutes": 75,
          "understandings": [
            "Radioactive decay series: a sequence of decays from a heavy unstable nucleus to a stable end product",
            "Example: U-238 decay series → through 14 decays (8α + 6β⁻) → Pb-206 (stable)",
            "Each decay changes A and/or Z, identified by the type of radiation emitted",
            "Combining: decay equations, half-life, activity, penetration, and energy calculations"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Some nuclei require MANY decays to reach stability. U-238 → ... → Pb-206 (14 steps). Each α reduces A by 4, Z by 2. Each β⁻ increases Z by 1 (A unchanged). The whole chain: ΔA = 238 − 206 = 32 = 8 × 4 → 8 alpha decays. ΔZ = 92 − 82 = 10. 8 alphas reduce Z by 16. 6 betas increase Z by 6. Net: −16 + 6 = −10 ✓. Students can work out the NUMBER of each decay type from start and end nuclei.</p><p><strong>Multi-step problems (35 min):</strong> Groups tackle: (1) Th-232 → Pb-208. Find number of α and β⁻ decays. (2) A hospital uses Tc-99m (T₁/₂ = 6 hr). A dose of 400 MBq is prepared at 8am. Activity when injected at 2pm? After the scan (4pm), the patient's activity? How long until activity drops below 10 MBq? (3) Mixed: a source has initial count rate 6400 cpm (corrected). After 3 half-lives: 800 cpm. Background = 50 cpm. What does the detector read? (4) C-14 dating: a sample has count rate 3.5 cpm per gram. Living wood has 15.3 cpm per gram. Background = 0.5 cpm per gram. Find the age. (5) Energy: U-238 α decays to Th-234. Given masses, find the KE of the alpha particle (assume nucleus is at rest → conservation of momentum distributes energy between alpha and daughter).</p><p><strong>Exam practice (20 min):</strong> 4 timed IB-style E.3 problems.</p><p><strong>Wrap-up (10 min):</strong> \"E.3 connects: nuclear structure (binding energy, strong force) → instability (decay types) → statistics (half-life) → applications (dating, medicine, power). The same physics explains why the Sun shines, how we date ancient artefacts, and how we treat cancer.\"</p>",
          "engagementHook": {
            "title": "CARBON DATING — HOW OLD IS THIS BONE?",
            "content": "\"Living organisms absorb C-14 from the atmosphere. When they die, C-14 decays with T₁/₂ = 5730 years. By measuring the remaining C-14, you can date the sample.\" Give students real data: a Viking sword handle has 78% of its original C-14. Age? ln(0.78)/ln(0.5) × 5730 = 2050 years → about 25 BC to 75 AD. \"Physics as archaeology.\""
          },
          "nos": {
            "tags": ["Measurements", "Technology", "Science as a shared endeavour"],
            "description": "Carbon-14 dating (developed by Willard Libby, Nobel Prize 1960) revolutionised archaeology, geology, and climate science. It relies on the constant rate of radioactive decay — a quantum mechanical property used to unlock the past. The technique has been calibrated against tree-ring data and coral records, making it accurate to within 50 years for samples up to ~50,000 years old."
          },
          "atl": ["Thinking skills", "Social skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Inquirer"],
          "ao": [
            "AO2 — Solve decay chain, half-life, dating, and energy problems in combination",
            "AO3 — Analyse decay series to determine number of α and β decays"
          ],
          "resources": "Decay chain diagrams, C-14 dating data, medical isotope data, problem sets, calculators",
          "formative": "\"(a) U-235 → Pb-207. Find the number of α and β⁻ decays. (b) A source starts at 12,800 Bq. After 40 minutes: 400 Bq. Find T₁/₂. (c) A wooden artefact has C-14 activity of 10 counts/min/g. A living sample gives 80 counts/min/g. Background = 0 for simplicity. Find the age in years. (d) In α decay of Po-210 (mass 209.9829 u) → Pb-206 (205.9745 u) + He-4 (4.0026 u): find the energy released and estimate the KE of the alpha.\""
        }
      ]
    },
    {
      "name": "Nuclear Stability & Exponential Decay (AHL)",
      "color": "accent3",
      "totalMinutes": 300,
      "subtopics": [
        {
          "num": 1,
          "title": "Nuclear Stability & the N-Z Diagram (AHL)",
          "focus": "Neutron-to-proton ratio determines stability and decay mode",
          "minutes": 60,
          "understandings": [
            "Evidence for the strong nuclear force: nuclei exist despite proton repulsion → a stronger attractive force must bind them",
            "The role of the neutron-to-proton ratio (N/Z) for stability: light stable nuclei have N ≈ Z, heavy stable nuclei need N > Z (extra neutrons provide strong-force 'glue' without adding electrostatic repulsion)",
            "Above Z ≈ 83 (bismuth): no stable isotopes exist — too many protons, electrostatic repulsion wins",
            "N-Z diagram: the band of stability. Nuclei above the band: neutron-rich → β⁻ decay. Below the band: proton-rich → β⁺ decay or electron capture. Beyond Z ≈ 83: α decay to reduce both N and Z"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why do nuclei need neutrons at all? Protons repel each other electromagnetically. Neutrons add strong-force attraction WITHOUT adding electrostatic repulsion. They're the 'nuclear glue.' But add too many → neutron excess → β⁻ decay. Too few → proton excess → β⁺ decay.\"</p><p><strong>Direct instruction (20 min):</strong> Plot N vs Z for all stable nuclei: the band of stability. For light nuclei: N ≈ Z (line at 45°). For heavy nuclei: N > Z (curve bends above the 45° line). Why? More protons → more Coulomb repulsion → need more neutrons to provide extra strong-force binding. The strong force: range ~1 fm, attracts ALL nucleon pairs (p-p, p-n, n-n). Coulomb: infinite range, repels p-p only. In small nuclei: every nucleon 'touches' every other → strong force dominates. In large nuclei: protons on opposite sides feel Coulomb but NOT strong force → proton repulsion destabilises. Above Z = 83: no combination of N works → ALL isotopes unstable.</p><p><strong>Decay mode prediction (15 min):</strong> Above the band (high N/Z): neutron excess → β⁻ decay (n → p). Below the band (low N/Z): proton excess → β⁺ decay (p → n) or electron capture. Very heavy (A > 200): α decay (reduces A by 4, Z by 2 — moves diagonally toward stability). Students predict decay modes for given nuclei by locating them on the N-Z diagram.</p><p><strong>Worked examples (10 min):</strong> (1) C-14 (Z = 6, N = 8): N/Z = 1.33 (above stability line for Z = 6) → β⁻ decay → N-14. (2) C-11 (Z = 6, N = 5): N/Z = 0.83 (below) → β⁺ decay → B-11. (3) U-238 (Z = 92, N = 146): too heavy → α decay.</p><p><strong>Practice (10 min):</strong> Predict decay modes from N-Z diagram positions.</p>",
          "engagementHook": {
            "title": "THE BAND OF STABILITY — NATURE'S NARROW PATH",
            "content": "Show the N-Z diagram with all stable nuclei highlighted. \"Out of thousands of possible N-Z combinations, only ~300 are stable. They form a narrow band. Everything else decays — sometimes in fractions of a second, sometimes over billions of years. The band is nature's 'Goldilocks zone' for nuclei.\" Students plot 10 nuclei on the diagram and predict each one's decay mode."
          },
          "nos": {
            "tags": ["Patterns", "Models", "Observations"],
            "description": "The N-Z diagram is a powerful visual model: it shows ALL stable nuclei at a glance, predicts decay modes, and reveals why heavier elements need more neutrons. It was constructed empirically from thousands of nuclear measurements over decades — a triumph of systematic data collection leading to pattern recognition."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe the band of stability; explain the role of N/Z ratio",
            "AO2 — Predict decay mode from position on N-Z diagram",
            "AO3 — Analyse why heavy nuclei need more neutrons and why Z > 83 is always unstable"
          ],
          "resources": "Large N-Z diagram poster, nuclear data for plotting, periodic table",
          "formative": "\"(a) On an N-Z diagram: plot C-12, C-14, N-13, Fe-56, U-238. Identify which are stable. (b) For each unstable one: predict the decay mode using the N-Z diagram. (c) Why does the stability line bend above N = Z for heavy elements? (d) Why is there no stable isotope with Z = 100?\""
        },
        {
          "num": 2,
          "title": "Exponential Decay — N = N₀e^(−λt) (AHL)",
          "focus": "The mathematics of randomness — decay constant and exponential functions",
          "minutes": 65,
          "understandings": [
            "The decay constant λ: the probability of decay per unit time for each nucleus",
            "N = N₀e^(−λt) — the number of undecayed nuclei decreases exponentially",
            "Activity A = λN = A₀e^(−λt) — also exponential",
            "Relationship: T₁/₂ = ln2/λ ≈ 0.693/λ",
            "The exponential law arises from the RANDOM nature of decay: each nucleus has the same probability λ of decaying in any time interval, regardless of age"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (20 min):</strong> At SL: integer half-lives (½, ¼, ⅛, ...). At HL: the full exponential. Why exponential? In a short time dt, the number that decay = λNdt (proportional to how many are present). So dN/dt = −λN → N = N₀e^(−λt). Activity: A = −dN/dt = λN = λN₀e^(−λt) = A₀e^(−λt). Link T₁/₂ to λ: at t = T₁/₂, N = N₀/2. So ½ = e^(−λT₁/₂) → ln½ = −λT₁/₂ → T₁/₂ = ln2/λ. Large λ → short T₁/₂ (decays quickly). Small λ → long T₁/₂ (decays slowly).</p><p><strong>Worked examples (25 min):</strong> (1) Co-60: T₁/₂ = 5.27 years. λ = ln2/5.27 = 0.1315 yr⁻¹. N₀ = 10²⁰ atoms. After 10 years: N = 10²⁰ × e^(−0.1315×10) = 10²⁰ × 0.268 = 2.68 × 10¹⁹. (2) A sample has A = 500 Bq at t = 0 and A = 200 Bq at t = 4 hours. Find λ: 200 = 500e^(−4λ) → λ = ln(500/200)/4 = 0.229 hr⁻¹. T₁/₂ = 0.693/0.229 = 3.03 hours. (3) I-131 (T₁/₂ = 8 days). A hospital administers 400 MBq. Activity after 20 days? A = 400e^(−0.0866×20) = 400 × 0.176 = 70.5 MBq. (4) How long until activity drops below 1 MBq? Solve: 1 = 400e^(−0.0866t) → t = ln(400)/0.0866 = 69.2 days.</p><p><strong>Graphical analysis (10 min):</strong> Plot N vs t (exponential decay curve). Also plot lnN vs t → straight line with gradient = −λ. The ln plot is the standard method to extract λ from experimental data. Students practise reading λ from both graph types.</p><p><strong>Practice (10 min):</strong> Exponential decay calculations using N = N₀e^(−λt) and ln graphs.</p>",
          "engagementHook": {
            "title": "THE HALF-LIFE OF EVERYTHING — FROM FEMTOSECONDS TO BILLIONS OF YEARS",
            "content": "\"Some isotopes have T₁/₂ < 10⁻²⁰ s (they barely exist). Others: T₁/₂ > 10¹⁰ years (older than the universe). U-238: 4.5 billion years — about the age of Earth. That's why there's still uranium in the ground. Po-214: 164 microseconds — blink and it's gone.\" Students calculate λ for each extreme and appreciate the range: 20+ orders of magnitude."
          },
          "nos": {
            "tags": ["Models", "Patterns", "Measurements"],
            "description": "Exponential decay appears throughout physics: radioactive decay, RC circuits (B.5), capacitor discharge, damped oscillations (C.4), atmospheric pressure with altitude. The same mathematical function N = N₀e^(−λt) describes them all. The IB linking question asks: 'Which areas of physics involve exponential change?' The answer: almost everywhere."
          },
          "atl": ["Thinking skills", "Self-management skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — State N = N₀e^(−λt) and T₁/₂ = ln2/λ; define decay constant",
            "AO2 — Calculate N, A, t, or λ using the exponential law; extract λ from lnN-t graphs",
            "AO3 — Analyse why the exponential form arises from random independent decay"
          ],
          "resources": "Calculators (need eˣ and ln), graph paper, lnN-t plotting practice sheets",
          "formative": "\"(a) Ra-226: T₁/₂ = 1600 years. Find λ. (b) A 5 g sample of Ra-226 (M = 226 g/mol): find N₀. (c) Find A₀ = λN₀ in Bq. (d) Activity after 3200 years (using both integer half-lives and e^(−λt) — verify they agree). (e) Plot lnA vs t data: extract λ from the gradient. Then find T₁/₂.\""
        },
        {
          "num": 3,
          "title": "AHL Decay Problem Solving & Applications",
          "focus": "Multi-step problems combining all E.3 concepts",
          "minutes": 55,
          "understandings": [
            "Combine: decay equations, BE/A, E = mc², half-life (integer and exponential), N-Z stability, and decay mode prediction",
            "Applications: radioactive dating (C-14, K-Ar), medical isotopes (Tc-99m, I-131, PET with F-18), nuclear waste management",
            "The role of T₁/₂ in application selection: short T₁/₂ for medical (minimise patient dose), long T₁/₂ for dating and power"
          ],
          "teachingStrategy": "<p><strong>Application discussion (15 min):</strong> Medical: Tc-99m (T₁/₂ = 6 hr) — ideal for imaging: decays quickly, gamma only (penetrates tissue), short enough that activity drops to safe levels in ~24 hours. I-131 (T₁/₂ = 8 days) — thyroid treatment: long enough to deliver therapeutic dose over days. F-18 for PET (T₁/₂ = 110 min) — positron emitter, annihilation produces two gammas detected by PET scanner. Dating: C-14 (5730 yr) for biological samples up to ~50,000 years. K-Ar (1.25 × 10⁹ yr) for geological samples (millions to billions of years). Nuclear waste: spent fuel contains isotopes with T₁/₂ from seconds to millions of years. Long-lived waste is the challenge: Pu-239 (T₁/₂ = 24,100 yr) remains dangerous for ~250,000 years.</p><p><strong>Complex problems (25 min):</strong> Groups tackle: (1) A hospital receives I-131 on Monday at 600 MBq. Treatment is on Thursday. Find A at treatment time. After treatment: how long until the patient's activity drops below 10 MBq? (2) A rock contains U-238 and Pb-206 in a 3:1 ratio. Assuming all Pb-206 came from U-238 decay: find the rock's age using T₁/₂ = 4.5 × 10⁹ years. (3) From a BE/A curve: estimate energy released when U-235 undergoes fission. Then calculate the energy from 1 kg of U-235 and compare with 1 kg of coal. (4) Design a medical isotope: what T₁/₂, radiation type, and production method would you choose for a cardiac scan?</p><p><strong>Exam practice (15 min):</strong> 3 timed IB-style problems.</p>",
          "engagementHook": {
            "title": "DESIGNING A MEDICAL ISOTOPE — PHYSICS SAVES LIVES",
            "content": "\"You're designing a radioactive tracer for brain imaging. Requirements: (a) short T₁/₂ (hours, not days — patient safety), (b) gamma emission only (penetrates skull, detected externally), (c) easily produced in a hospital. Students evaluate candidates: Tc-99m ✓ (6 hr, gamma, produced from Mo-99 generator). I-131 ✗ (too long, beta damages tissue). F-18 ~ (110 min, positron → PET, but needs cyclotron). \"Your choice of isotope balances physics, medicine, logistics, and patient safety.\""
          },
          "nos": {
            "tags": ["Technology", "Ethics", "Global impact"],
            "description": "Nuclear medicine saves millions of lives annually through imaging and therapy. But it also creates radioactive waste and raises ethical questions about nuclear technology. The physics is neutral — the applications can heal or harm. This dual-use nature is a recurring theme in science and technology."
          },
          "atl": ["Thinking skills", "Social skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Caring", "Knowledgeable"],
          "ao": [
            "AO2 — Apply all E.3 concepts in multi-step problems",
            "AO3 — Evaluate isotope choices for medical, dating, and energy applications"
          ],
          "resources": "Medical isotope data table, dating examples, nuclear waste infographic, problem sets, calculators",
          "formative": "\"(a) Tc-99m (T₁/₂ = 6 hr) is administered at 740 MBq at 9am. Activity at 9pm? At 9am the next day? (b) A bone has C-14 activity 3.2 disintegrations/min/g. Living bone: 15.3 dis/min/g. Find the age (use N = N₀e^(−λt) with T₁/₂ = 5730 yr). (c) Pu-239 waste (T₁/₂ = 24,100 yr). How many half-lives until activity drops to 0.1% of original? How many years is that? (d) Why is Tc-99m preferred over I-131 for diagnostic imaging?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "E.1 Structure of the Atom", "question": "Are there differences between the photons emitted as a result of atomic versus nuclear transitions?" },
    { "topic": "E.4 Fission / E.5 Fusion", "question": "How does equilibrium within a star compare to stability within the nucleus?" },
    { "topic": "D.2 Electric & Magnetic Fields", "question": "Would a nucleus be able to exist if only gravitational and electric forces were considered?" },
    { "topic": "A.2 Forces & Momentum", "question": "How did conservation of momentum and energy lead to experimental evidence of the neutrino?" },
    { "topic": "IB Linking (NOS)", "question": "Which areas of physics involve exponential change?" }
  ]
},
"E4": {
  "title": "Fission",
  "code": "E.4",
  "theme": "E",
  "level": "SL + HL",
  "recommendedHours": 4,
  "recommendedMinutes": 240,
  "guidingQuestions": [
    "In which form is energy stored within the nucleus of the atom?",
    "How can the energy released from the nucleus be harnessed?"
  ],
  "groups": [
    {
      "name": "Nuclear Fission & Chain Reactions",
      "color": "accent4",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Fission — Spontaneous & Neutron-Induced",
          "focus": "Splitting heavy nuclei to release binding energy",
          "minutes": 55,
          "understandings": [
            "Energy is released in both spontaneous and neutron-induced fission",
            "Spontaneous fission: a heavy nucleus splits without external trigger (very rare for most isotopes)",
            "Neutron-induced fission: a neutron is absorbed by a heavy nucleus (e.g., U-235), making it unstable → it splits into two smaller 'daughter' nuclei + 2-3 neutrons + energy (~200 MeV per fission)",
            "Energy released because daughter nuclei have HIGHER BE/A than the parent → mass decreases → E = Δmc²",
            "The fission products are typically unequal in mass (asymmetric fission) and are radioactive"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A single uranium-235 atom, when hit by one slow neutron, releases 200 MeV — the energy of a grain of sand falling 1 cm, but concentrated in a space 10⁻¹⁵ m across. And it releases 2-3 MORE neutrons, each capable of triggering another fission. One neutron → 2-3 → 4-9 → 8-27 → ... This is a chain reaction.\"</p><p><strong>Direct instruction (20 min):</strong> Fission example: ²³⁵U + ¹n → ¹⁴¹Ba + ⁹²Kr + 3¹n + ~200 MeV. Why does this release energy? On the BE/A curve: U-235 has BE/A ≈ 7.6 MeV. Ba-141 and Kr-92 have BE/A ≈ 8.5 MeV. Each nucleon becomes MORE tightly bound → energy is released. The ~200 MeV appears as: KE of daughter nuclei (~165 MeV), KE of neutrons (~5 MeV), gamma rays (~7 MeV), beta/gamma from fission product decay (~23 MeV). Fission products are neutron-rich → undergo β⁻ decay chains → radioactive waste. Different fissions of U-235 produce DIFFERENT daughter pairs (~40 possible combinations) — the process is random.</p><p><strong>Energy calculation (15 min):</strong> (1) From masses: ²³⁵U (235.0439 u) + ¹n (1.0087) = 236.0526 u. Products: ¹⁴¹Ba (140.9144) + ⁹²Kr (91.9262) + 3n (3.0261) = 235.8667 u. Δm = 0.1859 u → E = 173 MeV. (2) From BE/A: ΔBE = [141 × 8.4 + 92 × 8.7] − [236 × 7.6] = [1184.4 + 800.4] − 1793.6 = 191.2 MeV. (Close to measured ~200 MeV.)</p><p><strong>Demo (5 min):</strong> Mousetraps + ping pong balls: set up a grid of loaded mousetraps with a ball on each. Drop one ball → triggers one trap → ball flies up and triggers more → chain reaction. \"Each mousetrap is a U-235 atom. Each ball is a neutron.\"</p><p><strong>Practice (10 min):</strong> Fission energy calculations and balanced nuclear equations.</p>",
          "engagementHook": {
            "title": "MOUSETRAPS & PING PONG BALLS — THE CHAIN REACTION",
            "content": "Set up 50 mousetraps loaded with ping pong balls in a box. Drop one ball in. BANG-BANG-BANG — balls fly everywhere, triggering more traps, creating an avalanche. \"Each trap is a U-235 nucleus. Each ball is a neutron. One neutron → fission → more neutrons → more fission → exponential growth. In a reactor: controlled. In a bomb: uncontrolled.\""
          },
          "nos": {
            "tags": ["Theories", "Observations", "Global impact"],
            "description": "Nuclear fission was discovered by Hahn and Strassmann (1938) and explained by Meitner and Frisch (1939). Within 6 years, it powered both nuclear reactors (1942, Chicago Pile-1) and nuclear weapons (1945, Hiroshima). No other scientific discovery has been weaponised so rapidly. The ethical responsibility of scientists remains a central NOS discussion."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — Describe spontaneous and neutron-induced fission; explain energy release using BE/A",
            "AO2 — Write fission equations; calculate energy released using mass defect or BE/A",
            "AO3 — Analyse why fission products are radioactive"
          ],
          "resources": "Mousetraps + ping pong balls (chain reaction demo), BE/A curve, nuclear mass data, calculators",
          "formative": "\"(a) Write a balanced equation for: ²³⁵U + n → ⁹⁰Sr + ¹⁴³Xe + ?n. Find the number of neutrons released. (b) Using BE/A values: estimate the energy released. (c) Using masses (given): calculate Δm and E. (d) Why are fission products radioactive? (e) Why does fission only release energy for nuclei HEAVIER than iron?\""
        },
        {
          "num": 2,
          "title": "Chain Reactions — Controlled & Uncontrolled",
          "focus": "Critical mass, multiplication factor, and what makes the difference between a reactor and a bomb",
          "minutes": 65,
          "understandings": [
            "Chain reaction: each fission releases neutrons that trigger further fissions",
            "Multiplication factor k: average number of neutrons from one fission that cause another fission",
            "k < 1: sub-critical — reaction dies out. k = 1: critical — sustained, steady reaction (reactor). k > 1: supercritical — exponential growth (bomb or reactor start-up)",
            "Critical mass: the minimum mass of fissile material needed to sustain a chain reaction (depends on shape, density, enrichment, presence of moderator/reflector)",
            "U-235 vs U-238: only U-235 is fissile with slow (thermal) neutrons. Natural uranium is 99.3% U-238, only 0.7% U-235 → enrichment is needed"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"One fission releases ~2.5 neutrons. If each triggers one more fission: 1 → 2.5 → 6.25 → 15.6 → 39 → 98 → 244... After 80 generations (in ~10⁻⁶ seconds): 2.5⁸⁰ ≈ 10³² fissions — the energy of a nuclear weapon. But in a reactor: exactly 1 neutron per fission triggers the next → k = 1 → steady power. The difference between a reactor and a bomb is the difference between k = 1 and k > 1.\"</p><p><strong>Direct instruction (20 min):</strong> Define k: neutrons causing new fissions / neutrons from previous generation. k < 1: sub-critical (reaction stops). k = 1: critical (steady state — reactor operating). k > 1: supercritical (growing — used briefly during reactor start-up or continuously in a weapon). What determines k? (a) How many neutrons each fission produces (~2.5 for U-235). (b) How many are absorbed without causing fission (by U-238, control rods, structural materials). (c) How many escape the material (size/shape — larger volume → fewer escape → higher k). (d) Whether neutrons are slow enough to cause fission (U-235 fissions best with SLOW neutrons → need a moderator). Critical mass of U-235: ~52 kg as a bare sphere. With a neutron reflector: ~15 kg. Pu-239: ~10 kg bare. Enrichment: separating U-235 from U-238 (physically difficult — they're chemically identical).</p><p><strong>Discussion (20 min):</strong> Controlled vs uncontrolled: In a reactor: control rods absorb excess neutrons → maintain k = 1. Delayed neutrons (~0.7% are emitted with a delay of seconds) make control possible — without them, the reaction would be too fast to control. In a weapon: highly enriched U-235 (>80%) or Pu-239, compressed rapidly to supercritical → exponential chain reaction → explosion. Why can't a reactor explode like a bomb? (a) Fuel enrichment too low (~3-5% vs >80%). (b) Any power increase → temperature rises → Doppler broadening → U-238 absorbs more neutrons → k drops below 1 → negative feedback. (c) Control rods can be inserted in seconds.</p><p><strong>Worked examples (10 min):</strong> (1) If k = 1.001 and each generation is 0.1 s: after 100 s (1000 generations), power multiplied by 1.001¹⁰⁰⁰ = 2.72 — nearly tripled. Reactor operator inserts rods. (2) If k = 2 and each generation is 10⁻⁸ s: after 80 generations (8 × 10⁻⁷ s): 2⁸⁰ ≈ 10²⁴ fissions — nuclear explosion.</p><p><strong>Practice (10 min):</strong> k calculations and chain reaction analysis.</p>",
          "engagementHook": {
            "title": "k = 1.000 vs k = 1.001 — THE THINNEST LINE IN PHYSICS",
            "content": "\"A nuclear reactor operates at k = 1.000 — perfectly steady. If k drifts to 1.001: power increases 2.7× in 100 seconds — manageable, insert control rods. If k reaches 2.0 (weapon): power increases 10²⁴× in less than a microsecond. The difference between safe power and catastrophic explosion is in the THIRD DECIMAL PLACE of k. Nuclear engineering is the art of keeping k at exactly 1.000.\""
          },
          "nos": {
            "tags": ["Global impact", "Ethics", "Technology"],
            "description": "Nuclear fission raises profound ethical questions. The same physics that powers hospitals and cities also produced Hiroshima and Nagasaki. The Manhattan Project scientists debated the morality of their work — many later campaigned for nuclear disarmament. Einstein wrote to Roosevelt warning of the bomb's possibility; later called it 'the great mistake of my life.' Science is neutral; applications are not."
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Thinker", "Caring", "Principled"],
          "ao": [
            "AO1 — Define chain reaction, critical mass, multiplication factor k",
            "AO2 — Calculate power changes from k values; explain conditions for criticality",
            "AO3 — Analyse why reactors can't explode like bombs; discuss ethical dimensions"
          ],
          "resources": "Chain reaction animation, reactor diagram, k-factor calculation examples, Manhattan Project timeline",
          "formative": "\"(a) Define k and state the values for sub-critical, critical, and supercritical. (b) A reactor operates at k = 1. 1000 fissions occur. How many occur in the next generation? And the next? (c) If k = 1.005 and generation time = 0.1 s: find the power multiplication after 60 s. (d) Explain why natural uranium (0.7% U-235) cannot sustain a chain reaction without a moderator. (e) Why does a nuclear reactor have a NEGATIVE temperature coefficient (higher T → lower k)?\""
        }
      ]
    },
    {
      "name": "Nuclear Power Plants & Safety",
      "color": "accent3",
      "totalMinutes": 120,
      "subtopics": [
        {
          "num": 1,
          "title": "Components of a Nuclear Power Plant",
          "focus": "Control rods, moderator, heat exchanger, shielding — how a reactor works",
          "minutes": 60,
          "understandings": [
            "Moderator: slows fast neutrons to thermal speeds so they can cause fission in U-235 (water, heavy water, or graphite)",
            "Control rods: absorb neutrons to control the reaction rate and maintain k = 1 (boron or cadmium)",
            "Heat exchanger: transfers thermal energy from the reactor core to a secondary coolant loop (which drives the turbine) without mixing radioactive and non-radioactive fluids",
            "Shielding: thick concrete and steel surrounding the reactor to absorb radiation and protect workers/public",
            "The fission process: fuel rods → heat → coolant → steam → turbine → generator (Faraday's law from D.4!) → electricity"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"A nuclear power plant is a very expensive way to boil water. Fission heats water → steam → turbine → generator. The only difference from a coal plant is the heat source: nuclear fuel instead of burning coal. Everything after the steam is identical.\"</p><p><strong>Direct instruction (20 min):</strong> Walk through each component: (a) Fuel rods: enriched uranium (3-5% U-235) in metal tubes. (b) Moderator: slows neutrons. Why? U-235 fissions best with SLOW (thermal) neutrons. Fast neutrons from fission must be slowed by elastic collisions with moderator atoms. Water (light water) is cheapest. Heavy water (D₂O) absorbs fewer neutrons → can use natural uranium. Graphite: historical (Chernobyl — contributed to the disaster). (c) Control rods: boron or cadmium. Inserted → absorb neutrons → k decreases → power drops. Withdrawn → fewer absorbed → k increases → power rises. In an emergency: rods drop by gravity (SCRAM). (d) Heat exchanger: primary coolant (radioactive water touching fuel) → secondary coolant (clean water → steam → turbine). Two loops keep radioactive material INSIDE the containment. (e) Shielding: thick concrete absorbs neutrons and gamma. Steel containment vessel prevents release of radioactive material.</p><p><strong>Diagram annotation (10 min):</strong> Students annotate a reactor schematic: label every component, draw the energy flow (nuclear → thermal → mechanical → electrical), and identify where each type of radiation is produced and absorbed.</p><p><strong>Discussion (15 min):</strong> Advantages: low CO₂ during operation, high energy density, reliable baseload power, small land footprint. Disadvantages: radioactive waste (long-lived), risk of accident (Chernobyl 1986, Fukushima 2011), weapons proliferation, high construction cost, public opposition. Students create a balanced pros/cons table.</p><p><strong>Practice (10 min):</strong> Component identification, function questions, and energy flow tracing.</p>",
          "engagementHook": {
            "title": "THE MOST EXPENSIVE KETTLE IN THE WORLD",
            "content": "\"A nuclear power station costs ~$10 billion to build. It splits atoms to heat water to make steam to spin a turbine to generate electricity. A coal plant does the same thing with fire instead of fission. Everything after the steam is identical — Faraday's law from D.4 generates the electricity. The nuclear part just replaces the furnace. The most sophisticated physics in the world... to boil water.\""
          },
          "nos": {
            "tags": ["Technology", "Global impact", "Ethics"],
            "description": "Nuclear power is one of the most debated technologies. It produces ~10% of global electricity with near-zero CO₂ emissions during operation. But accidents (Three Mile Island, Chernobyl, Fukushima) and waste disposal remain serious concerns. The debate involves physics (safety engineering), politics (energy policy), economics (cost), and ethics (risk to future generations from waste)."
          },
          "atl": ["Thinking skills", "Communication skills", "Social skills"],
          "learnerProfile": ["Knowledgeable", "Caring", "Open-minded"],
          "ao": [
            "AO1 — Describe the role of control rods, moderator, heat exchanger, and shielding",
            "AO2 — Trace energy flow from fission to electricity",
            "AO3 — Evaluate advantages and disadvantages of nuclear power"
          ],
          "resources": "Reactor schematic diagram, energy flow template, pros/cons debate cards, Chernobyl/Fukushima case study summaries",
          "formative": "\"(a) State the function of each: moderator, control rods, heat exchanger, shielding. (b) Why must neutrons be slowed before they can cause fission in U-235? (c) Trace the energy chain from U-235 nucleus to electricity in the grid (at least 6 steps). (d) The control rods are fully inserted. What happens to the chain reaction? (e) List two advantages and two disadvantages of nuclear power compared to natural gas.\""
        },
        {
          "num": 2,
          "title": "Nuclear Safety, Waste & the Energy Debate",
          "focus": "Risks, waste management, and the role of nuclear in the energy mix",
          "minutes": 60,
          "understandings": [
            "Nuclear waste categories: low-level (clothing, tools — short T₁/₂), intermediate (reactor components), high-level (spent fuel rods — long T₁/₂, intensely radioactive)",
            "High-level waste remains dangerous for thousands to millions of years → deep geological storage required",
            "Safety systems: containment, redundancy, passive cooling, emergency shutdown (SCRAM)",
            "Comparison with other energy sources: CO₂ emissions, land use, reliability, waste, safety record, cost"
          ],
          "teachingStrategy": "<p><strong>Direct instruction (15 min):</strong> Waste: (a) Low-level: contaminated clothing, tools. Short T₁/₂. Stored in steel drums, shallow burial. (b) Intermediate: reactor components, resins. Mixed T₁/₂. Encased in concrete. (c) High-level: spent fuel. Contains fission products with T₁/₂ from days to millions of years (Cs-137: 30 yr, Pu-239: 24,100 yr). Generates heat. Must be cooled for years in pools, then encased in glass (vitrification), stored in deep geological repositories. The challenge: ensuring containment for ~100,000 years — longer than recorded human history. Safety: modern reactors have multiple barriers (fuel cladding, pressure vessel, containment building). Passive safety: in Generation III+ reactors, cooling works by gravity and natural circulation — no pumps needed (Fukushima's pumps failed when power was lost → meltdown).</p><p><strong>Case studies (15 min):</strong> (1) Chernobyl (1986): design flaws + operator error → steam explosion → no containment → radioactive fallout across Europe. 31 immediate deaths, ~4000 estimated cancer deaths. (2) Fukushima (2011): earthquake + tsunami → power loss → cooling failure → meltdown. 1 confirmed radiation death, ~2200 evacuation deaths. (3) Three Mile Island (1979): partial meltdown, containment held, no significant radiation release. Lessons: containment works, passive safety matters, human error is the biggest risk.</p><p><strong>Energy debate (20 min):</strong> Structured debate: Is nuclear power essential for addressing climate change? Groups represent: pro-nuclear, anti-nuclear, renewable-only, mixed-energy. Each must use physics data: energy density, CO₂ per kWh, capacity factor, waste volume, land use. No opinion without evidence. Vote after presentations.</p><p><strong>Wrap-up (10 min):</strong> \"Fission is the most concentrated energy source humans have ever harnessed. It can power civilisation with minimal CO₂ — or contaminate land for millennia. The physics is neutral. The choices are ours.\"</p>",
          "engagementHook": {
            "title": "100,000 YEARS OF RESPONSIBILITY",
            "content": "\"Spent nuclear fuel remains dangerous for 100,000 years. That's 50× longer than recorded history. 10× longer than the oldest known civilisation. How do you warn people in the year 102,026 not to dig here?\" Finland's Onkalo repository is being built 400 m underground in granite. The design question: what symbol, language, or structure will communicate 'DANGER' to humans 3000 generations from now? Students propose solutions. \"This is where physics meets philosophy.\""
          },
          "nos": {
            "tags": ["Ethics", "Global impact", "Science as a shared endeavour"],
            "description": "Nuclear waste disposal is a unique ethical challenge: the benefits accrue NOW (electricity), while the risks extend 100,000+ years into the future. Intergenerational justice — our responsibility to unborn generations — is a concept at the intersection of physics, ethics, and policy. The IAEA coordinates international safety standards, making this a shared global endeavour."
          },
          "atl": ["Thinking skills", "Social skills", "Communication skills"],
          "learnerProfile": ["Caring", "Principled", "Open-minded", "Knowledgeable"],
          "ao": [
            "AO1 — Describe waste categories and safety systems",
            "AO2 — Compare nuclear with other energy sources using quantitative data",
            "AO3 — Evaluate the role of nuclear power in addressing climate change"
          ],
          "resources": "Waste category chart, Chernobyl/Fukushima case studies, energy source comparison data, debate preparation cards",
          "formative": "\"(a) Classify nuclear waste into three categories with one example of each. (b) Pu-239 (T₁/₂ = 24,100 yr) in spent fuel. How many half-lives until activity drops to 0.1%? How many years? (c) Compare: CO₂ per kWh for nuclear (12 g), gas (490 g), coal (820 g), solar (48 g), wind (11 g). Which has the lowest? (d) A nuclear plant produces 1 GW for 30 years. Estimate: total energy output, mass of fuel used, volume of high-level waste. Compare with a coal plant of the same output. (e) 'Nuclear power is essential for fighting climate change.' Argue for AND against, using physics.\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "E.3 Radioactive Decay", "question": "How does the BE/A curve explain why fission of heavy nuclei releases energy?" },
    { "topic": "E.5 Fusion and Stars", "question": "How does fission compare with fusion in terms of energy per nucleon, fuel availability, and waste?" },
    { "topic": "A.3 Work, Energy & Power", "question": "How does the energy density of nuclear fuel compare with chemical fuels?" },
    { "topic": "B.4 Thermodynamics (HL)", "question": "How is the efficiency of a nuclear power station limited by thermodynamics (Carnot efficiency)?" },
    { "topic": "D.4 Induction (HL)", "question": "How does Faraday's law convert the mechanical rotation of the turbine into electrical energy?" },
    { "topic": "IB Linking (Ethics)", "question": "How did the discovery of fission and the development of nuclear weapons raise ethical questions about the responsibility of scientists?" }
  ]
},
"E5": {
  "title": "Fusion and Stars",
  "code": "E.5",
  "theme": "E",
  "level": "SL + HL",
  "recommendedHours": 6,
  "recommendedMinutes": 360,
  "guidingQuestions": [
    "How are elements created?",
    "What physical processes lead to the evolution of stars?",
    "Can observations of the present state of the universe predict the future outcome of the universe?"
  ],
  "groups": [
    {
      "name": "Nuclear Fusion & Stellar Equilibrium",
      "color": "accent4",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "Nuclear Fusion — Combining Light Nuclei",
          "focus": "How fusing hydrogen into helium powers the Sun and all stars",
          "minutes": 60,
          "understandings": [
            "Nuclear fusion: light nuclei combine to form a heavier nucleus, releasing energy because the products have HIGHER binding energy per nucleon (moving UP the left side of the BE/A curve toward Fe-56)",
            "The proton-proton chain: the dominant fusion process in the Sun — 4 protons → He-4 + 2 positrons + 2 neutrinos + energy (~26.7 MeV total)",
            "Fusion requires extremely high temperatures (~10⁷ K) to overcome the Coulomb barrier (electrostatic repulsion between positive nuclei)",
            "At these temperatures, matter exists as PLASMA — electrons stripped from atoms",
            "Fusion produces NO long-lived radioactive waste and uses abundant fuel (hydrogen) — but is extremely difficult to achieve on Earth"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"The Sun converts 600 million tonnes of hydrogen into 596 million tonnes of helium every second. The missing 4 million tonnes becomes energy: E = Δmc² = 3.85 × 10²⁶ W. This has been happening for 4.6 billion years. Fusion is the engine of every star.\"</p><p><strong>Direct instruction (20 min):</strong> Why does fusion release energy? On the BE/A curve: H-1 has BE/A = 0. He-4 has BE/A = 7.07 MeV. Going from low to high BE/A releases energy. The pp chain (simplified): 4¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV. Why is it so hard? Protons are positive → they repel each other. To fuse: must get close enough (~1 fm) for the strong force to take over. Need KE ≈ Coulomb barrier ≈ 1 MeV → T ≈ 10¹⁰ K classically. But quantum tunnelling allows fusion at ~10⁷ K (the Sun's core temperature). Even so: the average proton in the Sun waits ~10 billion years before fusing. The Sun works because it has SO many protons.</p><p><strong>Fusion on Earth (10 min):</strong> Tokamak: magnetic confinement of plasma in a torus. ITER (under construction): aims to produce 500 MW from fusion by ~2035. Challenges: plasma at 150 million K (10× the Sun's core!), confinement for seconds, materials that can withstand the conditions. Inertial confinement: powerful lasers compress a fuel pellet (NIF, Lawrence Livermore). In 2022, NIF achieved ignition — more energy OUT than laser energy IN for the first time.</p><p><strong>Worked examples (15 min):</strong> (1) pp chain: 4 × 1.00728 u → 4.00153 u + 2 × 0.00055 u (positrons). Δm = 4.02912 − 4.00263 = 0.02649 u → E = 24.7 MeV (plus 2 × 1.02 MeV from positron annihilation = ~26.7 MeV total). (2) Deuterium-tritium fusion: ²H + ³H → ⁴He + ¹n. Calculate energy released (~17.6 MeV). (3) Energy from 1 kg of DT fuel vs 1 kg of U-235 fission vs 1 kg of coal. (4) Why D-T fusion, not p-p, for Earth reactors? (Lower Coulomb barrier — easier to achieve.)</p><p><strong>Practice (10 min):</strong> Fusion energy calculations and BE/A curve analysis.</p>",
          "engagementHook": {
            "title": "THE SUN: 600 MILLION TONNES OF HYDROGEN PER SECOND",
            "content": "\"Every second: 600 million tonnes of hydrogen → 596 million tonnes of helium. The missing 4 million tonnes → 3.85 × 10²⁶ watts of energy. For 4.6 billion years. And it has enough hydrogen for another 5 billion.\" Students calculate: total mass converted so far = 4 × 10⁹ × 4.6 × 10⁹ × 3.15 × 10⁷ ≈ 5.8 × 10²⁶ kg. Sun's mass = 2 × 10³⁰ kg. \"The Sun has only lost 0.03% of its mass in 4.6 billion years. E = mc² packs a LOT of energy into a little mass.\""
          },
          "nos": {
            "tags": ["Theories", "Technology", "Global impact"],
            "description": "Arthur Eddington proposed in 1920 that stars are powered by nuclear fusion — 12 years before the neutron was discovered and 18 years before fission was understood. He reasoned from E = mc² and stellar temperatures. Hans Bethe worked out the pp chain in 1939 (Nobel 1967). Fusion power on Earth remains 'always 30 years away' — but NIF's 2022 ignition was a genuine milestone."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable", "Caring"],
          "ao": [
            "AO1 — Describe nuclear fusion; explain energy release using BE/A; describe the pp chain",
            "AO2 — Calculate energy released in fusion reactions using mass defect",
            "AO3 — Analyse challenges of fusion on Earth and compare with fission"
          ],
          "resources": "BE/A curve, Sun data, ITER/NIF videos, nuclear mass data, calculators",
          "formative": "\"(a) Why does fusion of light nuclei release energy? Use the BE/A curve. (b) In D-T fusion: ²H (2.01410 u) + ³H (3.01605 u) → ⁴He (4.00260 u) + ¹n (1.00866 u). Find Δm and energy released. (c) Why does fusion require temperatures of ~10⁷ K? What is the Coulomb barrier? (d) Energy from 1 kg of D-T vs 1 kg of U-235 fission. Which produces more? (e) Why is fusion 'cleaner' than fission?\""
        },
        {
          "num": 2,
          "title": "Stellar Equilibrium — Radiation Pressure vs Gravity",
          "focus": "How stars balance on a knife edge for billions of years",
          "minutes": 70,
          "understandings": [
            "The stability of stars relies on an equilibrium between OUTWARD radiation pressure (from fusion reactions in the core) and INWARD gravitational forces",
            "This is hydrostatic equilibrium: at every layer of the star, pressure outward = gravitational compression inward",
            "If fusion increases → more radiation pressure → star expands → core cools → fusion rate decreases → equilibrium restored (negative feedback)",
            "If fusion decreases → less pressure → star contracts → core heats → fusion increases → equilibrium restored",
            "This self-regulating mechanism keeps main sequence stars stable for billions of years"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"The Sun is a ball of gas 1.4 million km across, with a core at 15 million K, producing 3.85 × 10²⁶ W. It has been doing this steadily for 4.6 billion years. How does it NOT explode (too much pressure) or collapse (too much gravity)? Because it's in PERFECT balance.\"</p><p><strong>Direct instruction (20 min):</strong> Two opposing forces: (a) Gravity: every layer of the star is pulled inward by the mass below it. Massive stars have stronger gravity. (b) Radiation pressure: photons from fusion push outward. More fusion → more photons → more pressure. Plus thermal pressure from hot gas. At every layer: these balance → hydrostatic equilibrium. The feedback loop: imagine fusion suddenly increases. More energy → more radiation pressure → star EXPANDS slightly → core density and temperature DROP → fusion rate decreases → pressure drops → star returns to equilibrium. The reverse also works: less fusion → contraction → heating → more fusion. This negative feedback keeps the star stable. Main sequence lifetime: determined by mass. More massive → more fuel BUT burns it much FASTER (L ∝ M³·⁵). The Sun: ~10 billion years. A 10M⊙ star: ~20 million years. A 0.1M⊙ star: ~10 trillion years.</p><p><strong>Discussion (15 min):</strong> \"What happens when the hydrogen runs out?\" The equilibrium breaks. No fusion → no radiation pressure → core collapses under gravity → temperature rises → helium fusion ignites (for massive enough stars). This is the beginning of the end — stellar evolution. When ALL fusible fuel is exhausted: the star's fate depends on its mass (next subtopic).</p><p><strong>Worked examples (15 min):</strong> (1) The Sun's main sequence lifetime: total hydrogen fuel ~1.5 × 10³⁰ kg (only the core's 10% is hot enough to fuse). Energy per kg of fusion: ~6.3 × 10¹⁴ J. Total energy: ~9.5 × 10⁴³ J. At L = 3.85 × 10²⁶ W: lifetime ≈ 2.5 × 10¹⁷ s ≈ 8 billion years (close to accepted ~10 billion). (2) A star of 5M⊙ with L = 500L⊙: estimate its lifetime relative to the Sun.</p><p><strong>Practice (15 min):</strong> Equilibrium concepts, lifetime estimates, and feedback analysis.</p>",
          "engagementHook": {
            "title": "THE COSMIC THERMOSTAT — 4.6 BILLION YEARS OF PERFECT BALANCE",
            "content": "\"If the Sun produced 1% more power: radiation pressure would push the core outward → it would cool → fusion would slow → power drops back. If 1% less: gravity would squeeze the core → it would heat → fusion speeds up → power rises back. The Sun has a built-in thermostat — negative feedback.\" Students draw the feedback loop as a cycle diagram. \"This is why stars are stable for BILLIONS of years — not because nothing changes, but because every change corrects itself.\""
          },
          "nos": {
            "tags": ["Models", "Theories", "Patterns"],
            "description": "Stellar equilibrium is a beautiful example of negative feedback in a natural system — the same concept appears in climate science (B.2), ecology, and engineering. The mathematical description (hydrostatic equilibrium) was developed by Eddington, Chandrasekhar, and others in the early 20th century. It predicts stellar lifetimes, luminosities, and temperatures with remarkable accuracy."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe the equilibrium between radiation pressure and gravity in stars",
            "AO2 — Estimate stellar lifetimes from mass and luminosity",
            "AO3 — Analyse the negative feedback mechanism that stabilises main sequence stars"
          ],
          "resources": "Star structure diagram, feedback loop template, Sun data, stellar lifetime comparison chart",
          "formative": "\"(a) Name the two forces in equilibrium inside a main sequence star. (b) A star suddenly increases its fusion rate. Describe the sequence of events that returns it to equilibrium. (c) The Sun has mass 2 × 10³⁰ kg and luminosity 3.85 × 10²⁶ W. Estimate its main sequence lifetime. (d) A star of 10 M⊙ has L = 10,000 L⊙. Estimate its lifetime as a fraction of the Sun's. (e) Why do massive stars have SHORTER lifetimes despite having MORE fuel?\""
        }
      ]
    },
    {
      "name": "Stellar Evolution & the HR Diagram",
      "color": "accent",
      "totalMinutes": 130,
      "subtopics": [
        {
          "num": 1,
          "title": "The Hertzsprung-Russell Diagram",
          "focus": "Luminosity vs temperature — the most important diagram in astrophysics",
          "minutes": 55,
          "understandings": [
            "The HR diagram plots luminosity (vertical, log scale) against surface temperature (horizontal, REVERSED — hot on left, cool on right)",
            "Main sequence: diagonal band from top-left (hot, luminous, massive, blue) to bottom-right (cool, dim, low-mass, red). ~90% of all stars",
            "Red giants/supergiants: upper right (cool but very luminous → must be very LARGE, since L = σAT⁴ and large A compensates for low T)",
            "White dwarfs: lower left (hot but dim → must be very SMALL)",
            "A star's position on the HR diagram changes as it evolves"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"If you measured the temperature and luminosity of every visible star and plotted them: you wouldn't get random scatter. You'd get PATTERNS. Stars cluster in specific regions. This plot — the Hertzsprung-Russell diagram — is the most important diagram in all of astrophysics. It tells you a star's life story.\"</p><p><strong>Direct instruction (20 min):</strong> Axes: L (vertical, log scale, in L⊙ from 10⁻⁴ to 10⁶) vs T (horizontal, REVERSED, from 40,000 K on left to 2,500 K on right — because astronomers 🙄). Main sequence: the band where stars spend most of their lives fusing hydrogen. Hot end (O, B stars): massive, blue, very luminous, short-lived. Cool end (M stars): low-mass, red, dim, long-lived. The Sun is G-type, middle of the main sequence. Red giants: exhausted core hydrogen → expanded enormously → cool surface (red) but huge area → very luminous despite low T. White dwarfs: remnant cores after red giant phase → very hot (blue-white) but tiny (Earth-sized) → very dim. Use L = 4πR²σT⁴ to understand positions: same L can come from high T + small R (white dwarf) or low T + huge R (red giant).</p><p><strong>Graphical analysis (15 min):</strong> Students annotate a blank HR diagram: draw the main sequence, label the giant region, white dwarf region, supergiant region. Place the Sun, Sirius (A-type main sequence), Betelgeuse (red supergiant), and Sirius B (white dwarf). For each: estimate L, T, R relative to the Sun using L = 4πR²σT⁴.</p><p><strong>Worked examples (10 min):</strong> (1) Betelgeuse: T = 3500 K, L = 10⁵ L⊙. R/R⊙ = √(L/L⊙) × (T⊙/T)² = √(10⁵) × (5800/3500)² = 316 × 2.74 = 867 R⊙. (2) Sirius B: T = 25,000 K, L = 0.03 L⊙ → R = 0.008 R⊙ ≈ R_Earth. (3) Where would a star with T = 5800 K and R = 10R⊙ appear? L = 100 L⊙ → above the Sun on the HR diagram → a subgiant.</p><p><strong>Practice (5 min):</strong> HR diagram placement and radius estimation.</p>",
          "engagementHook": {
            "title": "BETELGEUSE: 867 TIMES THE SUN — IF IT REPLACED THE SUN, IT WOULD SWALLOW JUPITER",
            "content": "Calculate Betelgeuse's radius: 867 R⊙ = 6 × 10¹¹ m. Jupiter's orbit radius: 7.8 × 10¹¹ m. \"Betelgeuse is so large that if placed at the Sun's position, its surface would extend almost to Jupiter's orbit. Mars, Earth, Venus, Mercury — all inside the star.\" Show a scale comparison image. \"And it's only ~10 million years old — a baby compared to the Sun's 4.6 billion. Massive stars live fast and die young.\""
          },
          "nos": {
            "tags": ["Observations", "Patterns", "Models"],
            "description": "Ejnar Hertzsprung and Henry Norris Russell independently created this diagram around 1910. They had no theory of stellar evolution — they simply plotted the data and saw the patterns. The main sequence, giants, and white dwarfs emerged from pure observation. The EXPLANATION (nuclear fusion, stellar evolution) came decades later. Pattern first, theory second."
          },
          "atl": ["Thinking skills", "Communication skills"],
          "learnerProfile": ["Communicator", "Thinker", "Knowledgeable"],
          "ao": [
            "AO1 — Describe the HR diagram axes, main sequence, giants, and white dwarfs",
            "AO2 — Place stars on the HR diagram; estimate R from L and T using L = 4πR²σT⁴",
            "AO3 — Analyse how position on the HR diagram reveals a star's properties"
          ],
          "resources": "Blank HR diagram template, stellar data table (L, T for 10 stars), calculators, scale comparison images",
          "formative": "\"(a) Sketch the HR diagram. Label axes (with directions), main sequence, red giant region, white dwarf region. (b) Place the Sun, Betelgeuse, Sirius, Sirius B. (c) A star has L = 10,000 L⊙ and T = 4000 K. Calculate R/R⊙. Is it a main sequence star or a giant? (d) Two stars have the same T but one has L = 1000× the other. What differs? (e) Why is the temperature axis reversed?\""
        },
        {
          "num": 2,
          "title": "Stellar Evolution — From Birth to Death",
          "focus": "Nebula → main sequence → giant → remnant — the life cycle of a star",
          "minutes": 75,
          "understandings": [
            "Star formation: gravitational collapse of a nebula (gas/dust cloud) → protostar → main sequence when core temperature reaches ~10⁷ K (hydrogen fusion ignites)",
            "Main sequence: hydrogen fusion in the core. Duration depends on mass (massive = short life)",
            "Post-main sequence for Sun-like stars (< 8M⊙): → red giant (helium fusion) → planetary nebula → white dwarf",
            "Post-main sequence for massive stars (> 8M⊙): → red supergiant (heavier element fusion up to iron) → supernova → neutron star or black hole",
            "Elements heavier than iron are ONLY produced in supernovae (r-process nucleosynthesis) — the gold in your ring came from a star that exploded",
            "The Chandrasekhar limit (~1.4M⊙): maximum mass of a white dwarf. Above this: the remnant becomes a neutron star or black hole"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Every atom in your body heavier than hydrogen was made inside a star. The carbon in your cells, the oxygen you breathe, the calcium in your bones — all forged by nuclear fusion in stellar cores. The iron in your blood was made at the moment a massive star died in a supernova. You are literally made of stardust.\"</p><p><strong>Direct instruction (25 min):</strong> THE LIFE OF A SUN-LIKE STAR: (1) Nebula collapse → protostar (gravity compresses, heats). (2) Main sequence (~10 billion years): H → He in core. Equilibrium maintained. (3) Hydrogen exhausted in core → core contracts → heats → shell burning (H fusion around an inert He core) → outer layers expand → RED GIANT. (4) Core reaches ~10⁸ K → helium fusion ignites (triple-alpha: 3He-4 → C-12) → horizontal branch. (5) He exhausted → outer layers ejected → PLANETARY NEBULA (beautiful shell of glowing gas). (6) Core remains: HOT, dense, Earth-sized → WHITE DWARF. Cools over trillions of years. THE LIFE OF A MASSIVE STAR (> 8M⊙): Same start but FASTER. After He fusion: core hot enough for C, O, Ne, Mg, Si fusion — each stage shorter (Si → Fe in ~1 day!). Iron: BE/A maximum → fusion STOPS. No radiation pressure → core collapses in milliseconds → SUPERNOVA (10²⁸× solar luminosity for weeks). If remnant < 3M⊙: NEUTRON STAR (city-sized, nuclear density). If > 3M⊙: BLACK HOLE. Elements heavier than Fe: created in the supernova itself by rapid neutron capture (r-process).</p><p><strong>HR diagram evolution tracks (10 min):</strong> Draw the path of a Sun-like star on the HR diagram: main sequence → red giant branch → horizontal branch → planetary nebula → white dwarf. Draw for a massive star: main sequence (upper left) → supergiant → supernova (off the chart!) → neutron star/black hole (not on HR diagram — no surface luminosity).</p><p><strong>Discussion (10 min):</strong> Chandrasekhar limit: M < 1.4M⊙ → white dwarf (electron degeneracy supports it). M between 1.4 and ~3M⊙ → neutron star. M > ~3M⊙ → black hole. Subrahmanyan Chandrasekhar calculated this limit in 1930 at age 19 on a boat to England. Nobel Prize 1983.</p><p><strong>Stellar nucleosynthesis (10 min):</strong> H → He (main sequence). He → C, O (red giant). C → Ne, Mg. O → Si, S. Si → Fe (in massive stars only). Fe → heavier elements (ONLY in supernovae). \"Everything up to iron was made steadily over millions of years. Everything heavier was made in seconds during a supernova explosion.\"</p><p><strong>Practice (15 min):</strong> Stellar evolution sequence, HR diagram tracks, and Chandrasekhar limit questions.</p>",
          "engagementHook": {
            "title": "YOU ARE STARDUST — LITERALLY",
            "content": "\"The hydrogen in your body's water is from the Big Bang (13.8 billion years ago). The carbon in your DNA was made by triple-alpha fusion in a red giant ~5 billion years ago. The oxygen you're breathing came from the same star. The iron in your blood was forged at the instant a massive star's core collapsed. The gold in a ring? Created in a neutron star merger — the collision of two dead stars.\" Students trace each element in the human body to its stellar origin. \"You are not just IN the universe. You ARE the universe, experiencing itself.\""
          },
          "nos": {
            "tags": ["Theories", "Observations", "Science as a shared endeavour"],
            "description": "Stellar nucleosynthesis was proposed by Hoyle, Fowler, and the Burbidges (B²FH paper, 1957) — one of the most important papers in astrophysics. It explained where ALL elements come from. Chandrasekhar's work on white dwarf limits (1930) was initially rejected by Eddington — who couldn't accept that stars could collapse to infinite density. Chandrasekhar was vindicated decades later. Persistence in the face of authority is sometimes necessary in science."
          },
          "atl": ["Thinking skills", "Communication skills", "Research skills"],
          "learnerProfile": ["Knowledgeable", "Thinker", "Open-minded", "Caring"],
          "ao": [
            "AO1 — Describe stellar evolution for low-mass and high-mass stars; state the Chandrasekhar limit",
            "AO2 — Trace evolution paths on the HR diagram; identify nucleosynthesis products at each stage",
            "AO3 — Analyse why iron is the endpoint of stellar fusion and why heavier elements require supernovae"
          ],
          "resources": "HR diagram with evolution tracks, stellar evolution flowchart, periodic table colour-coded by stellar origin, supernova video, Chandrasekhar biography",
          "formative": "\"(a) Describe the main stages of evolution for a 1M⊙ star and a 20M⊙ star. (b) Trace both paths on an HR diagram. (c) Why does fusion stop at iron? What happens next in a massive star? (d) The Chandrasekhar limit is 1.4M⊙. What happens to a stellar remnant above and below this limit? (e) Name an element in your body and state which stellar process created it.\""
        }
      ]
    },
    {
      "name": "Observational Astrophysics",
      "color": "accent3",
      "totalMinutes": 100,
      "subtopics": [
        {
          "num": 1,
          "title": "Measuring Stars — Luminosity, Brightness & Distance",
          "focus": "How do we know how far away and how bright stars really are?",
          "minutes": 50,
          "understandings": [
            "Luminosity L: total power output of a star (W). Related to surface temperature and radius: L = 4πR²σT⁴ (Stefan-Boltzmann from B.1)",
            "Apparent brightness b: power received per unit area at distance d: b = L/(4πd²) (inverse-square law from B.1)",
            "If L is known (e.g., from the HR diagram or Cepheid variables), measuring b gives the distance: d = √(L/(4πb))",
            "Spectral analysis: absorption lines identify composition, temperature, and surface gravity. Doppler shift of lines gives radial velocity",
            "Wien's law gives surface temperature: λ_max = 2.9 × 10⁻³/T"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"How do you measure the distance to a star you can never visit? You measure how bright it LOOKS (apparent brightness b), figure out how bright it ACTUALLY IS (luminosity L), and use the inverse-square law: d = √(L/(4πb)). The hard part: finding L.\"</p><p><strong>Direct instruction (15 min):</strong> Recap from B.1: L = 4πR²σT⁴ and b = L/(4πd²). If you know T (from Wien's law: measure peak wavelength) and R (from spectral class + HR diagram), you get L. Then measure b → find d. This is the 'spectroscopic parallax' method. For special stars (Cepheid variables): L is related to their pulsation period → measure period → know L → measure b → find d. Cepheids are 'standard candles' — this is how Hubble measured distances to galaxies. Spectral analysis: absorption lines tell you which elements are present. Line widths tell you temperature and density. Doppler shift tells you velocity (C.5).</p><p><strong>Worked examples (15 min):</strong> (1) A star has T = 10,000 K and R = 2R⊙. Find L (use L/L⊙ = (R/R⊙)² × (T/T⊙)⁴). (2) The star has b = 3 × 10⁻⁹ W/m². Find d. (3) A Cepheid in a distant galaxy has period 10 days → L ≈ 10,000 L⊙. Measured b = 2 × 10⁻¹⁵ W/m². Find d. (4) A star's peak wavelength is 580 nm. Find T using Wien's law.</p><p><strong>Discussion (5 min):</strong> \"The cosmic distance ladder: parallax (nearby) → Cepheids (nearby galaxies) → Type Ia supernovae (distant galaxies). Each method calibrates the next. The entire scale of the observable universe rests on this ladder.\"</p><p><strong>Practice (10 min):</strong> L, b, d calculations and Wien's law applications.</p>",
          "engagementHook": {
            "title": "THE COSMIC DISTANCE LADDER — MEASURING THE UNIVERSE STEP BY STEP",
            "content": "\"How far is the nearest galaxy? 2.5 million light-years. How do we KNOW? Because Hubble found Cepheid variable stars in it, measured their periods, calculated their luminosities, measured their apparent brightness, and used b = L/(4πd²). One equation, applied across millions of light-years.\" Students calculate the distance to a Cepheid from given data — they're repeating Hubble's 1924 measurement that proved galaxies exist beyond the Milky Way."
          },
          "nos": {
            "tags": ["Measurements", "Theories", "Science as a shared endeavour"],
            "description": "Henrietta Leavitt discovered the period-luminosity relation for Cepheids in 1912 — the key that unlocked extragalactic distances. She was a 'computer' at Harvard Observatory, paid 25 cents per hour, and never received the Nobel Prize (she died in 1921, before Hubble used her work to discover the expanding universe). Her contribution is one of the most important — and most overlooked — in astronomy."
          },
          "atl": ["Thinking skills", "Research skills"],
          "learnerProfile": ["Inquirer", "Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State L = 4πR²σT⁴ and b = L/(4πd²); describe spectroscopic methods",
            "AO2 — Calculate L, b, d, T using Stefan-Boltzmann, Wien, and inverse-square law",
            "AO3 — Analyse how the cosmic distance ladder works"
          ],
          "resources": "Stellar data table, calculators, Cepheid period-luminosity graph, Hubble's original data",
          "formative": "\"(a) A star: T = 6000 K, R = 3R⊙. Find L/L⊙. (b) b = 5 × 10⁻¹² W/m². Find d. (c) Wien: λ_max = 350 nm. Find T. What colour is this star? (d) A Cepheid has period 5 days → L = 2000 L⊙. Apparent brightness = 10⁻¹³ W/m². Find the distance in light-years. (e) Why are Cepheids called 'standard candles'?\""
        },
        {
          "num": 2,
          "title": "The Expanding Universe & the Fate of Stars",
          "focus": "Cosmology — Hubble's law, the Big Bang, and what comes next",
          "minutes": 50,
          "understandings": [
            "Hubble's law: the recession velocity of a galaxy is proportional to its distance: v = H₀d, where H₀ is the Hubble constant (~70 km/s/Mpc)",
            "This implies the universe is EXPANDING — space itself is stretching",
            "Extrapolating backward: all matter was once in a single point → the Big Bang (~13.8 billion years ago)",
            "The CMB (Cosmic Microwave Background): thermal radiation from the early universe, now cooled to 2.7 K → fills all of space uniformly → strongest evidence for the Big Bang",
            "The future: depends on the density of the universe — open (expand forever), flat (expand, slowing to a halt), or closed (collapse). Current evidence: accelerating expansion (dark energy)"
          ],
          "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Every galaxy is moving away from us. The further it is, the faster it moves. This doesn't mean we're at the centre — EVERYTHING is moving away from everything else. Space itself is expanding. Run the movie backward: everything was once in the same place. That's the Big Bang.\"</p><p><strong>Direct instruction (20 min):</strong> Hubble's law: v = H₀d. H₀ ≈ 70 km/s/Mpc. A galaxy at 100 Mpc: v = 7000 km/s = 2.3% of c. The CMB: predicted by Gamow (1948), discovered by Penzias and Wilson (1965, Nobel 1978). It's the 'afterglow' of the Big Bang — thermal radiation from when the universe was ~3000 K, now redshifted to 2.7 K by 13.8 billion years of expansion. It's uniform in all directions (to 1 part in 100,000) — evidence that the early universe was extremely smooth and hot. The age of the universe: t ≈ 1/H₀ ≈ 1/(70 km/s/Mpc) ≈ 14 billion years (rough estimate, close to the accepted 13.8 billion). The future: in 1998, observations of distant Type Ia supernovae showed the expansion is ACCELERATING (Perlmutter, Schmidt, Riess, Nobel 2011). The cause: 'dark energy' — ~68% of the universe's energy content and completely unknown.</p><p><strong>Worked examples (10 min):</strong> (1) A galaxy's spectrum shows Hα at 680 nm instead of 656 nm. Δλ/λ = 24/656 = 0.0366. v = 0.0366c = 1.1 × 10⁷ m/s. d = v/H₀ = 1.1 × 10⁷/(70 × 10³) × 3.086 × 10²² = 4.84 × 10²⁴ m ≈ 157 Mpc ≈ 512 million light-years. (2) Estimate the age of the universe from H₀ = 70 km/s/Mpc.</p><p><strong>Discussion (10 min):</strong> \"What came before the Big Bang? Physics can't answer — time itself began at the Big Bang. What is dark energy? Nobody knows — it's the biggest mystery in physics. What is the fate of the universe? Current evidence: accelerating expansion → 'heat death' — everything spreads out, cools down, and eventually all stars die. In ~10¹⁰⁰ years: even black holes evaporate. The universe goes dark.\"</p><p><strong>Practice (5 min):</strong> Hubble's law calculations and CMB interpretation.</p>",
          "engagementHook": {
            "title": "THE OLDEST LIGHT IN THE UNIVERSE — YOU CAN SEE IT ON YOUR TV",
            "content": "\"The CMB is everywhere. Old analog TVs: ~1% of the static 'snow' between channels was CMB radiation. You were watching the afterglow of the Big Bang.\" Show the COBE/WMAP/Planck CMB map: the tiny temperature variations (±0.001%) that seeded all galaxies, stars, and planets. \"These ripples — smaller than the difference between room temperature and your body — became EVERYTHING. Every galaxy. Every star. You.\""
          },
          "nos": {
            "tags": ["Observations", "Theories", "Science as a shared endeavour"],
            "description": "The Big Bang theory is supported by three independent lines of evidence: (1) Hubble's law (expansion), (2) CMB (thermal afterglow), (3) Big Bang nucleosynthesis (predicted H/He ratio matches observations). The discovery of accelerating expansion (1998) was so unexpected that the discoverers initially thought their data was wrong. Good scientists follow the evidence even when it contradicts expectations."
          },
          "atl": ["Thinking skills", "Communication skills", "Research skills"],
          "learnerProfile": ["Open-minded", "Knowledgeable", "Thinker"],
          "ao": [
            "AO1 — State Hubble's law; describe the CMB as evidence for the Big Bang",
            "AO2 — Calculate recession velocity and distance from Hubble's law; estimate the age of the universe",
            "AO3 — Analyse the evidence for the Big Bang and the accelerating expansion"
          ],
          "resources": "CMB map (Planck), Hubble's law graph, galaxy redshift data, calculators",
          "formative": "\"(a) A galaxy has v = 21,000 km/s. Find its distance (H₀ = 70 km/s/Mpc) in Mpc and light-years. (b) Estimate the age of the universe from H₀. (c) The CMB has T = 2.7 K. Find its peak wavelength using Wien's law. In what part of the EM spectrum is this? (d) State three pieces of evidence for the Big Bang. (e) 'The expansion of the universe is accelerating.' What does this imply about the future?\""
        }
      ]
    }
  ],
  "linkingQuestions": [
    { "topic": "E.3 Radioactive Decay", "question": "How does the BE/A curve explain why fusion of light nuclei (left of peak) releases energy?" },
    { "topic": "E.4 Fission", "question": "How does fission compare with fusion: energy per nucleon, fuel, waste, challenges?" },
    { "topic": "B.1 Thermal Energy Transfers", "question": "How do Stefan-Boltzmann (L = σAT⁴), Wien's law, luminosity, and apparent brightness determine stellar properties?" },
    { "topic": "C.5 Doppler Effect", "question": "How is the redshift of spectral lines used to measure galaxy recession velocities and confirm Hubble's law?" },
    { "topic": "D.1 Gravitational Fields", "question": "How does gravitational collapse drive star formation and stellar death (neutron stars, black holes)?" },
    { "topic": "IB Linking (NOS)", "question": "Can observations of the present state of the universe predict the future outcome of the universe?" }
  ]
}
