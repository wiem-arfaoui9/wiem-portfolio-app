import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { gmailComposeUrl, navLinks, socials } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link href="/" className="font-display text-xl font-medium text-ink">
            Wiem Arfaoui
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Étudiante en informatique à l&apos;ISET Zaghouan, à la recherche d&apos;un stage de PFE en développement full-stack (2026/2027).
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
{socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                data-cursor="pointer"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            )}
            <a
              href={gmailComposeUrl(socials.email)}
              target="_blank"
              rel="noopener noreferrer"
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
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Navigation</p>
            <div className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">Localisation</p>
            <p className="mt-4 text-sm text-ink-muted">Zaghouan, Tunisie</p>
            <p className="mt-2 text-sm text-ink-muted">Disponible pour un stage de PFE 2026/2027</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border-subtle pt-6 text-xs text-ink-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Wiem Arfaoui. Site réalisé avec Next.js.</p>
        <p className="font-mono">recherche un stage de PFE</p>
      </div>
    </footer>
  );
}
