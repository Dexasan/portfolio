import Link from "next/link";
import DesktopComputer from "@/components/DesktopComputer";
import { YappieMatch, DitchWall } from "@/components/LiveConnections";
import { projects } from "@/lib/collection";
export default function HomePage() {
  return (
    <div className="desktop-home" id="top">
      <section className="desktop-hero shell">
        <div className="hero-path">
          <span>⌘ / HOME / SANDESH</span>
          <span>ENGINEERING SCIENCES · ROME, ITALY</span>
        </div>
        <div className="desktop-hero-grid">
          <div className="desktop-identity">
            <p className="eyebrow">
              <span className="status-light" /> INDEPENDENT BUILDER / STUDENT
            </p>
            <h1>
              SANDESH
              <br />
              <span>
                CHAPAGAIN<span className="name-period">.</span>
              </span>
            </h1>
            <p className="identity-line">
              A computer. Some curiosity.
              <br />
              <em>Things worth building.</em>
            </p>
            <p className="identity-description">
              I build social apps, live studios, and small experiments.
              Currently putting most of that curiosity into Yappie and DITCH.
            </p>
            <a className="red-button hero-open" href="#projects">
              Open the projects <span>↓</span>
            </a>
            <div className="identity-links">
              <a href="https://github.com/Dexasan">GitHub ↗</a>
              <Link href="/about">About me ↗</Link>
              <Link href="/cv">Résumé ↗</Link>
            </div>
          </div>
          <DesktopComputer />
        </div>
        <div className="desktop-bottom">
          <span>BUILT BY A PERSON. FOR OTHER PEOPLE.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>
      <div className="project-directory shell" id="projects">
        <span>~/PROJECTS</span>
        <a href="#yappie">
          <span>01</span> YAPPIE <i>↘</i>
        </a>
        <a href="#ditch">
          <span>02</span> DITCH <i>↘</i>
        </a>
        <Link href="/work">
          <span>03—12</span> EVERYTHING ELSE <i>↗</i>
        </Link>
      </div>
      <section className="product-section shell" id="yappie">
        <div className="product-copy">
          <div className="product-title-row">
            <p className="eyebrow">01 / YAPPIE</p>
            <span className="product-state">MOBILE APP · PRIVATE BETA</span>
          </div>
          <h2>
            LESS FEED.
            <br />
            MORE <em>hello.</em>
          </h2>
          <img
            className="yappie-feature-mouth"
            src="/art/yappie-mouth.png"
            alt="Yappie’s vermilion talking-mouth artwork"
          />
          <p>
            Yappie is my social discovery app. Matching comes first.
            Conversations, posts, and live Clubs give you a reason to stay.
          </p>
          <div className="try-note">
            <span>↗</span>
            <p>
              Try a little of the idea, right here.
              <br />
              <strong>Meet another visitor on this page.</strong>
            </p>
          </div>
          <Link className="text-link" href="/work/yappie">
            Explore Yappie <span>↗</span>
          </Link>
          <span className="product-stack">REACT NATIVE / EXPO / SUPABASE</span>
        </div>
        <YappieMatch />
      </section>
      <section className="ditch-section" id="ditch">
        <div className="product-section shell">
          <div className="product-copy">
            <div className="product-title-row">
              <p className="eyebrow">02 / DITCH</p>
              <span className="product-state">
                LIVE PRODUCTION · ACTIVE BUILD
              </span>
            </div>
            <h2>
              DON’T JUST
              <br />
              WATCH.
              <br />
              <em>Join in.</em>
            </h2>
            <p>
              DITCH is my browser-based live studio. Compose a show, invite
              viewers on screen, and send one broadcast to multiple platforms.
            </p>
            <div className="try-note">
              <span>↗</span>
              <p>
                This corner belongs to everyone.
                <br />
                <strong>Leave a message. It stays on the wall.</strong>
              </p>
            </div>
            <Link className="text-link" href="/work/ditch">
              Explore DITCH <span>↗</span>
            </Link>
            <span className="product-stack">
              WEBRTC / CANVAS / SOCKET.IO / FFMPEG
            </span>
          </div>
          <DitchWall />
        </div>
      </section>
      <section className="other-projects shell">
        <header>
          <div>
            <p className="eyebrow">03 / THE OTHER OPEN TABS</p>
            <h2>
              A FEW MORE
              <br />
              <em>things I’ve made.</em>
            </h2>
          </div>
          <Link className="text-link" href="/work">
            All 12 projects <span>↗</span>
          </Link>
        </header>
        <div className="project-file-grid">
          {projects.slice(2, 6).map((project, i) => (
            <Link
              href={`/work/${project.slug}`}
              className={`project-file file-${project.slug}`}
              key={project.slug}
            >
              <div className="file-top">
                <span className="file-icon" aria-hidden="true">
                  {["@", "↗", "⌘", "Ⅱ"][i]}
                </span>
                <span>{project.kind.split(" / ")[0]}</span>
                <span>↗</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <span className="file-status">{project.status}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
