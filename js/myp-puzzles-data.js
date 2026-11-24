/* MYP Physics puzzles: the questions for every unit.
   Add or edit freely. Each unit has four puzzle types:
     match: [left, right] pairs (5 are picked at random each round)
     order: { title, steps: [in the correct order] } (one is picked at random)
     tf:    [statement, true/false, why]
     odd:   { items: [4 items], odd: index of the odd one (0 to 3), why } */
window.MYP_PUZZLES = [
  {
    id: 'forces', name: 'Forces and motion', icon: '&#128640;', bg: 'bg-coral',
    match: [
      ['v = d / t', 'Speed'],
      ['a = Δv / t', 'Acceleration'],
      ['F = ma', 'Resultant force'],
      ['W = mg', 'Weight'],
      ['p = mv', 'Momentum'],
      ['P = W / t', 'Power'],
      ['W = Fd', 'Work done'],
      ['Eₖ = ½mv²', 'Kinetic energy']
    ],
    order: [
      { title: 'A skydiver falls from a plane. Put the stages in order.', steps: [
        'She jumps: her weight is much bigger than air resistance, so she accelerates',
        'Her speed rises, so air resistance increases',
        'Air resistance equals her weight: she falls at terminal velocity',
        'The parachute opens: air resistance is now bigger than her weight, so she slows down',
        'She reaches a new, lower terminal velocity'
      ] },
      { title: 'Measuring the speed of a trolley. Put the method in order.', steps: [
        'Mark a start and finish line and measure the distance between them',
        'Release the trolley and start the stopwatch as it crosses the start line',
        'Stop the stopwatch as it crosses the finish line',
        'Repeat three times and work out the mean time',
        'Calculate speed = distance ÷ mean time'
      ] }
    ],
    tf: [
      ['Mass and weight are the same thing.', false, 'Mass is the amount of matter (kg). Weight is the gravitational force on it (N).'],
      ['An object moving at a constant velocity can have forces acting on it.', true, 'The forces are balanced, so the resultant force is zero.'],
      ['The gradient of a distance–time graph gives the speed.', true, 'Steeper line, faster object.'],
      ['The area under a velocity–time graph gives the acceleration.', false, 'The area gives the distance travelled. The gradient gives the acceleration.'],
      ['A heavier object always falls faster than a lighter one.', false, 'Without air resistance, every object falls with the same acceleration, g ≈ 9.8 m/s².'],
      ['Work done is measured in joules.', true, '1 J of work is done when a force of 1 N moves an object 1 m.'],
      ['A machine can create energy if it works hard enough.', false, 'Energy is never created or destroyed. It is only transferred from one store to another.'],
      ['Momentum is a vector quantity.', true, 'It has a direction: the same direction as the velocity.']
    ],
    odd: [
      { items: ['Speed', 'Mass', 'Distance', 'Velocity'], odd: 3, why: 'Velocity is a vector (it has a direction). The others are scalars.' },
      { items: ['Friction', 'Air resistance', 'Weight', 'Drag'], odd: 2, why: 'Weight is a non-contact force. The others are contact forces.' },
      { items: ['Kinetic', 'Gravitational potential', 'Elastic potential', 'Power'], odd: 3, why: 'Power is the rate of energy transfer. The others are energy stores.' },
      { items: ['newton', 'joule', 'watt', 'kilogram'], odd: 3, why: 'The kilogram is a base SI unit. The others are derived units named after scientists.' }
    ]
  },
  {
    id: 'elec', name: 'Electricity and magnetism', icon: '&#9889;', bg: 'bg-amber',
    match: [
      ['V = IR', 'Voltage (Ohm’s law)'],
      ['Q = It', 'Charge'],
      ['P = IV', 'Electrical power'],
      ['E = Pt', 'Energy transferred'],
      ['R = R₁ + R₂', 'Resistors in series'],
      ['Vₚ / Vₛ = Nₚ / Nₛ', 'Transformer']
    ],
    order: [
      { title: 'Charging a balloon by rubbing it. Put the steps in order.', steps: [
        'Rub the balloon on a wool jumper',
        'Electrons move from the wool onto the balloon',
        'The balloon now has more electrons than protons',
        'The balloon is negatively charged and the wool is positively charged',
        'The balloon can now attract small pieces of paper'
      ] },
      { title: 'Measuring the resistance of a wire. Put the method in order.', steps: [
        'Connect the wire in series with an ammeter and a power supply',
        'Connect a voltmeter in parallel across the wire',
        'Switch on and record the current and the voltage',
        'Repeat for several different voltages',
        'Calculate R = V ÷ I for each and find the mean'
      ] }
    ],
    tf: [
      ['Current is the rate of flow of charge.', true, 'I = Q / t: one ampere is one coulomb per second.'],
      ['In a series circuit the current is the same everywhere.', true, 'There is only one path, so the same charge flows through every component.'],
      ['In a parallel circuit each branch has a different voltage.', false, 'Every branch has the same voltage as the supply. It is the current that splits.'],
      ['Adding more resistors in series lowers the total resistance.', false, 'In series the total resistance goes up. Adding resistors in parallel lowers it.'],
      ['Rubbing a balloon on your hair creates new charge.', false, 'Charge is never created. Electrons are transferred from one object to the other.'],
      ['Like charges repel.', true, 'Two negatives (or two positives) push each other apart. Opposites attract.'],
      ['A transformer works with direct current (d.c.).', false, 'It needs alternating current: a changing magnetic field is what induces the voltage.'],
      ['The magnetic field of a bar magnet is strongest at its poles.', true, 'The field lines are closest together at the poles.']
    ],
    odd: [
      { items: ['Copper', 'Silver', 'Rubber', 'Aluminium'], odd: 2, why: 'Rubber is an electrical insulator. The others are conductors.' },
      { items: ['ampere', 'volt', 'ohm', 'newton'], odd: 3, why: 'The newton is the unit of force. The others are electrical units.' },
      { items: ['Iron', 'Nickel', 'Cobalt', 'Copper'], odd: 3, why: 'Copper is not magnetic. Iron, nickel and cobalt are magnetic metals.' },
      { items: ['Ammeter in series', 'Voltmeter in parallel', 'Ammeter in parallel', 'Voltmeter across a lamp'], odd: 2, why: 'An ammeter must always go in series. The others are connected correctly.' }
    ]
  },
  {
    id: 'waves', name: 'Waves: light and sound', icon: '&#127754;', bg: 'bg-teal',
    match: [
      ['v = fλ', 'Wave speed'],
      ['T = 1 / f', 'Time period'],
      ['n = sin i / sin r', 'Refractive index'],
      ['Amplitude', 'Biggest displacement from the rest position'],
      ['Wavelength', 'Distance between two neighbouring crests'],
      ['Frequency', 'Number of waves passing each second']
    ],
    order: [
      { title: 'Put the electromagnetic spectrum in order, from the longest wavelength to the shortest.', steps: [
        'Radio waves', 'Microwaves', 'Infrared', 'Visible light', 'Ultraviolet', 'X-rays', 'Gamma rays'
      ] },
      { title: 'Measuring the speed of sound with echoes. Put the method in order.', steps: [
        'Stand a measured distance from a large wall',
        'Clap and listen for the echo',
        'Clap in time with the echoes and time 20 claps',
        'Work out the time for one echo: total time ÷ 20',
        'Calculate speed = 2 × distance ÷ time for one echo'
      ] }
    ],
    tf: [
      ['Sound can travel through a vacuum.', false, 'Sound needs particles to pass the vibration on. Light can travel through a vacuum.'],
      ['Light travels faster than sound.', true, 'Light: 3 × 10⁸ m/s. Sound in air: about 340 m/s. That is why you see lightning before you hear thunder.'],
      ['Sound waves are transverse.', false, 'Sound is longitudinal: the particles vibrate parallel to the direction the wave travels.'],
      ['The angle of incidence equals the angle of reflection.', true, 'This is the law of reflection. Both angles are measured from the normal.'],
      ['Light entering glass from air bends away from the normal.', false, 'It slows down in glass, so it bends towards the normal.'],
      ['A higher frequency sound has a higher pitch.', true, 'Pitch depends on frequency. Loudness depends on amplitude.'],
      ['A sound with a bigger amplitude is louder.', true, 'More energy is carried, so it sounds louder.'],
      ['All electromagnetic waves travel at the same speed in a vacuum.', true, 'They all travel at 3 × 10⁸ m/s. Only their wavelength and frequency differ.']
    ],
    odd: [
      { items: ['Radio', 'Microwave', 'Sound', 'Infrared'], odd: 2, why: 'Sound is not an electromagnetic wave.' },
      { items: ['Reflection', 'Refraction', 'Diffraction', 'Evaporation'], odd: 3, why: 'Evaporation is a change of state, not something waves do.' },
      { items: ['Light', 'Water ripples', 'Sound', 'Microwaves'], odd: 2, why: 'Sound is longitudinal. The others are transverse waves.' },
      { items: ['Red', 'Green', 'Violet', 'Ultraviolet'], odd: 3, why: 'Ultraviolet is not visible to the human eye. The others are colours of visible light.' }
    ]
  },
  {
    id: 'atomic', name: 'Atomic physics', icon: '&#9883;', bg: 'bg-green',
    match: [
      ['Proton', 'Positive charge, found in the nucleus'],
      ['Neutron', 'No charge, found in the nucleus'],
      ['Electron', 'Negative charge, orbits the nucleus'],
      ['Alpha particle', '2 protons and 2 neutrons'],
      ['Beta particle', 'Fast electron given out by the nucleus'],
      ['Half-life', 'Time for half of the nuclei to decay']
    ],
    order: [
      { title: 'Rutherford’s gold foil experiment. Put the steps in order.', steps: [
        'Fire alpha particles at a very thin sheet of gold foil',
        'Most of the particles pass straight through',
        'A few are deflected by small angles',
        'A very small number bounce straight back',
        'Conclusion: the atom is mostly empty space with a tiny, dense, positive nucleus'
      ] },
      { title: 'Put the models of the atom in the order they were proposed.', steps: [
        'Dalton: atoms are tiny solid spheres',
        'Thomson: the plum pudding model',
        'Rutherford: the nuclear model',
        'Bohr: electrons in fixed shells'
      ] }
    ],
    tf: [
      ['Isotopes of an element have the same number of protons.', true, 'They have the same number of protons but a different number of neutrons.'],
      ['Gamma radiation is the most ionising.', false, 'Alpha is the most ionising. Gamma is the least ionising but the most penetrating.'],
      ['Alpha particles are stopped by a sheet of paper.', true, 'They are also stopped by a few centimetres of air or by skin.'],
      ['Radioactive decay is random.', true, 'You cannot predict when a particular nucleus will decay, only how many will decay on average.'],
      ['Heating a radioactive source shortens its half-life.', false, 'Half-life is not changed by temperature, pressure or chemical reactions.'],
      ['Most of an atom is empty space.', true, 'Rutherford showed this: most alpha particles passed straight through the gold foil.'],
      ['Nuclear fission joins small nuclei together.', false, 'Fission splits a large nucleus. Fusion joins small nuclei together.'],
      ['After two half-lives, a quarter of the original nuclei are left.', true, '1 → ½ → ¼.']
    ],
    odd: [
      { items: ['Alpha', 'Beta', 'Gamma', 'Ultrasound'], odd: 3, why: 'Ultrasound is a sound wave, not nuclear radiation.' },
      { items: ['Carbon-12', 'Carbon-13', 'Carbon-14', 'Nitrogen-14'], odd: 3, why: 'Nitrogen-14 is a different element. The others are isotopes of carbon.' },
      { items: ['Smoke detectors', 'Medical tracers', 'Sterilising equipment', 'Solar panels'], odd: 3, why: 'Solar panels do not use radioactivity. The others do.' },
      { items: ['Fission', 'Fusion', 'Radioactive decay', 'Burning fuel'], odd: 3, why: 'Burning is a chemical reaction. The others are changes in the nucleus.' }
    ]
  },
  {
    id: 'pressure', name: 'Pressure and fluids', icon: '&#128167;', bg: 'bg-purple',
    match: [
      ['P = F / A', 'Pressure'],
      ['ρ = m / V', 'Density'],
      ['P = ρgh', 'Pressure in a liquid'],
      ['pascal (Pa)', 'Unit of pressure: 1 N/m²'],
      ['Upthrust', 'Upward force from a fluid'],
      ['Hydraulics', 'Using a liquid to pass on pressure']
    ],
    order: [
      { title: 'Measuring the density of an irregular stone. Put the method in order.', steps: [
        'Measure the mass of the stone on a balance',
        'Part-fill a measuring cylinder with water and read the volume',
        'Lower the stone in gently and read the new volume',
        'Volume of the stone = new volume − starting volume',
        'Density = mass ÷ volume'
      ] },
      { title: 'How a hydraulic car jack lifts a car. Put the steps in order.', steps: [
        'A small force pushes down on the small piston',
        'This creates a pressure in the oil',
        'The pressure is passed on equally through the liquid',
        'The same pressure acts on the large piston',
        'The large area gives a large upward force that lifts the car'
      ] }
    ],
    tf: [
      ['Pressure in a liquid increases with depth.', true, 'P = ρgh: the deeper you go, the more liquid is pressing down from above.'],
      ['A sharp knife cuts better because its edge has a larger area.', false, 'A sharp edge has a smaller area, so the same force gives a much bigger pressure.'],
      ['1 Pa is the same as 1 N/m².', true, 'One pascal is a force of one newton on one square metre.'],
      ['An object floats when it is denser than the liquid.', false, 'It floats when it is less dense than the liquid.'],
      ['Liquids are very hard to compress.', true, 'That is why hydraulic machines can pass pressure from one piston to another.'],
      ['Air pressure increases as you climb a mountain.', false, 'It decreases with height because there is less air above you.'],
      ['Pressure in a fluid acts in all directions.', true, 'Water squirts out sideways from holes in a bottle, not just downwards.'],
      ['Snowshoes reduce pressure by spreading your weight over a bigger area.', true, 'Bigger area, smaller pressure, so you do not sink.']
    ],
    odd: [
      { items: ['Camel’s wide feet', 'Snowshoes', 'Tractor tyres', 'Drawing pin point'], odd: 3, why: 'A drawing pin point increases pressure. The others reduce it.' },
      { items: ['pascal', 'N/m²', 'newton', 'kPa'], odd: 2, why: 'The newton is a unit of force. The others are units of pressure.' },
      { items: ['Wood', 'Cork', 'Ice', 'Iron'], odd: 3, why: 'Iron is denser than water, so it sinks. The others float.' },
      { items: ['Depth', 'Density of the liquid', 'g', 'Shape of the container'], odd: 3, why: 'Liquid pressure depends only on ρ, g and h, not on the shape of the container.' }
    ]
  },
  {
    id: 'space', name: 'Astrophysics', icon: '&#128301;', bg: 'bg-blue',
    match: [
      ['Light year', 'Distance light travels in one year'],
      ['Galaxy', 'Billions of stars held together by gravity'],
      ['Orbit', 'Curved path around a bigger object'],
      ['Red giant', 'Large, cool star near the end of its life'],
      ['Big Bang', 'The beginning of the universe'],
      ['Red-shift', 'Light from distant galaxies stretched to longer wavelengths']
    ],
    order: [
      { title: 'The life cycle of a star like the Sun. Put the stages in order.', steps: [
        'Nebula: a cloud of dust and gas',
        'Protostar',
        'Main sequence star',
        'Red giant',
        'White dwarf'
      ] },
      { title: 'Put these in order of size, smallest first.', steps: [
        'Moon', 'Earth', 'Sun', 'Solar System', 'Milky Way galaxy', 'Universe'
      ] }
    ],
    tf: [
      ['A light year is a unit of time.', false, 'It is a unit of distance: how far light travels in one year.'],
      ['The Sun is a star.', true, 'It is a main sequence star, the closest star to Earth.'],
      ['Gravity keeps the planets in orbit around the Sun.', true, 'Gravity provides the force that keeps pulling each planet towards the Sun.'],
      ['Stars produce their energy by nuclear fission.', false, 'Stars use fusion: hydrogen nuclei join to make helium.'],
      ['The Moon gives out its own light.', false, 'The Moon only reflects light from the Sun.'],
      ['Red-shift shows that distant galaxies are moving away from us.', true, 'This is evidence that the universe is expanding, which supports the Big Bang.'],
      ['Planets closer to the Sun take longer to orbit it.', false, 'Closer planets have a shorter orbit and move faster. Mercury takes 88 days.'],
      ['The Sun will eventually become a white dwarf.', true, 'After its red giant stage it will shrink to a white dwarf.']
    ],
    odd: [
      { items: ['Mercury', 'Venus', 'Mars', 'Moon'], odd: 3, why: 'The Moon is a natural satellite. The others are planets.' },
      { items: ['Sun', 'Sirius', 'Polaris', 'Jupiter'], odd: 3, why: 'Jupiter is a planet. The others are stars.' },
      { items: ['Light year', 'Kilometre', 'Astronomical unit', 'Second'], odd: 3, why: 'The second measures time. The others measure distance.' },
      { items: ['Supernova', 'Neutron star', 'Black hole', 'Comet'], odd: 3, why: 'A comet is not a stage in the life of a star.' }
    ]
  },
  {
    id: 'heat', name: 'Heat and thermal energy', icon: '&#128293;', bg: 'bg-pink',
    match: [
      ['Conduction', 'Heat passed on by vibrating particles'],
      ['Convection', 'Heat carried by a moving liquid or gas'],
      ['Radiation', 'Heat carried by infrared waves'],
      ['Q = mcΔT', 'Thermal energy change'],
      ['Specific heat capacity', 'Energy to warm 1 kg by 1 °C'],
      ['Insulator', 'Material that slows down heat transfer']
    ],
    order: [
      { title: 'How a convection current forms in a pan of water. Put the steps in order.', steps: [
        'Water at the bottom of the pan is heated',
        'Its particles spread out, so it becomes less dense',
        'The warm water rises',
        'Cooler, denser water sinks to take its place',
        'A circulating convection current forms'
      ] },
      { title: 'Measuring the specific heat capacity of a metal block. Put the method in order.', steps: [
        'Measure the mass of the block',
        'Put a heater and a thermometer in the block and record the starting temperature',
        'Switch the heater on for a measured time',
        'Record the final temperature and the energy supplied',
        'Calculate c = E ÷ (m × ΔT)'
      ] }
    ],
    tf: [
      ['Metals are good conductors of heat.', true, 'Their free electrons carry energy quickly through the metal.'],
      ['Convection can happen in solids.', false, 'Convection needs the particles to move from place to place, so it only happens in liquids and gases.'],
      ['Heat can travel through a vacuum.', true, 'By radiation (infrared). That is how the Sun’s energy reaches Earth.'],
      ['Dark, matt surfaces are the best emitters of infrared.', true, 'They are also the best absorbers.'],
      ['Hot air rises because it is denser than cold air.', false, 'Hot air rises because it is less dense.'],
      ['Temperature and thermal energy mean the same thing.', false, 'Temperature is how hot something is. Thermal energy also depends on its mass and material.'],
      ['Water has a high specific heat capacity.', true, '4200 J are needed to warm 1 kg of water by 1 °C.'],
      ['Shiny surfaces are good absorbers of radiation.', false, 'Shiny surfaces reflect radiation, so they are poor absorbers.']
    ],
    odd: [
      { items: ['Copper', 'Aluminium', 'Iron', 'Wool'], odd: 3, why: 'Wool is a thermal insulator. The others are good conductors.' },
      { items: ['kelvin', 'degree Celsius', 'degree Fahrenheit', 'joule'], odd: 3, why: 'The joule measures energy. The others measure temperature.' },
      { items: ['Air', 'Water', 'Steam', 'Steel'], odd: 3, why: 'Steel is a solid, so convection cannot happen in it.' },
      { items: ['Vacuum flask', 'Loft insulation', 'Double glazing', 'Radiator'], odd: 3, why: 'A radiator is designed to transfer heat. The others reduce heat transfer.' }
    ]
  }
];
