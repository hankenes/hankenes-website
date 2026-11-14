import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Cookie Policy - HankenES' };

export default function CookiePolicyPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Cookie Policy</h1>
        <p className="legal__updated">Last updated: [DATE]</p>

        <div className="legal__body">
          <h2>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device when you visit a website. Cookies help websites function properly, improve user experience, and remember certain preferences.</p>

          <h2>2. How We Use Cookies</h2>
          <p>Hanken ES uses a limited number of cookies necessary for website functionality and embedded services. We do not currently use advertising or marketing cookies.</p>

          <h2>3. Types of Cookies We Use</h2>
          <h3>Strictly Necessary Cookies</h3>
          <p>These cookies are essential for website operation and security. Examples include session management, security functions, and cookie preference storage. These cookies cannot be disabled.</p>
          <h3>Embedded Content Cookies</h3>
          <p>Our website may contain content provided by third parties, such as event platforms. These providers may place cookies when their content is loaded.</p>

          <h2>4. Third-Party Providers</h2>
          <p>Currently, our website may use embedded services from Luma (lu.ma). Users should review third-party privacy and cookie policies for information about how those providers process personal data.</p>

          <h2>5. Managing Cookies</h2>
          <p>Most web browsers allow users to view, delete, block, and configure cookie preferences. Disabling cookies may affect website functionality.</p>

          <h2>6. Future Changes</h2>
          <p>If we introduce analytics or marketing technologies, this Cookie Policy will be updated accordingly, and a cookie consent banner will be provided where required.</p>

          <h2>7. Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

          <h2>8. Contact</h2>
          <p>Questions regarding cookies may be directed to <a href="mailto:info@hankenes.org">info@hankenes.org</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}