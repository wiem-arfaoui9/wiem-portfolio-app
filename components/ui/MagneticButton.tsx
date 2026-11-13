"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  download?: boolean | string;
}

export default function MagneticButton({ children, className, onClick, href, target, download }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const sharedClassName = cn(
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
    className
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      {href ? (
        <motion.a
          data-cursor="pointer"
          href={href}
          target={target}
          download={download}
          onClick={onClick}
          whileTap={{ scale: 0.95 }}
          className={sharedClassName}
        >
          {children}
        </motion.a>
      ) : (
        <motion.button
          data-cursor="pointer"
          onClick={onClick}
          whileTap={{ scale: 0.95 }}
          className={sharedClassName}
        >
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
