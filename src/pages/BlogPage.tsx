import React, { useState } from 'react';
import { BlogPost } from '../types/post';
import CategoryFilter from '../components/CategoryFilter';
import { Category } from '../types/categories';
import '../styles/darkTheme.css';
import bloglist from '../pages/bloglist.json';

// Dummy data (in a real application, this would be fetched from an API or database)
const blogPosts: BlogPost[] = bloglist.bloglist.map(post => ({
  ...post,
  category: post.category as Category
}));

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="container">
      <h1>Blog</h1>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={(category) => setSelectedCategory(category as Category | null)} 
      />
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>Category: {post.category}</p>
            <p>Date: {post.date}</p>
            <p>{post.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;