import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Images are imported as static assets (see src/assets) and optimized by
  // next/image out of the box — no remote patterns required.
};

export default nextConfig;
