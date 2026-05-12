import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/content/data';

export const metadata = {
  title: 'Serene Destinations',
  description: 'Explore our curated, relaxed, and spiritually enriching journeys in Kumaon.',
};

export default function DestinationsPage() {
  return (
    <main className="bg-background py-20">
      <div className="container mx-auto px-4 max-w-6xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-primary font-serif leading-tight">
          Top Tours & <br />
          <span className="text-accent">Destinations in Kumaon</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-body">
          Explore the hidden gems of the Kumaon Himalayas. From the cultural heart of Almora to the mystical peaks of Om Parbat, discover the soul of Uttarakhand.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              id={dest.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                  {dest.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={`/contact?inquiry=${dest.id}`}
                    className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                  >
                    Plan Your Journey <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
