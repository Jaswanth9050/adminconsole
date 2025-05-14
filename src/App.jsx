import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
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

  return (
    <div>
      <Routes>
        {/* Public route (login page) */}
        <Route path="/adminconsole" element={<PublicRouting><Login /></PublicRouting>} />

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
