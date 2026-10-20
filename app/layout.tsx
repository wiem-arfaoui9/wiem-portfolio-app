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
    default: "Wiem Arfaoui — Full Stack Developer",
    template: "%s — Wiem Arfaoui",
  },
  description:
    "Portfolio of Wiem Arfaoui, third-year Computer Science student at ISET Zaghouan. Java, Spring Boot, Angular, Laravel, React and Next.js. Looking for a full-stack PFE internship for 2026/2027.",
  keywords: [
    "Wiem Arfaoui",
    "Full Stack Developer",
    "Spring Boot",
    "Angular",
    "Laravel",
    "Next.js",
    "ISET Zaghouan",
    "Stage PFE 2026",
    "Tunisia",
  ],
  authors: [{ name: "Wiem Arfaoui" }],
  creator: "Wiem Arfaoui",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wiem Arfaoui — Full Stack Developer",
    description:
      "Building modern digital experiences with code. Computer Science student looking for a full-stack PFE internship (2026/2027).",
    siteName: "Wiem Arfaoui",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Wiem Arfaoui — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiem Arfaoui — Full Stack Developer",
    description: "Building modern digital experiences with code.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
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
