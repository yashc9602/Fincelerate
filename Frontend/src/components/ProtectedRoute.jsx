import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated && !isAuth) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
