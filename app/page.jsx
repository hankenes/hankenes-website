// CreatedByJohnCedricEsguerra
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import GradientBand from '../components/GradientBand';
import SiteHeader from '../components/SiteHeader';
import AlumniCarousel from '../components/AlumniCarousel';
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
export default function Home() {
  return (
    <div className="page home">
      <SiteHeader home />
      <Reveal>
        <section className="home-about" id="about">
          <div className="home-about__col">
            <h3 className="h-section">WHAT WE DO</h3>
            <p className="home-about__body dim">
              Since 2010, Hanken Entrepreneurship Society has been the home for bold thinkers at Hanken School of Economics. We're a student-driven non-profit on a mission to support, inspire, and connect the next generation of founders.
            </p>
            <p className="home-about__body dim">
              Through workshops, talks, company visits, and our flagship events, we turn curiosity into action — giving students the tools, the network, and the courage to build something of their own. From first-time idea to first real venture, we're the community that backs big ideas and the people behind them.
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
      <section className="home-who">
        <Reveal>
          <h3 className="h-section home-who__title">WHO WE ARE</h3>
        </Reveal>
        <Reveal delay={0.1}>
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
        </Reveal>
        <Reveal delay={0.2}>
          <p className="home-who__stats h-medium">
            150+ MEMBERS<br />
            30 + ACTIVE VOLUNTEERS<br />
            1000+ YEARLY EVENT PARTICIPANTS
          </p>
        </Reveal>
      </section>
      <Reveal>
        <AlumniCarousel />
      </Reveal>
      <section className="home-finale">
        <GradientBand />
        <div className="home-finale__content">
          <Footer transparent />
        </div>
      </section>
    </div>
  );
}