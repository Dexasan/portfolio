import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/collection";
import { notes } from "@/lib/project-notes";
import { YappieExhibit, DitchExhibit } from "@/components/ProductExhibits";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.name ?? "Project",
    description: project?.description,
    alternates: { canonical: `/work/${slug}` },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const note = notes[slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <div className="inner-page shell">
      <header className="case-header">
        <div className="case-breadcrumb">
          <Link href="/work">← ALL THE WORK</Link>
          <span>{project.kind.toUpperCase()} / 2026</span>
        </div>
        <div className="case-heading">
          <h1>{project.name}</h1>
          <div>
            <p className="eyebrow">{project.status}</p>
            <p>{project.description}</p>
            <div className="case-links">
              {project.href && (
                <a href={project.href}>
                  Open {project.name} <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.source && (
                <a href={project.source}>
                  View source <span aria-hidden="true">↗</span>
                </a>
              )}
              {slug === "ditch" && (
                <Link href="/deck">
                  Pitch deck <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      {slug === "yappie" ? (
        <YappieExhibit />
      ) : slug === "ditch" ? (
        <DitchExhibit />
      ) : (
        <div className={`case-graphic graphic-${slug}`}>
          <span className="eyebrow">{project.kind}</span>
          <span className="graphic-title">{project.name}</span>
          <span className="graphic-subtitle">{note.question}</span>
        </div>
      )}
      <div className="case-body">
        <aside className="case-sidebar">
          <div>
            <h2>BUILT WITH</h2>
            <p>{project.stack}</p>
          </div>
          <div>
            <h2>STATUS</h2>
            <p>{project.status}</p>
          </div>
        </aside>
        <div className="case-prose">
          <h2>{note.question}</h2>
          <p>{note.approach}</p>
          <h2>What’s in the build</h2>
          <ul>
            {note.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <h2>Where it stands</h2>
          <p>{note.boundary}</p>
        </div>
      </div>
      <div className="case-next">
        <p className="eyebrow">Keep exploring</p>
        <Link href={`/work/${next.slug}`}>
          {next.name}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}
