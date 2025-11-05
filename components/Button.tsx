import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ href, children, className = '', variant = 'primary', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold transition min-h-[44px] sm:min-h-[auto]';
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:opacity-90 active:opacity-75 dark:bg-primary dark:text-white'
    : 'bg-bgAlt text-ink hover:bg-border active:opacity-80 dark:bg-dark-bgAlt dark:text-dark-ink dark:hover:bg-dark-border';

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>{children}</button>
  );
}


