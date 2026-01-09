import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Truck, Home, Smile } from 'lucide-react';

export default function DeliveryExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      icon: Package,
      title: 'Expertly Packaged',
      description:
        'Your mattress is compressed and rolled in a compact box for easy delivery',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description:
        'We deliver to your doorstep at no extra cost, anywhere in the US',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Home,
      title: 'Easy Setup',
      description: 'Unbox, unroll, and watch your mattress expand in minutes',
      color: 'from-pink-400 to-pink-600',
    },
    {
      icon: Smile,
      title: 'Sleep Tonight',
      description:
        'Ready to use the same day—start enjoying better sleep immediately',
      color: 'from-green-400 to-green-600',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"
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
            Delivery &
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Unboxing Experience
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From our warehouse to your bedroom—effortless and exciting
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#570f46]/20 via-[#d28db9]/20 to-[#570f46]/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Step number */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-8 h-8 rounded-full bg-white border-2 border-[#d28db9] flex items-center justify-center z-20">
                    <span
                      className="text-sm text-[#570f46]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-white rounded-2xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 hover:shadow-lg transition-all">
                    <h3
                      className="text-xl text-[#570f46] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-600 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'White Glove Service',
              description:
                'Optional professional setup and old mattress removal',
            },
            {
              title: 'Tracking Updates',
              description: 'Real-time notifications from warehouse to doorstep',
            },
            {
              title: 'Eco Packaging',
              description: 'Recyclable materials that are kind to the planet',
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d28db9]/20 text-center"
            >
              <p
                className="text-lg text-[#570f46] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {benefit.title}
              </p>
              <p
                className="text-sm text-gray-600"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
