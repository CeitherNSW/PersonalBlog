import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/homePage.js';
import LoginPage from './pages/loginPage.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route patn="/home/dashboard" element={<Home />} />
      </Routes>
  );
}

export default App;
