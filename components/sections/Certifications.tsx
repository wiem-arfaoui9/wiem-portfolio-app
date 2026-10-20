"use client";

import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications, engagements } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 · Certifications"
          title="Certifications & involvement."
          description="Certificates earned and student-club commitments."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6"
            >
              <Award className="text-violet-soft" size={20} />
              <h3 className="mt-4 font-display text-lg text-ink">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{c.issuer}</p>
              {c.detail && <p className="mt-2 text-xs text-ink-muted">{c.detail}</p>}
              {c.date && <p className="mt-3 font-mono text-xs text-cyan">{c.date}</p>}
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {engagements.map((e) => (
            <div key={e.title} className="glass flex gap-4 rounded-2xl p-6">
              <Users className="mt-1 shrink-0 text-cyan" size={20} />
              <div>
                <h3 className="font-display text-base text-ink">{e.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
