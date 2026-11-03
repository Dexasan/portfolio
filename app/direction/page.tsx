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
        <p className="lead-copy">i study engineering sciences at tor vergata. for my master's, i want to get into computational cognitive science. a fruit fly is part of the reason why.</p>
        <p>i keep thinking about this one number: 139,255. that's how many neurons the <a href="https://www.nature.com/articles/s41586-024-07558-y">FlyWire team mapped in one adult fruit fly's brain</a>. there are about 50 million connections in that map. all of that in a fly.</p>
        <p>the part that got me was what people did with it. <a href="https://www.nature.com/articles/s41586-024-07763-9">one team used the wiring to build a model</a> and predict which neurons could kick off a feeding response. they could then try those predictions on actual flies. you can change something in the model, see what it expects to happen, and go find out if the animal agrees.</p>
        <p>that's what i want to learn how to do. start with something an animal or a person does, build a model that could explain it, then come up with an experiment that might prove me wrong. i'd love to spend a master's doing that. i'm especially curious about how something as ordinary as noticing a change around you turns into a decision to move.</p>
        <Link className="next-reading" href="/work">things i have made <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
