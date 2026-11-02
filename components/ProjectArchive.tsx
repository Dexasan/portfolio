"use client";
import { useState } from "react";
import { projects } from "@/lib/collection";
import ArcadeSelect from "./ArcadeSelect";

const marks: Record<string,string> = { yappie:"/art/yappie-poster.webp", ditch:"/art/ditch-poster.webp", roadrash:"/art/roadrash-poster.webp" };
const filters = ["all", "apps & experiences", "engineering tools"];
export default function ProjectArchive({compact=false}:{compact?:boolean}) {
  const [filter,setFilter]=useState("all");
  const listed=compact?projects.slice(2,6):projects.filter((_,i)=>filter==="all"||(filter==="apps & experiences"?i<6:i>=6));
  return <div className="project-archive">
    {!compact&&<div className="archive-filters" role="group" aria-label="Filter projects">{filters.map(item=><button key={item} aria-pressed={item===filter} onClick={()=>setFilter(item)}>{item}</button>)}<span aria-live="polite">{listed.length} projects</span></div>}
    <ArcadeSelect label="choose a project" items={listed.map(project=>({id:project.slug,title:project.name,kind:project.kind,summary:project.description,href:'/work/'+project.slug,art:marks[project.slug]??`/art/marks/${project.slug}.webp`,meta:project.status.toLowerCase()+' · '+project.stack}))}/>
  </div>;
}
