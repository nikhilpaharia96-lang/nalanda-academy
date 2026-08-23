import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { FacilityCard } from "@/components/cards/FacilityCard";
import { getFacilities } from "@/lib/services/facilityService";

export async function FacilitiesSection() {
  const facilities = (await getFacilities()).slice(0, 4);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Campus & Facilities" eyebrowIndex="04" heading="A campus built for focused learning." />
          <Button href="/facilities" variant="secondary" withArrow>
            Explore Facilities
          </Button>
        </div>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <FadeUp key={facility.slug}>
              <FacilityCard facility={facility} />
            </FadeUp>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
