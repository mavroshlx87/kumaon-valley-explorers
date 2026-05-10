import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-primary">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                Instagram
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
