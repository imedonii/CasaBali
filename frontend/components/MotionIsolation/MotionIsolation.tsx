import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MotionIsolation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30"
    >
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
            Zero Motion
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Transfer
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your partner's movements won't disturb your sleep. Experience true
            isolation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Motion isolation demo visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-12 bg-white rounded-3xl border border-[#d28db9]/20 shadow-2xl"
          >
            {/* GIF placeholder - simulated with animated elements */}
            <div className="relative h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 flex items-center justify-around p-8">
                {/* Left side - movement */}
                <div className="text-center">
                  <motion.div
                    animate={{
                      y: [0, -20, 0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d28db9] to-[#570f46] flex items-center justify-center mb-4 shadow-lg"
                  >
                    <span className="text-white text-2xl">😴</span>
                  </motion.div>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Partner Moves
                  </p>
                </div>

                {/* Divider with waves */}
                <div className="flex flex-col items-center">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scaleX: [1, 0.3, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="w-16 h-1 bg-[#d28db9]/30 rounded-full mb-2"
                    />
                  ))}
                </div>

                {/* Right side - no movement */}
                <div className="text-center">
                  <motion.div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-white text-2xl">😊</span>
                  </motion.div>
                  <p
                    className="text-sm text-gray-600"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    You Sleep Peacefully
                  </p>
                </div>
              </div>

              {/* GIF label */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-gray-600">
                Motion Isolation Demo
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/5 rounded-2xl">
                <h3
                  className="text-xl text-[#570f46] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Advanced Foam Technology
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our proprietary foam layers absorb movement, preventing it
                  from transferring across the mattress surface.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/5 rounded-2xl">
                <h3
                  className="text-xl text-[#570f46] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Independent Sleep Zones
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Each side of the bed responds independently, so you can both
                  enjoy uninterrupted rest.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl border border-[#d28db9]/20"
          >
            <p
              className="text-lg text-gray-700 mb-4 italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "I used to wake up every time my husband got out of bed. Now I
              don't feel a thing. It's like sleeping on a cloud!"
            </p>
            <p
              className="text-sm text-[#570f46]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — Sarah M., Verified Customer
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
