import React from 'react';
import 'tailwindcss/tailwind.css';

const videos = [
  { title: 'Video 1', description: 'This is a description for Video 1.', thumbnail: '/path/to/video1-thumbnail.jpg', url: '#' },
  { title: 'Video 2', description: 'This is a description for Video 2.', thumbnail: '/path/to/video2-thumbnail.jpg', url: '#' },
  { title: 'Video 3', description: 'This is a description for Video 3.', thumbnail: '/path/to/video3-thumbnail.jpg', url: '#' },
];

const blogs = [
  { title: 'Blog 1', description: 'This is a description for Blog 1.', thumbnail: '/path/to/blog1-thumbnail.jpg', url: '#' },
  { title: 'Blog 2', description: 'This is a description for Blog 2.', thumbnail: '/path/to/blog2-thumbnail.jpg', url: '#' },
  { title: 'Blog 3', description: 'This is a description for Blog 3.', thumbnail: '/path/to/blog3-thumbnail.jpg', url: '#' },
];

const webinars = [
  { title: 'Webinar 1', description: 'This is a description for Webinar 1.', thumbnail: '/path/to/webinar1-thumbnail.jpg', url: '#' },
  { title: 'Webinar 2', description: 'This is a description for Webinar 2.', thumbnail: '/path/to/webinar2-thumbnail.jpg', url: '#' },
  { title: 'Webinar 3', description: 'This is a description for Webinar 3.', thumbnail: '/path/to/webinar3-thumbnail.jpg', url: '#' },
];

const MediaCard = ({ title, description, thumbnail, url }) => (
  <a href={url} className="block rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
    <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </a>
);

const MediaSection = ({ title, items }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <MediaCard key={index} {...item} />
      ))}
    </div>
  </div>
);

const MediaPage = () => {
  return (
    <div className="container mx-auto p-4 h-96">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Educate Yourself</h1>
    </div>
  );
};

export default MediaPage;
