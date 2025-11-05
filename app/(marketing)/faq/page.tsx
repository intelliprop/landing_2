export const metadata = { title: 'FAQ — intelliprop' };

const faqs = [
  { q: 'what is intelliscore™?', a: 'a 0–100 score blending yield, growth, livability, and risk into a unified scale.' },
  { q: 'how fast is a report?', a: 'minutes. our pipelines evaluate and compile instantly once you submit.' },
  { q: 'do you store my data?', a: 'privacy-first. insights are generated securely and not shared with third parties.' }
];

export default function FaqPage() {
  return (
    <section className="container-page py-16">
      <h1 className="h1 mb-8">faq</h1>
      <ul className="space-y-6 max-w-3xl">
        {faqs.map((f) => (
          <li key={f.q}>
            <div className="font-semibold text-primary mb-1">{f.q}</div>
            <div className="text-muted">{f.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}


