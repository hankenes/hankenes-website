
import Link from 'next/link';
import './Footer.css';

export default function Footer({ transparent = false }) {
  return (
    <footer className={`site-footer${transparent ? ' site-footer--transparent' : ''}`}>
      <div className="site-footer__row">

        {/* LEFT — community links */}
        <div className="site-footer__col site-footer__col--left">
          <p className="site-footer__heading">COMMUNITY</p>

          <nav className="site-footer__links" aria-label="Community links">
            <a className="site-footer__link hover-grow" href="https://chat.whatsapp.com/L18UQlZz8SxGjlIcU5t7al" target="_blank" rel="noreferrer">WHATSAPP</a>
            <a className="site-footer__link hover-grow" href="https://www.instagram.com/hanken.es/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <a className="site-footer__link hover-grow" href="https://fi.linkedin.com/company/hankenes" target="_blank" rel="noreferrer">LINKEDIN</a>
          </nav>
        </div>

        {/* MIDDLE — information & policies */}
        <div className="site-footer__col site-footer__col--mid">
          <p className="site-footer__heading">INFORMATION &amp; POLICIES</p>

          <nav className="site-footer__links" aria-label="Information and policies">
            <Link className="site-footer__link hover-grow" href="/privacy-policy">PRIVACY POLICY</Link>
            <Link className="site-footer__link hover-grow" href="/cookie-policy">COOKIE POLICY</Link>
            <Link className="site-footer__link hover-grow" href="/terms">TERMS OF USE</Link>
            <Link className="site-footer__link hover-grow" href="/code-of-conduct">CODE OF CONDUCT</Link>
            <Link className="site-footer__link hover-grow" href="/photography">PHOTOGRAPHY NOTICE</Link>
            <Link className="site-footer__link hover-grow" href="/event-privacy">EVENT REGISTRATION NOTICE</Link>
          </nav>
        </div>

        {/* RIGHT — contact + address */}
        <div className="site-footer__col site-footer__col--right">
          <p className="site-footer__heading">CONTACT US</p>

          <div className="site-footer__contact">
            <a
              className="site-footer__email hover-grow"
              href="mailto:info@hankenes.org"
            >
              info@hankenes.org
            </a>

            <p className="site-footer__email site-footer__email--muted">
              FIRSTNAME.LASTNAME @ HANKENES.ORG
            </p>
          </div>

          <p className="site-footer__address">
            ARKADIAGATAN 22 CO // HANKEN BUSINESS LAB
          </p>
        </div>

      </div>

      {/* BOTTOM BAR — copyright */}
      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          2026 &reg; HANKEN ENTREPRENEURSHIP SOCIETY RF
        </p>
      </div>
    </footer>
  );
}
