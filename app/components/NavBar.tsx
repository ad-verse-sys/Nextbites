import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link href="/" className="brand">🍴 NextBites</Link>
      <div className="nav-links">
        <Link href="/">Recipes</Link>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </nav>
  );
}