"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Footer() {
  const path = usePathname();
  if (path === "/cv" || path === "/deck") return null;
  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <div className="footer-contact">
          <div>
            <p className="eyebrow">GOT SOMETHING IN MIND?</p>
            <a href="mailto:sendmailtodex@gmail.com">
              Let’s talk<span>↗</span>
            </a>
          </div>
          <p>
            Open to internships, junior engineering
            <br />
            roles, and projects with good people.
          </p>
        </div>
        <div className="footer-bottom">
          <span>SANDESH CHAPAGAIN / ROME, ITALY</span>
          <nav aria-label="Footer navigation">
            <a href="https://github.com/Dexasan">GitHub ↗</a>
            <Link href="/cv">Résumé ↗</Link>
            <a href="mailto:sendmailtodex@gmail.com">Email ↗</a>
          </nav>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
