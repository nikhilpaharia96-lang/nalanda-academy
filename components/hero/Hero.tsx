"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  UsersRound,
  Building2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import {
  siteConfig,
  heroCarousel,
  heroWelcome,
  heroQuote,
  heroFeatureStrip,
} from "@/lib/content/site";

const easing = [0.16, 1, 0.3, 1] as const;
const SLIDE_DURATION_MS = 6000;

const featureIconMap: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  "users-round": UsersRound,
  "building-2": Building2,
  sparkles: Sparkles,
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const slideCount = heroCarousel.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % slideCount) + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Autoplay — advances every SLIDE_DURATION_MS, pauses on hover/touch and
  // is skipped entirely for reduced-motion users.
  useEffect(() => {
    if (paused || shouldReduceMotion || slideCount <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [paused, shouldReduceMotion, slideCount]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const initial = shouldReduceMotion ? false : undefined;

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 pt-[72px] lg:pt-[108px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Nalanda Academy campus"
    >
      {/* Background image carousel */}
      <div className="absolute inset-0 -z-20">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: easing }}
            className="absolute inset-0"
          >
            <Image
              src={heroCarousel[index].src}
              alt={heroCarousel[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark navy gradient overlay — strong from the left, transparent
          toward the right, so hero copy stays readable while the campus
          photograph remains visible on the right side of the frame. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(10,26,51,0.97)_0%,rgba(10,26,51,0.93)_28%,rgba(10,26,51,0.72)_48%,rgba(10,26,51,0.32)_68%,rgba(10,26,51,0.08)_85%)]"
      />
      {/* Soft bottom fade so the floating feature strip reads cleanly
          against the image regardless of which slide is showing. */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950/80 to-transparent"
      />

      <Container className="relative flex min-h-[560px] flex-col justify-center gap-10 pb-40 pt-16 sm:min-h-[620px] sm:pb-48 lg:min-h-0 lg:py-24 lg:pb-[168px]">
        <div className="max-w-xl">
          <motion.p
            initial={initial ?? { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
            className="font-script text-4xl leading-none text-gold-400 sm:text-5xl"
          >
            {heroWelcome}
          </motion.p>

          <motion.h1
            initial={initial ?? { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easing, delay: 0.12 }}
            className="font-editorial mt-4 text-[46px] font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-[64px] lg:text-[76px]"
          >
            <span className="block">Nalanda</span>
            <span className="block text-gold-400">Academy</span>
          </motion.h1>

          <motion.p
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.3 }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          {/* Quote card */}
          <motion.div
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.42 }}
            className="relative mt-7 max-w-md overflow-hidden rounded-xl border border-gold-400/40 bg-navy-950/40 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5"
          >
            <span
              aria-hidden
              className="absolute -left-1 -top-1 h-10 w-10 rounded-br-xl border-b border-r border-gold-400/30"
            />
            <Quote
              aria-hidden
              className="h-6 w-6 shrink-0 fill-gold-400/20 text-gold-400/70"
              strokeWidth={1.5}
            />
            <p className="mt-2 text-[15px] italic leading-relaxed text-white/90 sm:text-base">
              {heroQuote.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <span
              aria-hidden
              className="mt-3 flex items-center gap-2 text-gold-400/70"
            >
              <span className="h-px flex-1 bg-gold-400/30" />
              <Sparkles className="h-3 w-3" strokeWidth={1.5} />
              <span className="h-px flex-1 bg-gold-400/30" />
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={initial ?? { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.54 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <a
              href="/about"
              className="focus-ring group inline-flex items-center gap-3 rounded-[var(--radius-md)] bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-[var(--shadow-md)] transition-all duration-200 ease-out hover:bg-gold-400 active:scale-[0.98]"
            >
              Explore Academy
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-950/15 transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>
            <a
              href="/admission"
              className="focus-ring group inline-flex items-center gap-3 rounded-[var(--radius-md)] border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 ease-out hover:border-gold-400 hover:bg-white/10 active:scale-[0.98]"
            >
              Admissions
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 transition-colors duration-200 group-hover:border-gold-400 group-hover:text-gold-400">
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </a>
          </motion.div>
        </div>
      </Container>

      {/* Prev / next arrows, layered directly over the hero image */}
      {slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="focus-ring group absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy-950/30 p-2.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gold-400 hover:text-gold-400 sm:flex lg:left-8"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="focus-ring group absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy-950/30 p-2.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-gold-400 hover:text-gold-400 sm:flex lg:right-8"
          >
            <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
        </>
      )}

      {/* Slide indicators */}
      {slideCount > 1 && (
        <div className="absolute inset-x-0 z-10 flex justify-center gap-2 bottom-[168px] sm:bottom-[188px] lg:bottom-[148px]">
          {heroCarousel.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`focus-ring h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-gold-400" : "w-1.5 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}

      {/* Mobile / tablet: feature strip stays in normal document flow */}
      <Container className="relative pb-12 lg:hidden">
        <StaggerGroup className="grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-md)] sm:gap-x-6 sm:p-6">
          {heroFeatureStrip.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </StaggerGroup>
      </Container>

      {/* Desktop: premium floating strip, docked near the bottom of the
          hero and overlapping the campus visual above it. */}
      <StaggerGroup className="absolute inset-x-0 bottom-0 z-10 hidden translate-y-1/2 lg:block">
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
