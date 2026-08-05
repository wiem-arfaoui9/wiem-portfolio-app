"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Command, ArrowRight, Mail, FileText, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navLinks, socials } from "@/data/nav";
import { useTheme } from "@/components/ThemeProvider";

interface CommandItem {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { toggleTheme, theme } = useTheme();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  const items: CommandItem[] = [
    ...navLinks.map((n) => ({
      id: n.href,
      label: `Go to ${n.label}`,
      hint: "Section",
      icon: <ArrowRight size={14} />,
      action: () => go(n.href),
    })),
    {
      id: "theme",
      label: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      hint: "Preference",
      icon: theme === "dark" ? <Sun size={14} /> : <Moon size={14} />,
      action: () => {
        toggleTheme();
        setOpen(false);
      },
    },
    {
      id: "email",
      label: `Copy email — ${socials.email}`,
      hint: "Contact",
      icon: <Mail size={14} />,
      action: () => {
        navigator.clipboard.writeText(socials.email);
        setOpen(false);
      },
    },
    {
      id: "github",
      label: "Open GitHub profile",
      hint: "Link",
      icon: <GithubIcon size={14} />,
      action: () => window.open(socials.github, "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn profile",
      hint: "Link",
      icon: <LinkedinIcon size={14} />,
      action: () => window.open(socials.linkedin, "_blank"),
    },
    {
      id: "cv",
      label: "Download CV",
      hint: "Resume",
      icon: <FileText size={14} />,
      action: () => window.open("/cv-wiem-arfaoui.pdf", "_blank"),
    },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-start justify-center bg-black/60 p-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border-subtle px-4 py-3">
              <Command size={16} className="text-ink-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search…"
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
              />
              <kbd className="rounded border border-border-subtle px-1.5 py-0.5 font-mono text-[10px] text-ink-muted">
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-ink-muted">No results found.</p>
              )}
              {filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-ink transition-colors hover:bg-white/5"
                >
                  <span className="text-violet-soft">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
