import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    'your-name': '',
    'your-email': '',
    'AreastoTalkAbout': [],
    'your-message': '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked ? [...formData[name], value] : formData[name].filter((v) => v !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mintcream-chamois-554629.hostingersite.com/wp-json/contact-form-7/v1/contact-forms/ae1516a/feedback', formData);
      if (response.data.status === 'mail_sent') {
        setFormStatus('Message sent successfully!');
      } else {
        setFormStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('An error occurred while sending the message.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">Contact Us</h1>
        <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="your-name">Your name</label>
            <input
              type="text"
              id="your-name"
              name="your-name"
              value={formData['your-name']}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="your-email">Your email</label>
            <input
              type="email"
              id="your-email"
              name="your-email"
              value={formData['your-email']}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Areas to Talk About</label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="AreastoTalkAbout"
                value="Mutual Funds"
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Mutual Funds</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="AreastoTalkAbout"
                value="Portfolio Management"
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Portfolio Management</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="checkbox"
                name="AreastoTalkAbout"
                value="Financial Planning"
                onChange={handleChange}
                className="form-checkbox"
              />
              <span className="ml-2">Financial Planning</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="your-message">Your message</label>
            <textarea
              id="your-message"
              name="your-message"
              value={formData['your-message']}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
          {formStatus && <div className="mt-4 text-center text-red-500">{formStatus}</div>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
