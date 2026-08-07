import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },

  basePath: '/ForteSystem',
  assetPrefix: '/ForteSystem/',
};

export default nextConfig;
