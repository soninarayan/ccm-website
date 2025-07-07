import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection1 from '../components/FeaturesSection1';
import FeaturesSection2 from '../components/FeaturesSection2';
import FeaturesSection3 from '../components/FeaturesSection3';
import ServicesCarousel from '../components/ServicesCarousel';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection1 />
      <ServicesCarousel />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <ContactSection />
    </>
  );
};

export default Home;