// Notification.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNotificationClick = () => {
    navigate('/contactus');
  };

  return (
    showNotification && (
      <div
        className="fixed bottom-4 right-4 bg-[#041D4C] text-white rounded-full px-4 py-2 shadow-lg cursor-pointer flex items-center"
        onClick={handleNotificationClick}
      >
        <div className="mr-2 w-2 h-2 bg-red-500 rounded-full"></div>
        Get in touch with us
      </div>
    )
  );
};

export default Notification;
