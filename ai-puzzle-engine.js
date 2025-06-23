export async function generateAIQuestions(topic, type, count, apiKey) {
  const prompt = `Create ${count} ${type} physics puzzle questions on "${topic}". 
Each question should be JSON like this:
{ "q": "...", "choices": [...], "answer": "..." }.
Only return a JSON array of objects, nothing else.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  const text = data.choices[0].message.content;
  try {
    return JSON.parse(text);
  } catch {
    console.error("Failed to parse AI response:", text);
    alert("AI response could not be parsed. Try again.");
    return [];
  }
}
