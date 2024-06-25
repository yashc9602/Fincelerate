import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [
  'https://images.unsplash.com/photo-1582719478144-0aea8737b1b9?auto=format&q=75&fit=crop&w=800&h=400',
  'https://images.unsplash.com/photo-1551042034-1f596b27a217?auto=format&q=75&fit=crop&w=800&h=400',
  'https://images.unsplash.com/photo-1586112475253-390e32a10b5d?auto=format&q=75&fit=crop&w=800&h=400',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=75&fit=crop&w=800&h=400',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&q=75&fit=crop&w=800&h=400'
];

const SphereCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-4/5 h-1/2 mx-auto my-8 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;
          const isPrev2 = index === (currentIndex - 2 + images.length) % images.length;
          const isNext2 = index === (currentIndex + 2) % images.length;

          let className = 'absolute transition-transform duration-700 ease-in-out';

          if (isActive) {
            className += ' transform scale-100 z-10';
          } else if (isPrev || isNext) {
            className += ' transform scale-75 z-5 opacity-75';
          } else if (isPrev2 || isNext2) {
            className += ' transform scale-50 z-0 opacity-50';
          } else {
            className += ' hidden';
          }

          return (
            <div key={index} className={className} style={{ left: `${(index - currentIndex + 2) * 20}%` }}>
              <img src={image} alt={`Slide ${index}`} className="w-80 h-40 object-cover" />
            </div>
          );
        })}
      </div>
      <button onClick={prevSlide} className="absolute left-0 bottom-0 p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75">
        <ChevronLeftIcon className="h-8 w-8" />
      </button>
      <button onClick={nextSlide} className="absolute right-0 bottom-0 p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75">
        <ChevronRightIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SphereCarousel;
