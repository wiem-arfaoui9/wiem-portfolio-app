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

1. **Site URL** — set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in your hosting environment. It feeds the metadata, sitemap and robots.txt.
2. **LinkedIn / CV** — in `data/nav.ts`, set `socials.linkedin` and/or `socials.cv` (put the PDF in `public/`). Until then, the corresponding buttons are hidden. Your CV is intentionally *not* in the repository.
3. **Project links** — `data/projects.ts` points every project to your GitHub profile; replace with the exact repository URLs (and add `demo` links when available).
4. **Contact form** — it opens the visitor's mail client (`mailto:`); there is no backend to maintain.
5. **GitHub section** — repositories are fetched live from the public GitHub API (cached 1h). If the API is unreachable, the section falls back to a link to your profile.
6. **Fonts** — Space Grotesk, Inter and JetBrains Mono are self-hosted through `@fontsource`, so builds work offline.

## Scripts

`npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`

## Project structure

```
app/                  Routes (home, project detail pages, API, SEO files)
  projects/[slug]/    Dynamic project detail pages
components/
  layout/             Navbar, Footer
  sections/           Hero, About, Skills, Projects, Experience, GitHub, Contact
  projects/           ProjectCard
  ui/                 Loader, CustomCursor, CommandPalette, ScrollProgress,
                       BackToTop, ThemeToggle, MagneticButton, SectionHeading, BrandIcons
data/                 Content: projects, skills, experience, certifications, nav
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
