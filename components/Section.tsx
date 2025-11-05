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
    <section id={id} className={`container-page py-8 sm:py-12 md:py-16 lg:py-20 ${className}`}>
      {(title || lead) && (
        <div className="mb-6 sm:mb-8 max-w-3xl">
          {title && <h2 className="h2 mb-2 sm:mb-3">{title}</h2>}
          {lead && <p className="lead text-base sm:text-lg">{lead}</p>}
        </div>
      )}
      {children}
    </section>
  );
}


