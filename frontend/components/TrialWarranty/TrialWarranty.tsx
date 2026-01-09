import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Shield, RotateCcw, Heart } from 'lucide-react';

export default function TrialWarranty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="trial" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-[#570f46] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Risk-Free
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Sleep Trial
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We're so confident you'll love Casa Bali, we offer an
            industry-leading guarantee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* 100-Night Trial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group p-12 bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/5 rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 hover:shadow-2xl transition-all"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-[#570f46] to-[#d28db9] flex items-center justify-center mb-8"
            >
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>

            <h3
              className="text-4xl text-[#570f46] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              100-Night Trial
            </h3>

            <p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sleep on your Casa Bali mattress for 100 nights. If you're not
              completely satisfied, return it for a full refund—no questions
              asked.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d28db9]" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Free returns & pickup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d28db9]" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Full refund guaranteed
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#d28db9]" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We donate returned mattresses
                </p>
              </div>
            </div>
          </motion.div>

          {/* 15-Year Warranty */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group p-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-200 hover:border-blue-300 hover:shadow-2xl transition-all"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-8"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <h3
              className="text-4xl text-[#570f46] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              15-Year Warranty
            </h3>

            <p
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your Casa Bali mattress is built to last. We stand behind our
              craftsmanship with a comprehensive 15-year warranty.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Coverage for defects
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Replacement or repair
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Hassle-free claims process
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional promises */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
            <RotateCcw className="w-8 h-8 text-[#d28db9] flex-shrink-0" />
            <div>
              <h4
                className="text-xl text-[#570f46] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Easy Returns
              </h4>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                If it's not the perfect fit, we'll arrange free pickup and
                process your refund within 5 business days.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
            <Heart className="w-8 h-8 text-[#d28db9] flex-shrink-0" />
            <div>
              <h4
                className="text-xl text-[#570f46] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Giving Back
              </h4>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Returned mattresses are donated to local charities and
                shelters—nothing goes to waste.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 p-8 bg-gradient-to-r from-[#570f46] to-[#d28db9] rounded-3xl text-center text-white"
        >
          <p
            className="text-2xl mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Join 10,000+ Happy Sleepers
          </p>
          <p
            className="text-white/90"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            98% of our customers keep their Casa Bali mattress
          </p>
        </motion.div>
      </div>
    </section>
  );
}
