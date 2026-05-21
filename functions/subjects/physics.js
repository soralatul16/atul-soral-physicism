const misconceptions = require('./physics/misconceptions');

module.exports = {
  subjectName: "Physics",
  terminology: {
    coreConceptKey: "physicsConcepts",
    defaultConcepts: ["Kinematics", "Dynamics", "Energy", "Waves", "Electromagnetism"],
    experimentalDesign: "Requires explicitly identifying independent variables, dependent variables, and multiple control variables. Emphasize measurement techniques and specific physics apparatus (e.g. photogates, voltmeters)."
  },
  graphLogic: {
    axes: "Must always include units in the format 'Quantity / Unit' (e.g., 'Force / N').",
    relationships: "Emphasize linear vs non-linear, gradients (slope meaning), and area under the curve where physically relevant."
  },
  mediaIntentStyles: {
    graph: "Standard Cartesian plot, scatter plots with lines of best fit.",
    diagram: "Free-body diagrams, circuit schematics, ray diagrams.",
    simulation: "Interactive physics simulations (e.g., PhET style)."
  },
  getMisconceptions: function(topic) {
    const key = Object.keys(misconceptions).find(k => topic.toLowerCase().includes(k));
    return key ? misconceptions[key] : [];
  }
};
