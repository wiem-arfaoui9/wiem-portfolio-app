"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: GraduationCap,
    title: "Computer Science student",
    text: "Third year of the Licence en Technologie de l'Informatique (DSI) at ISET Zaghouan, Tunisia.",
  },
  {
    icon: Code2,
    title: "Full-stack in practice",
    text: "Spring Boot and Angular during my SIGA internship; Laravel, React and Next.js in my personal projects.",
  },
  {
    icon: Cpu,
    title: "AI & security curiosity",
    text: "NVIDIA Fundamentals of Deep Learning certificate, and an active member of the SecuriNets cybersecurity club.",
  },
  {
    icon: Sparkles,
    title: "Team & community",
    text: "Webmaster of the IEEE club at ISET Zaghouan, and IEEE Student Member. I enjoy contributing to concrete projects in a team.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 · About"
          title="A student developer who builds."
          description="Looking for a PFE internship (2026/2027) in full-stack software development, where I can contribute to real projects as part of a team."
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
