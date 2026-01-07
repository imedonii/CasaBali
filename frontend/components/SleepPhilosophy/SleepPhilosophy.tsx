import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Moon, Heart, Zap } from 'lucide-react';

export default function SleepPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-br from-[#570f46]/5 via-white to-[#d28db9]/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwbWluaW1hbHxlbnwxfHx8fDE3Njc1ODUyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury bedroom"
                className="w-full h-auto"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="text-2xl text-[#570f46]">8+ hrs</p>
                <p className="text-sm text-gray-600">Perfect sleep</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-[#d28db9] mb-4"
              >
                Our Philosophy
              </motion.p>

              <h2 className="text-5xl text-[#570f46] mb-6">Sleep is Sacred</h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe that quality sleep is the foundation of a well-lived
                life. That's why every Casa Bali mattress is designed with one
                goal: to give you the most restorative, peaceful night's sleep
                you've ever experienced.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Moon,
                  title: 'Deep Rest',
                  description:
                    'Experience uninterrupted sleep cycles for true restoration',
                },
                {
                  icon: Heart,
                  title: 'Body Harmony',
                  description:
                    'Perfect alignment and pressure relief for every position',
                },
                {
                  icon: Zap,
                  title: 'Morning Energy',
                  description:
                    'Wake up refreshed and ready to conquer your day',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  className="flex gap-4 items-start p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 transition-all"
                >
                  <div className="p-3 bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 rounded-xl">
                    <item.icon className="w-6 h-6 text-[#570f46]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#570f46] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
