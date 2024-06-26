import React from 'react';
import 'tailwindcss/tailwind.css';

const ButtonGroup = () => {
  return (
    <div className="container mx-auto p-5 flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-24 mt-12">
      <button className="bg-[#000C49] text-white py-4 px-8 rounded-lg hover:bg-blue-600">
        Invest
      </button>
      <button className="bg-[#000C49] text-white py-4 px-8 rounded-lg hover:bg-blue-600">
        Book an appointment
      </button>
      <button className="bg-[#000C49] text-white py-4 px-8 rounded-lg hover:bg-blue-600">
        Explore funds
      </button>
    </div>
  );
};

export default ButtonGroup;
