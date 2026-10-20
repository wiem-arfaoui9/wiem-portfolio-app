"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

const accentMap = {
  violet: "from-violet/25 via-violet/5",
  cyan: "from-cyan/25 via-cyan/5",
  amber: "from-amber/25 via-amber/5",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} data-cursor="pointer" className="block">
        <div
          className={`glass relative overflow-hidden rounded-2xl p-1 transition-transform duration-300 group-hover:-translate-y-1.5`}
        >
          <div
            className={`relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${accentMap[project.accent]} to-transparent`}
          >
            <div className="absolute inset-0 grid-overlay opacity-40" />
            <span className="relative font-display text-4xl font-medium text-ink/90 md:text-5xl">
              {project.name}
            </span>
            <span className="absolute right-4 top-4 rounded-full border border-border-subtle bg-bg/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-muted backdrop-blur">
              {project.status}
            </span>
            {project.flagship && (
              <span className="absolute left-4 top-4 rounded-full bg-amber/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber">
                Flagship
              </span>
            )}
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl text-ink">{project.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">{project.tagline}</p>
              </div>
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle text-ink transition-all group-hover:border-violet-soft group-hover:bg-violet-soft/10">
                <ArrowUpRight size={16} />
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((t) => (
                <span key={t} className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] text-ink-muted">
                  {t}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] text-ink-muted">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
