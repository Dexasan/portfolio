import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "say hi", alternates: { canonical: "/contact" } };
export default function ContactPage() { return <article className="reading-page"><Link className="back-link" href="/">↖ back to me</Link><p className="page-overline">you found me</p><h1>say<br /><em>something.</em></h1><div className="reading-prose"><p className="lead-copy">an idea, a question, something you liked. i'm happy to talk.</p><p><a href="mailto:sendmailtodex@gmail.com">sendmailtodex@gmail.com ↗</a></p><p>you can find my code on <a href="https://github.com/Dexasan">github ↗</a> too.</p></div></article>; }
