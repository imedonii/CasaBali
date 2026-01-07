import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';

export default function LoadingPage() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-white via-pink-50/30 to-[#d28db9]/10 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#d28db9]/30 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -45, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#570f46]/20 to-transparent rounded-full blur-3xl"
      />

      {/* Floating moon */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 right-32 text-[#d28db9]/40"
      >
        <Moon className="w-20 h-20" />
      </motion.div>

      {/* Floating stars */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute bottom-40 right-24 text-[#570f46]/30"
      >
        <Star className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-48 left-40 text-[#d28db9]/35"
      >
        <Star className="w-12 h-12" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo/Brand name */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-[#570f46] to-[#d28db9] mb-4">
            Casa Bali
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
        >
          Premium Sleep Experience
        </motion.p>

        {/* Loading animation - Dots */}
        <div className="flex justify-center items-center gap-3 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-[#570f46] to-[#d28db9]"
            />
          ))}
        </div>

        {/* Loading bar */}
        <div className="w-64 mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 bg-gradient-to-r from-[#570f46] to-[#d28db9]"
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-gray-500 mt-8"
        >
          Preparing your comfort experience...
        </motion.p>
      </div>

      {/* Circular spinner overlay (subtle) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-transparent border-t-[#d28db9]/20 rounded-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-transparent border-b-[#570f46]/15 rounded-full" />
      </motion.div>
    </motion.div>
  );
}
