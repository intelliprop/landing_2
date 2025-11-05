'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference and localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode ? savedMode === 'true' : prefersDark;
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="container-page py-4 sm:py-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/applogo.png" alt="intelliprop" width={32} height={32} className="object-contain" />
          <span className="font-semibold text-lg sm:text-xl">intelliprop</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-ink dark:text-dark-ink">
          <Link href="/" className="hover:text-primary transition-colors">product</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">pricing</Link>
          <Link href="/insights" className="hover:text-primary transition-colors">insights</Link>
          <Link href="/resources" className="hover:text-primary transition-colors">resources</Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-bgAlt dark:hover:bg-dark-bgAlt transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <Link href="/generate-report" className="ml-2 rounded-full bg-primary text-white text-sm px-4 py-2 hover:opacity-90 transition-opacity">generate a report</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 border-t border-border dark:border-dark-border pt-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-ink dark:text-dark-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>product</Link>
            <Link href="/pricing" className="text-ink dark:text-dark-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>pricing</Link>
            <Link href="/insights" className="text-ink dark:text-dark-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>insights</Link>
            <Link href="/resources" className="text-ink dark:text-dark-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>resources</Link>
            <button
              onClick={() => { toggleDarkMode(); setMobileMenuOpen(false); }}
              className="text-left text-ink dark:text-dark-ink hover:text-primary transition-colors py-2 flex items-center gap-2"
            >
              {darkMode ? 'light mode' : 'dark mode'}
            </button>
            <Link href="/generate-report" className="rounded-full bg-primary text-white text-sm px-4 py-2.5 hover:opacity-90 transition-opacity text-center mt-2" onClick={() => setMobileMenuOpen(false)}>generate a report</Link>
          </div>
        </nav>
      )}
    </header>
  );
}


