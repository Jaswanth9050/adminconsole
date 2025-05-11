import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBars } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

const AsideBar = ({ isVisible, toggleOffcanvas }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("login")
    navigate('/');
  };

  return (
    <div
      className={`offcanvas offcanvas-start ${isVisible ? 'show' : ''} text-bg-dark`}
      tabIndex="-1"
      id="offcanvasDark"
      aria-labelledby="offcanvasDarkLabel"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkLabel">Navigation</h5>
        <button type="button" className="btn-close btn-close-white" onClick={toggleOffcanvas} aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <NavLink to="/project" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Projects</NavLink>
        <NavLink to="/activity" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Activity</NavLink>
        <NavLink to="/billing" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Billing</NavLink>
        <button className="btn btn-outline-primary mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const NavbarWithAsideBar = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  const navigate = useNavigate();

  const toggleOffcanvas = () => setIsOffcanvasVisible(!isOffcanvasVisible);

  const handleLogout = () => {
    localStorage.removeItem("login")
    // navigate('/');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="btn btn-outline-light me-2" onClick={toggleOffcanvas}>
            <FaBars />
          </button>
          <NavLink className="navbar-brand" to="/home">Admin Console</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink className="nav-link" to={'/'} onClick={handleLogout}>Log Out</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* AsideBar */}
      <AsideBar isVisible={isOffcanvasVisible} toggleOffcanvas={toggleOffcanvas} onClick={handleLogout} />
    </div>
  );
};

export default NavbarWithAsideBar;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaBars } from 'react-icons/fa';
// import { NavLink, useNavigate } from 'react-router-dom';

// const AsideBar = ({ isVisible, toggleOffcanvas, handleLogout }) => {
//   return (
//     <div
//       className={`offcanvas offcanvas-start ${isVisible ? 'show' : ''} text-bg-dark`}
//       tabIndex="-1"
//       id="offcanvasDark"
//       aria-labelledby="offcanvasDarkLabel"
//       style={{ display: isVisible ? 'block' : 'none' }}
//     >
//       <div className="offcanvas-header">
//         <h5 className="offcanvas-title" id="offcanvasDarkLabel">Navigation</h5>
//         <button type="button" className="btn-close btn-close-white" onClick={toggleOffcanvas} aria-label="Close"></button>
//       </div>
//       <div className="offcanvas-body">
//         <NavLink to="/project" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Projects</NavLink>
//         <NavLink to="/activity" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Activity</NavLink>
//         <NavLink to="/billing" className="text-decoration-none text-white d-block mb-2" onClick={toggleOffcanvas}>Billing</NavLink>
//         <button className="btn btn-outline-primary mt-3" onClick={handleLogout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// const NavbarWithAsideBar = () => {
//   const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
//   const navigate = useNavigate();

//   const toggleOffcanvas = () => setIsOffcanvasVisible(!isOffcanvasVisible);

//   // ✅ Unified logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("login");
//     navigate('/'); // redirect to login page after logout
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           {/* Sidebar toggle button */}
//           <button className="btn btn-outline-light me-2" onClick={toggleOffcanvas}>
//             <FaBars />
//           </button>

//           <NavLink className="navbar-brand" to="/home">Admin Console</NavLink>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav mx-auto">
//               <li className="nav-item mx-2">
//                 <NavLink className="nav-link" to="/home">Home</NavLink>
//               </li>
//               <li className="nav-item mx-2">
//                 <NavLink className="nav-link" to="/about">About</NavLink>
//               </li>
//               <li className="nav-item mx-2">
//                 <NavLink className="nav-link" to="/contact">Contact</NavLink>
//               </li>
//               {/* ✅ Fixed logout to clear login and redirect */}
//               <li className="nav-item mx-2">
//                 <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* ✅ Pass handleLogout down to AsideBar as a prop */}
//       <AsideBar isVisible={isOffcanvasVisible} toggleOffcanvas={toggleOffcanvas} handleLogout={handleLogout} />
//     </div>
//   );
// };

// export default NavbarWithAsideBar;
