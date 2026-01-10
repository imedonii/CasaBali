import { Home } from '@/components/Home/Home';
import type { Metadata } from 'next';

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

export default function HomePage() {
  return (
    <div className="relative bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Home />
    </div>
  );
}
