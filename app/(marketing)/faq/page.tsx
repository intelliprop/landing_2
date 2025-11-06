export const metadata = { title: 'FAQ — intelliprop' };

const faqs = [
  { q: 'What is Intelliscore™?', a: 'A 0–100 score blending yield, growth, livability, and risk into a unified scale.' },
  { q: 'How fast is a report?', a: 'Minutes. Our pipelines evaluate and compile instantly once you submit.' },
  { q: 'Do you store my data?', a: 'Privacy‑first. Insights are generated securely and not shared with third parties.' }
];

export default function FaqPage() {
  return (
    <section className="container-page py-16">
      <h1 className="h1 mb-8">FAQ</h1>
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


