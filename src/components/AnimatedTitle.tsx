'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function AnimatedTitle({ 
  text, 
  className = '', 
  as: Component = 'h2' 
}: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span className="inline-flex overflow-hidden pb-1 -mb-1">
            <span
              className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'translate-y-0' : 'translate-y-[110%]'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 && '\u00A0'}
        </React.Fragment>
      ))}
    </Component>
  );
}
