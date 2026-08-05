"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    // One-time capability check on mount — pointer type can't be known during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsFinePointer(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor='pointer']"));
    };

    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  if (!isFinePointer) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-screen"
        style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="rounded-full blur-2xl transition-[width,height] duration-300"
          style={{
            width: isPointer ? 220 : 140,
            height: isPointer ? 220 : 140,
            marginLeft: isPointer ? -110 : -70,
            marginTop: isPointer ? -110 : -70,
            background: "radial-gradient(circle, var(--violet) 0%, transparent 70%)",
            opacity: 0.35,
          }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[91] rounded-full border border-ink/40"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 44 : 18,
            height: isPointer ? 44 : 18,
            marginLeft: isPointer ? -22 : -9,
            marginTop: isPointer ? -22 : -9,
            backgroundColor: isPointer ? "var(--violet)" : "transparent",
            opacity: isPointer ? 0.15 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-ink/70"
        />
      </motion.div>
    </>
  );
}
