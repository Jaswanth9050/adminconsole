import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarWithAsideBar from '../components/NavBar';

const Home = () => {
  const navigate = useNavigate();

  return (
   <>
    <NavbarWithAsideBar/>
    <div className='container mt-5'>
      
      <h1 className='text-center mb-4'>Welcome to the Dashboard</h1>

      <div className='row justify-content-center'>
        {/* Projects Card */}
        <div className='col-md-4 mb-4'>
          <div className="card shadow p-4 text-center">
            <h3>Projects</h3>
            <p>Manage all your ongoing and completed projects in one place.</p>
            <button className='btn btn-outline-primary' onClick={() => navigate('/project')}>Go to Projects</button>
          </div>
        </div>

        {/* Activity Card */}
        <div className='col-md-4 mb-4'>
          <div className="card shadow p-4 text-center">
            <h3>Activity</h3>
            <p>Track recent actions, updates, and team contributions.</p>
            <button className='btn btn-outline-success' onClick={() => navigate('/activity')}>Go to Activity</button>
          </div>
        </div>

        {/* Billing Card */}
        <div className='col-md-4 mb-4'>
          <div className="card shadow p-4 text-center">
            <h3>Billing</h3>
            <p>Check subscription details, payment methods, and invoices.</p>
            <button className='btn btn-outline-danger' onClick={() => navigate('/billing')}>Go to Billing</button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Home;
