import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Emily Chen',
      location: 'San Francisco, CA',
      rating: 5,
      text: "Casa Bali has completely transformed my sleep. I wake up feeling refreshed and pain-free. Best investment I've ever made!",
      date: 'December 2024',
    },
    {
      name: 'Michael Rodriguez',
      location: 'Austin, TX',
      rating: 5,
      text: 'The cooling technology is a game-changer. No more waking up hot in the middle of the night. Absolutely love it!',
      date: 'November 2024',
    },
    {
      name: 'Jessica Thompson',
      location: 'New York, NY',
      rating: 5,
      text: 'My partner and I have different firmness preferences, but Casa Bali works for both of us. The quality is unmatched.',
      date: 'January 2025',
    },
    {
      name: 'David Park',
      location: 'Seattle, WA',
      rating: 5,
      text: "I was skeptical about buying a mattress online, but the 100-night trial convinced me. Now I can't imagine sleeping on anything else.",
      date: 'December 2024',
    },
    {
      name: 'Amanda Williams',
      location: 'Miami, FL',
      rating: 5,
      text: "The luxury feel is incredible. It's like sleeping in a 5-star hotel every night. Worth every penny!",
      date: 'November 2024',
    },
    {
      name: 'Robert Kim',
      location: 'Portland, OR',
      rating: 5,
      text: 'Zero motion transfer is real! My restless partner no longer wakes me up. We both sleep better now.',
      date: 'January 2025',
    },
  ];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-32 px-6 bg-gradient-to-b from-purple-50/30 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-yellow-200 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span
              className="text-sm text-[#570f46]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              10,000+ Happy Sleepers
            </span>
          </div>

          <h2
            className="text-5xl md:text-6xl text-[#570f46] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Loved by
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Real reviews from real customers who've transformed their sleep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-3xl border border-[#d28db9]/20 hover:border-[#d28db9]/50 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[#d28db9]/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-gray-700 mb-6 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="pt-4 border-t border-[#d28db9]/10">
                <p
                  className="text-[#570f46]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {testimonial.location}
                </p>
                <p
                  className="text-xs text-gray-400 mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {testimonial.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-[#570f46]/5 to-[#d28db9]/5 rounded-3xl text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 text-yellow-500 fill-yellow-500"
              />
            ))}
          </div>
          <p
            className="text-4xl text-[#570f46] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            4.9 out of 5
          </p>
          <p
            className="text-gray-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Based on 10,247 verified reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
