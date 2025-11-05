import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="container-page py-5 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="intelliprop" width={32} height={32} className="object-contain" />
        <span className="font-semibold text-xl">intelliprop</span>
      </Link>
      <nav className="flex items-center gap-6 text-teal-500">
        <Link href="/" className="hover:opacity-80">product</Link>
        <Link href="/pricing" className="hover:opacity-80">pricing</Link>
        <Link href="/resources" className="hover:opacity-80">resources</Link>
        <Link href="/generate-report" className="ml-4 rounded-full bg-ink text-white text-sm px-4 py-2 hover:opacity-90">generate a report</Link>
      </nav>
    </header>
  );
}


