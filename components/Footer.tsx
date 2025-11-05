import Link from 'next/link';

const columns = [
  {
    title: 'product',
    links: [
      { label: 'how it works', href: '/#how-it-works' },
      { label: 'ai brief', href: '/#ai-brief' },
      { label: 'address report', href: '/#address-report' }
    ]
  },
  {
    title: 'company',
    links: [
      { label: 'about', href: '/about' },
      { label: 'careers', href: '/careers' },
      { label: 'contact', href: '/contact' }
    ]
  },
  {
    title: 'resources',
    links: [
      { label: 'guides', href: '/guides' },
      { label: 'blog', href: '/blog' },
      { label: 'faq', href: '/faq' }
    ]
  },
  {
    title: 'legal',
    links: [
      { label: 'privacy', href: '/privacy' },
      { label: 'terms', href: '/terms' },
      { label: 'data deletion', href: '/data-deletion' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 sm:mt-20 md:mt-24 py-8 sm:py-10 md:py-12 text-sm">
      <div className="container-page grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {columns.map(col => (
          <div key={col.title}>
            <div className="font-semibold mb-3 text-sm sm:text-base">{col.title}</div>
            <ul className="space-y-2 text-ink">
              {col.links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors text-xs sm:text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}


