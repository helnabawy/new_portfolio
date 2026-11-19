import type { NextConfig } from "next";

// GitHub Pages serves the site under /new_portfolio; a custom domain serves it from root.
// Set NEXT_PUBLIC_BASE_PATH="" for root-domain builds.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/new_portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
