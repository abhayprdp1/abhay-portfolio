import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percentage = (scrollTop / docHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, percentage)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-label="Scroll Progress"
      style={{
        position: 'fixed',
        right: '24px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '140px',
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '9999px',
        zIndex: 100,
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)'
      }}
      title={`Scroll: ${Math.round(scrollPercentage)}%`}
    >
      <div
        style={{
          width: '100%',
          height: `${scrollPercentage}%`,
          backgroundColor: '#10b981',
          borderRadius: '9999px',
          boxShadow: '0 0 12px #10b981',
          transition: 'height 0.1s linear'
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;
