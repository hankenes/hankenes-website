import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import GradientBand from '../../components/GradientBand';
import SiteHeader from '../../components/SiteHeader';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import './GetInvolved.css';

const WHATSAPP_URL = 'https://chat.whatsapp.com/L18UQlZz8SxGjlIcU5t7al';
const INSTAGRAM_URL = 'https://www.instagram.com/hanken.es/';
const LINKEDIN_URL = 'https://fi.linkedin.com/company/hankenes';

export const metadata = { title: 'Get involved - HankenES' };

function WhatsappIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9 8.5c0 3 2.5 5.5 5.5 5.5 0.4 0 0.8-0.4 0.8-0.8 0-0.3-0.2-0.5-0.5-0.6l-1.3-0.4c-0.3-0.1-0.5 0-0.7 0.2l-0.4 0.5c-1-0.5-1.8-1.3-2.3-2.3l0.5-0.4c0.2-0.2 0.3-0.4 0.2-0.7l-0.4-1.3c-0.1-0.3-0.3-0.5-0.6-0.5-0.4 0-0.8 0.4-0.8 0.8z" />
    </svg>
  );
}

function InstagramIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <circle cx="8" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
      <line x1="12" y1="11" x2="12" y2="17" />
    </svg>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="page get-involved">
      <SiteHeader />
      <Reveal>
        <main className="get-involved__main">
          <h4 className="get-involved__title">
            HOW DO I GET <span className="get-involved__title-red">INVOLVED?</span>
          </h4>
          <p className="get-involved__sub">
            Everyone has something to bring to the table. Whether you want to put your skills to use, pick up new ones, or just be part of a community that backs big ideas — this is where it starts. Explore the ways to get involved below.
          </p>
          <Reveal delay={0.1}>
            <div className="get-involved__cards">
              <div className="get-involved__card">
                <h6 className="get-involved__card-title">TEAM MEMBER</h6>
                <p className="get-involved__card-body">
                  Each year the board recruits new team members. The next recruitment period will be in the beginning of 2027.
                </p>
              </div>
              <div className="get-involved__card">
                <h6 className="get-involved__card-title">WHATSAPP COMMUNITY</h6>
                <p className="get-involved__card-body">
                  Join this community if you want to stay up to date with all events and get early access to tickets.
                </p>
              </div>
            </div>

            <div className="get-involved__socials-row">
              <a className="get-involved__social-link hover-grow" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Join WhatsApp community"><WhatsappIcon size={72} /></a>
              <a className="get-involved__social-link hover-grow" href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={72} /></a>
              <a className="get-involved__social-link hover-grow" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={72} /></a>
            </div>
          </Reveal>

          <TestimonialsCarousel />
        </main>
      </Reveal>
      <section className="get-involved__finale">
        <GradientBand />
        <div className="get-involved__finale-content">
          <Footer transparent />
        </div>
      </section>
    </div>
  );
}