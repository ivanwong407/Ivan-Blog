import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "../types/post";
import CategoryFilter from "../components/CategoryFilter";
import { Category } from "../types/categories";
import "../styles/darkTheme.css";
import bloglist from "../pages/bloglist.json";
import MarkdownContent from "../components/MarkdownContent";

const blogPosts: BlogPost[] = bloglist.bloglist.map((post) => ({
  ...post,
  category: post.category as Category,
  detail: post.detail as string,
}));

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="container">
      <h1>Welcome to My Blog</h1>
      <MarkdownContent />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={(category) =>
          setSelectedCategory(category as Category | null)
        }
      />
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h2>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p>Category: {post.category}</p>
            <p>Date: {post.date}</p>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
