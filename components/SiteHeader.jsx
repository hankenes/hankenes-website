
import Link from 'next/link';
import './SiteHeader.css';

export default function SiteHeader({ home = false, transparent = false }) {
  return (
    <header className={`site-header-v2${transparent ? ' site-header-v2--transparent' : ''}`}>
      <Link href="/" className="site-header-v2__logo-link" aria-label="HankenES home">
        <img
          src="/assets/images/hankenes-logo-2026.png"
          alt="HankenES"
          className="site-header-v2__logo"
        />
      </Link>

      <nav className="site-header-v2__nav">
        <Link href="/" className="site-header-v2__nav-link hover-grow">
          HOME
        </Link>

        <Link href="/events" className="site-header-v2__nav-link hover-grow">
          EVENTS
        </Link>

        <details className="site-header-v2__dropdown">
          <summary className="site-header-v2__nav-link hover-grow">
            ASSEMBLY
          </summary>

          <div className="site-header-v2__dropdown-menu">
            <Link href="/assembly-2027">
              Assembly 2027
            </Link>
            <Link href="/assembly-2026">
              Assembly 2026
            </Link>
          </div>
        </details>

        <Link href="/get-involved" className="site-header-v2__nav-link hover-grow">
          GET INVOLVED
        </Link>
      </nav>
    </header>
  );
}
