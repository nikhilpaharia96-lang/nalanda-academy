import Link from "next/link";
import { GraduationCap, LineChart, Megaphone, CalendarDays, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";

const items = [
  { title: "Admissions", body: "Start your application to Nalanda Academy.", href: "/admission", Icon: GraduationCap },
  { title: "Results", body: "View HSLC results by academic year.", href: "/results", Icon: LineChart },
  { title: "Notices", body: "Read the latest official school notices.", href: "/notices", Icon: Megaphone },
  { title: "Events", body: "See what's happening on campus.", href: "/events", Icon: CalendarDays },
];

export function QuickAccess() {
  return (
    // Floats a premium white card up over the navy hero above it — same
    // language as the hero's own dark icon swatches — then settles into
    // the page's paper background for whatever follows.
    <section className="relative z-10 bg-paper pb-14 pt-0 sm:pb-16 lg:pb-20">
      <Container className="-mt-10 sm:-mt-14 lg:-mt-20">
        <StaggerGroup className="grid divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-lg)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {items.map(({ title, body, href, Icon }) => (
            <FadeUp as="li" key={title} className="list-none">
              <Link
                href={href}
                className="focus-ring group flex h-full flex-col justify-between gap-6 px-6 py-7 transition-colors hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-navy-950 text-gold-400 transition-colors group-hover:bg-blue-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-500" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-950">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{body}</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
