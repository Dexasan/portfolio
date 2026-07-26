import Link from "next/link";
import ProjectVisual from "@/components/ProjectVisual";
import SystemMap from "@/components/SystemMap";
import InterestGraphic from "@/components/InterestGraphic";
import { caseStudies, notebookProjects } from "@/lib/projects";

const selected = caseStudies.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-meta reveal reveal-1">
          <p>Engineering Sciences student</p>
          <p>Rome, Italy</p>
          <p>UTC +02</p>
        </div>
        <div className="hero-stage">
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-1">Student · Builder · Interested in systems</p>
            <h1 className="reveal reveal-2">
              I&apos;m learning by building things that have to work <em>in real time.</em>
            </h1>
          </div>
          <InterestGraphic />
        </div>
        <div className="hero-intro reveal reveal-3">
          <p>
            I&apos;m Sandesh Chapagain, an Engineering Sciences student in
            Rome interested in real-time systems, browser media, backend
            infrastructure, and ambitious software. I learn by tracing the
            complete path from interface to network to runtime.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/work">Explore selected projects</Link>
            <a className="button button-line" href="mailto:sendmailtodex@gmail.com">Start a conversation</a>
          </div>
        </div>
        <div className="reveal reveal-4">
          <SystemMap />
        </div>
      </section>

      <section className="selected-work section-block">
        <header className="section-heading shell">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2>Built to be used,<br />not just viewed.</h2>
          </div>
          <div className="section-heading-note">
            <p>
              A horizontal field of four projects—each one framed by the
              problem it solves, the system behind it, and the decisions that
              made it real.
            </p>
            <Link className="text-link" href="/work">
              View every project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </header>

        <div className="project-shelf-meta shell" aria-hidden="true">
          <span>01 — 04</span>
          <span>Scroll to explore</span>
          <span className="project-shelf-line"><i /></span>
        </div>

        <div className="project-list" aria-label="Selected projects">
          {selected.map((project) => (
            <article className="project-row" key={project.slug}>
              <div className="project-copy">
                <div className="project-index">
                  <span>{project.index}</span>
                  <span>{project.kicker}</span>
                  <span>{project.stage}</span>
                </div>
                <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
                <p>{project.summary}</p>
                <div className="project-card-footer">
                  <div className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.stack.slice(0, 4).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <Link className="project-open" href={`/work/${project.slug}`}>
                    <span>Open case study</span>
                    <i aria-hidden="true">↗</i>
                  </Link>
                </div>
              </div>
              <Link
                className="project-visual-link"
                href={`/work/${project.slug}`}
                aria-label={`Read the ${project.title} case study`}
              >
                <ProjectVisual kind={project.visual} compact />
              </Link>
              <span className="project-watermark" aria-hidden="true">{project.index}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="notebook-section">
        <div className="shell">
          <header className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">Engineering notebook</p>
              <h2>Smaller systems, specific questions.</h2>
            </div>
            <p>
              These are focused explorations, not inflated startup claims.
              Each isolates one engineering concern and makes it inspectable.
            </p>
          </header>
          <div className="notebook-grid">
            {notebookProjects.map((project, index) => (
              <a className="notebook-card" href={project.href} key={project.name}>
                <div><span>{String(index + 1).padStart(2, "0")}</span><span>{project.type}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="notebook-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-strip shell section-block">
        <p className="eyebrow">How I learn and build</p>
        <blockquote>
          Start with the failure boundary. Make the model visible.
          <em> Add complexity only when the system earns it.</em>
        </blockquote>
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Trace the whole path</h3>
            <p>I like work that crosses boundaries: UI to state, state to network, network to infrastructure.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Prefer evidence</h3>
            <p>Metrics, source code, failure modes, and tests are more useful than confident adjectives.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Design the explanation</h3>
            <p>A technically correct system still fails if its interface hides the decisions a person needs to make.</p>
          </article>
        </div>
        <Link className="button button-line" href="/about">More about me</Link>
      </section>
    </>
  );
}
