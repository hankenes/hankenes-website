import Footer from '../../components/Footer';
import SiteHeader from '../../components/SiteHeader';
import './Assembly2026.css';

export const metadata = { title: 'Assembly 2026 - HankenES' };

export default function Assembly2026Page() {
  return (
    <div className="page assembly-2026">
      <SiteHeader theme="blue" />
      <div className="assembly-2026__below-header">
        <div className="assembly-2026__bg" aria-hidden="true" />
        <main className="assembly-2026__main">
          <div className="assembly-2026__content">
            <h1 className="h-hero assembly-2026__title">ASSEMBLY<br />2026</h1>
            <p className="small-caps dim assembly-2026__teaser">
              DETAILS COMING SOON. STAY TUNED.
            </p>
          </div>
        </main>
        <Footer transparent />
      </div>
    </div>
  );
}
