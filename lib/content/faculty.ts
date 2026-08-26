import type { FacultyMember } from "@/lib/types";

// ---------------------------------------------------------------------------
// Homepage "Our Faculty" editorial section — kept separate from
// `facultyMembers` below (which also powers /faculty) so that page is
// unaffected by this section's copy/design.
//
// DEMO DATA NOTICE: the photos and bio fields below (name, designation,
// qualification, experience, quote) are placeholder/demo content for design
// review only. Photos are stand-in portraits — they do not depict, name, or
// describe real Nalanda Academy staff, and nothing here should be published
// as official. Each demo entry is flagged `isDemo: true`, which renders a
// small "Demo Profile" badge on its photo.
//
// TO REPLACE WITH REAL DATA: see "files to update" note at the bottom of
// this file.
// ---------------------------------------------------------------------------

export const facultyHero = {
  eyebrowIndex: "05",
  eyebrow: "Our Faculty",
  heading: ["People Who", "Inspire Excellence."],
  headingAccent: "Excellence.",
  description:
    "Behind every meaningful learning experience are educators who guide, challenge and inspire students to become their best.",
  cta: { label: "Meet All Faculty", href: "/faculty" },
};

// DEMO CONTENT — for design/layout review only. This is not an official
// profile: the name, designation, qualification, experience and quote below
// are fictional placeholders, and the photo is a stand-in portrait, not a
// real staff photograph. Replace with school-confirmed data before publishing
// (see note at bottom of file for exactly which fields to update).
export const featuredFaculty = {
  isPlaceholder: false as const,
  isDemo: true as const,
  photoUrl: "/images/faculty/demo-faculty-07-principal.png",
  photoAlt: "Demo portrait — placeholder for featured faculty photography",
  label: "Featured Faculty",
  name: "Demo Faculty Profile" as string | null,
  designation: "Principal (Demo)" as string | null,
  qualification: "Qualification Placeholder" as string | null,
  experience: "Experience Placeholder" as string | null,
  quote: "Demo quote placeholder — replace with an official statement." as string | null,
  placeholderNote: "Official faculty information will be published here.",
};

// Design categories only — broad groupings used to organize the faculty
// grid visually. These do not assert that specific departments, staffing
// levels or programmes officially exist beyond what /academics confirms.
export const facultyCategories = [
  {
    icon: "users" as const,
    title: "Academic Leadership",
    body: "Guiding academic direction and institutional growth.",
  },
  {
    icon: "flask-conical" as const,
    title: "Science & Mathematics",
    body: "Building strong analytical and scientific thinking.",
  },
  {
    icon: "book-open" as const,
    title: "Languages & Humanities",
    body: "Developing communication, creativity and perspective.",
  },
  {
    icon: "trophy" as const,
    title: "Activities & Development",
    body: "Supporting students beyond the classroom.",
  },
];

export const facultyPhilosophy = {
  heading: "Teaching With Purpose",
  quote:
    "Great teaching is not only about delivering lessons. It is about creating curiosity, encouraging questions and helping every student discover their potential.",
};

export const facultyValues = [
  {
    icon: "compass" as const,
    title: "Guidance",
    body: "Helping students find direction.",
  },
  {
    icon: "users-round" as const,
    title: "Mentorship",
    body: "Supporting individual growth.",
  },
  {
    icon: "star" as const,
    title: "Excellence",
    body: "Encouraging high standards.",
  },
  {
    icon: "heart" as const,
    title: "Empathy",
    body: "Understanding every learner.",
  },
];

export const facultyCta = {
  heading: ["Meet The People", "Behind The Learning."],
  headingAccent: "Learning.",
  button: { label: "View All Faculty", href: "/faculty" },
};

// DEMO faculty entries for design/layout review. Names, designations,
// subjects and experience are clearly fictional placeholders — not real
// staff data. Photos are stand-in portraits (not depictions of actual
// Nalanda Academy teachers). Each entry is flagged `isDemo: true`, which
// renders a small "Demo Profile" badge in the UI.
//
// Replace with official staff data supplied by the school before publishing
// (see note at bottom of file for exactly which fields to update).
export const facultyMembers: FacultyMember[] = [
  { id: "f1", name: "Faculty Member 01", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Languages", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-01.png", isDemo: true },
  { id: "f2", name: "Faculty Member 02", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sciences", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-02.png", isDemo: true },
  { id: "f3", name: "Faculty Member 03", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sciences", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-03.png", isDemo: true },
  { id: "f4", name: "Faculty Member 04", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sciences", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-04.png", isDemo: true },
  { id: "f5", name: "Faculty Member 05", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sciences", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-05.png", isDemo: true },
  { id: "f6", name: "Faculty Member 06", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Humanities", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-06.png", isDemo: true },
  { id: "f7", name: "Faculty Member 07", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Humanities", photoAlt: "Demo portrait — placeholder faculty photo", isPlaceholder: true },
  { id: "f8", name: "Faculty Member 08", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sciences", photoAlt: "Demo portrait — placeholder faculty photo", photoUrl: "/images/faculty/demo-faculty-08-spare.png", isDemo: true },
  { id: "f9", name: "Faculty Member 09", designation: "Demo Faculty Profile", subject: "Subject / Department Placeholder", department: "Sports", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
];

export const departments = Array.from(new Set(facultyMembers.map((f) => f.department)));
export const subjects = Array.from(new Set(facultyMembers.map((f) => f.subject)));

// ---------------------------------------------------------------------------
// FILES TO UPDATE WHEN OFFICIAL FACULTY DATA ARRIVES
// ---------------------------------------------------------------------------
// This is the ONLY file that needs content changes. No component files need
// to be touched — FacultySectionView, FacultyCard and FacultyPhoto all read
// from here.
//
// 1. Add real photo files under /public/images/faculty/ (any filename).
// 2. For `featuredFaculty`: set photoUrl to the real path, set isDemo to
//    false, and fill in the real name/designation/qualification/experience/
//    quote (or leave as `isPlaceholder: true` with photoUrl omitted if no
//    profile is ready yet).
// 3. For each entry in `facultyMembers`: set photoUrl to the real photo
//    path, set isDemo to false (or remove it), and replace name/designation/
//    subject/department with real values. Entries without a photoUrl (f7,
//    f9) already show the existing text placeholder — add photoUrl to them
//    the same way once photos are available.
// ---------------------------------------------------------------------------
