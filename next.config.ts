import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is a single page now; send old split-page links to the matching section.
  async redirects() {
    return [
      { source: "/business", destination: "/#projects", permanent: false },
      { source: "/home", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
