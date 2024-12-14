import React from 'react';
import { Quote, Star, Heart } from 'lucide-react';

const testimonials = [
  {
    quote: "Setelah 2 minggu menggunakan buku Birru Play, anak saya sudah bisa mengungkapkan keinginannya dengan lebih jelas. Tantrumnya berkurang drastis!",
    author: "Ibu Sarah",
    location: "Jakarta",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
  },
  {
    quote: "Buku yang luar biasa! Pendekatan Islaminya sangat sesuai dengan nilai-nilai yang ingin kami tanamkan pada anak.",
    author: "Ibu Fatima",
    location: "Bandung",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200"
  },
  {
    quote: "Panduan videonya sangat membantu saya menerapkan metode pembelajaran yang tepat. Anak jadi lebih percaya diri berbicara.",
    author: "Ibu Aisyah",
    location: "Surabaya",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cerita Sukses Ibu-ibu Hebat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan ibu yang telah merasakan manfaat Birru Play
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <Quote className="w-8 h-8 text-primary-300 mb-4 group-hover:text-primary-500 transition-colors duration-300" />
              <p className="text-gray-700 leading-relaxed mb-4">{testimonial.quote}</p>
              <Heart className="w-5 h-5 text-accent-400 ml-auto transform group-hover:scale-110 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}