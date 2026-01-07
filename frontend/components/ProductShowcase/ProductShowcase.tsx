import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="mattress"
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
            The Casa Bali
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Signature Mattress
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A masterpiece of comfort engineering, designed to transform your
            sleep experience
          </p>
        </motion.div>

        {/* 3D-style layered view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main product image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-12">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1759176170879-6bd7073ab4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwYmVkJTIwbGluZW5zfGVufDF8fHx8MTc2NzYwNTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Casa Bali Mattress Detail"
              className="w-full h-auto rounded-2xl"
            />

            {/* Feature callouts */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute top-1/4 left-0 bg-white/95 backdrop-blur-md rounded-r-2xl px-6 py-4 shadow-xl"
            >
              <p
                className="text-sm text-[#570f46]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                5-Layer System
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
              className="absolute top-1/2 right-0 bg-white/95 backdrop-blur-md rounded-l-2xl px-6 py-4 shadow-xl"
            >
              <p
                className="text-sm text-[#570f46]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cooling Gel Memory Foam
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="absolute bottom-1/4 left-0 bg-white/95 backdrop-blur-md rounded-r-2xl px-6 py-4 shadow-xl"
            >
              <p
                className="text-sm text-[#570f46]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Edge Support Technology
              </p>
            </motion.div>
          </div>

          {/* Floating specs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Height', value: '12"' },
              { label: 'Firmness', value: 'Medium-Firm' },
              { label: 'Warranty', value: '15 Years' },
              { label: 'Trial', value: '100 Nights' },
            ].map((spec, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d28db9]/20 text-center"
              >
                <p
                  className="text-3xl text-[#570f46] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {spec.value}
                </p>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {spec.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
