module.exports = {
  presets: [ 'module:@react-native/babel-preset' ],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env'
      }
    ],
    ['react-native-reanimated/plugin']



    // Reanimated
  ]
};




// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
//   plugins: ['react-native-reanimated/plugin'],
// };
