import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="container-page py-5 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/applogo.png" alt="intelliprop" width={32} height={32} className="object-contain" />
        <span className="font-semibold text-xl">intelliprop</span>
      </Link>
      <nav className="flex items-center gap-6 text-ink">
        <Link href="/" className="hover:text-primary">product</Link>
        <Link href="/pricing" className="hover:text-primary">pricing</Link>
        <Link href="/resources" className="hover:text-primary">resources</Link>
        <Link href="/generate-report" className="ml-4 rounded-full bg-primary text-white text-sm px-4 py-2 hover:opacity-90">generate a report</Link>
      </nav>
    </header>
  );
}


