import { siteConfig } from "@/config/site";
const prefix = siteConfig.basePath;

// All images are referenced relatively using the prefix helper
export const destinations = [
  {
    id: "nainital",
    title: "Nainital",
    description: "Famous for the serene Naini Lake and sacred Naina Devi Temple. Enjoy boating and strolling along Mall Road's bustling charm.",
    image: `${prefix}/images/dest_nainital.webp`,
  },
  {
    id: "almora",
    title: "Almora",
    description: "Almora district blends heritage and nature beautifully. Key highlights include the Jageshwar Dham temple complex (100+ ancient Shiva shrines in cedar forests), Kasar Devi Temple (famed for its spiritual energy), Chitai Golu Devta Temple, Katarmal Sun Temple, Nanda Devi Temple, and the Binsar Wildlife Sanctuary with panoramic Zero Point views.",
    image: `${prefix}/images/dest_almora.webp`,
  },
  {
    id: "ranikhet",
    title: "Ranikhet",
    description: "The 'city of tranquility' offers Jhula Devi Temple and Chaubatia Orchards. A peaceful retreat far from urban hustle.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Panorama_of_Himalayas_from_Ranikhet%2C_Uttarakhand%2C_India.jpg",
  },
  {
    id: "bageshwar",
    title: "Bageshwar",
    description: "Bageshwar district is a blend of spirituality, nature, and adventure. Key attractions include Bagnath Temple at the Saryu–Gomti confluence, the 9th-century Baijnath Temple complex, the scenic hill station of Kausani (known as India's Mini Switzerland), and trailheads for the iconic Pindari and Kafni Glacier treks.",
    image: `${prefix}/images/dest_bageshwar.webp`,
  },
  {
    id: "champawat",
    title: "Champawat",
    description: "Once the capital of the Chand dynasty, Champawat is rich in history and spirituality. Key sites include the ancient Baleshwar Temple with intricate stone carvings, the revered Purnagiri Siddha Peeth, the colonial-era hill retreat of Abbott Mount, the serene Lohaghat on the Lohawati River, and the scenic river confluence at Pancheshwar.",
    image: `${prefix}/images/dest_champawat.webp`,
  },
  {
    id: "kausani",
    title: "Kausani",
    description: "Boasts mesmerizing vistas and the spiritual aura of Anasakti Ashram. Enjoy nature walks and tea garden visits.",
    image: `${prefix}/images/dest_kausani.webp`,
  },
  {
    id: "pithoragarh",
    title: "Pithoragarh",
    description: "Enchants with historical sites like Pithoragarh Fort and Dhwaj Temple. Perfect for sightseeing in the Kumaon hills.",
    image: `${prefix}/images/dest_pithoragarh.webp`,
  },
  {
    id: "bhimtal",
    title: "Bhimtal",
    description: "Features the expansive Bhimtal Lake and Victoria Dam. Ideal for boating, bird watching, and quiet nature moments.",
    image: `${prefix}/images/dest_bhimtal.webp`,
  },
  {
    id: "munsiyari",
    title: "Munsiyari",
    description: "The gateway to Panchachuli Peaks and Birthi Falls. Offers rugged trekking landscapes and breathtaking alpine views.",
    image: `${prefix}/images/dest_munsiyari.webp`,
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
    image: `${prefix}/images/dest_nainital_pkg.webp`,
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
    image: `${prefix}/images/dest_binsar.webp`,
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
    image: `${prefix}/images/pkg_ranikhet.webp`,
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
    image: "https://offbeatwanderers.com/storage/2024/03/om-parvat.jpg",
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
    image: `${prefix}/images/pkg_munsiyari.webp`,
    highlights: [
      'Panchachuli Peaks panorama',
      'Birthi Falls nature trek',
      'Khaliya Top meadow walk',
      'Tribal heritage museum visit',
      'Stargazing at 7,000ft altitude',
    ],
    description: 'Gateway to the mighty Panchachuli peaks. A rugged yet accessible alpine experience with waterfalls, meadows, and night skies.',
  },
  {
    id: 'pithoragarh',
    title: 'Pithoragarh Valley Explorer',
    destination: 'Pithoragarh',
    duration: '3 Nights / 4 Days',
    startingPrice: 10999,
    difficulty: 'Easy',
    image: `${prefix}/images/pkg_pithoragarh.webp`,
    highlights: [
      'Panoramic Pithoragarh Fort views',
      'Dhwaj Temple sunrise darshan',
      'Chandak Hill scenic walk',
      'Thal Kedar & Kapileshwar Temple',
      'Local market cultural walk',
    ],
    description: 'Explore the "Little Kashmir" of Kumaon — a historic hill city cradled in a stunning valley with fort ruins, ancient temples, and sweeping Himalayan vistas.',
  },
  {
    id: 'nainital-corbett',
    title: 'Nainital & Jim Corbett Wild Escape',
    destination: 'Nainital & Jim Corbett',
    duration: '4 Nights / 5 Days',
    startingPrice: 12499,
    difficulty: 'Easy',
    image: `${prefix}/images/pkg_corbett.webp`,
    highlights: [
      'Jim Corbett jeep safari (Dhikala/Bijrani zone)',
      'Tiger & elephant wildlife sightings',
      'Garjiya Devi Temple visit',
      'Naini Lake boating & Snow View Point',
      'Nainital Zoo & Eco Cave Garden',
    ],
    description: 'The ultimate Kumaon double — combine the thrill of a tiger safari at Jim Corbett National Park with the serene beauty of Nainital\'s lake and temples.',
  },
  {
    id: 'rajaji',
    title: 'Rajaji National Park Safari Tour',
    destination: 'Rajaji National Park',
    duration: '3 Nights / 4 Days',
    startingPrice: 9999,
    difficulty: 'Easy',
    image: `${prefix}/images/pkg_rajaji.webp`,
    highlights: [
      'Jeep safari in Chilla & Motichur zones',
      'Asian elephant & tiger sightings',
      'Ganga river rafting (Haridwar)',
      'Har Ki Pauri Ganga Aarti experience',
      'Expert naturalist birdwatching walk',
    ],
    description: 'Where the Himalayas meet the jungle — a thrilling wildlife safari through Rajaji\'s elephant corridors, paired with the spiritual grandeur of Haridwar\'s Ganga Aarti.',
  },
];
