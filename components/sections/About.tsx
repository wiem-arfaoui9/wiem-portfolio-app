"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: GraduationCap,
    title: "Étudiante en informatique",
    text: "3e année de la Licence en Technologie de l'Informatique (DSI) à l'ISET Zaghouan, en Tunisie.",
  },
  {
    icon: Code2,
    title: "Du backend au frontend",
    text: "Spring Boot et Angular pendant mon stage chez SIGA ; Laravel, React et Next.js dans mes projets personnels.",
  },
  {
    icon: Cpu,
    title: "IA et cybersécurité",
    text: "Certificat NVIDIA Fundamentals of Deep Learning, et membre actif du club de cybersécurité SecuriNets.",
  },
  {
    icon: Sparkles,
    title: "Vie associative",
    text: "Webmaster du club IEEE de l'ISET Zaghouan et membre étudiant IEEE. J'aime contribuer à des projets concrets en équipe.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 · À propos"
          title="Étudiante développeuse."
          description="Je cherche un stage de PFE (2026/2027) en développement full-stack, pour contribuer à des projets concrets au sein d'une équipe."
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
