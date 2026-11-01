import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "The person",
  description:
    "From Chitwan to Rome. Sandesh Chapagain is an Engineering Sciences student building Yappie, DITCH, and independent software.",
  alternates: { canonical: "/about" },
};
const timeline = [
  {
    when: "2026 — NOW",
    title: "Building Yappie & DITCH",
    detail:
      "A mobile social app and a browser production studio. Two ongoing projects about bringing people into the same conversation.",
  },
  {
    when: "2024 — NOW",
    title: "Engineering Sciences, Tor Vergata",
    detail:
      "Studying in Rome while learning through independent software projects.",
  },
  {
    when: "JUN — NOV 2024",
    title: "Network support internship",
    detail:
      "Connectivity troubleshooting, network monitoring, and work with routers, switches, and VoIP systems.",
  },
  {
    when: "2022 — 2024",
    title: "Content & community",
    detail:
      "Working on content operations and growth at BarcaBuzz, before software became the main focus.",
  },
];
export default function AboutPage() {
  return (
    <div className="inner-page shell">
      <header className="inner-hero">
        <p className="eyebrow">The person / Beyond the repository</p>
        <h1>
          HI. I’M
          <br />
          <em>Sandesh.</em>
        </h1>
        <p>
          From Chitwan, Nepal. Now in Rome, studying Engineering Sciences at
          Università degli Studi di Roma Tor Vergata and building software along
          the way.
        </p>
      </header>
      <div className="about-opening">
        <div className="portrait-print">
          <Image
            src="/sandesh.jpg"
            alt="Sandesh Chapagain"
            width={700}
            height={790}
          />
          <span>SANDESH CHAPAGAIN / ROME, ITALY</span>
        </div>
        <div className="about-prose">
          <h2>
            I learn best when there’s
            <br />
            something I want to make.
          </h2>
          <p>
            That has taken me from a browser motorcycle game to{" "}
            <Link href="/work/ditch">DITCH</Link>, a live studio where viewers
            can become part of the show. More recently,{" "}
            <Link href="/work/yappie">Yappie</Link> has become another place to
            explore the same question: how can software make it easier for
            people to connect?
          </p>
          <p>
            I like working across the whole experience: what someone sees, what
            happens when they press a button, and the services that make the
            result possible. I’m still learning those parts, and building gives
            me a reason to keep going.
          </p>
          <p>
            The smaller projects matter too. A local search tool. A migration
            checker. An Android app to get out of short-video feeds. They’re
            ways to follow a question far enough to make something concrete.
          </p>
          <Link className="ink-button" href="/cv">
            Read my résumé <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <section className="timeline-section">
        <p className="eyebrow">A few points along the way</p>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.when}>
              <span>{item.when}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
