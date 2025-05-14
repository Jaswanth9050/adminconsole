import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation (React Router)

const ErrorPage = () => {
//   const history = useHistory();
    const home=useNavigate()


  const handleBackHome = () => {
    // history.push('/'); // Navigate to the home page
    home('/adminconsole')
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="lead text-muted">Oops! The page you're looking for doesn't exist.</p>
        <button
          onClick={handleBackHome}
          className="btn btn-primary btn-lg mt-4"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};


export default ErrorPage;
