// src/Chat.js
import React, { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
import './App.css'

function App() {
  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState(false);

  const handleSend = async (messageText) => {
    setTypingStatus(true);

    const userMessage = {
      content: messageText,
      sender: "user",
      direction: "outgoing",
    };
    setMessages([...messages, userMessage]);

    // Call the GPT-3.5 API
    const gptMessage = await getGPTResponse(messageText);

    const botMessage = {
      content: gptMessage,
      sender: "gpt-3.5",
      direction: "incoming",
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setTypingStatus(false);
  };

  const getGPTResponse = async (messageText) => {
    const API_KEY = "YOUR_OPENAI_API_KEY";
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: messageText },
      ],
    };

    try {
      const response = await axios.post(apiUrl, data, { headers });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching GPT-3.5 response:", error);
      return "Sorry, I couldn't process that. Please try again.";
    }
  };

  return (
    <div style={{ height: "500px", width: "500px", }}>
      <h2>Chatbot with GPT-3.5</h2>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            {typingStatus && <TypingIndicator content="chatgpt is typing" />}
            {messages.map((message, index) => (
              <Message
                key={index}
                model={{
                  message: message.content,
                  sentTime: "just now",
                  sender: message.sender,
                  direction: message.direction,
                }}
              />
            ))}
          </MessageList>
          <MessageInput placeholder="Type a message..." onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default App;

