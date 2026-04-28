import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import V1 from './pages/v1/V1';
import V2 from './pages/v2/V2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/" element={<Navigate to="/v1" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
