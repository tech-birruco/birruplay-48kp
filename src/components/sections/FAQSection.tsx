import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Untuk usia berapa buku Birru Play cocok digunakan?',
    answer: 'Buku kami dirancang khusus untuk anak usia 1+ tahun yang sedang dalam tahap perkembangan atau mengalami masalah perkembangan bahasa bicara seperti speech delay dan masalah komunikasi lainnnya.',
    icon: '👶'
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk melihat progres?',
    answer: 'Dengan penggunaan rutin sesuai panduan, mayoritas Ayah Bunda melaporkan peningkatan signifikan dalam 2-4 minggu pertama.',
    icon: '📈'
  },
  {
    question: 'Bagaimana cara mendapatkan panduannya?',
    answer: 'Panduan lengkap penggunaan buku dan video tutorial akan dikirim setelah pesanan selesai.',
    icon: '📽️'
  },
  {
    question: 'Apakah ada garansi untuk produk Birru Play?',
    answer: 'Ya, kami memberikan garansi 100% uang kembali dalam 14 hari jika Ayah Bunda tidak puas dengan produk kami.',
    icon: '✨'
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Pertanyaan Yang Sering Diajukan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{faq.icon}</span>
                  <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 pb-4 transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}