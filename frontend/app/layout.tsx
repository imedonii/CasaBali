import type { Metadata } from 'next';
import './globals.css';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
