import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 py-20 overflow-hidden">
      {/* Brand Header */}
      <div className="absolute top-8 left-6 lg:left-24 z-20">
        <img src="/logo.svg" alt="Dornelas Corretor" className="h-10 w-auto" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-deepblue font-medium tracking-widest uppercase text-sm mb-4 block">
              Exclusividade & Elegância em Olinda
            </span>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight mb-6 text-brand-graphite">
              Onde a <span className="font-semibold">arquitetura</span> encontra o seu <span className="italic">estilo de vida</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
              Dornelas Corretor: Curadoria especializada em imóveis de alto padrão que transcendem o conceito de morar. Descubra sua próxima obra-prima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Ver Coleção
              </button>
              <button className="px-8 py-4 border border-gray-200 rounded-xl font-medium hover:bg-white transition-all">
                Falar com Consultor
              </button>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block relative w-1/2 h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-[350px] mx-auto glass rounded-[3rem] p-4 shadow-2xl border-white/40"
          >
            {/* Instagram Interface Simulation */}
            <div className="flex items-center gap-3 mb-4 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-white border-2 border-white" />
              </div>
              <span className="text-xs font-semibold">dornelascorretor</span>
            </div>
            
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gray-100">
               <img src="/luxury_penthouse_hero_1777374549662.png" alt="Luxury property" className="w-full h-full object-cover" />
            </div>

            <div className="px-2">
              <div className="flex gap-4 mb-3">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              </div>
              <p className="text-[10px] font-bold mb-1">2,483 curtidas</p>
              <p className="text-[10px] leading-tight">
                <span className="font-bold">dornelascorretor</span> Vista definitiva para o skyline de Olinda. O novo padrão de luxo acaba de ser redefinido... #dornelascorretor
              </p>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-deepblue/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
