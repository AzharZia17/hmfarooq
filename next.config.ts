import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000, deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920], imageSizes: [64, 128, 256, 384] },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
