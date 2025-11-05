import Image from 'next/image';

type Card = { title: string; body: string; image?: string; };

const defaultImages = ['/property-brief.jpg', '/finance-analytics.jpg', '/investment-chart.jpg'];

export default function FeatureCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((c, index) => (
        <div key={c.title} className="rounded-xl bg-bgAlt overflow-hidden">
          <div className="relative h-48 w-full">
            <Image 
              src={c.image || defaultImages[index] || '/property-hero.jpg'} 
              alt={c.title} 
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="text-primary font-semibold mb-2">{c.title}</div>
            <p className="text-muted leading-relaxed">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


