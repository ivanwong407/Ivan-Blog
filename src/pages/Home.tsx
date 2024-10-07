import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/post';
import CategoryFilter from '../components/CategoryFilter';
import { Category } from '../types/categories';
import '../styles/darkTheme.css';

// Dummy data (in a real application, this would be fetched from an API or database)
const dummyPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Introduction to React',
    content: 'React is a popular JavaScript library for building user interfaces...',
    category: 'Website Development',
    date: '2023-06-01'
  },
  {
    id: '2',
    title: 'Understanding Microcontrollers',
    content: 'Microcontrollers are small computers on a single integrated circuit...',
    category: 'Electronic Engineering',
    date: '2023-06-05'
  },
  // Add more dummy posts as needed
];

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredPosts = selectedCategory
    ? dummyPosts.filter((post) => post.category === selectedCategory)
    : dummyPosts;

  return (
    <div className="container">
      <h1>Welcome to My Blog</h1>
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={(category) => setSelectedCategory(category as Category | null)} 
      />
      <div>
        {filteredPosts.map((post) => (
          <div key={post.id}>
            <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
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