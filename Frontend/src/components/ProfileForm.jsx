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
        'Authorization': localStorage.getItem('token')
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
        setFormData({ ...formData, investmentOptions: [...formData.investmentOptions, value] });
      } else {
        setFormData({ ...formData, investmentOptions: formData.investmentOptions.filter(option => option !== value) });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://fincelerate.onrender.com/server/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
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
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">{formData._id ? 'Edit Profile' : 'Create Profile'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ... same form fields as in ProfileForm.js ... */}
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
