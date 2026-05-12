'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

const ChevronIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => { setIsMobileMenuOpen(false); setActiveDropdown(null); };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src={`${siteConfig.basePath}/logo/icon.svg`} alt="Logo" width={40} height={40} className="transition-transform group-hover:scale-110 duration-300" />
          <span className="font-serif text-xl md:text-2xl text-primary">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto mr-8 text-[13px] font-medium uppercase tracking-wider text-primary">
          {siteConfig.navLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseEnter={() => setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
              {link.subLinks ? (
                <button className="flex items-center gap-1 hover:text-accent">
                  {link.name} <ChevronIcon className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link href={link.href} className="hover:text-accent transition-colors">{link.name}</Link>
              )}
              <AnimatePresence>
                {link.subLinks && activeDropdown === link.name && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 w-48 pt-4">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-1 overflow-hidden">
                      {link.subLinks.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="block px-5 py-2.5 text-xs hover:bg-gray-50 transition-colors normal-case">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <Link href="/contact" className="hidden md:block bg-primary text-white px-7 py-2.5 rounded-full text-[14px] font-serif tracking-wide hover:bg-accent transition-all shadow-md">
          Plan Your Trip
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col p-6 space-y-4">
              {siteConfig.navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <>
                      <button className="w-full flex justify-between items-center text-lg font-serif text-primary" onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                        {link.name} <ChevronIcon className={activeDropdown === link.name ? 'rotate-180' : ''} />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-gray-50">
                          {link.subLinks.map((sub) => (
                            <Link key={sub.name} href={sub.href} onClick={closeMenu} className="text-sm py-1 text-muted-foreground">{sub.name}</Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href} onClick={closeMenu} className="block text-lg font-serif text-primary border-b border-gray-50 pb-2">{link.name}</Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={closeMenu} className="bg-primary text-white text-center py-4 rounded-xl font-serif text-lg shadow-lg mt-4">Inquire Now</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
