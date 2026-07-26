import type { Metadata } from "next";
import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import { caseStudies, notebookProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering case studies across real-time media, browser games, capacity planning, and transactional systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="page-shell shell">
      <header className="page-hero">
        <p className="eyebrow">Work / 2026</p>
        <h1>Selected systems,<br /><em>examined closely.</em></h1>
        <p>
          This is not every repository. It is the work that best shows how I
          define a problem, choose boundaries, and turn implementation details
          into a coherent product.
        </p>
      </header>

      <div className="work-catalog">
        {caseStudies.map((project) => (
          <article className="catalog-item" key={project.slug}>
            <Link href={`/work/${project.slug}`} className="catalog-visual">
              <ProjectVisual kind={project.visual} compact />
            </Link>
            <div className="catalog-copy">
              <div className="project-index">
                <span>{project.index}</span><span>{project.kicker}</span><span>{project.year}</span>
              </div>
              <h2><Link href={`/work/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.summary}</p>
              <div className="catalog-facts">
                {project.facts.slice(0, 2).map((fact) => (
                  <span key={fact.label}><strong>{fact.value}</strong>{fact.label}</span>
                ))}
              </div>
              <Link className="text-link" href={`/work/${project.slug}`}>
                Read case study <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="archive">
        <div>
          <p className="eyebrow">Repository archive</p>
          <h2>Focused builds</h2>
        </div>
        <div className="archive-list">
          {notebookProjects.map((project, index) => (
            <a href={project.href} key={project.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <small>{project.type}</small>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
