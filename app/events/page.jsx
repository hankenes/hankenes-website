import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Events.css';

export const metadata = { title: 'Events - HankenES' };

const PAST_EVENTS = [
  {
    id: 'assembly2025',
    title: 'ASSEMBLY 2025',
    year: '2025',
    body: `ON SEPTEMBER 18TH, HANKEN ENTREPRENEURSHIP SOCIETY HOSTED ASSEMBLY 2025, OUR ANNUAL FLAGSHIP EVENT AT HANKEN SCHOOL OF ECONOMICS. WE WERE PROUD TO WELCOME OVER 250 PARTICIPANTS – STUDENTS, FOUNDERS, AND INVESTORS – WHO CAME TOGETHER FOR AN EVENING OF KEYNOTES, PANELS, AND FIRE ROUNDS ON WHAT IT REALLY TAKES TO BUILD, SCALE, AND SUSTAIN A STARTUP.

WE ARE TRULY GRATEFUL TO OUR AMAZING SPEAKERS FOR SHARING THEIR INSIGHTS, TO OUR PARTNERS FOR THEIR SUPPORT, AND TO EVERYONE WHO JOINED US FOR MAKING THE NIGHT SO SPECIAL. ASSEMBLY IS ABOUT MORE THAN JUST TALKS – IT'S ABOUT BUILDING CONNECTIONS AND STRENGTHENING OUR ENTREPRENEURIAL COMMUNITY, AND THIS YEAR'S EVENT WAS A TESTAMENT TO THAT.

THANK YOU ALL FOR BEING PART OF ASSEMBLY 2025.`,
    hero: '/assets/images/gallery-assembly2025-card.jpg',
    gallery: [
      '/assets/images/assembly2025-photo-2.jpg',
      '/assets/images/assembly2025-photo-3.jpg',
      '/assets/images/assembly2025-photo-4.jpg',
      '/assets/images/assembly2025-photo-5.jpg',
    ],
  },
  {
    id: 'kick-off',
    title: '2025 KICK OFF',
    year: '2025',
    body: `60+ AMBITIOUS STUDENTS JOINED US AT JACKIE'S BAR IN HELSINKI TO KICK OF THE YEAR OF 2025 AND THE BOARD OF 2025 ALSO GOT INTRODUCED.

GOOD FOOD AND EVEN BETTER COMPANY.`,
    hero: '/assets/images/gallery-kickoff-card.jpg',
    gallery: [
      '/assets/images/kickoff-photo-2.jpg',
      '/assets/images/kickoff-photo-3.jpg',
      '/assets/images/kickoff-photo-4.jpg',
      '/assets/images/kickoff-photo-5.jpg',
    ],
  },
  {
    id: 'slush-sitz2024',
    title: 'SLUSH SITZ 2024',
    year: '2024',
    body: `150 INTERNATIONAL GUESTS, STUDENTS, FOUNDERS, INVESTORS AND MORE. ALL GATHERED FOR A TRADITIONAL FINNISH STUDENT "SITZ". GREAT FOOD, COMPANY AND DRINKS.`,
    hero: '/assets/images/gallery-slush-sitz-card.jpg',
    gallery: [
      '/assets/images/slush-sitz-photo-2.jpg',
      '/assets/images/slush-sitz-photo-3.jpg',
      '/assets/images/slush-sitz-photo-4.jpg',
      '/assets/images/slush-sitz-photo-5.jpg',
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="page events">
      <Header variant="sub" />
      <main className="events__main">
        <h4 className="h-hero events__heading">EVENT CALENDAR:</h4>
        <p className="small-caps dim events__sub">CURRENT &amp; UPCOMING EVENTS</p>
        <div className="events__calendar">
          <iframe
            src="https://luma.com/embed/calendar/cal-zjsInBg7JqyzFhX/events"
            width="600"
            height="650"
            allow="fullscreen; clipboard-write"
            title="Luma event calendar"
          />
        </div>

        <section className="events__past">
          <header className="events__past-header">
            <h4 className="h-hero events__past-title">PAST EVENTS</h4>
            <p className="small-caps dim events__past-sub">
              OVER THE YEARS WE HAVE DONE SOME AMAZING THINGS
            </p>
          </header>

          {PAST_EVENTS.map(ev => (
            <article key={ev.id} className="past-event" id={ev.id}>
              <h1 className="h-hero past-event__title">{ev.title}</h1>

              <div className="past-event__intro">
                <p className="text-body past-event__body">{ev.body}</p>
                <div className="past-event__meta">
                  <p className="text-body dim">YEAR</p>
                  <p className="text-body">{ev.year}</p>
                </div>
              </div>

              <div className="past-event__hero">
                <img src={ev.hero} alt={ev.title} />
              </div>

              <div className="past-event__grid">
                {ev.gallery.slice(0, 2).map(src => (
                  <img key={src} src={src} alt="" className="past-event__grid-img" />
                ))}
              </div>
              <div className="past-event__grid">
                {ev.gallery.slice(2, 4).map(src => (
                  <img key={src} src={src} alt="" className="past-event__grid-img" />
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
