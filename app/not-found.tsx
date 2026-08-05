import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-soft">404</p>
      <h1 className="font-display text-4xl text-ink">This route doesn&apos;t exist.</h1>
      <p className="max-w-sm text-sm text-ink-muted">
        The page you&apos;re looking for isn&apos;t part of this build. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-bg transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </div>
  );
}
