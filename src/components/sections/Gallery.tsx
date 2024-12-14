import React from 'react';
import Carousel from '../Carousel';

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Galeri Produk</h2>
        <Carousel />
      </div>
    </section>
  );
}