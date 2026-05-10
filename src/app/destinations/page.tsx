import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/content/data";

export const metadata = {
  title: "Serene Destinations",
  description: "Explore our curated, relaxed, and spiritually enriching journeys in Kumaon.",
};

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary font-serif">Serene Destinations</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Discover the stunning locales of the Kumaon valley. From gentle walks to ancient temple tours, these places form the perfect backdrop for your custom retreats.
        </p>
      </div>

      <div className="space-y-16">
        {destinations.map((dest, index) => (
          <div key={dest.id} id={dest.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500`}>
            <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
              <Image 
                src={dest.image} 
                alt={dest.title} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-medium text-foreground mb-4 font-serif">{dest.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {dest.description}
              </p>
              <div className="mt-auto">
                <Link href={`/contact?inquiry=${dest.id}`} className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-colors shadow-md">
                  Plan a Custom Trip Here
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
