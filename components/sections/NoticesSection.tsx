import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/Reveal";
import { NoticeCard } from "@/components/cards/NoticeCard";
import { getLatestNotices } from "@/lib/services/noticeService";

export async function NoticesSection() {
  const notices = await getLatestNotices(4);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Latest Notices" eyebrowIndex="07" heading="Announcements from the school office." />
          <Button href="/notices" variant="secondary" withArrow>
            View All Notices
          </Button>
        </div>
        {notices.length > 0 ? (
          <FadeUp className="mt-8 divide-y divide-line rounded-[var(--radius-lg)] border border-line">
            {notices.map((notice) => (
              <NoticeCard key={notice.slug} notice={notice} />
            ))}
          </FadeUp>
        ) : (
          <p className="mt-8 rounded-[var(--radius-lg)] border border-dashed border-line p-10 text-center text-sm text-slate-500">
            No notices available.
          </p>
        )}
      </Container>
    </section>
  );
}
