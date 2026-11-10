"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.p
              className="font-mono text-xs tracking-[0.4em] text-ink-muted uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Wiem Arfaoui
            </motion.p>
            <motion.h1
              className="font-display text-4xl md:text-5xl font-medium text-ink"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Portfolio<span className="text-violet">.</span>
            </motion.h1>
            <div className="h-px w-64 overflow-hidden bg-border-subtle">
              <motion.div
                className="h-full bg-gradient-to-r from-violet via-violet-soft to-cyan"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-xs text-ink-muted">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
