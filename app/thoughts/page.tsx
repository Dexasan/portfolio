import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "the job is still running",
  description: "What if the operating system could keep track of a job across apps, even after you closed the laptop?",
  alternates: { canonical: "/thoughts" },
};

export default function ThoughtsPage() {
  return (
    <article className="reading-page">
      <Link className="back-link" href="/">↖ back to me</Link>
      <p className="page-overline">a different kind of operating system</p>
      <h1>the job is<br /><em>still running.</em></h1>
      <div className="reading-prose">
        <p className="lead-copy">say i'm working on an app at midnight. the build fails. i tell my laptop to figure out what broke, leave me a patch if it's something small, and keep its hands off the live site. then i close the lid.</p>
        <p>in the morning i open the laptop and the job picks up where it stopped. it has the failing log, the last good build, and a separate checkout to mess around in. if the tests pass, i can see the diff and run it myself. if the fix needs a production secret, the job stops there and shows me why.</p>
        <p>the interesting bit is what happens if i fix it myself over breakfast. the job should notice my commit, check whether the failure is still there, and drop its patch if i've already solved it. i shouldn't have to remember which automations are running every time i touch a file.</p>
        <p>that's what i mean when i say i want ai to be my os. i want the system to keep track of the job itself: what i asked for, what it's allowed to touch, what changed while it was working, and what it still owes me. the terminal and editor are places it can work. the job can outlive both.</p>
        <p>i'd keep that record on my machine. give each job access to the files and tools it actually needs, and keep a trail i can inspect when it gets something wrong. i want to be able to close the laptop halfway through a job and trust what happens when i open it again. that's the machine i'd like to build.</p>
        <Link className="next-reading" href="/work">things i've actually made <span aria-hidden="true">↗</span></Link>
      </div>
    </article>
  );
}
