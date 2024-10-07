import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch the blog post data based on the id
  const post = {
    title: `Blog Post ${id}`,
    content: `This is the content of blog post ${id}.`,
  };

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;