'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import Footer from '../Footer/Footer';
import LoadingPage from '../LoadingPage/LoadingPage';
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
  const [isLoading, setIsLoading] = useState(true);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      if (scrollTimeoutRef.current !== null) {
        return;
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollTimeoutRef.current = null;

        setIsScrolled((prev) => {
          if (prev === scrolled) return prev;
          return scrolled;
        });
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingPage />
      </AnimatePresence>
    );
  }

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

      <Footer />
    </>
  );
};
