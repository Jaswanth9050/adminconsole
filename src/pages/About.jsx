import React from 'react';
import NavbarWithAsideBar from '../components/NavBar';

const About = () => {
  return (
    <>
    <NavbarWithAsideBar/>
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>About Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm p-4">
            <h3 className="mb-3">Who Are We?</h3>
            <p>
              Welcome to our platform! We're a passionate team dedicated to building intuitive and powerful tools for project management, team collaboration, and productivity tracking.
              Our mission is to simplify workflows and empower users with features that just work.
            </p>

            <h4 className="mt-4">What We Offer</h4>
            <ul>
              <li>👨‍💻 Seamless project tracking and analytics</li>
              <li>📊 Visual insights into activity and performance</li>
              <li>💳 Transparent and simple billing management</li>
              <li>🔒 Secure and scalable architecture</li>
            </ul>

            <h4 className="mt-4">Why Choose Us?</h4>
            <p>
              With a user-friendly interface and smart integration options, we ensure that managing your work becomes effortless. Whether you're a small team or a growing business,
              our platform is designed to scale with your needs.
            </p>

            <p className="mt-4"><strong>Let's build something amazing together!</strong></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
