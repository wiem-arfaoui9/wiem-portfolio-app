"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor="pointer"
        className="glass flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
          <span className={project.kind === "Stage" ? "text-cyan" : "text-violet-soft"}>{project.kind}</span>
          <span className="text-ink-muted">·</span>
          <span className="text-ink-muted">{project.status.label}</span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle text-ink transition-colors group-hover:border-violet-soft group-hover:bg-violet-soft/10">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.tagline}</p>

        <p className="mt-5 font-mono text-xs text-ink-muted">
          {project.architecture.map((s) => s.label).join(" → ")}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] text-ink-muted">
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
