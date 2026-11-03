"use client";

import Link from "next/link";
import { KeyboardEvent, useRef, useState } from "react";

export type SelectItem = {
  id: string; title: string; short?: string; kind: string; summary: string;
  href: string; art: string; meta?: string; action?: string;
};

export default function ArcadeSelect({ items, label, variant = "projects" }: {items: SelectItem[]; label: string; variant?: "paths"|"projects"}) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const controls = useRef<Array<HTMLButtonElement|HTMLAnchorElement|null>>([]);
  const selected = items.find(item=>item.id===selectedId) ?? items[0];
  if (!selected) return <p>No projects in this selection.</p>;

  function move(event: KeyboardEvent<HTMLElement>, index: number) {
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
      {items.map((item,index)=>variant==="paths"?<Link href={item.href} className="select-tile" key={item.id} ref={node=>{controls.current[index]=node;}} data-selected={selected.id===item.id} onFocus={()=>setSelectedId(item.id)} onPointerEnter={event=>{if(event.pointerType==="mouse")setSelectedId(item.id);}} onKeyDown={event=>move(event,index)}>
        <span className="select-tile-art"><img src={item.art} width="120" height="120" alt=""/></span>
        <span className="select-tile-name">{item.short??item.title}</span>
        <span className="select-path-description">{item.summary}</span>
        <span className="select-path-arrow" aria-hidden="true">↗</span>
        <span className="selection-corner" aria-hidden="true"/>
      </Link>:<button className="select-tile" type="button" key={item.id} ref={node=>{controls.current[index]=node;}} data-selected={selected.id===item.id} aria-pressed={selected.id===item.id} aria-controls={`${variant}-preview`} onClick={()=>setSelectedId(item.id)} onFocus={()=>setSelectedId(item.id)} onPointerEnter={event=>{if(event.pointerType==="mouse")setSelectedId(item.id);}} onKeyDown={event=>move(event,index)}>
        <span className="select-tile-art"><img src={item.art} width="120" height="120" alt=""/></span>
        <span className="select-tile-name">{item.short??item.title}</span>
        <span className="selection-corner" aria-hidden="true"/>
      </button>)}
    </div>
    {variant==="projects"&&<div className="select-preview" id={`${variant}-preview`}>
      <div className="select-entry" key={selected.id}>
        <div className="select-preview-art" aria-hidden="true"><img src={selected.art} alt="" width="200" height="200"/></div>
        <div className="select-copy" aria-live="polite" aria-atomic="true"><p className="select-kind">{selected.kind.toLowerCase()}</p><h3>{selected.title}</h3><p className="select-summary">{selected.summary}</p>{selected.meta&&<p className="select-meta">{selected.meta}</p>}</div>
      </div>
      <Link href={selected.href} className="select-open">{selected.action??`open ${selected.title.toLowerCase()}`}<span aria-hidden="true">↗</span></Link>
    </div>}
  </section>;
}
