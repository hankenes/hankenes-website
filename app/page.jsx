import Link from 'next/link';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import GradientBand from '../components/GradientBand';
import SiteHeader from '../components/SiteHeader';
import FoundersMarquee from '../components/FoundersMarquee';
import './Home.css';

const BOARD = [
  { name: 'HENRY MAULA', role: 'PRESIDENT' },
  { name: 'EDDIE KOLSTER', role: 'VP' },
  { name: 'HELMI AHAVA', role: 'FINANCE' },
  { name: 'AARO PESOLA', role: 'EVENTS' },
  { name: 'LOTTA NIKULA', role: 'MARKETING & COMMS' },
  { name: 'HANNES GRYM', role: 'PARTNERSHIPS' },
  { name: 'NICO RUOTTINEN', role: 'COMMUNITY' },
];

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <circle cx="8" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="12" y1="11" x2="12" y2="17" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page home">
      <SiteHeader home />

      <Reveal>
        <section className="home-about" id="about">
          <div className="home-about__col">
            <h3 className="h-section">WHAT WE DO</h3>
            <p className="home-about__body small-caps dim">
              HANKEN ENTREPRENEURSHIP SOCIETY IS A FINNISH NON-PROFIT FOUNDED IN 2010. OUR PURPOSE IS TO SUPPORT, INSPIRE, AND ENCOURAGE ENTREPRENEURSHIP AT HANKEN SCHOOL OF ECONOMICS. WE DO THIS BY ORGANIZING A VARIETY OF EVENTS AND THROUGH DIFFERENT PROJECTS.
            </p>
          </div>
          <div className="home-about__photo-wrap">
            <div className="home-about__photo-glow" aria-hidden="true" />
            <img
              src="/assets/images/home-board.jpg"
              alt="Hanken ES board"
              className="home-about__photo"
            />
          </div>
        </section>
      </Reveal>

      <section className="home-grid">
        <Reveal>
          <div className="home-grid__left">
            <h3 className="h-section">WHO WE ARE</h3>
            <p className="home-grid__stats h-medium">
              150+ MEMBERS<br />
              30 + ACTIVE VOLUNTEERS<br />
              1000+ YEARLY EVENT PARTICIPANTS
            </p>
            <p className="home-grid__label small-caps dim">GET IN TOUCH WITH US AT :</p>
            <h1 className="home-grid__email small-caps red" id="contact-1">INFO@HANKENES.ORG</h1>
            <h1 className="home-grid__email small-caps red">FIRSTNAME.LASTNAME [AT] HANKENES.ORG</h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="home-grid__right">
            <div className="home-board">
              <div className="home-board__stack">
                <p className="small-caps dim home-board__heading">THE BOARD</p>
                <ul className="home-board__list">
                  {BOARD.map(m => <li key={m.name} className="small-caps">{m.name}</li>)}
                </ul>
              </div>
              <div className="home-board__stack">
                <p className="small-caps dim home-board__heading">ROLE</p>
                <ul className="home-board__list">
                  {BOARD.map(m => <li key={m.role + m.name} className="small-caps red">{m.role}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <FoundersMarquee />

      <section className="home-finale">
        <GradientBand />
        <div className="home-finale__content">
          <Reveal delay={0} duration={0.55} margin="120px">
            <div className="home-cta-strip">
              <a className="home-cta-strip__link h-nav-large hover-grow" href="mailto:info@hankenes.org">CONTACT</a>
              <a className="home-cta-strip__link h-nav-large hover-grow" href="https://chat.whatsapp.com/L18UQlZz8SxGjlIcU5t7al" target="_blank" rel="noreferrer">COMMUNITY</a>
              <Link className="home-cta-strip__link h-nav-large hover-grow" href="/events">EVENTS</Link>
            </div>
          </Reveal>

          <div className="home-socials" aria-label="Social media">
            <a className="home-socials__link hover-grow" href="https://www.instagram.com/hanken.es/" target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>INSTAGRAM</span>
            </a>
            <a className="home-socials__link hover-grow" href="https://fi.linkedin.com/company/hankenes" target="_blank" rel="noreferrer">
              <LinkedinIcon />
              <span>LINKEDIN</span>
            </a>
          </div>

          <Footer transparent />
        </div>
      </section>
    </div>
  );
}
