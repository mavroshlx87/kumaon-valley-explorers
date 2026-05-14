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

export const tourPackages = [
  {
    id: 'nainital',
    title: 'Nainital Lake & Temple Tour',
    destination: 'Nainital',
    duration: '3 Nights / 4 Days',
    startingPrice: 8499,
    difficulty: 'Easy',
    image: `${prefix}/images/dest_nainital.jpg`,
    highlights: [
      'Boating on Naini Lake',
      'Naina Devi Temple darshan',
      'Mall Road heritage walk',
      'Tiffin Top sunrise view',
      'Snow View Point cable ride',
    ],
    description: 'Discover the jewel of Kumaon — serene Naini Lake, ancient temples, and colonial-era charm. Perfect for families and senior travelers.',
  },
  {
    id: 'binsar',
    title: 'Binsar Wildlife & Himalayan Views',
    destination: 'Binsar',
    duration: '3 Nights / 4 Days',
    startingPrice: 8999,
    difficulty: 'Easy',
    image: `${prefix}/images/dest_binsar.jpg`,
    highlights: [
      '360° Himalayan panorama at Zero Point',
      'Binsar Wildlife Sanctuary trails',
      'Birdwatching with local naturalists',
      'Ancient Bineshwar Mahadev Temple',
      'Organic Pahadi meals at homestay',
    ],
    description: 'Immerse yourself in pristine forests and breathtaking 360-degree Himalayan views. A sanctuary of peace for nature lovers.',
  },
  {
    id: 'ranikhet',
    title: 'Ranikhet Tranquility Retreat',
    destination: 'Ranikhet',
    duration: '2 Nights / 3 Days',
    startingPrice: 8499,
    difficulty: 'Easy',
    image: `${prefix}/images/dest_pithoragarh.jpg`,
    highlights: [
      'Jhula Devi Temple visit',
      'Chaubatia Orchards nature walk',
      'Kumaon Regimental Museum',
      'Golf course scenic stroll',
      'Sunset over Himalayan peaks',
    ],
    description: 'Experience the "Queen of the Hills" — a peaceful cantonment town offering orchards, temples, and unmatched mountain tranquility.',
  },
  {
    id: 'om-parvat',
    title: 'Om Parvat Sacred Expedition',
    destination: 'Om Parvat',
    duration: '7 Nights / 8 Days',
    startingPrice: 16999,
    difficulty: 'Moderate',
    image: `${prefix}/images/dest_munsiyari.jpg`,
    highlights: [
      'Sacred Om Parvat darshan',
      'Adi Kailash base camp visit',
      'Parvati Lake pilgrimage',
      'Narayan Ashram spiritual stay',
      'Inner Line Permit assistance',
    ],
    description: 'A profound spiritual journey to witness the divine Om formation on snow-clad peaks. Includes Adi Kailash and sacred lakes.',
  },
  {
    id: 'munsiyari',
    title: 'Munsiyari Alpine Adventure',
    destination: 'Munsiyari',
    duration: '4 Nights / 5 Days',
    startingPrice: 12999,
    difficulty: 'Moderate',
    image: `${prefix}/images/dest_munsiyari.jpg`,
    highlights: [
      'Panchachuli Peaks panorama',
      'Birthi Falls nature trek',
      'Khaliya Top meadow walk',
      'Tribal heritage museum visit',
      'Stargazing at 7,000ft altitude',
    ],
    description: 'Gateway to the mighty Panchachuli peaks. A rugged yet accessible alpine experience with waterfalls, meadows, and night skies.',
  },
];
