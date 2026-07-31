"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/cv" || pathname === "/deck") return null;

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-wave" aria-hidden="true">
        <span className="footer-creature"><i /><i /><i /></span>
      </div>
      <div className="shell footer-content">
        <p className="world-kicker">04 / Get in touch</p>
        <h2>Want to build something<br />a little unusual?</h2>
        <a className="footer-email" href="mailto:sendmailtodex@gmail.com">
          sendmailtodex@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <p>Sandesh Chapagain · Rome, Italy</p>
          <nav aria-label="Footer navigation">
            <a href="https://github.com/Dexasan">GitHub</a>
            <Link href="/work">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
