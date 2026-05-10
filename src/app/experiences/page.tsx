import { experiences } from "@/content/data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Experiences",
  description: "Immerse yourself in culture, wellness, and peace in Kumaon.",
};

export default function ExperiencesPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary font-serif">Enriching Experiences</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Nourish your mind, body, and spirit. From heritage temple walks to gentle morning yoga, our experiences are tailored for deep relaxation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-card p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
            <div className="text-6xl mb-8 bg-muted p-6 rounded-full">{exp.icon}</div>
            <h3 className="text-2xl font-medium mb-4 text-foreground font-serif">{exp.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      {/* Youtube Video Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-primary font-serif mb-4">A Glimpse of the Valley</h2>
          <p className="text-muted-foreground">Watch our latest journey through the heart of Kumaon.</p>
        </div>
        <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-border">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video, user can update ID
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Featured Experience */}
      <div className="bg-primary rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center text-primary-foreground">
        <div className="md:w-1/2 p-10 md:p-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Featured Retreat</span>
          <h2 className="text-3xl md:text-4xl font-light mb-6 font-serif">Ayurvedic Wellness & Yoga</h2>
          <p className="text-primary-foreground/90 mb-8 leading-relaxed text-lg">
            Escape the noise of the city and retreat into the quiet pine forests. Start your day with gentle yoga suitable for all ages, followed by organic, sattvic meals prepared from local farms.
          </p>
          <Link href="/contact?inquiry=wellness" className="inline-block bg-background text-primary font-medium px-8 py-4 rounded-full hover:bg-muted transition-colors shadow-lg">
            Plan Your Retreat
          </Link>
        </div>
        <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full">
          <Image 
            src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1000" 
            alt="Peaceful nature retreat" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
