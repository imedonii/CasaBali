import type { Metadata } from 'next';
import './globals.css';
import '../styles/theme.css';
import { modulusPro } from './font';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Casa Bali',
  description: 'Casa Bali - Luxury Mattresses',
  keywords: [
    'Casa Bali',
    'Luxury Mattresses',
    'Bali',
    'Mattresses',
    'Bedding',
    'Sleep',
    'Comfort',
    'Quality',
    'Premium',
    'Mattress',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${modulusPro.className} w-full overflow-x-hidden`}>
        <Navigation isScrolled={false} />

        <div className="w-full overflow-x-hidden">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
