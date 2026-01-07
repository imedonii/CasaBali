import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#d28db9]/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#d28db9]" />
          <span
            className="text-sm text-[#570f46]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What is Casa Bali?
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl text-[#570f46] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Where Luxury Meets
          <br />
          <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
            Perfect Sleep
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Casa Bali isn't just a mattress—it's an experience. Crafted with
          premium materials and cutting-edge sleep technology, we've created a
          sanctuary for your nightly rest. Every detail is designed to cradle
          you in comfort, so you wake up refreshed and ready to embrace the day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Handcrafted',
              description:
                'Each mattress is carefully assembled with attention to every stitch',
            },
            {
              title: 'Premium Materials',
              description:
                'Only the finest fabrics and foam technology make the cut',
            },
            {
              title: 'Sleep Science',
              description:
                'Backed by research and sleep expert recommendations',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 transition-all hover:shadow-xl"
            >
              <h3
                className="text-2xl text-[#570f46] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
