import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";
import { team } from "@/content/data";

export const metadata = {
  title: "Contact Us",
  description: "Reach out to us to plan your peaceful Himalayan retreat.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary font-serif">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to experience the tranquility of the Himalayas? Reach out to us to book a peaceful retreat, customize a family itinerary, or simply ask a question.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-[2rem] shadow-xl overflow-hidden border border-border mt-12">
        {/* Contact Info */}
        <div className="bg-primary p-12 text-primary-foreground flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-light mb-10 font-serif">We are here for you</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary-foreground/10 p-3 rounded-full shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Our Office</h4>
                  <p className="text-primary-foreground/80 mt-2 leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary-foreground/10 p-3 rounded-full shrink-0">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Call Us</h4>
                  <p className="text-primary-foreground/80 mt-2 leading-relaxed">{siteConfig.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-primary-foreground/10 p-3 rounded-full shrink-0">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Write to Us</h4>
                  <p className="text-primary-foreground/80 mt-2 leading-relaxed">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h4 className="font-medium mb-6">Follow our journey of peace</h4>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 py-2 rounded-full transition-colors text-sm font-medium tracking-wide">
                Instagram
              </a>
              <a href={siteConfig.social.facebook} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 px-6 py-2 rounded-full transition-colors text-sm font-medium tracking-wide">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-12">
          <h2 className="text-2xl font-medium mb-8 text-foreground font-serif">Quick Enquiry</h2>
          <ContactForm />
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16 rounded-[2rem] overflow-hidden shadow-xl border border-border h-[400px]">
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
      <div className="mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary font-serif">Our Local Hosts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meet the gentle, experienced locals who will be your companions and caretakers in the mountains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-card border border-border rounded-[2rem] p-10 text-center shadow-sm">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 border-4 border-background shadow-inner mb-6 flex items-center justify-center text-4xl text-primary font-light font-serif">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-medium text-foreground mb-2 font-serif">{member.name}</h3>
              <p className="text-secondary font-medium mb-6 uppercase text-sm tracking-widest">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
