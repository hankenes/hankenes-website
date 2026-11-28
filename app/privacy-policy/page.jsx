import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Privacy Policy - HankenES' };

export default function PrivacyPolicyPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Privacy Policy</h1>
        <p className="legal__updated">Last updated: 28 November 2026</p>

        <div className="legal__body">
          <h2>1. Introduction</h2>
          <p>Hanken Entrepreneurship Society rf ("Hanken ES", "we", "our", or "us") is committed to protecting your privacy and handling personal data responsibly, transparently, and in accordance with the European Union General Data Protection Regulation (GDPR) and applicable Finnish legislation.</p>
          <p>This Privacy Policy explains how we collect, use, store, share, and protect personal data when you visit our website, participate in our events, become a member, subscribe to communications, or otherwise interact with Hanken ES.</p>

          <h2>2. Data Controller</h2>
          <p>Hanken Entrepreneurship Society rf<br />
          Arkadiagatan 22, Hanken Business Lab<br />
          00100 Helsinki, Finland<br />
          Email: <a href="mailto:info@hankenes.org">info@hankenes.org</a><br />
          Website: https://www.hankenes.org</p>
          <p>For privacy-related requests and questions, please contact us at <a href="mailto:info@hankenes.org">info@hankenes.org</a>.</p>

          <h2>3. Personal Data We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Educational institution</li>
            <li>Company or organization</li>
            <li>Event registration information</li>
            <li>Membership information</li>
            <li>Information submitted through forms</li>
            <li>Information provided through email or direct communication</li>
          </ul>
          <h3>Information Collected Automatically</h3>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Referring website</li>
            <li>Time spent on pages</li>
            <li>Cookie information</li>
          </ul>

          <h2>4. Purposes and Legal Basis for Processing</h2>
          <p>We process personal data to communicate with you (legitimate interest; consent where applicable), administer events (contract; legitimate interest), manage memberships (contract; legitimate interest), send newsletters and updates (consent), operate and maintain the website (legitimate interest), and comply with legal obligations (legal obligation).</p>

          <h2>5. Data Sharing</h2>
          <p>We do not sell personal data. Personal data may be shared with website hosting providers, email service providers, event management platforms (such as Luma), technical service providers, and public authorities where required by law. All third-party providers are required to process personal data securely and only for authorized purposes.</p>

          <h2>6. International Transfers</h2>
          <p>Where personal data is transferred outside the European Economic Area (EEA), appropriate safeguards will be implemented, including Standard Contractual Clauses or other lawful transfer mechanisms under GDPR.</p>

          <h2>7. Data Retention</h2>
          <p>We retain personal data only for as long as necessary. Typical retention periods include: contact form inquiries up to 12 months; event registration information up to 24 months after the event; membership records for the duration of membership and up to 3 years thereafter; newsletter subscriptions until consent is withdrawn; and financial records as required by Finnish law. Data may be retained longer where required to comply with legal obligations or to establish, exercise, or defend legal claims.</p>

          <h2>8. Your Rights</h2>
          <p>You may have the right to access your personal data, correct inaccurate information, request deletion, restrict processing, object to processing, withdraw consent, request data portability, and lodge a complaint with a supervisory authority. Requests may be submitted to <a href="mailto:info@hankenes.org">info@hankenes.org</a>.</p>

          <h2>9. Security</h2>
          <p>We implement appropriate technical and organizational measures to protect personal data. However, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>

          <h2>10. Third-Party Websites</h2>
          <p>Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.</p>

          <h2>11. Children's Privacy</h2>
          <p>Our services are not directed at children under the age of 13 (the age of digital consent in Finland). We do not knowingly collect personal data from children under this age.</p>

          <h2>12. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically. Updates will be published on this page with a revised "Last updated" date.</p>

          <h2>13. Contact</h2>
          <p>For privacy-related questions: <a href="mailto:info@hankenes.org">info@hankenes.org</a>. If you believe your rights have been violated, you may contact the Office of the Data Protection Ombudsman of Finland.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}