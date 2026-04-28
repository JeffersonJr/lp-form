import React, { useState } from 'react';
import Gatekeeper from './components/Gatekeeper';
import PropertyDetails from './components/PropertyDetails';

const V2 = () => {
  const [isQualified, setIsQualified] = useState(() => localStorage.getItem('dornelas_qualified') === 'true');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem('dornelas_user_data');
    return saved ? JSON.parse(saved) : null;
  });

  const handleQualification = (data) => {
    setUserData(data);
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('dornelas_qualified', 'true');
      localStorage.setItem('dornelas_user_data', JSON.stringify(data));
      setIsQualified(true);
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6" />
        <h2 className="text-2xl font-bold mb-2">Analisando seu perfil...</h2>
        <p className="text-gray-500">Estamos preparando uma curadoria personalizada para você.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {!isQualified ? (
        <Gatekeeper onComplete={handleQualification} />
      ) : (
        <PropertyDetails userData={userData} />
      )}
    </div>
  );
};

export default V2;
