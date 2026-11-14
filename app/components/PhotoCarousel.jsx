'use client';

import { useState, useEffect } from 'react';

export default function PhotoCarousel({ images = [], alt = '' }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = images.length;

  // Auto-advance every 4 seconds, unless paused
  useEffect(() => {
    if (paused || count <= 1) return;
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % count);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, count]);

  if (count === 0) return null;

  const goTo = i => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt ? `${alt} — photo ${i + 1}` : `Photo ${i + 1}`}
            className={`carousel__img${i === index ? ' carousel__img--active' : ''}`}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--prev"
              onClick={prev}
              aria-label="Previous photo"
            >
              &#8249;
            </button>
            <button
              type="button"
              className="carousel__arrow carousel__arrow--next"
              onClick={next}
              aria-label="Next photo"
            >
              &#8250;
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Choose photo">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`carousel__dot${i === index ? ' carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}