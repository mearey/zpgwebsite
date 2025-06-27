import siteheader from './websiteheader.png';
import discordIcon from "./icons/aav06vw3u.png"
import steamIcon from "./icons/steam-round-logo-icon-download-png-701751694966032dl6elakl5o.png"
import blueskyIcon from "./icons/bluesky-icon.png"
import iconOfSin from "./iconOFSIN.png"
import backgroundImage from "./images/website_background.png"
import backgroundImageRight from "./images/website_background_right_scaled.png"
import DiskTop from "./images/DiskHolderTop.png"
import ZPSSide from "./images/disks/ZPSSide.png"
import ZPSFront from "./images/disks/ZPSFront.png"
import tdSide from "./images/disks/tdSide.png"
import tdFront from "./images/disks/tdFront.png"
import arpgSide from "./images/disks/arpgSide.png"
import arpgFront from "./images/disks/arpgFront.png"
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
  const [isTdSideHovered, setIsTdSideHovered] = useState(false);
  const [isTdSideClicked, setIsTdSideClicked] = useState(false);
  const [isArpgSideHovered, setIsArpgSideHovered] = useState(false);
  const [isArpgSideClicked, setIsArpgSideClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [video, setVideo] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const canvasRef = useRef(null);
  const zpsFrontCanvasRef = useRef(null);
  const tdSideCanvasRef = useRef(null);
  const tdFrontCanvasRef = useRef(null);
  const arpgSideCanvasRef = useRef(null);
  const arpgFrontCanvasRef = useRef(null);
  const starfieldRef = useRef(null);
  const scrollLerpRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [appWidth, setAppWidth] = useState(window.innerWidth);

  const appRef = useRef(null);

  // Store star data for twinkling
  const starsRef = useRef([]);
  const animationFrameRef = useRef();

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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleResize();
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

    // Weighted: white is more common
    const starColors = [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', // 5x white
      '#87CEEB', // 1x blue
      '#FF6B6B'  // 1x red
    ];
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        phase: Math.random() * Math.PI * 2, // random phase for twinkle
        speed: 0.5 + Math.random() * 0.8, // twinkle speed
        size: 2 + Math.random() * 4 // random size between 2 and 6
      });
    }
    starsRef.current = stars;

    // Animation loop for twinkling
    function drawStars(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        // Twinkle: alpha oscillates between 0.3 and 1
        const alpha = 0.3 + 0.7 * Math.abs(Math.sin(time * 0.001 * star.speed + star.phase));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = star.color;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(drawStars);
    }
    animationFrameRef.current = requestAnimationFrame(drawStars);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
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

  useEffect(() => {
    if (isTdSideClicked) {
      const timer = setTimeout(() => {
        setIsTdSideClicked(false);
      }, 800);
      setIsTdSideHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isTdSideClicked]);

  useEffect(() => {
    if (isArpgSideClicked) {
      const timer = setTimeout(() => {
        setIsArpgSideClicked(false);
      }, 800);
      setIsArpgSideHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isArpgSideClicked]);

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
  
  // Update scrollX, windowWidth, and appWidth on scroll/resize
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;
    const onScroll = () => setScrollX(app.scrollLeft);
    app.addEventListener('scroll', onScroll);
    // Initial set
    setScrollX(app.scrollLeft);
    return () => app.removeEventListener('scroll', onScroll);
  }, []);

  const maxScroll = appRef.current ? appRef.current.scrollWidth - appRef.current.clientWidth : 0;
  const atFarLeft = scrollX <= 0;
  const atFarRight = scrollX >= maxScroll - 1;
  const showLeftArrow = !atFarLeft;
  const showRightArrow = !atFarRight;

  const handleArrowClick = (toLeft) => {
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

  // Tower Defense Side Disk
  useEffect(() => {
    const canvas = tdSideCanvasRef.current;
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
    
    img.src = tdSide;
  }, [dimensions.scaleFactor, tdSide]);

  // Tower Defense Front Disk
  useEffect(() => {
    const canvas = tdFrontCanvasRef.current;
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
    
    img.src = tdFront;
  }, [dimensions.scaleFactor, tdFront]);

  // ARPG Side Disk
  useEffect(() => {
    const canvas = arpgSideCanvasRef.current;
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
    
    img.src = arpgSide;
  }, [dimensions.scaleFactor, arpgSide]);

  // ARPG Front Disk
  useEffect(() => {
    const canvas = arpgFrontCanvasRef.current;
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
    
    img.src = arpgFront;
  }, [dimensions.scaleFactor, arpgFront]);
  console.log({ scrollX, maxScroll, showLeftArrow, showRightArrow });
  return (
    <div className="App" ref={appRef}>
      <div className="rotate-device-overlay">
        Please rotate your device for the best experience!
        <br />
        <span style={{fontSize: '2em', display: 'block', marginTop: '20px'}}>🔄</span>
      </div>
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
      
      {/* Right background image, starts at 50% of viewport width */}
      <img 
        src={backgroundImageRight}
        style={{
          position: 'absolute',
          top: 0,
          left: '45.6vw',
          width: `${backgroundImageWidth * scaleFactor}px`,
          height: 'auto',
          margin: 0,
          padding: 0,
          zIndex: -0.2
        }}
        alt="Background Right"
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

      {/* ZPS Side Disk */}
      <canvas 
        ref={canvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideHovered ? "20.28%" : "22.28%",
          left: "62%",
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
          setIsTdSideClicked(false);
          setIsArpgSideClicked(false);
          setVideo('eLy7rmBwkqE');
          setIsMuted(false);
        }}
      />

      {/* ZPS Front Disk */}
      <canvas 
        ref={zpsFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideClicked ? "30%" : "10%",
          left: isZPSSideClicked ? "25%" : "62%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isZPSSideHovered && !isZPSSideClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      {/* Tower Defense Side Disk */}
      <canvas 
        ref={tdSideCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isTdSideHovered ? "20.28%" : "22.28%",
          left: "62.75%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsTdSideHovered(true)}
        onMouseLeave={() => setIsTdSideHovered(false)}
        onClick={() => {
          setIsTdSideClicked(true);
          setIsZPSSideClicked(false);
          setIsArpgSideClicked(false);
          setVideo('eLy7rmBwkqE');
          setIsMuted(false);
        }}
      />

      {/* Tower Defense Front Disk */}
      <canvas 
        ref={tdFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isTdSideClicked ? "30%" : "10%",
          left: isTdSideClicked ? "25%" : "62.75%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isTdSideHovered && !isTdSideClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      {/* ARPG Side Disk */}
      <canvas 
        ref={arpgSideCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isArpgSideHovered ? "20.28%" : "22.28%",
          left: "63.5%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsArpgSideHovered(true)}
        onMouseLeave={() => setIsArpgSideHovered(false)}
        onClick={() => {
          setIsArpgSideClicked(true);
          setIsZPSSideClicked(false);
          setIsTdSideClicked(false);
          setVideo('jR6_nmcV2jo');
          setIsMuted(false);
        }}
      />

      {/* ARPG Front Disk */}
      <canvas 
        ref={arpgFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isArpgSideClicked ? "30%" : "10%",
          left: isArpgSideClicked ? "25%" : "63.5%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isArpgSideHovered && !isArpgSideClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      <img 
        src={DiskTop} 
        className="disk-holder"
        style={{
          position: 'absolute',
          top: "26.485%",
          left: "60.76%",
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
            left: 0,
            width: '100vw',
            alignItems: 'center',
            display: 'flex',
            zIndex: 1000
          }}
        >
          <img
            src={siteheader}
            className="header-image"
            alt="Header"
          />
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
          <img style={{height:"110px", right:"25px", position:"absolute",}} src={iconOfSin} className="top-logo" />
        </div>
      </header>

      {/* Wide scrollable div for testing horizontal scroll */}
      <div style={{
        width: '200vw',
        height: 100,
        background: 'linear-gradient(90deg, #444, #888)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 32,
        marginTop: 32
      }}>
        Scroll me!
      </div>

      {/* Floating right arrow button */}
      {showLeftArrow && (
        <button
          className="floating-arrow"
          onClick={() => handleArrowClick(true)}
          style={{
            position: 'fixed',
            top: '50%',
            left: '24px',
            zIndex: 2000,
            background: 'rgba(30,30,30,0.7)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Scroll left"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      )}
      {true && (
        <button
          className="floating-arrow"
          onClick={() => handleArrowClick(false)}
          style={{
            position: 'fixed',
            top: '50%',
            right: '24px',
            zIndex: 2000,
            background: 'rgba(30,30,30,0.7)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          aria-label="Scroll right"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      )}
    </div>
  );
}

export default App;

