// Layout.jsx
import React from 'react';
import Notification from './Notification';

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Notification />
    </div>
  );
};

export default Layout;
