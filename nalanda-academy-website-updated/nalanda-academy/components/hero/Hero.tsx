"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { siteConfig } from "@/lib/content/site";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-[72px]">
      {/* ambient background marks — quiet, not decorative noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]"
      />

      <Container className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="chapter-mark mb-6 font-data text-xs font-medium uppercase tracking-[0.3em] text-gold-400"
          >
            {siteConfig.shortName}
          </motion.p>

          <h1 className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]">
            {["Building Knowledge.", "Inspiring Excellence.", "Shaping Futures."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easing, delay: 0.15 + i * 0.12 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.6 }}
            className="mt-7 max-w-md text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.75 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/about" variant="primary" withArrow className="bg-gold-500 text-navy-950 hover:bg-gold-400">
              Explore Academy
            </Button>
            <Button
              href="/admission"
              variant="secondary"
              className="border-white/25 text-white hover:bg-white hover:text-navy-950"
            >
              Apply for Admission
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easing, delay: 0.3 }}
          className="relative"
        >
          <PlaceholderImage
            label="Campus photography placeholder — replace with official imagery"
            tone="navy"
            className="aspect-[4/5] w-full rounded-[var(--radius-xl)] border-white/10 shadow-[var(--shadow-lg)] sm:aspect-[5/6]"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-[var(--radius-lg)] border border-line bg-white p-5 shadow-[var(--shadow-lg)] sm:block">
            <p className="font-display text-2xl font-semibold text-navy-950">10+</p>
            <p className="mt-1 font-data text-[11px] uppercase tracking-wider text-slate-400">
              Years of HSLC records tracked
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
