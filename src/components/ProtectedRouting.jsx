import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouting = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login") === "true";
  return isLoggedIn ? children : <Navigate to="/adminconsole" replace />;
};

export default ProtectedRouting;
