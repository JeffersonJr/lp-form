import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import V1 from './pages/v1/V1';
import V2 from './pages/v2/V2';

const ProtectedRoute = ({ children }) => {
  const isQualified = localStorage.getItem('dornelas_qualified') === 'true';
  if (!isQualified) {
    return <Navigate to="/v2" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/v2" element={<V2 />} />
        <Route 
          path="/v1" 
          element={
            <ProtectedRoute>
              <V1 />
            </ProtectedRoute>
          } 
        />
        <Route path="/" element={<Navigate to="/v2" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
