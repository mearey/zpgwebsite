import { useState, useEffect, useRef } from 'react';

function GifHoverCanvas({ gifSrc, frameSrc, alt, style }) {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef(null);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);
  
  // Calculate aspect ratio from static frame
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageAspectRatio(img.width / img.height);
    };
    img.src = frameSrc;
  }, [frameSrc]);
  
  // Render static frame
  useEffect(() => {
    if (hovered) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = style?.scaleFactor || 1;
      const height = style?.height || 200;
      const width = height * imageAspectRatio; // Calculate width based on aspect ratio
      const isPortrait = window.innerHeight > window.innerWidth;
      const multiplier = isPortrait ? 2 : 1;
      
      canvas.width = width * multiplier;
      canvas.height = height * multiplier;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.setTransform(multiplier, 0, 0, multiplier, 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      
      ctx.drawImage(img, 0, 0, width, height);
    };

    img.src = frameSrc;
  }, [hovered, frameSrc, style, imageAspectRatio]);
  
  // Calculate dimensions based on aspect ratio
  const height = style?.height || 200;
  const width = height * imageAspectRatio;
  
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        ...style,
        width: width,
        height: height,
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: hovered ? 'none' : 'block',
          width: '100%',
          height: '100%'
        }}
      />
      <img
        src={gifSrc}
        alt={alt}
        style={{
          display: hovered ? 'block' : 'none',
          width: '100%',
          height: '100%',
          imageRendering: 'pixelated',
          imageRendering: '-moz-crisp-edges',
          imageRendering: 'crisp-edges',
          imageRendering: '-webkit-optimize-contrast',
          imageRendering: 'optimize-contrast',
          imageRendering: 'nearest-neighbor',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      />
    </div>
  );
}

export default GifHoverCanvas; 