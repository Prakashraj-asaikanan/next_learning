var customConfig = require('./webpack.custom.js');
const nextConfig = {
  webpack: (config) => {
    // Add your custom webpack config here

    config = customConfig(config, true);

    return config;
  },
};

module.exports = nextConfig;
