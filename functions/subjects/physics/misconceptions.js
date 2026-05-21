module.exports = {
  kinematics: [
    {
      pattern: "Confusing velocity with acceleration",
      distractorForms: ["Constant velocity means constant acceleration", "An object momentarily at rest has zero acceleration"],
      correctionLogic: "Explain that acceleration is the rate of change of velocity, not the velocity itself.",
      relatedCommandTerms: ["Identify", "Explain", "Calculate"]
    },
    {
      pattern: "Assuming a force is needed to keep an object moving",
      distractorForms: ["An object will slow down unless a force is applied", "Force is proportional to velocity"],
      correctionLogic: "Reference Newton's First Law: an object in motion stays in motion with constant velocity unless acted upon by a net external force.",
      relatedCommandTerms: ["State", "Describe"]
    }
  ],
  energy: [
    {
      pattern: "Energy is 'used up' or destroyed",
      distractorForms: ["Energy is lost to the environment and disappears", "The total energy of the system decreases over time"],
      correctionLogic: "Reference the Principle of Conservation of Energy: energy is transferred or transformed, never destroyed.",
      relatedCommandTerms: ["Evaluate", "Explain"]
    }
  ],
  forces: [
    {
      pattern: "Action-reaction pairs act on the same object",
      distractorForms: ["Normal force and gravity are an action-reaction pair", "The forces cancel out so the object doesn't move"],
      correctionLogic: "Clarify Newton's Third Law: action-reaction force pairs must act on two different interacting objects.",
      relatedCommandTerms: ["Identify", "Discuss"]
    }
  ]
};
