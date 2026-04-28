import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gatekeeper = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    whatsapp: '',
    entry: '',
    monthly: '',
    timeline: '',
    income: ''
  });

  const steps = [
    {
      question: "Confirme seus dados de contato",
      fields: (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Como podemos te chamar?</label>
            <input
              autoFocus
              type="text"
              placeholder="Seu nome completo"
              className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-xl transition-all shadow-sm"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Seu melhor contato (WhatsApp)</label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-xl transition-all shadow-sm"
              value={data.whatsapp}
              onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
            />
          </div>
        </div>
      ),
    },
    {
      question: "Quanto você consegue dar de entrada hoje?",
      options: [
        { label: "Ainda não tenho entrada", value: "Sem entrada" },
        { label: "Até R$ 5 mil", value: "Até R$5 mil" },
        { label: "R$ 10 mil ou mais", value: "R$10 mil+" },
        { label: "Pretendo usar meu FGTS", value: "Tenho FGTS" }
      ],
      key: 'entry'
    },
    {
      question: "Qual o valor de parcela mensal que ficaria confortável?",
      options: [
        { label: "Até R$ 1.000", value: "Até R$1.000" },
        { label: "Até R$ 1.500", value: "Até R$1.500" },
        { label: "R$ 2.000 ou mais", value: "R$2.000+" }
      ],
      key: 'monthly'
    },
    {
      question: "Quando você pretende realizar a compra?",
      options: [
        { label: "Imediatamente", value: "Agora" },
        { label: "Próximos 30 dias", value: "30 dias" },
        { label: "Em até 3 meses", value: "3 meses" },
        { label: "Estou apenas pesquisando", value: "Só pesquisando" }
      ],
      key: 'timeline'
    },
    {
      question: "Qual a renda familiar aproximada?",
      options: [
        { label: "Até R$ 3 mil", value: "Até R$3 mil" },
        { label: "Entre R$ 3 mil e R$ 5 mil", value: "R$3 mil a R$5 mil" },
        { label: "Acima de R$ 5 mil", value: "R$5 mil+" }
      ],
      key: 'income'
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(data);
    }
  };

  const handleOptionSelect = (key, value) => {
    setData({ ...data, [key]: value });
    if (step < steps.length - 1) {
      setTimeout(handleNext, 300);
    }
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const currentStep = steps[step];

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12 min-h-screen flex flex-col">
      <header className="mb-12">
        <img src="/logo.svg" alt="Logo" className="h-10 mb-8" />
        <h1 className="text-2xl font-bold text-brand-deepblue mb-2">Olá, que bom te ver por aqui!</h1>
        <p className="text-gray-500">Sou Dornelas Corretor, preparamos algo especial para você.</p>
      </header>

      <div className="mb-12 aspect-video bg-gray-100 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-brand-deepblue rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-white text-xs">
          Dornelas Corretor explica o processo
        </div>
      </div>

      <div className="flex-1">
        <div className="mb-4 flex justify-between items-end">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-deepblue">Passo {step + 1} de {steps.length}</span>
          <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand-deepblue transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold leading-tight text-slate-800">
              {currentStep.question}
            </h2>

            {currentStep.fields ? (
              <div className="space-y-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Como podemos te chamar?</label>
                    <input
                      autoFocus
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-xl transition-all shadow-sm"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Seu melhor contato (WhatsApp)</label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-xl transition-all shadow-sm"
                      value={data.whatsapp}
                      onChange={(e) => setData({ ...data, whatsapp: formatPhone(e.target.value) })}
                    />
                  </div>
                </div>
                <div className="pt-6">
                  <button
                    onClick={handleNext}
                    disabled={!(data.name.length >= 3 && data.whatsapp.length >= 14)}
                    className="w-full py-5 bg-brand-deepblue hover:bg-brand-accent text-white rounded-xl font-bold text-lg shadow-2xl shadow-brand-deepblue/20 disabled:opacity-40 disabled:shadow-none transition-all active:scale-[0.98]"
                  >
                    Próximo passo
                  </button>
                  {!(data.name.length >= 3 && data.whatsapp.length >= 14) && (
                    <p className="text-center text-xs text-red-400 mt-4">
                      Por favor, preencha seu nome e WhatsApp completo para continuar.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-3">
                  {currentStep.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionSelect(currentStep.key, opt.value)}
                      className={`w-full p-5 text-left border-2 rounded-xl font-medium transition-all flex justify-between items-center ${data[currentStep.key] === opt.value ? 'border-brand-deepblue bg-brand-deepblue/5 text-brand-deepblue' : 'border-gray-100 hover:border-brand-deepblue/20 hover:bg-gray-50'}`}
                    >
                      {opt.label}
                      {data[currentStep.key] === opt.value && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                {step === steps.length - 1 && data[currentStep.key] && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleNext}
                    className="w-full py-5 bg-brand-deepblue hover:bg-brand-accent text-white rounded-xl font-bold text-lg shadow-2xl shadow-brand-deepblue/20 transition-all active:scale-[0.98]"
                  >
                    Ver Detalhes do Imóvel
                  </motion.button>
                )}
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 py-2 text-gray-400 hover:text-brand-deepblue transition-colors text-sm font-medium group"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar para a pergunta anterior
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="mt-12 text-center">
        <p className="text-xs text-gray-400 italic">
          * Suas informações estão seguras e serão usadas apenas para personalizar sua experiência.
        </p>
      </footer>
    </div>
  );
};

export default Gatekeeper;
