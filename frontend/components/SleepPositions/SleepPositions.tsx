import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SleepPositions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const positions = [
    {
      name: 'Side Sleepers',
      emoji: '🌙',
      description: 'Pressure relief for shoulders and hips',
      benefit: 'Contoured support keeps spine aligned',
    },
    {
      name: 'Back Sleepers',
      emoji: '⭐',
      description: 'Lower back support and proper alignment',
      benefit: 'Prevents sagging and maintains posture',
    },
    {
      name: 'Stomach Sleepers',
      emoji: '☀️',
      description: 'Firm support to prevent sinking',
      benefit: 'Keeps hips level with shoulders',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
            Perfect for
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              All Sleep Positions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            However you sleep, Casa Bali has you covered with adaptive support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-gradient-to-br from-white to-purple-50/30 rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 hover:shadow-2xl transition-all"
            >
              {/* Emoji icon */}
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="text-7xl mb-6 text-center"
              >
                {position.emoji}
              </motion.div>

              <h3 className="text-2xl text-[#570f46] mb-4 text-center">
                {position.name}
              </h3>

              <p className="text-gray-600 mb-4 text-center">
                {position.description}
              </p>

              <div className="pt-4 border-t border-[#d28db9]/20">
                <p className="text-sm text-[#570f46] text-center">
                  ✓ {position.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-[#570f46]/5 to-[#d28db9]/5 rounded-3xl text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="text-[#570f46]">Combination sleepers?</span> No
            problem.
          </p>
          <p className="text-gray-600">
            Casa Bali's adaptive design automatically adjusts to your movements
            throughout the night.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
