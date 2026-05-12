import { Section } from '@/components/Section';
import { ExperienceSection } from '@/components/ExperienceSection';
import { experiences } from '@/content/data';

export const metadata = {
  title: 'Experiences',
  description: 'Immerse yourself in culture, wellness, and peace in Kumaon.',
};

export default function ExperiencesPage() {
  return (
    <main>
      <Section
        title="Enriching Experiences"
        subtitle="Nourish your mind, body, and spirit. From heritage temple walks to gentle morning yoga, our experiences are tailored for deep relaxation."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
              <div className="text-6xl mb-8 bg-muted p-6 rounded-full">{exp.icon}</div>
              <h3 className="text-2xl font-medium mb-4 text-foreground font-serif">{exp.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
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
        imageUrl="https://images.unsplash.com/photo-1589136775551-37d40a5a3a71?q=80&w=2070&auto=format&fit=crop"
        reverse
      />

      <ExperienceSection
        title="Boutique Homestays"
        description="Stay in premium, carefully curated local homestays that offer modern comforts, warm hospitality, and pure organic local cuisine. Chosen for their stunning views and soul-soothing peace."
        imageUrl="https://images.unsplash.com/photo-1598344346951-045aefcb030a?q=80&w=2070&auto=format&fit=crop"
      />
    </main>
  );
}
