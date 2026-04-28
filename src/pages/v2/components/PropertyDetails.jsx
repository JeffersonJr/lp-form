import React from 'react';
import { motion } from 'framer-motion';

const PropertyDetails = ({ userData }) => {
  const property = {
    title: "Casa em Olinda",
    location: "Casa Caiada, Olinda - PE",
    price: "R$ 450.000,00",
    description: "Excelente casa em Olinda, com acabamento de alto padrão, localização privilegiada e total segurança para sua família. O imóvel conta com amplos espaços, varanda gourmet e área de lazer privativa.",
    specs: [
      { label: "Dormitórios", value: "4", icon: "🛏️" },
      { label: "Suítes", value: "1", icon: "🚿" },
      { label: "Banheiros", value: "4", icon: "🚽" },
      { label: "Vagas", value: "2", icon: "🚗" },
      { label: "Área", value: "250m²", icon: "📐" }
    ],
    features: [
      "Varanda Gourmet", "Vagas de Garagem", "Lazer Completo", "Pé direito duplo", 
      "Automação", "Piscina Privativa", "Vista Mar", "Segurança 24h"
    ],
    images: [
      "/luxury_penthouse_hero_1777374549662.png",
      "/luxury_pool_view_1777374598451.png",
      "/luxury_kitchen_minimalist.png",
      "/luxury_master_bedroom_1777374665511.png"
    ]
  };

  const relatedProperties = [
    {
      title: "Casa em Olinda",
      location: "Jardim Atlântico",
      price: "R$ 1.000.000,00",
      image: "/luxury_penthouse_hero_1777374549662.png",
      beds: 4, baths: 2, area: "150m²"
    },
    {
      title: "Mansão VIP",
      location: "Bairro Novo",
      price: "R$ 1.250.000,00",
      image: "/luxury_pool_view_1777374598451.png",
      beds: 5, baths: 4, area: "350m²"
    },
    {
      title: "Casa de Praia",
      location: "Rio Doce",
      price: "R$ 750.000,00",
      image: "/luxury_kitchen_minimalist.png",
      beds: 3, baths: 3, area: "180m²"
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Sou ${userData?.name || 'Interessado'}. Tenho interesse no imóvel ${property.title}.`;
    window.open(`https://wa.me/5581999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-brand-offwhite min-h-screen font-sans text-brand-graphite">
      {/* Premium Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <img src="/logo.svg" alt="Dornelas Corretor" className="h-10 w-auto" />
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-brand-deepblue transition-colors">Home</a>
            <a href="#" className="hover:text-brand-deepblue transition-colors">Imóveis</a>
            <a href="#" className="hover:text-brand-deepblue transition-colors">Vender</a>
            <a href="#" className="hover:text-brand-deepblue transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm font-semibold text-brand-deepblue">(81) 98765-4321</span>
            <button className="bg-brand-deepblue text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-accent transition-all">
              Falar com Corretor
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb & Title */}
        <div className="mb-6 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-widest">
              <span>Home</span>
              <span>/</span>
              <span>Casas</span>
              <span>/</span>
              <span className="text-brand-deepblue font-bold">Olinda</span>
            </div>
            <h1 className="text-4xl font-extrabold text-brand-graphite">{property.title}</h1>
            <p className="text-gray-500 mt-1">{property.location}</p>
          </div>
          <div className="text-right">
            <p className="text-brand-deepblue text-3xl font-black">{property.price}</p>
            <span className="text-xs text-green-600 font-bold uppercase">Disponível para Visita</span>
          </div>
        </div>

        {/* Property Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 aspect-[21/10] mb-12">
          <div className="md:col-span-3 md:row-span-2 rounded-2xl overflow-hidden shadow-xl group">
            <img src={property.images[0]} alt="Principal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <img src={property.images[1]} alt="Foto 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg group relative">
            <img src={property.images[2]} alt="Foto 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white font-bold">+ Ver todas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-8 border-y border-gray-100">
              {property.specs.map(spec => (
                <div key={spec.label} className="text-center group">
                  <div className="text-2xl mb-1 group-hover:scale-125 transition-transform">{spec.icon}</div>
                  <p className="text-xl font-black text-brand-deepblue">{spec.value}</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">{spec.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-deepblue rounded-full"></div>
                Descrição do Imóvel
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-brand-deepblue mb-2">Destaques</h4>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>✨ Acabamento em porcelanato</li>
                    <li>🎨 Pintura premium</li>
                    <li>🛋️ Sala com 2 ambientes</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-brand-deepblue mb-2">Localização</h4>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>📍 Próximo ao Shopping Patteo</li>
                    <li>🏥 Perto de hospitais</li>
                    <li>🏫 Escolas de referência</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Amenities (Diferenciais) */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-deepblue rounded-full"></div>
                Diferenciais Indispensáveis
              </h2>
              <div className="flex flex-wrap gap-3">
                {property.features.map(feature => (
                  <span key={feature} className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-600 shadow-sm hover:border-brand-deepblue transition-colors cursor-default">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {/* Map Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-brand-deepblue rounded-full"></div>
                Localização
              </h2>
              <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
                {/* Mock Map Background */}
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-34.84, -7.98, 12, 0/800x400?access_token=pk.eyJ1IjoiYm9vdGhwYXkiLCJhIjoiY2p6Mnh6ZzI1MDBrZjNjbnp6ZzI1MDBrZiJ9.V6J2Q0L2Y_8P_8P_8P_8P_8')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-brand-deepblue/20 rounded-full animate-ping absolute"></div>
                  <div className="w-6 h-6 bg-brand-deepblue rounded-full border-4 border-white shadow-xl relative z-10"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold">Agendar Visita</h3>
                <p className="text-gray-400 text-sm mt-1">Fale agora com nosso especialista</p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-brand-offwhite rounded-2xl">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/150?u=dornelas" alt="Corretor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-brand-deepblue text-sm">Dornelas Corretor</p>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">CRECI 12345-F</p>
                </div>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  defaultValue={userData?.name}
                  className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-brand-deepblue outline-none transition-all text-sm" 
                />
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  defaultValue={userData?.email}
                  className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-brand-deepblue outline-none transition-all text-sm" 
                />
                <input 
                  type="tel" 
                  placeholder="Telefone/WhatsApp" 
                  defaultValue={userData?.whatsapp}
                  className="w-full p-4 bg-gray-50 rounded-xl border border-gray-100 focus:border-brand-deepblue outline-none transition-all text-sm" 
                />
                <button className="w-full py-4 bg-brand-deepblue text-white rounded-xl font-bold shadow-xl shadow-brand-deepblue/20 hover:bg-brand-accent transition-all active:scale-[0.98]">
                  Enviar Mensagem
                </button>
              </form>

              <button className="w-full py-4 border-2 border-green-500 text-green-600 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-50 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.1-.117.434-.506.549-.68.116-.174.231-.145.39-.087.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.419-.101.825z"/></svg>
                WhatsApp Direto
              </button>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-graphite">Pode ser do seu interesse</h2>
              <p className="text-gray-400 mt-2">Selecionamos imóveis semelhantes ao que você está buscando</p>
            </div>
            <button className="text-brand-deepblue font-bold border-b-2 border-brand-deepblue pb-1 hover:text-brand-accent transition-colors">
              Ver todos os imóveis
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProperties.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer">
                <div className="h-60 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-deepblue">
                    Destaque
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{item.location}</p>
                  <div className="flex justify-between items-center py-4 border-t border-gray-50">
                    <div className="flex gap-3 text-[10px] text-gray-500 font-bold uppercase">
                      <span>{item.beds} Dorms</span>
                      <span>{item.area}</span>
                    </div>
                    <p className="text-brand-deepblue font-black">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-white border-t border-gray-100 mt-24 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <img src="/logo.svg" alt="Logo" className="h-10 mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Transformando o mercado imobiliário em Olinda com transparência, tecnologia e atendimento humanizado.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-deepblue">Empresa</h5>
              <ul className="text-gray-500 text-sm space-y-4">
                <li><a href="#" className="hover:text-brand-deepblue">Sobre nós</a></li>
                <li><a href="#" className="hover:text-brand-deepblue">Nossa Equipe</a></li>
                <li><a href="#" className="hover:text-brand-deepblue">Trabalhe Conosco</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-deepblue">Suporte</h5>
              <ul className="text-gray-500 text-sm space-y-4">
                <li><a href="#" className="hover:text-brand-deepblue">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-brand-deepblue">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-brand-deepblue">Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-deepblue">Siga-nos</h5>
              <div className="flex gap-4">
                {/* Social icons would go here */}
                <div className="w-10 h-10 bg-brand-offwhite rounded-full flex items-center justify-center text-brand-deepblue hover:bg-brand-deepblue hover:text-white transition-all cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-brand-offwhite rounded-full flex items-center justify-center text-brand-deepblue hover:bg-brand-deepblue hover:text-white transition-all cursor-pointer">FB</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50 text-center text-gray-400 text-xs">
            © 2024 Dornelas Corretor. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetails;
