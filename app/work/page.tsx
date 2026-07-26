import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, notebookProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected engineering case studies across real-time media, browser games, capacity planning, and transactional systems.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="page-shell shell">
      <header className="page-hero">
        <p className="eyebrow">Projects / 2026</p>
        <h1>Built from curiosity,<br /><em>explained clearly.</em></h1>
        <p>
          This is the work that best shows how I define a problem, choose
          boundaries, and turn implementation details into a coherent product.
        </p>
      </header>

      <div className="work-catalog">
        {caseStudies.map((project) => (
          <article className="catalog-item" key={project.slug}>
            <div className="catalog-copy">
              <div className="project-index">
                <span>{project.index}</span><span>{project.kicker}</span><span>{project.year}</span>
              </div>
              <h2><Link href={`/work/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.summary}</p>
              <p className="catalog-explanation">{project.solution}</p>
              <div className="catalog-facts">
                {project.facts.slice(0, 2).map((fact) => (
                  <span key={fact.label}><strong>{fact.value}</strong>{fact.label}</span>
                ))}
              </div>
              <div className="catalog-stack" aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 6).map((item) => <span key={item}>{item}</span>)}
              </div>
              <Link className="text-link" href={`/work/${project.slug}`}>
                Read case study <span aria-hidden="true">-&gt;</span>
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
              <i aria-hidden="true">-&gt;</i>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
