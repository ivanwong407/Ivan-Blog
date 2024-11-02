import rawBloglist from "../pages/bloglist.json";

// Extract unique categories from the bloglist JSON data
const dynamicCategories = Array.from(
  new Set(rawBloglist.bloglist.map((post) => post.category))
);

export const categories = [
  "Software Engineering",
  "Electronic Engineering",
  "Website Development",
  "Theory and Principle",
  "SEO",
  "Others",
  ...dynamicCategories, // Add dynamic categories here
] as const;

export type Category = (typeof categories)[number];
