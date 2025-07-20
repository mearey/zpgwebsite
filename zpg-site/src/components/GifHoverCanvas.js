import { useState } from 'react';

function GifHoverCanvas({ gifSrc, frameSrc, alt, style }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        ...style,
        width: style?.width || 200,
        height: style?.height || 200,
        pointerEvents: 'auto',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered && (
        <img
          src={frameSrc}
          alt={alt}
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      )}
      {hovered && (
        <img
          src={gifSrc}
          alt={alt}
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
}

export default GifHoverCanvas; 