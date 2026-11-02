"use client";

import Link from "next/link";
import { KeyboardEvent, useRef, useState } from "react";

export type SelectItem = {
  id: string; title: string; short?: string; kind: string; summary: string;
  href: string; art?: string; glyph?: string; meta?: string; action?: string;
};

function Glyph({ kind }: { kind?: string }) {
  return <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
    {kind === "mind" ? <><path d="M49 19c-18-10-33 6-29 23-17 10-14 31 2 37-3 18 14 29 27 20V19Zm22 0c18-10 33 6 29 23 17 10 14 31-2 37 3 18-14 29-27 20V19Z"/><path d="m31 39 18 11-19 17 19 14m40-42L71 50l19 17-19 14M49 60h22"/></>
    : kind === "computer" ? <><path d="M15 22h90v61H15zM46 83v16m28-16v16H33m0 0h54"/><path d="m29 43 10 10-10 10m23 0h20"/><circle cx="95" cy="92" r="3"/></>
    : kind === "signal" ? <><path d="M10 61h16l10-30 17 60 15-70 14 40h28"/><path d="M10 15v90h100"/></>
    : kind === "flow" ? <><path d="M18 15h30v24H18zm54 66h30v24H72zM18 81h30v24H18zM33 39v18h54v24M33 57v24M72 15h30v24H72zM87 39v18"/></>
    : kind === "ledger" ? <><path d="M23 12h74v96H23zM39 34h42M39 53h42M39 72h18m15 0h9M39 91h18m15 0h9M64 23v74"/></>
    : kind === "search" ? <><circle cx="50" cy="49" r="32"/><path d="m74 73 31 32M32 49h36M50 31v36"/></>
    : kind === "brake" ? <><path d="m40 13 40 0 27 27v40l-27 27H40L13 80V40Z"/><path d="M47 37v46m26-46v46"/></>
    : kind === "mail" ? <><path d="M12 28h96v66H12zM12 28l48 37 48-37M12 94l30-31m66 31L78 63"/></>
    : <><path d="m37 28-27 32 27 32m46-64 27 32-27 32M69 17 51 103"/><path d="M12 12h19M12 12v19m96 77H89m19 0V89"/></>}
  </svg>;
}

export default function ArcadeSelect({ items, label, variant = "projects" }: {items: SelectItem[]; label: string; variant?: "paths"|"projects"}) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const controls = useRef<Array<HTMLButtonElement|null>>([]);
  const selected = items.find(item=>item.id===selectedId) ?? items[0];
  if (!selected) return <p>No projects in this selection.</p>;

  function move(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const firstTop = controls.current[0]?.offsetTop;
    const columns = controls.current.filter(node=>node&&node.offsetTop===firstTop).length || 3;
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : event.key === "ArrowDown" ? columns : event.key === "ArrowUp" ? -columns : 0;
    if (!step && event.key!=="Home" && event.key!=="End") return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? items.length-1 : (index+step+items.length)%items.length;
    setSelectedId(items[next].id);
    controls.current[next]?.focus();
  }

  return <section className={`arcade-select arcade-${variant}`} aria-label={label}>
    <div className="select-heading"><span className="select-indicator" aria-hidden="true"/><h2>{label}</h2><span className="select-hint">pick one ↓</span></div>
    <div className="select-grid" role="group" aria-label={label}>
      {items.map((item,index)=><button type="button" key={item.id} ref={node=>{controls.current[index]=node;}} aria-pressed={selected.id===item.id} aria-controls={`${variant}-preview`} onClick={()=>setSelectedId(item.id)} onFocus={()=>setSelectedId(item.id)} onPointerEnter={event=>{if(event.pointerType==="mouse")setSelectedId(item.id);}} onKeyDown={event=>move(event,index)}>
        <span className="select-tile-art">{item.art?<img src={item.art} width="120" height="120" alt=""/>:<Glyph kind={item.glyph}/>}</span>
        <span className="select-tile-name">{item.short??item.title}</span>
        <span className="selection-corner" aria-hidden="true"/>
      </button>)}
    </div>
    <div className="select-preview" id={`${variant}-preview`}>
      <div className="select-entry" key={selected.id}>
        <div className="select-preview-art" aria-hidden="true">{selected.art?<img src={selected.art} alt="" width="200" height="200"/>:<Glyph kind={selected.glyph}/>}</div>
        <div className="select-copy" aria-live="polite" aria-atomic="true"><p className="select-kind">{selected.kind.toLowerCase()}</p><h3>{selected.title}</h3><p className="select-summary">{selected.summary}</p>{selected.meta&&<p className="select-meta">{selected.meta}</p>}</div>
      </div>
      <Link href={selected.href} className="select-open">{selected.action??`open ${selected.title.toLowerCase()}`}<span aria-hidden="true">↗</span></Link>
    </div>
    <p className="select-help">tap a tile, then open it. <span>keyboard: arrow keys to choose.</span></p>
  </section>;
}
