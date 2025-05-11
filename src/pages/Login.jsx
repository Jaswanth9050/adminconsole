// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
    
//     localStorage.setItem("login","true")
//     navigate('/home');
//   };

//   return (
//     <div className='text-center' style={{ alignContent: 'center', height: '100vh' }}>
//       <h1 style={{ fontStyle: 'italic' }}>Welcome to the Login Page</h1>
//       <button className='btn btn-outline-primary' onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", "true");
    navigate('/home');
  };

  return (
    <div className='text-center' style={{ alignContent: 'center', height: '100vh' }}>
      <h1 style={{ fontStyle: 'italic' }}>Welcome to the Login Page</h1>
      <button className='btn btn-outline-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
