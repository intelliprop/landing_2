import '../globals.css';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: 'intelliprop',
  description: 'Property intelligence, instantly. Turn any address or brief into a clear, decision-ready report in minutes—not days.',
  icons: [
    { rel: 'icon', url: '/applogo.png', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', url: '/applogo-dark.png', media: '(prefers-color-scheme: dark)' }
  ]
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[var(--ip-bg)]">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[var(--ip-bg)] text-[var(--ip-fg)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


