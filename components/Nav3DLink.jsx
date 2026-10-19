'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import './Nav3D.css';

export default function Nav3DLink({ href, src, alt, external = false, spin = true, className = '', imgClassName = '', ...rest }) {
  const imgRef = useRef(null);
  const router = useRouter();
  const isAnchorOrExternal = external || href.startsWith('#') || href.startsWith('mailto:');

  function playSpin(after) {
    const el = imgRef.current;
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce) { after && after(); return; }
    el.classList.remove('nav3d-img--spin');
    void el.offsetWidth;
    el.classList.add('nav3d-img--spin');
    let done = false;
    const finish = () => { if (done) return; done = true; el.classList.remove('nav3d-img--spin'); after && after(); };
    el.addEventListener('animationend', finish, { once: true });
    setTimeout(finish, 950);
  }
  function onClick(e) {
    if (isAnchorOrExternal) { if (spin) playSpin(); return; }
    e.preventDefault();
    if (spin) playSpin(() => router.push(href));
    else router.push(href);
  }
  const img = <img ref={imgRef} src={src} alt={alt} className={`nav3d-img ${imgClassName}`.trim()} draggable={false} />;
  if (isAnchorOrExternal) return <a href={href} className={`nav3d-link ${className}`.trim()} onClick={onClick} aria-label={alt} {...rest}>{img}</a>;
  return <Link href={href} className={`nav3d-link ${className}`.trim()} onClick={onClick} aria-label={alt} {...rest}>{img}</Link>;
}
