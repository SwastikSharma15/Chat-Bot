import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages, setIsBotTyping }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };

    const newChatMessages = [...chatMessages, userMessage];
    setChatMessages(newChatMessages);
    setInputText("");
    setIsBotTyping(true);

    const response = Chatbot.getResponse(inputText);

    setTimeout(() => {
      const botMessage = {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      };
      setChatMessages((prev) => [...prev, botMessage]);
      setIsBotTyping(false);
    }, 1000);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}