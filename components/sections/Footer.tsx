import Link from 'next/link';
import { copy } from '@/lib/copy';

export default function Footer() {
  return (
    <footer className="bg-[var(--ip-navy)] text-[var(--ip-fg)] py-12">
      <div className="container-page">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <Link href="/" className="text-2xl font-semibold text-[var(--ip-teal)]">
              intelliprop
            </Link>
            <p className="text-sm text-[var(--ip-muted)] mt-2">{copy.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <Link href="/privacy" className="text-sm hover:text-[var(--ip-teal)] transition-colors underline-offset-4 hover:underline">
              {copy.footer.links.privacy}
            </Link>
            <Link href="/terms" className="text-sm hover:text-[var(--ip-teal)] transition-colors underline-offset-4 hover:underline">
              {copy.footer.links.terms}
            </Link>
            <Link href="/data-deletion" className="text-sm hover:text-[var(--ip-teal)] transition-colors underline-offset-4 hover:underline">
              {copy.footer.links.dataDeletion}
            </Link>
            <Link href="/careers" className="text-sm hover:text-[var(--ip-teal)] transition-colors underline-offset-4 hover:underline">
              {copy.footer.links.careers}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

