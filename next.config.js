const customConfig = require('./webpack.custom.js');

// Detect build environment
const env = process.env.NODE_ENV;
const isDev = env !== 'production';

const nextConfig = {
  webpack: (config) => {
    // Add your custom webpack config here

    config = customConfig(config, isDev);

    return config;
  },
};

module.exports = nextConfig;
