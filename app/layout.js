
import './globals.css';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
  title: 'HankenES - Hanken Entrepreneurship Society rf',
  description: 'Hanken Entrepreneurship Society — a Finnish non-profit supporting entrepreneurship at Hanken School of Economics since 2010.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
