import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://mintcream-chamois-554629.hostingersite.com/wp-json/wp/v2/posts');
        if (Array.isArray(response.data)) {
          setPosts(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
          setPosts([]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Blogs</h1>
        <div className="grid gap-8 lg:grid-cols-1 sm:grid-cols-1">
          {posts.map(post => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title.rendered}</h2>
                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
