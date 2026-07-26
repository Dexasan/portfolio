import type { Metadata } from "next";
import Link from "next/link";

const pdf = "/DITCH-Deck.pdf";

export const metadata: Metadata = {
  title: { absolute: "Sandesh Chapagain" },
  description: "The Ditch product pitch deck.",
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return (
    <div className="deck-page">
      <header>
        <Link href="/#projects">← Projects</Link>
        <span>Ditch / Pitch deck</span>
        <div><a href={pdf}>Open</a><a href={pdf} download>Download</a></div>
      </header>
      <iframe src={`${pdf}#view=FitH`} title="Ditch pitch deck" />
    </div>
  );
}
