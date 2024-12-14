import React from 'react';

const faqs = [
  {
    question: 'Untuk usia berapa buku ini cocok digunakan?',
    answer: 'Buku ini dirancang khusus untuk anak usia 1-4 tahun yang sedang dalam tahap perkembangan bahasa pertama.'
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk melihat hasil?',
    answer: 'Dengan penggunaan rutin sesuai panduan, mayoritas orang tua melaporkan peningkatan signifikan dalam 2-4 minggu pertama.'
  },
  {
    question: 'Apakah ada garansi untuk produk ini?',
    answer: 'Ya, kami memberikan garansi 30 hari uang kembali jika Anda tidak puas dengan produk kami.'
  },
  {
    question: 'Bagaimana cara menggunakan buku ini dengan efektif?',
    answer: 'Setiap buku dilengkapi dengan panduan lengkap dan video tutorial yang akan memandu Anda langkah demi langkah.'
  }
];

export default function FAQ() {
  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}