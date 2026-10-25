import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <div className="not-found-card">
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link href="/" className="primary-btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
