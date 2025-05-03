import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about',
      },
    ];
  },
  async headers() {
    return [];
  }
};

export default nextConfig;