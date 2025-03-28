import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F1] shadow-md text-[#4B4032]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Bear Pan Logo" width={60} height={60} />
          <span className="text-2xl font-bold tracking-wide transition-colors duration-200 group-hover:text-[#8B5E3C]">
            Rather Bear Pan
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="space-x-10 text-lg font-medium flex items-center">
          {['Home', 'Projects', 'Blog', 'Reads'].map((text) => (
            <Link
              key={text}
              href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
              className="relative group hover:text-[#8B5E3C] transition duration-200"
            >
              <span>{text}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#8B5E3C] group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
