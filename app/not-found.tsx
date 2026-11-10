import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-soft">404</p>
      <h1 className="font-display text-4xl text-ink">Cette page n&apos;existe pas.</h1>
      <p className="max-w-sm text-sm text-ink-muted">
        La page demandée est introuvable. Retournez à l&apos;accueil.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-90"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
