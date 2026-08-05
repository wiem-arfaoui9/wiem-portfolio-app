"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { socials } from "@/data/nav";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
    } catch {
      // Contact route is a stub for now — the UI still confirms locally.
    } finally {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="06 · Contact" title="Let's build something real." align="center" />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
              { icon: LinkedinIcon, label: "LinkedIn", value: "/in/wiemarfaoui", href: socials.linkedin },
              { icon: GithubIcon, label: "GitHub", value: "/wiemarfaoui", href: socials.github },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                data-cursor="pointer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle text-violet-soft transition-colors group-hover:border-violet-soft">
                  <c.icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">{c.label}</p>
                  <p className="text-sm text-ink">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 text-center">
                <CheckCircle2 className="text-cyan" size={36} />
                <p className="font-display text-lg text-ink">Message received.</p>
                <p className="text-sm text-ink-muted">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="glass rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-violet-soft"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="glass rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-violet-soft"
                  />
                </div>
                <input
                  required
                  name="subject"
                  placeholder="Subject"
                  className="glass rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-violet-soft"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about the opportunity…"
                  className="glass resize-none rounded-xl px-4 py-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-1 focus:ring-violet-soft"
                />
                <MagneticButton className="justify-center bg-ink text-bg hover:opacity-90">
                  {loading ? "Sending…" : (
                    <>
                      Send message <Send size={14} />
                    </>
                  )}
                </MagneticButton>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
