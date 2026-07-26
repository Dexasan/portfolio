"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  if (pathname === "/cv") return null;

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label="Sandesh Chapagain, home">
          <span className="wordmark-mark" aria-hidden="true">SC</span>
          <span className="wordmark-name">Sandesh Chapagain</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(({ href, label }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <a
          className="nav-status"
          href="mailto:sendmailtodex@gmail.com"
          aria-label="Email Sandesh"
        >
          <span aria-hidden="true" />
          Available for the right role
        </a>
      </div>
    </header>
  );
}
