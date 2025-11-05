import '../globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'intelliprop',
  description: 'Property intelligence, instantly. Turn any address or brief into a clear, decision-ready report in minutes—not days.',
  icons: {
    icon: '/applogo.png',
    shortcut: '/applogo.png',
    apple: '/applogo.png'
  }
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-bg dark:bg-dark-bg">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="bg-bg dark:bg-dark-bg text-ink dark:text-dark-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


