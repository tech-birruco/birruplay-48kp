import React from 'react';
import CTAButton from '../CTAButton';
import { Heart, Star, Gift, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-accent-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <Heart className="w-8 h-8 text-accent-500 animate-pulse" />
            <Star className="w-8 h-8 text-primary-500" />
            <Sparkles className="w-8 h-8 text-secondary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wujudkan Impian{' '}
            <span className="text-primary-600">Komunikasi yang Lebih Baik</span>{' '}
            dengan Anak Anda!
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Investasi terbaik untuk masa depan komunikasi anak Anda dimulai hari ini
          </p>
          <CTAButton className="bg-primary-500 text-white px-12 py-5 rounded-full text-lg font-semibold hover:bg-primary-600 mb-8">
            Mulai Perjalanan Belajar Bersama
          </CTAButton>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Gift className="w-5 h-5 text-primary-500 mr-2" />
              <span>Bonus Eksklusif</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-primary-500 mr-2" />
              <span>Garansi 30 Hari</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-accent-500 mr-2" />
              <span>Dukungan Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}