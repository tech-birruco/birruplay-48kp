import React from 'react';
import { MessageSquare, Puzzle, Book, Brain, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Mengungkapkan Keinginan",
    description: "Mengungkapkan keinginannya dengan kalimat sederhana.",
    color: "from-rose-400 to-rose-500",
    shadowColor: "shadow-rose-200"
  },
  {
    icon: <Puzzle className="w-10 h-10" />,
    title: "Menyusun Kalimat",
    description: "Menyusun kalimat yang terdiri dari subjek, kata kerja, dan objek.",
    color: "from-blue-400 to-blue-500",
    shadowColor: "shadow-blue-200"
  },
  {
    icon: <Book className="w-10 h-10" />,
    title: "Penggunaan Kata",
    description: "Menggunakan kata benda, kerja, dan kata sifat.",
    color: "from-purple-400 to-purple-500",
    shadowColor: "shadow-purple-200"
  },
  {
    icon: <Brain className="w-10 h-10" />,
    title: "Pemahaman Konteks",
    description: 'Memahami dan menggunakan kata "mau" dan "aku" dalam konteks yang sesuai.',
    color: "from-green-400 to-green-500",
    shadowColor: "shadow-green-200"
  },
  {
    icon: <Star className="w-10 h-10" />,
    title: "Peningkatan Kemampuan",
    description: "Meningkatkan kemampuan bahasa reseptif dan ekspresif 1 sd 3 kata.",
    color: "from-amber-400 to-amber-500",
    shadowColor: "shadow-amber-200"
  }
];

export default function Benefit() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Dengan Buku Ini, Ayah Bunda Dapat Membantu Anak:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl shadow-lg ${benefit.shadowColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className={`bg-gradient-to-r ${benefit.color} p-6 h-full`}>
                <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-6 -translate-y-6">
                  <div className="w-full h-full bg-white/10 rounded-full" />
                </div>
                <div className="relative z-10">
                  <div className="bg-white/20 rounded-xl p-3 w-fit mb-4">
                    {React.cloneElement(benefit.icon, { className: benefit.icon.props.className + " text-white" })}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}