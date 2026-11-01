"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const path = usePathname();
  if (path === "/cv" || path === "/deck") return null;
  return (
    <header className="os-header">
      <div className="shell os-menubar">
        <Link
          className="os-brand"
          href="/"
          aria-label="Sandesh Chapagain, home"
        >
          <span aria-hidden="true">✳</span>sandesh
          <span className="brand-extension">.exe</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link
            href="/work"
            aria-current={path.startsWith("/work") ? "page" : undefined}
          >
            Work <sup>12</sup>
          </Link>
          <Link
            href="/about"
            aria-current={path === "/about" ? "page" : undefined}
          >
            About
          </Link>
          <a href="mailto:sendmailtodex@gmail.com">
            Contact <span>↗</span>
          </a>
        </nav>
        <a className="header-github" href="https://github.com/Dexasan">
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
