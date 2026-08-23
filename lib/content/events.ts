import type { SchoolEvent } from "@/lib/types";

// Demo events for layout/preview purposes. Replace with real data via the
// eventService once GET /api/events is available.
export const events: SchoolEvent[] = [
  {
    slug: "annual-sports-meet",
    title: "Annual Sports Meet",
    date: "2026-11-14",
    time: "9:00 AM",
    location: "School Grounds",
    category: "Sports",
    description:
      "Demo entry — the school's annual inter-house sports meet featuring track and field events.",
    coverImageQuery: "school sports day track field",
  },
  {
    slug: "science-exhibition",
    title: "Science Exhibition",
    date: "2026-10-02",
    time: "10:00 AM",
    location: "School Auditorium",
    category: "Academic",
    description:
      "Demo entry — students showcase science projects and experiments to peers and parents.",
    coverImageQuery: "student science exhibition fair",
  },
  {
    slug: "annual-cultural-fest",
    title: "Annual Cultural Fest",
    date: "2026-09-20",
    time: "5:00 PM",
    location: "School Auditorium",
    category: "Cultural",
    description: "Demo entry — an evening of music, dance and drama performed by students.",
    coverImageQuery: "school cultural festival stage performance",
  },
  {
    slug: "inter-school-quiz",
    title: "Inter-School Quiz Competition",
    date: "2026-03-10",
    time: "11:00 AM",
    location: "School Auditorium",
    category: "Competition",
    description: "Demo entry — an inter-school quiz competition hosted on campus.",
    coverImageQuery: "students quiz competition",
    isPast: true,
  },
  {
    slug: "annual-day-celebration",
    title: "Annual Day Celebration",
    date: "2026-01-18",
    time: "4:00 PM",
    location: "School Grounds",
    category: "Celebration",
    description: "Demo entry — the school's annual day, celebrating the academic year's achievements.",
    coverImageQuery: "school annual day celebration",
    isPast: true,
  },
];

export const eventCategories: SchoolEvent["category"][] = [
  "Academic",
  "Cultural",
  "Sports",
  "Competition",
  "Celebration",
  "Other",
];
