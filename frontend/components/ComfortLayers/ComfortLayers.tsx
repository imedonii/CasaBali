import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers } from 'lucide-react';

export default function ComfortLayers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const layers = [
    {
      name: 'Premium Quilted Cover',
      description: 'Soft, breathable fabric with moisture-wicking properties',
      color: 'from-gray-100 to-gray-200',
      height: 'h-16',
    },
    {
      name: 'Cooling Gel Memory Foam',
      description: 'Temperature-regulating gel infusion for cool sleep',
      color: 'from-blue-100 to-blue-200',
      height: 'h-20',
    },
    {
      name: 'Adaptive Comfort Layer',
      description: 'Responsive foam that contours to your body',
      color: 'from-purple-100 to-purple-200',
      height: 'h-24',
    },
    {
      name: 'Pressure Relief Foam',
      description: 'Targeted support for shoulders, hips, and back',
      color: 'from-pink-100 to-pink-200',
      height: 'h-28',
    },
    {
      name: 'High-Density Support Core',
      description: 'Durable foundation for lasting comfort and stability',
      color: 'from-[#570f46]/20 to-[#d28db9]/20',
      height: 'h-32',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#d28db9]/30 mb-6">
            <Layers className="w-4 h-4 text-[#d28db9]" />
            <span className="text-sm text-[#570f46]">Inside Casa Bali</span>
          </div>

          <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
            Five Layers of
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Pure Comfort
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each layer is engineered to work in harmony, delivering the perfect
            balance of softness, support, and temperature control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Animated layers visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-[#d28db9]/20 shadow-xl">
              <div className="space-y-2">
                {layers.map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`${layer.height} bg-gradient-to-r ${layer.color} rounded-2xl flex items-center px-6 shadow-md cursor-pointer transition-all`}
                  >
                    <span className="text-sm text-gray-700">
                      Layer {index + 1}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                className="text-center mt-8 text-sm text-gray-500"
              >
                Total Height: 12 inches
              </motion.p>
            </div>
          </motion.div>

          {/* Layer descriptions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#570f46] to-[#d28db9] flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl text-[#570f46] mb-2">
                      {layer.name}
                    </h3>
                    <p className="text-gray-600">{layer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
