"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 · Experience"
          title="Internships, projects, studies."
          description="A timeline of my internships and personal projects."
        />

        <ol className="relative mt-16 border-l border-border-subtle pl-8 md:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-violet bg-bg md:-left-[49px]">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-soft transition-transform group-hover:scale-150" />
              </span>

              <div className="glass rounded-2xl p-6 transition-colors group-hover:bg-white/[0.06]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-display text-xl text-ink md:text-2xl">{item.title}</h4>
                  <span className="font-mono text-xs text-cyan">{item.date}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{item.place}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border-subtle px-2.5 py-1 font-mono text-[10px] text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
