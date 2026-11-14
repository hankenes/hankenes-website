import Footer from '../../components/Footer';
import SiteHeader from '../../components/SiteHeader';
import './Assembly2026.css';
export const metadata = { title: 'Assembly 2026 - HankenES' };
export default function Assembly2026Page() {
  return (
    <div className="page assembly-2026">
      <SiteHeader />
      <div className="assembly-2026__below-header">
        <div className="assembly-2026__bg" aria-hidden="true" />
        <main className="assembly-2026__main">
          <div className="assembly-2026__content">
            <h1 className="h-hero assembly-2026__title">ASSEMBLY 2026</h1>
            <p className="small-caps dim assembly-2026__teaser">
              OUR ANNUAL FLAGSHIP EVENT RETURNS.
            </p>
            <p className="assembly-2026__body">
              Last year, Assembly brought together over 250 students, founders, and
              investors for an evening of keynotes, panels, and fire rounds on what it
              really takes to build, scale, and sustain a startup. But Assembly has
              always been about more than the talks — it's about the connections made
              and the community built in the room.
            </p>
            {/* CreatedByJohnCedricEsguerra */}
            <p className="assembly-2026__body">
              In 2026, we're making it bigger. More voices, more ideas, and more reasons
              to be part of Finland's growing entrepreneurial community. Full details —
              date, speakers, and registration — are coming soon.
            </p>
            <p className="small-caps dim assembly-2026__note">
              STAY TUNED.
            </p>
          </div>
        </main>
        <Footer transparent />
      </div>
    </div>
  );
}