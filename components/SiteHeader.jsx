import Nav3DLink from './Nav3DLink';
import './SiteHeader.css';

export default function SiteHeader({ home = false, transparent = false, theme = 'red' }) {
  const aboutHref = home ? '#about' : '/#about';
  const base = '/assets/images/nav';
  const logoSrc = theme === 'blue' ? `${base}/logo-blue.png` : `${base}/logo-red.png`;

  return (
    <header className={`site-header-v2 ${theme === 'blue' ? 'site-header-v2--blue-haze' : ''}${transparent ? ' site-header-v2--transparent' : ''}`}>
      <Nav3DLink
        href="/"
        src={logoSrc}
        alt="HankenES"
        spin={false}
        className="site-header-v2__logo-link"
        imgClassName="nav3d-img--logo"
      />
      <nav className="site-header-v2__nav">
        <Nav3DLink href="/events" src={`${base}/events-${theme}.png`} alt="Events" className="site-header-v2__nav-link" />
        <Nav3DLink href={aboutHref} src={`${base}/about-us-${theme}.png`} alt="About us" className="site-header-v2__nav-link" />
        <Nav3DLink href="/get-involved" src={`${base}/get-involved-${theme}.png`} alt="Get involved" className="site-header-v2__nav-link" />
        <Nav3DLink href="mailto:info@hankenes.org" src={`${base}/contact-${theme}.png`} alt="Contact" className="site-header-v2__nav-link" />
        <Nav3DLink
          href="/assembly-2026"
          src={`${base}/assembly-blue.png`}
          alt="Assembly 2026"
          className="site-header-v2__nav-link site-header-v2__nav-link--assembly"
          imgClassName="nav3d-img--assembly nav3d-img--blue-haze"
        />
      </nav>
    </header>
  );
}
