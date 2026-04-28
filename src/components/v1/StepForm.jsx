import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendLeadToEndpoint } from '../../utils/leads';

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    objective: '',
    budget: 5000000,
    features: [],
    name: '',
    phone: '',
    email: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const ok = await sendLeadToEndpoint(formData);
    if (ok) setSubmitted(true);
    else alert('Erro ao enviar. Tente novamente.');
  };

  const toggleFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const steps = [
    {
      title: "Qual o seu objetivo?",
      subtitle: "Selecione a finalidade do imóvel",
      content: (
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            onClick={() => { setFormData({...formData, objective: 'Moradia'}); nextStep(); }}
            className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${formData.objective === 'Moradia' ? 'border-brand-deepblue bg-brand-deepblue/5' : 'border-gray-100 hover:border-brand-deepblue/30'}`}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <span className="font-medium">Moradia</span>
          </button>
          <button
            onClick={() => { setFormData({...formData, objective: 'Investimento'}); nextStep(); }}
            className={`p-8 rounded-2xl border-2 transition-all flex flex-col items-center gap-4 ${formData.objective === 'Investimento' ? 'border-brand-deepblue bg-brand-deepblue/5' : 'border-gray-100 hover:border-brand-deepblue/30'}`}
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="font-medium">Investimento</span>
          </button>
        </div>
      )
    },
    {
      title: "Faixa de investimento",
      subtitle: "Deslize para selecionar o valor aproximado",
      content: (
        <div className="mt-12 px-4">
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-brand-deepblue">
              R$ {(formData.budget / 1000000).toFixed(1)}M +
            </span>
          </div>
          <input
            type="range"
            min="1000000"
            max="20000000"
            step="500000"
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-deepblue"
          />
          <div className="flex justify-between mt-4 text-xs text-gray-500 uppercase tracking-widest">
            <span>R$ 1M</span>
            <span>R$ 20M+</span>
          </div>
          <button onClick={nextStep} className="btn-primary w-full mt-12">Próximo Passo</button>
        </div>
      )
    },
    {
      title: "Diferenciais Indispensáveis",
      subtitle: "O que não pode faltar no seu novo imóvel?",
      content: (
        <div className="mt-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {['Varanda Gourmet', 'Vagas de Garagem', 'Lazer Completo', 'Pé direito duplo', 'Automação', 'Piscina Privativa', 'Vista Mar', 'Segurança 24h'].map(feature => (
              <button
                key={feature}
                onClick={() => toggleFeature(feature)}
                className={`px-6 py-3 rounded-full border-2 transition-all text-sm font-medium ${formData.features.includes(feature) ? 'border-brand-deepblue bg-brand-deepblue text-white' : 'border-gray-100 bg-white text-gray-600 hover:border-brand-deepblue/30'}`}
              >
                {feature}
              </button>
            ))}
          </div>
          <button onClick={nextStep} className="btn-primary w-full mt-12">Ver Resultados</button>
        </div>
      )
    },
    {
      title: "Receba uma curadoria",
      subtitle: "Nossos especialistas entrarão em contato em instantes",
      content: (
        <div className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Seu Nome Completo"
            className="input-field"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="tel"
            placeholder="WhatsApp"
            className="input-field"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="input-field"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <button 
            onClick={handleSubmit}
            className="btn-primary w-full mt-6 bg-green-600 hover:bg-green-700"
          >
            Solicitar Atendimento com Dornelas
          </button>
        </div>
      )
    }
  ];

  if (submitted) {
    return (
      <section className="py-24 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Solicitação Enviada!</h2>
          <p className="text-gray-500">Hyago Dornelas entrará em contato com você em instantes via WhatsApp.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-6">
        <div className="flex justify-between mb-12">
          {[1, 2, 3, 4].map(s => (
            <div
              key={s}
              className={`h-1 flex-1 mx-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-brand-deepblue' : 'bg-gray-100'}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold mb-2">{steps[step - 1].title}</h2>
            <p className="text-gray-500">{steps[step - 1].subtitle}</p>
            {steps[step - 1].content}
          </motion.div>
        </AnimatePresence>

        {step > 1 && (
          <button
            onClick={prevStep}
            className="mt-8 text-gray-400 hover:text-brand-deepblue text-sm font-medium transition-colors w-full text-center"
          >
            Voltar ao passo anterior
          </button>
        )}
      </div>
    </section>
  );
};

export default StepForm;
