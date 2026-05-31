const isGHPages = process.env.DEPLOY_TARGET === 'gh-pages';

export const siteConfig = {
  name: "Kumaon Valley Explorers",
  shortName: "KVE",
  domain: "kumaonvalley.in",
  url: "https://kumaonvalley.in",
  basePath: '',
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
    youtube: "https://youtube.com/@kumaonvalleyexplorers",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Experiences", href: "/experiences" },
    { name: "Packages", href: "/packages" },
    { 
      name: "OUR SERVICES", 
      href: "#", 
      subLinks: [
        { name: "Taxi Services", href: "/contact?service=taxi" },
        { name: "Tours & Travel Plans", href: "/contact?service=tours" }
      ]
    },
    { name: "Contact", href: "/contact" },
  ],
};
