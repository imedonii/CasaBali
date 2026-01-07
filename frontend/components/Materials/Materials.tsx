import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Droplets, Wind, Recycle } from 'lucide-react';

export default function Materials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const materials = [
    {
      icon: Leaf,
      title: 'Organic Cotton',
      description: 'GOTS-certified organic cotton cover, soft and sustainable',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Droplets,
      title: 'CertiPUR-US® Foam',
      description:
        'Free from harmful chemicals, heavy metals, and formaldehyde',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Wind,
      title: 'Breathable Design',
      description:
        'Open-cell structure promotes airflow and temperature regulation',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly',
      description: 'Recyclable materials and carbon-neutral shipping process',
      color: 'from-teal-400 to-teal-600',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-green-50/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-green-200 mb-6">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">
              Premium & Sustainable
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
            Materials that
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to your health and our planet's future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-white rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${material.color} flex items-center justify-center`}
                >
                  <material.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl text-[#570f46] mb-3">
                    {material.title}
                  </h3>
                  <p className="text-gray-600">{material.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl border border-green-200"
        >
          <h3 className="text-2xl text-[#570f46] mb-6 text-center">
            Our Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              'CertiPUR-US®',
              'OEKO-TEX®',
              'GOTS Organic',
              'GreenGuard Gold',
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full border border-green-200 shadow-sm"
              >
                <p className="text-sm text-gray-700">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
