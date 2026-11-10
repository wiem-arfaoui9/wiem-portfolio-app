import type { Metadata } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CommandPalette from "@/components/ui/CommandPalette";
import Loader from "@/components/ui/Loader";

import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wiem Arfaoui — Développeuse full-stack, stage PFE 2026/2027",
    template: "%s — Wiem Arfaoui",
  },
  description:
    "Portfolio de Wiem Arfaoui, étudiante en 3e année de licence en informatique à l'ISET Zaghouan. Java, Spring Boot, Angular, Laravel, React, Next.js. Recherche un stage de PFE en développement full-stack pour 2026/2027.",
  keywords: ["Wiem Arfaoui", "développeuse full-stack", "Spring Boot", "Angular", "Laravel", "Next.js", "ISET Zaghouan", "stage PFE 2026", "Tunisie"],
  authors: [{ name: "Wiem Arfaoui" }],
  creator: "Wiem Arfaoui",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "Wiem Arfaoui — Développeuse full-stack",
    description: "Étudiante en informatique à l'ISET Zaghouan, à la recherche d'un stage de PFE en développement full-stack (2026/2027).",
    siteName: "Wiem Arfaoui",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Wiem Arfaoui — Développeuse full-stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiem Arfaoui — Développeuse full-stack",
    description: "Stage de PFE 2026/2027 en développement full-stack.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <body className={`cursor-none-desktop antialiased`}>
        <ThemeProvider>
          <Loader />
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
