import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.DEPLOY_TARGET === 'gh-pages' ? '/kumaon-valley-explorers' : '',
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ['192.168.0.101'],
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