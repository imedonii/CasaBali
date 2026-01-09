import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Image src="/CasaBali.svg" alt="Casa Bali" width={120} height={120} />
        </motion.a>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <a
            href="#mattress"
            className="text-gray-700 hover:text-[#570f46] transition-colors"
          >
            The Mattress
          </a>
          <a
            href="#why"
            className="text-gray-700 hover:text-[#570f46] transition-colors"
          >
            Why Casa Bali
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-[#570f46] transition-colors"
          >
            Reviews
          </a>
          <a
            href="#trial"
            className="text-gray-700 hover:text-[#570f46] transition-colors"
          >
            100-Night Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#570f46]" />
          ) : (
            <Menu className="w-6 h-6 text-[#570f46]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <div
            className="flex flex-col gap-6 flex-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <a
              href="#"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href="#discover"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              Discover
            </a>
            <a
              href="#about"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </a>
            <a
              href="#mattress"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              The Mattress
            </a>
            <a
              href="#why"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              Why Casa Bali
            </a>
            <a
              href="#testimonials"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              Reviews
            </a>
            <a
              href="#trial"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              100-Night Trial
            </a>
            <a
              href="#contact"
              className="text-xl text-gray-700 hover:text-[#570f46] transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden -z-10"
          onClick={closeMobileMenu}
        />
      )}
    </motion.nav>
  );
}
