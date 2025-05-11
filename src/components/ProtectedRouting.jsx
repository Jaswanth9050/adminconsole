
// import React from 'react'
// import { Navigate } from 'react-router-dom'


// const ProtectedRouting = ({ children }) => {
//   const locallogin=localStorage.getItem("login")==="true"
//   return locallogin ? children : <Navigate to='/' replace/>
// }

// export default ProtectedRouting



import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouting = ({ children }) => {
  const isLoggedIn = localStorage.getItem("login") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default ProtectedRouting;
