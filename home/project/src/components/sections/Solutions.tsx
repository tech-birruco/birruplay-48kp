import React from 'react';
import { BookOpen, Users, Video, Sparkles, Star } from 'lucide-react';

const solutions = [
  {
    icon: <BookOpen className="w-12 h-12 text-primary-500" />,
    title: 'Metode Pembelajaran Terstruktur',
    description: 'Dikembangkan khusus oleh Speech and Language Therapist dengan pendekatan berbasis Islam untuk hasil optimal.',
    highlight: 'Mudah Diikuti'
  },
  {
    icon: <Users className="w-12 h-12 text-secondary-500" />,
    title: 'Visual yang Representatif',
    description: 'Ilustrasi yang dirancang khusus untuk memudahkan anak memahami dan mengingat kosakata baru.',
    highlight: 'Menarik untuk Anak'
  },
  {
    icon: <Video className="w-12 h-12 text-accent-500" />,
    title: 'Panduan Lengkap untuk Orang Tua',
    description: 'Termasuk video tutorial dan guideline penggunaan untuk memaksimalkan manfaat buku.',
    highlight: 'Praktis & Fleksibel'
  }
];

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Solusi Tepat untuk Perkembangan Bahasa Anak</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Metode pembelajaran yang menyenangkan dan efektif untuk mendukung perkembangan bahasa anak Anda
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="absolute -top-3 right-4 bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-medium">
                {solution.highlight}
              </div>
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{solution.description}</p>
              <div className="mt-6 flex justify-center">
                <Sparkles className="w-5 h-5 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}