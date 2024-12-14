import React from 'react';
import Hero from './components/sections/Hero';
import Problems from './components/sections/Problems';
import Solutions from './components/sections/Solutions';
import Gallery from './components/sections/Gallery';
import VideoSection from './components/sections/VideoSection';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Problems />
      <Solutions />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <CTASection />
    </div>
  );
}

export default App;