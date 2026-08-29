import type { FacultyMember } from "@/lib/types";

// Placeholder faculty entries. No real teacher names are used — replace with
// official staff data supplied by the school before publishing.
export const facultyMembers: FacultyMember[] = [
  { id: "f1", name: "Faculty Name", designation: "Senior Teacher", subject: "English", department: "Languages", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f2", name: "Faculty Name", designation: "Senior Teacher", subject: "Mathematics", department: "Sciences", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f3", name: "Faculty Name", designation: "Teacher", subject: "Physics", department: "Sciences", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f4", name: "Faculty Name", designation: "Teacher", subject: "Chemistry", department: "Sciences", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f5", name: "Faculty Name", designation: "Teacher", subject: "Biology", department: "Sciences", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f6", name: "Faculty Name", designation: "Teacher", subject: "History", department: "Humanities", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f7", name: "Faculty Name", designation: "Teacher", subject: "Geography", department: "Humanities", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f8", name: "Faculty Name", designation: "Teacher", subject: "Computer Science", department: "Sciences", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
  { id: "f9", name: "Faculty Name", designation: "Teacher", subject: "Physical Education", department: "Sports", photoAlt: "Faculty portrait placeholder", isPlaceholder: true },
];

export const departments = Array.from(new Set(facultyMembers.map((f) => f.department)));
export const subjects = Array.from(new Set(facultyMembers.map((f) => f.subject)));
