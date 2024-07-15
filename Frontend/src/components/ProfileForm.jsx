import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/authReducer';

export default function ProfileForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const [formData, setFormData] = useState({
    wouldInvest: '',
    yearlyIncome: '',
    sourceOfIncome: '',
    usedBuyNowPayLater: '',
    currentlyInvested: '',
    portfolioSize: '',
    investmentOptions: [],
    investmentDuration: '',
    riskTolerance: ''
  });

  useEffect(() => {
    fetch('https://fincelerate.onrender.com/server/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure Bearer is included
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setFormData(data.profile);
      }
    });
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          investmentOptions: [...prevState.investmentOptions, value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          investmentOptions: prevState.investmentOptions.filter(option => option !== value)
        }));
      }
    } else if (type === 'radio') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://fincelerate.onrender.com/server/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Ensure Bearer is included
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        dispatch(loginSuccess(user, localStorage.getItem('token')));
        navigate('/profile/view');
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">{formData._id ? 'Edit Profile' : 'Create Profile'}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Would you like to invest?</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="wouldInvest"
                value="yes"
                checked={formData.wouldInvest === 'yes'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="wouldInvest"
                value="no"
                checked={formData.wouldInvest === 'no'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Yearly Income</label>
          <select
            name="yearlyIncome"
            value={formData.yearlyIncome}
            onChange={handleChange}
            className="form-select p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Income</option>
            <option value="500000">5,00,000</option>
            <option value="1000000">10,00,000</option>
            <option value="1500000">15,00,000</option>
            <option value="2000000">20,00,000</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Source of Income</label>
          <select
            name="sourceOfIncome"
            value={formData.sourceOfIncome}
            onChange={handleChange}
            className="form-select p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Source</option>
            <option value="salary">Salary</option>
            <option value="business">Business</option>
            <option value="investments">Investments</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Have you ever used “Buy now Pay later”?</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="usedBuyNowPayLater"
                value="yes"
                checked={formData.usedBuyNowPayLater === 'yes'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="usedBuyNowPayLater"
                value="no"
                checked={formData.usedBuyNowPayLater === 'no'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Currently invested?</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="currentlyInvested"
                value="yes"
                checked={formData.currentlyInvested === 'yes'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="currentlyInvested"
                value="no"
                checked={formData.currentlyInvested === 'no'}
                onChange={handleChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Current portfolio size</label>
          <select
            name="portfolioSize"
            value={formData.portfolioSize}
            onChange={handleChange}
            className="form-select p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Size</option>
            <option value="1lakh">1 Lakh</option>
            <option value="2lakh">2 Lakh</option>
            <option value="3lakh">3 Lakh</option>
            <option value="3plus">3+ Lakh</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Currently invested options</label>
          <div className="flex flex-wrap gap-4">
            {['Mutual funds', 'Stocks', 'Gold/Gold bonds', 'FD', 'PPF', 'Others'].map(option => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="investmentOptions"
                  value={option}
                  checked={formData.investmentOptions.includes(option)}
                  onChange={handleChange}
                  className="form-checkbox text-blue-600"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">How long do you wish to stay invested?</label>
          <select
            name="investmentDuration"
            value={formData.investmentDuration}
            onChange={handleChange}
            className="form-select p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Duration</option>
            <option value="1">1 year</option>
            <option value="3">3 years</option>
            <option value="5">5 years</option>
            <option value="5plus">5+ years</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium text-gray-700">Risk you wish to take</label>
          <select
            name="riskTolerance"
            value={formData.riskTolerance}
            onChange={handleChange}
            className="form-select p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Risk</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
