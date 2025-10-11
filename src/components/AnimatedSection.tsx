import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 transform translate-y-8';
    
    switch (animation) {
      case 'slide-up':
        return 'opacity-100 transform translate-y-0';
      case 'slide-in-left':
        return 'opacity-100 transform translate-x-0';
      case 'slide-in-right':
        return 'opacity-100 transform translate-x-0';
      default:
        return 'opacity-100 transform translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;