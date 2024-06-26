import React, { useState } from 'react';
import ContactForm from './Contact';
import Calendly from './Appointment';

const ContactUsPage = () => {
  const [activeTab, setActiveTab] = useState('query');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-left mb-6">
            Get Professional Advice to Achieve your Goals . . .
          </h1>
        </div>
        {/* <div className="w-full md:w-1/2">
          <img src={image} alt="Contact Us" className="rounded-lg shadow-lg" />
        </div> */}
      </div>
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="flex justify-center mb-5">
          <button
            onClick={() => handleTabClick('query')}
            className={`mr-4 px-4 py-2 font-semibold rounded ${activeTab === 'query' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Query Form
          </button>
          <button
            onClick={() => handleTabClick('appointment')}
            className={`px-4 py-2 font-semibold rounded ${activeTab === 'appointment' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Book Appointment
          </button>
        </div>
        <div>
          {activeTab === 'query' ? <ContactForm /> : <Calendly />}
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
