import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { projects, getProjectBySlug } from "@/data/projects";
import type { ReactNode } from "react";
import ProjectCard from "@/components/projects/ProjectCard";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.kind}`,
    description: project.tagline,
    openGraph: { title: `${project.name} — Wiem Arfaoui`, description: project.tagline },
  };
}

function Block({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="mt-12 border-t border-border-subtle pt-8">
      <h2 className="flex items-baseline gap-3 font-display text-xl text-ink">
        <span className="font-mono text-xs text-violet-soft">{n}</span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-3xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink">
            <ArrowLeft size={14} /> Retour aux projets
          </Link>

          {/* 1. Nom et description courte */}
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-violet-soft">
            {project.kind} · {project.status.label}
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">{project.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{project.tagline}</p>
          {project.context && <p className="mt-2 text-sm text-ink-muted">{project.context}</p>}

          {/* 2. Objectif */}
          <Block n="01" title="Objectif">
            <p className="text-sm leading-relaxed text-ink-muted">{project.objective}</p>
            <p className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-ink">
              {project.architecture.map((s, i) => (
                <span key={s.label} className="flex items-center gap-2">
                  <span className="glass rounded-lg px-3 py-1.5">
                    {s.label} <span className="text-ink-muted">· {s.detail}</span>
                  </span>
                  {i < project.architecture.length - 1 && <ArrowRight size={14} className="text-ink-muted" />}
                </span>
              ))}
            </p>
          </Block>

          {/* 3. Fonctionnalités réalisées */}
          <Block n="02" title={project.achievedLabel}>
            <List items={project.achieved} />
            {project.planned && (
              <div className="mt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-amber">Objectifs (pas encore terminés)</p>
                <List items={project.planned} />
              </div>
            )}
          </Block>

          {/* 4. Technologies */}
          <Block n="03" title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted">
                  {t}
                </span>
              ))}
            </div>
          </Block>

          {/* 5. Rôle et contribution */}
          <Block n="04" title="Mon rôle et ma contribution">
            <p className="mb-4 text-sm leading-relaxed text-ink">{project.role}</p>
            <List items={project.contribution} />
            {project.skills && (
              <div className="mt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-muted">Compétences pratiquées</p>
                <List items={project.skills} />
              </div>
            )}
          </Block>

          {/* 6. État actuel */}
          <Block n="05" title="État actuel">
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">{project.status.label}.</span> {project.status.detail}
            </p>
          </Block>

          {/* 7. Dépôt GitHub (seulement s'il existe) */}
          {project.github && (
            <Block n="06" title="Code source">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="pointer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-ink transition-colors hover:bg-white/5"
              >
                <GithubIcon size={15} /> Voir le dépôt GitHub
              </a>
            </Block>
          )}
        </article>

        <div className="mx-auto mt-24 max-w-6xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">Autres projets</p>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}


