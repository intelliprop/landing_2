import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
};

export default function SectionHeading({ title, sub, className = '' }: Props) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="h2 mb-3">{title}</h2>
      {sub && <p className="lead text-base sm:text-lg">{sub}</p>}
    </div>
  );
}

