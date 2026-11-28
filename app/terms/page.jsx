import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Terms of Use - HankenES' };

export default function TermsPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Terms of Use</h1>
        <p className="legal__updated">Last updated: 28 November 2026</p>

        <div className="legal__body">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using this website, you agree to comply with these Terms of Use and all applicable laws. If you do not agree, please discontinue use of the website.</p>

          <h2>2. Website Purpose</h2>
          <p>The website provides information about Hanken ES, its activities, events, partnerships, and community initiatives.</p>

          <h2>3. Intellectual Property</h2>
          <p>Unless otherwise stated, all content on this website is owned by or licensed to Hanken ES. This includes text, graphics, logos, photographs, videos, downloads, and website design. Content may not be copied, reproduced, modified, or redistributed without permission.</p>

          <h2>4. User Conduct</h2>
          <p>Users agree not to violate laws or regulations, attempt unauthorized access, disrupt website operation, upload malicious software, submit false information, or misuse website content.</p>

          <h2>5. Event Registration</h2>
          <p>Users registering for events agree to provide accurate information. Hanken ES reserves the right to modify event details, refuse registrations, limit attendance, and cancel events where necessary.</p>

          <h2>6. Force Majeure</h2>
          <p>Hanken ES shall not be responsible for delays, interruptions, modifications, or cancellations resulting from circumstances beyond its reasonable control. Examples include severe weather, public health emergencies, government restrictions, venue issues, internet outages, technical failures, and labor disputes.</p>

          <h2>7. Third-Party Links</h2>
          <p>The website may contain links to third-party websites. Hanken ES is not responsible for the content, security, or privacy practices of third-party websites.</p>

          <h2>8. Disclaimer</h2>
          <p>Website information is provided on an "as is" basis. While we strive for accuracy, we make no guarantees regarding completeness, reliability, or availability.</p>

          <h2>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Hanken ES shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the website.</p>

          <h2>10. Privacy</h2>
          <p>Use of the website is also governed by our Privacy Policy and Cookie Policy.</p>

          <h2>11. Changes</h2>
          <p>These Terms may be updated from time to time. Continued use of the website constitutes acceptance of any updated Terms.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of Finland.</p>

          <h2>13. Contact</h2>
          <p><a href="mailto:info@hankenes.org">info@hankenes.org</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}