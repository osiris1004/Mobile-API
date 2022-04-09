 module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],

    // use for configuring .env 
    "plugins": [
      ["module:react-native-dotenv", {
        
        "moduleName": "@env",
        "path": ".env",
     
      }]
    ]
  };
};
