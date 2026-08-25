"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, LineChart, Megaphone, CalendarDays, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/content/site";
import { cn } from "@/lib/utils";

const easing = [0.16, 1, 0.3, 1] as const;

// Drop the official campus photographs at these paths (see the README in
// the same folder for specs) and they replace the placeholder automatically
// — no code changes required. Two crops are used so the framing stays
// intentional at both aspect ratios (wide desktop vs. tall mobile).
const HERO_IMAGE_DESKTOP_SRC = "/images/hero/nalanda-campus-hero-desktop.webp";
const HERO_IMAGE_MOBILE_SRC = "/images/hero/nalanda-campus-hero-mobile.webp";

// Same destinations as the QuickAccess section below — kept in sync here so
// the hero's floating strip and the in-page section never drift apart.
const quickLinks = [
  { title: "Admissions", body: "Start your application to Nalanda Academy.", href: "/admission", Icon: GraduationCap },
  { title: "Results", body: "View HSLC results by academic year.", href: "/results", Icon: LineChart },
  { title: "Notices", body: "Read the latest official school notices.", href: "/notices", Icon: Megaphone },
  { title: "Events", body: "See what's happening on campus.", href: "/events", Icon: CalendarDays },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [desktopImageFailed, setDesktopImageFailed] = useState(false);
  const [mobileImageFailed, setMobileImageFailed] = useState(false);

  // When reduced motion is preferred, render content in its final state
  // immediately instead of animating in.
  const initial = shouldReduceMotion ? false : undefined;

  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pt-[72px]">
      {/* Cinematic background layer — subtle scale/reveal on load */}
      <motion.div
        aria-hidden
        initial={initial ?? { scale: 1.08, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: easing }}
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

      <Container className="relative flex flex-col pb-14 pt-14 sm:pb-16 sm:pt-20 lg:min-h-[720px] lg:justify-center lg:pb-40 lg:pt-24">
        <div className="max-w-xl">
          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="mb-4 font-display text-xl italic font-medium tracking-wide text-gold-400 sm:text-2xl"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.12 }}
            className="font-display text-[34px] font-bold leading-[1.08] tracking-tight text-white sm:text-[44px] md:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            <span className="block">NALANDA ACADEMY</span>
            <span className="block text-gold-400">NURTURING MINDS.</span>
            <span className="block text-gold-400">SHAPING FUTURES.</span>
          </motion.h1>

          <motion.div
            initial={initial ?? { opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "4.5rem" }}
            transition={{ duration: 0.7, ease: easing, delay: 0.4 }}
            className="mt-6 h-[3px] rounded-full bg-gold-500"
          />

          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.52 }}
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

        {/* Mobile / tablet: quick links stay in normal document flow as a
            horizontally scrollable row, directly beneath the CTAs. */}
        <StaggerGroup className="mt-10 -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:hidden">
          {quickLinks.map(({ title, body, href, Icon }) => (
            <FadeUp as="li" key={title} className="list-none">
              <QuickLinkCard title={title} body={body} href={href} Icon={Icon} className="w-[210px] shrink-0 snap-start sm:w-[240px]" />
            </FadeUp>
          ))}
        </StaggerGroup>

        {/* Desktop: premium floating strip, docked near the bottom of the
            hero, overlapping the campus photograph above it. Kept fully
            inside the hero's own bounds so it never overlaps the QuickAccess
            section that follows on the page. */}
        <StaggerGroup className="absolute inset-x-0 bottom-8 z-20 hidden lg:block">
          <div className="grid w-full grid-cols-4 divide-x divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lg)]">
            {quickLinks.map(({ title, body, href, Icon }) => (
              <FadeUp as="li" key={title} className="list-none">
                <QuickLinkCard title={title} body={body} href={href} Icon={Icon} className="h-full" />
              </FadeUp>
            ))}
          </div>
        </StaggerGroup>
      </Container>
    </section>
  );
}

function QuickLinkCard({
  title,
  body,
  href,
  Icon,
  className,
}: {
  title: string;
  body: string;
  href: string;
  Icon: typeof GraduationCap;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group flex h-full flex-col justify-between gap-4 rounded-xl bg-white px-5 py-5 shadow-[var(--shadow-md)] transition-colors hover:bg-paper lg:rounded-none lg:shadow-none",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-navy-950 transition-colors group-hover:bg-navy-950 group-hover:text-gold-400">
          <Icon className="h-5 w-5" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-500" />
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-navy-950">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{body}</p>
      </div>
    </Link>
  );
}
