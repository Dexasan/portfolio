import type { Metadata } from "next";
import ProjectArchive from "@/components/ProjectArchive";
export const metadata: Metadata = {
  title: "The work",
  description:
    "Twelve apps, experiences, and engineering tools by Sandesh Chapagain. Yappie, DITCH, Writmail, Roadrash, and more.",
  alternates: { canonical: "/work" },
};
export default function WorkPage() {
  return (
    <div className="inner-page shell">
      <header className="inner-hero">
        <p className="eyebrow">The collected work / 2026</p>
        <h1>
          FOLLOWING
          <br />
          <em>the curiosity.</em>
        </h1>
        <p>
          Social apps, a live studio, a racing game, and tools for the less
          visible parts of software. Some are experiments. Some keep getting
          bigger. Each started with something I wanted to try.
        </p>
      </header>
      <ProjectArchive />
      <p className="archive-colophon">
        Twelve projects. Plenty still to learn.
      </p>
    </div>
  );
}
