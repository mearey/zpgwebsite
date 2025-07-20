import { useState, useEffect } from 'react';

export function useDimensions() {
  const [dimensions, setDimensions] = useState({
    viewportWidth: window.innerWidth,
    scaleFactor: window.innerWidth / 640,
    scaledBackgroundHeight: (window.innerWidth / 640) * 1080
  });

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      let scaleFactor = viewportWidth / 640;
      const scaledBackgroundHeight = scaleFactor * 1080;
      setDimensions({
        viewportWidth,
        scaleFactor,
        scaledBackgroundHeight
      });
    };

    window.addEventListener('resize', handleResize);
    // Initial call
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dimensions;
} 