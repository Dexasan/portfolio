import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the second loopback origin used for two-visitor integration checks.
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
