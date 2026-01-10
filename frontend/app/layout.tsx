'use client';

import './globals.css';
import '../styles/theme.css';
import { modulusPro } from './font';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import LoadingPage from '@/components/LoadingPage/LoadingPage';
import { useEffect, useRef, useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      hasLoaded.current = true;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${modulusPro.className} w-full overflow-x-hidden`}>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Navigation isScrolled={false} />

            <div className="w-full overflow-x-hidden">{children}</div>

            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
