import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = '', hover = true }: Props) {
  return (
    <div
      className={`
        rounded-xl p-6 bg-[var(--ip-card)] 
        border border-transparent
        ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

