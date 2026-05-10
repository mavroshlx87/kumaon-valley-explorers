export const siteConfig = {
  name: "Kumaon Valley Explorers",
  shortName: "KVE",
  domain: "kumaonvalley.in",
  url: "https://kumaonvalley.in",
  description: "Experience profound peace, spiritual rejuvenation, and serene holidays in the majestic Kumaon Himalayas.",
  contact: {
    email: "kumaonvalleyexplorers@gmail.com",
    phone: "+91 7060007069",
    address: "Bilaspur Kandli, Dehradun, Uttarakhand - 248141, India",
  },
  social: {
    instagram: "https://instagram.com/kumaonvalleyexplorers",
    facebook: "https://facebook.com/kumaonvalleyexplorers",
    twitter: "https://twitter.com/kumaonvalley",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { 
      name: "Our Services", 
      href: "#", 
      subLinks: [
        { name: "Taxi Services", href: "/contact?service=taxi" },
        { name: "Tours & Travel Plans", href: "/contact?service=tours" }
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};
