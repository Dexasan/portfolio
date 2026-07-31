import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found shell">
      <p className="eyebrow">404 / Route not found</p>
      <h1>This path ends here.</h1>
      <p>The project may have moved, or the URL may be incomplete.</p>
      <Link className="button button-dark" href="/">Return home</Link>
    </div>
  );
}
