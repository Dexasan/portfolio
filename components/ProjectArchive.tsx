"use client";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/collection";

const filters = ["all", "apps & experiences", "engineering tools"];
export default function ProjectArchive({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [filter, setFilter] = useState("all");
  const listed = compact
    ? projects.slice(2, 6)
    : projects.filter(
        (_, i) =>
          filter === "all" ||
          (filter === "apps & experiences" ? i < 6 : i >= 6),
      );
  return (
    <div className="project-archive">
      {!compact && (
        <div className="archive-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={item === filter}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "all" && <sup>12</sup>}
            </button>
          ))}
          <span aria-live="polite">{listed.length} projects</span>
        </div>
      )}
      <div className="archive-rows">
        {listed.map((project) => (
          <article className="archive-row" key={project.slug}>
            <div className="archive-name">
              <span>{project.kind}</span>
              <h3>
                <Link href={`/work/${project.slug}`}>
                  {project.name}
                  <span aria-hidden="true">↗</span>
                </Link>
              </h3>
            </div>
            <p>{project.description}</p>
            <span className="archive-status">{project.status}</span>
            <Link
              className="archive-open"
              href={`/work/${project.slug}`}
              aria-label={`Read about ${project.name}`}
            >
              ↗
            </Link>
          </article>
        ))}
      </div>
      {compact && (
        <Link className="underlined-link" href="/work">
          Every experiment. Every build. <span>View all 12 ↗</span>
        </Link>
      )}
    </div>
  );
}
