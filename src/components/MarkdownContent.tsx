import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownContent: React.FC = () => {
  const markdown = `
  ## This is a simple blog where I share my learning experiences.

  ### Topics Covered
  - React
  - TypeScript
  - Vite
  - And more!

  **Enjoy reading!**
  `;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownContent;
