"use client";
import { useState } from "react";
const modes = [
  { id: "yappie", name: "Yappie", caption: "A new conversation starts here." },
  { id: "ditch", name: "DITCH", caption: "The audience becomes the show." },
  {
    id: "code",
    name: "The build",
    caption: "An idea. A browser. A lot of figuring it out.",
  },
];
export default function DesktopComputer() {
  const [mode, setMode] = useState("yappie");
  return (
    <div className="computer-installation">
      <div className="computer-orbit" aria-hidden="true" />
      <span className="computer-annotation">
        a few things
        <br />
        <em>running in my head.</em>
      </span>
      <div className="physical-computer">
        <div className="computer-bezel">
          <div className="computer-camera" />
          <div className={`computer-screen screen-${mode}`}>
            <div className="screen-menubar">
              <span>sandesh / {mode}</span>
              <span>↗</span>
            </div>
            {mode === "yappie" ? (
              <div className="monitor-yappie">
                <span>yappie</span>
                <img
                  src="/art/conversation-print.png"
                  alt="Yappie’s two illustrated faces in conversation"
                />
                <p>
                  LESS SCROLLING.
                  <br />
                  <em>More talking.</em>
                </p>
              </div>
            ) : mode === "ditch" ? (
              <div className="monitor-ditch">
                <b>
                  DITCH<span>↗</span>
                </b>
                <div className="mini-broadcast">
                  <img src="/art/studio-host.webp" alt="DITCH sample host" />
                  <img src="/art/studio-guest.webp" alt="DITCH sample guest" />
                </div>
                <span>ONE STAGE. EVERYONE’S INVITED.</span>
              </div>
            ) : (
              <div className="monitor-code">
                <span>~/sandesh/projects</span>
                <p>
                  <i>const</i> curiosity = <strong>true</strong>;
                </p>
                <p>
                  <i>while</i> (curiosity) {"{"}
                </p>
                <p>
                  &nbsp; learn();
                  <br />
                  &nbsp; build();
                  <br />
                  &nbsp; tryAgain();
                </p>
                <p>{"}"}</p>
                <span className="terminal-cursor">▌</span>
              </div>
            )}
          </div>
          <div className="computer-bottom">
            <span>SC / PERSONAL COMPUTER</span>
            <span className="computer-led" />
          </div>
        </div>
        <div className="computer-neck" />
        <div className="computer-foot" />
      </div>
      <svg
        className="computer-cable"
        viewBox="0 0 500 180"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M216 5C50 0 22 100 137 110c107 8 32 65 147 49s111-82 172-58"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path d="m449 87 18 10-13 15" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="computer-spark" aria-hidden="true">
        ✳
      </span>
      <div className="computer-dock" aria-label="Explore the computer screen">
        {modes.map((item) => (
          <button
            key={item.id}
            onClick={() => setMode(item.id)}
            aria-pressed={mode === item.id}
          >
            {item.id === "yappie" ? (
              <img src="/art/yappie-mouth.png" alt="" />
            ) : (
              <span>{item.id === "ditch" ? "D↗" : "{ }"}</span>
            )}
            <small>{item.name}</small>
          </button>
        ))}
      </div>
      <p className="computer-caption" aria-live="polite">
        {modes.find((item) => item.id === mode)?.caption}
      </p>
    </div>
  );
}
