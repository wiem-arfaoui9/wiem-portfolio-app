"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    text: "Currently studying at ISET Zaghouan, Tunisia — building a solid foundation in algorithms, systems and software engineering.",
  },
  {
    icon: Code2,
    title: "Full Stack Specialist",
    text: "Comfortable across the whole stack: Laravel and REST APIs on the backend, Next.js and React on the frontend.",
  },
  {
    icon: Cpu,
    title: "DevOps Curious",
    text: "I like understanding what happens after 'git push' — CI/CD, containers and automated security pipelines included.",
  },
  {
    icon: Sparkles,
    title: "Driven by Real Projects",
    text: "I learn fastest by shipping. Every project here is a real, working application — not a tutorial clone.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 · About"
          title="A developer who ships, not just studies."
          description="Passionate about turning ideas into working software — with a growing interest in DevOps and AI along the way."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
            >
              <p.icon className="mb-4 text-violet-soft transition-transform group-hover:-translate-y-1" size={22} />
              <h3 className="font-display text-lg text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
