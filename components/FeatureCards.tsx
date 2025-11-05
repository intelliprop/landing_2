import Image from 'next/image';

type Card = { title: string; body: string; image?: string; };

const defaultImages = ['/property-brief.jpg', '/finance-analytics.jpg', '/investment-chart.jpg'];

export default function FeatureCards({ cards }: { cards: Card[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {cards.map((c, index) => (
        <div key={c.title} className="rounded-xl bg-bgAlt dark:bg-dark-bgAlt overflow-hidden border border-border dark:border-dark-border">
          <div className="relative h-36 sm:h-40 w-full">
            <Image 
              src={c.image || defaultImages[index] || '/property-hero.jpg'} 
              alt={c.title} 
              fill
              className="object-cover filter saturate-0 contrast-110"
            />
          </div>
          <div className="p-4 sm:p-5">
            <div className="text-primary font-semibold mb-2 text-base sm:text-lg">{c.title}</div>
            <p className="text-muted dark:text-dark-muted leading-relaxed text-sm sm:text-base">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


