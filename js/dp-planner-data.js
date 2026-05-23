// ============================================================
// DP PHYSICS TEACHER PLANNER - TOPIC CONTENT BANK
// ============================================================
// This file contains the pre-populated content for DP Physics topics.
// The teacher edits only this file to add, modify, or extend topics.
// Modifications are loaded automatically by the planner UI.

const DP_PLANNER_DATA = {
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
    "title": "Work, Energy & Power",
    "code": "A.3",
    "theme": "A",
    "level": "SL+HL",
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
            "focus": "The principle of the conservation of energy: energy cannot be created or destroyed, only transferred or transformed",
            "minutes": 40,
            "understandings": [
              "The principle of the conservation of energy: energy cannot be created or destroyed, only transferred or transformed",
              "Work done by a force is equivalent to a transfer of energy",
              "Energy forms: kinetic, gravitational potential, elastic potential, thermal, chemical, electrical, nuclear, radiant",
              "Distinguish energy transfers (between objects) from energy transformations (between forms within a system)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Show a Rube Goldberg machine video. Students count how many times energy changes form: gravitational → kinetic → elastic → kinetic → thermal. This previews the entire topic.</p><p><strong>Concept mapping (15 min):</strong> Students brainstorm all energy forms on the board. Categorise: stored (potential) vs in motion (kinetic). Key insight: GPE, elastic PE, and chemical energy are all forms of potential energy — energy stored due to position or configuration.</p><p><strong>Guided discussion (10 min):</strong> \"Where does the energy go?\" scenarios: (a) ball bounces lower each time — KE → thermal + sound, (b) phone charges — electrical → chemical, (c) photosynthesis — radiant → chemical. For each: total energy in = total energy out.</p><p><strong>Practice (10 min):</strong> Students trace complete energy chains for 5 real-world systems and verify conservation at each step.</p>",
            "engagementHook": {
              "title": "BOUNCING BALL AUDIT",
              "content": "Drop a ball from a measured height. Measure the bounce height. Calculate the percentage of energy \"lost.\" Ask: \"Lost to WHERE?\" Students touch the ball and the floor — both slightly warmer. Energy wasn’t destroyed; it was transferred to thermal energy. This 3 — minute demo makes conservation tangible and anchors the entire unit."
            },
            "nos": {
              "tags": [
                "Theories",
                "Patterns & trends"
              ],
              "description": "Conservation of energy has never been violated in any experiment. Unlike Newton’s laws (which break down at relativistic speeds), it holds universally. Noether’s theorem connects it to time — translation symmetry — a deep link between physics and mathematics."
            },
            "atl": [
              "Thinking skills",
              "Communication skills"
            ],
            "learnerProfile": [
              "Knowledgeable",
              "Thinker"
            ],
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
            "focus": "Work W done on a body by a constant force depends on the component of the force along the line of displacement: W = Fs cosθ",
            "minutes": 60,
            "understandings": [
              "Work W done on a body by a constant force depends on the component of the force along the line of displacement: W = Fs cosθ",
              "θ = 0°: W = Fs (force parallel to displacement)",
              "θ = 90°: W = 0 (force perpendicular — centripetal force does no work)",
              "θ > 90°: W is negative (force opposes motion — e.g., friction)",
              "Work done by the resultant force on a system is equal to the change in the energy of the system (work-energy theorem)"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two students carry identical heavy bags. One walks horizontally; the other climbs stairs. \"Who did more work on the bag?\" The carrying force (upward) is perpendicular to horizontal displacement — W = Fs cos90° = 0. Only climbing involves work against gravity.</p><p><strong>Direct instruction (15 min):</strong> Define W = Fs cosθ. Walk through three key cases with diagrams: θ = 0 (pushing a box), θ = 90° (carrying horizontally), θ between 0–90 (pulling a sled at an angle). Explicitly state: work by the resultant force = change in total energy of the system.</p><p><strong>Worked examples (15 min):</strong> (1) Pulling a sled: 100 N at 30° over 20 m → W = 1732 J. (2) Pushing a crate 5 m with 200 N, friction 150 N → work by applied = 1000 J, work by friction = −750 J, net work = 250 J → becomes KE. (3) Satellite in orbit: force always perpendicular → W = 0, speed constant.</p><p><strong>Lab (15 min):</strong> WORK AT ANGLES — Pull a block with a spring scale at 0°, 30°, 45°, 60°. Record force and displacement. Calculate W = Fs cosθ for each. Plot W vs θ. Discover: pulling at an angle reduces useful work.</p><p><strong>Practice (10 min):</strong> Problems including negative work, zero work, and the work-energy theorem.</p>",
            "engagementHook": {
              "title": "THE CARRYING PARADOX",
              "content": "\"You carry a 20 kg suitcase across a flat airport for 500 metres. You’re exhausted. How much work did you do on the suitcase?\" Answer: zero. The carrying force is vertical; displacement is horizontal; cos90° = 0. \"Then why are you tired?\" Your muscles do internal work — chemical energy converts to thermal energy inside your body. The distinction between physics — work and everyday — work is one of the most powerful conceptual moments in the course."
            },
            "nos": {
              "tags": [
                "Models",
                "Measurements"
              ],
              "description": "The physics definition of \"work\" is narrower than everyday language. Technical terms are redefined to have exact, quantifiable meanings (NOS: terminology and conventions). W = F·s is a mathematical model capturing only the component of force along displacement."
            },
            "atl": [
              "Thinking skills",
              "Research skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Inquirer"
            ],
            "ao": [
              "AO1 — Define work done",
              "AO2 — Apply W = Fs cosθ including negative and zero work",
              "apply the work-energy theorem",
              "AO3 — Analyse whether work is done and determine its sign"
            ],
            "resources": "Spring scales, wooden blocks, protractors, metre rulers, various surfaces",
            "formative": "\"A 50 N force at 60° drags a box 10 m. Friction = 15 N. (a) Work by applied force. (b) Work by friction. (c) Net work. (d) Use the work-energy theorem: does the box speed up or slow down? By how much does its KE change?\""
          },
          {
            "num": 3,
            "title": "Sankey Diagrams & Energy Transfers",
            "focus": "Energy transfers can be represented on a Sankey diagram",
            "minutes": 35,
            "understandings": [
              "Energy transfers can be represented on a Sankey diagram",
              "Arrow widths are proportional to energy transferred",
              "Input energy (left) = sum of all output energies (right) — conservation of energy visualised",
              "Useful energy flows straight ahead; wasted energy branches downward"
            ],
            "teachingStrategy": "<p><strong>Direct instruction (10 min):</strong> Show a Sankey diagram for a light bulb: 100 J electrical → 5 J light + 95 J thermal (incandescent) vs 100 J → 25 J light + 75 J thermal (LED). Teach the rules: input arrow on left, useful output straight ahead, waste branches down. Arrow widths MUST be proportional.</p><p><strong>Guided practice (15 min):</strong> Students construct Sankey diagrams for: (a) car engine — 100 J chemical → 25 J KE + 60 J thermal + 10 J sound + 5 J friction, (b) coal power station showing cascade losses at each stage, (c) human body running — chemical → 25% KE + 75% thermal. Use graph paper for proportional arrows.</p><p><strong>Analysis task (10 min):</strong> Give 3 pre-drawn Sankey diagrams. Students: read off efficiency, identify largest waste, suggest one engineering improvement.</p>",
            "engagementHook": {
              "title": "LIGHT BULB SHOWDOWN",
              "content": "Bring an incandescent and an LED bulb of the same brightness. Turn both on for 2 minutes. Touch each (incandescent through cloth). The incandescent is scorching; the LED barely warm. \"Both make the same light. Where is the extra energy going?\" Draw side — by — side Sankey diagrams. The fat \"waste heat\" arrow for incandescent vs the thin one for LED makes efficiency visceral."
            },
            "nos": {
              "tags": [
                "Models",
                "Science as a shared endeavour"
              ],
              "description": "Sankey diagrams were created by Captain Matthew Sankey in 1898 for steam engines. Now used universally — from classrooms to government energy policy. A shared convention that facilitates unambiguous communication (NOS: agreed conventions)."
            },
            "atl": [
              "Communication skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Communicator",
              "Knowledgeable"
            ],
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
            "num": 4,
            "title": "Kinetic Energy — Eₖ = ½mv² = p²/2m",
            "focus": "The kinetic energy of translational motion: Eₖ = ½mv²",
            "minutes": 50,
            "understandings": [
              "The kinetic energy of translational motion: Eₖ = ½mv²",
              "Alternative form using momentum: Eₖ = p²/2m (derived from p = mv, so v = p/m)",
              "Derive Eₖ = ½mv² from W = Fs and the equations of motion",
              "The v² relationship: doubling speed quadruples KE"
            ],
            "teachingStrategy": "<p><strong>Derivation (10 min):</strong> From first principles: F acts on mass m over distance s, starting from rest. W = Fs = mas. From v² = u² + 2as with u = 0: s = v²/2a. So W = ma × v²/2a = ½mv². This IS the work-energy theorem. Then derive the p form: since p = mv, then v = p/m, so Eₖ = ½m(p/m)² = p²/2m.</p><p><strong>Worked examples (10 min):</strong> (1) 70 kg sprinter at 10 m/s → KE = 3500 J. At 8 m/s → 2240 J. Doubling speed quadruples KE. (2) Using p²/2m: bullet with p = 8 kg·m/s, m = 0.02 kg → Eₖ = 1600 J. (3) 1500 kg car at 30 m/s — to what height could it coast? h = v²/2g = 45.9 m.</p><p><strong>Lab (20 min):</strong> THE v² RELATIONSHIP — Roll a cart down ramps of different heights. Measure speed at the bottom using photogates or a phone app. Plot v² vs h. Linear graph proves v² ∝ h (from mgh = ½mv²). Gradient = 2g — extract an experimental value of g.</p><p><strong>Practice (10 min):</strong> Problems using both Eₖ = ½mv² and Eₖ = p²/2m.</p>",
            "engagementHook": {
              "title": "SPEED KILLS",
              "content": "THE v² SURPRISE — \"A car at 60 km/h has a certain KE. How much more KE at 120 km/h?\" Students guess double. Answer: FOUR times. Show real stopping distance data at 30, 50, 70 mph — the gap between 50 and 70 is shockingly large. Braking distance scales with v², not v. Physics saves lives."
            },
            "nos": {
              "tags": [
                "Theories",
                "Measurements"
              ],
              "description": "The work — energy theorem connects forces (Newton’s laws) with energy — two frameworks describing the same physics from different angles. The p²/2m form bridges A.2 and A.3, showing how momentum and energy are related."
            },
            "atl": [
              "Thinking skills",
              "Research skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Caring"
            ],
            "ao": [
              "AO1 — Define KE",
              "derive Eₖ = ½mv²",
              "state Eₖ = p²/2m",
              "AO2 — Calculate KE using both forms",
              "AO3 — Analyse the v² relationship and its consequences for braking distance"
            ],
            "resources": "Ramp, dynamics cart, photogates or phone speed app, stopping distance data table",
            "formative": "Lab: v² vs h graph — find g from gradient. Exit ticket: \"Car A at 20 m/s, Car B at 40 m/s, same mass. How many times longer is B’s braking distance?\" AND \"A bullet (m = 10 g, p = 6 kg·m/s) — find its KE using p²/2m.\""
          },
          {
            "num": 5,
            "title": "Gravitational PE & Elastic PE",
            "focus": "Gravitational potential energy close to the surface of the Earth: ΔEₚ = mgΔh",
            "minutes": 50,
            "understandings": [
              "Gravitational potential energy close to the surface of the Earth: ΔEₚ = mgΔh",
              "Δh is the change in height relative to a chosen reference level — GPE is relative, not absolute",
              "This equation only applies close to the Earth’s surface where g is approximately constant",
              "Elastic potential energy stored in a spring: E_H = ½k(Δx)²",
              "Derived from the area under the F-x graph (Hooke’s law: F = kΔx → area = ½ × Δx × kΔx = ½k(Δx)²)",
              "Energy stored equals work done to stretch or compress the spring"
            ],
            "teachingStrategy": "<p><strong>GPE section (20 min):</strong> Lifting mass m by Δh against gravity: W = FΔh = mgΔh = ΔEₚ. Emphasise the Δ: GPE depends on the CHANGE in height, and the reference level is your choice. Worked example: 2 kg ball lifted from a 5 m table to 8 m above the floor → ΔEₚ = 2 × 9.8 × 3 = 58.8 J regardless of reference. Discuss: \"Why does this equation only work near Earth’s surface?\" Because g varies with altitude. Far away: Eₚ = −GMm/r (preview D.1).</p><p><strong>Elastic PE section (15 min):</strong> Recall Hooke’s law from A.2. Draw F vs Δx graph. Area under graph = work done = energy stored = ½k(Δx)². Note: doubling Δx quadruples energy (parallel to v² for KE). Worked example: spring k = 200 N/m, compressed 0.05 m → E_H = 0.25 J.</p><p><strong>Lab (10 min):</strong> SPRING LAUNCHER — Compress spring by measured Δx. Launch a ball vertically. Measure max height. Verify: ½k(Δx)² = mgΔh. Compare k with the value from the A.2 Hooke’s law lab.</p><p><strong>Practice (5 min):</strong> Mixed GPE and elastic PE calculations.</p>",
            "engagementHook": {
              "title": "SPRING LAUNCHER COMPETITION",
              "content": "Each group compresses a spring by a different amount and PREDICTS the launch height BEFORE releasing, using ½k(Δx)² = mgΔh. The group whose prediction is closest to the measured height wins. This turns energy conservation into a testable, competitive prediction rather than an abstract equation."
            },
            "nos": {
              "tags": [
                "Models",
                "Measurements"
              ],
              "description": "The area — under — the — graph method connects algebra and geometry to physics. It recurs: work = area under F — s graph, impulse = area under F — t graph. A general technique, not a one — off trick (NOS: transferable methods)."
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
              "AO1 — State ΔEₚ = mgΔh and E_H = ½k(Δx)²",
              "AO2 — Calculate GPE and elastic PE",
              "AO3 — Analyse spring-launch data for energy conservation"
            ],
            "resources": "Springs (known k from A.2 lab), small balls, rulers, clamp stands, metre sticks",
            "formative": "Spring launcher: prediction vs measurement. \"A spring (k = 500 N/m) compressed 8 cm launches a 50 g ball. Find: (a) E_H stored, (b) launch speed, (c) max height.\""
          },
          {
            "num": 6,
            "title": "Conservation of Mechanical Energy",
            "focus": "Mechanical energy is the sum of kinetic energy, gravitational potential energy, and elastic potential energy",
            "minutes": 55,
            "understandings": [
              "Mechanical energy is the sum of kinetic energy, gravitational potential energy, and elastic potential energy",
              "In the absence of frictional, resistive forces, the total mechanical energy of a system is conserved",
              "If mechanical energy is conserved, work is the amount of energy transformed between different forms of mechanical energy: Eₖ = ½mv², ΔEₚ = mgΔh, E_H = ½k(Δx)²",
              "Solve problems using Eₖ₁ + Eₚ₁ = Eₖ₂ + Eₚ₂",
              "Energy bar charts as a visual tool for tracking energy at each point"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Pendulum: at highest point, all GPE. At lowest, all KE. In between: a mix. BOWLING BALL PENDULUM — hold a heavy ball against a student’s nose, release, stand still. It swings back and stops just before their nose. Conservation guarantees it.</p><p><strong>Direct instruction (15 min):</strong> Formalise: E_mech = ½mv² + mgΔh + ½k(Δx)² = constant. Method: (1) choose reference level, (2) write total energy at point 1, (3) write total energy at point 2, (4) set equal, (5) solve. Worked examples: ball dropped 5 m — find speed at ground; roller coaster top to bottom.</p><p><strong>Energy bar charts (10 min):</strong> Stacked bars showing KE, GPE, elastic PE at each point. Total height stays constant (no friction) or decreases (with friction — the \"missing\" bar is thermal). This visual prevents algebra errors.</p><p><strong>Problem-solving (20 min):</strong> Graded: (a) frictionless ramp — find v at bottom, (b) pendulum from release angle, (c) spring launches ball up a ramp — all three PE forms, (d) roller coaster with loop — minimum height to complete the loop (links A.2 circular motion), (e) with friction: block slides down ramp with μ = 0.2.</p><p><strong>Wrap-up (5 min):</strong> \"Energy methods are often EASIER than force methods — you only need start and end states, not the path.\"</p>",
            "engagementHook": {
              "title": "BOWLING BALL PENDULUM",
              "content": "Suspend a heavy ball from the ceiling. A student holds it against their nose, releases it, and stands perfectly still. The ball swings away and returns — stopping just before their nose. Conservation of energy guarantees it can’t return past the release point (no energy added). The emotional trust in physics makes this unforgettable."
            },
            "nos": {
              "tags": [
                "Theories",
                "Models"
              ],
              "description": "Energy conservation provides an alternative to Newton’s laws for mechanics problems. The two are equivalent but conceptually different. Choosing the right tool is itself a scientific skill (NOS: methodological choices). Energy methods are scalar, avoiding the vector complexity of forces."
            },
            "atl": [
              "Thinking skills",
              "Self-management skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Risk-taker"
            ],
            "ao": [
              "AO2 — Apply conservation of mechanical energy to solve problems",
              "AO3 — Analyse systems with and without friction using energy bar charts"
            ],
            "resources": "Bowling ball or heavy pendulum, ceiling mount, ramp + dynamics cart, printed roller coaster diagrams",
            "formative": "\"A 2 kg ball released from rest on a frictionless track with a loop of radius 0.5 m. (a) Minimum starting height to complete the loop? (b) Draw energy bar charts at: start, bottom, top of loop. (c) If 10% energy lost to friction, what height is now needed?\""
          },
          {
            "num": 7,
            "title": "Work by Non-Conservative Forces & Complex Problems",
            "focus": "IB Guidance: The change in total mechanical energy of a system should be interpreted in terms of the work done by any non-conservative force",
            "minutes": 40,
            "understandings": [
              "IB Guidance: The change in total mechanical energy of a system should be interpreted in terms of the work done by any non-conservative force",
              "ΔE_mech = W_non-conservative (friction, applied forces, drag)",
              "When friction acts: E_mech,final = E_mech,initial − W_friction",
              "Combining energy, momentum (A.2), and force methods in multi-step problems",
              "Decision framework: when to use force vs energy vs momentum methods"
            ],
            "teachingStrategy": "<p><strong>Key concept (10 min):</strong> When friction (non-conservative) acts, mechanical energy decreases. The \"lost\" energy = work done by friction = F_f × d. Worked example: 10 kg box slides 8 m down a 30° ramp, μ = 0.3. E_initial = mgh = 392 J. W_friction = μmg cosθ × d = 203.6 J. E_final = 188.4 J = ½mv² → v = 6.14 m/s.</p><p><strong>Decision framework (5 min):</strong> When to use which? (a) Force (F = ma): need acceleration. (b) Energy: know start/end states, don’t care about path. (c) Momentum: collisions/explosions. Many IB problems need two or three in sequence.</p><p><strong>Worked example (10 min):</strong> Spring launches ball off a table: (a) launch speed (energy: ½k(Δx)² = ½mv²), (b) time to hit ground (kinematics: h = ½gt²), (c) range (kinematics: x = vt), (d) speed at impact (energy: ½mv² + mgh = ½mv_f²).</p><p><strong>Group challenge (15 min):</strong> \"A 50 g ball slides down a frictionless ramp from h = 2 m, hits a 150 g ball (perfectly inelastic), combined mass slides up a rough 30° incline (μ = 0.3). How far up?\" Steps: energy → momentum → energy with friction. Groups present one step each.</p>",
            "engagementHook": {
              "title": "GLOWING F1 BRAKES & PROBLEM TOURNAMENT",
              "content": "Show Formula 1 brake discs glowing red: ½ × 800 × 83² ≈ 2.8 MJ of KE → thermal in ~2 seconds. \"Enough to boil 8 litres of water.\" Then run a problem — solving tournament: groups race to solve multi — step challenge cards on whiteboards."
            },
            "nos": {
              "tags": [
                "Models",
                "Patterns & trends"
              ],
              "description": "Non — conservative forces break the simple conservation picture. Recognising when a model applies and when it doesn’t is core scientific judgement (NOS: scope and limitations). Regenerative braking recaptures \"lost\" energy — physics driving innovation (NOS: global impact)."
            },
            "atl": [
              "Thinking skills",
              "Social skills",
              "Self-management skills"
            ],
            "learnerProfile": [
              "Thinker",
              "Communicator"
            ],
            "ao": [
              "AO2 — Apply energy methods with friction",
              "combine with momentum and kinematics",
              "AO3 — Evaluate which method to use",
              "interpret energy changes via non-conservative forces"
            ],
            "resources": "F1 braking photos/video, whiteboards for group work, printed challenge cards with multi-step problems",
            "formative": "Group challenge solution (assessed for correct method at each step). \"A 1200 kg car brakes from 25 m/s to rest over 40 m. (a) KE lost. (b) Average braking force. (c) If regenerative braking recovers 30%, energy recovered?\""
          }
        ]
      },
      {
        "name": "Power, Efficiency & Energy Density",
        "color": "accent3",
        "totalMinutes": 150,
        "subtopics": [
          {
            "num": 8,
            "title": "Power — P = ΔW/Δt = Fv",
            "focus": "Power developed P is the rate of work done, or the rate of energy transfer: P = ΔW/Δt",
            "minutes": 50,
            "understandings": [
              "Power developed P is the rate of work done, or the rate of energy transfer: P = ΔW/Δt",
              "Derive P = Fv from P = ΔW/Δt = FΔs/Δt = Fv",
              "P = Fv is useful for constant-velocity motion against resistive forces",
              "Units: watts (W) = J/s"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> Two students climb to the 3rd floor. One runs, one walks. Same work (same mass, same height). But who is more powerful? Power = how FAST you transfer energy, not how much.</p><p><strong>Lab (20 min):</strong> MEASURE YOUR POWER — Run up a flight of stairs. Measure: mass (bathroom scale), height of staircase (metre stick), time (stopwatch). Calculate W = mgΔh, P = W/t. Compare: fastest student has highest power. Typical human: 200–500 W. Usain Bolt peak: ~2600 W. A horse: ~750 W (1 hp). Car engine: ~100 kW.</p><p><strong>Direct instruction (10 min):</strong> Derive P = Fv. Application: a car engine produces 150 kW. At max speed, driving force = drag. P = F_drag × v_max. If v_max = 50 m/s, F_drag = 3000 N.</p><p><strong>Practice (15 min):</strong> (1) 60 kg student climbs 3 m in 4 s — power output. (2) Crane lifts 2000 kg by 20 m in 30 s. (3) Car at 80 kW and 40 m/s — drag force? (4) Power to accelerate 1200 kg from rest to 30 m/s in 8 s.</p>",
            "engagementHook": {
              "title": "STAIR",
              "content": "CLIMB POWER CHALLENGE — Students race up stairs and calculate their own power output. Post results on a leaderboard. Compare: light bulb (60 W), horse (750 W), Usain Bolt (2600 W), car (100 kW), jet engine (50 MW). \"You are roughly as powerful as a bright light bulb.\" The physical exertion makes the watt a unit you can feel in your muscles."
            },
            "nos": {
              "tags": [
                "Measurements",
                "Patterns & trends"
              ],
              "description": "James Watt defined \"horsepower\" to market his steam engines against horses — a brilliant use of comparison. The watt (named after him) became the SI unit. Clear, universal units facilitate global scientific communication."
            },
            "atl": [
              "Research skills",
              "Self-management skills"
            ],
            "learnerProfile": [
              "Risk-taker",
              "Knowledgeable"
            ],
            "ao": [
              "AO1 — Define power",
              "derive P = Fv",
              "AO2 — Apply P = ΔW/Δt and P = Fv to solve problems"
            ],
            "resources": "Bathroom scale, metre stick, stopwatch, staircase, power comparison chart (light bulb to jet engine)",
            "formative": "Stair-climb power calculation with leaderboard. Exit ticket: \"A lift motor raises a 600 kg cabin 30 m in 20 s. (a) Calculate the power output. (b) If the motor is 80% efficient, what electrical power input is needed?\""
          },
          {
            "num": 9,
            "title": "Efficiency",
            "focus": "Efficiency η in terms of energy transfer or power: η = useful work out / total work in = useful power out / total power in",
            "minutes": 45,
            "understandings": [
              "Efficiency η in terms of energy transfer or power: η = useful work out / total work in = useful power out / total power in",
              "Efficiency is dimensionless; expressed as a fraction or percentage",
              "η < 1 (or < 100%) for all real systems — some energy always becomes thermal",
              "Combined efficiency of multi-stage systems: η_total = η₁ × η₂ × η₃ …"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"You eat 2000 kcal/day. Only ~500 kcal becomes useful mechanical work. Where does the other 75% go?\" Thermal energy — which is why you’re warm. Human body: ~25% efficient as a machine.</p><p><strong>Direct instruction (10 min):</strong> Define both forms: η = E_useful/E_total = P_useful/P_total. Examples: (a) incandescent bulb: 5% efficient, (b) LED: 25%, (c) electric motor 85%, input 500 W → 425 W useful, (d) combined: power station 40% × transmission 90% = 36% overall.</p><p><strong>Lab (20 min):</strong> MOTOR EFFICIENCY — Electric motor lifts a known mass by measured height. Measure electrical energy input (V × I × t from joulemeter). GPE gained = mgΔh. η = mgΔh / (VIt). Typical: 30–50%. Discuss: where does \"lost\" energy go?</p><p><strong>Practice (10 min):</strong> Problems including combined efficiency and working backwards (given η and useful output, find input).</p>",
            "engagementHook": {
              "title": "THE HUMAN MACHINE",
              "content": "Calculate your own efficiency climbing stairs. Input: a snack (~100 kcal = 418,000 J). Output: mgΔh from the stair climb (~2000 J). Efficiency ≈ 0.5%. \"Wait, I thought humans were 25% efficient!\" The 25% is muscles alone; most food energy keeps you alive (heartbeat, brain, temperature). This sparks a discussion about system boundaries and what counts as \"useful.\""
            },
            "nos": {
              "tags": [
                "Global impact",
                "Measurements"
              ],
              "description": "Efficiency drives energy policy: EU Energy Labels, ENERGY STAR, fuel economy standards. Improving efficiency reduces emissions without changing behaviour (NOS: global impact of science on policy and society)."
            },
            "atl": [
              "Research skills",
              "Thinking skills"
            ],
            "learnerProfile": [
              "Caring",
              "Principled"
            ],
            "ao": [
              "AO1 — Define efficiency in both forms",
              "AO2 — Calculate efficiency from energy or power",
              "find combined efficiency",
              "AO3 — Analyse multi-stage systems"
            ],
            "resources": "Small electric motor, masses, string, joulemeter or voltmeter + ammeter + stopwatch, pulley",
            "formative": "Motor efficiency lab report. \"A coal power station: 1000 MJ chemical input. Boiler η = 88%. Turbine η = 42%. Generator η = 96%. Transmission η = 92%. (a) Overall η. (b) Useful electrical energy delivered. (c) Total energy wasted.\""
          },
          {
            "num": 10,
            "title": "Energy Density of Fuel Sources",
            "focus": "Energy density: energy released per unit mass of fuel (J/kg) or per unit volume (J/m³)",
            "minutes": 55,
            "understandings": [
              "Energy density: energy released per unit mass of fuel (J/kg) or per unit volume (J/m³)",
              "Compare: hydrogen (~140 MJ/kg), petrol (~46 MJ/kg), coal (~24 MJ/kg), wood (~16 MJ/kg), Li battery (~0.5 MJ/kg)",
              "Solve problems involving energy density, fuel mass, and energy output",
              "Evaluate suitability of fuel sources considering: energy density, efficiency, availability, cost, environmental impact"
            ],
            "teachingStrategy": "<p><strong>Opener (5 min):</strong> \"Why can’t electric planes cross the Atlantic?\" Batteries: ~0.5 MJ/kg. Jet fuel: ~43 MJ/kg. A plane would need 86× more battery mass for the same energy.</p><p><strong>Data analysis (15 min):</strong> Give students a fuel energy density table. Tasks: (a) rank highest to lowest, (b) calculate mass of each fuel for 1 GJ, (c) \"Why is hydrogen best by energy density but not widely used?\" Energy density alone doesn’t determine suitability.</p><p><strong>Calculations (15 min):</strong> (1) Car uses 8 L petrol (ρ = 720 kg/m³) per 100 km — energy consumed. (2) Electric car: 15 kWh per 100 km — compare. (3) Power station burns 500 tonnes of coal/day — daily energy input.</p><p><strong>Group debate (15 min):</strong> Groups represent fossil fuels, nuclear, solar, wind, hydrogen. 2-minute case each. Address: energy density, efficiency, availability, cost, environment, scalability. Class votes.</p><p><strong>Wrap-up (5 min):</strong> International-mindedness: energy policy differs by country — Norway (hydro), France (nuclear), Iceland (geothermal).</p>",
            "engagementHook": {
              "title": "THE ELECTRIC PLANE PROBLEM & ENERGY DEBATE",
              "content": "A Boeing 787 carries ~100,000 kg of fuel. Replacing with batteries: 100,000 × (43/0.5) = 8.6 million kg. The plane weighs 120,000 kg. \"You’d need batteries 70× heavier than the plane.\" This makes energy density viscerally important. The follow — up debate forces multi — dimensional thinking about real trade — offs."
            },
            "nos": {
              "tags": [
                "Global impact",
                "Science as a shared endeavour"
              ],
              "description": "Energy policy is one of the clearest examples of science informing global decision — making. The Paris Agreement, IPCC reports, and national energy strategies all rely on physics concepts like energy density and efficiency."
            },
            "atl": [
              "Thinking skills",
              "Communication skills",
              "Social skills"
            ],
            "learnerProfile": [
              "Caring",
              "Open-minded",
              "Knowledgeable"
            ],
            "ao": [
              "AO1 — Define energy density",
              "AO2 — Calculate energy from fuel mass and energy density",
              "AO3 — Evaluate suitability of fuels considering multiple factors"
            ],
            "resources": "Fuel energy density data table, calculators, debate preparation cards (one per energy source)",
            "formative": "\"A hybrid car: 40 L petrol tank (energy density 34 MJ/L) + 50 kWh battery. (a) Total energy stored in each source. (b) Petrol engine 25% efficient, electric motor 90% — useful energy from each. (c) Why does the car use both?\""
          }
        ]
      }
    ],
    "linkingQuestions": [
      {
        "topic": "A.1 Kinematics",
        "question": "Which other quantities in physics involve rates of change? How is work related to acceleration over displacement?"
      },
      {
        "topic": "A.2 Forces & Momentum",
        "question": "How does the work-energy theorem connect to F = ma?"
      },
      {
        "topic": "B.2 Greenhouse Effect",
        "question": "How is the equilibrium state of a system, such as the Earth's atmosphere or a star, determined by energy balance?"
      },
      {
        "topic": "C.2 Wave Model",
        "question": "How do travelling waves allow for a transfer of energy without a resultant displacement of matter?"
      },
      {
        "topic": "D.1 Gravitational Fields",
        "question": "Why is the equation for the change in gravitational potential energy only valid close to the surface of the Earth? How does it generalise to larger distances?"
      },
      {
        "topic": "E.5 Fusion and Stars",
        "question": "How is energy released in nuclear fusion processes inside stars? Connect to energy density."
      }
    ]
  }
};
// ============================================================
// PASTE LOCATION: js/dp-planner-data.js
// Inside the DP_PLANNER_DATA = { ... } object, add these two keys.
// No other code changes needed — the sidebar auto-detects them.
// ============================================================

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

