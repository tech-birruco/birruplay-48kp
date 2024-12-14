import React from 'react';
import { AlertCircle, Heart, Brain, Frown } from 'lucide-react';

const problems = [
  {
    icon: <Frown className="w-12 h-12 text-accent-400" />,
    title: 'Kesulitan Mengungkapkan Keinginan',
    description: '90% orang tua mengalami kesulitan memahami apa yang diinginkan anak mereka, menyebabkan frustasi dan tantrum.'
  },
  {
    icon: <Brain className="w-12 h-12 text-primary-400" />,
    title: 'Perkembangan Bahasa Tertinggal',
    description: '7 dari 10 anak mengalami keterlambatan dalam mencapai milestone bahasa mereka, mempengaruhi kepercayaan diri dan kemampuan sosialisasi.'
  },
  {
    icon: <Heart className="w-12 h-12 text-secondary-400" />,
    title: 'Kurangnya Stimulasi yang Tepat',
    description: '85% orang tua merasa kesulitan memberikan stimulasi bahasa yang tepat untuk anak mereka di rumah.'
  }
];

export default function Problems() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Apakah Anak Anda Mengalami Ini?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Kenali tanda-tanda ini sebelum terlambat dan berikan solusi terbaik untuk buah hati tercinta
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
      </div>
    </section>
  );
}