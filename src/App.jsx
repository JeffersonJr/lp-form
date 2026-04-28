import React from 'react';
import Hero from './components/Hero';
import StepForm from './components/StepForm';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-brand-offwhite">
      <Hero />
      <StepForm />
      <InstagramGrid />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
