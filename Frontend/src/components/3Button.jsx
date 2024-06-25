import React from 'react';
import 'tailwindcss/tailwind.css';

const ButtonGroup = () => {
  return (
    <div className="container mx-auto p-5 flex justify-center gap-24 mt-12">
      <button className="bg-[#000C49] text-white py-4 px-8 rounded-lg hover:bg-blue-600">
        Invest
      </button>
      <button className="bg-[#000C49] text-white py-2 px-4 rounded-lg border-l border-r border-blue-700 hover:bg-blue-600">
        Book an appointment
      </button>
      <button className="bg-[#000C49] text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Explore funds
      </button>
    </div>
  );
};

export default ButtonGroup;
