import { siteConfig } from "@/config/site";
const prefix = siteConfig.basePath;

// Destinations (Places, not packages)
export const destinations = [
  {
    id: "almora",
    title: "Almora",
    description: "Perched on a horse-saddle shaped ridge, Almora is the cultural capital of Kumaon. Known for its distinct heritage, ancient temples like Nanda Devi, and the bustling 200-year-old Lala Bazar, it offers a perfect blend of history and Himalayan vistas.",
    image: `${prefix}/images/dest_almora.png`,
  },
  {
    id: "jageshwar",
    title: "Jageshwar Dham",
    description: "A cluster of over 100 ancient stone temples dedicated to Lord Shiva, nestled in a dense, mystical forest of towering Deodar trees. Jageshwar is one of the most sacred and spiritually charged sites in the Kumaon region.",
    image: `${prefix}/images/dest_jageshwar.png`,
  },
  {
    id: "panchachuli",
    title: "Panchachuli Base Camp",
    description: "Journey deep into the Darma Valley to witness the majestic Five Peaks of Panchachuli. The base camp offers an up-close view of these jagged, snow-clad giants, surrounded by vibrant alpine meadows and roaring mountain streams.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "thal-kedar",
    title: "Thal Kedar Trek",
    description: "A sacred pilgrimage trek leading to a mountain top Shiva temple at 2,000 meters. The trail offers breathtaking 360-degree views of the Greater Himalayas, passing through ancient forests and high ridges.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "narayan-ashram",
    title: "Narayan Ashram",
    description: "Established in 1936, this spiritual sanctuary is located at an altitude of 2,734m. It is a center of peace and social service, surrounded by lush gardens and overlooking the snow peaks of the Dharchula region.",
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=2000",
  }
];

export const experiences = [
  {
    icon: "🧘‍♀️",
    title: "Yoga & Wellness retreats",
    description: "Begin your mornings with gentle guided yoga sessions amidst the pine forests, focusing on breathing and mobility suited for all age groups."
  },
  {
    icon: "🛕",
    title: "Temple & Heritage Walks",
    description: "Slow-paced, culturally enriching walks through ancient temple complexes and heritage villages with expert local storytellers."
  },
  {
    icon: "☕",
    title: "Comfortable Homestays",
    description: "Stay in premium, carefully curated local homestays that offer modern comforts, warm hospitality, and pure organic local cuisine."
  }
];

export const team = [
  {
    name: "Govind Singh",
    role: "Lead Local Host & Caretaker",
    bio: "With over 20 years of experience, Govind treats every guest like family. He ensures that all dietary needs and physical comforts are meticulously taken care of."
  },
  {
    name: "Dr. Aarti Joshi",
    role: "Wellness & Culture Guide",
    bio: "A local expert in Kumaoni heritage and Ayurvedic wellness. Dr. Joshi leads our gentle morning yoga and insightful heritage walks."
  }
];

export const blogPosts = [
  {
    id: "packing-for-peace",
    title: "Packing for a Peaceful Himalayan Retreat",
    excerpt: "Leave the heavy gear behind. Here is a simple guide on what to bring for a relaxed, spiritual journey in Kumaon.",
    date: "May 12, 2024",
    content: "When traveling for peace, less is more. We recommend comfortable walking shoes, warm layers for the evening, and an open heart. Our homestays provide all necessary amenities, allowing you to travel light and relaxed."
  },
  {
    id: "spiritual-history-kasar",
    title: "The Magnetic Pull of Kasar Devi",
    excerpt: "Discover why seekers like Swami Vivekananda and Bob Dylan were drawn to this quiet ridge.",
    date: "April 28, 2024",
    content: "Kasar Devi sits on the Van Allen Belt, giving it a unique geomagnetic energy. Meditating here, even for a few minutes, brings profound stillness. Our gentle walks take you to the very spots where history's great minds found their peace."
  }
];
