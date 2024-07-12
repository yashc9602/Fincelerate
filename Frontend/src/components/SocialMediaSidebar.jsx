import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SocialMediaSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ${isOpen ? 'w-16' : 'w-8'} transition-width duration-300`}>
      <div
        className="flex items-center justify-center w-6 h-32 bg-[#041D4C] text-white cursor-pointer"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faArrowLeft : faArrowRight} />
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} bg-white shadow-lg p-2 rounded-r-lg`}>
        <ul className="space-y-4">
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-center text-gray-800 hover:text-blue-500">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
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
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaSidebar;
