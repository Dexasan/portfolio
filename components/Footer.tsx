'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/cv') return null;

  return (
    <footer className="border-t border-border py-7">
      <div className="max-w-[1100px] mx-auto px-8 flex justify-between items-center">
        <span className="text-xs text-muted opacity-50">
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
              className="text-xs text-muted opacity-50 hover:opacity-100 hover:text-text transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
