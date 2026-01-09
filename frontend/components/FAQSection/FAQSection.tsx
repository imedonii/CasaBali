import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer:
        "We offer free shipping to all 50 states. Most orders arrive within 3-7 business days. You'll receive tracking information as soon as your mattress ships.",
    },
    {
      question: "What if I don't like my mattress?",
      answer:
        "We offer a 100-night sleep trial. If you're not completely satisfied, contact us and we'll arrange a free pickup and full refund. It's that simple—no questions asked.",
    },
    {
      question: 'How long does it take to expand?',
      answer:
        "Your Casa Bali mattress will expand to 90% of its full size within 4-6 hours. We recommend waiting 24 hours before sleeping on it for optimal comfort, though it's safe to use immediately.",
    },
    {
      question: 'Is Casa Bali good for back pain?',
      answer:
        'Yes! Our mattress is designed with targeted pressure relief and spinal alignment in mind. Many customers report significant improvement in back pain after switching to Casa Bali.',
    },
    {
      question: 'What sizes are available?',
      answer:
        'Casa Bali is available in Twin, Twin XL, Full, Queen, King, and California King sizes. All sizes come with the same premium materials and features.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        'Yes! We offer flexible financing options with 0% APR for qualified customers. You can pay over 12, 24, or 36 months. Apply at checkout.',
    },
    {
      question: 'How do I clean my mattress?',
      answer:
        'Spot clean any stains with mild detergent and water. We also recommend using a mattress protector to keep your Casa Bali fresh. The cover is not removable.',
    },
    {
      question: "What's included in the warranty?",
      answer:
        'Our 15-year warranty covers defects in materials and workmanship, including sagging greater than 1.5 inches, broken zippers, and foam deterioration. Normal wear and tear is not covered.',
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 px-6 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="max-w-4xl mx-auto">
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
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Everything you need to know about Casa Bali
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#d28db9]/20 shadow-xl p-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-[#d28db9]/20 rounded-2xl px-6 hover:border-[#d28db9]/50 transition-all"
                >
                  <AccordionTrigger
                    className="text-left hover:no-underline"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    <span className="text-lg text-[#570f46]">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p
            className="text-gray-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[#570f46] to-[#d28db9] text-white rounded-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact Our Sleep Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
