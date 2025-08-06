import { useRef, useEffect } from "react";
import RobotProfileImage from "../assets/robot.png";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function ChatMessages({ chatMessages, isBotTyping }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
        />
      ))}
      {isBotTyping && (
        <div className="chat-message-robot">
          <img src={RobotProfileImage} className="chat-message-profile" />
          <div className="chat-message-text">
            <span className="spinner"></span>
            <span className="typing-text">Bot is typing...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatMessages;