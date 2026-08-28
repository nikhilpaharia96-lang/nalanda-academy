"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  UsersRound,
  Building2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { siteConfig, heroImage, heroAchievement, heroFeatureStrip } from "@/lib/content/site";

const easing = [0.16, 1, 0.3, 1] as const;

const featureIconMap: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  "users-round": UsersRound,
  "building-2": Building2,
  sparkles: Sparkles,
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [desktopImageFailed, setDesktopImageFailed] = useState(false);
  const [mobileImageFailed, setMobileImageFailed] = useState(false);

  // When reduced motion is preferred, render content in its final state
  // immediately instead of animating in.
  const initial = shouldReduceMotion ? false : undefined;

  return (
    <section className="relative isolate bg-paper pt-[72px]">
      {/* Quiet dot-grid texture, consistent with the site's editorial mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0a1a33 1px, transparent 1px), linear-gradient(to bottom, #0a1a33 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative flex flex-col gap-12 pb-10 pt-14 sm:pb-14 sm:pt-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-56 lg:pt-16 xl:gap-16">
        {/* LEFT — copy */}
        <div className="order-1 max-w-xl">
          <motion.div
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <Eyebrow index="01">{siteConfig.name}</Eyebrow>
          </motion.div>

          <motion.h1
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.12 }}
            className="mt-5 font-display text-[38px] font-semibold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.35rem] xl:text-6xl"
          >
            <span className="block">Empowering Minds.</span>
            <span className="block text-gold-500">Inspiring Excellence.</span>
          </motion.h1>

          <motion.div
            initial={initial ?? { opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.7, ease: easing, delay: 0.4 }}
            className="mt-6 flex items-center gap-3 overflow-hidden"
          >
            <span aria-hidden className="h-[3px] w-16 shrink-0 rounded-full bg-gold-500" />
            <Sparkles aria-hidden className="h-4 w-4 shrink-0 text-gold-500" strokeWidth={1.5} />
          </motion.div>

          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.52 }}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.66 }}
            className="mt-9 flex flex-wrap gap-3 sm:gap-4"
          >
            <Button href="/about" variant="primary" withArrow>
              Explore Academy
            </Button>
            <Button
              href="/admission"
              variant="secondary"
              withArrow
              className="border-gold-500/50 hover:border-gold-500"
            >
              Admissions
            </Button>
          </motion.div>
        </div>

        {/* RIGHT — campus visual */}
        <div className="relative order-2 mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none lg:h-full">
          {/* Gold trace, offset behind the navy-bordered photograph */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-tl-[110px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-2 border-gold-500/60 sm:-inset-4 sm:rounded-tl-[140px] lg:-inset-5 lg:rounded-tl-[170px]"
          />

          <motion.div
            initial={initial ?? { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easing, delay: 0.15 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[100px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-[3px] border-navy-950 shadow-[var(--shadow-lg)] sm:aspect-[3/4] sm:rounded-tl-[130px] lg:aspect-auto lg:h-full lg:min-h-[480px] lg:rounded-tl-[160px] xl:min-h-[540px]"
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
                  src={heroImage.desktop.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
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
                  src={heroImage.mobile.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                  onError={() => setMobileImageFailed(true)}
                />
              )}
            </div>
          </motion.div>

          {/* Floating achievement badge */}
          <motion.div
            initial={initial ?? { opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: easing, delay: 0.7 }}
            className="absolute -right-3 top-5 z-10 w-[118px] rounded-2xl bg-navy-950 px-4 py-4 text-center shadow-[var(--shadow-lg)] sm:-right-4 sm:top-7 sm:w-[136px] sm:px-5 sm:py-5 lg:-right-5 lg:top-9 lg:w-[150px]"
          >
            <GraduationCap
              aria-hidden
              className="mx-auto h-6 w-6 text-gold-400 sm:h-7 sm:w-7"
              strokeWidth={1.5}
            />
            <p className="mt-2 font-display text-xl font-bold leading-none text-white sm:text-2xl">
              {heroAchievement.value}
            </p>
            <p className="font-display text-xs font-semibold text-white/90 sm:text-sm">
              {heroAchievement.label}
            </p>
            <p className="mt-1 text-[10px] leading-snug text-white/60 sm:text-[11px]">
              {heroAchievement.caption}
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Mobile / tablet: feature strip stays in normal document flow,
          directly after the campus image + achievement badge. */}
      <Container className="relative pb-14 sm:pb-16 lg:hidden">
        <StaggerGroup className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-md)] sm:gap-x-6 sm:p-6">
          {heroFeatureStrip.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </StaggerGroup>
      </Container>

      {/* Desktop: premium floating strip, docked near the bottom of the
          hero and overlapping the campus visual above it. */}
      <StaggerGroup className="absolute inset-x-0 bottom-28 z-10 hidden lg:block">
        <Container>
          <div className="grid w-full grid-cols-4 divide-x divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lg)]">
            {heroFeatureStrip.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </StaggerGroup>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  const Icon = featureIconMap[icon];
  return (
    <FadeUp as="li" className="list-none">
      <div className="flex h-full flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:gap-3.5 lg:p-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-gold-400">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-sm font-semibold text-navy-950 sm:text-base">{title}</h3>
          <p className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-sm">{body}</p>
        </div>
      </div>
    </FadeUp>
  );
}
