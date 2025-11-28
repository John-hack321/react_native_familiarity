const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  const { resolver: { sourceExts, assetExts } } = config;

  return withNativeWind(config, { 
    input: './app/globals.css',
    configPath: 'tailwind.config.js'
  });
})();