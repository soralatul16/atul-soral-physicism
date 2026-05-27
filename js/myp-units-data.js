// MYP Physics Unit Plans Data
// Each topic has year-level breakdowns with lesson plans

const MYP_UNITS_DATA = {
  'FM.1': {
    title: 'Speed, Distance & Time',
    years: {
      'MYP 1': {
        objective: 'Understand that speed describes how fast something moves and use s = d/t for simple calculations.',
        hours: 6,
        lessons: [
          { num: 1, title: 'What is Speed?', duration: '60 min', phase: 'Introduce', phaseColor: '#1565C0', objective: 'Define speed and identify fast vs slow in everyday contexts.', activities: ['Brainstorm: fastest things students know', 'Video: animals and vehicles speed comparison', 'Class discussion: how do we measure "fast"?'], resources: 'Whiteboard, video clips, speed cards', experiment: null, simulation: null, differentiation: { support: 'Provide a word bank with key terms and units.', extend: 'Research the fastest animal, vehicle, and natural phenomenon.' } },
          { num: 2, title: 'Measuring Speed', duration: '60 min', phase: 'Explore', phaseColor: '#2D6A4F', objective: 'Use s = d/t to calculate speed from measured distance and time.', activities: ['Demo: measure distance with metre ruler, time with stopwatch', 'Students calculate speed of a toy car on the desk', 'Worksheet: 5 basic s = d/t problems'], resources: 'Metre rulers, stopwatches, toy cars, worksheet', experiment: { title: 'Speed of a Toy Car', steps: ['Mark a 2m track on the floor.', 'Release a toy car and start the stopwatch.', 'Record the time to travel 2m.', 'Calculate: speed = 2m ÷ time.', 'Repeat 3 times and find the average.'] }, simulation: null, differentiation: { support: 'Pre-fill the formula and give a worked example.', extend: 'Predict how speed changes on a slope vs flat surface.' } },
          { num: 3, title: 'Units & Conversions', duration: '60 min', phase: 'Develop', phaseColor: '#7B2D8E', objective: 'Convert between m/s and km/h and solve multi-step speed problems.', activities: ['Teach conversion: ×3.6 to go from m/s to km/h', 'Practice problems with real-world contexts (cars, athletes, planes)', 'Exit ticket: 3 conversion questions'], resources: 'Conversion chart, practice worksheet', experiment: null, simulation: { title: 'Speed Converter', description: 'Use the Atul Soral Physicism speed simulator to visualise different speeds.' }, differentiation: { support: 'Give the conversion factor and a step-by-step method.', extend: 'Convert between m/s, km/h, and mph. Include knots for aviation.' } }
        ]
      },
      'MYP 2': {
        objective: 'Distinguish between average and instantaneous speed. Interpret distance-time graphs.',
        hours: 6,
        lessons: [
          { num: 1, title: 'Average vs Instantaneous Speed', duration: '60 min', phase: 'Introduce', phaseColor: '#1565C0', objective: 'Explain the difference between average and instantaneous speed with real examples.', activities: ['GPS speedometer demo vs trip average calculation', 'Car journey scenario: city driving vs motorway', 'Think-pair-share: when does average speed matter?'], resources: 'GPS speed app, journey scenario worksheet', experiment: null, simulation: null, differentiation: { support: 'Use a visual journey map with marked segments.', extend: 'Calculate average speed for a multi-leg journey with rest stops.' } },
          { num: 2, title: 'Distance-Time Graphs', duration: '60 min', phase: 'Develop', phaseColor: '#7B2D8E', objective: 'Draw and interpret distance-time graphs. Identify stationary, constant speed, and changing speed.', activities: ['Teacher-led graph drawing on board', 'Students match journey descriptions to graphs', 'Plot data from a walking experiment'], resources: 'Graph paper, rulers, walking experiment data', experiment: { title: 'Walking at Different Speeds', steps: ['Mark distances at 0m, 5m, 10m, 15m, 20m.', 'One student walks slowly, another walks fast.', 'Time each student at every 5m mark.', 'Plot both journeys on the same d-t graph.', 'Compare the gradients.'] }, simulation: null, differentiation: { support: 'Provide pre-drawn axes and guide the plotting.', extend: 'Interpret graphs with curved sections (acceleration).' } }
        ]
      },
      'MYP 3': {
        objective: 'Calculate speed from distance-time graph gradients. Solve complex multi-stage journey problems.',
        hours: 5,
        lessons: [
          { num: 1, title: 'Gradient = Speed', duration: '60 min', phase: 'Develop', phaseColor: '#7B2D8E', objective: 'Calculate speed from the gradient of a distance-time graph.', activities: ['Review gradient = rise/run from maths', 'Apply to d-t graphs: gradient = distance/time = speed', '5 practice graphs with gradient calculations'], resources: 'Printed graphs, rulers, calculators', experiment: null, simulation: null, differentiation: { support: 'Highlight the triangle on the graph for rise and run.', extend: 'Handle graphs where the line is not straight (average speed over intervals).' } }
        ]
      }
    }
  },
  'FM.2': {
    title: 'Acceleration',
    years: {
      'MYP 2': {
        objective: 'Understand that acceleration is a change in speed over time.',
        hours: 4,
        lessons: [
          { num: 1, title: 'What is Acceleration?', duration: '60 min', phase: 'Introduce', phaseColor: '#1565C0', objective: 'Define acceleration as the rate of change of velocity.', activities: ['Video: drag race start — what happens to speed?', 'Introduce a = (v−u)/t with worked example', 'Students calculate acceleration for 3 scenarios'], resources: 'Video, whiteboard, worksheet', experiment: null, simulation: null, differentiation: { support: 'Give the formula with labelled variables and a number-substitution scaffold.', extend: 'Include deceleration (negative acceleration) problems.' } },
          { num: 2, title: 'Measuring Acceleration', duration: '60 min', phase: 'Explore', phaseColor: '#2D6A4F', objective: 'Measure acceleration of a trolley on a ramp.', activities: ['Set up ramp with trolley and two light gates', 'Record initial and final speeds, and time between gates', 'Calculate acceleration using a = (v−u)/t'], resources: 'Ramp, trolley, light gates (or stopwatch + ruler)', experiment: { title: 'Trolley on a Ramp', steps: ['Set up a ramp at a gentle angle.', 'Place two markers 50cm apart on the ramp.', 'Release the trolley from the top.', 'Measure time to pass each marker.', 'Calculate speed at each marker and then acceleration.'] }, simulation: { title: 'Acceleration Simulator', description: 'Use Atul Soral Physicism to visualise how changing force affects acceleration.' }, differentiation: { support: 'Provide a data table template and formula reminder.', extend: 'Investigate how ramp angle affects acceleration. Plot a graph.' } }
        ]
      },
      'MYP 3': {
        objective: 'Interpret velocity-time graphs. Calculate acceleration from gradients and distance from area under the graph.',
        hours: 5,
        lessons: [
          { num: 1, title: 'Velocity-Time Graphs', duration: '60 min', phase: 'Develop', phaseColor: '#7B2D8E', objective: 'Draw and interpret v-t graphs for uniform acceleration.', activities: ['Teacher-led v-t graph construction', 'Identify: gradient = acceleration, flat = constant speed, area = distance', 'Practice: match descriptions to v-t graph shapes'], resources: 'Graph paper, printed graph templates', experiment: null, simulation: null, differentiation: { support: 'Colour-code gradient (acceleration) and area (distance) on the graph.', extend: 'Calculate area under the graph for non-uniform acceleration using triangles + rectangles.' } }
        ]
      }
    }
  },
  'FM.3': {
    title: "Forces & Newton's Laws",
    years: {
      'MYP 3': {
        objective: "Identify forces, draw free body diagrams, and apply Newton's three laws qualitatively.",
        hours: 8,
        lessons: [
          { num: 1, title: 'What is a Force?', duration: '60 min', phase: 'Introduce', phaseColor: '#1565C0', objective: 'Define force, identify contact and non-contact forces.', activities: ['Brainstorm: push, pull, twist — what counts as a force?', 'Classify forces: gravity, friction, air resistance, tension, normal, magnetic', 'Draw force arrows on diagrams'], resources: 'Force cards, magnets, spring scales', experiment: null, simulation: null, differentiation: { support: 'Provide a forces reference sheet with icons.', extend: 'Research: what is the strong nuclear force?' } },
          { num: 2, title: "Newton's First Law", duration: '60 min', phase: 'Develop', phaseColor: '#2D6A4F', objective: 'Explain inertia and balanced/unbalanced forces.', activities: ['Tablecloth trick demo', 'Coin-on-card flick demo', 'Discussion: why do passengers lurch forward when a bus brakes?', 'Worksheet: balanced vs unbalanced force diagrams'], resources: 'Tablecloth, smooth surface, coins, cards', experiment: null, simulation: null, differentiation: { support: "Provide a fill-in-the-blank summary of Newton's 1st Law.", extend: "Explain: if forces are balanced on a moving object, why doesn't it stop?" } },
          { num: 3, title: "Newton's Second Law: F = ma", duration: '60 min', phase: 'Develop', phaseColor: '#7B2D8E', objective: 'Use F = ma to calculate force, mass, or acceleration.', activities: ['Introduce F = ma with examples', 'Guided practice: 5 problems', 'Challenge: rearrange for m and a'], resources: 'Whiteboard, worksheet, calculators', experiment: { title: 'Investigating F = ma', steps: ['Set up a trolley on a flat track with a pulley and hanging masses.', 'Keep total mass constant, vary the hanging mass (force).', 'Measure acceleration using a timer/light gates.', 'Plot F vs a graph — expect a straight line through the origin.'] }, simulation: { title: 'F = ma Explorer', description: 'Use Atul Soral Physicism Forces simulator to see how force and mass affect acceleration.' }, differentiation: { support: 'Use a formula triangle (F, m, a) for rearranging.', extend: 'Solve problems involving friction: net force = applied force − friction.' } }
        ]
      }
    }
  },
  'EN.1': {
    title: 'Forms & Transfers of Energy',
    years: {
      'MYP 1': {
        objective: 'Identify different forms of energy and describe energy transfers in everyday situations.',
        hours: 5,
        lessons: [
          { num: 1, title: 'Forms of Energy', duration: '60 min', phase: 'Introduce', phaseColor: '#2D6A4F', objective: 'Name and describe the main forms of energy.', activities: ['Energy scavenger hunt: find examples of KE, GPE, thermal, light, sound, chemical, electrical, nuclear', 'Classify into "stores" and "transfers"', 'Create an energy forms poster'], resources: 'Poster paper, coloured pens, energy cards', experiment: null, simulation: null, differentiation: { support: 'Provide a list of energy types with definitions.', extend: 'Rank the energy types by their importance to modern society.' } }
        ]
      }
    }
  },
  'WV.1': {
    title: 'Properties of Waves',
    years: {
      'MYP 2': {
        objective: 'Describe wave properties (wavelength, frequency, amplitude) and distinguish transverse from longitudinal.',
        hours: 6,
        lessons: [
          { num: 1, title: 'What is a Wave?', duration: '60 min', phase: 'Introduce', phaseColor: '#7B2D8E', objective: 'Define a wave as a disturbance that transfers energy without transferring matter.', activities: ['Slinky demo: transverse and longitudinal', 'Mexican wave activity (whole class)', 'Label wave diagram: crest, trough, wavelength, amplitude'], resources: 'Slinky, rope, wave diagram handout', experiment: null, simulation: { title: 'Wave on a String', description: 'Use Atul Soral Physicism wave simulator to explore wavelength, frequency, and amplitude.' }, differentiation: { support: 'Provide a pre-labelled wave diagram as reference.', extend: 'Research: what are standing waves?' } }
        ]
      }
    }
  }
};
