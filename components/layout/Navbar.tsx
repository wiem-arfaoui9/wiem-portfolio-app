"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Command, Terminal } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/nav";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "border border-transparent"
          }`}
        >
          <Link href="/" data-cursor="pointer" className="flex items-center gap-2 font-display text-sm font-medium text-ink">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan text-bg font-semibold">
              WA
            </span>
            <span className="hidden sm:inline">Wiem Arfaoui</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className="rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              data-cursor="pointer"
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
              className="glass hidden items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs text-ink-muted transition-colors hover:text-ink sm:flex"
            >
              <Command size={12} />K
            </button>
            <ThemeToggle />
            <MagneticButton
              href="#contact"
              className="hidden bg-ink text-bg hover:opacity-90 md:inline-flex"
            >
              <Terminal size={14} />
              Me contacter
            </MagneticButton>
            <button
              data-cursor="pointer"
              onClick={() => setMenuOpen(true)}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex flex-col bg-bg/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-sm text-ink">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink"
                aria-label="Fermer le menu"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-display text-4xl font-medium text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
