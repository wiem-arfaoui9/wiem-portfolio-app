# Wiem Arfaoui — Developer Portfolio

A premium, from-scratch portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

## Before you deploy

1. **CV file** — add your actual resume at `public/cv-wiem-arfaoui.pdf`. The "Download CV" button and the command palette both link to that path.
2. **Real links** — update `data/nav.ts` with your real email, LinkedIn and GitHub URLs (currently placeholders).
3. **Domain** — `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` reference `https://wiemarfaoui.dev`. Swap in your real domain once deployed.
4. **Contact form** — `app/api/contact/route.ts` currently logs submissions to the server console. Wire it up to an email provider (e.g. Resend, SendGrid) or a database before going live.
5. **Project links** — `data/projects.ts` has placeholder `github`/`demo` URLs for each project; point them at your real repos and live demos.
6. **Fonts** — the build fetches Space Grotesk, Inter and JetBrains Mono from Google Fonts at build time via `next/font/google`. This requires outbound internet access during `npm run build` / `npm run dev`. If you're building behind a firewall that blocks `fonts.googleapis.com`, switch to `next/font/local` with self-hosted font files.

## Project structure

```
app/                  Routes (home, project detail pages, API, SEO files)
  projects/[slug]/    Dynamic project detail pages
  api/contact/        Contact form submission endpoint
components/
  layout/             Navbar, Footer
  sections/           Hero, About, Skills, Projects, Experience, GitHub, Contact
  projects/           ProjectCard
  ui/                 Loader, CustomCursor, CommandPalette, ScrollProgress,
                       BackToTop, ThemeToggle, MagneticButton, SectionHeading, BrandIcons
data/                 Content: projects.ts, skills.ts, experience.ts, nav.ts
hooks/                useMousePosition, useScrollProgress
lib/                  cn() className helper
types/                Shared TypeScript interfaces
```

## Features

- Dark/light mode with persisted preference
- Command palette (`Ctrl/Cmd + K`) for quick navigation
- Custom cursor with glow + magnetic buttons (desktop only, respects `prefers-reduced-motion`)
- Scroll progress bar, back-to-top button
- Animated hero with a live architecture-diagram widget cycling through real project stacks
- Filterable skills and projects
- Full case-study pages per project (architecture, features, challenges, results)
- SEO: metadata, dynamic Open Graph image, sitemap, robots.txt

## Tech stack

Next.js 16 · TypeScript (strict) · Tailwind CSS v4 · Framer Motion · Lucide React
