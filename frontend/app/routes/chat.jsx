import { Link, useParams } from "react-router";

function formatThreadTitle(threadId = "chat") {
  return threadId
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

export default function ChatThreadPage() {
  const { threadId } = useParams();
  const title = formatThreadTitle(threadId);

  return (
    <main className="page-shell">
      <h1>{title}</h1>
      <p>
        This thread is ready for a real conversation view, loader data, or saved
        chat history.
      </p>
      <Link to="/">Back to home</Link>
    </main>
  );
}
