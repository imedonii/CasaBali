'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Moon, Star } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-[#d28db9]/10 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#d28db9]/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#570f46]/20 to-transparent rounded-full blur-3xl"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-20 text-[#d28db9]/20"
      >
        <Moon className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute bottom-32 right-32 text-[#570f46]/10"
      >
        <Star className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-40 right-40 text-[#d28db9]/15"
      >
        <Star className="w-10 h-10" />
      </motion.div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-[180px] md:text-[240px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#570f46] to-[#d28db9] select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#570f46] mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Oops! Looks like you've wandered into a dream...
          </p>
          <p className="text-lg text-gray-500 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 flex justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/20 flex items-center justify-center"
          >
            <Search className="w-12 h-12 text-[#570f46]" />
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#570f46] text-[#570f46] rounded-full hover:bg-[#570f46]/5 transition-all flex items-center gap-2 min-w-[200px] justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>

          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 min-w-[200px] justify-center"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </motion.a>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-[#d28db9]/20"
        >
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#discover"
              className="text-[#570f46] hover:text-[#d28db9] transition-colors font-medium"
            >
              Discover Casa Bali
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#about"
              className="text-[#570f46] hover:text-[#d28db9] transition-colors font-medium"
            >
              About Us
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="#"
              className="text-[#570f46] hover:text-[#d28db9] transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '';
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Fun message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-400 italic">
            "Even the best of us get lost sometimes. Let's get you back to
            comfort." 💤
          </p>
        </motion.div>
      </div>
    </div>
  );
}
