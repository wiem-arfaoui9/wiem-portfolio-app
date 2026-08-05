"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const stacks = projects.map((p) => ({ name: p.name, steps: p.architecture.map((s) => s.label) }));

export default function ArchitectureDiagram() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % stacks.length), 4200);
    return () => clearInterval(id);
  }, []);

  const active = stacks[index];

  return (
    <div className="relative w-full max-w-md rounded-2xl border border-border-subtle bg-bg-elevated/60 p-5 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted">Live architecture</span>
        <span className="flex h-1.5 w-1.5 animate-pulse-slow rounded-full bg-cyan" />
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active.name}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.35 }}
          className="mb-5 font-display text-sm text-ink"
        >
          {active.name}
        </motion.p>
      </AnimatePresence>

      <div className="relative flex flex-col gap-3">
        <svg className="pointer-events-none absolute left-[19px] top-0 h-full w-1" viewBox="0 0 4 100" preserveAspectRatio="none">
          <line x1="2" y1="0" x2="2" y2="100" stroke="var(--border-subtle)" strokeWidth="2" />
          <motion.circle
            r="3"
            fill="var(--cyan)"
            initial={{ cy: 0 }}
            animate={{ cy: [0, 100] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            className="flex flex-col gap-3"
          >
            {active.steps.map((step) => (
              <motion.div
                key={step}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  show: { opacity: 1, x: 0 },
                }}
                className="relative flex items-center gap-3 pl-1"
              >
                <span className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-violet bg-bg-elevated">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-soft" />
                </span>
                <span className="glass w-full rounded-lg px-3 py-2 font-mono text-xs text-ink">{step}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex gap-1.5">
        {stacks.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setIndex(i)}
            aria-label={`Show ${s.name} architecture`}
            className={`h-1 flex-1 rounded-full transition-colors ${i === index ? "bg-violet-soft" : "bg-border-subtle"}`}
          />
        ))}
      </div>
    </div>
  );
}
