import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.DEPLOY_TARGET === 'gh-pages' ? '/kumaon-valley-explorers' : '',
  outputFileTracingRoot: __dirname,
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