import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/content/data";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section - High Res Panchachuli Image */}
      <section className="relative w-full aspect-video min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${siteConfig.basePath}/images/hero.png`}
            alt="Lush green Kumaon valleys with snow-capped Himalayan peaks"
            fill
            className="object-cover brightness-[0.8]"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <p className="text-white/90 uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Welcome to Kumaon Valley
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-10 leading-tight font-serif drop-shadow-sm tracking-wide">
            Soulful connection with the Himalayas
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/destinations" className="bg-white text-primary px-10 py-4 rounded-full font-medium transition-all hover:bg-opacity-90 shadow-2xl">
              Explore Destinations
            </Link>
            <Link href="/contact" className="bg-transparent border border-white text-white px-10 py-4 rounded-full font-medium transition-all hover:bg-white hover:text-primary">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section - Wanderbug Inspired spacing */}
      <section className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-light text-primary mb-10 font-serif italic">Beyond the tourist trail...</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            We specialize in relaxed, rejuvenating, and spiritually enriching tourism in the Kumaon region. Our focus is on the soul of the mountains—the quiet walks, the ancient temples, and the warm hospitality of boutique homestays.
          </p>
          <div className="w-24 h-px bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=1000"
                alt="Boutique Stay"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <span className="text-accent uppercase tracking-widest text-sm font-medium">Our Services</span>
              <h2 className="text-4xl font-light text-primary font-serif">Tailored for your comfort</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>From seamless <strong>Taxi Services</strong> across the hills to fully customized <strong>Tours & Travel Plans</strong>, we handle every detail so you can focus on the peace of the valley.</p>
                <p>Whether you are a retired couple seeking quietude or a family wanting a soulful immersion, our journeys are paced exactly to your preference.</p>
              </div>
              <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                Inquire About Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 max-w-6xl text-center mb-20">
          <h2 className="text-4xl font-light text-primary mb-6 font-serif">The heart of Kumaon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Handpicked destinations that offer more than just a view.</p>
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((dest) => (
              <Link key={dest.id} href="/destinations" className="group relative h-96 rounded-3xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif font-light capitalize tracking-wide text-center px-4">{dest.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
