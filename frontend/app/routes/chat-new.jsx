import React from "react";
import { ChatInput, ChatMessages } from "../components/Chat.jsx";

export default function NewChatPage() {
  const [messages, setMessages] = React.useState([]);

  const addMessage = (content) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: currentMessages.length + 1, type: "user", content },
    ]);
  };

  return (
    <main className="chat-container">
      <h1 className="chat-page-title">Start a new conversation</h1>
      <ChatMessages messages={messages} />
      <ChatInput onAddMessage={addMessage} />
    </main>
  );
}
