"use client";

import { motion } from "framer-motion";
import { GitBranch, GitCommit, Star, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { socials } from "@/data/nav";

const stats = [
  { icon: GitCommit, label: "Contributions this year", value: "620+" },
  { icon: GitBranch, label: "Repositories", value: "24" },
  { icon: Star, label: "Stars earned", value: "35" },
  { icon: Users, label: "Followers", value: "18" },
];

// Deterministic pseudo-random generator so the contribution grid is stable across renders.
function seeded(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const weeks = 42;
const days = 7;

export default function GitHubSection() {
  return (
    <section id="github" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 · Open Source"
          title="Consistency, tracked in commits."
          description="A snapshot of activity across personal projects, academic work and experiments."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <s.icon className="text-violet-soft" size={20} />
              <p className="mt-4 font-display text-3xl text-ink">{s.value}</p>
              <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-6 overflow-x-auto rounded-2xl p-6"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Contribution activity</p>
            <a
              href={socials.github}
              target="_blank"
              data-cursor="pointer"
              className="font-mono text-xs text-violet-soft transition-colors hover:text-cyan"
            >
              @wiemarfaoui →
            </a>
          </div>
          <div className="mt-5 grid min-w-[600px] grid-flow-col gap-1" style={{ gridTemplateRows: `repeat(${days}, 1fr)` }}>
            {Array.from({ length: weeks * days }).map((_, i) => {
              const intensity = seeded(i * 12.9898);
              const level =
                intensity > 0.85 ? 4 : intensity > 0.65 ? 3 : intensity > 0.45 ? 2 : intensity > 0.25 ? 1 : 0;
              const opacity = [0.06, 0.25, 0.45, 0.7, 1][level];
              return (
                <div
                  key={i}
                  className="h-3 w-3 rounded-[3px]"
                  style={{
                    background: level === 0 ? "var(--border-subtle)" : "var(--violet)",
                    opacity: level === 0 ? 1 : opacity,
                  }}
                />
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-ink-muted">
            Less
            {[0, 0.25, 0.45, 0.7, 1].map((o, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-[3px]"
                style={{ background: o === 0 ? "var(--border-subtle)" : "var(--violet)", opacity: o === 0 ? 1 : o }}
              />
            ))}
            More
          </div>
        </motion.div>
      </div>
    </section>
  );
}
