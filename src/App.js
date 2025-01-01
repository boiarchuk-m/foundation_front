import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';  // Import the Main/Home Page component
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PersonalCabinetPage from './pages/PersonalCabinetPage';
import ManagerPage from './pages/ManagerPage';
import CreateRequestPage from './pages/CreateRequestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set the main page (HomePage) as the default route */}
        <Route path="/" element={<MainPage />} />
        
        {/* Other pages */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cabinet" element={<PersonalCabinetPage/>}/> 
        <Route path="/manager" element={<ManagerPage/>}/>
        <Route path="/request" element={<CreateRequestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
