const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  stream: require.resolve("stream-browserify"),
};

config.resolver.nodeModulesPaths = [
  require("path").resolve(process.cwd(), "node_modules"),
];

module.exports = config;
