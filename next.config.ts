import type { NextConfig } from "next";
const nextConfig: NextConfig = {

  // Configures about page
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about',
      },
    ];
  },
};

export default nextConfig;