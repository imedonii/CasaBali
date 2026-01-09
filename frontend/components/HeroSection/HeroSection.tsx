import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 will-change-transform">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-white" />

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-[#d28db9]/20 to-[#570f46]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 rounded-full blur-3xl"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#570f46]/10 to-[#d28db9]/10 rounded-full text-[#570f46] mb-6"
            >
              Premium Sleep Experience
            </motion.span>

            <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#570f46] leading-tight mb-6">
              Sleep in
              <br />
              <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
                Luxury
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience the perfect blend of comfort, support, and elegance.
              Casa Bali redefines what it means to truly rest.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#discover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              Discover Casa Bali
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#570f46] text-[#570f46] rounded-full hover:bg-[#570f46]/5 transition-all flex items-center justify-center"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div>
              <p className="text-4xl text-[#570f46]">100</p>
              <p className="text-sm text-gray-600">Night Trial</p>
            </div>
            <div>
              <p className="text-4xl text-[#570f46]">15</p>
              <p className="text-sm text-gray-600">Year Warranty</p>
            </div>
            <div>
              <p className="text-4xl text-[#570f46]">5★</p>
              <p className="text-sm text-gray-600">Rated</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right content - Mattress Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759176171634-674f37841636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYXR0cmVzcyUyMGJlZHxlbnwxfHx8fDE3Njc2MDU5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Casa Bali Luxury Mattress"
              className="w-full h-auto"
            />

            {/* Badge overlay */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl"
            >
              <p className="text-sm text-[#570f46]">Free Shipping</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#570f46]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#570f46] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
