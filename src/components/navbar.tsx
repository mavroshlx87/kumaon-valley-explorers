"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src={`${siteConfig.basePath}/logo/icon.svg`} 
            alt={siteConfig.name} 
            width={32} 
            height={32} 
          />
          <span className="hidden font-bold sm:inline-block text-primary">
            {siteConfig.name}
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium relative">
          {siteConfig.navLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
              {link.subLinks ? (
                <span className="cursor-pointer transition-colors hover:text-primary text-foreground/80 flex items-center gap-1">
                  {link.name}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              ) : (
                <Link
                  href={link.href}
                  className="transition-colors hover:text-primary text-foreground/80"
                >
                  {link.name}
                </Link>
              )}
              
              {/* Dropdown Menu */}
              {link.subLinks && activeDropdown === link.name && (
                <div className="absolute top-full left-0 w-48 pt-2 z-50">
                  <div className="rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 py-1">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-4 py-4 shadow-lg h-screen overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-sm font-medium pb-20">
            {siteConfig.navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <div className="font-semibold text-foreground/80 mb-2">{link.name}</div>
                    <div className="pl-4 flex flex-col space-y-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="transition-colors hover:text-primary text-muted-foreground block w-full"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="transition-colors hover:text-primary text-foreground/80 block w-full"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
