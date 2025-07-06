import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_INTERNAL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_INTERNAL_ACCESS_TOKEN,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

export default nextConfig;
