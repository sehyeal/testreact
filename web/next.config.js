// next.config.js
module.exports = {
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
     config.resolve.symlinks = false;
     return config;
   },
   eslint: {
     ignoreDuringBuilds: true,
   },
 };
 