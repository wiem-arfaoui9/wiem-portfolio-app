import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import CommandPalette from "@/components/ui/CommandPalette";
import Loader from "@/components/ui/Loader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://wiemarfaoui.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wiem Arfaoui — Full Stack Developer",
    template: "%s — Wiem Arfaoui",
  },
  description:
    "Portfolio of Wiem Arfaoui, a Full Stack Developer and Computer Science student at ISET Zaghouan, building gamified learning platforms, secure pipelines and modern web apps. Open to alternance opportunities.",
  keywords: [
    "Wiem Arfaoui",
    "Full Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "DevSecOps",
    "ISET Zaghouan",
    "Alternance",
    "Tunisia developer portfolio",
  ],
  authors: [{ name: "Wiem Arfaoui" }],
  creator: "Wiem Arfaoui",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Wiem Arfaoui — Full Stack Developer",
    description:
      "Building modern digital experiences with code. Full Stack Developer specializing in Next.js, Laravel and DevSecOps — open to alternance opportunities.",
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
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} cursor-none-desktop antialiased`}>
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
