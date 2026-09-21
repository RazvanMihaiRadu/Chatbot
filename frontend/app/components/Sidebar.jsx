import { useState } from "react";

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h2 className="chatbot-title">Chatbot</h2>
      <a href="/chat/new" className="new-chat-btn">
        + New
      </a>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="sidebar-footer">
      <a href="/profile" className="user-profile">
        <img
          src="https://ui-avatars.com/api/?name=Batman&background=0D0D0D&color=fff&size=40"
          alt="User avatar"
          className="user-avatar"
          width={30}
          height={30}
        />
        <span className="user-name">Batman</span>
      </a>
    </div>
  );
}

function ChatThreadItem({
  id,
  href = "#",
  title = "Untitled chat",
  onDeleteThread = () => {},
}) {
  function handleDeleteClick(event) {
    event.stopPropagation();

    console.log("Delete thread clicked:", {
      id,
      title,
      timestamp: new Date().toISOString(),
    });

    onDeleteThread(id);
  }

  return (
    <li className="chat-thread-item">
      <div className="chat-thread-item-content">
        <a href={href} className="chat-thread-link" aria-label={`Open chat: ${title}`}>
          {title}
        </a>
        <button
          type="button"
          className="chat-thread-delete"
          aria-label={`Delete chat: ${title}`}
          onClick={handleDeleteClick}
        >
          ×
        </button>
      </div>
    </li>
  );
}

function ChatThreadsList({ threads = [], onDeleteThread = () => {} }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredThreads = threads.filter((thread = {}) => {
    const title = String(thread.title ?? "").toLowerCase();
    const query = searchValue.trim().toLowerCase();

    return title.includes(query);
  });

  return (
    <nav className="chat-threads-list" aria-label="Chat threads">
      <input
        type="text"
        className="chat-thread-search"
        placeholder="Search chats..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        aria-label="Search chat threads"
      />
      <ul>
        {filteredThreads.map((thread = {}) => (
          <ChatThreadItem
            key={thread.id ?? `thread-${thread.href ?? "unknown"}`}
            id={thread.id}
            href={thread.href ?? "#"}
            title={thread.title ?? "Untitled chat"}
            onDeleteThread={onDeleteThread}
          />
        ))}
      </ul>
    </nav>
  );
}

export default function Sidebar({ threads = [], onDeleteThread = () => {} }) {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <ChatThreadsList threads={threads} onDeleteThread={onDeleteThread} />
      <SidebarFooter />
    </aside>
  );
}
