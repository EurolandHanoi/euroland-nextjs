import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
