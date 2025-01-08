# Playing With AI - Console Based Chatbot

This repository contains a simple console-based chatbot application that interacts with AI models through the Hugging Face Inference API. The project demonstrates how to use an access token for authentication and stream AI responses in real-time.

## Overview

The goal of this project is to:
- Experiment with Hugging Face's **Inference API**.
- Understand how chat models like GPT or other transformers interact through an API.
- Securely handle API tokens via environment variables.
- Create a basic console-based chatbot to generate AI responses.

## Features

- **Real-time Streaming**: Streams AI responses using the Hugging Face API.
- **Token-based Authentication**: Securely loads the API access token from an `.env` file.
- **Console-based Interaction**: A simple terminal-based interface to chat with the AI.

## How It Works

1. **Access Token**:
   - The Hugging Face Inference API requires an **access token** for authentication. This token is linked to your Hugging Face account.
   - The token is securely stored in a `.env` file and accessed in the code using `process.env`.

2. **Model Interaction**:
   - The chatbot interacts with the model (e.g., `Qwen/Qwen2.5-72B-Instruct` or another Hugging Face-supported model) via the `chatCompletionStream` function.
   - The AI generates responses based on the conversation history provided.

3. **Streaming Responses**:
   - The AI’s responses are streamed in chunks to provide real-time interaction.

## Installation

To get started with this project, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/Bishal1030/Playing-With-AI--console-based.git
   cd Playing-With-AI--console-based
