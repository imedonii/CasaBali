import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Snowflake, Thermometer, Wind } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function CoolingTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6"
              >
                <Snowflake className="w-4 h-4 text-blue-600" />
                <span
                  className="text-sm text-blue-700"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Temperature Control
                </span>
              </motion.div>

              <h2
                className="text-5xl md:text-6xl text-[#570f46] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Stay Cool
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  All Night Long
                </span>
              </h2>

              <p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Our advanced cooling technology regulates temperature throughout
                the night, ensuring you never wake up too hot or too cold. Sleep
                at your ideal temperature, every single night.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Snowflake,
                  title: 'Gel-Infused Memory Foam',
                  description:
                    'Heat-dispersing gel beads pull warmth away from your body',
                },
                {
                  icon: Wind,
                  title: 'Breathable Channels',
                  description:
                    'Strategic airflow pathways keep air circulating',
                },
                {
                  icon: Thermometer,
                  title: 'Phase-Change Material',
                  description: 'Actively absorbs and releases heat as needed',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className="flex gap-4 items-start p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 hover:border-blue-300 transition-all"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3
                      className="text-xl text-[#570f46] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-600"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Temperature gauge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Too Hot
                </span>
                <span
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Too Cold
                </span>
              </div>
              <div className="relative h-3 bg-gradient-to-r from-red-300 via-green-300 to-blue-300 rounded-full">
                <motion.div
                  initial={{ left: '50%' }}
                  animate={{ left: '50%' }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-green-500 shadow-lg"
                />
              </div>
              <p
                className="text-center text-sm text-green-600 mt-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Perfect Temperature Zone
              </p>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1574790413799-c2a5a4ba4d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMG1vcm5pbmd8ZW58MXx8fHwxNzY3NjA1OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cozy bedroom morning"
                className="w-full h-auto"
              />

              {/* Floating temperature indicator */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Snowflake className="w-8 h-8 text-blue-500" />
                  <div>
                    <p
                      className="text-2xl text-blue-600"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      68°F
                    </p>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Optimal Sleep Temp
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
