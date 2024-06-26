import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExploreYourself = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://mintcream-chamois-554629.hostingersite.com/wp-json/wp/v2/posts');
        if (Array.isArray(response.data)) {
          setPosts(response.data.slice(0, 5)); // Fetch top 5 blogs
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
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Explore our ongoing webinars and live events</h1>
        {/* Section for Webinars and Live Events */}
        <div className="mb-16">
          <div className="text-2xl font-bold text-gray-800 mb-4">Upcoming Webinars and Live Events</div>
          {/* Replace with your events component or content */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg text-gray-700">Stay tuned for upcoming webinars and live events!</p>
          </div>
        </div>

        {/* Section for Top Blogs */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Top Blogs</h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
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
    </div>
  );
};

export default ExploreYourself;
