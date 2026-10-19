import './Footer.css';

export default function Footer({ transparent = false }) {
  return (
    <footer className={`site-footer${transparent ? ' site-footer--transparent' : ''}`}>
      <div className="site-footer__row">
        <div className="site-footer__col site-footer__col--right">
          <p className="site-footer__big">WANT TO GET IN TOUCH?</p>
          <p className="site-footer__address">
            ARKADIAGATAN 22 CO<br />// HANKEN<br />BUSINESS LAB
          </p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p className="site-footer__copy">2026 &reg; HANKEN ENTREPRENEURSHIP SOCIETY RF</p>
        <a className="site-footer__contact-us hover-grow--pill" href="mailto:info@hankenes.org">CONTACT US</a>
      </div>
    </footer>
  );
}
