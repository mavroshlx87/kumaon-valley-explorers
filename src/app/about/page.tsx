import Image from "next/image";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/content/data";
import { Section } from "@/components/Section";

export const metadata = {
  title: "About Us",
  description: `Learn about the mission and story behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <main>
      <Section title={`About ${siteConfig.name}`} subtitle="We believe that travel should be a source of profound peace and rejuvenation, not just another itinerary.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
            <Image src={`${siteConfig.basePath}/images/philosophy.png`} alt="Senior couple trekking in the mountains" fill priority className="object-cover" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed font-serif">
            <h2 className="text-3xl font-light mb-8 text-foreground">Our Philosophy</h2>
            {aboutContent.philosophy.map((p, i) => (
              <p key={i} className={i === 3 ? "text-primary font-medium" : ""}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section dark title="Our Promise to You" className="rounded-t-[3rem] -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutContent.promises.map((item, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-medium mb-4 text-white">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
