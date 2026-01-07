import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Shield, Leaf, Star, Truck, Heart } from 'lucide-react';

export default function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description:
        'Recognized by sleep experts and design publications worldwide',
    },
    {
      icon: Shield,
      title: 'Certified Materials',
      description: 'CertiPUR-US® certified foams, free from harmful chemicals',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Sustainable materials and carbon-neutral shipping',
    },
    {
      icon: Star,
      title: '5-Star Reviews',
      description: "Thousands of happy sleepers can't be wrong",
    },
    {
      icon: Truck,
      title: 'Free White Glove',
      description: 'Complimentary delivery, setup, and old mattress removal',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each mattress is crafted by skilled artisans who care',
    },
  ];

  return (
    <section
      ref={ref}
      id="why"
      className="py-32 px-6 bg-gradient-to-br from-[#570f46]/5 via-white to-[#d28db9]/5"
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
            Why Casa Bali is
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We don't just sell mattresses—we deliver an elevated sleep
            experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 flex items-center justify-center mb-6 group-hover:from-[#570f46]/20 group-hover:to-[#d28db9]/20 transition-all"
              >
                <feature.icon className="w-8 h-8 text-[#570f46]" />
              </motion.div>

              <h3
                className="text-2xl text-[#570f46] mb-3"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
