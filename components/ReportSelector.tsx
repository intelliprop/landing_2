import Button from './Button';

export default function ReportSelector() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl bg-bgAlt p-8">
        <div className="text-xl font-semibold mb-2">brief report.</div>
        <p className="text-muted mb-6">describe your goals for a concise report powered by ai chat intake. start brief.</p>
        <Button href="#" variant="secondary">begin brief</Button>
      </div>
      <div className="rounded-2xl bg-bgAlt p-8">
        <div className="text-xl font-semibold mb-2">address report.</div>
        <p className="text-muted mb-6">enter a property address for detailed intelliprop analysis and scoring. address entry.</p>
        <Button href="#" variant="secondary">enter address</Button>
      </div>
    </div>
  );
}


