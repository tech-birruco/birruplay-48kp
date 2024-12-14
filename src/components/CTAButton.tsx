import React from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ children, className = '' }: CTAButtonProps) {
  const scrollTo = useScrollTo();

  return (
    <button
      onClick={() => scrollTo('pricing')}
      className={`${className} transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl`}
    >
      {children}
    </button>
  );
}