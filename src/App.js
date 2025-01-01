import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';  // Import the Main/Home Page component
import RegisterLoginPage from './pages/RegisterLoginPage';
import CreateRequestPage from './pages/CreateRequestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set the main page (HomePage) as the default route */}
        <Route path="/" element={<MainPage />} />
        
        {/* Other pages */}
        <Route path="/register" element={<RegisterLoginPage />} />
        <Route path="/request" element={<CreateRequestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
