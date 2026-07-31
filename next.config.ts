import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
  },

  basePath: '/ForteSystem',
  assetPrefix: '/ForteSystem/',
};

export default nextConfig;
