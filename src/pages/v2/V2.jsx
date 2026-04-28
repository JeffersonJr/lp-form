import React, { useState, useEffect } from 'react';
import Gatekeeper from './components/Gatekeeper';
import PropertyDetails from './components/PropertyDetails';
import Toast from '../../components/common/Toast';
import { sendLeadToEndpoint } from '../../utils/leads';

const V2 = () => {
  const [isQualified, setIsQualified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleQualification = (data) => {
    setUserData(data);
    setLoading(true);
    sendLeadToEndpoint(data);
    setTimeout(() => {
      localStorage.setItem('dornelas_qualified', 'true');
      localStorage.setItem('dornelas_user_data', JSON.stringify(data));
      window.location.href = 'https://dornelasimoveispe.com.br/detalhes/imovel/casa/olinda/amparo/codigo/541';
    }, 1500);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

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
      <Toast show={showToast} message="Perfil salvo com sucesso!" />
      {!isQualified ? (
        <Gatekeeper onComplete={handleQualification} />
      ) : (
        <PropertyDetails userData={userData} />
      )}
    </div>
  );
};

export default V2;
