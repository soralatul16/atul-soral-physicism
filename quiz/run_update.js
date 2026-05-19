const fs = require('fs');
const path = require('path');

// Read original file to preserve comments
const bankPath = path.join(__dirname, 'question-bank.js');
const origContent = fs.readFileSync(bankPath, 'utf8');

// Extract the array
const arrayText = origContent.substring(origContent.indexOf('['), origContent.lastIndexOf(']') + 1);
let questionBank;
try { questionBank = eval(arrayText); } catch(e) { console.error("Parse error:",e); process.exit(1); }
console.log(`Loaded ${questionBank.length} questions.`);

function gen(q) {
  const s = q.strand || "i";
  const t = (q.topic || "").toLowerCase();
  const Q = (q.question || "").toLowerCase();
  const A = q.answer || "";
  const Al = A.toLowerCase();

  // ═══════════════ FORCES ═══════════════
  if (t === "forces" || t === "force" || t === "laws" || t === "third law") {
    // Definition
    if (Q.includes("defined as") || Q.includes("definition")) return "A force is defined as any push or pull that acts on an object. Forces are vector quantities measured in newtons (N), having both magnitude and direction.";
    if (Q.includes("push force") || (Q.includes("push") && Q.includes("moves"))) return "A push is a contact force that acts in the direction away from the source applying it, such as pushing a door open or a shopping cart forward.";
    if (Q.includes("pull force") || (Q.includes("pull") && Q.includes("moves"))) return "A pull is a contact force that acts toward the source applying it, such as pulling a rope or opening a drawer.";
    
    // Effects of force
    if (Q.includes("effect of force")) return "Forces can change an object's speed, direction of motion, or shape. These are the three fundamental effects of force in physics.";
    if (Q.includes("force can change") && Al === "all of these") return "A force can change an object's shape, speed, and direction of motion. All three are observable effects when a force is applied to an object.";
    if (Q.includes("force can change")) return "Forces produce changes in motion (speed and direction) as well as changes in shape (deformation). This is a fundamental principle of mechanics.";
    if (Q.includes("force can start")) return "An unbalanced force can set a stationary object into motion. According to Newton's First Law, an object at rest remains at rest until an external force acts on it.";

    // Contact vs non-contact — check non-contact FIRST ("non-contact force" contains "contact force")
    if (Q.includes("non-contact") && Q.includes("which")) {
      if (Al === "gravity") return "Gravity is a non-contact force — it acts at a distance without physical touch. It attracts all objects with mass toward each other.";
      if (Al === "magnetic force") return "Magnetic force is a non-contact force that acts at a distance between magnetic materials or moving charges, without requiring physical touch.";
      return "Non-contact forces act at a distance without physical touch. The three main non-contact forces are gravitational, magnetic, and electrostatic forces.";
    }
    if (Q.includes("non-contact forces act") || Q.includes("non-contact force")) return "Non-contact forces act at a distance without requiring physical touch between objects. Examples include gravity, magnetism, and electrostatic force.";
    if (Q.includes("contact force") && Q.includes("which")) {
      if (Al === "friction") return "Friction is a contact force that requires direct physical interaction between two surfaces. It opposes relative motion through microscopic surface interlocking.";
      return "Contact forces require direct physical touch between objects. Examples include friction, tension, normal force, and air resistance.";
    }
    if (Q.includes("contact forces require")) return "Contact forces require direct physical touch between interacting objects. Without surface contact, these forces cannot be exerted.";
    if (Q.includes("categorized into")) return "Forces are categorized into contact forces (requiring touch), non-contact forces (acting at a distance), and mixed situations where both types act simultaneously.";

    // Balanced/Unbalanced
    if (Q.includes("balanced forces") && Q.includes("net force")) return "When forces are balanced, they are equal in magnitude but opposite in direction. Their vector sum is zero (0 N), producing no net force.";
    if (Q.includes("balanced forces cause") || Q.includes("balanced forces have")) return "Balanced forces produce zero net force, so the object maintains its current state — either at rest or moving at constant velocity.";
    if (Q.includes("unbalanced forces") && Q.includes("net force")) return "Unbalanced forces produce a non-zero net force. The forces do not cancel out, resulting in acceleration in the direction of the larger force.";
    if (Q.includes("unbalanced forces cause")) return "Unbalanced forces produce a net force that causes acceleration. The object speeds up, slows down, or changes direction depending on the force direction.";
    if (Q.includes("equal and opposite")) return "Equal and opposite forces acting on the same object are balanced forces. They cancel each other, resulting in zero net force and no change in motion.";
    if (Q.includes("net force is")) return "Net force is the vector sum of all forces acting on an object. It determines whether the object accelerates, decelerates, or maintains constant velocity.";
    if (Q.includes("constant speed has")) return "An object moving at constant speed has balanced forces acting on it. The net force is zero, so there is no acceleration — the velocity remains unchanged.";
    if (Q.includes("forces are unequal") || Q.includes("if forces are unequal")) return "When forces acting on an object are unequal, they are unbalanced. This produces a non-zero net force causing acceleration.";
    if (Q.includes("example of balanced")) return "A book resting on a table is a classic example of balanced forces — the downward weight equals the upward normal force, resulting in zero net force.";
    if (Q.includes("rocket launch")) return "A rocket launch demonstrates unbalanced forces — the upward thrust exceeds the downward weight, creating a net upward force that accelerates the rocket.";

    // Gravity/friction/air resistance
    if (Q.includes("pulls objects toward earth") || Q.includes("toward earth")) return "Gravitational force is the attractive non-contact force that pulls all objects with mass toward the center of the Earth. Its strength depends on mass and distance.";
    if (Q.includes("gravity") || Q.includes("gravitational")) return "Gravity is a non-contact force that attracts objects with mass toward each other. Near Earth's surface, it accelerates objects downward at approximately 9.8 m/s².";
    if (Q.includes("air resistance is")) return "Air resistance is a contact force caused by air molecules colliding with a moving object. It increases with speed and always opposes the direction of motion.";
    if (Q.includes("opposite to motion") || Q.includes("acting opposite")) return "Friction always acts in the direction opposite to motion. It arises from microscopic surface irregularities interlocking between two surfaces in contact.";
    if (Q.includes("friction") && Q.includes("opposite")) return "Friction always acts in the direction opposite to motion or attempted motion. It arises from microscopic surface irregularities interlocking between two surfaces.";
    if (Q.includes("friction causes")) return "Friction opposes relative motion between surfaces, causing moving objects to slow down and eventually stop if no other force maintains the motion.";
    if (Q.includes("friction") && !Q.includes("which")) return "Friction is a contact force between surfaces that opposes relative motion. It converts kinetic energy into thermal energy, slowing moving objects.";

    // Newton's Laws  
    if (Q.includes("myth") || Q.includes("correct concept")) return "Newton's First Law corrects the myth that motion requires continuous force. In reality, an object in motion continues at constant velocity unless an unbalanced force acts on it.";
    if (Q.includes("this law is called")) return "Newton's First Law is also called the Law of Inertia. It states that an object will remain in its current state of motion unless acted upon by an unbalanced external force.";
    if (Q.includes("first law") || Q.includes("law of inertia")) return "Newton's First Law (Law of Inertia) states that an object remains at rest or in uniform motion unless acted upon by an unbalanced external force.";
    if (Q.includes("inertia is") || Q.includes("inertia means")) return "Inertia is the tendency of an object to resist any change in its state of motion. It is directly proportional to the object's mass.";
    if (Q.includes("object keeps moving") || Q.includes("keeps moving due")) return "An object keeps moving due to inertia — the natural tendency to resist changes in motion. Without friction or other opposing forces, it would continue moving forever.";
    if (Q.includes("motion continues") || Q.includes("continues unless")) return "According to Newton's First Law, motion continues at constant velocity unless an unbalanced force acts. No force is needed to maintain motion — only to change it.";
    if (Q.includes("motion changes only")) return "Motion changes only when an unbalanced (net) force acts on the object. Balanced forces maintain the current state of motion.";
    if (Q.includes("in space") && Q.includes("move")) return "In space, objects move continuously because there is virtually no friction or air resistance to oppose their motion, so inertia keeps them moving at constant velocity.";
    if (Q.includes("hockey puck")) return "A hockey puck continues sliding because ice provides very little friction. The puck's inertia keeps it moving, and only the small friction force gradually slows it.";
    if (Q.includes("key takeaway")) return "The key physics principle is that unbalanced forces cause changes in motion (acceleration). Objects maintain their velocity when forces are balanced or absent.";
    if (Q.includes("which force") && Al.includes("all")) return "All types of forces — friction, applied force, gravity, and others — can change an object's direction of motion depending on the situation.";

    // Second Law
    if (Q.includes("f=ma") || Q.includes("f = ma") || Q.includes("second law")) return "Newton's Second Law states F = ma: the net force on an object equals its mass times its acceleration. Greater mass requires greater force for the same acceleration.";
    if (Q.includes("action") && Q.includes("reaction")) return "Newton's Third Law states that for every action force, there is an equal and opposite reaction force. These paired forces always act on different objects.";
    if (Q.includes("third law")) return "Newton's Third Law: every action has an equal and opposite reaction. The two forces act on different objects, which is why they don't cancel each other out.";

    // Calculate
    if (Q.includes("calculate") || Q.includes("numerical")) return `Using Newton's Second Law (F = ma), substituting the given values and solving algebraically gives the answer: ${A}.`;

    // Shape/deformation
    if (Q.includes("change shape") || Q.includes("deform")) return "Forces can cause deformation — changing an object's shape. Stretching a spring, compressing clay, or bending metal are all examples of forces altering shape.";
    
    // Mixed forces
    if (Q.includes("mixed force")) return "In real-world situations, objects experience multiple forces simultaneously — both contact and non-contact — creating complex combined force interactions.";
    
    // Pull example
    if (Q.includes("example of pull")) return "Pulling a rope is a classic example of a pull force — the force acts toward the person applying it, moving the object closer.";
    
    // Direction change
    if (Q.includes("changes direction") || Q.includes("change direction")) return "Multiple types of forces can change an object's direction of motion. Friction, applied forces, and gravity can all alter the trajectory of a moving object.";
    
    // Stop motion
    if (Q.includes("stop motion") || Q.includes("force can stop")) return "A force stops motion by reducing the object's speed to zero. Friction and applied braking forces are common examples of forces that bring objects to rest.";
    
    // Applied force
    if (Q.includes("applied force")) return "An applied force is any force exerted on an object by a person or another object through direct contact. It is an external, deliberate force.";
    
    // Motion needs force myth
    if (Q.includes("motion needs")) return "The common misconception is that continuous force is needed to maintain motion. Newton's First Law disproves this — force is only needed to change motion.";

    // Action-reaction cancel
    if (Q.includes("cancel") && s === "iii") return "Action-reaction force pairs never cancel because they act on different objects. Only forces on the same object can be balanced and cancel each other.";

    // Generic forces fallback by strand
    if (s === "i") return `${A} is correct. In mechanics, forces govern how objects interact — causing changes in speed, direction, or shape depending on their magnitude and direction.`;
    if (s === "ii") return `Applying Newton's Laws of Motion to this scenario confirms that ${A} is correct. The relationship F = ma connects force, mass, and acceleration quantitatively.`;
    return `Analyzing the force interactions in this system shows that ${A} is the correct answer. The net force determines acceleration, while balanced forces maintain equilibrium.`;
  }

  // ═══════════════ INERTIA ═══════════════
  if (t === "inertia") {
    if (Q.includes("also called") || Q.includes("first law")) return "Newton's First Law is also called the Law of Inertia because it describes how objects naturally resist changes to their state of motion.";
    if (Q.includes("at rest will")) return "According to Newton's First Law, an object at rest remains at rest unless an unbalanced external force acts upon it. This is the inertia of rest.";
    if (Q.includes("depends on") && !Q.includes("not")) return "Inertia depends solely on an object's mass. Greater mass means greater resistance to changes in motion, regardless of shape, size, or velocity.";
    if (Q.includes("depends only on") || Q.includes("only on")) return "Inertia depends ONLY on mass. Shape, color, size, speed, and temperature have absolutely no effect on an object's inertia.";
    if (Q.includes("more inertia") && Q.includes("which")) return "The object with the greatest mass has the most inertia. A truck has far more mass than a feather, book, or paper, making it hardest to accelerate or stop.";
    if (Q.includes("more mass means")) return "More mass means more inertia. Since inertia is directly proportional to mass, doubling an object's mass doubles its resistance to changes in motion.";
    if (Q.includes("greater inertia") && Q.includes("which")) return "The loaded cart has greater inertia because it has more mass. More mass means more resistance to changes in velocity.";
    if (Q.includes("passenger") || Q.includes("bus stops")) return "When a bus suddenly stops, passengers lurch forward because their bodies tend to continue moving at the bus's original speed due to inertia of motion.";
    if (Q.includes("seat belt") && Q.includes("reduce")) return "Seat belts reduce injury by extending the stopping time during a collision. This reduces the force on the passenger (impulse = FΔt = Δp) while overcoming their inertia.";
    if (Q.includes("seat belt")) return "Seat belts apply a controlled force over time to safely stop a passenger's forward motion caused by inertia during a sudden deceleration.";
    if (Q.includes("no net force") || Q.includes("maintain velocity")) return "When no net force acts on an object, it maintains its current velocity indefinitely — either at rest or moving in a straight line at constant speed.";
    if (Q.includes("constant velocity")) return "An object at constant velocity has zero net force. No acceleration occurs, confirming Newton's First Law — motion continues unchanged without unbalanced force.";
    if (Q.includes("situation shows inertia")) return "A moving car continuing forward after the engine is turned off demonstrates inertia of motion — the tendency to keep moving at the same velocity.";
    if (Q.includes("moving object stops")) return "A moving object that stops must have had an unbalanced force acting on it (like friction). Without such a force, inertia would keep it moving forever.";
    if (Q.includes("resistance to") || Q.includes("resists")) return "Inertia is the inherent resistance of matter to any change in its state of motion — whether starting, stopping, speeding up, or changing direction.";
    if (Q.includes("mass doubles") || Q.includes("if mass doubles")) return "Since inertia is directly proportional to mass, if mass doubles then inertia also doubles. Twice the mass means twice the resistance to acceleration.";
    if (Q.includes("affects inertia") || Q.includes("affect inertia")) return "Only mass affects inertia. Shape, size, color, speed, and material (at constant mass) have no influence on how much an object resists changes in motion.";
    if (Q.includes("does not affect") || Q.includes("not affect")) return "Shape, size, color, and material (at same mass) do NOT affect inertia. Only mass determines an object's resistance to changes in velocity.";
    if (Q.includes("same mass") && Q.includes("different shape")) return "Objects with identical mass have identical inertia regardless of shape. Inertia depends only on mass, not geometry.";
    if (Q.includes("measured in")) return "Inertia itself has no unit — it is not measured directly. However, mass (measured in kg) serves as the quantitative measure of inertia.";
    if (Q.includes("hardest to stop") || Q.includes("which is hardest")) return "The truck is hardest to stop because it has the greatest mass, and therefore the greatest inertia — requiring the most force to change its velocity.";
    if (Q.includes("least inertia")) return "A feather has the least inertia because it has the smallest mass. Less mass means less resistance to changes in motion.";
    if (Q.includes("moving") && Q.includes("stationary") && Q.includes("truck")) return "A moving truck and a stationary truck of equal mass have the same inertia. Inertia depends only on mass, not on whether the object is moving or still.";
    if (Q.includes("increases with")) return "Inertia increases with mass. Adding more mass to an object increases its resistance to any change in its state of rest or motion.";
    if (Q.includes("property of")) return "Inertia is a fundamental property of all matter. Every object with mass possesses inertia — the tendency to maintain its current state of motion.";
    if (Q.includes("astronaut float")) return "In orbit, astronauts appear to float because they and their spacecraft are in free fall together. The near-absence of friction allows inertia to keep objects drifting freely.";
    if (Q.includes("5 kg") && Q.includes("constant")) return "A 5 kg object at constant velocity has zero net force acting on it (0 N). Constant velocity means zero acceleration, and by F = ma, force must be zero.";

    // Strand-based fallbacks
    if (s === "iii") return `Analyzing inertia: ${A} is correct. Since mass is the sole determinant of inertia, only changes in mass alter an object's resistance to acceleration.`;
    if (s === "ii") return `Applying F = ma confirms that ${A} is correct. Mass determines inertia — the resistance to acceleration — and larger masses require proportionally larger forces.`;
    return `${A} is correct. Inertia is the property of matter that resists changes in motion, and it depends entirely on the object's mass.`;
  }

  // ═══════════════ MOMENTUM ═══════════════
  if (t === "momentum") {
    if (Q.includes("formula") || Q.includes("calculated")) return "Momentum (p) is calculated using p = mv, where m is mass (kg) and v is velocity (m/s). It is a vector quantity with both magnitude and direction.";
    if (Q.includes("conservation") || Q.includes("conserved")) return "The Law of Conservation of Momentum states that in an isolated system (no external forces), the total momentum before a collision equals the total momentum after.";
    if (Q.includes("elastic") && !Q.includes("inelastic")) return "In a perfectly elastic collision, both total momentum and total kinetic energy are conserved. The objects bounce off each other without any energy loss.";
    if (Q.includes("inelastic")) return "In an inelastic collision, total momentum is conserved but kinetic energy is not. Some kinetic energy converts to heat, sound, or deformation energy.";
    if (Q.includes("impulse")) return "Impulse equals the change in momentum (J = FΔt = Δp). Extending the time of impact reduces the average force, which is why airbags and padding protect us.";
    if (Q.includes("unit") || Q.includes("measured in")) return "The SI unit of momentum is kg·m/s (kilogram-meter per second), derived from the product of mass (kg) and velocity (m/s).";
    if (Q.includes("doubles")) return "Since p = mv, if velocity doubles while mass stays constant, momentum exactly doubles. Momentum is directly proportional to velocity.";
    if (Q.includes("calculate") || Q.includes("numerical")) return `Applying p = mv with the given values: ${A}. Multiply mass by velocity to find momentum.`;
    if (Q.includes("seat belt")) return "Seat belts increase stopping time, reducing the force on passengers (F = Δp/Δt). A longer stopping time means a smaller force for the same change in momentum.";
    if (Q.includes("zero momentum")) return "An object has zero momentum when either its mass is zero (impossible for matter) or its velocity is zero — meaning it is stationary.";
    if (Q.includes("direction")) return "Momentum is a vector quantity — it has both magnitude and direction. The direction of momentum is the same as the direction of velocity.";
    if (s === "iii") return `Analyzing momentum conservation confirms ${A}. In closed systems, total momentum before equals total momentum after any collision.`;
    if (s === "ii") return `Using p = mv gives ${A}. Momentum is directly proportional to both mass and velocity.`;
    return `${A} is correct. Momentum (p = mv) is a measure of how difficult it is to stop a moving object, depending on both its mass and velocity.`;
  }

  // ═══════════════ FRICTION ═══════════════
  if (t === "friction") {
    if (Q.includes("static")) return "Static friction prevents stationary surfaces from sliding. It adjusts to match the applied force up to a maximum value, beyond which the object begins to move.";
    if (Q.includes("kinetic") || Q.includes("sliding")) return "Kinetic friction acts on surfaces already in relative motion. It is typically weaker than static friction and remains roughly constant regardless of speed.";
    if (Q.includes("lubricant") || Q.includes("reduce") || Q.includes("oil")) return "Lubricants reduce friction by placing a fluid layer between surfaces, preventing direct contact and microscopic interlocking of surface irregularities.";
    if (Q.includes("increase") && Q.includes("friction")) return "Friction increases with greater surface roughness and greater normal force (weight). Rougher surfaces interlock more, creating stronger frictional resistance.";
    if (Q.includes("oppose") || Q.includes("opposes")) return "Friction always opposes the direction of relative motion or attempted motion. It acts parallel to the contact surfaces in the opposite direction to sliding.";
    if (Q.includes("heat") || Q.includes("thermal")) return "Friction converts kinetic energy into thermal (heat) energy. Rubbing hands together demonstrates this — the friction warms your palms.";
    if (Q.includes("useful") || Q.includes("advantage")) return "Friction is essential for walking, gripping, braking, and writing. Without friction, we could not walk, cars could not stop, and tires would not grip roads.";
    return `${A} is correct. Friction is a contact force that opposes relative motion between surfaces, arising from microscopic irregularities on even smooth-looking surfaces.`;
  }

  // ═══════════════ ATOMIC / NUCLEAR ═══════════════
  if (t === "atomic" || t === "nuclear") {
    if (Q.includes("half-life") && Q.includes("formula")) return "The half-life formula t₁/₂ = ln(2)/λ relates half-life to the decay constant. It represents the time for half of the radioactive nuclei in a sample to decay.";
    if (Q.includes("half-life")) return "Half-life is the time required for half of the radioactive nuclei in a sample to decay. It is constant for each isotope and unaffected by temperature or pressure.";
    if (Q.includes("nucleus") || Q.includes("dense")) return "The nucleus is the extremely dense, positively charged core of an atom, containing protons and neutrons bound by the strong nuclear force.";
    if (Q.includes("rutherford")) return "Rutherford's gold foil experiment showed that atoms are mostly empty space with a tiny, dense, positively charged nucleus at the center.";
    if (Q.includes("bohr") || Q.includes("energy level") || Q.includes("shells")) return "The Bohr model describes electrons orbiting the nucleus in fixed energy levels. Electrons can only exist in these quantized orbits, not between them.";
    if (Q.includes("photon") || Q.includes("emission") || Q.includes("absorb")) return "Photons are emitted when electrons drop to lower energy levels, and absorbed when they jump to higher levels. Photon energy equals the energy level difference (E = hf).";
    if (Q.includes("alpha")) return "Alpha particles are helium nuclei (2 protons + 2 neutrons). They are highly ionizing but have very low penetration — stopped by paper or skin.";
    if (Q.includes("beta")) return "Beta particles are high-speed electrons (β⁻) or positrons (β⁺) emitted during nuclear decay. They have moderate ionizing power and penetration depth.";
    if (Q.includes("gamma")) return "Gamma rays are high-energy electromagnetic radiation with no mass or charge. They are weakly ionizing but highly penetrating — requiring thick lead or concrete to stop.";
    if (Q.includes("e = mc") || Q.includes("mc²") || Q.includes("mass defect") || Q.includes("mass-energy")) return "Einstein's E = mc² shows that mass and energy are equivalent. The mass defect in nuclei is converted to binding energy holding the nucleus together.";
    if (Q.includes("waste") || Q.includes("geological")) return "Nuclear waste remains radioactive for thousands of years. Deep geological repositories provide long-term isolation from the biosphere.";
    if (Q.includes("fission")) return "Nuclear fission splits a heavy nucleus into lighter fragments, releasing enormous energy. It is used in nuclear power plants and atomic weapons.";
    if (Q.includes("fusion")) return "Nuclear fusion combines light nuclei into heavier ones, releasing even more energy than fission. It powers the Sun and stars.";
    if (Q.includes("proton")) return "Protons are positively charged subatomic particles found in the nucleus. The number of protons defines the element (atomic number).";
    if (Q.includes("neutron")) return "Neutrons are neutral subatomic particles in the nucleus. They contribute to mass and help stabilize the nucleus through the strong nuclear force.";
    if (Q.includes("electron")) return "Electrons are negatively charged particles orbiting the nucleus. They have negligible mass compared to protons and neutrons.";
    if (Q.includes("isotope")) return "Isotopes are atoms of the same element with different numbers of neutrons. They have identical chemical properties but different nuclear stability.";
    if (Q.includes("calculate")) return `Using the appropriate nuclear physics formula with the given values yields ${A}.`;
    return `${A} is correct. This follows from the fundamental principles of nuclear and atomic physics, governed by conservation of energy, charge, and nucleon number.`;
  }

  // ═══════════════ GENERIC FALLBACKS ═══════════════
  let cap = t.charAt(0).toUpperCase() + t.slice(1);
  if (s === "i") return `${A} is correct. This is a key concept in ${cap} that forms the foundation for understanding more complex physical interactions.`;
  if (s === "ii") return `Applying the relevant physics equations for ${cap} confirms that ${A} is the correct answer. This connects theory to practical problem-solving.`;
  return `Through careful analysis of the physical principles in ${cap}, ${A} is the only logically consistent answer, linking multiple concepts together.`;
}

// Update all explanations
const updated = questionBank.map(q => Object.assign({}, q, { explanation: gen(q) }));

// Serialize
let js = "const questionBank = [\n\n";
updated.forEach((q, i) => {
  js += "{\n";
  js += `topic: ${JSON.stringify(q.topic)},\n`;
  js += `image: ${JSON.stringify(q.image)},\n`;
  js += `criterion: ${JSON.stringify(q.criterion)},\n`;
  js += `    strand: ${JSON.stringify(q.strand)},\n`;
  js += `level: ${JSON.stringify(q.level)},\n`;
  js += `question: ${JSON.stringify(q.question)},\n`;
  js += `options: ${JSON.stringify(q.options)},\n`;
  js += `answer: ${JSON.stringify(q.answer)},\n`;
  js += `explanation: ${JSON.stringify(q.explanation)}\n`;
  js += (i === updated.length - 1) ? "}\n" : "},\n";
});
js += "\n];\n";

fs.writeFileSync(bankPath, js, 'utf8');
console.log(`Done! Updated ${updated.length} questions.`);
