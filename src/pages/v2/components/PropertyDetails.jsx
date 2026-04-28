import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PropertyDetails = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('agendar');
  
  const property = {
    title: "Casa em Olinda",
    location: "Casa Caiada, Olinda - PE",
    price: "R$ 450.000,00",
    condo: "R$ 0,00",
    iptu: "R$ 0,00",
    description: "Excelente casa em Olinda, com acabamento de alto padrão, localização privilegiada e total segurança para sua família. O imóvel conta com amplos espaços, varanda gourmet e área de lazer privativa.",
    specs: [
      { label: "Dormitórios", value: "4", icon: "🛏️" },
      { label: "Banheiros", value: "4", icon: "🚽" },
      { label: "Suítes", value: "1", icon: "🚿" },
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

  const neighborhoods = [
    "Olinda", "Recife", "Paulista", "Jaboatão dos Guararapes", "Camaragibe", "Abreu e Lima", 
    "Igarassu", "Itamaracá", "Moreno", "São Lourenço da Mata", "Araçoiaba", "Itapissuma", 
    "Cabo de Santo Agostinho", "Ipojuca", "Sirinhaém", "Tamandaré", "Barreiros"
  ];

  const propertyTypes = [
    "Apartamento em Olinda", "Casa em Condomínio em Olinda", "Terreno em Olinda", 
    "Sala Comercial em Olinda", "Galpão em Olinda", "Loft em Olinda", "Studio em Olinda"
  ];

  const nearbyNeighborhoods = [
    "Jardim Atlântico", "Bairro Novo", "Casa Caiada", "Rio Doce", "Jardim Fragoso", 
    "Ouro Preto", "Jardim Brasil", "Peixinhos", "Varadouro", "Santa Tereza"
  ];

  const nearbyStreets = [
    "Av. Getúlio Vargas", "Rua Manoel de Barros", "Av. José Augusto Moreira", 
    "Rua Dr. Mariano", "Av. Ministro Marcos Freire", "Rua Farias Neves"
  ];

  const relatedProperties = [
    {
      title: "Casa em Olinda",
      location: "Jardim Atlântico",
      price: "R$ 1.000.000,00",
      condo: "R$ 500,00",
      image: "/luxury_penthouse_hero_1777374549662.png",
      beds: 4, baths: 2, area: "150m²"
    },
    {
      title: "Mansão VIP",
      location: "Bairro Novo",
      price: "R$ 1.250.000,00",
      condo: "R$ 800,00",
      image: "/luxury_pool_view_1777374598451.png",
      beds: 5, baths: 4, area: "350m²"
    },
    {
      title: "Casa de Praia",
      location: "Rio Doce",
      price: "R$ 750.000,00",
      condo: "R$ 300,00",
      image: "/luxury_kitchen_minimalist.png",
      beds: 3, baths: 3, area: "180m²"
    }
  ];
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Sou ${userData?.name || 'Interessado'}. Tenho interesse no imóvel ${property.title}.`;
    window.open(`https://wa.me/5581987654321?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <img src="/logo.svg" alt="Dornelas Corretor" className="h-10 w-auto" />
            <nav className="hidden lg:flex items-center space-x-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
              <a href="#" className="text-brand-deepblue">Home</a>
              <span className="text-gray-200">|</span>
              <a href="tel:+5581912341234" className="hover:text-brand-deepblue transition-all">+55 (81) 9.1234-1234</a>
              <a href="#" className="hover:text-brand-deepblue transition-all">Imóveis</a>
              <a href="#" className="hover:text-brand-deepblue transition-all">Anuncie seu Imóvel</a>
            </nav>
          </div>
          <button className="bg-[#25D366] text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#20bd5c] transition-all flex items-center gap-2 shadow-lg shadow-green-500/20">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.1-.117.434-.506.549-.68.116-.174.231-.145.39-.087.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.419-.101.825z"/></svg>
            Fale com o corretor
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[9px] text-gray-400 mb-6 uppercase tracking-[0.2em] font-black">
          <a href="#" className="hover:text-brand-deepblue">Home</a>
          <span className="text-gray-200">/</span>
          <a href="#" className="hover:text-brand-deepblue">Olinda</a>
          <span className="text-gray-200">/</span>
          <span className="text-brand-deepblue">Casa</span>
        </div>

        {/* Property Header Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">
              {property.title}
            </h1>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
              {property.location}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <span className="px-2.5 py-1 bg-brand-deepblue text-white text-[9px] font-black uppercase tracking-widest rounded">Venda</span>
              <span className="px-2.5 py-1 bg-brand-deepblue/10 text-brand-deepblue text-[9px] font-black uppercase tracking-widest rounded">Lançamento</span>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-brand-deepblue leading-none">{property.price}</span>
              <div className="flex gap-4 text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1 justify-end">
                <span>Condomínio: {property.condo}</span>
                <span>IPTU: {property.iptu}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-10 h-[550px]">
          <div className="lg:col-span-3 h-full rounded-2xl overflow-hidden shadow-2xl relative group">
            <img src={property.images[0]} alt="Principal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute top-6 right-6 flex gap-2">
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-800 shadow-xl hover:bg-white transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></button>
              <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-red-500 shadow-xl hover:bg-white transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></button>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-2 h-full">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={property.images[1]} alt="Foto 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={property.images[2]} alt="Foto 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl relative group cursor-pointer">
              <img src={property.images[3]} alt="Foto 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-brand-deepblue/60 backdrop-blur-sm flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="text-3xl font-black mb-1">+21</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ver Fotos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 py-10 border-y border-gray-100">
              {property.specs.map(spec => (
                <div key={spec.label} className="text-center group">
                  <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{spec.icon}</div>
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">{spec.label}</p>
                  <p className="text-2xl font-black text-brand-deepblue leading-none">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-7 bg-brand-deepblue rounded-full"></div>
                <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900">Descrição do Imóvel</h2>
              </div>
              <p className="text-gray-500 leading-relaxed font-medium text-lg mb-8">
                {property.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {property.features.map(feature => (
                  <span key={feature} className="px-5 py-2.5 bg-white border border-gray-100 rounded-xl text-[10px] font-black text-gray-500 uppercase tracking-widest shadow-sm hover:border-brand-deepblue hover:text-brand-deepblue transition-all cursor-default">
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            {/* Map */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-7 bg-brand-deepblue rounded-full"></div>
                <h2 className="text-xl font-black uppercase tracking-tighter text-slate-900">Localização</h2>
              </div>
              <div className="w-full h-[400px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xl relative p-2">
                <div className="w-full h-full rounded-2xl bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-34.84,-7.98,13/800x400?access_token=pk.eyJ1IjoiamVmZmVyc29uanIiLCJhIjoiY20yNHR4ZzM5MDN5cjJscHF2ZzZ4ZzB0dyJ9.V_6_8_0_0_0')] bg-cover bg-center"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="w-16 h-16 bg-brand-deepblue/20 rounded-full animate-ping absolute"></div>
                   <div className="w-8 h-8 bg-brand-deepblue rounded-full border-4 border-white shadow-2xl z-10"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Lead Form Card */}
              <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,74,171,0.1)] border border-gray-50 overflow-hidden">
                <div className="flex p-2 bg-gray-50/50">
                  <button 
                    onClick={() => setActiveTab('agendar')}
                    className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === 'agendar' ? 'text-brand-deepblue bg-white shadow-sm' : 'text-gray-400'}`}
                  >
                    Agendar visita
                  </button>
                  <button 
                    onClick={() => setActiveTab('detalhes')}
                    className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl ${activeTab === 'detalhes' ? 'text-brand-deepblue bg-white shadow-sm' : 'text-gray-400'}`}
                  >
                    Quero mais detalhes
                  </button>
                </div>

                <div className="p-8 space-y-4">
                  <div className="text-center mb-6">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">Fale com o especialista</p>
                  </div>
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <input type="text" placeholder="Seu nome" defaultValue={userData?.name} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm outline-none focus:border-brand-deepblue focus:bg-white transition-all font-medium" />
                    <input type="email" placeholder="Seu e-mail" defaultValue={userData?.email} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm outline-none focus:border-brand-deepblue focus:bg-white transition-all font-medium" />
                    <input type="tel" placeholder="Telefone / WhatsApp" defaultValue={userData?.whatsapp} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm outline-none focus:border-brand-deepblue focus:bg-white transition-all font-medium" />
                    <button className="w-full py-5 bg-[#FF9800] text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-[#F57C00] shadow-xl shadow-orange-500/20 transition-all active:scale-[0.98]">
                      Enviar
                    </button>
                  </form>
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink mx-4 text-[9px] font-black text-gray-300 uppercase tracking-widest">ou</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                  </div>
                  <button className="w-full py-4 border-2 border-[#25D366] text-[#25D366] font-black uppercase tracking-widest text-[10px] rounded-2xl flex items-center justify-center gap-3 hover:bg-green-50 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.044.1-.117.434-.506.549-.68.116-.174.231-.145.39-.087.159.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.419-.101.825z"/></svg>
                    Falar pelo WhatsApp
                  </button>
                </div>
              </div>

              {/* Agent Card */}
              <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-xl flex items-center gap-5 group">
                <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden border-4 border-brand-deepblue/10 group-hover:border-brand-deepblue/30 transition-all shadow-inner shrink-0">
                  <img src="https://i.pravatar.cc/150?u=hyago" alt="Hyago Dornelas" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase tracking-tighter text-lg leading-none mb-1">Hyago Dornelas</h4>
                  <p className="text-[10px] text-brand-deepblue font-black uppercase tracking-widest mb-3">CRECI 12345-F</p>
                  <div className="text-[11px] font-bold text-gray-400 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-deepblue rounded-full"></div>
                      <p>(81) 98765-4321</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-deepblue rounded-full"></div>
                      <p>(81) 91234-1234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tag Navigation Sections */}
        <div className="mt-24 space-y-16 border-t border-gray-100 pt-20">
          {[
            { title: "Escolha por bairro", tags: neighborhoods },
            { title: "Outros tipos de imóveis para vender em Olinda", tags: propertyTypes },
            { title: "Casas para vender nos bairros próximos", tags: nearbyNeighborhoods },
            { title: "Casas para vender nas ruas próximas a Olinda", tags: nearbyStreets }
          ].map(section => (
            <section key={section.title}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-deepblue mb-8 flex items-center gap-4">
                {section.title}
                <div className="flex-grow border-t border-gray-100"></div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.tags.map(tag => (
                  <button key={tag} className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-[10px] font-black text-gray-400 hover:border-brand-deepblue hover:text-brand-deepblue transition-all uppercase tracking-widest shadow-sm">
                    {tag}
                  </button>
                ))}
                <button className="px-6 py-2.5 bg-brand-deepblue text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-deepblue/20">Ver Mais</button>
              </div>
            </section>
          ))}
        </div>

        {/* Yellow Banner CTA */}
        <section className="mt-24 bg-[#FFD740] rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.2)_0%,transparent_50%)]"></div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6 leading-[0.9]">
              Procurando um imóvel para comprar em Olinda?
            </h2>
            <p className="text-slate-900/60 font-black text-sm uppercase tracking-widest leading-relaxed">
              Oferecemos a você as melhores opções em todos os bairros de Olinda, com atendimento personalizado.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto relative z-10">
            <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:scale-105 transition-all shadow-2xl active:scale-95">Clique aqui</button>
            <button className="px-10 py-5 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-slate-900 hover:text-white transition-all">Ver todos os imóveis</button>
          </div>
        </section>

        {/* Related Properties */}
        <section className="mt-32">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Pode ser do seu interesse</h2>
            <div className="flex gap-3">
              <button className="w-12 h-12 border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-brand-deepblue hover:text-brand-deepblue transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-12 h-12 border-2 border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-brand-deepblue hover:text-brand-deepblue transition-all shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProperties.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-50 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all group flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-brand-deepblue text-white px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">Destaque</div>
                  <button className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-red-500 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </button>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="font-black text-xl mb-1 uppercase tracking-tight text-slate-900">{item.title}</h4>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">{item.location}</p>
                  
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-50 mb-6">
                    <div className="text-center">
                      <p className="text-gray-300 text-[8px] font-black uppercase tracking-widest mb-1">Dorms</p>
                      <p className="font-black text-slate-900">{item.beds}</p>
                    </div>
                    <div className="text-center border-x border-gray-50">
                      <p className="text-gray-300 text-[8px] font-black uppercase tracking-widest mb-1">Banheiros</p>
                      <p className="font-black text-slate-900">{item.baths}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-300 text-[8px] font-black uppercase tracking-widest mb-1">Área</p>
                      <p className="font-black text-slate-900">{item.area}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <p className="text-brand-deepblue font-black text-2xl leading-none">{item.price}</p>
                      <p className="text-[9px] font-black text-gray-300 uppercase tracking-widest mt-1">Condomínio: {item.condo}</p>
                    </div>
                    <button className="w-12 h-12 bg-brand-deepblue text-white rounded-2xl flex items-center justify-center hover:bg-brand-accent transition-all shadow-lg shadow-brand-deepblue/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <a href="#" className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand-deepblue border-b-2 border-brand-deepblue pb-2 hover:text-brand-accent hover:border-brand-accent transition-all">Ver todos os imóveis em Olinda</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 border-t border-gray-100 mt-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1">
              <img src="/logo.svg" alt="Logo" className="h-10 mb-10" />
              <div className="flex gap-4">
                {['IG', 'YT', 'TK'].map(social => (
                  <div key={social} className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[10px] font-black text-brand-deepblue hover:bg-brand-deepblue hover:text-white transition-all cursor-pointer shadow-sm border border-gray-100">{social}</div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-900 mb-8">Links Rápidos</h5>
              <ul className="text-gray-400 text-[10px] font-black uppercase tracking-widest space-y-5">
                <li><a href="#" className="hover:text-brand-deepblue transition-all">Sobre nós</a></li>
                <li><a href="#" className="hover:text-brand-deepblue transition-all">Nossos Imóveis</a></li>
                <li><a href="#" className="hover:text-brand-deepblue transition-all">Anuncie seu Imóvel</a></li>
                <li><a href="#" className="hover:text-brand-deepblue transition-all">Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-900 mb-8">Nossa Unidade</h5>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-[2] max-w-[200px]">
                Av. Gov. Agamenon Magalhães, 1234 - Olinda/PE<br />
                CEP: 53010-000
              </p>
            </div>
            <div>
              <h5 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-900 mb-8">Atendimento</h5>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-[2]">
                Segunda a Sexta: 08:00 às 18:00<br />
                Sábado: 08:00 às 12:00
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-[9px] font-black uppercase tracking-widest">© 2024 Dornelas Corretor. Todos os direitos reservados. | Desenvolvido por Microsistec</p>
            <div className="flex gap-8 text-gray-300 text-[8px] font-black uppercase tracking-widest">
              <a href="#" className="hover:text-brand-deepblue transition-all">Privacidade</a>
              <a href="#" className="hover:text-brand-deepblue transition-all">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetails;
