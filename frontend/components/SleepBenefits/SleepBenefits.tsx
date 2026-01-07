import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Smile, Battery, TrendingUp } from 'lucide-react';

export default function SleepBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const benefits = [
    {
      icon: Brain,
      title: 'Enhanced Focus',
      stat: '40%',
      description: 'Better cognitive performance and memory',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Smile,
      title: 'Improved Mood',
      stat: '60%',
      description: 'Reduced stress and increased happiness',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Battery,
      title: 'More Energy',
      stat: '75%',
      description: 'Feel recharged and ready for the day',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: TrendingUp,
      title: 'Better Health',
      stat: '50%',
      description: 'Strengthened immune system and recovery',
      color: 'from-green-400 to-green-600',
    },
  ];

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
          <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
            The Benefits of
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Better Sleep
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality sleep transforms every aspect of your life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="p-8 bg-white rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                {/* Icon with gradient background */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Stat */}
                <motion.p
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, type: 'spring' }}
                  className="text-5xl text-[#570f46] mb-3"
                >
                  {benefit.stat}
                </motion.p>

                {/* Title */}
                <h3 className="text-2xl text-[#570f46] mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 flex-grow">{benefit.description}</p>

                {/* Decorative gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/5 rounded-3xl border border-[#d28db9]/20 text-center"
        >
          <p className="text-lg text-gray-700">
            <span className="text-[#570f46]">Studies show</span> that quality
            sleep on a premium mattress can improve these metrics significantly
            within just 30 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
