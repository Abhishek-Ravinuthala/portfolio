"use client";

import { useEffect, useRef, useState } from "react";

type RawParticle = { x: number; y: number; r: number; g: number; b: number; alpha: number };

type Particle = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  color: string;
  baseAlpha: number;
  currentAlpha: number;
  delay: number;
  shimmer: number;
};

const imageCache: Record<number, RawParticle[]> = {};
const PALETTE_STEP = 22;

function quantize(channel: number) {
  return Math.min(255, Math.round(channel / PALETTE_STEP) * PALETTE_STEP);
}

function calculateSize(width: number) {
  if (width <= 480) return Math.min(280, width - 32);
  if (width <= 768) return Math.min(360, width - 48);
  return 460;
}

function createParticles(raw: RawParticle[]): Particle[] {
  return raw.map((p) => ({
    x: p.x + (Math.random() - 0.5) * 400,
    y: p.y + (Math.random() - 0.5) * 400,
    targetX: p.x,
    targetY: p.y,
    vx: 0,
    vy: 0,
    color: `${p.r}, ${p.g}, ${p.b}`,
    baseAlpha: p.alpha,
    currentAlpha: 0,
    delay: Math.random() * 0.4,
    shimmer: Math.random() * Math.PI * 2,
  }));
}

function sampleImage(img: HTMLImageElement, targetSize: number): RawParticle[] {
  const offscreen = document.createElement("canvas");
  offscreen.width = targetSize;
  offscreen.height = targetSize;
  const ctx = offscreen.getContext("2d")!;

  const scale = 0.9;
  const imgAspect = img.width / img.height;
  let drawHeight = targetSize * scale;
  let drawWidth = drawHeight * imgAspect;
  if (drawWidth > targetSize * scale) {
    drawWidth = targetSize * scale;
    drawHeight = drawWidth / imgAspect;
  }
  const offsetX = (targetSize - drawWidth) / 2;
  const offsetY = (targetSize - drawHeight) / 2;
  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

  const { data } = ctx.getImageData(0, 0, targetSize, targetSize);
  const isMobileSize = targetSize <= 280;
  const cell = isMobileSize ? 6 : 8;

  const raw: RawParticle[] = [];
  for (let y = 0; y < targetSize; y += cell) {
    for (let x = 0; x < targetSize; x += cell) {
      const i = (Math.floor(y) * targetSize + Math.floor(x)) * 4;
      const a = data[i + 3];
      if (a > 128) {
        raw.push({
          x: Number(x.toFixed(1)),
          y: Number(y.toFixed(1)),
          r: quantize(data[i]),
          g: quantize(data[i + 1]),
          b: quantize(data[i + 2]),
          alpha: 1,
        });
      }
    }
  }
  return raw;
}

export default function PixelPortrait({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const mouseTargetRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number | null>(null);

  const [size, setSize] = useState(460);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onResize = () => setSize(calculateSize(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setReady(false);
    if (imageCache[size]) {
      particlesRef.current = createParticles(imageCache[size]);
      setReady(true);
      startTimeRef.current = performance.now();
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => {
      const raw = sampleImage(img, size);
      imageCache[size] = raw;
      particlesRef.current = createParticles(raw);
      setReady(true);
      startTimeRef.current = performance.now();
    };
  }, [size, src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let animationId: number;
    const isMobileSize = size <= 280;
    const cell = isMobileSize ? 6 : 8;
    const block = cell * 0.88;
    const half = block / 2;

    const draw = () => {
      animationId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, size, size);
      if (!ready || !particlesRef.current.length || startTimeRef.current === null) return;

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const target = mouseTargetRef.current;
      const elapsed = (performance.now() - startTimeRef.current) / 1000;

      mouse.x += (target.x - mouse.x) * 0.15;
      mouse.y += (target.y - mouse.y) * 0.15;

      for (const p of particles) {
        const t = elapsed - p.delay;
        if (t < 0) continue;

        const fadeProgress = Math.min(t / 1.5, 1);
        const easedFade = 1 - Math.pow(1 - fadeProgress, 2);
        const isActive = mouse.active || t < 3.0;
        const shimmer = isActive ? Math.sin(elapsed * 2 + p.shimmer) * 0.06 : 0;
        p.currentAlpha = Math.max(0, p.baseAlpha * easedFade + shimmer);

        const moveProgress = Math.min(t / 2.5, 1);
        const easedMove = 1 - Math.pow(1 - moveProgress, 3);

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = size * 0.2;
          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 4;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const pull = 0.01 + easedMove * 0.08;
        p.vx += dx * pull;
        p.vy += dy * pull;

        if (isActive) {
          p.vx += Math.sin(elapsed * 0.5 + p.targetY * 0.1) * 0.15;
          p.vy += Math.cos(elapsed * 0.5 + p.targetX * 0.1) * 0.15;
          p.vx *= 0.92;
          p.vy *= 0.92;
        } else {
          p.vx *= 0.85;
          p.vy *= 0.85;
          if (t > 4.0 && Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
            p.x = p.targetX;
            p.y = p.targetY;
            p.vx = 0;
            p.vy = 0;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = `rgba(${p.color}, ${p.currentAlpha})`;
        ctx.fillRect(p.x - half, p.y - half, block, block);
      }
    };

    const rectOf = () => canvas.getBoundingClientRect();
    const onMouseMove = (e: MouseEvent) => {
      const rect = rectOf();
      mouseTargetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      mouseRef.current.active = true;
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = rectOf();
      const touch = e.touches[0];
      mouseTargetRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
      mouseRef.current.active = true;
      if (e.cancelable) e.preventDefault();
    };
    const onLeave = () => {
      mouseRef.current.active = false;
      mouseTargetRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onLeave);

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onLeave);
    };
  }, [size, ready]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size, cursor: "crosshair", touchAction: "none", imageRendering: "pixelated" }}
    />
  );
}
