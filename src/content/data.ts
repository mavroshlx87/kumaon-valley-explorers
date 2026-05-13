import { siteConfig } from "@/config/site";
const prefix = siteConfig.basePath;

// All images are referenced relatively using the prefix helper
export const destinations = [
  {
    id: "nainital",
    title: "Nainital",
    description: "Famous for the serene Naini Lake and sacred Naina Devi Temple. Enjoy boating and strolling along Mall Road's bustling charm.",
    image: `${prefix}/images/dest_nainital.png`,
  },
  {
    id: "almora",
    title: "Almora",
    description: "Steeped in history, captivates with Kasar Devi Temple and Zero Point views. Ideal for trekking and exploring local markets.",
    image: `${prefix}/images/dest_almora.png`,
  },
  {
    id: "ranikhet",
    title: "Ranikhet",
    description: "The 'city of tranquility' offers Jhula Devi Temple and Chaubatia Orchards. A peaceful retreat far from urban hustle.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Panorama_of_Himalayas_from_Ranikhet%2C_Uttarakhand%2C_India.jpg",
  },
  {
    id: "mukteshwar",
    title: "Mukteshwar",
    description: "Renowned for Chauli ki Jali views and old-world Mukteshwar Temple. A popular spot for rock climbing and adventure.",
    image: `${prefix}/images/dest_mukteshwar.png`,
  },
  {
    id: "binsar",
    title: "Binsar",
    description: "A wildlife haven with the breathtaking Zero Point. Offers 360-degree Himalayan views and serene forest trails.",
    image: `${prefix}/images/dest_binsar.png`,
  },
  {
    id: "kausani",
    title: "Kausani",
    description: "Boasts mesmerizing vistas and the spiritual aura of Anasakti Ashram. Enjoy nature walks and tea garden visits.",
    image: `${prefix}/images/dest_kausani.png`,
  },
  {
    id: "pithoragarh",
    title: "Pithoragarh",
    description: "Enchants with historical sites like Pithoragarh Fort and Dhwaj Temple. Perfect for sightseeing in the Kumaon hills.",
    image: `${prefix}/images/dest_pithoragarh.png`,
  },
  {
    id: "bhimtal",
    title: "Bhimtal",
    description: "Features the expansive Bhimtal Lake and Victoria Dam. Ideal for boating, bird watching, and quiet nature moments.",
    image: `${prefix}/images/dest_bhimtal.png`,
  },
  {
    id: "jageshwar",
    title: "Jageshwar",
    description: "Famous for its ancient 12th-century temple complex. A profound spiritual highlight nestled in dense cedar forests.",
    image: `${prefix}/images/dest_jageshwar.png`,
  },
  {
    id: "munsiyari",
    title: "Munsiyari",
    description: "The gateway to Panchachuli Peaks and Birthi Falls. Offers rugged trekking landscapes and breathtaking alpine views.",
    image: `${prefix}/images/dest_munsiyari.png`,
  },
  {
    id: "adi-kailash",
    title: "Adi Kailash",
    description: "The 'Chotta Kailash' is a sacred peak offering a profound spiritual journey and striking resemblance to Mt. Kailash.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/ADI_KAILASH.jpg",
  },
  {
    id: "om-parbat",
    title: "Om Parbat",
    description: "A natural wonder where snow falls in the shape of 'Om'. One of the world's most spiritually significant peaks.",
    image: "https://offbeatwanderers.com/storage/2024/03/om-parvat.jpg",
  }
];

export const experiences = [
  {
    icon: "🧘‍♀️",
    title: "Yoga & Wellness",
    description: "Morning guided sessions amidst pine forests, focusing on mobility suited for all age groups."
  },
  {
    icon: "🛕",
    title: "Heritage Walks",
    description: "Slow-paced, culturally enriching walks through ancient villages with expert local storytellers."
  },
  {
    icon: "🏡",
    title: "Premium Mountain Retreats",
    description: "Curated local homestays offering modern comforts, warm hospitality, and organic Pahadi cuisine."
  }
];

export const team = [
  {
    name: "Govind Singh",
    role: "Lead Local Host",
    bio: "With 20+ years of experience, Govind treats every guest like family, ensuring meticulous care and comfort."
  },
  {
    name: "Dr. Aarti Joshi",
    role: "Wellness Guide",
    bio: "A local expert in Kumaoni heritage and Ayurveda. She leads our gentle yoga and insightful heritage walks."
  }
];

export const aboutContent = {
  philosophy: [
    "We founded Kumaon Valley Explorers with a simple belief: life doesn’t need to be rushed. We created these journeys for seniors, retired travelers, and families seeking peace and renewal.",
    "Stay in cozy village homestays, live the gentle rhythm of mountain life, savor authentic Pahadi meals made with love, and explore quiet trails and temples at your own pace.",
    "Our caring local guides ensure comfort while you enjoy yoga, holistic wellness practices, and soul-nourishing spiritual moments.",
    "Here, you don’t just visit the mountains — you feel them. Welcome to your mountain sanctuary."
  ],
  promises: [
    { title: "Absolute Comfort", desc: "Handpicked accommodations, comfortable transport, and journeys tailored entirely to your physical comfort and pace." },
    { title: "Spiritual Depth", desc: "Meaningful interactions with local culture, visits to ancient temples, and time dedicated to quiet reflection." },
    { title: "Dedicated Care", desc: "Our local hosts treat you like family, ensuring dietary and personal preferences are always met." }
  ]
};
