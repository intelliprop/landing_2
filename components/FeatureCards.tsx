import Image from 'next/image';

type Card = { title: string; body: string; image?: string; };

const defaultImages = ['/property-brief.jpg', '/finance-analytics.jpg', '/investment-chart.jpg'];

export default function FeatureCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {cards.map((c, index) => (
        <div key={c.title} className="rounded-xl bg-bgAlt overflow-hidden">
          <div className="relative h-40 sm:h-48 w-full">
            <Image 
              src={c.image || defaultImages[index] || '/property-hero.jpg'} 
              alt={c.title} 
              fill
              className="object-cover filter saturate-0 contrast-110"
            />
          </div>
          <div className="p-5 sm:p-6">
            <div className="text-primary font-semibold mb-2 text-base sm:text-lg">{c.title}</div>
            <p className="text-muted leading-relaxed text-sm sm:text-base">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


