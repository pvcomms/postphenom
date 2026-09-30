import type { NextConfig } from "next";

// The figures, their legend and the position page are standalone HTML in public/, moved over
// from paramv.com as they were. These give them clean URLs.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/figures", destination: "/figures.html" },
      { source: "/figures/legend", destination: "/figures/legend.html" },
      { source: "/position", destination: "/position.html" },
    ];
  },
};
export default nextConfig;
