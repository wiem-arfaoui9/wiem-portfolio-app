"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return ["All", "Next.js", "Laravel", "Docker", ...Array.from(set).filter((t) => !["Next.js", "Laravel", "Docker"].includes(t)).slice(0, 3)];
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.technologies.includes(filter));

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="03 · Selected Work"
            title="Real applications, real architecture."
            description="Three projects that shaped how I build software — from gamified learning to automated security."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor="pointer"
              className={`rounded-full px-4 py-2 font-mono text-xs transition-all ${
                filter === f ? "bg-ink text-bg" : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
