export const categories = [
  "Software Engineering",
  "Electronic Engineering",
  "Website Development",
  "Theory and Principle",
  "Others"
] as const;

export type Category = typeof categories[number];