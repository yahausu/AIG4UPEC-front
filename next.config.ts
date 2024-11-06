import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/login',
        permanent: false, // Set to true if this should always redirect
      },
    ];
  }
};

export default nextConfig;
