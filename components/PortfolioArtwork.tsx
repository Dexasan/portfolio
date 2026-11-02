"use client";

import { usePathname } from "next/navigation";

export default function PortfolioArtwork() {
  const path = usePathname();
  if (path === "/cv" || path === "/deck") return null;
  return <div className="portfolio-artwork" aria-hidden="true">
    <figure className="margin-keyboard">
      <svg viewBox="0 0 310 300" fill="none">
        <defs><pattern id="keyboard-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><path d="m0 7 7-7" stroke="currentColor" strokeWidth=".65"/></pattern></defs>
        <g transform="translate(20 35) rotate(-14 140 100)">
          <path className="art-solid" d="m8 70 262-8 15 118-268 13z"/>
          <path className="art-outline" d="m4 65 264-9 16 122-274 15zM13 178l270-15M24 82l226-7"/>
          {[0,1,2,3].map(row=><g key={row}>{Array.from({length:10},(_,col)=><path className="art-key" key={col} d={`m${25+col*22+row*1.5} ${88+row*18} 15-.6 1.5 11.5-15 1z`}/>)}</g>)}
          <path className="art-key" d="m70 163 126-4 1 11-125 5zM23 165l32-1 1 11-31 1zM211 159l45-2 2 11-46 2z"/>
          <path className="art-hatch" d="m9 180 272-15 3 13-274 15z"/>
          <path className="art-outline" d="M142 59C141 27 246 43 232 6M94 100l9-1m100 49 9-1M36 90l4 5"/>
        </g>
        <path className="art-outline" d="M45 270c-27-6-25-44-6-48 26-8 34 31 14 45M41 222l6 21m-13-6 21-4"/>
      </svg>
      <figcaption>computers, since road rash.</figcaption>
    </figure>
    <figure className="margin-conversation"><img src="/art/conversation-blue.webp" width="900" height="600" alt=""/><figcaption>someone on the other side.</figcaption></figure>
    <figure className="margin-controller">
      <svg viewBox="0 0 300 210" fill="none">
        <path className="art-solid" d="M55 50C37 49 13 159 35 173c16 12 40-30 57-36l112-3c22 6 37 42 57 33 26-12-7-114-29-120z"/>
        <path className="art-outline" d="M54 43C30 43 7 160 31 178c22 15 45-28 62-35l110-3c21 5 43 47 65 32 28-20-8-130-35-133zM90 45c8-21 87-31 105-3"/>
        <path className="art-outline" d="m63 71 17-1 1 18 18-1 1 17-18 1 1 19-17 1-1-19-18 1-1-17 18-1z"/>
        <circle className="art-key" cx="220" cy="79" r="12"/><circle className="art-key" cx="241" cy="102" r="12"/><circle className="art-key" cx="197" cy="101" r="12"/><circle className="art-key" cx="218" cy="124" r="12"/>
        <path className="art-outline" d="m122 110 16-1m13-1 16-1M148 34C130-8 211 21 207 0M30 150l20-9m199 5 14 8"/>
      </svg>
      <figcaption>the games came first.</figcaption>
    </figure>
  </div>;
}
