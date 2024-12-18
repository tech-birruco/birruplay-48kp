import React from 'react';
import { AlertTriangle, MessageCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: <AlertTriangle className="w-12 h-12 text-rose-400" />,
    title: "Tantrum & Kesulitan Komunikasi",
    description: "Anak sering menangis atau tantrum karena kesulitan menyampaikan keinginannya?",
    bgColor: "bg-rose-50",
    hoverColor: "hover:bg-rose-100",
    iconBg: "bg-rose-100"
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
    title: "Komunikasi Non-Verbal",
    description: "Anak hanya menunjuk atau menggunakan isyarat tanpa kata-kata?",
    bgColor: "bg-blue-50",
    hoverColor: "hover:bg-blue-100",
    iconBg: "bg-blue-100"
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-purple-400" />,
    title: "Bimbang Mengajarkan",
    description: 'Ingin anak bisa berkata "mau makan", "aku mau main", tapi bingung cara mengajarkannya?',
    bgColor: "bg-purple-50",
    hoverColor: "hover:bg-purple-100",
    iconBg: "bg-purple-100"
  }
];

export default function CardMasalah() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Apakah Ayah Bunda Mengalami Ini Pada Anak?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className={`${problem.bgColor} ${problem.hoverColor} p-8 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer`}
            >
              <div className={`${problem.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-lg font-medium text-white bg-primary-500 px-6 py-3 rounded-full inline-block mt-8 hover:bg-primary-600 transition-colors duration-300"
        >
          Jika ya, Ayah Bunda tidak sendirian
        </motion.p>
      </div>
    </section>
  );
}