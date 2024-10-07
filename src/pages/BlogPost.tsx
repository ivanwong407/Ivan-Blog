import React from 'react';
import { useParams } from 'react-router-dom';
import bloglist from '../pages/bloglist.json';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log('Received id:', id);
  console.log('All blog posts:', bloglist.bloglist);

  const post = bloglist.bloglist.find(post => post.id === id);
  console.log('Found post:', post);

  if (!id) {
    return <p>Error: No blog post ID provided</p>;
  }

  return (
    <div className="blog-post">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Blog post not found for id: {id}</p>
      )}
    </div>
  );
};

export default BlogPost;