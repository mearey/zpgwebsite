import { useState, useEffect, useRef } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [appWidth, setAppWidth] = useState(window.innerWidth);
  const scrollLerpRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleArrowClick = (toLeft, appRef) => {
    const scrollAmount = window.innerWidth * 0.8;
    const app = appRef.current;
    const startX = app.scrollLeft;
    let targetX;
    const maxScroll = app.scrollWidth - app.clientWidth;
    if (toLeft) {
      targetX = Math.max(0, startX - scrollAmount);
    } else {
      targetX = Math.min(maxScroll, startX + scrollAmount);
    }
    const duration = 600;
    const startTime = performance.now();

    function lerpScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const newX = startX + (targetX - startX) * ease;
      app.scrollTo({ left: newX });
      if (t < 1) {
        scrollLerpRef.current = requestAnimationFrame(lerpScroll);
      }
    }
    if (scrollLerpRef.current) {
      cancelAnimationFrame(scrollLerpRef.current);
    }
    scrollLerpRef.current = requestAnimationFrame(lerpScroll);
  };

  return {
    scrollY,
    scrollX,
    setScrollX,
    windowWidth,
    appWidth,
    scrollLerpRef,
    handleArrowClick
  };
} 