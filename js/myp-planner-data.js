// MYP Physics Topic Reference Data
// Add more topics by following the same structure

const MYP_PLANNER_DATA = {
  strands: [
    {
      id: 'forces',
      name: 'Forces & Motion',
      color: '#1565C0',
      topics: [
        {
          code: 'FM.1',
          title: 'Speed, Distance & Time',
          strand: 'Forces & Motion',
          strandColor: '#1565C0',
          phases: [
            {
              title: 'Core Concepts',
              color: '#1565C0',
              sections: [
                {
                  title: '🎯 Key Concepts',
                  type: 'pills',
                  items: [
                    { text: 'Speed', style: 'pill-blue' },
                    { text: 'Distance', style: 'pill-blue' },
                    { text: 'Time', style: 'pill-green' },
                    { text: 'Average Speed', style: 'pill-purple' },
                    { text: 'Instantaneous Speed', style: 'pill-purple' }
                  ]
                },
                {
                  title: '📐 Formulae',
                  type: 'table',
                  headers: ['Formula', 'Meaning', 'Units'],
                  rows: [
                    ['s = d / t', 'Speed = Distance ÷ Time', 'm/s'],
                    ['d = s × t', 'Distance = Speed × Time', 'm'],
                    ['t = d / s', 'Time = Distance ÷ Speed', 's']
                  ]
                },
                {
                  title: '💡 Why This Matters',
                  type: 'why',
                  content: 'Speed connects to every branch of physics — from kinematics in DP to understanding wave propagation. Students who deeply understand s = d/t find velocity, acceleration, and graphical analysis far easier.'
                },
                {
                  title: '📝 Statement of Inquiry',
                  type: 'soi',
                  content: 'Relationships between measurable quantities allow us to model and predict the motion of objects in our everyday world.'
                }
              ]
            },
            {
              title: 'Inquiry Questions',
              color: '#2D6A4F',
              sections: [
                {
                  title: '❓ Inquiry Questions',
                  type: 'inquiry',
                  groups: [
                    { label: 'Factual', color: '#1565C0', questions: ['What is speed?', 'What units do we use for speed, distance and time?', 'How do we calculate average speed?'] },
                    { label: 'Conceptual', color: '#2D6A4F', questions: ['Why is average speed different from instantaneous speed?', 'How can two objects travel the same distance but have different speeds?'] },
                    { label: 'Debatable', color: '#7B2D8E', questions: ['Is it ever useful to know instantaneous speed rather than average speed?', 'Should speed limits be based on average or instantaneous speed?'] }
                  ]
                }
              ]
            },
            {
              title: 'Assessment & Misconceptions',
              color: '#7B2D8E',
              sections: [
                {
                  title: '📊 Assessment Criteria',
                  type: 'assess',
                  items: [
                    { criterion: 'A', label: 'Knowing & Understanding', desc: 'Students recall the formula s = d/t and apply it to solve problems with correct unit conversions.' },
                    { criterion: 'B', label: 'Inquiring & Designing', desc: 'Students design an experiment to measure the speed of a moving object (e.g., toy car on a ramp).' },
                    { criterion: 'C', label: 'Processing & Evaluating', desc: 'Students collect distance-time data, calculate speed, and evaluate sources of error.' },
                    { criterion: 'D', label: 'Reflecting', desc: 'Students reflect on how speed measurement technology impacts road safety.' }
                  ]
                },
                {
                  title: '⚠️ Common Misconceptions',
                  type: 'misconceptions',
                  items: [
                    { wrong: 'Speed and velocity are the same thing.', right: 'Speed is scalar (magnitude only). Velocity is a vector (magnitude + direction). At MYP level, focus on speed first.' },
                    { wrong: 'A faster object always covers more distance.', right: 'Distance depends on both speed AND time. A slow object moving for a long time can travel further.' },
                    { wrong: 'If something stops, its average speed is zero.', right: 'Average speed uses total distance ÷ total time. Even if an object stops, its average speed over the whole journey is not zero (unless it never moved).' }
                  ]
                }
              ]
            },
            {
              title: 'Resources & Reflection',
              color: '#E65100',
              sections: [
                {
                  title: '📚 Resources',
                  type: 'resources',
                  groups: [
                    { label: 'Textbook', items: ['Pearson MYP Sciences Ch. 3', 'Oxford MYP Physics pp. 44-58'] },
                    { label: 'Digital', items: ['PhET: Moving Man simulation', 'Atul Soral Physicism — Speed simulator', 'YouTube: Veritasium — speed vs velocity'] }
                  ]
                },
                {
                  title: '🪞 Teacher Reflection',
                  type: 'reflection',
                  prompts: [
                    { question: 'Did students grasp the difference between average and instantaneous speed?', hint: 'Check exit ticket responses and class discussion quality.' },
                    { question: 'Were the practical activities effective?', hint: 'Consider timing, equipment availability, and student engagement.' }
                  ]
                }
              ]
            }
          ]
        },
        {
          code: 'FM.2',
          title: 'Acceleration',
          strand: 'Forces & Motion',
          strandColor: '#1565C0',
          phases: [
            {
              title: 'Core Concepts',
              color: '#1565C0',
              sections: [
                { title: '🎯 Key Concepts', type: 'pills', items: [{ text: 'Acceleration', style: 'pill-blue' },{ text: 'Deceleration', style: 'pill-blue' },{ text: 'Velocity', style: 'pill-green' },{ text: 'Change in Speed', style: 'pill-purple' },{ text: 'Uniform Acceleration', style: 'pill-amber' }] },
                { title: '📐 Formulae', type: 'table', headers: ['Formula', 'Meaning', 'Units'], rows: [['a = (v − u) / t', 'Acceleration = Change in velocity ÷ Time', 'm/s²'],['v = u + at', 'Final velocity = Initial velocity + (Acceleration × Time)', 'm/s']] },
                { title: '💡 Why This Matters', type: 'why', content: "Acceleration is the bridge between forces and motion. Without understanding acceleration, Newton's second law (F = ma) cannot be properly taught. This topic directly feeds into DP Theme A: Kinematics." },
                { title: '📝 Statement of Inquiry', type: 'soi', content: 'Changes in motion can be quantified and predicted using mathematical relationships between velocity, time, and acceleration.' }
              ]
            },
            { title: 'Inquiry Questions', color: '#2D6A4F', sections: [{ title: '❓ Inquiry Questions', type: 'inquiry', groups: [{ label: 'Factual', color: '#1565C0', questions: ['What is acceleration?', 'What are the units of acceleration?', 'How is deceleration different from acceleration?'] },{ label: 'Conceptual', color: '#2D6A4F', questions: ['Can an object accelerate while maintaining constant speed?', 'Why does a ball thrown upward decelerate?'] },{ label: 'Debatable', color: '#7B2D8E', questions: ['Is constant acceleration realistic in everyday life?', 'Should car manufacturers prioritise acceleration or top speed?'] }] }] },
            { title: 'Assessment & Misconceptions', color: '#7B2D8E', sections: [{ title: '📊 Assessment Criteria', type: 'assess', items: [{ criterion: 'A', label: 'Knowing & Understanding', desc: 'Students calculate acceleration using a = (v−u)/t and interpret positive/negative values.' },{ criterion: 'B', label: 'Inquiring & Designing', desc: 'Students design an experiment using a ramp and timer to measure acceleration due to gravity.' },{ criterion: 'C', label: 'Processing & Evaluating', desc: 'Students plot velocity-time graphs and calculate acceleration from the gradient.' },{ criterion: 'D', label: 'Reflecting', desc: 'Students discuss how understanding acceleration improves vehicle safety design.' }] },{ title: '⚠️ Common Misconceptions', type: 'misconceptions', items: [{ wrong: 'Acceleration means going fast.', right: 'Acceleration means changing speed. A slow object speeding up is accelerating. A fast object at constant speed has zero acceleration.' },{ wrong: 'Negative acceleration means slowing down.', right: 'Negative acceleration means accelerating in the negative direction. It could mean speeding up if already moving negatively.' },{ wrong: 'An object at rest has no acceleration.', right: 'An object at rest can have acceleration — e.g., a ball at its highest point has acceleration due to gravity even though its instantaneous velocity is zero.' }] }] },
            { title: 'Resources & Reflection', color: '#E65100', sections: [{ title: '📚 Resources', type: 'resources', groups: [{ label: 'Textbook', items: ['Pearson MYP Sciences Ch. 4', 'Oxford MYP Physics pp. 60-75'] },{ label: 'Digital', items: ['PhET: Forces and Motion Basics', 'Atul Soral Physicism — Acceleration simulator'] }] },{ title: '🪞 Teacher Reflection', type: 'reflection', prompts: [{ question: 'Could students distinguish between velocity and acceleration?', hint: 'Try asking: "Is a car going 100 km/h accelerating?" and see their responses.' },{ question: 'Was the v-t graph activity successful?', hint: 'Check if students could extract acceleration from the gradient.' }] }] }
          ]
        },
        {
          code: 'FM.3',
          title: "Forces & Newton's Laws",
          strand: 'Forces & Motion',
          strandColor: '#1565C0',
          phases: [
            { title: 'Core Concepts', color: '#1565C0', sections: [{ title: '🎯 Key Concepts', type: 'pills', items: [{ text: 'Force', style: 'pill-blue' },{ text: "Newton's 1st Law", style: 'pill-green' },{ text: "Newton's 2nd Law", style: 'pill-green' },{ text: "Newton's 3rd Law", style: 'pill-green' },{ text: 'Net Force', style: 'pill-purple' },{ text: 'Friction', style: 'pill-amber' },{ text: 'Gravity', style: 'pill-amber' }] },{ title: '📐 Formulae', type: 'table', headers: ['Formula', 'Meaning', 'Units'], rows: [['F = m × a', 'Force = Mass × Acceleration', 'N (Newtons)'],['W = m × g', 'Weight = Mass × Gravitational field strength', 'N'],['g = 9.8 m/s²', 'Gravitational field strength on Earth', 'm/s²']] },{ title: '📝 Statement of Inquiry', type: 'soi', content: 'Forces govern all interactions in the physical world — understanding them allows us to predict, control, and design systems that improve human life.' }] },
            { title: 'Inquiry Questions', color: '#2D6A4F', sections: [{ title: '❓ Inquiry Questions', type: 'inquiry', groups: [{ label: 'Factual', color: '#1565C0', questions: ['What is a force?', 'What are the units of force?', "State Newton's three laws of motion."] },{ label: 'Conceptual', color: '#2D6A4F', questions: ['Why do objects in space keep moving without any force?', 'How does mass affect acceleration if force stays constant?'] },{ label: 'Debatable', color: '#7B2D8E', questions: ['Did Newton "discover" these laws or "invent" them?', "Are Newton's laws always accurate?"] }] }] },
            { title: 'Assessment & Misconceptions', color: '#7B2D8E', sections: [{ title: '⚠️ Common Misconceptions', type: 'misconceptions', items: [{ wrong: 'An object needs a force to keep moving.', right: "Newton's 1st Law: an object in motion stays in motion unless acted on by an unbalanced force. No force is needed to maintain constant velocity." },{ wrong: 'Heavier objects fall faster.', right: 'In the absence of air resistance, all objects accelerate at the same rate (g = 9.8 m/s²) regardless of mass.' },{ wrong: 'Action and reaction forces cancel out.', right: "Newton's 3rd Law pairs act on DIFFERENT objects, so they don't cancel. They only cancel when acting on the SAME object." }] }] },
            { title: 'Resources & Reflection', color: '#E65100', sections: [{ title: '📚 Resources', type: 'resources', groups: [{ label: 'Textbook', items: ['Pearson MYP Sciences Ch. 5-6', 'Oxford MYP Physics pp. 78-110'] },{ label: 'Digital', items: ['PhET: Forces and Motion', 'Atul Soral Physicism — Forces simulator', 'Atul Soral Physicism — Gravitational Force simulator'] }] },{ title: '🪞 Teacher Reflection', type: 'reflection', prompts: [{ question: 'Could students apply F = ma to real problems?', hint: 'Test with a multi-step problem involving friction.' }] }] }
          ]
        }
      ]
    },
    {
      id: 'energy',
      name: 'Energy',
      color: '#2D6A4F',
      topics: [
        {
          code: 'EN.1',
          title: 'Forms & Transfers of Energy',
          strand: 'Energy',
          strandColor: '#2D6A4F',
          phases: [
            { title: 'Core Concepts', color: '#2D6A4F', sections: [{ title: '🎯 Key Concepts', type: 'pills', items: [{ text: 'Kinetic Energy', style: 'pill-blue' },{ text: 'Potential Energy', style: 'pill-green' },{ text: 'Thermal Energy', style: 'pill-amber' },{ text: 'Conservation of Energy', style: 'pill-purple' },{ text: 'Energy Transfer', style: 'pill-teal' }] },{ title: '📐 Formulae', type: 'table', headers: ['Formula', 'Meaning', 'Units'], rows: [['KE = ½mv²', 'Kinetic energy = ½ × mass × speed²', 'J (Joules)'],['GPE = mgh', 'Gravitational PE = mass × g × height', 'J'],['W = F × d', 'Work done = Force × distance', 'J']] },{ title: '📝 Statement of Inquiry', type: 'soi', content: 'Energy cannot be created or destroyed — only transformed. Understanding these transformations reveals the hidden mechanics behind every process in nature.' }] },
            { title: 'Inquiry Questions', color: '#1565C0', sections: [{ title: '❓ Inquiry Questions', type: 'inquiry', groups: [{ label: 'Factual', color: '#1565C0', questions: ['What are the main forms of energy?', 'What is the law of conservation of energy?'] },{ label: 'Conceptual', color: '#2D6A4F', questions: ['Where does energy "go" when a ball stops bouncing?', 'Can energy ever be truly lost?'] },{ label: 'Debatable', color: '#7B2D8E', questions: ['Should we say "energy is used" or "energy is transferred"?', 'Is an "energy crisis" really about running out of energy?'] }] }] },
            { title: 'Assessment & Misconceptions', color: '#7B2D8E', sections: [{ title: '⚠️ Common Misconceptions', type: 'misconceptions', items: [{ wrong: 'Energy is used up or consumed.', right: 'Energy is never consumed — it is transferred or transformed. What we "use" is useful energy, which dissipates as thermal energy.' },{ wrong: 'Only moving things have energy.', right: 'Stationary objects can have gravitational potential energy, chemical energy, nuclear energy, etc.' }] }] },
            { title: 'Resources & Reflection', color: '#E65100', sections: [{ title: '📚 Resources', type: 'resources', groups: [{ label: 'Textbook', items: ['Pearson MYP Sciences Ch. 8-9'] },{ label: 'Digital', items: ['PhET: Energy Skate Park', 'Atul Soral Physicism — Energy simulator'] }] },{ title: '🪞 Teacher Reflection', type: 'reflection', prompts: [{ question: 'Did students understand energy conservation vs energy dissipation?', hint: 'Ask: "Where did the energy go when the ball stopped?"' }] }] }
          ]
        }
      ]
    },
    {
      id: 'waves',
      name: 'Waves',
      color: '#7B2D8E',
      topics: [
        {
          code: 'WV.1',
          title: 'Properties of Waves',
          strand: 'Waves',
          strandColor: '#7B2D8E',
          phases: [
            { title: 'Core Concepts', color: '#7B2D8E', sections: [{ title: '🎯 Key Concepts', type: 'pills', items: [{ text: 'Wavelength', style: 'pill-purple' },{ text: 'Frequency', style: 'pill-purple' },{ text: 'Amplitude', style: 'pill-blue' },{ text: 'Transverse', style: 'pill-green' },{ text: 'Longitudinal', style: 'pill-green' },{ text: 'Wave Speed', style: 'pill-amber' }] },{ title: '📐 Formulae', type: 'table', headers: ['Formula', 'Meaning', 'Units'], rows: [['v = f × λ', 'Wave speed = Frequency × Wavelength', 'm/s'],['T = 1 / f', 'Period = 1 ÷ Frequency', 's'],['f = 1 / T', 'Frequency = 1 ÷ Period', 'Hz']] },{ title: '📝 Statement of Inquiry', type: 'soi', content: 'Waves transfer energy without transferring matter, connecting distant points in space and enabling communication, music, and our perception of the world.' }] },
            { title: 'Inquiry Questions', color: '#1565C0', sections: [{ title: '❓ Inquiry Questions', type: 'inquiry', groups: [{ label: 'Factual', color: '#1565C0', questions: ['What is a wave?', 'What is the difference between transverse and longitudinal waves?'] },{ label: 'Conceptual', color: '#2D6A4F', questions: ['How can waves carry energy without carrying matter?', 'Why does sound need a medium but light does not?'] },{ label: 'Debatable', color: '#7B2D8E', questions: ['Are ocean waves truly transverse?', 'Will we ever be able to see sound waves?'] }] }] },
            { title: 'Assessment & Misconceptions', color: '#E65100', sections: [{ title: '⚠️ Common Misconceptions', type: 'misconceptions', items: [{ wrong: 'Waves carry matter from one place to another.', right: 'Waves transfer energy, not matter. The medium oscillates in place — like a Mexican wave in a stadium.' },{ wrong: 'Louder sounds travel faster.', right: 'Loudness (amplitude) does not affect wave speed. Speed depends on the medium.' }] }] },
            { title: 'Resources & Reflection', color: '#2D6A4F', sections: [{ title: '📚 Resources', type: 'resources', groups: [{ label: 'Digital', items: ['PhET: Wave on a String', 'Atul Soral Physicism — Wave simulator'] }] },{ title: '🪞 Teacher Reflection', type: 'reflection', prompts: [{ question: 'Could students distinguish transverse from longitudinal using real examples?', hint: 'Try: slinky demo for both types.' }] }] }
          ]
        }
      ]
    }
  ]
};
