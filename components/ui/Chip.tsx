import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Chip({ children, className = '' }: Props) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-xs font-medium
        bg-[var(--ip-card)] text-[var(--ip-fg)]
        border border-[var(--ip-muted)]/20
        ${className}
      `}
    >
      {children}
    </span>
  );
}

