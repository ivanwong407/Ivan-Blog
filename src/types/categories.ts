export const categories = [
  "Software Engineering",
  "Electronic Engineering",
  "Website Development",
  "Theory and Principle",
  "SEO",
  "Network",
  "Others",
] as const;

export type Category = (typeof categories)[number];
