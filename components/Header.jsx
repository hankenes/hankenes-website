import Nav3DLink from './Nav3DLink';
import './Header.css';

export default function Header({ variant = 'sub' }) {
  if (variant === 'home') {
    return <header className="site-header site-header--home" aria-hidden="true" />;
  }

  const base = '/assets/images/nav';

  return (
    <header className="site-header site-header--sub">
      <div className="site-header__inner">
        <Nav3DLink
          href="/"
          src={`${base}/logo-red.png`}
          alt="HankenES"
          spin={false}
          className="site-header__logo"
          imgClassName="nav3d-img--logo"
        />
        <nav className="site-header__nav">
          <Nav3DLink href="/events" src={`${base}/events-red.png`} alt="Events" />
          <Nav3DLink href="/#about" src={`${base}/about-red.png`} alt="About" />
          <Nav3DLink href="/#contact-1" src={`${base}/contact-red.png`} alt="Contact" />
        </nav>
        <p className="site-header__year">®2026</p>
      </div>
    </header>
  );
}
