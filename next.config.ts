import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.DOCKER_BUILD === "1" ? {} : { output: "export" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
