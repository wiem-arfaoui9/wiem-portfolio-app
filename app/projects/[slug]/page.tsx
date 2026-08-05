import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Layers, Target, Sparkles, TrendingUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Wiem Arfaoui`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <Navbar />
      <main className="px-6 pb-28 pt-36">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.flagship && (
              <span className="rounded-full bg-amber/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber">
                Flagship Project
              </span>
            )}
            <span className="font-mono text-xs text-ink-muted">{project.year}</span>
            <span className="font-mono text-xs text-ink-muted">·</span>
            <span className="font-mono text-xs text-ink-muted">{project.role}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-medium text-ink sm:text-5xl md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-3 text-lg text-ink-muted">{project.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                data-cursor="pointer"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-ink transition-colors hover:bg-white/5"
              >
                <GithubIcon size={15} /> View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                data-cursor="pointer"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-90"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          <div className="mt-16 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="glass rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted">
                {t}
              </span>
            ))}
          </div>

          {/* Architecture */}
          <section className="mt-16">
            <div className="mb-6 flex items-center gap-2 text-violet-soft">
              <Layers size={18} />
              <h2 className="font-mono text-xs uppercase tracking-[0.3em]">Architecture</h2>
            </div>
            <div className="flex flex-col">
              {project.architecture.map((step, i) => (
                <div key={step.label} className="relative pl-10">
                  {i < project.architecture.length - 1 && (
                    <span className="absolute left-[15px] top-8 h-full w-px bg-border-subtle" />
                  )}
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border-subtle font-mono text-xs text-ink-muted">
                    {i + 1}
                  </span>
                  <div className="glass mb-4 rounded-xl p-4">
                    <p className="font-display text-base text-ink">{step.label}</p>
                    <p className="mt-1 text-sm text-ink-muted">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mt-14">
            <div className="mb-6 flex items-center gap-2 text-violet-soft">
              <Sparkles size={18} />
              <h2 className="font-mono text-xs uppercase tracking-[0.3em]">Features</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <div key={f} className="glass rounded-xl px-4 py-3 text-sm text-ink-muted">
                  {f}
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="mt-14">
            <div className="mb-6 flex items-center gap-2 text-violet-soft">
              <Target size={18} />
              <h2 className="font-mono text-xs uppercase tracking-[0.3em]">Challenges &amp; Solutions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {project.challenges.map((c) => (
                <div key={c.title} className="glass rounded-xl p-5">
                  <p className="font-display text-base text-ink">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mt-14">
            <div className="mb-6 flex items-center gap-2 text-violet-soft">
              <TrendingUp size={18} />
              <h2 className="font-mono text-xs uppercase tracking-[0.3em]">Results</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {project.results.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {r}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mx-auto mt-24 max-w-6xl">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">More projects</p>
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
