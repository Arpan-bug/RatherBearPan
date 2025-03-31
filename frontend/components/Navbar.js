import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
// ✅ Import the theme toggle component

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reads', href: '/reads' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F1] dark:bg-[#1a1a1a] shadow-md text-[#4B4032] dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="Bear Pan Logo" width={60} height={60} />
          <span className="text-2xl font-bold tracking-wide transition-colors duration-200 group-hover:text-[#8B5E3C] dark:group-hover:text-orange-300">
            Rather Bear Pan
          </span>
        </Link>

        {/* Desktop Links + Theme Toggle */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative group hover:text-[#8B5E3C] dark:hover:text-orange-300 transition duration-200"
            >
              <span>{label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#8B5E3C] dark:bg-orange-300 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
         {/* <ThemeToggle /> {/* ✅ Button here */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#4B4032] dark:text-white hover:text-[#8B5E3C] dark:hover:text-orange-300 focus:outline-none"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden px-6 pb-4 space-y-4 bg-[#FFF8F1] dark:bg-[#1a1a1a] text-lg font-medium animate-fade-in transition-colors duration-300"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeMenu}
              className="block hover:text-[#8B5E3C] dark:hover:text-orange-300 transition duration-200"
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <ThemeToggle /> {/* ✅ Optional in mobile too */}
          </div>
        </div>
      )}
    </nav>
  );
}
