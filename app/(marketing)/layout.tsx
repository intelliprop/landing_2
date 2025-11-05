import '../globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'intelliprop',
  description: 'intelliprop turns data into clarity.',
  icons: {
    icon: '/applogo.png',
    shortcut: '/applogo.png',
    apple: '/applogo.png'
  }
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


