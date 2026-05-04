const DB = {
  papers: [
    {
      id: "paper1",
      unit: "forces",
      topic: "newton-laws",
      title: "Newton Laws Assessment",

      scenario: "A car accelerates on a straight road...",

      content: [
        {type:"image", src:"https://example.com/image.png"},
        {type:"video", src:"https://www.youtube.com/embed/..."},
        {type:"text", value:"Observe the situation carefully"}
      ],

      questions: [
        {
          type:"mcq",
          question:"What law is applied?",
          options:["1st","2nd","3rd","None"],
          answer:"2nd",
          marks:1,
          criteria:"A"
        },
        {
          type:"text",
          question:"Explain why acceleration occurs.",
          marks:3,
          criteria:"C"
        }
      ]
    }
  ]
};
