export const siteConfig = {
  name: "Nalanda Academy",
  shortName: "Nalanda",
  tagline: "Building Knowledge. Inspiring Excellence. Shaping Futures.",
  description:
    "Nalanda Academy is a modern learning environment focused on academic excellence, character development and preparing students for a changing world.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nalandaacademy.example",
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Events", href: "/events" },
  { label: "Notices", href: "/notices" },
];

export const footerNav = [
  ...primaryNav.slice(1),
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
];

// Placeholder contact details — replace with official information.
export const contactInfo = {
  address: "[Official school address to be added]",
  phone: "[Official phone number to be added]",
  email: "[Official email to be added]",
  officeHours: "[Official office hours to be added]",
  mapEmbedUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
};

// Only rendered when a real handle is configured — no accounts are invented.
export const socialLinks = {
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? "",
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
};

export const PLACEHOLDER = "[Official information to be added]";
