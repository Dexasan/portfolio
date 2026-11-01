"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const path = usePathname();
  if (path === "/cv" || path === "/deck") return null;
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-top">
          <p className="eyebrow">An open invitation</p>
          <span>ROME, ITALY / OPEN TO COLLABORATION</span>
        </div>
        <a className="footer-invitation" href="mailto:sendmailtodex@gmail.com">
          MAKE SOMETHING
          <br />
          <em>worth making.</em>
          <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <a href="mailto:sendmailtodex@gmail.com">
            sendmailtodex@gmail.com ↗
          </a>
          <nav aria-label="Footer navigation">
            <a href="https://github.com/Dexasan">GitHub ↗</a>
            <Link href="/cv">Résumé ↗</Link>
            <Link href="/about">About me ↗</Link>
          </nav>
          <p>© 2026 SANDESH CHAPAGAIN</p>
        </div>
      </div>
    </footer>
  );
}
