import Button from './Button';
import Image from 'next/image';

export default function ReportSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div className="rounded-2xl bg-bgAlt overflow-hidden">
        <div className="relative h-40 sm:h-48 w-full">
          <Image src="/property-brief.jpg" alt="Brief report" fill className="object-cover filter saturate-0 contrast-110" />
        </div>
        <div className="p-6 sm:p-8">
          <div className="text-lg sm:text-xl font-semibold mb-2">brief report.</div>
          <p className="text-muted mb-6 text-sm sm:text-base">describe your goals for a concise report powered by ai chat intake. start brief.</p>
          <Button href="#" variant="secondary">begin brief</Button>
        </div>
      </div>
      <div className="rounded-2xl bg-bgAlt overflow-hidden">
        <div className="relative h-40 sm:h-48 w-full">
          <Image src="/property-address.jpg" alt="Address report" fill className="object-cover filter saturate-0 contrast-110" />
        </div>
        <div className="p-6 sm:p-8">
          <div className="text-lg sm:text-xl font-semibold mb-2">address report.</div>
          <p className="text-muted mb-6 text-sm sm:text-base">enter a property address for detailed intelliprop analysis and scoring. address entry.</p>
          <Button href="#" variant="secondary">enter address</Button>
        </div>
      </div>
    </div>
  );
}


