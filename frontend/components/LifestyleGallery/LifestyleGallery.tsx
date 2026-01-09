import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function LifestyleGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1744974256549-8ece7cdb5dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMHdoaXRlfGVufDF8fHx8MTc2NzYwNTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Minimalist Serenity',
      span: 'lg:col-span-2 lg:row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1564019471158-2863de84eaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkJTIwdGV4dHVyZXxlbnwxfHx8fDE3Njc2MDU5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cozy Textures',
      span: 'lg:col-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1743748978909-169017ab0720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcGluZyUyMHBlYWNlZnVsJTIwYmVkfGVufDF8fHx8MTc2NzYwNTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Peaceful Rest',
      span: 'lg:col-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1602810372187-76337cedc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBjYWxtfGVufDF8fHx8MTc2NzYwNTk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Living',
      span: 'lg:col-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1574790413799-c2a5a4ba4d02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMG1vcm5pbmd8ZW58MXx8fHwxNzY3NjA1OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Morning Light',
      span: 'lg:col-span-1',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
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
            Lifestyle
            <br />
            <span className="bg-gradient-to-r from-[#570f46] to-[#d28db9] bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See how Casa Bali fits into your dream bedroom
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all ${image.span}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#570f46]/80 via-[#570f46]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3
                      className="text-2xl text-white mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {image.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#d28db9]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram-style call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p
            className="text-gray-600 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Share your Casa Bali bedroom
          </p>
          <p
            className="text-2xl text-[#570f46]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            #CasaBaliLife
          </p>
        </motion.div>
      </div>
    </section>
  );
}
