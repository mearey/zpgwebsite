import siteheader from './websiteheader.png';
import discordIcon from "./icons/aav06vw3u.png"
import steamIcon from "./icons/steam-round-logo-icon-download-png-701751694966032dl6elakl5o.png"
import blueskyIcon from "./icons/bluesky-icon.png"
import youtubeIcon from "./icons/youtube_pixel.png"
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
import zpsSideVinyl from "./images/vinyls/zpsside.png"
import zpsFrontVinyl from "./images/vinyls/zpsfront.png"
import tdSideVinyl from "./images/vinyls/idside.png"
import tdFrontVinyl from "./images/vinyls/tdfront.png"
import arpgSideVinyl from "./images/vinyls/arpgside.png"
import arpgFrontVinyl from "./images/vinyls/arpgfront.png"
import fishSideVinyl from "./images/vinyls/fishinside.png"
import fishFrontVinyl from "./images/vinyls/fishinfront.png"

// Import music files
import fishingGameSong from "./music/fishin/fishinggamesong.wav"
import zpsLevel1Song from "./music/ZPS/Level1Song.wav"
import zpsLevel2Song from "./music/ZPS/Level2Song.wav"
import zpsLevel3Song from "./music/ZPS/Level3Song.wav"
import zpsLevel4Song1 from "./music/ZPS/Level4song3.wav"
import zpsLevel4Song2 from "./music/ZPS/Level4song4.wav"
import zpsLevel1Var1 from "./music/ZPS/level1songvar1.wav"
import zpsLevel1Var3 from "./music/ZPS/level1sonvar3.wav"
import zpsLevel2Var2 from "./music/ZPS/level2Songvar2.wav"
import zpsLevel2Var3 from "./music/ZPS/level2Songvar3.wav"
import arpgTonightGrimes from "./music/arpg/Tonight Grimes Incredible Fortune.wav"
import arpgTonightGives from "./music/arpg/Tonight Gives Incredible Fortune.wav"
import arpgRatsOnMoon from "./music/arpg/Rats on the moon instrumental.wav"
import arpgCasinoIndulgence from "./music/arpg/Casino Indulgence With Vacuuming.wav"
import arpgWoodenRoom from "./music/arpg/wooden-room-171813.mp3"
import arpgCheeseNew1 from "./music/arpg/cheesenew1.mp3"
import arpgCheeseNew2 from "./music/arpg/cheesenew2.mp3"
import arpgWashingMachine from "./music/arpg/Washing machine wallop.mp3"
import arpgTimeForScience from "./music/arpg/Time For Science.mp3"
import arpgTimeForScienceTown from "./music/arpg/Time For Science In Science Town.mp3"
import arpgSmellyAmbient from "./music/arpg/Smelly Ambient....mp3"
import arpgScienceMachineBroke from "./music/arpg/Sciencemachinebroke.mp3"
import arpgRatsOnMoonMp3 from "./music/arpg/Rats on the moon.mp3"
import arpgNerdBuilding from "./music/arpg/Nerd Building.mp3"
import arpgMysteriousTwo from "./music/arpg/Mysterious...Two....mp3"
import arpgMiceFight1 from "./music/arpg/Mice Fight.mp3"
import arpgMiceFight2 from "./music/arpg/Mice Fight Two.mp3"
import arpgCheeseMystery from "./music/arpg/Cheesemystery.mp3"
import arpgCheeseCave from "./music/arpg/Cheese Cave.mp3"
import arpgStompAndClaps from "./music/arpg/stomp-and-claps-127551.mp3"

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
  const [isZPSSideVinylHovered, setIsZPSSideVinylHovered] = useState(false);
  const [isZPSSideVinylClicked, setIsZPSSideVinylClicked] = useState(false);
  const [isTdSideVinylHovered, setIsTdSideVinylHovered] = useState(false);
  const [isTdSideVinylClicked, setIsTdSideVinylClicked] = useState(false);
  const [isArpgSideVinylHovered, setIsArpgSideVinylHovered] = useState(false);
  const [isArpgSideVinylClicked, setIsArpgSideVinylClicked] = useState(false);
  const [isFishSideVinylHovered, setIsFishSideVinylHovered] = useState(false);
  const [isFishSideVinylClicked, setIsFishSideVinylClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showRotateOverlay, setShowRotateOverlay] = useState(true);
  const [video, setVideo] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const canvasRef = useRef(null);
  const zpsFrontCanvasRef = useRef(null);
  const tdSideCanvasRef = useRef(null);
  const tdFrontCanvasRef = useRef(null);
  const arpgSideCanvasRef = useRef(null);
  const arpgFrontCanvasRef = useRef(null);
  const zpsSideVinylCanvasRef = useRef(null);
  const zpsFrontVinylCanvasRef = useRef(null);
  const tdSideVinylCanvasRef = useRef(null);
  const tdFrontVinylCanvasRef = useRef(null);
  const arpgSideVinylCanvasRef = useRef(null);
  const arpgFrontVinylCanvasRef = useRef(null);
  const fishSideVinylCanvasRef = useRef(null);
  const fishFrontVinylCanvasRef = useRef(null);
  const starfieldRef = useRef(null);
  const scrollLerpRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [appWidth, setAppWidth] = useState(window.innerWidth);

  const appRef = useRef(null);

  // Music arrays
  const zpsMusic = [
    zpsLevel1Song, zpsLevel2Song, zpsLevel3Song, zpsLevel4Song1, zpsLevel4Song2,
    zpsLevel1Var1, zpsLevel1Var3, zpsLevel2Var2, zpsLevel2Var3
  ];
  
  const arpgMusic = [
    arpgTonightGrimes, arpgTonightGives, arpgRatsOnMoon, arpgCasinoIndulgence,
    arpgWoodenRoom, arpgCheeseNew1, arpgCheeseNew2, arpgWashingMachine,
    arpgTimeForScience, arpgTimeForScienceTown, arpgSmellyAmbient, arpgScienceMachineBroke,
    arpgRatsOnMoonMp3, arpgNerdBuilding, arpgMysteriousTwo, arpgMiceFight1,
    arpgMiceFight2, arpgCheeseMystery, arpgCheeseCave, arpgStompAndClaps
  ];
  
  const fishMusic = [fishingGameSong];

  // Function to play random music from a given array
  const playRandomMusic = (musicArray) => {
    // Stop current audio if playing
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    
    // Select random song
    const randomIndex = Math.floor(Math.random() * musicArray.length);
    const selectedMusic = musicArray[randomIndex];
    
    // Create new audio element
    const audio = new Audio(selectedMusic);
    audio.volume = 0.5; // Set volume to 50%
    audio.loop = true; // Loop the music
    
    // Play the music
    audio.play().then(() => {
      setCurrentAudio(audio);
      setIsAudioPlaying(true);
    }).catch(error => {
      console.error('Error playing audio:', error);
    });
  };

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

  useEffect(() => {
    if (isZPSSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsZPSSideVinylClicked(false);
      }, 800);
      setIsZPSSideVinylHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isZPSSideVinylClicked]);

  useEffect(() => {
    if (isTdSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsTdSideVinylClicked(false);
      }, 800);
      setIsTdSideVinylHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isTdSideVinylClicked]);

  useEffect(() => {
    if (isArpgSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsArpgSideVinylClicked(false);
      }, 800);
      setIsArpgSideVinylHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isArpgSideVinylClicked]);

  useEffect(() => {
    if (isFishSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsFishSideVinylClicked(false);
      }, 800);
      setIsFishSideVinylHovered(false)
      return () => clearTimeout(timer);
    }
  }, [isFishSideVinylClicked]);

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

  // ZPS Side Vinyl
  useEffect(() => {
    const canvas = zpsSideVinylCanvasRef.current;
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
    
    img.src = zpsSideVinyl;
  }, [dimensions.scaleFactor, zpsSideVinyl]);

  // ZPS Front Vinyl
  useEffect(() => {
    const canvas = zpsFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
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
    
    img.src = zpsFrontVinyl;
  }, [dimensions.scaleFactor, zpsFrontVinyl]);

  // Tower Defense Side Vinyl
  useEffect(() => {
    const canvas = tdSideVinylCanvasRef.current;
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
    
    img.src = tdSideVinyl;
  }, [dimensions.scaleFactor, tdSideVinyl]);

  // Tower Defense Front Vinyl
  useEffect(() => {
    const canvas = tdFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
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
    
    img.src = tdFrontVinyl;
  }, [dimensions.scaleFactor, tdFrontVinyl]);

  // ARPG Side Vinyl
  useEffect(() => {
    const canvas = arpgSideVinylCanvasRef.current;
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
    
    img.src = arpgSideVinyl;
  }, [dimensions.scaleFactor, arpgSideVinyl]);

  // ARPG Front Vinyl
  useEffect(() => {
    const canvas = arpgFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
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
    
    img.src = arpgFrontVinyl;
  }, [dimensions.scaleFactor, arpgFrontVinyl]);

  // Fish Side Vinyl
  useEffect(() => {
    const canvas = fishSideVinylCanvasRef.current;
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
    
    img.src = fishSideVinyl;
  }, [dimensions.scaleFactor, fishSideVinyl]);

  // Fish Front Vinyl
  useEffect(() => {
    const canvas = fishFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
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
    
    img.src = fishFrontVinyl;
  }, [dimensions.scaleFactor, fishFrontVinyl]);
  console.log({ scrollX, maxScroll, showLeftArrow, showRightArrow });
  return (
    <div className="App" ref={appRef}>
      {showRotateOverlay && (
        <div className="rotate-device-overlay">
          Please rotate your device for the best experience!
          <br />
          <span style={{fontSize: '2em', display: 'block', marginTop: '20px'}}>🔄</span>
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
      )}
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
          top: "5%",
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
          top: '5%',
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
        top: '15.28%',
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
          top: isZPSSideHovered ? "25.28%" : "27.28%",
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
          top: isZPSSideClicked ? "35%" : "15%",
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
          top: isTdSideHovered ? "25.28%" : "27.28%",
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
          top: isTdSideClicked ? "35%" : "15%",
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
          top: isArpgSideHovered ? "25.28%" : "27.28%",
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
          top: isArpgSideClicked ? "35%" : "15%",
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

      {/* ZPS Side Vinyl */}
      <canvas 
        ref={zpsSideVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideVinylHovered ? "12.28%" : "14.28%",
          left: "105%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsZPSSideVinylHovered(true)}
        onMouseLeave={() => setIsZPSSideVinylHovered(false)}
        onClick={() => {
          setIsZPSSideVinylClicked(true);
          setIsTdSideVinylClicked(false);
          setIsArpgSideVinylClicked(false);
          setIsFishSideVinylClicked(false);
          playRandomMusic(zpsMusic);
        }}
      />

      {/* ZPS Front Vinyl */}
      <canvas 
        ref={zpsFrontVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideVinylClicked ? "22%" : "2%",
          left: isZPSSideVinylClicked ? "112.75%" : "105%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isZPSSideVinylHovered && !isZPSSideVinylClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      {/* Tower Defense Side Vinyl */}
      <canvas 
        ref={tdSideVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isTdSideVinylHovered ? "12.28%" : "14.28%",
          left: "105.75%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsTdSideVinylHovered(true)}
        onMouseLeave={() => setIsTdSideVinylHovered(false)}
        onClick={() => {
          setIsTdSideVinylClicked(true);
          setIsZPSSideVinylClicked(false);
          setIsArpgSideVinylClicked(false);
          setIsFishSideVinylClicked(false);
          // No music for Tower Defense yet
        }}
      />

      {/* Tower Defense Front Vinyl */}
      <canvas 
        ref={tdFrontVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isTdSideVinylClicked ? "22%" : "2%",
          left: isTdSideVinylClicked ? "112.75%" : "105.75%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isTdSideVinylHovered && !isTdSideVinylClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      {/* ARPG Side Vinyl */}
      <canvas 
        ref={arpgSideVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isArpgSideVinylHovered ? "12.28%" : "14.28%",
          left: "106.5%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsArpgSideVinylHovered(true)}
        onMouseLeave={() => setIsArpgSideVinylHovered(false)}
        onClick={() => {
          setIsArpgSideVinylClicked(true);
          setIsZPSSideVinylClicked(false);
          setIsTdSideVinylClicked(false);
          setIsFishSideVinylClicked(false);
          playRandomMusic(arpgMusic);
        }}
      />

      {/* ARPG Front Vinyl */}
      <canvas 
        ref={arpgFrontVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isArpgSideVinylClicked ? "22%" : "2%",
          left: isArpgSideVinylClicked ? "112.75%" : "106.5%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isArpgSideVinylHovered && !isArpgSideVinylClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      {/* Fish Side Vinyl */}
      <canvas 
        ref={fishSideVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isFishSideVinylHovered ? "12.28%" : "14.28%",
          left: "107.25%",
          margin: 0,
          padding: 0,
          zIndex: 1,
          transition: 'top 0.3s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setIsFishSideVinylHovered(true)}
        onMouseLeave={() => setIsFishSideVinylHovered(false)}
        onClick={() => {
          setIsFishSideVinylClicked(true);
          setIsZPSSideVinylClicked(false);
          setIsTdSideVinylClicked(false);
          setIsArpgSideVinylClicked(false);
          playRandomMusic(fishMusic);
        }}
      />

      {/* Fish Front Vinyl */}
      <canvas 
        ref={fishFrontVinylCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isFishSideVinylClicked ? "22%" : "2%",
          left: isFishSideVinylClicked ? "112.75%" : "107.25%",
          transform: 'translateX(-50%)',
          margin: 0,
          padding: 0,
          zIndex: 2,
          opacity: isFishSideVinylHovered && !isFishSideVinylClicked ? 1 : 0,
          transition: 'all 0.8s ease-in-out',
          cursor: 'pointer'
        }}
      />

      <img 
        src={DiskTop} 
        className="disk-holder"
        style={{
          position: 'absolute',
          top: "31.485%",
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
          <a href="https://www.youtube.com/@Zero_Point_Games" target='_blank' style={{ position:"absolute",left:"25px"}}>
            <input type="image" class="icon" src={youtubeIcon} ></input>
          </a>
          <a href="https://discord.gg/cF2vQmkXV6" target='_blank' style={{ position:"absolute",left:"75px"}}>
            <input type="image" class="icon" src={discordIcon} ></input>
          </a>
          <a href="https://store.steampowered.com/search/?developer=Zero%20Point%20Games" target='_blank'style={{ position:"absolute",left:"125px"}}>
            <input class="icon" type="image" src={steamIcon}></input>
          </a>
          <a
            href="https://bsky.app/profile/zero-point-games.bsky.social"
            target="_blank"
            style={{ position: 'absolute', left: '175px' }}
          >
            <input className="icon" type="image" src={blueskyIcon}></input>
          </a>
          <img style={{height:"110px", right:"25px", position:"absolute",}} src={iconOfSin} className="top-logo" />
        </div>
      </header>

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

