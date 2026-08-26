"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { siteConfig } from "@/lib/content/site";

const easing = [0.16, 1, 0.3, 1] as const;

// Drop the official campus photographs at these paths (see the README in
// the same folder for specs) and they replace the placeholder automatically
// — no code changes required. Two crops are used so the framing stays
// intentional at both aspect ratios (wide desktop vs. tall mobile).
const HERO_IMAGE_DESKTOP_SRC = "/images/hero/nalanda-campus-hero-desktop.webp";
const HERO_IMAGE_MOBILE_SRC = "/images/hero/nalanda-campus-hero-mobile.webp";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [desktopImageFailed, setDesktopImageFailed] = useState(false);
  const [mobileImageFailed, setMobileImageFailed] = useState(false);

  // When reduced motion is preferred, render content in its final state
  // immediately instead of animating in.
  const initial = shouldReduceMotion ? false : undefined;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
      {/* Cinematic background layer — slow, continuous Ken Burns drift
          instead of a one-off zoom, so the photograph always feels alive
          behind the text. */}
      <motion.div
        aria-hidden
        initial={initial ?? { scale: 1.08, opacity: 0.6 }}
        animate={
          shouldReduceMotion
            ? { scale: 1, opacity: 1 }
            : { scale: [1.08, 1.14, 1.08], opacity: 1 }
        }
        transition={
          shouldReduceMotion
            ? { duration: 1.4, ease: easing }
            : {
                opacity: { duration: 1.4, ease: easing },
                scale: { duration: 26, ease: easing, repeat: Infinity },
              }
        }
        className="absolute inset-0 -z-20"
      >
        {/* Desktop crop */}
        <div className="hidden h-full w-full lg:block">
          {desktopImageFailed ? (
            <PlaceholderImage
              label="Campus photography placeholder (desktop) — replace with official imagery"
              tone="navy"
              className="h-full w-full rounded-none border-0"
            />
          ) : (
            <Image
              src={HERO_IMAGE_DESKTOP_SRC}
              alt="Nalanda Academy campus"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              onError={() => setDesktopImageFailed(true)}
            />
          )}
        </div>

        {/* Mobile / tablet crop */}
        <div className="h-full w-full lg:hidden">
          {mobileImageFailed ? (
            <PlaceholderImage
              label="Campus photography placeholder (mobile) — replace with official imagery"
              tone="navy"
              className="h-full w-full rounded-none border-0"
            />
          ) : (
            <Image
              src={HERO_IMAGE_MOBILE_SRC}
              alt="Nalanda Academy campus"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              onError={() => setMobileImageFailed(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Desktop: strong navy wash from the left, fading toward transparent on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,26,51,0.97) 0%, rgba(10,26,51,0.93) 30%, rgba(10,26,51,0.72) 52%, rgba(10,26,51,0.34) 74%, rgba(10,26,51,0.08) 100%)",
        }}
      />

      {/* Mobile/tablet: vertical wash so text stays legible above the image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,51,0.97) 0%, rgba(10,26,51,0.9) 38%, rgba(10,26,51,0.78) 62%, rgba(10,26,51,0.95) 100%)",
        }}
      />

      {/* Deepening wash along the very bottom edge, so the floating strip
          always sits on a readable, consistently dark surface regardless of
          the underlying photograph. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/95 to-transparent sm:h-48 lg:h-56"
      />

      {/* Quiet grid texture, consistent with the site's editorial mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative flex flex-col pb-16 pt-14 sm:pb-20 sm:pt-20 lg:min-h-[640px] lg:justify-center lg:pb-24 lg:pt-24">
        <div className="max-w-xl">
          {/* Eyebrow — small gold mark + tracked label, replaces the old
              italic "Welcome to" line with the site's editorial dash motif. */}
          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="mb-5 flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-9 shrink-0 bg-gold-500" />
            <span className="font-data text-xs font-semibold uppercase tracking-[0.28em] text-gold-400">
              Welcome to {siteConfig.name}
            </span>
          </motion.p>

          <motion.h1
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.12 }}
            className="font-display text-[34px] font-bold leading-[1.08] tracking-tight text-white sm:text-[44px] md:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            <span className="block">{siteConfig.name}</span>
            <span className="mt-2 block text-[0.42em] font-medium italic leading-snug tracking-normal text-gold-400">
              {siteConfig.tagline}
            </span>
          </motion.h1>

          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.5 }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.66 }}
            className="mt-9 flex flex-wrap gap-3 sm:gap-4"
          >
            <Button
              href="/about"
              variant="primary"
              withArrow
              className="bg-gold-500 text-navy-950 shadow-[var(--shadow-md)] hover:bg-gold-400"
            >
              Explore Our Academy
            </Button>
            <Button
              href="/admission"
              variant="secondary"
              withArrow
              className="border-white/30 bg-white/[0.04] text-white backdrop-blur-sm hover:border-gold-400 hover:bg-white/10 hover:text-gold-100"
            >
              Admissions Open 2025–26
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
