import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Code of Conduct - HankenES' };

export default function CodeOfConductPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Code of Conduct</h1>
        <p className="legal__updated">Last updated: 28 November 2026</p>

        <div className="legal__body">
          <h2>Purpose</h2>
          <p>Hanken ES is committed to creating a welcoming, respectful, inclusive, and professional environment. This Code of Conduct applies to all Hanken ES events, activities, online platforms, and community interactions.</p>

          <h2>Expected Behaviour</h2>
          <p>Participants are expected to:</p>
          <ul>
            <li>Treat others respectfully</li>
            <li>Act professionally</li>
            <li>Respect differing opinions</li>
            <li>Follow organizer instructions</li>
            <li>Contribute positively to the community</li>
          </ul>

          <h2>Unacceptable Behaviour</h2>
          <p>The following is not tolerated:</p>
          <ul>
            <li>Harassment</li>
            <li>Discrimination</li>
            <li>Threats</li>
            <li>Intimidation</li>
            <li>Offensive language</li>
            <li>Sexual harassment</li>
            <li>Unwanted physical contact</li>
            <li>Deliberate disruption of activities</li>
            <li>Sharing private information without consent</li>
          </ul>

          <h2>Reporting Concerns</h2>
          <p>Concerns may be reported to organizers or by email at <a href="mailto:info@hankenes.org">info@hankenes.org</a>. Reports will be handled confidentially where possible.</p>

          <h2>Enforcement</h2>
          <p>Hanken ES reserves the right to issue warnings, remove participants from events, restrict future participation, and take other appropriate actions.</p>

          <h2>Changes</h2>
          <p>This Code of Conduct may be updated periodically.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}