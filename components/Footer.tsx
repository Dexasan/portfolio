'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/cv' || pathname === '/deck') return null;

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 flex justify-between items-center">
        <span className="text-[12px] text-muted">
          &copy; {new Date().getFullYear()} Sandesh Chapagain
        </span>
        <nav className="flex gap-5">
          {[
            { href: '/work', label: 'Work' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[12px] text-muted hover:text-text transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
