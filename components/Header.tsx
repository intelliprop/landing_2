'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container-page py-4 sm:py-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/applogo.png" alt="intelliprop" width={32} height={32} className="object-contain" />
          <span className="font-semibold text-lg sm:text-xl">intelliprop</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-ink">
          <Link href="/" className="hover:text-primary transition-colors">product</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">pricing</Link>
          <Link href="/resources" className="hover:text-primary transition-colors">resources</Link>
          <Link href="/generate-report" className="ml-4 rounded-full bg-primary text-white text-sm px-4 py-2 hover:opacity-90 transition-opacity">generate a report</Link>
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
        <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>product</Link>
            <Link href="/pricing" className="text-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>pricing</Link>
            <Link href="/resources" className="text-ink hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>resources</Link>
            <Link href="/generate-report" className="rounded-full bg-primary text-white text-sm px-4 py-2.5 hover:opacity-90 transition-opacity text-center mt-2" onClick={() => setMobileMenuOpen(false)}>generate a report</Link>
          </div>
        </nav>
      )}
    </header>
  );
}


