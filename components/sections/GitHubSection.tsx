"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { socials } from "@/data/nav";
import type { GithubRepo } from "@/lib/github";

export default function GitHubSection({ repos }: { repos: GithubRepo[] | null }) {
  const shown = repos?.slice(0, 6) ?? [];

  return (
    <section id="github" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="06 · GitHub"
          title="Mon code sur GitHub."
          description="Mes dépôts publics, récupérés directement depuis GitHub."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <motion.a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass group rounded-2xl p-6 transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg text-ink">{r.name}</h3>
                <ArrowUpRight size={16} className="shrink-0 text-ink-muted transition-colors group-hover:text-violet-soft" />
              </div>
              <p className="mt-2 min-h-10 text-sm text-ink-muted">{r.description ?? "Pas encore de description."}</p>
              <div className="mt-4 flex items-center gap-4 font-mono text-xs text-ink-muted">
                {r.language && <span className="text-cyan">{r.language}</span>}
                {r.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {r.stars}
                  </span>
                )}
              </div>
            </motion.a>
          ))}

          <motion.a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass flex min-h-40 flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center transition-colors hover:bg-white/[0.06]"
          >
            <GithubIcon size={26} className="text-violet-soft" />
            <span className="font-display text-base text-ink">@{socials.githubUser}</span>
            <span className="font-mono text-xs text-ink-muted">
              {repos ? "Voir tous les dépôts →" : "Ouvrir mon profil GitHub →"}
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
