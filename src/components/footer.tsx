import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => (
  <footer className="bg-[#0a0a0a] text-white/70 py-16 mt-16 border-t border-white/5">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      {/* Branding & Summary */}
      <div className="flex flex-col items-center md:items-start max-w-sm">
        <Link href="/" className="flex items-center gap-2 mb-6 group">
          <Image src={`${siteConfig.basePath}/logo/icon.svg`} alt={siteConfig.name} width={36} height={36} className="transition-transform group-hover:scale-110 invert" />
          <span
            className="font-serif font-light text-2xl tracking-tight text-white"
          >
            {siteConfig.name}
          </span>
        </Link>
        <p className="text-sm leading-relaxed mb-8">
          Kumaon Valley offers best Kumaon tour packages for family, friends and couples with well-planned itineraries, comfy stays & scenic adventures. Start Your journey into the heart of Kumaoni Heritage.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href={siteConfig.social.instagram} title="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href={siteConfig.social.facebook} title="Facebook" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href={siteConfig.social.youtube} title="YouTube" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
          </a>
        </div>
      </div>

      {/* Explore List */}
      <div>
        <h4 className="font-serif font-light text-xl mb-6 text-white">Explore</h4>
        <ul className="space-y-1">
          {siteConfig.navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm hover:text-white transition-colors py-1 block">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="font-serif font-light text-xl mb-6 text-white">Contact Us</h4>
        <ul className="space-y-3 text-sm leading-relaxed text-white/80">
          <li className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</span>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a>
          </li>
          <li className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Phone</span>
            <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a>
          </li>
          <li className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Address</span>
            <span className="max-w-[250px]">{siteConfig.contact.address}</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto mt-16 pt-8 border-t border-white/5 text-center">
      <p className="text-[10px] uppercase tracking-widest text-white/40">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </div>
  </footer>
);
