import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { EventCard } from "@/components/cards/EventCard";
import { getUpcomingEvents } from "@/lib/services/eventService";

export async function EventsSection() {
  const upcoming = await getUpcomingEvents(3);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Upcoming Events" eyebrowIndex="06" heading="Life on campus, beyond the classroom." />
          <Button href="/events" variant="secondary" withArrow>
            View All Events
          </Button>
        </div>
        {upcoming.length > 0 ? (
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <FadeUp key={event.slug}>
                <EventCard event={event} />
              </FadeUp>
            ))}
          </StaggerGroup>
        ) : (
          <p className="mt-12 rounded-[var(--radius-lg)] border border-dashed border-line p-10 text-center text-sm text-slate-500">
            No events available.
          </p>
        )}
      </Container>
    </section>
  );
}
