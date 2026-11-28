
import Footer from '../../components/Footer';
import SiteHeader from '../../components/SiteHeader';
import './CorporateEntrepreneurship.css';

export const metadata = {
  title: 'Corporate Entrepreneurship - HankenES',
};

export default function CorporateEntrepreneurshipPage() {
  return (
    <div className="page corporate-entrepreneurship">
      <SiteHeader />

      <div className="corporate-entrepreneurship__below-header">
        <div
          className="corporate-entrepreneurship__bg"
          aria-hidden="true"
        />

        <main className="corporate-entrepreneurship__main">
          <div className="corporate-entrepreneurship__content">

            <p className="small-caps dim corporate-entrepreneurship__eyebrow">
              HANKEN ENTREPRENEURSHIP SOCIETY PRESENTS
            </p>

            <h1 className="h-hero corporate-entrepreneurship__title">
              CORPORATE
              <br />
              ENTREPRENEURSHIP
            </h1>

            <h2 className="corporate-entrepreneurship__subtitle">
              SHAPING FINLAND'S ENTREPRENEURIAL FUTURE.
            </h2>

            <div className="corporate-entrepreneurship__event-details">
              <p>10 MARCH 2027</p>
              <p>HANKEN SCHOOL OF ECONOMICS</p>
              <p>17:00–20:00</p>
            </div>

            <section className="corporate-entrepreneurship__intro">

              <p className="corporate-entrepreneurship__body">
                Entrepreneurship doesn't stop at starting a company.
                It also happens within established companies, where people
                challenge conventions, develop new ideas and turn
                opportunities into meaningful innovation. This is corporate
                entrepreneurship: the entrepreneurial mindset and actions
                that drive innovation and growth from within established
                businesses.
              </p>

              <p className="corporate-entrepreneurship__body">
                Corporate Entrepreneurship, an initiative by Hanken
                Entrepreneurship Society, brings this often-overlooked
                form of entrepreneurship into the spotlight. On
                <strong> 10 March 2027</strong>, participating companies
                will showcase their exceptional innovations and, above
                all, the entrepreneurial teams behind them. The
                <strong> Corporate Entrepreneurs Award</strong> will
                recognise outstanding teams within companies with annual
                revenue exceeding €100 million.
              </p>

              <p className="corporate-entrepreneurship__body">
                The initiative also connects academia with the business
                world. Drawing on Hanken's <em>Corporate Entrepreneurship
                in Practice</em> course, it aims to create opportunities
                for students majoring in Entrepreneurship to demonstrate
                their capabilities and connect with established companies.
              </p>

              <p className="corporate-entrepreneurship__body">
                The first edition is supported by <strong>Miltton and
                PwC</strong>, with an experienced jury contributing to
                the initiative. Our ambition is to make corporate
                entrepreneurs more visible, celebrate the people driving
                innovation from within and strengthen Finland's
                entrepreneurial culture.
              </p>

              <div className="corporate-entrepreneurship__website">

                <h2>INTERESTED IN LEARNING MORE?</h2>

                <p>
                  Discover the competition, participating companies and
                  awards on the official Corporate Entrepreneurship website.
                </p>

                <a
                  className="corporate-entrepreneurship__website-placeholder"
                  href="https://vuodenpoikkeustekijat.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VISIT OFFICIAL WEBSITE →
                </a>

              </div>

            </section>
          </div>
        </main>

        <Footer transparent />
      </div>
    </div>
  );
}
