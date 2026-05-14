import React from 'react';
import { colors, fonts } from '@/styles/tokens';
import { siteConfig } from '@/config/site';

export const ContactInfoCard: React.FC = () => (
  <div className="space-y-6 text-left">
    <h3 className="font-serif text-2xl font-light text-foreground mb-2">
      We’re here for you
    </h3>

    <p className="text-muted-foreground">{siteConfig.description}</p>

    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground">
        <strong>Address:</strong> {siteConfig.contact?.address ?? 'Kumaon, Uttarakhand'}
      </p>
      <p className="text-muted-foreground">
        <strong>Phone:</strong>{' '}
        <a href={`tel:${siteConfig.contact?.phone}`} className="underline">
          {siteConfig.contact?.phone ?? '+91‑123‑456‑7890'}
        </a>
      </p>
      <p className="text-muted-foreground">
        <strong>Email:</strong>{' '}
        <a href={`mailto:${siteConfig.contact?.email}`} className="underline">
          {siteConfig.contact?.email ?? 'info@kumaonvalley.com'}
        </a>
      </p>
    </div>

    <div className="flex justify-start gap-4 mt-4">
      <a href={siteConfig.social.instagram} title="Instagram" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      </a>
      <a href={siteConfig.social.facebook} title="Facebook" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href={siteConfig.social.youtube} title="YouTube" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
      </a>
    </div>
  </div>
);
