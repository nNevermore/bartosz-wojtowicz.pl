import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  webpack: (config) => {
    const polyfillPathWin = path.resolve(__dirname, 'node_modules/next/dist/build/polyfills/polyfill-module.js');
    const polyfillPathPosix = polyfillPathWin.replace(/\\/g, '/');
    const emptyPolyfill = path.resolve(__dirname, 'src/empty-polyfill.js');

    config.resolve.alias[polyfillPathWin] = emptyPolyfill;
    config.resolve.alias[polyfillPathPosix] = emptyPolyfill;
    config.resolve.alias['next/dist/build/polyfills/polyfill-module'] = emptyPolyfill;
    config.resolve.alias['../build/polyfills/polyfill-module'] = emptyPolyfill;
    return config;
  },
  turbopack: {
    resolveAlias: {
      'next/dist/build/polyfills/polyfill-module': './src/empty-polyfill.js',
      '../build/polyfills/polyfill-module': './src/empty-polyfill.js',
      [path.resolve(__dirname, 'node_modules/next/dist/build/polyfills/polyfill-module.js')]: './src/empty-polyfill.js',
      [path.resolve(__dirname, 'node_modules/next/dist/build/polyfills/polyfill-module.js').replace(/\\/g, '/')]: './src/empty-polyfill.js',
    },
  },
};

export default nextConfig;
