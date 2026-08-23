import type { Notice, NoticeCategory } from "@/lib/types";

// Demo notices for layout/preview purposes. Replace with real data via the
// noticeService once GET /api/notices is available.
export const notices: Notice[] = [
  {
    slug: "admission-2027-open",
    title: "Admissions for the 2027 Academic Session",
    publishedDate: "2026-08-10",
    category: "Admission",
    content:
      "Demo entry — details of the admission window for the upcoming academic session will be published here once confirmed by the school office.",
    important: true,
  },
  {
    slug: "half-yearly-exam-schedule",
    title: "Half-Yearly Examination Schedule",
    publishedDate: "2026-08-01",
    category: "Examination",
    content: "Demo entry — the examination datesheet will be published here closer to the exam period.",
  },
  {
    slug: "hslc-result-2026",
    title: "HSLC Result 2026 — Notice",
    publishedDate: "2026-06-20",
    category: "Result",
    content: "Demo entry — official result-related communication will appear here once published.",
    important: true,
  },
  {
    slug: "autumn-break",
    title: "Notice: Autumn Break Schedule",
    publishedDate: "2026-09-25",
    category: "Holiday",
    content: "Demo entry — holiday schedule details will be confirmed by the school administration.",
  },
  {
    slug: "cultural-fest-notice",
    title: "Annual Cultural Fest — Participation Guidelines",
    publishedDate: "2026-09-05",
    category: "Event",
    content: "Demo entry — participation guidelines for the annual cultural fest.",
  },
];

export const noticeCategories: NoticeCategory[] = [
  "Admission",
  "Examination",
  "Result",
  "Holiday",
  "Event",
  "General",
  "Important",
];
