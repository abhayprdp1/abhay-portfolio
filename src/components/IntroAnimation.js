import React, { useEffect, useRef, useState, useCallback } from 'react';
import './IntroAnimation.css';

class Particle {
  constructor() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.target = { x: 0, y: 0 };
    this.closeEnoughTarget = 100;
    this.maxSpeed = 9;
    this.maxForce = 0.5;
    this.particleSize = 6;
    this.isKilled = false;
    this.startColor = { r: 16, g: 185, b: 129 };
    this.targetColor = { r: 16, g: 185, b: 129 };
    this.colorWeight = 0;
    this.colorBlendRate = 0.04;
  }

  move() {
    let distanceFactor = 1;
    const dist = Math.sqrt(
      Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2)
    );
    if (dist < this.closeEnoughTarget) {
      distanceFactor = dist / this.closeEnoughTarget;
    }

    let desired = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y
    };
    const dLen = Math.sqrt(desired.x * desired.x + desired.y * desired.y);
    if (dLen > 0) {
      desired.x = (desired.x / dLen) * this.maxSpeed * distanceFactor;
      desired.y = (desired.y / dLen) * this.maxSpeed * distanceFactor;
    }

    let steer = {
      x: desired.x - this.vel.x,
      y: desired.y - this.vel.y
    };
    const sLen = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
    if (sLen > 0) {
      steer.x = (steer.x / sLen) * this.maxForce;
      steer.y = (steer.y / sLen) * this.maxForce;
    }

    this.acc.x += steer.x;
    this.acc.y += steer.y;

    this.vel.x += this.acc.x;
    this.vel.y += this.acc.y;

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    this.acc.x = 0;
    this.acc.y = 0;
  }

  draw(ctx) {
    if (this.colorWeight < 1) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1);
    }
    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight);
    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight);
    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);

    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  kill(width, height) {
    if (!this.isKilled) {
      const scatter = randomPointAround(width / 2, height / 2, (width + height) / 2, width, height);
      this.target.x = scatter.x;
      this.target.y = scatter.y;
      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight
      };
      this.targetColor = { r: 0, g: 0, b: 0 };
      this.colorWeight = 0;
      this.isKilled = true;
    }
  }
}

function randomPointAround(cx, cy, radius, width, height) {
  let vec = {
    x: Math.random() * width - cx,
    y: Math.random() * height - cy
  };
  const len = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
  if (len > 0) {
    vec.x = (vec.x / len) * radius;
    vec.y = (vec.y / len) * radius;
  }
  return { x: cx + vec.x, y: cy + vec.y };
}

const DEFAULT_WORDS = ["WELCOME TO", "ABHAY'S PORTFOLIO"];
const COLOR_PALETTE = [
  { r: 52, g: 211, b: 153 }, // Emerald
  { r: 6, g: 182, b: 212 },   // Cyan
  { r: 168, g: 85, b: 247 },  // Purple
  { r: 255, g: 255, b: 255 }  // White
];

const IntroAnimation = ({ onFinish }) => {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const particlesRef = useRef([]);
  const frameCountRef = useRef(0);
  const currentWordIndexRef = useRef(0);
  const isFinishedRef = useRef(false);
  const [isFading, setIsFading] = useState(false);

  const handleSkip = useCallback(() => {
    if (isFinishedRef.current) return;
    isFinishedRef.current = true;
    setIsFading(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 350);
  }, [onFinish]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const canvas = canvasRef.current;
    if (!canvas) return;

    const calculateStep = (w, h) => Math.max(5, Math.round(5 * Math.sqrt((w * h) / 500000)));

    const renderTextToParticles = (word, canvasEl) => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = canvasEl.width;
      offCanvas.height = canvasEl.height;
      const offCtx = offCanvas.getContext('2d');

      let fontSize = Math.floor(0.14 * canvasEl.height);
      offCtx.font = `900 ${fontSize}px "Outfit", "Arial", sans-serif`;
      while (offCtx.measureText(word).width > 0.85 * canvasEl.width && fontSize > 14) {
        fontSize -= 2;
        offCtx.font = `900 ${fontSize}px "Outfit", "Arial", sans-serif`;
      }

      offCtx.fillStyle = 'white';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillText(word, canvasEl.width / 2, canvasEl.height / 2);

      const imgData = offCtx.getImageData(0, 0, canvasEl.width, canvasEl.height).data;
      const targetColor = COLOR_PALETTE[currentWordIndexRef.current % COLOR_PALETTE.length];
      const particles = particlesRef.current;
      let particleCount = 0;
      const step = calculateStep(canvasEl.width, canvasEl.height);

      const indices = [];
      for (let i = 0; i < imgData.length; i += 4 * step) {
        indices.push(i);
      }
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      for (const idx of indices) {
        if (imgData[idx + 3] > 128) {
          const pixelX = (idx / 4) % canvasEl.width;
          const pixelY = Math.floor(idx / 4 / canvasEl.width);

          let p;
          if (particleCount < particles.length) {
            p = particles[particleCount];
            p.isKilled = false;
            particleCount++;
          } else {
            p = new Particle();
            const spawnPos = randomPointAround(
              canvasEl.width / 2,
              canvasEl.height / 2,
              (canvasEl.width + canvasEl.height) / 2,
              canvasEl.width,
              canvasEl.height
            );
            p.pos.x = spawnPos.x;
            p.pos.y = spawnPos.y;
            p.maxSpeed = 8 + Math.random() * 6;
            p.maxForce = 0.12 * p.maxSpeed;
            p.particleSize = 4 + Math.random() * 4;
            p.colorBlendRate = 0.04 + Math.random() * 0.03;
            particles.push(p);
          }

          p.startColor = {
            r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
            g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
            b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight
          };
          p.targetColor = targetColor;
          p.colorWeight = 0;
          p.target.x = pixelX;
          p.target.y = pixelY;
        }
      }

      for (let i = particleCount; i < particles.length; i++) {
        particles[i].kill(canvasEl.width, canvasEl.height);
      }
    };

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderTextToParticles(DEFAULT_WORDS[currentWordIndexRef.current], canvas);
    };

    updateCanvasSize();

    const loop = () => {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(3, 0, 20, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.move();
        p.draw(ctx);
        if (
          p.isKilled &&
          (p.pos.x < 0 || p.pos.x > canvas.width || p.pos.y < 0 || p.pos.y > canvas.height)
        ) {
          particles.splice(i, 1);
        }
      }

      frameCountRef.current++;
      // Faster word transition: 75 frames (~1.25s per word)
      if (frameCountRef.current % 75 === 0) {
        if (currentWordIndexRef.current === DEFAULT_WORDS.length - 1) {
          handleSkip();
          return;
        } else {
          currentWordIndexRef.current++;
          renderTextToParticles(DEFAULT_WORDS[currentWordIndexRef.current], canvas);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    loop();

    const handleResize = () => {
      updateCanvasSize();
    };

    const handleKeyDown = (e) => {
      if (!['Tab', 'Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
        handleSkip();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleSkip]);

  return (
    <div
      className={`intro-overlay ${isFading ? 'fade-out' : ''}`}
      onClick={handleSkip}
      role="button"
      tabIndex={0}
      aria-label="Skip intro animation"
    >
      <canvas ref={canvasRef} className="intro-canvas" />
      <div className="skip-hint">Click anywhere to skip</div>
    </div>
  );
};

export default IntroAnimation;
