/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    walletConnectProjectId: "500baad82f2812145feb7e023ea0c32c",
  },
  webpack: (config, context) => {
    if (config.plugins) {
      config.plugins.push(
        new context.webpack.IgnorePlugin({
          resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
