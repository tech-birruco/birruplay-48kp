import CTAButton from '../CTAButton';
import { Heart, Star } from 'lucide-react';

export default function Hero() {
  return (
    <header className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-50"></div>
        <div className="relative z-10">
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Cegah {' '}
            <span className="text-primary-600">Speech Delay & Tantrum</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Berbasis kurikulum international, bantu percepat kemampuan anak menyusun kalimat sederhana, <br />menyampaikan keinginannya, dan membangun koneksi lebih dekat dengan Ayah Bunda
          </p>
          <CTAButton className="bg-primary-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-600">
          Mulai Perjalanan Bicara Anak Sekarang!
          </CTAButton>
        </div>
    </header>
  );
}