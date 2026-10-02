import React from "react";
import { useParams } from "react-router";
import { ChatInput, ChatMessages } from "../components/Chat.jsx";
import { defaultMessages } from "./home.jsx";

export default function ChatThreadPage() {
  const { threadId } = useParams();
  const [messages, setMessages] = React.useState(defaultMessages);

  const addMessage = (content) => {
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: currentMessages.length + 1, type: "user", content },
    ]);
  };

  return (
    <main className="chat-container">
      <h1 className="chat-page-title">
        Conversation Thread <span className="thread-id-badge">#{threadId}</span>
      </h1>
      <ChatMessages messages={messages} />
      <ChatInput onAddMessage={addMessage} />
    </main>
  );
}