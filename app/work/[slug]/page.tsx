import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "@/components/ProjectVisual";
import { caseStudies, getCaseStudy } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getCaseStudy((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Engineering case study`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const project = getCaseStudy((await params).slug);
  if (!project) notFound();

  const currentIndex = caseStudies.findIndex(({ slug }) => slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <article className="case-study">
      <header className="case-hero shell">
        <Link className="back-link" href="/work">← All work</Link>
        <div className="case-heading">
          <div>
            <p className="eyebrow">{project.kicker} / {project.year}</p>
            <h1>{project.title}</h1>
          </div>
          <p>{project.summary}</p>
        </div>
        <ProjectVisual kind={project.visual} />
        <div className="case-meta">
          <div><span>Status</span><strong>{project.stage}</strong></div>
          <div><span>My role</span><strong>Design + engineering</strong></div>
          <div><span>Focus</span><strong>{project.kicker}</strong></div>
          <div className="case-links">
            {project.links.map((link) => (
              link.href.startsWith("/") ? (
                <Link href={link.href} key={link.href}>{link.label} ↗</Link>
              ) : (
                <a href={link.href} key={link.href}>{link.label} ↗</a>
              )
            ))}
          </div>
        </div>
      </header>

      <div className="case-body shell">
        <aside className="case-toc" aria-label="Case study contents">
          <p>On this page</p>
          <a href="#context">Context</a>
          <a href="#architecture">Architecture</a>
          <a href="#decisions">Decisions</a>
          <a href="#outcome">Outcome</a>
        </aside>

        <div className="case-content">
          <section id="context" className="case-section">
            <p className="eyebrow">01 / Context</p>
            <div className="two-column-copy">
              <div><h2>The problem</h2><p>{project.problem}</p></div>
              <div><h2>The response</h2><p>{project.solution}</p></div>
            </div>
            <div className="role-note"><span>My contribution</span><p>{project.role}</p></div>
          </section>

          <section id="architecture" className="case-section">
            <p className="eyebrow">02 / Architecture</p>
            <h2>How the system is shaped.</h2>
            <div className="architecture-grid">
              {project.architecture.map((item, index) => (
                <article key={item.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="facts-row">
              {project.facts.map((fact) => (
                <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>
              ))}
            </div>
          </section>

          <section id="decisions" className="case-section">
            <p className="eyebrow">03 / Engineering decisions</p>
            <h2>The choices that matter.</h2>
            <div className="decision-list">
              {project.decisions.map((decision, index) => (
                <article key={decision.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="outcome" className="case-section">
            <p className="eyebrow">04 / Outcome</p>
            <blockquote>{project.outcome}</blockquote>
            <div className="stack-list">
              <span>Technology</span>
              <div>{project.stack.map((item) => <i key={item}>{item}</i>)}</div>
            </div>
          </section>
        </div>
      </div>

      <Link className="next-case" href={`/work/${nextProject.slug}`}>
        <span>Next case study</span>
        <strong>{nextProject.title}</strong>
        <i aria-hidden="true">↗</i>
      </Link>
    </article>
  );
}
