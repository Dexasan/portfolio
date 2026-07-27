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

  if (pathname === '/cv' || pathname === '/deck') return null;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-[background,border-color,box-shadow] duration-300 border-b ${
        scrolled
          ? "bg-bg/92 backdrop-blur-sm border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-[14px] font-semibold tracking-[-0.02em] text-text hover:text-accent transition-colors duration-150"
        >
          Sandesh
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
                    : "text-muted hover:text-text hover:bg-bg-raised"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="/SandeshChapagain_Resume_2026.pdf"
            download
            className="ml-3 px-3.5 py-1.5 text-[12px] font-medium tracking-[-0.01em] border border-border-hi rounded-lg bg-bg-card text-muted hover:text-text hover:bg-bg-raised transition-all flex items-center gap-1.5"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <path d="M8 2v8M4 7l4 4 4-4M2 13h12" />
            </svg>
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
