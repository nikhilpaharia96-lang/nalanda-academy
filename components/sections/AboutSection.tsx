import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/Reveal";
import { aboutPreview } from "@/lib/content/about";

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <PlaceholderImage
            label="Campus / student life photography placeholder"
            className="aspect-[4/3] w-full rounded-[var(--radius-xl)]"
          />
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionHeading
            eyebrow={aboutPreview.eyebrow}
            eyebrowIndex="01"
            heading={aboutPreview.heading}
            description={aboutPreview.body}
          />
          <Button href={aboutPreview.cta.href} variant="secondary" withArrow className="mt-8">
            {aboutPreview.cta.label}
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
