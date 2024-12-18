import React from 'react';
import CTAButton from '../CTAButton';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-8 h-8 text-accent-500 animate-pulse" />
            <Star className="w-8 h-8 text-primary-500" />
            <Sparkles className="w-8 h-8 text-secondary-500" />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-primary-500" />
              <span className="ml-2 text-gray-700">4.9/5 Rating Orang Tua</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-accent-500" />
              <span className="ml-2 text-gray-700">1000+ Anak Terbantu</span>
            </div>
          </div>

          <div className="my-8"></div>

          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Percepat Kemampuan Anak Menyampaikan Keinginan</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Berbasis kurikulum international, bantu anak menyusun kalimat sederhana,{' '}
            <span className="text-primary-600">menyampaikan keinginannya,</span> dan membangun koneksi lebih dekat dengan Ayah Bunda
          </h1>
          <CTAButton className="bg-primary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-600">
          Mulai Perjalanan Bicara Anak Sekarang!
          </CTAButton>
        </div>
    </header>
  );
}