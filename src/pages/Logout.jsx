import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    onLogin(); // Set login state to true again
    navigate('/home'); // Navigate to project page
  };

  return (
    <div className='text-center' style={{ alignContent: 'center', height: '100vh' }}>
      <h1 style={{ fontStyle: 'italic' }}>Thank You For Visiting</h1>
      <button className='btn btn-outline-primary' onClick={handleBackToLogin}>
        Login
      </button>
    </div>
  );
};

export default Logout;
