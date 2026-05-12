import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/kumaon-valley-explorers' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.chardhamtour.in",
      },
      {
        protocol: "https",
        hostname: "vushii.com",
      },
      {
        protocol: "https",
        hostname: "offbeatwanderers.com",
      },
    ],
  },
};

export default nextConfig;
