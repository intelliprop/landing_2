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
    <footer className="border-t border-border mt-24 py-12 text-sm">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
        {columns.map(col => (
          <div key={col.title}>
            <div className="font-semibold mb-3">{col.title}</div>
            <ul className="space-y-2 text-ink">
              {col.links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}


