import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppNavbar from './components/Navbar'; 
import Footer from './components/Footer';
import Login from './components/Login'; 
import AdminLogin from './components/AdminLogin'; 
import AdminDashboard from './components/AdminDashboard'; 
import RealTimeMap from './components/RealTimeMap'; 
import EmployeeLogin from './components/EmployeeLogin';
import Dashboard from './components/Dashboard';
import OurTeam from './components/OurTeam';
import AboutUs from './components/AboutUS';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const PrivateRoute = ({ children, requiredRole }) => {
    return children;
  };

  return (
    <Router>
      <div className="app-container d-flex flex-column">
        {/* Application-wide Navbar */}
        <AppNavbar onLogout={handleLogout} isAuthenticated={isAuthenticated} userRole={userRole} />

        {/* Main Content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin onLogin={() => handleLogin('admin')} />} />
            <Route path="/employee-login" element={<EmployeeLogin onLogin={() => handleLogin('employee')} />} />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute requiredRole="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/realtime-map" element={<RealTimeMap />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/About-us" element={<AboutUs />} />




          </Routes>
        </div>

        {/* Application-wide Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
