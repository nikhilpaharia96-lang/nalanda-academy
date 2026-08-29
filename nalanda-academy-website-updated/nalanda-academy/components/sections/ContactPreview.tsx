import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/Reveal";
import { contactInfo } from "@/lib/content/site";

const rows = [
  { label: "Address", value: contactInfo.address, Icon: MapPin },
  { label: "Phone", value: contactInfo.phone, Icon: Phone },
  { label: "Email", value: contactInfo.email, Icon: Mail },
  { label: "Office Hours", value: contactInfo.officeHours, Icon: Clock },
];

export function ContactPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <FadeUp>
          <SectionHeading eyebrow="Get in Touch" eyebrowIndex="08" heading="We're here to help with any question." />
          <Button href="/contact" variant="secondary" withArrow className="mt-8">
            Contact Us
          </Button>
        </FadeUp>
        <FadeUp delay={0.1} className="grid gap-4 sm:grid-cols-2">
          {rows.map(({ label, value, Icon }) => (
            <div key={label} className="rounded-[var(--radius-lg)] border border-line bg-white p-5">
              <Icon className="h-4 w-4 text-gold-500" />
              <p className="mt-3 font-data text-[11px] uppercase tracking-wider text-slate-400">{label}</p>
              <p className="mt-1 text-sm text-navy-950">{value}</p>
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  );
}
