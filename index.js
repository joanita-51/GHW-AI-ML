const openai = require('openai');
require('dotenv').config(); // Load environment variables from .env file

const apiKey = process.env.OPENAI_API_KEY;

async function main() {
  const client = new openai.OpenAI(apiKey)
  const completion = await client.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();