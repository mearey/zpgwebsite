function YouTubePlayer({ video, isMuted, scaleFactor }) {
  const polygonPoints = '20 0, 80 0, 92 3, 98 8, 100 20, 100 80, 98 92, 92 97, 80 100, 20 100, 8 97, 2 92, 0 80, 0 20, 2 8, 8 3';
  const svgMask = `
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="fade-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
      <polygon points="${polygonPoints}" fill="white" filter="url(#fade-blur)" />
    </svg>
  `.trim();

  const maskUrl = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

  return (
    <div className="crt-effect" style={{
      position: 'absolute',
      top: '19.95%',
      left: '14.635%',
      width: `${147 * scaleFactor}px`,
      height: `${124 * scaleFactor}px`,
      zIndex: -0.1,
      maskImage: maskUrl,
      WebkitMaskImage: maskUrl,
      backgroundColor: 'black'
    }}>
      {video && (
        <iframe
          src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${video}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`}
          title="Background Video"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150%',
            height: '100%',
            border: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <div className="crt-overlay"></div>
    </div>
  );
}

export default YouTubePlayer; 