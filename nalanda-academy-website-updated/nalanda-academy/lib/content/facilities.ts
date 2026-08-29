import type { Facility } from "@/lib/types";

// Demo/placeholder entries — confirm which facilities actually exist on
// campus before publishing, and replace imageQuery-based placeholders with
// real campus photography.
export const facilities: Facility[] = [
  {
    slug: "classrooms",
    name: "Classrooms",
    category: "Learning Spaces",
    description:
      "Bright, well-ventilated classrooms designed to support focused, teacher-led instruction.",
    imageQuery: "modern school classroom",
    isPlaceholder: true,
  },
  {
    slug: "science-laboratories",
    name: "Science Laboratories",
    category: "Learning Spaces",
    description:
      "Dedicated laboratory space for practical, hands-on science learning.",
    imageQuery: "school science laboratory",
    isPlaceholder: true,
  },
  {
    slug: "computer-lab",
    name: "Computer Lab",
    category: "Learning Spaces",
    description: "A computer lab supporting digital literacy and computer studies.",
    imageQuery: "school computer lab",
    isPlaceholder: true,
  },
  {
    slug: "library",
    name: "Library",
    category: "Learning Spaces",
    description: "A quiet reading and reference space stocked with academic and general titles.",
    imageQuery: "school library reading room",
    isPlaceholder: true,
  },
  {
    slug: "playground",
    name: "Playground",
    category: "Sports & Activity",
    description: "Open outdoor space for sport, physical education and recreation.",
    imageQuery: "school playground field",
    isPlaceholder: true,
  },
  {
    slug: "campus",
    name: "Campus",
    category: "Sports & Activity",
    description: "The wider school campus and grounds.",
    imageQuery: "school campus building exterior",
    isPlaceholder: true,
  },
  {
    slug: "activity-areas",
    name: "Activity Areas",
    category: "Sports & Activity",
    description: "Spaces set aside for co-curricular clubs, arts and cultural activities.",
    imageQuery: "school activity hall students",
    isPlaceholder: true,
  },
];
