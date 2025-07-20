function RotateOverlay({ showRotateOverlay, setShowRotateOverlay }) {
  if (!showRotateOverlay) return null;

  return (
    <div 
      className="rotate-device-overlay hologram-scrollbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        fontFamily: 'm5x7, monospace',
        color: '#ffffff',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <div
        style={{
          background: 'rgba(0, 100, 255, 0.1)',
          border: '2px solid rgba(0, 150, 255, 0.8)',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '400px',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
          animation: 'hologramGlow 2s ease-in-out infinite alternate'
        }}
      >
        <h3
          style={{
            color: '#00aaff',
            margin: '0 0 20px 0',
            fontSize: '18px',
            textShadow: '0 0 10px rgba(0, 150, 255, 0.8)'
          }}
        >
          Please rotate your device for the best experience!
        </h3>
        <span style={{ fontSize: '2em', display: 'block', marginBottom: '20px' }}>🔄</span>
        <button
          onClick={() => setShowRotateOverlay(false)}
          style={{
            padding: '10px 20px',
            background: 'rgba(0, 100, 255, 0.1)',
            border: '1px solid rgba(0, 150, 255, 0.6)',
            borderRadius: '5px',
            color: '#00aaff',
            fontSize: '14px',
            cursor: 'pointer',
            fontFamily: 'm5x7, monospace',
            transition: 'all 0.3s ease',
            textShadow: '0 0 5px rgba(0, 150, 255, 0.6)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(0, 150, 255, 0.2)';
            e.target.style.borderColor = 'rgba(0, 200, 255, 0.8)';
            e.target.style.color = '#ffffff';
            e.target.style.textShadow = '0 0 10px rgba(0, 200, 255, 1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(0, 100, 255, 0.1)';
            e.target.style.borderColor = 'rgba(0, 150, 255, 0.6)';
            e.target.style.color = '#00aaff';
            e.target.style.textShadow = '0 0 5px rgba(0, 150, 255, 0.6)';
          }}
        >
          No thanks
        </button>
      </div>
    </div>
  );
}

export default RotateOverlay; 