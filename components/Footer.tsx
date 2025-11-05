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
      { label: 'insights', href: '/insights' },
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
    <footer className="border-t border-border dark:border-dark-border mt-12 sm:mt-16 md:mt-20 py-6 sm:py-8 md:py-10 text-sm bg-bg dark:bg-dark-bg">
      <div className="container-page grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {columns.map(col => (
          <div key={col.title}>
            <div className="font-semibold mb-2 text-sm sm:text-base text-ink dark:text-dark-ink">{col.title}</div>
            <ul className="space-y-1.5 text-ink dark:text-dark-ink">
              {col.links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary transition-colors text-xs sm:text-sm text-muted dark:text-dark-muted">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}


