import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SpotThePhish from './SpotThePhish';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/phish" element={<SpotThePhish />} />
      </Routes>
    </Router>
  );
}

export default App;
