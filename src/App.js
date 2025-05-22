import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SpotThePhish from './SpotThePhish';

function App() {
  return (
    <BrowserRouter basename="/Landing-page.github">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/phish" element={<SpotThePhish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
