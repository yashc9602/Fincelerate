import React from 'react';
import useScrollToTop from './useScrollToTop';

const ComingSoonPage = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <div className="text-center px-6 py-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-4">Coming Soon</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <svg
            className="w-20 h-20 text-indigo-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v2m0 12v2m8-10h-2m-12 0H4m15.364 7.364l-1.414-1.414m-10.607 0L4.636 16.364m13.728-10.728l-1.414 1.414m-10.607 0L4.636 7.636"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
