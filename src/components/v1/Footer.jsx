import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Dornelas Corretor" className="h-8 w-auto" />
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-gray-500 uppercase tracking-widest text-[10px]">
          <a href="#" className="hover:text-brand-deepblue transition-colors">Propriedades</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Sobre Nós</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Termos</a>
        </div>

        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
          © 2026 Dornelas Corretor. Todos os direitos reservados. | Desenvolvido por Microsistec
        </div>
      </div>
    </footer>
  );
};

export default Footer;
