const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [withImages],
  [withOptimizedImages, {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config
    }
  }],
]);