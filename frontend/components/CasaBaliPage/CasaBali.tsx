'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowLeft,
  ChevronUp,
  Moon,
  Shield,
  Wind,
  Snowflake,
  Layers,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

export default function DiscoverCasaBali() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);

  // Parallax effects
  const { scrollY: heroScrollY } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScrollY, [0, 1], [0, 150]);

  const { scrollY: galleryScrollY } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });
  const galleryY = useTransform(galleryScrollY, [0, 1], [-50, 50]);

  const { scrollY: lifestyleScrollY } = useScroll({
    target: lifestyleRef,
    offset: ['start end', 'end start'],
  });
  const lifestyleY = useTransform(lifestyleScrollY, [0, 1], [-30, 30]);

  // Gallery images
  const galleryImages = [
    'https://images.unsplash.com/photo-1633369918397-ea852fe4e091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwbW9ybmluZyUyMGxpZ2h0fGVufDF8fHx8MTc2NzYwODAxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1691703011149-5fc5a062319d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXR0cmVzcyUyMGNsb3NldXB8ZW58MXx8fHwxNzY3NjA4MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621215052063-6ed29c948b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVkcm9vbSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3Njc2MDgwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1744974256549-8ece7cdb5dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHdoaXRlfGVufDF8fHx8MTc2NzYwNTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGRlY29yfGVufDF8fHx8MTc2NzU0MDUwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1622479130009-feda8f2767bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcGluZyUyMHBlYWNlZnVsJTIwd29tYW58ZW58MXx8fHwxNzY3NjA4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const layers = [
    {
      name: 'Premium Quilted Cover',
      desc: 'Soft, breathable organic cotton',
      color: '#d28db9',
    },
    {
      name: 'Cooling Gel Layer',
      desc: 'Temperature-regulating technology',
      color: '#a0d4e8',
    },
    {
      name: 'Memory Foam Comfort',
      desc: 'Pressure-relieving adaptive foam',
      color: '#e8d5c4',
    },
    {
      name: 'Support Core',
      desc: 'High-density base for stability',
      color: '#570f46',
    },
  ];

  const benefits = [
    {
      icon: Moon,
      title: 'Deep, Uninterrupted Sleep',
      desc: 'Fall asleep faster and stay asleep longer',
    },
    {
      icon: Shield,
      title: 'Pressure Relief',
      desc: 'Ergonomic design supports every curve',
    },
    {
      icon: Wind,
      title: 'Motion Isolation',
      desc: 'Sleep undisturbed, even with a partner',
    },
    {
      icon: Snowflake,
      title: 'Cooling Technology',
      desc: 'Stay cool and comfortable all night',
    },
    {
      icon: Star,
      title: 'Long-Lasting Durability',
      desc: '15-year warranty, built to last',
    },
  ];

  const sleepPositions = [
    {
      position: 'Side Sleepers',
      desc: 'Perfect shoulder and hip support',
      emoji: '🌙',
    },
    {
      position: 'Back Sleepers',
      desc: 'Optimal spinal alignment',
      emoji: '⭐',
    },
    {
      position: 'Stomach Sleepers',
      desc: 'Gentle support, no sinking',
      emoji: '☀️',
    },
    {
      position: 'Combo Sleepers',
      desc: 'Adaptive for any position',
      emoji: '✨',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      quote: "Best sleep I've had in years. Worth every penny!",
      rating: 5,
    },
    {
      name: 'Michael T.',
      quote: 'My back pain is gone. This mattress changed my life.',
      rating: 5,
    },
    {
      name: 'Emma L.',
      quote: 'So comfortable and beautifully made. Love it!',
      rating: 5,
    },
  ];

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

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#570f46]/10 via-[#d28db9]/20 to-white" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#d28db9]/30 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#570f46]/20 to-transparent rounded-full blur-3xl"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl text-[#570f46] mb-6">
              Discover Casa Bali
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Where premium comfort meets timeless design.
            <br />
            <span className="text-xl text-gray-600">
              Experience sleep as it was meant to be.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-[#d28db9]/30">
              <span className="text-[#570f46] font-medium">
                100-Night Trial
              </span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-[#d28db9]/30">
              <span className="text-[#570f46] font-medium">Free Shipping</span>
            </div>
            <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-[#d28db9]/30">
              <span className="text-[#570f46] font-medium">
                15-Year Warranty
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Mattress Gallery */}
      <section
        ref={galleryRef}
        className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl text-[#570f46] mb-6">
              The Casa Bali Experience
            </h2>
            <p className="text-xl text-gray-600">
              Visual perfection meets unparalleled comfort
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.slice(0, 6).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Casa Bali Gallery ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mt-40"
          >
            <div className="relative h-[500px] overflow-hidden">
              <AnimatePresence initial={false} custom={slideDirection}>
                <motion.img
                  key={currentSlide}
                  src={galleryImages[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  custom={slideDirection}
                  initial={{ x: slideDirection > 0 ? 1000 : -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: slideDirection > 0 ? -1000 : 1000, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6 text-[#570f46]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            >
              <ChevronRight className="w-6 h-6 text-[#570f46]" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSlideDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 360° Mattress View Concept */}
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
              Explore Every Detail
            </h2>
            <p className="text-xl text-gray-600">
              Hover to discover the layers of comfort
            </p>
          </motion.div>

          <div className="relative bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/10 rounded-3xl p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1609089792573-2ec8b9e263ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR0cmVzcyUyMGxheWVycyUyMGZvYW18ZW58MXx8fHwxNzY3NjA4MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mattress layers"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Layer indicators */}
              <div className="absolute top-0 left-0 right-0 flex justify-around p-6">
                {[0, 1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="w-4 h-4 rounded-full cursor-pointer shadow-lg"
                    style={{ backgroundColor: layers[index].color }}
                    onMouseEnter={() => setActiveLayer(index)}
                    onMouseLeave={() => setActiveLayer(null)}
                  />
                ))}
              </div>

              {/* Layer info tooltip */}
              {activeLayer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 min-w-[300px] border border-[#d28db9]/30"
                >
                  <h4 className="text-xl text-[#570f46] mb-2">
                    {layers[activeLayer].name}
                  </h4>
                  <p className="text-gray-600">{layers[activeLayer].desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comfort Layers Breakdown */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">Layers of Luxury</h2>
            <p className="text-xl text-gray-600">
              Four layers engineered for perfect sleep
            </p>
          </motion.div>

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 cursor-pointer"
                style={{ borderColor: layer.color }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl text-[#570f46] mb-2">
                      Layer {index + 1}: {layer.name}
                    </h3>
                    <p className="text-gray-600">{layer.desc}</p>
                  </div>
                  <Layers
                    className="w-12 h-12"
                    style={{ color: layer.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">Why Casa Bali?</h2>
            <p className="text-xl text-gray-600">
              Five reasons your sleep will never be the same
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-[#d28db9]/20"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#570f46]/10 to-[#d28db9]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-[#570f46]" />
                </div>
                <h3 className="text-2xl text-[#570f46] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Your Body Will Thank You */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#570f46]/5 via-[#d28db9]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">
              Your Body Will Thank You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Casa Bali is designed with your health and well-being in mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Better Posture',
                desc: 'Proper spinal alignment reduces back pain and improves posture over time',
                icon: '🧘',
              },
              {
                title: 'Reduced Stress',
                desc: 'Quality sleep lowers cortisol levels and promotes mental clarity',
                icon: '😌',
              },
              {
                title: 'Enhanced Recovery',
                desc: 'Deep sleep accelerates muscle recovery and cellular regeneration',
                icon: '💪',
              },
              {
                title: 'Increased Energy',
                desc: 'Wake up refreshed with sustained energy throughout the day',
                icon: '⚡',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl text-[#570f46] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect for Every Sleep Position */}
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
              Perfect for Every Sleep Position
            </h2>
            <p className="text-xl text-gray-600">
              However you sleep, Casa Bali adapts to you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {sleepPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white to-pink-50/50 rounded-2xl p-6 shadow-lg text-center border border-[#d28db9]/20"
              >
                <div className="text-6xl mb-4">{position.emoji}</div>
                <h3 className="text-xl text-[#570f46] mb-3">
                  {position.position}
                </h3>
                <p className="text-gray-600 text-sm">{position.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Craftsmanship */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">Premium Materials</h2>
            <p className="text-xl text-gray-600">
              Crafted with care, built to last
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1660070608618-7490a6377929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY290dG9uJTIwZmFicmljfGVufDF8fHx8MTc2NzU4NTI1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Organic fabric"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  title: 'Organic Cotton',
                  desc: 'GOTS-certified organic cotton cover, breathable and sustainable',
                },
                {
                  title: 'Natural Latex',
                  desc: 'Responsibly sourced, hypoallergenic natural latex foam',
                },
                {
                  title: 'CertiPUR-US® Certified',
                  desc: 'Memory foam free from harmful chemicals and toxins',
                },
                {
                  title: 'Premium Construction',
                  desc: 'Hand-tufted details and reinforced edges for durability',
                },
              ].map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#570f46]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-[#570f46]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#570f46] text-lg mb-1">
                      {material.title}
                    </h4>
                    <p className="text-gray-600">{material.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
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
            <h2 className="text-5xl text-[#570f46] mb-6">
              The Morning You Deserve
            </h2>
            <p className="text-xl text-gray-600">
              Wake up to a life transformed by better sleep
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              style={{ y: lifestyleY }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1633369918397-ea852fe4e091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwbW9ybmluZyUyMGxpZ2h0fGVufDF8fHx8MTc2NzYwODAxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Morning light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl mb-2">Peaceful Awakenings</h3>
                <p className="text-white/90">
                  Greet each day with energy and clarity
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ y: useTransform(lifestyleY, [0, 30], [0, -15]) }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, delay: 0.2 }}
                src="https://images.unsplash.com/photo-1622479130009-feda8f2767bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcGluZyUyMHBlYWNlZnVsJTIwd29tYW58ZW58MXx8fHwxNzY3NjA4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Peaceful sleep"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#d28db9]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl mb-2">Restorative Rest</h3>
                <p className="text-white/90">
                  Sleep deeper than you ever imagined
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Snapshot */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#570f46]/5 to-[#d28db9]/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">
              Casa Bali vs Traditional Mattresses
            </h2>
            <p className="text-xl text-gray-600">
              See the difference for yourself
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-[#570f46] to-[#d28db9] text-white">
                <h3 className="text-3xl mb-6">Casa Bali</h3>
                <ul className="space-y-4">
                  {[
                    '4 layers of premium comfort',
                    '15-year warranty',
                    '100-night risk-free trial',
                    'Cooling technology included',
                    'Motion isolation',
                    'Eco-friendly materials',
                    'Free white-glove delivery',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gray-100">
                <h3 className="text-3xl mb-6 text-gray-700">
                  Traditional Mattress
                </h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    'Basic foam layers',
                    '5-10 year warranty',
                    'No trial period',
                    'Extra cost for cooling',
                    'Motion transfer issues',
                    'Synthetic materials',
                    'Self-delivery or extra fees',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <X className="w-5 h-5 flex-shrink-0 text-gray-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
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
            <h2 className="text-4xl md:text-6xl mb-6">
              Experience Casa Bali Sleep
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Your best sleep is just one click away. Try Casa Bali risk-free
              for 100 nights.
              <br />
              <span className="text-lg">
                If you don't love it, we'll pick it up for free.
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-[#570f46] rounded-full text-xl font-medium shadow-2xl hover:shadow-3xl transition-all"
            >
              Shop Casa Bali Mattress
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-[#570f46] mb-6">Loved by Thousands</h2>
            <p className="text-xl text-gray-600">Real people, real results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#d28db9]/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d28db9] text-[#d28db9]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-[#570f46] font-medium">
                  — {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Gallery full view"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
          />
        </motion.div>
      )}

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#570f46] text-white rounded-full shadow-lg hover:bg-[#d28db9] transition-all flex items-center justify-center"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
