const puzzleBank = {

"Forces and Motion": {

A: {   // Criterion A (Knowing & Understanding)

formula: [
{ q:"State Newton’s second law.", choices:["F=ma","v=u+at"], answer:"F=ma", strand:"i" },
{ q:"Unit of force?", choices:["Newton","Joule"], answer:"Newton", strand:"i" },
{ q:"Momentum formula?", choices:["p=mv","E=mc²"], answer:"p=mv", strand:"ii" },
{ q:"Acceleration formula?", choices:["a=(v-u)/t","F=ma"], answer:"a=(v-u)/t", strand:"ii" },
{ q:"Weight formula?", choices:["W=mg","F=ma"], answer:"W=mg", strand:"ii" }
],

truefalse: [
{ q:"Force is a vector.", choices:["True","False"], answer:"True", strand:"i" },
{ q:"Mass affects inertia.", choices:["True","False"], answer:"True", strand:"ii" }
]

},

B: {   // Criterion B (Inquiring & Designing)

logic: [
{ q:"Which variable must be controlled in acceleration experiment?", choices:["Mass","Time"], answer:"Mass", strand:"i" },
{ q:"Best method to measure acceleration?", choices:["Ticker tape","Thermometer"], answer:"Ticker tape", strand:"ii" }
]

},

C: {   // Criterion C (Processing & Evaluating)

calculation: [
{ q:"Force on 2kg mass with acceleration 3?", choices:["6N","5N"], answer:"6N", strand:"i" },
{ q:"Momentum of 2kg moving at 4m/s?", choices:["8","6"], answer:"8", strand:"ii" }
]

},

D: {   // Criterion D (Reflecting on impacts)

analysis: [
{ q:"Why are seatbelts important?", choices:["Reduce force","Increase force"], answer:"Reduce force", strand:"i" },
{ q:"Impact of friction in daily life?", choices:["Useful & harmful","Only harmful"], answer:"Useful & harmful", strand:"ii" }
]

}

}
};
// 🔥 AUTO-GENERATE MORE QUESTIONS

for(let i=1;i<=50;i++){

puzzleBank["Forces and Motion"].A.formula.push({
  q:`Calculate force for case ${i}`,
  choices:["10N","20N","30N"],
  answer:"20N",
  strand:"ii"
});

}

