import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#570f46] to-[#d28db9] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-3xl mb-4 cursor-pointer"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Casa Bali
            </motion.h3>
            <p
              className="text-white/80 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Redefining luxury sleep, one night at a time.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop
            </h4>
            <ul
              className="space-y-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {[
                'Mattresses',
                'Pillows',
                'Bedding',
                'Accessories',
                'Gift Cards',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-white/80 hover:text-white transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Support
            </h4>
            <ul
              className="space-y-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {[
                'Contact Us',
                'FAQ',
                'Shipping Info',
                'Returns',
                'Warranty',
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-white/80 hover:text-white transition-colors inline-block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stay Connected
            </h4>
            <p
              className="text-white/80 mb-4 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Subscribe for exclusive offers and sleep tips
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-[#570f46] rounded-full hover:bg-white/90 transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Join
              </motion.button>
            </div>

            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  +383 49 101 028
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>
                  info@casabali.eu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p
                className="text-white/60 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {`© ${new Date().getFullYear()} Casa Bali. All rights reserved.`}
              </p>
              <p className="text-white/60 text-sl">
                Powered by: <u>cre8clarity</u>.
              </p>
            </div>
            <div
              className="flex gap-6 text-sm text-white/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <motion.a
                whileHover={{ color: 'rgba(255,255,255,1)' }}
                href="#privacy"
                className="transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: 'rgba(255,255,255,1)' }}
                href="#terms"
                className="transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/10 rounded-full"
        />
      </div>
    </footer>
  );
}
