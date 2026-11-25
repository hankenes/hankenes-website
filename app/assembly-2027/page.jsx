
import Footer from '../../components/Footer';
import SiteHeader from '../../components/SiteHeader';
import '../assembly-2026/Assembly2026.css';
import './Assembly2027.css';

export const metadata = {
  title: 'Assembly 2027 - HankenES',
};

export default function Assembly2027Page() {
  return (
    <div className="page assembly-2026 assembly-2027">
      <SiteHeader />

      <div className="assembly-2026__below-header">
        <div className="assembly-2026__bg" aria-hidden="true" />

        <main className="assembly-2026__main">
          <div className="assembly-2026__content">

            <p className="small-caps dim assembly-2026__eyebrow">
              HANKEN ENTREPRENEURSHIP SOCIETY PRESENTS
            </p>

            <h1 className="h-hero assembly-2026__title">
              ASSEMBLY 2027
            </h1>

            <p className="assembly-2027__subtitle">
              OUR ANNUAL FLAGSHIP EVENT RETURNS.
            </p>

            <p className="assembly-2027__tagline">
              A new year. New perspectives. New possibilities.
            </p>

            <p className="assembly-2027__intro">
              Assembly returns in 2027, bringing another evening of ideas,
              conversations and connections within Finland's entrepreneurial
              community.
            </p>

            {/* CreatedByJohnCedricEsguerra */}

            <section className="assembly-2026__closing assembly-2027__closing">
              <p className="assembly-2026__note">
                MORE DETAILS COMING SOON.
              </p>
            </section>

          </div>
        </main>

        <Footer transparent />
      </div>
    </div>
  );
}
