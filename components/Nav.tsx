"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  if (path === "/cv" || path === "/deck") return null;
  return (
    <header className="masthead shell">
      <Link href="/" className="wordmark" aria-label="Sandesh Chapagain, home">
        <span className="asterisk" aria-hidden="true">
          ✳
        </span>
        <span>
          SANDESH
          <br />
          CHAPAGAIN<span className="wordmark-dot">.</span>
        </span>
      </Link>
      <p className="masthead-note">
        Independent builder.
        <br />
        Chitwan → Rome.
      </p>
      <nav aria-label="Primary navigation">
        <Link
          href="/work"
          aria-current={path.startsWith("/work") ? "page" : undefined}
        >
          The work <sup>12</sup>
        </Link>
        <Link
          href="/about"
          aria-current={path === "/about" ? "page" : undefined}
        >
          The person
        </Link>
        <a href="mailto:sendmailtodex@gmail.com" className="nav-contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
