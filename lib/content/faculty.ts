import type { FacultyMember } from "@/lib/types";

// ---------------------------------------------------------------------------
// Homepage "Our Faculty" editorial section — kept separate from
// `facultyMembers` below (which also powers /faculty) so that page is
// unaffected by this section's copy/design.
//
// `featuredFaculty` below now reflects real, school-confirmed staff data
// (name + role) sourced from the official staff list. No photo has been
// supplied yet, so it renders via the existing placeholder image — add a
// real photoUrl once available (isPlaceholder can then be set to false).
// Per privacy policy, personal contact details (phone/email/date of birth)
// are never published on the public site — see `facultyMembers` note below.
//
// TO REPLACE / UPDATE FURTHER: see "files to update" note at the bottom of
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

// Real, school-confirmed profile. No photo supplied yet (renders via the
// existing placeholder image system). Qualification/experience/quote are
// intentionally left blank rather than invented — add them once the school
// supplies that information.
export const featuredFaculty = {
  isPlaceholder: true as const,
  isDemo: false as const,
  photoUrl: undefined as string | undefined,
  photoAlt: "Faculty portrait placeholder — replace with official photography",
  label: "Featured Faculty",
  name: "Rupam Doloi" as string | null,
  designation: "Principal" as string | null,
  qualification: null as string | null,
  experience: null as string | null,
  quote: null as string | null,
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

// Real staff data supplied by the school's official records. Only name,
// role/designation, and the section/level they teach are published here —
// personal contact details (phone number, personal email, date of birth)
// from the source record are intentionally excluded from this public
// website for privacy reasons. No photographs have been supplied yet, so
// every entry renders via the existing placeholder image (`isPlaceholder:
// true`) until real, consented staff photography is provided.
export const facultyMembers: FacultyMember[] = [
  { id: "rupam-doloi", name: "Rupam Doloi", designation: "Principal", subject: "Administration", department: "Administration", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "surya-pratim-chakravorty", name: "Surya Pratim Chakravorty", designation: "Director", subject: "Administration", department: "Administration", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "uttam-biswas", name: "Uttam Biswas", designation: "Teacher & Office Assistant", subject: "Primary & Upper Primary", department: "Primary & Upper Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "jitu-moni-sikdar", name: "Jitu Moni Sikdar", designation: "Teacher", subject: "Pre-Primary & Primary", department: "Pre-Primary & Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "nripen-teron", name: "Nripen Teron", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "gopa-chowdhury", name: "Gopa Chowdhury", designation: "Teacher", subject: "Pre-Primary", department: "Pre-Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "nitu-moni-kalita", name: "Nitu Moni Kalita", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "vicky-kumar-bharali", name: "Vicky Kumar Bharali", designation: "Teacher", subject: "Upper Primary", department: "Upper Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "mamoni-chakravorty", name: "Mamoni Chakravorty", designation: "Teacher", subject: "Primary", department: "Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "jyoti-basfore", name: "Jyoti Basfore", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "jehirul-islam", name: "Jehirul Islam", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "jayashree-dutta", name: "Jayashree Dutta", designation: "Teacher", subject: "Pre-Primary & Primary", department: "Pre-Primary & Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "rabita-mazi", name: "Rabita Mazi", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "puja-rani-dey", name: "Puja Rani Dey", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "ankush-kumar-dey", name: "Ankush Kumar Dey", designation: "Teacher", subject: "Primary & Upper Primary", department: "Primary & Upper Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "khushboo-kumari", name: "Khushboo Kumari", designation: "Teacher", subject: "Upper Primary & Secondary", department: "Upper Primary & Secondary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
  { id: "jagat-gogoi", name: "Jagat Gogoi", designation: "Teacher & Accountant", subject: "Primary & Upper Primary", department: "Primary & Upper Primary", photoAlt: "Faculty portrait placeholder — replace with official photography", isPlaceholder: true },
];

export const departments = Array.from(new Set(facultyMembers.map((f) => f.department)));
export const subjects = Array.from(new Set(facultyMembers.map((f) => f.subject)));

// ---------------------------------------------------------------------------
// FILES TO UPDATE WHEN OFFICIAL STAFF PHOTOGRAPHY ARRIVES
// ---------------------------------------------------------------------------
// This is the ONLY file that needs content changes. No component files need
// to be touched — FacultySectionView, FacultyCard and FacultyPhoto all read
// from here.
//
// 1. Add real photo files under /public/images/faculty/ (any filename).
// 2. For `featuredFaculty`: set photoUrl to the real path, set
//    isPlaceholder to false, and fill in qualification/experience/quote if
//    the school supplies them.
// 3. For each entry in `facultyMembers`: set photoUrl to the real photo
//    path and set isPlaceholder to false once a photo is available.
//
// Note: subject/department values above reflect the grade level/section
// each staff member teaches (as recorded in the school's staff list), since
// subject-by-subject specialization was not part of the source data.
// ---------------------------------------------------------------------------
