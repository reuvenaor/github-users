const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withImages, {
    fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  }],
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
