'use client';

import { useState, useEffect } from 'react';
import Reveal from './Reveal';

const TESTIMONIALS = [
  { quote: 'wow hankenes is amazing', name: 'NICO RUOTTINEN' },
  { quote: "Hands down the most welcoming community I've found in Helsinki. Joining was the best decision I made this year.", name: 'CEDRIC ESGUERRA' },
  { quote: 'The energy, the people, the events — HankenES just gets it. Every gathering leaves me inspired.', name: 'DOR GRAYDI' },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active]);

  const goPrev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  return (
    <Reveal delay={0.15}>
      <div className="get-involved__carousel">
        <button className="get-involved__arrow get-involved__arrow--prev" onClick={goPrev} aria-label="Previous testimonial" type="button">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div className="get-involved__testimonials">
          {TESTIMONIALS.map((t, i) => (
            <div className={`get-involved__testimonial ${i === active ? 'is-active' : ''}`} key={i}>
              <h2 className="get-involved__quote">&ldquo;{t.quote}&rdquo;</h2>
              <div className="get-involved__attrib">
                <div className="get-involved__avatar" aria-hidden="true" />
                <div className="get-involved__attrib-text">
                  <p className="small-caps red get-involved__attrib-name">{t.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="get-involved__arrow get-involved__arrow--next" onClick={goNext} aria-label="Next testimonial" type="button">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </Reveal>
  );
}