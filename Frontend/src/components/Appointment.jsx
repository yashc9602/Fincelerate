import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-10 text-center">Book an Appointment</h1>
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-8">
          <InlineWidget
            url="https://calendly.com/fincelerate/30min"
            styles={{ height: '600px' }} // Reduced height for better mobile experience
            pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '00a2ff',
              textColor: '4d5055',
            }}
            prefill={{
              name: 'John Doe',
              email: 'john.doe@example.com',
            }}
            utm={{
              utmCampaign: 'Spring Sale 2023',
              utmContent: 'Free Consultation',
              utmMedium: 'Ad',
              utmSource: 'Facebook',
              utmTerm: 'Software Development',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendly;
