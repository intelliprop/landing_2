import Button from './Button';
import Image from 'next/image';

export default function ReportSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <div className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt overflow-hidden border border-border dark:border-dark-border">
        <div className="relative h-36 sm:h-40 w-full">
          <Image src="/min-brief.svg" alt="Brief report" fill className="object-cover" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="text-lg sm:text-xl font-semibold mb-2 text-ink dark:text-dark-ink">Brief report.</div>
          <p className="text-muted dark:text-dark-muted mb-4 text-sm sm:text-base">Describe your goals for a concise report powered by AI chat intake. Start brief.</p>
          <Button href="#" variant="secondary">Begin brief</Button>
        </div>
      </div>
      <div className="rounded-2xl bg-bgAlt dark:bg-dark-bgAlt overflow-hidden border border-border dark:border-dark-border">
        <div className="relative h-36 sm:h-40 w-full">
          <Image src="/min-address.svg" alt="Address report" fill className="object-cover" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="text-lg sm:text-xl font-semibold mb-2 text-ink dark:text-dark-ink">Address report.</div>
          <p className="text-muted dark:text-dark-muted mb-4 text-sm sm:text-base">Enter a property address for detailed intelliprop analysis and scoring. Address entry.</p>
          <Button href="#" variant="secondary">Enter address</Button>
        </div>
      </div>
    </div>
  );
}


