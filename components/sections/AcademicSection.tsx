import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { academicExcellence } from "@/lib/content/academics";

export function AcademicSection() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={academicExcellence.eyebrow}
          eyebrowIndex="02"
          heading={academicExcellence.heading}
          align="center"
          className="mx-auto"
        />
        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {academicExcellence.pillars.map((pillar, i) => (
            <FadeUp
              key={pillar.title}
              className="rounded-[var(--radius-lg)] border border-line bg-white p-7 transition-shadow hover:shadow-[var(--shadow-md)]"
            >
              <span className="font-data text-xs text-gold-500">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-navy-950">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.body}</p>
            </FadeUp>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
