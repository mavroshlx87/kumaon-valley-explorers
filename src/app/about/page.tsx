import Image from "next/image";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/data";
import { Section } from "@/components/Section";
import { FramerWrapper } from "@/components/FramerWrapper";
import { SchemaLD } from "@/components/SchemaLD";

export const metadata = {
  title: "About Us",
  description: `Learn about the philosophy, mission, and promises behind ${siteConfig.name} — your trusted partner for soulful, spiritually enriching tourism in the Kumaon Himalayas.`,
};

export default function AboutPage() {
  return (
    <main>
      <SchemaLD data={{
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Bilaspur Kandli',
          addressLocality: 'Dehradun',
          addressRegion: 'Uttarakhand',
          postalCode: '248141',
          addressCountry: 'IN',
        },
      }} />

      <Section title={`About ${siteConfig.name}`} subtitle="We believe that travel should be a source of profound peace and rejuvenation, not just another itinerary.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FramerWrapper initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
              <Image src={`${siteConfig.basePath}/images/philosophy.webp`} alt="Travelers exploring the serene Kumaon Valley mountains in Uttarakhand" fill priority className="object-cover" />
            </div>
          </FramerWrapper>
          <FramerWrapper initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="space-y-6 text-lg leading-relaxed font-serif">
              <h2 className="text-3xl font-light mb-8 text-foreground">Our Philosophy</h2>
              {aboutContent.philosophy.map((p, i) => (
                <p key={i} className={i === 3 ? "text-primary font-medium" : ""}>{p}</p>
              ))}
            </div>
          </FramerWrapper>
        </div>
      </Section>

      <Section dark title="Our Promise to You" className="rounded-t-[3rem] -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.promises.map((item, i) => (
            <FramerWrapper key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 h-full">
                <h3 className="text-xl font-medium mb-4 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </Section>
    </main>
  );
}
