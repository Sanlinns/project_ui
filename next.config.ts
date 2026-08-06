import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app when an unrelated lockfile exists above it.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
