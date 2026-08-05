"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  const [active, setActive] = useState<(typeof skillCategories)[number]>("Frontend");
  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 · Skills"
          title="A technology ecosystem, not a checklist."
          description="Each skill is used across real projects below — not just listed. Filter by category to explore."
        />

        <div className="mt-12 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              data-cursor="pointer"
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                active === cat
                  ? "bg-ink text-bg"
                  : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="glass rounded-xl p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-base text-ink">{skill.name}</span>
                  <span className="font-mono text-xs text-ink-muted">{skill.level}%</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
