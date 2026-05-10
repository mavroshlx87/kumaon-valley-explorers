import Image from "next/image";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us",
  description: `Learn about the mission and story behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary font-serif">About {siteConfig.name}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We believe that travel should be a source of profound peace and rejuvenation, not just another itinerary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=1000" 
            alt="Founders in the Himalayas" 
            fill 
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-light mb-8 text-foreground font-serif">Our Philosophy</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We founded Kumaon Valley Explorers with a simple belief: life doesn’t need to be rushed. We created these journeys for seniors, retired travelers, and families seeking peace and renewal.
            </p>
            <p>
              Stay in cozy village homestays, live the gentle rhythm of mountain life, savor authentic Pahadi meals made with love, and explore quiet trails and temples at your own pace.
            </p>
            <p>
              Our caring local guides ensure comfort while you enjoy yoga, holistic wellness practices, and soul-nourishing spiritual moments.
            </p>
            <p className="font-serif italic text-primary">
              Here, you don’t just visit the mountains — you feel them.<br/>
              Welcome to your mountain sanctuary.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-12 lg:p-16 text-center shadow-sm">
        <h2 className="text-3xl font-light mb-12 text-primary font-serif">Our Promise to You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-background p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-foreground">Absolute Comfort</h3>
            <p className="text-muted-foreground leading-relaxed">Handpicked accommodations, comfortable transport, and journeys tailored entirely to your physical comfort and pace.</p>
          </div>
          <div className="bg-background p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-foreground">Spiritual Depth</h3>
            <p className="text-muted-foreground leading-relaxed">Meaningful interactions with local culture, visits to ancient temples, and time dedicated to quiet reflection.</p>
          </div>
          <div className="bg-background p-8 rounded-2xl shadow-sm">
            <h3 className="text-xl font-medium mb-4 text-foreground">Dedicated Care</h3>
            <p className="text-muted-foreground leading-relaxed">Our local hosts treat you like family, ensuring dietary needs, accessibility requirements, and personal preferences are always met.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
