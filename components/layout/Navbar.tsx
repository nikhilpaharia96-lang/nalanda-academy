"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/content/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { TopBar } from "@/components/layout/TopBar";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes, without a setState
  // effect: adjust state directly during render (React's documented pattern
  // for "state that depends on a changing prop").
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  // Only the homepage opens on a full-bleed dark photograph, so only there
  // does the unscrolled header go transparent-glass with light text. Every
  // other page opens on a light `PageHero`, so it keeps the familiar white
  // header from the very first frame.
  const isHome = pathname === "/";
  const glass = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-line bg-white/85 backdrop-blur-md"
            : glass
              ? "border-b border-white/10 bg-navy-950/25 backdrop-blur-sm"
              : "border-b border-transparent bg-transparent"
        )}
      >
        {/* Desktop-only information bar. Collapses away once the page is
            scrolled so the fixed header settles back to a single compact
            row — the reserved top offset on hero/page-header sections
            (`lg:pt-[108px]`) already accounts for its maximum height. */}
        <div
          className={cn(
            "hidden overflow-hidden bg-navy-950 transition-[max-height,opacity] duration-300 ease-out lg:block",
            scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
          )}
        >
          <TopBar />
        </div>

        <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Logo tone={glass ? "light" : "dark"} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring relative rounded-sm px-3 py-2 text-[13px] font-medium transition-colors",
                    glass
                      ? cn("text-white/80 hover:text-white", active && "text-white")
                      : cn("text-slate-600 hover:text-navy-950", active && "text-navy-950")
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gold-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
            <Button
              href="/admission"
              variant="primary"
              className="rounded-full bg-gold-500 text-navy-950 shadow-[var(--shadow-sm)] hover:bg-gold-400"
            >
              Admission
            </Button>
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
                glass
                  ? "border-white/30 text-white hover:border-gold-400 hover:text-gold-400"
                  : "border-navy-950/15 text-navy-950 hover:border-gold-500 hover:text-gold-500"
              )}
            >
              <Search className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "focus-ring -mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-md lg:hidden",
              glass ? "text-white" : "text-navy-950"
            )}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}
