'use client';

// SVG icons matching dashboard style - all teal colored (#12c4a7)
export function FileIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#12c4a7" strokeWidth="1.6" className={className}>
      <path d="M7 3h7l4 4v14H7V3Z"/>
      <path d="M14 3v4h4"/>
    </svg>
  );
}

export function HouseIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#12c4a7" strokeWidth="1.6" className={className}>
      <path d="M3 10 12 3l9 7v10H3V10Z"/>
      <path d="M9 21v-6h6v6"/>
    </svg>
  );
}

export function MapIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#12c4a7" strokeWidth="1.6" className={className}>
      <path d="M9 3l6 2 6-2v18l-6 2-6-2-6 2V5l6-2Z"/>
      <path d="M9 3v18M15 5v18"/>
    </svg>
  );
}

