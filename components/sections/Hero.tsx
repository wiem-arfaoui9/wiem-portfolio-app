"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import ArchitectureDiagram from "./ArchitectureDiagram";

const stack = ["Laravel", "Next.js", "React", "TypeScript", "Docker", "DevSecOps"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  const blob1X = useTransform(springX, [0, 1], ["-8%", "8%"]);
  const blob1Y = useTransform(springY, [0, 1], ["-6%", "6%"]);
  const blob2X = useTransform(springX, [0, 1], ["6%", "-6%"]);
  const blob2Y = useTransform(springY, [0, 1], ["8%", "-8%"]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const title = "Building modern digital experiences with code.".split(" ");

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="aurora-bg">
        <motion.div
          style={{ x: blob1X, y: blob1Y }}
          className="aurora-blob left-[8%] top-[10%] h-[380px] w-[380px] bg-violet"
        />
        <motion.div
          style={{ x: blob2X, y: blob2Y }}
          className="aurora-blob right-[5%] top-[25%] h-[420px] w-[420px] bg-cyan"
        />
        <div className="absolute inset-0 grid-overlay" />
        <div className="noise absolute inset-0" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-ink-muted"
          >
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-amber" />
            Open to alternance — 2025/2026
          </motion.div>

          <h1 className="font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl md:text-6xl lg:text-[4rem]">
            {title.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
                className={`inline-block ${["modern", "code."].includes(word) ? "text-gradient" : ""}`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-base text-ink-muted md:text-lg"
          >
            I&apos;m <span className="text-ink">Wiem Arfaoui</span>, a Full Stack Developer and Computer
            Science student at ISET Zaghouan. I design and ship real applications — from gamified
            learning platforms to automated security pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projects" className="bg-ink text-bg hover:opacity-90">
              View Projects <ArrowUpRight size={15} />
            </MagneticButton>
            <MagneticButton href="/cv-wiem-arfaoui.pdf" target="_blank" className="glass text-ink hover:bg-white/5">
              <FileDown size={15} /> Download CV
            </MagneticButton>
            <MagneticButton href="#contact" className="text-ink hover:text-violet-soft">
              <Mail size={15} /> Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {stack.map((tech) => (
              <span key={tech} className="font-mono text-xs tracking-wide text-ink-muted">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden justify-self-end lg:block"
          style={{ animationName: "float" }}
        >
          <div className="animate-float">
            <ArchitectureDiagram />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-ink-muted"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
