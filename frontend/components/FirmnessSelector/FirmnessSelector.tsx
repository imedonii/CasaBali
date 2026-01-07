import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function FirmnessSelector() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [firmness, setFirmness] = useState([50]);

  const getFirmnessLabel = (value: number) => {
    if (value < 33) return 'Soft';
    if (value < 66) return 'Medium';
    return 'Firm';
  };

  const getFirmnessDescription = (value: number) => {
    if (value < 33)
      return 'Perfect for side sleepers who love a plush, cradling feel';
    if (value < 66)
      return 'Balanced comfort for all sleep positions—our most popular choice';
    return 'Excellent support for back and stomach sleepers';
  };

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Firmness Level
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Casa Bali adapts to your preferences with our customizable firmness
            options
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-12 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#d28db9]/20 shadow-xl"
        >
          {/* Interactive slider */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <span className="text-gray-500">Soft</span>
              <motion.span
                key={firmness[0]}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl text-[#570f46]"
              >
                {getFirmnessLabel(firmness[0])}
              </motion.span>
              <span className="text-gray-500">Firm</span>
            </div>

            <Slider
              value={firmness}
              onValueChange={setFirmness}
              max={100}
              step={1}
              className="mb-8"
            />

            <motion.p
              key={firmness[0]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-lg text-gray-600"
            >
              {getFirmnessDescription(firmness[0])}
            </motion.p>
          </div>

          {/* Firmness options */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Soft', value: 16, icon: '☁️' },
              { label: 'Medium', value: 50, icon: '✨' },
              { label: 'Firm', value: 84, icon: '💎' },
            ].map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFirmness([option.value])}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  Math.abs(firmness[0] - option.value) < 20
                    ? 'border-[#570f46] bg-[#570f46]/5'
                    : 'border-[#d28db9]/20 hover:border-[#d28db9]/50'
                }`}
              >
                <div className="text-4xl mb-3">{option.icon}</div>
                <p className="text-xl text-[#570f46]">{option.label}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full shadow-lg"
            >
              Get Your Perfect Match
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
