import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({ href, children, className = '', variant = 'primary', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition';
  const styles = variant === 'primary'
    ? 'bg-ink text-white hover:opacity-90'
    : 'bg-bgAlt text-ink hover:bg-border';

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>{children}</Link>
    );
  }
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>{children}</button>
  );
}


