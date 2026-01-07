'use client';

import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import HeroSection from '../HeroSection/HeroSection';

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
      </main>
    </>
  );
};
