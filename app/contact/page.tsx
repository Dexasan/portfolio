import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Let’s talk",
  description:
    "Contact Sandesh Chapagain about software projects, internships, junior engineering roles, and collaborations.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <div className="inner-page shell">
      <header className="inner-hero">
        <p className="eyebrow">Contact / Rome, Italy</p>
        <h1>
          LET’S MAKE
          <br />
          <em>something.</em>
        </h1>
        <p>
          A project you’re thinking about. A team I could learn with. A question
          about something I’ve built. I’d like to hear it.
        </p>
      </header>
      <div className="contact-layout">
        <div className="contact-note">
          A good conversation
          <br />
          is a good place to start.
          <p>
            I’m open to internships, junior engineering roles, and
            collaborations.
          </p>
        </div>
        <div className="contact-channels">
          <a href="mailto:sendmailtodex@gmail.com">
            <small>EMAIL</small>
            <strong>sendmailtodex@gmail.com</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://github.com/Dexasan">
            <small>GITHUB</small>
            <strong>github.com/Dexasan</strong>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="/cv">
            <small>RÉSUMÉ</small>
            <strong>Background & experience</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </div>
    </div>
  );
}
