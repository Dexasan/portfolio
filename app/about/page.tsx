import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sandesh Chapagain: product engineer, Engineering Sciences student, and builder of real-time media systems.",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    period: "Apr 2026 — now",
    title: "Building Ditch",
    detail:
      "Designing a browser-native live production system across four deployable services: web, API, real-time, and relay.",
  },
  {
    period: "2024 — now",
    title: "Engineering Sciences, Tor Vergata",
    detail:
      "Studying the mathematical and physical foundations while building production software independently in Rome.",
  },
  {
    period: "Jun — Nov 2024",
    title: "Network Support Intern",
    detail:
      "Diagnosed connectivity issues, monitored networks with Wireshark and Nagios, and configured routers, switches, and VoIP systems.",
  },
  {
    period: "2022 — 2024",
    title: "Growth and content systems",
    detail:
      "Worked on repeatable content operations, analytics, and acquisition. BarcaBuzz grew to more than 100,000 followers without paid acquisition.",
  },
];

const capabilities = [
  ["Product engineering", "Turn ambiguous problems into a shippable slice, then refine the system from real constraints."],
  ["Browser media", "Canvas composition, WebRTC, WebCodecs, Web Audio, capture APIs, and the failure modes around them."],
  ["Backend systems", "Typed Node.js services, authorization boundaries, real-time state, PostgreSQL, and media relays."],
  ["Technical communication", "Architecture notes, explicit tradeoffs, testable models, and interfaces that explain their own behavior."],
];

export default function AboutPage() {
  return (
    <div className="page-shell shell">
      <header className="about-hero">
        <p className="eyebrow">About / Sandesh Chapagain</p>
        <h1>Curious enough to cross the boundary.</h1>
        <div>
          <p>
            I&apos;m a product engineer studying Engineering Sciences at
            Università degli Studi di Roma Tor Vergata. I&apos;m drawn to
            systems where the interface and infrastructure cannot be designed
            separately.
          </p>
          <p>
            That has led me into browser media, real-time communication,
            streaming infrastructure, and tools that make technical decisions
            easier to understand. Ditch is the largest expression of that work:
            one product spanning media capture, composition, signaling,
            authorization, and delivery.
          </p>
        </div>
      </header>

      <section className="about-statement">
        <span aria-hidden="true">“</span>
        <blockquote>
          The part I enjoy most is finding the boundary that makes a hard
          system understandable, then building the path through it.
        </blockquote>
      </section>

      <section className="about-grid">
        <div>
          <p className="eyebrow">Timeline</p>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.period}>
                <span>{item.period}</span>
                <div><h2>{item.title}</h2><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
        <aside>
          <p className="eyebrow">Working range</p>
          <div className="capability-list">
            {capabilities.map(([title, detail], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{title}</h2>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="now-section">
        <div>
          <p className="eyebrow">Now</p>
          <h2>Building, studying, and looking for a team with difficult problems.</h2>
        </div>
        <p>
          I&apos;m based in Rome and open to product engineering,
          infrastructure, and real-time media roles. I work best with teams
          that care about both the system and the person using it.
        </p>
        <div>
          <Link className="button button-dark" href="/contact">Get in touch</Link>
          <Link className="button button-line" href="/work">Review the work</Link>
        </div>
      </section>
    </div>
  );
}
