import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-1.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-2.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-3.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-4.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-8.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-9.png'
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Galeri Produk
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Selected product"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}