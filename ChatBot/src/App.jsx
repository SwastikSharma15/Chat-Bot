import { useState, useRef, useEffect } from "react";
import { ChatInput } from "./Components/ChatInput";
import ChatMessages from "./Components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    { message: "can you get me todays date?", sender: "user", id: "id3" },
    { message: "Today is September 27", sender: "robot", id: "id4" },
  ]);

  const [isBotTyping, setIsBotTyping] = useState(false);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} isBotTyping={isBotTyping} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        setIsBotTyping={setIsBotTyping}
      />
    </div>
  );
}

export default App;
