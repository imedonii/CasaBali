'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowLeft,
  Heart,
  Leaf,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  ChevronUp,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const craftsmanshipRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Parallax for hero
  const { scrollY: heroScrollY } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScrollY, [0, 1], [0, 200]);

  // Parallax for craftsmanship
  const { scrollY: craftScrollY } = useScroll({
    target: craftsmanshipRef,
    offset: ['start end', 'end start'],
  });
  const craftY = useTransform(craftScrollY, [0, 1], [-100, 100]);

  // Parallax for lifestyle
  const { scrollY: lifestyleScrollY } = useScroll({
    target: lifestyleRef,
    offset: ['start end', 'end start'],
  });
  const lifestyleY = useTransform(lifestyleScrollY, [0, 1], [-50, 50]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden py-20 md:py-32"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#570f46]/5 via-[#d28db9]/10 to-transparent" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#d28db9]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#570f46]/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl text-[#570f46] mb-6">
              Sleep Is Sacred
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            At Casa Bali, we believe every night is an opportunity for renewal.
            We craft mattresses that honor the sanctity of sleep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-[#570f46]/10 to-[#d28db9]/10 rounded-full border border-[#d28db9]/30"
          >
            <span className="text-[#570f46] font-medium">Our Story</span>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#570f46]/5 rounded-full -z-10" />
              <h2 className="text-4xl text-[#570f46] mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To transform the way the world sleeps by creating mattresses
                that blend premium comfort, timeless design, and mindful
                craftsmanship.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every Casa Bali mattress is more than a product—it's a promise
                of better mornings, clearer minds, and rejuvenated spirits.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#d28db9]/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#570f46]" />
                </div>
                <span className="text-sm text-gray-600 italic">
                  Crafted with care, designed with love
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#d28db9]/10 rounded-full -z-10" />
              <h2 className="text-4xl text-[#570f46] mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We envision a world where quality sleep is accessible, where
                every bedroom becomes a sanctuary, and where rest is valued as
                the foundation of well-being.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through innovation and integrity, we aspire to be the trusted
                choice for those who refuse to compromise on comfort.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#570f46]/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#570f46]" />
                </div>
                <span className="text-sm text-gray-600 italic">
                  Dreaming of a well-rested world
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Casa Bali Story */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#570f46]/5 via-transparent to-[#d28db9]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">Where It All Began</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#570f46] to-[#d28db9] mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1585785446573-218a2661e29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdHJvcGljYWwlMjBuYXR1cmV8ZW58MXx8fHwxNzY3NjA3MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bali inspiration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                Casa Bali was born from a transformative journey to Bali,
                Indonesia. Our founder, exhausted from years of restless nights,
                discovered the island's philosophy of mindful living and deep,
                intentional rest.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Inspired by the island's serene mornings, lush landscapes, and
                commitment to natural harmony, Casa Bali was created to bring
                that same sense of peace to bedrooms worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed italic text-[#570f46]">
                "Sleep isn't just rest—it's the foundation of how we show up in
                the world."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Founder, Casa Bali</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy of Better Sleep */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">
              Our Sleep Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that better sleep starts with intention, quality, and
              care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Mindful Comfort',
                description:
                  "Every material is chosen for its ability to support your body's natural alignment and promote deep, restorative rest.",
              },
              {
                icon: Leaf,
                title: 'Natural Harmony',
                description:
                  'We prioritize organic, sustainable materials that work in harmony with your body and the environment.',
              },
              {
                icon: Sparkles,
                title: 'Intentional Design',
                description:
                  'Every stitch, layer, and contour is thoughtfully designed to elevate your sleep experience.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#d28db9]/20 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#570f46]" />
                </div>
                <h3 className="text-2xl text-[#570f46] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship & Materials */}
      <section
        ref={craftsmanshipRef}
        className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl text-[#570f46] mb-6">
                Craftsmanship & Materials
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Each Casa Bali mattress is crafted with meticulous attention to
                detail. We source premium materials from trusted suppliers and
                employ skilled artisans who understand the art of sleep.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-[#570f46]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#570f46] mb-1">
                      Premium Materials
                    </h4>
                    <p className="text-gray-600">
                      Organic cotton, natural latex, and CertiPUR-US® certified
                      foams
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-[#570f46]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#570f46] mb-1">
                      Expert Craftsmanship
                    </h4>
                    <p className="text-gray-600">
                      Handcrafted by skilled artisans with decades of experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="w-5 h-5 text-[#570f46]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#570f46] mb-1">
                      Sustainable Sourcing
                    </h4>
                    <p className="text-gray-600">
                      Responsibly sourced materials that honor the planet
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: craftY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1711006777187-2c991e1b90b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRzbWFuc2hpcCUyMGhhbmRzfGVufDF8fHx8MTc2NzU3OTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Craftsmanship"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#570f46]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Meets Comfort */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-2 md:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1665764045207-a0f035401210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYWJyaWMlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NzYwNzE0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury fabric"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#d28db9]/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-5xl text-[#570f46] mb-6">
                Where Design Meets Comfort
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Casa Bali mattress is a work of art. From the elegant quilted
                cover to the precision-engineered comfort layers, every detail
                is designed to delight.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                But beauty means nothing without function. That's why our
                mattresses are engineered with cutting-edge sleep science to
                provide the perfect balance of support and softness.
              </p>
              <div className="bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/5 rounded-2xl p-6 border border-[#d28db9]/20">
                <p className="text-[#570f46] italic">
                  "We don't choose between form and function. With Casa Bali,
                  you get both—effortlessly."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability & Responsibility */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#570f46]/5 via-[#d28db9]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="  text-5xl text-[#570f46] mb-6">
              Sustainability & Responsibility
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe luxury and sustainability can—and should—coexist.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1767281075773-fa18ad63ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hdGVyaWFscyUyMG5hdHVyYWx8ZW58MXx8fHwxNzY3NjA3MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainable materials"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="  text-2xl mb-2">Eco-Friendly Materials</h3>
                <p className="text-sm text-white/90">
                  Organic, renewable, and responsibly sourced
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#d28db9]/20"
            >
              <h3 className="  text-2xl text-[#570f46] mb-6">
                Our Commitments
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-[#570f46]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#570f46]">
                      Carbon Neutral Shipping
                    </p>
                    <p className="text-sm text-gray-600">
                      Offset emissions on every delivery
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-[#570f46]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#570f46]">
                      Recyclable Packaging
                    </p>
                    <p className="text-sm text-gray-600">
                      100% recyclable and biodegradable
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-[#570f46]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#570f46]">
                      Mattress Recycling Program
                    </p>
                    <p className="text-sm text-gray-600">
                      We'll recycle your old mattress for free
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Leaf className="w-4 h-4 text-[#570f46]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#570f46]">
                      Ethical Manufacturing
                    </p>
                    <p className="text-sm text-gray-600">
                      Fair wages and safe working conditions
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Care About Sleep */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="  text-5xl text-[#570f46] mb-8">
              Why We Care About Sleep
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sleep is the foundation of everything we do. It fuels our
                creativity, strengthens our relationships, and gives us the
                energy to pursue our dreams.
              </p>
              <p>
                Yet, in a world that glorifies busyness, sleep is often the
                first thing we sacrifice. At Casa Bali, we're on a mission to
                change that.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 rounded-3xl p-8 md:p-12 my-12 border border-[#d28db9]/30"
              >
                <p className="text-2xl md:text-3xl   text-[#570f46] italic">
                  "When you sleep better, you live better."
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  — The Casa Bali Promise
                </p>
              </motion.div>
              <p>
                We don't just sell mattresses. We champion the importance of
                rest, advocate for self-care, and celebrate the transformative
                power of a good night's sleep.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#570f46] to-[#d28db9] text-white relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="  text-4xl md:text-6xl mb-6">
              Ready to Transform Your Sleep?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Experience the Casa Bali difference. Discover mattresses crafted
              with care, designed with intention, and made for your best night's
              sleep.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#570f46] rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all"
            >
              Discover Our Mattresses
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Lifestyle Imagery with Parallax */}
      <section
        ref={lifestyleRef}
        className="relative py-20 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="  text-5xl text-[#570f46] mb-6">
              The Casa Bali Lifestyle
            </h2>
            <p className="text-xl text-gray-600">
              Moments of peace, comfort, and renewal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              style={{ y: lifestyleY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1762199904138-d163fe89540a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGJlZHJvb20lMjBtb3JuaW5nfGVufDF8fHx8MTc2NzYwNzE0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Peaceful bedroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="  text-3xl mb-2">Peaceful Mornings</h3>
                <p className="text-white/90">Wake up refreshed and ready</p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: useTransform(lifestyleY, [0, 100], [0, -50]) }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1764192114257-ae9ecf97eb6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kZnVsJTIwbWVkaXRhdGlvbiUyMGNhbG18ZW58MXx8fHwxNzY3NjA3MTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mindful rest"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#d28db9]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="  text-3xl mb-2">Mindful Rest</h3>
                <p className="text-white/90">Find your sanctuary</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#570f46] text-white rounded-full shadow-lg hover:bg-[#d28db9] transition-all flex items-center justify-center"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
