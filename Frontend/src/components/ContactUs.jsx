import React, { useState } from 'react';
import ContactForm from './Contact';
import Calendly from './Appointment';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsPage = () => {
  const [activeTab, setActiveTab] = useState('query');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-left mb-8 md:mb-24 m-4 md:m-12">
            Get Professional <br className="hidden md:block" /> Advice to Achieve <br className="hidden md:block" /> your Goals . . .
          </h1>
          <div className="space-y-4 m-4 md:m-12">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-600 mr-3" />
              <span>fincelerate@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-gray-600 mr-3" />
              <span>+91-9611248691</span>
            </div>
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-gray-600 mr-3 mt-1" />
              <span>Registered Office: 259, 14th Main, 27th Cross, <br className="hidden md:block" /> Banashankari 2nd Stage, Bengaluru, Karnataka 560070</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow-lg">
            <div className="flex justify-center mb-5">
              <button
                onClick={() => handleTabClick('query')}
                className={`mr-2 md:mr-4 px-2 md:px-4 py-2 font-semibold rounded ${activeTab === 'query' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Query Form
              </button>
              <button
                onClick={() => handleTabClick('appointment')}
                className={`px-2 md:px-4 py-2 font-semibold rounded ${activeTab === 'appointment' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Book Appointment
              </button>
            </div>
            <div>
              {activeTab === 'query' ? <ContactForm /> : <Calendly />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
