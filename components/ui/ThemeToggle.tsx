"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-cursor="pointer"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink transition-transform hover:scale-105 active:scale-95"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
