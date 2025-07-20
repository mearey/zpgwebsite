import { useEffect } from 'react';
import arrowSprite from "../images/arrow.png";

function ScrollArrows({ 
  showLeftArrow, 
  showRightArrow, 
  handleArrowClick, 
  leftArrowCanvasRef, 
  rightArrowCanvasRef, 
  dimensions 
}) {
  // Left Arrow Canvas
  useEffect(() => {
    console.log('Left arrow canvas useEffect triggered');

    const timer = setTimeout(() => {
      const canvas = leftArrowCanvasRef.current;
      if (!canvas) {
        console.log('Left arrow canvas ref is null after timeout');
        return;
      }

      console.log('Arrow sprite import value:', arrowSprite);
      console.log('Left arrow canvas useEffect running');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        console.log('Left arrow image loaded successfully:', { imgWidth: img.width, imgHeight: img.height });
        const scaleFactor = dimensions.scaleFactor;
        const scaledWidth = scaleFactor * 32;
        const scaledHeight = scaleFactor * 32;
        const isPortrait = window.innerHeight > window.innerWidth;
        const multiplier = isPortrait ? 2 : 1;
        canvas.width = scaledWidth * multiplier;
        canvas.height = scaledHeight * multiplier;
        canvas.style.width = `${scaledWidth}px`;
        canvas.style.height = `${scaledHeight}px`;
        ctx.setTransform(multiplier, 0, 0, multiplier, 0, 0);
        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
        console.log('Left arrow canvas rendered:', { scaledWidth, scaledHeight, scaleFactor, imgWidth: img.width, imgHeight: img.height });
      };

      img.onerror = () => {
        console.error('Failed to load left arrow sprite:', arrowSprite);
        console.error('Arrow sprite path:', arrowSprite);
      };

      img.src = arrowSprite;
    }, 100);

    return () => clearTimeout(timer);
  }, [dimensions.scaleFactor, arrowSprite, showLeftArrow, leftArrowCanvasRef]);

  // Right Arrow Canvas
  useEffect(() => {
    const canvas = rightArrowCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * 32;
      const scaledHeight = scaleFactor * 32;
      const isPortrait = window.innerHeight > window.innerWidth;
      const multiplier = isPortrait ? 2 : 1;
      canvas.width = scaledWidth * multiplier;
      canvas.height = scaledHeight * multiplier;
      canvas.style.width = `${scaledWidth}px`;
      canvas.style.height = `${scaledHeight}px`;
      ctx.setTransform(multiplier, 0, 0, multiplier, 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
      console.log('Right arrow canvas rendered:', { scaledWidth, scaledHeight, scaleFactor });
    };

    img.onerror = () => {
      console.error('Failed to load right arrow sprite:', arrowSprite);
    };

    img.src = arrowSprite;
  }, [dimensions.scaleFactor, arrowSprite, rightArrowCanvasRef]);

  return (
    <>
      {/* Floating left arrow button */}
      {showLeftArrow && (
        <button
          className="floating-arrow"
          onClick={() => handleArrowClick(true)}
          onLoad={() => console.log('Left arrow button rendered, showLeftArrow:', showLeftArrow)}
          onMouseEnter={() => console.log('Left arrow canvas ref:', leftArrowCanvasRef.current)}
          style={{
            position: 'fixed',
            top: '50%',
            left: '24px',
            zIndex: 2000,
            background: 'rgba(30, 30, 30, 0)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Scroll left"
        >
          <canvas
            ref={leftArrowCanvasRef}
            style={{
              width: '32px',
              height: '32px',
              transform: 'rotate(90deg)',
              backgroundColor: 'rgba(255, 0, 0, 0)' // Temporary red background to see canvas
            }}
            onLoad={() => console.log('Left arrow canvas DOM element loaded')}
          />
        </button>
      )}
      
      {/* Floating right arrow button */}
      {showRightArrow && (
        <button
          className="floating-arrow"
          onClick={() => handleArrowClick(false)}
          style={{
            position: 'fixed',
            top: '50%',
            right: '24px',
            zIndex: 2000,
            background: 'rgba(30, 30, 30, 0)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Scroll right"
        >
          <canvas
            ref={rightArrowCanvasRef}
            style={{
              width: '32px',
              height: '32px',
              transform: 'rotate(-90deg)'
            }}
          />
        </button>
      )}
    </>
  );
}

export default ScrollArrows; 