import React from 'react';
import Navbar from '../components/landing/Navbar.jsx';
import HeroSection from '../components/landing/HeroSection.jsx';
import FeaturesSection from '../components/landing/FeaturesSection.jsx';
import ChartsSection from '../components/landing/ChartsSection.jsx';
import PricingSection from '../components/landing/PricingSection.jsx';
import WaitlistSection from '../components/landing/WaitlistSection.jsx';
import Footer from '../components/landing/Footer.jsx';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background font-inter overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ChartsSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}