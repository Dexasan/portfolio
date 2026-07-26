import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow">Have a hard problem?</p>
        <h2>Let&apos;s make it tractable.</h2>
        <a className="text-link" href="mailto:sendmailtodex@gmail.com">
          sendmailtodex@gmail.com <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="footer-meta">
        <p>Sandesh Chapagain</p>
        <p>Engineering Sciences student · Rome</p>
        <nav aria-label="Footer navigation">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/Dexasan">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
