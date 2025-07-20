import { useEffect, useRef } from 'react';
import { 
  ZPSSide, ZPSFront, tdSide, tdFront, arpgSide, arpgFront,
  zpsSideVinyl, zpsFrontVinyl, tdSideVinyl, tdFrontVinyl, 
  arpgSideVinyl, arpgFrontVinyl, fishSideVinyl, fishFrontVinyl,
  DiskTop
} from '../constants/images';

function GameDisks({
  dimensions,
  isZPSSideHovered, setIsZPSSideHovered, isZPSSideClicked, setIsZPSSideClicked,
  isTdSideHovered, setIsTdSideHovered, isTdSideClicked, setIsTdSideClicked,
  isArpgSideHovered, setIsArpgSideHovered, isArpgSideClicked, setIsArpgSideClicked,
  isZPSSideVinylHovered, setIsZPSSideVinylHovered, isZPSSideVinylClicked, setIsZPSSideVinylClicked,
  isTdSideVinylHovered, setIsTdSideVinylHovered, isTdSideVinylClicked, setIsTdSideVinylClicked,
  isArpgSideVinylHovered, setIsArpgSideVinylHovered, isArpgSideVinylClicked, setIsArpgSideVinylClicked,
  isFishSideVinylHovered, setIsFishSideVinylHovered, isFishSideVinylClicked, setIsFishSideVinylClicked,
  setVideo, setIsMuted, setShowFloatingArrow, playRandomMusic, zpsMusic, arpgMusic, fishMusic
}) {
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

  // ZPS Side Disk Canvas
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
    img.src = ZPSSide;
  }, [dimensions.scaleFactor, ZPSSide]);

  // ZPS Front Disk Canvas
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

    img.src = ZPSFront;
  }, [dimensions.scaleFactor, ZPSFront]);

  // Tower Defense Side Disk Canvas
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

    img.src = tdSide;
  }, [dimensions.scaleFactor, tdSide]);

  // Tower Defense Front Disk Canvas
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

    img.src = tdFront;
  }, [dimensions.scaleFactor, tdFront]);

  // ARPG Side Disk Canvas
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

    img.src = arpgSide;
  }, [dimensions.scaleFactor, arpgSide]);

  // ARPG Front Disk Canvas
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

    img.src = arpgFront;
  }, [dimensions.scaleFactor, arpgFront]);

  // ZPS Side Vinyl Canvas
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

    img.src = zpsSideVinyl;
  }, [dimensions.scaleFactor, zpsSideVinyl]);

  // ZPS Front Vinyl Canvas
  useEffect(() => {
    const canvas = zpsFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
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

    img.src = zpsFrontVinyl;
  }, [dimensions.scaleFactor, zpsFrontVinyl]);

  // Tower Defense Side Vinyl Canvas
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

    img.src = tdSideVinyl;
  }, [dimensions.scaleFactor, tdSideVinyl]);

  // Tower Defense Front Vinyl Canvas
  useEffect(() => {
    const canvas = tdFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
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

    img.src = tdFrontVinyl;
  }, [dimensions.scaleFactor, tdFrontVinyl]);

  // ARPG Side Vinyl Canvas
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

    img.src = arpgSideVinyl;
  }, [dimensions.scaleFactor, arpgSideVinyl]);

  // ARPG Front Vinyl Canvas
  useEffect(() => {
    const canvas = arpgFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
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

    img.src = arpgFrontVinyl;
  }, [dimensions.scaleFactor, arpgFrontVinyl]);

  // Fish Side Vinyl Canvas
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

    img.src = fishSideVinyl;
  }, [dimensions.scaleFactor, fishSideVinyl]);

  // Fish Front Vinyl Canvas
  useEffect(() => {
    const canvas = fishFrontVinylCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const scaleFactor = dimensions.scaleFactor;
      const scaledWidth = scaleFactor * img.width * 1.3;
      const scaledHeight = scaleFactor * img.height * 1.3;
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

    img.src = fishFrontVinyl;
  }, [dimensions.scaleFactor, fishFrontVinyl]);

  // Click timeout effects
  useEffect(() => {
    if (isZPSSideClicked) {
      const timer = setTimeout(() => {
        setIsZPSSideClicked(false);
      }, 800);
      setIsZPSSideHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isZPSSideClicked, setIsZPSSideClicked, setIsZPSSideHovered]);

  useEffect(() => {
    if (isTdSideClicked) {
      const timer = setTimeout(() => {
        setIsTdSideClicked(false);
      }, 800);
      setIsTdSideHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isTdSideClicked, setIsTdSideClicked, setIsTdSideHovered]);

  useEffect(() => {
    if (isArpgSideClicked) {
      const timer = setTimeout(() => {
        setIsArpgSideClicked(false);
      }, 800);
      setIsArpgSideHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isArpgSideClicked, setIsArpgSideClicked, setIsArpgSideHovered]);

  useEffect(() => {
    if (isZPSSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsZPSSideVinylClicked(false);
      }, 800);
      setIsZPSSideVinylHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isZPSSideVinylClicked, setIsZPSSideVinylClicked, setIsZPSSideVinylHovered]);

  useEffect(() => {
    if (isTdSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsTdSideVinylClicked(false);
      }, 800);
      setIsTdSideVinylHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isTdSideVinylClicked, setIsTdSideVinylClicked, setIsTdSideVinylHovered]);

  useEffect(() => {
    if (isArpgSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsArpgSideVinylClicked(false);
      }, 800);
      setIsArpgSideVinylHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isArpgSideVinylClicked, setIsArpgSideVinylClicked, setIsArpgSideVinylHovered]);

  useEffect(() => {
    if (isFishSideVinylClicked) {
      const timer = setTimeout(() => {
        setIsFishSideVinylClicked(false);
      }, 800);
      setIsFishSideVinylHovered(false);
      return () => clearTimeout(timer);
    }
  }, [isFishSideVinylClicked, setIsFishSideVinylClicked, setIsFishSideVinylHovered]);

  const diskTopWidth = 133;
  const scaleFactor = dimensions.scaleFactor;

  return (
    <>
      {/* ZPS Side Disk */}
      <canvas
        ref={canvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideHovered ? "27.28%" : "29.28%",
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
          setShowFloatingArrow(false);
        }}
      />

      {/* ZPS Front Disk */}
      <canvas
        ref={zpsFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isZPSSideClicked ? "37%" : "17%",
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
          top: isTdSideHovered ? "27.28%" : "29.28%",
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
          setShowFloatingArrow(false);
        }}
      />

      {/* Tower Defense Front Disk */}
      <canvas
        ref={tdFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isTdSideClicked ? "37%" : "17%",
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
          top: isArpgSideHovered ? "27.28%" : "29.28%",
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
          setShowFloatingArrow(false);
        }}
      />

      {/* ARPG Front Disk */}
      <canvas
        ref={arpgFrontCanvasRef}
        className="disk-canvas"
        style={{
          position: 'absolute',
          top: isArpgSideClicked ? "37%" : "17%",
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
          setShowFloatingArrow(false);
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
          setShowFloatingArrow(false);
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
          setShowFloatingArrow(false);
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
          setShowFloatingArrow(false);
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
          top: "34.645%",
          left: "60.69%",
          width: `${diskTopWidth * scaleFactor}px`,
          height: 'auto',
          margin: 0,
          padding: 0,
          zIndex: 999,
        }}
        alt="DiskTop"
      />
    </>
  );
}

export default GameDisks; 