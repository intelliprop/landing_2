import { ReactNode } from 'react';

export default function VisuallyHidden({ children }: { children: ReactNode }) {
  return (
    <span className="sr-only" aria-hidden="false">
      {children}
    </span>
  );
}

