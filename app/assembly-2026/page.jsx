
import Footer from '../../components/Footer';
import SiteHeader from '../../components/SiteHeader';
import './Assembly2026.css';

export const metadata = { title: 'Assembly 2026: Beyond the Obvious - HankenES' };

export default function Assembly2026Page() {
  return (
    <div className="page assembly-2026">
      <SiteHeader />
      <div className="assembly-2026__below-header">
        <div className="assembly-2026__bg" aria-hidden="true" />

        <main className="assembly-2026__main">
          <div className="assembly-2026__content">

            <p className="small-caps dim assembly-2026__eyebrow">
              HANKEN ENTREPRENEURSHIP SOCIETY PRESENTS
            </p>

            <h1 className="h-hero assembly-2026__title">
              ASSEMBLY 2026
            </h1>

            <h2 className="assembly-2026__theme">
              BEYOND THE OBVIOUS.
            </h2>

            <div className="assembly-2026__event-details">
              <p>23 SEPTEMBER 2026</p>
              <p>HANKEN SCHOOL OF ECONOMICS</p>
              <p>17:00–20:00</p>
            </div>

            <p className="assembly-2026__body">
              Assembly is Hanken Entrepreneurship Society's annual flagship
              event. Once a year, we bring students, founders and investors
              together at Hanken to explore different paths into
              entrepreneurship, business and investing.
            </p>

            <section className="assembly-2026__programme">
              <h2 className="assembly-2026__section-title">
                PROGRAMME
              </h2>

              <div className="assembly-2026__schedule">

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">17:00</p>
                  <div>
                    <h3>Doors, food & drinks</h3>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">17:30</p>
                  <div>
                    <h3>Welcome</h3>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">17:40</p>
                  <div>
                    <h3>Breaking Out</h3>
                    <p>Stories from people who chose a path beyond the obvious.</p>
                    <p><strong>Maxine Buchert</strong> — CEO & Co-founder, Meridian</p>
                    <p><strong>William Engblom</strong> — COO & Co-founder, Hashlist</p>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">18:10</p>
                  <div>
                    <h3>Where the Interesting Problems Are</h3>
                    <p>Exploring overlooked problems, industries and opportunities.</p>
                    <p><strong>Viljami Meriläinen</strong> — Co-founder, Prenew</p>
                    <p><strong>Ghita Wallin</strong> — Founder, Mimir Fellows</p>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">18:45</p>
                  <div>
                    <h3>What Actually Gets Funded</h3>
                    <p>A look inside the startup and venture capital landscape.</p>
                    <p><strong>Tom Henriksson</strong> — General Partner, OpenOcean</p>
                    <p><strong>Kim Väisänen</strong> — Growth Partner, Evli Growth Partners</p>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">19:10</p>
                  <div>
                    <h3>Startup Käsikirja</h3>
                    <p>A conversation around the realities of building a startup.</p>
                    <p><strong>Timo Ahopelto & Jyri Engeström</strong></p>
                  </div>
                </div>

                <div className="assembly-2026__schedule-item">
                  <p className="assembly-2026__time">19:30</p>
                  <div>
                    <h3>Closing & Networking</h3>
                  </div>
                </div>

              </div>
            </section>

            {/* CreatedByJohnCedricEsguerra */}

            <section className="assembly-2026__closing">
              <p className="assembly-2026__body">
                Join us for an evening of stories, perspectives and
                conversations about what happens when you look beyond
                the obvious.
              </p>

              <p className="assembly-2026__note">
                FOOD AND DRINKS SERVED!
              </p>
            </section>

          </div>
        </main>

        <Footer transparent />
      </div>
    </div>
  );
}
