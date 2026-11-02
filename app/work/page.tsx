import type { Metadata } from "next";
import Link from "next/link";
import ProjectArchive from "@/components/ProjectArchive";
export const metadata: Metadata = { title: "things i've made", description: "Apps, a motorcycle game, and engineering experiments by Sandesh Chapagain.", alternates: { canonical: "/work" } };
export default function WorkPage() { return <div className="work-page"><Link className="back-link" href="/">↖ back to me</Link><p className="page-overline">some ideas got out of my head</p><h1>things<br /><em>i've made.</em></h1><p className="work-intro">apps, a motorcycle game, and a few engineering rabbit holes. pick something.</p><ProjectArchive /></div>; }
