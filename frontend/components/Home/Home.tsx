'use client';

import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import BrandIntro from '../BrandIntro/BrandIntro';
import SleepPhilosophy from '../SleepPhilosophy/SleepPhilosophy';
import ProductShowcase from '../ProductShowcase/ProductShowcase';
import ComfortLayers from '../ComfortLayers/ComfortLayers';
import WhyDifferent from '../WhyDifferent/WhyDifferent';
import SleepBenefits from '../SleepBenefits/SleepBenefits';
import FirmnessSelector from '../FirmnessSelector/FirmnessSelector';
import SleepPositions from '../SleepPositions/SleepPositions';
import Materials from '../Materials/Materials';

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <BrandIntro />
        <SleepPhilosophy />
        <ProductShowcase />
        <ComfortLayers />
        <WhyDifferent />
        <SleepBenefits />
        <FirmnessSelector />
        <SleepPositions />
        <Materials />
      </main>
    </>
  );
};
