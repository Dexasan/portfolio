"use client";
import { useState } from "react";
const moods = ["making", "learning", "thinking"] as const;
const captions = { making: "usually making something i wanted to exist.", learning: "still a lot to learn. that's kind of the point.", thinking: "what could a computer actually become?" };
export default function Portrait() {
    const [mood, setMood] = useState<typeof moods[number]>("making");
    return <div className={`portrait-composition mood-${mood}`}>
  <div className="portrait-stage">
   <svg className="portrait-marks" viewBox="0 0 540 340" fill="none" aria-hidden="true">
    <path className="orbit-mark" d="M127 189C-10 81 110 27 272 61c215 45 346 166 223 213-101 39-286-29-357-112"/>
    <g className="making-mark"><path d="m65 147-22 20 23 19m32-43 25 22-23 22m-13-55-12 66M421 230l33 12-13 9 2 19-12-14-12 6z"/><path d="m40 249 36-5 17 14 22-6m-56-15 12 7-6 8"/></g>
    <g className="learning-mark"><path d="M25 144q33-13 60 8v69q-28-21-60-8zm60 8q25-21 58-8v69q-33-8-58 8m0-64v60M425 114l30-17 30 17-30 18zm10 7v20q20 16 40 0v-20"/></g>
    <g className="thinking-mark"><path d="M45 166c-28-35 42-65 52-20 21-24 56 12 29 31-13 12-32 17-48 37-13-26-32-20-33-48zM425 139c38-36 87 5 57 36-19 18-27 26-26 44m-9 11h18m-17 9h15"/></g>
    <path d="m155 44 7-21m-26 31-14-12m232 251 15 16m-5-35 22 5"/>
    <path className="red-scribble" d="M147 285c79 18 170 12 245-9M148 291c86 14 154 13 235-7"/>
    <path d="m460 61 5 12 13 3-12 6-3 14-6-13-13-3 13-5z"/>
   </svg>
   <img className="ink-portrait" src="/art/sandesh-ink.webp" alt="An ink portrait of Sandesh, with curly hair and a slight smile" width="1254" height="1254" fetchPriority="high"/>
   <span className="portrait-note">that's me, btw.</span>
  </div>
  <div className="portrait-switch" aria-label="Change the portrait artwork">{moods.map(item => <button key={item} aria-pressed={mood === item} onClick={() => setMood(item)}>{item}</button>)}</div>
  <p className="portrait-caption" aria-live="polite">{captions[mood]}</p>
 </div>;
}
