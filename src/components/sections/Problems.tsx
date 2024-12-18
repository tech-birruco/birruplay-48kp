import React from 'react';
import { AlertCircle, Heart, Brain } from 'lucide-react';

const problems = [
  {
    icon: <AlertCircle className="w-12 h-12 text-accent-400" />,
    title: 'Kesulitan Mengajarkan Komunikasi',
    description: '78% orang tua mengalami kesulitan mengajarkan komunikasi pada anak.'
  },
  {
    icon: <Brain className="w-12 h-12 text-primary-400" />,
    title: 'Speech Delay',
    description: '1 dari 5 anak mengalami speech delay, mempengaruhi kepercayaan diri dan kemampuan komunikasi.'
  },
  {
    icon: <Heart className="w-12 h-12 text-secondary-400" />,
    title: 'Kesulitan Belajar',
    description: '1 dari 3 anak kesulitan dalam belajar, mempengaruhi kemampuan akademis dan sosial.'
  }
];

export default function Problems() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Fakta</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Banyak Ayah Bunda Yang Mengalami Hal Serupa?
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg font-medium text-gray-700 mt-12">
          Selamat! Ayah Bunda sudah mengusahakan yang terbaik dan sampai di halaman ini
        </p>
      </div>
    </section>
  );
}