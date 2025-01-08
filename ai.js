// Import required libraries
const { HfInference } = require("@huggingface/inference");
const readline = require("readline");
require('dotenv').config(); 

// Initialize the Hugging Face client
const hfToken = process.env.AccessToken; // Replace with your Hugging Face API token
const client = new HfInference(hfToken);

// Conversation history array
let messages = [
  { role: "system", content: "You are a helpful assistant that answers questions politely and clearly." }
];

// Create a readline interface for user interaction
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle chat
async function chat() {
  rl.question("You: ", async (userInput) => {
    // Append user input to conversation history
    messages.push({ role: "user", content: userInput });

    // Request chat completion stream from Hugging Face
    const stream = client.chatCompletionStream({
      model: "Qwen/Qwen2.5-72B-Instruct", // Model name
      messages: messages,                 // Full conversation history
      temperature: 0.7,                   // Controls randomness
      max_tokens: 300,                    // Limits response length
      top_p: 0.9                          // Nucleus sampling
    });

    let assistantResponse = "";
    console.log("Assistant: ");

    // Process the streamed response
    for await (const chunk of stream) {
      if (chunk.choices && chunk.choices.length > 0) {
        const content = chunk.choices[0].delta.content || "";
        assistantResponse += content;
        process.stdout.write(content); // Print the response incrementally
      }
    }

    // Append assistant response to conversation history
    messages.push({ role: "assistant", content: assistantResponse });

    console.log("\n"); // Add a newline for readability
    chat(); // Continue the conversation
  });
}

// Start the chatbot
chat();
