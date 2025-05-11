// import React, { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
// import NavBar from './components/NavBar';

// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import ProjectDetails from './pages/ProjectDetails';
// import ProjectSetting from './pages/ProjectSetting';
// import Activity from './pages/Activity';
// import Billing from './pages/Billing';
// import ErrorPage from './pages/ErrorPage';
// import ProtectedRouting from './components/ProtectedRouting';

// const App = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // const handleLogin = () => setIsLoggedIn(true);
//   // const handleLogout = () => setIsLoggedIn(false);
  
//   const localLogin=localStorage.getItem("login")==="true";

//   return (
//     <div>
//       {/* Show Navbar only when logged in */}
//       {localLogin && <NavBar/>}

//       <Routes>
//         {/* Public routes */}
//         <Route path='/' element={<Login/>} />
//         {/* <Route path='/logout' element={<Logout onLogin={handleLogin} />} /> */}
//         <Route path='*' element={<ErrorPage/>} />

//         {/* Private (protected) routes */}
//         {localLogin && (
//           <>
//             <Route path='/home' element={<ProtectedRouting><Home /></ProtectedRouting>} />
//             <Route path='/about' element={<ProtectedRouting><About /></ProtectedRouting>} />
//             <Route path='/contact' element={<ProtectedRouting><Contact /></ProtectedRouting>} />
//             <Route path='/project' element={<Projects />} />
//             <Route path='/project/:id' element={<ProjectDetails />} />
//             <Route path='/project/:id/settings' element={<ProjectSetting />} />
//             <Route path='/activity' element={<Activity />} />
//             <Route path='/billing' element={<Billing />} />
//           </>
//         )}
//       </Routes>
//     </div>
//   );
// };

// export default App; 




import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import ProjectSetting from './pages/ProjectSetting';
import Activity from './pages/Activity';
import Billing from './pages/Billing';
import ErrorPage from './pages/ErrorPage';
import ProtectedRouting from './components/ProtectedRouting';
import PublicRouting from './components/PublicRouting';

const App = () => {
  const localLogin = localStorage.getItem("login") === "true";

  return (
    <div>
      {/* {localLogin && <NavBar />} */}

      <Routes>
        {/* Public route (login page) */}
        <Route path="/" element={<PublicRouting><Login /></PublicRouting>} />

        {/* Protected routes */}
        <Route path="/home" element={<ProtectedRouting><Home /></ProtectedRouting>} />
        <Route path="/about" element={<ProtectedRouting><About /></ProtectedRouting>} />
        <Route path="/contact" element={<ProtectedRouting><Contact /></ProtectedRouting>} />
        <Route path="/project" element={<ProtectedRouting><Projects /></ProtectedRouting>} />
        <Route path="/project/:id" element={<ProtectedRouting><ProjectDetails /></ProtectedRouting>} />
        <Route path="/project/:id/settings" element={<ProtectedRouting><ProjectSetting /></ProtectedRouting>} />
        <Route path="/activity" element={<ProtectedRouting><Activity /></ProtectedRouting>} />
        <Route path="/billing" element={<ProtectedRouting><Billing /></ProtectedRouting>} />

        {/* Catch all unmatched routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
