import Link from 'next/link';
import './Header.css';

export default function Header({ variant = 'sub' }) {
  if (variant === 'home') {
    return <header className="site-header site-header--home" aria-hidden="true" />;
  }

  return (
    <header className="site-header site-header--sub">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo hover-grow">
          <img
            src="/assets/images/hankenes-logo-2026.png"
            alt="HankenES"
            className="site-header__logo-img"
          />
        </Link>
        <nav className="site-header__nav">
          <Link href="/events" className="hover-grow">EVENTS</Link>
          <a href="/#about" className="hover-grow">ABOUT</a>
          <a href="/#contact-1" className="hover-grow">CONTACT</a>
        </nav>
        <p className="site-header__year">®2026</p>
      </div>
    </header>
  );
}
