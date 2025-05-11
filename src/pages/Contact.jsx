import React from 'react';
import NavbarWithAsideBar from '../components/NavBar';

const Contact = () => {
  return (
    <>
    <NavbarWithAsideBar/>
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>Get in Touch</h1>

      <div className='row'>
        {/* Contact Form */}
        <div className='col-md-6 mb-4'>
          <div className='card shadow-sm p-4'>
            <h4 className='mb-3'>Send us a Message</h4>
            <form>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type='text' className='form-control' id='name' placeholder='Your name' />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' className='form-control' id='email' placeholder='Your email' />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea className='form-control' id='message' rows='4' placeholder='Your message'></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>Send</button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className='col-md-6 mb-4'>
          <div className='card shadow-sm p-4 bg-light'>
            <h4 className='mb-3'>Contact Information</h4>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> 123 Tech Street, Innovation City, India</p>
            <p><strong>Working Hours:</strong><br />
              Monday - Friday: 9:00 AM to 6:00 PM<br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
