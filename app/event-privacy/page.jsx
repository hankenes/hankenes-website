import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Event Registration Privacy Notice - HankenES' };

export default function EventPrivacyPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Event Registration Privacy Notice</h1>
        <p className="legal__updated">Last updated: 28 November 2026</p>

        <div className="legal__body">
          <p>By registering for a Hanken ES event, you acknowledge that Hanken ES will process your personal information for event administration purposes.</p>

          <h2>Information We May Collect</h2>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Educational institution</li>
            <li>Company or organization</li>
            <li>Dietary requirements</li>
            <li>Accessibility requirements</li>
            <li>Other information necessary for event administration</li>
          </ul>

          <h2>Purpose of Processing</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Manage registrations</li>
            <li>Confirm attendance</li>
            <li>Communicate event updates</li>
            <li>Manage event logistics</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>Information may be shared with event partners where necessary for the operation of the event and where such sharing has been communicated beforehand.</p>

          <h2>Further Information</h2>
          <p>For details regarding how personal data is processed, please refer to our Privacy Policy. Questions may be directed to <a href="mailto:info@hankenes.org">info@hankenes.org</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}