import { Section } from '@/components/Section';
import { ExperienceSection } from '@/components/ExperienceSection';
import { FramerWrapper } from '@/components/FramerWrapper';
import { experiences } from '@/content/data';
import { siteConfig } from '@/config/site';
import { SchemaLD } from '@/components/SchemaLD';

export const metadata = {
  title: 'Experiences — Yoga, Wellness & Cultural Immersion',
  description: 'Immerse yourself in guided yoga retreats, heritage temple walks, and premium mountain homestays in the Kumaon Himalayas. Tailored for deep relaxation and spiritual renewal.',
};

export default function ExperiencesPage() {
  return (
    <main>
      <SchemaLD data={{
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: 'Kumaon Valley Experiences',
        description: 'Yoga retreats, heritage walks, and premium mountain stays in Kumaon.',
        touristType: 'Spiritual & Wellness Travelers',
        provider: {
          '@type': 'TravelAgency',
          name: siteConfig.name,
          url: siteConfig.url,
        },
      }} />

      <Section
        title="Enriching Experiences"
        subtitle="Nourish your mind, body, and spirit. From heritage temple walks to gentle morning yoga, our experiences are tailored for deep relaxation."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experiences.map((exp, i) => (
            <FramerWrapper key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }}>
              <div className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center h-full">
                <div className="text-6xl mb-8 bg-muted p-6 rounded-full">{exp.icon}</div>
                <h3 className="text-2xl font-medium mb-4 text-foreground font-serif">{exp.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </Section>

      <ExperienceSection
        title="Yoga & Wellness Retreats"
        description="Guided meditation, gentle yoga sessions suitable for all ages, and holistic therapies amidst serene mountain vistas. Start your day with peace and rejuvenation."
        imageUrl="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070&auto=format&fit=crop"
      />

      <ExperienceSection
        title="Cultural Immersion"
        description="Visit ancient temples, learn traditional Kumaoni crafts, and share soulful meals with local families. Experience the warmth of mountain hospitality first-hand."
        imageUrl={`${siteConfig.basePath}/images/hiljatra.jpg`}
        reverse
      />

      <ExperienceSection
        title="Premium Mountain Retreats"
        description="Stay in premium, carefully curated local homestays that offer modern comforts, warm hospitality, and pure organic local cuisine. Chosen for their stunning views and soul-soothing peace."
        imageUrl={`${siteConfig.basePath}/images/homestay.jpg`}
      />
    </main>
  );
}
