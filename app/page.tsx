import Link from "next/link";
import ConnectionArtwork from "@/components/ConnectionArtwork";
import { YappieExhibit, DitchExhibit } from "@/components/ProductExhibits";
import ProjectArchive from "@/components/ProjectArchive";

export default function HomePage() {
  return (
    <div className="print-home" id="top">
      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-eyebrow">
          <span>THE INDEPENDENT WORK OF SANDESH CHAPAGAIN</span>
          <span>ENGINEERING SCIENCES / TOR VERGATA</span>
        </div>
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-heading">
              I BUILD
              <br />
              THINGS THAT
              <br />
              <em>
                bring us
                <br />
                together.
              </em>
            </h1>
            <div className="hero-intro">
              <span className="mini-cross" aria-hidden="true">
                ✳
              </span>
              <p>
                Apps for meeting strangers. Studios for sharing a stage.
                <br className="desktop-break" /> Software with someone on the
                other side.
              </p>
            </div>
            <a href="#projects" className="ink-button">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-art">
            <span className="art-edition">
              A WORK IN PROGRESS.
              <br />
              SO AM I.
            </span>
            <ConnectionArtwork />
            <div className="hero-stamp">
              BUILT WITH
              <br />
              <strong>curiosity</strong>
              <span>AND A HUMAN IN MIND</span>
            </div>
          </div>
        </div>
        <div className="hero-footnote">
          <p>
            <span className="availability-dot" /> Building independently.
            Learning by doing.
          </p>
          <span>SCROLL TO MEET THE WORK ↓</span>
        </div>
      </section>
      <div className="manifesto-strip" aria-hidden="true">
        <span>PEOPLE FIRST.</span>
        <i>✳</i>
        <span>CODE FOLLOWS.</span>
        <i>✳</i>
        <span>MAKE IT MATTER.</span>
        <i>✳</i>
        <span>PEOPLE FIRST.</span>
        <i>✳</i>
      </div>
      <section className="selected-work shell" id="projects">
        <header className="section-heading">
          <p className="eyebrow">01 / Selected work</p>
          <h2>
            TWO WAYS TO
            <br />
            <em>close the distance.</em>
          </h2>
          <p>
            A conversation between strangers.
            <br />A stage shared with an audience.
            <br />
            These are the two I keep coming back to.
          </p>
        </header>
        <article className="featured-project yappie-project">
          <div className="project-heading">
            <div>
              <span className="project-no">01 / MOBILE APP</span>
              <h3>
                YAPPIE<span>✳</span>
              </h3>
            </div>
            <p>
              A little less stranger.
              <br />
              <em>A little more human.</em>
            </p>
            <span className="project-tag">PRIVATE BETA</span>
          </div>
          <YappieExhibit />
          <div className="project-caption">
            <p>
              Matching is the beginning. Posts, DMs, and live Clubs give the
              conversation somewhere to go.
            </p>
            <div>
              <span>EXPO / SUPABASE / REALTIME AUDIO</span>
              <Link href="/work/yappie">
                Inside Yappie <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </article>
        <article className="featured-project ditch-project">
          <div className="project-heading">
            <div>
              <span className="project-no">02 / LIVE PRODUCTION</span>
              <h3>
                DITCH<span>↗</span>
              </h3>
            </div>
            <p>
              From watching the show
              <br />
              <em>to being in it.</em>
            </p>
            <span className="project-tag">ACTIVE BUILD</span>
          </div>
          <DitchExhibit />
          <div className="project-caption">
            <p>
              Compose a show in the browser. Bring a viewer on screen. Send the
              same broadcast to multiple platforms.
            </p>
            <div>
              <span>WEBRTC / CANVAS / FFMPEG</span>
              <Link href="/work/ditch">
                Inside DITCH <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </article>
      </section>
      <section className="person-interlude" id="about">
        <div className="shell person-layout">
          <div className="person-margin">
            <span className="eyebrow">02 / The person behind it</span>
            <span className="drawn-star" aria-hidden="true">
              ✳
            </span>
            <span>
              CHITWAN, NEPAL
              <br />↓<br />
              ROME, ITALY
            </span>
          </div>
          <div>
            <h2>
              STILL A STUDENT.
              <br />
              <em>Already a builder.</em>
            </h2>
            <p>
              I’m Sandesh. I study Engineering Sciences at Tor Vergata in Rome,
              and spend a lot of my time making things I want to exist.
            </p>
            <p>
              Sometimes that’s a way to meet someone new. Sometimes it’s a
              browser studio. Sometimes it’s a motorcycle game, because the
              first game I played never really left me.
            </p>
            <Link className="underlined-link" href="/about">
              More about the person <span>↗</span>
            </Link>
          </div>
          <div className="margin-note">
            <span>NOTE TO SELF</span>
            <p>
              Make it work.
              <br />
              Make it feel
              <br />
              <em>like something.</em>
            </p>
            <svg viewBox="0 0 140 75" aria-hidden="true">
              <path
                d="M5 10c100-40 160 75 40 45m0 0 25-13M45 55l27 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>
      <section className="more-work shell">
        <header className="section-heading">
          <p className="eyebrow">03 / More from the desk</p>
          <h2>
            OTHER THINGS
            <br />
            <em>I couldn’t leave alone.</em>
          </h2>
          <p>
            Small tools. Playable experiments.
            <br />
            Useful problems worth following.
          </p>
        </header>
        <ProjectArchive compact />
      </section>
    </div>
  );
}
