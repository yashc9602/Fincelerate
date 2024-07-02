import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileView = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fincelerate.onrender.com/server/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProfile(data.profile);
        } else {
          console.error('Failed to fetch profile', data.message);
        }
      });
  }, []);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Profile</h2>
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Investment Preference</h3>
          <p className="text-lg text-gray-600">{profile.wouldInvest === 'yes' ? 'Yes' : 'No'}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Yearly Income</h3>
          <p className="text-lg text-gray-600">₹{profile.yearlyIncome}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Source of Income</h3>
          <p className="text-lg text-gray-600">{profile.sourceOfIncome}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Used Buy Now Pay Later</h3>
          <p className="text-lg text-gray-600">{profile.usedBuyNowPayLater === 'yes' ? 'Yes' : 'No'}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Currently Invested</h3>
          <p className="text-lg text-gray-600">{profile.currentlyInvested === 'yes' ? 'Yes' : 'No'}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Current Portfolio Size</h3>
          <p className="text-lg text-gray-600">{profile.portfolioSize}</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Investment Options</h3>
          <ul className="list-disc list-inside text-lg text-gray-600">
            {profile.investmentOptions.map(option => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Investment Duration</h3>
          <p className="text-lg text-gray-600">{profile.investmentDuration} years</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-gray-700">Risk Tolerance</h3>
          <p className="text-lg text-gray-600">{profile.riskTolerance}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/profile/edit')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
