'use client';

import { useEffect, useRef, useState } from 'react';
import './IntroLoader.css';

const ASSETS = [
  '/assets/images/nav/logo-red.png', '/assets/images/nav/logo-blue.png',
  '/assets/images/nav/events-red.png', '/assets/images/nav/events-blue.png',
  '/assets/images/nav/about-us-red.png', '/assets/images/nav/about-us-blue.png',
  '/assets/images/nav/get-involved-red.png', '/assets/images/nav/get-involved-blue.png',
  '/assets/images/nav/contact-red.png', '/assets/images/nav/contact-blue.png',
  '/assets/images/nav/about-red.png', '/assets/images/nav/assembly-blue.png',
  '/assets/founders/validio.svg', '/assets/founders/prifina.png', '/assets/founders/reveel.webp',
  '/assets/founders/mimmitsijoittaa.webp', '/assets/founders/hashlist.svg', '/assets/founders/munchi.png',
  '/assets/founders/bezala.svg', '/assets/founders/futucast.png', '/assets/founders/ametalis.svg', '/assets/founders/bonbon.png',
  '/assets/images/home-board.jpg', '/assets/images/PiaMaria.png',
];

const TOTAL = ASSETS.length;
const SAFETY_TIMEOUT = 6000;
const MIN_VISIBLE = 700;
const FADE_MS = 600;

export default function IntroLoader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  // Mutable bookkeeping that must survive re-renders without triggering them.
  const mountedRef = useRef(true);
  const loadedRef = useRef(0);
  const completedRef = useRef(false);
  const startRef = useRef(0);
  const safetyTimerRef = useRef(null);
  const minTimerRef = useRef(null);
  const fadeTimerRef = useRef(null);

  useEffect(() => {
    mountedRef.current = true;
    startRef.current =
      typeof performance !== 'undefined' ? performance.now() : Date.now();

    // Lock body scroll while the overlay is visible.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const finish = () => {
      if (completedRef.current || !mountedRef.current) return;
      completedRef.current = true;

      // Restore scroll the moment loading is "done" (overlay still fading on top).
      document.body.style.overflow = prevOverflow;

      // Begin fade, then unmount after the transition.
      setFading(true);
      fadeTimerRef.current = setTimeout(() => {
        if (mountedRef.current) setGone(true);
      }, FADE_MS);
    };

    // Respect a minimum visible window so a fully-cached load doesn't flash.
    const maybeFinish = () => {
      if (loadedRef.current < TOTAL) return;
      const now =
        typeof performance !== 'undefined' ? performance.now() : Date.now();
      const elapsed = now - startRef.current;
      if (elapsed >= MIN_VISIBLE) {
        finish();
      } else {
        clearTimeout(minTimerRef.current);
        minTimerRef.current = setTimeout(finish, MIN_VISIBLE - elapsed);
      }
    };

    const bump = () => {
      if (!mountedRef.current) return;
      loadedRef.current += 1;
      // Drive the bar from a real fraction of assets resolved.
      setProgress(Math.min(100, (loadedRef.current / TOTAL) * 100));
      maybeFinish();
    };

    // Preload every asset; resolve on both success and failure so the bar
    // can never hang on a single missing/broken file.
    ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = bump;
      img.onerror = bump;
      img.src = src;
    });

    // Hard safety net: never trap the user behind the overlay.
    safetyTimerRef.current = setTimeout(() => {
      if (!mountedRef.current || completedRef.current) return;
      setProgress(100);
      finish();
    }, SAFETY_TIMEOUT);

    return () => {
      mountedRef.current = false;
      document.body.style.overflow = prevOverflow;
      clearTimeout(safetyTimerRef.current);
      clearTimeout(minTimerRef.current);
      clearTimeout(fadeTimerRef.current);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`intro-loader${fading ? ' intro-loader--fade-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <img
        className="intro-loader__logo"
        src="/assets/images/nav/logo-red.png"
        alt="Hanken Entrepreneurship Society"
      />
      <div className="intro-loader__progress">
        <span className="intro-loader__label">LOADING</span>
        <div className="intro-loader__track">
          <div
            className="intro-loader__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
