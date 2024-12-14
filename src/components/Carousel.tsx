import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=1200',
  'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200'
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
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
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
            className="w-full h-full object-cover"
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