import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  { id: 1, title: 'First Blog Post', excerpt: 'This is the first blog post.' },
  { id: 2, title: 'Second Blog Post', excerpt: 'This is the second blog post.' },
  // Add more blog posts here
];

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to My Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id}>
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;