export interface Facility {
  slug: string;
  name: string;
  category: string;
  description: string;
  imageQuery: string; // used to derive a placeholder image
  isPlaceholder?: boolean;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  subject: string;
  department: string;
  photoAlt: string;
  isPlaceholder?: boolean;
}

export interface ResultYear {
  year: number;
  published: boolean;
  appeared: number | null;
  passed: number | null;
  passPercentage: number | null;
  distinction: number | null;
  starMarks: number | null;
  topPerformers: { initials: string; percentage: number | null }[];
}

export type EventCategory =
  | "Academic"
  | "Cultural"
  | "Sports"
  | "Competition"
  | "Celebration"
  | "Other";

export interface SchoolEvent {
  slug: string;
  title: string;
  date: string; // ISO
  time?: string;
  location: string;
  category: EventCategory;
  description: string;
  coverImageQuery: string;
  gallery?: string[];
  isPast?: boolean;
}

export type NoticeCategory =
  | "Admission"
  | "Examination"
  | "Result"
  | "Holiday"
  | "Event"
  | "General"
  | "Important";

export interface Notice {
  slug: string;
  title: string;
  publishedDate: string; // ISO
  category: NoticeCategory;
  content: string;
  important?: boolean;
  attachments?: { label: string; href: string }[];
}
