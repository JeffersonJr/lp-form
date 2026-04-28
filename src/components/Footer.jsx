import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tight text-brand-deepblue">
          EXCLUSIVE<span className="font-light">REALTY</span>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-brand-deepblue transition-colors">Propriedades</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Sobre Nós</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-deepblue transition-colors">Termos</a>
        </div>

        <div className="text-sm text-gray-400">
          © 2026 Exclusive Realty. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
