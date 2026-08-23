import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp, StaggerGroup } from "@/components/motion/Reveal";
import { FacultyCard } from "@/components/cards/FacultyCard";
import { getFaculty } from "@/lib/services/facultyService";

export async function FacultySection() {
  const faculty = (await getFaculty()).slice(0, 4);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Our Faculty" eyebrowIndex="05" heading="Teachers dedicated to every student's progress." />
          <Button href="/faculty" variant="secondary" withArrow>
            Meet Our Faculty
          </Button>
        </div>
        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <FadeUp key={member.id}>
              <FacultyCard member={member} />
            </FadeUp>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
