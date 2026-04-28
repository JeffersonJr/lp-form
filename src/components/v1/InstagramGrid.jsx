import React from 'react';
import { motion } from 'framer-motion';

const InstagramGrid = () => {
  const images = [
    { id: 1, src: '/luxury_skyscraper_facade_1777374573774.png' },
    { id: 2, src: '/luxury_pool_view_1777374598451.png' },
    { id: 3, src: '/luxury_kitchen_minimalist.png' },
    { id: 4, src: '/luxury_master_bedroom_1777374665511.png' },
    { id: 5, src: '/luxury_lobby_reception_1777374702964.png' },
    { id: 6, src: '/luxury_penthouse_hero_1777374549662.png' }
  ];

  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Direto do Instagram</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Acompanhe em tempo real as novidades do mercado imobiliário em Olinda e os bastidores das propriedades exclusivas de Dornelas Corretor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200"
            >
              <img
                src={img.src}
                alt={`Property ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.378.063-2.61.341-3.655 1.386-1.045 1.044-1.323 2.277-1.386 3.655-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.063 1.378.341 2.61 1.386 3.655 1.044 1.045 2.277 1.323 3.655 1.386 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.378-.063 2.61-.341 3.655-1.386 1.045-1.044 1.323-2.277 1.386-3.655.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.063-1.378-.341-2.61-1.386-3.655-1.044-1.045-2.277-1.323-3.655-1.386-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://instagram.com/dornelascorretor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-gray-50 transition-all shadow-sm"
          >
            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.378.063-2.61.341-3.655 1.386-1.045 1.044-1.323 2.277-1.386 3.655-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.063 1.378.341 2.61 1.386 3.655 1.044 1.045 2.277 1.323 3.655 1.386 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.378-.063 2.61-.341 3.655-1.386 1.045-1.044 1.323-2.277 1.386-3.655.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.063-1.378-.341-2.61-1.386-3.655-1.044-1.045-2.277-1.323-3.655-1.386-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
