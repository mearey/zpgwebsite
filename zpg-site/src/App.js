import siteheader from './websiteheader.png';
import discordIcon from "./icons/aav06vw3u.png"
import steamIcon from "./icons/steam-round-logo-icon-download-png-701751694966032dl6elakl5o.png"
import blueskyIcon from "./icons/bluesky-icon.png"
import iconOfSin from "./iconOFSIN.png"
import backgroundImage from "./images/website_background.png"
import DiskTop from "./images/DiskHolderTop.png"
import ZPSSide from "./images/disks/ZPSSide.png"
import ZPSFront from "./images/disks/ZPSFront.png"
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [dimensions, setDimensions] = useState({
    viewportWidth: window.innerWidth,
    scaleFactor: window.innerWidth / 640,
    scaledBackgroundHeight: (window.innerWidth / 640) * 1080
  });

  const [isZPSSideHovered, setIsZPSSideHovered] = useState(false);
  const [isZPSSideClicked, setIsZPSSideClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [video, setVideo] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const canvasRef = useRef(null);
  const zpsFrontCanvasRef = useRef(null);
  const starfieldRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const scaleFactor = viewportWidth / 640;
      const scaledBackgroundHeight = scaleFactor * 1080;
      
      setDimensions({
        viewportWidth,
        scaleFactor,
        scaledBackgroundHeight
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate starfield
  useEffect(() => {
    const canvas = starfieldRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const backgroundImageWidth = 640;
    const backgroundImageHeight = 1080;
    const scaleFactor = dimensions.scaleFactor;
    
    canvas.width = backgroundImageWidth * scaleFactor;
    canvas.height = backgroundImageHeight * scaleFactor;
    
    // Clear canvas
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate stars
    const numStars = 200;
    const starColors = ['#FFFFFF', '#87CEEB', '#FF6B6B']; // White, Blue, Red
    
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    }
  }, [dimensions.scaleFactor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const diskWidth = 4;
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * diskWidth * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
      
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
      
      // Disable image smoothing for pixel-perfect rendering
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      
      // Draw the image with pixel-perfect scaling
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
    };
    
    img.src = ZPSSide;
  }, [dimensions.scaleFactor, ZPSSide]);

  useEffect(() => {
    const canvas = zpsFrontCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const diskWidth = 64;
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * diskWidth * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
      
      canvas.width = scaledWidth;
      canvas.height = scaledHeight;
      
      // Disable image smoothing for pixel-perfect rendering
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      
      // Draw the image with pixel-perfect scaling
      ctx.drawImage(img, 0, 0, scaledWidth, scaledHeight);
    };
    
    img.src = ZPSFront;
  }, [dimensions.scaleFactor, ZPSFront]);

  useEffect(() => {
    if (isZPSSideClicked) {
      const timer = setTimeout(() => {
        setIsZPSSideClicked(false);
      }, 800); // Match the transition duration
      setIsZPSSideHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isZPSSideClicked]);

  // Set max height of App container to match background image height
  useEffect(() => {
    const appContainer = document.querySelector('.App');
    if (appContainer) {
      appContainer.style.maxHeight = `${dimensions.scaledBackgroundHeight}px`;
    }
  }, [dimensions.scaledBackgroundHeight]);

  // Calculate scaling factor based on viewport width vs background image width
  const viewportWidth = dimensions.viewportWidth;
  const backgroundImageWidth = 640; // Assuming this is the original width of backgroundImage
  const backgroundImageHeight = 1080; // Assuming this is the original height of backgroundImage
  const diskTopWidth = 132; // Assuming this is the original width of DiskTop
  const diskWidth = 4;
  const scaleFactor = dimensions.scaleFactor;
  const scaledBackgroundHeight = dimensions.scaledBackgroundHeight;
  
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
    <div className="App">
      <canvas 
        ref={starfieldRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: -0.5,
          transform: `translateY(${scrollY * -0.3}px)`
        }}
      />
      
      <img 
        src={backgroundImage} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${backgroundImageWidth * scaleFactor}px`,
          height: 'auto',
          margin: 0,
          padding: 0,
          zIndex: 0
        }}
        alt="Background"
      />

      {/* Custom Shaped YouTube Player */}
      <div className="crt-effect" style={{
        position: 'absolute',
        top: '10.28%',
        left: '14.435%',
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

      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: isZPSSideHovered ? "20.28%" : "22.28%",
          left: "61%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsZPSSideHovered(true)}
        onMouseLeave={() => setIsZPSSideHovered(false)}
        onClick={() => {
          setIsZPSSideClicked(true);
          setVideo('eLy7rmBwkqE');
          setIsMuted(false);
        }}
      />

      <canvas 
        ref={zpsFrontCanvasRef}
        style={{
          position: 'absolute',
          top: isZPSSideClicked ? "30%" : "10%",
          left: isZPSSideClicked ? "25%" : "61%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isZPSSideHovered && !isZPSSideClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      <img 
        src={DiskTop} 
        style={{
          position: 'absolute',
          top: "26.485%",
          left: "60.8%",
          width: `${diskTopWidth * scaleFactor}px`,
          height: 'auto',
          margin: 0,
          padding: 0,
          zIndex: 999,
        }}
        alt="DiskTop"
      />
      <header className="App-header" style={{ height: `${scaledBackgroundHeight}px` }}>
        <div
          className="gradient"
          style={{
            height: '100px',
            position: 'fixed',
            top: '0px',
            width: '100%',
            alignItems: 'center',
            display: 'flex',
            zIndex: 1000
          }}
        >
          <img
            src={siteheader}
            style={{ width: '45%', margin: 'auto', display: 'flex', justifyContent: 'center' }}
          ></img>
          <a href="https://discord.gg/cF2vQmkXV6" target='_blank' style={{ position:"absolute",left:"25px"}}>
            <input type="image" class="icon" src={discordIcon} ></input>
          </a>
          <a href="https://store.steampowered.com/search/?developer=Zero%20Point%20Games" target='_blank'style={{ position:"absolute",left:"75px"}}>
            <input class="icon" type="image" src={steamIcon}></input>
          </a>
          <a
            href="https://bsky.app/profile/zero-point-games.bsky.social"
            target="_blank"
            style={{ position: 'absolute', left: '125px' }}
          >
            <input className="icon" type="image" src={blueskyIcon}></input>
          </a>
          <img style={{height:"110px", right:"25px", position:"absolute",}} src={iconOfSin}></img>
        </div>
      </header>
    </div>
  );
}

export default App;

