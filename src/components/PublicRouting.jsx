import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRouting = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login") === "true";
  return isLoggedIn ? <Navigate to="/home" replace /> : children;
};

export default PublicRouting;
