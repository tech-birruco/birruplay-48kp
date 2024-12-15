import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-1.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-2.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-3.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-4.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-8.png',
  'https://tourmate.id/birruplay/wp-content/uploads/2024/12/48KP-9.png'
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-[1080px] mx-auto aspect-square overflow-hidden rounded-xl">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute w-full h-full transition-transform duration-500 ease-out ${
            index === current ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <img
            src={src}
            alt={`Product ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}