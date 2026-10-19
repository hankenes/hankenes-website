import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import GradientBand from '../../components/GradientBand';
import SiteHeader from '../../components/SiteHeader';
import Link from 'next/link';
import './GetInvolved.css';

const WHATSAPP_URL = 'https://chat.whatsapp.com/L18UQlZz8SxGjlIcU5t7al';

export const metadata = { title: 'Get involved - HankenES' };

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

function WhatsappIcon({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-12.74 7.17L3 21l2.4-5.07A8.38 8.38 0 1 1 21 11.5z" />
      <path d="M8.5 9.5c0 .67.16 1.33.47 1.94.5.99 1.32 2.13 2.49 3.07.96.78 2.04 1.37 3.04 1.55.62.11 1.31.1 1.84-.14.5-.23.95-.7 1.16-1.16.21-.46.21-.86.15-.95-.06-.09-.21-.14-.45-.26-.23-.12-1.39-.69-1.6-.77-.21-.08-.37-.12-.52.12-.15.23-.6.77-.74.93-.13.15-.27.17-.5.06-.23-.12-.99-.36-1.88-1.16-.7-.62-1.17-1.39-1.31-1.63-.14-.23-.01-.36.1-.48.1-.1.23-.27.34-.4.11-.13.15-.23.23-.38.08-.15.04-.29-.02-.41-.06-.12-.52-1.26-.71-1.72-.19-.45-.38-.39-.52-.4-.13-.01-.29-.01-.45-.01-.15 0-.41.06-.62.29-.21.23-.81.79-.81 1.93z" />
    </svg>
  );
}

export default function GetInvolvedPage() {
  return (
    <div className="page get-involved">
      <SiteHeader />

      <Reveal>
        <main className="get-involved__main">
          <h4 className="h-hero get-involved__title">
            HOW DO I GET <span className="get-involved__title-red">INVOLVED?</span>
          </h4>
          <p className="get-involved__sub small-caps">
            BELOW YOU WILL FIND DIFFERENT WAYS TO GET INVOLVED IN WHAT WE DO AT HANKENES
          </p>

          <Reveal delay={0.1}>
            <div className="get-involved__cards">
              <div className="get-involved__card">
                <h6 className="h-medium">TEAM MEMBER</h6>
                <p className="small-caps get-involved__card-body">
                  EACH YEAR THE BOARD RECRUITS NEW TEAM MEMBERS. NEXT RECRUITMENT PERIOD WILL BE IN THE BEGINNING OF 2027.
                </p>
              </div>

              <div className="get-involved__card">
                <h6 className="h-medium">WHATSAPP COMMUNITY</h6>
                <p className="small-caps get-involved__card-body">
                  JOIN THIS COMMUNITY IF YOU WANT TO STAY UP TO DATE WITH ALL EVENTS AND GET EARLY ACCESS TO TICKETS.
                </p>
              </div>
            </div>

            <a
              className="get-involved__whatsapp hover-grow"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Join WhatsApp community"
            >
              <WhatsappIcon size={120} />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="get-involved__testimonial">
              <h2 className="get-involved__quote">&ldquo;wow hankenes is amazing&rdquo;</h2>
              <div className="get-involved__attrib">
                <div className="get-involved__avatar" aria-hidden="true" />
                <div className="get-involved__attrib-text">
                  <h1 className="small-caps red get-involved__attrib-name">NICO RUOTTINEN</h1>
                  <p className="get-involved__attrib-role">Head of Community</p>
                </div>
              </div>
            </div>
          </Reveal>
        </main>
      </Reveal>

      <section className="get-involved__finale">
        <GradientBand />
        <div className="get-involved__finale-content">
          <Reveal delay={0} duration={0.55} margin="120px">
            <div className="get-involved__cta-strip">
              <a className="get-involved__cta-link h-nav-large hover-grow" href="mailto:info@hankenes.org">CONTACT</a>
              <a className="get-involved__cta-link h-nav-large hover-grow" href={WHATSAPP_URL} target="_blank" rel="noreferrer">COMMUNITY</a>
              <Link className="get-involved__cta-link h-nav-large hover-grow" href="/events">EVENTS</Link>
            </div>
          </Reveal>

          <div className="get-involved__socials" aria-label="Social media">
            <a className="get-involved__socials-link hover-grow" href="https://www.instagram.com/hanken.es/" target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>INSTAGRAM</span>
            </a>
            <a className="get-involved__socials-link hover-grow" href="https://fi.linkedin.com/company/hankenes" target="_blank" rel="noreferrer">
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
