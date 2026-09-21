import { useState } from "react";

export function Message({ type = "bot", children }) {
  const typeClass = type === "user" ? "user-message" : "bot-message";

  return (
    <div className={`message ${typeClass}`}>
      <div className="message-content">{children}</div>
    </div>
  );
}

export function ChatMessages({ messages = [] }) {
  return (
    <div className="chat-messages">
      {messages.map((message = {}, index) => (
        <Message
          key={message.id ?? `message-${index}`}
          type={message.type ?? "bot"}
        >
          {message.content ?? ""}
        </Message>
      ))}
    </div>
  );
}

export function ChatInput({ onAddMessage = () => {} }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const messageText = (formData.get("message") ?? "").toString().trim();

    if (!messageText) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onAddMessage(messageText);
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="chat-input-container">
      <form className="chat-input-wrapper" onSubmit={handleSubmit}>
        <textarea
          className="chat-input"
          name="message"
          placeholder="Type your message here..."
          rows="1"
        />
        <button className="send-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
