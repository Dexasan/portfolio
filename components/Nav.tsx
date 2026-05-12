"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  if (pathname === '/cv') return null;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 border-b transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-border/60"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[13px] font-bold tracking-[0.04em] text-accent"
        >
          sandesh.
        </Link>
        <nav className="flex items-center gap-0.5">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  active
                    ? "text-text"
                    : "text-muted hover:text-text hover:bg-bg-subtle"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/SandeshChapagainCV.pdf"
            download
            className="ml-2.5 px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.08em] uppercase border border-border-hi rounded-md bg-bg-card text-muted hover:border-border-hi hover:text-text transition-colors flex items-center gap-1.5"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M8 2v8M4 7l4 4 4-4M2 13h12" />
            </svg>
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
