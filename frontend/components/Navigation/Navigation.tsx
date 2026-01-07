import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <h1 className="text-3xl text-[#570f46]">Casa Bali</h1>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
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

        <button className="md:hidden">
          <Menu className="w-6 h-6 text-[#570f46]" />
        </button>
      </div>
    </motion.nav>
  );
}
