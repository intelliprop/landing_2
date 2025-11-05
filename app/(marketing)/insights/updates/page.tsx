export const metadata = { title: 'Updates — intelliprop' };

const updates = [
  { slug: 'launch', title: 'beta launch', summary: 'introducing intelliprop reports with the intelliscore™ system.' },
  { slug: 'pricing', title: 'pricing refresh', summary: 'updated plans for starters, professionals, and enterprise.' }
];

export default function UpdatesIndex() {
  return (
    <section className="container-page py-16">
      <h1 className="h1 mb-6">product updates</h1>
      <ul className="space-y-4">
        {updates.map(u => (
          <li key={u.slug}>
            <a className="text-teal-500" href={`/insights/updates/${u.slug}`}>{u.title}</a>
            <div className="text-muted">{u.summary}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}


