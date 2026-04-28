import React from 'react';
import Hero from '../../components/v1/Hero';
import StepForm from '../../components/v1/StepForm';
import InstagramGrid from '../../components/v1/InstagramGrid';
import Footer from '../../components/v1/Footer';
import WhatsAppButton from '../../components/v1/WhatsAppButton';

const V1 = () => {
  return (
    <div className="min-h-screen bg-brand-offwhite">
      <Hero />
      <StepForm />
      <InstagramGrid />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default V1;
