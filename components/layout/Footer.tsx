import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, socials } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="font-display text-xl font-medium text-ink">
            Wiem Arfaoui
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Full Stack Developer building learning platforms, secure pipelines and clean web experiences.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              data-cursor="pointer"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              data-cursor="pointer"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              data-cursor="pointer"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Navigate</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Based in</p>
            <p className="mt-4 text-sm text-ink-muted">Zaghouan, Tunisia</p>
            <p className="mt-2 text-sm text-ink-muted">Open to remote alternance</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 text-xs text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Wiem Arfaoui. Built from scratch with Next.js.</p>
        <p className="font-mono">status: open to alternance</p>
      </div>
    </footer>
  );
}
