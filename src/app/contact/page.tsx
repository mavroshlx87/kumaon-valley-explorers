import { ContactForm } from '@/components/contact-form';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactInfoCard } from '@/components/ContactInfoCard';
import { FramerWrapper } from '@/components/FramerWrapper';
import { team } from '@/content/data';

export const metadata = {
  title: 'Contact Us',
  description: 'Reach out to us to plan your peaceful Himalayan retreat.',
};

export default function ContactPage() {
  return (
    <main className="bg-background py-20">
      <SectionHeader
        title="Get in Touch"
        subtitle="We’re here to help you plan your perfect getaway"
      />
      <FramerWrapper className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfoCard />
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-border/40">
            <h2 className="text-xl font-medium mb-6 text-foreground font-serif">Quick Enquiry</h2>
            <ContactForm />
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 rounded-[2rem] overflow-hidden shadow-xl border border-border h-[400px]">
          <iframe
            src="https://maps.google.com/maps?q=Bilaspur+Kandli,+Dehradun,+Uttarakhand&hl=en&z=14&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kumaon Valley Explorers Location"
          ></iframe>
        </div>

        {/* Our Guides Section */}
        <div className="mt-32">
          <SectionHeader
            title="Our Local Hosts"
            subtitle="Meet the gentle, experienced locals who will be your companions and caretakers in the mountains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-[2rem] p-10 text-center shadow-sm"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 border-4 border-background shadow-inner mb-6 flex items-center justify-center text-4xl text-primary font-light font-serif">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-medium text-primary mb-2 font-serif">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-6 uppercase text-sm tracking-widest">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </FramerWrapper>
    </main>
  );
}
