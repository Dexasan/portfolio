import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sandesh Chapagain about product engineering, real-time systems, browser media, or startup work.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Email",
    value: "sendmailtodex@gmail.com",
    href: "mailto:sendmailtodex@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Dexasan",
    href: "https://github.com/Dexasan",
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page shell">
      <header>
        <p className="eyebrow">Contact / Rome, Italy</p>
        <h1>Bring me the problem that does not fit neatly in one layer.</h1>
        <p>
          I&apos;m open to product engineering, real-time media,
          infrastructure work, and thoughtful early-stage teams.
        </p>
      </header>
      <div className="contact-layout">
        <div className="contact-note">
          <span className="availability-dot" aria-hidden="true" />
          <div>
            <strong>Available for the right role</strong>
            <p>Remote, Rome, or relocation. I usually reply within one working day.</p>
          </div>
        </div>
        <div className="contact-channels">
          {channels.map((channel, index) => (
            <a href={channel.href} key={channel.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{channel.label}</small>
              <strong>{channel.value}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
