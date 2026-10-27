import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle consumed by the Dockerfile (.next/standalone).
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
