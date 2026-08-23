import type { ResultYear } from "@/lib/types";

// No result figures are invented here. Every year is marked `published:
// false` with null statistics until this is wired to the real
// GET /api/results endpoint. The UI is responsible for rendering
// "Official data will be published here." whenever published is false.
export const resultYears: ResultYear[] = Array.from({ length: 10 }, (_, i) => {
  const year = 2017 + i;
  return {
    year,
    published: false,
    appeared: null,
    passed: null,
    passPercentage: null,
    distinction: null,
    starMarks: null,
    topPerformers: [],
  };
}).reverse();

export const latestResultYear = resultYears[0];
