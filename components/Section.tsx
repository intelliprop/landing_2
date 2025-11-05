import { ReactNode } from 'react';

type Props = {
  title?: string;
  lead?: string;
  children?: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ title, lead, children, className = '', id }: Props) {
  return (
    <section id={id} className={`container-page py-12 sm:py-16 md:py-20 lg:py-24 ${className}`}>
      {(title || lead) && (
        <div className="mb-8 sm:mb-10 max-w-3xl">
          {title && <h2 className="h2 mb-3 sm:mb-4">{title}</h2>}
          {lead && <p className="lead text-base sm:text-lg">{lead}</p>}
        </div>
      )}
      {children}
    </section>
  );
}


