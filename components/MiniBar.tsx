type Props = { values?: number[] };

// Tiny bar chart used for marketing mockups
export default function MiniBar({ values = [3, 7, 5, 9, 4, 6] }: Props) {
  const max = Math.max(...values, 1);
  return (
    <div className="flex items-end gap-1 h-10">
      {values.map((v, i) => (
        <div key={i} style={{ height: `${(v / max) * 100}%` }} className="w-2 bg-primary rounded-sm" />
      ))}
    </div>
  );
}


