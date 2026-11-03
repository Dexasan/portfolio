import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "what next?",
  description: "From Engineering Sciences at Tor Vergata to a master's in computational cognitive science, by way of a fruit fly.",
  alternates: { canonical: "/direction" },
};

export default function DirectionPage() {
  return (
    <article className="reading-page">
      <Link className="back-link" href="/">↖ back to me</Link>
      <p className="page-overline">tor vergata · rome</p>
      <h1>from tor vergata.<br /><em>what next?</em></h1>
      <figure className="direction-campus">
        <img
          src="/art/tor-vergata-engineering.jpg"
          alt="Exterior of the Faculty of Engineering at Tor Vergata University in Rome"
          width={1124}
          height={662}
        />
        <figcaption>
          tor vergata, faculty of engineering ·{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Ingegneria_-_Tor_Vergata_1.jpg">photo by Camelia.boban</a>
          {" · "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
        </figcaption>
      </figure>
      <div className="reading-prose">
        <p className="lead-copy">i study engineering sciences at tor vergata. i want to do my master's in computational cognitive science, and weirdly enough, a fruit fly made me want it more.</p>
        <p>when i heard that people had mapped a fly's brain, i started thinking about my own. say we get good enough at this to map mine one day. could i live in a computer and still remember the first time i played road rash? would i wake up in there, or would i still be sitting here while someone else remembers being me?</p>
        <p>that's where my mind goes when i think about neuralink or brain implants. imagine being able to use a computer just by thinking. now go a bit further. what would it feel like if the computer could give you a memory back? would it feel like remembering something, or like seeing it for the first time? i have no idea if we'll ever make anything that can do that. i want to understand what would have to happen for us to even get close.</p>
        <p>i used to think about the future of computers mostly in terms of what we'd be able to do with them. now i wonder what using them might do to us. that's what i'd like to spend my master's thinking about. i want to understand enough about brains and computers to ask better questions than “could i live forever?” though honestly, i'd still like an answer to that one.</p>
        <Link className="next-reading" href="/work">things i have made <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
