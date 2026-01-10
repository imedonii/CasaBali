'use client';

import { useEffect, useRef, useState } from 'react';
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
import CoolingTech from '../CoolingTech/CoolingTech';
import MotionIsolation from '../MotionIsolation/MotionIsolation';
import Testimonials from '../Testimonials/Testimonials';
import LifestyleGallery from '../LifestyleGallery/LifestyleGallery';
import ComparisonTable from '../ComparisonTable/ComparisonTable';
import DeliveryExperience from '../DeliveryExperience/DeliveryExperience';
import TrialWarranty from '../TrialWarranty/TrialWarranty';
import CTASection from '../CTASection/CTASection';
import FAQSection from '../FAQSection/FAQSection';

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current !== null) {
        window.cancelAnimationFrame(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
      });
    };

    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current !== null) {
        window.cancelAnimationFrame(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
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
      <CoolingTech />
      <MotionIsolation />
      <Testimonials />
      <LifestyleGallery />
      <ComparisonTable />
      <DeliveryExperience />
      <TrialWarranty />
      <CTASection />
      <FAQSection />
    </main>
  );
};
