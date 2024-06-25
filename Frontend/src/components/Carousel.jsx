import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import localImage from '../assets/images/home_carousel_1.jpg';

const carouselItems = [
  {
    title: "Highlights The Business Work",
    description:
      "The road to financial security starts with a financial advisor who cares about your journey.Financial success is about having a plan, staying disciplined, and making informed decisions",
    imageUrl: localImage,
    buttonText: "Learn More",
    buttonUrl: "#",
  },

  {
    title: "Carousel 2",
    description: "This is the description for carousel 2.",
    imageUrl: "https://via.placeholder.com/800x400", // Replace with your image URL
    buttonText: "Learn More",
    buttonUrl: "#",
  },
  {
    title: "Carousel 3",
    description: "This is the description for carousel 3.",
    imageUrl: "https://via.placeholder.com/800x400", // Replace with your image URL
    buttonText: "Learn More",
    buttonUrl: "#",
  },
];

const CustomCarousel = () => {
  return (
    <div className="w-3/5 h-1/2 mx-auto my-8">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-24">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl mb-4 px-12 mb-48">
                {item.description}
              </p>
              <Link
                href={item.buttonUrl}
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
