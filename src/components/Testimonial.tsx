import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

export default function Testimonial({ quote, author, location }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Quote className="w-8 h-8 text-blue-500 mb-4" />
      <p className="text-gray-700 mb-4">{quote}</p>
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}