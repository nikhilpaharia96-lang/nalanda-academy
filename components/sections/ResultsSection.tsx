import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/Reveal";
import { getLatestResult } from "@/lib/services/resultService";

const stats: { key: "appeared" | "passed" | "passPercentage" | "distinction" | "starMarks"; label: string; suffix?: string }[] = [
  { key: "appeared", label: "Appeared" },
  { key: "passed", label: "Passed" },
  { key: "passPercentage", label: "Pass Percentage", suffix: "%" },
  { key: "distinction", label: "Distinction" },
  { key: "starMarks", label: "Star Marks" },
];

export async function ResultsSection() {
  const latest = await getLatestResult();

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Latest HSLC Result" eyebrowIndex="03" heading={`Class X Board Results — ${latest.year}`} />
          <Button href="/results" variant="secondary" withArrow>
            View All Results
          </Button>
        </div>

        <FadeUp className="mt-12 overflow-hidden rounded-[var(--radius-xl)] border border-line">
          <div className="grid divide-y divide-line sm:grid-cols-5 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => {
              const value = latest[stat.key];
              return (
                <div key={stat.key} className="bg-paper p-7 text-center sm:bg-white">
                  <p className="font-display text-3xl font-semibold tabular-nums text-navy-950">
                    {latest.published && value !== null ? `${value}${stat.suffix ?? ""}` : "—"}
                  </p>
                  <p className="mt-2 font-data text-[11px] uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
          {!latest.published && (
            <p className="border-t border-line bg-paper px-7 py-4 text-center text-sm text-slate-500">
              Official data will be published here.
            </p>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}
