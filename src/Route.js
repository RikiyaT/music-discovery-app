import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Discover from './pages/Discover';

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteConfig;
