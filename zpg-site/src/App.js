import { useState, useEffect, useRef } from 'react';
import './App.css';

// Import components
import GifHoverCanvas from './components/GifHoverCanvas';
import Header from './components/Header';
import RotateOverlay from './components/RotateOverlay';
import YouTubePlayer from './components/YouTubePlayer';
import ScrollArrows from './components/ScrollArrows';
import GameDisks from './components/GameDisks';

// Import hooks
import { useDimensions } from './hooks/useDimensions';
import { useScroll } from './hooks/useScroll';
import { useAudioPlayer } from './hooks/useAudioPlayer';

// Import constants
import { zpsMusic, arpgMusic, fishMusic } from './constants/music';
import { 
  backgroundImage, backgroundImageRight, arrowSprite,
  shipGif, shipFrame1, zpGif, zpFrame1, boatframe1, blobframe1, winkframe1,
  boatGif, blobGif, winkGif, characterSprites
} from './constants/images';

function App() {
  // Use custom hooks
  const dimensions = useDimensions();
  const { scrollY, scrollX, setScrollX, handleArrowClick } = useScroll();
  const { playRandomMusic } = useAudioPlayer();

  // State management
  const [isZPSSideHovered, setIsZPSSideHovered] = useState(false);
  const [isZPSSideClicked, setIsZPSSideClicked] = useState(false);
  const [isTdSideHovered, setIsTdSideHovered] = useState(false);
  const [isTdSideClicked, setIsTdSideClicked] = useState(false);
  const [isArpgSideHovered, setIsArpgSideHovered] = useState(false);
  const [isArpgSideClicked, setIsArpgSideClicked] = useState(false);
  const [isZPSSideVinylHovered, setIsZPSSideVinylHovered] = useState(false);
  const [isZPSSideVinylClicked, setIsZPSSideVinylClicked] = useState(false);
  const [isTdSideVinylHovered, setIsTdSideVinylHovered] = useState(false);
  const [isTdSideVinylClicked, setIsTdSideVinylClicked] = useState(false);
  const [isArpgSideVinylHovered, setIsArpgSideVinylHovered] = useState(false);
  const [isArpgSideVinylClicked, setIsArpgSideVinylClicked] = useState(false);
  const [isFishSideVinylHovered, setIsFishSideVinylHovered] = useState(false);
  const [isFishSideVinylClicked, setIsFishSideVinylClicked] = useState(false);
  const [showRotateOverlay, setShowRotateOverlay] = useState(true);
  const [floatingCharacters, setFloatingCharacters] = useState([]);
  const [showFloatingArrow, setShowFloatingArrow] = useState(true);
  const [video, setVideo] = useState('');
  const [isMuted, setIsMuted] = useState(true);

  // Refs
  const appRef = useRef(null);
  const backgroundImageRef = useRef(null);
  const starfieldRef = useRef(null);
  const characterCanvasRef = useRef(null);
  const floatingArrowCanvasRef = useRef(null);
  const leftArrowCanvasRef = useRef(null);
  const rightArrowCanvasRef = useRef(null);
  const [overlayTop, setOverlayTop] = useState(null);

  // Store star data for twinkling
  const starsRef = useRef([]);
  const animationFrameRef = useRef();

  // Update scrollX on scroll/resize
  useEffect(() => {
    const app = appRef.current;
    if (!app) return;
    const onScroll = () => setScrollX(app.scrollLeft);
    app.addEventListener('scroll', onScroll);
    setScrollX(app.scrollLeft);
    return () => app.removeEventListener('scroll', onScroll);
  }, [setScrollX]);

  // Calculate scroll arrow visibility
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const updateArrowVisibility = () => {
      const app = appRef.current;
      if (!app) return;
      
      const maxScroll = app.scrollWidth - app.clientWidth;
      const atFarLeft = scrollX <= 0;
      const atFarRight = scrollX >= maxScroll - 1;
      
      setShowLeftArrow(!atFarLeft);
      setShowRightArrow(!atFarRight);
    };

    // Initial calculation
    updateArrowVisibility();

    // Update on scroll
    const app = appRef.current;
    if (app) {
      app.addEventListener('scroll', updateArrowVisibility);
      return () => app.removeEventListener('scroll', updateArrowVisibility);
    }
  }, [scrollX]);

  // Update overlay top position
  useEffect(() => {
    function updateOverlayTop() {
      if (backgroundImageRef.current) {
        const rect = backgroundImageRef.current.getBoundingClientRect();
        setOverlayTop(rect.bottom);
      }
    }
    updateOverlayTop();
    window.addEventListener('resize', updateOverlayTop);
    return () => window.removeEventListener('resize', updateOverlayTop);
  }, [dimensions.scaleFactor]);

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

    const starColors = [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#87CEEB',
      '#FF6B6B'
    ];
    const stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.8,
        size: 2 + Math.random() * 4
      });
    }
    starsRef.current = stars;

    function drawStars(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
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

  // Floating Characters
  useEffect(() => {
    const canvas = characterCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const initCharacters = () => {
      const characters = [];
      const numCharacters = 8;

      for (let i = 0; i < numCharacters; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const vx = (Math.random() - 0.5) * 2;
        const vy = (Math.random() - 0.5) * 2;

        characters.push({
          x: x,
          y: y,
          vx: vx,
          vy: vy,
          sprite: characterSprites[Math.floor(Math.random() * characterSprites.length)],
          size: 32,
          loaded: false,
          img: null
        });
      }
      setFloatingCharacters(characters);
      return characters;
    };

    const loadCharacterImages = (characters) => {
      for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        if (char.loaded) continue;

        const img = new Image();
        img.onload = () => {
          characters[i].loaded = true;
          characters[i].img = img;
        };
        img.onerror = () => {
          console.error(`Failed to load character ${i} sprite:`, char.sprite);
        };
        img.src = char.sprite;
      }
    };

    const animateCharacters = (characters) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      characters.forEach((char, index) => {
        if (!char.loaded || !char.img) {
          return;
        }

        char.x += char.vx;
        char.y += char.vy;

        if (char.x <= 0 || char.x >= canvas.width - char.size) {
          char.vx = -char.vx;
          char.x = Math.max(0, Math.min(canvas.width - char.size, char.x));
        }
        if (char.y <= 0 || char.y >= canvas.height - char.size) {
          char.vy = -char.vy;
          char.y = Math.max(0, Math.min(canvas.height - char.size, char.y));
        }

        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;

        const imgWidth = char.img.width;
        const imgHeight = char.img.height;
        ctx.drawImage(char.img, char.x, char.y, imgWidth, imgHeight);
      });

      requestAnimationFrame(() => animateCharacters(characters));
    };

    const characters = initCharacters();
    loadCharacterImages(characters);
    animateCharacters(characters);
  }, []);

  // Floating Arrow
  useEffect(() => {
    const canvas = floatingArrowCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const arrowSize = 16;
      const scaledWidth = scaleFactor * arrowSize * 1.3;
      const scaledHeight = scaleFactor * arrowSize * 1.3;
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
    };
    img.src = arrowSprite;
  }, [dimensions.scaleFactor, arrowSprite]);

  // Set max height of App container
  useEffect(() => {
    const appContainer = document.querySelector('.App');
    if (appContainer) {
      appContainer.style.maxHeight = `${dimensions.scaledBackgroundHeight}px`;
    }
  }, [dimensions.scaledBackgroundHeight]);

  // Calculate scaling factors
  const viewportWidth = dimensions.viewportWidth;
  const backgroundImageWidth = 640;
  const backgroundImageHeight = 1080;
  const scaleFactor = dimensions.scaleFactor;
  const scaledBackgroundHeight = dimensions.scaledBackgroundHeight;

  return (
    <div className="App" ref={appRef}>
      {/* GIF hover canvases */}
      <GifHoverCanvas gifSrc={shipGif} frameSrc={shipFrame1} alt="Ship" style={{ zIndex: 10, width: 50 * scaleFactor, height: 50 * scaleFactor, top: "12.0%", left: "10%" }} />
      <GifHoverCanvas gifSrc={zpGif} frameSrc={zpFrame1} alt="ZP" style={{ zIndex: 10, width: 50 * scaleFactor, height: 50 * scaleFactor, top: "11%", left: "50%" }} />
      <GifHoverCanvas gifSrc={boatGif} frameSrc={boatframe1} alt="ZP" style={{ zIndex: 10, width: 50 * scaleFactor, height: 50 * scaleFactor, top: "11%", left: "65%" }} />
      <GifHoverCanvas gifSrc={blobGif} frameSrc={blobframe1} alt="ZP" style={{ zIndex: 10, width: 50 * scaleFactor, height: 50 * scaleFactor, top: "11%", left: "74%" }} />
      <GifHoverCanvas gifSrc={winkGif} frameSrc={winkframe1} alt="ZP" style={{ zIndex: 10, width: 50 * scaleFactor, height: 50 * scaleFactor, top: "11%", left: "85%" }} />

      <Header scaledBackgroundHeight={scaledBackgroundHeight} />

      <RotateOverlay showRotateOverlay={showRotateOverlay} setShowRotateOverlay={setShowRotateOverlay} />

      <div className="zoom-wrapper">
        {/* Starfield */}
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

        {/* About text */}
        <div className="floating-m5x7-text" style={{ top: "87.5%", left: "5%" }}>
          We are ZERO POINT GAMES, a creative partnership between Alieno and Michael, and an indie game studio based in Sydney, NSW. We're a passionate team of talented misfits who get to shine within the dark sky of the vast Internet.<br/><br/>
          Michael is our brilliant programmer and ambitious musician. He's spent years cultivating a deep love for video games and the art of writing beautiful code.<br/><br/>
          Alieno is an Italian-born, newly Aussie artist and writer. His bloated mind has been overflowing with worlds and characters, all ready to burst onto the screen.<br/><br/>
          Together with Selina, our resourceful graphic designer (who patiently puts up with our ridiculous requests), and supported by our amazing ZPG Community and the soggy settlement of SCUM VULLAGE, we strive to create exciting, imaginative games, powered by little more than a few cups of coffee and an unhealthy amount of garlic bread.<br/><br/>
          Our mascot, 0P, is a voidborne intergalactic explorer that loves eating clay. He's here to introduce you to our weird and wonderful creations.
        </div>

        {/* Floating Characters Canvas */}
        <canvas
          ref={characterCanvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            zIndex: -0.3,
            pointerEvents: 'none'
          }}
        />

        {/* Floating Arrow Canvas */}
        {showFloatingArrow && (
          <canvas
            ref={floatingArrowCanvasRef}
            className="floating-arrow-canvas"
            style={{
              position: 'absolute',
              top: '25%',
              left: '62%',
              margin: 0,
              padding: 0,
              zIndex: 1,
              pointerEvents: 'none',
              animation: 'float 2s ease-in-out infinite'
            }}
          />
        )}

        {/* Background images */}
        <img
          src={backgroundImageRight}
          style={{
            position: 'absolute',
            top: "5%",
            left: '48.7vw',
            width: `${backgroundImageWidth * scaleFactor}px`,
            height: 'auto',
            margin: 0,
            padding: 0,
            zIndex: -0.1
          }}
          alt="Background Right"
        />

        <img
          src={backgroundImage}
          ref={backgroundImageRef}
          style={{
            position: 'absolute',
            top: '5%',
            left: 0,
            width: `${backgroundImageWidth * scaleFactor}px`,
            height: 'auto',
            margin: 0,
            padding: 0,
            zIndex: -0.2
          }}
          alt="Background"
        />

        {/* White overlay */}
        <div style={{
          position: 'absolute',
          top: `calc(5% + ${scaledBackgroundHeight}px)`,
          left: 0,
          width: `${backgroundImageWidth * scaleFactor}px`,
          height: '200vh',
          background: '#fff',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* YouTube Player */}
        <YouTubePlayer video={video} isMuted={isMuted} scaleFactor={scaleFactor} />

        {/* Game Disks */}
        <GameDisks
          dimensions={dimensions}
          isZPSSideHovered={isZPSSideHovered}
          setIsZPSSideHovered={setIsZPSSideHovered}
          isZPSSideClicked={isZPSSideClicked}
          setIsZPSSideClicked={setIsZPSSideClicked}
          isTdSideHovered={isTdSideHovered}
          setIsTdSideHovered={setIsTdSideHovered}
          isTdSideClicked={isTdSideClicked}
          setIsTdSideClicked={setIsTdSideClicked}
          isArpgSideHovered={isArpgSideHovered}
          setIsArpgSideHovered={setIsArpgSideHovered}
          isArpgSideClicked={isArpgSideClicked}
          setIsArpgSideClicked={setIsArpgSideClicked}
          isZPSSideVinylHovered={isZPSSideVinylHovered}
          setIsZPSSideVinylHovered={setIsZPSSideVinylHovered}
          isZPSSideVinylClicked={isZPSSideVinylClicked}
          setIsZPSSideVinylClicked={setIsZPSSideVinylClicked}
          isTdSideVinylHovered={isTdSideVinylHovered}
          setIsTdSideVinylHovered={setIsTdSideVinylHovered}
          isTdSideVinylClicked={isTdSideVinylClicked}
          setIsTdSideVinylClicked={setIsTdSideVinylClicked}
          isArpgSideVinylHovered={isArpgSideVinylHovered}
          setIsArpgSideVinylHovered={setIsArpgSideVinylHovered}
          isArpgSideVinylClicked={isArpgSideVinylClicked}
          setIsArpgSideVinylClicked={setIsArpgSideVinylClicked}
          isFishSideVinylHovered={isFishSideVinylHovered}
          setIsFishSideVinylHovered={setIsFishSideVinylHovered}
          isFishSideVinylClicked={isFishSideVinylClicked}
          setIsFishSideVinylClicked={setIsFishSideVinylClicked}
          setVideo={setVideo}
          setIsMuted={setIsMuted}
          setShowFloatingArrow={setShowFloatingArrow}
          playRandomMusic={playRandomMusic}
          zpsMusic={zpsMusic}
          arpgMusic={arpgMusic}
          fishMusic={fishMusic}
        />

        {/* Scroll Arrows */}
        <ScrollArrows
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
          handleArrowClick={(toLeft) => handleArrowClick(toLeft, appRef)}
          leftArrowCanvasRef={leftArrowCanvasRef}
          rightArrowCanvasRef={rightArrowCanvasRef}
          dimensions={dimensions}
        />
      </div>
    </div>
  );
}

export default App;

