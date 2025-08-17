import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import GifHoverCanvas from './components/GifHoverCanvas';
import Header from './components/Header';
import RotateOverlay from './components/RotateOverlay';
import YouTubePlayer from './components/YouTubePlayer';
import ScrollArrows from './components/ScrollArrows';
import GameDisks from './components/GameDisks';
import PrivacyPolicy from './components/PrivacyPolicy';

// Import hooks
import { useDimensions } from './hooks/useDimensions';
import { useScroll } from './hooks/useScroll';
import { useAudioPlayer } from './hooks/useAudioPlayer';

// Import constants
import { zpsMusic, arpgMusic, fishMusic } from './constants/music';
import { 
  backgroundImage, backgroundImageRight, arrowSprite,
  shipGif, shipFrame1, zpGif, zpFrame1, boatframe1, blobframe1, winkframe1,
  boatGif, blobGif, winkGif, characterSprites,
  ZPSSide, ZPSFront, tdSide, tdFront, arpgSide, arpgFront, wwSide, wwFront
} from './constants/images';

// Game descriptions
const gameDescriptions = {
  zps: {
    title: "ZERO POINT SURVIVOR",
    description: `Zero Point Survivor is a space-themed take on the horde-survivor genre. Collect and level up your weapons, strengthening your arsenal with each run through universal upgrades to raise your survival chances. Face an endless barrage of enemies that want to break and destroy you... until you come face to face with the BOSS.

There are 4 unique ships to try, all with their own playstyles and different abilities. Pilot them through 3 different stages and conquer each level’s unique boss.

Follow Pleya Zeno's adventure for survival... with Zero Point.`,
    url: "https://store.steampowered.com/app/3476600/Zero_Point_Survivor/"
  },
  td: {
    title: "01 TOWER DEFENSE",
    description: `Strategize around randomly generated levels as you defend the city from the NUMBER invaders in this roguelike tower defense game.

Created entirely by Michael, this game features procedurally generated maps that ensure no two runs are ever the same. Each playthrough offers unique challenges as you build and upgrade your defensive towers to protect against increasingly difficult waves of enemies.

Experience the thrill of adapting your strategy to unpredictable layouts and enemy patterns in this innovative take on the tower defense genre.`,
    url: "https://gx.games/games/p42gse/01-tower-defense/"
  },
  arpg: {
    title: "A.R.P.G",
    description: `Soon, you will be able to experience three classic RPGMAKER2003 games in new and improved forms!

The games are:

Norman Jones Selling Extravaganza [Employee Of The Month Edition]

Professor Frippel's Special Invention Show - PEER REVIEWED

Miodesopsia

These games come featuring huge improvements in collaboration with PsychoAlpaca, co-creator of Norman Jones, and Michael, programmer and creator of the Zero Point Games Studio and Zero Point Survivor. Featuring music by Pixeltherapy, Viridian Wright and Michael!

You will see tons of new areas, obstacles, characters and enemies, as well as an incredibly thorough process of polishing and bugfixing. The three games will be packaged into one launcher, with tons of extra stuff!

Also experience the endless runner minigame "Imprisoned For Time", and tons of extras in the featured playable launcher!

-----

NOTE: These are not ARPGs...it's A.R.P.G.!`,
    url: "https://store.steampowered.com/app/3614300/ARPG_Collection__Sales_Science__Spirits/"
  },
  fish: {
    title: "WANDERER'S WATERS",
    description: `Welcome to the ultimate indie fishing adventure, crafted with passion by just three dedicated developers! Dive into a vibrant pixel world teeming with unique fish, mysterious creatures, and hidden treasures. Whether you're a casual angler or a master fisherman, there's something for everyone in this experience.

Features:

A Living World: Explore a variety of fishing spots, each with their own rare catches and secrets.

Over 50+ Fish and Creatures: From humble Cod and Salmon to elusive Narwhals and even Alligators, fill your collection and discover them all!

Upgrade Your Gear: Unlock and equip rods, reels, lines, and lures to improve your chances and tackle the toughest catches.

Chill or Challenge: Enjoy relaxing fishing at your own pace, or test your skills with rare and legendary fish.`,
    url: "https://store.steampowered.com/app/3864110/Wanderers_Waters/"
  }
};

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
  const [isWwSideHovered, setIsWwSideHovered] = useState(false);
  const [isWwSideClicked, setIsWwSideClicked] = useState(false);
  const [isZPSSideVinylHovered, setIsZPSSideVinylHovered] = useState(false);
  const [isZPSSideVinylClicked, setIsZPSSideVinylClicked] = useState(false);
  const [isTdSideVinylHovered, setIsTdSideVinylHovered] = useState(false);
  const [isTdSideVinylClicked, setIsTdSideVinylClicked] = useState(false);
  const [isArpgSideVinylHovered, setIsArpgSideVinylHovered] = useState(false);
  const [isArpgSideVinylClicked, setIsArpgSideVinylClicked] = useState(false);
  const [isFishSideVinylHovered, setIsFishSideVinylHovered] = useState(false);
  const [isFishSideVinylClicked, setIsFishSideVinylClicked] = useState(false);
  const [showRotateOverlay, setShowRotateOverlay] = useState(false);
  const [floatingCharacters, setFloatingCharacters] = useState([]);
  const [showFloatingArrow, setShowFloatingArrow] = useState(true);
  const [video, setVideo] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isDiskHovered, setIsDiskHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show rotate overlay only on mobile in portrait mode
  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const shouldShowOverlay = isMobile && isPortrait;
      setShowRotateOverlay(shouldShowOverlay);
    };
    
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [isMobile]);

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
      const currentScrollX = app.scrollLeft;
      
      const newShowLeft = currentScrollX > 0;
      const newShowRight = currentScrollX < maxScroll - 10;
      
      setShowLeftArrow(newShowLeft);
      setShowRightArrow(newShowRight);
      
      // Force another update on next frame to ensure it takes effect
      requestAnimationFrame(() => {
        setShowLeftArrow(newShowLeft);
        setShowRightArrow(newShowRight);
      });
    };

    // Initial calculation
    updateArrowVisibility();

    // Update on scroll
    const app = appRef.current;
    if (app) {
      app.addEventListener('scroll', updateArrowVisibility);
      return () => app.removeEventListener('scroll', updateArrowVisibility);
    }
  }, []);

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
      const textHeight = 20 * scaleFactor; // Extra space for text
      const textWidth = 80 * scaleFactor; // Extra width for text
      const totalWidth = Math.max(scaledWidth, textWidth);
      const totalHeight = scaledHeight + textHeight;
      const isPortrait = window.innerHeight > window.innerWidth;
      const multiplier = isPortrait ? 2 : 1;
      canvas.width = totalWidth * multiplier;
      canvas.height = totalHeight * multiplier;
      canvas.style.width = `${totalWidth}px`;
      canvas.style.height = `${totalHeight}px`;
      ctx.setTransform(multiplier, 0, 0, multiplier, 0, 0);
      // Disable image smoothing for pixel-perfect rendering
      ctx.imageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      
      // Add text above the arrow
      ctx.font = `${12 * scaleFactor}px m5x7`;
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('Click here!', totalWidth / 2, 5);
      
      // Draw the arrow image below the text, centered
      const arrowX = (totalWidth - scaledWidth) / 2;
      ctx.drawImage(img, arrowX, textHeight, scaledWidth, scaledHeight);
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

  const MainContent = () => (
    <div className="App" ref={appRef}>
      {/* GIF hover canvases */}
      <GifHoverCanvas gifSrc={shipGif} frameSrc={shipFrame1} alt="Ship" style={{ zIndex: 10, height: 50 * scaleFactor, top: "12.0%", left: "10%", scaleFactor: scaleFactor }} />
      <GifHoverCanvas gifSrc={zpGif} frameSrc={zpFrame1} alt="ZP" style={{ zIndex: 10, height: 50 * scaleFactor, top: "11%", left: "50%", scaleFactor: scaleFactor }} />
      <GifHoverCanvas gifSrc={boatGif} frameSrc={boatframe1} alt="ZP" style={{ zIndex: 10, height: 50 * scaleFactor, top: "11%", left: "65%", scaleFactor: scaleFactor }} />
      <GifHoverCanvas gifSrc={blobGif} frameSrc={blobframe1} alt="ZP" style={{ zIndex: 10, height: 50 * scaleFactor, top: "11%", left: "74%", scaleFactor: scaleFactor }} />
      <GifHoverCanvas gifSrc={winkGif} frameSrc={winkframe1} alt="ZP" style={{ zIndex: 10, height: 50 * scaleFactor, top: "11%", left: "85%", scaleFactor: scaleFactor }} />

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

        {/* About Us Hologram */}
        <div
          className="hologram-scrollbar"
          style={{
            position: 'absolute',
            top: '87.5%',
            left: (isMobile && window.innerHeight > window.innerWidth) ? '5%' : '5%',
            right: (isMobile && window.innerHeight > window.innerWidth) ? '54%' : '5%',
            transform: `translateX(${(isMobile && window.innerHeight > window.innerWidth) ? scrollX * 0.5 : scrollX}px)`,
            background: 'rgba(0, 100, 255, 0.1)',
            border: '2px solid rgba(0, 150, 255, 0.8)',
            borderRadius: '10px',
            padding: '20px',
            zIndex: 1000,
            backdropFilter: 'blur(5px)',
            boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
            animation: 'hologramGlow 2s ease-in-out infinite alternate'
          }}
        >
          <h3
            style={{
              color: '#00aaff',
              textAlign: 'center',
              margin: '0 0 15px 0',
              fontFamily: 'm5x7, monospace',
              fontSize: '30px',
              textShadow: '0 0 10px rgba(0, 150, 255, 0.8)'
            }}
          >
            ABOUT US
          </h3>
          <p
            style={{
              color: '#ffffff',
              textAlign: 'left',
              margin: 0,
              fontFamily: 'm5x7, monospace',
              fontSize: dimensions.viewportWidth > 768 ? '22px' : '14px',
              lineHeight: '1.4',
              textShadow: '0 0 5px rgba(0, 150, 255, 0.6)'
            }}
          >
            We are ZERO POINT GAMES, a creative partnership between Alieno and Michael, and an indie game studio based in Sydney, NSW. We're a passionate team of talented misfits who get to shine within the dark sky of the vast Internet.<br/><br/>
          Michael is our brilliant programmer and ambitious musician. He's spent years cultivating a deep love for video games and the art of writing beautiful code.<br/><br/>
        Alieno is an Italian-born, newly Aussie artist and writer. His bloated mind has been overflowing with worlds and characters, all ready to burst onto the screen.<br/><br/>
        Together with Selina, our resourceful graphic designer (who patiently puts up with our ridiculous requests), and supported by our amazing ZPG Community and the soggy settlement of SCUM VULLAGE, we strive to create exciting, imaginative games, powered by little more than a few cups of coffee and an unhealthy amount of garlic bread.<br/><br/>
          Our mascot, 0P, is a voidborne intergalactic explorer that loves eating clay. He's here to introduce you to our weird and wonderful creations.
          </p>
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
              left: '57%',
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
          background: '#171924',
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
          isWwSideHovered={isWwSideHovered}
          setIsWwSideHovered={setIsWwSideHovered}
          isWwSideClicked={isWwSideClicked}
          setIsWwSideClicked={setIsWwSideClicked}
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
          setSelectedGame={setSelectedGame}
          isDiskHovered={isDiskHovered}
          setIsDiskHovered={setIsDiskHovered}
        />

        {/* Game Description Hologram */}
        {selectedGame && (isMobile || !isDiskHovered) && (
          <div
            className="hologram-scrollbar"
          style={{
            position: 'absolute',
              top: '18.5%',
              left: '74.5%',
            transform: 'translateX(-50%)',
              background: 'rgba(0, 100, 255, 0.1)',
              border: '2px solid rgba(0, 150, 255, 0.8)',
              borderRadius: '10px',
              padding: '20px',
              width: '40%',
              maxHeight: '20%',
              overflowY: 'auto',
              zIndex: 1000,
              backdropFilter: 'blur(5px)',
              boxShadow: '0 0 20px rgba(0, 150, 255, 0.5)',
              animation: 'hologramGlow 2s ease-in-out infinite alternate'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedGame(null)}
          style={{
            position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'rgba(255, 0, 0, 0.2)',
                border: '1px solid rgba(255, 0, 0, 0.6)',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                color: '#ff6666',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'm5x7, monospace',
                transition: 'all 0.3s ease',
                zIndex: 1001
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 0, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 0, 0.8)';
                e.target.style.color = '#ff8888';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 0, 0, 0.2)';
                e.target.style.borderColor = 'rgba(255, 0, 0, 0.6)';
                e.target.style.color = '#ff6666';
              }}
            >
              ×
            </button>
            <h3
          style={{
                color: '#00aaff',
                textAlign: 'center',
                margin: '0 0 10px 0',
                fontFamily: 'm5x7, monospace',
                fontSize: '30px',
                textShadow: '0 0 10px rgba(0, 150, 255, 0.8)'
              }}
            >
              {gameDescriptions[selectedGame].title}
            </h3>
            <p
          style={{
                color: '#ffffff',
                textAlign: 'center',
            margin: 0,
                fontFamily: 'm5x7, monospace',
                fontSize: dimensions.viewportWidth > 768 ? '22px' : '14px',
                lineHeight: '1.4',
                textShadow: '0 0 5px rgba(0, 150, 255, 0.6)'
              }}
            >
              {gameDescriptions[selectedGame].description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < gameDescriptions[selectedGame].description.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
            <a
              href={gameDescriptions[selectedGame].url}
              target="_blank"
              rel="noopener noreferrer"
          style={{
                display: 'block',
                marginTop: '10px',
                color: '#00aaff',
                textDecoration: 'none',
                fontFamily: 'm5x7, monospace',
                fontSize: '24px',
                textAlign: 'center',
                textShadow: '0 0 5px rgba(0, 150, 255, 0.6)',
                transition: 'all 0.3s ease',
              cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '5px',
                border: '1px solid rgba(0, 150, 255, 0.3)',
                background: 'rgba(0, 100, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ffffff';
                e.target.style.textShadow = '0 0 10px rgba(0, 200, 255, 1)';
                e.target.style.borderColor = 'rgba(0, 200, 255, 0.8)';
                e.target.style.background = 'rgba(0, 150, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#00aaff';
                e.target.style.textShadow = '0 0 5px rgba(0, 150, 255, 0.6)';
                e.target.style.borderColor = 'rgba(0, 150, 255, 0.3)';
                e.target.style.background = 'rgba(0, 100, 255, 0.1)';
              }}
            >
              Check it out!
            </a>
          </div>
        )}

        {/* Scroll Arrows */}
        <ScrollArrows
          key={`${showLeftArrow}-${showRightArrow}`}
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;

