import { Link } from "react-router";

export default function ProfilePage() {
  return (
    <main className="page-shell">
      <h1>Batman</h1>
      <p>
        This is your profile view. You can add settings, preferences, or account
        details for the chatbot app here.
      </p>
      <Link to="/">Back to home</Link>
    </main>
  );
}
