import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    { feature: 'Premium Memory Foam', casaBali: true, traditional: false },
    { feature: 'Cooling Technology', casaBali: true, traditional: false },
    { feature: 'Motion Isolation', casaBali: true, traditional: false },
    { feature: '100-Night Trial', casaBali: true, traditional: false },
    { feature: '15-Year Warranty', casaBali: true, traditional: '10 Years' },
    { feature: 'Free Shipping & Returns', casaBali: true, traditional: false },
    { feature: 'Eco-Friendly Materials', casaBali: true, traditional: false },
    { feature: 'Edge Support', casaBali: true, traditional: 'Limited' },
    { feature: 'Pressure Relief', casaBali: 'Advanced', traditional: 'Basic' },
    {
      feature: 'Price Point',
      casaBali: 'Premium Value',
      traditional: 'Higher',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="max-w-6xl mx-auto">
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
            Casa Bali vs
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Traditional Mattresses
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See how we stack up against the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-3xl border border-[#d28db9]/20 shadow-xl overflow-hidden"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-r from-[#570f46]/5 to-[#d28db9]/5 border-b border-[#d28db9]/20">
            <div></div>
            <div className="text-center">
              <p
                className="text-2xl text-[#570f46] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Casa Bali
              </p>
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full text-sm">
                Premium Choice
              </div>
            </div>
            <div className="text-center">
              <p
                className="text-2xl text-gray-600 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Traditional
              </p>
              <div className="inline-block px-4 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                Standard
              </div>
            </div>
          </div>

          {/* Table body */}
          <div className="divide-y divide-[#d28db9]/10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-purple-50/30 transition-colors"
              >
                <div className="flex items-center">
                  <p
                    className="text-gray-700"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.feature}
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  {item.casaBali === true ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <p
                      className="text-[#570f46]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.casaBali}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-center">
                  {item.traditional === false ? (
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <X className="w-5 h-5 text-gray-500" />
                    </div>
                  ) : (
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item.traditional === true ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : (
                        item.traditional
                      )}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full shadow-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience the Difference
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
