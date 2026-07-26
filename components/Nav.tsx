"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#top", label: "Home", icon: "⌂" },
  { href: "/#about", label: "About", icon: "◎" },
  { href: "/#skills", label: "Skills", icon: "✦" },
  { href: "/#projects", label: "Projects", icon: "⌘" },
  { href: "/#contact", label: "Contact", icon: "✉" },
];

export default function Nav() {
  const pathname = usePathname();

  if (pathname === "/cv") return null;

  return (
    <>
      <Link href="/" className="floating-wordmark" aria-label="Sandesh Chapagain, home">
        <span>SC</span>
        <strong>Sandesh Chapagain</strong>
      </Link>
      <header className="site-header">
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              data-label={label}
              className={pathname !== "/" && href === "/#projects" ? "is-active" : undefined}
            >
              <span aria-hidden="true">{icon}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
