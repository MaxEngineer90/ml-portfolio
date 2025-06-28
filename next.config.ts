import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Don't resolve some node modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        net: false,
        tls: false,
        dns: false,
        fs: false,
        util: false,
        http2: false,
        zlib: false,
        perf_hooks: false,
      };
    }

    // This plugin strips 'node:' prefixes from imports, allowing webpack's
    // fallbacks to handle them correctly. This is needed for libraries like
    // Genkit that use Node.js-specific modules.
    if (webpack) {
        config.plugins.push(
          new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
            resource.request = resource.request.replace(/^node:/, '');
          })
        );
    }

    return config;
  },
};

export default nextConfig;
