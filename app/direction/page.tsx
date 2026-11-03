import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "what next?",
  description: "From Engineering Sciences at Tor Vergata to questions about wearable sensing, cognition and human-computer interaction.",
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
        <p className="lead-copy">i study engineering sciences at tor vergata. the question i keep coming back to is what a computer can tell about the person using it, and what it should do when it gets that person wrong.</p>
        <p>take a phone in someone's pocket. the accelerometer and gyroscope give you a record of how the phone moved. you can look for a walking rhythm in that signal, but move the phone to a bag or try it on someone with a different gait and the pattern changes. i'd want to test on people the model has never seen and look at which activities it confuses. a good score means more when you know where it breaks.</p>
        <p>then there's the interface. say a wearable thinks you've stopped walking and offers to pause a route. getting that wrong once is fine. doing it every time you stop at a crossing would drive you mad. i'd like to test when an interface should act, when it should ask, and when people would rather it left them alone.</p>
        <p>that's why i'm looking at master's programmes in human-computer interaction and computational cognitive science. i want to get better at designing experiments where you can tell whether an interface actually helped someone. give two groups the same task, change when the system steps in, and see what happens to errors, interruptions and how quickly people get back on track.</p>
        <Link className="next-reading" href="/work">things i have made <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
