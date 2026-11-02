import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/collection";
import { notes } from "@/lib/project-notes";
import { YappieMatch, DitchWall } from "@/components/LiveConnections";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: {
    params: Promise<{
        slug: string;
    }>;
}): Promise<Metadata> { const { slug } = await params; const p = projects.find(p => p.slug === slug); return { title: p?.name ?? "project", description: p?.description, alternates: { canonical: `/work/${slug}` } }; }
const stories: Record<string, {
    intro: string;
    why: string;
    art?: string;
    alt?: string;
}> = {
    yappie: { intro: "meet someone. see where it goes.", why: "i wanted to make a place where talking to someone new is the first thing you do. matching comes first in yappie. then there are conversations, posts and live clubs if you want to stick around.", art: "/art/yappie-poster.webp", alt: "Yappie's original vermilion and chalk talking mouth, posterized" },
    ditch: { intro: "i wanted the audience in the show.", why: "watching a stream is fun. but i kept coming back to the idea of letting someone watching actually join in. ditch is the browser studio i've been building around that.", art: "/art/ditch-poster.webp", alt: "DITCH's actual pink glitch D logo, posterized" },
    roadrash: { intro: "the game that started all of this.", why: "the first time i played road rash, everything else took a back seat. i just wanted to be around computers and play games. years later, i wanted to make a little piece of that feeling myself. so here's my browser tribute.", art: "/art/roadrash-poster.webp", alt: "Posterized original Road Rash PC cover artwork" }
};
export default async function ProjectPage({ params }: {
    params: Promise<{
        slug: string;
    }>;
}) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);
    if (!project)
        notFound();
    const note = notes[slug];
    const story = stories[slug];
    const artwork = story?.art ?? `/art/marks/${slug}.webp`;
    const next = projects[(projects.indexOf(project) + 1) % projects.length];
    return <article className="project-page">
  <Link className="back-link" href="/work">↖ all the things</Link>
  <p className="page-overline">{project.kind.toLowerCase()}</p>
  <h1>{project.name}</h1>
  <p className="project-description">{story?.intro ?? project.description}</p>
  <p className="project-meta">{project.status.toLowerCase()} · {project.stack}</p>
  <div className="project-links">{project.href && <a href={project.href}>open {project.name.toLowerCase()} ↗</a>}{project.source && <a href={project.source}>source ↗</a>}{slug === "ditch" && <Link href="/deck">pitch deck ↗</Link>}</div>
  <div className={`project-art project-mark mark-${slug}`}><img src={artwork} alt={story?.alt ?? `${project.name} illustrated mark`} width={slug === "roadrash" ? 800 : 600} height={slug === "roadrash" ? 1000 : 600}/></div>
  {slug === "roadrash" && <p className="art-credit">original Road Rash cover © Electronic Arts. <a href="https://www.old-games.ru/game/covers/118.html">art source ↗</a></p>}
  <div className="reading-prose">
   <h2>{story ? "why i made it." : note.question}</h2><p>{story?.why ?? note.approach}</p>
   {slug === "yappie" && <><h2>i wanted it to look like this, too.</h2><p>the ink drawings, the mouth, the type, the charcoal and red. i care about those things. i want the app to have some character when you open it.</p></>}
   <h2>what's in it.</h2><ul>{note.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
   <h2>where it's at.</h2><p>{note.boundary}</p>
  </div>
  {slug === "ditch" && <figure className="project-studio"><img src="/art/studio-host.webp" alt="The DITCH browser production studio" width="1200" height="750"/></figure>}
  {(slug === "yappie" || slug === "ditch") && <section className="project-experiment" aria-labelledby="experiment-title"><h2 id="experiment-title">{slug === "yappie" ? "try saying hello." : "leave something here."}</h2><p>{slug === "yappie" ? "a little version of the idea. this matches you with another person visiting my portfolio. someone else needs to be here too." : "a public chat for whoever drops by. write something and it stays here for the next person. messages refresh as people post."}</p>{slug === "yappie" ? <YappieMatch /> : <DitchWall />}</section>}
  <Link className="next-reading" href={`/work/${next.slug}`}>{next.name}<span aria-hidden="true">↗</span></Link>
 </article>;
}
