import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Official Nalanda Academy seal, supplied by the school. Do not redesign,
// recolor, or replace this artwork — if a refreshed version of the same
// mark is ever issued, swap the file at this path (same filename) and
// nothing else needs to change.
const LOGO_SRC = "/images/brand/nalanda-academy-logo.webp";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("focus-ring group flex min-w-0 items-center gap-2.5 rounded-sm", className)}
      aria-label="Nalanda Academy — Home"
    >
      <Image
        src={LOGO_SRC}
        alt="Nalanda Academy"
        width={96}
        height={96}
        priority
        className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
      />
      <span
        className={cn(
          "truncate font-display text-[15px] font-semibold leading-tight tracking-tight sm:text-base",
          tone === "dark" ? "text-navy-950" : "text-white"
        )}
      >
        Nalanda Academy
      </span>
    </Link>
  );
}
