import React, { useEffect, useRef } from 'react';

const RANDOM_COLORS = [
  ['#10b981', '#065f46', '#34d399'], // Emerald Green (matching user screenshot)
  ['#06b6d4', '#0284c7', '#38bdf8'], // Electric Cyan & Blue
  ['#a855f7', '#ec4899', '#c084fc'], // Cyber Pink & Purple
  ['#f59e0b', '#ef4444', '#fbbf24'], // Sunset Fire & Gold
  ['#84cc16', '#10b981', '#a3e635']  // Cyber Lime & Mint
];

const LIGHT_COLORS = [
  ['#10b981', '#34d399', '#6ee7b7', '#065f46'],
  ['#06b6d4', '#38bdf8', '#7dd3fc', '#0284c7'],
  ['#a855f7', '#c084fc', '#f472b6', '#ec4899'],
  ['#f59e0b', '#fbbf24', '#f87171', '#ef4444'],
  ['#84cc16', '#a3e635', '#6ee7b7', '#10b981']
];

const CursorRibbonCanvas = () => {
  const canvasRef = useRef(null);
  const tubesInstanceRef = useRef(null);
  const colorIndexRef = useRef(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      // Dynamically load vendor tubes WebGL library module from src/vendor/tubes1.min.js
      import('../vendor/tubes1.min.js')
        .then((module) => {
          const createTubesCursor = module.default;
          if (canvasRef.current && createTubesCursor) {
            const initialColors = RANDOM_COLORS[0];
            const initialLights = LIGHT_COLORS[0];

            tubesInstanceRef.current = createTubesCursor(canvasRef.current, {
              size: 'window', // Force full window size tracking across entire viewport
              tubes: {
                colors: initialColors,
                lights: {
                  intensity: 220,
                  colors: initialLights
                }
              }
            });
          }
        })
        .catch((err) => {
          console.error('Failed to load TubesCursor module:', err);
        });
    }, 50);

    const handleGlobalMouseMove = (e) => {
      if (tubesInstanceRef.current && tubesInstanceRef.current.three) {
        const three = tubesInstanceRef.current.three;
        if (three.size) {
          if (
            three.size.width !== window.innerWidth ||
            three.size.height !== window.innerHeight
          ) {
            three.resize();
          }
        }
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('resize', handleGlobalMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('resize', handleGlobalMouseMove);
      if (
        tubesInstanceRef.current &&
        typeof tubesInstanceRef.current.dispose === 'function'
      ) {
        tubesInstanceRef.current.dispose();
      }
    };
  }, []);

  const handleCanvasClick = () => {
    if (tubesInstanceRef.current && tubesInstanceRef.current.tubes) {
      colorIndexRef.current = (colorIndexRef.current + 1) % RANDOM_COLORS.length;
      const nextColors = RANDOM_COLORS[colorIndexRef.current];
      const nextLights = LIGHT_COLORS[colorIndexRef.current];

      if (typeof tubesInstanceRef.current.tubes.setColors === 'function') {
        tubesInstanceRef.current.tubes.setColors(nextColors);
      }
      if (typeof tubesInstanceRef.current.tubes.setLightsColors === 'function') {
        tubesInstanceRef.current.tubes.setLightsColors(nextLights);
      }
    }
  };

  return (
    <div
      onClick={handleCanvasClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'block'
        }}
      />
    </div>
  );
};

export default CursorRibbonCanvas;
