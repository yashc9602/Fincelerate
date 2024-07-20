import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import twitterLogo from '../assets/images/logo-black.png'; // Import the local Twitter logo

const SocialMediaSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ${isHovered ? 'w-16' : 'w-8'} transition-width duration-300`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center justify-center w-4 h-32 bg-blue-500 text-white cursor-pointer"
      >
        <FontAwesomeIcon icon={isHovered ? faArrowLeft : faArrowRight} />
      </div>
      <div className={`${isHovered ? 'block' : 'hidden'} bg-white shadow-lg p-2 rounded-r-lg`}>
        <ul className="space-y-4">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <img src={twitterLogo} alt="Twitter" className="w-8 h-8 mx-auto" />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaSidebar;
