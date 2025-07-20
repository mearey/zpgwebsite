function RotateOverlay({ showRotateOverlay, setShowRotateOverlay }) {
  if (!showRotateOverlay) return null;

  return (
    <div className="rotate-device-overlay">
      Please rotate your device for the best experience!
      <br />
      <span style={{ fontSize: '2em', display: 'block', marginTop: '20px' }}>🔄</span>
      <button
        onClick={() => setShowRotateOverlay(false)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: '#fff',
          border: '2px solid #666',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
      >
        No thanks
      </button>
    </div>
  );
}

export default RotateOverlay; 