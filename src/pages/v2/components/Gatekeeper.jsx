import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendLeadToEndpoint } from '../../../utils/leads';

const Gatekeeper = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: '',
    whatsapp: '',
    intention: '',
    cashValue: '',
    incomeType: '',
    incomeValue: '',
    investmentAmount: '',
    timeline: ''
  });

  const getSteps = () => {
    const contactStep = {
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
              onChange={(e) => setData({ ...data, whatsapp: formatPhone(e.target.value) })}
            />
          </div>
        </div>
      ),
    };

    const intentionStep = {
      question: "Sua intenção de compra",
      options: [
        { label: "À vista", value: "À vista" },
        { label: "Financiada", value: "Financiada" }
      ],
      key: 'intention'
    };

    const incomeTypeStep = {
      question: "Como é sua renda?",
      subtitle: "Selecione aqui",
      options: [
        { label: "Comprovada (CLT ou Imposto de Renda)", value: "Comprovada" },
        { label: "Autônomo (Apenas movimentação bancária)", value: "Autônomo" }
      ],
      key: 'incomeType'
    };

    const incomeValueStep = {
      question: "Qual renda familiar bruta aproximada?",
      options: [
        { label: "Até R$ 2.400", value: "Até 2.400" },
        { label: "Entre R$ 2.500 e R$ 6.000", value: "2.500 a 6.000" },
        { label: "Entre R$ 6.000 e R$ 12.000", value: "6.000 a 12.000" },
        { label: "Acima de R$ 12.000", value: "Acima 12.000" }
      ],
      key: 'incomeValue'
    };

    const investmentAmountStep = {
      question: "Qual valor você possui disponível para investimento incluindo valor de entrada e documentação?",
      fields: (
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Valor disponível</label>
          <input
            autoFocus
            type="text"
            placeholder="R$ 0,00"
            className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-2xl font-bold transition-all shadow-sm"
            value={data.investmentAmount}
            onChange={(e) => setData({ ...data, investmentAmount: formatCurrency(e.target.value) })}
          />
        </div>
      ),
      key: 'investmentAmount'
    };

    if (data.intention === 'À vista') {
      return [
        contactStep,
        intentionStep,
        {
          question: "Até que valor você pretende investir à vista?",
          fields: (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Valor pretendido</label>
              <input
                autoFocus
                type="text"
                placeholder="R$ 0,00"
                className="w-full p-5 bg-gray-50 rounded-xl border-2 border-transparent focus:border-brand-deepblue focus:bg-white outline-none text-2xl font-bold transition-all shadow-sm"
                value={data.cashValue}
                onChange={(e) => setData({ ...data, cashValue: formatCurrency(e.target.value) })}
              />
            </div>
          ),
          key: 'cashValue'
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
        investmentAmountStep
      ];
    }

    return [
      contactStep,
      intentionStep,
      incomeTypeStep,
      incomeValueStep,
      investmentAmountStep
    ];
  };

  const steps = getSteps();

  const handleNext = () => {
    // Partial capture: send lead after contact info step (step 0)
    if (step === 0) {
      sendLeadToEndpoint({ ...data, partial: true }).catch(err => console.error('Partial send failed:', err));
    }

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

  const formatCurrency = (value) => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return '';
    const number = parseInt(digits, 10);
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  const currentStep = steps[step];

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 md:py-12 min-h-screen flex flex-col">
      <header className="mb-12">
        <img src="/logo.svg" alt="Logo" className="h-10 mb-8" />
        <h1 className="text-2xl font-bold text-brand-deepblue mb-2">
          Olá{data.name ? `, ${data.name.split(' ')[0]}` : ''}, que bom te ver por aqui!
        </h1>
        <p className="text-gray-500">Sou Dornelas Corretor, preparamos algo especial para você.</p>
      </header>

      <div className="mb-12 aspect-video bg-gray-100 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg border border-gray-100">
        <img
          src="/thumb.png"
          alt="Thumbnail Vídeo"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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
            {currentStep.subtitle && (
              <p className="text-gray-500 -mt-6">{currentStep.subtitle}</p>
            )}

            {currentStep.fields ? (
              <div className="space-y-6">
                {currentStep.fields}
                <div className="pt-6">
                  <button
                    onClick={handleNext}
                    disabled={
                      (step === 0 && (!data.name || data.whatsapp.length < 14)) ||
                      (currentStep.key === 'cashValue' && !data.cashValue) ||
                      (currentStep.key === 'investmentAmount' && !data.investmentAmount)
                    }
                    className="w-full py-5 bg-brand-deepblue text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100"
                  >
                    {step === steps.length - 1 ? 'Ver Detalhes do Imóvel' : 'Próximo passo'}
                  </button>
                  {step > 0 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex items-center gap-2 py-2 text-gray-400 hover:text-brand-deepblue transition-colors text-sm font-medium group mt-4 w-full justify-start"
                    >
                      <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Voltar para a pergunta anterior
                    </button>
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
                  className="flex items-center gap-2 py-2 text-gray-400 hover:text-brand-deepblue transition-colors text-sm font-medium group w-full justify-start"
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

      <footer className="mt-12 text-center space-y-4">
        <p className="text-xs text-gray-400 italic">
          * Suas informações estão seguras e serão usadas apenas para personalizar sua experiência.
        </p>
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">
          Desenvolvido por Microsistec
        </p>
      </footer>
    </div>
  );
};

export default Gatekeeper;
