
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage'; 
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Home from "./pages/Home";
import CreateNote from './pages/create';

function Logout() {
  localStorage.clear()
  return <Navigate to='/login/'/>
}

function RegisterAndLogout() {
  localStorage.clear()
  return <RegisterPage/>
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Set the main page (HomePage) as the default route */}
        <Route path="/" element={<MainPage />} />
        
        {/* Other pages */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/note" element={<CreateNote/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
