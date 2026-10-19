import './globals.css';
import ScrollToTop from '../components/ScrollToTop';
import IntroLoader from '../components/IntroLoader';

export const metadata = {
  title: 'HankenES - Hanken Entrepreneurship Society rf',
  description: 'Hanken Entrepreneurship Society — a Finnish non-profit supporting entrepreneurship at Hanken School of Economics since 2010.',
};

const NO_RESTORE = `
(function() {
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  if (location.hash) return;
  var html = document.documentElement;
  var prev = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  function top() { window.scrollTo(0, 0); }
  top();
  document.addEventListener('DOMContentLoaded', top, { once: true });
  window.addEventListener('load', top, { once: true });
  window.addEventListener('pageshow', top);
  var n = 0;
  function raf() {
    if (n++ > 8) { html.style.scrollBehavior = prev; return; }
    window.scrollTo(0, 0);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_RESTORE }} />
      </head>
      <body>
        <IntroLoader />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
