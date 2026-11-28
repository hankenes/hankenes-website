import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import '../legal.css';

export const metadata = { title: 'Photography & Recording Notice - HankenES' };

export default function PhotographyPage() {
  return (
    <div className="page legal">
      <SiteHeader />
      <main className="legal__main">
        <h1 className="legal__title">Event Photography &amp; Recording Notice</h1>
        <p className="legal__updated">Last updated: 28 November 2026</p>

        <div className="legal__body">
          <p>Hanken Entrepreneurship Society ("Hanken ES") may take photographs, video recordings, and other media during events, workshops, networking sessions, competitions, and other activities organized or co-organized by Hanken ES.</p>
          <p>Photographs and recordings are processed on the basis of Hanken ES's legitimate interest in documenting, promoting, and preserving records of its activities.</p>

          <h2>Use of Images and Recordings</h2>
          <p>Images and recordings may be used for:</p>
          <ul>
            <li>Social media</li>
            <li>Website content</li>
            <li>Event promotion</li>
            <li>Marketing and communications</li>
            <li>Presentations</li>
            <li>Annual reports</li>
            <li>Historical and archival purposes</li>
          </ul>

          <h2>Individual Photographs</h2>
          <p>Where photographs focus primarily on a specific individual rather than documenting the event generally, Hanken ES may seek additional consent where appropriate.</p>

          <h2>Your Choices</h2>
          <p>If you do not wish to appear in photographs or recordings, please inform an organizer upon arrival or contact us before the event at <a href="mailto:info@hankenes.org">info@hankenes.org</a>. We will make reasonable efforts to accommodate requests where practical. Please note that it may not always be possible to exclude individuals from crowd photographs or recordings.</p>

          <h2>Removal Requests</h2>
          <p>If you appear in a published image and would like us to review its removal, please contact <a href="mailto:info@hankenes.org">info@hankenes.org</a>. Requests will be reviewed on a case-by-case basis.</p>

          <h2>Contact</h2>
          <p><a href="mailto:info@hankenes.org">info@hankenes.org</a></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}