type Card = { title: string; body: string; };

export default function FeatureCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((c) => (
        <div key={c.title} className="rounded-xl bg-bgAlt p-6">
          <div className="text-primary font-semibold mb-2">{c.title}</div>
          <p className="text-muted leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  );
}


