import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: '--font-eb-garamond' });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Soulful Himalayan Tourism in Kumaon`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Experience peaceful, spiritually enriching tours in the Kumaon Himalayas. Premium homestays, yoga retreats, heritage walks, and curated tour packages starting from ₹8,499. Plan your serene mountain getaway today.',
  keywords: [
    "Kumaon tour packages",
    "Uttarakhand tourism",
    "Nainital travel",
    "Himalayan retreat",
    "Kumaon Valley",
    "spiritual tourism India",
    "yoga retreat Uttarakhand",
    "senior travel India",
    "Binsar wildlife",
    "Ranikhet tour",
    "Om Parvat pilgrimage",
    "Munsiyari trek",
    "Kumaon homestay",
    "family trip Uttarakhand",
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} — Soulful Himalayan Tourism`,
    description: 'Curated Kumaon Himalayan tours with premium homestays, yoga retreats, and heritage walks. Starting from ₹8,499/person.',
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.basePath}/images/hero.webp`,
        width: 1200,
        height: 630,
        alt: 'Kumaon Valley Explorers — Himalayan mountain landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Soulful Himalayan Tourism`,
    description: 'Curated Kumaon Himalayan tours with premium homestays, yoga retreats, and heritage walks.',
    images: [`${siteConfig.basePath}/images/hero.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${ebGaramond.variable} font-body min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
