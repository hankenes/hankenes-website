'use client';

import { useState } from 'react';
import './FoundersMarquee.css';

const founders = [
  { name: 'Validio',          logo: '/assets/founders/validio.svg' },
  { name: 'Prifina',          logo: '/assets/founders/prifina.png' },
  { name: 'Reveel',           logo: '/assets/founders/reveel.webp' },
  { name: 'Mimmit sijoittaa', logo: '/assets/founders/mimmitsijoittaa.webp' },
  { name: 'Hashlist',         logo: '/assets/founders/hashlist.svg' },
  { name: 'Munchi',           logo: '/assets/founders/munchi.png' },
  { name: 'Bezala',           logo: '/assets/founders/bezala.svg' },
  { name: 'Futucast',         logo: '/assets/founders/futucast.png' },
  { name: 'Ametalis',         logo: '/assets/founders/ametalis.svg' },
  { name: 'Bonbon Community', logo: '/assets/founders/bonbon.png' },
];

function FounderItem({ founder, ariaHidden }) {
  const [failed, setFailed] = useState(false);
  const showText = !founder.logo || failed;
  return (
    <li className="founders-marquee__item" aria-hidden={ariaHidden || undefined}>
      {showText ? (
        <span className="founders-marquee__text">{founder.name}</span>
      ) : (
        <img
          className="founders-marquee__logo"
          src={founder.logo}
          alt={founder.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </li>
  );
}

export default function FoundersMarquee() {
  return (
    <section className="founders-marquee" aria-label="Companies founded by HankenES alumni">
      <p className="founders-marquee__heading small-caps dim">FOUNDED BY HANKENES ALUMNI</p>
      <div className="founders-marquee__viewport">
        <ul className="founders-marquee__track">
          {founders.map((f) => (
            <FounderItem key={f.name} founder={f} />
          ))}
          {founders.map((f) => (
            <FounderItem key={`dup-${f.name}`} founder={f} ariaHidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
