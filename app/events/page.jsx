
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import PhotoCarousel from '../../components/PhotoCarousel';
import Link from 'next/link';
import './Events.css';

export const metadata = { title: 'Events - HankenES' };

const PAST_EVENTS = [
  {
    id: 'assembly2026',
    title: 'ASSEMBLY 2026',
    year: '2026',
    link: '/assembly-2026',
    body: `On 23 September 2026, Hanken Entrepreneurship Society hosted its annual flagship event, Assembly 2026, at Hanken School of Economics. Under the theme Beyond the Obvious, this year's programme brought together an inspiring lineup of speakers who shared their experiences, challenged perspectives and offered insights from their entrepreneurial journeys.

A big thank you to our speakers, partners and everyone who made Assembly 2026 possible!`,
    hero: '/assets/images/assembly2026-photo-1.jpg',
    gallery: [
      '/assets/images/assembly2026-photo-2.jpg',
      '/assets/images/assembly2026-photo-5.jpg',
      '/assets/images/assembly2026-photo-3.jpg',
      '/assets/images/assembly2026-photo-4.jpg',
      '/assets/images/assembly2026-photo-6.jpg',
      '/assets/images/assembly2026-photo-7.jpg',
      '/assets/images/assembly2026-photo-8.jpg',
    ],
  },
  {
    id: 'assembly2025',
    title: 'ASSEMBLY 2025',
    year: '2025',
    body: `On September 18th, Hanken Entrepreneurship Society hosted Assembly 2025, our annual flagship event at Hanken School of Economics. We were proud to welcome over 250 participants – students, founders, and investors – who came together for an evening of keynotes, panels, and fire rounds on what it really takes to build, scale, and sustain a startup.

We are truly grateful to our amazing speakers for sharing their insights, to our partners for their support, and to everyone who joined us for making the night so special. Assembly is about more than just talks – it's about building connections and strengthening our entrepreneurial community, and this year's event was a testament to that.

Thank you all for being part of Assembly 2025.`,
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
    body: `The year kicked off in the best way possible: 60+ ambitious students gathered at Jackie's Bar in the heart of Helsinki to set the tone for everything to come. It was a night of fresh faces, familiar friends, and big plans for the year ahead. We also took the chance to introduce the 2025 board – the people who'd be steering the community through the months to come.

Between the great food, the easy conversations, and the buzz of a new year beginning, it was exactly the kind of evening that reminds you why this community is worth showing up for. Good food, even better company, and a year full of promise ahead.`,
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
    body: `As Slush brought the world's startup scene to Helsinki, we brought the celebration. 150 international guests – students, founders, investors, and more – gathered for a traditional Finnish student "sitz", a singing dinner where the drinks flow as freely as the conversation. It was a night where borders disappeared and new connections formed over shared songs, shared tables, and shared ambitions.

From first-time visitors discovering Finnish student culture to seasoned founders swapping stories, the energy in the room was electric. Great food, great company, and great drinks – a perfect Slush-week tradition that captured everything our community is about.`,
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
      <SiteHeader />
      <main className="events__main">
        <h4 className="events__heading">EVENT CALENDAR</h4>
        <p className="events__sub">CURRENT &amp; UPCOMING EVENTS</p>
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
            <h4 className="events__past-title">PAST EVENTS</h4>
            <p className="events__past-sub">
              Every year, our community comes together in ways big and small — from flagship nights that fill a hall with hundreds of founders, investors, and dreamers, to intimate dinners where conversations turn into collaborations. These are the moments that define who we are: the talks that sparked ideas, the people who became partners, and the evenings nobody wanted to end. Here's a look back at some of the events that shaped our journey.
            </p>
          </header>

          {PAST_EVENTS.map(ev => (
            <article key={ev.id} className="past-event" id={ev.id}>
              <h1 className="past-event__title">
                {ev.link ? (
                  <Link href={ev.link}>{ev.title}</Link>
                ) : (
                  ev.title
                )}
              </h1>

              <div className="past-event__intro">
                <p className="past-event__body">{ev.body}</p>
              </div>

              <PhotoCarousel images={[ev.hero, ...ev.gallery]} alt={ev.title} />
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
