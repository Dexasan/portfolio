"use client";

import Image from "next/image";
import { useState } from "react";

const prompts = [
  "What’s something you could talk about for hours?",
  "Which song feels like home?",
  "What’s the last thing you made, just for fun?",
  "What’s a small thing that made your day?",
];

export function YappieExhibit() {
  const [prompt, setPrompt] = useState(0);
  return (
    <div className="yappie-exhibit">
      <div className="exhibit-registration">
        <span>Y / 01</span>
        <span>DESIGNED TO START SOMETHING</span>
        <span>＋</span>
      </div>
      <div className="yappie-poster">
        <p>A stranger is just</p>
        <strong>
          A CONVERSATION
          <br />
          YOU HAVEN’T
          <br />
          <em>had yet.</em>
        </strong>
        <Image
          src="/art/yappie-mouth.png"
          width={260}
          height={260}
          alt="Yappie’s original vermilion talking-mouth artwork"
          className="poster-mouth"
        />
        <span className="poster-note">
          Less scrolling.
          <br />
          More talking.
        </span>
      </div>
      <div className="phone-wrap">
        <span className="hand-note">give it a little tap ↘</span>
        <div className="yappie-phone">
          <div className="phone-island" />
          <div className="phone-brand">
            <span>
              yappie<span>✳</span>
            </span>
            <span>↗</span>
          </div>
          <p className="phone-label">A CONVERSATION STARTER</p>
          <div className="phone-art">
            <Image
              src="/art/conversation-print.png"
              width={380}
              height={254}
              alt="Two illustrated faces in conversation"
            />
          </div>
          <div className="prompt-paper" aria-live="polite">
            <span>NO. {String(prompt + 1).padStart(2, "0")}</span>
            <p>{prompts[prompt]}</p>
          </div>
          <button
            className="yappie-prompt-button"
            onClick={() => setPrompt((prompt + 1) % prompts.length)}
          >
            Another icebreaker <span aria-hidden="true">↻</span>
          </button>
          <div className="phone-tabs" aria-hidden="true">
            <b>✳ Yap</b>
            <span>Feed</span>
            <span>Clubs</span>
            <span>DMs</span>
          </div>
        </div>
        <p className="demo-caption">
          INTERACTIVE CONCEPT / NO MATCHING OR PERSONAL DATA
        </p>
      </div>
    </div>
  );
}

export function DitchExhibit() {
  const [guest, setGuest] = useState(false);
  const [layout, setLayout] = useState("split");
  return (
    <div className="ditch-exhibit">
      <div className="studio-chrome">
        <strong>
          DITCH
        </strong>
        <span>STUDIO / INTERACTIVE DEMO</span>
        <span className="preview-state">
          <i /> PREVIEW
        </span>
      </div>
      <div className="studio-body">
        <aside className="studio-scenes">
          <span>SCENES</span>
          <button
            aria-pressed={layout === "split"}
            onClick={() => setLayout("split")}
          >
            <span className="scene-icon">▥</span>Split screen
          </button>
          <button
            aria-pressed={layout === "spotlight"}
            onClick={() => setLayout("spotlight")}
          >
            <span className="scene-icon">▣</span>Spotlight
          </button>
          <div className="studio-layer-note">
            YOUR BROWSER.
            <br />
            YOUR SHOW.
          </div>
        </aside>
        <div className="studio-monitor">
          <div
            className={`studio-stage ${guest ? "has-guest" : ""} layout-${layout}`}
          >
            <div className="stage-person host">
              <Image
                src="/art/studio-host.webp"
                alt="Sample host portrait in the studio demo"
                width={600}
                height={700}
              />
              <span>
                HOST <i>01</i>
              </span>
            </div>
            {guest ? (
              <div className="stage-person guest">
                <Image
                  src="/art/studio-guest.webp"
                  alt="Sample guest portrait in the studio demo"
                  width={600}
                  height={700}
                />
                <span>
                  GUEST <i>02</i>
                </span>
              </div>
            ) : (
              <div className="empty-stage">
                <span>＋</span>
                <p>
                  THE NEXT VOICE
                  <br />
                  <em>could be anyone.</em>
                </p>
              </div>
            )}
            <span className="stage-corner tl" />
            <span className="stage-corner br" />
          </div>
          <div className="studio-controls">
            <span className="audio-meter" aria-hidden="true">
              {Array.from({ length: 15 }, (_, i) => (
                <i key={i} style={{ height: `${8 + ((i * 7) % 24)}px` }} />
              ))}
            </span>
            <span>PROGRAM OUTPUT</span>
            <span>16:9</span>
          </div>
        </div>
      </div>
      <div className="studio-bottom">
        <p aria-live="polite">
          {guest
            ? "The viewer is now part of the show."
            : "There’s someone waiting backstage."}
        </p>
        <button className="studio-admit" onClick={() => setGuest(!guest)}>
          {guest ? "Remove demo guest" : "Bring the guest on"}{" "}
          <span aria-hidden="true">{guest ? "−" : "↗"}</span>
        </button>
      </div>
      <p className="studio-disclaimer">
        A LOCAL LAYOUT DEMO. NO CAMERA, MICROPHONE, OR LIVE BROADCAST.
      </p>
    </div>
  );
}
